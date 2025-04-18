<template>
    <div>
        <mark-down class="content">
## 시스템 보안

MSA School 은 구글 클라우드 플랫폼을 사용합니다.

GCP 기반의 MSA 구축 시, 보안 취약점은 **클라우드 플랫폼 취약점**, **도커 이미지 취약점**, **어플리케이션 취약점**의 3가지 타입으로 분류됩니다.

> 취약점이란 우발적인 시스템 오류를 일으키거나 의도적으로 악용될 수 있는 약점을 말합니다.

[취약점(Vulnerability) 고려 대상]


### 클라우드 플랫폼(Platform) 취약점 보안

GCP 의 보안 모델은 엔드 투 엔드 프로세스로, G-Mail, 검색 및 기타 앱과 같은 Google 애플리케이션에서 고객 보안을 유지하는 데 중점을 둔 15년 이상의 경험을 기반으로 하고 있습니다.

GCP 쿠버네티스 엔진에서 실행 중인 서비스에 대해, 성능 테스트를 목적으로 부하(Load)를 일정 수준 이상으로 높이면 GCP 는 이를 DDoS 공격으로 인식, 요청 정보의 유입을 원천적으로 차단합니다.

GCP 플렛폼이 제공하는 스텍별 상세 보안 메카니즘은 아래에서 확인 가능합니다.
</mark-down>

<a href="https://cloud.google.com/security/overview?hl=ko" 
    class="markdown-body-text-btn"
    target="_blank"
>구글 클라우드 플랫폼 보안정책 보기
</a>

<mark-down class="content">
### 도커 이미지(Docker Image) 취약점 보안

GCP 는 도커 이미지 저장소인 컨테이너 레지스트리(Container Registry)를 제공합니다.

MSA 의 장점인 무정지 배포, 셀프 힐링과 같은 Service Resiliency 를 제공하기 위해서는, 서비스가 컨테이너 런타임이 관리하는 단위로 생성되어야 합니다.
> - Docker Swarm, Apache Mesos 와 같은 컨테이너 런타임은 최근 Kubernetes Container Orchestrator 로 표준화 되어, 모든 상용 플랫폼에서 채택하고 있는 추세

이를 위해 개발자는 응용 프로그램 코딩 후, 필요한 라이브러리와 모든 메타 파일을 하나로 묶어 도커 이미지(Docker Image)를 생성 합니다. 생성된 이미지는 플랫폼의 컨테이너 런타임이 참조하는 저장소에 푸시(Push)하는데 이를 '컨테이너 레지스트리'라고 부릅니다.

GCP 는 이 컨테이너 레지스트리의 이미지에 대한 취약점을 스캔하고, 취약점 정보를 모니터링하여 최신 상태로 유지합니다.
GCP 의 컨테이너 레지스트리에 대한 취약점 분석은 2가지 작업으로 구성됩니다.


- **증분 스캔(Incremental scanning)**
> - Container Registry 에 새 이미지가 업로드되면 컨테이너 분석이 해당 이미지를 스캔합니다.
> - 이 스캔은 컨테이너 매니페스트를 기반으로 메타데이터를 수집하고 이미지를 다시 업로드(다시 푸시)할 때마다 이 메타데이터를 업데이트합니다.


- **연속 분석(Continuous analysis)**
> - 컨테이너 분석기가 Container Registry 의 스캔 이미지 메타 데이터를 지속적으로 모니터링하여 새로운 취약점이 있는지 확인합니다.
> - 컨테이너 분석기는 취약점 소스에서 새로운 업데이트된 취약점 정보를 수신하면 컨테이너를 다시 분석하여 이미 스캔한 이미지의 취약점 발생 목록을 최신 상태로 유지합니다.
> - 또한, 더 이상 유효하지 않은 취약점 목록은 삭제합니다.

**정리하지면, 도커 이미지(Docker Image)에 대한 취약점은 Google Cloud Platform 에서 기본적으로 관리해 주므로, 크게 신경쓰지 않아도 됩니다.**


### 웹 어플리케이션 취약점 보안

웹 애플리케이션 취약점은 마이크로서비스를 구현하는 소스코드 레벨에서 인증, 인가를 비롯한 기본적인 웹 기반 취약점에 대해 사전 고려해야 하는 보안 요소입니다.
> - 웹 어플리케이션의 경우, SQL Injection, Cross Site Scripting 등 악의의 사용자로부터 침투 가능한 보안 허점들이 공개 되어 있습니다.
>
    </mark-down>

    <a href="https://owasp.org/www-project-top-ten/" 
        class="markdown-body-text-btn"
        target="_blank"
    >OWASP(The Open Web Application Security Project) 대표 웹 취약점 보기
    </a>
    
    <mark-down class="content" source="
마이크로서비스 구현 시, 보안 적용에 대해서는 <a href='https://www.msaschool.io/operation/design/design-seven/' target='_blank'>설계/구현/운용단계 > 설계 > 마이크로서비스 보안설계</a> 페이지에서 자세히 소개 합니다.

프로덕션 단계 전, 구현된 애플리케이션을 대상으로 모의 테스트를 실시해 보안 누수가 있는지 사전 테스트가 필요합니다. 이를 위해 GCP 에서는 클라우드 보안 스캐너(Cloud Security Scanner)를 무료로 제공하고 있습니다.

클라우드 보안 스캐너는 App Engine, Compute Engine, Google Kubernetes Engine 애플리케이션의 일반적인 취약점을 탐지하는 웹 보안 스캐너입니다.

구현한 12st 쇼핑몰에 대해 스캔 설정(즉시 스캔, 예약 스캔)을 완료하게 되면, 크로스 사이트 스크립팅(XSS), 플래시 삽입, 혼합 콘텐츠(HTTPS 내 HTTP 삽입), 구버전 및 취약 라이브러리 등의 일반적인 취약점을 자동으로 스캔하여 탐지합니다.
    ">
    </mark-down>

    <a href="https://cloud.google.com/security-scanner?hl=ko" 
        class="markdown-body-text-btn"
        target="_blank"
    >구글 클라우드 보안 스캐너 보기
    </a>

    <mark-down class="content">
**웹 어플리케이션 구현 시, 보안 체크 포인트를 고려한 코딩이 전제되어야 하고, 프로덕션 단계 전 GCP 가 제공하는 보안 스캐너를 통해 웹 취약점을 진단, 보안 누수를 차단합니다.**
    </mark-down>
    </div>
</template>


<script>
    // @group 01_02_06
    export default {
        name:'SystemSecurity',
        data() {
            return {}
        },
        props: {
            "시스템 보안": {
                type: String
            },
        },

    }
</script>