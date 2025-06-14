import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  width: 250px;
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    box-shadow:
      0 4px 24px 0 ${({ theme }) => theme.colors.primary}33,
      0 2px 8px ${({ theme }) => theme.colors.Gray20};
    outline: none;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.background};
`;

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const CardSubtitle = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 4px;
`;

export const IntegrationsRow = styled.div`
  display: flex;
  gap: 8px;
`;
