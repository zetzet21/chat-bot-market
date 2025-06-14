import { useCallback, useState } from "react";

export function usePagination(initialPage: number = 1) {
  const [page, setPage] = useState(initialPage);

  const nextPage = useCallback(() => setPage((p) => p + 1), []);
  const prevPage = useCallback(() => setPage((p) => Math.max(1, p - 1)), []);
  const resetPage = useCallback(() => setPage(initialPage), [initialPage]);

  return { page, setPage, nextPage, prevPage, resetPage };
}
