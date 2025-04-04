import ActivityPage from "@/pages/mobile/activity/Activity";
import Chess from "@/pages/desktop/chess/Chess";
import Electronic from "@/pages/desktop/electronic/Electronic";
import Fishing from "@/pages/desktop/fishing/fishing";
import HomePage from "@/pages/mobile/home/home";
import Lottery, { GamePage } from "@/pages/desktop/lottery/Lottery";
import ProfilePage from "@/pages/mobile/profile/profile";
import Sports from "@/pages/desktop/sports/sports";
import VideoPage from "@/pages/desktop/video/video";
import { Component } from "framework7";
import ActivityOn from "@/assets/image/icons/activity-on.svg";
import ActivityOff from "@/assets/image/icons/activity-off.svg";
import GamesOn from "@/assets/image/icons/games-on.svg";
import GamesOff from "@/assets/image/icons/games-off.svg";
import HomeOn from "@/assets/image/icons/home-on.svg";
import HomeOff from "@/assets/image/icons/home-off.svg";
import ProfileOn from "@/assets/image/icons/profile-on.svg";
import ProfileOff from "@/assets/image/icons/profile-off.svg"
import GamesIndexPage from "@/pages/mobile/games";

interface PageType {
  id: string;
  name: string;
  path: string;
  component: Component
  icon?: {
    iconOn?: string;
    iconOff?: string;
  }
}

export const PageData: PageType[] = [
  {
    id: "view-home",
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    id: "view-lottery",
    name: "Lottery",
    path: "/lottery/",
    component: Lottery,
  },
  {
    id: "view-sports",
    name: "Sports",
    path: "/sports/",
    component: Sports,
  },
  {
    id: "view-video",
    name: "Video",
    path: "/video/",
    component: VideoPage,
  },
  {
    id: "view-electronic",
    name: "Electronic",
    path: "/electronic/",
    component: Electronic,
  },
  {
    id: "view-chess",
    name: "Chess",
    path: "/chess/",
    component: Chess,
  },
  {
    id: "view-fishing",
    name: "Fishing",
    path: "/fishing/",
    component: Fishing,
  },
  {
    id: "view-activity",
    name: "Preferential Activities",
    path: "/activity/",
    component: ActivityPage,
  },
  {
    id: "view-profile",
    name: "Profile",
    path: "/profile/",
    component: ProfilePage,
  },
];

export const MobilePageData: PageType[] = [
  {
    id: "view-home",
    name: "Home",
    path: "/",
    component: HomePage,
    icon: {
      iconOn: HomeOn,
      iconOff: HomeOff
    }
  },
  {
    id: "view-games-index",
    name: "Games",
    path: "/games-index/",
    component: GamesIndexPage,
    icon: {
      iconOn: GamesOn,
      iconOff: GamesOff
    }
  },
  {
    id: "view-mobile-activity",
    name: "Activity",
    path: "/activity/",
    component: ActivityPage,
    icon: {
      iconOn: ActivityOn,
      iconOff: ActivityOff
    }
  },
  {
    id: "view-mobile-profile",
    name: "Profile",
    path: "/profile/",
    component: ProfilePage,
    icon: {
      iconOn: ProfileOn,
      iconOff: ProfileOff
    }
  },
]

export const DynamicPageData: PageType[] = [
  {
    id: "game-page",
    name: "Game",
    path: "/lottery/:id",
    component: GamePage,
  },
];
