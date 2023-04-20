import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", name: "Home", component: About },
  { path: "/about", name: "About", component: Home },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
