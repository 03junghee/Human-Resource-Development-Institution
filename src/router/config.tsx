import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AboutPage from "../pages/about/page";
import ResearchPage from "../pages/research/page";
import BusinessPage from "../pages/business/page";
import ResourcesPage from "../pages/resources/page";
import ParticipatePage from "../pages/participate/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/about/*",
    element: <AboutPage />,
  },
  {
    path: "/research",
    element: <ResearchPage />,
  },
  {
    path: "/research/*",
    element: <ResearchPage />,
  },
  {
    path: "/business",
    element: <BusinessPage />,
  },
  {
    path: "/business/*",
    element: <BusinessPage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/resources/*",
    element: <ResourcesPage />,
  },
  {
    path: "/participate",
    element: <ParticipatePage />,
  },
  {
    path: "/participate/*",
    element: <ParticipatePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;