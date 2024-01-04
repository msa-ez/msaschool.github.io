<template>
    <div>
        <div class="is-not-mobile-main-top">
            <v-row style="background-color:#E9E6F8; padding:30px; margin-left:0px; height:390px;">
                <v-row style="position:absolute;
                left: 44%;
                transform: translate(-50%, 0%);
                ">
                    <div style="float: left;">
                        <h2 style="color:rgba(107, 59, 165, 1);
                        font-family: 'JalnanGothic';
                        line-height:55px;
                        font-size:34px;
                        font-weight: 500;
                        margin:10px 0 15px 0;"
                        >
                            클라우드 네이티브 앱
                            <br/>구현의 전문 배움터
                            <br/>CNA Best Partner 
                        </h2>
                        <div style="position:relative;">
                            <span class="clearfix">
                                <button @click="slideClickBtn1"
                                :style="slideBtn1 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                                class="clearfix main-page-slide-btn"
                                type="button"
                                >
                                    BizDevOps 풀 라이프사이클 지원
                                    <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/209c7e65-2a6e-4e6d-b594-a21ea19761bd"></g-image>
                                </button>

                                <button @click="slideClickBtn2"
                                :style="slideBtn2 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                                class="clearfix main-page-slide-btn"
                                type="button"
                                >
                                    DDD, EDA기반 핵심 프레임워크 활용
                                    <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/30c71f68-aee0-4418-a1a9-3577a83017f3"></g-image>
                                </button>

                                <button @click="slideClickBtn3"
                                :style="slideBtn3 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                                class="clearfix main-page-slide-btn"
                                type="button"
                                >
                                    설치가 필요없는 학습교구 지원  
                                    <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/cc383714-f667-41d7-b278-a7fb0ebbf484"></g-image>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div style="font-family:system-ui,-apple-system;">
                        <div class="clearfix image-box-all">
                            <div class="image-box-in" :style="slideBtn1 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
                                <div class="image-box-text" style="margin-top:160px;">
                                    비즈니스 모델링, 구현, 배포를 아우러는 <br/>End-to-End 전 과정 학습
                                </div>
                                <g-image class="image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/68417396-8a4d-478a-940c-f143995cda5e" />
                            </div>
                            <div class="image-box-in" :style="slideBtn2 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
                                <div class="image-box-text" style="margin-top:210px;">
                                    Event driven Architecture 기반 최신 마이크로서비스<br/>
                                    Framework (Axon, Eventuate, Kafka) 및 아키텍처 적용
                                </div>
                                <g-image class="image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/161fdda9-ddfa-419c-80f8-c43b9e8dd244"/>
                            </div>
                            <div class="image-box-in" :style="slideBtn3 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
                                <div class="image-box-text" style="bottom:8px;">
                                    프로그램 설치가 필요없는<br/>
                                    온라인 이벤트스토밍 도구 및 클라우드 IDE 활용
                                </div>
                                <g-image class="image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/77970538-9a18-4e8b-9cfe-b6cbf9826e20"/>
                            </div>
                        </div>
                    </div>
                </v-row>
            </v-row>
        </div>

        <div class="is-mobile-main-top">
            <div style="background-color:#E9E6F8; padding:30px; padding-left:30px; box-shadow: 0 -7px 7px -7px #999 inset;">
                <h2 style="color:rgba(107, 59, 165, 1);
                font-family:'NanumSquareNeo';
                line-height:45px;
                font-size:30px;
                margin-bottom:15px;"
                >
                    클라우드 네이티브 앱
                    <br/>구현의 전문 배움터
                    <br/>CNA Best Partner 
                </h2>

                <button @click="mobileClickBtn1"
                :style="mobileBtn1 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                class="clearfix main-page-slide-mobile-btn"
                type="button"
                >
                    <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/209c7e65-2a6e-4e6d-b594-a21ea19761bd"></g-image>
                    <div class="gs-mobile-btn-title" style="line-height: 50px;">BizDevOps 풀 라이프사이클 지원</div>
                    <div v-if="mobileBtn1" style="width: 100%; position: relative;">
                        <div class="m-image-box-text">
                            비즈니스 모델링, 구현, 배포를 아우러는 <br/>End-to-End 전 과정 학습
                        </div>
                        <g-image class="mobile-image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/68417396-8a4d-478a-940c-f143995cda5e" />
                    </div>
                </button>

                <button @click="mobileClickBtn2"
                :style="mobileBtn2 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                class="clearfix main-page-slide-mobile-btn"
                type="button"
                >
                    <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/30c71f68-aee0-4418-a1a9-3577a83017f3"></g-image>
                    <div class="gs-mobile-btn-title" style="line-height: 50px;">DDD, EDA기반 핵심 프레임워크 활용</div>
                    <div v-if="mobileBtn2" style="width: 100%; position: relative;">
                        <div class="m-image-box-text">
                            Event driven Architecture 기반 최신 마이크로서비스<br/>
                            Framework (Axon, Eventuate, Kafka) 및 아키텍처 적용
                        </div>
                        <g-image class="mobile-image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/161fdda9-ddfa-419c-80f8-c43b9e8dd244"/>
                    </div>
                </button>

                <button @click="mobileClickBtn3"
                :style="mobileBtn3 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                class="clearfix main-page-slide-mobile-btn"                   
                type="button"
                >
                    <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/cc383714-f667-41d7-b278-a7fb0ebbf484"></g-image>
                    <div class="gs-mobile-btn-title" style="line-height: 50px;">설치가 필요없는 학습교구 지원</div>
                    <div v-if="mobileBtn3" style="width: 100%; position: relative;">
                        <div class="m-image-box-text">
                            프로그램 설치가 필요없는<br/>
                            온라인 이벤트스토밍 도구 및 클라우드 IDE 활용
                        </div>
                        <g-image class="mobile-image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/77970538-9a18-4e8b-9cfe-b6cbf9826e20"/>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            slideBtn1:true,
            slideBtn2:false,
            slideBtn3:false,
            i:0,
            mobileBtn1:true,
            mobileBtn2:false,
            mobileBtn3:false,
        }
    },
    mounted() {
            this.i = 1
            setInterval(this.autoSlide, 5000);
    },
    methods: {
        autoSlide(){
            this.i++
            this.slideBtn1 = 1==this.i
            this.slideBtn2 = 2==this.i
            this.slideBtn3 = 3==this.i
            if(this.i==3) {
                this.i=0
            }
        },
        slideClickBtn1() {
            if(this.slideBtn1 == false) {
                this.slideBtn1 = true
                this.slideBtn2 = false
                this.slideBtn3 = false
            }
        },
        slideClickBtn2() {
            if(this.slideBtn2 == false) {
                this.slideBtn2 = true
                this.slideBtn1 = false
                this.slideBtn3 = false
            }
        },
        slideClickBtn3() {
            if(this.slideBtn3 == false) {
                this.slideBtn3 = true
                this.slideBtn1 = false
                this.slideBtn2 = false
            }
        },
        mobileClickBtn1() {
            if(this.mobileBtn1 == false) {
                this.mobileBtn1 = true
                this.mobileBtn2 = false
                this.mobileBtn3 = false
            } else {
                this.mobileBtn1 = false
            }
        },
        mobileClickBtn2() {
            if(this.mobileBtn2 == false) {
                this.mobileBtn1 = false
                this.mobileBtn2 = true
                this.mobileBtn3 = false
            } else {
                this.mobileBtn2 = false
            }
        },
        mobileClickBtn3() {
            if(this.mobileBtn3 == false) {
                this.mobileBtn1 = false
                this.mobileBtn2 = false
                this.mobileBtn3 = true
            } else {
                this.mobileBtn3 = false
            }
        },
    }
}
</script>
  
<style>
</style>