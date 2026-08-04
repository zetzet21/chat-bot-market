import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const OrderSummaryContainer = styled.div`
  margin-top: 32px;
  padding-top: 24px;
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

export const EmptyCartContainer = styled.div`
  text-align: center;
  h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }
  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const EmptyCartButtonWrapper = styled.div`
  margin-top: 24px;
`;
