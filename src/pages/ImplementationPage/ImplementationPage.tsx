import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useBot } from "@app/providers/BotProvider";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { AddBotModal } from "@features/add-bot";
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
} from "./ImplementationPage.styled";
import { Title } from "@shared/ui/Title/Title";

const ImplementationPage = React.memo(function ImplementationPage() {
  const { bots } = useBot();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <PageWrapper>
      <TitleWrapper>
        <Title as="h1" dimension="xxl" color="primary" weight="semibold">
          Внедрение
        </Title>
      </TitleWrapper>
      <ContentWrapper>
        <Header>
          <AddBotButton onClick={() => setIsAddModalOpen(true)}>+</AddBotButton>
        </Header>
        {bots.length > 0 && (
          <BotsList>
            {bots.map((bot) => (
              <Link key={bot.id} to={`${bot.id}`}>
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
          onClose={() => setIsAddModalOpen(false)}
        />
      </ContentWrapper>
    </PageWrapper>
  );
});

export default ImplementationPage;
