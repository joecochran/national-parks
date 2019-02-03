import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stateCode: '',
    searchResults: [],
    isLoading: false,
  },
  mutations: {
    setQuery(state, stateCode) {
      state.stateCode = stateCode;
    },
    setResults(state, results) {
      state.searchResults = results;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    doSearch({ commit }, query) {
      api.getParks(query).then((response) => {
        commit('setQuery', query);
        commit('setResults', response.data.data);
        console.log(response.data.data);
      });
    },
  },
});
