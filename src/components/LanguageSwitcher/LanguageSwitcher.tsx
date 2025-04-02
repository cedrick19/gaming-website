import { Button, Popover, List, ListItem } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo } from "react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState("🌐 Select Language");

  // Language mapping
  const languages: Record<string, string> = useMemo(() => ({
    en: "🇬🇧 English",
    tl: "🇵🇭 Tagalog",
    chs: "中文 (Simplified)",
    cht: "中文 (Traditional)",
  }), []);

  // Load selected language from local storage or fallback to "Select Language"
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && languages[savedLang]) {
      setCurrentLang(languages[savedLang]);
      i18n.changeLanguage(savedLang);
    }
  }, [i18n, languages]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(languages[lng]); // Update button text
    localStorage.setItem("selectedLanguage", lng); // Save selection
    setPopoverOpened(false);
  };

  return (
    <div className="relative">
      <Button
        popoverOpen=".language-popover"
        className="bg-primary-gradient inline-block w-auto bg-clip-text text-transparent transition duration-300 hover:bg-opacity-80"
        onClick={() => setPopoverOpened(true)}
      >
        {currentLang}
      </Button>

      <Popover
        className="language-popover"
        opened={popoverOpened}
        onPopoverClosed={() => setPopoverOpened(false)}
        style={{
          width: "200px",
          minWidth: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <List className="p-2">
          {Object.entries(languages).map(([lng, title]) => (
            <ListItem
              key={lng}
              link="#"
              title={title}
              onClick={() => changeLanguage(lng)}
              className="transition duration-200 hover:bg-gray-200"
            />
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default LanguageSwitcher;
