export interface Bot {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  createdAt: Date;
  isActive: boolean;
  price: number;
  oldPrice?: number;
  ownerId: string; // ID пользователя, который создал бота
  features: string; // Функции бота
  integrations: string[]; // Интеграции (vk, telegram, instagram, youtube, crm, mailchimp, whatsapp)
  usage: string; // Категории применения
}

export interface BotAnalytics {
  botId: string;
  totalEarnings: number;
  dailyEarnings: number;
  dailySales: number;
  lastUpdated: Date;
}
