import { Button, Popover, List, ListItem } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState("🌐 Select Language");

  // Language mapping
  const languages: Record<string, string> = {
    en: "🇬🇧 English",
    tl: "🇵🇭 Tagalog",
    chs: "中文 (Simplified)",
    cht: "中文 (Traditional)",
  };

  // Load selected language from local storage or fallback to "Select Language"
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && languages[savedLang]) {
      setCurrentLang(languages[savedLang]);
      i18n.changeLanguage(savedLang);
    }
  }, []);

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
        className="inline-block w-auto text-transparent bg-primary-gradient bg-clip-text"
        onClick={() => setPopoverOpened(true)}
      >
        {currentLang}
      </Button>

      <Popover
        className="language-popover"
        opened={popoverOpened}
        onPopoverClosed={() => setPopoverOpened(false)}
        style={{ width: "150px", minWidth: "auto" }}
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
