<template>
    <div>
        <mark-down class="content">
## 성능 확보 방안

모노리식(monolithic) 애플리케이션에서는 단순하게 다른 메소드나 함수를 호출하면 됩니다.

하지만 마이크로서비스(Microservices)에서는 서비스 단위로 나뉘어져 있는 분산 시스템이기 때문에 서비스 간 통신이 필요합니다. 이러한 통신을 프로세스 간 통신(inter-service communication)이라고 합니다.

다음 그림에서 왼쪽이 모노리식, 오른쪽이 마이크로서비스입니다.
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/02_성능_확보_방안/image1.jpg"></g-image>
        <br/>
        <mark-down class="content">
동일 서버의 메모리 상에 로딩된 객체를 호출(Call by Reference) 하는 모노리식 방식에 비해, 물리적으로 다른 서버상에 존재하는 서비스를 호출하는 마이크로서비스 호출 방식은 상대적으로 느릴 수 밖에 없습니다.

특히, 하나의 요청이 하나의 서비스를 실행하는 일대일(One-to-One) 방식이 아닌, 하나의 요청이 여러 서비스를 실행하는 일대다(One-to-Many) 방식의 통신일 경우엔 더욱 느린 성능이 나타 납니다.

따라서, 마이크로서비스 환경에서 성능 확보를 위한 전략들은 계획수립 단계에서 신중히 고려되어야 합니다.


### 1. Inter-Microservice 간 실시간 처리가 필요한 경우가 아니라면, 동기 방식(Request & Response) 대신, 비동기 방식(이벤트 기반 Pub/Sub) 으로 통신하라.
>- 실시간 통신이 필요한 도메인 예시 : 은행 및 주식거래 도메인
>
>- 실시간 통신의 경우가 아니라면, 메시지 브로커를 통한 이벤트(Event)의 발행(Publish)과 구독(Subscribe)을 통한 메세지 교환으로 통신
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/02_성능_확보_방안/image2.jpg"></g-image>
        <br/>
        <mark-down class="content">

하나의 마이크로서비스는 원자적 트랜잭션(Atomic Transaction)들로 구성됩니다. 이러한 마이크로서비스들 간 통신 방식은 크게 동기(Synchronous)와 비동기 방식(Asynchronous)으로 구분 됩니다.

동기 방식은 요청을 보내고 응답이 올 때까지 기다리는 방식으로 이후 동작은 블로킹(Blocking) 상태가 됩니다. 그리고 응답을 받은 후에 처리합니다.

반대로 비동기 방식은 요청을 보내고 응답이 올 때까지 기다리지 않고 다음을 실행합니다.

위 그림에서 주문서비스는 '주문 발생'에 대한 이벤트를 퍼블리시한 후, 상품서비스의 응답을 기다리지 않고, 바로 다음 주문요청을 기다립니다.

이렇게 함으로써 User Request 에 대한 처리 성능을 높이고, 시스템 장애에도 블로킹 없는 서비스가 가능합니다.



### 2. 서비스 간 동기 호출(Request & Response)의 경우, Proxy 패턴을 적용해 Circuit Breaker, Rate Limiting 을 활용하라.
>- 서킷 브레이커(Circuit Breaker) : 장애 상황 시, 서비스 간 장애 격리를 통한 블로킹 방지 패턴
>- 레이트 리미팅(Rate Limiting) : 서비스에 대한 호출 횟수를 통제하여 장애를 미연에 방지하기 위한 패턴
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/02_성능_확보_방안/image3.jpg"></g-image>
        <br/>
        <mark-down class="content">

사용자가 주문은 이를 처리하는 주문 서비스에서 상품의 재고 확인을 위해 상품 서비스를 요청하게 됩니다.

만약, 상품 서비스가 장애 났을 때 장애가 전파되지 않도록 하기위해 회로 차단기 역할의 서킷 브레이커를 두 서비스 사이에 추가합니다.

상품 서비스가 장애로 인해 응답 지연이 발생하면, 서킷 브레이커가 중간에서 응답해 주문서비스 및 사용자에게는 응답 지연이 발생하지 않습니다.

레이트 리미팅은 서버로 유입되는 과도한 요청에 대해, 소프트웨적으로 통제하는 기능을 수행합니다.

서비스 블로킹 회피를 위한 패턴 적용으로 성능 저하를 방지합니다.


### 3. CQRS 패턴을 적용한 효율적인 데이터 프로젝션 및 Data Caching
>- CQRS(Command and Query Responsibility Segregation ): 명령과 조회의 책임을 분리하는 패턴
>- 매번 여러 테이블을 Join 하여 Data 를 조합하지 않고, 프로비저닝할 데이터를 발생 시점에 미리 적재하여 응답함으로써 조회 성능 보장
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/02_성능_확보_방안/image4.jpg"></g-image>
        <br/>
        <mark-down class="content">

마이페이지 서비스는 사용자의 주문 정보와 상품, 배송 정보를 조합한 내용을 하나의 테이블로 형식으로 출력합니다.

마이페이지가 서비스 할 데이터 목록은 주문/ 상품/ 배송 서비스에서 발생하는 모든 이벤트로부터 Subscribe 하여 미리 데이터를 구축하고, 마이페이지 호출이 있을 때 이를 제공 함으로써 서비스의 조회 성능을 향상시킵니다.

사용자별 마이페이지 데이터를 HTML 형식의 Static Contents 로 생성해 두면, Cache 를 통해 더 나은 성능의 서비스가 가능합니다.


### 4. 페이지 렌더링 방식의 전환 (Server-Side 렌더링에서  Client-Side 렌더링으로)
>- 클라언트 CPU 자원을 활용한 페이지 Rendering 으로 한정된 서버 리소스 분산
>- 최초 한번만 전체 페이지를 로딩(SPA : Single Page Application)하고, 이후 데이터만 변경하는 방식으로 페이지 로딩 성능 향상
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/02_성능_확보_방안/image5.jpg"></g-image>
        <br/>
        <mark-down class="content" source="
이미지 출처 : <a href='https://asfirstalways.tistory.com/244' target='_blank'>https://asfirstalways.tistory.com/244</a>

서버 사이드 렌더링은 요청시마다 새로고침이 발생하며, 새로운 페이지를 서버에 매번 요청하게 됩니다.

모바일 환경이 대중화되고 그에 따라 제공되어지는 정보량이 많아지면서 기존의 방식과 다른 모바일에 최적화된 서비스의 필요에서 등장한 방식이 SPA(Single Page Application)입니다.

SPA(Single Page Application)은 브라우저가 로드된 이후에 페이지 전체를 서버에 요청하는 것이 아니라, 최초에 페이지 전체를 불러온 후에는 데이터만 필요에 맞게 변경하여 사용하는 웹 애플리케이션을 말합니다.

최초 요청에 대해서만 서버 측에서 제공하고 이후의 페이지 또는 데이터 변경에 대해서는 클라이언트 측의 스크립트를 이용해 렌더링함으로써 페이지의 로딩 성능을 향상 시킵니다.

참고
> <a href='https://futurecreator.github.io/2018/10/04/inter-process-communication-in-microservices/' target='_blank'>https://futurecreator.github.io/2018/10/04/inter-process-communication-in-microservices/</a>
> <a href='https://madplay.github.io/post/server-side-rendering-vs-client-side-rendering' target='_blank'>https://madplay.github.io/post/server-side-rendering-vs-client-side-rendering</a>
        ">
        </mark-down>
    </div>
</template>


<script>
        // @group 01_02_07
    export default {
        name:'PerformanceMeasures',
        data() {
            return {}
        },
        props: {
            "성능 확보 방안": {
                type: String
            },
        },

    }
</script>