<template>
  <div class="text-center col-12 p-0 pt-5 bt-promotion" id="promotion">
    <h1>Don't just take our word for it</h1>
    <h6>Hear from Budgeter members on <span class="green-text">Twitter</span>, <span class="green-text">Facebook</span> and <span class="green-text">Instagram</span>.</h6>

    <div class="d-flex flex-wrap justify-content-center col-12 p-0 bt-promotion__cards">
      <div class="d-flex flex-column col-xl-3 col-12 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-right">
        <div class="pt-4 p-3">
          <img src="~@/assets/images/twitterIcon.png" class="bt-promotion__icons">
          <p>I love this app! We were able to save for two vacations without thinking about it.</p>
          <p class="green-text"><b>@MatthewDibble</b></p>
        </div>
      </div>
      <div class="d-flex flex-column col-xl-3 col-12 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-down">
        <div class="pt-4 p-3">
          <img src="~@/assets/images/facebookIcon.png" class="bt-promotion__icons">
          <p>I’ve saved over $2,600 for our Vacation Fund, in the 1 year I’ve been using @hellodigit.</p>
          <p class="green-text"><b>@Christy</b></p>
        </div>
      </div>
      <div class="d-flex flex-column col-xl-3 col-12 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-up">
        <div class="pt-4 p-3">
          <img src="~@/assets/images/instagramIcon.png" class="bt-promotion__icons">
          <p>This app has turned me from someone who can't save money into someone who can.</p>
          <p class="green-text"><b>@Brooke</b></p>
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center col-12 p-0 bt-promotion__cards">
      <div class="d-flex flex-column col-xl-3 col-12 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-right">
        <div class="pt-4 p-3">
          <img src="~@/assets/images/twitterIcon.png" class="bt-promotion__icons">
          <p>Simple, easy to use and effective</p>
          <p class="green-text"><b>@JureČasar</b></p>
        </div>
      </div>
      <div class="d-flex flex-column col-xl-3 col-12 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-up">
        <div class="pt-4 p-3">
          <img src="~@/assets/images/twitterIcon.png" class="bt-promotion__icons">
          <p>Make it simple as possible, but not the simplest. Great product guys!</p>
          <p class="green-text"><b>@IgorKononenko</b></p>
        </div>
      </div>
      <div class="d-flex flex-column col-xl-3 col-12 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-down">
        <div class="pt-4 p-3">
          <img src="~@/assets/images/instagramIcon.png" class="bt-promotion__icons">
          <p>My finance was never so organized until now. Fantastic</p>
          <p class="green-text"><b>@DamjanFujs</b></p>
        </div>
      </div>
    </div>
    <router-link to="/login" class="btn btn-outline-success mt-5 mb-5">Create your own Budgeter account</router-link>
  </div>
</template>

<script>
export default {
name: "Promotion"
}
</script>

<style scoped>

</style>
