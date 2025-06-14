import { useCallback, useEffect, useMemo, useState } from "react";
import { TemplateCard } from "@entities/TemplateCard";
import { CatalogContainer, CardsRow, CatalogTitle } from "./CatalogPage.style";
import { CatalogService } from "@app/api/CatalogService";
import { TemplateCardProps } from "@entities/TemplateCard/types";
import { usePagination } from "./hooks/usePagination";
import { PageLoader } from "@shared/ui/PageLoader";
import { Pagination } from "@shared/ui/Pagination";

const PAGE_SIZE = 10;

const CatalogPage = () => {
  const { page, nextPage, prevPage } = usePagination(1);
  const [templates, setTemplates] = useState<TemplateCardProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadTemplates = useCallback(async (page: number) => {
    setLoading(true);
    const data = await CatalogService.getTemplates(page, PAGE_SIZE);
    setTemplates(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadTemplates(page);
  }, [page, loadTemplates]);

  const cards = useMemo(
    () => templates.map((tpl, idx) => <TemplateCard key={idx} {...tpl} />),
    [templates]
  );

  return (
    <CatalogContainer>
      <CatalogTitle>Каталог</CatalogTitle>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <CardsRow>{cards}</CardsRow>
          <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </>
      )}
    </CatalogContainer>
  );
};

export default CatalogPage;
