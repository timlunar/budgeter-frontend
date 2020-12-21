<template>
  <div>
    <!--Stats cards-->
    <div v-if="statsCards.length > 0" class="row">
      <div class="col-12 col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <div class="col-xl-6 col-12">
        <chart-card title="Categories statistics"
                    sub-title="Statistics of the categories used"
                    :chart-data="drawPieChart"
                    chart-type="Pie">
          <span slot="footer">
            <i class="ti-user"></i>{{ $store.state.user.user.name }}</span>
          <span slot="date">
            <i class="ti-alarm-clock"></i>{{ new Date().toISOString().slice(0, 20).replace(".", "").split("T")[0] }}</span>
        </chart-card>
      </div>

      <div class="col-xl-6 col-12">
        <chart-card title="Balance for this year"
                    sub-title="All transactions"
                    :chart-data="activityChart.data"
                    :chart-options="activityChart.options">
          <span slot="footer">
            <i class="ti-check"></i> Data information certified
          </span>
        </chart-card>
      </div>

    </div>

  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components";
import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          icon: "ti-wallet",
          title: "Balance",
          value: "1000€",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-plus",
          title: "Income",
          value: "2000€",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-minus",
          title: "Expenses",
          value: "-1000€",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-server",
          title: "Transactions",
          value: "30",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ],
      usersChart: {
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      }
    };
  },
  computed: {
    drawPieChart() {
      const labels = [];
      const series = [];
      for(const element of this.$store.state.userTransactions) {
        if(!labels.includes(this.$store.state.categoriesObject[element.category_id].name))
          labels.push(this.$store.state.categoriesObject[element.category_id].name);
      }
      for(const element of labels) {
        let counter = 0;
        for(const transaction of this.$store.state.userTransactions) {
          if(this.$store.state.categoriesObject[transaction.category_id].name === element)
            counter++;
        }
        series.push(counter / this.$store.state.userTransactions.length);
      }
      return { labels: labels, series: series};
    }
  }
};
</script>
<style>
</style>
