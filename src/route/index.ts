import { createRouter, createWebHistory } from "vue-router";
import routeConfig from '../configs/route.config';

export const router = createRouter({
  history: createWebHistory(),
  routes: routeConfig
})