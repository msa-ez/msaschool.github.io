<template>
    <div>
    <mark-down class="content">
## 마이크로서비스 세분화 수준
MSA 서비스 구축 시, 범하기 쉬운 오류는 서비스를 왜 나누는지에 대한 기준과 어떻게 나눌 것인지에 대한 전략없이 나누는 개수에 목표를 두는 경우입니다.

나뉘어지는 서비스 개수를 KPI 실적으로 정하는 일은 더욱 있어서는 안됩니다.
나뉘어지는 서비스마다 조직과 매핑 되어 책임의 분산이 이루어져야 하고, Project 가 아닌 Product 관점에서 관리 되어야만 지속적인 DevOps 가 가능해 집니다.

중요한 것은, 서비스의 개수가 아니라 서비스의 굵기(세분성)로 이는, 초기 계획단계 시 고려되어야 합니다.

서비스 세분화 단위는 그 범주에 따라 다음 5 단계로 구분 됩니다.
    </mark-down>
        <br />
        <g-image src="~/img/02_Planning/02_프로젝트_구현전략/02_세분화_수준/image1.png"></g-image>
        <br/>
        <mark-down class="content">
- **Monolith**
-- 서비스를 나누지 않고 한 덩어리로 구현하는 경우
-- 작고 빠르게 동작해야 하며, 변경이 자주 발생하지 않는 서비스는 모노리스 구조 적용
- **Mini Service**
-- 구현이 용이한 단위로, 점진적 MSA 전환이 쉬운 단위
- **Business capability**
-- 서비스의 중요도에 따른 분할로 팀 단위와 연결하기 좋은 경우
-- 비즈니스적 성과 측정과 피버팅(Pivoting)이 용이한 단위
- **Bounded Context**
-- 비즈니스 도메인을 여러 서브 도메인으로 구분(Core, Supportive, General)하고 서브 도메인별 분할
-- 커뮤니케이션이 원활한 단위 – 관심사 분리(Separation of Cencerns)가 용이한 경우
- **Aggregate**
-- 서비스 구분의 최소 단위
-- ACID 가 준수되어야 하는 원자적 단위 – 서비스 유연성이 높은 경우 -
-- * 참고로 12st 쇼핑몰은 분석에서부터 Business capability 단위로 서비스를 나누어 구현하고 있습니다.
        </mark-down>
    </div>
</template>


<script>
    // @group 01_02_03
export default {
    name: "SegmentationLevel",
    props: {
        "세분화 수준": {
            type: String
        }
    }
};
</script>