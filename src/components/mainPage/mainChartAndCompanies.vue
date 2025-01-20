<template>
    <div>
        <div style="margin-top: 30px;" class="content">
            <h3 class="con-tit w400">MSA School 교육 실적 및 주요 수강 기업</h3>
        </div>
        <div class="chart-logo-box">
            <div class="chart-box">
                <!-- <div class="chart-label">
                    <div>
                        <p style="font-weight: bold;">총 교육횟수</p>
                        <p class="label-count">334회</p>
                    </div>
                    <div>
                        <p style="font-weight: bold;">총 교육수강생</p>
                        <p class="label-count" style="background-color: #96c596;">9,655명</p>
                    </div>
                    <div>
                        <p style="font-weight: bold;">총 교육시간</p>
                        <p class="label-count" style="background-color: #8bc3da;">17,864시간</p>
                    </div>
                </div>
                <div style="background-color: #fff; padding: 20px; border-radius: 20px;">
                    <canvas id="bar-chart-horizontal" width="350" height="500"></canvas>
                </div> -->
                <chartBox />
            </div>
            <div class="logo-box">
                <g-image style="width: 100%;"
                    src="https://www.uengine.org/images/case/major-companies-23add.jpg">
                </g-image>
            </div>
            <!-- <g-image class="is-not-mobile-main-top" style="margin: 10px 10px 0 0; width: 100%;"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/cf110a54-e7ad-4ba3-99dd-8ff8d2825b39">
            </g-image>
            <g-image class="is-mobile-main-top" style="margin: 10px 10px 0 0; width: 100%;"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/9c103798-766f-4476-8f60-3f45e0a93d48">
            </g-image> -->
        </div>
    </div>
</template>

<script>
import chartBox from './chartBox.vue';

export default {
    props: {

    },
    components: {
        chartBox
    }
}
</script>
  
<style>
.chart-logo-box {
    display: flex;
    margin: 10px auto;
    text-align: center; 
}

/* 차트 좌측 라벨 */
.chart-box {
    display: flex;
    justify-content: space-around;
    background-color: #f2f2f2;
    padding: 20px;
}
.chart-label {
    display: block;
    align-content: center;
    text-align: center;
    width: 130px;
    margin-right: 10px;
}
.label-count {
    width: 130px;
    height: 34px;
    line-height: 34px;
    border-radius: 17px;
    background-color: #a1a2c6;
    color: #fff;
    margin-top: -10px;
}

@media only screen and (max-width:676px) {
    .chart-logo-box {
        display: block;
    }
    /* 차트 */
    .chart-box {
        display: block;
    }
    .chart-label {
        display: flex;
        width: auto;
        justify-content: space-evenly;
        margin: 0 auto;
    }
    .label-count {
        width: 110px;
    }
}
</style>