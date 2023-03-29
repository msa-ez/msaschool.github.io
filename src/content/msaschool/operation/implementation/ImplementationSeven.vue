<template>
    <div>
        <div style = "height:30px; width:100%; margin-top:20px;">
                <VueSubLayoutCard lab="kafka-basic-2022-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## 이벤트 기반 메시지 채널 - 카프카(Kafka)

이벤트 드리븐 아키택처에서 **이벤트**를 비동기 호출로 상호 통신하려면 메세지 큐(MQ)가 필요합니다. 대표적인 메세지 큐로는 kafka, RabbitMQ, ActiveMQ 등이 있는데, 이중 가장 익숙하신 큐를 사용하시면 됩니다. 그중 kafka 는 분산 메시징 시스템에 적합하고, 처리속도가 빠릅니다. 이번 시간에는 kafka 를 로컬/클러스터에 설치를 하고, 간단한 메세징 시스템을 사용하는 실습을 하겠습니다.

#### 이번 장에서는 다음과 같은 순서로 진행 합니다.
- Windows 환경에서 카프카 설치 및 실행
- Windows의 Linux 환경에서 카프카 설치 및 실행
- 쿠버네티스에 카프카 설치 및 실행
- 로컬 환경에서 토픽을 생성 하여 해당 토픽에서 메세지를 pub/sub 해보기
- 클러스터 환경에서 토픽을 생성 하여 해당 토픽에서 메세지를 pub/sub 해보기

### Windows 환경에서 카프카 설치 및 실행
1. 브라우저를 열고 카프카 다운로드 사이트로 접속합니다.
    - https://kafka.apache.org/downloads
    - 최근 버전의 Scala 2.13 (binary)버전으로 다운로드 합니다.

2. 다운로드한 파일을 압축을 풉니다.
    - Windows 환경이면, 실행화일의 경로가 길지않도록 C:\ (최상위 경로)에 압축을 해제 합니다.

3. 카프카는 분산 환경 코디네이터(Coordinator)인 주키퍼 위에서 작동을 합니다. 주키퍼를 먼저 실행하고, 카프카를 이어서 실행합니다.
    - 주키퍼 실행을 위하여 새로운 CMD 창을 엽니다.
    - cd 카프카설치 경로/bin/windows
    ```
    zookeeper-server-start.bat ../../config/zookeeper.properties
    ```

    - 카프카 실행을 위하여 새로운 CMD 창을 엽니다.
    - cd 카프카설치 경로/bin/windows
    ```
    kafka-server-start.bat ../../config/server.properties
    ```


4. Trouble Shooting
    - Windows 환경에서 카프카 서버 실행 시, 'wmic은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
    `메시지가 출력되고 서버가 실행되지 않을 때, 
        - 시스템 환경변수(path)에 %SystemRoot%\System32\Wbem 를 추가해 줍니다.
    - Windows 커맨드 창에서는 카프카가 간혹 다운되는 현상이 발생 합니다. 이때 카프카를 재시작 하거나,
    - 카프카가 정상적으로 실행이 안될 경우에는 kafka 로그를 지워 봅니다.
    - C://tmp/kafka_logs 폴더 삭제..!!
    - kafka는 JVM 위에서 실행이 됩니다. Java 가 설치되고 JAVA_HOME 환경변수가 설정되어 있어야 합니다.


### Windows의 Ubuntu 환경에서 카프카 설치 및 실행
1. 우분투 bash 를 열고 아래와 같은 명령어를 실행하여 kafka 를 다운받습니다.
    ```
    curl -o kafka2.5.tgz -l http://mirror.navercorp.com/apache/kafka/2.5.0/kafka_2.13-2.5.0.tgz
    ```

    - 압축풀기
    ```
    tar -xvf kafka2.5.tgz
    ```

2. 카프카는 분산 환경 코디네이터(Coordinator)인 주키퍼 위에서 작동을 합니다. 주키퍼를 먼저 실행하고, 카프카를 이어서 실행합니다.
    - 주키퍼 실행
    ```
    cd  kafka_2.13-2.5.0/bin
    ./zookeeper-server-start.sh ../config/zookeeper.properties
    ```

    - 우분투 bash 창을 새롭게 엽니다.
    - 카프카 실행
    ```
    cd  kafka_2.13-2.5.0/bin
    ./kafka-server-start.sh ../config/server.properties
    ```

3. 트러블 슈팅
    - kafka 는 JVM 위에서 실행이 됩니다. java 가 꼭 설치되어있고, JAVA_HOME 환경변수가 설정되어 있어야 합니다.
        </mark-down>

        <mark-down class="content">
### 쿠버네티스에 카프카 설치 및 실행

1. 클러스터에 카프카를 설치하는 가장 쉬운 방법은 helm 패키지 명령으로 설치하는 것입니다. 가장먼저 클러스터에 helm 이 설치되어있는지 확인 합니다. 확인을 하는 이유는 helm 이 2.xx 와 3.xx 별로 명령어에 차이가 있습니다.


2. 헬름 설치
```
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 > get_helm.sh
chmod 700 get_helm.sh
./get_helm.sh
```

- helm version 확인
        </mark-down>
        <g-image src="~/img/03_Bizdevops/03_구현/07_이벤트기반_메세지_채널/image1.png"></g-image><br/>
        <mark-down class="content">


3. 헬름 버전이 2.xx 일때 카프카 설치 방법

```
curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get | bash
kubectl --namespace kube-system create sa tiller      # helm 의 설치관리자를 위한 시스템 사용자 생성
kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller
helm init --service-account tiller

kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'

helm repo add incubator https://charts.helm.sh/incubator
helm repo update
helm install --name my-kafka --namespace kafka incubator/kafka
```


4. 헬름 버전이 3.xx 일때 카프카 설치 방법

```
kubectl --namespace kube-system create sa tiller      # helm 의 설치관리자를 위한 시스템 사용자 생성
kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller

helm repo add incubator https://charts.helm.sh/incubator
helm repo update
kubectl create ns kafka
helm install my-kafka --namespace kafka incubator/kafka

```

### 로컬 환경에서 토픽을 생성 하여 해당 토픽에서 메세지를 pub/sub 해보기

카프카에서 메세지를 Topic 으로 관리 합니다. 메세지를 발행하는 publisher(producer) 는 토픽에 메세지를 발행 하고, subscriber(consumer) 는 토픽을 구독하여 메세지를 받아서 처리하는 방식입니다.

> 참고 :
> Windows와 Linux 모두 실행 방법은 비슷하지만 Windows에서는 .bat 으로 실행 파일을 실행하고, Linux에서는 .sh 로 실행 파일을 실행합니다.
> Windows환경에서는 카프카설치 경로/bin/windows 경로에서 명령어를 실행합니다.
> 우분투, Linux 환경에서는 카프카설치 경로/bin 경로에서 명령어를 실행합니다.


1. 토픽 생성
    - 토픽 생성과 관리는 zookeeper 가 관리를 합니다. zookeeper는 실행시 기본 2181 포트로 구동됩니다.
    - eventTopic 이라는 토픽을 생성 합니다.
    - Windows
    ```
    kafka-topics.bat --zookeeper localhost:2181 --topic eventTopic --create --partitions 1 --replication-factor 1
    ```
    
    - Linux
    ```
    kafka-topics.sh --zookeeper localhost:2181 --topic eventTopic --create --partitions 1 --replication-factor 1
    ```

2. 생성된 토픽을 확인하여 봅니다.
    - eventTopic 이라는 토픽이 보여야 합니다.
    - Windows
    ```
    kafka-topics.bat --zookeeper localhost:2181 --list
    ```

    - Linux
    ```
    kafka-topics.sh --zookeeper localhost:2181 --list
    ```

3. 이벤트 발행하기
    - eventTopic 이라는 토픽에 메세지를 발행합니다.
    - Windows
    ```
    kafka-console-producer.bat --broker-list http://localhost:9092 --topic eventTopic
    ```

    - Linux
    ```
    kafka-console-producer.sh --broker-list http://localhost:9092 --topic eventTopic
    ```
    
    - 위 명령어를 실행 후 > (꺽쇠) 표시로 된 커맨드가 나오면 메세지를 넣어봅니다.

4. 이벤트 수신하기
    - eventTopic 이라는 토픽에 발행된 메세지를 수신합니다.
    - Windows
    ```
    kafka-console-consumer.bat --bootstrap-server http://localhost:9092 --topic eventTopic --from-beginning
    ```

    - Linux
    ```
    kafka-console-consumer.sh --bootstrap-server http://localhost:9092 --topic eventTopic --from-beginning
    ```
    
    - 3번에서 사용한 메세지가 출력 되어야 합니다.
    - --from-beginning 옵션은 해당 토픽에 있는 데이터를 처음부터 출력해 달라는 의미입니다.
        </mark-down>


    <mark-down class="content">
### 클러스터 환경에서 토픽을 생성하여 해당 토픽에서 메세지를 pub/sub 해보기

> kubectl get po -n kafka 명령으로 주키퍼 3개와 kafka 3개가 정상적으로 올라가 있어야 합니다.

1. 토픽 생성
- 토픽 생성과 관리는 zookeeper 가 관리를 합니다. zookeeper는 실행시 기본 2181 포트로 구동됩니다.
- eventTopic 이라는 토픽을 생성 합니다.
```
kubectl -n kafka exec my-kafka-0 -- /usr/bin/kafka-topics --zookeeper my-kafka-zookeeper:2181 --topic eventTopic --create --partitions 1 --replication-factor 1
```

2. 생성된 토픽을 확인하여 봅니다.
- eventTopic 이라는 토픽이 보여야 합니다.
```
kubectl -n kafka exec my-kafka-0 -- /usr/bin/kafka-topics --zookeeper my-kafka-zookeeper:2181 --list
```

3. 이벤트 발행하기
- eventTopic 이라는 토픽에 메세지를 발행합니다.
```
kubectl -n kafka exec -ti my-kafka-0 -- /usr/bin/kafka-console-producer --broker-list my-kafka:9092 --topic eventTopic
```

- 위 명령어를 실행 후 > (꺽쇠) 표시로 된 커맨드가 나오면 메세지를 넣어봅니다.

4. 이벤트 수신하기
- 새로운 shell 을 열니다.
- eventTopic 이라는 토픽에 발행된 메세지를 수신합니다.
```
kubectl -n kafka exec -ti my-kafka-0 -- /usr/bin/kafka-console-consumer --bootstrap-server my-kafka:9092 --topic eventTopic --from-beginning
```

- 3번에서 사용한 메세지가 출력 되어야 합니다.
- --from-beginning 옵션은 해당 토픽에 있는 데이터를 처음부터 출력해 달라는 의미입니다.
    </mark-down>

    </div>
</template>


<script>
    // @group 02_03_08_true
    export default {
        name: 'ImplementationSeven',
        props: {
            "이벤트기반 메세지채널": {
                type: String
            },
        },

    }
</script>