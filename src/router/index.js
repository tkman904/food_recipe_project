import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/main/HomeView.vue";
import FoodDetailView from "@/views/food/FoodDetailView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/food/detail/:fno",
        name: "food_detail",
        component: FoodDetailView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router