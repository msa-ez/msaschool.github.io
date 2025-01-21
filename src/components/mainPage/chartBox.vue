<template>
    <div>
        <div style="background-color: #fff; padding: 20px; border-radius: 20px;">
            <!-- 차트 렌더링 공간 -->
            <canvas ref="barChart"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js";

export default {
    data() {
        return {
            chartData: {
                labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
                datasets: [
                    {
                        label: "총 교육횟수",
                        data: [52,58,64,73,28,50],
                        backgroundColor: "#a1a2c6",
                    },
                    {
                        label: '총 교육수강생',
                        data: [1560,1740,1920,2190,980,1265],
                        backgroundColor: '#96c596',
                    },
                    {
                        label: '총 교육시간',
                        data: [2030,2360,2560,2890,3720,4304],
                        backgroundColor: '#8bc3da',
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
                tooltips: {
                    enabled: false
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                        ctx.fillStyle = '#999';
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'top';
                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];							
                                ctx.fillText(data, bar._model.x + 5, bar._model.y - 5);
                            });
                        });
                    }
                }
            },
        };
    },
    mounted() {
        // Chart.js를 초기화
        this.renderChart();
    },
    methods: {
        renderChart() {
            // horizontalBar로 설정하여 가로 바 차트를 렌더링
            new Chart(this.$refs.barChart, {
                type: 'horizontalBar', // 가로 바 차트 설정
                data: this.chartData, // 데이터
                options: this.chartOptions, // 옵션
            });
        },
    },
};
</script>

<style scoped>
/* 차트를 감싸는 스타일 지정 */
div {
    width: 100%;
    height: 400px;
}
</style>
