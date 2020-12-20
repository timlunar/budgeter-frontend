import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userCoupons: null,
    userOffers: null,
    userTransactions: null,
    categoriesObject: null,
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
        if(data[element].user_id === state.user.user.id)
          couponsArray.push(data[element]);
      state.userCoupons = couponsArray;
    },
    Parse_user_categories(state, data) {
      let categoriesObject = {};
      for(const element in data) {
        categoriesObject[data[element].id] = { id: data[element].id, name: data[element].name };
      }
      console.log(categoriesObject);
      state.categoriesObject = categoriesObject;
    },
    Parse_user_transactions(state, data) {
      let transactionsArray = [];
      for(const element in data)
        if(data[element].user_id === state.user.user.id)
          transactionsArray.push(data[element]);
      state.userTransactions = transactionsArray;
    },
    /* TODO --> PARSE SPECIAL OFFERS */
    // Parse_special_offers
    Parse_user_specialOffers(state, data) {
      let transactionsArray = [];
      for(const element in data)
        transactionsArray.push(data[element]);
      state.userOffers = transactionsArray;
    }

  },
  actions: {
    register({ commit }, credentials) {
      return axios.post(`${process.env.VUE_APP_API_HOST}/register`, credentials).then (
          ({ data }) => { //to je data, ki jo dobimo kot server response!
            commit('SET_USER_DATA', data)
            commit('Set_loading')
          }
      )
    },
    async login({ commit }, credentials) {
      commit('Set_loading');
      return axios.post(`${process.env.VUE_APP_API_HOST}/login`, credentials).then (
          ({ data }) => {
            commit('SET_USER_DATA', data)
            commit('Set_loading');
          }
    )
    },
    logout({commit}) {
      commit('Set_loading');
      return axios.post(`${process.env.VUE_APP_API_HOST}/logout`).then (
          () => {
            commit('CLEAR_USER_DATA')
            commit('Set_loading');
          }
      )
    },
    /* TODO --> HERE YOU MAKE ALL API REQUESTS IN PURPOSE FOR DASHBOARD */
    async getUserApiData({commit}) {
      /* TODO API DATA ABOUT --> SPECIAL OFFERS */
      const specialOffers = await axios.get(`${process.env.VUE_APP_API_HOST}/offers`);
      console.log(specialOffers.data);
      commit('Parse_user_specialOffers', specialOffers.data);

      /* DONE --> API DATA ABOUT --> CATEGORIES */
      const categories = await axios.get(`${process.env.VUE_APP_API_HOST}/categories`);
      commit('Parse_user_categories', categories.data);

      /* DONE --> API DATA ABOUT --> TRANSACTIONS */
      const transactions = await axios.get(`${process.env.VUE_APP_API_HOST}/transactions`);
      commit('Parse_user_transactions', transactions.data);

      /* DONE --> API DATA ABOUT --> COUPONS */
      const coupons = await axios.get(`${process.env.VUE_APP_API_HOST}/coupons`);
      commit('Parse_user_coupons', coupons.data);

      /* TODO API DATA ABOUT --> USER PROFILE */
    },

    /* INSERT FUNCTIONS */
    async insert_user_coupon({commit}, insertObject) {
      try {
        await axios.post(`${process.env.VUE_APP_API_HOST}/coupons`, insertObject.payload).then(() => {
          alert("Coupon was successfully added");
        })
      }catch (e) {
        alert("Coupon was not added");
      } finally {
        const coupons = await axios.get(`${process.env.VUE_APP_API_HOST}/coupons`);
        commit('Parse_user_coupons', coupons.data);
      }
    },

    async insertUserTransaction({commit}, insertObject) {
      try {
        await axios.post(`${process.env.VUE_APP_API_HOST}/transactions`, insertObject.payload).then(() => {
          alert("transaction was successfully added");
        })
      } catch (e) {
        alert("transaction was not added");
      } finally {
        const transactions = await axios.get(`${process.env.VUE_APP_API_HOST}/transactions`);
        commit('Parse_user_transactions', transactions.data);
      }
    },

    /* UPDATE FUNCTIONS */
    async update_user_coupon({commit}, updateObject) {
      try {
        await axios.patch(`${process.env.VUE_APP_API_HOST}/coupons/${updateObject.id}`, updateObject.payload).then(() => {
          alert("Coupon was successfully updated");
        })
      }catch (e) {
        alert("Coupon was not updated");
      } finally {
        const coupons = await axios.get(`${process.env.VUE_APP_API_HOST}/coupons`);
        commit('Parse_user_coupons', coupons.data);
      }
    },
    /* DELETE FUNCTIONS */
    async deleteUserCoupon({commit}, deleteObject) {
      try {
        await axios.delete(`${process.env.VUE_APP_API_HOST}/coupons/${deleteObject.id}`).then(() => {
          alert("Coupon was successfully deleted");
        })
      }catch (e) {
        alert("Coupon was not deleted");
      } finally {
        const coupons = await axios.get(`${process.env.VUE_APP_API_HOST}/coupons`);
        commit('Parse_user_coupons', coupons.data);
      }
    },
    async deleteUserTransaction({commit}, deleteObject){
      try {
        await axios.delete(`${process.env.VUE_APP_API_HOST}/transactions/${deleteObject.id}`).then(() => {
          alert("transaction was successfully deleted");
        })
      }catch (e) {
        alert("transaction was not deleted");
      } finally {
        const coupons = await axios.get(`${process.env.VUE_APP_API_HOST}/transactions`);
        commit('Parse_user_transactions', coupons.data);
      }
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
});
