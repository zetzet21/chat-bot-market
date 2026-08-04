import styled from "styled-components";
import { Link } from "react-router-dom";

export const InternalFundLink = styled(Link)`
  color: inherit;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

export const ExternalFundLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: underline;
  background: rgba(37, 99, 235, 0.12);
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.22);
  }
`;

export const ProminentNotice = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.m};
  line-height: 1.6;
  text-align: center;
  max-width: 820px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ProminentNoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.WhiteSolid};
  max-width: 900px;
  width: 100%;
`;

export const ExternalLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.WhiteSolid};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;
