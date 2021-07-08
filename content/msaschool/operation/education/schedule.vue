<template>
    <div>
        <mark-down class="content">
## 월별 교육일정

- 7월 21, 22, 23:   MSA School Quick Win Course 

        </mark-down>

        <mark-down class="content">
## 교육신청
- 온라인 교육신청 : (https://docs.google.com/forms/d/e/1FAIpQLSeP2H2XbO_hkgfKRPme5PW9M8DCNBP9noZjjYmXOykd8zyBiA/viewform?usp=sf_link)
- 카카오톡 문의:   open.kakao.com/me/msaschool
        </mark-down>
    </div>
</template>


<script>
        // @group 05_02_05
    export default {
        name:'schedule',
        data() {
            return {}
        },
        props: {
            "교육일정 및 신청": {
                type: String
            },
        },

    }
</script>