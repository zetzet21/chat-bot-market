import { TemplateCardProps } from "@entities/TemplateCard/types";

export interface BotDetails {
  id: string;
  title: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  description: string;
  features: string;
  integrations: string[];
  advantages: string;
  tech: string;
  usage: string;
  createdAt: Date;
  isActive: boolean;
  ownerId: string; // ID пользователя, который создал бота
}

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock database for bots
const mockBots: BotDetails[] = [];

export class CatalogService {
  static async getTemplates(
    page: number = 1,
    pageSize: number = 10
  ): Promise<TemplateCardProps[]> {
    await delay(500);

    // Преобразуем все активные боты из mockBots в TemplateCardProps
    const activeBots = mockBots.filter((bot) => bot.isActive);

    // Применяем пагинацию
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedBots = activeBots.slice(startIndex, endIndex);

    // Преобразуем BotDetails в TemplateCardProps
    return paginatedBots.map((bot) => ({
      id: bot.id,
      image: bot.image,
      title: bot.title,
      integrations: bot.integrations,
    }));
  }

  static async getBotById(id: string): Promise<BotDetails> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const bot = mockBots.find((b) => b.id === id);
        if (bot) {
          resolve(bot);
        }
      }, 500);
    });
  }

  static async createBot(
    botData: Omit<
      BotDetails,
      "id" | "createdAt" | "rating" | "image" | "advantages" | "tech"
    > & {
      image?: string;
      advantages?: string;
      tech?: string;
      rating?: number;
    }
  ): Promise<BotDetails> {
    await delay(1000);

    const newBot: BotDetails = {
      id: String(Date.now()),
      title: botData.title || botData.name,
      name: botData.name,
      image:
        botData.image ||
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      price: botData.price || 0,
      oldPrice: botData.oldPrice,
      rating: botData.rating || 0,
      description: botData.description || "",
      features: botData.features || "",
      integrations: botData.integrations || [],
      advantages: botData.advantages || "",
      tech: botData.tech || "",
      usage: botData.usage || "",
      createdAt: new Date(),
      isActive: botData.isActive ?? true,
      ownerId: botData.ownerId,
    };

    mockBots.push(newBot);
    return newBot;
  }

  static async getBotsByOwnerId(ownerId: string): Promise<BotDetails[]> {
    await delay(500);
    return mockBots.filter((bot) => bot.ownerId === ownerId);
  }
}
