import React, { useEffect, useState } from "react";
import { useCart } from "@app/providers/CartProvider";
import { CatalogService, BotDetails } from "@app/api/CatalogService";
import { PageLoader } from "@shared/ui/PageLoader";
import { TextField } from "@shared/ui/TextField/TextField";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import CartProductCard from "@shared/ui/CartProductCard/CartProductCard";
import { Text } from "@shared/ui/Text/Text";
import { Title } from "@shared/ui/Title/Title";
import {
  PaymentContainer,
  LeftPanel,
  RightPanel,
  PaymentSection,
  PaymentMethodGrid,
  PaymentMethodButton,
  Separator,
  CardForm,
  CardRow,
  CardField,
  ExpiryDateWrapper,
  MonthField,
  YearField,
  RememberDetailsContainer,
  ToggleSwitch,
  CompleteOrderButtonWrapper,
  OrderSummaryContainer,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  TotalRow,
  EditButtonContainer,
  CartItemsContainer,
} from "./PaymentStep.style";

interface PaymentStepProps {
  onPrevStep: () => void;
}

const PaymentStep = ({ onPrevStep }: PaymentStepProps) => {
  const { items, totalPrice, totalDiscount, totalOldPrice, removeFromCart } =
    useCart();
  const [cartItems, setCartItems] = useState<
    (BotDetails & { quantity: number })[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    rememberDetails: false,
  });

  useEffect(() => {
    const loadCartItems = async () => {
      setLoading(true);
      try {
        const itemsData = await Promise.all(
          items.map(async (item) => {
            const botDetails = await CatalogService.getBotById(item.bot.id);
            return { ...botDetails, quantity: item.quantity };
          })
        );
        setCartItems(itemsData);
      } catch (error) {
        console.error("Error loading cart items:", error);
      }
      setLoading(false);
    };

    loadCartItems();
  }, [items]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (loading) return <PageLoader />;

  return (
    <PaymentContainer>
      <LeftPanel>
        <Title as="h2" dimension="l" weight="medium" color="white">
          Быстрая оплата
        </Title>
        <PaymentSection>
          <PaymentMethodGrid>
            <PaymentMethodButton onClick={() => console.log("SBP clicked")}>
              СБП
            </PaymentMethodButton>
            <PaymentMethodButton
              onClick={() => console.log("Apple Pay clicked")}
            >
              Apple Pay
            </PaymentMethodButton>
            <PaymentMethodButton onClick={() => console.log("Dolami clicked")}>
              Долями
            </PaymentMethodButton>
            <PaymentMethodButton onClick={() => console.log("PayPal clicked")}>
              PayPal
            </PaymentMethodButton>
          </PaymentMethodGrid>
        </PaymentSection>

        <Separator>
          <Text dimension="l" color="secondary">
            или
          </Text>
        </Separator>

        <Title as="h2" dimension="l" weight="medium" color="white">
          Оплата картой
        </Title>
        <PaymentSection>
          <CardForm>
            <CardField>
              <TextField
                mode="dark"
                label="Пример: 1234 1234 1234 1234"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handleChange}
                placeholder="Номер карты"
              />
            </CardField>
            <CardField>
              <TextField
                mode="dark"
                label="Имя на карте"
                name="cardName"
                value={cardData.cardName}
                onChange={handleChange}
                placeholder="Имя на карте"
              />
            </CardField>
            <CardRow>
              <ExpiryDateWrapper>
                <MonthField>
                  <TextField
                    mode="dark"
                    label="Месяц"
                    name="expiryMonth"
                    value={cardData.expiryMonth}
                    onChange={handleChange}
                    placeholder="..."
                  />
                </MonthField>
                <YearField>
                  <TextField
                    mode="dark"
                    label="Год"
                    name="expiryYear"
                    value={cardData.expiryYear}
                    onChange={handleChange}
                    placeholder="..."
                  />
                </YearField>
              </ExpiryDateWrapper>
              <CardField>
                <TextField
                  mode="dark"
                  label="CVC"
                  name="cvc"
                  value={cardData.cvc}
                  onChange={handleChange}
                  placeholder="CVC"
                />
              </CardField>
            </CardRow>
          </CardForm>

          <RememberDetailsContainer>
            <ToggleSwitch>
              <input
                type="checkbox"
                name="rememberDetails"
                checked={cardData.rememberDetails}
                onChange={handleChange}
              />
              <span className="slider round"></span>
            </ToggleSwitch>
            <Text dimension="m">
              Запомнить данные для дальнейшего использования
            </Text>
          </RememberDetailsContainer>
        </PaymentSection>
      </LeftPanel>

      <RightPanel>
        <EditButtonContainer>
          <Button
            label="Редактировать"
            appearence={ButtonAppearence.GHOST}
            dimension="m"
            onClick={onPrevStep}
          />
        </EditButtonContainer>
        <Title as="h2" dimension="l" weight="medium" color="white">
          {items.length} товара
        </Title>
        <CartItemsContainer>
          {cartItems.map((item) => (
            <CartProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              integrations={item.integrations}
              quantity={item.quantity}
              onQuantityChange={() => {}}
              onRemoveItem={() => removeFromCart(item.id)}
              isEditable={false}
            />
          ))}
        </CartItemsContainer>
        <OrderSummaryContainer>
          <SummaryRow>
            <SummaryLabel>
              <Text dimension="l" color="secondary">
                стоимость
              </Text>
            </SummaryLabel>
            <SummaryValue>
              <Text dimension="l" weight="medium" color="white">
                {totalOldPrice?.toLocaleString()} ₽
              </Text>
            </SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>
              <Text dimension="l" color="secondary">
                скидка
              </Text>
            </SummaryLabel>
            <SummaryValue>
              <Text dimension="l" weight="medium" color="white">
                - {totalDiscount?.toLocaleString()} ₽
              </Text>
            </SummaryValue>
          </SummaryRow>
          <TotalRow>
            <SummaryLabel>
              <Text dimension="xl" weight="semibold" color="white">
                итого
              </Text>
            </SummaryLabel>
            <SummaryValue>
              <Text dimension="xl" weight="semibold" color="white">
                {totalPrice.toLocaleString()} ₽
              </Text>
            </SummaryValue>
          </TotalRow>
        </OrderSummaryContainer>
        <CompleteOrderButtonWrapper>
          <Button
            label="Завершить покупку"
            appearence={ButtonAppearence.PRIMARY}
            dimension="l"
            onClick={() => console.log("Order completed!")}
          />
        </CompleteOrderButtonWrapper>
      </RightPanel>
    </PaymentContainer>
  );
};

export default PaymentStep;
