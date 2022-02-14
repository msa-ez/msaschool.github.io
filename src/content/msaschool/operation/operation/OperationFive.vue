<template>
    <div>
        <mark-down class="content">
## 서비스메시 이스티오

#### Service Mesh- Service to Service Communicator 
- Service Mesh는 마이크로서비스 간의 통신(네트워크)을 담당하는 요소입니다.
- 통신 및 네트워크 기능을 비즈니스 로직과 분리한 네트워크 통신 인프라입니다.
- 서비스간 통신을 위해서는 Service Discovery, Fault Tolerance, Traffic Routing, Security 등의 기능 필요합니다.

        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image1.png"
        ></g-image>
        <mark-down class="content">
#### Service Mesh in Microservice Architecture
- Inner Architecture:
개별 마이크로서비스 영역으로 가능한 간결, 명확하고 단순하게 구현하는데 중점을 둡니다.
- Outer Architecture: 
마이크로서비스 외부를 아우르는 영역으로 트래픽 통제 및 서비스간 어떻게 커뮤니케이션 하는 가 등, 클라우드 담당자가 공히 겪게 되는 복잡성들 
(e.g. 서비스 발견, 탄력성, 장애 내성, 등) 을 네트워크 레벨에서 처리합니다.
- (Service Mesh 영역)

        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image2.png"
        ></g-image>
        <mark-down class="content">
#### API Gateway vs. Service Mesh
- API Gateway는 마이크로서비스 그룹의 외부 경계에 위치하여 역할을 수행하지만, Service Mesh는
경계 내부에서 그 역할을 수행합니다.
        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image3.png"
        ></g-image>
        <mark-down class="content">
#### Service Mesh Types
- &#60; 서비스 메시의 종류 &#62;
    - 코드 기반
        > 프레임워크 기반 프로그래밍 모델로 서비스 메시를 구현하는데 특화된 코드가 필요한 유형입니다.
        
    - 라이브러리 기반
        > 라이브러리로 구현되어 API호출을 통해 Service Mesh에 결합되는 유형입니다.
        
    - Proxy 기반
        > Istio/ Envoy, Consul, Linkerd 등 Sidecar Proxy를 통해 마이크로서비스에 주입하는 유형입니다.

        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image4.png"
        ></g-image>
        <mark-down class="content">
#### Service Mesh Comparasion
        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image5.png"
        ></g-image>
        <mark-down class="content">
#### Istio Service Mesh key features 
- Improved Routing & Deployment Strategy
- Improved Smart Resilience
- Improved Security
- Improved Observability
> Service Discovery
Load balancing  
Dynamic Request Routing
Circuit Breaking 
암호화 (TLS)
보안
Health check, Retry and Timeout
Metric 수집

#### 1. Improved Routing & Deployment Strategy
- Traffic Routing Controls
        </mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/05/image6.png"
        ></g-image>
        <mark-down class="content">
#### Canary Deploy
- 특정 유저의 신상, 지역, 권한, 접근 단말에 따른 다른 버전의 노출합니다.
#### A/B Testing, Shadow Deploy
- 신규 버전의 오류 노출 없는 실질적 테스트
        </mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/05/image7.png"
        ></g-image>
        <mark-down class="content">
#### 2. Improved Resilience
        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image8.png"
        ></g-image>
        <mark-down class="content">
#### 3. Improved Security
- TLS based Inter Microservices Communication
    - Envoy로 통신하는 모든 트래픽을 자동으로 TLS를 이용해 암호화합니다.
- Service Authentication & Authorization
    - JWT Token을 이용한 서비스 접근 Client 인증합니다.
    - 역할기반(RBAC) 권한 인증 지원합니다.
#### 4. Improved Observability
- Distributed Tracing and Measure
    - 서비스간 호출 내용 기록합니다.
    - Istio 설치 시, Kiali, Jaeger가 default로 설치되어 각각 Monitoring 및 Tracing 지원합니다.
        </mark-down>
        <g-image style="max-width: 95%"
            src="~/img/03_Bizdevops/06_운영/05/image9.png"
        ></g-image>
        <mark-down class="content">
#### Istio Service Mesh architecture 
- Data Plane(데이터 플래인)
    - 서비스 옆에 사이드카(Envoy)를 붙여, 서비스로 들어오고 나가는 트래픽을 Envoy를 통해 통제합니다.
    - 유입/유출 트래픽 통제 : Ingress/Egress Controller

- Control Plane(컨트롤 플래인)
    - Pilot(파일럿) : Envoy에 대한 설정 관리 및 서비스 디스커버리 기능 제공합니다.
    - Mixer(믹서) : 액세스 컨트롤 및 다양한 모니터링 지표수집합니다.
    - Citadel(시터덜) : 보안관련 기능 담당 모듈로 사용자 인증/ 인가 및 TLS 통신을 위한 인증서 관리합니다.

        </mark-down>
        <g-image style="max-width: 40%"
            src="~/img/03_Bizdevops/06_운영/05/image10.png"
        ></g-image>
        <mark-down class="content">
#### Before Istio : Spring Cloud + Netflix
        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image11.png"
        ></g-image>
        <mark-down class="content">
#### After Istio
- 좋은점 :
    1. L7 레이어를 사용, 성능이 높습니다.
    2. Code 변경 없이 Cross-cutting 이슈를 다루어 줍니다.
    3. Main 서비스의 재배포 없이 Sidecar 를 관리 가능합니다.

        </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/05/image12.png"
        ></g-image>
        <mark-down class="content">
#### Istio Improved Routing & Rule
- 이스티오 정책 : VirtualService, DestinationRule
        </mark-down>
        <g-image style="max-width: 75%"
            src="~/img/03_Bizdevops/06_운영/05/image13.png"
        ></g-image>
        <mark-down class="content">
#### What is Istio?
        </mark-down>
        <g-image style="max-width: 80%"
            src="~/img/03_Bizdevops/06_운영/05/image14.png"
        ></g-image>
        <mark-down class="content">
        </mark-down>
    </div>
</template>


<script>
        // @group 02_06_06
export default {
    name: "OperationFive",
    props: {
        "서비스메시 이스티오": {
            type: String
        }
    }
};
</script>