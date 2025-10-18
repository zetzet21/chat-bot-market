import React, { useState } from "react";
import { CartContent, CartPageContainer } from "./CartPage.style";
import CartSummary from "@features/cart-summary";
import CheckoutStep from "@features/checkout-step";
import PaymentStep from "@features/payment-step";
import { TabBar } from "@features/tab-bar/TabBar";

const STEPS = [
  { id: "cart", label: "Корзина" },
  { id: "checkout", label: "Оформление заказа" },
  { id: "payment", label: "Оплата" },
];

const CartPage = React.memo(() => {
  const [currentStep, setCurrentStep] = useState("cart");

  const handleStepClick = (stepId: string) => {
    setCurrentStep(stepId);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case "cart":
        return <CartSummary onNextStep={() => setCurrentStep("checkout")} />;
      case "checkout":
        return (
          <CheckoutStep
            onNextStep={() => setCurrentStep("payment")}
            onPrevStep={() => setCurrentStep("cart")}
          />
        );
      case "payment":
        return <PaymentStep onPrevStep={() => setCurrentStep("checkout")} />;
      default:
        return <CartSummary onNextStep={() => setCurrentStep("checkout")} />;
    }
  };

  return (
    <CartPageContainer>
      <TabBar
        tabs={STEPS}
        activeTab={currentStep}
        onTabChange={handleStepClick}
        fullWidth
        variant="underline"
        size={"m"}
      />
      <CartContent>{renderStepComponent()}</CartContent>
    </CartPageContainer>
  );
});

export default CartPage;
