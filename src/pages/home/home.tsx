import { Page } from "framework7-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import { LoginModal } from "@/components/LoginModal";

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
      <LoginModal />
    </Page>
  );
};

export default HomePage;
