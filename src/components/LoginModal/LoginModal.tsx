import {
  f7,
  List,
  ListButton,
  ListInput,
  LoginScreenTitle,
  Page,
  Popup,
  View,
} from "framework7-react";
import { useState } from "react";
import { useAuth } from "../AuthContext";

export const LoginModal = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    f7.popup.close("#loginHere", false);
  };
  return (
    <Popup id="loginHere">
      <View>
        <Page loginScreen>
          <LoginScreenTitle>Login</LoginScreenTitle>
          <List form>
            <ListInput
              type="text"
              name="username"
              placeholder="Your username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />
            <ListInput
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </List>
          <List>
            <ListButton title="Sign In" onClick={handleLogin} />
          </List>
        </Page>
      </View>
    </Popup>
  );
};
