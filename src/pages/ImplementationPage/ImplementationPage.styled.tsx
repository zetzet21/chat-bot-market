import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const AddBotButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.WhiteSolid};
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.m};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.Gray20};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.Gray20};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BotsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const BotCard = styled.div`
  background-color: ${({ theme }) => theme.colors.WhiteSolid};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.Gray20};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.Gray20};
  }
`;

export const BotName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.m};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const BotDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  color: ${({ theme }) => theme.colors.GrayDark};
  margin: 0;
  line-height: 1.4;
`;

export const BotStatus = styled.span<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  font-weight: 500;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.GrayDark};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.focus : theme.colors.GrayLight};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  align-self: flex-start;
`;
