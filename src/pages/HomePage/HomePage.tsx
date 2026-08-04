import React from "react";

const HomePage = React.memo(function HomePage() {
  return (
    <div
      style={{
        margin: "40px auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px #0001",
      }}
    >
      <h1>Главная страница</h1>
      <p>Добро пожаловать в чат-бот маркет!</p>
    </div>
  );
});

export default HomePage;
