<template>
  <div class="row justify-center">
    <v-chart
      style="width: 80%; max-height: 600px"
      class="chart"
      :option="option"
      autoresize
    />
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts"; // 使用長條圖
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent, // 添加網格組件
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  BarChart, // 使用長條圖
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent, // 添加網格組件
]);

provide(THEME_KEY, "dark");

const option = ref({
  title: {
    text: "營養數據",
    left: "left",
  },
  tooltip: {
    trigger: "axis", // 使用X軸的提示
  },
  legend: {
    data: ["Traffic"],
  },
  xAxis: {
    type: "category",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"], // X軸數據
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Traffic",
      type: "bar", // 長條圖
      data: [335, 310, 234, 135, 1548], // Y軸數據
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
