import styled from "styled-components";

export const CatalogContainer = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.background || "#eaf0f6"};
  min-height: 100vh;
`;

export const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const CatalogTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 32px;
`;
