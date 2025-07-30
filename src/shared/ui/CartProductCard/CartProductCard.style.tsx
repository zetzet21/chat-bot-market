import styled from "styled-components";
import { QuantityButton } from "@features/cart-summary/CartSummary.style"; // Re-using existing button styles
import { Text } from "@shared/ui/Text/Text";

export const CartItemCard = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.GrayLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.Black};
`;

export const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
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

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const OldPriceText = styled(Text)`
  text-decoration: line-through;
`;

export const IntegrationsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CartQuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.GrayLight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.GrayLight};
  }
`;

export const QuantityButtonWrapper = styled.div`
  margin-left: auto;
`;
