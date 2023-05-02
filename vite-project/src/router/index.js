import { createRouter, createWebHistory } from "vue-router";
import ActualBar from "../views/Home.vue";
import BarChart from "../views/About.vue";
import DataCard from "../views/DataCard.vue";

const routes = [
  { path: "/doughnut", name: "Doughnut", component: BarChart },
  { path: "/bar", name: "Bar", component: ActualBar },
  { path: "/", name: "Data", component: DataCard },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
