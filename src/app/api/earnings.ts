import { getCookie } from "@shared/utils/cookie";
import { ordersApi } from "./orders";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface SellerEarnings {
  totalEarnings: number;
  totalSales: number;
  earningsByBot: {
    botId: string;
    botName: string;
    earnings: number;
    sales: number;
  }[];
}

export const earningsApi = {
  getSellerEarnings: async (sellerId: string): Promise<SellerEarnings> => {
    await delay(500);
    const token = getCookie("token");
    if (!token) {
      throw new Error("Unauthorized");
    }

    // Получаем все заказы продавца
    const orders = await ordersApi.getOrdersBySellerId(sellerId);

    // Фильтруем только завершенные заказы
    const completedOrders = orders.filter(
      (order) => order.status === "completed"
    );

    // Подсчитываем общий заработок и количество продаж
    let totalEarnings = 0;
    let totalSales = 0;
    const earningsByBotMap = new Map<
      string,
      { botName: string; earnings: number; sales: number }
    >();

    completedOrders.forEach((order) => {
      order.items.forEach((item) => {
        if (item.bot.ownerId === sellerId) {
          const earnings = item.price * item.quantity;
          totalEarnings += earnings;
          totalSales += item.quantity;

          const existing = earningsByBotMap.get(item.bot.id);
          if (existing) {
            existing.earnings += earnings;
            existing.sales += item.quantity;
          } else {
            earningsByBotMap.set(item.bot.id, {
              botName: item.bot.name,
              earnings,
              sales: item.quantity,
            });
          }
        }
      });
    });

    const earningsByBot = Array.from(earningsByBotMap.entries()).map(
      ([botId, data]) => ({
        botId,
        ...data,
      })
    );

    return {
      totalEarnings,
      totalSales,
      earningsByBot,
    };
  },
};
