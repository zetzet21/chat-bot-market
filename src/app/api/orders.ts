import { Order } from "@app/types/order";
import { getCookie } from "@shared/utils/cookie";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock orders database
const mockOrders: Order[] = [
  {
    id: "1",
    userId: "1",
    items: [
      {
        bot: {
          id: "1",
          name: "Telegram Bot",
          description: "Test bot",
          price: 1000,
          oldPrice: 1500,
          createdAt: new Date(),
          isActive: true,
          ownerId: "1",
          features:
            "Запрос контактных данных, сбор информации о потребностях клиентов.",
          integrations: ["telegram", "whatsapp"],
          usage: "Агентства, стартапы, компании.",
        },
        quantity: 1,
        price: 1000,
      },
    ],
    totalPrice: 1000,
    totalOldPrice: 1500,
    status: "completed",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
];

export const ordersApi = {
  getOrdersByUserId: async (userId: string): Promise<Order[]> => {
    await delay(500);
    const token = getCookie("token");
    if (!token) {
      throw new Error("Unauthorized");
    }
    return mockOrders.filter((order) => order.userId === userId);
  },

  getOrderById: async (orderId: string): Promise<Order | null> => {
    await delay(500);
    const token = getCookie("token");
    if (!token) {
      throw new Error("Unauthorized");
    }
    return mockOrders.find((order) => order.id === orderId) || null;
  },

  createOrder: async (
    userId: string,
    items: Order["items"],
    totalPrice: number,
    totalOldPrice?: number
  ): Promise<Order> => {
    await delay(1000);
    const token = getCookie("token");
    if (!token) {
      throw new Error("Unauthorized");
    }

    const newOrder: Order = {
      id: String(mockOrders.length + 1),
      userId,
      items,
      totalPrice,
      totalOldPrice,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockOrders.push(newOrder);
    return newOrder;
  },

  completeOrder: async (orderId: string): Promise<Order> => {
    await delay(500);
    const token = getCookie("token");
    if (!token) {
      throw new Error("Unauthorized");
    }

    const order = mockOrders.find((o) => o.id === orderId);
    if (!order) {
      throw new Error("Order not found");
    }

    order.status = "completed";
    order.updatedAt = new Date();
    return order;
  },

  getOrdersBySellerId: async (sellerId: string): Promise<Order[]> => {
    await delay(500);
    const token = getCookie("token");
    if (!token) {
      throw new Error("Unauthorized");
    }

    // Находим заказы, где хотя бы один бот принадлежит продавцу
    return mockOrders.filter((order) =>
      order.items.some((item) => item.bot.ownerId === sellerId)
    );
  },
};
