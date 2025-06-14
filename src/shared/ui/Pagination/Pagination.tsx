import React from "react";
import {
  PaginationContainer,
  PaginationButton,
  PageNumber,
} from "./Pagination.style";

interface PaginationProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  nextPage,
  prevPage,
  hasNext = true,
  hasPrev = true,
}) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={prevPage} disabled={!hasPrev || page === 1}>
        Назад
      </PaginationButton>
      <PageNumber>Страница {page}</PageNumber>
      <PaginationButton onClick={nextPage} disabled={!hasNext}>
        Вперёд
      </PaginationButton>
    </PaginationContainer>
  );
};
