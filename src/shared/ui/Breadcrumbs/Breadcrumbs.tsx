import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from "@shared/ui/Text/Text";

const Crumbs = styled.nav`
  margin-bottom: 18px;
`;

const CrumbLink = styled(Link)`
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
            <CrumbLink to={item.to}>
              <Text dimension="m" color="secondary">
                {item.label}
              </Text>
            </CrumbLink>
          ) : (
            <Text dimension="m" color="secondary">
              {item.label}
            </Text>
          )}
          {idx < items.length - 1 && (
            <Text dimension="m" color="secondary">
              {" "}
              /{" "}
            </Text>
          )}
        </span>
      ))}
    </Crumbs>
  );
};
