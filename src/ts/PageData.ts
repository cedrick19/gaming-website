import ActivityPage from "@/pages/activity/Activity";
import Chess from "@/pages/games/chess/Chess";
import Electronic from "@/pages/games/electronic/Electronic";
import Fishing from "@/pages/games/fishing/fishing";
import HomePage from "@/pages/home/home";
import Lottery, { GamePage } from "@/pages/games/lottery/Lottery";
import ProfilePage from "@/pages/profile/profile";
import Sports from "@/pages/games/sports/sports";
import VideoPage from "@/pages/games/video/video";
import GamesPage from "@/pages/games";
import { Component } from "framework7";

interface PageType {
  id: string;
  name: string;
  path: string;
  component: Component
  category?: "games" | "default";
  requiresAuth?: boolean
}

export const PageData: PageType[] = [
  {
    id: "view-home",
    name: "Home",
    path: "/",
    component: HomePage,
    category: "default",
  },
  {
    id: "view-games",
    name: "Games",
    path: "/games/",
    component: GamesPage,
    category: "default",
  },
  {
    id: "view-lottery",
    name: "Lottery",
    path: "/lottery/",
    component: Lottery,
    category: "games",
  },
  {
    id: "view-sports",
    name: "Sports",
    path: "/sports/",
    component: Sports,
    category: "games",
  },
  {
    id: "view-video",
    name: "Video",
    path: "/video/",
    component: VideoPage,
    category: "games",
  },
  {
    id: "view-electronic",
    name: "Electronic",
    path: "/electronic/",
    component: Electronic,
    category: "games",
  },
  {
    id: "view-chess",
    name: "Chess",
    path: "/chess/",
    component: Chess,
    category: "games",
  },
  {
    id: "view-fishing",
    name: "Fishing",
    path: "/fishing/",
    component: Fishing,
    category: "games",
  },
  {
    id: "view-activity",
    name: "Preferential Activities",
    path: "/activity/",
    component: ActivityPage,
    category: "default",
  },
  {
    id: "view-profile",
    name: "Profile",
    path: "/profile/",
    component: ProfilePage,
    category: "default",
  },
];

export const DynamicPageData: PageType[] = [
  {
    id: "game-page",
    name: "Game",
    path: "/lottery/:id",
    component: GamePage,
  },
];
