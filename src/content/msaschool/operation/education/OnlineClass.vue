<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">On-line 과정</h2><br>
            <v-btn class="gs-review-btn"
                target='_blank'
                text
            >
                <a href="/operation/education/flipped-learning4-days-cna-course/#review3" style="color:black !important; font-weight:700; font-size:14px;">
                    ▼ 후기보기
                </a>
            </v-btn>
        </div>
        <h6 class="gs-course-content">On-line 과정은 강사 참여 없이 MSASchool의 영상강의를 통해 Biz, Dev, Ops까지의 CNA 과정을 수강생이 독자적으로 선택해서 학습하는 Course로, 강의실에서 직접 결제를 진행하여 수강할 수 있습니다.</h6>
        <div class="gs-manager">교육비 정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
        <table class="gs-table-default">
            <tr>
                <td rowspan="2" style="padding-left:15px; width:12%; background-color:#e6e9f9; font-weight:900; font-size:20px; text-align:center;">비용</td>
                <td style="font-weight:700; font-size:20px; text-align:center;">강의당 2만원</td>
            </tr>
        </table>  
        <v-btn class="gs-bottom-apply-btn"
            target='_blank'
            :href="`https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f`"
        >
            <span style="color:white !important; font-weight:700; font-size:20px;">
                강의장 이동하기
            </span>
        </v-btn>  
        <div>
            <h3 style="margin-top:50px;">커리큘럼 소개</h3>
            <h4 style="margin-top:30px;">Biz</h4>
            <table class="gs-table-default">
                <th style="width:15%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">강의명</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[이벤트스토밍]<br>12번가 쇼핑몰 예제</td>
                    <td>
                        쇼핑몰 예제 시나리오를 기반으로 도메인 이벤트를 도출한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[이벤트스토밍]<br>구글 드라이브 예제</td>
                    <td>
                        구글 드라이브(Google Drive)에 파일 업로드, 비디오 변환 등의 시나리오를 기반으로 디자인 레벨 수준까지의 이벤트스토밍 방법을 익힌다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[이벤트스토밍]<br>Food Delivery 예제</td>
                    <td>
                        배달의 민족(Food Delivery) 시나리오를 기반으로 프로세스 레벨 수준의 이벤트스토밍 방법을 익한다.
                    </td>
                </tr>
            </table>

            <h4 style="margin-top:50px;">Dev</h4>
            <table class="gs-table-default">
                <th style="width:15%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">강의명</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">단위 마이크로 서비스의 실행</td>
                    <td>
                        단위 마이크로 서비스를 실행하기 위하여 스프링부트를 컴파일하고 실행하는 방법을 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Req/Res 방식의 MSA 연동</td>
                    <td>
                        모노리식 서비스에서 특정 부분을 마이크로 서비스로 떼어내고 Req/Res 방식으로 통신하는 방법을 학습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Req/Res 방식에서<br>장애전파 차단 - 서킷브레이커</td>
                    <td>
                        서킷 브레이커를 통하여 장애 전파를 차단한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Kafka 기본 명령어</td>
                    <td>
                        Kafka의 기본 명령어를 학습하고 테스트해본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Pub/Sub 방식의 연동</td>
                    <td>
                        마이크로 서비스간의 통신에서 이벤트 메세지를 Pub/Sub 하는 방법을 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Pub/Sub 방식의 연동 - Compensation & Correlation</td>
                    <td>
                        시나리오를 기반으로 Compensation과 Correlation 처리를 해본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Kafka Scaling</td>
                    <td>
                        카프카 컨슈머 그룹의 인스턴스를 늘여 처리량을 늘리고 파티션을 추가하여 Scaling 한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Kafka Retry &<br>Dead Letter Queue</td>
                    <td>
                        Consumer가 message를 처리하던 중 오류가 발생하면 해당 Message를 다시 Polling 처리한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">API Gateway</td>
                    <td>
                        API Gateway를 사용하여 마이크로 서비스들의 엔드포인트 단일화를 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">JWT Token 기반 인증 인가</td>
                    <td>
                        Spring Security와 Spring oauth2를 사용해 Resource Owner, Client, Authorization Server, Resource Server간의 인증/인가를 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">JWT Token 기반 인증 인가 - Advanced</td>
                    <td>
                        마이크로서비스와 OAuth2 구성요소인 Authorization Server/ Client/ Resource Server를 활용해 Single Sign-On 구현 모형을 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Data Projection with Frontend and HATEOAS</td>
                    <td>
                        Data Projection의 첫번째 방법인 UI에서 Data를 Aggregate하는 방법으로 기본 생성된 VueJS 기반 프론트엔드를 활용해본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Data Projection with GraphQL</td>
                    <td>
                        Data Projection의 두번째 방법으로 Backend에서 Data를 Projection하는 전용의 서버로 구현하는 BFF 패턴을 학습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Data Projection with CQRS</td>
                    <td>
                        CQRS 를 기반하여 Data Projection 을 수행한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Application Packaging with Container (Docker)</td>
                    <td>
                        Docker Client를 사용하여, Static 컨텐츠를 활용한 샘플 이미지 생성 및 이미지 저장소(Docker Hub)에 푸시해본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Contract Test<br>(Consumer Driven Test)</td>
                    <td>
                        시나리오를 기반으로 CDC(Consumer Driven Contract) 계약을 체결해본다.
                    </td>
                </tr>
            </table>


            <h4 style="margin-top:50px;">Ops</h4>
            <table class="gs-table-default">
                <th style="width:15%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">강의명</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">AWS Cloud Setup<br>(EKS, ECR 설정)</td>
                    <td>
                        아마존의 쿠버네티스 서비스인 Elastic Kubernetes Service 와 Elastic Container Registry 를 기반한 애플리케이션 배포 실습
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Kubernetes Basic Commands</td>
                    <td>
                        Docker Hub에 저장된 이미지를 Public Cloud 에 배포하고, 웹 브라우저를 통해 서비스 확인하기
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">애플리케이션 패키징,도커라이징,클러스터 배포</td>
                    <td>
                        소스코드를 패키징 하고 패키징된 파일을 도커리이징한 후 Docker Hub에 올라간 이미지를 클러스터에 배포 한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">12번가 마이크로서비스 라우터(Service) 생성</td>
                    <td>
                        Service 객체를 활용한 컨테이너 Expose 및 다박한 Service Type에 따른 Access Scope을 실습하고 그 동작 원리를 이해하고, 외부에서 마이크로서비스까지 요청이 전달되는 과정에서 Kube Proxy의 역할에 대해 학습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Pod Auto Scaling</td>
                    <td>
                        요청이 많이 들어올때 Auto Scale-Out 설정을 통하여 서비스를 동적으로 확장시키는 실습을 한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">파일시스템 (볼륨) 연결과 데이터베이스 설정</td>
                    <td>
                        주문 애플리케이션에 데이터베이스를 외부에서 설정 연결하기 위하여 데이터베이스를 StatefulSet 으로 생성한후, 해당 연결의 설정을 (Secret/ConfigMap) 주입한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">셀프힐링 & 무정지 배포 실습</td>
                    <td>
                        컨테이너의 상태를 관리하는 readinessProbe 설정을 하여 무정지 배포를 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Ingress 를 통한 진입점 통일 -<br>Path-based routing</td>
                    <td>
                        쿠버네티스 인그레스를 이용해 보다 쿠버네티스와 통합된 방식으로 진입점을 관리해본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">Ingress - Virtual Host based</td>
                    <td>
                        Vertual Host를 기반으로 인그레스를 활용해본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[Service Mesh] Istio</td>
                    <td>
                        쿠버네티스의 기본 서비스 매시인 이스티오를 설치하고 기본 샘플을 실행해 보면서 확장된 서비스 안정성과 배포전략을 알아본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[Service Mesh] Istio 를 통한<br>서비스 회복성 Part1 - 타임아웃/재시도</td>
                    <td>
                        12번가 주문 마이크로서비스 앞단에 timeout 과 retry 를 설정하여, 주문관리 시스템의 장애없이 서비스가 안정되게 운영되는 시나리오를 적용해 본다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[Service Mesh] Istio 를 통한<br>서비스 회복성 Part2 - 서킷브레이커</td>
                    <td>
                        Istio 의 DestinationRule 설정을 통한 서킷브레이커의 다박한 설정 방식을 이해하고 앞서의 타임아웃과는 차별화된 장애회피 전략을 학습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[Service Mesh] MSA 모니터링 w/ Istio addon Grafana</td>
                    <td>
                        Istio 내에 기본 설치된 Prometheus, Grafana, Kiali, Jaeger 등을 이용해 쿠버네티스 클러스터와 마이크로서비스 실시간 현황 및 분산추적 방법을 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">마이크로서비스 통합 로깅<br>w/ EFK stack</td>
                    <td>
                        CNCF의 Logging 관련 오픈 스텍인 Fluentd를 포함하는 EFK(Elasticsearch, Fluentd, Kibana)를 활용하여 배포된 마이크로서비스 로그를 모니터링하는 방법을 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[GitOps] Argo Rollout과<br> Istio를 통한 카나리 배포</td>
                    <td>
                        Argo Rollout 과 Istio 의 Traffic Management 를 통하여 안정적인 카나리아 배포를 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">[GitOps] Argo CD를 통한<br>카나리 배포</td>
                    <td>
                        GitOps기반의 지속적인 배포를 지원하는 Kubernetes Plug-in인 Argo CD를 활용한 카나리아 배포를 실습한다.
                    </td>
                </tr>
                <tr>
                    <td style="padding-left:15px; background-color:#f2f3fc; text-align:center;">쿠버네티스 내부구조 분석</td>
                    <td>
                       직접 쿠버네티스를 설치하고 운영하며 구조를 분석해본다. 
                    </td>
                </tr>
            </table>
            
        </div>

        <div id="review3" class="gs-manager">
            <h3 style="margin-top:50px;">교육 후기</h3>
        </div>
        <hr>
        <div v-if="page==1" id="reviewPage1" class="gs-review-full-box">
            <div class="clearfix gs-review-box">
                <div class="gs-review-background" style="background-color:#4527A0;">최</div>
                <div>
                    <div>최**</div>
                    <div class="gs-review-star-color">★★★★<span class="gs-review-star-color mdi mdi-star-half"/></div>
                </div>
                <p>MSAEZ 툴 정말 유용하네요. 차후 이벤트스토밍 때에도 잘 활용할 수 있을 것 같습니다.</p>
            </div>

            <div class="clearfix gs-review-box">
                <div class="gs-review-background" style="background-color:#9E9D24;">조</div>
                <div>
                    <div>조**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>강의의 내용과 사용하는 툴이 적합하여 듣기 좋았습니다.</p>
            </div>

            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#558B2F;">박</div>
                <div>
                    <div>박**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>MSA 초급자임에도 이해가 쉽도록 잘 짜여진 강의 내용이 좋았다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#37474F;">안</div>
                <div>
                    <div>안**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>MSA 기반 설계 방법을 실습 위주로 배울 수 있어 이해가 더 잘 되었습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#AD1457;">이</div>
                <div>
                    <div>이**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>실습 위주로 교육 과정이 잘 구성되어 있는 것 같습니다. 또한 적절한 협업플랫폼 활용이 인상적이었습니다.</p>
            </div>
        </div>
        <div v-else-if="page==2" id="reviewPage2" class="gs-review-full-box">
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#0277BD;">추</div>
                <div>
                    <div>추**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>실습을 할 수 있도록 미리 소스를 포팅해 주셔서 코드 작성 시 오류가 발생할 부분이 많이 줄어 순조롭게 실습을 할 수 있었습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#2E7D32;">한</div>
                <div>
                    <div>한**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>모델링에서 코딩까지 연계하여 볼 수 있어 도움이 되는 온라인 강의였습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#9E9D24;">이</div>
                <div>
                    <div>이**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>MSA 구현의 실제 사례를 실습 할 수 있어서 유용했습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#37474F;">김</div>
                <div>
                    <div>김**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>전반적인 흐름을 이해할 수 있도록 실습환경이 쉽게 이루어져 있었다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#F9A825;">권</div>
                <div>
                    <div>권**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>MSA에 대한 내용을 실습을 통해 직/간접적으로 체험해볼 수 있었다.</p>
            </div>
        </div>
        <div class="text-center">
            <a id="1" @click="paging(1)" class="gs-review-page-number">
                    <span v-if="page==1" class="mdi mdi-numeric-1-box"></span>
                    <span v-else class="mdi mdi-numeric-1-box-outline"></span>
            </a>
            <a id="2" @click="paging(2)" class="gs-review-page-number">
                    <span v-if="page==2" class="mdi mdi-numeric-2-box"></span>
                    <span v-else class="mdi mdi-numeric-2-box-outline"></span>
            </a>
        </div>
    </div>
</template>


<script>
        // @group 07_02_06
    export default {
        name:'online-class',
        data() {
            return {
                page:1
            }
        },
        props: {
            "2-2. On-line Class": {
                type: String
            },
        },
        methods: {
            paging(value) {
                this.page = value
            }
        },
    }
</script>