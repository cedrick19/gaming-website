import { Button, Popover, List, ListItem } from "framework7-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [popoverOpened, setPopoverOpened] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setPopoverOpened(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger Button */}
      <Button
        popoverOpen=".language-popover"
        className="border  w-auto inline-block"
        onClick={() => setPopoverOpened(true)} // Open when clicked
      >
        🌐 Select Language
      </Button>

      {/* Dropdown List (Popover) */}
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
            onClick={() => changeLanguage("tl")}
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
