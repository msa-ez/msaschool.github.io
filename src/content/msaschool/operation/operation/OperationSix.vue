<template>
    <div>
        <mark-down class="content">
# 마이크로서비스 모니터링
## GCP기반 마이크로서비스 모니터링(로깅/ 모니터링/ 트레이싱)
### 1. 로깅(Logging)
Stackdriver Logging을 사용하면 Google Cloud Platform과 AWS(Amazon Web Services)의
로그 데이터 및 이벤트를 저장, 검색, 분석, 모니터링하고 알림을 받을 수 있습니다.
API를 통해 소스에 상관없이 커스텀 로그 데이터의 수집도 가능합니다.
Stackdriver Logging은 대규모로 실행되며 수천 개의 VM 에서 애플리케이션 및 시스템 로그
데이터를 수집할 수 있는 Full Managed Service 입니다.

#### GCP
로그뷰어 주요 기능 GCP 가 제공하는 로그g 뷰어는 실시간 로그 분석
이외에도 다양한 로그 관련 기능을 제공합니다.
> - 커스텀 로그 작성
> - 로그 이벤트 알림 (Log Alerting)
> - Fluentd 에이전트를 활용한 AWS 로그 통합
> - BigQuery를 사용한 로그 분석
추가 기능 및 상세한 설명에 대해서는 Google 온라인 문서를 통해 확인 가능합니다.
        </mark-down>
		<a href="https://cloud.google.com/logging?hl=ko" 
			class="markdown-body-text-btn"
			target="_blank"
		>GCP Logging 상세정보 보기</a>
        <mark-down class="content">
#### 로그 뷰어 접속하기
- GCP 메뉴의 'OPERATIONS > 로그 기록 > 로그 뷰어' 메뉴로 접속합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image1.jpg"
        ></g-image>
        <mark-down class="content">
- 로그 뷰어의 메인은 로그기반 측정항목을 포함 기본 메뉴영역(Left)과 리소스별 로그 정보를 탐색할 수 있는 메인 영역으로 구성됩니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image2.jpg"
        ></g-image>
        <mark-down class="content">
#### 12st 쇼핑몰 로그 보기
12st 쇼핑몰의 마이크로서비스 로그는 GCP 로그뷰어 화면 중앙의 리소스 필터를 설정하여 열람 합니다.
> 1. 최상위 리소스를 Kubernetes 컨테이너로 선택합니다.
> 2. 클러스터는 Cluster-1 을 선택합니다.
> 3. 네임스페이스는 default 를 선택합니다.
> 4. 컨테이너 리스트 팝업에서 '모든 container_name' 을 선택합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image3.jpg"
        ></g-image>
        <mark-down class="content">
- 12st 쇼핑몰 로그뷰어를 위한 리소스 선택이 끝나면, 모든 마이크로서비스 컨테이너에 대한 로그가 함께 출력됩니다.
- '로그 스트리밍(Log Streaming)' 기능으로 실시간 모니터링이 가능하며,
로그 수준(중요: Critical, 오류: Error, 주의: Warning, 정보: Info, 디버그: Debug) 설정 및 로그 히스토리에 대한 시간대별 조회가 가능합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image4.jpg"
        ></g-image>
        <mark-down class="content">
### 2. 모니터링(Monitoring)
- GCP의 Stackdriver는 클라우드 기반 애플리케이션의 성능, 업타임, 전반적인 상태에 관한 모니터링 정보를
제공합니다.
- Stackdriver는 Google Cloud Platform, Amazon Web Services, 호스팅된 업타임 프로브, 애플리케이션 계측은 물론
Cassandra, Nginx, Apache 웹 서버, Elasticsearch 등의 다양한 공통 애플리케이션 구성요소에서 측정항목, 이벤트,
메타데이터를 수집합니다.
- Stackdriver는 이러한 데이터를 수집하고 대시보드, 차트, 알림을 통해 유용한 정보를 제공합니다.
- Stackdriver 알림은 Slack, PagerDuty 등과 통합되어 공동작업 시 유용하게 사용됩니다.

#### GCP 모니터링 주요기능
GCP 모니터링 도구는 플랫폼에서 수집하는 Metric 정보를 기반으로 다양한 기능을 제공합니다.
> - 커스텀 대시보드 작성
> - E-Mail, SMS를 통한 알림 규칙 알림 (Log Alerting)
> - 업타임 모니터링

추가 기능 및 상세한 설명에 대해서는 Google 온라인 문서를 통해 확인 가능합니다.

        </mark-down>
		<a href="https://cloud.google.com/monitoring?hl=ko" 
			class="markdown-body-text-btn"
			target="_blank"
		>GCP Monitoring 상세정보 보기
		</a>
		<mark-down class="content">
#### 모니터링 화면 접속하기

GCP 메뉴의 'OPERATIONS > 모니터링 > 모니터링 개요' 메뉴로 접속합니다.
		</mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image5.jpg"
        ></g-image>
        <mark-down class="content">
- 최초 접속시, Monitoring API 설정을 위한 초기화 작업이 이루어 집니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image6.jpg"
        ></g-image>
        <mark-down class="content">
- 초기화 작업 이후에 나타나는 GCP 모니터링 메인화면은 대시보드 생성과 알림의 메뉴 영역(Left)과 메인 영역으로 구성됩니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image7.jpg"
        ></g-image>
        <mark-down class="content">
#### 12st 쇼핑몰 모니터링 하기
GCP Stackdriver가 모니터링을 위해 제공하는 Metric 정보는 아주 다양합니다.
12st 쇼핑몰 컨테이너들의 기본적인 CPU 및 메모리 사용현황 모니터링을 위해,
먼저 커스텀 대쉬보드를 생성하고 모니터링 할 차트(Portal 의 포틀릿 개념)를 하나 하나 추가해 줍니다.
1. 'New Dashboard Name' 창에서 새로운 이름을 입력합니다.
2. 새로운 Dashboard 창에서 우측 상단의 'ADD CHART'를 선택합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image8.jpg"
        ></g-image>
        <mark-down class="content">
3. 차트 생성 화면에서 모니터링 할 리소스 유형과 메트릭 정보, 조회할 핕터 정보를 선택합니다.
여기서는 "GKE Container", "CPU Usage", project_id = "Project-for-MSASchool"을 각각 선택합니다.
4. 저장(SAVE)을 클릭합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image9.jpg"
        ></g-image>
        <mark-down class="content">
5. 설정한 메트릭 정보를 기반으로 한 대시보드 화면이 생성되고, 12st 쇼핑몰에 대한 통합 모니터링이 가능합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image10.jpg"
        ></g-image>
        <mark-down class="content">
#### 12st 쇼핑몰 모니터링 알림 설정하기
운영 단계의 중요한 모니터링 요소 중 하나는 비정상적 운영에 대한 알림(Notification) 기능입니다.
GCP Stackdriver 모니터링은 알림을 위한 리소스의 메트릭 설정 및 임계치 지정 기능을 제공합니다.
1. 모니터링 화면의 왼쪽 메뉴에서 '알림'을 선택하고 나타나는 화면에서 상단의 'CREATE POLICY'를 클릭합니다.
2. 새로운 알림정책 화면에서 조건을 지정하고, 알림을 수신할 채널 유형과 대상을 입력합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image11.jpg"
        ></g-image>
        <mark-down class="content">
3. Notification 의 'ADD NOTIFICATION CHANNEL'을 선택하여 나타나는 창에서 알림 유형과 해당 정보를 입력합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image12.jpg"
        ></g-image>
        <mark-down class="content">
### 3. 트레이싱(Tracing)
- Stackdriver Trace는 애플리케이션의 지연 시간 데이터를 수집해 Google Cloud Platform Console에 표시하는 분산
추적 시스템입니다.
- 요청이 애플리케이션 전체로 확산되는 과정을 추적하고, 상세한 성능 정보를 거의 실시간으로 받을 수 있습니다.
- Stackdriver Trace는 모든 애플리케이션 trace를 자동으로 분석하고 상세 지연 시간 보고서를 생성하여 성능 저하 문제를 파악하고 모든 VM,
컨테이너 또는 App Engine 프로젝트의 trace를 캡처할 수 있습니다.
#### GCP Tracing 주요기능
GCP Tracing 은 추적과 관련된 기본 기능을 제공합니다.
> - 추적을 위한 Metric 설정
> - 분석 보고서 생성
> - 지연시간 변동 감지
추가 기능 및 상세한 설명에 대해서는 Google 온라인 문서를 통해 확인 가능합니다.
	</mark-down>

	<a href="https://cloud.google.com/trace?hl=ko" 
		class="markdown-body-text-btn"
		target="_blank"
	>GCP Tracing 상세정보 보기
	</a>

	<mark-down class="content">
#### Tracing(추적) 화면 접속하기
GCP 메뉴의 'OPERATIONS > 추적 > 개요' 메뉴로 접속합니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image13.jpg"
        ></g-image>
        <mark-down class="content">
- Tracing 화면은 HTTP 메소드 및 Metric 기준 정보에 따라 추적 분석 보고서를 만드는 내용으로 구성됩니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image14.jpg"
        ></g-image>
        <mark-down class="content">
#### 12st 쇼핑몰 Tracing(추적) 하기
- 12st 쇼핑몰을 구성하는 서비스들 사이의 동기 호출방식(Request & Response)을 적용할 수 있습니다.
- 동기 호출은 호출한 서비스가 응답이 돌아올 때까지 기다리는 방식입니다.
- GCP 추적 메뉴의 '추적 목록'을 선택합니다.
- 파란 색으로 표시되는 작은 원들이 User Requests 이며, Trace 필터를 적용하여 특정 서비스의
요청들만 선택하여 볼 수 있습니다.
- 하나의 원 위에 마우스를 올려 보면 해당하는 URI 정보(여기서는 주문, Order)와 서버에서 수행된 총 시간(2,246 ms)이
표시됩니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image15.jpg"
        ></g-image>
        <mark-down class="content">
- 하나의 요청(Request)을 클릭하면, 해당 요청이 클라이언트로 나가기까지 서버 내에서 수행한 호출 목록들이 간트 차트와 비슷한 형식의 순서대로 출력됩니다.
- 12st 쇼핑몰에서 사용자가 주문을 생성하면, 서버에서는 주문 서비스가 상품 서비스의 재고를 확인해 주문을 생성하고 배송
서비스를 호출합니다.
- 배송 서비스는 배송 정보를 생성하고, 주문 수량만큼 상품의 재고를 차감합니다.
- 모든 작업이 완료 된 후, 사용자에게 최종 주문완료 화면이 나타나는데까지 총 2,246 밀리초가 걸렸다는 추적 뷰를 표시하고 있습니다.
        </mark-down>
        <g-image
                src="~/img/03_Bizdevops/06_운영/06/image16.jpg"
        ></g-image>
    </div>
</template>


<script>
    // @group 02_06_07
    export default {
        name: "OperationSix",
        props: {
            "마이크로서비스 모니터링": {
                type: String
            }
        }
    };
</script>