<template>
  <header class="align-items-center fixed-top">
    <b-navbar class="navbar-inside pt-3" toggleable="lg">
      <b-navbar-brand href="#">
          <img src="@/assets/images/iconWallet.png" alt="" style="width:40px;">
          Budgeter
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/" v-scroll-to="'#home'" class="nav-link">Home</router-link>
          <b-nav-item href="#"
                      v-scroll-to="'#guidelines'">Guidelines</b-nav-item>
          <b-nav-item href="#"
                      v-scroll-to="'#functionalities'">Functionalities</b-nav-item>
          <b-nav-item href="#"
                      v-scroll-to="'#promotion'">Feedbacks</b-nav-item>
          <b-nav-item href="#"
                      v-scroll-to="'#packages'">Packages</b-nav-item>
          <b-nav-item href="#"
                      v-scroll-to="'#footer'">About us</b-nav-item>

          <router-link to="/login" class="btn btn-outline-success btn-navbar nav-link pt-2 ml-3" v-if="$store.state.user == null">Login</router-link>
          <button class="btn btn-outline-success btn-navbar nav-link" v-else @click="logout">Logout</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import axios from "axios";

export default {
name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch('logout');
      return axios.post('https://arcane-castle-36997.herokuapp.com/api/logout').then();
    }
  }
}
</script>

<style scoped>

</style>
