<template>
    <div class="row">
      <div class="col-md-12">
        <div class="col-12">
          <card class="card-plain">
            <div class="table-full-width table-responsive">
              <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data" :columns="table2.columns" @deleteLine="deleteLine" @updateLine="fillUpdateForm"></paper-table>
            </div>
          </card>
        </div>
      </div>

      <div class="d-flex flex-wrap col-md-12 p-0">
        <div class="col-xl-6 col-12">
          <div class="card card">
            <div class="card-header">
              <h5>Create new coupon</h5>
            </div>
            <div class="d-flex flex-wrap card-body">
              <div class="d-flex flex-column col-xl-6 col-12 p-3">
                <label>Start date</label>
                <input v-model="insertStartDate" type="date" placeholder="Coupon start date">
              </div>
              <div class="d-flex flex-column col-xl-6 col-12 p-3">
                <label>End date</label>
                <input v-model="insertEndDate" type="date" placeholder="Coupon end date">
              </div>
              <div class="d-flex flex-column col-12 p-3">
                <label>Description</label>
                <input v-model="insertDescription" type="text" placeholder="Coupon description">
              </div>

              <button class="btn btn-outline-success mt-3 ml-3" @click="insertCoupon">Insert</button>
              <button class="btn btn-outline-danger mt-3 ml-5" @click="clearCouponInsert">Clear</button>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-12">
          <div class="card card">
            <div class="card-header">
              <h5>Edit coupon</h5>
            </div>
            <div class="d-flex flex-wrap card-body">
              <div class="d-flex flex-column col-xl-6 col-12 p-3">
                <label>Start date</label>
                <input v-model="startDate" type="text" placeholder="Coupon start date">
              </div>
              <div class="d-flex flex-column col-xl-6 col-12 p-3">
                <label>End date</label>
                <input v-model="endDate" type="text" placeholder="Coupon end date">
              </div>
              <div class="d-flex flex-column col-12 p-3">
                <label>Description</label>
                <input v-model="description" type="text" placeholder="Coupon description">
              </div>

              <button class="btn btn-outline-success mt-3 ml-3" @click="updateCoupon">Update</button>
              <button class="btn btn-outline-danger mt-3 ml-5" @click="clearCouponUpdate">Clear</button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import PaperTable from "@/components/PaperTable";
const tableColumns = ["Id", "description", "start_date", "end_date", "delete", "update"];

export default {
  components: { PaperTable },
  data() {
    return {
      startDate: "",
      endDate: "",
      description: "",
      couponValue: "",
      insertStartDate: "",
      insertEndDate: "",
      insertDescription: "",
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...this.$store.state.userCoupons]
      }
    };
  },
  methods: {
    clearCouponUpdate() {
      this.endDate = "";
      this.startDate = "";
      this.description = "";
      this.couponValue = "";
    },
    clearCouponInsert() {
      this.insertEndDate = "";
      this.insertStartDate = "";
      this.insertDescription = "";
    },
    /* THIS FUNCTION CREATE AXIOS DELETE FORM */
    async deleteLine(value) {
      console.log("FROM COUPONS");
      console.log(value);
      await this.$store.dispatch('deleteUserCoupon', { id: value.id });
    },
    /* THIS FUNCTION FILLS UPDATE FORM WITH ALL DATA */
    fillUpdateForm(value) {
      this.couponValue = value;
      this.endDate = value.end_date;
      this.startDate = value.start_date;
      this.description = value.description;
    },
    /* THIS FUNCTION CREATE AXIOS REQUEST FOR UPDATE THE COUPON */
    async updateCoupon() {
      const object = {
        user_id: this.$store.state.user.user.id,
        description: this.description,
        start_date: this.startDate,
        end_date: this.endDate,
        created_at: this.couponValue.created_at,
        updated_at: this.couponValue.updated_at
      };
      await this.$store.dispatch('update_user_coupon', {id: this.couponValue.id, payload: object});
      this.clearCouponUpdate();
    },
    /* THIS FUNCTION CREATE AXIOS REQUEST FOR INSERT THE COUPON */
    async insertCoupon() {
      const time = new Date().toISOString().slice(0, 20).replace(".", "").split("T")[1];
      const object = {
        user_id: this.$store.state.user.user.id,
        description: this.insertDescription,
        start_date: `${this.insertStartDate} ${time}`,
        end_date: `${this.insertEndDate} ${time}`
      };
      await this.$store.dispatch('insert_user_coupon', {payload: object});
      this.clearCouponInsert();
    }
  }
};
</script>
<style>
</style>
