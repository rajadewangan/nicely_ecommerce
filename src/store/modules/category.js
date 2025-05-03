import api from '../axios'

export default {
  namespaced: true,
  state: {
    categoryList: [],
    categoryProducts:[],
    newCategoryProducts:[],
    loading: false,
    error: null
  },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList
    },
    SET_CATEGORY_PRODUCTS(state,products){
      state.categoryProducts=products
    },
    SET_NEW_CATEGORY_PRODUCTS(state,products){
        state.newCategoryProducts=products
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchAllCategory({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const response = await api.get('/products/category-list') 
        commit('SET_CATEGORY_LIST', response.data)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchCategoryproducts({ commit },category) {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        try {
          const response = await api.get(`/products/category/${category}`) 
          commit('SET_CATEGORY_PRODUCTS', response.data.products)
        } catch (error) {
          commit('SET_ERROR', error.message)
        } finally {
          commit('SET_LOADING', false)
        }
      },
      async fetchNewCategoryProducts({commit,state}){
        try {
            const sorted = [...state.categoryProducts].sort((a, b) => {
              const dateA = new Date(a.meta?.createdAt);
              const dateB = new Date(b.meta?.createdAt);
              return dateB - dateA; 
            });
            const top = sorted.slice(0,6);
            commit('SET_NEW_CATEGORY_PRODUCTS', top);
          } catch (error) {
            commit('SET_ERROR', 'Sorting failed: ' + error.message);
          }
      },
  },
  getters: {
    categoryList: (state) => state.categoryList,
    categoryProducts:(state) =>state.categoryProducts,
    newCategoryProducts:(state)=>state.newCategoryProducts,
    isLoading: (state) => state.loading,
    error: (state) => state.error
  }
}
