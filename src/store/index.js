import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userCoupons: null,
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
    },
    /* TODO --> WRITE PARSE FUNCTIONS FOR THOSE SEGMENTS OF DASHBOARD GUI YOU NEED */
    Parse_user_coupons(state, data) {
      let couponsArray = [];
      for(const element in data)
          /* TODO CHANGE THIS HARDCODED ID TO THE: state.user.user.id */
        if(data[element].user_id === 6)
          couponsArray.push(data[element]);
      state.userCoupons = couponsArray;
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
    },
    /* TODO --> HERE YOU MAKE ALL API REQUESTS IN PURPOSE FOR DASHBOARD */
    async getUserApiData({commit}) {
      /* TODO API DATA ABOUT --> CATEGORIES */
      // const categories = await axios.get(`${process.env.VUE_APP_API_HOST}/categories`);
      // console.log(categories);
      /* TODO API DATA ABOUT --> SPECIAL OFFERS */
      /* TODO API DATA ABOUT --> TRANSACTIONS */

      /* DONE --> API DATA ABOUT --> COUPONS */
      const coupons = await axios.get(`${process.env.VUE_APP_API_HOST}/coupons`);
      commit('Parse_user_coupons', coupons.data);

      /* TODO API DATA ABOUT --> USER PROFILE */

    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
});

