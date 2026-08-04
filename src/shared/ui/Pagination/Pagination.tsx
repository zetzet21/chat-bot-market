import React from "react";
import { PaginationContainer, PaginationButton } from "./Pagination.style";
import { Text } from "@shared/ui/Text/Text";

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
      <Text dimension="xl" weight="medium">
        Страница {page}
      </Text>
      <PaginationButton onClick={nextPage} disabled={!hasNext}>
        Вперёд
      </PaginationButton>
    </PaginationContainer>
  );
};
