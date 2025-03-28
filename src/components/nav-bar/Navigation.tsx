import { useState, useEffect } from "react";
import { PageData } from "@/ts/PageData";
import { f7, Link, Icon, View, Views, Toolbar, Block } from "framework7-react";
import { useAuth } from "../AuthContext";
import { getDevice } from "framework7";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavLinks = ({ isMobile }: { isMobile?: boolean }) => {
  const { isLoggedIn } = useAuth();
  const navigate = (path: string) =>
    f7.views.main.router.navigate(path, { animate: false });

  const [activeTabId, setActiveTabId] = useState("view-home");

  useEffect(() => {
    const currentRoute = f7.views.main?.router.currentRoute;
    if (currentRoute) {
      const matchingPage = PageData.find(
        (page) =>
          currentRoute.path === page.path ||
          currentRoute.path.startsWith(page.path),
      );
      if (matchingPage) {
        setActiveTabId(matchingPage.id);
      }
    }
  }, []);

  const handleNav = (path: string, tabId: string) => {
    setActiveTabId(tabId);

    if (isLoggedIn) navigate(path);
    else {
      f7.loginScreen.open("#loginHere", false);
    }
  };

  const profilePage = PageData.find((page) => page.id === "view-profile");
  const profilePath = profilePage ? profilePage.path : "/profile/";

  return (
    <>
      {isMobile ? (
        <>
          {PageData.filter((page) => page.category === "default").map(
            ({ id, name, path }, index) => (
              <Link
                key={index}
                text={id === "view-activity" ? "Activity" : name}
                tabLink={`#${id}`}
                tabLinkActive={id === activeTabId}
                onClick={() => handleNav(path, id)}
                className={
                  `whitespace-nowrap text-xs ${
                  id === activeTabId 
                  ? "font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text" 
                  : ""}`}
              />
            ),
          )}
        </>
      ) : (
        <>
          <Block className="flex flex-row">
            <Link
              className="flex flex-col items-center no-underline"
              href="/"
              onClick={() => setActiveTabId("view-home")}
            >
              <span className="text-xl font-bold text-purple-600">
                U8.COM
              </span>
              <span className="text-xs text-black">Chinese Gaming</span>
            </Link>

            <Link
              href="#"
              className="ml-4 flex items-center text-blue-500 no-underline"
            >
              <Icon f7="logo_telegram" className="text-blue-500" />
              <span className="ml-1 text-xs">@t.u8Support</span>
            </Link>
          </Block>

          <Block className="flex flex-1 justify-center space-x-6 text-xs font-medium">
            {PageData.filter((page) => page.name !== "Games" && page.name !== "Profile",).map(({ id, name, path }, index) => (
              <Link
                key={index}
                tabLink={`#${id}`}
                tabLinkActive={activeTabId === id}
                onClick={() => handleNav(path, id)}
                className={`whitespace-nowrap px-1 no-underline ${
                  activeTabId === id
                    ? "font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"
                    : "text-gray-700"
                }`}
              >
                {name.toUpperCase()}
              </Link>
            ))}
          </Block>

          <Block className="flex shrink-0 items-center justify-end space-x-3">
            <Block className="flex flex-col">
              <Link href="#" className="flex flex-col items-center no-underline">
                <Icon
                  f7="arrow_down_circle"
                  className="text-xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"
                />
                <span className="text-xs text-gray-600">DOWNLOAD</span>
              </Link>
              <Link href="#" className="flex flex-col items-center no-underline">
                <Icon f7="bell" className="text-xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text" />
                <span className="text-xs text-gray-600">NEWS</span>
              </Link>
            </Block>
            
            <Link
              href="#"
              className="flex items-center rounded-md bg-gradient-to-r from-primary to-secondary px-3 py-1 text-white no-underline"
            >
              <span className="mr-1">+</span>
              <span>FILL</span>
            </Link>
            <Link
              tabLink="#view-profile"
              onClick={() => handleNav(profilePath, "view-profile")}
              className={`flex items-center no-underline ${
                activeTabId === "view-profile"
                  ? "rounded-lg bg-gray-100 p-1"
                  : ""
              }`}
            >
              <img
                src="./assets/image/playeraccount.jpg"
                alt="User"
                className="h-7 w-7 rounded-full"
              />
              <Block className="ml-1">
                <p className="text-xs text-gray-600">level 1</p>
                <p className="text-xs font-bold">0.0</p>
              </Block>
            </Link>

            <LanguageSwitcher />
          </Block>
        </>
      )}
    </>
  );
};

export const NavBar = () => {
  const isMobile = getDevice().android || getDevice().ios;

  return (
    <Views tabs className="bg-white shadow-sm">
      {isMobile ? (
        <Toolbar tabbar icons outline={false} bottom={isMobile}>
          <NavLinks isMobile={isMobile} />
        </Toolbar>
      ) : (
        <Block className="container mx-auto flex h-4 w-full items-center px-4">
          <NavLinks />
        </Block>
      )}

      {PageData.map(({ id, name, path }, index) => (
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
