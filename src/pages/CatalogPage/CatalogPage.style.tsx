import styled from "styled-components";

export const CatalogContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  padding: 0 40px;
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;
