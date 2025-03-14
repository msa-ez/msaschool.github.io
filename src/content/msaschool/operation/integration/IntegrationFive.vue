<template>
    <div>
        <div class="Practice-card-box">
                <VueSubLayoutCard lab="dp-graphql-2022-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## Data Projection

Data Projection 은 데이터를 보여주는 방법입니다. 쇼핑몰에서 주문 내용을 보기 위해서는 상품정보, 고객정보, 배송정보, 결제정보등 다양한 정보가 모여 내가 주문한 내용이 만들어 집니다. 모노리식 어플리케이션에서는 직접적인 메모리 참조를 하여 데이터를 조회하였다면, 마이크로 서비스로 분리된 상황에서는 이러한 데이터를 통합하여 보여주는 방법이 필요합니다.

Data Projection 을 하는 방법은 다양하게 있습니다.

* UI 에서 각 마이크로 서비스를 조회하여 UI 에서 통합
* HATEOAS 를 사용하여 api 를 lazy loading
* Composite Service 생성
* CQRS - 조회용 데이터베이스를 분리

이중 DDD 지향적 Micro Service 응용 프로그램은 서로 잘 작동하는 두 가지 패턴, 즉 ES ( Event Sourcing )와 CQRS ( Command Query Responsibility Segregation )를 사용하여 구현되는 경우가 많고 가장 효율적입니다. 이 부분은 다음장에서 조금더 자세히 설명을 하겠습니다.


### 1. UI 에서 각 마이크로 서비스를 조회하여 UI 에서 통합
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/05_데이터 프로젝션/image1.png"></g-image>
        <mark-down class="content">

쇼핑몰 시스템에서 주문 내용을 보기 위하여 필요한 서비스가 주문서비스, 상품서비스, 배송서비스, 결제서비스 라면 가장 간단한 방법은 하나의 Key 값을 이용하여 모든 서비스를 조회하여 UI 에서 통합을 하는 방법입니다. 간단하여 보이지만, UI 에서 데이터를 통합하기 위하여 클라이언트에서 복잡한 로직이 필요합니다.
클라이언트의 성능이 좋지 않다면 화면에 보여지는 속도가 느려질 수 있습니다.
데이터를 모두 조회하여 일괄적으로 화면을 생성해야 하기 때문에 **성능과 속도가 느리다면 사용자는 그 시간만큼 기다려야 하는 단점**이 있습니다.
그리고 데이터 량이 많은 경우, 서버로의 호출 수 또한 많아져 DDoS 공격 오인에 따른 차단 우려가 존재합니다.

따라서 이 방식은 조회하려는 서비스가 많지 않을때 사용하는 방법입니다.


### 2. HATEOAS 를 사용하여 api 를 lazy loading
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/05_데이터 프로젝션/image2.png"></g-image>
        <mark-down class="content">


1번 방법의 성능과 속도가 느리다면 사용자는 그 시간만큼 기다려야 하는 단점을 해결 할 수 있는 방법입니다. UI 에서는 주문 서비스에 우선 주문 내역을 조회 합니다. 그 후 주문 내역을 먼저 화면에 표현을 하고 하위 데이터를 HATEOAS Link 를 통하여 개별 api 조회를 하는 방식입니다.

많이 사용하는 방법이지만 데이터양이 많아 지면 (예: 리스트 조회) 호출해야하는 api 가 많아집니다. 호출이 많아 질수록 UI 에서 개발 복잡성이 올라가고, 성능이 떨어집니다. 또한 모든 api 를 HATEOAS 수준으로 개발하는 것도 난이도가 높습니다.


### 3. Composite Service 생성
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/05_데이터 프로젝션/image3.png"></g-image>
        <mark-down class="content" source="
데이터 통합을 클라이언트가 아닌 서버단에 해결하는 방법입니다. Composite 역할을 하는 서비스를 생성하여 해당 서비스에서 api 를 통합 하는 방법입니다. 주문 내용 조회 라는 API 를 호출 하였을때, Composite Service 에서는 각 마이크로 서비스들을 조회하여 데이터를 통합하여 응답을 해줍니다. 이는 Request/Response (요청/응답) 패턴에서 가지고 있는 문제점을 그대로 가지고 있습니다. 4개의 서비스를 조회할때 3개의 서비스가 1초만에 데이터를 보내왔어도 1개의 서비스가 4초가 걸린다면 전체적으로는 4초가 걸리게 됩니다. 이는 속도 저하로 이루어 지고, 마찬가지로 응답시간이 느려질수록 장애가 확산될 여지가 있습니다.

서버 리소스만 충분하다면 클라이언트에서 통합을 하는 방법보다는 효율적일 수 있습니다. 하지만 특정 서비스의 장애가 확산 될 여지가 있는 단점이 있습니다.

> 이미지 참조 : Modified from Microservices Patterns, Chris Richardson, Manning, 2018

## Composite Service 구현 샘플

#### 참고 소스코드
<a href='https://github.com/event-storming/composite_service' target='_blank'>composite_service 예제</a>

#### 예제 설명

composite_service 예제는 사용자의 주문이력과 각 주문에 대한 상세 정보 ( 주문, 상품, 배송 ) 를 조합하여 사용자에게 보여줍니다. 비동기 통신을 위하여 Java 의 CompletableFuture 을 사용하였습니다. Java 의 비동기 통신 방법은 최초 요청을 하고 응답을 기다리지 않고, 일단 넘어갑니다. 그리고 요청결과가 나오면 call-back 메서드를 호출하여 주는 방식입니다. 동작방식과 사용법을 좀더 자세히 알고 싶으시면 [java-completablefuture](https://www.baeldung.com/java-completablefuture) 를 참조 하시길 바랍니다.

대략적인 소스코드는 다음과 같습니다. 여러 서비스를 비동기로 호출하여 결과가 완성되면 조합을 하여 return 을 하면 됩니다.
        ">
        </mark-down>

            <mark-down class="content" source="
```

@Service
public class CompositeService {
CompletableFuture<List<OrderInfo>> orderListCF = CompletableFuture.supplyAsync(() -> {
// Call OrderService API
}).thenCompose(orderListObject -> CompletableFuture.supplyAsync(() -> {
// 조회된 주문별로 다른 서비스 호출
CompletableFuture<Product> productInfoCF = CompletableFuture.supplyAsync(() -> {
    // Call product Service API
    });
    CompletableFuture<Delivery> deliveryInfoCF = CompletableFuture.supplyAsync(() -> {
        // Call product Service API ( HATEOAS API 호출 )
        });
        // 모든 작업이 끝나기를 기다린다.
        CompletableFuture.allOf(productInfoCF, deliveryInfoCF).join();
        //  데이터를 조합한다
        OrderInfo orderInfo = new OrderInfo(order, productInfoCF.get(), deliveryInfoCF.get());
        });
        }
```

예제를 통하여 아래와 같은 단점을 경험해 보실 수 있습니다

* 주문, 배송, 상품 서비스가 모두 가동중이어야 데이터 조회가 됩니다.
* 주문이력이 많을시에 모든 데이터를 조회 하기때문에 시간이 많이 걸립니다.
* 각 호출 API 별로 return 되는 data 를 알고 있어야 합니다. ( 각 서비스에서 변경시 잦은 변경 요청)


        "></mark-down>
    </div>
</template>


<script>
    // @group 02_04_06_true
    export default {
        name: 'IntegrationFive',
        props: {
            "데이터 프로젝션": {
                type: String
            },
        },

    }
</script>