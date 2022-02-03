<template>
    <div>
<mark-down class="content">
## MSA 교육과정
</mark-down>
        <mark-down style="margin-top: -70px;" class="content" source='
<h5>
    <table>
        <thead>
        <tr class="header">
            <th align="center" width="10%"><strong>구분</strong></th>
            <th align="center" width="25%"><strong>과목명</strong></th>
            <th align="center" width="10%"><strong>기간</strong></th>
            <th align="center" width="55%"><strong>주요 학습 내용</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center"><strong>분석/설계</strong></td>
            <td align="center">Microservice Modeling</td>
            <td align="center" style="color:blue">2일(14H)</td>
            <td><ul>
                <li><p>마이크로서비스 개념 특성</p></li>
                <li><p>마이크로서비스 외,내부 아키텍처</p></li>
                <li><p>마이크로서비스 설계</p></li>
                <li><p>DDD 와 이벤트스토밍</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>구현</strong></td>
            <td align="center">Developing Cloud Native Application</td>
            <td align="center" style="color:blue">3일(21H)</td>
            <td><ul>
                <li><p>DDD 분석 결과와 MSA Design Pattern을 적용한 구현전략</p></li>
                <li><p>Spring Boot 를 이용한 CNA 애플리케이션 개발</p></li>
                <li><p>이벤트 스토밍 설계 결과를 개발하여 클라우드에 자동으로 올리는 실습</p></li>
                <li><p>Spring Cloud 와 Istio, Kafka 를 적용한 아우터아키텍처 적용</p></li>
                <li><p>마이크로서비스의 패키징과 디플로이</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>배포</strong></td>
            <td align="center">CI/CD Pipeline with Cloud Pipelines</td>
            <td align="center" style="color:blue">1일(7H)</td>
            <td><ul>
                <li><p>CI (Continuous Integration) / CD (Continuous Delivery) 개요</p></li>
                <li><p>Maven 을 통한 CI</p></li>
                <li><p>Pipelines와 Kubernetes 연동 통한 전체 Pipeline 구축 방법</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>운영</strong></td>
           <td align="center">Container Orchestration (Docker & Kubernetes)</td>
            <td align="center" style="color:blue">3일(21H)</td>
            <td><ul>
                <li><p>MSA와 DevOps 그리고 Kubernetes</p></li>
                <li><p>Kubernetes 구조 이해 / 서비스 구현</p></li>
                <li><p>Kubernetes 기반 DevOps 환경 및 MSA 애플리케이션 구축하기</p></li>
            </ul></td>
        </tr>
        </tbody>
    </table>
</h5>
'></mark-down>
<mark-down class="content">
### 분석/ 설계 - Modeling
</mark-down>
        <mark-down style="margin-top: -70px;" class="content" source='
<h5>
    <table>
        <thead>
        <tr class="header">
            <th align="center" width="12%"></th>
            <th align="center" width="10%"><strong>기간</strong></th>
            <th align="center" width="18%"><strong>주제</strong></th>
            <th align="center" width="5%"><strong>시간</strong></th>
            <th align="center" width="55%"><strong>주요 학습 내용</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center" rowspan="2"><strong>교육내용</strong></td>
            <td align="center"><strong>1일</strong></td>
            <td align="center">마이크로서비스 아키텍처</td>
            <td align="center" style="color:blue">7H</td>
            <td><ul>
                <li><p>마이크로서비스아키텍처(MSA)의 출현 배경 (애자일기업과 MSA)</p></li>
                <li><p>MSA 개념과 특성 마이크로서비스 아키텍처 문제 및 해결책</p></li>
                <li><p>MSA의 진화: MSA 새시, 서비스 매시, 그리고 이벤트 드리븐 아키텍처</p></li>
                <li><p>최근의  MSA 구현 전략: 외부 (아우터) 아키텍처와 내부 (이너) 아키텍처</p></li>
                <li><p>MSA 의 구축 라이프사이클: BizDevOps</p></li>
                <li><p>MSA 실 적용 사례 살펴보기 </p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>2일</strong></td>
            <td align="center">마이크로서비스 설계</td>
            <td align="center" style="color:blue">7H</td>
            <td><ul>
                <li><p>전략적 설계의 정의</p></li>
                <li><p>서브도메인과 바운디드 컨텍스트를 통한 서비스 분해 전략</p></li>
                <li><p>컨텍스트 매핑 유형과 연동 프로토콜별 특성 (RPC, REST, Pub/Sub)</p></li>
                <li><p>이벤트스토밍 기법을 활용한 바운디드 컨텍스트와 마이크로서비스 식별</p></li>
                <li><p>이벤트 드리븐 마이크로서비스 아키텍처의 도출</p></li>
                <li><p>전술적 설계의 정의 및 도메인 모델링 이해</p></li>
                <li><p>도메인 모델링 (Entity, Value Objects)</p></li>
                <li><p>헥사고날 (어니언) 아키텍처를 통한 서비스 구현 전략</p></li>
            </ul></td>
        </tr>
        </tbody>
    </table>
</h5>
'></mark-down>
<mark-down class="content">
### 구현 (Implementation)
</mark-down>
        <mark-down style="margin-top: -70px;" class="content" source='
<h5>
    <table>
        <thead>
        <tr class="header">
            <th align="center" width="12%"></th>
            <th align="center" width="10%"><strong>기간</strong></th>
            <th align="center" width="18%"><strong>주제</strong></th>
            <th align="center" width="5%"><strong>시간</strong></th>
            <th align="center" width="55%"><strong>주요 학습 내용</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center" rowspan="7"><strong>교육내용</strong></td>
            <td align="center" rowspan="3"><strong>1일</strong></td>
            <td align="center">개발 실습 개요</td>
            <td align="center" style="color:blue">1H</td>
            <td><ul>
                <li><p>개발 대상:  온라인 커머스 서비스 </p></li>
                <li><p>개발 서비스 품질 목표:  Resiliency, Scalability, Responsiveness</p></li>
                <li><p>조직의 전환:  Horizontal to Vertical, Matrix Organization</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center">마이크로서비스의 분석과 설계</td>
            <td align="center" style="color:blue">2H</td>
            <td><ul>
                <li><p>DDD와 MSA Design Patterns을 적용한 마이크로서비스 구현 전략, Cloud Native Application 의 특성과 구현원칙들</p></li>
                <li><p>서비스 식별과 분해방법들 – Core Domain 과 Supporting Domain, Bounded Context, Aggregate, Business Capability, Mini Service</p></li>
                <li><p>분해된 서비스의 연동 방법 – Context Mapping, Request/Response or Event-driven MSA</p></li>
                <li><p>Outer Architecture 구성요소 – API GW, 분산큐(Kafka), 서비스 레지스트리, 로드밸런서, 서킷브레이커, 사이드카 패턴 등 </p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center">단위 마이크로서비스의 구현</td>
            <td align="center" style="color:blue">4H</td>
            <td><ul>
                <li><p>DDD 와 이벤트 스토밍의 결과를 헥사고날 아키텍처로 매핑하는 방법</p></li>
                <li><p>Spring Boot와 Maven 을 이용한 단위 서비스 포장</p></li>
                <li><p>JPA 를 이용한 도메인 모델과 어댑터 구현 (Entity, Value Objects)</p></li>
                <li><p>Spring Data REST + JPA 를 통한 RESTful API 노출 (HATEOAS)</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>2일</strong></td>
            <td align="center">프론트엔드를 통한 마이크로 서비스 통합</td>
            <td align="center" style="color:blue">7H</td>
            <td><ul>
                <li><p>UI 를 기반한 서비스 통합 전략:  Client-side Rendering, SPA, MVVM, HATEOAS</p></li>
                <li><p>MVVM Front-end 프레임워크:  VueJS, React, Angular2</p></li>
                <li><p>API Gateway 를 통한 진입점 단일화, 전급 관리 및 인증 통합</p></li>
                <li><p>OAuth2 와 JWT 통한 Stateless 한 토큰 기반 접근과  인증</p></li>
                <li><p>Front-end 기반 통합의 한계: 트랜잭션 이슈와 성능 문제</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center" rowspan="3"><strong>3일</strong></td>
            <td align="center">인터-마이크로서비스의 통합 1: Request-Response 방식</td>
            <td align="center" style="color:blue">2H</td>
            <td><ul>
                <li><p>Request-Response 방식의 연동 (REST + Sync + Orchestration)</p></li>
                <li><p>트랜잭션 이슈: 2PC or Shared-Database and schema per service</p></li>
                <li><p>추적 이슈: 분산 추척을 통한 오류 점검 방법, Istio 예거와 kiali 사용 방법</p></li>
                <li><p>성능 이슈: 장애전파 상황 그리고 Istio 의 Circuit Breaker, Rate Limiting를 통한 회피</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center">인터-마이크로서비스의 통합 2: Event-driven 방식</td>
            <td align="center" style="color:blue">3H</td>
            <td><ul>
                <li><p>Event-driven 방식의 연동 (Pub/Sub + Async + Choreography)</p></li>
                <li><p>EDA 에서의 분산 큐의 역할과 Kafka 의 장점</p></li>
                <li><p>Kafka 의 설치와 클라이언트 도구를 통한 Pub/Sub 실습</p></li>
                <li><p>이벤트의 퍼블리싱 – 어그리게이트 내의 엔티티에 JPA 어노테이션 주입 방법, Spring Cloud Streams 를 통한 이벤트 퍼블리시</p></li>
                <li><p>이벤트의 서브스크립션 - Spring Cloud Streams 와 Kafka client 를 통한 이벤트의 수신과 처리, Acknowledge</p></li>
                <li><p>트랜잭션 이슈: Eventual Transaction 와 Saga, Compensation</p></li>
                <li><p>실습 통한 성능의 장점 이해 :  Time-decoupling 과  Non-blocking 속성</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center">데이터 프로젝션</td>
            <td align="center" style="color:blue">2H</td>
            <td><ul>
                <li><p>Join SQL 를 회피하고, 데이터를 취합하여 보여주는 전략 3가지:  by UI, by Composite-service, by CQRS</p></li>
                <li><p>Composite-Service 구현방법:  동시 REST 호출 or API GW (GraphQL) 사용</p></li>
                <li><p>CQRS 구현방법</p></li>
            </ul></td>
        </tr>
        </tbody>
    </table>
</h5>
'></mark-down>
<mark-down class="content">
### 배포 - Deployment with Pipeline
</mark-down>
        <mark-down style="margin-top: -70px;" class="content" source='
<h5>
    <table>
        <thead>
        <tr class="header">
            <th align="center" width="12%"></th>
            <th align="center" width="10%"><strong>기간</strong></th>
            <th align="center" width="18%"><strong>주제</strong></th>
            <th align="center" width="5%"><strong>시간</strong></th>
            <th align="center" width="55%"><strong>주요 학습 내용</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center" rowspan="2"><strong>교육내용</strong></td>
            <td align="center" rowspan="2"><strong>1일</strong></td>
            <td align="center">CI/CD 프로세스와 Azure 의 대응 서비스</td>
            <td align="center" style="color:blue">3H</td>
            <td><ul>
                <li><p>CI (Continuous Integration) / CD (Continuous Delivery) 개요</p></li>
                <li><p>CI/CD Pipeline 구성요소 및 도구 비교 - Git, Maven, Pipeline, Container Package, Kubernetes</p></li>
                <li><p>Azure 의 대응 서비스 – Azure Repos Git, Azure Pipeline and Azure Container Registry, 그리고 Azure Kubernetes Service</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center">CI/CD Pipeline with Azure Pipelines</td>
            <td align="center" style="color:blue">4H</td>
            <td><ul>
                <li><p>Maven 개념과 라이브러리 디펜던시 (pom.xml) 의 구조 이해</p></li>
                <li><p>Azure Pipelines Yaml 파일 구조</p></li>
                <li><p>소스코드의 변경을 통한 Git 트리거를 통한 파이프라인 실행</p></li>
                <li><p>Azure Pipelines 을 사용하여 클러스터 배포</p></li>
            </ul></td>
        </tr>
        </tbody>
    </table>
</h5>
'></mark-down>
<mark-down class="content">
### 운영 - Container Orchestration
</mark-down>
        <mark-down style="margin-top: -70px;" class="content" source='
<h5>
    <table>
        <thead>
        <tr class="header">
            <th align="center" width="12%"></th>
            <th align="center" width="10%"><strong>기간</strong></th>
            <th align="center" width="18%"><strong>주제</strong></th>
            <th align="center" width="5%"><strong>시간</strong></th>
            <th align="center" width="55%"><strong>주요 학습 내용</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center" rowspan="4"><strong>교육내용</strong></td>
            <td align="center" rowspan="2"><strong>1일</strong></td>
            <td align="center">MSA와 DevOps 그리고 Kubernetes</td>
            <td align="center" rowspan="2" style="color:blue">7H</td>
            <td><ul>
                <li><p>컨테이너 기반 애플리케이션 디자인 패턴</p></li>
                <li><p>Kubernetes를 기반한 MSA와 DevOps 환경의 적용 시나리오</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center">Kubernetes 의 구조, 활용 시나리오의 전반적 이해</td>
            <td><ul>
                <li><p>Kubernetes Runtime Mechanism</p></li>
                <li><p>Kubernetes Object Model 과 Declarative Configuration 개념</p></li>
                <li><p>Kubernetes 의 설치:  Configuration, Infrastructure, Localhost vs On-premise vs Cloud Installation, Tools/Resources</p></li>
                <li><p>Public Kubernetes 서비스(Azure Kubernetes Service) 계정 생성과 접속</p></li>
                <li><p>샘플 MSA 애플리케이션의 디플로이 전과정 미리보기</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>2일</strong></td>
            <td align="center">CI/CD Pipeline with Azure Pipelines</td>
            <td align="center" style="color:blue">7H</td>
            <td><ul>
                <li><p>Kubernetes 기본 명령과 Kubectl 를 통한 객체 다루기</p></li>
                <li><p>Kubernetes를 통한 애플리케이션 디플로이, 인터넷으로의 서비스 노출과정</p></li>
                <li><p>Azure VM 서비스에서의 Node 확인과 pod 디플로이 전략 확인</p></li>
                <li><p>Pod, Deployment, ReplicaSet, StatefulSet, DaemonSet 등 객체 세부</p></li>
                <li><p>Self healing, Auto Scaling, Zero-Down time Deployment</p></li>
                <li><p>Liveness & Readiness 의 설정, 트러블슈팅 방법</p></li>
                <li><p>Volume, PersistenceVolume, PersistenceVolumeClaim</p></li>
                <li><p>Yaml, Helm 를 이용한 멀티 티어 애플리케이션 프로비져닝</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>3일</strong></td>
            <td align="center">CI/CD Pipeline with Azure Pipelines</td>
            <td align="center" style="color:blue">7H</td>
            <td><ul>
                <li><p>마이크로 서비스 섀시 (Chassis) :  스프링 클라우드와 넷플릭스 OSS</p></li>
                <li><p>Azure Container Registry 를 이용한 도커 레지스트리에 서비스 퍼블리싱</p></li>
                <li><p>애플리케이션 디플로이먼트 디스크립터의 설정, Liveness & Readiness 설정</p></li>
                <li><p>서비스 매시 Isio의 개념과 쿠버네티스와 관계 이해</p></li>
                <li><p>Istio를 통한 Resilience(서킷 브레이킹, 레이트 리미팅, 리트라이, 풀이젝션)</p></li>
                <li><p>Istio 를 통한 Smart Deploy(동적 트래픽 라우팅, AB Testing, 카나리 디플로이, 새도우 디플로이)</p></li>
                <li><p>Istio 를 통한 모니터링 (프로메테우스를 통한 모니터링 수집, 예거, 키알리를 통한 분산 서비스 추적 프로파일링)</p></li>
            </ul></td>
        </tr>
        </tbody>
    </table>
</h5>
        '></mark-down>
<br /><br />


    </div>
</template>

<script>
        // @group 05_02_06
    export default {
        name:'education',
        data() {
            return {}
        },
        props: {
            "교육과정(9 days)": {
                type: String
            },
        },

    }
</script>