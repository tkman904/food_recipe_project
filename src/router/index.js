import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/main/HomeView.vue";
import FoodDetailView from "@/views/food/FoodDetailView.vue";
import FoodFindView from "@/views/food/FoodFindView.vue";
import BoardListView from "@/views/board/BoardListView.vue";
import BoardDetailView from "@/views/board/BoardDetailView.vue";

const routes = [
    {
        path: "/vue/main",
        name: "home",
        component: HomeView
    },
    {
        path: "/vue/food/detail/:fno",
        name: "food_detail",
        component: FoodDetailView
    },
    {
        path: "/vue/find",
        name: "food_find",
        component: FoodFindView
    },
    {
        path: "/board/list",
        name: "board_list",
        component: BoardListView
    },
    {
        path: "/board/detail/:no",
        name: "board_detail",
        component: BoardDetailView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router