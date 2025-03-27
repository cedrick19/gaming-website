import React from "react";
import { Page } from "framework7-react";
import { useTranslation } from "react-i18next";

const Fishing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div>
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>
    </Page>
  );
};

export default Fishing;
