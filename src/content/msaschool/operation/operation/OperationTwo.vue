<template>
    <div>
        <div class="Practice-card-box">
                <VueSubLayoutCard lab="ops-kubernetes-professional"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## Kubernetes 오브젝트 모델
- Kubernetes Core Concept : "Desired State"
    - Kubernetes는 Current State을 모니터링하면서, Desired State를 유지하려는 습성을 가지고 있습니다.
    - 직접적인 동작을 명령하지 않고, 원하는 상태를 선언(Not Imperative, But Declarative)
        - Imperative – "nginx 컨테이너를 3개 실행해주세요, 그리고 80포트로 오픈해주세요"
        - Declarative – "80포트를 오픈한 채로, nginx 컨테이너를 3개 유지해주세요"
- Kubernetes Object, Controller and Kubectl
    - Object : K8s의 상태를 나타내는 엔티티로 K8s API의 Endpoint
        - 유형 - Pod, Service, Volume, Namespace 등이 있습니다.
        - Spec과 Status 필드를 가짐 - Spec(Desired State), Status(Current State)

    - Controller : Object의 Status를 갱신하고, Object를 Spec에 정의된 상태로 지속적으로 변화시켜 주는 주체입니다.
        - 유형 – ReplicaSet, Deployment, StatefulSets, DaemonSet, Cronjob 등

    - Kubectl : Command CLI에서 Object와 Controller를 제어하는 K8s Client
        - 발음하기 – "큐브시티엘", "쿠베시티엘"

### Pod ; Kubernetes 최소 배포 단위
  - Pod : 미국식 [pɑːd], 영국식 [pɒd]
      - “물고기, 고래” 작은 떼 (Docker의 심볼이 고래 모양에서 유래)
      - 발음하기 : “팟”, “파드“, “포드”
        </mark-down>
       
        <g-image style="max-width: 80%"
            src="~/img/03_Bizdevops/06_운영/02/image1.png"
        ></g-image>
<mark-down class="content">
### Kubernetes Object Model
  - apiVersion : 해당 Object description 을 해석할 수 있는 API server 의 버전
  - kind : 오브젝트의 타입 – 예제는 Deployment 
  - metadata : 객체의 기본 정보. 예) 이름 
  - spec (spec and spec.template.spec) : 원하는 ”Desired State” 의 세부 내역입니다. 
    예제에서는 3개의 replica를 template 내의 pod 정의대로 찍어내어 유지하라는 desired state 설정입니다.
  - spec.template.spec : defines the desired state of the Pod. The example Pod would be created using nginx:1.7.9.
  - Once the object is created, the Kubernetes system attaches the status field to the object
      </mark-down>
        <g-image style="max-width: 30%"  
            src="~/img/03_Bizdevops/06_운영/02/image2.png"
        ></g-image>
        <mark-down class="content">
#### Declaration based configuration
        </mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image3.png"
        ></g-image>
        <mark-down class="content">
### Labels
  - Labels 은 객체 식별 정보로서 Kubernetes 객체라면 모두 붙일 수 있습니다.
  - Label들은 요구사항에 맞춰 개체의 하위 집합을 구성하고 선택하는데 사용됩니다.
  - Label들은 객체에 고유성을 제공하지 않아, 여러 객체들은 같은 label을 가질 수 있습니다.
#### Label Selectors
  - Label Selectors들은 객체들의 집합을 선택하며, kubernetes는 2가지 종류를 지원합니다.
      - Equality-Based Selectors 
          Uses the =, ==, != 연산자를 이용하여 Label key와 value 값을 기반으로 객체들을 필터링 할 수 있습니다. 
      - Set-Based Selectors
          in, notin, exist 연산자를 사용하며, value 값들을 기반으로 객체들을 선택할 수 있습니다. 
#### Annotations
  - Label 처럼 식별 정보는 아닌 임의의 비 식별 메타데이터를 객체에 key-value 형태로 추가합니다.
      ```
      "annotations": {
        "key1" : "value1",
        "key2" : "value2"
      }
      ```

  - 주로, 히스토리, 스케줄 정책, 부가 정보 등을 기술
  - 배포 주석을 추가해 서비스를 Deploy하고, 이전 서비스로 롤백 시, 해당 정보를 활용해 롤백해줍니다.
      ```
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nginx-deployment
        labels:
          app: nginx
        annotataions:
          kubernetes.io/change-cause=nginx:1.7.9
      spec:
        replicas: 3
        selector:
          ………………………..
      ```

#### One-dash, Double-dash
  - Generally, in Command Options
      - Some have a long form without a short form ( -- author, --block-size)
      - Some have a short form without a long form (-c, -f, -g)
      - Some have both a long form and a short form (-A / --almost-all, -b / --escape)
  - In Pod Selector,  short form ( -l ) equals long form( --selector )

#### Replication Controllers
  - Master node의 Controller Manager 중 하나입니다.
  - Pod의 복제품이 주어진 개수(Desired State)만큼 작동하고 있는지 확인하고 개수를 조절합니다.
  - Replication Controller는 Pod를 생성하고 관리합니다.
      > 일반적으로 Pod는 자기 복구가 불가능 하기에 단독으로 배포를 하지 않습니다.

### ReplicaSets
  - ReplicaSet(rs)은 Replication Controller의 업그레이드 버전입니다.
  - ReplicaSet은 equal 및 set 기반 Selector를 모두 지원하는 반면,
    Replication Controller는 equal기반 Selector만 지원합니다.
</mark-down>
        <g-image style="max-width: 50%" 
            src="~/img/03_Bizdevops/06_운영/02/image4.png"
        ></g-image>
    <mark-down class="content">
  - 지정된 수의 Pod (Desired State)가 항상 실행되도록 보장합니다.
  - ReplicaSets은 단독으로도 사용 가능하지만, 주로 Pod Orchestration에 사용(Pod creation, deletion, updates) 
  - Deployment가 ReplicaSets을 자동 생성하기 때문에 사용자는 관리에 신경 쓰지 않아도 됩니다.
    </mark-down>
        <g-image style="max-width: 50%" 
            src="~/img/03_Bizdevops/06_운영/02/image5.png"
        ></g-image>
    <mark-down class="content">
### Deployments
  - Deployment 객체는 Pods와 ReplicaSets에 대한 선언적 업데이트를 제공합니다.
  - Deployment Controller는 Master node 컨트롤 관리자의 일부로 Desired state가 항상 만족이 되는지 확인합니다.
  - Deployment 가 ReplicaSet을 만들고 ReplicaSet은 그 뒤에 주어진 조건만큼의 Pod들을 생성합니다.
</mark-down>
        <g-image style="max-width: 50%" 
            src="~/img/03_Bizdevops/06_운영/02/image6.png"
        ></g-image>
    <mark-down class="content">
- Deployment의 Pod template이 바뀌게 되면, 새로운 ReplicaSet이 생성되는데, 이를 Deployment rollout이라고 합니다.
- Rollout은 Pod template에 변동이 생겼을 경우에만 동작하며, Scaling등의 작업은 ReplicaSet을 새로 생성하지 않습니다.
    </mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image7.png"
        ></g-image>
    <mark-down class="content">
- 새로운 ReplicaSet이 준비되면 Deployment는 새로운 ReplicaSet을 바라봅니다.
- Deployment들은 Deployment recording등의 rollback 기능을 제공하며, 문제가 발생했을 경우, 이전 단계로 돌릴 수 있습니다.
</mark-down>
        <g-image style="max-width: 50%" 
            src="~/img/03_Bizdevops/06_운영/02/image8.png"
        ></g-image>
    <mark-down class="content">
#### Deployment 생성
  - 설정 파일을 생성
      - nano nginx-deployment.yaml
  - 파일을 기반을 배포
      - kubectl create -f nginx-deployment.yaml
  - 생성된 deployment 확인
      - kubectl describe deployment nginx-deployment

#### Scaling Deployments
  - Deployment의 replica의 개수를 확인
      - kubectl get pods
  - Deployment의 이름을 복사
      - kubectl get deployments
  - 해당 Deployment의 scale 조정
      - kubectl scale deployments [deployment 이름] --replicas=3
  - 변경을 확인 
      - kubectl get pods

#### Deployments 의 변경
  - Deployment 파일을 변경
      - kubectl get deployments 
      - nano nginx-deployment.yaml
          - ( spec 아래 항목에 replicas: 5 속성 추가; 있으면 수정)
  - 변경한 파일을 적용
      - kubectl apply -f nginx-deployment.yaml
  - 변경 내용을 확인
      - kubectl get pods
  - 설정파일에 추가된 replicas 속성을 삭제 후 다시 적용
      - Nano nginx-deployment.yaml (replicas) 
      - kubectl apply -f nginx-deployment.yaml
      - kubectl delete pods --all
      - kubectl get pods

#### Rolling update
  - 작동중인 pod와 deployments 확인
      - kubectl get pods 
      - kubectl get deployments

  - 새로운 버전의 deployments 배포 및 배포 상태 확인
      - kubectl apply -f nginx-deployment.yaml
      - kubectl set image deployment/nginx-deployment nginx=nginx:1.9.1
      - kubectl rollout status deployment/nginx-deployment

  - 변경 확인
      - kubectl get deployments 
      - kubectl get pods 
      - kubectl describe pods [pod 이름]

  - Pod에 접속하여 확인
      - kubectl exec -it podname -- /bin/bash 
      - apt-get update 
      - apt-get install curl 
      - curl localhost
#### Rollback
  - 현재 실행중인 객체들을 확인
      - kubectl get pods
      - kubectl get deployments -o wide     	
          > deployment에 적용된 Image:버전 추가 표시

  - 객체를 롤백 처리
      - kubectl rollout undo deployment/nginx-deployment

  - 진행을 확인
      - kubectl get deployments -o wide

#### Namespaces
  - Kubernetes는 동일 물리 클러스터를 기반으로 하는 복수의 가상 클러스터를 지원하는데 이들 가상 클러스터를  Namespace라고 합니다.
  - Namespace를 활용하면, 팀이나 프로젝트 단위로 클러스터 파티션을 나눌 수 있습니다.
  - Namespace 내에 생성된 자원/객체는 고유하나, Namespace사이에는 중복이 발생할 수 있습니다.
  - Namespaces Object 조회
      - Kubernetes는 처음에 3개의 초기 네임스페이스를 가집니다.
      ```
      $ kubectl get namespaces
      NAME            STATUS       AGE
      default         Active       11h
      kube-public     Active       11h
      kube-system     Active       11h
      ```
      - default  : 다른 namespace를 갖는 다른 객체들을 가지고 있습니다.
      - kube-public 은 클러스터 bootstrapping 같은 모든 유저가 사용가능한 특별한 namespace 입니다.
      - kube-system: Kubernetes system에 의해서 생성된 객체를 가지고 있습니다.
      - Resource Quotas를 사용하여 namespace 내에 존재하는 자원들을 나눌 수 있습니다.

#### Pod Access Issues
  - 어플리케이션에 접근하기 위해서는, 사용자가 Pod에 접근해야 합니다.
  - Pod들은 언제든지 소멸 가능하기에 IP주소는 고정되어 있지 않습니다.
  - 사용자가 직접 IP주소로 Pod에 연결되어 있을 때, Pod가 죽어서 새로 만들어지면 접속할 방법이 없습니다.
  - 이 상황을 극복하기 위해서 추상화를 통해 Service라는 Pod들의 논리적 집단을 만들어 규칙을 설정하고 사용자들은 여기에 접속을 합니다.
</mark-down>
        <g-image style="max-width: 90%" 
            src="~/img/03_Bizdevops/06_운영/02/image9.png"
        ></g-image>
    <mark-down class="content">


### Services
  - Selector를 사용하여 Pod를 논리적 그룹으로 나눌 수 있습니다.
  - 각 논리적 그룹에 대해서 Service name이라는 이름을 부여할 수 있습니다.
  - 사용자는 Service IP주소를 통해 Pod에  접속하게 됩니다.
  - 각 Service에 부여된 IP는 클러스터 IP 라고도 부릅니다.
  - Service는 각 Pod에 대해 Load balancing을 자동으로 수행
</mark-down>
        <g-image style="max-width: 70%" 
            src="~/img/03_Bizdevops/06_운영/02/image10.png"
        ></g-image>
    <mark-down class="content">

#### kube-proxy
  - 모든 Worker node들은 kube-proxy라는 데몬을 실행하며,
    이 데몬은 Service 및 End-point 생성 /삭제를 위해 마스터 노드의 API 서버를 모니터링합니다.
  - 각 node에 있는 모든 새로운 Service에 대해서 kube-proxy는 Iptable 규칙을 구성하여,
    ClusterIP의 트래픽을 캡처하고 이를 End-point로 보냅니다.
  - Service가 제거되면, kube-proxy는 노드상의 Iptables 규칙도 지웁니다.
    </mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image11.png"
        ></g-image>
    <mark-down class="content">

#### Service Discovery
  - Service는 클라이언트가 애플리케이션에 접근하는 Kubernetes의 채널로 런타임시, 이를 검색할 수 있는 방법이 필요합니다.
  - DNS를 이용하는 방법입니다.
      > 서비스는 생성되면, [서비스 명].[네임스페이스명].svc.cluster.local이라는 DNS명으로 쿠버네티스 내부 DNS에 등록되고, 
        쿠버네티스 내부 클러스터에서는 이 DNS명으로 접근 가능한데,
        이 때 DNS에서 리턴해 주는 IP는 외부 IP(External IP)가 아니라 Cluster IP(내부 IP) 입니다.
  
  - External IP를 명시적으로 지정하는 방법입니다.
      > 외부 IP는 Service의 Spec 부분에서 externalIPs 항목의 Value로 기술합니다.

#### ServiceType
  - Service를 정의할 때 Access Scope를 따로 정할 수 있습니다.
      - 클러스터 내에서만 접근이 가능합니까?
      - 클러스터 내와 외부에서 접근이 가능합니까?
      - 클러스터 밖의 리소스에 대한 Map을 가지고 있습니까?

  - Service 생성 시, IP주소 할당 방식과 서비스 연계 등에 따라 4가지로 구분합니다.
      - ClusterIP
      - NodePort
      - LoadBalancer
      - ExternalName

#### ServiceType : ClusterIP
  - 디폴트 설정으로 서비스에 클러스터 ip를 할당 
  - 쿠버네티스 클러스터 내에서만 이 서비스에 접근 가능
  - 외부에서는 외부 IP를 할당 받지 못했기 때문에 접근이 불가능  
  
#### ServiceType : NodePort
  - 고정 포트(NodePort)로 각 노드의 IP에 서비스를 노출
  - Cluster IP 뿐만 아니라, 노드의 IP와 포트를 통해서도 &#40;&#60; NodeIP &#62;:&#60; NodePort &#62;&#41; 접근 가능
  </mark-down>
        <g-image style="max-width: 70%" 
            src="~/img/03_Bizdevops/06_운영/02/image12.png"
        ></g-image>
    <mark-down class="content">
```
apiVersion: v1
kind: Service
metadata:
  name: hello-node-svc
spec:
  selector:
    app: hello-node
  type: NodePort
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: 8080
      nodePort: 30036
```
</mark-down>
        <g-image style="max-width: 50%" 
            src="~/img/03_Bizdevops/06_운영/02/image13.png"
        ></g-image>
    <mark-down class="content">
#### ServiceType : LoadBalancer
  - 클라우드 밴더의 로드밸런싱 기능을 사용
      - NodePort와 ClusterIP Service들은 자동으로 생성되어 External Load Balancer가 해당 포트로 라우팅
      - Service들은 각 Worker node에서 Static port로 노출
  - LoadBalancer ServiceType은 기본 인프라가 Load balancer의 자동 생성을 제공하고, Kubernetes를 지원 할 경우에만 작동
      > Ex) Azure, Google Cloud Platform, AWS 
</mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image14.png"
        ></g-image>
    <mark-down class="content">
#### ServiceType: ExternalName
  - 외부 서비스를 쿠버네티스 내부에서 호출할 때 사용
  - 쿠버네티스 클러스터내의 Pod들은 클러스터 IP를 가지고 있기 때문에 클러스터 IP 대역 밖의 서비스를 호출하고자 하면,
    NAT 설정등 복잡한 설정이 필요합니다.
  - Azure, AWS 나 GCP와 같은 클라우드 환경에서 DBMS나, 또는 클라우드에서 제공되는 매지니드 서비스 (RDS, CloudSQL)등을 사용하고자 할 경우
      - 쿠버네티스 클러스터 외부이기에 호출이 어려운 경우가 있는데, 이를 쉽게 해결할 수 있는 방법이 ExternalName 타입입니다.

    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: my-service
      namespace: prod
    spec:
      type: ExternalName
      externalName: my.database.example.com
    ```
    - 서비스를 ExternalName 타입으로 설정하고, 주소를 my.database.example.com으로
      설정해주면 이 my-service는 들어오는 모든 요청을 my.database.example.com으로 포워딩 
    - 일종의 프록시와 같은 역할
    </mark-down>
        <g-image style="max-width: 25%" 
            src="~/img/03_Bizdevops/06_운영/02/image15.png"
        ></g-image>
    <mark-down class="content">
### Volumes
  - 쿠버네티스는 여러 호스트에 걸처 Stateless한 컨테이너를 마이크로서비스로 
    배포하는 것이 목표이기에 영속성 있는 저장장치(Persistent Volume)를 고려해야 합니다.
  - Volume은 Pod에 장착되어, 그 Pod에 있는 Container 간에 공유
</mark-down>
        <g-image style="max-width: 40%" 
            src="~/img/03_Bizdevops/06_운영/02/image16.png"
        ></g-image>
    <mark-down class="content">

#### Types of Volumes
  - Pod에 마운트된 디스크는 Volume Type에 따라 사용 유형이 정의
  - Volume Type 內 디스크의 크기, 내용 등의 속성 설정
  - Types of Volumes
</mark-down>
        <g-image style="max-width: 60%" 
            src="~/img/03_Bizdevops/06_운영/02/image17.png"
        ></g-image>
    <mark-down class="content"> 
#### Volumes : emptyDir
  ```
  apiVersion: v1
  kind: Pod
  metadata:
    name: shared-volumes
  spec:
    containers:
    - image: redis
      name: redis
      volumeMounts:
      - name: shared-storage
        mountPath: /data/shared
    - image: nginx
      name: nginx
      volumeMounts:
      - name: shared-storage
      mountPath: /data/shared
    volumes:
    - name: shared-storage
      emptyDir: {}
  ```
  - emptyDir의 생명주기는 컨테이너 단위가 아닌 Pod 단위로 Container 재기동에도 계속 사용 가능합니다.
  - 생성된 Pod 확인
  - 지정 컨테이너 접속 후, 파일 생성
      - kubectl exec -it shared-volumes --container redis -- /bin/bash
      - cd /data/shared
      - echo test… > test.txt

  - 다른 컨테이너로 접속 후, 파일 확인
      - kubectl exec -it shared-volumes --container nginx -- /bin/bash
      - cd /data/shared
      - ls
</mark-down>
        <g-image style="max-width: 90%" 
            src="~/img/03_Bizdevops/06_운영/02/image18.png"
        ></g-image>
    <mark-down class="content"> 
#### Volumes : hostPath
  ```
  apiVersion: v1
  kind: Pod
  metadata:
    name: hostpath
  spec:
    containers:
    - name: redis
      image: redis
      volumeMounts:
      - name: somepath
        mountPath: /data/shared
  volumes:
  - name : somepath
    hostPath:
      path: /tmp
      type: Directory
  ```
  - Node의 Local 디스크 경로를 Pod에 마운트
  - 같은 hostPath에 있는 볼륨은 여러 Pod사이에서 공유
  - Pod가 삭제되어도 hostPath에 있는 파일은 유지
  - Pod가 재기동 되어 다른 Node에서 기동될 경우, 새로운 Node의 hostPath를 사용
  - Node의 로그 파일을 읽는 로그 에이전트 컨테이너 등에 사용가능
  - Pod 생성 및 확인 (Pod 내, ls -al /data/shared) 
    </mark-down>
        <g-image style="max-width: 90%" 
            src="~/img/03_Bizdevops/06_운영/02/image19.png"
        ></g-image>
    <mark-down class="content"> 
#### Volumes example : gitRepo
  ```
  apiVersion: v1
  kind: Pod
  metadata:
    name: gitrepo-volume-pod
  spec:
    containers:
    - image: nginx:alpine
      name: web-server
      volumeMounts:
      - name: html
        mountPath: /usr/share/nginx/html
        readOnly: true
      ports:
      - containerPort: 80
        protocol: TCP
  volumes:
  - name: html
    gitRepo:
      repository: 
  https://github.com/luksa/kubia-website-example.git
      revision: master
      directory: .
  ```
  - Pod 생성시 지정된 Git 리파지토리의 특정 리비전을 Cloning하여 디스크 볼륨 생성
  - 물리적으로는 emptyDir이 생성되고 Git Clone 수행
  - HTML 같은 정적 파일 및 Nodejs 같은 스크립트 기반 코드 배포에 유용
</mark-down>
        <g-image style="max-width: 70%" 
            src="~/img/03_Bizdevops/06_운영/02/image20.png"
        ></g-image>
    <mark-down class="content"> 
#### PersistentVolume & PersistentVolumeClaim
  - 특정 IT 환경에서는 영속성 있는 대용량 스토리지는 관리자에 의해 관리
      - 쿠버네티스 클러스터를 사용하는 개발자로부터 볼륨 프로비저닝 역할을 분리하는 사상
  - 시스템 관리자가 실제 물리 디스크를 생성한 뒤, 이 디스크를 PersistentVolume 이라는 이름으로 Kubernetes에 등록
  - 개발자는 Pod 생성 시, 볼륨을 정의하고, 해당 볼륨의 정의 부분에 PVC(PersistentVolumeClaim)를 지정하여 관리자가 생성한 PV와 연결
</mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image21.png"
        ></g-image>
    <mark-down class="content"> 
#### StorageClass - Dynamic PV Provisioning
  - PV는 관리자에 의해 수동으로 생성될 수 있지만, 자동 생성도 가능(Dynamic Provisioning)
  - StorageClass(SC) Object
  - StorageClass 객체에 의해 PersistentVolumes 동적 제공 가능
      - StorageClass는 PersistentVolume를 만들기 위해 Cloud Provider별 CSI 인터페이스를 구현하여 제공
  - PersistentVolumes 스토리지 관리를 제공하는 Volume Types :
      - GCEPersistentDisk, AWSElasticBlockStore, AzureDisk, NFS, iSCSI
</mark-down>
        <g-image style="max-width: 90%" 
            src="~/img/03_Bizdevops/06_운영/02/image22.png"
        ></g-image>
    <mark-down class="content"> 
#### Azure StorageClass Object
  - Azurefile : 파일 스토리지, 여러 노드 및 Pod간 데이터 공유 가능 
  - Azurefile-premium : SSD 기반 고성능의 Low-Latency 디스크 지원
  - default : 블록 스토리지, 표준 SSD Azure 디스크를 프로비저닝, 단일 Pod 에서만 사용 가능
  - Managed-premium : Storage Class는 프리미엄 Azure Disk를 프로비저닝
      - SSD 기반 고성능의 Low-Latency 디스크 지원
      - 프로덕션 워크로드를 실행하는 VM에 완벽한 디스크
</mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image23.png"
        ></g-image>
    <mark-down class="content"> 
#### PersistentVolumeClaims
  - Pod가 크기, 접근 모드에 따라 PVC를 요청, 적합한 PersistentVolume 발견시 PersistentVolume Claim에 바인딩
  - PVC 조건을 만족하는 PV가 없을 경우, PV를 StorageClass가 자동으로 Provisioning하여 바인딩
    </mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image24.png"
        ></g-image>
    <mark-down class="content"> 
### ConfigMaps
  - ConfigMaps는 컨테이너 이미지로부터 설정 정보를 분리할 수 있게 해줍니다.
  - 환경변수나 설정값 들을 환경변수로 관리해 Pod가 생성될 때 이 값을 주입
  - ConfigMaps은 2가지 방법으로 생성
      - 리터럴 값
      - 파일
  - ConfigMaps는 etcd에 저장 
    </mark-down>
        <g-image style="max-width: 70%" 
            src="~/img/03_Bizdevops/06_운영/02/image25.png"
        ></g-image>
    <mark-down class="content"> 
#### 리터럴 값으로부터 ConfigMap 생성
  - ConfigMap을 생성하는 명령어
  ```
  $ kubectl create configmap my-config --from-literal=key1=value1 
  --from-literal=key2=value2
    configmap "my-config" created 
  ```
  - 설정된 ConfigMap 정보 가져오기
  ```
  $ kubectl get configmaps my-config -o yaml
    apiVersion: v1
    data:
      key1: value1
      key2: value2
    kind: ConfigMap
    metadata:
      creationTimestamp: 2017-05-31T07:21:55Z
      name: my-config
      namespace: default
      resourceVersion: "241345"
      selfLink: /api/v1/namespaces/default/configmaps/my-config
      uid: d35f0a3d-45d1-11e7-9e62-080027a46057
  ```
  - o yaml 옵션은 해당 정보를 yaml형태로 출력하도록 요청합니다.
  - 해당 객체는 종류가 ConfigMap이며 key-value 값을 가지고 있습니다.
  - ConfigMap의 이름 등의 정보는 metadata field에 들어 있습니다.
#### 파일로부터 ConfigMap 생성 (1/2)
  - 아래와 같은 설정 파일을 만듭니다.
  ```
  apiVersion: v1
  kind: ConfigMap
  metadata:
    name: customer1
  data:
    TEXT1: Customer1_Company
    TEXT2: Welcomes You
    COMPANY: Customer1 Company Technology Pct. Ltd.
  ```
  - customer1-configmap.yaml라는 이름으로 파일을 생성하였을 경우, 아래와 같이 ConfigMap를 생성합니다.
  ```
  $ kubectl create -f customer1-configmap.yaml
    configmap "customer1" created
  ```
#### 파일로부터 ConfigMap 생성 (2/2)
  - Userinfo.properties 파일을 생성하고, 
  ```
  myname=apexacme
  email=apexacme@uengine.org
  Address=seoul
  ```
  - 파일을 이용해 ConfigMap을 만들 때는 --from-file을 이용해 파일명을 넘깁니다.
  - kubectl create configmap cm-file --from-file=./properties/profile.properties
      - 이때, 키는 파일명이 되고, 값은 파일 내용이 됩니다.
        </mark-down>
        <g-image style="max-width: 60%" 
            src="~/img/03_Bizdevops/06_운영/02/image26.png"
        ></g-image>
    <mark-down class="content"> 
#### Containerizing with ConfigMap from Dockerizing
  - Scenario
      - ConfigMap 생성
      - ConfigMap의 환경변수를 읽어 출력하는 NodeJS 어플리케이션 준비
      - Dockerfile 생성
      - Dockerizing & Azure Container Registry에 Push
      - Deployment yaml, Service yaml 준비
      - 배포 및 서비스 생성
      - 브라우저를 통해 서비스 확인
      - ConfigMap의 환경변수를 어플리케이션이 정상적으로 참조하여 출력하는지 여부
      - ConfigMap 생성
      ```
      $ kubectl create configmap hello-cm --from-literal=language=java
      $ kubectl get cm
      $ kubectl get cm hello-cm -o yaml
      ```
      - ConfigMap의 환경변수를 읽어 출력하는 NodeJS 어플리케이션
      ```
      var os = require('os');
      var http = require('http');
      var handleRequest = function(request, response) {
        response.writeHead(200);
        response.end(" my prefered language is "+process.env.LANGUAGE+ "\n");

        //log
        console.log("["+
                    Date(Date.now()).toLocaleString()+
                    "] "+os.hostname());
      }
      var www = http.createServer(handleRequest);
      www.listen(8080);
      ```
      - Dockerfile 생성
      ```
      FROM node:carbon
      EXPOSE 8080
      COPY server.js .
      CMD node server.js > log.out
      ```
      - Dockerizing & Azure Container Registry에 Push
      ```
      $ docker build -t (uengineorg).azurecr.io/cm-sandbox:v1 .
      $ docker push (uengineorg).azurecr.io/cm-sandbox:v1
      # 위 2 명령행을 아래 하나의 명령으로 수행 가능
      $ az acr build --registry [acr-레지트스리명] --image [acr레지스트리명].azurecr.io/cm-sandbox:v1 .
      ```
      
      - 인증 오류 발생시, 로그인 수행 : az acr login --name user35registry --expose-token
      - Push 확인 : Azure Portal > 컨테이너 레지스터리 > 리파지토리
      ```
      apiVersion: apps/v1beta2
      kind: Deployment
      metadata:
        name: cm-deployment
      spec:
        replicas: 1
        minReadySeconds: 5
        selector:
          matchLabels:
            app: cm-literal
        template:
          metadata:
            name: cm-literal-pod
            labels:
              app: cm-literal
          spec:
            containers:
            - name: cm
              image: uengineorg.azurecr.io/cm-sandbox:v1
              imagePullPolicy: Always
              ports:
              - containerPort: 8080
              env:
              - name: LANGUAGE
                valueFrom:
                  configMapKeyRef:
                    name: hello-cm
                    key: language
      ```

      - Deployment(cm-deployment.yaml) 생성/ 실행
      - kubectl create -f cm-deployment.yaml
      - $ kubectl get deploy
      ```
      apiVersion: v1
      kind: Service
      metadata:
        name: cm-literal-svc
      spec:
        selector:
          app: cm-literal
      ports:
        - name: http
        port: 80
        protocol: TCP
        targetPort: 8080
      type: LoadBalancer
      ```
      - Service(cm-service.yaml) 생성/ 실행
      - $ kubectl create -f cm-service.yaml
      - $ kubectl get svc

      - 브라우저를 통해 서비스 확인
        - Service의 External-IP 접속
        </mark-down>
        <g-image style="max-width: 60%" 
            src="~/img/03_Bizdevops/06_운영/02/image27.png"
        ></g-image>
    <mark-down class="content"> 
#### 마이크로서비스 결과 확인
</mark-down>
        <g-image style="max-width: 70%" 
            src="~/img/03_Bizdevops/06_운영/02/image28.png"
        ></g-image>
    <mark-down class="content"> 
#### Pod에서 ConfigMap 추가 사용하기
  ```
  apiVersion: apps/v1beta2
  kind: Deployment
  metadata:
    name: cm-file-deployment
  spec:
    replicas: 3
    minReadySeconds: 5
    selector:
      matchLabels:
        app: cm-file
    template:
      metadata:
        name: cm-file-pod
        labels:
          app: cm-file
      spec:
        containers:
        - name: cm-file
          image: uengineorg.azurecr.io/cm-file:v1
          imagePullPolicy: Always
          ports:
          - containerPort: 8080
          env:
          - name: PROFILE
            valueFrom:
              configMapKeyRef:
                name: cm-file
                key: profile.properties
  ```
  - 환경변수로 값 전달
      - cm-file configMap에서 키가 “profile.properties” (파일명)인 값을 읽어와서 환경 변수 PROFILE에 저장 
      - 저장된 값은 파일의 내용인 아래 문자열이 됩니다.
      - myname=terry
      - email=myemail@mycompany.com
      - address=seoul
  ```
  apiVersion: apps/v1beta2
  kind: Deployment
  metadata:
    name: cm-file-deployment-vol
  spec:
    replicas: 3
    minReadySeconds: 5
    selector:
      matchLabels:
        app: cm-file-vol
  template:
    metadata:
      name: cm-file-vol-pod
      labels:
        app: cm-file-vol
  spec:
    containers:
      - name: cm-file-vol
      image: uengineorg.azurecr.io /cm-file-volume:v1
      imagePullPolicy: Always
      ports:
      - containerPort: 8080
      volumeMounts:
        - name: config-profile
          mountPath: /tmp/config
    volumes:
      - name: config-profile
        configMap:
          name: cm-file
  ```

### Secrets
  - ConfigMap이 일반적인 환경 설정 정보나 Config정보를 저장하도록 디자인 되었다면,
    보안이 중요한 패스워드나 API 키, 인증서 파일들은 Secret에 저장합니다.

  - Secret은 정보보안 차원에서 추가적인 보안 기능을 제공
      - 예를 들어, API서버나 Node의 파일에 저장되지 않고, 항상 메모리에 저장되므로 상대적 접근이 어렵습니다.
      - Secret의 최대 크기는 1MB (너무 커지면, apiserver나 Kubelet의 메모리에 부하 발생)

  - ConfigMap과 기본적으로 유사하나, 값(value)에 해당하는 부분을 base64로 인코딩해야 합니다.
      - SSL인증서와 같은 binary파일의 경우, 문자열 저장이 불가능하므로 인코딩이 필요합니다.
      - 이를 환경변수로 넘길 때나 디스크볼륨으로 마운트해서 읽을 경우 디코딩 되어 적용합니다.
  ```
  apiVersion: v1
  kind: Secret
  metadata:
    name: hello-secret
  data:
    language: amF2YQo=
  ```

  - Kubectl 명령어로 Secret 생성 및 확인
    - 명령어로 Secret 만들기 
        - $ kubectl create secret generic my-password --from-literal=password=mysqlpassword
        - my-password라는 Secret을 생성하고, password 라는 key와 mysqlpassword라는 value 값을 가지게 됩니다.
        - Value는 base64로 자동 encoding
        - generic : create a secret from a local file, directory or literal value

    - Secret 확인 : kubectl get secret my-password -o yaml
        - echo [base64 value] | base64 --decode
- Secret을 직접 만들기 
    - base64 형태로 인코딩하여 YAML파일내에 직접 생성 가능
    ```
    $ echo mysqlpassword | base64
      bXlzcWxwYXNzd29yZAo=
    ```

    - 위 방식으로 인코딩 된 정보를 사용해 설정파일 생성
    ```
    apiVersion: v1
    kind: Secret
    metadata:
      name: my-password
    type: Opaque
    data:
      password: bXlzcWxwYXNzd29yZAo=
    ```

    - base64 인코딩은 바로 디코딩 됨으로 주의해야 합니다!
    ```Terminal
    $ echo "bXlzcWxwYXNzd29yZAo=" | base64 --decode
    ```

    - 설정파일을 절대 소스코드에 넣지 않도록 주의해야 합니다!

  - Pod에서 Secret 사용하기
  ```yaml
  apiVersion: apps/v1beta2
  kind: Deployment
  metadata:
    name: hello-secret-deployment
  spec:
    replicas: 1
    minReadySeconds: 5
    selector:
      matchLabels:
        app: hello-secret-literal
  template:
    metadata:
      name: hello-secret-literal-pod
      labels:
        app: hello-secret-literal
      spec:
        containers:
        - name: hello-secret
          image: uengineorg.azurecr.io/hello-secret:v1
          imagePullPolicy: Always
          ports:
          - containerPort: 8080
          env:
          - name: LANGUAGE
          valueFrom:
            secretKeyRef:
              name: hello-secret
              key: language
  ```    
  
  - Deployment.yaml 생성/ 실행
  - kubectl create -f hello-secret-deployment.yaml
  - $ kubectl get deploy
#### Pod에서 Secret 파일 마운트 사용하기
  - 사용자 id를 저장한 user.property파일과 비밀번호를 저장한 password.property 파일생성
      - id file 내용 : $ cat user.property   $ admin
      - password file 내용 : $ cat password.property  $ adminpassword
  - Secret 생성
      - kubectl create secret generic db-password --from-file=./user.property  --from-file=./password.property
      - 생성된 secret은 user.property, password.property 파일명을 각각 key로 파일의 내용이 저장
  - Secret을 읽어 출력할 어플리케이션 생성 : server.js
  ```java
  var os = require('os');
  var fs = require('fs');
  var http = require('http');
  var handleRequest = function(request, response) {
    fs.readFile('/tmp/db-password/user.property',function(err,userid){
      response.writeHead(200);
      response.write("user id  is "+userid+" \n");
      fs.readFile('/tmp/db-password/password.property',function(err,password){
        response.end(" password is "+password+ "\n");
      })
    })
    console.log("["+
      Date(Date.now()).toLocaleString()+"] "+os.hostname());
  }
  var www = http.createServer(handleRequest);
  www.listen(8080);
  ```

  - Dockerfile 생성
  ```Terminal
  FROM node:carbon
  EXPOSE 8080
  COPY server.js .
  CMD node server.js > log.out
  ```

  - Dockerizing & Azure Container Registry에 Push
  ```Terminal
  $ docker build -t user35registry.azurecr.io/hello-secret-file:v1 .
  $ docker push user35registry.azurecr.io/hello-secret-file:v1

  # 위 2 명령행을 아래 하나의 명령으로 수행 가능
  $ az acr build --registry [acr-레지트스리명] --image [acr레지스트리명].azurecr.io/ hello-secret-file:v1 .
  ```

  - 인증 오류 발생시, 로그인 수행 : az acr login --name user35registry --expose-token
  - Push 확인 : Azure Portal > 컨테이너 레지스터리 > 리파지토리
  ```yaml
  apiVersion: apps/v1beta2
  kind: Deployment
  metadata:
    name: hello-serect-file-deployment
  spec:
    replicas: 3
    minReadySeconds: 5
    selector:
      matchLabels:
        app: hello-secret-file
    template:
      metadata:
        name: hello-secret-file
        labels:
          app: hello-secret-file
      spec:
        containers:
        - name: hello-secret-file
          image: uengineorg.azurecr.io/hello-secret-file:v1
          imagePullPolicy: Always
          ports:
          - containerPort: 8080
          volumeMounts:
            - name: db-password
              mountPath: "/tmp/db-password"
              readOnly: true
        volumes:
        - name: db-password
          secret:
            secretName: db-password
            defaultMode: 0600
  ```

  - Deployment(hello-secret-file-deployment.yaml) 생성/ 실행
  - kubectl create -f hello-secret-file-deployment.yaml
  - $ kubectl get deploy

  ```yaml
  apiVersion: v1
  kind: Service
  metadata:
    name: hello-secret-file-service
  spec:
    selector:
      app: hello-secret-file
    ports:
      - name: http
        port: 80
        protocol: TCP
        targetPort: 8080
    type: LoadBalancer
  ```

  - Service(hello-secret-file-service.yaml) 생성
      > $ kubectl create -f hello-secret-file-service.yaml

  - $ kubectl get svc
  - 브라우저를 통해 서비스 확인
      - Service의 External-IP 접속

### Liveness Probes & Readiness Probes
  - 쿠버네티스는 각 컨테이너의 상태를 주기적으로 체크(Health Check)해서, 
      - 문제가 있는 컨테이너를 자동으로 재시작하거나 또는 문제가 있는 컨테이너를 서비스에서 제외 합니다.
  - Liveness와 Readiness Probes은 kubelet이 pod내에서 실행되는 어플리케이션의 health를 조정하기 때문에 매우 중요합니다.
  
  - Probe Types
      - Liveness probe와 readiness probe는 컨테이너가 정상적인지 아닌지를 체크하는 방법으로 다음과 같이 3가지 방식을 제공합니다.
          - Command probe
          - HTTP probe
          - TCP probe
  - Liveness Probes
      - Pod는 정상적으로 작동하지만 내부의 어플리케이션이 반응이 없다면, 컨테이너는 의미가 없습니다.
          - 위와 같은 경우는 어플리케이션의 Deadlock 또는 메모리 과부화로 인해 발생할 수 있으며,
            발생했을 경우 컨테이너를 다시 시작해야 합니다.
      - Liveness probe는 Pod의 상태를 체크하다가, Pod의 상태가 비정상인 경우 kubelet을 통해서 재시작합니다.
    </mark-down>
        <g-image style="max-width: 80%" 
            src="~/img/03_Bizdevops/06_운영/02/image29.png"
        ></g-image>
    <mark-down class="content"> 

#### Liveness Command probe
  ```yaml
  apiVersion: v1
  kind: Pod
  metadata:
    labels:
      test: liveness
    name: liveness-exec
  spec:
    containers:
    - name: liveness
      image: k8s.gcr.io/busybox
      args:
      - /bin/sh
      - -c
      - touch /tmp/healthy; sleep 30; rm -rf /tmp/healthy; sleep 600
      livenessProbe:
        exec:
          command:
          - cat
          - /tmp/healthy
      initialDelaySeconds: 3
      periodSeconds: 5
  ```

  - 왼쪽은 /tmp/healthy 파일이 존재하는지 확인하는 설정 파일입니다.
  - periodSeconds 파라미터 값으로 5초마다 해당  파일이 있는지 조회합니다.
  - initialDelaySeconds 파라미터는 kubelet이 첫 체크하기 전에 기다리는 시간을 설정합니다.
  - 파일이 존재하지 않을 경우, 정상 작동에 문제가 있다고 판단되어 kubelet에 의해 자동으로 컨테이너가 재시작 됩니다.

#### Liveness HTTP probe
  - Kubelet이 HTTP GET 요청을 /healthz 로 보냅니다.
  - 실패 했을 경우, kubelet이 자동으로 컨테이너를 재시작 합니다.
  ```yaml
  livenessProbe:
    httpGet:
      path: /healthz
      port: 8080
      httpHeaders:
      - name: X-Custom-Header
        value: Awesome
    initialDelaySeconds: 3
    periodSeconds: 3
  ```

  - Liveness TCP Probe
      - kubelet은 TCP Liveness Probe를 통해, 지속적으로 어플리케이션이 실행중인 컨테이너의 TCP Socket을 열려고 합니다.
      - 정상이 아닌 경우 컨테이너를 재시작 합니다.
      ```yaml
      livenessProbe:
        tcpSocket:
          port: 8080
        initialDelaySeconds: 15
        periodSeconds: 20
      ```

#### Readiness Probes
  - Configuration을 로딩하거나, 많은 데이터를 로딩하거나, 외부 서비스를 호출하는 경우에는 일시적으로 서비스가 불가능한 상태가 될 수 있습니다.
  - Readiness Probe를 사용하게 되면 주어진 조건이 만족할 경우, 서비스 라우팅하고, 응답이 없거나 실패한 경우, 서비스 목록에서 제외합니다.
  ```yaml
  readinessProbe:
    exec:
      command:
      - cat
      - /tmp/healthy
    initialDelaySeconds: 5
    periodSeconds: 5
  ```

</mark-down>
        <g-image style="max-width: 70%" 
            src="~/img/03_Bizdevops/06_운영/02/image30.png"
        ></g-image>
    <mark-down class="content"> 

#### Difference between Liveness and Readiness
  - Liveness probe와 Readiness probe 차이점은 
      - Liveness probe는 컨테이너의 상태가 비정상이라고 판단하면, 
          - 해당 Pod를 재시작하는데 반해, 

  - Readiness probe는 컨테이너가 비정상일 경우에는
      - 해당 Pod를 사용할 수 없음으로 표시하고, 서비스등에서 제외합니다.
  
  - 주기적으로 체크하여, 정상일 경우 정상 서비스에 포함합니다.

        </mark-down>
    </div>
</template>


<script>
        // @group 02_06_03_true
export default {
    name: "OperationTwo",
    props: {
        "Kubernetes 오브젝트 모델": {
            type: String
        }
    }
};
</script>