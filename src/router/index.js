import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Curiosidades from "../views/Curiosidades.vue";
import AllCuriosidades from "../views/AllCuriosidades.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/curiosidad/:id",
    component: Curiosidades,
  },
  {
    path: "/all-curiosidades",
    component: AllCuriosidades,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
