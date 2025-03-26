import React from "react";
import { Page, Navbar } from "framework7-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

const Fishing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Navbar title="This is Fish" />

      <div>
        <LanguageSwitcher />
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>
    </Page>
  );
};

export default Fishing;
