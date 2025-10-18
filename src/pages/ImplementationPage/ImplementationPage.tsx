import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBot } from "@app/providers/BotProvider";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { AddBotModal } from "@features/add-bot";
import {
  ImplementationContainer,
  ContentWrapper,
  Header,
  AddBotButton,
  BotsList,
  BotCard,
  BotName,
  BotDescription,
  BotStatus,
} from "./ImplementationPage.styled";

const ImplementationPage = React.memo(function ImplementationPage() {
  const { bots } = useBot();
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleBotClick = (botId: string) => {
    navigate(`/implementation/bot/${botId}`);
  };

  return (
    <ImplementationContainer>
      <ContentWrapper>
        <Header>
          <AddBotButton onClick={() => setIsAddModalOpen(true)}>+</AddBotButton>
        </Header>

        {bots.length > 0 && (
          <BotsList>
            {bots.map((bot) => (
              <BotCard key={bot.id} onClick={() => handleBotClick(bot.id)}>
                <BotName>{bot.name}</BotName>
                <BotDescription>{bot.description}</BotDescription>
                <BotStatus isActive={bot.isActive}>
                  {bot.isActive ? "Активен" : "Неактивен"}
                </BotStatus>
              </BotCard>
            ))}
          </BotsList>
        )}

        <AddBotModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      </ContentWrapper>
    </ImplementationContainer>
  );
});

export default ImplementationPage;
