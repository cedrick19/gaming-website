import { App, View } from "framework7-react";
import routes from "./ts/routes";
import { AuthProvider } from "./components/AuthContext";
import { NavBar } from "./components/nav-bar";

const appConfig = {
  name: "gamingwebsite",
  theme: "auto",
  routes,
};

const MyApp: React.FC = () => {
  return (
    <AuthProvider>
      <App {...appConfig}>
        <NavBar />
        <View main tab url="/" browserHistory browserHistorySeparator="" />
      </App>
    </AuthProvider>
  );
};

export default MyApp;
