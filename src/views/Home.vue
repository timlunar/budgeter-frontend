<template>
  <div class="col-12 p-0" style="margin-top: 70px;">
    <div class="bt-picture" id="home">
      <div class="d-flex flex-wrap justify-content-center">
        <div class="d-flex flex-column align-items-center text-center" style="margin-top: 120px;">
          <h1>Reach your goals effortlessly with Budgeter</h1>
          <h5>Budgeter helps you save, invest, pay off debt, and prevent overdrafts.</h5>
          <router-link to="/login" class="btn btn-success btn-signUp">Sign up now</router-link>
        </div>
      </div>
    </div>

    <Guidelines></Guidelines>

    <Functionalities></Functionalities>

    <Promotion></Promotion>

    <Packages></Packages>

  </div>
</template>

<script>
import Guidelines from "@/components/landing/Guidelines";
import Promotion from "@/components/landing/Promotion";
import Packages from "@/components/landing/Packages";
import Functionalities from "@/components/landing/Functionalities";
export default {
  name: "Home",
  components: {Functionalities, Packages, Promotion, Guidelines}
};
</script>
