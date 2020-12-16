<template>
  <div id="app">
    <Loader v-if="$store.state.isLoading"></Loader>
    <template v-else>
      <Navbar></Navbar>
      <router-view />
      <Footer></Footer>
    </template>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-vue/src/index.scss";
@import "./assets/scss/index";
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
