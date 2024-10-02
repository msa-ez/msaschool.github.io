<template>
	<div>
		<mark-down class="content">

## 마이크로서비스의 마법: 어그리게이트와 이벤추얼 컨시스턴시로 데이터 일관성과 성능 모두 잡기

마이크로서비스 아키텍처에서 가장 큰 도전 과제 중 하나인 "데이터 일관성과 성능의 균형"에 대해 이야기해보려 합니다. 특히, 도메인 주도 설계(DDD)의 '어그리게이트' 개념과 '이벤추얼 컨시스턴시' 패턴이 어떻게 이 문제를 해결하는지 살펴보겠습니다.

### 문제 정의: 일관성 vs 성능

전통적인 모놀리식 아키텍처에서는 강력한 트랜잭션 관리를 통해 데이터 일관성을 보장하는 것이 비교적 쉬웠습니다. 그러나 이는 종종 성능과 확장성의 저하를 초래했죠. 반면, 마이크로서비스 아키텍처는 높은 확장성과 성능을 제공하지만, 데이터가 여러 서비스에 분산되어 있어 일관성 유지가 어려워집니다.

그렇다면 이 두 마리 토끼를 어떻게 잡을 수 있을까요? 여기서 어그리게이트와 이벤추얼 컨시스턴시가 등장합니다.

### 어그리게이트: 일관성의 경계 정의

어그리게이트는 도메인 주도 설계의 핵심 개념 중 하나로, 하나의 단위로 취급되어야 하는 관련 객체들의 클러스터를 의미합니다.

#### 어그리게이트의 특징:

1. **트랜잭션 일관성 보장**: 어그리게이트 내의 모든 객체는 항상 일관된 상태를 유지해야 합니다.
2. **불변식(Invariants) 유지**: 어그리게이트는 자체적으로 비즈니스 규칙을 강제합니다.
3. **원자적 업데이트**: 어그리게이트 전체가 한 번에 업데이트됩니다.

		</mark-down>
		<mark-down class="content" style="margin-top: 20px;" source='
#### 예시: 주문 어그리게이트

```java
public class Order {
private OrderId id;
private CustomerId customerId;
private List<OrderLine> orderLines;
private Money totalAmount;

public void addOrderLine(Product product, int quantity) {
		OrderLine newLine = new OrderLine(product, quantity);
		orderLines.add(newLine);
		recalculateTotalAmount();
}

private void recalculateTotalAmount() {
		this.totalAmount = orderLines.stream()
		.map(OrderLine::getLineTotal)
		.reduce(Money.ZERO, Money::add);
}

// 불변식 검증
public boolean isValid() {
		return totalAmount.equals(
		orderLines.stream()
				.map(OrderLine::getLineTotal)
				.reduce(Money.ZERO, Money::add)
		);
}
}
```

이 예시에서 `Order`는 어그리게이트 루트이며, `OrderLine`들과 함께 하나의 어그리게이트를 형성합니다. `addOrderLine` 메서드는 새로운 주문 항목을 추가하고 총액을 재계산하는 작업을 원자적으로 수행합니다.

### 이벤추얼 컨시스턴시: 유연한 일관성 모델

이벤추얼 컨시스턴시는 분산 시스템에서 데이터의 일관성을 유지하는 방법으로, "결과적으로는 일관성이 보장된다"는 개념입니다.

#### 이벤추얼 컨시스턴시의 특징:

1. **비동기 업데이트**: 변경사항이 시스템 전체에 즉시 반영되지 않아도 됩니다.
2. **높은 가용성**: 일시적인 불일치를 허용하므로 시스템의 가용성이 향상됩니다.
3. **확장성**: 서비스 간 강한 결합이 없어 독립적인 확장이 가능합니다.

#### 예시: 주문과 재고 관리

```java
// 주문 서비스
public class OrderService {
public void placeOrder(Order order) {
		// 주문 처리 로직
		orderRepository.save(order);
		eventPublisher.publish(new OrderPlacedEvent(order));
}
}

// 재고 서비스
public class InventoryService {
@EventListener
public void onOrderPlaced(OrderPlacedEvent event) {
		Order order = event.getOrder();
		for (OrderLine line : order.getOrderLines()) {
		Product product = line.getProduct();
		int quantity = line.getQuantity();
		inventoryRepository.decreaseStock(product.getId(), quantity);
		}
}
}
```

이 예시에서 주문 처리와 재고 감소는 별도의 서비스에서 비동기적으로 처리됩니다. 주문이 생성되면 이벤트가 발행되고, 재고 서비스는 이 이벤트를 구독하여 재고를 업데이트합니다.
		'></mark-down>
		<mark-down class="content" style="margin-top: 30px;">

### 어그리게이트와 이벤추얼 컨시스턴시의 시너지

1. **트랜잭션 범위 최적화**
- 어그리게이트는 강한 일관성이 필요한 범위를 명확히 정의합니다.
- 어그리게이트 간의 일관성은 이벤추얼 컨시스턴시로 관리하여 성능을 개선합니다.

2. **복잡성 관리**
- 어그리게이트는 복잡한 도메인 로직을 캡슐화합니다.
- 이벤추얼 컨시스턴시는 서비스 간 복잡한 상호작용을 단순화합니다.

3. **확장성 향상**
- 어그리게이트 단위의 독립적인 저장소 사용이 가능해집니다.
- 이벤추얼 컨시스턴시를 통해 서비스 간 느슨한 결합을 유지합니다.

### 실제 적용 시 고려사항

1. **어그리게이트 크기 결정**
- 너무 크면 성능 저하, 너무 작으면 관리 복잡성 증가
- 비즈니스 요구사항과 성능을 고려하여 적절한 크기 선택

2. **이벤트 순서와 멱등성**
- 이벤트 처리의 순서가 보장되지 않을 수 있음
- 멱등성 있는 이벤트 핸들러 구현 필요

3. **일관성 윈도우 관리**
- 비즈니스 요구사항에 따라 허용 가능한 불일치 기간 정의
- 모니터링 및 알림 시스템 구축

4. **보상 트랜잭션**
- 장애 상황에서의 데이터 정합성 유지 방안 마련
- Saga 패턴 등을 활용한 분산 트랜잭션 관리

### 결론

어그리게이트와 이벤추얼 컨시스턴시는 마이크로서비스 아키텍처에서 데이터 일관성과 성능이라는 두 마리 토끼를 모두 잡을 수 있게 해주는 강력한 도구입니다. 어그리게이트를 통해 중요한 비즈니스 로직의 일관성을 보장하면서, 이벤추얼 컨시스턴시로 시스템 전체의 유연성과 확장성을 확보할 수 있습니다.

물론 이 접근 방식이 모든 문제를 해결해주지는 않습니다. 시스템의 특성, 비즈니스 요구사항, 그리고 팀의 역량을 고려하여 적절히 적용해야 합니다. 그러나 이 두 개념을 잘 이해하고 활용한다면, 더욱 견고하고 확장 가능한 마이크로서비스 아키텍처를 설계할 수 있을 것입니다.

여러분의 프로젝트에서는 어떻게 데이터 일관성과 성능의 균형을 맞추고 계신가요? 어그리게이트와 이벤추얼 컨시스턴시를 적용해 보시는 건 어떨까요?
		</mark-down>
	</div>
</template>


<script>
    // @group 02_02_05
    export default {
        name: 'DesignTradeOff',
        props: {
            "어그리게이트와 이벤추얼 컨시스턴시": {
                type: String
            },
        },

    }
</script>
