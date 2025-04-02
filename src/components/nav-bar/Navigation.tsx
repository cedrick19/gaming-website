import { useState, useEffect } from "react";
import { PageData } from "@/ts/PageData";
import { f7, Link, Icon, View, Views, Toolbar, Block, Button } from "framework7-react";
import { useAuth } from "../AuthContext";
import { getDevice } from "framework7";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavLinks = ({ 
  isMobile, 
  activeTab, 
  handleNavFunc
}: {
  isMobile?: boolean, 
  activeTab: string, 
  handleNavFunc: (path: string, tabId: string) => void 
}) => {
  return (
    <>
      {isMobile
      ? (PageData.filter((page) => page.category === "default")
        .map(({ id, name, path}, index) => (
          <Link
            key={index}
            text={id === "view-activity" ? "Activity" : name}
            tabLink={`#${id}`}
            rippleColor="none"
            tabLinkActive={id === activeTab}
            onClick={() => handleNavFunc(path, id)}
            className={`whitespace-nowrap text-xs ${
              id === activeTab
              ? "font=bold text-transparent bg-primary-gradient bg-clip-text"
              : ""
            }`}
          />
        ))
      )
      : (
        <>
          <Block className="flex justify-center w-3/5">
            <Block className="flex space-x-6 text-xs">
              {PageData.filter((page) => page.name !== "Games" && page.name !== "Profile")
              .map(({ id, name, path }, index) => (
                <Link
                  key={index}
                  tabLink={`#${id}`}
                  tabLinkActive={activeTab === id}
                  rippleColor="none"
                  onClick={() => handleNavFunc(path, id)}
                  className={`whitespace-nowrap no-underline ${
                    activeTab === id
                    ? "font-black text-transparent bg-primary-gradient bg-clip-text"
                    : "font-semibold text-gray-700"
                  }`}
                >
                  <span className={`whitespace-nowrap no-underline ${
                    activeTab === id
                    ? "font-black text-transparent bg-primary-gradient bg-clip-text"
                    : "font-semibold text-gray-700"
                  }`}
                  >
                    {name.toUpperCase()}
                  </span>
                </Link>
              ))}
            </Block>
          </Block>
        </>
      )}
    </>
  )
}

const UserProfile = ({ 
  activeTabId, 
  handleNav 
}: { 
  activeTabId: string, 
  handleNav: (path:string, tabId: string) => void 
}) => {
  const profilePage = PageData.find((page) => page.id === "view-profile")
  const profilePath = profilePage?.path || "/profile/"

  return (
    <Link
      tabLink="#view-profile"
      onClick={() => handleNav(profilePath, "view-profile")}
      className={`flex items-center no-underline ${activeTabId === "view-profile" ? "rounded-lg bg-gray-100 p-1" : ""}`}
      rippleColor="none"
    >
      <img
        src="./assets/image/playeraccount.jpg"
        alt="User"
        className="h-7 w-7 rounded-full"
      />
      <Block className="ml-1">
        <div className="text-xs text-gray-600">Level 1</div>
        <div className="text-xs font-bold">0.0</div>
      </Block>
    </Link>
  )
}

const NavBar = () => {
  const isMobile = getDevice().android || getDevice().ios;
  const [activeTabId, setActiveTabId] = useState<string>("view-home")
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (f7.views.main?.router.currentRoute) {
      const PageMatch = PageData.find(({ path }) => 
        f7.views.main?.router.currentRoute.path === path 
      || f7.views.main?.router.currentRoute.path.startsWith(path));

      if (PageMatch) {
        setActiveTabId(PageMatch.id)
      }
    }
  }, [])

  const handleNav = (path:string, tabId: string) => {
    if (!isLoggedIn) {
      f7.loginScreen.open("#loginHere", false)
      return null;
    } 
    else {
      setActiveTabId(tabId);
      f7.views.main.router.navigate(path, { animate: false })
    }
  }

  return (
    <Views tabs className="bg-white shadow-sm">
      {isMobile ? (
        <Toolbar tabbar icons outline={false} bottom={isMobile}>
          <NavLinks
            isMobile={isMobile} 
            activeTab={activeTabId} 
            handleNavFunc={handleNav}
          />
        </Toolbar>
      ) : (
        <Block className="container mx-auto flex h-8 w-full items-center justify-between">

          <Block className="mr-4 flex shrink-0 items-center w-1/5">
            <Link
              tabLink="#view-home"
              className="flex flex-col"
              rippleColor="none"
            >
              <span className="text-xl font-bold text-transparent bg-primary-gradient bg-clip-text">
                U8.COM
              </span>
              <span className="text-xs font-light text-black">Chinese Gaming</span>
            </Link>
            <Link href="#" className="flex items-center text-blue-500 no-underline" rippleColor="none">
              <Icon f7="logo_telegram" className="text-blue-500" />
              <span className="ml-1 text-xs">
                @t.u2support
              </span>
            </Link>
          </Block>

          <NavLinks 
            activeTab={activeTabId} 
            handleNavFunc={handleNav}
          />

          <Block className="flex shrink-0 items-center justify-end space-x-3">
            {["arrow_down_circle", "bell"].map((icon, index) => (
              <Link
                key={index}
                href="#"
                className="flex flex-col items-center no-underline"
                rippleColor="none"
              >
                <Icon
                  f7={icon}
                  className="text-xl text-transparent bg-primary-gradient bg-clip-text"
                />
                <span className="text-xs text-gray-600">
                  {icon === "arrow_down_circle" ? "DOWNLOAD" : "NEWS"}
                </span>
              </Link>
            ))}

            {isLoggedIn
            ? <UserProfile activeTabId={activeTabId} handleNav={() => handleNav("/profile/", 'view-profile')} />
            : <Button 
                onClick={() => f7.loginScreen.open("#loginHere", false)} 
                rippleColor="none"
                className="text-transparent bg-primary-gradient bg-clip-text"
              >
                Login
              </Button>
            }
            <LanguageSwitcher />
          </Block>
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

export default NavBar;
