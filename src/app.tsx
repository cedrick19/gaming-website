import type React from "react";

import { App, View } from "framework7-react";
import { useState, useEffect } from "react";
import routes from "./ts/routes";
import NavBar from "./components/nav-bar/Navigation";
import { AuthProvider } from "./components/AuthContext";
import WelcomeModal from "./components/WelcomeModal/welcome-modal";

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

        <WelcomeModal opened={modalOpened} onModalClosed={handleModalClose} />
      </App>
    </AuthProvider>
  );
};

export default MyApp;
