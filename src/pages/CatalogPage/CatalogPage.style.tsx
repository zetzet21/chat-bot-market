import styled from "styled-components";

export const CatalogContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;
