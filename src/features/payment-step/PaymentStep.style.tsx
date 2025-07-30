import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 40px;
  background: #000;
  color: #fff;
`;

export const LeftPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 24px;
  min-width: 400px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const PaymentSection = styled.div`
  margin-bottom: 32px;
`;

export const PaymentMethodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

export const PaymentMethodButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.WhiteSolid};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;

  img {
    max-width: 80px;
    max-height: 40px;
    object-fit: contain;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #fff;
  }
`;

export const Separator = styled.div`
  text-align: center;
  margin: 32px 0;
  color: rgba(255, 255, 255, 0.7);
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

export const CardRow = styled.div`
  display: flex;
  gap: 24px;
`;

export const CardField = styled.div`
  flex: 1;
`;

export const ExpiryDateWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const MonthField = styled.div`
  flex: 1;
`;

export const YearField = styled.div`
  flex: 1;
`;

export const RememberDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.4s;
    border-radius: 24px;

    &::before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #4caf50; // Green color for active state
  }

  input:focus + span {
    box-shadow: 0 0 1px #4caf50;
  }

  input:checked + span::before {
    transform: translateX(16px);
  }
`;

export const CompleteOrderButtonWrapper = styled.div`
  margin-top: 32px;
`;

export const OrderSummaryContainer = styled.div`
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const SummaryLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
`;

export const SummaryValue = styled.span`
  color: #fff;
  font-weight: 500;
`;

export const TotalRow = styled(SummaryRow)`
  font-size: 22px;
  font-weight: 600;
  margin-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 24px;
`;

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CartItemCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: #000;
`;

export const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: #fff;
`;

export const ItemPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const ItemOldPrice = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  margin-left: 8px;
`;

export const ItemIntegrations = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;
