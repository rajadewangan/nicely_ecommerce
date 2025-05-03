import api from '../axios'

export default {
  namespaced: true,
  state: {
    products: [],
    mostBoughtProducts:[],
    loading: false,
    error: null
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_MOST_BOUGHT_PRODUCTS(state,products){
      state.mostBoughtProducts=products
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const response = await api.get('/products?limit=9') 
        commit('SET_PRODUCTS', response.data.products)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchMostBoughtProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const response = await api.get('/products') 
        const sorted = response.data.products
        .sort((a,b)=>b.rating - a.rating)
        .slice(0,6);
        commit('SET_MOST_BOUGHT_PRODUCTS', sorted)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    allProducts: (state) => state.products,
    mostBoughtProducts:(state)=>state.mostBoughtProducts,
    isLoading: (state) => state.loading,
    error: (state) => state.error
  }
}
