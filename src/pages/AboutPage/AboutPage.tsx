import React from "react";
import {
  PageWrapper,
  ContentWrapper,
  TitleWrapper,
} from "@shared/ui/PageWrapper";
import {
  TextContent,
  Paragraph,
  SponsorSection,
  SponsorText,
  SponsorImage,
  SponsorImageLink,
} from "./AboutPage.styled";
import { Title } from "@shared/ui/Title/Title";
import { FasieSupportNotice } from "@shared/ui/FasieSupportNotice";
import { FASIE_PAGE_PATH } from "@shared/constants/fasie";
import { Link } from "react-router-dom";

const AboutPage = React.memo(function AboutPage() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title as="h1" dimension="xxl" color="primary" weight="semibold">
            О нас
          </Title>
        </TitleWrapper>
        <TextContent>
          <Paragraph>
            Loquent - это онлайн-платформа, предоставляющая доступ к широкому
            выбору готовых шаблонов чат-ботов, повышающих качество обслуживания
            клиентов, разработанных для различных отраслей бизнеса, с
            возможностью создания чат-ботов под индивидуальные требования
            заказчика.
          </Paragraph>
        </TextContent>
        <SponsorSection>
          <SponsorText>
            <FasieSupportNotice variant="header" />
          </SponsorText>
          <SponsorImageLink to={FASIE_PAGE_PATH}>
            <SponsorImage
              src="/foundation.svg"
              alt="Фонд содействия инновациям"
            />
          </SponsorImageLink>
        </SponsorSection>
      </ContentWrapper>
    </PageWrapper>
  );
});

export default AboutPage;
