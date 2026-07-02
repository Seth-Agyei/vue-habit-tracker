// Import the Vue.js router library router functions
import { createRouter, createWebHistory } from "vue-router";
// Import the Pages
import HabitView from "../pages/HabitView.vue";
import AnalyticsView from "../pages/AnalyticsView.vue";

const routes = [
    { path: "/", component: HabitView },
    { path: "/analytics", component: AnalyticsView }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router;