<template>
  <div style=" margin-top:100px; margin-bottom:100px; font-family:system-ui,-apple-system;">
    <SideMarkDown>
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
              <g-image class="image-style" src="./img/introduction-1.png" />
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
              <g-image class="image-style" src="./img/introduction-3.png"/>
            </div>
          </div>
        </div>
      </v-row>
    </SideMarkDown>

    <MobileMarkDown>
      <div style="background-color:#E9E6F8; padding:30px; padding-left:30px;">
        <h2 style="color:rgba(107, 59, 165, 1);
          font-family:system-ui,-apple-system;
          line-height:55px;
          font-size:40px;
          font-weight:500;
          margin-bottom:18px;"
        >험난한  <br/>MSA구축 여정의 <br/> 길라잡이
        </h2>

        <button @click="mobileClickBtn1"
          class="clearfix main-page-slide-mobile-btn"
          type="button"
        >BizDevOps 전 과정 지원
          <g-image class="clearfix mobile-btn-image"
            src="./img/ic-carousel-3.png"
          >
          </g-image>
          <div v-if="mobileBtn1">
            <div class="mobile-btn-text"
            >비즈니스 모델링, 구현, 배포를 아우러는 <br/>End-to-End 전 과정 학습
            </div>
            <g-image class="mobile-image-style" src="./img/introduction-1.png" />
          </div>
        </button>

        <button @click="mobileClickBtn2"
          class="clearfix main-page-slide-mobile-btn"
          type="button"
        >EDA기반 핵심 프레임워크
          <g-image class="clearfix mobile-btn-image"
            src="./img/ic-carousel-3.png"
          >
          </g-image>
          <div v-if="mobileBtn2">
            <div class="mobile-btn-text"
            >Event driven Architecture 기반 최신 마이크로서비스<br/>Framework (Axon, Eventuate, Kafka) 및 아키텍처 적용
            </div>
            <g-image class="mobile-image-style" src="./img/introduction-2.png" />
          </div>
        </button>

        <button @click="mobileClickBtn3"
          class="clearfix main-page-slide-mobile-btn"
          type="button"
        >설치 필요없는 학습교구
          <g-image class="clearfix mobile-btn-image"
            src="./img/ic-carousel-3.png"
          >
          </g-image>
          <div v-if="mobileBtn3">
            <div class="mobile-btn-text"
            >프로그램 설치가 필요없는<br/>온라인 이벤트스토밍 도구 및 클라우드 IDE 활용
            </div>
            <g-image class="mobile-image-style" src="./img/introduction-3.png" />
          </div>
        </button>
      </div>
    </MobileMarkDown>
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
      <a href="/operation/cnacourse/schedule/" style="color:white; font-weight:700; font-size:14px;">
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
### MSA School 교과정 TUTORIALS 보기
    </mark-down>
    
      <v-row style="margin:0;">
        <!-- 1번 카드 -->
        <a href="https://www.msaez.io:8081/#/courses/cna-full-english/cna-full-english/en-ddd-google-drive" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210196675-86b2e747-84be-4dcf-864c-57b5ac3add9a.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Biz] DDD-Eventstorming</div>
              <div class="tutorials-card-sub-text">An eventstorming example based on Google Drive scenario</div>
            </div>
          </div>
        </a>

        <!-- 2번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-cna-start-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
            <g-image class="tutorials-card-image"
                src="https://user-images.githubusercontent.com/113568664/210196679-54676c44-dfd6-4f02-a09d-8510e5bbf920.jpg">
            </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Running unit Microservice</div>
              <div class="tutorials-card-sub-text">A gradual implementation by running Cloud IDE-based unit microservice & mutual test</div>
            </div>
          </div>
        </a>

        <!-- 3번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-monolith-2-misvc-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210196680-cb5df0da-24c4-49cd-a9c2-1d70f880babb.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] MSA Communication by Req/Res</div>
              <div class="tutorials-card-sub-text">Applying synchronous calls between monoliths and microservices or microservices</div>
            </div>
          </div>
        </a>

        <!-- 4번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-circuit-breaker-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210198216-1a461dcd-7bef-46eb-ba0e-c854beb2e73f.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Circuit Breaker</div>
              <div class="tutorials-card-sub-text">Fail-Fast pattern to block fault propagation for synchronous calls between services</div>
            </div>
          </div>
        </a>

        <!-- 5번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-pub-sub-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210198212-f3cc5b1b-a554-4c1f-952e-9bad8f48b78d.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Pub-Sub Comunication</div>
              <div class="tutorials-card-sub-text">Applying EDA-based message communication with no blocking & isolating disorders</div>
            </div>
          </div>
        </a>
        
        <!-- 6번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-compensation-correlation-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210196681-98f31119-280f-4924-8c11-3f1fdc04293c.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Compensation & Correlation</div>
              <div class="tutorials-card-sub-text">Matching consistency by compensation when transaction fails at MSA environment</div>
            </div>
          </div>
        </a>
        
        <!-- 7번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-Oauth2withKeycloak" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210196687-71ac6280-0d12-419f-bec4-4a2c9a29f34d.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] JWT Token-based Authorization</div>
              <div class="tutorials-card-sub-text">Applying total Single-Sign-On pattern for certification & authorization of microservices</div>
            </div>
          </div>
        </a>
        
        <!-- 8번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-dp-frontend-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210196685-7c173cef-9cdf-4764-9b3e-7d547cf7ceec.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Data Projection w/ Frontend & HATEOAS</div>
              <div class="tutorials-card-sub-text">Implementing HATEOAS API to deliver a link for state transition & Frontend based on it</div>
            </div>
          </div>
        </a>
        
        <!-- 9번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-dp-graphql-2022" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/210196682-261e3f7d-827b-4599-a918-cfba8aa29c22.jpg">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Data Projection w/ GraphQL</div>
              <div class="tutorials-card-sub-text">Creating GraphQL-based backend application for data composition</div>
            </div>
          </div>
        </a>
      </v-row>


      <!-- <v-col
        lg="4"
        md="6"
        sm="12"
      >
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-dp-graphql-2022" target="_blank">
          <v-card
            class="title-page-card-box"
            outlined
          >
            <g-image style="height:218px;"
                src="https://user-images.githubusercontent.com/113568664/203213154-e7b2a478-79fc-4aec-be5d-a8d9a5f62cc4.png">
            </g-image>
            <v-card-title class="home-card-title"><br>[Dev] Data Projection w/ GraphQL<br>&nbsp;</v-card-title>
            <v-card-subtitle>Creating GraphQL-based backend application for data composition</v-card-subtitle>
          </v-card>
        </a>
      </v-col> -->

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
  .clearfix::after{content:""; display:block; clear:both;}

  .title-page-card-box {
    padding: 0;
    margin-bottom: 30px;
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

  .main-page-slide-mobile-btn {
    color:rgba(107, 59, 165, 1);
    line-height:70px;
    font-size:20px;
    text-align: left;
    display: block;
    width:100%;
    background-color:white;
    border-radius: 5px;
    overflow:hidden;
    margin-bottom:20px;
  }

  .mobile-btn-text {
    font-size:16px; 
    line-height:20px; 
    margin:-10px 0px 20px 65px;
  }

  .slide-btn-image {
    float: left;
    margin:5px 15px 0px 10px;
    width:40px; 
    height:40px;
  }

  .mobile-btn-image {
    float: left;
    margin:15px 15px 15px 10px;
    width:40px; 
    height:40px;
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

  .mobile-image-style {
    width:100%;
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

  .tutorials-card-box {
    border:solid 1px #E2E8F0;
    border-radius: 5px;
    padding:10px;
    margin:10px 0 0 10px;
    width:200px;
    height:300px;
  }

  .tutorials-card-image {
    height:115px;
    width:180px;
    margin-right:10px;
    margin-bottom:10px;
  }

  .tutorials-card-main-text {
    font-size:14px;
    font-weight:900;
  }

  .tutorials-card-sub-text {
    font-size:12px;
    margin-top:20px;
    color:#757575;
  }

  
</style>