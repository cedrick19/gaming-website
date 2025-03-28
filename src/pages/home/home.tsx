import { Page } from "framework7-react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "@/components/LoginModal";
import MinimalTypescriptCarousel from "./carousel";

const HomePage = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <Page>
      <MinimalTypescriptCarousel />
      <div>
        this is home
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>

      <LoginModal />
    </Page>
  );
};

export default HomePage;
