import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Search from "../views/Search.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import OrderHistory from "../views/OrderHistory.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/product/:productId", name: "Product", component: Product },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/search/:searchQuery", name: "Search", component: Search },
  { path: "/category/:category", name: "Category", component: Category },
  { path: "/login", name: "Login", component: Login },
  { path: "/orders", name: "Orders", component: OrderHistory },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
