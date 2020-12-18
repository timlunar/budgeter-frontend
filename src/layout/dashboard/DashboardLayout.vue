<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/categories" name="Categories" icon="ti-pencil"/>
        <sidebar-link to="/special-offer" name="Special offers" icon="ti-gift"/>
        <sidebar-link to="/transactions" name="Transactions" icon="ti-wallet"/>
        <sidebar-link to="/coupons" name="Coupons" icon="ti-credit-card"/>
        <sidebar-link to="/user-profile" name="User profile" icon="ti-user"/>
        <!-- TODO MAKE USER SECTION ONLY FOR ADMIN -->
        <!--<sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>-->
        <sidebar-link to="/" name="button"><button class="btn btn-outline-success btn-navbar nav-link" @click="logout">Logout</button></sidebar-link>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import axios from "axios";
export default {
  components: {
    TopNavbar,
    DashboardContent
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    logout() {
      this.$store.dispatch('logout');
      return axios.post('https://arcane-castle-36997.herokuapp.com/api/logout').then();
    }
  },
  async mounted(){
    await this.$store.dispatch('getUserApiData');
  }
};
</script>
