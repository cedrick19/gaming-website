import { CustomModal } from "@/components/CustomModal";
import { useAuth } from "@/components/AuthContext";
import {
  Page,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Button,
  Range,
  Block,
  f7,
} from "framework7-react";
import Layout from "@/layout/layout";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const ProfilePage = () => {
  const { logout, setActiveTabId } = useAuth();

  const f7nav = ( path: string, id: string) => {
    f7.views.main.router.navigate(path, { animate: false })
    f7.tab.show(`#${id}`)
  }

  const handleLogout = () => {
    f7.popup.close("#logoutConfirm");
    f7nav('/', 'view-home')
    setActiveTabId('view-home')
    logout();
  };

  return (
    <Page name="settings">
      <Layout>
        <BlockTitle>Form Example</BlockTitle>
        <List strongIos outlineIos dividersIos>
          <ListInput
            label="Birth date"
            type="date"
            placeholder="Birth day"
            defaultValue="2014-04-30"
          />

          <ListItem title="Toggle">
            <Toggle slot="after" />
          </ListItem>

          <ListInput label="Range" input={false}>
            <Range slot="input" value={50} min={0} max={100} step={1} />
          </ListInput>

          <ListInput type="textarea" label="Textarea" placeholder="Bio" />
          <ListInput
            type="textarea"
            label="Resizable"
            placeholder="Bio"
            resizable
          />
          <Block className="my-6">
            <BlockTitle>Language Preferences</BlockTitle>
            <div className="text-left">
              <LanguageSwitcher />
            </div>
          </Block>
        </List>

        <Button onClick={() => f7.popup.open("#logoutConfirm", false)}>
          Log out
        </Button>

        <CustomModal id="logoutConfirm">
          <p>Are you sure you want to log out?</p>
          <Block className="grid-gap grid grid-cols-2">
            <Button popupClose="#logoutConfirm">Cancel</Button>
            <Button fill onClick={handleLogout}>
              Log out
            </Button>
          </Block>
        </CustomModal>
      </Layout>
    </Page>
  );
};

export default ProfilePage;
