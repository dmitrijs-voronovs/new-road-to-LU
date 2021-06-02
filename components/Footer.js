import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="text-center bg-p5 bg-opacity-20 p-5 py-8">
      <p className="md:max-w-screen-sm md:mx-auto">{t("author")}</p>
    </footer>
  );
};
