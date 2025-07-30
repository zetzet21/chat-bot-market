import React from "react";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { icons } from "@shared/icons";
import { Text } from "@shared/ui/Text/Text";
import { Title } from "@shared/ui/Title/Title";
import {
  CartItemCard,
  ItemImage,
  ItemDetails,
  QuantityControls,
  CartQuantityButton,
  QuantityButtonWrapper,
  PriceWrapper,
  OldPriceText,
  IntegrationsWrapper,
} from "./CartProductCard.style";

interface CartProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  integrations: string[];
  quantity: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  isEditable?: boolean; // New prop to control editability
}

const CartProductCard = ({
  id,
  image,
  title,
  price,
  oldPrice,
  integrations,
  quantity,
  onQuantityChange,
  onRemoveItem,
  isEditable = true, // Default to true
}: CartProductCardProps) => {
  return (
    <CartItemCard>
      <ItemImage src={image} alt={title} />
      <ItemDetails>
        <Title as="h3" dimension="m" weight="medium" color="white">
          {title}
        </Title>
        <PriceWrapper>
          <Text dimension="xxl" weight="semibold" color="white">
            {price.toLocaleString()} ₽
          </Text>
          {oldPrice && (
            <OldPriceText dimension="l" color="secondary">
              {oldPrice.toLocaleString()} ₽
            </OldPriceText>
          )}
        </PriceWrapper>
        <IntegrationsWrapper color="secondary">
          <Text color="white">Интегрирован для:</Text>
          <Text color="white">
            {integrations.map((key) => (
              <>{icons[key]}</>
            ))}
          </Text>
        </IntegrationsWrapper>
        {isEditable && (
          <QuantityControls>
            <CartQuantityButton
              onClick={() => onQuantityChange(id, quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </CartQuantityButton>
            <Text dimension="l" color="white">
              {quantity}
            </Text>
            <CartQuantityButton
              onClick={() => onQuantityChange(id, quantity + 1)}
            >
              +
            </CartQuantityButton>
          </QuantityControls>
        )}
      </ItemDetails>
      {isEditable && (
        <QuantityButtonWrapper>
          <Button
            label="Удалить"
            appearence={ButtonAppearence.PRIMARY}
            dimension="m"
            onClick={() => onRemoveItem(id)}
          />
        </QuantityButtonWrapper>
      )}
    </CartItemCard>
  );
};

export default CartProductCard;
