<template>
    <div>
        <mark-down class="content">
## 단계별 수행목표
계획 단계에서 12st 쇼핑몰의 시스템 구현 모형은 아래와 같이 나타낼 수 있습니다.

Business Capability(중요도)에 따라 서비스를 분할하고, 각 서비스를 독립적으로 설계합니다. 임의의 서비스 추가나 삭제에도 운영 중인 기존 서비스가 받는 영향은 없으며, 장애 전파가 없는 격리된 구조로 구현됩니다.
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/02_프로젝트_구현전략/01_단계별_수행목표/image1.jpg"></g-image>
        <br/>
        <mark-down class="content">

API Gateway 는 유입되는 요청에 대해 인증 정보를 확인 후 각 마이크로서비스로 라우팅 합니다.

주문, 상품, 배송 서비스들은 중앙의 메시지 큐(Kafka)를 통해 이벤트 기반 Pub/Sub 방식으로 통신하되, 필요 시 REST 기반 직접 호출도 수행합니다.
이때, 여러 서비스의 복합 정보를 서비스 해야하는 '마이페이지'는, 여러 이벤트를 Subscribe 하여 데이터를 프로비저닝 합니다.
최종 시스템 구현을 위한 총 6 단계의 단계별 수행 목표는 다음과 같습니다.
        
### 분석단계
**관심사 분리(Separation of Concern)에 따른 KPI 분석**
>- 12st 쇼핑몰의 성장에 따라, 조직에서 공유되던 KPI 가 분화되는 팀에 맞도록 분산 매핑되는 전이 과정 분석
>- 코어(Core)와 서포팅(Supporting) 업무(조직)으로 나뉘어진 환경에서 운영상 발생할 Pain Point 분석
### 설계단계
**MSAEasy 도구를 활용한 이벤트스토밍 기반 마이크로서비스 설계**
>- 책임의 분산, 디자인의 분산에 따른 팀별 서비스 설계
>- MSAEasy를 활용한 이벤트 트리븐 설계(이벤트스토밍) 및 서비스별 역학관계에 따른 컨텍스트 매핑
>- GCP(Google Cloud Platform) Outer Architecture 설계
### 구현단계
**Spring-boot 기반 MSA Chassis 프레임워크를 활용한 서비스 구현**
>- MSAEasy 도구로부터 MSA Template 코드 다운로드 및 서비스별 Business Logic 구현
>- API Gateway 및 토큰기반 인증체계 적용
>- 이벤트 기반 Pub/Sub 채널을 통한 서비스간 커뮤니케이션
### 통합단계
**EDA(Event Driven Architecture) 기반 분산된 마이크로서비스 통합**
>- 웹 컴포넌트를 활용한 MVVM 기반 Client-Side UI 통합
>- 마이페이지 통합 View : CQRS(Command and Query Responsibility Segregation) 패턴을 적용한 데이터 프로젝션
>- Saga 패턴에 따른 Eventual Transaction & Rollback 구현
### 배포단계
**CI/CD 파이프라인을 활용한 GCP 개발환경, 운영환경 자동 배포**
>- 소스 형상관리 서버와 GCP(Google Cloud Platform) Cloud Build 연동 및 파이프라인(Pipeline) 생성
>- 클라우드 개발계, 운영계 자동 배포를 위한 배포 트리거 생성
>- 특정 사용자(또는, 환경)를 대상으로 한 새로운 버전의 점진적 배포 전략(Canary deployment) 적용
### 운영단계
**모니터링(Logging, Monitoring, Tracing)을 통한 운영**
>- Google Stackdriver를 활용한 클라우드 모니터링 및 Alerting 환경설정
>- Metric 정보에 따른 모니터링 대쉬보드 커스터마이징
>- 통합 로깅 및 분산 추적 (Distributed Tracing)
        </mark-down>
    </div>
</template>


<script>
    // @group 01_02_02
export default {
    name: "StepByStepGoal",
    data() {
        return {};
    },
    props: {
        "단계별 수행목표": {
            type: String
        }
    }
};
</script>