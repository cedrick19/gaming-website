import HomePage from "../pages/home/home";

import DynamicRoutePage from "../pages/dynamic-route";
import RequestAndLoad from "../pages/request-and-load";
import NotFoundPage from "../pages/not-found/404";
import LotteryPage from "../pages/lottery/Lottery";
import SportsPage from "../pages/sports/sports";
import VideoPage from "../pages/video/video";
import ElectronicPage from "../pages/electronic/electronic";
import ChessPage from "../pages/chess/Chess";
import FishingPage from "../pages/fishing/fishing";

const routes = [
  { path: "/", component: HomePage, options: { animate: false } },

  {
    path: "/lottery/",
    component: LotteryPage,
    options: { animate: false },
  },
  {
    path: "/sports/",
    component: SportsPage,
    options: { animate: false },
  },
  {
    path: "/video/",
    component: VideoPage,
    options: { animate: false },
  },
  {
    path: "/electronic/",
    component: ElectronicPage,
    options: { animate: false },
  },
  {
    path: "/chess/",
    component: ChessPage,
    options: { animate: false },
  },
  {
    path: "/fishing/",
    component: FishingPage,
    options: { animate: false },
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
    options: { animate: false },
  },

  { path: "(.*)", component: NotFoundPage },
];

export default routes;
