<template>
    <div style="margin-top:80px;">
        <div>
            <h2 style="display:inline-block !important;">Fundamental Standard 과정</h2><br>
            <v-btn class="gs-review-btn"
                target='_blank'
                text
            >
                <a href="/operation/education/fundamental/#review2" style="color:black !important; font-weight:700; font-size:14px;">
                    ▼ 후기보기
                </a>
            </v-btn>
        </div>
        <h6 class="gs-course-content">Monolith / VM 기반 Web Application 구현을 목표로 UML과 객체 지향 디자인 패턴을 적용하여  프로그램을 설계하고, Java 언어와 스프링 라이브러리를 통해 웹 애플리케이션을 개발한 다음 Cloud VM을 생성하고 배포하는 과정으로 구성된 교육과정입니다.</h6>
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
            :href="`https://docs.google.com/forms/d/e/1FAIpQLSfpsq7Dc1W13UiJAK1016zsBoNkDmgKzqjVZuGCXN2UZD2jWQ/viewform?usp=sf_link`"
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
                    <td style="font-weight:700;">객체지향 설계</td>
                    <td>
                        • 객체지향의 기본 개념<br>
                        • OOP(Object Oriented Programming)와 개발조직<br>
                        • Java언어 실습 환경 사용법<br>
                        • Maven 개념과 라이브러리 디펜던시(pom.xml)의 구조 이해<br>
                        • 상속과 다형성을 적용한 자동차 시뮬레이션 프로그래밍<br>
                        • 객체지향 실습 - Separation of Concerns<br>
                        • Class Diagram으로 SoC Layered Architecture 이해<br>
                        • Sequence Diagram으로 SoC Layered Architecture의 동작구조 이해<br>

                    </td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">UML 언어와 디자인 패턴</td>
                    <td>
                        • 팩토리, 프록시 패턴의 이해<br>
                        • how to draw UML<br>
                        • uml2code<br>
                        • Class diagram relations<br>
                        • Sequence diagram and Code<br>
                        • 디자인 패턴을 적용한 네트워크 뱅킹 시스템 구현<br>
                        • Remote Proxy의 개념과 동작<br>
                        • 서버 및 클라이언트 만들기<br>

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
                    <td style="font-weight:700;">객체 지향 프레임워크의 개념과 구현방법 – Spring프레임워크 </td>
                    <td>
                        • 디자인 패턴 - 싱글톤 패턴의 필요성, 싱글톤 패턴의 직접 구현, 프록시 패턴<br>
                        • Spring프레임워크 사용과 따라 만들기<br>
                        • 스프링 프레임워크, 스프링 부트의 기동<br>
                        • 스프링을 통한 싱글톤 패턴 적용과 Rest API<br>
                        • 스프링 AOP를 통한 Proxy 생성<br>
                    </td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td rowspan="2" style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">자바 확장 클래스 타입</td>
                    <td>
                        • 자바 확장 클래스 타입의 이해<br>
                        • Anonymous Class Observer Pattern<br>
                        • Abstract Class, 접근자와 접근권한<br>
                        • Interface Class<br>
                        • Lambda Expression과 Stream<br>
                    </td>
                </tr>
                <tr>
                    <td style=" font-weight:700; padding-left:15px;">객체 지향 프레임워크 -Spring을 통한 RESTful서비스</td>
                    <td>
                        • Repository 패턴 그리고 RESTful API<br>
                        • Database 접근과 Repository Pattern 의 직접 구현<br>
                        • CRUD Full Cycle 을 지원하는 Repository pattern 으로 적용<br>
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
                    <td style="font-weight:700;">객체 지향 프로그래밍 :<br>Database, JPA</td>
                    <td>
                        • JDBC Application 구현 - MySQL 을 이용한 RDBMS 접속<br>
                        • 복잡한 SQL 질의어 구현<br>
                        • JPA를 기반한 Repository pattern 구현체 자동생성<br>
                        • REST 개념<br>
                        • Spring Data REST Repository 를 사용한 RESTful API 생성<br>
                        • HATEOAS 이해와 HATEOAS link 추가하기<br>
                    </td>
                </tr>

                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">다양한 객체 지향 언어 :TypeScript, Vue JS</td>
                    <td>
                        • Javascript를 이용한 Pet Store 요구사항 이해 그리고 관련 환경 설치<br>
                        • Vue JS 컴포넌트 생성하기<br>
                        • VueJS 에서의 상속과 재정의, 상위메서드 호출 그리고 템플릿 재사용<br>
                        • VueJS를 통한 웹 UI에서의 컴포넌트 개발<br>
                        • VueJS 컴포넌트의 다이나믹 캐스팅<br>
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
                    <td style="font-weight:700;">CSP managed VM</td>
                    <td>
                        • 클라우드 인프라 개요 - CSP 소개<br>
                        • VM 생성 how to<br>
                        • 클라우드 환경에서의 배포 - VM, Database 프로비저닝, WAS 배포, Network 설정으로 통한 서비스 접속<br>
                    </td>
                </tr>
                <tr>
                    <td style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">11:30~13:00</td>
                    <td colspan="2" style="padding-left:15px; font-weight:700; text-align:center;">Lunch time</td>
                </tr>
                <tr>
                    <td rowspan="2" style="margin: auto; text-align: center; padding-left:15px; background-color:#f2f3fc;">오후<br>13:00~17:30</td>
                    <td style="font-weight:700;">Mini Project, Deploy to VM</td>
                    <td>
                        • 쇼핑몰 어플리케이션 구현 – 요건 정의와 시스템설계 (UML)<br>
                        • 쇼핑몰 기능의 요구사항 정의와 도메인 클래스 정의 유비쿼터스 언어<br>
                        • 백엔드 서버에서 데이터를 얻어오기 위한 API Gateway 설정과 AJAX 호출<br>
                        • 클라우드에 배포<br> 
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
        // @group 07_02_09
    export default {
        name:'Fundamental',
        data() {
            return {
                page:1
            }
        },
        props: {
            "Fundamental/Standard CNA": {
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