<template>
    <div>
        <mark-down class="content">
## MSA 전환전략

기존 Legacy시스템을 MSA로 전환하려 할 때, 기업 내 존재하는 많은 서비스들을 한꺼번에 전환하려는 기업은 없을 것입니다.
특정 시스템을 대상으로 MSA 파일럿(Pilot) 프로젝트를 진행하거나, 우선 순위를 평가하여 순차적으로 전환하는 기준이 필요합니다.
        </mark-down>
    </div>
</template>


<script>
    // @group 03_03_01
    export default {
        name:'index',
        directory:'operation_strategy',
        data() {
            return {}
        },
        props: {
            "MSA 전환전략": {
                type: String
            },
        },

    }
</script>