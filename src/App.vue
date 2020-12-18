<template>
  <div id="app">
    <Loader v-if="$store.state.isLoading"></Loader>
    <template v-else>
      <Navbar v-if="$store.state.user == null"></Navbar>
      <router-view />
      <Footer v-if="$store.state.user == null"></Footer>
    </template>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-vue/src/index.scss";
@import "./assets/scss/index";

.vue-notifyjs.notifications {
  .alert {
    z-index: 10000;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}

</style>

<style
    rel="stylesheet"
    src="../node_modules/vueperslides/dist/vueperslides.css"

/>

<script>
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/gadgets/Loader";
export default {
  components: {Loader, Footer, Navbar}
}
</script>
