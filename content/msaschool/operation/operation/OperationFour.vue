<template>
    <div>
        <mark-down class="content">
## Kubernetes 아키텍처

- 하나 이상의 Master nodes
- 하나 이상의 Worker nodes
- etcd 와 같은 distributed key-value store

        </mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/04/image1.png"
        ></g-image>
        <mark-down class="content">
### Master Node
- Master node는 Kubernetes 클러스터를 관리하며, 모든 관리자 업무의 시작점
- 다양한 모듈이 확장성을 고려하여 기능별로 분리
- CLI, GUI (Dashboard), APIs 등으로 Master node에 접근 가능


#### Master Node 구성요소
- API server
- Scheduler
- Controller manager
- Etcd (distributed key-value store)
- 장애 대비하여, 하나 이상의 Master node를 한  클러스터에 구성하여 안정성을 높입니다.
- 하나 이상의 Master node 가 존재할 경우, HA (High Availability)모드로 그 중 하나가 리더(leader)로써 작동하고 나머지는 팔로워(followers)로 운영합니다.
</mark-down>
        <g-image style="max-width: 50%"
            src="~/img/03_Bizdevops/06_운영/04/image2.png"
        ></g-image>
        <mark-down class="content">
#### 1. API Server
- 원하는 상태를 Key-Value 저장소에 저장하고, 저장된 상태를 조회하는 작업 수행합니다.
- 모든 administrative tasks는 master node에 있는 API server를 통해 수행합니다.
- 사용자/운영자가 보낸 요청은 API server를 통해 처리되고, 실행 결과는 분산 키-값 저장소(Distributed key-value store)에 저장합니다.
#### 2. Scheduler
- Pod를 여러가지 조건(필요한 자원, 라벨)에 따라 적절한 노드에 할당해 주는 모듈
- Scheduler가 개별 worker node에게 업무를 분담합니다.
- Scheduler는 각 worker node의 리소스 사용 정보를 가집니다.
- “disk==ssd”  와 같은 label이 설정된 worker node에 업무 부여하는 등 사용자/운영자가 설정한 제약에 대해 인지하고 있습니다.
- Scheduler는 Pods 와 Services 단위로 업무 수행합니다.
#### 3. Controller Manager
- Kubernetes Cluster에 있는 모든 오브젝트의 상태를 관리하는 모듈
- Controller manager는 Kubernetes Cluster의 상태를 조절하는 non-terminating control loops 관리합니다.
- 각각의 control loops는 자신이 관리하는 객체의 desired state를 알고 그 객체들의 현 상태를 API 서버를 통해서 모니터링합니다.
- 제어 루프에서 관리하는 객체의 현 상태가 원하는 상태와 다르면, 제어 루프는 수정 단계를 수행하여 현 상태와 원하는 상태를 일치시키는 작업 수행합니다.
- Kubernetes release 1.6, kube-controller-manager와 cloud-controller-manager로 세분
- Cloud-controller-manager is structured using a plugin mechanism that allows different cloud providers to integrate their platforms with Kubernetes.
#### 4. Etcd
- RAFT* 알고리즘을 이용한 클러스터 상태를 저장하는 key-value 저장소
- 단순 R/W 기능외, Watch기능이 있어 상태가 변경되면 트리거 로직 실행 가능합니다.
- 클러스터의 모든 설정, 상태가 저장되므로 Cluster Backup / Restore 유리합니다.
- Etcd는 오직 API 서버와 통신하고, 다른 모듈은 API서버를 통해 etcd에 접근
#### 4. Etcd - State 관리
- Kubernetes는 etcd를 사용해 클러스터의 상태를 저장합니다.
- etcd는 ‘Raft Consensus Algorithm’을 기반으로 하는 distributed key-value store
- Raft는 장치의 집합으로써 몇몇 구성원에 장애가 발생하여도 살아남아 일관적인 집단으로 작동할 수 있도록 해 줍니다.
- etcd는 Go 프로그래밍 언어로 작성
- Kubernetes에서는 클러스터의 상태를 저장하는 기능 말고도 Subnets, ConfigMaps, Secrets 등을 저장하기도 합니다.
- 그룹의 노드 중 하나는 Master로 작동을 하고, 나머지는 Follower로 작동
- 모든 노드는 Master 후보
        </mark-down>
        <g-image style="max-width: 40%"
            src="~/img/03_Bizdevops/06_운영/04/image3.png"
        ></g-image>
        <mark-down class="content">
### Worker Node
- 마스터 서버와 통신하면서 필요한 Pod를 생성하고 네트워크와 볼륨을 설정합니다.
- Worker node는 Master node에 의해 관리되며, Pod를 이용 어플리케이션을 실행합니다.
- Pod는 Kubernetes의 스케줄링 단위
- 하나 이상의 컨테이너의 논리적 집합이며, 항상 같이 스케줄링 됩니다.


#### Worker Node 구성요소
- Container runtime
- kubelet
- kube-proxy
    </mark-down>
        <g-image style="max-width: 50%"
            src="~/img/03_Bizdevops/06_운영/04/image4.png"
        ></g-image>
        <mark-down class="content">
#### 1. Container Runtime
- 컨테이너의 lifecycle을 관리/실행 하기위한 Worker node상의 Container runtime
    - (runtimes: containerd, cri-o, RKT, docker)
- Kubernetes의 default Container Runtime은 docker를 사용합니다.
- CR Docker는 플랫폼이며, 내부적으로 containerd를 Container runtime으로 사용하고 있습니다.

#### 2. Kubelet
- Node에 할당된 Pod의 생명 주기를 관리
- kubelet은 master node와 통신하기 위해 worker node에서 작동하는 에이전트
- Pod 설정을 수신하고 해당 Pod와 관련된 컨테이너를 실행합니다.
- 항상 컨테이너가 정상 작동하는지 확인합니다.
- Kubelet은 Container Runtime Interface(CRI)를 이용하여 컨테이너 런타임에 연결합니다.
    - CRI는 protocol buffers, gRPC API, and libraries 등을 포함합니다.
- Kubelet이 명령을 받으면 Docker runtime을 통해 Container를 생성하거나 삭제합니다.
- Docker이외의 여러 컨테이너 기술이 나오면서Kubelet과 Container runtime 사이에 표준 인터페이스가 제정되었는데, 이를 CRI Shim이라 합니다.
- 새로운 Container runtime은 CRI Shim스펙에 맞춰 CRI 컴포넌트를 구현합니다.
    > * gRPC : Google에서 처음 개발한 공개 원격 프로시져 호출(RPC) 시스템, 인터페이스 설명언어로 프로토콜 버퍼 사용합니다.
    > * Protobuf : protocol buffer 줄임말로 크기를 줄인 직렬화 데이터 구조(이진 메시지 형식)

    </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/04/image5.png"
        ></g-image>
        <mark-down class="content">
#### 2. Kubelet : CRI Shims
- Docker shim
- Docker shim은 Worker node에 설치된 Docker를 이용하여 컨테이너를 생성
- 내부적으로는 Docker는 containerd를 이용해 컨테이너를 관리

    </mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/04/image6.png"
        ></g-image>
        <mark-down class="content">
#### 2. Kubelet : CRI-O
- Container Runtime 표준화
- 각 Container마다 CRI Shim을 개발해야 하는 비용적 이슈에서 CRI-O 등장 
- 레드햇이 개발한 Kubernetes용 OCI (Open Container Initiative) 컨테이너 런타임
- 컨테이너 런타임을 제어하는 오케스트레이션의 표준은 CNCF( Cloud Native Computing Foundation) 이며 구현체는  “kubernetes”

</mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/04/image7.png"
        ></g-image>
        <mark-down class="content">
#### 3. Kube-proxy
- Kubelet이 Pod를 관리한다면, Proxy는 Pod로 연결되는 네트워크를 관리
- 초기, kube-proxy가 프록시 서버로 동작하면서 실제 요청을 받아 각 Pod로 포워딩
- 성능 이슈로 iptables를 설정하는 방식으로 변경, 최근엔 IPVS 지원 시작
- 애플리케이션에 액세스하기 위해 포드에 직접 연결하는 대신 "서비스"라는 논리적 구성을 연결 엔드포인트로 사용
- Service 그룹과 관련된 Pod에 접속 시 자동으로 Load Balancing 됩니다.
- kube-proxy는 Network proxy로서 각각의 Worker node에서 작동하며, 각각의 Service endpoint를 생성/ 삭제하기 위해 API server를 지속적으로 Listening
- kube-proxy는 각 Service endpoint에 접근할 수 있는 경로 설정

### Pod Creation Process (1/2)
    </mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/04/image8.png"
        ></g-image>
        <mark-down class="content">
### Pod Creation Process (2/2)
</mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/04/image9.png"
        ></g-image>
        <mark-down class="content">


















        </mark-down>
    </div>
</template>


<script>
        // @group 02_06_05
export default {
    name: "OperationFour",
    props: {
        "Kubernetes 아키텍처": {
            type: String
        }
    }
};
</script>