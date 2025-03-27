import { App, View } from "framework7-react";
import routes from "./ts/routes";
import NavBar from "./components/nav-bar/Navigation";
import { AuthProvider } from "./components/AuthContext";

const MyApp = () => {
  return (
    <AuthProvider>
      <App name="gamingwebsite" theme="auto" routes={routes}>
        <NavBar />
        <View main url="/" browserHistory browserHistorySeparator="" />
      </App>
    </AuthProvider>
  );
};

export default MyApp;
