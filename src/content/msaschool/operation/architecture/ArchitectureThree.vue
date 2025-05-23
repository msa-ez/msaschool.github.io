<template>
    <div>
        <mark-down class="content">
## Container Management
컨테이너는 운영체제 수준 가상화(Operating-system-level virtualization) 방식으로 운영체제 커널을 공유합니다. 따라서 각자 OS를 가지고 있는 VM과 달리 하나의 OS에 여러 컨테이너가 올라가게 되므로 크기도 작고 리소스를 훨씬 적게 사용합니다.

컨테이너는 프로세스를 묶어서 샌드박스 형태로 제공하고 각자의 네임스페이스와 파일 시스템을 가지고 운영됩니다.

컨테이너와 VM은 비슷한 목적을 가지는데 애플리케이션과 그 의존성(dependencies)을 독립된 단어로 묶어 겪리하여 어디서든 실행 가능하게 하는 것입니다.

또한, 컨테이너와 VM은 모두 물리적 하드웨어의 필요성을 제거하여 컴퓨터의 자원을 비용 측면에서 좀 더 효율적으로 사용할 수 있도록 합니다.


### **마이크로서비스 구성 방식**

모놀리식 아키텍처에서 모든 애플리케이션은 호스트에 전체 배포 되기 때문에 애플리케이션 복사본을 여러 개 실행하는 형식으로 배포됩니다. 따라서 N개의 서버에서 M개의 어플리케이션 인스턴스가 실행됩니다.

마이크로서비스 아키텍처에서 애플리케이션은 수십에서 수백 개의 서비스로 이루어집니다.

각 서비스는 다양한 언어와 프레임워크로 만들어지고, 각 서비스는 독립적으로 배포, 스케일링, 모니터링 되고 각자의 리소스를 사용합니다. 각 서비스가 하나의 작은 어플리케이션을 이루어 구성됩니다.

마이크로서비스 아키텍처 환경에서 어플리케이션 서비스를 구성하는 방식은 다음과 같습니다.

#### **\[호스트 하나에 여러 개의 서비스를 구성\]**


</mark-down>
        <g-image src="~/img/04_Library/04_MSA Outer 아키텍처/03_Container Management/image1.png"></g-image><br>
        <mark-down class="content">

이 방법은 물리적 또는 가상의 호스트 하나에 여러 개의 서비스를 배포하는 패턴입니다. 각 서비스 인스턴스는 하나의 프로세스로서 같은 호스트의 OS, WAS, F/W자원을 공유합니다. 예를 들어 여러 개의 웹 어플리케이션은 Apache Tomcat 과 같은 WAS서버와 JVM을 공유할 수 있으며, 자바 어플리케이션의 경우, JAR나 WAR 파일을 복사하는 방식으로 쉽고 빠르게 배포 할 수 있습니다.

하지만 각 서비스 인스턴스는 프로세스로 분리되어있다 하더라도 완전히 분리시킬 수는 없습니다. 각 서비스 별로 자원을 제한할 수 없기 때문에 특정 서비스가 CPU나 메모리 등 자원을 많이 소비한다면 다른 서비스에 영향을 주게 됩니다.

운영 측면에서는 하나의 운영팀이 서버를 관리하기 때문에 각 서비스 별로 다른 배포 방법을 모두 알고 있어야 하며, 이러한 복잡함 때문에 서비스 배포 중에 에러가 발생할 가능성이 높습니다.

#### **\[호스트마다 서비스 하나씩 구성\]**

**1.  가상머신 기반 구성**


</mark-down>
        <g-image src="~/img/04_Library/04_MSA Outer 아키텍처/03_Container Management/image2.png"></g-image><br>
        <mark-down class="content">

이 방식에서 각 서비스는 VM Image로 패키징되고 이 VM 이미지를 이용해서 VM 상에서 동작하는 서비스 인스턴스를 구성합니다.

예를 들어 AMI(Amazon Machine Image)를 이용해 서비스 인스턴스가 실행되는 EC2 인스턴스를 생성하는 방식입니다.

각 서비스들은 Jenkins와 같은 CI 서버에서 빌드과정에 이미지를 패키징하는 과정을 포함시켜서 서비스를 EC2 이미지로 패키징 하여 서비스를 배포 할 수 있습니다. 호스트에 여러 서비스를 배포하는 방식과 달리 각 서비스는 호스트 별로 나뉘어져 캡술화되어 있고, 자원을 따로 쓰기 때문에 한 서비스가 자원을 많이 먹어도 다른 서비스가 영향을 받지 않습니다.

그리고 이를 클라우드 환경에서 구성할 경우, 클라우드 벤더에서 제공하는 로드밸런싱, 오토스케일링 등의 기능을 쉽게 적용하여 사용 할 수 있습니다. 또한 VM 이미지를 이용해서 블랙박스처럼 배포하기 때문에 훨씬 더 간단하고 안정적으로 배포할 수 있습니다. 하지만 VM 은 운영체제를 포함하고 있고 이 때문에 이미지 크기도 커지고 이를 실행하는 시간이 많이 소요됩니다.

이에 따라 오토스케일링 시 시간도 더 소요되고 자원 활용의 효율성도 떨어집니다.

**2.  컨테이너 기반 구성**

</mark-down>
        <g-image src="~/img/04_Library/04_MSA Outer 아키텍처/03_Container Management/image3.png"></g-image><br>
        <mark-down class="content" source="
이 방식은 VM 대신 각 서비스를 컨테이너에 올리는 방식입니다. 컨테이너는 운영체제 수준 가상화 방식으로 운영체제 커널을 공유합니다. 따라서 각자 OS를 가지고 있는 VM과 달리 하나의 OS에 여러 컨테이너가 올라가게 되므로 크기도 작고 리소스를 훨씬 적게 사용합니다.

컨테이너는 프로세스를 묶어서 샌드박스 형태로 제공하고 각자의 파일 시스템과 네트워크 포트를 가지고 있습니다. 컨테이너 별로 메모리와 CPU등의 리소스를 제한할 수 있습니다.

컨테이너는 대표적으로 Docker를 사용합니다. 서비스를 컨테이너 이미지로 패키징해서 하나의 호스트안에 여러 개의 컨테이너를 실행 할 수 있습니다.

컨테이너를 사용하면 VM의 장점을 활용하면서 단점을 보완할 수 있습니다. VM에 비해서 빠르고 경량화된 기술로 컨테이너 이미지는 매우 빠르게 빌드되고 부팅 없이 빠르게 실행됩니다. 하지만 OS 커널을 공유하기 떄문에 안전한지 않은 단점이 있습니다.

그럼에도 불구하고 컨테이너 기반의 구성 방식은 작은 서비스를 많이 사용하고 자주 업데이트가 일어나는 마이크로서비스의 서비스 운영에 최적의 런타임 환경을 제공합니다.


아래 그림은 호스트 기반 방식과 컨테이너 기반 방식의 주요 컴퍼넌트들의 매핑표입니다.


| 호스트 기반 구성              | 컨테이너 기반 구성                |
| ---------------------- | ------------------------- |
| Virtual Machines       | Containers                |
| Data Center            | Orchestrated Environments |
| Hardware Rudundancy    | Design for Failure        |
| Server                 | Service                   |
| IP Addresses, DNS      | Service Discovery         |
| Server Monitoring      | Service Monitoring        |
| Monolithic Application | Microservices             |
| TCP/IP                 | gRPC, REST, DataPack      |



### **Container Management**

인프라의 다른 구성요소와 마찬가지로 컨테이너는 관리되고 통제되어야 합니다. 한 개의 컨테이너를 관리하는 것은 쉽지만 엔터프라이즈 수준의 컨테이너 관리 및 운영을 위해서는 컨테이너 오케스트레이션 기술이 필요합니다.

컨테이너 오케스트레이션에는 오픈소스로Docker Swarm, Apache Mesos, 쿠버네티스 등이 있으며, 클라우드 벤더 제품으로는AWS의 자체 컨테이너 오케스트레이션 ECS가 있으며, 쿠버네티스 기반의 컨테이너 오케스트레이션 도구로 EKS 역시 지원합니다.

클라우드 오케스트레이션 도구들은 아래와 같은 기능을 공통적으로 제공합니다.

**1. 스케줄링**

> 컨테이너 클러스터 내부에서 컨테이너를 프로비저닝 할 수 있습니다.

**2. 구성 스크립팅**

> 특정 어플리케이션 구성정보를 사전에 YAML, JSON으로 스크립팅 하여 이에 대한 정보를 기반으로 컨테이너를 로드할 수 있습니다.

**3. 모니터링**

> 컨테이너의 상태를 모니터링하여, 컨테이너가 다운되는 경우 새로운 컨테이너를 스핀업 할 수 있습니다.

**4. 업그레이드와 롤백**

> 새 버전의 컨테이너 또는 컨테이너 내부에서 구동하는 어플리케이션을 배포할 때, 컨테이너 오케스트레이션은 컨테이너 클러스터 전체를 대상으로 자동으로 업데이트 할 수 있습니다. 또한 롤백처리 도 가능합니다.

**5. 서비스 디스커버리, 로드밸런싱**

> 특정 컨테이너가 어느 호스트에서 실행되는지 찾을 수 있으며, 특정 컨테이너에만 부하가 집중되는 것을 방지하기 위한 로드밸런싱 기능이 있습니다.

**6. 컨테이너 오토스케일링**

> 인프라 전반에 에플리케이션 로드를 고르게 분산시키기 위해 자동으로 컨테이너 확장 및 제거
>
>컨테이너 오케스트레이션 도구 툴에 따라 차이점은 있지만, 일반적으로 YAML 또는 JSON 파일을 통해 컨테이너 기반으로 실행할 어플리케이션의 스펙을 작성합니다.


### **Container Management 종류**

대부분의 클라우드 제공 업체(CSP)는 Lock-In된 Managed Container 서비스를 제공하고 일부는 여러 오케스트레이터를 제공하고 있으며 그 종류는 다음과 같습니다.

<a href='https://mesosphere.com' target='_blank' class='text-path'>Mesosphere DC/OS</a>

>Mesosphere는 오픈소스 클러스터 관리 플랫폼인 Apache Mesos를 기반으로 하는 컨테이너 및 데이터 서비스 오케스트레이션을 위한 하이브리드 클라우드 플랫폼인 Mesosphere Enterprise DC/OS를 제공합니다.
>
>Mesosphere DC/OS는 분산 시스템 커널 (Apache Mesos), 컨테이너 오케스트레이션 엔진 (Marathon and Kubernetes) 및 프레임 워크(Spark 및 Kafka 등)와 같은 많은 구성 요소로 이루어져 있습니다.
>
>Mesosphere의 강점 중 하나는 큰 데이터, 기계 학습, 레거시 작업 부하 및 컨테이너에서 광범위한 유형의 작업을 지원할 수 있어서 다른 컨테이너 전문 제품과 달리 Mesosphere는 보다 통일된 관리기능을 제공 할 수 있다는 장점이 있습니다.

<a href='https://pivotal.io/kr/platform/pivotal-container-service' target='_blank' class='text-path'>PKS</a>

>PKS(Pivotal Container Service)는 Pivotal Software와 VMware가 Google과 공동으로 VMware vSphere 또는 GCP에서 Kubernetes 클러스터를 제공, 운영 및 관리하기 위해 개발한 솔루션으로 클라우드기반 컴퓨팅 플랫폼인 Pivotal Cloud Foundry (PCF) 제품군 내의 독립 실행형 제품입니다.
>
>PKS 이외에 PCF에는 기존 PaaS용 Pivotal Application Service (PAS), PaaS용 기능, Pivotal Services Marketplace 및 BOSH라는 구성 자동화 도구가 포함되고, PAS에는 또한 Diego and Garden에 기반한 컨테이너 관리 시스템이 포함되어 있습니다.
>
>Pivotal Software와 VMware는 PKS를 엔터프라이즈 고객에게 제공하여 새로운 컨테이너 기반 응용 프로그램 및 마이크로 서비스 요구 사항을 해결하고 기존 VMware 인프라스트럭처 위에 컨테이너 관리 솔루션을 제공합니다.
>
>Pivotal Software는 전통적인 PaaS 및 PaaS 기능과 컨테이너 관리를 포함한 보다 포괄적인 클라우드 기반 응용 프로그램 플랫폼을 제공함으로써 다른 회사와 차별화하며, PAS와 PKS는 현재 동일한 기초 및 분산 시스템 구성 도구인 BOSH를 사용하지만 별도의 제품 구성 요소입니다.

<a href='https://www.openshift.com/' target='_blank' class='text-path'>OpenShift</a>

>Red Hat은 2011년에 OpenShift 제품 라인을 발표했으며, 2015 년에 플랫폼을 재설계하고 자체 개발한 컨테이너 엔진 일정 및 오케스트레이션 프레임워크를 Docker 형식 컨테이너 및 Kubernetes 컨테이너 오케스트레이션으로 대체했습니다.
>
>Red Hat OpenShift는 강력한 컨테이너 클러스터 관리 및 오케스트레이션 시스템인 Docker와 Kubernetes와 같은 기술을 기본적으로 통합하고 이를 Red Hat Enterprise Linux에서 엔터프라이즈 기반에 결합하는 전체 컨테이너 애플리케이션 플랫폼입니다.
>
>Red Hat OpenShift는 개발 및 운영팀의 역량을 강화하는 데 필요한 아키텍처, 프로세스, 플랫폼, 서비스를 통합하여 환경 전체에 안정적으로 배포되며 인프라 비용을 절감하는 동시에 고객의 요구를 충족할 수 있습니다.
>
<a href='https://cloud.google.com/kubernetes-engine/' target='_blank' class='text-path'>GKE</a>

>GKE는 애플리케이션 배포를 위한 관리형 환경으로 이를 통해서 개발자 생산성, 리소스 효율성, 자동화된 작업, 오픈소스 유연성을 얻을 수 있으며, 특히 Google은 15년 이상 Container로 운영 환경 작업을 실행해 왔으며 이러한 작업으로부터 얻은 노하우의 정수가 GKE의 기반을 이루고 있습니다.
>
>GKE가 Kubernetes 환경을 모두 Google Cloud에서 관리형으로 제공하는 것은 아니고, 운영환경에서 변화의 영역이 적은 Master Node에 대한 완전 관리 서비스를 제공하며, 실제 서비스를 수행하는 Container의 집합인 Pod가 올라가서 운영되는 Worker Node는 Semi-Managed 형으로 설정만 하면 기본 Kubernetes에 필요한 컴포넌트를 준비해 둔 GCE(VM)을 제공하여 개발자가 직접 Pod를 올리거나 작업을 수행할 수 있도록 지원합니다.


### **Container Management 고려사항**

컨테이너가 10개이고 응용 프로그램이 4개 있는 경우 컨테이너의 배치 및 유지 관리를 관리하는 것이 어렵지 않지만, 반면에 1000개의 컨테이너와 400개의 서비스가 있으면 관리가 매우 복잡해집니다.

대규모로 운영하는 경우 컨테이너의 배치, 관리, 확장, 네트워킹 및 컨테이너의 가용성을 자동화하는 컨테이너 오케스트레이션 도구 사용이 필수 적입니다.

컨테이너 오케스트레이션 도구로 Kubernetes, Openshift Origin, DC/OS, Docker Swarm, Rancher등의 좋은 컨테이너 오케스트레이션 도구들이 있습니다. AWS는 자체 컨테이넌 오케스트레이션 도구로 ECS를 제공하며, Kubernetes 기반의 EKS 역시 제공합니다.
        ">
        </mark-down>
    </div>
</template>


<script>
    // @group 03_04_04
    export default {
        name:'ArchitectureThree',
        data() {
            return {}
        },
        props: {
            "Container Management": {
                type: String
            },
        },

    }
</script>