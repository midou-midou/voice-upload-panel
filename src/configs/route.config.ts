import siteConfig from "./site.config";
import DisplayPanel from "../views/DisplayPanel.vue"

const baseRouteConfig = [
  {
    path: '/',
    name: 'home',
    redirect: `${Object.keys(siteConfig.vups).shift()}`
  }
]

const routeConfig = [
  ...Object.keys(siteConfig.vups).map((vup) => ({
    path: `/${vup}`,
    name: `${vup}`,
    component: DisplayPanel
  })),
  ...baseRouteConfig
]

export default routeConfig;