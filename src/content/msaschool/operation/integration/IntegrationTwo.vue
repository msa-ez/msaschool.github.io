<template>
    <div>
        <div class="Practice-card-box">
                <VueSubLayoutCard lab="monolith-2-misvc-2022-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## Microservice Integration by REQUEST AND RESPONSE

단일 프로세스에서 실행 중인 모놀리식 애플리케이션에서 구성 요소는 언어 수준 메서드 또는 함수 호출을 사용하여 서로 호출합다. 모놀리식 애플리케이션에서 마이크로 서비스 기반 애플리케이션으로 변경할 때의 가장 큰 문제는 통신 메커니즘을 변경하는 것입니다.

요청/응답 통신을 위한 인기 있는 아키텍처 스타일은 REST 입니다. 이 방법은 HTTP 프로토콜을 기반으로 하며 밀접하게 결합되어 있으며 GET, POST 및 PUT과 같은 HTTP 동사를 수용합니다. REST는 서비스를 만들 때 가장 흔히 사용되는 아키텍처 통신 방법입니다.

통신 방식은 크게 동기/비동기로 이루어 지는데 HTTP / REST 요청은 동기식 통신 방법입니다. 이 동기식 방법은 초창기 마이크로 서비스 아키텍처에서 많이 사용을 하였습니다. 초창기에 많이 사용하였기 때문에 가장 많이 쓰이고 있지만, 마이크로 서비스간의 통신을 비동기 식으로 처리가 가능해 짐에 따라서 웹에서 호출하는 방식에만 동기식 방식을 사용하고, 마이크로 서비스 간의 통신은 비동기 방식으로 구현하는 추세입니다.


#### 동기식 Request and Response
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/02_동기호출에 의한 통합/image1.png"></g-image>
        <mark-down class="content">
**마이크로 서비스의 목표**는 엔드투엔드 애플리케이션의 일부로 다른 서비스가 다운되거나 비정상인 경우에도 자율적이며 클라이언트 고객에게 제공되는 것입니다.

동기식 Request and Response 방식의 Antipattern은 위의 그림처럼 서비스간 호출을 연속으로 가져 가는 방식입니다. 이러한 호출은 **성능저하**와 **장애가 전파**되는 위험이 있습니다.

HTTP 요청 체인을 통해 긴 요청/응답 주기를 만들 때처럼 마이크로 서비스 간 HTTP 종속성이 있으면 마이크로 서비스가 자치적이지 않게 되며, 해당 체인의 서비스 중 하나가 제대로 수행되지 않는 즉시 성능에 영향을 받습니다. 특히나 쿼리 요청과 같은 마이크로 서비스 간 동기 종속성을 추가 하면 할수록 전체 응답시간은 악화 됩니다.

쿼리 요청은 다음과 같은 요청도 포함합니다. 다른 마이크로 서비스가 소유하는 데이터를 초기 마이크로 서비스에 필요한 경우에 데이터를 동적으로 요청하는 행위 입니다. 예를 들어 주문 서비스는 상품 서비스에서 제공하는 상품 정보가 필요합니다. 주문을 할때 마다 상품 서비스에서 상품정보를 동기적으로 요청을 하는 방법 보다는, 최종 일관성(이벤트 부분에서 나옵니다.)을 사용하여 필요한 데이터를 초기 서비스의 데이터 베이스에 복제하는 방법을 사용하는 것이 더 나은 방법입니다.

마이크로 서비스 간의 동기 통신을 하기 위해서는 항상 상대방의 서비스가 available 한 상태이어야 합니다. 그리고 자신의 요청을 받을수 있는 준비가 되어있어야 합니다. 상대방의 서비스가 자신의 요청을 받을수 있는 상태인지 확인하는 방법은 **2PC(two-phase commit)** 나 **TCC(Try-Confirm/Cancel)** 를 사용하여 분산 트랜잭션을 구현해야 합니다.


#### 2단계 커미트 방법
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/02_동기호출에 의한 통합/image2.png"></g-image>
        <mark-down class="content">

**2단계 커미트 방법**은 분산 컴퓨팅 환경에서 사용자의 트랜잭션을 처리하는데 있어, 관련된 모든 데이터베이스가 성공적으로 수정되었음을 확실히 확인 하는 방법으로 2단계에 걸쳐서 요청을 보내는 방식입니다. 1번째 단계에서 '커미트할 준비가 되었느냐?' 라고 물어 본 후에 "커미트 할 준비가 되었다"는 메시지를 받은 후에 2단계에서 실제로 커미트할 데이터를 보내는 방식입니다.

**2단계 커미트 방법**은 커밋전에 Lock 을 거는 방법으로 응답을 기다리는 동안 차단상태에서 다른 작업을 못하므로 시스템 성능이 크게 제한이 되고, 2단계에서 실패를 할때 데이터가 불일치 되는 문제점때문에 사실상 실패한 프로토콜입니다. 이를 해결하기 위해서 '사전 커밋' 단계와 '실제 커밋' 단계를 나눈 **3PC 방법**도 나오고 있습니다.


#### Try-Confirm/Cancel 방법
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/02_동기호출에 의한 통합/image3.png"></g-image>
        <mark-down class="content" source="
**Try-Confirm/Cancel 방법**은 분산된 REST 시스템들 간의 트랜잭션을 HTTP와 REST 원칙으로 접근하여 해결하는 방법입니다.

위 그림에서 주문을 처리하는 과정에서 재고를 차감(2단계)하고 결제 처리(3단계)는 성공했지만 구매 주문 생성(4단계)하다가 실패했습니다면 어떻게 될까요? 모두 롤백 Rollback 되지 않으면 일관성이 깨집니다.
모두 성공 아니면 실패를 만들기 위하여 재고를 차감(2단계)하고 결제 처리(3단계) 단계는 Try 단계로 우선 실행하고, 구매 주문 생성(4단계) 단계를 실행 하고 난 후에 5,6번 단계로 Confirm or Cancel 을 한번 더 보내는 방식입니다. Try 단계 실행시 timeout 을 같이 보낸 후에 일정 시간안에 Confirm 이 안온다면 Cancel 로직을 자동으로 실행 시키는 방식으로 확장이 가능합니다.

**Try-Confirm/Cancel 방법**은 실제 구현방법이 어렵고, 여전히 동기 호출 방식으로 요청을 처리 할 경우 실패시 일관성이 깨지는 문제를 여전히 가지고 있습니다. 역시나 최종 일관성(Eventual Consistency)을 유지 하기 위하여 추가적인 방법이 필요한 방법 입니다.


> 참고 및 그림 :
> <a href='https://www.popit.kr/rest-기반의-간단한-분산-트랜잭션-구현-1편/' target='_blank'>REST 기반의 간단한 분산 트랜잭션 구현 1편</a>
> <a href='https://docs.microsoft.com/ko-kr/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture' target='_blank'>Microservices Communication in .NET</a>

## 장애전파 차단: 서킷브레이커 패턴
        ">

        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/02_동기호출에 의한 통합/image4.png"></g-image>
        <mark-down class="content" source="

요청/응답 통신은 성능저하와 장애 전파를 회피 하기 위한 전략을 새워야 합니다. **서킷브레이커**를 통하여 장애 전파를 원천 차단 할 수 있습니다. **서킷브레이커**와 **retry** 를 같이 사용하여 서비스의 resilience (탄력성) 을 높일 수 있습니다.

**서킷브레이커 패턴**은 회로 차단기에서 차용한 개념으로 평소 (close) 상태에서는 정상적으로 작동하다가 문제가 생기면 회로를 open 하여 더이상 전기가 흐르지 않게 하는 방식입니다. 즉 문제가 되는 기능 자체를 동작하지 않게 하여 리소스를 점유 하지 않도록 하는 방법입니다.

요청/응답 통신중에 특정 서비스가 응답시간이 느려진다거나, 오류가 특정치 이상 발생할때 서킷브래이커를 적용하여 빠르게 차단을 시켜버립니다. 쇼핑몰에서 주문을 하였는데, 배송서비스가 느려서 주문 자체가 느려지는 것보다, 배송서비스를 잠시 차단 시키더라도 주문을 빠르게 받는 것이 사용자 입장에서는 더 효율적입니다. 웹 화면에서 5초간 로딩 화면을 보는것 보다, 차라리 에러화면을 띄워주고 다시 버튼 클릭을 하도록 하는 것이 UX 적으로 더 좋습니다.

다음은 **Istio 를 사용하여 서킷브레이커를 사용하는 방법을 실습**합니다.


## Lab: 서킷브레이커 패턴
Java 로 개발을 한다면, 서킷브레이커를 적용할때 Netflix 에서 제공하는 CircuitBreaker 라이브러리를 사용하면 됩니다. 다만 이 방법은 소스코드를 직접 수정해야하는 단점이 있는 방면 fall-back 메서드를 직접 구현하여 후속 작업을 구현 할 수 있습니다. Java 로 서킷브레이커를 구성하는 방법은 워낙 많은 글들이 있어서, 링크로 대체를 하고, Kubernetes 와 Istio 를 사용하여 구현 하는 방법을 실습하겠습니다.

> [Java 방식 CircuitBreaker] <a href='https://bcho.tistory.com/1247' target='_blank'>https://bcho.tistory.com/1247</a>
> [JavaScript 방식 CircuitBreaker] <a href='https://velog.io/@vies00/Circuit-Breaker-Pattern' target='_blank'>https://velog.io/@vies00/Circuit-Breaker-Pattern</a>

Istio 를 사용하는 방법은 소스코드를 수정할 필요가 없습니다. 쿠버네티스에 배포되어있는 서비스에 sidecar 를 추가하여 네트워크 트래픽을 모니터링 후 지정한 시간을 오버하거나, 에러율이 높으면 트래픽을 끈어버리는 방법 입니다. 다만 직접 소스코드를 수정하지 못하니, fall-back 같은 처리는 하지 못합니다.


#### 사전 준비사항:
* kubernetes 클러스터 준비
* istio 설치
* siege : http 로드테스트 도구

#### 소스코드 다운로드 및 빌드 후 클러스터 배포
* <a href='https://github.com/event-storming/reqres_orders' target='_blank'>reqres_orders</a>
* <a href='https://github.com/event-storming/reqres_products' target='_blank'>reqres_products</a>
* <a href='https://github.com/event-storming/reqres_delivery' target='_blank'>reqres_delivery</a>

#### 예제 설명
주문(order) 서비스와 상품(product) 서비스, 배송(delivery) 서비스의 관계가 Request/Response 방식으로 호출을 하여 쇼핑몰을 구성합니다.
1. 사용자가 주문을 하였을때,
2. 주문 서비스에서 배송 서비스에 배송 시작 요청을 하고,
3. 배송 서비스에서는 상품서비스에 재고량을 줄이는 요청을 합니다.

서비스간 호출을 연속으로 가져 가는 Anti-Pattern 이지만 실습을 위하여 만든 서비스 입니다. 실제로 마지막 호출 경로인 상품서비스에서 장애가 생기거나 응답 시간이 느려지면 전체적인 호출이 느려지는 것을 확인 할 수 있습니다.

가장먼저 3개의 서비스를 istio 로 배포를 합니다.

```
$ kubectl get deploy orders -o yaml > order_deploy.yaml
$ kubectl apply -f <(istioctl kube-inject -f order_deploy.yaml)
$ kubectl get deploy products -o yaml > products_deploy.yaml
$ kubectl apply -f <(istioctl kube-inject -f products_deploy.yaml)
$ kubectl get deploy delivery -o yaml > delivery_deploy.yaml
$ kubectl apply -f <(istioctl kube-inject -f delivery_deploy.yaml)
```



siege 툴을 사용하여 서킷브레이커가 없는 상황에서 부하를 주어 보겠습니다.
주문 서비스에 주문을 넣고, -c 옵션으로 사용자를 설정하고, -t 옵션으로 시간을 넣어 보겠습니다. -v 옵션으로 호출한 로그를 보도록 하겠습니다.

```
$ siege -c2 –t10S  -v --content-type 'application/json' 'http://orders:8080/orders POST {'productId':2,'quantity':1}'
```

서킷브레이커가 없기 때문에 호출은 정상적으로 이루어 집니다. 적은 사용자가 짧은 시간동안 호출을 한것이기 때문인데, 만약 서버가 과부하를 걸릴정도로 사용자를 늘려서 호출한다면 서비스는 다운이 될 것입니다. (서비스별로 과부하를 체크하는 부분은 다르기 때문에 사용자를 늘려서 호출 하는 방법은 테스트를 안합니다)

이제 Product 서비스에 서킷브레이커를 적용하여 보겠습니다. istio 에서 서킷브레이커 설정은 DestinationRule을 설정하고 trafficPolicy 값으로 트래픽을 제어하는 방식으로 설정합니다.
트래픽이 이상한지를 체크하는 connectionPool 방법과 오류나 응답체크를 하는 outlierDetection 설정으로 크게 두가지 방법이 있습니다.

* connectionPool : 지정된 서비스에 connections를 제한하여 가능 용량 이상의 트래픽 증가에 따른 서비스 Pending 상태를 막도록 circuit break 를 작동시키는 방법

* outlierDetection : 오류 발생하거나 응답이 없는 인스턴스를 탐지하여 circuit break 를 작동시키는 방법

아래 설정은 두가지 방법을 모두 사용하여 설정을 하였지만 오류가 발생하지 않기 때문에 outlierDetection 부분은 무시가 되고, connectionPool 설정으로 서킷브레이커를 작동시킵니다.

```
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: products
spec:
  host: products
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 1           # 목적지로 가는 HTTP, TCP connection 최대 값. (Default 1024)
      http:
        http1MaxPendingRequests: 1  # 연결을 기다리는 request 수를 1개로 제한 (Default
        maxRequestsPerConnection: 1 # keep alive 기능 disable
        maxRetries: 3               # 기다리는 동안 최대 재시도 수(Default 1024)
      outlierDetection:
        consecutiveErrors: 5          # 5xx 에러가 5번 발생하면
        interval: 1s                  # 1초마다 스캔 하여
        baseEjectionTime: 30s         # 30 초 동안 circuit breaking 처리
        maxEjectionPercent: 100       # 100% 로 차단
```

siege 툴을 사용하여 부하를 주게 되면 http1MaxPendingRequests: 1 로 설정되어있기 때문에 2명의 사용자가 요청시 1개의 요청은 차단되는것을 확인 할 수 있습니다.

```
$ siege -c2 –t10S  -v --content-type 'application/json' 'http://orders:8080/orders POST {'productId':2,'quantity':1}'
```

> 참고:
<a href='http://itnp.kr/post/istio-circuit-break' target='_blank'>http://itnp.kr/post/istio-circuit-break</a>        
        ">
        </mark-down>
    </div>
</template>


<script>
    // @group 02_04_03_true
    export default {
        name: 'IntegrationTwo',
        props: {
            "동기호출에 의한 통합": {
                type: String
            },
        },

    }
</script>