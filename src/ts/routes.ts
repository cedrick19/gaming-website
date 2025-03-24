import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import FormPage from "../pages/form";
import CatalogPage from "../pages/catalog";
import ProductPage from "../pages/product";
import SettingsPage from "../pages/settings";
import DynamicRoutePage from "../pages/dynamic-route";
import RequestAndLoad from "../pages/request-and-load";
import NotFoundPage from "../pages/404";

interface Router {
  app: {
    preloader: {
      show: () => void;
      hide: () => void;
    };
  };
}

interface RouteParams {
  userId?: string;
  blogId?: string;
  postId?: string;
  id?: string;
}

interface RouteProps {
  user?: User;
}

interface RouteResolveOptions {
  component: React.ComponentType<any>;
  props?: RouteProps;
}

interface AsyncRouteContext {
  router: Router;
  to: {
    params: RouteParams;
  };
  resolve: (
    route: RouteResolveOptions,
    options?: { props: RouteProps }
  ) => void;
}

interface User {
  firstName: string;
  lastName: string;
  about: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

interface Route {
  path: string;
  component?: React.ComponentType<any>;
  async?: (context: AsyncRouteContext) => void;
}

const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/about/", component: AboutPage },
  { path: "/form/", component: FormPage },
  { path: "/catalog/", component: CatalogPage },
  { path: "/product/:id/", component: ProductPage },
  { path: "/settings/", component: SettingsPage },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }: AsyncRouteContext) {
      const app = router.app;
      app.preloader.show();
      const userId = to.params.userId;
      setTimeout(function () {
        const user: User = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            { title: "Framework7 Website", url: "http://framework7.io" },
            { title: "Framework7 Forum", url: "http://forum.framework7.io" },
          ],
        };
        app.preloader.hide();
        resolve({ component: RequestAndLoad }, { props: { user: user } });
      }, 1000);
    },
  },
  { path: "(.*)", component: NotFoundPage },
];

export default routes;
