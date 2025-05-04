import { createStore } from "vuex";
import products from "./modules/products";
import category from "./modules/category";
import search from "./modules/search";

const store = createStore({
  modules: {
    products,
    category,
    search,
  },
});
export default store;
