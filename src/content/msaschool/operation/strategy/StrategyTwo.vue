<template>
    <div>
        <mark-down class="content">
## 전환방식 선정

마이그레이션 방식은 기업이 처한 상황에 따라 적합한 방식을 채택하되, 운영 중인 서비스의 지속성은 유지되어야 하므로, 다운타임에 대한 전략은 기본적으로 수립해야 합니다.



### **Rehost (Lift and Shift)**

OS, 데이터, 애플리케이션을 그대로 들어서 옮기는 방식으로 ‘리프트 앤 시프트(Lift and Shist)라고 하며, 코드 수정없이 이전 인프라에서 운영하던 전체 시스템을 새로운 호스팅 환경으로 복사합니다.

\[Rehost 방식이 적합한 경우\]

- 마이그레이션에 드는 비용과 시간을 최소화하고 싶은 경우

- 레거시 인프라 비용을 즉시 절감하려는 경우

- 코드를 변경하는 것이 불가한 상용 애플리케이션을 이전하려는 경우


### **Replatform**

리프트 앤 시프트 방식보다 약간의 코드 수정이 적용되는 방식으로 기본적으로는 기존의 아키텍처를 유지하지만 클라우드 환경의 이점을 얻기 위해 일부 코드를 조정합니다.

\[Replatform 방식이 적합한 경우\]

- 코드 수정이 애플리케이션에 영향을 미치지 않는다고 확신하는 경우

- 클라우드의 장점을 살려 애플리케이션을 운영하고 싶은 경우

- 애플리케이션 소스가 클라우드에서 작동하지 않는 경우

\[Replatform 아키텍처 예시\]

- 한 덩어리의 모노리식이 개별 Scheme와 개별 서비스로 분리

</mark-down>
        <g-image src="~/img/04_Library/03_MSA 전환전략/03_전환방식 선정/image1.png"></g-image><br>
        <mark-down class="content">

### **Refactoring**

애플리케이션이 클라우드 환경에 최적화되도록 아키텍처 전체를 재구성하는 방식으로 클라우드 환경에서 애플리케이션을 가장 효율적으로 운영하기 위해 채택됩니다.
애플리케이션 코드를 변경하는 동안에도 서비스는 지속적으로 운영되어야 하므로 위의 두 방법보다 복잡하고 시간이 많이 소요됩니다.

\[Refactoring 방식이 적합한 경우\]

- 레거시 환경에서는 애플리케이션 성능 향상이 불가한 경우

- 클라우드 환경을 최대한 활용하려는 경우

\[Refactoring 아키텍처 예시\]

- 클라우드 공급자에 최적화된 아키텍처 수립


</mark-down>
        <g-image src="~/img/04_Library/03_MSA 전환전략/03_전환방식 선정/image2.png"></g-image><br>
        <mark-down class="content" source="
참고 : <a href='http://library.gabia.com/contents/infrahosting/7705' target='_blank'>http://library.gabia.com/contents/infrahosting/7705</a>
        ">
        </mark-down>
    </div>
</template>


<script>
    // @group 03_03_03
    export default {
        name:'StrategyTwo',
        data() {
            return {}
        },
        props: {
            "전환방식 선정": {
                type: String
            },
        },

    }
</script>