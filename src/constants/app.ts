export const PAGES = {
  HOME: "/",
  NEWTRIP_PAGE: "/new-trip",
  BUILD_PAGE: "/build",
  PLAN_DETAILS: "/plan-details",
  TEST_PAGE: "/test-page",
};

export const SCROLL_TYPE = {
  UP: "up",
  DOWN: "down",
} as const;

export const QUERY_MOBILE = "32em";
export const QUERY_LG_DESKTOP = "1250px";

export const BREAKPOINTS = {
  BASE: "0em", // 0px
  SM: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  MD: "48em", // ~768px
  LG: "62em", // ~992px
  XL: "80em", // ~1280px
  "2XL": "96em", // ~1536px
};
