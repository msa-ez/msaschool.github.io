<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">Enterprise Full-day 과정</h2><br>
            <v-btn class="gs-review-btn"
                target='_blank'
                text
            >
                <!-- <a href="/operation/introduction/enterprise-full-day14-days-course/#review5" style="color:black !important; font-weight:700; font-size:14px;">
                    ▼ 후기보기
                </a> -->
            </v-btn>
        </div>
        <h6 class="gs-course-content">마이크로서비스의 전 과정을 심도있게 학습할 수 있는 분석/설계, 구현, 배포, 운영 및 캡스톤 프로젝트를 포함하는 인텐시브 과정으로 이미 많은 대기업 교육수행에서 검증된 커리큘럼을 기반으로 주강사와 보조강사가 함께 진행하는 Course입니다.</h6>
        <div class="gs-manager">교육비 정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
        <table class="gs-table-default">
            <tr>
                <td rowspan="2" style="width:12%; background-color:#e6e9f9; font-weight:900; font-size:20px; text-align:center;">비용</td>
            </tr>
            <tr>
                <td style="padding-left:15px; font-weight:700; font-size:20px; text-align:center;">1인당 최소 247.5만원(30명) ~ 최대 420만원(10명)(14일)</td>
            </tr>    
        </table>
        <v-btn class="gs-bottom-apply-btn"
            target='_blank'
            :href="`https://docs.google.com/forms/d/e/1FAIpQLSdvP9ec6MLiPTZMVseaJiFTcO6Fkj-ts9BtfazA_nAhyIEcHw/viewform`"
        >
            <span style="color:white !important; font-weight:700; font-size:20px;">
                교육 신청하기
            </span>
        </v-btn>
        <br><br>
        <div>* Volume Discount 정책 : 10명 이상 신청 시 11명 째부터 20명까지 10%, 20명 이상 시 21명 째부터 25명까지 20%, 26명 째부터 30명까지 30% 비용 할인이 적용됩니다.</div><br>
        <div>** 캡스톤 프로젝트를 제외시킨 옵션(4일 제외)으로 신청 시 추가로 할인된 비용으로 교육을 접해보실 수 있습니다.</div>
        <div>
            <h3 style="margin-top:50px;">커리큘럼 소개</h3>
            <div name="Microservice Modeling">
                <h4 style="margin:0 0 0 0;">Microservice Modeling</h4>
                <h5 style="font-weight:700; margin: 5px 0;">교육목표 : MSA 아키텍처의 분석,설계,구현하기 앞서  이벤트 스토밍(Event Storming) 기법을 기반한 실질적 설계, 구현, 운영 기법 학습</h5>
                
                <table class="tbl-edu" style="width:100%;">
                    <th style="width:8%; padding: 0 !important;">
                        <div class="tbl-title-ai" style="color: #fff;">기간</div>
                    </th>
                    <th style="width:20%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                    </th>
                    <th style="width:8%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">시간</div>
                    </th>
                    <th style="width:64%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                    </th>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="text-align: center;">1일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">마이크로서비스 아키텍처</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 마이크로서비스아키텍처(MSA)의 출현 배경 (애자일기업과 MSA)<br>
                            • MSA 개념과 특성 마이크로서비스 아키텍처 문제 및 해결책<br>
                            • MSA의 진화: MSA 새시, 서비스 매시, 그리고 이벤트 드리븐 아키텍처<br>
                            • 최근의  MSA 구현 전략: 외부 (아우터) 아키텍처와 내부 (이너) 아키텍처<br>
                            • MSA 의 구축 라이프사이클: BizDevOps<br>
                            • MSA 실 적용 사례 살펴보기<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="2" style="text-align: center;">2일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">마이크로서비스 설계</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 전략적 설계의 정의<br>
                            • 서브도메인과 바운디드 컨텍스트를 통한 서비스 분해 전략<br>
                            • 컨텍스트 매핑 유형과 연동 프로토콜별 특성 (RPC, REST, Pub/Sub)<br>
                            • 이벤트스토밍 기법을 활용한 바운디드 컨텍스트와 마이크로서비스 식별<br>
                            • 이벤트 드리븐 마이크로서비스 아키텍처의 도출<br>
                            • 전술적 설계의 정의 및 도메인 모델링 이해<br>
                            • 도메인 모델링 (Entity, Value Objects)<br>
                            • 헥사고날 (어니언) 아키텍처를 통한 서비스 구현 전략<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">설문작성 및 테스트</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">30 min</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                        </td>
                    </tr>
                </table>
            </div>

            <div name="Developing Cloud Native Application">
                <h4 style="margin:50px 0 0 0;">Developing Cloud Native Application</h4>
                <h5 style="font-weight:700; margin: 5px 0;">교육목표 : Cloud 플랫폼과 Core 서비스를 이해하고 시스템을 구성하고 클라우드 애플리케이션을 개발 · 운영</h5>
                
                <table class="tbl-edu" style="width:100%;">
                    <th style="width:8%; padding: 0 !important;">
                        <div class="tbl-title-ai" style="color: #fff;">기간</div>
                    </th>
                    <th style="width:20%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                    </th>
                    <th style="width:8%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">시간</div>
                    </th>
                    <th style="width:64%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                    </th>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="3" style="text-align: center;">3일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">개발 실습 개요</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">1H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 개발 대상:  온라인 커머스 서비스<br>
                            • 개발 서비스 품질 목표:  Resiliency, Scalability, Responsiveness<br>
                            • 조직의 전환:  Horizontal to Vertical, Matrix Organization<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">마이크로서비스의 분석과 설계</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">2H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • DDD와 MSA Design Patterns을 적용한 마이크로서비스 구현 전략, Cloud Native Application 의 특성과 구현원칙들<br>
                            • 서비스 식별과 분해방법들 – Core Domain 과 Supporting Domain, Bounded Context, Aggregate, Business Capability, Mini Service<br>
                            • 분해된 서비스의 연동 방법 – Context Mapping, Request/Response or Event-driven MSA<br>
                            • Outer Architecture 구성요소 – API GW, 분산큐(Kafka), 서비스 레지스트리, 로드밸런서, 서킷브레이커, 사이드카 패턴 등<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">단위 마이크로서비스의 구현</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">4H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • DDD 와 이벤트 스토밍의 결과를 헥사고날 아키텍처로 매핑하는 방법<br>
                            • Spring Boot와 Maven 을 이용한 단위 서비스 포장<br>
                            • JPA 를 이용한 도메인 모델과 어댑터 구현 (Entity, Value Objects)<br>
                            • Spring Data REST + JPA 를 통한 RESTful API 노출 (HATEOAS)<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="text-align: center;">4일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">프론트엔드를 통한 마이크로 서비스 통합</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">4H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • UI 를 기반한 서비스 통합 전략:  Client-side Rendering, SPA, MVVM, HATEOAS<br>
                            • MVVM Front-end 프레임워크:  VueJS, React, Angular2<br>
                            • API Gateway 를 통한 진입점 단일화, 전급 관리 및 인증 통합<br>
                            • OAuth2 와 JWT 통한 Stateless 한 토큰 기반 접근과  인증<br>
                            • Front-end 기반 통합의 한계: 트랜잭션 이슈와 성능 문제<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="4" style="text-align: center;">5일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">인터-마이크로서비스의<br> 통합 1: Request-Response 방식</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">2H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • Request-Response 방식의 연동 (REST + Sync + Orchestration)<br>
                            • 트랜잭션 이슈: 2PC or Shared-Database and schema per service<br>
                            • 추적 이슈: 분산 추척을 통한 오류 점검 방법, Istio 예거와 kiali 사용 방법<br>
                            • 성능 이슈: 장애전파 상황 그리고 Istio 의 Circuit Breaker, Rate Limiting를 통한 회피<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">인터-마이크로서비스의 <br>통합 2: Kafka 활용</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">2H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • Event-driven 방식의 연동 (Pub/Sub + Async + Choreography)<br>
                            • EDA 에서의 분산 큐의 역할과 Kafka 의 장점<br>
                            • Kafka 의 설치와 클라이언트 도구를 통한 Pub/Sub 실습<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">인터-마이크로서비스의<br> 통합 2: Event-driven 방식</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">3H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 이벤트의 퍼블리싱 – 어그리게이트 내의 엔티티에 JPA 어노테이션 주입 방법, Spring Cloud Streams 를 통한 이벤트 퍼블리시<br>
                            • 이벤트의 서브스크립션 - Spring Cloud Streams 와 Kafka client 를 통한 이벤트의 수신과 처리, Acknowledge<br>
                            • 트랜잭션 이슈: Eventual Transaction 와 Saga, Compensation<br>
                            • 실습 통한 성능의 장점 이해 :  Time-decoupling 과  Non-blocking 속성<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">데이터 프로젝션</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">3H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • Join SQL 를 회피하고, 데이터를 취합하여 보여주는 전략 3가지:  by UI, by Composite-service, by CQRS<br>
                            • Composite-Service 구현방법:  동시 REST 호출 or API GW (GraphQL) 사용<br>
                            • CQRS / GraphQL 구현 방법<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="2" style="text-align: center;">6일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">MSA 패턴을 적용한 샘플 마이크로서비스 구현</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • MSA 패턴을 적용한 샘플 마이크로서비스 종합 구현 및 테스트<br>
                            • 마이로서비스 토큰 인증 (Key Cloark, Spring Security)<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">설문작성 및 테스트</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">30 min</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                        </td>
                    </tr>
                </table>
            </div>

            <div name="DevOps: Container Orchestration-Docker & Kubernetes">
                <h4 style="margin:50px 0 0 0;">Container Orchestration-Docker & Kubernetes</h4>
                <h5 style="font-weight:700; margin: 5px 0;">교육목표 : Kubernetes와 Docker 의 설치, 애플리케이션 배포, 무정지 재배포, 운영자동화의 실습 및 학습</h5>
                
                <table class="tbl-edu" style="width:100%;">
                    <th style="width:8%; padding: 0 !important;">
                        <div class="tbl-title-ai" style="color: #fff;">기간</div>
                    </th>
                    <th style="width:20%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                    </th>
                    <th style="width:8%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">시간</div>
                    </th>
                    <th style="width:64%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                    </th>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="2" style="text-align: center;">7일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">MSA와 DevOps 그리고 Kubernetes</td>
                        <td rowspan="2" style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 마이크로서비스와 DevOps의 적용사례 – 아마존과 넷플릭스<br>
                            • 컨테이너와 컨테이너 오케스트레이터의 등장<br>
                            • 컨테이너 기반 애플리케이션 디자인 패턴<br>
                            • 구글의 Kubernetes를 기반한 MSA와 DevOps 환경의 적용 시나리오<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">Kubernetes 의 구조, 활용 시나리오의 전반적 이해</td>
                        <td style="border-left: 1px solid #aaa;">
                            • Kubernetes 등장 배경 (Borg), Features, Architecture<br>
                            • Kubernetes Runtime Mechanism<br>
                            • Kubernetes Object Model 과 Declarative Configuration 개념<br>
                            • Kubernetes 의 설치:  Configuration, Infrastructure, Localhost vs On-premise vs Cloud Installation, Tools/Resources<br>
                            • Public Kubernetes 서비스 (GCP / AWS / Azure) 계정 생성과 접속<br>
                            • 샘플 MSA 애플리케이션의 디플로이 전과정 미리보기<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="text-align: center;">8일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">Kubernetes 서비스 설치와 운영</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • Kubernetes 기본 명령과 Kubectl 를 통한 객체 다루기<br>
                            • Kubernetes 를 통한 애플리케이션 디플로이, 인터넷으로의 서비스 노출과정<br>
                            • CSP VM 서비스에서의 Node 확인과 pod 디플로이 전략 확인<br>
                            • Pod, Deployment, ReplicaSet, StatefulSet, DaemonSet 등 객체 세부<br>
                            • Self healing, Auto Scaling, Zero-Down time Deployment<br>
                            • Liveness & Readiness 의 설정, 트러블슈팅 방법<br>
                            • Volume, PersistenceVolume, PersistenceVolumeClaim<br>
                            • Yaml, Helm 를 이용한 멀티 티어 애플리케이션 프로비져닝<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="text-align: center;">9일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">쿠버네티스를 이용한 Micro Services and DevOps</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • MSA Application 서비스 시나리오: 샘플 애플리케이션<br>
                            • 애플리케이션 패키징을 위한 컨테이너 (도커)의 이해<br>
                            • 마이크로 서비스 섀시 (Chassis) :  스프링 클라우드와 넷플릭스 OSS, 그리고 도커를 통한 서비스 패키징<br>
                            • Container Registry 를 이용한 도커 레지스트리에 서비스 퍼블리싱<br>
                            • 애플리케이션 디플로이먼트 디스크립터의 설정, Liveness & Readiness 설정<br>
                            • 서비스 매시 Isio의 개념과 쿠버네티스와 관계 이해<br>
                            • Istio 를 통한 Resilience 향상: 서킷 브레이킹, 레이트 리미팅, 리트라이, 풀이젝션<br>
                            • Istio 를 통한 Smart Deploy: 동적 트래픽 라우팅, AB Testing, 카나리 디플로이, 새도우 디플로이<br>
                            • Istio 를 통한 모니터링:  프로메테우스를 통한 모니터링 수집, 예거, 키알리를 통한 분산 서비스 추적 프로파일링<br>
                        </td>
                    </tr>


                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="3" style="text-align: center;">10일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">CI/CD 프로세스와 CSP 의 대응 서비스</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">3H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • CI (Continuous Integration) / CD (Continuous Delivery) 개요<br>
                            • CI/CD Pipeline 구성요소 – Source Repository, Builder, Pipeline, Image Registry, Container Orchestrator<br>
                            • CSP 의 대응 서비스 – Repos Git, CSP Pipeline and CSP Container Registry, 그리고 CSP Kubernetes Service<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">CI/CD Pipeline with CSP Pipelines</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">4H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • Maven 개념과 라이브러리 디펜던시 (pom.xml) 의 구조 이해<br>
                            • CSP Pipelines Yaml 파일 구조<br>
                            • 소스코드의 변경을 통한 Git 트리거를 통한 파이프라인 실행<br>
                            • CSP Pipelines 대시보드<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">설문작성 및 테스트</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">30 min</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                        </td>
                    </tr>
                </table>
            </div>

            <div name="Capstone Project: Developing on Cloud">
                <h4 style="margin:50px 0 0 0;">Capstone Project: Developing on Cloud</h4>
                <h5 style="font-weight:700; margin: 5px 0;">교육목표 : 클라우드 플랫폼에서 마이크로서비스 아키텍처 기반으로 클라우드 네이티브 애플리케이션을  개발 하는 프로젝트 수행 방식의 교육</h5>
                
                <table class="tbl-edu" style="width:100%;">
                    <th style="width:8%; padding: 0 !important;">
                        <div class="tbl-title-ai" style="color: #fff;">기간</div>
                    </th>
                    <th style="width:20%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주제</div>
                    </th>
                    <th style="width:8%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">시간</div>
                    </th>
                    <th style="width:64%; padding: 0;">
                        <div class="tbl-title-ai" style="color: #fff; margin-left: 1px;">주요 학습내용</div>
                    </th>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="2" style="text-align: center;">11일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">평가 방법 설명 및 환경 설정</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">3H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 통합 평가 기준과 체크 포인트 설명<br>
                            • 캡스톤 프로젝트 선정 기준 설명<br>
                            • 프로젝트 결과 발표 방법 설명<br>
                            • 팀선정, 팀장선출<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">팀프로젝트 모델링</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">4H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 팀별 이벤트 스토밍 통한 도메인 모델링<br>
                            • 강사:  이벤트 스토밍 퍼실러테이션<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="text-align: center;">12일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">팀프로젝트 개발</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">7H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 개발 진행
                            • 강사: 질의응답, 문제해결, 가이드
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="2" style="text-align: center;">13일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">팀프로젝트 배포</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">4H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 쿠버네티스와 CI/CD 를 이용하여 배포<br>
                            • 강사: 질의응답, 문제해결, 가이드<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">팀프로젝트 평가</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">3H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 조별 발표: 개발 내역 체크포인트에 따라<br>
                            • 강사: 평가<br>
                        </td>
                    </tr>

                    <tr style="border-bottom: 1px solid #aaa;">
                        <td rowspan="3" style="text-align: center;">14일차</td>
                        <td style="border-left: 1px solid #aaa; font-weight:700;">개인개발</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">3H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 조별 개발 내용에서 추가 마이크로서비스 주제 선정<br>
                            • 추가 마이크로 서비스에 대한 분석설계 (이벤트스토밍), 개발, 운영의 시나리오로 개발<br>
                            • 팀별 평가의 동일한 체크포인트<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;">개인평가</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">4H</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 개인 발표<br>
                            • 강사:  평가 후 총괄 개인별 점수 산정 →  보고<br>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #aaa;">
                        <td style="border-left: 1px solid #aaa; font-weight:700;;">설문작성 및 테스트</td>
                        <td style="border-left: 1px solid #aaa; text-align: center;">30 min</td>
                        <td style="border-left: 1px solid #aaa;">
                            • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                        </td>
                    </tr>
                </table>
            </div>
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
                        • 마이크로서비스 교육과정 교안/교재 집필<br>
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
                    <!-- <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-10px;" src="~/img/05_Community/02_MSA_교육과정/img5.png"></g-image>
                    </div> -->
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

        <!-- <div id="review5" class="gs-manager">
            <h3 style="margin-top:50px;">교육 후기</h3>
        </div>
        <hr>
        <div v-if="page==1" id="reviewPage1" class="gs-review-full-box">
            <div class="clearfix gs-review-box">
                <p>MSAEZ 라는 좋은 툴로 실습을 진행한 점이 좋았습니다.</p>
            </div>
            <div class="clearfix gs-review-box">
                <p>스티커로 구조 모델링하는 툴이 정말 인상 깊었고(이름을 까먹었습니다..), 강의 환경도 온라인을 감안하면 매우 좋았습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>모델링과 개발을 동시에 진행하는 체계적인 교육 과정과 강사진의 전달력이 어우러져 좋은 강의를 들을 수 있었던 것 같습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>실습을 진행함에 따라 즉각적으로 피드백을 받을 수 있어 보다 효율적인 교육이 되었습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>이벤트스토밍 기법을 활용한 MSA 기반 설계 과정을 배울 수 있는 유익한 시간이었습니다.</p>
            </div>
        </div>
        <div v-else-if="page==2" id="reviewPage2" class="gs-review-full-box">
            <div class="clearfix gs-review-box" >
                <p>msa 전반적인 교육수강에 대해서 커리큘럼이 잘갖춰져있고 탄탄한 강사님들로 인한 교육내용은 best였다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>인프라 앞 단의 레벨에서의 아키텍트 구성/운영 과정을 알 수 있어서 좋았다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>MSA라는 기술스택에 대한 정보를 집약적으로 교육받을 수 있는 환경이 많이 없다고 생각했는데 그런 점을 충족시켜주셔서 매우 유용하다고 생각했습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>평소에 관심이 있었던 AWS, 클라우드네이티브, 쿠버네티스 등에 대한 내용을 포괄적으로 배울 수 있어 좋았습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>MSA 개념 및 DDD기반 모델링을 실습과 같이 진행해서 좀 더 이해가 쉬웠습니다.</p>
            </div>
        </div>
        <div v-else-if="page==3" id="reviewPage3" class="gs-review-full-box">
            <div class="clearfix gs-review-box" >
                <p>주업무가 인프라 담당으로 MSA의 DEV 단계까지 경험해 볼 수 있는 점이 좋았습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
            </div>
            <div class="clearfix gs-review-box" >
                <p>설계를 메모지를 통해 실습해보고 코드도 확인해볼 수 있었던 점이 좋았다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>강사님이 논리적 흐름이 이해되게끔 진행해주셨고, 실습 환경이 잘 되어 있음.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <p>MSA 모델링과 연계된 테크니컬 요소(kafka 등)에 대한 전반적인 이해가 가능하다.</p>
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
            <a id="3" @click="paging(3)" class="gs-review-page-number">
                    <span v-if="page==3" class="mdi mdi-numeric-3-box"></span>
                    <span v-else class="mdi mdi-numeric-3-box-outline"></span>
            </a>
        </div> -->
    </div>
</template>


<script>
        // @group 01_01_09
    export default {
        name:'enterprise-full-day14-days-course',
        data() {
            return {
                page:1
            }
        },
        props: {
            "┗ Enterprise Full-day": {
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