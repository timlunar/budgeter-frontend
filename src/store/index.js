import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isLoading: false
  },
  mutations: {
    Set_loading(state) {
      state.isLoading = !state.isLoading;
    },
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData))

      // !!!!!! ADDING TOKEN TO THE AXIOS HEADER !!!!!!
      axios.defaults.headers.common['Authorization'] = `Bearer ${
          userData.token
      }`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post('https://arcane-castle-36997.herokuapp.com/api/register', credentials).then (
          ({ data }) => { //to je data, ki jo dobimo kot server response!
            commit('SET_USER_DATA', data)
            commit('Set_loading')
          }
      )
    },
    async login({ commit }, credentials) {
      commit('Set_loading');
      return axios.post('https://arcane-castle-36997.herokuapp.com/api/login', credentials).then (
          ({ data }) => {
            commit('SET_USER_DATA', data)
            commit('Set_loading')
          }
    )
    },
    logout({commit}) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})
