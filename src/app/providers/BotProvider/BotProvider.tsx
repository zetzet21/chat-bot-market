import React, { createContext, useContext, useState, ReactNode } from "react";
import { Bot, BotAnalytics } from "@app/types/bot";

interface BotContextType {
  bots: Bot[];
  addBot: (bot: Omit<Bot, "id" | "createdAt">) => void;
  removeBot: (botId: string) => void;
  getBotAnalytics: (botId: string) => BotAnalytics | null;
}

const BotContext = createContext<BotContextType | undefined>(undefined);

export const BotProvider = ({ children }: { children: ReactNode }) => {
  const [bots, setBots] = useState<Bot[]>([
    {
      id: "bot-1",
      name: "Sales Bot",
      description: "A bot to help with sales inquiries and lead generation.",
      isActive: true,
      createdAt: new Date("2023-01-15T10:00:00Z"),
    },
    {
      id: "bot-2",
      name: "Support Bot",
      description: "Provides 24/7 customer support and answers FAQs.",
      isActive: false,
      createdAt: new Date("2023-02-20T11:30:00Z"),
    },
    {
      id: "bot-3",
      name: "Marketing Bot",
      description: "Automates social media posting and campaign management.",
      isActive: true,
      createdAt: new Date("2023-03-01T14:00:00Z"),
    },
  ]);

  const addBot = (botData: Omit<Bot, "id" | "createdAt">) => {
    const newBot: Bot = {
      ...botData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setBots((prev) => [...prev, newBot]);
  };

  const removeBot = (botId: string) => {
    setBots((prev) => prev.filter((bot) => bot.id !== botId));
  };

  const getBotAnalytics = (botId: string): BotAnalytics | null => {
    // Mock данные для аналитики
    const mockAnalytics: BotAnalytics = {
      botId,
      totalEarnings: Math.floor(Math.random() * 10000) + 1000,
      dailyEarnings: Math.floor(Math.random() * 1000) + 100,
      dailySales: Math.floor(Math.random() * 50) + 5,
      lastUpdated: new Date(),
    };
    return mockAnalytics;
  };

  return (
    <BotContext.Provider
      value={{
        bots,
        addBot,
        removeBot,
        getBotAnalytics,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};

export const useBot = () => {
  const ctx = useContext(BotContext);
  if (!ctx) throw new Error("useBot must be used within BotProvider");
  return ctx;
};
