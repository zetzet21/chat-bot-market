import styled, { keyframes } from "styled-components";
import { NotificationType } from "./Notification";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const NotificationContainer = styled.div<{ type: NotificationType }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: ${({ theme, type }) =>
    type === "success" ? theme.colors.GrayDark : theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease-out forwards;

  &.closing {
    animation: ${slideOut} 0.3s ease-in forwards;
  }
`;

export const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;
