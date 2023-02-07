<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">Advanced 과정</h2><br>
            <v-btn class="gs-review-btn"
                target='_blank'
                text
            >
                <a href="/operation/education/advanced-cna/#review2" style="color:black !important; font-weight:700; font-size:14px;">
                    ▼ 후기보기
                </a>
            </v-btn>
        </div>
        <h6 class="gs-course-content">다양한 도메인에 대한 심화된 이벤트스토밍 기법과 EDA환경에 최적화된 프레임워크 및 실전에 적용 가능한 구현 요소들을 포함하고 있으며, 서비스 메시의 확장, GitOps, 서버리스(Serverless) 운영 등 BizDevOps 전 영역에 걸쳐 한차원 높은 전문가 수준의 내용으로 구성된 교육과정입니다.</h6>
        <div class="gs-manager">교육비 정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
        <table class="gs-table-default">
            <tr>
                <td rowspan="2" style="padding-left:15px; width:12%; background-color:#e6e9f9; font-weight:900; font-size:20px; text-align:center;">비용</td>
                <td style="font-weight:700; font-size:20px; text-align:center;">1인당 160만원(4일)</td>
            </tr>
            <tr>  
                <td style="font-weight:700; font-size:20px; text-align:center;">Biz/Dev만 수강시 1인당 80만원(2일)</td>
            </tr>
        </table>
        <v-btn class="gs-bottom-apply-btn"
            target='_blank'
            :href="`https://docs.google.com/forms/d/e/1FAIpQLSdR9TvgNr10wmWVgZxCkIIRBzFUV6bCISrNyUkm3sN89xbB5w/viewform?usp=sf_link`"
        >
            <span style="color:white !important; font-weight:700; font-size:20px;">
                교육 신청하기
            </span>
        </v-btn>
        <div>
            <h3 style="margin-top:50px;">커리큘럼 소개</h3>
            <h4 style="margin-top:30px;">Day1 - Biz Part</h4>
            <table class="gs-table-default">
                <th style="width:12%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="width:28%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오전<br>9:00~11:30</td>
                    <td style="font-weight:700;">도메인 주도 SW설계의<br>확장</td>
                    <td>
                        • 애자일 기업에 필요한 구현 기술<br>
                        • 금융기관과 테크기업의 진화, 테크 기업들의 Agile Delivery<br>
                        • 복잡한 모델의 분리기준 – 바운디드 컨텍스트<br>
                        • 가치사슬 분석전략 기법 이해 - 워들리 매핑(Wardley Mapping)<br>
                        • Impact Mapping을 활용한 이벤트스토밍<br>
                        • 다양한 비즈니스 도메인 이벤트스토밍 적용사례<br>
                    </td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">마이크로서비스의<br>분석/설계 심화</td>
                    <td>
                        • 이벤트스토밍 레벨 – Big Picture, Process Modeling, Software Design<br>
                        • DDD(도메인 주도 설계) 설계전략 <br>
                        • Customer Journey Map – Identifies(Personas), Derives(Possible solutions, Opportunities), Relation to(Business Model, Software Design)<br> 
                        • Impact Mapping - Identifies(Goals, Actors, Impact), Relation to(Business Model) <br>
                        • 비즈니스 모델 캔버스 응용<br>
                        • 도메인 클래스 모델링 with UML<br>
                        • 도메인 모델패턴(Domain Model)과 트랜잭션 스크립트 (Transaction Script) 패턴<br>
                        • 중요도에 따른 구현 구현전략- 트랜잭션 스크립트 적용<br>
                        • 이벤트스토밍 모델과 유비쿼터스 언어(Ubiquitous Language)<br>
                        • 다양한 도메인기반 실전 이벤트스토밍<br> 
                    </td>
                </tr>
            </table>

            <h4 style="margin-top:50px;">Day2 – Dev Part</h4>
            <table class="gs-table-default">
                <th style="width:12%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="width:28%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오전<br>9:00~11:30</td>
                    <td style="font-weight:700;">구현: 마이크로 서비스<br>트랜잭션과 데드라인</td>
                    <td>
                        • Event driven Microservice 확장 구현<br>
                        • Exactly-Once 및 멱등성(Idempotency)을 적용한 중복처리 방지<br>
                        • 단위 마이크로서비스와 메시징 채널 트랜잭션 관리<br>
                        • 마이크로서비스 트랜잭션에 Deadline 적용<br>
                        • Kafka Parallel Processing & DLQ (Dead Letter Queue)<br>
                    </td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td rowspan="2" style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">EDA에 최적화된<br>MSA Chassis</td>
                    <td>
                        • 이벤트스토밍 모델에서 Eventuate, Axon코드 생성<br>
                        • Eventuate Tram 애플리케이션 아키텍처와 CDC<br>
                        • Axon Framework와 Axon Server<br>
                        • Sprng boot기반 Axon으로 구현하는 Saga마이크로서비스<br>
                    </td>
                </tr>
                <tr>
                    <td style=" font-weight:700; padding-left:15px;">인터-마이크로서비스 통신 : gRPC, Spring Reactor</td>
                    <td>
                        • gRPC로 통신하는 마이크로서비스<br>
                        • HTTP/2 프로토콜 버퍼기반 바이너리 프로토콜 적용<br>
                        • Spring Reactor와 Spring WebFlux로 리엑티브 마이크로서비스 구현 예시<br>
                    </td>
                </tr>
            </table>


            <h4 style="margin-top:50px;">Day3 – Dev/Ops</h4>
            <table class="gs-table-default">
                <th style="width:12%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="width:28%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오전<br>9:00~11:30</td>
                    <td style="font-weight:700;">Kafka CDC와<br>마이크로서비스 보안</td>
                    <td>
                        • Kafka CDC를 활용한 인터-마이크로서비스 데이터 연동<br>
                        • OAuth2 와 JWT를 활용하는 Stateless 한 토큰기반 접근과 인증<br>
                        • 게이트웨이로부터 토큰 릴레이를 통한 Fine-grained ACL 설정<br>
                    </td>
                </tr>

                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">운영: Service Mesh deep dive</td>
                    <td>
                        • advanced Service Mesh(Istio) features<br>
                        • Istio가 제공하는 보안, 모니터링, Envoy필터, 추적 기능<br>
                        • Istio기반 서비스간 인증 및 End-user authentication<br>
                        • Istio add-on 서버기반 마이크로서비스 모니터링 & Alerting to Slack 채널<br>
                        • Spring sleuth와 Jaeger를 통한 마이크로서비스 Tracing<br>
                    </td>
                </tr>
            </table>

            <h4 style="margin-top:50px;">Day4 – Ops Part</h4>
            <table class="gs-table-default">
                <th style="width:12%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="width:28%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="width:60%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습내용</th>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오전<br>9:00~11:30</td>
                    <td style="font-weight:700;">GitOps</td>
                    <td>
                        • 데브옵스의 확장 모델 깃옵스(GitOps) 이해<br>
                        • Workflow with Jenkins & ArgoCD<br>
                        • Canary Deployment with Canary Scoring<br>
                    </td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td rowspan="2" style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">Serverless</td>
                    <td>
                        • Serverless를 위한 오픈소스 Knative<br>
                        • Stateless 웹서비스 구축을 위한 서비리스 프레임워크 - Serving<br>
                        • Istio와 Knative serving을 활용한 마이크로서비스 배포와 접근<br>
                        • Kubernetes CRD 기반 CI/CD 오픈소스 프레임워크 - Tekton <br>
                        • Tekton으로 구현하는 Serverless CI/CD 파이프라인<br>
                    </td>
                </tr>
                <tr>
                    <td style="font-weight:700;">설문작성 및 테스트</td>
                    <td>
                        • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                    </td>
                </tr>
            </table>
        </div>
        
        <div style="margin:100px 0 50px 0;">
            <div>
                <h2 style="display:inline-block !important;">강사진 소개</h2>
            </div>
            <h3 style="margin-top:20px;">주강사(장진영 / 박용주 / 윤성렬)</h3>
            <div class="gs-the-entire-package">
                <div class="gs-instructor-card">
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-30px;" src="~/img/05_Community/02_MSA_교육과정/img3.png"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">장진영</h3>
                        <p style="color:gray; font-size:12px;">uEngine CEO & President</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA 교육, 기업 컨설팅<br>
                        • MSAEz, MSA School, CNA PaaS Platform<br>
                        • Open Source Open Cloud Engine<br>
                        • uEngine BPM, SNS(Process CODI), ALM(ESSENCIA)<br>
                        <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 유엔진솔루션즈 대표이사<br>
                        • 現 MSA 교육, 기업 컨설팅<br>
                        • 現 MSA Facebook 운영<br>(https://www.facebook.com/groups/cloudswmoding)<br>
                        • 클라우드(MSA, DDD) 강의 다수<br>
                        • 객체지향 프로그래밍 University 강의<br>
                        • 한국소프트웨어기술진흥협회 전문강사<br>
                    </div>
                </div>
            
                <div class="gs-instructor-card">
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-15px;" src="~/img/05_Community/02_MSA_교육과정/img4.png"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">박용주</h3>
                        <p style="color:gray; font-size:12px;">uEngine Director & MSA Consultant</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA DT 마스터플랜 수립 Project<br>
                        • MSA PoC/ Pilot 수행<br>
                        • 다수 MSA 제안 작업 및 컨설팅 <br>
                        • 마이크로서비스 교육과정 교안/교재 집필  <br>
                        <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 uEngine MSA 정규 교과정 전문강사<br>
                        • 現 MSA App. Engineering 기업과정 강사<br>
                        • ‘21 : SK MSA App. Engineering 과정 강사 외<br>
                        • ’21. 06 : KT Microservice 직무전환과정 강사<br>
                        • ’20. 09 : Doosan Microservices 교육 강사<br>
                        • ’19. 09 : KOSTA Microservices 교육 강사<br>
                        • ‘19. 02 : LG CNS 이벤트스토밍 교육 강사<br>
                    </div>
                </div>
            </div><br><br>
            <div class="gs-the-entire-package">
                <div class="gs-instructor-card">
                    <div style="width:150px; height:150px; border-radius:100%; margin:0 auto; margin-top:10px; overflow:hidden;">
                        <g-image style="margin-top:-15px;" src="~/img/05_Community/02_MSA_교육과정/img8.jpeg"></g-image>
                    </div>
                    <div class="gs-instructor-card-name">
                        <h3 style="margin-bottom:0; color:gray;">윤성렬</h3>
                        <p style="color:gray; font-size:12px;">uEngine Manager & MSA Consultant</p>
                    </div>
                    <div style="text-align:center; padding:5px 5px 20px 5px; opacity:0.7; font-size:14px;">
                        • MSA 개발 및 네트워크 인프라 구축<br>
                        • Domain 분석설계 및 서버 개발 project<br>
                        • 다수 MSA 제안 작업 및 컨설팅 <br>
                        • 다수 마이크로서비스 교육 진행  <br>
                        <hr style="size:0.7; width:90%; margin:10px 0 10px 5%;"  color="black">
                        • 現 네비웍스 연구소장/상무이사<br>
                        • 現 드림플로우 연구소장/이사<br>
                        • 現 한국소프트웨어기술진흥협회 BAPF 포럼,<br>교육과정위원회 및 전문강사<br>
                        • ’17. 03 : 가천대학교 겸임교수<br>
                        • ’18. 04 : TTA 사물인터넷 특별기술위원회 사물인터넷<br>융합서비스 프로젝트그룹 (SPG11) 부의장<br>
                        • ’18. 10 : 원오원글로벌 디지털팀 팀장<br>
                    </div>
                </div>
            </div>

        </div>

        <div id="review2" class="gs-manager">
            <h3 style="margin-top:50px;">교육 후기</h3>
        </div>
        <hr>
        <div v-if="page==1" id="reviewPage1" class="gs-review-full-box">
            <div class="clearfix gs-review-box">
                <div class="gs-review-background" style="background-color:#F9A825;">김</div>
                <div>
                    <div>김**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>실습하고 직접 해봐서 더 이해가 잘 됩니다. 반복적으로 복습을 해주시고 퀴즈도 내주셔서 더 기억에 많이 남아 좋습니다.</p>
            </div>
            <div class="clearfix gs-review-box">
                <div class="gs-review-background" style="background-color:#9E9D24;">김</div>
                <div>
                    <div>김**</div>
                    <div class="gs-review-star-color">★★★★</div>
                </div>
                <p>
                    본 강의와 같은 진행 및 교육 방식이라면 온라인 강의여서 더 좋다고 느꼈습니다.(msa-ez 에서 개발하고 직접 내 환경에 강사가 들어와 봐주는 방식, 강사가 일일이 봐주려고 하는 느낌)
                </p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#4E342E;">이</div>
                <div>
                    <div>이**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>강의 내용은 물론이고 이슈 발생 시 인원 한 명 한 명 원격으로 붙어서 알려주시는 점이 좋았습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#37474F;">최</div>
                <div>
                    <div>최**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>양질의 교육과정을 통해 이벤트스토밍을 이용한 새로운 서비스를 2시간 만에 설계할 수 있었습니다.</p>
            </div>
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#4527A0;">백</div>
                <div>
                    <div>백**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>EDA 기법, 이론과 실습이 모두 이루어져 있어서 굉장히 도움이 많이 됩니다.</p>
            </div>
        </div>
        <div v-else-if="page==2" id="reviewPage2" class="gs-review-full-box">
            <div class="clearfix gs-review-box" >
                <div class="gs-review-background" style="background-color:#FF1744;">권</div>
                <div>
                    <div>권**</div>
                    <div class="gs-review-star-color">★★★★★</div>
                </div>
                <p>이론과 실습을 병행하는 알찬 교육과정과 전문적인 툴을 이용한 설계와 구현까지! 좋은 강의 감사합니다.</p>
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
        <br>
    </div>
</template>

<script>
        // @group 07_02_10
    export default {
        name:'advanced',
        data() {
            return {
                page:1
            }
        },
        props: {
            "3. Advanced Course": {
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