import { Button, Popover, List, ListItem } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const languages: Record<string, string> = {
  en: "🇬🇧 English",
  tl: "🇵🇭 Tagalog",
  chs: "中文 (Simplified)",
  cht: "中文 (Traditional)",
};

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const savedLang = localStorage.getItem("i18nextLng") || "en";
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    languages[savedLang] || "🌐 Select Language",
  );

  useEffect(() => {
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n, savedLang]);

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("i18nextLng", lng);
      setCurrentLang(languages[lng]);
    }
    setPopoverOpened(false);
  };

  return (
    <div className="relative">
      <Button
        popoverOpen=".language-popover"
        className="inline-block w-auto border"
        onClick={setPopoverOpened}
      >
        {currentLang}
      </Button>

      <Popover
        className="language-popover"
        opened={popoverOpened}
        onPopoverClosed={() => setPopoverOpened(false)}
        style={{ width: "200px", minWidth: "auto" }}
      >
        <List>
          {Object.entries(languages).map(([lng, title]) => (
            <ListItem
              key={lng}
              link="#"
              title={title}
              onClick={() => changeLanguage(lng)}
            />
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default LanguageSwitcher;
