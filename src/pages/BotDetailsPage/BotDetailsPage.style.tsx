import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 24px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 32px;
`;

export const ImageBlock = styled.div`
  flex: 1 1 60%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  object-fit: cover;
`;

export const PriceBlock = styled.div`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const OldPrice = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.Gray20};
  text-decoration: line-through;
`;

export const BuyButton = styled.button`
  background: ${({ theme }) => theme.colors.button_enable};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.button_hover};
  }
`;

export const RatingBlock = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.GrayDark};
  font-size: 18px;
  gap: 4px;
`;

export const DetailsGrid = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 32px;
`;

export const DetailsCol = styled.div`
  flex: 1 1 33%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const DetailsLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.Gray38};
  font-weight: 500;
`;

export const DetailsValue = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;
