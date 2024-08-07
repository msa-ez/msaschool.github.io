<template>
    <div>
        <div style = "height:30px; width:100%; margin-top:20px;">
                <VueSubLayoutCard lab="ddd-google-drive-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## 이벤트스토밍

이벤트스토밍은 Event와 BrainStorming의 합성어로 Domain Expert와 개발 전문가가 함께 모여 워크샵 형태로 진행되는 방법론입니다. DDD 방법론 중, 복잡한 UML다이어그램이나 도구 없이 수행할 수 있어 MSA를 구현하는데 가장 최적의 방법론입니다.

이벤트스토밍은 시스템에서 발생하는 이벤트를 중심(Event-First)으로 분석하는 기법으로 특히, Non-Blocking, Event-driven한 MSA 기반 시스템을 분석에서 개발까지 필요한 도메인에 대한 빠른 이해를 도모하는데 유리합니다.

기존의 유즈케이스나 클래스 다이어그래밍 방식은 고객 인터뷰를 통해 요구사항을 정제하고, 상세 설계를 통한 엔티티 구조를 인지하는 방식이었으나, 이벤트스토밍은 별다른 사전 훈련된 지식과 도구없이 진행할 수 있습니다.
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image1.png"></g-image>
        <mark-down class="content">
진행 과정은 참여자 워크숍 방식의 방법론으로 결과는 스티키 노트를 벽에 붙힌 것으로 결과가 남으며, 오렌지 스티키 노트들의 연결로 비즈니스 프로세스가 도출되고 이들을 이후 BPMN과 UML등으로도 정제하여 전환할 수 있습니다.

## **개념**

이벤트스토밍은 도메인에 관련된 모든 이해 관련자가 모여, 화이트보드 벽면에 주요 이벤트(Event)를 중심으로 업무들 간의 상호 연관성을 찾기 위해, 유일한 도구인 스티키 노트(Sticky Notes)로 진행하는 MSA DDD를 위한 워크숍 기반 최상의 실천 방법론입니다.

## **수행 방법**
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image2.jpeg"></g-image>

        <mark-down class="content">
1.  이벤트스토밍에 필요한 화이트 보드 벽면과 수행에 필요한 오렌지, 라일락, 스카이블루, 노랑, 초록, 퍼플, 분홍색의 스티커를 준비합니다.

2.  Domain expert 와 기획자, 개발 전문가와 함께 사용자 시나리오, 또는 업무 요건을 리뷰합니다.

3.  가장 먼저, 발생 가능한 Event를 무작위로 도출하고, Policy, Command, Aggregate 순서로 이벤트를 중심으로 스티커별 해당 내용을 정의하고 발생시간 순서로 벽면에 부착합니다.

4.  Bounded Context 를 설정하고 서브 도메인 간의 컨텍스트 매핑을 통해 BC간의 정보 참조의 릴레이션을 정의합니다.

## **스티커 유형**

이벤트스토밍에 필요한 스티커 색상별 내포하는 의미는 아래와 같습니다.
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image3.png"></g-image>

<!-- piad -->
<!--        <purchase-item-->
<!--                itemId="design_designThree_one"-->
<!--                itemPrice="-100"-->
<!--                itemOpenRange="5"-->
<!--        >-->
<!--            <div>-->
    <mark-down class="content">
### **Step 1. \[Event 정의\]**

가장 먼저 우리 서비스에서 발생하는 비즈니스 이벤트를 도출합니다. 용어의 네임스페이스를 구지 나누려 하지 말고 가급적 현업이 사용하는 용어를 그대로 사용(Ubiquitous Language)하여 오렌지색 스티커에 이벤트를 기술하고 이를 벽면에 붙입니다.

비즈니스 이벤트는 과거형으로 작성하는데 도메인 내부에 상태가 변화되고 난 결과가 이벤트 입니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image4.png"></g-image>

    <mark-down  class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/7634e33c1dbef48c862f6345bf359f65/-M6hDgn6yahYq-tvRzO6)**
### **Step 2. \[Policy 정의\]**

이벤트스토밍의 두번째 수행 대상은 폴리시(Policy) 도출입니다.

폴리시(Policy)는 이벤트가 발생한 후 연이어 발생하는 반응형 액션으로, 한 서비스 이벤트에 대해 수행되어야 할 타 서비스의 액션들로, 먼저 정의된 이벤트 아래에 덧대어 붙입니다.
하나의 이벤트에 반응하여 수행되어야 할 폴리시는 여러 팀에서 도출된 멀티 액션이 존재할 수 있습니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image5.png"></g-image>

    <mark-down class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/b6ccae001b31541a6ab0e108c7693d66/-M6hD52jnUez2Cs2cHdS)**

### **Step 3. \[Command 도출\]**

세번째로 Event를 발생시키는 행위인 커맨드를 도출하는데, 도메인 내의 어떠한 상태 변화를 일으키는 서비스를 말합니다.
웹 페이지 내에서 버튼을 클릭하는 User Decision이 여기에 해당됩니다.
도출된 커맨드는 이벤트 스티커 앞쪽에 붙여, 스티커를 통한 나레이션(Narration)이 되도록 정렬합니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image6.png"></g-image>

    <mark-down class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/b54d65b8a4d98df6e90df04969470b32/-M6gsI99BoHanHKat0Hu)**

### **Step 4. \[Actor 정의\]**

Actor는 커맨드를 발생시키는 주체(사람, 시스템, 등)를 말합니다. 액터는 담당자 또는 시스템이 될 수 있으며, 직관적으로 파악될 수 있는 액터의 경우, 표시하지 않아도 무방합니다. 도출된 액터는 유저 스토리에 가까운 나레이션이 가능하도록 해당 커맨드 스티커 왼쪽에 배치합니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image7.png"></g-image>

    <mark-down class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/bf99cb318f0fe2c4a34373988431d928/-M6h4E2Hp-BCrOofDppV)**

### **Step 5. \[Aggregate 정의\]**

다섯번째로, 어그리게잇을 도출합니다. 어그리게잇은 ‘결합물’을 의미하는데 어떠한 도메인 객체를 중심으로 하나의 ACID한 트랜잭션에 묶여 변화되어야 할 객체의 묶음을 도출하고, 그것들을 커맨드, 이벤트와 함께 묶습니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image8.png"></g-image>

    <mark-down class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/8f73239474cd9821d1200787133c5e96/-M6h6Z1Gdt-296q_mbKl)**

### **Step 6. [Bounded Context 도출]**

Bounded Context는 동일한 문맥으로 효율적으로 업무 용어(도메인 클래스)를 사용할 수 있는 객체 범위를 뜻합니다. 하나의 BC는 하나 이상의 어그리게잇을 원소로 구성될 수 있습니다. 이 BC를 마이크로서비스 구성 단위로 정하게 되면 이를 담당하는 팀내의 커뮤니케이션이 효율화 됩니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image9.png"></g-image>

    <mark-down class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/aa66d39133709b08cd81e9625133a163/-M6h8IZ4-f1FZPfVnAAE)**

### **Step 7. [Context 매핑]**

바운디드 컨텍스트까지 도출된 이후에 BC간 정보 참조 릴레이션 설정 (혹은, 이벤트가 발생한 이후 동반된 행위의 호출 관계를 선으로 표시)하는 작업을 ‘컨텍스트 매핑’이라고 합니다. 컨텍스트간 매핑 정보만 보더라도 전체 도메인 서비스의 참조 토폴로지(Topology)를 한 눈에 파악 가능합니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image10.png"></g-image>

    <mark-down class="content">
**[ MSAez 에서 보기 >> ](http://msaez.io/#/storming/VdykvRQp3sZo5sXWaKm6iy81wop2/every/15cbb13453c69151577b01aeeda7efa0/-M6hC2amFBvtwNGLnbpi)**

위 예시에서 ‘주문이력에 추가’라는 폴리시(비즈니스 업무) 시작 주체에 따라 크게 2가지 토폴로지를 고려할 수 있는데, 이벤트를 발행하는 주체인 주문관리에서 해당 폴리시를 시작하는 ‘오케스트레이션’ 방식과 이벤트를 수신하는 주체인 마케팅관리에서 폴리시를 시작하는 ‘코레오그래피’ 방식으로 구분합니다.


> #### **- Orchestration(오케스트레이션)**

> 오케스트레이션은 이벤트를 발행하는 주체인 주문관리에서 모든 폴리시를 호출하는 방식입니다.
    </mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image11.png"></g-image>

    <mark-down class="content">
> 이는 주문관리 서비스에서 발생한 이벤트인 ‘주문 생성됨’, ‘주문정보 변경됨’, ‘주문상태 변경됨’에 붙여진 모든 폴리시의 Owner 서비스마다 커맨드를 노출하고, 이벤트를 생성하는 주문 서비스에서 이 커맨드를 동기 방식(Request & Response)으로 호출하는 방식으로 구현됩니다.

> 그러나, 이러한 방식은 서비스간 커플링이 높으며, 폴리시를 호출한 서비스(여기서는 주문관리)는 폴리시가 수행 완료될 때까지 대기상태에 빠지게 되므로, 시스템 블로킹(Blocking)이 생길 우려가 높습니다.

> 또한, 호출당하는 폴리시를 가진 시스템이 얘기치않은 장애(System Fault)에 빠진 경우, 이를 호출하는 서비스에까지 장애가 전파되는 악순환의 우려가 있습니다.

> #### **- Choreography(코레오그래피)**

> 코레오그래피는 폴리시를 구현하는 주체인 배송, 또는 상품관리에서 자율적으로 폴리시를 실행하는 방식입니다.

> 주문관리 서비스에서 발생(Publish)하는 이벤트들에 대해, 폴리시 Owner 서비스들이 관심 있는 이벤트에 반응(Subscribe)하여 자율적으로 서비스를 구동함으로써 Orchestration방식이 가진 서비스간 커플링이 전혀 없으며, 이벤트를 수신하는 신규 서비스의 추가 및 이벤트를 수신하던 기존 서비스의 삭제가 아주 자유롭게 수행 가능합니다.

> 또한, 주문관리 서비스 입장에서도 호출당하는 폴리시를 가진 시스템의 얘기치않은 장애(System Fault)에 대해, 이 방식은 완전히 자유롭다는 것이 가장 큰 장점입니다.
</mark-down>
    <g-image src="~/img/03_Bizdevops/02_설계/03_이벤트스토밍/image12.png"></g-image>
<!--            </div>-->
<!--        </purchase-item>-->
<mark-down class="content">
## 이벤트스토밍 실습 클래스

> 위에서 설명한 이벤트스토밍을 브라우저 상에서 직접 체험할 수 있는 무료 클래스입니다.
> 비즈니스 및 개인적인 용도로 많은 유저들이 사용하고 있는 구글 드라이브 서비스를 코레오그래피 방식의 이벤트스토밍을 기반한 마이크로서비스 형태로 만들어보는 과정입니다.
> 아래 카드를 클릭해 강의실로 이동할 수 있습니다.
</mark-down>
        <div>
            <a href="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/#ddd-google-drive-associate" target="_blank">
            <v-card
                style="margin: 10px 0 30px 10px; width: 350px; height: 300px;"
                outlined
            >
                <g-image style="margin-left: 25px; width: 300px; height: 180px;"
                    src="https://user-images.githubusercontent.com/113568664/211271741-4e4cdd7a-37af-4445-902c-a3229c392e6e.png">
                </g-image>
                <div>
                <div style="margin-left: 40px; font-size:20px; font-weight:900;">[Biz] 이벤트스토밍</div>
                <div style="margin: 10px 40px 50px 40px; font-size:14px;">구글 드라이브 시나리오를 기반으로 한 이벤트스토밍 예제</div>
                </div>
            </v-card>
            </a>
        </div>
    </div>
</template>


<script>
        // @group 02_02_04
    export default {
        name: 'DesignThree',
        props: {
            "이벤트스토밍": {
                type: String
            },
        },

    }
</script>