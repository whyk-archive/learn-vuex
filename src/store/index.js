import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'カウント！',
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    textchange(state, payload) {
      state.title = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
