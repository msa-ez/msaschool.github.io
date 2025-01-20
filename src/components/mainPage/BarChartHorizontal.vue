<template>
    <div>
      <canvas ref="barChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Bar } from "vue-chartjs";
  
  export default {
    extends: Bar, // Bar 차트를 확장
    props: {
      chartData: {
        type: Object,
        required: true,
      },
      chartOptions: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      // Chart 렌더링
      this.renderChart(this.chartData, this.chartOptions);
    },
  };
  </script>