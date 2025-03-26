import React, { useState } from "react";
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Button,
  Range,
  Block,
} from "framework7-react";

// Define the types for notification settings
interface NotificationSettings {
  email: boolean;
  push: boolean;
}

const SettingsPage: React.FC = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Notification settings state
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: true,
    push: false,
  });

  // Handle notification toggle
  const handleNotificationToggle = (type: keyof NotificationSettings) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <Page name="settings">
      <Navbar title="Settings" />

      {/* User Profile Section */}
      <BlockTitle>User Profile</BlockTitle>
      <List strongIos outlineIos dividersIos>
        <ListInput label="Name" type="text" placeholder="Your name" />
        <ListInput label="E-mail" type="email" placeholder="Your email" />
        <ListInput label="Phone" type="tel" placeholder="Your phone number" />
      </List>

      {/* Preferences Section */}
      <BlockTitle>Preferences</BlockTitle>
      <List strongIos outlineIos dividersIos>
        {/* Dark Mode Toggle */}
        <ListItem title="Dark Mode">
          <Toggle
            slot="after"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </ListItem>

        {/* Language Selector */}
        <ListInput label="Language" type="select">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Tagalog</option>
        </ListInput>
      </List>

      {/* Notifications Section */}
      <BlockTitle>Notifications</BlockTitle>
      <List strongIos outlineIos dividersIos>
        <ListItem title="Email Notifications">
          <Toggle
            slot="after"
            checked={notifications.email}
            onChange={() => handleNotificationToggle("email")}
          />
        </ListItem>
        <ListItem title="Push Notifications">
          <Toggle
            slot="after"
            checked={notifications.push}
            onChange={() => handleNotificationToggle("push")}
          />
        </ListItem>
      </List>

      {/* Security Section */}
      <BlockTitle>Security</BlockTitle>
      <List strongIos outlineIos dividersIos>
        <ListInput
          label="Change Password"
          type="password"
          placeholder="New password"
        />
        <ListInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
        />
      </List>

      {/* Buttons Section */}
      <BlockTitle>Actions</BlockTitle>
      <Block strongIos outlineIos className="grid grid-cols-2 gap-2">
        <Button fill large>
          Save Changes
        </Button>
        <Button fill large color="red">
          Delete Account
        </Button>
      </Block>
    </Page>
  );
};

export default SettingsPage;
