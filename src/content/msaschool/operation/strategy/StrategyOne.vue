<template>
    <div>
        <mark-down class="content">
## 전환대상 식별

전환 대상 업무의 식별 기준은 업무영역 및 단위 서비스 관점으로 분류할 수 있습니다.

</mark-down>
        <g-image src="~/img/04_Library/03_MSA 전환전략/01_전환대상 식별/image1.png"></g-image><br>
        <mark-down class="content">

업무영역은 비즈니스 효과성 및 실행의 용이성 측면에서, 전략적으로 경쟁우위에 있으며, ERP와 같은 레거시로부터 상대적으로 간섭이 적고 구현이 쉬운 시스템을 우선 대상으로 선정하여야 합니다.

</mark-down>
        <g-image src="~/img/04_Library/03_MSA 전환전략/01_전환대상 식별/image2.png"></g-image><br>
        <mark-down class="content">

단위 서비스 관점에선 관련조직이 2개 부서 이상이며, 변경빈도가 잦을수록 MSA에 적합하나, 데이터 처리와 트랜잭션이 밀접한 즉, 데이터 인텐시브한 경우에는 모노리식이 더 적합한 모형일 수 있습니다.

</mark-down>
        <g-image src="~/img/04_Library/03_MSA 전환전략/01_전환대상 식별/image3.png"></g-image><br>
        <mark-down class="content">
        </mark-down>
    </div>
</template>


<script>
    // @group 03_03_02
    export default {
        name:'StrategyOne',
        data() {
            return {}
        },
        props: {
            "전환대상 식별": {
                type: String
            },
        },

    }
</script>