<template>
    <div>
        <mark-down class="content">
### Food Delivery 예제

아래 기능적, 비기능적 요구사항을 충족하도록 시나리오대로 이벤트스토밍 하시오.
(Eventstorming 수준: Process Level)

### 기능적 요구사항

- 고객이 메뉴를 선택하여 주문한다.
- 고객이 결제한다.
- 주문이 되면 주문 내역이 입점상점주인에게 전달된다.
- 상점주인이 확인하여 요리해서 배달 출발한다.
- 고객이 주문을 취소할 수 있다.
- 주문이 취소되면 배달이 취소된다.
- 고객이 주문상태를 중간중간 조회한다.
- 주문상태가 바뀔 때 마다 카톡으로 알림을 보낸다.

### 비기능적 요구사항
#### 트랜잭션
결제가 되지 않은 주문건은 아예 거래가 성립되지 않아야 한다 Sync 호출

#### 장애격리
- 상점관리 기능이 수행되지 않더라도 주문은 365일 24시간 받을 수 있어야 한다 Async (event-driven), Eventual Consistency
- 결제시스템이 과중되면 사용자를 잠시동안 받지 않고 결제를 잠시후에 하도록 유도한다 Circuit breaker, fallback

#### 성능
- 고객이 자주 상점관리에서 확인할 수 있는 배달상태를 주문시스템(프론트엔드)에서 확인할 수 있어야 한다 CQRS
- 배달상태가 바뀔때마다 카톡 등으로 알림을 줄 수 있어야 한다 Event driven

#### 바운디드 컨텍스트
1. app
2. store
3. pay
4. customer
        </mark-down>
    </div>
</template>


<script>
    // @group 06_02_03
    export default {
        name:'eventstormingFoodDelivery',
        data() {
            return {}
        },
        props: {
            "[이벤트스토밍] DDD Food Delivery 예제": {
                type: String
            },
        },
    }
</script>