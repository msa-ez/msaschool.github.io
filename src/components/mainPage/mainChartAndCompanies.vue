<template>
    <div>
        <div style="margin-top: 30px;" class="content">
            <h3 class="con-tit w400">MSA School 교육 실적 및 주요 수강 기업</h3>
        </div>
        <div class="chart-logo-box">
            <div class="chart-wrapper">
                <div class="chart-label">
                    <div>
                        <p style="font-weight: bold;">총 교육횟수</p>
                        <p class="label-count">325회</p>
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
                <div>
                    <chartBox />
                </div>
            </div>
            <div class="logo-wrapper">
                <g-image class="logo-img"
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
.chart-wrapper {
    display: flex;
    justify-content: space-around;
    background-color: #f6f6f6;
    padding: 20px;
    width: 55%;
}
.chart-label { /* 차트 좌측 라벨 전체 박스 */
    display: block;
    align-content: center;
    text-align: center;
    width: 120px;
    margin-right: 10px;
}
.label-count {
    width: 120px;
    height: 34px;
    line-height: 34px;
    border-radius: 17px;
    background-color: #a1a2c6;
    color: #fff;
    margin-top: -10px;
}
.chart-bar {
    width: 80%;
    background-color: #fff; 
    padding: 20px; 
    border-radius: 20px;
}
.logo-wrapper {
    width: 45%;
    height: 440px;
    line-height: 440px;
    background-color: #f6f6f6;
    position: relative;
}
.logo-img {
    width: 100%; 
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%);
}

@media only screen and (max-width: 1239px) {
    .chart-wrapper {
        width: 60%;
    }
    .logo-wrapper {
        width: 40%;
    }
}

@media only screen and (max-width: 1139px) {
    .chart-wrapper {
        width: 65%;
    }
    .logo-wrapper {
        width: 35%;
    }
}

@media only screen and (max-width: 1023px) {
    .chart-logo-box {
        display: block;
    }
    .chart-wrapper {
        width: 100%;
        justify-content: center;
    }
    .logo-wrapper {
        width: 100%;
        height: auto;
    }
    .logo-img {
        position: relative;
        top: 0;
        transform: none;
    }
}

@media only screen and (max-width: 676px) {
    .chart-wrapper {
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

@media only screen and (max-width: 480px) {
    /* 차트 */
    .chart-wrapper {
        font-size: 15px;
    }
    .label-count {
        width: 90px;
        height: 28px;
        line-height: 28px;
        border-radius: 14px;
    }
}

@media only screen and (max-width: 360px) {
    /* 차트 */
    .chart-wrapper {
        font-size: 12px;
    }
    .label-count {
        width: 70px;
        height: 22px;
        line-height: 22px;
        border-radius: 11px;
    }
}
</style>