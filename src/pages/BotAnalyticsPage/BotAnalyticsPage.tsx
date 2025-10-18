import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBot } from "@app/providers/BotProvider";
import { Text } from "@shared/ui/Text/Text";
import { Title } from "@shared/ui/Title/Title";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import {
  AnalyticsContainer,
  ContentWrapper,
  Header,
  BackButton,
  MetricsGrid,
  MetricCard,
  MetricValue,
  MetricLabel,
  BotInfo,
} from "./BotAnalyticsPage.styled";

export const BotAnalyticsPage: React.FC = () => {
  const { botId } = useParams<{ botId: string }>();
  const navigate = useNavigate();
  const { bots, getBotAnalytics } = useBot();

  const bot = bots.find((b) => b.id === botId);
  const analytics = botId ? getBotAnalytics(botId) : null;

  if (!bot) {
    return (
      <AnalyticsContainer>
        <ContentWrapper>
          <Title>Бот не найден</Title>
          <Button
            label="Вернуться к внедрению"
            appearence={ButtonAppearence.PRIMARY}
            dimension="m"
            onClick={() => navigate("/implementation")}
          />
        </ContentWrapper>
      </AnalyticsContainer>
    );
  }

  return (
    <AnalyticsContainer>
      <ContentWrapper>
        <Header>
          <BackButton onClick={() => navigate("/implementation")}>
            ← Назад к внедрению
          </BackButton>
          <BotInfo>
            <Title as="h1" dimension="xl" weight="semibold">
              {bot.name}
            </Title>
            <Text dimension="m" color="secondary">
              {bot.description}
            </Text>
          </BotInfo>
        </Header>

        <MetricsGrid>
          <MetricCard>
            <MetricValue>
              {analytics?.totalEarnings.toLocaleString() || 0} ₽
            </MetricValue>
            <MetricLabel>Заработано за всё время</MetricLabel>
          </MetricCard>

          <MetricCard>
            <MetricValue>
              {analytics?.dailyEarnings.toLocaleString() || 0} ₽
            </MetricValue>
            <MetricLabel>Заработано за день</MetricLabel>
          </MetricCard>

          <MetricCard>
            <MetricValue>{analytics?.dailySales || 0}</MetricValue>
            <MetricLabel>Продано за день</MetricLabel>
          </MetricCard>
        </MetricsGrid>
      </ContentWrapper>
    </AnalyticsContainer>
  );
};

export default BotAnalyticsPage;
