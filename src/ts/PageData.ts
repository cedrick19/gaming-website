import Chess from "@/pages/chess/Chess";
import electronic from "@/pages/electronic/electronic";
import Fishing from "@/pages/fishing/fishing";
import HomePage from "@/pages/home/home";
import Lottery from "@/pages/lottery";
import { GamePage } from "@/pages/lottery/Lottery";
import Sports from "@/pages/sports/sports";
import VideoPage from "@/pages/video/video";
import { ComponentType } from "react";

interface PageType {
  id: string;
  name: string;
  path: string;
  component: ComponentType<any>;
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
        component: electronic,
    },
    {
        id: "view-chess",
        name: "Chess",
        path: "/chess/",
        component: Chess
    },
    {
        id: "view-fishing",
        name: "Fishing",
        path: "/fishing/",
        component: Fishing,
    },
]

export const DynamicPageData:PageType[] = [
    {
        id:"game-page",
        name: "Game",
        path: "/lottery/:id",
        component: GamePage
    }
]