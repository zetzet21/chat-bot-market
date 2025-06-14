import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Crumbs = styled.nav`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.Gray38};
  margin-bottom: 18px;
`;

const CrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.Gray38};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({
  items,
}) => {
  return (
    <Crumbs aria-label="breadcrumb">
      {items.map((item, idx) => (
        <span key={idx}>
          {item.to && idx !== items.length - 1 ? (
            <CrumbLink to={item.to}>{item.label}</CrumbLink>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < items.length - 1 && <span> / </span>}
        </span>
      ))}
    </Crumbs>
  );
};
