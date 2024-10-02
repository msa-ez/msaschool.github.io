<template>
	<div>
		<mark-down class="content">

## 소프트웨어 설계의 응집도와 결합도: 실과 가위의 교훈

소프트웨어 설계에 있어 응집도(Cohesion)와 결합도(Coupling)는 매우 중요한 개념입니다. 일상적인 물건들을 예로 들어 이 개념을 쉽게 이해해보고, 이를 객체 지향 프로그래밍과 마이크로서비스 아키텍처에 적용해보겠습니다.

### 실생활의 예: 실, 가위, 니퍼, 전선

우리 주변에 있는 실, 가위, 니퍼, 전선을 생각해봅시다. 이들을 어떻게 그룹화하는 것이 가장 효율적일까요?

1. 재료별로 묶기: 실과 전선 / 가위와 니퍼
2. 용도별로 묶기: 실과 가위 / 전선과 니퍼

첫 번째 방법은 얼핏 보기에 논리적으로 보일 수 있습니다. 하지만 실제 사용 측면에서는 두 번째 방법이 훨씬 더 효율적입니다. 왜 그럴까요?

### 높은 응집도의 이점

실과 가위를 함께 묶고, 전선과 니퍼를 함께 묶으면 다음과 같은 이점이 있습니다:

1. **데이터 지역성(Data Locality)**: 필요한 도구와 재료가 가까이 있어 작업 효율이 높아집니다.
2. **유지보수 용이성**: 관련된 도구와 재료가 함께 있어 관리가 쉽습니다.
3. **독립성**: 각 그룹은 독립적으로 작동할 수 있어, 다른 그룹에 영향을 주지 않고 수정할 수 있습니다.

이러한 개념을 소프트웨어 설계에 적용해봅시다.

## 객체 지향 프로그래밍에서의 응집도

다음은 Python을 사용한 예제 코드입니다:

```python
# 낮은 응집도의 예
class LowCohesion:
    def __init__(self):
        self.thread = "실"
        self.wire = "전선"
    
    def cut_thread(self):
        print(f"{self.thread}을 자릅니다.")
    
    def cut_wire(self):
        print(f"{self.wire}를 자릅니다.")

# 높은 응집도의 예
class SewingKit:
    def __init__(self):
        self.thread = "실"
        self.scissors = "가위"
    
    def cut(self):
        print(f"{self.scissors}로 {self.thread}을 자릅니다.")

class ElectricalKit:
    def __init__(self):
        self.wire = "전선"
        self.nipper = "니퍼"
    
    def cut(self):
        print(f"{self.nipper}로 {self.wire}를 자릅니다.")
```

`LowCohesion` 클래스는 관련 없는 `thread`와 `wire`를 함께 가지고 있어 응집도가 낮습니다. 반면 `SewingKit`과 `ElectricalKit` 클래스는 관련된 데이터와 행위를 함께 묶어 응집도가 높습니다.

### 마이크로서비스에서의 응집도

마이크로서비스 아키텍처에서도 이 개념을 적용할 수 있습니다:

```python
# 봉제 마이크로서비스
class SewingService:
    def __init__(self):
        self.thread = "실"
        self.scissors = "가위"
    
    def cut_thread(self):
        return f"{self.scissors}로 {self.thread}을 자릅니다."
    
    def measure_thread(self):
        return f"{self.thread}의 길이를 측정합니다."

# 전기 작업 마이크로서비스
class ElectricalService:
    def __init__(self):
        self.wire = "전선"
        self.nipper = "니퍼"
    
    def cut_wire(self):
        return f"{self.nipper}로 {self.wire}를 자릅니다."
    
    def strip_wire(self):
        return f"{self.wire}의 피복을 벗깁니다."
```

각 마이크로서비스는 특정 도메인(봉제 또는 전기 작업)에 집중하고 있어, 높은 응집도를 가집니다. 이렇게 설계하면 각 서비스를 독립적으로 개발, 배포, 스케일링할 수 있습니다.

### 결합도가 높을 때의 문제점

응집도가 낮고 결합도가 높은 설계는 다음과 같은 심각한 문제를 야기할 수 있습니다. 실생활의 예시로 돌아가 가위와 니퍼를 한 그룹으로, 실과 전선을 다른 그룹으로 묶었다고 가정해봅시다.

1. **빈번한 API 호출**: 서로 다른 모듈 또는 서비스 간의 의존성이 높아져 불필요한 API 호출이 증가합니다. 이는 네트워크 부하를 증가시키고 전체 시스템의 성능을 저하시킵니다.

   예시:
   ```python
   class HighlyCoupledToolService:
       def __init__(self):
           self.scissors = "가위"
           self.nipper = "니퍼"
       
       def cut_thread(self):
           return f"{self.scissors}로 자르기"
       
       def cut_wire(self):
           return f"{self.nipper}로 자르기"

   class HighlyCoupledMaterialService:
       def __init__(self):
           self.thread = "실"
           self.wire = "전선"
       
       def get_thread(self):
           return self.thread
       
       def get_wire(self):
           return self.wire

   class SewingTask:
       def __init__(self):
           self.tool_service = HighlyCoupledToolService()
           self.material_service = HighlyCoupledMaterialService()
       
       def perform_sewing(self):
           thread = self.material_service.get_thread()  # 불필요한 API 호출
           cut_action = self.tool_service.cut_thread()
           return f"{thread}을 {cut_action}"

   class ElectricalTask:
       def __init__(self):
           self.tool_service = HighlyCoupledToolService()
           self.material_service = HighlyCoupledMaterialService()
       
       def perform_wiring(self):
           wire = self.material_service.get_wire()  # 불필요한 API 호출
           cut_action = self.tool_service.cut_wire()
           return f"{wire}를 {cut_action}"
   ```
   
   이 예시에서 `SewingTask`와 `ElectricalTask`는 매 작업마다 `HighlyCoupledToolService`와 `HighlyCoupledMaterialService`를 모두 호출해야 합니다. 이는 실제 마이크로서비스 환경에서 불필요한 네트워크 호출을 발생시키게 됩니다.

2. **유지보수의 어려움**: 한 부분의 변경이 다른 여러 부분에 영향을 미치게 되어, 수정 작업이 복잡해지고 위험해집니다. 예를 들어, 가위의 사용 방식을 변경하려면 `HighlyCoupledToolService`와 `SewingTask` 양쪽을 모두 수정해야 할 수 있습니다.

3. **테스트의 복잡성 증가**: 높은 결합도는 단위 테스트를 어렵게 만듭니다. `SewingTask`를 테스트하려면 `HighlyCoupledToolService`와 `HighlyCoupledMaterialService` 모두에 대한 모의 객체(mock)가 필요합니다.

4. **시스템 확장성 저하**: 새로운 도구나 재료를 추가하려면 여러 서비스를 동시에 수정해야 합니다. 예를 들어, 새로운 재료인 '고무줄'을 추가하려면 `HighlyCoupledMaterialService`와 이를 사용하는 모든 태스크 클래스를 수정해야 합니다.

5. **코드 재사용성 감소**: `HighlyCoupledToolService`나 `HighlyCoupledMaterialService`를 다른 프로젝트에서 재사용하기가 어려워집니다. 각 서비스가 서로에게 강하게 의존하고 있기 때문입니다.

### 개선된 설계: 높은 응집도, 낮은 결합도

위의 문제를 해결하기 위해, 응집도를 높이고 결합도를 낮추는 방식으로 재설계해 보겠습니다:

```python
class SewingKit:
    def __init__(self):
        self.thread = "실"
        self.scissors = "가위"
    
    def cut_thread(self):
        return f"{self.scissors}로 {self.thread}을 자르기"

class ElectricalKit:
    def __init__(self):
        self.wire = "전선"
        self.nipper = "니퍼"
    
    def cut_wire(self):
        return f"{self.nipper}로 {self.wire}를 자르기"

class SewingTask:
    def __init__(self):
        self.sewing_kit = SewingKit()
    
    def perform_sewing(self):
        return self.sewing_kit.cut_thread()

class ElectricalTask:
    def __init__(self):
        self.electrical_kit = ElectricalKit()
    
    def perform_wiring(self):
        return self.electrical_kit.cut_wire()
```

이 개선된 설계에서는:

1. 각 키트(SewingKit, ElectricalKit)가 관련된 도구와 재료를 함께 가지고 있어 응집도가 높습니다.
2. 각 태스크(SewingTask, ElectricalTask)는 필요한 키트만 사용하므로 결합도가 낮습니다.
3. 불필요한 API 호출이 제거되었습니다.
4. 각 클래스의 책임이 명확해져 유지보수와 테스트가 용이해졌습니다.
5. 새로운 키트나 태스크를 추가하기 쉬워졌습니다.

### 결론

소프트웨어 설계에서 높은 응집도와 낮은 결합도를 추구하는 것은 마치 실과 가위, 전선과 니퍼를 적절히 함께 묶는 것과 같습니다. 이는 코드의 가독성을 높이고, 유지보수를 쉽게 만들며, 시스템의 전체적인 품질을 향상시킵니다. 

반대로, 낮은 응집도와 높은 결합도는 시스템의 복잡성을 증가시키고, 유지보수와 확장을 어렵게 만듭니다. 이는 마치 가위와 니퍼, 실과 전선을 따로 묶어놓은 것과 같아서, 간단한 작업을 수행하기 위해 여러 곳을 오가며 도구와 재료를 찾아야 하는 상황과 비슷합니다.

객체 지향 프로그래밍에서든 마이크로서비스 아키텍처에서든, 이 원칙을 잘 적용하면 더 효율적이고 관리하기 쉬운 시스템을 만들 수 있습니다. 높은 응집도와 낮은 결합도를 목표로 설계하면, 장기적으로 더 안정적이고 유지보수가 용이한 소프트웨어를 개발할 수 있습니다.

		</mark-down>
	</div>
</template>


<script>
    // @group 02_02_02
    export default {
        name: 'DesignCohesion',
        props: {
            "응집도와 결합도": {
                type: String
            },
        },

    }
</script>
