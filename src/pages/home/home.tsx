import React from "react";
import { Page, Button } from "framework7-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

const HomePage = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Page name="home">
      this is home
      <div>
        <LanguageSwitcher />
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>
    </Page>
  );
};

export default HomePage;
