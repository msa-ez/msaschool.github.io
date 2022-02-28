<template>
    <div>
        <mark-down class="content" source='
## 커뮤니티

* **MSA and DDD Software modeling - 마이크로서비스와 도메인 주도 SW 모델링 <a href="https://www.facebook.com/groups/cloudswmoding/" target="_blank">(바로가기)</a>**
        '></mark-down>

        <br />
        <g-image src="~/img/05_Community/06_커뮤니티/image1.png"></g-image>
        <br/>
        <mark-down class="content">
- 도메인 주도 설계(Domain Driven Design) 및 MSA 전반에 걸친 이론과 다양한 구현 방법을 소개하고, 새로운 MSA 패턴 및 실전 경험을 공유하는 커뮤니티
---
</mark-down>

<h2 style="margin-top:100px;">참고도서</h2>

        <div>
                <div>
                        <h3 style="display:inline-block !important;">[Overall MSA Design patterns]</h3>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://www.manning.com/books/microservices-patterns">상세보기</a></h4>
                </div>
                <div style="display:inline-flex;">
                        <g-image style="margin-right:10px;" src="~/img/04_Library/05_부가자료/01_참고 도서/image1.jpg"></g-image>
                        <p>
                                • 전반적으로 마이크로서비스의 아키텍처 패턴에 대해 총정리하고 있는 책입니다.<br><br>
                                • 여러 마이크로서비스에 대한 적용전략들을 디자인 패턴으로 소개하고,<br>
                                마이크로서비스 디컴포지션 방법과 서비스간의 커뮤니케이션 기법 및 트랜잭션 이슈에 대해 심도 있게 다루고 있습니다.<br><br>
                                • 특히 Saga 패턴의 트랜잭션 패턴인 Eventual-Tx와 복구 로직에 대해 설명합니다.<br><br>
                                • 이외에도 Query없이 CQRS로 구현하는 방법과 컨트랙트인 경계테스트에 대해서도 다루고 있습니다.<br><br>
                        </p>
                </div>
        </div>

        <div style="margin-top:50px;">
                <div>
                        <h3 style="display:inline-block !important;">[Microservice decomposition strategy]</h3>
                        <h4 style="margin:5px 0 0 20px !important; display:inline-block !important;"><a style="color:#5a67d8;" href="https://www.oreilly.com/library/view/domain-driven-design-distilled/9780134434964/">상세보기</a></h4>
                </div>
                <div style="display:inline-flex;">
                        <g-image style="margin-right:10px;" src="~/img/04_Library/05_부가자료/01_참고 도서/image2.jpg"></g-image>
                        <p>
                                • Domain Driven Design의 여러 패턴을 설명하는 책 중 모호한 설명을 배제,<br>
                                가장 쉽게 설명하고 있는 책으로 책의 분량도 적당하여 개념 정립하는데 도움이 됩니다.<br><br>
                                • DDD의 핵심인 바운디드 컨텍스트와 유비쿼터스 언어의 적용전략,<br>
                                서브 도메인 디자인, 도메인간 컨텍스트 매핑에 대해 쉽게 기술합니다.<br><br>
                                • 한글로도 번역된 책도 나와 있습니다.<br><br>
                        </p>
                </div>
        </div>


        <div style="margin-top:50px;">
                <div>
                        <h3 style="display:inline-block !important;">[Event Storming]</h3>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://leanpub.com/introducing_eventstorming">상세보기</a></h4>
                </div>
                <div style="display:inline-flex;">
                        <g-image style="margin-right:10px; " src="~/img/04_Library/05_부가자료/01_참고 도서/image3.jpg"></g-image>
                        <p>
                                • DDD를 쉽게 하는 방법인 이벤트스토밍에 대해 기술한 책입니다.<br><br>
                                • 책값 대신 기부를 하면, 기부 받은 금액만큼 기술해 나가는<br>
                                  도서로 이탈리아의 Alberto brandolini가 저자로 실제 이벤트스토밍을 고안한 창시자입니다.<br><br>
                                • 기부금은 1만원~2만원 사이에세 내게 도움되었다고 느낀만큼 지불하면 됩니다.<br><br>
                                • 도서는 PDF로만 구매 가능합니다.<br><br>
                        </p>
                </div>
        </div>

        <div style="margin-top:50px;">
                <div>
                        <h3 style="display:inline-block !important;">[Database Design in MSA]</h3>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://www.confluent.io/wp-content/uploads/2016/08/Making_Sense_of_Stream_Processing_Confluent_1.pdf">무료버전</a></h4>
                </div>
                <div style="display:inline-flex;">
                        <g-image style="margin-right:10px;" src="~/img/04_Library/05_부가자료/01_참고 도서/image4.jpg"></g-image>
                        <p>
                                • 이븐트-드리븐한 기법으로 데이터를 분산하는 기법에 대한 책입니다.<br><br>
                                • 무료로 읽을 수 있는 Light한 버전으로 마틴 크레만이 지은 스트림 프로세싱에 대한 내용입니다.<br><br>
                                • 굳이 비싼 RDBMS를 사용하지 않더라도 스케일러블한 데이터베이스 구조를 만들고,<br>
                                MSA를 플리글랏한 구조로 만들 수 있다는 내용의 흐름으로 전개됩니다.
                        </p>
                </div>
        </div>

        <div style="margin-top:50px;">
                <div>
                        <h3 style="display:inline-block !important;">[Deep dive]</h3>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://dataintensive.net/?fbclid=IwAR3OSWkhqRjLI9gBoMpbsk-QGxeLpTYVXIJVCSaw_A5eYrBDc0piKSm4pMM">상세보기</a></h4>
                </div>
                <div style="display:inline-flex;">
                        <g-image style="margin-right:10px;" src="~/img/04_Library/05_부가자료/01_참고 도서/image5.jpg"></g-image>
                        <p>
                                • MSA 현장에서 서비스 분리보다 더 큰 이슈는 데이터베이스를 어떻게 쪼개는가 하는 것입니다.<br><br>
                                • 데이터 처리 및 저장을 위한 다양한 기술의 장단점을 검토하여 다양한 환경에서 어플리케이션이 이를 탐색할 수 있도록 가이드하고 있습니다.<br><br>
                                • RDBMS, NoSQL, Stream, 메시지 브로커 등 다양한 도구들이 어떤 응용분야에 적합한지도 기술합니다.<br><br>
                                • 아주 많은 사람들에 의해 추천되고 있는 책으로 분량이 많은 편입니다.
                        </p>
                </div>
        </div>


        <div style="margin-top:50px;">
                <div>
                        <h3 style="display:inline-block !important;">[API design and REST]</h3>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://pepa.holla.cz/wp-content/uploads/2016/01/REST-in-Practice.pdf">무료버전</a></h4>
                </div>
                <div style="display:inline-flex;">
                        <g-image style="margin-right:10px;" src="~/img/04_Library/05_부가자료/01_참고 도서/image6.jpg"></g-image>
                        <p>
                                • REST API를 어떻게 디자인하고 그것을 확장하는 가에 대한 책입니다.<br><br>
                                • JSON 기반 REST 프로토콜이 나오기 이전 SOAP은 데이터를 하나로 합쳐 통째로 담아 전달하는 방식이었는데,<br>
                                이를 HTTP 메소드(POST, GET, PATCH, DELETE)와 URI 링크구조를 기반으로 RDBMS 처럼 구동할 수 있다는 것에 저자는 착안했습니다.
                        </p>
                </div>
        </div>


        <div style="margin:50px 0 100px 0;">
                <div>
                        <h3 style="display:inline-block !important;">[Saga]</h3>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://eventuate.io/">eventuate 링크</a></h4>
                        <h4 style="display:inline-block !important; margin:5px 0 0 20px !important;"><a style="color:#5a67d8;" href="https://vladmihalcea.com/how-to-extract-change-data-events-from-mysql-to-kafka-using-debezium/?fbclid=IwAR33Spb4jPBNI6VNHuCxdu_BxpWdzOLzMvbCtHHvJrRmJPfiEoXwM1qWYBs">상세보기</a></h4>
                </div>
                <div>
                        <g-image style="margin:0 0 20px 0;" src="~/img/04_Library/05_부가자료/01_참고 도서/image7.jpg"></g-image>
                        <p style="display:contents;">
                                • 마이크로 서비스는 개발을 가속화하고 기업이 더 빠르게 혁신하고 경쟁 우위를 유지할 수 있도록 합니다.<br><br>
                                • 그러나 마이크로 서비스 아키텍처의 주요 과제는 분산 데이터 관리입니다.<br><br>
                                • 각 마이크로 서비스에는 로컬 데이터베이스가 있으며,<br>
                                • 여러 서비스에서 데이터 일관성을 유지하는 비즈니스 트랜잭션과 여러 서비스에서 데이터를 검색하는 쿼리를 구현하는 것은 쉬운 일은 아닙니다.<br><br>
                                • eventuate 에서는 Saga를 활용하여 데이터의 일관성을 유지하고, CQRS를 통한 쿼리 수행에 대한 가이드 합니다.
                        </p>
                </div>
        </div>
    </div>
</template>

<script>
    // @group 05_02_09
    export default {
        name:'Community',
        data() {
            return {}
        },
        props: {
            "커뮤니티 및 참고도서": {
                type: String
            },
        },
    }
</script>