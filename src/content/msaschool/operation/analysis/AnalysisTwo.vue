<template>
    <div>
        <mark-down class="content">
## 애자일 필요성 분석

애자일(Agile) 아키텍처의 궁극적인 목표는 ‘애자일한 조직으로의 변화’입니다. 빠르게 새로운 기능들을 피처블 할 수 있는 애자일한 체제을 만들어야 한다는 것으로, 큰 플래닝을 하지 말고 잦은 실패를 통해 성공에 도달해 가는 생태계가 ‘애자일’인 것입니다.

애자일은 기술이 아닌 성공을 위한 태도의 변화입니다. 잦은 실패(Fail Fast, Fail Cheap)를 통해 빠르게 새로운 것을 시도하고 고객의 반응을 살필 수 있는 고객 주도적(Consumer-driven) 접근법입니다.
        </mark-down>

        <g-image src="~/img/03_Bizdevops/01_분석/02_애자일_필요성_분석/image1.png"></g-image>

        <mark-down class="content">
애자일한 경영제체를 구사하기 위해서는 각 팀별 독립적으로 배포 가능한 느슨한(Loosely Coupled) 소프트웨어 구조를 가져야 합니다.

마케팅 팀이 주문팀 소프트웨어 구조와 상관없이 새로운 추천 알고리즘을 언제든 배포 가능해야 합니다. 또한 아키텍처 적으로도 주문팀이 Java 기반일 때, 마케팅 팀은 파이썬 기반의 머신러닝 아키텍처를 적용하고자 할 시에 전혀 걸림돌이 없어야 함을 말합니다.

이러한 환경에서 각 팀들은 최소의 기능(Minimum Viable Product)만으로 고객의 니즈를 꾸준히 탐색할 수 있는 지속적 딜리버리와 지속적 개선이 가능한 것입니다.
        </mark-down>

        <g-image src="~/img/03_Bizdevops/01_분석/02_애자일_필요성_분석/image2.png"></g-image>
    </div>
</template>


<script>
    // @group 02_01_04
    export default {
        name: 'AnalysisTwo',
        props: {
            "애자일 필요성": {
                type: String
            },
        },

    }
</script>