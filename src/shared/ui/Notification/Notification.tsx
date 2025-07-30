import React, { useEffect, useState } from "react";
import { NotificationContainer, NotificationIcon } from "./Notification.style";
import { Text } from "../Text/Text";

export type NotificationType = "success" | "error";

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
  duration?: number;
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <NotificationContainer type={type} className={isClosing ? "closing" : ""}>
      <NotificationIcon />
      <Text dimension="l" weight="medium" color="primary">
        {message}
      </Text>
    </NotificationContainer>
  );
};
