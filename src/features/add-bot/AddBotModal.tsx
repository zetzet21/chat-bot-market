import React, { useState } from "react";
import { useBot } from "@app/providers/BotProvider";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { TextField } from "@shared/ui/TextField/TextField";
import { Text } from "@shared/ui/Text/Text";
import { Title } from "@shared/ui/Title/Title";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from "./AddBotModal.styled";

interface AddBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddBotModal: React.FC<AddBotModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addBot } = useBot();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    try {
      addBot({
        name: name.trim(),
        description: description.trim(),
        isActive: true,
      });
      setName("");
      setDescription("");
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <ModalHeader>
          <Title as="h2" dimension="l" weight="semibold">
            Добавить бота
          </Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <ModalBody>
            <TextField
              label="Название бота"
              placeholder="Введите название бота"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
            <TextField
              label="Описание"
              placeholder="Краткое описание бота"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isLoading}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              label="Отмена"
              appearence={ButtonAppearence.GHOST}
              dimension="m"
              onClick={onClose}
              disabled={isLoading}
            />
            <Button
              label="Добавить"
              appearence={ButtonAppearence.PRIMARY}
              dimension="m"
              onClick={handleSubmit}
              disabled={isLoading || !name.trim()}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
