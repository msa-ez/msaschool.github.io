<template>
    <div>
        <div class="Practice-card-box">
                <VueSubLayoutCard lab="dp-cqrs-2022-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content" source="
## 명령 및 쿼리 역할 구분 CQRS (Command and Query Responsibility Segregation)

이번장은 이벤트 드리븐 아키텍처의 꽃인 CQRS 에 대하여 설명 합니다.

CQRS는 네이밍에서 알 수 있듯이 명령과 쿼리의 역할을 구분 한다는 것입니다. 즉 커맨드 ( Create - Insert, Update, Delete : 데이터를 변경) 와 쿼리 ( Select - Read : 데이터를 조회)의 책임을 분리한다는 것입니다. CQRS는 새롭게 등장한 개념은 아니고 등장한지 조금된 패턴 입니다.

> CQRS는 <a href='https://en.wikipedia.org/wiki/Command%E2%80%93query_separation' target='_blank'>CQS(Command and Query Separation)</a> 원리에 기원합니다. 사실 CQRS는 처음엔 CQS의 확장으로 얘기되었습니다. 하지만 CQS는 명령과 조회를 연산 수준에서 분리하는 반면 CQRS는 개체(object)나 시스템(혹은 하위 시스템) 수준에서 분리합니다.


### 생겨난 이유
기존의 CRUD 아키텍처는 데이터베이스에 쿼리를 하고 업데이트를 하는데에 동일한 Domain Model을 사용합니다. 예를들어 주문 시스템의 Domain Model 은 주문(order)입니다. 주문을 할때에는 배송정보도 필요하고, 상품정보도 필요하고, 추천상품 정보, 고객정보 등 다양한 정보들이 필요합니다. 최초 설계에는 주문만 처리하려고 만들었지만, 유지보수 및 신규 서비스가 생겨나면서 점점 초기 설계와는 다르게 변질이 되어갑니다. 이는 UX 가 발전하고, 사용자의 요구사항이 늘어나고, 비지니스가 복잡해 지는 상황에서는 생기게 되는 문제입니다.

이러한 상황들을 관찰해 보니, 비지니스 로직은 대부분 데이터 변경 (CUD) 에서 처리되고, 조회(Read) 은 단순 데이터 조회가 대부분이 되는것을 볼 수 있었습니다. 이것을 하나의 Domain Model 에서 처리하게 되니, 필요치 않은 외부 속성들과의 연계등의 복잡도가 증가하게 되는 원인을 발견 하였습니다.

이러한 문제를 해결하기 위하여 명령과 조회를 분리하는 방법을 고안하였고 이렇게 나온 방법이 CQRS 입니다. DDD(Domain-driven design) 에서 Object Model 방법론을 해결하기 위하여 CQRS 가 사용되었습니다.


### CQRS 와 이벤트 드리븐
CQRS는 프로젝트의 복잡도와 상관없이 성공적으로 적용할 수 있는 소프트웨어 개발 방법론입니다. 다음은 CQRS 를 구현하는 다양한 방법입니다.

1. Simple - 초창기 CQRS 구현은 명령과 쿼리의 어플리케이션 레이어를 나누고, 일관성(persistence) 을 유지하기 위하여 데이터베이스의 스키마만 분리하였습니다.

2. Premium - Simple 방법에서 DB 를 분리한 것입니다. NoSQL 을 쿼리용 DB 로 주로 사용합니다.

3. Event Sourcing - 이벤트 소싱은 이벤트 자체를 DB 처럼 사용하는 방식입니다. CUD 명령은 기존의 DB 에 저장을 한 후, 이벤트를 발생시켜서 쿼리용 데이터를 따로 만드는 방식입니다. CQRS 의 가장 큰 시너지를 낼수 있는 방식이라 최근에는 필수적인 설계 방식이 되었습니다.
        ">

        </mark-down>
        <mark-down class="content">
### CQRS 적용
        </mark-down>

        <g-image src="~/img/03_Bizdevops/04_통합/06_CQRS/image1.png"></g-image>

        <mark-down class="content" source="
위 그림의 왼쪽 모형은 CQRS 를 적용하기 전 모형 입니다. UI 에서 명령과 쿼리를 실행하면 도메인 모델이 받아서, 레파지토리를 통하여 데이터 스토어(데이터베이스) 에 저장을 하는 모형 입니다.

CQRS 적용시 (오른쪽 모형) 우선적으로 명령과 쿼리에 해당 하는 도메인 모델과 리드 모델로 나눕니다. 도메인 모델이 저장 되었을시 이벤트를 발생 시켜, 읽기 전용 데이터베이스에 저장을 시킵니다. UI 에서 명령과 쿼리 API 를 분리 하여 조회를 합니다.
<a href='https://justhackem.wordpress.com/2016/09/17/what-is-cqrs/' target='_blank'>이미지 및 내용 참조</a>


### CQRS 장점
* CQRS를 구현 하면 성능, 확장성 및 보안을 최대화할 수 있습니다

- 읽기(Read) 및 쓰기(CUD) 워크로드를 독립적으로 확장가능합니다.
- 읽기(Read) 쪽에서는 쿼리에 최적화된 스키마를 사용하는 반면 쓰기(CUD) 쪽에서는 업데이트에 최적화된 스키마를 사용할 수 있습니다.
- 올바른 도메인 엔터티만 데이터에서 쓰기를 수행하도록 지정하여 보안 수준을 높입니다.

* 도메인 수준에서 병합 충돌이 발생 하지 않도록 방지할 수 있습니다.
- 복잡한 조인을 방지 할 수 있습니다.


### CQRS 어려운점

* CQRS 를 적용하기에 앞서 어떤게 Command 이고 어떤게 Query 인지를 명확하게 분리하는것이 어렵습니다.
* 메세지로 데이터를 처리할때, 오류 또는 중복 메세지를 처리 해야합니다.
* 읽기(Read) 모델 저장소에서 오래된 데이터를 읽는 작업이 필요할때 어려울 수 있습니다.


## 쇼핑몰에서 CQRS 적용
        ">
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/06_CQRS/image2.png"></g-image>
        <mark-down class="content" source="
위 그림의 왼쪽 모형은 CQRS 를 적용하기 전 모형 입니다. UI 에서 명령과 쿼리를 실행하면 도메인 모델이 받아서, 레파지토리를 통하여 데이터 스토어(데이터베이스) 에 저장을 하는 모형 입니다.

CQRS 적용시 (오른쪽 모형) 우선적으로 명령과 쿼리에 해당 하는 도메인 모델과 리드 모델로 나눕니다. 도메인 모델이 저장 되었을시 이벤트를 발생 시켜, 읽기 전용 데이터베이스에 저장을 시킵니다. UI 에서 명령과 쿼리 API 를 분리 하여 조회를 합니다.

위 그림은 쇼핑몰 예제에 CQRS 를 적용 시킨 모형입니다. 우선 적으로 MyPage 라는 조회(쿼리)를 위한 마이크로 서비스를 생성 하였습니다. 이 서비스는 주문,상품,배송 서비스에서 나오는 이벤트를 수집하여 조회용 데이터베이스를 생성 합니다. 조회용 모델은 이벤트 스토밍에서 녹색 스티커와 매칭이 될 수 있습니다.

주문을 하기 위해서는 여러가지 정보를 조회를 하여 한 화면에 보여주어야 하는데, 마이크로 서비스는 join 쿼리를 사용 할 수 없습니다. 만약 위와 같은 모형을 사용하지 않는다면, 매번 API 를 사용하여 데이터를 조회 하여야 하는데, 이는 블로킹을 유발시키고, 각 서비스와의 커플링을 강하게 가져 갈 수 있습니다. 조회용 데이터베이스를 따로 관리한다면 (데이터베이스에서 일종의 View 를 만드는 것과 같은 행위) 단일 데이터베이스를 조회하는 것 보다 빠르게 데이터를 쿼리 할 수 있습니다.

> 이미지 참조 : Modified from Microservices Patterns, Chris Richardson, Manning, 2018
<a href='https://github.com/event-storming/mypage' target='_blank'>소스 참조</a>


## CQRS Lab. (Local)


- Step-1. CQRS View 모델링
- 구현 단계에서 Fork 한 모델(shopide)을 MSAEz 도구에 Load 합니다.
- 스티커 팔레트로부터 View 를 Drag 하여 적절한 위치에 두고, 'OrderStatus' View를 가진 Bounded Context를 추가합니다.
        ">
        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/06_CQRS/image3.png"></g-image>
        <mark-down class="content">

- Step-2. CQRS View 속성 정의
- View (Materialized View) Attributes

        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/06_CQRS/image4.png"></g-image>
        <mark-down class="content">

- Step-3. (이벤트 기반) CQRS View Data Projection
- CREATE (based on 'Ordered' Event)

        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/06_CQRS/image5.png"></g-image>
        <mark-down class="content">

- UPDATE (based on 'Shipped', 'DeliveryCanceled' Events)

        </mark-down>
        <g-image src="~/img/03_Bizdevops/04_통합/06_CQRS/image6.png"></g-image>
        <mark-down class="content">

- Step-4. Code Preview & Download Archive & Load on IDE
- CQRS View 에서 정의한 속성과 참조 Event 속성 간 Type 불일치 오류 시, Casting 으로 교정합니다. (String.ValueOf, Long.ValueOf)
- Data Projection은 PolicyHandler가 아닌, ~ViewHandler에 코드가 자동 생성됩니다.

- Step-5. CQRS Test
- 주문, 배송, CQRS 서비스를 기동하고 새로운 주문을 생성합니다.
`http http://localhost:8081/order productId="1001" qty=10`

- Kafka로부터 Event 및 CQRS Data를 확인합니다.
- kafka Consumer: 
`(kafka-console-consumer.bat --bootstrap-server http://localhost:9092 --topic shopide --from-beginning)`

- CQRS 확인: 
`http http://localhost:8083/orderStatuses`

- 해당 주문을 취소한 뒤, CQRS Data를 확인합니다.
`http DELETE http://localhost:8081/order/1`

- CQRS 확인: 
`http http://localhost:8083/orderStatuses`
        </mark-down>

    </div>
</template>


<script>
    // @group 02_04_07_true
    export default {
        name: 'IntegrationSix',
        props: {
            "CQRS": {
                type: String
            },
        },

    }
</script>