<template>
  <div class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5 pb-5 bt-packages" id="packages">
    <h1>Get your <span class="green-text">special offer</span></h1>
    <div class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5">
      <div class="d-flex flex-column text-center justify-content-center align-items-center col-xl-7 col-12 p-0">
        <h1>Choose your special offer package</h1>
        <h6>Want to have some new action <span class="green-text">packages?</span></h6>
        <div class="col-6 text-center p-0 pt-3">
          <span>Every user can create it's own action package and confront them public. You can choose here some of these packages and enjoy free application.</span>
        </div>
        <button class="btn btn-outline-success mt-5 mb-5">Check out</button>
      </div>
      <div class="col-xl-5 col-10 p-0">
        <vueper-slides
            ref="myVueperSlides"
            fade
            :bullets="false"
            class="no-shadow">
          <vueper-slide
              v-for="slide in slides"
              :key="slide.id">

            <template v-slot:content>
              <div class="d-flex flex-wrap justify-content-center col-12 p-0 pt-5">
                <div class="d-flex flex-column col-9 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-right">
                  <div class="pt-4 p-3">
                    <img src="~@/assets/images/twitterIcon.png" class="bt-promotion__icons">
                    <p>{{ slide.content }}</p>
                    <p class="green-text"><b>@MatthewDibble</b></p>
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
      slides: [
        {
          id: "sl-1",
          content: "I love this app! We were able to save for two vacations without thinking about it."
        },
        {
          id: "sli-2",
          content: "Porsche 911 GT3 RS PDK"
        },
        {
          id: "sli-3",
          content: "Porsche 911 GT3 RS PDK"
        },
        {
          id: "sli-4",
          content: "Porsche 911 GT3 RS PDK"
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>
