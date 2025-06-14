import { theme } from "@app/styles/theme";
import { ButtonAppearence, IButton } from "./button.types";
import styled, { css } from "styled-components";
import { Dimension } from "@shared/types";

// Функция для вычисления стилей на основе типа кнопки
const getButtonStyles = (appearence: ButtonAppearence, disabled: boolean) => {
  switch (appearence) {
    case ButtonAppearence.GHOST:
      return css`
        background: transparent;
        border: none;
        color: ${disabled
          ? theme.colors.ghost_disable
          : theme.colors.ghost_enable};

        &:hover:not(:disabled) {
          color: ${theme.colors.ghost_disable};
        }
      `;

    case ButtonAppearence.SECONDARY:
      return css`
        background: ${disabled
          ? theme.colors.secondary_disable
          : theme.colors.secondary_enable};
        color: ${theme.colors.white};
        border: 1px solid
          ${disabled
            ? theme.colors.secondary_disable_border
            : theme.colors.secondary_enable_border};

        &:hover:not(:disabled) {
          color: ${theme.colors.ghost_disable};
          background: ${theme.colors.secondary_hover};
        }
      `;

    case ButtonAppearence.ROUND:
      return css`
        border-radius: 50%;
        aspect-ratio: 1/1;
        background: ${disabled
          ? theme.colors.button_disable
          : theme.colors.button_enable};
        color: ${theme.colors.white};
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover:not(:disabled) {
          background: ${theme.colors.button_hover};
        }
      `;

    case ButtonAppearence.PRIMARY:
    default:
      return css`
        background: ${disabled
          ? theme.colors.button_disable
          : theme.colors.button_enable};
        color: ${theme.colors.white};
        border: none;

        &:hover:not(:disabled) {
          background: ${theme.colors.button_hover};
        }
      `;
  }
};

// Функция для стилей размеров
const getSizeStyles = (dimension: Dimension) => {
  switch (dimension) {
    case "s":
      return css`
        padding: 4px 8px;
        font-size: 12px;
        max-height: 28px;
      `;
    case "m":
      return css`
        padding: 8px 16px;
        font-size: 14px;
        max-height: 36px;
      `;
    case "l":
      return css`
        padding: 12px 24px;
        font-size: 16px;
        max-height: 44px;
      `;
    case "xl":
      return css`
        padding: 16px 32px;
        font-size: 18px;
        max-height: 52px;
      `;
    default:
      return css`
        padding: 12px 24px;
        font-size: 16px;
        max-height: 44px;
      `;
  }
};

// Контейнер кнопки
const ButtonContainer = styled.button<{
  appearence: ButtonAppearence;
  disabled: boolean;
  dimension: Dimension;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all 0.2s ease;
  font-weight: 500;
  gap: 8px;
  outline: none;

  ${({ dimension }) => getSizeStyles(dimension)}
  ${({ appearence, disabled }) => getButtonStyles(appearence, disabled)}

  &:focus-visible {
    box-shadow: 0 0 0 3px ${theme.colors.focus};
  }

  // Стиль для иконок внутри кнопки
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`;

export const Button: React.FC<IButton> = ({
  label,
  disabled = false,
  dimension = "l",
  appearence = ButtonAppearence.PRIMARY,
  frontIcon,
  backIcon,
  onClick,
}) => {
  // Для круглой кнопки скрываем текст, если есть иконка
  const isRound = appearence === ButtonAppearence.ROUND;
  const showLabel = !isRound || !(frontIcon || backIcon);

  return (
    <ButtonContainer
      onClick={onClick}
      dimension={dimension}
      appearence={appearence}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
      aria-label={isRound && !showLabel ? label : undefined}
    >
      {frontIcon && <span>{frontIcon}</span>}
      {showLabel && label}
      {backIcon && <span>{backIcon}</span>}
    </ButtonContainer>
  );
};
