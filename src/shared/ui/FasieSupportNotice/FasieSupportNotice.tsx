import React from "react";
import { FASIE_LINK } from "@shared/constants/fasie";

type FasieSupportNoticeProps = {
  linkClassName?: string;
};

export const FasieSupportNotice: React.FC<FasieSupportNoticeProps> = ({
  linkClassName,
}) => (
  <>
    Проект выполнен при поддержке{" "}
    <a
      href={FASIE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      «Фонда содействия инновациям»
    </a>{" "}
    в рамках программы &quot;Студенческий стартап&quot; федерального проекта
    «Платформа университетского технологического предпринимательства»
  </>
);
