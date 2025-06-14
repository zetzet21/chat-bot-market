import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle,
  IntegrationsRow,
} from "./TemplateCard.style";
import { TemplateCardProps } from "./types";
import { icons } from "@shared/icons";
import { useNavigate } from "react-router-dom";

export const TemplateCard: React.FC<TemplateCardProps> = ({
  id,
  image,
  title,
  integrations,
}) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/catalog/${id}`);

  return (
    <Card onClick={handleClick} tabIndex={0}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>Интегрирован для</CardSubtitle>
        <IntegrationsRow>
          {integrations.map((key) => (
            <span key={key}>{icons[key]}</span>
          ))}
        </IntegrationsRow>
      </CardContent>
    </Card>
  );
};
