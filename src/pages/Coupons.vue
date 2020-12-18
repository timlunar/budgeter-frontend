<template>
    <div class="row">
      <div class="col-md-12">
        <div class="col-12">
          <card class="card-plain">
            <div class="table-full-width table-responsive">
              <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data" :columns="table2.columns"></paper-table>
            </div>
          </card>
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
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...this.$store.state.userCoupons]
      }
    };
  }
};
</script>
<style>
</style>
