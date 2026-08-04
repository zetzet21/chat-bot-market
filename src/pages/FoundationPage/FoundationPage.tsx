import React from "react";
import {
  PageWrapper,
  ContentWrapper,
  TitleWrapper,
} from "@shared/ui/PageWrapper";
import { Title } from "@shared/ui/Title/Title";
import { FasieSupportNotice } from "@shared/ui/FasieSupportNotice";
import { SponsorImage, SponsorSection } from "./FoundationPage.styled";

const FoundationPage = React.memo(function FoundationPage() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title as="h1" dimension="xxl" color="primary" weight="semibold">
            Фонд содействия инновациям
          </Title>
        </TitleWrapper>
        <SponsorSection>
          <SponsorImage
            src="/foundation.svg"
            alt="Фонд содействия инновациям"
          />
          <FasieSupportNotice variant="page" />
        </SponsorSection>
      </ContentWrapper>
    </PageWrapper>
  );
});

export default FoundationPage;
