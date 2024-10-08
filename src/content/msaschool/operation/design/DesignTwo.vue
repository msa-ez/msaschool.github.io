<template>
    <div>
        <mark-down class="content">
## 도메인 주도 설계(Domain Driven Design) ##

## 등장 배경 ##

### 소프트웨어 복잡성의 증가 ###

오늘날의 소프트웨어는 점점 더 복잡해지고 있습니다. 사용자 수가 증가하고, 다양한 요구사항이 추가되면서 소프트웨어가 점점 복잡해지는 것이 현실입니다. 이렇게 복잡해진 시스템에서는 설계와 개발 과정에서 혼란이 생기기 쉽고, 이를 관리하는 것이 점점 어려워집니다. 복잡성을 효과적으로 관리하지 못하면, 개발 속도가 느려지거나 품질이 떨어질 수 있습니다. 따라서, 이 복잡성을 해결하기 위한 새로운 접근 방법이 필요하게 되었습니다.

### 기존 개발 방법론의 한계 ###

과거에는 주로 기술 중심의 개발 방법론이 사용되었습니다. 이런 방법론은 기술적 요구사항을 중점적으로 다루지만, 비즈니스 측면에서 발생하는 다양한 요구사항을 효과적으로 반영하기에는 한계가 있었습니다. 특히, 비즈니스 전문가와 개발자 간의 소통이 원활하지 않으면, 최종 소프트웨어가 비즈니스의 실제 요구를 충족시키지 못할 수 있습니다. 이러한 문제점들을 해결하기 위해 더 나은 방법이 요구되었습니다.

## DDD의 필요성 ###

도메인 주도 설계(DDD)는 이러한 문제들을 해결하기 위해 등장한 접근 방식입니다. DDD는 소프트웨어 개발에서 도메인 지식이 가장 중요한 요소임을 인식하고, 이를 중심으로 소프트웨어를 설계합니다. 도메인 전문가와 개발자가 협력하여 도메인 모델을 구축하고, 이를 통해 비즈니스 요구사항을 충실히 반영할 수 있습니다. 이렇게 하면 복잡한 소프트웨어 시스템도 효과적으로 관리할 수 있게 됩니다.

도메인 주도 설계를 10,000피트 뷰(10,000-foot view)라고 표현하는데, 10,000피트 뷰라는 표현은 전체적인 큰 그림을 보는 것을 의미합니다. DDD는 특정 기술이나 구현 세부사항에 집중하기보다는, 도메인(비즈니스 문제) 전체를 높은 시각에서 바라보고 이를 효과적으로 반영할 수 있는 설계 방식을 지향하고, 단순한 기술적 접근을 넘어서 전체 시스템과 비즈니스 요구사항을 높은 수준에서 바라보며 설계하는 접근 방식이기 때문입니다.
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/4c908e70-d76d-4224-ac33-08e5a11f7e1c"></g-image>

            <mark-down class="content">
## DDD의 개요와 철학 ##

### DDD란 무엇인가? ###

도메인 주도 설계(DDD)는 소프트웨어 설계에서 도메인 지식을 중심에 두는 방법론입니다. 여기서 '도메인'이란 소프트웨어가 해결해야 하는 특정 비즈니스 문제 영역을 의미합니다. DDD는 이 도메인을 깊이 이해하고, 이를 기반으로 소프트웨어를 설계합니다.

도메인 주도 설계(DDD)의 개념을 3가지 측면에서 살펴보면, 
첫 번째는 **도메인 탐색(탐색적 DDD)**으로, 도메인의 현재와 미래, 목표 상태를 모델링하며, 팀 전체가 도메인을 학습하고 해결책 아이디어를 도출할 수 있도록 시각적이고 협업적인 방법을 지원합니다. 예시로는 빅픽처 이벤트스토밍이 있습니다.

두 번째는 **소프트웨어 아키텍처(전략적 DDD)**로, 대규모 소프트웨어 시스템을 도메인 영역에 맞게 분할된 컨텍스트로 나누고, 도메인 이벤트를 통해 이 컨텍스트들을 연결합니다. 이 과정에서 전략적으로 중요한 핵심 도메인을 식별하는 것이 중요합니다.

세 번째는 **소프트웨어 설계(전술적 DDD)**로, 도메인에 대한 팀의 공통된 이해를 바탕으로 코드를 작성하며, 각 컨텍스트에서 적절한 패턴(엔티티, 어그리게이트, 이벤트 소싱 등)을 사용하여 소프트웨어를 설계합니다.


### DDD의 핵심 가치 ###

DDD의 핵심 철학은 "도메인 지식이 가장 중요하다"는 것입니다. 개발자와 도메인 전문가가 협력하여 공통의 언어를 사용하고, 이를 바탕으로 도메인 모델을 구축합니다. 도메인 모델은 비즈니스 요구사항을 정확하게 반영하며, 소프트웨어 설계의 중심이 됩니다. 또한, DDD의 핵심 가치는 비즈니스와 기술의 통합, 유비쿼터스 언어(Ubiquitous Language)의 사용, 그리고 지속적인 모델 진화를 통한 소프트웨어의 개선입니다. 이러한 접근 방식을 통해 DDD는 비즈니스와 기술 간의 간극을 좁히고, 복잡한 시스템에서 발생할 수 있는 문제들을 효과적으로 해결합니다.


## DDD의 전략적 설계 ##


### 바운디드 컨텍스트(Bounded Context) ###

복잡한 소프트웨어 시스템에서 모든 것을 하나의 모델로 해결하려고 하면 혼란이 생길 수 있습니다. 이를 방지하기 위해 DDD는 '바운디드 컨텍스트'라는 개념을 도입합니다. 바운디드 컨텍스트는 특정 도메인 모델이 적용되는 경계를 정의하는 개념입니다. 즉, 하나의 컨텍스트 내에서만 특정 모델과 용어를 사용하도록 함으로써 혼란을 줄이고, 각 컨텍스트가 독립적으로 관리될 수 있도록 합니다. 이를 통해 복잡한 시스템을 더 쉽게 이해하고, 관리할 수 있습니다.

### 서브 도메인(Subdomains) ###

도메인은 일반적으로 여러 부분으로 나뉩니다. DDD에서는 도메인을 세 가지 서브 도메인으로 분류합니다:

1. **코어 도메인(Core Domain)**: 비즈니스의 핵심 가치를 담당하는 영역입니다. 가장 중요한 도메인으로, 여기서의 모델링이 비즈니스 성공에 직접적인 영향을 미칩니다.

2. **지원 도메인(Supporting Domain)**: 코어 도메인을 지원하는 역할을 합니다. 중요도는 코어 도메인보다 낮지만, 코어 도메인이 제대로 기능할 수 있도록 도와주는 필수적인 부분입니다.

3. **일반 도메인(Generic Domain)**: 다른 비즈니스에서도 공통적으로 사용되는 일반적인 기능을 담당합니다. 주로 표준화된 기술이나 외부 라이브러리로 대체할 수 있습니다. e-Commerce 도메인에서 PG(Payment Gateway)사나 물류(Logis)가 이에 해당됩니다.
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/5fd93490-4cc5-4d8d-8384-d8280407c430"></g-image>
        <mark-down class="content">
### 도메인 복잡성의 분리 기준 ###

복잡한 도메인은 하나의 큰 덩어리로 관리하기 어렵기 때문에, 이를 여러 바운디드 컨텍스트와 서브 도메인으로 분리하여 관리하는 것이 중요합니다. 이러한 분리를 통해 각 도메인의 복잡성을 줄이고, 효율적으로 관리할 수 있습니다. 예를 들어, 결제 시스템과 주문 관리 시스템은 별도의 바운디드 컨텍스트로 나눌 수 있으며, 서로 독립적으로 관리될 수 있습니다. 도메인 분리를 위한 세분성(Granularity) 기준에 대해서는 페이지 하단에서 다시 상세하게 소개하고 있습니다.
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/0d495499-1828-4aa8-aa0e-41ea4dbcd755"></g-image>

        <mark-down class="content">
## DDD의 전술적 설계 ##

### 어그리게이트(Aggregate) ###

어그리게이트는 관련된 엔티티와 값 객체들의 집합입니다. 어그리게이트는 도메인 내에서 일관성을 유지하는 단위로, 한 번에 하나의 트랜잭션으로 처리됩니다. 어그리게이트 루트(Aggregate Root)는 이 집합의 진입점이며, 외부에서 접근할 수 있는 유일한 엔티티입니다. 예를 들어, 주문(Order) 어그리게이트는 주문 항목(Order Item) 엔티티와 결제 정보(Payment Information) 값 객체를 포함할 수 있습니다.

### 엔티티(Entity)와 값 객체(Value Object) ###

엔티티(Entity): 엔티티는 고유한 식별자를 가지는 객체로, 도메인 내에서 중요한 정보를 담고 있습니다. 엔티티는 시간이 지나도 동일한 식별자를 유지하며, 상태가 변할 수 있습니다. 예를 들어, 고객(Customer)은 엔티티로 관리될 수 있습니다.
값 객체(Value Object): 값 객체는 고유 식별자가 없으며, 불변성을 유지합니다. 값 객체는 단순히 값만을 담고 있으며, 상태가 변하지 않습니다. 예를 들어, 주소(Address)는 값 객체로 나타낼 수 있습니다.

### 리포지토리(Repository) ###

리포지토리는 어그리게이트를 저장하고 검색하는 역할을 합니다. 데이터베이스와 같은 영속성 저장소에서 어그리게이트를 로드하거나 저장할 때 리포지토리를 사용합니다. 리포지토리는 도메인 모델을 데이터베이스와 독립적으로 유지하는 데 중요한 역할을 합니다. 이를 통해 데이터베이스에 의존하지 않고 도메인 로직을 구현할 수 있습니다.

### 도메인 서비스(Domain Service) ###

도메인 서비스는 특정 엔티티나 값 객체에 속하지 않는 도메인 로직을 캡슐화합니다. 예를 들어, 여러 엔티티에 걸쳐 있는 비즈니스 로직이 있을 때, 이를 도메인 서비스로 구현할 수 있습니다. 도메인 서비스는 도메인 모델을 간결하게 유지하고, 복잡한 비즈니스 로직을 명확하게 관리하는 데 도움이 됩니다.

### 도메인 이벤트(Domain Event) ###
도메인 이벤트는 도메인 내에서 발생한 중요한 사건을 나타냅니다. 예를 들어, 고객이 주문을 완료했을 때 '주문완료됨'이라는 도메인 이벤트가 발생할 수 있습니다. 이러한 이벤트는 시스템의 다른 부분에서 처리될 수 있으며, 이벤트 소싱(Event Sourcing)과 같은 패턴을 통해 시스템의 상태 변화를 기록할 수 있습니다.

### 팩토리(Factory) ###

팩토리는 복잡한 객체를 생성하는 역할을 합니다. 예를 들어, 복잡한 초기화가 필요한 엔티티나 어그리게이트를 생성할 때 팩토리를 사용할 수 있습니다. 팩토리 패턴을 사용하면 객체 생성 로직을 중앙화하고, 객체의 일관성을 유지할 수 있습니다.

## DDD에서 사용하는 용어와 개념 ##

### 유비쿼터스 언어(Ubiquitous Language) ###

유비쿼터스 언어는 개발자와 도메인 전문가가 공통으로 사용하는 언어입니다. 이 언어는 도메인 모델을 설명하는 데 사용되며, 팀 내 의사소통의 혼란을 방지하는 데 중요한 역할을 합니다. 유비쿼터스 언어를 통해 개발팀과 비즈니스 팀이 동일한 이해를 공유할 수 있습니다.

### 안티 코럽션 레이어(Anti-Corruption Layer) ###

안티코러션 레이어는 외부 시스템과의 통합 시, 시스템 간의 모델 차이를 완화하기 위해 사용되는 보호층입니다. 예를 들어, 기존 시스템과 새로운 도메인 모델 간의 데이터 변환이 필요할 때 안티코러션 레이어를 사용합니다. 이를 통해 외부 시스템의 변화가 내부 도메인 모델에 미치는 영향을 최소화하고, 시스템 간의 일관성을 유지할 수 있습니다.

### 도메인 모델의 진화 ###
도메인 모델은 초기 설계 이후에도 지속적으로 진화합니다. 비즈니스 요구사항이 변함에 따라 도메인 모델도 리팩토링되고, 새로운 요구사항을 반영하여 개선됩니다. 도메인 모델의 지속적인 진화는 소프트웨어의 품질을 유지하고, 비즈니스 변화에 유연하게 대응할 수 있도록 합니다.


## 도메인 분리를 위한 세분성(Granularity) 기준 ##

도메인 주도 설계(DDD)에서 도메인을 어떻게 나누고 관리할지 결정하는 것은 매우 중요합니다. 도메인을 분리하는 방식에 따라 시스템의 복잡성, 유지보수성, 그리고 비즈니스 요구사항에 대한 대응 능력이 크게 달라집니다. 이 섹션에서는 도메인 세분성에 대한 주요 기준을 소개합니다.
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/55a030f3-e796-47b8-a0ee-4a6183e11032"></g-image>

        <mark-down class="content">
## 모노리스(Monolith) ##

모노리스 아키텍처는 하나의 단일 시스템으로 모든 기능이 통합된 형태입니다. 이 방식은 초기 개발 단계에서는 간단하고 빠르게 개발할 수 있다는 장점이 있지만, 시간이 지남에 따라 복잡도가 증가하고 유지보수가 어려워지는 단점이 있습니다. 특히, 모든 기능이 단일 코드베이스에 존재하기 때문에 작은 변경 사항도 전체 시스템에 영향을 미칠 수 있습니다. 모노리스 아키텍처는 도메인이 명확히 분리되지 않은 초기 단계나 작은 프로젝트에 적합할 수 있습니다.

## Core/Supporting 도메인 ##

도메인을 중요도에 따라 Core 도메인과 Supporting 도메인으로 분리하는 것은 DDD에서 매우 중요한 전략입니다.

1. **Core 도메인**: 비즈니스의 핵심 가치를 제공하는 영역입니다. 이 부분은 비즈니스 성공에 직접적인 영향을 미치며, 최우선적으로 관리되고, 설계 시에도 가장 많은 리소스와 주의가 투입됩니다.

2. **Supporting 도메인**: Core 도메인을 지원하는 기능을 담당합니다. 이 도메인은 중요하지만, 비즈니스의 핵심이 아니므로, 표준적인 솔루션이나 외부 라이브러리로 대체될 수 있는 경우가 많습니다.
이렇게 도메인을 분리함으로써, 비즈니스에 가장 중요한 부분에 집중할 수 있으며, 핵심 도메인에 더 많은 리소스를 투입할 수 있습니다.
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/83c95659-603f-4891-bd8a-6bfeb453c0fe"></g-image>

        <mark-down class="content">
### Business Capability 기반 분리 ###

비즈니스 역량(Business Capability) 단위로 도메인을 분리하는 접근 방식은 각 팀이 특정 비즈니스 기능이나 역량을 중심으로 작업할 수 있도록 도와줍니다. 이 방식은 대규모 조직에서 특히 유용하며, 각 팀이 독립적으로 운영될 수 있는 환경을 조성합니다. 예를 들어, 주문 처리 팀, 결제 팀, 배송 팀 등으로 조직을 나누어 각 팀이 독립적인 서브 도메인을 관리하게 할 수 있습니다.

장점: 팀 간의 의존성이 줄어들고, 각 팀이 자신들의 도메인에 대한 책임과 소유권을 가질 수 있습니다.
단점: 각 팀이 서로 다른 도메인을 관리하다 보면, 전체 시스템 간의 통합이 어려워질 수 있습니다.     
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/dc457b31-ca42-49bf-a9ae-aed9ba11ea89"></g-image>

        <mark-down class="content">
### 서브 도메인 기준 ###

서브 도메인 기준으로 도메인을 분리하는 것은 DDD에서 매우 일반적인 접근 방식입니다. 서브 도메인은 전체 도메인을 보다 작은 논리적 단위로 나누어, 각각의 서브 도메인이 특정 비즈니스 문제를 해결하도록 하는 것입니다. 이 접근 방식은 서브 도메인 간의 경계를 명확히 하여, 각 서브 도메인이 독립적으로 관리되고 확장될 수 있도록 합니다. 
        </mark-down>

        <g-image src="https://github.com/user-attachments/assets/474b3f9e-fc5e-459d-b364-b8a7f47a4ca1"></g-image>

        <mark-down class="content">
### 어그리게이트(Aggregate) 기준 ###

어그리게이트는 도메인 내에서 관련된 엔티티와 값 객체들의 집합으로, 도메인 모델의 일관성을 유지하는 데 중요한 역할을 합니다. 어그리게이트 기준으로 도메인을 분리하면, 도메인의 특정 부분에서 일관성을 유지하는 데 집중할 수 있습니다. 어그리게이트는 도메인 로직이 응집력을 가지도록 도와주며, 트랜잭션 경계를 명확히 할 수 있습니다.

어그리게이트 루트: 어그리게이트의 진입점으로, 외부에서 접근할 수 있는 유일한 엔티티입니다.
응집성: 어그리게이트 내부의 엔티티와 값 객체들은 응집성을 유지하며, 하나의 단위로 트랜잭션이 처리됩니다.
어그리게이트를 기준으로 도메인을 분리하면, 도메인 로직이 더 명확해지고, 시스템의 일관성을 유지하는 데 도움이 됩니다.
        </mark-down>
        <g-image src="https://github.com/user-attachments/assets/4d335054-eb98-4583-93b4-86589807ed08"></g-image>
    </div>
</template>


<script>
    // @group 02_02_04
    export default {
        name: 'DesignTwo',
        props: {
            "도메인 주도 설계(DDD)": {
                type: String
            },
        },

    }
</script>
