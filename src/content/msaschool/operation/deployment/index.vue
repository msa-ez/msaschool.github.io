<template>
    <div>
        <mark-down>
## 배포(Deployment) 단계

마이크로 서비스 아키텍처는 서비스의 숫자가 많고, 각 서비스별로 배포주기를 따로 가지고 있습니다. 그리고 배포를 자주하여 개발자 피드백을 빠르게 받아서 개발에서부터 운영까지 끈김이 없는 에자일 방식을 추천합니다. 이렇게 중요한 배포를 수동으로 하게 되면, 상당한 수고와 휴먼에러의 발생 가능성이 있습니다.

이번 단계에서는 DevOps 의 상당 부분을 차지하는 **CI/CD** 를 사용하여 배포를 하는 방법과 CI/CD 에 필요한 툴과 방법들을 모아놓은 **파이프라인**에 대하여 알아 보고, 다양한 **배포 전략**을 배워 보겠습니다.

---
        </mark-down>
    </div>
</template>


<script>
    // @group 02_05_01
    export default {
        name: 'index',
        directory:'operation_deployment',
        props: {
            "배포": {
                type: String
            },
        },

    }
</script>