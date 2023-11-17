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
              font-family: 'JalnanGothic';
              line-height:55px;
              font-size:34px;
              font-weight: 500;
              margin-bottom:18px;"
            >클라우드 네이티브 앱
              <br/>구현의 전문 배움터
              <br/>CNA Best Partner 
            </h2>
            <div style="position:relative;">
              <span class="clearfix">
                <button @click="slideClickBtn1"
                  :style="slideBtn1 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                  class="clearfix main-page-slide-btn"
                  type="button"
                >BizDevOps 풀 라이프사이클 지원
                  <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/209c7e65-2a6e-4e6d-b594-a21ea19761bd"></g-image>
                </button>

                <button @click="slideClickBtn2"
                  :style="slideBtn2 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                  class="clearfix main-page-slide-btn"
                  type="button"
                >DDD, EDA기반 핵심 프레임워크 활용
                  <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/30c71f68-aee0-4418-a1a9-3577a83017f3"></g-image>
                </button>

                <button @click="slideClickBtn3"
                  :style="slideBtn3 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
                  class="clearfix main-page-slide-btn"
                  type="button"
                >설치가 필요없는 학습교구 지원  
                  <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/cc383714-f667-41d7-b278-a7fb0ebbf484"></g-image>
                </button>
              </span>
            </div>
          </div>

          <div style="font-family:system-ui,-apple-system;">
            <div class="clearfix image-box-all">
              <div class="image-box-in" :style="slideBtn1 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
                <div class="image-box-text" style="margin-top:160px;"
                >비즈니스 모델링, 구현, 배포를 아우러는 <br/>End-to-End 전 과정 학습
                </div>
                <g-image class="image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/68417396-8a4d-478a-940c-f143995cda5e" />
                <!-- <figure class="g-image">
                  <div class="g-image--blur" style="">
                    <img class="g-image--fallback" src="/img/introduction-1.png" alt="" style="">
                  </div>
                </figure> -->
              </div>

              <div class="image-box-in" :style="slideBtn2 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
                <div class="image-box-text" style="margin-top:210px;"
                >Event driven Architecture 기반 최신 마이크로서비스<br/>
                Framework (Axon, Eventuate, Kafka) 및 아키텍처 적용
                </div>
                <g-image class="image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/161fdda9-ddfa-419c-80f8-c43b9e8dd244"/>
                <!-- <figure class="g-image">
                  <div class="g-image--blur" style="">
                    <img class="g-image--fallback" src="/img/introduction-2.png" alt="" style="">
                  </div>
                </figure> -->
              </div>
              
              <div class="image-box-in" :style="slideBtn3 == true ? 'margin-left:0px;' : 'margin-left:500px;'">
                <div class="image-box-text" style="bottom:8px;"
                >프로그램 설치가 필요없는<br/>
                온라인 이벤트스토밍 도구 및 클라우드 IDE 활용
                </div>
                <g-image class="image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/77970538-9a18-4e8b-9cfe-b6cbf9826e20"/>
                <!-- <figure class="g-image">
                  <div class="g-image--blur" style="">
                    <img class="g-image--fallback" src="/img/introduction-3.png" alt="" style="">
                  </div>
                </figure> -->
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
        >클라우드 네이티브 앱
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
          <div v-if="mobileBtn1">
            <g-image class="mobile-image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/68417396-8a4d-478a-940c-f143995cda5e" />
            <!-- <figure class="g-image">
              <div class="g-image--blur m-img-wrap" style="">
                <div class="mobile-btn-text">
                  비즈니스 모델링, 구현, 배포를 아우러는 <br/>End-to-End 전 과정 학습
                </div>
                <img class="g-image--fallback mobile-image-style" src="./img/introduction-1.png" alt="" style="">
              </div>
            </figure> -->
          </div>
        </button>

        <button @click="mobileClickBtn2"
          :style="mobileBtn2 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
          class="clearfix main-page-slide-mobile-btn"
          type="button"
        >
        <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/30c71f68-aee0-4418-a1a9-3577a83017f3"></g-image>
        <div class="gs-mobile-btn-title" style="line-height: 50px;">DDD, EDA기반 핵심 프레임워크 활용</div>
          <div v-if="mobileBtn2">
            <g-image class="mobile-image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/161fdda9-ddfa-419c-80f8-c43b9e8dd244"/>
            <!-- <figure class="g-image">
              <div class="g-image--blur m-img-wrap" style="">
                <div class="mobile-btn-text">
                  Event driven Architecture 기반 최신 마이크로서비스<br/>Framework (Axon, Eventuate, Kafka) 및 아키텍처 적용
                </div>
                <img class="g-image--fallback mobile-image-style" src="./img/introduction-2.png" alt="" style="">
              </div>
            </figure> -->
          </div>
        </button>

        <button @click="mobileClickBtn3"
         :style="mobileBtn3 == true ? 'color:rgba(107, 59, 165, 1);text-decoration:underline;font-weight:bold;':''"
          class="clearfix main-page-slide-mobile-btn"                   
          type="button"
        >
        <g-image class="clearfix slide-btn-image" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/cc383714-f667-41d7-b278-a7fb0ebbf484"></g-image>
        <div class="gs-mobile-btn-title" style="line-height: 50px;">설치가 필요없는 학습교구 지원</div>
          <div v-if="mobileBtn3">
            <g-image class="mobile-image-style" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/77970538-9a18-4e8b-9cfe-b6cbf9826e20"/>
            <!-- <figure class="g-image">
              <div class="g-image--blur m-img-wrap" style="">
                <div class="mobile-btn-text">
                  프로그램 설치가 필요없는<br/>온라인 이벤트스토밍 도구 및 클라우드 IDE 활용
                </div>
                <img class="g-image--fallback mobile-image-style" src="./img/introduction-3.png" alt="" style="">
              </div>
            </figure> -->
          </div>
        </button>
      </div>
    </div>
  <div>
    <div class="content" style="margin-top:-40px;">
      <h3 class="con-tit">MSA School 은</h3>
      <p style="font-weight: 700;">MSA분야 최고의 전문 컨텐츠로 마이크로서비스 시장을 선도할 클라우드 네이티브 전문가를 배출하고 있습니다.</p>
      <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
        MSA School은 분석, 설계에서 구현, 배포까지 마이크로서비스 전 생명주기를 지원하는 학습 교구와 전문 커리큘럼으로 End-to-End 학습 및 실습이 가능한 환경을 제공합니다.
        <br>Cloud native한 최신 컨텐츠는 물론, 이벤트 드리븐 마이크로서비스 구현에 필수인 전용 프레임워크(Eventuate, Axon 등)와 최신 MSA 기술이 반영된 실습코드로 MSA School은 항상 진화합니다.
      </div>
      <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
        모든 CNA 교과정은 로컬에 SW 설치없이 웹 브라우저에서 수강 가능합니다. 브라우저 상에서 Domain driven Design(도메인 주도 설계)기반 분석/설계 도구인 이벤트스토밍(Eventstorming)으로 설계된 도메인 모델은 다양한 언어(Axon, Eventuate, Go, Nodejs, Python, Spring-boot, Custom Language)로 CNA Code가 생성되고, 클라우드 IDE 도구인 GitPod와 자동 연계됩니다.
      </div>
      <div style="color:#444d56;">
        MSA School이 전하는 축적된 Cloud 전문 지식, 마이크로서비스 현장 경험 및 질높은 교육 후기로 인해, 매년 마이크로서비스를 도입하려는 많은 선도 기업들이 MSA School을 통해 CNA를 학습하고 재방문의 발길이 꾸준하게 이어지고 있습니다.
      </div>
    </div>

    <!-- <g-image style="margin:0 auto; width:700px;" src="./img/number1.png"></g-image> -->

    <div class="content" style="margin-top:-30px;">
      <h3 class="con-tit w190">MSA School 에는</h3>
      <p style="font-weight: 700;">클라우드 네이티브 전문가가 되는 체계적인 업계 최고 커리큘럼이 준비되어 있습니다. 또한, 수강하시는 기업을 위해 다양하게 스케줄링된 학습 유형을 제공합니다.</p>
    </div>
    <br>
    <div class="is-not-mobile-main-top">
        <div style = "font-size:16px; font-weight: 600; margin-bottom: 10px;">교육 과정 Overview</div>
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
                        <a href="/operation/education/fundamental/">
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
                        <a href="/operation/education/advanced/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
        <div style="margin-top:20px; display:inline-flex;">
            <div style="margin-right:20px;">교육 문의 : help@uengine.org</div>
            <div style="margin-right:20px;">정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
            <a target="_blank" style="color:blue;" href="https://open.kakao.com/o/sPDIQmEf">카카오톡 오픈채팅</a>
        </div>
      </div>

      <div class="is-mobile-main-top">
        <div style = "font-size:16px; font-weight: 600; margin-bottom: 10px;">교육 과정 Overview</div>
        <div style="width: 100%; height: 50px; margin-bottom: 5px; text-align: center; font-weight: 600; background-color: #5a67d8; border-radius: 5px;">
          <a style="display: inline-block; color: #fff; margin-top: 12px; text-decoration: underline;" href="/operation/education/fundamental/">Fundamental</a>
        </div>
        <table style="width: 100%;">
        <!-- <table class="gs-table-default gs-table-default">
            <th class="main-table-title"> </th>
            <th class="main-table-title">Fundamental</th> -->
            <tr style="border-bottom: 1px solid #aaa;">
                <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Biz</td>
                <td style="border-left: 1px solid #aaa;">
                    • Object Oriented Design<br>
                    - OOP Design Principles<br><br>
                    • UML & Design Patterns
                </td>
            </tr>
            <tr style="border-bottom: 1px solid #aaa;">
                <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Dev</td>
                <td style="border-left: 1px solid #aaa;">
                    • Obejct Oriented Programming<br>
                    - Object Oriented Framework<br>
                    - Spring boot, JDBC and JPA<br>
                    - Web UI (VueJS)<br><br>
                    • Understanding GitHub & GitPod<br><br>
                    • Build automation tool<br>
                    - Maven, Gradle<br><br>
                    • Linux OS Basics
                </td>
            </tr>
            <tr style="border-bottom: 1px solid #aaa;">
                <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Ops</td>
                <td style="border-left: 1px solid #aaa;">
                    • Cloud Infra, VM<br>
                    - CSP introduction<br>
                    - VM managed Service<br><br>
                    • Deploy to VM<br>
                    - VM, Dabase provisioning<br>
                    - Deploy to Cloud VM
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div style="text-align:center;">
                        <a href="/operation/education/fundamental/">
                          <button style="background-color:#fff;
                          border-radius: 4px;
                          border:2px solid #5a67d8;
                          height: 36px;
                          width: 90px;
                          text-align: center;
                          line-height: 1.2;
                          font-size: 14px;
                          font-weight: 700;">
                            세부사항
                          </button>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
        <div style="width: 100%; height: 50px; margin-bottom: 5px; text-align: center; font-weight: 600; background-color: #5a67d8; border-radius: 5px;">
          <a style="display: inline-block; color: #fff; margin-top: 12px; text-decoration: underline;" href="/operation/education/curriculum/">Intermediate</a>
        </div>
        <table style="width: 100%;">
            <tr style="border-bottom: 1px solid #aaa;">
              <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Biz</td>
              <td style="border-left: 1px solid #aaa;">
                  • Eventstorming<br>
                  - Eventstorming E-Commerce Domain<br>
                  - Big picture & Design level Eventstorming<br>
                  - Context Mapping, CQRS<br><br>
                  
                  • Aggregate Modeling<br>
                  -  Entity Design with Class Diagrams
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #aaa;">
              <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Dev</td>
              <td style="border-left: 1px solid #aaa;">
                  • Microservice Clean Architecture<br>
                  - ES Model and Implementation mapping<br><br>
                  • Circuit Breaker Pattern<br>
                  - Req/Res with FeignClient<br><br>
                  • Event driven Microservice<br>
                  - Event Pub/Sub, Compensation & CQRS<br><br>
                  • Message Broker – Kafka<br><br>
                  • Application Packaging & Dockerizing
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #aaa;">
              <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Ops</td>
              <td style="border-left: 1px solid #aaa;">
                  • Cloud Software Platform, Docker<br><br>
                  • Kubernetes 인 액션<br>
                  - Kubernetes SLA features & Telemetry<br>
                  - Deploy manifests Diagramming<br><br>
                  • Service Mesh (Istio)<br>
                  - Traffic Management (Retry, Timeout, Circuit breaker)<br><br>
                  • DevOps Pipeline (Jenkins, CSP managed)
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <div style="text-align:center;">
                  <a href="/operation/education/curriculum/">
                    <button style="background-color:#fff;
                    border-radius: 4px;
                    border:2px solid #5a67d8;
                    height: 36px;
                    width: 90px;
                    text-align: center;
                    line-height: 1.2;
                    font-size: 14px;
                    font-weight: 700;">
                      세부사항
                    </button>
                  </a>
                </div>
              </td>
            </tr>
        </table>
        <div style="width: 100%; height: 50px; margin-bottom: 5px; text-align: center; font-weight: 600; background-color: #5a67d8; border-radius: 5px;">
          <a style="display: inline-block; color: #fff; margin-top: 12px; text-decoration: underline;" href="/operation/education/advanced/">Advanced</a>
        </div>
        <table style="width: 100%;">
            <tr style="border-bottom: 1px solid #aaa;">
              <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Biz</td>
              <td style="border-left: 1px solid #aaa;">
                  • Eventstorming for various Domains<br><br>
                  • Core-supporting-generic domain prioritization<br>
                  - Wardlley mapping, Impact mapping<br><br>
                  
                  • 중요도에 따른 구현 전략<br>
                  - Transaction Script<br><br>
                  • Apply Ubiquitous Language 
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #aaa;">
              <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Dev</td>
              <td style="border-left: 1px solid #aaa;">
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
            <tr style="border-bottom: 1px solid #aaa;">
              <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Ops</td>
              <td style="border-left: 1px solid #aaa;">
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
              <td colspan="2">
                  <div style="text-align:center;">
                      <a href="/operation/education/advanced/">
                        <button style="background-color:#fff;
                          border-radius: 4px;
                          border:2px solid #5a67d8;
                          height: 36px;
                          width: 90px;
                          text-align: center;
                          line-height: 1.2;
                          font-size: 14px;
                          font-weight: 700;">
                            세부사항
                          </button>
                      </a>
                  </div>
              </td>
            </tr>
        </table>
        <div style="margin-top:20px; display:flex; flex-direction: column;">
            <div style="margin-right:20px;">교육 문의 : help@uengine.org</div>
            <div style="margin-right:20px;">정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
            <a target="_blank" style="color:blue;" href="https://open.kakao.com/o/sPDIQmEf">카카오톡 오픈채팅</a>
        </div>
      </div>
    </div>

    <div style="width:100%; height:3px; background-color:#eeeeee; margin-top: 60px;"></div>
    <div style="width:100%; height:16px; background-color:#f9f9f9;"></div>
   
    <div style="margin-top:-30px;" class="content">
      <h3 class="con-tit w250">MSA School 강사진 소개</h3>
    </div>
    <div class="gs-the-entire-package" style="margin-top: 20px;">
        <div style="width:90% !important;
                    margin-left:1% !important;
                    margin-right:1% !important;
                    background-color: white !important;
                    border: 1px solid #e5e5e5 !important;
                    border-radius: 10px !important;
                    box-shadow: 0 1px 8px rgba(22,22,22, 0.1) !important;
                    margin-bottom: 10px;">
            <figure class="g-image">
              <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                <img class="g-image--fallback" src="../../../../img/05_Community/02_MSA_교육과정/img3.png" alt="" style="margin-top:-30px; width: 100%;">
                <!-- <g-image style="margin-top:-30px; width: 100%; height: 100%;" src="~/img/05_Community/02_MSA_교육과정/img3.png"></g-image> -->
              </div>
            </figure>                        
            <div style="width:85% !important;
                        background-color:#e6e9f9 !important;
                        margin:0 auto !important;
                        border-radius:10px !important;
                        margin-top:-25px !important;
                        text-align:center !important;
                        position:relative !important;">
                <h3 style="margin-bottom:0; color:gray;">장진영</h3>
                <p style="color:gray; font-size:12px;">uEngine CEO & President</p>
            </div>
            <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                • MSA 교육, 기업 컨설팅<br>
                • MSAEz, MSA School, CNA PaaS Platform<br>
                • Open Source Open Cloud Engine<br>
                • uEngine BPM, SNS(Process CODI), ALM(ESSENCIA)<br>
                <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                • 現 유엔진솔루션즈 대표이사<br>
                • 現 MSA 교육, 기업 컨설팅<br>
                • 現 MSA Facebook 그룹 운영<a target="_blank" style="color:blue;" href="https://www.facebook.com/groups/cloudswmoding">(링크)</a><br>
                • 클라우드(MSA, DDD) 강의 다수<br>
                • 객체지향 프로그래밍 University 강의<br>
                • 한국소프트웨어기술진흥협회 전문강사<br>
            </div>
        </div>
    
        <div style="width:90% !important;
                    margin-left:1% !important;
                    margin-right:1% !important;
                    background-color: white !important;
                    border: 1px solid #e5e5e5 !important;
                    border-radius: 10px !important;
                    box-shadow: 0 1px 8px rgba(22,22,22, 0.1) !important;
                    margin-bottom: 10px;">
            <figure class="g-image">
              <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                <img class="g-image--fallback" src="../../../../img/05_Community/02_MSA_교육과정/img4.png" alt="" style="margin-top:-30px; width: 100%;">
                <!-- <g-image style="margin-top:-30px; width: 100%; height: 100%;" src="~/img/05_Community/02_MSA_교육과정/img4.png"></g-image> -->
              </div>
            </figure>   
            <div style="width:85% !important;
                        background-color:#e6e9f9 !important;
                        margin:0 auto !important;
                        border-radius:10px !important;
                        margin-top:-25px !important;
                        text-align:center !important;
                        position:relative !important;">
                <h3 style="margin-bottom:0; color:gray;">박용주</h3>
                <p style="color:gray; font-size:12px;">uEngine Director & MSA Consultant</p>
            </div>
            <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                • MSA DT 마스터플랜 수립 Project<br>
                • MSA PoC/ Pilot 수행<br>
                • 다수 MSA 제안 작업 및 컨설팅 <br>
                • 마이크로서비스 교육과정 교안/교재 집필  <br>
                <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                • 現 uEngine MSA 정규 교과정 전문강사<br>
                • 現 MSA App. Engineering 기업과정<br>
                • ‘21 : SK MSA App. Engineering 과정<br>
                • ’21. 06 : KT Microservice 직무전환과정<br>
                • ’20. 09 : Doosan Microservices 교육<br>
                • ’19. 09 : KOSTA Microservices 교육<br>
                • ‘19. 02 : LG CNS 이벤트스토밍 교육<br>
            </div>
          </div>
          <div style="width:90% !important;
                    margin-left:1% !important;
                    margin-right:1% !important;
                    background-color: white !important;
                    border: 1px solid #e5e5e5 !important;
                    border-radius: 10px !important;
                    box-shadow: 0 1px 8px rgba(22,22,22, 0.1) !important;
                    margin-bottom: 10px;">
              <figure class="g-image">
                <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                  <img class="g-image--fallback" src="https://github.com/kykim97/factory-pattern/assets/113568664/016eba9d-600d-45b6-a8cc-8f912d7541f3" alt="" style="margin-top:-30px; width: 100%;">
                </div>
              </figure>   
              <!-- <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                  <g-image style="margin-top:-15px;" src="https://github.com/kykim97/factory-pattern/assets/113568664/016eba9d-600d-45b6-a8cc-8f912d7541f3"></g-image>
              </div> -->
              <div style="width:85% !important;
                        background-color:#e6e9f9 !important;
                        margin:0 auto !important;
                        border-radius:10px !important;
                        margin-top:-25px !important;
                        text-align:center !important;
                        position:relative !important;">
                  <h3 style="margin-bottom:0; color:gray;">손영수</h3>
                  <p style="color:gray; font-size:12px;">Onycom CPO</p>
              </div>
              <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                  • Onycom 성능솔루션 사업부 상무/CPO<br>
                  • 대기업 대상 다수 소프트웨어 교육 진행<br>
                  • 다수 소프트웨어 도서 번역 및 감수<br>
                  <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                  • 現 어니컴 성능솔루션 사업부 상무 / CPO<br>
                  • 前 와탭랩스 CPO<br>
                  • 前 NHN NEXT 모바일/창업 과정 교수<br>
                  • 前 삼성전자 소프트웨어 센터 책임<br>
                  • IBK기업은행 Java Clean Code와 성능향상<br>
                  • 삼성전자 삼성페이 서버 아키텍팅 과정<br>
                  • Samsung SDS 아키텍트 과정 설계/ 평가 과정<br>
                  • 현대 오토에버 아키텍트 설계 및 전략 과정<br>
                  • KT CleanCode 및 소프트웨어 아키텍트 과정<br>
                  • 그 외 다수
              </div>
          </div>
          <div style="width:90% !important;
                    margin-left:1% !important;
                    margin-right:1% !important;
                    background-color: white !important;
                    border: 1px solid #e5e5e5 !important;
                    border-radius: 10px !important;
                    box-shadow: 0 1px 8px rgba(22,22,22, 0.1) !important;
                    margin-bottom: 10px;">
              <figure class="g-image">
                <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                  <img class="g-image--fallback" src="../../../../img/05_Community/02_MSA_교육과정/img8.jpeg" alt="" style="margin-top:-30px; width: 100%;">
                  <!-- <g-image style="margin-top:-30px; width: 100%; height: 100%;" src="~/img/05_Community/02_MSA_교육과정/img8.jpeg"></g-image> -->
                </div>
              </figure>  
              <div style="width:85% !important;
                        background-color:#e6e9f9 !important;
                        margin:0 auto !important;
                        border-radius:10px !important;
                        margin-top:-25px !important;
                        text-align:center !important;
                        position:relative !important;">
                  <h3 style="margin-bottom:0; color:gray;">윤성열</h3>
                  <p style="color:gray; font-size:12px;">Dreamflow CEO</p>
              </div>
              <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                  • MSA 개발 및 네트워크 인프라 구축<br>
                  • Domain 분석설계 및 서버 개발 project<br>
                  • 다수 MSA 제안 작업 및 컨설팅 <br>
                  • 다수 마이크로서비스 교육 진행  <br>
                  <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                  • 現 드림플로우 대표이사<br>
                  • 現 한국소프트웨어기술진흥협회 BAPF <br>포럼, 교육과정위원회 및 전문강사<br>
                  • ’18. 10 : 원오원글로벌 디지털팀 팀장<br>
                  • ’18. 04 : TTA 사물인터넷 특별기술위원회 사물인터넷 융합서비스 프로젝트그룹 (SPG11) 부의장<br>
                  • ’17. 03 : 가천대학교 겸임교수<br>
              </div>
          </div>
      </div>


    <div style="width:100%; height:3px; background-color:#eeeeee; margin-top: 60px;"></div>
    <div style="width:100%; height:16px; background-color:#f9f9f9;"></div>
   
    <div style="margin-top:-30px;" class="content">
      <h3 class="con-tit w400">MSA School 교육 실적 및 주요 수강 기업</h3>
    </div>
    <v-row style="margin:0; text-align: center;">
        <g-image style="margin: 10px 10px 0 0; width: 450px;"
            src="https://github.com/kykim97/factory-pattern/assets/113568664/34d938cb-db22-44db-a038-7886d3a1568c">
        </g-image>
        <g-image style="margin: 10px 10px 0 0; width: 700px;"
            src="https://github.com/kykim97/factory-pattern/assets/113568664/25d6d172-3b23-47d3-a4ea-07e82898ad7a">
        </g-image>
        <!-- <g-image style="margin: 10px 10px 0 0; width: 400px; height: 504px;"
            src="https://github.com/kykim97/factory-pattern/assets/113568664/dec2df52-4cd0-4ae6-b3cc-42bdd1eab7d5">
        </g-image>
        <g-image style="margin: 10px 10px 0 0; width: 400px; height: 504px;"
            src="https://github.com/kykim97/factory-pattern/assets/113568664/e406b5bd-2641-41ba-a791-00b6f0bba20c">
        </g-image> -->
    </v-row>
    <!-- <mark-down style="margin-top:-50px;" class="content">
### MSA School 주요 수강 기업
    </mark-down>
    <g-image style="margin-top: 10px;"
        src="https://github.com/kykim97/factory-pattern/assets/113568664/8e26cbab-1ec2-459b-beee-769d8f5057d7">
    </g-image> -->
    <div style="margin-top:-30px;" class="content">
      <h3 class="con-tit w280">MSA School 교과정 맛보기</h3>
    </div>
    <v-row style="margin:0;">
      <!-- 1번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#ddd-google-drive-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271741-4e4cdd7a-37af-4445-902c-a3229c392e6e.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Biz] 이벤트스토밍</div>
            <div class="tutorials-card-sub-text">구글 드라이브 시나리오를 기반으로 한 이벤트스토밍 예제</div>
          </div>
        </div>
      </a>

      <!-- 2번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#cna-start-2022-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
          <g-image class="tutorials-card-image" style="margin:0 auto;"
              src="https://user-images.githubusercontent.com/113568664/211271746-a3f5fce0-ad12-4cf3-88cb-a6348d990044.png">
          </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] 단위 마이크로서비스 실행</div>
            <div class="tutorials-card-sub-text">Cloud IDE 기반 단위 마이크로 서비스 및 상호 테스트를 통한 점진적 구현</div>
          </div>
        </div>
      </a>

      <!-- 3번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#monolith-2-misvc-2022-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271766-11c1234e-8ee9-4ef5-9c4a-36df00530766.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] Req/Res 방식의 MSA 통신</div>
            <div class="tutorials-card-sub-text">모놀리스와 마이크로서비스 간 또는 마이크로서비스 간의 동기식 호출 적용</div>
          </div>
        </div>
      </a>

      <!-- 4번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#circuit-breaker-2022-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271764-07de1f1c-96de-49fe-99ea-d12c658a8644.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] 서킷브레이커</div>
            <div class="tutorials-card-sub-text">서비스 간 동기식 통신에서 장애 전파를 사전에 차단하는 Fail-Fast 전략 패턴</div>
          </div>
        </div>
      </a>

      <!-- 5번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#pub-sub-2022-assocaiate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271759-4bb531e0-e8ad-4964-a8f7-65ceae30c79c.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] Pub-Sub 방식의 연동</div>
            <div class="tutorials-card-sub-text">블로킹이 없고 장애가 격리되는 적용한 EDA 기반 메시지 통신 적용</div>
          </div>
        </div>
      </a>
      
      <!-- 6번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#compensation-correlation-2022-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271747-7c7d01e4-30c6-4b44-804c-be834713d8fa.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] Compensation & Correlation</div>
            <div class="tutorials-card-sub-text">MSA 환경에서 트랜잭션 실패 시 보상처리로 정합성 관리</div>
          </div>
        </div>
      </a>
      
      <!-- 7번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#Oauth2withKeycloak-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271754-e0c813d9-9f85-4af5-8770-4ddce2383d90.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] JWT 토큰 기반 인증</div>
            <div class="tutorials-card-sub-text">마이크로서비스의 인증 및 권한 부여를 위한 Single-Sign-On 패턴 적용</div>
          </div>
        </div>
      </a>
      
      <!-- 8번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#dp-frontend-2022-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271752-19bcfa58-61f0-47ca-9e42-b3e017eda354.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] 데이터 프로젝션 w/ 프론트엔드 & HATEOAS</div>
            <div class="tutorials-card-sub-text">HATEOAS API를 구현하여 상태 전환을 위한 링크 및 기반 프론트엔드 제공</div>
          </div>
        </div>
      </a>
      
      <!-- 9번 카드 -->
      <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#dp-graphql-2022-associate" target="_blank">
        <div
          class="clearfix tutorials-card-box"
          outlined
        >
            <g-image class="tutorials-card-image" style="margin:0 auto;"
                src="https://user-images.githubusercontent.com/113568664/211271748-f3662a80-cb9b-4190-96e9-33a5b244b1f5.png">
            </g-image>
          <div>
            <div class="tutorials-card-main-text">[Dev] 데이터 프로젝션 w/ GraphQL</div>
            <div class="tutorials-card-sub-text">데이터 구성을 위한 GraphQL 기반 백엔드 애플리케이션 생성</div>
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

    <div style="margin-top:-30px; margin-bottom:15px;" class="content">
      <h3 class="con-tit w220">웨비나 영상 다시보기</h3>
    </div>
    <a href="https://www.youtube.com/@uengine5309" target="_blank">
      <v-btn style="background-color:#5a67d8 !important;
          border-radius: 4px;
          margin-right:15px;
          height: 36px;
          width: 120px;
          text-align: center;
          line-height: 36px;
          font-size: 14px;
          font-weight: 700;"
      ><span style="color:white;">전체 영상 확인</span>
      </v-btn>
    </a>

    <v-row style="margin:0;">
        <!-- 1번 카드 -->
        <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-" target="_blank">
          <div
            class="clearfix youtube-card-box"
            outlined
          >
            <g-image class="youtube-card-image" style=""
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/09926d28-4df6-4d7f-b83a-59660cc7ca06">
            </g-image>
            <div>
              <div class="tutorials-card-main-text">11월 웨비나</div>
              <div class="tutorials-card-sub-text">오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개</div>
            </div>
          </div>
        </a>
        
        <!-- 2번 카드 -->
        <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK" target="_blank">
          <div
            class="clearfix youtube-card-box"
            outlined
          >
            <g-image class="youtube-card-image" style=""
                src="https://github.com/msa-ez/msaschool.github.io/assets/113568664/eaff5d86-b56f-45ea-82fb-c73c3394f265">
            </g-image>
            <div>
              <div class="tutorials-card-main-text">10월 웨비나</div>
              <div class="tutorials-card-sub-text">ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!</div>
            </div>
          </div>
        </a>

        <!-- 3번 카드 -->
        <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X" target="_blank">
          <div
            class="clearfix youtube-card-box"
            outlined
          >
            <g-image class="youtube-card-image"
                src="https://github.com/msa-ez/msaschool.github.io/assets/113568664/24437b45-a7da-4fd0-b276-823c44944be4">
            </g-image>
            <div>
              <div class="tutorials-card-main-text">8월 웨비나</div>
              <div class="tutorials-card-sub-text">ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기</div>
            </div>
          </div>
        </a>

        <!-- 4번 카드 -->
        <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY" target="_blank">
          <div
            class="clearfix youtube-card-box"
            outlined
          >
              <g-image class="youtube-card-image"
                  src="https://github.com/msa-ez/msaschool.github.io/assets/113568664/adc36c9d-3c4f-4918-9d41-59129a4653c6">
              </g-image>
            <div>
              <div class="tutorials-card-main-text">7월 웨비나</div>
              <div class="tutorials-card-sub-text">ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기</div>
            </div>
          </div>
        </a>
    </v-row>
    
    <!-- <div>
      <iframe id="player" type="text/html" class="clearfix video-link"
      src="http://www.youtube.com/embed/05NOZ41wzUg"
      frameborder="0"></iframe>
    </div>  -->
    <div style="margin-top:-30px; margin-bottom:15px;" class="content">
      <h3 class="con-tit w280">MSA School 교육 일정 확인</h3>
    </div> 
    <iframe src="https://calendar.google.com/calendar/embed?src=help%40uengine.org&ctz=Asia%2FSeoul" style="border: 0; width:100%; height:600px; margin:10px 0 10px 0;" frameborder="0" scrolling="no"></iframe>
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
  @font-face {
    font-family: 'JalnanGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.woff2') format('woff2');
    font-weight: 900;
  } 
  
  .clearfix::after{content:""; display:block; clear:both;}

  .con-tit {
    font-family: 'NanumSquareNeo';
    color:#222;
  }
  .con-tit::after {
    content: "";
    display: block;
    width:170px;
    height: 2px;
    background-color: #333;
    margin-top: 5px;
    margin-bottom: -4px;
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
    /* color:rgba(107, 59, 165, 1); */
    color:#222;
    height:50px;
    line-height:50px;
    font-size:20px;
    width:400px;
    text-align: left;
    display: block;
    background-color:none;
  }

  .main-page-slide-mobile-btn {
    /* color:rgba(107, 59, 165, 1); */
    color:#222;
    line-height:70px;
    font-size:18px;
    text-align: left;
    display: block;
    width:100%;
    /* background-color:white; */
    /* border-radius: 5px; */
    /* overflow:hidden; */
    /* margin-bottom:20px; */
  }

  .m-img-wrap {
    width:100%;
    position: relative;
  }

  .mobile-btn-text {
    position: absolute;
    bottom: 3%;
    left: 0;
    width:100%;
    color:#fff;
    background-color: rgba(0, 0, 0, 0.7);
    padding:10px;
    font-size:14px; 
    line-height:1.6; 
    /* margin:-10px 0px 20px 9px; */
    text-align: center;
  }

  .slide-btn-image {
    float: left;
    margin:5px 10px 0px 10px;
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
    height:328px;
    overflow: hidden;
    border-radius: 7px;
    border:1px solid rgba(107, 59, 165, 1);
    margin-top: 10px;
    margin-left: 10px;
  }

  /* .image-style {
    margin-left:10px;
  } */

  .mobile-image-style {
    width:100%;
    border-radius: 5px;
    border:1px solid rgba(107, 59, 165, 1);
    margin-top: 10px;
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
    /* background-color:#6B3BA5; */
    width:500px;
    background-color: rgba(0, 0, 0, 0.7);
    color:white;
    font-size:18px;
    font-weight:500;
    padding:10px;
    position:absolute;
    /* margin-left:10px; */
  }

  .tutorials-card-box {
    border:solid 1px #E2E8F0;
    border-radius: 5px;
    padding:10px;
    margin:10px 0 0 10px;
    width:200px;
    height:300px;
    text-align: center;
  }

  .tutorials-card-image {
    width:180px;
    height:115px;
    /* margin-right:10px; */
    margin-bottom:10px; 
  }

  .youtube-card-box {
    border:solid 1px #E2E8F0;
    border-radius: 5px;
    padding:10px;
    margin:10px 0 0 10px;
    width:300px;
    height:320px;
    text-align:center;
  }

  .youtube-card-image {
    height:180px;
    width:280px;
    margin:0 auto;
    /* margin-right:10px; */
    margin-bottom:10px;
  }

  .video-link {
    width:900px; 
    height:500px;
  }

  .tutorials-card-main-text {
    font-size:16px;
    font-weight:900;
    text-align: center;
  }

  .tutorials-card-sub-text {
    font-size:14px;
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
    text-align:center !important;
    font-size:15px;
    border-radius:5px;
    border:3px black solid;
  }

  .is-not-mobile-main-top {
    display:block
  }

  .is-mobile-main-top {
    display:none;
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

@media only screen and (max-width:676px) {
  .tutorials-card-box, .youtube-card-box {
    width:90vw;
  }
  .tutorials-card-image {
    height:185px;
    width:300px;
    margin-left:5px;
    margin-bottom:10px;
  }
  .video-link {
    height:200px;
    width:370px;
  }
}
  
</style>