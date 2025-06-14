import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
`;
