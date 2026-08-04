import React from "react";
import { FASIE_LINK, FASIE_PAGE_PATH } from "@shared/constants/fasie";
import {
  ExternalFundLink,
  ExternalLinkButton,
  InternalFundLink,
  ProminentNotice,
  ProminentNoticeBox,
} from "./FasieSupportNotice.styled";

type FasieSupportNoticeProps = {
  variant?: "header" | "page";
};

const fundLinkText = "«Фонда содействия инновациям»";

const supportTextTail =
  ' в рамках программы "Студенческий стартап" федерального проекта «Платформа университетского технологического предпринимательства»';

export const FasieSupportNotice: React.FC<FasieSupportNoticeProps> = ({
  variant = "header",
}) => {
  if (variant === "page") {
    return (
      <ProminentNoticeBox>
        <ProminentNotice>
          Проект выполнен при поддержке{" "}
          <ExternalFundLink
            href={FASIE_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fundLinkText}
          </ExternalFundLink>
          {supportTextTail}
        </ProminentNotice>
        <ExternalLinkButton
          href={FASIE_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти на сайт Фонда содействия инновациям
        </ExternalLinkButton>
      </ProminentNoticeBox>
    );
  }

  return (
    <>
      Проект выполнен при поддержке{" "}
      <InternalFundLink to={FASIE_PAGE_PATH}>{fundLinkText}</InternalFundLink>
      {supportTextTail}
    </>
  );
};
