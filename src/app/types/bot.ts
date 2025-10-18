export interface Bot {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  createdAt: Date;
  isActive: boolean;
}

export interface BotAnalytics {
  botId: string;
  totalEarnings: number;
  dailyEarnings: number;
  dailySales: number;
  lastUpdated: Date;
}
