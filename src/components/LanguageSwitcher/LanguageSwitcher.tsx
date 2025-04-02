import { Button, Popover, List, ListItem } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";

const languages: Record<string, string> = {
  en: "🇬🇧 English",
  tl: "🇵🇭 Tagalog",
  chs: "中文 (Simplified)",
  cht: "中文 (Traditional)",
};

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    return savedLang && languages[savedLang]
      ? languages[savedLang]
      : "🌐 Select Language";
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && languages[savedLang] && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      setCurrentLang(languages[lng]);
      setPopoverOpened(false);
    },
    [i18n],
  );

  return (
    <div className="relative">
      <Button
        className="inline-block bg-primary-gradient bg-clip-text text-transparent transition duration-300 hover:bg-opacity-80"
        onClick={() => setPopoverOpened(true)}
      >
        {currentLang}
      </Button>

      <Popover
        className="language-popover"
        opened={popoverOpened}
        onPopoverClosed={() => setPopoverOpened(false)}
      >
        <List className="w-52 rounded-lg bg-white p-2 shadow-md">
          {Object.entries(languages).map(([lng, title]) => (
            <ListItem
              key={lng}
              link="#"
              title={title}
              onClick={() => changeLanguage(lng)}
              className="cursor-pointer transition duration-200 hover:bg-gray-200"
            />
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default LanguageSwitcher;
