import { Button, Popover, List, ListItem } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [popoverOpened, setPopoverOpened] = useState(false);

  const changeLanguage = async (lng: string) => {
    try {
      const translation = await import(`@/i18n/locales/${lng}.json`);
      i18n.addResourceBundle(
        lng,
        "translation",
        translation.default,
        true,
        true,
      );
      i18n.changeLanguage(lng);
    } catch (error) {
      console.error(`Error loading ${lng} translation:`, error);
    }

    setPopoverOpened(false);
  };

  return (
    <div className="relative">
      <Button
        popoverOpen=".language-popover"
        className="inline-block w-auto border"
        onClick={() => setPopoverOpened(true)}
      >
        🌐 Select Language
      </Button>

      <Popover
        className="language-popover"
        opened={popoverOpened}
        onPopoverClosed={() => setPopoverOpened(false)}
        style={{ width: "150px", minWidth: "auto" }}
      >
        <List>
          <ListItem
            link="#"
            title="🇬🇧 English"
            onClick={() => changeLanguage("en")}
          />
          <ListItem
            link="#"
            title="🇵🇭 Tagalog"
            onClick={() => changeLanguage("ph")}
          />
          <ListItem
            link="#"
            title="中文 (Traditional)"
            onClick={() => changeLanguage("cht")}
          />
          <ListItem
            link="#"
            title="中文 (Simplified)"
            onClick={() => changeLanguage("chs")}
          />
        </List>
      </Popover>
    </div>
  );
};

export default LanguageSwitcher;
