import React, { useState } from "react";
import { useAuth } from "@app/providers/AuthProvider/AuthProvider";
import { Button } from "@shared/ui/Button/Button";
import { ButtonAppearence } from "@shared/ui/Button/button.types";
import { TextField } from "@shared/ui/TextField/TextField";
import {
  PageContainer,
  LeftPanel,
  RightPanel,
  Logo,
  Title,
  Subtitle,
  Form,
  Footer,
  ErrorText,
} from "./AuthPage.styled";

// TODO: заменить на ваш SVG/лого
const LogoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="#2563eb" />
    <path d="M24 12L34 36H14L24 12Z" fill="#fff" />
  </svg>
);

export const AuthPage = React.memo(function AuthPage() {
  const { login, register, isLoading, error } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    if (isRegister) {
      if (password !== repeatPassword) {
        setLocalError("Пароли не совпадают");
        return;
      }
      await register(email, password, name);
    } else {
      await login(email, password);
    }
  };

  return (
    <PageContainer>
      <LeftPanel>
        <Logo>
          <LogoIcon />
        </Logo>
        <Title>Добро пожаловать!</Title>
        {isRegister ? null : (
          <Subtitle>
            Войдите в аккаунт для полного доступа к покупке чат ботов для вашего
            бизнеса
          </Subtitle>
        )}
        <Form onSubmit={handleSubmit}>
          {isRegister && (
            <TextField
              label={undefined}
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              autoFocus
            />
          )}
          <TextField
            label={undefined}
            placeholder="Email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            autoFocus={!isRegister}
          />
          <TextField
            label={undefined}
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          {isRegister && (
            <TextField
              label={undefined}
              placeholder="Повторите пароль"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              disabled={isLoading}
            />
          )}
          {(error || localError) && (
            <ErrorText>{error || localError}</ErrorText>
          )}
          <Button
            label={isRegister ? "Зарегистрироваться" : "Войти"}
            appearence={ButtonAppearence.PRIMARY}
            dimension="l"
            disabled={isLoading}
            onClick={handleSubmit}
          />
        </Form>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button
            label={
              isRegister
                ? "Уже есть аккаунт? Войти"
                : "Нет аккаунта? Зарегистрироваться"
            }
            appearence={ButtonAppearence.GHOST}
            dimension="m"
            onClick={() => setIsRegister((r) => !r)}
            disabled={isLoading}
          />
        </div>
        <Footer>
          Регистрируясь вы принимаете
          <br />
          Политику конфиденциальности
        </Footer>
      </LeftPanel>
      <RightPanel>
        {/* Здесь можно разместить декоративный фон/иллюстрацию */}
        {/* <img src="/decor.png" alt="decor" /> */}
      </RightPanel>
    </PageContainer>
  );
});

export default AuthPage;
