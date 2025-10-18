import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
  margin-left: ${({ theme }) => theme.spacing.xl};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const SponsorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: 60px;
  width: 100%;
`;

export const RibbonStripe = styled.div<{ color: string }>`
  height: 33.33%;
  background-color: ${(props) => props.color};
  width: 100%;
`;

export const SponsorImage = styled.img`
  height: auto;
  object-fit: contain;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
