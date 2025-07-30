import React, { useState } from "react";
import {
  CartLayoutContainer,
  CartHeader,
  CartHeaderStep,
  CartContent,
} from "./CartPage.style";
import CartSummary from "@features/cart-summary";
import CheckoutStep from "@features/checkout-step";
import PaymentStep from "@features/payment-step";
import { Text } from "@shared/ui/Text/Text";

const STEPS = [
  { id: 0, label: "Корзина" },
  { id: 1, label: "Оформление заказа" },
  { id: 2, label: "Оплата" },
];

const CartPage = React.memo(() => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <CartSummary onNextStep={() => setCurrentStep(1)} />;
      case 1:
        return (
          <CheckoutStep
            onNextStep={() => setCurrentStep(2)}
            onPrevStep={() => setCurrentStep(0)}
          />
        );
      case 2:
        return <PaymentStep onPrevStep={() => setCurrentStep(1)} />;
      default:
        return <CartSummary onNextStep={() => setCurrentStep(1)} />;
    }
  };

  return (
    <CartLayoutContainer>
      <CartHeader>
        {STEPS.map((step) => (
          <CartHeaderStep
            key={step.id}
            active={currentStep === step.id}
            onClick={() => handleStepClick(step.id)}
          >
            <Text
              dimension="l"
              weight="medium"
              color={currentStep === step.id ? "white" : "secondary"}
            >
              {step.label}
            </Text>
          </CartHeaderStep>
        ))}
      </CartHeader>
      <CartContent>{renderStepComponent()}</CartContent>
    </CartLayoutContainer>
  );
});

export default CartPage;
