<template>
  <footer class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5" id="footer">
    <div class="d-flex flex-column align-items-center col-xl-3 col-md-4 col-12">
      <router-link to="/" v-scroll-to="'#home'" class="pt-xl-0 pt-5">
        <img src="@/assets/images/iconWallet.png" alt="" style="width:60px;">
        <span class="pl-2" style="font-size: 20px;">Budgeter</span>
      </router-link>
    </div>
    <div class="d-flex flex-column align-items-center col-xl-3 col-md-4 col-12 pt-xl-0 pt-3">
      <h6 class="green-text pt-xl-0 pt-5">ABOUT US</h6>
      <span>Budgeter Inc.</span>
      <span>budgeter@gmail.com</span>
      <span>Ljubljana, Slovenia</span>
    </div>
    <div class="d-flex flex-column align-items-center col-xl-3 col-md-4 col-12 pt-xl-0 pt-3 pb-5">
      <h6 class="green-text pt-xl-0 pt-5">FOLLOW US</h6>
      <div class="d-flex flex-wrap">
        <font-awesome-icon class="footer-icons" :icon="['fab', 'twitter']" />
        <font-awesome-icon class="footer-icons" :icon="['fab', 'facebook']" />
        <font-awesome-icon class="footer-icons" :icon="['fab', 'instagram']" />
      </div>
    </div>

    <span class="text-center col-12 p-0 pt-5 pb-3 footer-licence" style="color: lightgray"><b class="green-text">Budgeter </b>Copyright © 2020</span>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
