import type React from "react";

import { App, f7, View } from "framework7-react";
import { useEffect } from "react";
import routes from "./ts/routes";
import NavBar from "./components/nav-bar/Navigation";
import { AuthProvider } from "./components/AuthContext";
import { CustomModal } from "./components/CustomModal";

const appConfig = {
  name: "gamingwebsite",
  theme: "auto",
  routes,
};

const MyApp: React.FC = () => {
  useEffect(() => {
    f7.popup.open("#welcome", false)

    if (window.location.pathname !== "/") {
      window.history.replaceState({}, "", "/");
    }
  }, []);

  return (
    <AuthProvider>
      <App {...appConfig}>
        <NavBar />
        <View main tab url="/" browserHistory browserHistorySeparator="" />

        <CustomModal
          title="Welcome!"
          id="welcome"
          onClose={() => f7.popup.close("#welcome", false)}
          isNavbar={true}
        >
          Welcome!
        </CustomModal>
      </App>
    </AuthProvider>
  );
};

export default MyApp;
