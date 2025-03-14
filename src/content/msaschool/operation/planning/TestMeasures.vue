<template>
    <div>
        <div class="Practice-card-box">
                <VueSubLayoutCard lab="contract-test-2022-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## 테스트 방안

마이크로서비스 아키텍처의 경우 서비스들이 각각 분리되어 있고, 다른 서비스에 대한 종속성을 가지고 있습니다.

특정 사용자 시나리오나 기능을 테스트하고자 할 경우 여러 서비스에 걸쳐서 테스트를 진행해야 하고, 테스트 환경 구축이나 문제 발생시 분리된 여러 시스템을 동시에 모니터링해야 하므로 테스팅의 복잡도가 올라 갑니다.

모노리식에서 수행하던 기본적인 테스트에 대해 MSA 환경에서 재고해 보고, MSA 핵심 테스트인 분산 서비스간의 계약(Contract)에 의한 테스트에 대해 설명합니다.


### **단위(Unit) 테스트**

- 소스코드의 특정 모듈이 의도된 대로 작동하는 지에 대한 검사로 테스트 더블(Mock 객체)을 활용하여 테스트 실행
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/03_테스트_방안/image1.jpg"></g-image>
        <br/>
        <mark-down class="content">
### **서비스(통합) 테스트**

- 배포 완료된 완료된 마이크로서비스에 대해 수행

- 단위 테스트의 상위 레이이어 위치하며, 구체적인 로직보다는 실제 네트워크 호출이나 데이테베이스 호출을 포함한 테스트 실행

- 서비스 테스트 전략의 일환으로 모든 서비스를 테스트 하는 대신, 서비스간 통신을 담당하는 어댑터에 대해서만 테스트 수행하기도 함
        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/03_테스트_방안/image2.jpg"></g-image>
        <br/>
        <mark-down class="content">
### **UI(E2E) 테스트**

- 시스템의 모든 컴포넌트가 에정된 방식으로 잘 동작하는지를 확인하는 테스트
- 모든 서비스에 존재하는 앤드 포인트에 대한 부하 및 성능 테스트 방안 고려
- 거의 수행하진 않으나, BDD(Behaviour-Driven Development) 기반의 레코딩 테스트 방안 고려


### **Contract 테스트**

Contract 는 실제 서비스 소비자가 활용하는 API 규약입니다.

Contract 테스트는 서비스 간의 API 가 정상적으로 동작하는 지에 대한 테스트로, 서비스 제공자와 서비스 수요자 사이에 API(또는 Event Pub/Sub)가 유효한지를 사전 점검합니다.

\[테스트 절차\]

- API 소비자가 먼저 계약서 작성
- API 제공자가 계약서를 수신하여 테스트를 수행하고 생성된 Mock 객체를 소비자에 전달
- API 소비자는 Mock 객체를 통해 Stub서버를 자동 생성하여 테스트 수행

MSA에서 Contract 테스트 실패는 배포 시 장애로 연결될 수 있으므로, 소비자 주도의 Contract를 제공자 측에 적용하여 API 제공자의 일방적인 버전 업에 따른 하위 호환성 위배를 원천적으로 방지합니다.

        </mark-down>
        <br />
        <g-image src="~/img/02_Planning/03_품질관리_계획/03_테스트_방안/image3.jpg"></g-image>
        <br/>
        <g-image src="~/img/02_Planning/03_품질관리_계획/03_테스트_방안/image4.png"></g-image>
        <br/>
        <mark-down class="content">
\[Contract 전, 후 비교\]
        </mark-down>

    </div>
</template>


<script>
        // @group 01_02_09_true
    export default {
        name:'TestMeasures',
        data() {
            return {}
        },
        props: {
            "테스트 방안": {
                type: String
            },
        },

    }
</script>
