import { TemplateCardProps } from "@entities/TemplateCard/types";

export interface BotDetails {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  description: string;
  features: string;
  integrations: string;
  advantages: string;
  tech: string;
  usage: string;
}

export class CatalogService {
  static async getTemplates(
    page: number = 1,
    pageSize: number = 10
  ): Promise<TemplateCardProps[]> {
    // Мок-данные
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            title: "Чат-бот для консультаций в сфере туризма и путешествий",
            integrations: ["vk", "telegram", "instagram", "youtube"],
          },
          {
            id: "2",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            title: "Чат-бот для консультаций в сфере туризма и путешествий",
            integrations: ["vk", "telegram", "instagram", "youtube"],
          },
          {
            id: "3",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            title: "Чат-бот для консультаций в сфере туризма и путешествий",
            integrations: ["vk", "telegram", "youtube"],
          },
          {
            id: "4",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            title: "Чат-бот для консультаций в сфере туризма и путешествий",
            integrations: ["vk", "telegram", "instagram", "youtube"],
          },
          {
            id: "5",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            title: "Чат-бот для консультаций в сфере туризма и путешествий",
            integrations: ["vk", "telegram", "instagram", "youtube"],
          },
        ]);
      }, 500);
    });
  }

  static async getBotById(id: string): Promise<BotDetails> {
    // Мок-данные для одного бота
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          title: "Чат-бот для консультаций в сфере туризма",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          price: 11000,
          oldPrice: 15000,
          rating: 4.8,
          description:
            "Автоматизация процесса сбора контактной информации и первичных консультаций с клиентами.",
          features:
            "Запрос контактных данных, сбор информации о потребностях клиентов, предложение услуг.",
          integrations:
            "CRM-системы, инструменты для рассылок (например, Mailchimp), мессенджеры (Telegram, WhatsApp).",
          advantages:
            "Увеличение конверсии, сокращение времени на сбор информации, повышение качества обработки лидов.",
          tech: "Лёгкость в настройке, интеграция с маркетинговыми инструментами, возможность автоматической отправки уведомлений.",
          usage: "Агентства, стартапы, компании, занимающиеся онлайн-рекламой.",
        });
      }, 500);
    });
  }
}
