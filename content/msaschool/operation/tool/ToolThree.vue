<template>
    <div>
        <mark-down class="content">
### Getting started
Kuber-Ez는 Yaml 및 CLI에 대한 최소한의 이해만으로도 kubernetes 매니페스트 및 배포 모형을 구성할 수 있는 시각적 방식의 웹 기반 다이어그래밍 도구입니다.
        </mark-down>
        <g-image src="https://user-images.githubusercontent.com/35618409/92839680-38a73d00-f41b-11ea-912d-3df071a2e32c.png"></g-image>
        <mark-down class="content">
### about Kuber-Ez
- 쿠버네티스(https://kubernetes.io/)는 여러분들의 서비스가 무정지 배포 및 Self-Healing되어 항상성을 유지하도록 하는 강력한 기능을 가진 컨테이너 오케스트레이터(Container Orchestrator)입니다. 쿠버네티스상에 서비스를 배포/운영하려면 YAML 언어를 사용해 배포 전략을 작성해야 하고 이를 커맨드 라인 인터페이스(CLI)를 통해 관리해야 하는 등, Linux 운영체제의 운영경험과 많은 학습곡선을 요구합니다.
- Kuber-Ez는 Kubernetes Cluster상에 서비스를 쉽게 배포할 수 있도록 도와주는 도구입니다. 쿠버네티스 객체 기술언어인 YAML(Yet Another Markup Language) 파일을 GUI 환경에서 쉽게 작성되도록 도와 주며, Cluster에 자동 배포시켜 줍니다.
- 사용자는 쿠버네티스 기본 객체 모델에 대한 이해만으로 Kuber-Ez 도구를 활용하여 손쉽게 퍼블릭 클라우드 상에서 마이크로서비스를 배포 및 운영할 수 있습니다.


### Features

* Kuber-Ez는 Web Browser 환경에서 실행되며, Kubernetes(http://cncf.io)에서 정의하는 모든 객체들을 객체가 가진 기능별로 분류하여 도구의 오브젝트 팔레트(Object Palette)를 통해 제공합니다.
* 팔레트에서 객체를 선택하면 중앙(Canvas Area)에 선택된 객체가 표시되고, 이를 더블클릭하여 나타나는 퍼로퍼티 창에서 속성값을 설정합니다.
* 객체의 속성정보는 사용자가 직접 정의하거나, 관련있는 객체들간의 관계 설정(Relation)을 통해 자동 주입할 수 있습니다.
* 정의된 객체에 대해, 도구 하단(Terminal Area)에 출력되는 명령어 콘솔창에서 쿠버네티스 CLI 커멘드 명령어를 확인할 수 있다. (학습기능)
* 도구는 퍼블릭 클라우드(e.g. GCP, AWS, Azure, NCP) 연계을 위한 관리기능을 제공합니다.
* 완료된 다이어그램은 등록된 클라우드와 연결하여 온라인 배포할 수 있으며, YAML화일 형식, 또는 Helm Chart기반으로 아카이브 파일을 다운로드할 수 있습니다.
* 클라우드에 배포된 객체의 실행정보를 받아와 상태정보를 인지할 수 있는 모니터링 기능을 제공합니다.


### 실행환경 및 서비스 유형
* Kuber-Ez는 Chrome Brower에 최적화되어 있습니다.(최신 버전 권장)
* 모든 운영체제(Windows, Linux, Mac)를 지원하며, 최소 512MB 이상의 메모리 필요
* On-Premise 버전 및 SaaS 기반의 서비스를 제공합니다. [[How to install Kuber-Ez]](https://github.com/uengine-oss/kuber-ez/wiki/1.Installation)


### 장점 및 기대효과
* 한국인정기구 KOLAS 인정시험 통과
* YAML 및 CLI 명령어에 익숙하지 않은 사용자도 쉽게 사용할 수 있는 UI/UX를 제공합니다.
* 객체별 실행 명령어(kubectl) 확인, 생성된 YAML 미리보기, 다양한 유형별 YAML 다운로드를 통한 학습 기회를 제공합니다.
* 쿠버네티스에 익숙한 사용자에게도 도구를 통해, 데브옵스 프로세스의 리드 타임(Lead time)을 단축시켜 줍니다.
* 다양한 교육 및 MSA 프로젝트 현장에서의 활용으로 클라우드 산업 활성화 지원


### 주문/상품/배송 서비스를 시나리오로 한 KuberEz 전,후 비교 영상
        </mark-down>
        <g-image src="https://user-images.githubusercontent.com/35618409/96990423-0e8c8300-1562-11eb-9430-d6aec52ead7d.png"></g-image>
    </div>
</template>


<script>
    // @group 03_03_04
    export default {
        name:'ToolThree',
        data() {
            return {}
        },
        props: {
            "배포 다이어그래밍 도구": {
                type: String
            },
        },

    }
</script>