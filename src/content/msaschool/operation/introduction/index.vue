<template>
  <div style="margin:70px 0px 0px 0px; font-family:system-ui,-apple-system;">
    <div class="is-not-mobile-main-top">
      <v-row style="background-color:#E9E6F8; padding:30px; margin-left:0px; height:390px;">
        <v-row style="position:absolute;
          left: 49%;
          transform: translate(-50%, 0%);
        ">
          <div style="float: left;">
            <h2 style="color:rgba(107, 59, 165, 1);
              font-family:system-ui,-apple-system;
              line-height:55px;
              font-size:34px;
              font-weight:500;
              margin-bottom:18px;"
            >클라우드 네이티브 앱
              <br/>구현의 전문 배움터
              <br/>CNA Best Partner 
            </h2>
            <div style="position:relative;">
              <span class="clearfix">
                <button @click="slideClickBtn1"
                  :style="slideBtn1 == true ? 'background-color:white;':''"
                  class="clearfix main-page-slide-btn"
                  type="button"
                >BizDevOps 풀 라이프사이클 지원
                  <g-image class="clearfix slide-btn-image"
                    src="./img/ic-carousel-3.png"
                  >
                  </g-image>
                </button>

                <button @click="slideClickBtn2"
                  :style="slideBtn2 == true ? 'background-color:white;':''"
                  class="clearfix main-page-slide-btn"
                  type="button"
                >DDD, EDA기반 핵심 프레임워크 활용
                  <g-image class="clearfix slide-btn-image"
                    src="./img/ic-carousel-2.png"
                  >
                  </g-image>
                </button>

                <button @click="slideClickBtn3"
                  :style="slideBtn3 == true ? 'background-color:white;':''"
                  class="clearfix main-page-slide-btn"
                  type="button"
                >설치가 필요없는 학습교구 지원  
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
      </v-row>
    </div>

    <div class="is-mobile-main-top">
      <div style="background-color:#E9E6F8; padding:30px; padding-left:30px;">
        <h2 style="color:rgba(107, 59, 165, 1);
          font-family:system-ui,-apple-system;
          line-height:55px;
          font-size:40px;
          font-weight:500;
          margin-bottom:18px;"
        >클라우드 네이티브 앱
          <br/>구현의 전문 배움터
          <br/>CNA Best Partner 
        </h2>

        <button @click="mobileClickBtn1"
          class="clearfix main-page-slide-mobile-btn"
          type="button"
        >BizDevOps 풀 라이프사이클 지원
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
        >DDD, EDA기반 핵심 프레임워크 활용
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
        >설치가 필요없는 학습교구 지원
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
    </div>
  <div>
    <mark-down class="content" style="margin-top:-40px;">
### MSA School 은
**MSA분야 최고의 전문 컨텐츠로 마이크로서비스 시장을 선도할 클라우드 네이티브 전문가를 배출하고 있습니다.**

MSA School은 분석, 설계에서 구현, 배포까지 마이크로서비스 전 생명주기를 지원하는 학습 교구와 전문 커리큘럼으로 End-to-End 학습 및 실습이 가능한 환경을 제공합니다.
Cloud native한 최신 컨텐츠는 물론, 이벤트 드리븐 마이크로서비스 구현에 필수인 전용 프레임워크(Eventuate, Axon 등)와 최신 MSA 기술이 반영된 실습코드로 MSA School은 항상 진화합니다.

모든 CNA 교과정은 로컬에 SW 설치없이 웹 브라우저에서 수강가능합니다. 브라우저 상에서 Domain driven Design(도메인 주도 설계)기반 분석/설계 도구인 이벤트스토밍(Eventstorming)으로 설계된 도메인 모델은 다양한 언어(Axon, Eventuate, Go, Nodejs, Python, Spring-boot, Custom Language)로 CNA Code가 생성되고, 클라우드 IDE 도구인 GitPod와 자동 연계됩니다.

MSA School이 전하는 축적된 Cloud 전문 지식, 마이크로서비스 현장 경험 및 질높은 교육 후기로 인해, 매년 마이크로서비스를 도입하려는 많은 선도 기업들이 MSA School을 통해 CNA를 학습하고 재방문의 발길이 꾸준하게 이어지고 있습니다.

    </mark-down>

    <!-- <g-image style="margin:0 auto; width:700px;" src="./img/number1.png"></g-image> -->

    
    <mark-down class="content" style="margin-top:-50px;">
### MSA School 에는
**클라우드 네이티브 전문가가 되는 체계적인 업계 최고 커리큘럼이 준비되어 있습니다. 또한, 수강하시는 기업을 위해 다양하게 스케줄링된 학습 유형을 제공합니다.**
    </mark-down>
    <br>
    <div>
        <div style = "font-size:16px; font-weight: 600;">CNA 개발자 연수과정</div>
        <table class="gs-table-default gs-table-default">
            <th class="main-table-title"> </th>
            <th class="main-table-title">Fundamental</th>
            <th class="main-table-title">Intermediate</th>
            <th class="main-table-title">Advanced</th>
            <tr>
                <td class="main-table-subtitle" style="padding-left:15px; text-align:center;">Biz</td>
                <td>
                    • Object Oriented Design<br>
                    - OOP Design Principles<br><br>
                    • UML & Design Patterns
                </td>
                <td>
                    • Eventstorming<br>
                    - Eventstorming E-Commerce Domain<br>
                    - Big picture & Design level Eventstorming<br>
                    - Context Mapping, CQRS<br><br>
                    
                    • Aggregate Modeling<br>
                    -  Entity Design with Class Diagrams
                </td>
                <td>
                    • Eventstorming for various Domains<br><br>
                    • Core-supporting-generic domain prioritization<br>
                    - Wardlley mapping, Impact mapping<br><br>
                    
                    • 중요도에 따른 구현 전략<br>
                    - Transaction Script<br><br>
                    • Apply Ubiquitous Language 
                </td>
            </tr>
            <tr>
                <td class="main-table-subtitle" style="padding-left:15px; text-align:center;">Dev</td>
                <td>
                    • Obejct Oriented Programming<br>
                    - Object Oriented Framework<br>
                    - Spring boot, JDBC and JPA<br>
                    - Web UI (VueJS)<br><br>
                    • Understanding GitHub & GitPod<br><br>
                    • Build automation tool<br>
                    - Maven, Gradle<br><br>
                    • Linux OS Basics
                </td>
                <td>
                    • Microservice Clean Architecture<br>
                    - ES Model and Implementation mapping<br><br>
                    • Circuit Breaker Pattern<br>
                    - Req/Res with FeignClient<br><br>
                    • Event driven Microservice<br>
                    - Event Pub/Sub, Compensation & CQRS<br><br>
                    • Message Broker – Kafka<br><br>
                    • Application Packaging & Dockerizing
                </td>
                <td>
                    • Extending Event driven Microservice<br>
                    - 멱등성, 트랜잭션, Kafka Parallel Processing, Deadline 처리<br>
                    - Dedicated Framework (Eventuate, Axon)<br><br>
                    • Inter-service communication<br>
                    - CDC, gRPC Client/Server, Spring Reactive<br><br>
                    • Microservice Authentication/ Authorization<br>
                    - Centralized Session (Redis, Memcached)<br>
                    - Client Token (JWT)
                </td>
            </tr>
            <tr>
                <td class="main-table-subtitle" style="padding-left:15px; text-align:center;">Ops</td>
                <td>
                    • Cloud Infra, VM<br>
                    - CSP introduction<br>
                    - VM managed Service<br><br>
                    • Deploy to VM<br>
                    - VM, Dabase provisioning<br>
                    - Deploy to Cloud VM
                </td>
                <td>
                    • Cloud Software Platform, Docker<br><br>
                    • Kubernetes 인 액션<br>
                    - Kubernetes SLA features & Telemetry<br>
                    - Deploy manifests Diagramming<br><br>
                    • Service Mesh (Istio)<br>
                    - Traffic Management (Retry, Timeout, Circuit breaker)<br><br>
                    • DevOps Pipeline (Jenkins, CSP managed)
                </td>
                <td>
                    • Service Mesh deep dive<br>
                    - Security, Monitoring, EnvoyFilter, Tracing<br><br>
                    • GitOps Methodology<br>
                    - Workflow with Jenkins & ArgoCD<br>
                    - Canary Deployment with Canary Scoring<br><br>
                    • Serverless<br>
                    - Knative, Tekton 
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td>
                    <div style="text-align:center;">
                        <a href="/operation/fundamental/fundamental/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
                <td>
                    <div style="text-align:center;">
                        <a href="/operation/education/curriculum/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
                <td>
                    <div style="text-align:center;">
                        <a href="/operation/advanced/advanced/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
        
        <div style="margin-top:20px; display:inline-flex;">
            <div style="margin-right:20px;">교육 문의 : help@uengine.org</div>
            <div style="margin-right:20px;">정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
            <a target="_blank" style="color:blue;" href="https://open.kakao.com/me/msaschool">카카오톡 오픈채팅</a>
        </div>

        <iframe src="https://calendar.google.com/calendar/embed?src=help%40uengine.org&ctz=Asia%2FSeoul" style="border: 0; width:100%; height:600px; margin-top:60px;" frameborder="0" scrolling="no"></iframe>
    </div>
    
    <mark-down style="margin-top:-50px;" class="content">
### MSA School 교과정 맛보기
    </mark-down>
    
      <v-row style="margin:0;">
        <!-- 1번 카드 -->
        <a href="https://labs.msaez.io/#/courses/cna-full-english/cna-full-english/en-ddd-google-drive" target="_blank">
          <div
            class="clearfix tutorials-card-box"
            outlined
          >
              <g-image class="tutorials-card-image"
                  src="https://user-images.githubusercontent.com/113568664/211271741-4e4cdd7a-37af-4445-902c-a3229c392e6e.png">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Biz] DDD-Eventstorming</div>
              <div class="tutorials-card-sub-text">Eventstorming example based on Google Drive scenario</div>
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
                src="https://user-images.githubusercontent.com/113568664/211271746-a3f5fce0-ad12-4cf3-88cb-a6348d990044.png">
            </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Running unit Microservice</div>
              <div class="tutorials-card-sub-text">Gradual implementation by running Cloud IDE-based unit microservices & mutual test</div>
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
                  src="https://user-images.githubusercontent.com/113568664/211271766-11c1234e-8ee9-4ef5-9c4a-36df00530766.png">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] MSA Communication by Req/Res</div>
              <div class="tutorials-card-sub-text">Applying synchronous calls between monoliths and microservices, or between microservices</div>
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
                  src="https://user-images.githubusercontent.com/113568664/211271764-07de1f1c-96de-49fe-99ea-d12c658a8644.png">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Circuit Breaker</div>
              <div class="tutorials-card-sub-text">Fail-Fast strategy pattern to block failure propagation in advance in synchronous communication between services</div>
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
                  src="https://user-images.githubusercontent.com/113568664/211271759-4bb531e0-e8ad-4964-a8f7-65ceae30c79c.png">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Pub-Sub Comunication</div>
              <div class="tutorials-card-sub-text">Applying EDA-based message communication with non-blocking & fault isolation</div>
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
                  src="https://user-images.githubusercontent.com/113568664/211271747-7c7d01e4-30c6-4b44-804c-be834713d8fa.png">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] Compensation & Correlation</div>
              <div class="tutorials-card-sub-text">Managing consistency by compensation handling when transaction fails in MSA environment</div>
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
                  src="https://user-images.githubusercontent.com/113568664/211271754-e0c813d9-9f85-4af5-8770-4ddce2383d90.png">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">[Dev] JWT Token-based Authorization</div>
              <div class="tutorials-card-sub-text">Applying Single-Sign-On pattern for authentication & authorization of microservices</div>
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
                  src="https://user-images.githubusercontent.com/113568664/211271752-19bcfa58-61f0-47ca-9e42-b3e017eda354.png">
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
                  src="https://user-images.githubusercontent.com/113568664/211271748-f3662a80-cb9b-4190-96e9-33a5b244b1f5.png">
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

    <mark-down style="margin-top:-50px;" class="content">
### MSA School 패밀리 사이트
    </mark-down>
      
    <div class="basics-box clearfix" style="margin:10px 0px 50px 0px;">
        <div class="main-card-box">
          <div style="font-size:20px; font-weight:900;">커뮤니티</div>
          <div style="font-size:14px; height:210px;">
            MSA and DDD Software modeling 
            <br/>- 마이크로서비스와 도메인 주도 SW 모델링
            <br><br>설립년도 : 2015년
            <br><br>맴버 : 2.5천명 (2023. 01 현재)
            <br><br>주소 : https://www.facebook.com/groups/cloudswmoding/
          </div>
          <div style="text-align:center;">
            <a href="/operation/education/quick-understanding-cna/">
              <button class="main-card-details-btn">바로가기</button>
            </a>
          </div>
        </div>
        
        <div class="main-card-box">
          <div style="font-size:20px; font-weight:900;">학습교구</div>
          <div style="font-size:14px; height:210px;">MSA Easy - The fastest way to build event-driven microservices
            <br><br>EventStorming to Code Generator.
            <br><br>주소 : https://intro-kor.msaez.io/
          </div>
          <div style="text-align:center;">
            <a href="https://intro-kor.msaez.io/">
              <button class="main-card-details-btn">바로가기</button>
            </a>
          </div>
        </div>
        
        <div class="main-card-box">
          <div style="font-size:20px; font-weight:900;">교육플랫폼</div>
          <div style="font-size:14px; height:210px;">오픈강좌 자유열람, 진행중 온라인 CNA 강좌 운영중
            <br><br>설치가 필요없는 학습교구
            <br><br>주소 : https://labs.msaez.io/#/courses
          </div>
          <div style="text-align:center;">
            <a href="https://labs.msaez.io/#/courses">
              <button class="main-card-details-btn">바로가기</button>
            </a>
          </div>
        </div>
      </div>
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

  .main-table-title {
      line-height:40px;
      text-align:center;
      background-color:#5a67d8;
      color:white;
      border-radius:0 0 0 0;
      font-weight:600;
      height:40px;
      font-size:20px;
  }


  .main-table-subtitle {
    font-size:16px;
    font-weight:700;
    opacity:0.9;
    padding-left:5px;
    height:30px;
    margin-top:16px;
    line-height:15px;
  }

  .title-page-card-box {
    padding: 0;
    margin-bottom: 30px;
  }

  .gs-table-default td {
    font-size:14px;
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
    width:400px;
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

  .main-card-box {
    width:32.5%;
    height:300px;
    margin-right:0.5%;
    margin-bottom: 6px;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    float:left;    
    padding:15px;
  }

  .main-card-details-btn {
    width:110px !important;
    height:36px !important;
    text-align : center !important;
    font-size:15px;
    border-radius: 5px;
    border:3px black solid;
  }
  .is-not-mobile-main-top {
    display:block
  }

  .is-mobile-main-top {
    display: none;
  }

  @media only screen and (max-width:1600px) {
    .main-card-box {
      width:48%;
    }    
  }

  @media only screen and (max-width:1410px){
    .is-not-mobile-main-top {
      display:none;
    }
    .is-mobile-main-top {
      display:block;
    }
  }

@media only screen and (max-width:1100px) {
  .main-card-box {
    width:99%;
  }    
}
  
</style>