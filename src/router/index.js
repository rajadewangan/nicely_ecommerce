import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue"
import Cart from "../views/Cart.vue";
import Search from "../views/Search.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";

const routes = [{ path: "/", name: "Home", component: Home },
    {path:'/product/:id',name:"Product",component:Product},
    {path:'/cart',name:"Cart",component:Cart},
    {path:'/search',name:"Search",component:Search},
    {path:'/category/:category',name:"Category",component:Category},
    {path:'/login',name:"Login",component:Login},

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
