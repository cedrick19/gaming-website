import type React from "react";
import { App, View, Button } from "framework7-react";
import { useState, useEffect } from "react";
import routes from "./ts/routes";
import NavBar from "./components/nav-bar/Navigation";
import { AuthProvider } from "./components/AuthContext";
import { CustomModal } from "./components/CustomModal/CustomModal";

const appConfig = {
  name: "gamingwebsite",
  theme: "auto",
  routes,
};

const MyApp: React.FC = () => {
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    setModalOpened(true);
  }, []);

  const handleModalClose = () => {
    setModalOpened(false);
  };

  return (
    <AuthProvider>
      <App {...appConfig}>
        <NavBar />
        <View main tab url="/" browserHistory browserHistorySeparator="" />

        <CustomModal
          id="welcome-modal"
          opened={modalOpened}
          onClose={handleModalClose}
          className="flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-5">
            <Button
              onClick={handleModalClose}
              className="absolute right-[10px] top-[10px] cursor-pointer"
            >
              &times;
            </Button>
            <p className="text-center">Welcome to the modal!</p>
          </div>
        </CustomModal>
      </App>
    </AuthProvider>
  );
};

export default MyApp;
