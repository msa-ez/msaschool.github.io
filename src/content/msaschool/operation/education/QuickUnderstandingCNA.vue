<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">Quick Understanding CNA 과정</h2>
            <v-btn class="gs-top-apply-btn"
                target='_blank'
                :href="`https://docs.google.com/forms/d/e/1FAIpQLSeP2H2XbO_hkgfKRPme5PW9M8DCNBP9noZjjYmXOykd8zyBiA/viewform?usp=pp_url&entry.1858868603=Quick+Understanding+CNA+%EA%B3%BC%EC%A0%95`"
            >
                <span style="color:white !important; font-size:20px;">
                    신청하기
                </span>
            </v-btn>
        </div>
        <h4 class="gs-course-content">마이크로서비스를 처음 접하거나 향후 도입 또는 컨설팅 예정인 기업(개인)을 대상으로 MSA, 클라우드 네이티브 앱에 대한 기본 개념과 분석, 설계, 구현 과정을 짧은 시간에 알아볼 수 있는 Half-day 과정입니다. 강사가 강의 및 실습을 One way로 수강생들에게 전달하는 방식입니다.</h4>
        <div class="gs-manager"></div>
        <table class="gs-table-default">
            <tr>
                <td rowspan="2" style="width:12%; background-color:#e6e9f9; font-weight:900; font-size:20px; text-align:center;">비용</td>
            </tr>
            <tr>
                <td style="padding-left:15px; font-weight:700; font-size:20px; text-align:center;">무료</td>
            </tr>    
        </table>    
        
        <div>
            <h3 style="margin-top:50px;">커리큘럼 소개</h3>
            <table class="gs-table-default">
                <th style="width:12%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="width:28%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td rowspan="2" style="padding-left:15px; background-color:#f2f3fc; text-align:center;">오후<br>13:00~14:00</td>
                    <td style="font-weight:700;">클라우드 네이티브 애플리케이션의 정의와 설계전략</td>
                    <td>
                        • 애자일 기업에 필요한 것들 - Microservice, DevOps, Container<br>
                        • 모노리스와 마이크로서비스의 비교<br>
                        • 클라우드 네이티브 애플리케이션의 정의와 설계 패턴<br>
                        • 최신 마이크로서비스 아키텍쳐의 경향 - Event-driven (Reactive) Microservices<br>
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; font-weight:700;">마이크로서비스의 분석/설계 - 이벤트스토밍 소개</td>
                    <td>
                        • DDD(도메인 주도 설계) 와 MSA Design Patterns을 적용한 마이크로서비스 분석/설계<br>
                        • DDD 구성요소 소개<br>
                        • 서비스 식별과 분해방법들 - Core / Supporting Domain Bounded Context, Aggregate, Business Capability, Mini Service<br>
                        • 이벤트스토밍 소개<br>
                        • DDD 와 이벤트 스토밍의 결과를 헥사고날 아키텍처로 매핑하는 방법<br>

                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">오후<br>14:00~15:00</td>
                    <td style="font-weight:700;">구현: 단위 마이크로 서비스의 구현과 분리 소개</td>
                    <td>
                        • Spring Boot와 Maven 을 이용한 단위 서비스 포장<br>
                        • JPA 를 이용한 도메인 모델과 어댑터 구현 (Entity, Value Objects)<br>
                        • Spring Data REST + JPA 를 통한 RESTful API 노출 (HATEOAS)<br>
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">오후<br>15:00~16:00</td>
                    <td style="font-weight:700;">
                        인터-마이크로서비스의<br>
                        통합 1:Request-Response 방식<br>
                        통합 2:Event-driven 방식<br>
                    </td>
                    <td>
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
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">오후<br>16:00~17:00</td>
                    <td style="font-weight:700;">도커라이징, 배포 및 컨테이너 오케스트레이션</td>
                    <td>
                        • Dockerfile을 활용한 마이크로서비스 패키징 및 도커 이미지 생성<br>
                        • 쿠베네티스 배포 및 컨테이너 오케스트레이션 소개<br>
                    </td>
                </tr>
            </table>
        </div>
        
        <div style="margin:100px 0 50px 0;">
            <div>
                <h2 style="display:inline-block !important;">강사진 소개</h2>
                <v-btn class="gs-bottom-apply-btn"
                    target='_blank'
                    :href="`https://docs.google.com/forms/d/e/1FAIpQLSeP2H2XbO_hkgfKRPme5PW9M8DCNBP9noZjjYmXOykd8zyBiA/viewform?usp=pp_url&entry.1858868603=Quick+Understanding+CNA+%EA%B3%BC%EC%A0%95`"
                >
                        <span style="color:white !important; font-size:16px;">
                            신청하기
                        </span>
                </v-btn>
            </div>
            <div class="gs-the-entire-package">
                <div class="gs-instructor-card">
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-30px;" src="~/img/05_Community/02_MSA_교육과정/img3.png"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">장진영 대표</h3>
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
                </div>

                <div class="gs-instructor-card">
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-15px;" src="~/img/05_Community/02_MSA_교육과정/img4.png"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">박용주 이사</h3>
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
                </div>
            </div>
        </div>
    </div>
</template>


<script>
        // @group 05_02_03
    export default {
        name:'QuickUnderstandingCNA',
        data() {
            return {}
        },
        props: {
            "1. Quick Understanding CNA 과정": {
                type: String
            },
        },

    }
</script>

<style scoped>

</style>