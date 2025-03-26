import HomePage from "../pages/home/home";
import AboutPage from "../pages/About";
import FormPage from "../pages/form";
import CatalogPage from "../pages/catalog";
import GamePage from "../pages/game";
import ProductPage from "../pages/product";
import SettingsPage from "../pages/settings";
import DynamicRoutePage from "../pages/dynamic-route";
import RequestAndLoad from "../pages/request-and-load";
import NotFoundPage from "../pages/not-found/404";
import LotteryPage from "../pages/Lottery";
import SportsPage from "../pages/sports/sports";
import VideoPage from "../pages/video/video";
import ElectronicPage from "../pages/electronic/electronic";
import ChessPage from "../pages/chess/Chess";
import FishingPage from "../pages/fishing/fishing";
import OffersPage from "../pages/offers";
import InformationPage from "../pages/Information";

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
    path: "/offers/",
    component: OffersPage,
    options: { animate: false },
  },

  {
    path: "/information/",
    component: InformationPage,
    options: { animate: false },
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
    options: { animate: false },
  },
  //mobile
  { path: "/", component: HomePage },
  { path: "/about/", component: AboutPage },
  { path: "/form/", component: FormPage },
  { path: "/catalog/", component: CatalogPage },
  { path: "/product/:id/", component: ProductPage },
  { path: "/settings/", component: SettingsPage },

  { path: "(.*)", component: NotFoundPage },
];

export default routes;
