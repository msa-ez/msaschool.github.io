<template>
    <div>
        <mark-down class="content">
## Telemetry

마이크로서비스는 분산 환경에서 운영되며 다수의 마이크로서비스가 동작하게 됩니다. 이러한 특징 때문에 장애, 운영 이관 등의 실행중인 프로세스에서 발생하는 이벤트의 흐름을 보고 원인을 파악하는데 오랜 시간이 소모 됩니다.
서비스별로 발생하는 이슈들을 Tracing 하기 위하여 Monitoring, Logging, Tracer 도구를 활용하여 지속적이고 자동으로 이슈에 대응할 수 있도록 환경을 구성합니다.
        </mark-down>
        <g-image src="~/img/04_Library/04_MSA Outer 아키텍처/05_Telemetry/image1.png"></g-image><br>
        <mark-down class="content">
### **Telemetry 주요 기능**

        </mark-down>
        <g-image src="~/img/04_Library/04_MSA Outer 아키텍처/05_Telemetry/image2.png"></g-image><br>
        <mark-down class="content">
#### **\[Monitoring\]**

인프라 및 응용 프로그램 서비스 모니터링을 위해서는 매트릭 수집, 로깅 및 추적 이라는 세가지 도메인에서 데이터 수집, 저장 및 분석이 필요합니다. 또한 Alert 기능은 세가지 도메인의 기능을 서포팅 하기 위해 반드시 필요한 기능입니다.
Monitoring은 마이크로서비스 아키텍처의 성능이나 효율성을 확인합니다. AWS에서는 Amazon Cloudwatch가 있고, OSS로는 Prometheus등이 있습니다. Monitoring은 각 대상에서 수집한 Metric을 통해 대상 리소스의 사용률 등을 수치로 표현하는 기능을 수행합니다.


#### **\[Logging\]**

Logging은 마이크로서비스 아키텍처에서 발생하는 Log들을 수집해서 보여줍니다.
Log는 실행 중인 프로세스에서 발생하는 이벤트의 흐름을 의미하며 마이크로서비스 아키텍처에서는 컨테이너에서 실행중인 프로세스들의 수가 모놀리식 아키텍처에 비해서 매우 많기 떄문에 장애와 같은 이벤트 발생 시 파악하기가 힘이 들며 root cause를 찾기가 어렵습니다.

1)  Logging Pattern - 중앙 집중형 로깅

스크립트로 중앙 서버로 모든 로그를 복사하여 관리하는 로깅 방식으로 로그의 저장과 처리를 서비스 실행 환경에서 분리한 패턴입니다. 각 서비스에서 발생한 로그들은 한 곳에 모아진 후 중앙의 데이터 저장소로 보내지고, 로깅 도구를 이용해 로그를 분석하고 처리합니다.

\- 모든 로그 메시지를 수집할 수 있는 능력과 로그 메시지를 분석할 수 있는 능력

\- 트랜잭션의 처음부터 끝가지 연결 지어가며 추적할 수 있는 능력

\- 로그 정보를 오랜 기간 동안 보관해서 트렌드를 파악하고 예측하는 능력

\- 로컬 디스크 시스템에 대한 의존을 제거하는 능력

\- 네트워크 장치, 운영체제, 마이크로서비스 등과 같은 여러 소스에서 오는 로그 정보를 수집하는 능력

2)   Logging 고려사항

1.   저장소


-  마이크로서비스에서 로그를 저장소에 저장할 경우 쌓여진 로그가 디스크를 가득 채우기 때문에 어플리케이션 설계시 로그에 대하여 재활용 기법을 사용하여야 합니다.

-  재활용 기법의 경우 로그의 패턴을 지정하여 일부의 로그만 저장하는 방식을 사용할 경우 어플리케이션으로부터 도출되는 정보에 대하여 제한을 하게 됩니다. 이는 어플리케이션의 높은 가치의 정보를 얻을 수 있는 방안을 제한하게 됩니다.

-  어플리케이션 내부에 로그를 저장할 경우 컨테이너가 종료되거나 재시작되면 사라질 수 있습니다. 그래서 로그를 어플리케이션 서버 내부에 저장하지 않고 외부 저장소에 저장하도록 합니다.


2.   약결합


-  모놀리식 아키텍처와 달리 마이크로 서비스 아키텍처에서 가상머신과 컨테이너는 어플리케이션과 강한 결합을 맺지 않습니다.
배포에 사용되는 컨테이너는 배포 시마다 달라질 수 있으며 짧은 수명을 지닌다. 그래서 디스크의 저장 상태에 의존하면 안되며 별도의 로깅 도구를 활용하여 외부에 로그를 축적하고 관리하도록 합니다.


3.   보안

-  로그 스트림의 경우 개인 정보를 포함할 수 있기 때문에 로그 파일이 ACL을 통하여 로그 관리자만 로그를 확인할 수 있도록 권한을 제어하여야 합니다.

-  로그 암복호화를 통하여 로그 자체를 보호하는 방법도 있으나 대량의 로그가 발생할 경우 이를 암복호화하여 처리하는 것은 성능에 있어 영향을 초래합니다.


#### **\[Tracing\]**

Tracing은 마이크로서비스 아키텍처에서 발생한 Event를 발생한 순서대로 나열해서 보여줍니다. AWS에서는 Amazon X-Ray가 있고, OSS로는 Zipking, Jaeger, Spring Cloud Sleuth 등이 있습니다. 시간 순으로 요청을 보여주고 어떤 단계에서 성공 혹은 실패를 했는지 보여줌으로써 어떤 구간에서 이벤트가 발생했는지 파악할 수 있습니다.



### Telemetry 유형별 도구 소개

**\[Monitoring\]**

1. Stackdriver

각종 서비스로부터 측정된 성능 및 어플리케이션 메트릭(Metric)을 취합 및 보관하고, 통합 모니터링 콘솔과 정책 기반 알람을 제공합니다. 또한 AWS환경을 공식 지원하므로 복수의 GCP 프로젝트와 AWS환경에 대한 통합 모니터링 환경 구성이 가능합니다.

2. AWS CloudWatch

AWS CloudWatch는 AWS 클라우드 리소스 및 AWS에서 실행하는 어플리케이션을 모니터링 해 주는 서비스입니다.
CloudWatch를 사용하여 각 지표를 수집하고, 추적하고, 로그 파일을 수집하여 모니터링하며 Alert을 설정할 수 있습니다.
CloudWatch를 이용해 AWS 환경 내 각종 리소스는 물론, 어플리케이션과 서비스에서 생성된 사용자 지정 지표와 어플리케이션에서 생성된 모든 로그파일을 모니터링 할 수 있습니다.

3. 프로메테우스(Prometheus)

프로메테우스는 각 서버에 클라이언트를 띄우고, 서버가 클라이언트를 주기적으로 접속해 데이터를 가져오는 Pull방식을 통해 메트릭을 수집합니다. 가져온 Metric은 프로메테우스 자체 UI 혹은 Grafana등을 사용해 비주얼라이즈(Visualize) 합니다.
프로메테우스는 단순히 정보를 반복적으로 기록하는데 적합한 제품으로 고도의 다이나믹 서비스 지향 아키텍처 모니터링뿐만 아니라 기계 중심 모니터링에도 적합합니다.


**\[Logging\]**

1. Stackdriver

VM 인스턴스에서 발생된 로그는 Stackdriver 로깅 에이전트(Fluentd 기반)를 통해 Stackdriver로 전송됩니다.

또한 AWS EC2인스턴스를 공식 지원하므로 GCP와 AWS에 대한 통합 로깅 환경의 구성이 가능합니다. 인스턴스 로그 이외의 기타 GCP 서비스에서 발생되는 로그 또한 동일하게 Starckdriver 로깅 콘솔에서 조회 및 관리가 가능합니다.

Stackdriver를 통해 취합된 로그 중 원하는 로그를 Cloud Storage, Big Query, Pub/Sub로 Export 할 수 있고 이를 통해 로그의 장기 보관뿐만 아니라 Batch 또는 Real-Time 데이터 처리 파이프라인의 소스로 사용할 수 있으며, 최종적으로 데이터 분석에 활용할 수 있습니다.
GCP 서비스와 긴밀히 통합된 Stackdriver는 클라우드 상에 배포된 App의 오류 집계, 알람과 Debugger를 제공하며, StackTrace를 통해 App Engine의 지연시간 샘플링과 Reporting을 제공합니다.

2. AWS ElasticSearch

Amazon Elasticsearch(Amazon ES)는 로그 분석, 어플리케이션 모니터링을 위해 Elasticsearch를 손쉽게 배포, 운영 및 확장해주는 완전 관리형 서비스입니다.
ES는 오픈소스 Elasticsearch API, Kibana 관리 및 Logstash와 기타 AWS Services와의 통합을 제공하므로 모든 소스의 데이터를 안전하게 수집하여 검색하고 분석하고 실시간으로 시각화할 수 있으며, 사용자는 CloudWatch Logs 구독을 통해 빠르게 로그 항목을 Amazon ES로 스트리밍하도록 구성할 수 있고 Kibana는 데이터를 시각화하여 검색할 수 있도록 해줍니다.

3. ELK, EFK

EFK는 Elasticsearch(E), Fluentd(F), Kibana(k)로 이루어졌으며, Logging의 목적으로 사용됩니다.
Fluentd가 배포된 호스트에서 로그를 필터링하고 모으는 aggregator 역할을 하고, Elasticsearch가 모인 로그를 저장하며 저장된 로그를 Kibana가 Visualize하는 역할을 수행합니다.

Fluentd 대신 Logstash를 사용할 경우 ELK 조합이 됩니다.


**\[Tracing\]**

1. AWS X-Ray

AWS X-Ray를 사용해 자신이 개발한 애플리케이션과 기본 서비스가 성능 문제와 오류의 근본 원인 식별 및 문제 해결을 올바로 수행하는지 파악할 수 있습니다.
X-Ray는 요청에 대한 End-to-End 뷰를 제공하고 애플리케이션의 기본 구성 요소를 맵으로 보여줍니다.

AWS X-Ray는 사용자 요청이 애플리케이션을 통과하는 전체 과정을 추적하며 애플리케이션을 구성하는 개별 서비스 및 리소스에 의해 생성되는 데이터를 집계하여 애플리케이션 작동 상태에 대한 종단간 뷰를 제공합니다.
X-Ray의 추적 기능을 통해 요청 경로를 따라가며 애플리케이션의 어느 위치에서 무엇이 성능 문제를 유발하는지 정확히 파악할 수 있으며, X-Ray는 사용자가 트레이스에 메타데이터를 첨부할 수 있도록 주석을 제공합니다.

2. Zipkin

Zipkin은 마이크로서비스 기반 분산 시스템에서 Timing Data를 수집해 각각의 Latency를 분석해 문제해결을 할 수 있도록 해주는 분산 추적 시스템입니다.
Application이 Zipkin 서버로 Time Data를 전달하면 Zipkin UI는 각각의 어플리케이션의 Request Tracing Data, Dependency Diagram을 보여 줍니다. 만약 Problem, Error를 가질 경우, Zipkin UI에서 어플리케이션 Trace의 Length, Annotation, Timestamp를 기준으로 Filtering하거나 Sort하는 기능을 사용할 수 있습니다.

3. Jaeger

Jaeger는 Uber Technologies에서 오픈소스로 배포한 분산형 추적시스템으로 마이크로서비스 기반 분산시스템(분산 컨텍스트 전파, 분산 트랜잭션 모니터링, 근본 원인 분석, 서비스 의존성 분석, 성능 / 대기 시간 최적화) 모니터링에 사용할 수 있습니다.
Jaeger 백엔드는 단일 실패지점이 없고, 비즈니스 요구사항에 맞게 확장 할 수 있도록 설계되었습니다.
        </mark-down>
    </div>
</template>


<script>
    // @group 03_04_06
    export default {
        name:'ArchitectureFive',
        data() {
            return {}
        },
        props: {
            "Telemetry": {
                type: String
            },
        },

    }
</script>