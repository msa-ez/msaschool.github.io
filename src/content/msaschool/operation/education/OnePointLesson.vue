<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">One Point Lesson 과정</h2>
            <v-btn class="gs-top-apply-btn"
                target='_blank'
                :href="`https://docs.google.com/forms/d/e/1FAIpQLScq7tP3_CkQN6oC5chHo-BOVM7hJneYfGOY1IQV1Lv8Tioxxg/viewform?usp=pp_url&entry.1601718327=One+Point+Lesson+%EA%B3%BC%EC%A0%95(%ED%9A%8C%EC%82%AC%EB%AA%85)`"
            >
                    <span style="color:white !important; font-size:20px;">
                        신청하기
                    </span>
            </v-btn>
        </div>
        <h4 class="gs-course-content">MSA를 적용하려는 기업이나, 컨설팅을 수행하려는 업체가 주도적으로 정한 도메인 주제를 기반으로 인텐시브하게 진행되는 MSA 교육 과정으로 기본 1시간으로 구성됩니다.</h4>
        <div class="gs-manager">교육비 정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
        <table class="gs-table-default">
            <tr>
                <td rowspan="2" style="width:12%; background-color:#e6e9f9; font-weight:900; font-size:20px; text-align:center;">비용</td>
            </tr>
            <tr>
                <td style="padding-left:15px; font-weight:700; font-size:20px; text-align:center;">시간당 100만원</td>
            </tr>    
        </table>    
        <table style="margin-top:50px; border : 1px solid black;">
            <tr>
                <td rowspan="5" style="border : 1px solid black; border-collapse : collapse; margin: auto; text-align: center; width:1%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">Agenda</td>
                <td class="one-point-lesson-td">
                    • 선정한 도메인 기반의 Event storming 예시<br><br>
                    • Cloud Native Application 구현 예시<br><br>
                    • 컨설팅 및 질의응답<br><br>
                    • 유사 사례를 통한 컨설팅<br><br>
                    • 자유 질의응답
                </td>
            </tr>
        </table>
        <!-- 커리큘럼 시작 -->
        <!-- <div>
            <h3 style="margin-top:50px;">커리큘럼 소개</h3>
            <table style="width:100%; border : 1px solid black;">
                <th style="border : 1px solid black; border-collapse : collapse; margin: auto; text-align: center; width:12%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  margin: auto; text-align: center; width:28%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="border : 1px solid black; border-collapse : collapse;  margin: auto; text-align: center; width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td  rowspan="2" style="border : 1px solid black; margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">1 Hour</td>
                    <td style="border : 1px solid black; font-weight:700;">클라우드 네이티브 애플리케이션의 정의와 설계전략</td>
                    <td style="border : 1px solid black;">
                        • 모노리스와 마이크로서비스의 비교
                        • 클라우드 네이티브 애플리케이션의 정의와 설계 패턴
                        • 최신 마이크로서비스 아키텍쳐의 경향 – Event-driven (Reactive) Microservices
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; padding-left:15px; font-weight:700;">마이크로서비스의 분석/설계 – 이벤트스토밍 소개</td>
                    <td style="border : 1px solid black;">
                        • DDD(도메인 주도 설계) 와 MSA Design Patterns을 적용한 마이크로서비스 분석/설계<br>
                        • DDD 구성요소 소개<br>
                        • 서비스 식별과 분해방법들 - Core / Supporting Domain Bounded Context, Aggregate, Business Capability, Mini Service<br>
                        • 이벤트스토밍 소개<br>
                        • DDD 와 이벤트 스토밍의 결과를 헥사고날 아키텍처로 매핑하는 방법<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">1.5 Hour</td>
                    <td style="border : 1px solid black; font-weight:700;">도메인 주제 공유 및 DDD 설계 이벤트스토밍</td>
                    <td style="border : 1px solid black;">
                        • 적용하려는 도메인 주제를 공유하고 이벤트스토밍<br>
                        • Big Picture/ Pivotal Event 도출<br>
                        • Process Level 이벤트스토밍<br>
                        • Design Level 이벤트스토밍 심화<br>
                        • 이벤트스토밍 모델 검증/ Narration<br>
                    </td>
                </tr>
                <tr>
                    <td  rowspan="2" style="border : 1px solid black; margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">1.5 Hour</td>
                    <td style="border : 1px solid black; font-weight:700;">마이크로서비스 구현</td>
                    <td style="border : 1px solid black;">
                        • Spring Boot를 이용한 단위 서비스 포장<br>
                        • JPA 를 이용한 도메인 모델과 어댑터 구현 (Entity, Value Objects)<br>
                        • Spring Data REST + JPA 를 통한  RESTful API 노출 (HATEOAS)<br>
                        • Clean Architecture를 적용한 도메인과 인프라 분리<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; padding-left:15px; font-weight:700;">
                        인터-마이크로서비스의<br>
                        통합 1:Request-Response 방식<br>
                        통합 2:Event-driven 방식<br>
                    </td>
                    <td style="border : 1px solid black;">
                        • Request-Response 방식의 연동 (REST + Sync + Orchestration)<br>
                        • 서킷브레이커를 통한 장애회피<br>
                        • 쓰기관점 - 트랜잭션 이슈: 2PC or Shared-Database and schema per service<br>
                        • 읽기관점 - Composite-Service 구현방법: 동시 REST 호출 사용<br>
                        • Event-driven 방식의 연동(Pub/Sub + Async + Choreography)<br>
                        • 이벤트 서브스크립션 - Spring Cloud Streams 와 kafka client 를 통한 이벤트 처리<br>
                        • 쓰기관점 - 트랜잭션 이슈: Eventual Transaction 와 Saga, Compensation<br>
                        • 읽기관점 - CQRS 구현방법<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">1 Hour</td>
                    <td style="border : 1px solid black; font-weight:700;">컨설팅 & 질의응답</td>
                    <td style="border : 1px solid black;">
                        • Wrap up 및 Case Study를 통한 구현 컨설팅
                        • 표준 아키텍처 및 데이터 아키텍처링
                        • CSP Managed Service & CNCF OSS를 통한 대안 아키텍처 구성방안
                        • 인증 및 CI/CD 구성
                        • 질의 응답 및 가이드 제공
                    </td>
                </tr>
            </table>
        </div> -->
        <!-- 커리큘럼 끝 -->

        <div style="margin:100px 0 50px 0;">
            <div>
                <h2 style="display:inline-block !important;">강사진 소개</h2>
                <v-btn style="background-color:#5a67d8 !important;
                    color:white !important;
                    width:90px !important;
                    height:30px !important;
                    text-align-center !important;
                    line-height:30px !important;
                    font-size:20px;
                    margin:-7px 0 0 10px;"
                    target='_blank'
                    :href="`https://docs.google.com/forms/d/e/1FAIpQLScq7tP3_CkQN6oC5chHo-BOVM7hJneYfGOY1IQV1Lv8Tioxxg/viewform?usp=pp_url&entry.1601718327=One+Point+Lesson+%EA%B3%BC%EC%A0%95(%ED%9A%8C%EC%82%AC%EB%AA%85)`"
                    >
                        <span style="color:white !important; font-size:16px;">
                            신청하기
                        </span>
                </v-btn>
            </div>

            
            <div class="gs-the-entire-package"><!-- 대표님, 이사님 시작-->
                <div class="gs-instructor-card"><!-- 대표님 -->
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-30px;" src="~/img/05_Community/02_MSA_교육과정/img3.png"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">장진영</h3>
                        <p style="color:gray; font-size:12px;">uEngineSolutions CEO & President</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA 교육, 기업 컨설팅<br>
                        • MSAEz, MSA School, CNA PaaS Platform<br>
                        • Open Source Open Cloud Engine<br>
                        • uEngine BPM, SNS(Process CODI), ALM(ESSENCIA)<br>
                        <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 유엔진솔루션즈 대표이사<br>
                        • 現 MSA 교육, 기업 컨설팅<br>
                        • 現 MSA Facebook 운영<br>(https://www.facebook.com/groups/cloudswmoding)<br>
                        • 클라우드(MSA, DDD) 강의 다수<br>
                        • 객체지향 프로그래밍 University 강의<br>
                        • 한국소프트웨어기술진흥협회 전문강사<br>
                    </div>
                </div><!-- 대표님 끝 -->
            
                <div class="gs-instructor-card"><!-- 박용주 시작 -->
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-15px;" src="~/img/05_Community/02_MSA_교육과정/img4.png"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">박용주</h3>
                        <p style="color:gray; font-size:12px;">uEngineSolutions Director & MSA Consultant</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA DT 마스터플랜 수립 Project<br>
                        • MSA PoC/ Pilot 수행<br>
                        • 다수 MSA 제안 작업 및 컨설팅 <br>
                        • 마이크로서비스 교육과정 교안/교재 집필  <br>
                        <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 uEngine MSA 정규 교과정 전문강사<br>
                        • 現 MSA App. Engineering 기업과정 강사<br>
                        • ‘21 : SK MSA App. Engineering 과정 강사 외<br>
                        • ’21. 06 : KT Microservice 직무전환과정 강사<br>
                        • ’20. 09 : Doosan Microservices 교육 강사<br>
                        • ’19. 09 : KOSTA Microservices 교육 강사<br>
                        • ‘19. 02 : LG CNS 이벤트스토밍 교육 강사<br>
                    </div>
                </div><!-- 박용주 끝 -->
            </div><!-- 장진영, 박용주 끝 -->
        </div>
    </div>
</template>

<script>
        // @group 05_02_06
    export default {
        name:'OnePointLesson',
        data() {
            return {}
        },
        props: {
            "4. One Point Lesson 과정": {
                type: String
            },
        },

    }
</script>

<style>
    .one-point-lesson-td {
        border : 1px solid black !important;
        width:20% !important;
    }
    .one-point-lesson-td:nth-child(1) {
        padding-left:15px;
    }
</style>