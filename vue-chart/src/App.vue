<template>
  <div>
    <canvas id="myChart" ref="myChart" />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { ChartConfiguration } from "chart.js";
import Chart from "chart.js/auto";
import { MyVueRefs } from "@/types/index";

// export default (
//   Vue as VueConstructor<Vue & { $refs: { myChart: HTMLCanvasElement } }>
// ).extend({
export default (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    const config: ChartConfiguration = {
      type: "line",
      data,
      options: {},
    };
    const ctx = this.$refs.myChart.getContext(
      // document.getElementById("myChart") as HTMLCanvasElement
      "2d"
    ) as CanvasRenderingContext2D;
    var myChart = new Chart(ctx, config);
  },
});
</script>

<style scoped></style>
