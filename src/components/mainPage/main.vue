<template>
    <div style="margin-top: 70px; font-family: system-ui,-apple-system;">
        <mainTopSlideVue />
        <mainIntroWebinarVue />
        <mainCurriculumVue />
        <mainInstructorVue />

        <div style="margin-top: -30px;" class="content">
            <h3 class="con-tit w400">MSA School 교육 실적 및 주요 수강 기업</h3>
        </div>
        <v-row style="margin: 0; text-align: center;">
            <g-image class="is-not-mobile-main-top" style="margin: 10px 10px 0 0; width: 100%;"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/40873d43-3980-4671-b470-1a2d382501cd">
            </g-image>
            <g-image class="is-mobile-main-top" style="margin: 10px 10px 0 0; width: 100%; max-width: 700px;"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/2aea2ae6-1b31-4e1b-8593-4fb745fa1db8">
            </g-image>
        </v-row>

        <mainSampleExerciseVue />

        <div style="margin-top: -30px; margin-bottom: 15px;" class="content">
            <h3 class="con-tit w280">MSA School 교육 일정 확인</h3>
        </div> 
        <iframe style="border: 0; width: 100%; height: 600px; margin: 10px 0;" frameborder="0" scrolling="no"
            src="https://calendar.google.com/calendar/embed?src=help%40uengine.org&ctz=Asia%2FSeoul">
        </iframe>
    </div>
</template>
  
<script>
import mainTopSlideVue from './mainTopSlide.vue';
import mainCurriculumVue from './mainCurriculum.vue';
import mainIntroWebinarVue from './mainIntroWebinar.vue';
import mainInstructorVue from './mainInstructor.vue';
import mainSampleExerciseVue from './mainSampleExercise.vue';

export default {
    name: 'index',
    directory:'operation_introduction',
    props: {
        "소개": {
            type: String
        },
    },
    components: {
        mainTopSlideVue,
        mainIntroWebinarVue,
        mainCurriculumVue,
        mainInstructorVue,
        mainSampleExerciseVue
    },
}
</script>
  
<style>
@font-face {
    font-family: 'JalnanGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
}
@font-face {
    font-family: 'NanumSquareNeo';
    src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.woff2') format('woff2');
    font-weight: 900;
} 

.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

.con-tit-webinar {
    font-family: 'NanumSquareNeo';
    color:#333;
}
.con-tit {
    font-family: 'NanumSquareNeo';
    color: #222;
}
.con-tit::after {
    content: "";
    display: block;
    width: 170px;
    height: 2px;
    background-color: #333;
    margin-top: 5px;
    margin-bottom: -4px;
}
.w120::after {
    width: 120px;
}
.w190::after {
    width: 190px;
}
.w220::after {
    width: 220px;
}
.w250::after {
    width: 250px;
}
.w280::after {
    width: 280px;
}
.w400::after {
    width: 400px;
}
.tbl-edu td {
    font-size: 14px;
}
.tbl-title {
    width: 99.5%; 
    height: 60px; 
    text-align: center;
    background-color: #5a67d8;
    font-weight: 600;
    line-height: 60px;
    font-size: 20px;
    margin-bottom: 5px; 
    border-radius: 5px;
    padding: 0;
}

.tbl-title-txt {
    display: inline-block; 
    text-decoration: underline;
}

.main-table-subtitle {
    font-size: 16px;
    font-weight: 700;
    opacity: 0.9;
    padding-left: 5px;
    margin-top: 16px;
    height: 30px;
    line-height: 15px;
}

.title-page-card-box {
    padding: 0;
    margin-bottom: 30px;
}

.gs-table-default td {
    font-size: 14px;
}

button:focus{ 	
    border: none;
    outline: none;
}

.main-page-slide-btn {
    /* color: rgba(107, 59, 165, 1); */
    color: #222;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    width: 400px;
    text-align: left;
    display: block;
    background-color: none;
}

.main-page-slide-mobile-btn {
    /* color: rgba(107, 59, 165, 1); */
    color: #222;
    line-height: 70px;
    font-size: 18px;
    text-align: left;
    display: block;
    width: 100%;
    /* background-color: white; */
    /* border-radius: 5px; */
    /* overflow: hidden; */
    /* margin-bottom: 20px; */
}

.m-img-wrap {
    width: 100%;
    position: relative;
}

.mobile-btn-text {
    position: absolute;
    bottom: 3%;
    left: 0;
    width: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    font-size: 14px; 
    line-height: 1.6; 
    /* margin: -10px 0px 20px 9px; */
    text-align: center;
}

.slide-btn-image {
    float: left;
    margin: 5px 10px 0 0;
    width: 40px; 
    height: 40px;
}

.mobile-btn-image {
    float: left;
    margin: 15px 15px 15px 10px;
    width: 40px; 
    height: 40px;
}

/* rgiht image stlye */
.image-box-all {
    position: absolute;
    width: 500px;
    height: 328px;
    overflow: hidden;
    border-radius: 7px;
    border: 1px solid rgba(107, 59, 165, 1);
    margin-top: 10px;
    margin-left: 30px;
}

.image-box-in {
    background-color: white;
    float: left;
    width: 500px;
    position: absolute;
    transition: .5s;
    /* Opera */
}

.image-box-text {
    /* background-color: #6B3BA5; */
    width: 500px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 18px;
    font-weight: 500;
    padding: 10px;
    position: absolute;
    /* margin-left: 10px; */
}

.gs-mobile-btn-title {
    font-size: 22px;
}

.m-image-box-text {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    position: absolute;
    bottom: 10%;
    padding: 30px;
    line-height: 2.5;
}

.mobile-image-style {
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(107, 59, 165, 1);
    margin-top: 10px;
}

.youtube-card-box {
    width: 300px;
    height: 320px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    /* border: solid 1px #ccc; */
    border:solid 1px #E2E8F0;
    margin-right: 10px;
    margin-bottom: 10px;
}
.youtube-card-box:hover {
    background-color: #f9f9f9;
}

.youtube-card-image {
    height: 180px;
    width: 280px;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
}

.card-main-text {
    font-size: 16px;
    font-weight: 900;
    text-align: center;
}

.card-sub-text {
    font-size: 14px;
    margin-top: 20px;
    color: #757575;
}

.tutorials-card-box {
    border: solid 1px #E2E8F0;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0 0 10px;
    width: 200px;
    height: 300px;
    text-align: center;
}

.tutorials-card-image {
    width: 180px;
    height: 115px;
    margin-bottom: 10px; 
}

/* 반응형 */
.is-not-mobile-main-top {
    display: block
}

.is-mobile-main-top {
    display: none;
}

@media only screen and (max-width:1600px) {
    /* .main-card-box {
        width: 48%;
    }     */
}

@media only screen and (max-width:1410px){
    .is-not-mobile-main-top {
        display: none;
    }
    .is-mobile-main-top {
        display: block;
    }
}

@media only screen and (max-width:1100px) {
    .gs-mobile-btn-title {
        font-size: 20px;
    }
    .m-image-box-text {
        padding: 24px;
        font-size: 17px;
        line-height: 2;
    }
}

@media only screen and (max-width:676px) {
    .gs-mobile-btn-title {
        font-size: 18px;
    }
    .m-image-box-text {
        bottom: 7%;
        padding: 20px;
        font-size: 14px;
        line-height: 1.8;
    }
    .tutorials-card-box, .youtube-card-box {
        width: 60vw;
    }
    .tutorials-card-image {
        width: 300px;
        height: 185px;
        margin-left: 5px;
        margin-bottom: 10px;
    }
}
</style>