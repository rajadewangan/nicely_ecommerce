// store/modules/search.js
import api from "../axios";

export default {
  namespaced: true,
  state: {
    query: "",
    suggestions: [],
    filters: {
      priceRange: [0, 10000],
      brands: [],
      ratings: [],
      category: null,
    },
    results: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_QUERY(state, query) {
      state.query = query;
    },
    SET_SUGGESTIONS(state, suggestions) {
      state.suggestions = suggestions;
    },
    SET_FILTERS(state, filters) {
      state.filters = { ...state.filters, ...filters };
    },
    SET_SORT(state, sortBy) {
      state.sortBy = sortBy;
    },
    SET_RESULTS(state, results) {
      state.results = results;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_SUGGESTIONS(state) {
      state.suggestions = [];
    },
  },
  actions: {
    async fetchSearchResults({ commit,state }, searchKeyword) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await api.get(`/products/search`, {
          params: {
            q: searchKeyword,
          },
        });
        commit("SET_RESULTS", response.data.products);
      } catch (error) {
        commit("SET_ERROR", error.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchSearchSuggestions({ commit }, searchKeyword) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await api.get(`/products/search`, {
          params: {
            q: searchKeyword,
            limit: 10,
            select: "title",
          },
        });
        commit("SET_SUGGESTIONS", response.data.products);
      } catch (error) {
        commit("SET_ERROR", error.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async clearSuggestions({commit}) {
      commit("CLEAR_SUGGESTIONS");
    },
  },
  getters: {
    searchResults: (state) => state.results,
    searchSuggestions: (state) => state.suggestions,
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },
};
