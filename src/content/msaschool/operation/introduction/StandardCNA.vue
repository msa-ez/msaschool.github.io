<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">Standard 과정</h2><br>
            <v-btn class="gs-review-btn"
                target='_blank'
                text
            >
                <!-- <a href="/operation/introduction/standard-cna/#review2" style="color:black !important; font-weight:700; font-size:14px;">
                    ▼ 후기보기
                </a> -->
            </v-btn>
        </div>
        <h6 class="gs-course-content">마이크로서비스 모델링에서 클라우드 네이티브 앱 구현/배포까지 MSA 이론과 클라우드 환경에서의 구현, 배포, 운영 실습을 포함하는 풀 과정(4일)입니다. 신청서 작성시, MSA이론(Biz) 및 CNA구현(Dev) 파트만 선택적으로 신청(2일)하여 수강할 수 있습니다.</h6>
        <div class="gs-manager">교육비 정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
        <table class="gs-table-default">
            <tr>
                <td rowspan="2" style="padding-left:15px; width:12%; background-color:#e6e9f9; font-weight:900; font-size:20px; text-align:center;">비용</td>
                <td style="font-weight:700; font-size:20px; text-align:center;">1인당 160만원(4일)</td>
            </tr>
            <tr>  
                <td style="font-weight:700; font-size:20px; text-align:center;">Biz/Dev만 수강시 1인당 80만원(2일)</td>
            </tr>
        </table>
        <v-btn class="gs-bottom-apply-btn"
            target='_blank'
            :href="`https://docs.google.com/forms/d/e/1FAIpQLSeSp0JwQfXdtCosyBtofXNaNe4EJPXqzoca65v2T0pvBR0i6A/viewform?usp=pp_url&entry.1858868603=Standard+CNA+%EA%B3%BC%EC%A0%95`"
        >
            <span style="color:white !important; font-weight:700; font-size:20px;">
                교육 신청하기
            </span>
        </v-btn>
        <div>
            <h3 style="margin-top:50px;">커리큘럼 소개</h3>
            <h4 style="margin-top:30px;">Day1 - Biz Part</h4>
            <table class="tbl-edu" style="width:100%;">
                <th style="width:12%; padding: 0 !important;">
                    <div class="tbl-title-ai" style="color: #fff;">시간</div>
                </th>
                <th style="width:28%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                </th>
                <th style="width:60%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                </th>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오전<br>9:00~11:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">클라우드 네이티브 애플리케이션의 정의와 설계전략</td>
                    <td style="border-left: 1px solid #aaa;">
                        • 애자일 기업에 필요한 것들 – Microservice, DevOps, Container<br>
                        • 모노리스와 마이크로서비스의 비교<br>
                        • 클라우드 네이티브 애플리케이션의 정의와 설계 패턴<br>
                        • 최신 마이크로서비스 아키텍쳐의 경향 – Event-driven (Reactive) Microservices<br>
                        • 사례 – 당근마켓과 11번가<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">11:30~13:00</td>
                    <td colspan="2" style="border-left: 1px solid #aaa; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오후<br>13:00~17:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">마이크로서비스의 분석/설계</td>
                    <td style="border-left: 1px solid #aaa;">
                        • DDD(도메인 주도 설계) 와 MSA Design Patterns을 적용한 마이크로서비스 분석/설계<br>
                        • DDD 구성요소 - 서브도메인, 바운디드 컨텍스트, 도메인 이벤트, 어그리게잇, 뷰<br>
                        • 서비스 식별과 분해방법들 - Core / Supporting Domain, Bounded Context, Aggregate, Business Capability, Mini Service<br>
                        • 이벤트스토밍 - DDD 를 쉽게하는 워크숍 실천법<br>
                        • MSA Design Patterns – Strangler with API G/W, 서킷브레이커, 토큰기반 인증, 클라이언트-사이드 렌더링, 서비스 프록시, 이벤트션팅<br>
                        • DDD 와 이벤트 스토밍의 결과를 헥사고날 아키텍처로 매핑하는 방법<br>
                    </td>
                </tr>
            </table>

            <h4 style="margin-top:50px;">Day2 – Dev Part</h4>
            <table class="tbl-edu" style="width:100%;">
                <th style="width:12%; padding: 0 !important;">
                    <div class="tbl-title-ai" style="color: #fff;">시간</div>
                </th>
                <th style="width:28%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                </th>
                <th style="width:60%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                </th>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오전<br>9:00~11:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">구현: 단위 마이크로 서비스의 구현과 분리</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Spring Boot와 Maven 을 이용한 단위 서비스 포장<br>
                        • JPA 를 이용한 도메인 모델과 어댑터 구현 (Entity, Value Objects)<br>
                        • Spring Data REST + JPA 를 통한  RESTful API 노출 (HATEOAS)<br>
                        • Spring Gateway 를 통한 서비스 분리후 진입점 통일<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">11:30~13:00</td>
                    <td colspan="2" style="border-left: 1px solid #aaa; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td rowspan="2" style="text-align: center;">오후<br>13:00~17:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">프론트엔드를 통한 마이크로 서비스 통합</td>
                    <td style="border-left: 1px solid #aaa;">
                        • UI 를 기반한 서비스 통합 전략:  Client-side Rendering, SPA, MVVM, HATEOAS<br>
                        • OAuth2 와 JWT 통한 Stateless 한 토큰 기반 접근과  인증<br>
                        • Front-end 기반 통합의 한계: 트랜잭션 이슈와 성능 문제<br>
                        • 마이크로 프론트엔드<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="border-left: 1px solid #aaa; font-weight:700;">인터-마이크로서비스의<br>통합 1:Request-Response 방식</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Request-Response 방식의 연동 (REST + Sync + Orchestration)<br>
                        • 서킷브레이커를 통한 장애회피<br>
                        • 쓰기관점 - 트랜잭션 이슈: 2PC or Shared-Database and schema per service<br>
                        • 읽기관점 - Composite-Service 구현방법: 동시 REST 호출 사용<br>
                    </td>
                </tr>
            </table>


            <h4 style="margin-top:50px;">Day3 – Dev/Ops</h4>
            <table class="tbl-edu" style="width:100%;">
                <th style="width:12%; padding: 0 !important;">
                    <div class="tbl-title-ai" style="color: #fff;">시간</div>
                </th>
                <th style="width:28%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                </th>
                <th style="width:60%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                </th>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오전<br>9:00~10:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">인터-마이크로서비스의<br>통합 2:Event-driven 방식</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Event-driven 방식의 연동(Pub/Sub + Async + Choreography)<br>
                        • 이벤트의 서브스크립션 - Spring Cloud Streams 와 kafka client 를 통한 이벤트의 수신과 처리<br>
                        • 쓰기관점 - 트랜잭션 이슈: Eventual Transaction 와 Saga, Compensation<br>
                        • 읽기관점 - CQRS 구현방법<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오전<br>10:30~11:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">점진적인 Microservice 전환</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Strangler Pattern을 적용한 단계적 DT(Digital Transformation)  전략<br>
                        • CDC (Change Data Capture)를 활용한 Event Shunting<br>
                        • Kafka Connector 소개<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">11:30~13:00</td>
                    <td colspan="2" style="border-left: 1px solid #aaa; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오후<br>13:00~17:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">운영: 데브-옵스 프로세스와 쿠버네티스</td>
                    <td style="border-left: 1px solid #aaa;">
                        • DevOps 기반의 프로세스 변화와 MSA<br>
                        • 클라우드 애플리케이션 배포 전략 - 무정지(카나리) 배포, A/B 테스팅, Shadow 배포<br>
                        • DevOps 툴체인 - 컨테이너와 컨테이너 오케스트레이터, 그리고 CI/CD<br>
                        • Kubernetes Object Model 과 Declarative Configuration 개념<br>
                        • Kubernetes 기본 명령과 Kubectl 를 통한 객체 다루기<br>
                    </td>
                </tr>
            </table>

            <h4 style="margin-top:50px;">Day4 – Ops Part</h4>
            <table class="tbl-edu" style="width:100%;">
                <th style="width:12%; padding: 0 !important;">
                    <div class="tbl-title-ai" style="color: #fff;">시간</div>
                </th>
                <th style="width:28%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                </th>
                <th style="width:60%; padding: 0;">
                    <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                </th>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오전<br>9:00~11:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">운영: 쿠버네티스 상세</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Kubernetes 를 통한 애플리케이션 디플로이, 인터넷으로의 서비스 노출과정<br>
                        • Pod, Deployment, ReplicaSet, StatefulSet, DaemonSet 등 객체 세부<br>
                        • Self healing, Auto Scaling, Zero-Down time Deployment<br>
                        • Liveness & Readiness 의 설정, 트러블슈팅 방법<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">11:30~13:00</td>
                    <td colspan="2" style="border-left: 1px solid #aaa; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td rowspan="2" style="text-align: center;">오후<br>13:00~17:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">운영: 쿠버네티스 상세</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Persistence Volume 통한 파일시스템 연계<br>
                        • Secrets, ConfigMap 통한 Configuration Externalization<br>
                        • 예제 스프링 애플리케이션의 패키징과 파일시스템 연동, 회복자동화, 자동확장 테스트<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="border-left: 1px solid #aaa; font-weight:700;">운영: CI/CD</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Argo Workflow / Rollouts / CD 를 이용한 CI/CD 자동화<br>
                        • Spring Cloud Contract 를 통한 Consumer-driven / Contract Testing<br>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td style="text-align: center;">오후<br>17:00~17:30</td>
                    <td style="border-left: 1px solid #aaa; font-weight:700;">설문작성 및 테스트</td>
                    <td style="border-left: 1px solid #aaa;">
                        • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                    </td>
                </tr>
            </table>
        </div>
        
        <div style="margin:100px 0 50px 0;">
            <div>
                <h2 style="display:inline-block !important;">강사진 소개</h2>
            </div>
            <h3 style="margin-top:20px;">주강사(장진영 / 박용주)</h3>
            <div class="gs-the-entire-package">
                <div class="gs-instructor-card">
                    <figure class="g-image">
                        <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden; border:1px solid #e6e9f9;">
                            <g-image class="g-image--fallback" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/1004f33c-2a75-4079-8890-21a06ed91b71" alt="" style="margin-top:-30px; width: 100%;"/>
                        </div>
                    </figure> 
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">장진영</h3>
                        <p style="color:gray; font-size:12px;">uEngine CEO & President</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA 교육, 기업 컨설팅<br>
                        • MSAEz, MSA School, CNA PaaS Platform<br>
                        • Open Source Open Cloud Engine<br>
                        • uEngine BPM, SNS(Process CODI), ALM(ESSENCIA)<br>
                        • SAFe 애자일 공인 컨설턴트 (SPC)
                        <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 유엔진솔루션즈 대표이사<br>
                        • 現 MSA 교육, 기업 컨설팅<br>
                        • 現 MSA Facebook 그룹 운영<br>
                        <a href="https://www.facebook.com/groups/cloudswmoding" target="_blank">(https://www.facebook.com/groups/cloudswmoding)</a><br>
                        • 現 디지털플랫폼정부 기술자문위원<br>
                        • 한국소프트웨어기술진흥협회 전문강사<br>
                        • 클라우드(MSA, DDD) 강의 다수<br>
                        • 객체지향 프로그래밍 University 강의<br>
                    </div>
                </div>
            
                <div class="gs-instructor-card">
                    <figure class="g-image">
                        <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                            <g-image class="g-image--fallback" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/4d4148c4-53c6-4b53-bea0-fabd64d968e2" alt="" style="margin-top:-30px; width: 100%;"/>
                        </div>
                    </figure>
                    <div class="gs-instructor-card-name">
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
                        • 現 MSA App. Engineering 기업과정 강사<br>
                        • 現 세종사이버대학교 컴퓨터/AI 공학과 겸임교수<br>
                        • 한국소프트웨어기술진흥협회 전문강사<br>
                        • ‘21 : SK MSA App. Engineering 과정 강사 외<br>
                        • ’21. 06 : KT Microservice 직무전환과정 강사<br>
                        • ’20. 09 : Doosan Microservices 교육 강사<br>
                        • ’19. 09 : KOSTA Microservices 교육 강사<br>
                        • ‘19. 02 : LG CNS 이벤트스토밍 교육 강사<br>
                    </div>
                </div>
            </div>

            <h3 style="margin-top:50px;">보조강사(김상훈)</h3>
            <div class="gs-the-entire-package">
                <div class="gs-instructor-card">
                    <figure class="g-image">
                        <div class="g-image--blur" style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                            <g-image class="g-image--fallback" src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/37bc4a98-c3da-47da-8034-3a4b3fffcea9" alt="" style="margin-top:-20px; width: 100%;"/>
                        </div>
                    </figure>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">김상훈</h3>
                        <p style="color:gray; font-size:12px;">uEngine Cloud Platform Developer & Manager</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA PoC/ 마스터플랜 수립 Project Developer<br>
                        • Eventstorming online platform 개발<br>
                        • Cloud Native App. PaaS platform 개발<br>
                        • Open Cloud Engine Project TA<br>
                        <hr  style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 uEngine MSA 정규 교과정 보조강사<br>
                        • 現 MSA App. Engineering 기업과정 보조강사<br>
                        • ‘21 : SK MSA App. Engineering 과정 보조강사 외<br>
                        • ’21. 06 : KT Microservice 직무전환과정 보조강사<br>
                        • ’20. 09 : Doosan Microservices 교육 보조강사 외<br>
                        • ’19. 09 : KOSTA Microservices 교육 보조강사 외<br>
                        • ‘19. 02 : LG CNS 이벤트스토밍 교육<br>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div id="review2" class="gs-manager">
            <h3 style="margin-top:50px;">교육 후기</h3>
        </div>
        <hr>
        <div v-if="page==1" id="reviewPage1" class="gs-review-full-box">
            <div class="clearfix gs-review-box">
                <p>실습하고 직접 해봐서 더 이해가 잘 됩니다. 반복적으로 복습을 해주시고 퀴즈도 내주셔서 더 기억에 많이 남아 좋습니다.</p>
            </div>
            <div class="clearfix gs-review-box">
                <p>
                    본 강의와 같은 진행 및 교육 방식이라면 온라인 강의여서 더 좋다고 느꼈습니다.(msa-ez 에서 개발하고 직접 내 환경에 강사가 들어와 봐주는 방식, 강사가 일일이 봐주려고 하는 느낌)
                </p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>강의 내용은 물론이고 이슈 발생 시 인원 한 명 한 명 원격으로 붙어서 알려주시는 점이 좋았습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>양질의 교육과정을 통해 이벤트스토밍을 이용한 새로운 서비스를 2시간 만에 설계할 수 있었습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>EDA 기법, 이론과 실습이 모두 이루어져 있어서 굉장히 도움이 많이 됩니다.</p>
            </div>
        </div>
        <div v-else-if="page==2" id="reviewPage2" class="gs-review-full-box">
            <div class="clearfix gs-review-box" >
                <p>이론과 실습을 병행하는 알찬 교육과정과 전문적인 툴을 이용한 설계와 구현까지! 좋은 강의 감사합니다.</p>
            </div>
        </div>
        <div class="text-center">
            <a id="1" @click="paging(1)" class="gs-review-page-number">
                    <span v-if="page==1" class="mdi mdi-numeric-1-box"></span>
                    <span v-else class="mdi mdi-numeric-1-box-outline"></span>
            </a>
            <a id="2" @click="paging(2)" class="gs-review-page-number">
                    <span v-if="page==2" class="mdi mdi-numeric-2-box"></span>
                    <span v-else class="mdi mdi-numeric-2-box-outline"></span>
            </a>
        </div>
        <br> -->
    </div>
</template>

<script>
        // @group 01_01_08
    export default {
        name:'standard-cna',
        data() {
            return {
                page:1
            }
        },
        props: {
            "┣ Standard Learning": {
                type: String
            },
        },
        methods: {
            paging(value) {
                this.page = value
            }
        },
    }
</script>