<template>
  <div class="col-12 p-0 bt-functionalities" id="functionalities">
    <h1 class="text-center bt-functionalities__title"><span class="bt-functionalities__title-black">Our</span> functionalities</h1>

    <div class="d-flex flex-wrap justify-content-center col-12 p-0 pl-xl-0 pr-xl-0 pl-3 pr-3 bt-promotion__cards bt-functionalities__cards pb-5">
      <div class="d-flex flex-column col-xl-3 col-12 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-right">
        <div class="pt-4 p-3">
          <!--<img src="~@/assets/images/twitterIcon.png" class="bt-promotion__icons">-->
          <div class="d-flex flex-wrap pb-3">
            <i class="ti-panel my-auto bt-offer"></i><h3 class="m-0 pl-2">Dashboard</h3>
          </div>
          <ul>
            <li>Quick data review</li>
            <li>Graphical data review</li>
            <li>Balance sheet control</li>
          </ul>
          <p class="green-text"><b>@user_dashboard</b></p>
        </div>
      </div>
      <div class="d-flex flex-column col-xl-3 col-12 mr-xl-3 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-down">
        <div class="pt-4 p-3">
          <div class="d-flex flex-wrap pb-3">
            <i class="ti-wallet my-auto bt-offer"></i><h3 class="m-0 pl-2">Transactions</h3>
          </div>
          <ul>
            <li>Adding new transactions</li>
            <li>Deleting transactions</li>
            <li>Quick and easy</li>
          </ul>
          <p class="green-text"><b>@user_transactions</b></p>
        </div>
      </div>
      <div class="d-flex flex-column col-xl-3 col-12 mt-xl-0 mt-3 bt-promotion__card" data-aos="fade-right">
        <div class="pt-4 p-3">
          <div class="d-flex flex-wrap pb-3">
            <i class="ti-credit-card my-auto bt-offer"></i><h3 class="m-0 pl-2">Coupons</h3>
          </div>
          <ul>
            <li>Adding new coupon</li>
            <li>Deleting coupons</li>
            <li>Update old coupon</li>
          </ul>
          <p class="green-text"><b>@user_coupons</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Functionalities"
}
</script>

<style scoped>

</style>
