<template>
  <div class="row">
    <div class="col-md-12">
     <div class="col-12">
       <card class="card-plain">
         <div class="table-full-width table-responsive">
           <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data" :columns="table2.columns" @deleteLine="deleteLine" @updateLine="updateTransaction"></paper-table>
         </div>
       </card>
     </div>
    </div>

    <div class="d-flex flex-wrap col-md-12 p-0">
      <div class="col-xl-6 col-12">
        <div class="card card">
          <div class="card-header">
            <h5>Create new transaction</h5>
          </div>
          <div class="d-flex flex-wrap card-body">
            <div class="d-flex flex-column col-xl-6 col-12 p-3">
              <label>Amount</label>
              <input v-model="insertAmount" type="number" min="0" placeholder="Amount value">
            </div>

            <div class="d-flex flex-column col-xl-6 col-12 p-3">
              <label>Categories</label>
              <select v-model="insertCategory" class="pt-1">
                <option  v-for="index in $store.state.categoriesObject" :value="index.id" :key="index.id">{{ index.name }}</option>
              </select>
            </div>

            <div class="d-flex flex-column col-12 p-3">
              <label>Description</label>
              <input v-model="insertDescription" type="text" placeholder="Coupon description">
            </div>

            <div class="d-flex flex-column col-12 p-3">
              <label for="expense">Expense</label>
              <input type="checkbox" id="expense" v-model="insertExpense">
            </div>

            <button class="btn btn-outline-success mt-3 ml-3" @click="insertTransaction">Insert</button>
            <button class="btn btn-outline-danger mt-3 ml-5" @click="clearTransactionInsert">Clear</button>
          </div>
        </div>
      </div>
      <!--<div class="col-xl-6 col-12">
        <div class="card card">
          <div class="card-header">
            <h5>Edit transaction</h5>
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

            <button class="btn btn-outline-success mt-3 ml-3" @click="updateLine">Update</button>
            <button class="btn btn-outline-danger mt-3 ml-5" @click="clearCouponUpdate">Clear</button>
          </div>
        </div>
      </div>-->
    </div>

  </div>
</template>
<script>
import PaperTable from "@/components/PaperTable";
const tableColumns = ["Id", "description", "amount", "expense", "category_id","delete", "update"];

export default {
  components: { PaperTable },
  data() {
    return {
      insertAmount: 0,
      insertCategory: 1,
      insertDescription: "",
      insertExpense: false,
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...this.$store.state.userTransactions]
      }
    };
  },
  methods: {
    /* TODO --> ALL THIS FUNCTIONS ARE FOR HANDLING THE FORM */
    clearTransactionInsert(){},

    /* TODO --> ALL THIS FUNCTIONS ARE FOR THE AXIOS REQUESTS */
    async deleteLine() {},
    async updateTransaction() {},
    async insertTransaction() {}
  }
};
</script>
<style>
</style>
