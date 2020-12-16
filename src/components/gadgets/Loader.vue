<template>
  <div class="d-flex flex-wrap align-items-center justify-content-center p-0 bt-loader">
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
