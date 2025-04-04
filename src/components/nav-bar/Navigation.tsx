import { useEffect } from "react";
import { MobilePageData, PageData } from "@/ts/PageData";
import {
  f7,
  Link,
  Icon,
  View,
  Views,
  Toolbar,
  Block,
  Button,
} from "framework7-react";
import { useAuth } from "@/hooks/useAuth";
import { getDevice } from "framework7";

const NavLinks = ({
  isMobile,
  activeTab,
  handleNavFunc,
}: {
  isMobile?: boolean;
  activeTab: string;
  handleNavFunc: (path: string, tabId: string) => void;
}) => {
  const commonTextStyling = "whitespace-nowrap text-xs";
  const activeText = "font-bold bg-primary-gradient bg-clip-text text-transparent";
  const inactiveText = "text-inactive";

  return (
    <>
      {isMobile ? (
        <>
          {MobilePageData.filter((_, index) => index < 2).map(
            ({ id, name, path, icon }) => (
              <Link
                key={id}
                tabLink={`#${id}`}
                tabLinkActive={id === activeTab}
                onClick={() => handleNavFunc(path, id)}
                rippleColor="none"
                className="relative top-2"
              >
                <img src={id === activeTab ? icon?.iconOn : icon?.iconOff} className="h-7"/>
                <span className={`${commonTextStyling} ${id === activeTab ? activeText : inactiveText}`}>
                  {name}
                </span>
              </Link>
            ),
          )}

          <Block className="h-full">
            <Button
              className="bg-primary-gradient rounded-full w-12 h-12 md:w-14 md:h-14 shadow-secondary/30"
            >
              <Icon f7="money_dollar_circle" className="text-white" />
            </Button>
          </Block>

          {MobilePageData.filter((_, index) => index >= 2).map(
            ({ id, name, path, icon }) => (
              <Link
                key={id}
                tabLink={`#${id}`}
                tabLinkActive={id === activeTab}
                onClick={() => handleNavFunc(path, id)}
                rippleColor="none"
                className="relative top-2"
              >
                <img src={id === activeTab ? icon?.iconOn : icon?.iconOff} className="h-7"/>
                <span className={`whitespace-nowrap text-xs ${id === activeTab ? "font-bold bg-primary-gradient bg-clip-text text-transparent" : "text-[#AD9DCE]"}`}>
                  {id === "view-activity" ? "Activity" : name}
                </span>
              </Link>
            ),
          )}
        </>    
      ) : (
        <>
          <Block className="flex w-3/5 justify-center">
            <Block className="flex space-x-6 text-xs">
              {PageData.filter(
                (page) => page.name !== "Games" && page.name !== "Profile",
              ).map(({ id, name, path }, index) => (
                <Link
                  key={index}
                  tabLink={`#${id}`}
                  tabLinkActive={id === activeTab}
                  rippleColor="none"
                  onClick={() => handleNavFunc(path, id)}
                  className={`whitespace-nowrap no-underline ${
                    activeTab === id
                      ? "bg-primary-gradient bg-clip-text font-black text-transparent"
                      : "font-semibold text-gray-700"
                  }`}
                >
                  <span
                    className={`whitespace-nowrap no-underline ${
                      activeTab === id
                        ? "bg-primary-gradient bg-clip-text font-black text-transparent"
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
  );
};

const UserProfile = ({
  activeTabId,
  handleNav,
}: {
  activeTabId: string;
  handleNav: (path: string, tabId: string) => void;
}) => {
  const profilePage = PageData.find((page) => page.id === "view-profile");
  const profilePath = profilePage?.path || "/profile/";

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
  );
};

const NavBar = () => {
  const isMobile = getDevice().android || getDevice().ios || window.matchMedia("(max-width: 1024px)").matches;
  const { isLoggedIn, activeTabId, setActiveTabId } = useAuth();

  const f7nav = (path: string, id: string) => {
    f7.views.main.router.navigate(path, { animate: false });
    f7.tab.show(`#${id}`);
  };

  useEffect(() => {
    if (f7.views.main?.router.currentRoute) {
      const PageMatch = PageData.find(
        ({ path }) =>
          f7.views.main?.router.currentRoute.path === path ||
          f7.views.main?.router.currentRoute.path.startsWith(path),
      );

      if (PageMatch) {
        setActiveTabId(PageMatch.id);
      }
    }
  }, [setActiveTabId]);

  const handleNav = (path: string, tabId: string) => {
    if (!isLoggedIn) {
      f7.loginScreen.open("#loginHere", false);
      f7nav("/", "view-home");
      return;
    }

    setActiveTabId(tabId);
    f7nav(path, tabId);
  };

  return (
    <Views tabs className="bg-white shadow-sm">
      {isMobile ? (
        <Toolbar
          tabbar
          outline={false}
          bottom={isMobile}
          icons
          className="relative transition-all !bg-transparent !h-20"
        >
          <svg
            className="absolute bottom-0 left-0 z-0 w-full h-full shadow-secondary/30"
            viewBox="0 0 440 85"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M220 57.0004C239.882 57.0004 256 40.8827 256 21.0004C256 13.0706 262.105 3.94169 270 4.68079L436.118 20.2315C442.286 20.8089 447 25.9852 447 32.1793V71.0002C447 78.7322 440.732 85.0002 433 85.0002H7C-0.731989 85.0002 -7 78.7322 -7 71.0002V32.1793C-7 25.9852 -2.2856 20.8088 3.88154 20.2315L170 4.68079C177.895 3.94169 184 13.0706 184 21.0004C184 40.8827 200.118 57.0004 220 57.0004Z"
              fill="white"
              stroke="#4C2CCA"
              strokeOpacity="0.3"
              strokeWidth="0.7"
            />
          </svg>
          <NavLinks
            isMobile={isMobile}
            activeTab={activeTabId}
            handleNavFunc={handleNav}
          />
        </Toolbar>
      ) : (
        <Block className="container mx-auto flex h-8 w-full items-center justify-between">
          <Block className="mr-4 flex w-1/5 shrink-0 items-center">
            <Link
              tabLink="#view-home"
              className="flex flex-col"
              rippleColor="none"
            >
              <span className="bg-primary-gradient bg-clip-text text-xl font-bold text-transparent">
                U8.COM
              </span>
              <span className="text-xs font-light text-black">
                Chinese Gaming
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-blue-500 no-underline"
              rippleColor="none"
            >
              <Icon f7="logo_telegram" className="text-blue-500" />
              <span className="ml-1 text-xs">@t.u2support</span>
            </Link>
          </Block>

          <NavLinks activeTab={activeTabId} handleNavFunc={handleNav} />

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
                  className="bg-primary-gradient bg-clip-text text-xl text-transparent"
                />
                <span className="text-xs text-gray-600">
                  {icon === "arrow_down_circle" ? "DOWNLOAD" : "NEWS"}
                </span>
              </Link>
            ))}

            {isLoggedIn ? (
              <UserProfile
                activeTabId={activeTabId}
                handleNav={() => handleNav("/profile/", "view-profile")}
              />
            ) : (
              <Button
                onClick={() => f7.loginScreen.open("#loginHere", false)}
                rippleColor="none"
                className="bg-primary-gradient bg-clip-text text-transparent"
              >
                Login
              </Button>
            )}
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
          browserHistory
          browserHistorySeparator=""
        />
      ))}
    </Views>
  );
};

export default NavBar;
