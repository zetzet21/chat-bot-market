import styled from "styled-components";

export const PageWrapper = styled.div<{ backgroundColor?: string }>`
  min-height: 100vh;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;
