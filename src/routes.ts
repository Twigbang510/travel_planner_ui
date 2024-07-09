import { BasicRoute } from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import { PAGES } from "constants/app";
import BuildPage from "pages/build/page";
import PlanDetails from "pages/details/page";
import HomePage from "pages/home/page";
import NewTrip from "pages/newtrip/page";

export const routes: BasicRoute[] = [
  {
    path: PAGES.HOME,
    component: Layout,
    exact: false,
    routes: [
      {
        path: PAGES.HOME,
        label: "HOME",
        component: HomePage,
        exact: true,
      },
      {
        path: PAGES.NEWTRIP_PAGE,
        component: NewTrip,
        exact: true,
      },
      {
        path: PAGES.BUILD_PAGE,
        component: BuildPage,
        exact: true,
      },
      {
        path: `${PAGES.PLAN_DETAILS}/:id`,
        component: PlanDetails,
        exact: true,
      },
    ],
  },
];
