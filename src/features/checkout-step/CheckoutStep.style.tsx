import styled from "styled-components";

export const CheckoutContainer = styled.div`
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

export const FormSection = styled.div`
  margin-bottom: 32px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FullWidthField = styled.div`
  flex: 1;
`;

export const HalfWidthField = styled.div`
  flex: 1;
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

export const CheckoutButtonWrapper = styled.div`
  margin-top: 32px;
`;
