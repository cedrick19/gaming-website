import NotFoundPage from "@/pages/not-found/404";
import { Router } from "framework7/types";
import { PageData } from "./PageData";


const routes: Router.RouteParameters[] = [
  ...PageData.map(({ path, component}) => ({ path, component })),
  { path: "(.*)", component: NotFoundPage },
];

export default routes;
