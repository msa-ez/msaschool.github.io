<template>
    <div>
        <mark-down class="content">
## 통합(Integration) 단계

MSA 로 서비스를 잘게 쪼갰으면 서로간의 통신을 위하여 서비스 통합이 필요합니다.
서비스 간의 통합은 원하는 데이터가 여러 서비스에 쪼개져 있으니, 데이터를 모으는 방법입니다.

서비스들 간의 통합은 크게 UI 에서 통합을 하는 방식과 동기/비동기 통신 으로 부터의 통합 방법이 있습니다. UI 에서 통합은 데이터를 프론트-엔드 에서 데이터를 취합 하는 방식이고, 동기/비동기 통합은 백-엔드 에서 데이터를 취합하는 방식입니다.

동기식 통신 방법은 크게 알려진 Http, TCP, gRPC 등이 있습니다. 비동기식 통신 방법은 UDP, 메세지통신 등이 있습니다.

이번 통합 단계에서는 **분리되어있는 데이터를 합치는 다양한 방법**들에 대하여 알아보고, 서비스들간의 통신시 **트랜잭션 처리 이슈와 해결방법**들을 설명 하겠습니다.


---
        </mark-down>
    </div>
</template>


<script>
    // @group 02_04_01
    export default {
        name: 'index',
        directory:'operation_integration',
        props: {
            "통합": {
                type: String
            },
        },

    }
</script>