import { createRouter, createWebHistory } from "vue-router";
import routeConfig from '../configs/route.config';

export const router = createRouter({
  history: createWebHistory(__APP_BASE_URL__),
  routes: routeConfig
})