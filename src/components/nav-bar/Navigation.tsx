import { PageData } from "@/ts/PageData";
import { f7, Link, NavLeft, NavRight, Toolbar, View, Views } from "framework7-react";
import { useAuth } from "../AuthContext";
import { getDevice } from "framework7";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  const { isLoggedIn } = useAuth();
  const navigate = (path: string) => f7.views.main.router.navigate(path, { animate: false });

  const handleNav = (path: string) => {
    if (isLoggedIn) navigate(path);
    else {
      f7.loginScreen.open("#loginHere", false);
    }
  };

  return (
    <>
      {isMobile
      ? (
      <>
        {PageData.filter((page) => page.category === "default")
          .map(({ id, name, path }, index) => (
          <Link
            key={index}
            text={name}
            tabLink={`#${id}`}
            tabLinkActive={id === "view-home"}
            onClick={() => handleNav(path)}
          />
        ))}
      </>
      )
      : (
      <>
        <NavLeft>
          <span>U8.COM</span>
        </NavLeft>
        {PageData.filter((page) => page.name !== "Games")
          .map(({ id, name, path }, index) => (
          <Link
            key={index}
            text={name}
            tabLink={`#${id}`}
            tabLinkActive={id === "view-home"}
            onClick={() => handleNav(path)}
          />
        ))}
        <NavRight>
          <LanguageSwitcher />
        </NavRight>
      </>
      )}
      
    </>
  )
}

const NavBar = () => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    <Views tabs>
      <Toolbar tabbar icons outline={false} bottom={isMobile}>
        <NavLinks isMobile={isMobile}/>
      </Toolbar>

      {PageData.map(({ id, name, path }, index ) => (
        <View
          key={index}
          id={id}
          name={name}
          tab
          main={id === "view-home"}
          tabActive={id === "view-home"}
          url={path}
        />
      ))}
    </Views>
  );
};

export default NavBar;
