<template>
    <div>
        <mark-down class="content">
## 설계(Design) 단계

MSA 아키텍처는 크게 Inner와 Outer로 구분해서 이해하면 좋습니다.

Inner 아키텍처는 단위 마이크로서비스 내부의 구성 영역이며, 이를 제외한 모든 클라우드 영역이 Outer 아키텍처에 해당됩니다.

이번 시간에는 Inner 아키텍처 설계 시, 코드 커플링(Code Coupling)과 타임 커플링(Time Coupling)을 회피하기 위한 설계 패턴을 알아보고, DDD(Domain Driven Design)의 가장 손쉬운 실천법인 이벤트스토밍(EventStorming) 대해 학습합니다.

또한, 이벤트스토밍 결과, 도출된 마이크로서비스들 간의 서열과 이들 간의 역학 관계에 대해서도 살펴보고 핵심 서비스를 중심으로 고려되어야 할 요소에 대해 살펴 보겠습니다.

---
        </mark-down>
    </div>
</template>


<script>
    // @group 02_02_01
    export default {
        name: 'index',
        directory:'operation_design',
        props: {
            "설계": {
                type: String
            },
        },

    }
</script>