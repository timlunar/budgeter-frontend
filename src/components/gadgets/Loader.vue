<template>
  <div class="d-flex flex-column align-items-center justify-content-center p-0 bt-loader">
    <img src="@/assets/images/iconWallet.png" alt="" style="width:90px;">
    <span style="font-size: 2rem;">Budgeter</span>
    <div class="lds-ripple">
      <div v-for="i in 5" :key="i"></div>
    </div>
  </div>
</template>

<script>
export default {
name: "Loader"
}
</script>

<style scoped>

</style>
