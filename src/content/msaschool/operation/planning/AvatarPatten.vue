<template>
    <div>
        <mark-down class="content" source='
## 구현 패턴

현존하는 다수의 MSA 기술 패턴들 중, 12st 쇼핑몰 구현 시 적용할 패턴은 다음과 같습니다.

REST 기반 서비스 호출 시, 장애 전파를 미연에 방지해 주는 서킷 브레이커(Circuit Breaker), 폴리글랏 퍼시스턴스, CQRS, MVVM 기반 UI 렌더링 등 패턴별 간단한 소개와 12st 쇼핑몰 구현 시, 적용 여부를 수립합니다.

<h5>
    <table>
        <thead>
        <tr class="header">
            <th width="15%"><strong>구현 패턴</strong></th>
            <th width="65%"><strong>적용 시점 및 대상</strong></th>
            <th width="20%"><strong>12st 적용여부</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center"><strong>Circuit Breaker</strong></td>
            <td><ul>
                <li><p>성능저하를 막아주나, Fail-fast 전략으로 사용자 경험이 나빠질 수 있음</p></li>
                <li><p>적용대상이 비동기, 이벤트 기반으로 처리가능하다면 그 기반으로 전환</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        <tr class="even">
            <td align="center"><strong>Database per service</strong></td>
            <td><ul>
                <li><p>ACID 트랜잭션 비용을 포기</p></li>
                <li><p>ACID 트랜잭션 비용 포기가 불가하다면, Shared Database 로 처리해야 하거나 Semantic Locking 통한 Eventual Transaction 상의 Lock 을 구현해야 함</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>Service Registry</strong></td>
            <td><ul>
                <li><p>서비스 레지스트리의 유형 선택: API 기반(Eureka), DNS 기반(Kube-dns)</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">DNS 기반 적용</td>
        </tr>
        <tr class="even">
            <td align="center"><strong>Saga</strong></td>
            <td><ul>
                <li><p>하나 이상의 마이크로서비스들에 걸친 트랜잭션이 필요한 경우, Database per service 패턴을 적용했을 때 유효함</p></li>
                <li><p>마이크로서비스간 프로세스 실행시간이 상대적으로 길거나 예측하기 힘든 경우 (e.g. 결재), 비용이 높은 경우 (2PC 를 사용하기 힘든 상황)</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>CQRS</strong></td>
            <td><ul>
                <li><p>하나 이상의 마이크로서비스에서 추출한 데이터로 뷰를 구성해야 하는경우</p></li>
                <li><p>잦고 빠른 마이크로서비스 내에서의 Read 가 발생하는 경우에 사용</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        <tr class="even">
            <td align="center"><strong>Event Sourcing</strong></td>
            <td><ul>
                <li><p>이벤트 소싱은 비용이 높기 때문에 다음의 요구사항이 존재하는지 확인 필요: Undo 기능 등의 요구가 향후 생길 수 있는가?, 마이크로 서비스간의 폴리글랏 퍼시스턴스 요구?, 기능의 추가 잦음</p></li>
                <li><p>이벤트 소싱에서의 이벤트는 Append only 이기 때문에 데이터의 Diff 의 정보를 충실히 포함해야 함</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>Backends for frontends</strong></td>
            <td><ul>
                <li><p>BFF는 매번 composite service 를 구현해야 하기 때문에 관련한 frontend 의 유형이 매우 다양한 경우는 가능한 API Gateway 의 기능을 사용하거나 RESTful, HATEOAS 를 사용 권고</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">미적용</td>
        </tr>
        <tr class="even">
            <td align="center"><strong>API Gateway</strong></td>
            <td><ul>
                <li><p>API Gateway의 유형이 다양하기 때문에 해당 기능과 역할에 따라, Service Mesh 혹은 기존 EAI (Camel library) 등에서 처리해야 하는 경우 발생할 수 있음.</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>Client-side UI Composition</strong></td>
            <td><ul>
                <li><p>Server-side Rendering 은 Microservice 의 장점을 희석하므로 가능한 MVVM 기반 Client-side Rendering 을 적용해야 함</p></li>
            </ul></td>
            <td align="center" class="msaschool-primary">적용</td>
        </tr>
        </tbody>
    </table>
</h5>
        '></mark-down>

    </div>
</template>


<script>
    // @group 01_02_04
    export default {
        name:'AvatarPatten',
        data() {
            return {}
        },
        props: {
            "구현 패턴": {
                type: String
            },
        },
    }
</script>