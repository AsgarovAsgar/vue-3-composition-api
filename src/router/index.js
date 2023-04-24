import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import Basics from '../views/Basics.vue'

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/basics", name: "Basics", component: Basics },
  { path: "/post/:id", name: "Post", component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;