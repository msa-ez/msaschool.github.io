<template>
    <div>
        <div style = "height:30px; width:100%; margin-top:20px;">
                <VueSubLayoutCard lab="ops-readiness"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## Kubernetes Advanced 객체

### Ingress
- Service는 L4 레이어로 TCP레벨에서 Pod를 로드밸런싱 합니다.
- MSA에서는 Service 하나가 MSA의 서비스로 표현되는 경우가 많고 서비스는 하나의 URL(/orders, /products, …)로 대표되는 경우가 많습니다.
- MSA 서비스간 라우팅을 위해 API Gateway를 두는 경우가 많은데 관리포인트가 생깁니다.
- URL기반의 라우팅 정도라면 L7 로드밸런서 정도로 위의 기능을 충족합니다.
- Kubernetes에서 제공하는 L7 로드밸런싱 컴포넌트를 ‘Ingress’ 라고 합니다.
    > kubernetes.io의 의하면,
    > "An Ingress is a collection of rules that allow inbound connections to reach the cluster Services.“
    > "Ingress는인바운드 연결이 클러스터의 Service에게 
    > 라우팅되도록 하는 규칙의 집합체이다."

- 아래와 같은 Service들의 Inbound Connection을 지원하기 위해 Ingress는 Layer7의 HTTP Load balancer 기능 제공합니다.
    - TLS (SSL)
    - Name-based virtual hosting 
    - Path-based routing
    - Custom rules

        </mark-down>
        <g-image style="max-width: 40%"
            src="~/img/03_Bizdevops/06_운영/03/image1.png"
        ></g-image>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/03/image2.png"
        ></g-image>
        <mark-down class="content">
- 사용자들은 직접 Service에 접속하지 않습니다.
- 유저는 Ingress에 먼저 접근하고, 요청은 해당 Service로 포워드 됩니다.
- Ingress 요청은 Ingress Controller에 의해 처리됩니다.

#### Ingress Controller
- "Ingress Controller"는 Ingress 리소스의 변경 사항을 마스터 노드의 API 서버에서 감시하고, 그에 따라 Layer 7로드 밸런서를 업데이트하는 응용 프로그램입니다.
- Ingress Controller는 오픈소스 기반 구현체 및 클라우드 벤더사가 직접 구현체를 개발해 사용하기도 합니다. 
    - Nginx Ingress Controller, 
    - AKS Application Gateway Ingress Controller, 
    - AWS ALB Ingress Controller - AWS Application Load Balancer,
    - GCE L7 Load Balancer,
    - Istio based ingress controller,
    - KONG - Open Source
#### Ingress Routing
- Host-based Routing
    - 사용자가 blue.example.com와 green.example.com에 접근을 하게 되면 같은 Ingress endpoint에서, 
    - 각각 nginx-blue-svc와 nginx-green-svc 로 요청이 포워드됩니다.
    ```
    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
        name: web-ingress
        namespace: ingress-basic
    spec:
        rules:
        - host: blue.example.com
        http:
        paths:
        - backend:
            serviceName: nginx-blue-svc
            servicePort: 80
        - host: green.example.com
        http:
            paths:
            - backend:
            serviceName: nginx-green-svc
            servicePort: 80
    ```

- Path-based Routing
    - Ingress는 또한 example.com/blue와 example.com/green 형태의 요청에 대해,
    - 각각 nginx-blue-svc와 nginx-green-svc로 요청이 라우팅됩니다.
    ```
    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
        name: web-ingress
        namespace: ingress-basic
    spec:
        rules:
        - http:
        paths:
        - path: /blue/*
            backend:
            serviceName: nginx-blue-svc
            servicePort: 80
        - path: /green/*
            backend:
            serviceName: nginx-green-svc
            servicePort: 80
    ```

- Ingress target ServiceType : NodePort
    - Ingress에서 접속하는 서비스의 ServiceType 지정 시, LoadBalancer나 ClusterIP가 아닌 NodePort 타입을 사용하는 이유는,
        - Ingress로 사용되는 로드밸런서에서, 각 서비스에 대한 Heartbeat 체크를 하기 위함 입니다.
        - Ingress로 배포된 구글 클라우드 로드밸런서는 각 노드에 대해서 Node port로 Heartbeat 체크를 수행하고, 문제 있는 노드를 로드밸런서에서 자동으로 제거하거나, 복구가 되었을 때 자동으로 추가합니다.

### Jobs
- 워크로드 모델 중, 배치나 한번 실행되고 끝나는 형태의 작업이 있을 수 있습니다.
- 예로, 원타임으로 파일 변환 작업을 하거나, 주기적으로 ETL 배치 작업을 하는 경우, Pod가 계속 떠 있을 필요 없이 작업을 할 때만 Pod를 실행합니다.
- Job은 이러한 워크로드 모델을 지원하는 Controller
</mark-down>
        <g-image style="max-width: 40%"
            src="~/img/03_Bizdevops/06_운영/03/image3.png"
        ></g-image>
        <mark-down class="content">
- Job에 의해 관리되는 Pod는 Job이 종료되면 Pod도 같이 종료됩니다.
- Job정의 시, Container Spec에 image뿐만 아니라, Job을 수행하기 위한 커맨드를 같이 입력합니다.
</mark-down>
        <g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/03/image4.png"
        ></g-image>
        <mark-down class="content">

### Cron Jobs
- Job 컨트롤러에 의해 실행되는 작업을 주기적으로 스케줄링 해 주는 컨트롤러
```
apiVersion: batch/v1beta1
kind: CronJob
metadata:
    name: hello
spec:
    schedule: "*/1 * * * *"
    jobTemplate:
    spec:
        template:
        spec:
        containers:
        - name: hello
            image: busybox
            args:
            - /bin/sh
            - -c
            - date; echo Hello from the Kubernetes cluster
        restartPolicy: OnFailure
```

#### Resource Assign & Management
- 쿠버네티스에서 Pod를 어느 노드에 배포할지 결정하는 것을 스케줄링이라 합니다.
- Pod에 대한 스케줄링시에, Pod내의 애플리케이션이 동작할 수 있는 자원(CPU,메모리 등) 정보를 알아야 그만한 자원이 가용한 노드에 Pod 배포 가능합니다.
- 리소스 단위
    - CPU의 경우 ms(밀리 세컨드)를 사용하는데 대략 1000ms가 1 vCore (가상 CPU 코어) 
    - 메모리의 경우 Mb를 사용하며 64M(64 x 1000), 또는 64Mi (64 x 1024)로 계산 
    - Request & Limit
        - Request : 컨테이너가 생성될 때 요청하는 리소스 양
        - Limit : 리소스가 더 필요한 경우 추가로 사용가능한 양
</mark-down>
        <g-image style="max-width: 20%"
            src="~/img/03_Bizdevops/06_운영/03/image5.png"
        ></g-image>
        <mark-down class="content">
- 샘플 설정에 따른 Pod내, CPU 리소스 할당
    </mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/03/image6.png"
        ></g-image>
        <mark-down class="content">
- Resource Monitoring
    - Node의 자원 상태 모니터링
        - $ kubectl get nodes
        - $ kubectl describe nodes
        </mark-down>
        <g-image style="max-width: 80%"
            src="~/img/03_Bizdevops/06_운영/03/image7.png"
        ></g-image>
        <mark-down class="content">
- 현재 사용 중인 리소스 현황 모니터링
    - $ kubectl top nodes
    - $ kubectl top pods

- Resource Quota
    - ResourceQuota는 네임스페이스별로 사용 가능한 리소스 양을 정의
    ```
    apiVersion: v1
    kind: ResourceQuota
    metadata:
      name: mem-cpu-demo
    spec:
      hard:
        requests.cpu: "1"
        requests.memory: 1Gi
        limits.cpu: "2"
        limits.memory: 2Gi
    ```

    - 네임스페이스에 ResourceQuota 적용
        - kubectl apply -f quota-mem-cpu.yaml --namespace=a-namespace 

### DaemonSets
- Pod를 각각의 노드에서 하나씩만 돌게 하는 형태로 Pod를 관리하는 컨트롤러
- 모니터링 데이터를 수집하거나, 스토리지 데몬을 실행하는 등, 모든 노드에서 항상 실행되는 특정 유형의 포드가 필요할 경우에 사용합니다.
    - Node 가 클러스터에 추가되면, 주어진 DaemonSet에 의해 Pod가 생성됩니다.
    - DaemonSet이 삭제 되면, 관련된 모든 Node의 Pod들은 삭제됩니다.
- 또한 특정 노드에만 Pod를 배포할 수 있도록 , Pod의 “node selector”를 이용해서 라벨을 필터링하여 특정 노드만 선택 가능합니다.
    </mark-down>
<g-image style="max-width: 60%"
            src="~/img/03_Bizdevops/06_운영/03/image8.png"
        ></g-image>
    <mark-down class="content">
### StatefulSets
- 이전의 컨트롤러(Replica Set, Job) 등은 상태가 유지되지 않는 application을 관리하는 용도지만, StatefulSet은 단어의 의미 그대로 상태를 가지고 있는 포드들을 관리하는 컨트롤러
- 스테이트풀셋을 사용하면 볼륨을 사용해서 특정 데이터를 기록해두고 그걸 포드가 재시작했을때도 유지할 수 있습니다.
- StatefulSet controller는 이름, 네트워크 인증, 엄격한 순서 등의 독자성이 보장 되어야 할 때 사용합니다.
    - RS에 의해서 관리되는 Pod들은 기동이 될때 병렬로 동시에 기동 되나, DB의 경우에는 Master 노드가 기동된 다음에, Slave 노드가 순차적으로 기동되어야 하는 순차성을 가지고 있는 경우가 있습니다.
    - Ex) MySQL cluster, etcd cluster.
- 여러 개의 포드를 띄울 때 포드 사이에 순서를 지정해 지정된 순서대로 포드 실행 가능합니다.
```
apiVersion: apps/v1
kind: StatefulSet
metadata:
name: nginx
spec:
selector:
    matchLabels:
    app: nginx
serviceName: "nginx"
replicas: 3
template:
    metadata:
    labels:
        app: nginx
    spec:
    terminationGracePeriodSeconds: 10
    containers:
    - name: nginx
        image: k8s.gcr.io/nginx-slim:0.8
        ports:
        - containerPort: 80
        name: web
        volumeMounts:
        - name: www
        mountPath: /usr/share/nginx/html
volumeClaimTemplates:
- metadata:
    name: www
spec:
    accessModes: [ "ReadWriteOnce" ]
    storageClassName: "standard"
    resources:
    requests:
        storage: 1Gi
```

- $ kubectl get pod
- $ kubectl get pvc
- StatefulSet은 Pod를 생성할 때 순차적으로 기동되고, 삭제할 때도 순차적으로(2 🡪 1🡪 0) 삭제됩니다.
    </mark-down>
<g-image style="max-width: 40%"
            src="~/img/03_Bizdevops/06_운영/03/image9.png"
        ></g-image>
<g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/03/image10.png"
        ></g-image>
    <mark-down class="content">
#### Helm
- Application 배포에는 여러 Kubernetes manifest들을 사용합니다.
    - Deployments, Services, Volume Claims, Ingress, etc. 
    - 하나하나 사람이 배포하기에는 힘이 듭니다.
- 여러 manifest들을 metadata와 함께 정해진 템플릿으로 묶은 것을 Chart라고 합니다.
- Helm은 위 Chart들을 설치/업데이트/삭제를 할 수 있는 패키지 매니저입니다.
- Helm은 두 부분으로 이루어져 있습니다 :
    - 유저의 Workstation에서 작동하는 Helm 클라이언트
    - Kubernetes Cluster에서 동작하는 Tiller 서버
- Helm(client)가 Chart들을 관리하기 위해서 Tiller(server)에 접속

#### Monitoring and Logging
- Kubernetes에서는 Pods, Services, nodes등의 리소스 정보를 수집해야 어플리케이션의 전체적인 리소스 사용량을 알고 Scaling이 가능해집니다.
Kubernetes 모니터링 솔루션 중에 인기 많은 것이 Heapster와 Prometheus입니다.
    - Heapster 
는 Kubernetes에서 기본적으로 제공이 되며 클러스터 내의 모니터링과 이벤트 데이터를 수집합니다.
    - Prometheus
는 CNCF에 의해서 제공이 되며, Kubernetes의 각 다른 객체와 구성으로부터 리소스 사용을 수집할 수 있습니다. Client libraries를 사용하여 어플리케이션의 코드도 조정도 할 수 있습니다. 

- 문제 해결과 디버깅의 또 하나의 중요한 관점은 Logging입니다.
    - Kubernetes는 각 다른 객체에서 생성되는 로그들을 수집할 수 있습니다.
    - 로그를 수집하는 가장 흔한 방법은 fluentd를 사용하는 Elasticsearch입니다. Fluentd는 node에서 에이전트로 작동을 하며  커스텀 설정이 가능합니다.


        </mark-down> 
    </div>
</template>


<script>
        // @group 02_06_04_true
export default {
    name: "OperationThree",
    props: {
        "Kubernetes Advanced 객체": {
            type: String
        }
    }
};
</script>