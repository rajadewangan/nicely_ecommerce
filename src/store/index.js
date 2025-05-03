import { createStore } from "vuex";
import products from "./modules/products";
import category from "./modules/category";

const store = createStore({
  modules: {
    products,
    category,
  },
});
export default store;
