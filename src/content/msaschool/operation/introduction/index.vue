<template>
  <div style=" margin-top:100px; margin-bottom:100px;">
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

      <div style="font-family:system-ui,-apple-system;">
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
<MobileMarkDown>
    <mark-down class="content">
### MSA School 은
**마이크로서비스 시장을 선도할 클라우드 네이티브 전문가 양성을 교육 목표로 합니다.**

MSA School은 분석, 설계에서 구현, 배포에 이르는 마이크로서비스 전 생명주기를 지원하는 학습 교구와 전문 커리큘럼으로 End-to-End 학습 및 실습이 가능한 환경을 제공합니다.

Cloud native한 최신 컨텐츠는 물론, 이벤트 드리븐 마이크로서비스 구현에 필수인 전용 프레임워크(Eventuate, Axon 등)와 최신 MSA 아키텍처 기술이 반영된 실습코드로 MSA School은 항상 진화합니다.

마이크로서비스 현장 경험, 축적된 전문 지식 및 MSA School 이 제공하는 편리한 학습 환경으로 매년 마이크로서비스를 도입하려는 많은 선도 기업들이 MSA School을 재방문하고 있습니다.
 </mark-down>
    <g-image style="margin-bottom: -50px; margin-top:10px; margin-bottom:10px;"
                src="~/img/01_Introduction/01_소개/image1.png"
        ></g-image>
</MobileMarkDown>
<SideMarkDown>
    <mark-down class="content">
### MSA School 은
**마이크로서비스 시장을 선도할 클라우드 네이티브 전문가 양성을 교육 목표로 합니다.**

MSA School은 분석, 설계에서 구현, 배포에 이르는 마이크로서비스 전 생명주기를 지원하는 학습 교구와 전문 커리큘럼으로 End-to-End 학습 및 실습이 가능한 환경을 제공합니다.

Cloud native한 최신 컨텐츠는 물론, 이벤트 드리븐 마이크로서비스 구현에 필수인 전용 프레임워크(Eventuate, Axon 등)와 최신 MSA 아키텍처 기술이 반영된 실습코드로 MSA School은 항상 진화합니다.

마이크로서비스 현장 경험, 축적된 전문 지식 및 MSA School 이 제공하는 편리한 학습 환경으로 매년 마이크로서비스를 도입하려는 많은 선도 기업들이 MSA School을 재방문하고 있습니다.
    </mark-down>
    <g-image src="~/img/01_Introduction/01_소개/image1.png"
      style = "margin-left:50px; height:380px !important; margin-top:80px;"
    ></g-image>
</SideMarkDown>

    <v-btn style="background-color:#5a67d8 !important;
      text-align:center !important;
      width:80px;
      height: 25px;
      position: absolute;
      margin-top: 80px;
      margin-left: 160px;"
    >
      <a href="/operation/fundamental/fundamental/" style="color:white; font-weight:700; font-size:14px;">
        자세히보기
      </a>
    </v-btn>
    <mark-down class="content">
### MSA School 에는
**클라우드 네이티브 전문가가 되는 체계적인 최고의 커리큘럼이 준비되어 있습니다.**

**- Fundamental Course**
&nbsp;&nbsp;&nbsp;Monolith/ VM 기반 Web Application 개발자를 위한 과정

**- Intermediate Course**
&nbsp;&nbsp;&nbsp;Event driven MSA 기반 현장에 곧바로 적용 가능하며 차별화 될 수 있는 MSA/EDA 노하우 수록 Container기반 가용성,회복성,탄력성을 위한 DevOps 엔지니어링

**- Advanced Course**
&nbsp;&nbsp;&nbsp;EDA기반 확장 Eventstorming, 전용 프레임워크 및 통신 프로토콜 포함 GitOps, 서버리스 등 자동으로 관리되는 Container 배포 및 운영
    </mark-down>

    <mark-down class="content">
### MSA School 교과정은
**수강하는 교육생들의 환경과 비용에 최적화된 학습유형을 제공합니다.**

**- Quick Type**
&nbsp;&nbsp;&nbsp;마이크로서비스를 처음 접하거나 향후 도입 예정인 기업을 위한 MSA, 클라우드 네이티브 앱에 대한 개념 정립을 위한 Half-day

**- Standard Type**
&nbsp;&nbsp;&nbsp;마이크로서비스 모델링에서 클라우드 네이티브 앱 구현까지 MSA 이론과 클라우드 환경에서의 구현, 배포, 운영 실습을 포함하는 유형

**- Flipped Type**
&nbsp;&nbsp;&nbsp;Standard CNA 과정 중 Biz Part(MSA 이론, DDD 분석/설계)는 주강사가 진행하고 Dev/Ops Part는 영상 학습 후, 보조강사가 실습을 주도하는 유형

**- One Point Lesson**
&nbsp;&nbsp;&nbsp;MSA를 적용하려는 기업이나, 컨설팅을 수행하려는 업체가 주도적으로 선정한 도메인 주제를 기반으로 인터랙티브하게 진행되는 MSA 교육

**- Enterprise type**
&nbsp;&nbsp;&nbsp;마이크로서비스의 전 과정을 심도있게 학습할 수 있는 과정으로 분석/설계, 구현, 배포, 운영 및 캡스톤 프로젝트를 포함하는 인텐시브 유형

    </mark-down>

    <mark-down class="content">
### MSA School 교과정 티저영상 보기
    </mark-down>
    <v-row class="title-page-card-box-row">
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-ddd-google-drive" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <v-img style="height:218px;"
                src="https://user-images.githubusercontent.com/113568664/203213772-a3e19070-ff12-4ae0-a473-9a3209ea14ae.png">
            </v-img>
            <v-card-title class="home-card-title"><br>[Biz] DDD-Eventstorming<br>&nbsp;</v-card-title>
            <v-card-subtitle>An eventstorming example based on Google Drive scenario</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-cna-start-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <v-img style="height:218px;"
                src="https://user-images.githubusercontent.com/92732781/204985669-873d62f2-4a01-4f9e-98be-46129d499337.png">
            </v-img>
            <v-card-title class="home-card-title"><br>[Dev] Running unit Microservice<br>&nbsp;</v-card-title>
            <v-card-subtitle>A gradual implementation by running Cloud IDE-based unit microservice & mutual test</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-monolith-2-misvc-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <v-img style="height:218px;"
                src="https://user-images.githubusercontent.com/92732781/204982558-0fd95334-5fe6-41c9-a4c3-b4e44487c5b6.png">
            </v-img>
            <v-card-title class="home-card-title"><br>[Dev] MSA Communication by Req/Res<br>&nbsp;</v-card-title>
            <v-card-subtitle>Applying synchronous calls between monoliths and microservices or microservices</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-circuit-breaker-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
              <v-img style="height:218px;"
                  src="https://user-images.githubusercontent.com/113568664/203210885-54bba436-5386-42d8-b743-96d07ddadd5c.png">
              </v-img>
            <v-card-title class="home-card-title"><br>[Dev] Circuit Breaker<br>&nbsp;</v-card-title>
            <v-card-subtitle>Fail-Fast pattern to block fault propagation for synchronous calls between services</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-pub-sub-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
              <v-img style="height:218px;"
                  src="https://user-images.githubusercontent.com/92732781/204982662-5da60d59-7dea-4518-be98-b18cb7d84ad3.png">
              </v-img>
            <v-card-title class="home-card-title"><br>[Dev] Pub-Sub Comunication<br>&nbsp;</v-card-title>
            <v-card-subtitle>Applying EDA-based message communication with no blocking & isolating disorders</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-compensation-correlation-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
              <v-img style="height:218px;"
                  src="https://user-images.githubusercontent.com/92732781/204985478-f50759b3-8a36-4511-b7b2-de03e2be5f2a.png">
              </v-img>
            <v-card-title class="home-card-title"><br>[Dev] Compensation & Correlation<br>&nbsp;</v-card-title>
            <v-card-subtitle>Matching consistency by compensation when transaction fails at MSA environment</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-Oauth2withKeycloak" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <v-img style="height:218px;"
                src="https://user-images.githubusercontent.com/113568664/203212144-8df8a89b-e236-4ee3-9db0-99f1d0fe6601.png">
            </v-img>
            <v-card-title class="home-card-title"><br>[Dev] JWT Token-based Authorization<br>&nbsp;</v-card-title>
            <v-card-subtitle>Applying total Single-Sign-On pattern for certification & authorization of microservices</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-dp-frontend-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <v-img style="height:218px;"
                src="https://user-images.githubusercontent.com/113568664/203211175-8ddee4f9-30f2-42c6-bdcb-ea54be501baa.png">
            </v-img>
            <v-card-title class="home-card-title"><br>[Dev] Data Projection w/ Frontend & HATEOAS<br>&nbsp;</v-card-title>
            <v-card-subtitle>Implementing HATEOAS API to deliver a link for state transition & Frontend based on it</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
      <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-dp-graphql-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <v-img style="height:218px;"
                src="https://user-images.githubusercontent.com/113568664/203213154-e7b2a478-79fc-4aec-be5d-a8d9a5f62cc4.png">
            </v-img>
            <v-card-title class="home-card-title"><br>[Dev] Data Projection w/ GraphQL<br>&nbsp;</v-card-title>
            <v-card-subtitle>Creating GraphQL-based backend application for data composition</v-card-subtitle>
          </v-card>
        </a>
      </v-col>
    </v-row>

    <v-btn style="background-color:#5a67d8 !important;
      text-align:center !important;
      width:80px;
      height: 25px;
      position: absolute;
      margin-top: 80px;
      margin-left: 195px;"
    >
      <a href="https://www.facebook.com/groups/cloudswmoding/" target="_blank" style="color:white; font-weight:700; font-size:14px;">
        자세히보기
      </a>
    </v-btn>

    <mark-down class="content">
### MSA School 커뮤니티
**MSA and DDD Software modeling - 마이크로서비스와 도메인 주도 SW 모델링**
    </mark-down>
    <g-image src="~/img/05_Community/06_커뮤니티/image1.png"></g-image>

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
        console.log(this.i)
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

  .title-page-card-box {
    padding: 0;
    margin-bottom: 30px;
  }

  .home-card-title {
    text-align: left;
    display: block;
    line-height: 10px;
    font-size: 15px;
  }

  .title-page-card-box-row {
    margin-top:40px;
  }

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