import React from "react";
import { Popup, Button } from "framework7-react";

interface WelcomeModalProps {
  opened: boolean;
  onModalClosed: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({
  opened,
  onModalClosed,
}) => {
  return (
    <Popup
      opened={opened}
      onPopupClosed={onModalClosed}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <div className="relative flex h-[250px] w-[400px] flex-col items-center justify-center rounded-lg bg-white p-5">
        <Button
          onClick={onModalClosed}
          className="absolute right-[10px] top-[10px] cursor-pointer"
        >
          &times;
        </Button>
        <p className="text-center">Welcome to the modal!</p>
      </div>
    </Popup>
  );
};

export default WelcomeModal;
