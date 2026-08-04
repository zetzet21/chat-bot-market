import styled from "styled-components";

export const SponsorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const SponsorImage = styled.img`
  max-width: 420px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;
