<template>
  <div class="wrapper">
    <Loader v-if="$store.state.isLoading"></Loader>
    <template v-else>
      <side-bar>
        <template slot="links">
          <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel"/>
          <sidebar-link to="/special-offer" name="Special offers" icon="ti-gift"/>
          <sidebar-link to="/transactions" name="Transactions" icon="ti-wallet"/>
          <sidebar-link to="/coupons" name="Coupons" icon="ti-credit-card"/>
          <sidebar-link to="/user-profile" name="User profile" icon="ti-user"/>
          <sidebar-link to="/" name="button"><button class="btn btn-outline-success btn-navbar nav-link" @click="logout">Logout</button></sidebar-link>
        </template>
      </side-bar>
      <div class="main-panel">
        <top-navbar></top-navbar>

        <dashboard-content @click.native="toggleSidebar">

        </dashboard-content>
      </div>
    </template>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import Loader from "@/components/gadgets/Loader";

export default {
  components: {
    Loader,
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
    }
  },
  async mounted(){
    await this.$store.dispatch('getUserApiData');
  }
};
</script>
