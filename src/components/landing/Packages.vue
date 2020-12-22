<template>
  <div class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5 pb-5 bt-packages" id="packages">
    <h1>Get your <span class="green-text">special offer</span></h1>
    <div class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5">
      <div class="d-flex flex-column text-center justify-content-center align-items-center col-xl-7 col-12 p-0">
        <h2>Choose your special offer package</h2>
        <h6>Want to have some new action <span class="green-text">packages?</span></h6>
        <div class="col-6 text-center p-0 pt-3">
          <span>Every user can create it's own action package and confront them public. You can choose here some of these packages and enjoy free application.</span>
          <br>
          <button class="btn btn-outline-success mt-5 mb-5" @click="showOffers = !showOffers">Click to {{ changeButtonText }} offers</button>
        </div>
      </div>
      <div class="col-xl-5 col-10 p-0">
        <vueper-slides
            :breakpoints="breakpoints"
            ref="offersSlider"
            fade
            :bullets="false"
            class="no-shadow">
          <vueper-slide
              v-for="slide in $store.state.userOffers"
              :key="slide.id">

            <template v-slot:content v-if="showOffers">
              <div class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5">
                <div class="d-flex flex-column col-9 mr-xl-3 mt-xl-0 mt-md-5 mt-0 bt-promotion__card" data-aos="fade-right">
                  <div class="pt-4 p-3">
                    <div class="d-flex flex-wrap">
                      <i class="ti-gift my-auto bt-offer"></i><h3 class="m-0 pl-2">Special offer #{{ slide.id }}</h3>
                    </div>
                    <!--<img src="~@/assets/images/twitterIcon.png" class="bt-promotion__icons">-->
                    <p>{{ slide.description }}</p>
                    <p class="green-text"><b>@special_offers</b></p>
                  </div>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Packages",
  data() {
    return {
      showOffers: false,
      breakpoints: {
        1281: {
          slideRatio: 1 / 2,
        },
        768: {
          slideRatio: 1 / 2
        }
      }
    };
  },
  computed: {
    changeButtonText() {
      return this.showOffers ? "hide" : "see";
    }
  }
}
</script>

<style scoped>

</style>
