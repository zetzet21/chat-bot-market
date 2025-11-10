import React, { useState, useEffect } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useBot } from "@app/providers/BotProvider";
import { useAuth } from "@app/providers/AuthProvider/AuthProvider";
import { earningsApi, SellerEarnings } from "@app/api/earnings";
import { CatalogService } from "@app/api/CatalogService";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { AddBotModal } from "@features/add-bot";
import { PageLoader } from "@shared/ui/PageLoader";
import { Text } from "@shared/ui/Text/Text";
import {
  PageWrapper,
  ContentWrapper,
  TitleWrapper,
} from "@shared/ui/PageWrapper";
import {
  Header,
  AddBotButton,
  BotsList,
  BotCard,
  BotName,
  BotDescription,
  BotStatus,
  EarningsSection,
  EarningsCard,
  EarningsTitle,
  EarningsValue,
  EarningsStats,
  StatsRow,
  StatsLabel,
  StatsValue,
} from "./ImplementationPage.styled";
import { Title } from "@shared/ui/Title/Title";

const ImplementationPage = React.memo(function ImplementationPage() {
  const { bots } = useBot();
  const { user } = useAuth();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [earnings, setEarnings] = useState<SellerEarnings | null>(null);
  const [loading, setLoading] = useState(true);
  const [userBots, setUserBots] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // Загружаем статистику заработка
        const earningsData = await earningsApi.getSellerEarnings(user.id);
        setEarnings(earningsData);
        // Загружаем боты пользователя из каталога
        const botsFromCatalog = await CatalogService.getBotsByOwnerId(user.id);
        setUserBots(botsFromCatalog);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  if (loading) return <PageLoader />;

  return (
    <PageWrapper>
      <TitleWrapper>
        <Title as="h1" dimension="xxl" color="primary" weight="semibold">
          Внедрение
        </Title>
      </TitleWrapper>
      <ContentWrapper>
        {/* Статистика заработка */}
        {earnings && (
          <EarningsSection>
            <EarningsCard>
              <EarningsTitle>
                <Text dimension="l" weight="semibold" color="white">
                  Общий заработок
                </Text>
              </EarningsTitle>
              <EarningsValue>
                <Text dimension="xxl" weight="bold" color="white">
                  {earnings.totalEarnings.toLocaleString()} ₽
                </Text>
              </EarningsValue>
              <EarningsStats>
                <StatsRow>
                  <StatsLabel>
                    <Text dimension="m" color="secondary">
                      Всего продаж:
                    </Text>
                  </StatsLabel>
                  <StatsValue>
                    <Text dimension="m" weight="medium" color="white">
                      {earnings.totalSales}
                    </Text>
                  </StatsValue>
                </StatsRow>
                {earnings.earningsByBot.length > 0 && (
                  <StatsRow>
                    <StatsLabel>
                      <Text dimension="m" color="secondary">
                        Ботов продано:
                      </Text>
                    </StatsLabel>
                    <StatsValue>
                      <Text dimension="m" weight="medium" color="white">
                        {earnings.earningsByBot.length}
                      </Text>
                    </StatsValue>
                  </StatsRow>
                )}
              </EarningsStats>
            </EarningsCard>
          </EarningsSection>
        )}

        <Header>
          <AddBotButton onClick={() => setIsAddModalOpen(true)}>+</AddBotButton>
        </Header>
        {(bots.length > 0 || userBots.length > 0) && (
          <BotsList>
            {userBots.map((bot) => (
              <Link key={bot.id} to={`/implementation/${bot.id}`}>
                <BotCard>
                  <BotName>{bot.name}</BotName>
                  <BotDescription>{bot.description}</BotDescription>
                  <BotStatus isActive={bot.isActive}>
                    {bot.isActive ? "Активен" : "Неактивен"}
                  </BotStatus>
                  {earnings && (
                    <div style={{ marginTop: "8px" }}>
                      <Text dimension="s" color="secondary">
                        Заработано:{" "}
                        {earnings.earningsByBot
                          .find((e) => e.botId === bot.id)
                          ?.earnings.toLocaleString() || 0}{" "}
                        ₽
                      </Text>
                    </div>
                  )}
                </BotCard>
              </Link>
            ))}
            {bots
              .filter((bot) => !userBots.some((ub) => ub.id === bot.id))
              .map((bot) => (
                <Link key={bot.id} to={`/implementation/${bot.id}`}>
                  <BotCard>
                    <BotName>{bot.name}</BotName>
                    <BotDescription>{bot.description}</BotDescription>
                    <BotStatus isActive={bot.isActive}>
                      {bot.isActive ? "Активен" : "Неактивен"}
                    </BotStatus>
                  </BotCard>
                </Link>
              ))}
          </BotsList>
        )}

        <AddBotModal
          isOpen={isAddModalOpen}
          onClose={async () => {
            setIsAddModalOpen(false);
            // Обновляем данные после добавления бота
            if (user) {
              try {
                const earningsData = await earningsApi.getSellerEarnings(
                  user.id
                );
                setEarnings(earningsData);
                const botsFromCatalog = await CatalogService.getBotsByOwnerId(
                  user.id
                );
                setUserBots(botsFromCatalog);
              } catch (error) {
                console.error("Error refreshing data:", error);
              }
            }
          }}
        />
      </ContentWrapper>
    </PageWrapper>
  );
});

export default ImplementationPage;
