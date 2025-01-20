<template>
    <div>
        <div>
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
                labels: ['January', 'February', 'March'],
                datasets: [
                    {
                        label: '일별',
                        backgroundColor: '#8cc4ff',
                        data: [40, 20, 12],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
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
