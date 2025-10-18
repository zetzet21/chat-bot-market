import React from "react";
import {
  AboutPageContainer,
  ContentWrapper,
  Title,
  TextContent,
  Paragraph,
  SponsorSection,
  SponsorImage,
  TopSection,
  Link,
} from "./AboutPage.styled";

const AboutPage = React.memo(function AboutPage() {
  return (
    <AboutPageContainer>
      <ContentWrapper>
        <TopSection>
          <Title>О нас</Title>
          <TextContent>
            <Paragraph>
              Loquent - это онлайн-платформа, предоставляющая доступ к широкому
              выбору готовых шаблонов чат-ботов, повышающих качество
              обслуживания клиентов, разработанных для различных отраслей
              бизнеса, с возможностью создания чат-ботов под индивидуальные
              требования заказчика.
            </Paragraph>
            <Paragraph>
              Проект был разработан командой студентов при поддержке Фонда
              содействия инновациям{" "}
              <Link
                href="https://fasie.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://fasie.ru/
              </Link>
            </Paragraph>
          </TextContent>
        </TopSection>

        <SponsorSection>
          <SponsorImage
            src="/foundation.svg"
            alt="Фонд содействия инновациям"
          />
        </SponsorSection>
      </ContentWrapper>
    </AboutPageContainer>
  );
});

export default AboutPage;
