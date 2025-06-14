import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.gray100};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const PageLoader = ({ text = "Загрузка..." }: { text?: string }) => (
  <LoaderContainer>
    <div style={{ textAlign: "center" }}>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </div>
  </LoaderContainer>
);
