<template>
    <div>
        <mark-down class="content">

## 어그리게이트(Aggregate) 모범 사례
- JPA와 도메인 주도 설계(DDD) 원칙을 적용한 모범 사례

### 목차

1. 소개
2. 배경
3. 관계형 데이터베이스 스키마 설계
4. 어그리게이트 루트 찾기
5. Hibernate 관계 매핑 시 4가지 결정 사항
5.1 관계 매핑을 만들지 여부
5.2 단방향 또는 양방향 관계
5.3 지연 또는 즉시 로딩
5.4 연쇄 작업(Cascade) 설정
6. 결론


### 1. 소개

이 교육 자료는 JPA/Hibernate를 사용할 때 도메인 주도 설계(DDD) 원칙을 적용하여 흔한 문제들을 해결하는 방법에 대해 설명합니다. JPA와 Hibernate를 사용하면서 경험할 수 있는 여러 가지 문제점들을 소개하고, 이를 해결하기 위한 접근 방법을 제시합니다.

### 2. 배경

JPA/Hibernate를 사용하면서 다음과 같은 문제들을 경험할 수 있습니다:

- 의도치 않은 즉시 로딩으로 인한 전체 데이터베이스 메모리 로드
- N+1 지연 로딩 문제
- 의도치 않은 즉시 `ToOne` 매핑
- `LazyInitializationException`
- 의도치 않은 연쇄 삭제 또는 고아 레코드
- 의도치 않은 즉시 로딩으로 인한 성능 저하

이러한 문제들은 대부분 설계 단계에서의 일관성 없는 결정으로 인해 발생합니다. 이 교육 자료에서는 도메인 주도 설계 원칙을 적용하여 이러한 문제들을 해결하는 방법을 소개합니다.

### 3. 관계형 데이터베이스 스키마 설계

도메인 주도 설계를 적용하려면 먼저 비즈니스 하위 도메인을 정의해야 합니다. 그 다음, 관계형 데이터베이스에 저장할 어그리게이트/엔티티를 정의할 수 있습니다.

중요한 점은 Hibernate 엔티티 설계로 시작하지 않고, 먼저 엔티티 관계 다이어그램(ERD)을 만드는 것입니다.

예를 들어, 다음과 같은 엔티티들이 있다고 가정해봅시다:

- Customer (고객)
- Customer Home Address (고객 집 주소)
- Order (주문)
- Order Line (주문 라인: 각 제품의 수량)
- Shipping Address (배송 주소)
- Product (제품)
- Product Category (제품 카테고리)

이들 간의 기본적인 관계를 나타내는 ERD는 다음과 같습니다:

        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/b074c0e1-8a12-42c6-8f29-56bd053c0531" style="margin-top: 10px;"></g-image>
        <mark-down class="content">

### 4. 어그리게이트 루트 찾기

도메인 주도 설계에서 어그리게이트 루트는 "전체 어그리게이트에 대한 게이트웨이 역할을 하는 엔티티로, 어그리게이트의 무결성과 일관성을 유지하는 역할"을 합니다. 간단히 말해, 서비스에서 가장 중요하고 관련성 있는 주요 엔티티를 찾는 것입니다.

예를 들어, 다음과 같은 요구사항이 있다고 가정해봅시다:

1. 이메일 주소로 고객을 쉽게 검색할 수 있어야 함
2. 고객의 집 주소를 쉽게 조회할 수 있어야 함
3. 특정 고객의 주문을 쉽게 조회할 수 있어야 함
4. 특정 주문의 정보를 쉽게 조회할 수 있어야 함 (주문에 포함된 다양한 제품 및 각 제품의 수량 포함)

이러한 요구사항을 바탕으로 `Customer`, `Order`, `Product`를 어그리게이트 루트로 그룹화할 수 있습니다.

#### 휴리스틱 1: Spring Repository는 어그리게이트 루트 엔티티에 대해서만 정의되어야 합니다.

따라서 `CustomerRepository`, `OrderRepository`, `ProductRepository`만 정의해야 합니다.

        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/24a91c6e-bb3a-4dfb-940d-2938a3f4844b" style="margin-top: 30px;"></g-image>
        <mark-down class="content" style="margin-top: 30px;">

### 5. Hibernate 관계 매핑 시 4가지 결정 사항

Hibernate 관계 매핑을 만들 때 다음 4가지 결정을 해야 합니다:

1. 관계 매핑을 만들지 여부
2. 단방향 또는 양방향 관계
3. 지연 또는 즉시 로딩
4. 연쇄 작업(Cascade) 설정

### 5.1 관계 매핑을 만들지 여부
        </mark-down>
        <mark-down class="content" style="margin-top: 0;">
#### 휴리스틱 2: 어그리게이트 내에서는 `@OneToOne` 또는 일부 `@ManyToOne` 대신 Value 객체 사용을 고려하세요.

예를 들어, `HomeAddress`는 엔티티가 아닌 Value 객체로 처리할 수 있습니다. JPA에서는 `@Embeddable`과 `@Embedded` 어노테이션을 사용하여 이를 구현할 수 있습니다.

```java
@Embeddable
public class Address {
    private String street;
    private String city;
    private String zipCode;
    // getters and setters
}

@Entity
public class Customer {
    @Id
    private Long id;
    
    @Embedded
    private Address homeAddress;
    // other fields, getters and setters
}
```

#### 휴리스틱 3: 어그리게이트 루트 간의 관계 매핑은 피하고, 외래 키를 그대로 매핑하세요.

예를 들어, `Order` 엔티티에서 `Customer`로의 관계를 다음과 같이 매핑할 수 있습니다:

```java
@Entity
public class Order {
    @Id
    private Long id;
    
    private Long customerId; // 외래 키를 그대로 사용
    // other fields, getters and setters
}
```

#### 휴리스틱 4: 다른 어그리게이트 루트와의 관계 매핑은 관계가 유한할 때만 허용하세요.

예를 들어, `Product`와 `ProductCategory` 간의 관계는 유한하므로 다음과 같이 매핑할 수 있습니다:

```java
@Entity
public class Product {
    @Id
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "category_id")
    private ProductCategory category;
    // other fields, getters and setters
}
```
        </mark-down>
        <mark-down class="content" style="margin-top: 40px;" source='
### 5.2 단방향 또는 양방향 관계

#### 휴리스틱 5: 항상 단방향 관계로 시작하세요. 필요가 생기고 관계가 어그리게이트 루트를 넘지 않을 때만 양방향 관계로 변환하세요.

예를 들어, `Order`와 `OrderLine` 간의 관계는 다음과 같이 단방향으로 시작할 수 있습니다:

 ```java
@Entity
public class Order {
    @Id
    private Long id;
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderLine> orderLines = new ArrayList<>();
    // other fields, getters and setters
}

@Entity
public class OrderLine {
    @Id
    private Long id;
    
    private int quantity;
    // other fields, getters and setters
}
```
        '></mark-down>
        <mark-down class="content" style="margin-top: 40px;" source='
### 5.3 지연 또는 즉시 로딩

#### 휴리스틱 6: 어그리게이트 루트에서 모든 자식 관계를 지연 로딩으로 시작하세요. 관련 엔티티가 항상 필요한 경우에만 즉시 로딩으로 변환하세요.

```java
@Entity
public class Order {
    @Id
    private Long id;
    
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderLine> orderLines = new ArrayList<>();
    // other fields, getters and setters
}
```

#### 휴리스틱 7: 다른 어그리게이트 루트와의 관계가 있다면 절대 즉시 로딩을 사용하지 마세요.

```java
@Entity
public class Product {
    @Id
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private ProductCategory category;
    // other fields, getters and setters
}
```
        '></mark-down>
        <mark-down class="content" style="margin-top: 40px;" source='
### 5.4 연쇄 작업(Cascade) 설정

#### 휴리스틱 8: 어그리게이트 루트가 아닌 모든 엔티티에 대해 연쇄 작업을 설정하세요. 연관된 어그리게이트 엔티티에 대해서는 연쇄 작업을 설정하지 마세요.

```java
@Entity
public class Order {
    @Id
    private Long id;
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderLine> orderLines = new ArrayList<>();
    
    private Long customerId; // 다른 어그리게이트 루트에 대해서는 cascade 설정 없음
    // other fields, getters and setters
}
```
        '></mark-down>
        <mark-down class="content" style="margin-top: 30px;">
### 6. 결론

이 교육 자료에서는 도메인 주도 설계 개념을 JPA/Hibernate 관계 설계에 적용하는 방법에 대해 설명했습니다. 다음은 8가지 휴리스틱을 요약한 것입니다:

1. Spring Repository는 어그리게이트 루트 엔티티에 대해서만 정의되어야 합니다.
2. 어그리게이트 내에서는 `@OneToOne` 또는 일부 `@ManyToOne` 대신 Value 객체 사용을 고려하세요.
3. 어그리게이트 루트 간의 관계 매핑은 피하고, 외래 키를 그대로 매핑하세요.
4. 다른 어그리게이트 루트와의 관계 매핑은 관계가 유한할 때만 허용하세요.
5. 항상 단방향 관계로 시작하세요. 필요가 생기고 관계가 어그리게이트 루트를 넘지 않을 때만 양방향 관계로 변환하세요.
6. 어그리게이트 루트에서 모든 자식 관계를 지연 로딩으로 시작하세요. 관련 엔티티가 항상 필요한 경우에만 즉시 로딩으로 변환하세요.
7. 다른 어그리게이트 루트와의 관계가 있다면 절대 즉시 로딩을 사용하지 마세요.
8. 어그리게이트 루트가 아닌 모든 엔티티에 대해 연쇄 작업을 설정하세요. 연관된 어그리게이트 엔티티에 대해서는 연쇄 작업을 설정하지 마세요.

이러한 휴리스틱을 따르면 JPA/Hibernate를 사용할 때 발생할 수 있는 많은 문제들을 예방하고 더 효율적인 데이터베이스 설계를 할 수 있습니다

#### *역자 comment : 지연로딩 부분은 동일 바운디드 컨텍스트 내에서는 허용 가능함
        </mark-down>

        <br><br><br>

        <mark-down class="content">
> [원문 참조 : Applying Domain-Driven Design Principles for JPA/Hibernate Mappings Best Practices](https://medium.com/@chikim79/applying-domain-driven-design-principles-for-jpa-hibernate-mappings-best-practices-17e9594c9fb4)
        </mark-down><br>
    </div>
</template>


<script>
    // @group 02_02_06
    export default {
        name: 'DesignAggregate',
        props: {
            "어그리게이트 모범 사례": {
                type: String
            },
        },

    }
</script>