<template>
    <div>
        <mark-down class="content">
## 목표 수립

마이크로서비스는 **MSA 아키텍처**를 적용해 시스템을 구현한 것으로 끝나는 것이 아니라, 각 팀이 각자의 비즈니스를 수행하는 완전한 기능을 갖춘 독립화된 **조직**, 그리고 안정적으로
시스템을 개선하고 운영하는데 필요한 **데브옵스 환경**이 조성되어야 비로소 완성됩니다.

계획단계 에서는

- 조직적, 기술적 준비와 프로세스 간의 트라이앵글 모형
- 12st 쇼핑몰의 구현 목표
- 12st 쇼핑몰이 준수할 MSA 성숙도 수준

을 통해 최종 목표를 수립합니다.


### MSA 목표 트라이앵글 모형

마이크로서비스 아키텍처는 서비스간 배포 단위를 분리하는 방법으로 상호 간섭을 줄이고, 개별 서비스의 확장이 가능하도록 해 줍니다.

이러한 MSA는 도입하려는 기업 내 IT부서 만의 노력으로는 결코 정착될 수 없습니다. 왜냐하면 MSA는 기술이 아닌, ‘시장 변화와 고객의 요구에 민첩하게 대응하는 경영방식’이며, ‘기업
문화’이기 때문입니다.

마이크로서비스 아키텍처를 활용할 수 있는 서비스 단위의 조직 구성이 이루어지고, 이러한 조직들이 DevOps 환경에서 자율적으로 운영될 때, 비로소 MSA가 기업 문화로 자리매김 할 수 있는
것입니다.
        </mark-down>
        <g-image src="~/img/02_Planning/01_최종목표_수립/image1.jpg"></g-image>
        <mark-down class="content">
마이크로서비스(MSA)는 Agile 조직을 위한 요소 중 하나이며, MSA를 기반으로 개발 생산성 및 배포 유연성을 높여 비즈니스 변화에 민첩하게 대처할 수 있는 DevOps 환경이 가능합니다.

---

### 12st 쇼핑몰 Goals

12st 쇼핑몰의 구현 목표는 아래와 같습니다.

> **1. Service Resiliency**
>> - 24시간 365일 접속과 주문이 가능해야 합니다.
>> - 무정지 재배포가 가능해야 하고, 셀프 힐링(Self-Healing) 및 타서비스 장애에도 서비스 운용이 가능해야 합니다.

> **2. Customer Responsiveness**
>> - 고객 인지도 향상 및 경쟁 우위를 점하기 위해, 다양한 고객 기능 요구사항의 빠른 탐색과 반영이 가능해야 합니다.

> **3. Developer Scalability**
>> - 시스템 확장성은 물론, 조직, 기능 및 데이터의 확장에도 열려 있는 아키텍처로 피처 드리븐(Feature-driven)한 개발이 가능해야 합니다.
---
        </mark-down>

<!--        <purchase-item-->
<!--                itemId="planning_planning_one"-->
<!--                itemPrice="-100"-->
<!--        >-->
<!--            <div>-->
                <mark-down class="content" source='
### MSA 성숙도 모델 & 적용 레벨

MSA 아키텍처는 서비스 독립성, 데이터 분리성, SW 아키텍처 수준에 따라 4 단계(Early, Inception, Expanding, Mature)로 구분합니다.
처음부터 MSA를 구축하는 경우(Greenfield Project)는 Mature 단계를 목표로, 기존 모노리스를 MSA로 전환하는 경우(Brownfield Project)는 점진적으로 성숙도를 높여가며 적용할 수 있습니다.

12st 쇼핑몰의 구현 관점별 MSA 성숙도 적용 레벨은 다음과 같습니다. (노란색 표시)

<h5>
    <table>
        <tbody>
        <tr>
            <td width="12%" align="center">구현 관점</td>
            <td width="22%" align="center"><strong>Early (Lv1)</strong></td>
            <td width="22%" align="center"><strong>Inception (Lv2)</strong></td>
            <td width="22%" align="center"><strong>Expanding (Lv3)</strong></td>
            <td width="22%" align="center"><strong>Mature (Lv4)</strong></td>
        </tr>
        <tr>
            <td align="center"><p><strong>기능</strong></p>
                <p><strong>분해</strong></p></td>
            <td>기능과 유즈케이스 단위로 분리<br />
                - 비즈니스 역량은 도출한 비즈니스 기능과 유즈케이스 단위로 분리가능</td>
            <td>서비스별 인터페이스 정의<br/>
                - 추출 된 각 유스 케이스와 인터페이스를 통해 액세스 할 데이터에 대해 잘 정의 된 인터페이스를 가짐.</td>
            <td> 도메인 Context 분리<br/>
                - Ubiquitous language 가 다른 bounded context간의 커뮤니케이션 시, Anti-corruption layer를 통해 수행</td>
            <td class="msaschool-background-primary-25">도메인 기반 이벤트<br />
                - 구체화된 보기, 읽기 쓰기를 위한 별도의 모델(CQRS) 구축</td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>데이터</strong></td>
            <td>2PC 사용 가능 <br/>
                - ACID 기반의 트랜잭션을 유지합니다. Canonical Data Model 를 지향</td>
            <td>Scheme per Service <br/>
                - 각각의 서비스는 자신만의 Scheme를 가짐 <br/>
                - 서비스들과 다중 엔터프라이즈 데이터 저장소 간의 트랜잭션이 적은 조정으로 이루어짐</td>
            <td>DBMS per Service <br/>
                - 완전히 분산된 데이터 관리<br />
                - 서비스별 다른 유형의 DBMS 사용이 가능한 폴리글랏 퍼시스턴스를 지향</td>
            <td class="msaschool-background-primary-25"> Event-Driven Archi.
                - 이벤트 기반 데이터 관리, 이벤트 소싱 및 커멘드 쿼리 <br/>
                - 일시적으로 데이터에 일관성이 없는 상태가 존재할 수 있으나, 일정 시간이 지나면, 데이터가 도착하여 다시 Consistency를 충족 </td>
        </tr>
        <tr class="even">
            <td align="center"><strong>SW<br />
                아키텍처</strong></td>
            <td>UI/UX : Server Side rendering,<br />
                Session based 보안,<br />
                단일 언어(eg. Spring framework)</td>
            <td>UI/UX : Server Side rendering,<br />
                Session cluster 적용,<br />
                MSA 지향 언어(eg. Spring Boot)</td>
            <td>UI/UX : Client Side rendering,<br />
                Token based 보안, OAuth2,<br />
                폴리글랏 Language</td>
            <td class="msaschool-background-primary-25">UI/UX : Client Side rendering+MVVM,<br />
                Token based 보안, OAuth2,<br />
                폴리글랏 Language + Service Mesh</td>
        </tr>
        <tr class="odd">
            <td align="center"><p><strong>Infra</strong></p>
                <p><strong>스트럭처</strong></p></td>
            <td>지속적인 빌드, 지속적인 통합 운용</td>
            <td>지속적인 딜리버리와 배포, 로그의 중앙 집중화</td>
            <td>컨테이너 사용(도커), 컨테이너 오케스트레이터(k8s), 외부 구성(유레카, 주키퍼)</td>
            <td class="msaschool-background-primary-25">자동 프로비저닝을 갖춘 PaaS기반 솔루션</td>
        </tr>
        <tr class="even">
            <td align="center"><strong>배포</strong></td>
            <td>설치 스크립트 구동, 호스트 당 멀티 서비스 인스턴스</td>
            <td>VM 당 하나의 서비스 인스턴스<br />
                클라이언트 사이드 로드 벨런싱<br />
                서버사이드 로드 벨런싱</td>
            <td class="msaschool-background-primary-25">Immutable 서버, 컨테이너 당 하나의 서비스 인스턴스, blue/green 배포</td>
            <td>멀티 클라우드 및 멀티 데이터 센터 지원</td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>팀구조</strong></td>
            <td>개발, QA,릴리즈, 운영이 분리된 하나의 기능 팀</td>
            <td>공유된 서비스 모델로 팀 공동 작업<br />
                내부 소스 공개</td>
            <td>서비스별 프로덕트 팀(PO, UI/UX 디자이너, 개발자)
                Cross Functional한 플랫폼 팀</td>
            <td class="msaschool-background-primary-25">업무 기능별 혹은 도메인별 팀들이 모든 관점에서 책임을 수반. &quot;네가 구축한 것은 네가 운영합니다.&quot;</td>
        </tr>
        </tbody>
    </table>
</h5>
                   '></mark-down>
<!--                </div>-->
<!--        </purchase-item>-->
    </div>
</template>


<script>
    // @group 01_02_05
    export default {
        name: 'Planning',
        data() {
            return {}
        },
        props: {
            "최종목표 수립": {
                type: String
            },
        },

    }
</script>