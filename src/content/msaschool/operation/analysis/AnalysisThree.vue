<template>
    <div>
        <mark-down class="content">
## 레가시 모노리식 한계 분석

모노리식과 같이 하나의 ‘틀’을 사용하는 구조에서는 시스템적 확장성을 모색하는 데는 한계가 있습니다.

모노리식 아키텍처는 큰 배포 단위 속에 상호 모듈들의 의존도가 높을 뿐만 아니라 단일 DB를 사용합니다.
이로 인해, 사소한 개선 사항의 적용에도 표준 가이드라인 준수, 복잡한 결재 라인을 통한 승인 획득 등 지속적인 딜리버리 절차에 더 많은 시간을 요구하고 있는게 현실입니다.
        </mark-down>

        <g-image src="~/img/03_Bizdevops/01_분석/03_레가시_모노리식의_한계점/image1.png"></g-image>

        <mark-down class="content">
모노리식은 소프트웨어의 표준 준수와 DB 정규화가 생명입니다. 기업내 표준 프레임워크에 맞추어 코딩되어야 하고, 데이터 모델의 거버넌스에 따라 공통 코드 및 데이터 타입의 표준을 준수해야 하는 모델 중심의 협업을 강요합니다.
‘표준’이라는 것은 소프트웨어의 품질을 관리하는 하나의 방법이지만, 소프트웨어를 빠르게 딜리버리하는 데 있어서는 그 반대의 결과를 초래하기도 합니다.

각자의 판단에 표준을 맡기면서 동시에 품질을 높일 수 있는 방법은 서비스를 잘게 쪼개는 것입니다.

서서히 변하는 임팩트와 많은 임팩트가 한번에 변하는 2가지 중, 어느 쪽이 더 안정적이냐는 모노리식이 훨씬 안전하다는 것에 대해 다시 한번 생각해 보게 합니다.

‘빅뱅의 오픈은 사용자의 빅뱅 혼돈을 야기합니다.’

        </mark-down>
    </div>
</template>


<script>
    // @group 02_01_05
    export default {
        name: 'AnalysisThree',
        props: {
            "레가시 모노리식의 한계점": {
                type: String
            },
        },

    }
</script>