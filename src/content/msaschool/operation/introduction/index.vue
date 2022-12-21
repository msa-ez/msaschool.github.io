<template>
  <div style=" margin-top:100px;">
    <v-row style="background-color:#E9E6F8; padding:30px; padding-left:30px; height:390px;">
      <div style="float: left;">
        <h2 style="color:rgba(107, 59, 165, 1);
          font-family:system-ui,-apple-system;
          line-height:55px;
          font-size:40px;
          font-weight:500;
          margin-bottom:18px;"
        >험난한  <br/>MSA구축 여정의 <br/> 길라잡이
        </h2>
        <div style="position:relative;">
          <span class="clearfix">
            <button @click="slideClickBtn1"
              :style="slideBtn1 == true ? 'background-color:white;':''"
              class="clearfix main-page-slide-btn"
              type="button"
            >BizDevOps 전 과정 지원
              <g-image class="clearfix slide-btn-image"
                src="./img/ic-carousel-3.png"
              >
              </g-image>
            </button>

            <button @click="slideClickBtn2"
              :style="slideBtn2 == true ? 'background-color:white;':''"
              class="clearfix main-page-slide-btn"
              type="button"
            >EDA기반 핵심 프레임워크
              <g-image class="clearfix slide-btn-image"
                src="./img/ic-carousel-2.png"
              >
              </g-image>
            </button>

            <button @click="slideClickBtn3"
              :style="slideBtn3 == true ? 'background-color:white;':''"
              class="clearfix main-page-slide-btn"
              type="button"
            >설치 필요없는 학습교구
              <g-image class="clearfix slide-btn-image"
                src="./img/ic-carousel-1.png"
              >
              </g-image>
            </button>
          </span>
        </div>
      </div>

      <div style="">
        <div class="clearfix image-box-all">
          <div class="image-box-in" :style="slideBtn1 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
            <div class="image-box-text" style="margin-top:180px;"
            >비즈니스 모델링, 구현, 배포를 아우러는 <br/>End-to-End 전 과정 학습
            </div>
            <g-image class="image-style" src="./img/introduction-3.png" />
          </div>

          <div class="image-box-in" :style="slideBtn2 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
            <div class="image-box-text" style="margin-top:225px;"
            >Event driven Architecture 기반 최신 마이크로서비스<br/>
            Framework (Axon, Eventuate, Kafka) 및 아키텍처 적용
            </div>
            <g-image class="image-style" src="./img/introduction-2.png"/>
          </div>
          
          <div class="image-box-in" :style="slideBtn3 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
            <div class="image-box-text" style="margin-top:270px;"
            >프로그램 설치가 필요없는<br/>
            온라인 이벤트스토밍 도구 및 클라우드 IDE 활용
            </div>
            <g-image class="image-style" src="./img/introduction-1.png"/>
          </div>
        </div>
      </div>
    </v-row>
  <div>
  <SideMarkDown>
    <mark-down class="content">
## MSA School 은
### 마이크로서비스 시장을 선도할 클라우드 네이티브 전문가 양성을 교육 목표로 합니다.
MSA School은 분석, 설계에서 구현, 배포에 이르는 마이크로서비스 전 생명주기를 지원하는 학습 교구와 전문 커리큘럼으로 End-to-End 학습 및 실습이 가능한 환경을 제공합니다.

Cloud native한 최신 컨텐츠는 물론, 이벤트 드리븐 마이크로서비스 구현에
필수인 전용 프레임워크(Eventuate, Axon 등)와 최신 MSA 아키텍처 기술이
반영된 실습코드로 MSA School은 항상 진화합니다.
    </mark-down>
    <g-image src="~/img/01_Introduction/01_소개/image1.png"
        style = "margin-right:50px; width:400px !important; margin-top:30px;"
    ></g-image>
  </SideMarkDown>
  <mark-down class="content">
## MSA School 에는
### 클라우드 네이티브 전문가가 되는 체계적인 최고의 커리큘럼이 준비되어 있습니다.
**- Fundamental Course**
&nbsp;&nbsp;&nbsp;Monolith/ VM 기반 Web Application 개발자를 위한 과정
**- Intermediate Course**
&nbsp;&nbsp;&nbsp;Event driven MSA 기반 현장에 곧바로 적용 가능하며 차별화 될 수 있는 MSA/EDA 노하우 수록 Container기반 가용성,회복성,탄력성을 위한 DevOps 엔지니어링
**- Advanced Course**
&nbsp;&nbsp;&nbsp;EDA기반 확장 Eventstorming, 전용 프레임워크 및 통신 프로토콜 포함 GitOps, 서버리스 등 자동으로 관리되는 Container 배포 및 운영
    </mark-down>
    <v-btn class="gs-bottom-apply-btn"
      target='_blank'
    >
      <a href="/operation/education/enterprise-full-day14-days-course/#review5" style="color:white !important; font-weight:700; font-size:14px;">
          자세히보기
      </a>
    </v-btn>
<br><br>
</div>
</div>
</template>

<script>
  // @group 01_01_01
  export default {
    name: 'index',
    directory:'operation_introduction',
    props: {
        "소개": {
            type: String
        },
    },
    data() {
      return {
        slideBtn1:true,
        slideBtn2:false,
        slideBtn3:false,
        i:0,
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
    }
  }
</script>

<style>
  .clearfix::after{content:""; display:block; clear:both;}

  button:focus{ 	
    border: none;
    outline:none;
  }

  .main-page-slide-btn {
    color:rgba(107, 59, 165, 1);
    height:50px;
    line-height:50px;
    font-size:20px;
    width:360px;
    text-align: left;
    display: block;
    background-color:none;
  }

  .slide-btn-image {
    float: left; margin-right:15px; margin-left:10px; margin-top:5px; width:40px; height:40px;
  }

  /* rgiht image stlye */
  .image-box-all {
    position:absolute;
    width:500px;
    height:333px;
    overflow: hidden;
  }
  .image-style {
    margin-left:10px;
  }

  .image-box-in {
    background-color:white;
    float:left;
    width:500px;
    position: absolute;
    transition: .5s;
        /* Opera */
  }
  .image-box-text {
    background-color:#6B3BA5;
    color:white;
    font-size:18px;
    font-weight:500;
    padding:5px;
    position:absolute;
    margin-left:10px;
  }
</style>