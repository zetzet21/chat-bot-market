import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 700;
  margin: 0;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  line-height: 1.6;
  width: 50%;
  align-items: center;
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

export const SponsorText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  line-height: 1.6;
  text-align: center;
  max-width: 720px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;

  a {
    color: inherit;
    text-decoration: underline;
  }
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
