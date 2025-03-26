import { Button } from "framework7-react";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={() => changeLanguage("en")} className="px-4 py-2 border">
        🇬🇧 English
      </Button>
      <Button onClick={() => changeLanguage("tl")} className="px-4 py-2 border">
        🇵🇭 Tagalog
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
