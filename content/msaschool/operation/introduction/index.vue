<template>
    <div>
        <!-- // -->
<!--        <div  style="width: 100%" class="introduction-page">-->
<!--            <div class="hero-section">-->
<!--                <div class="container">-->
<!--                    <div class="hero-section__left">-->
<!--                        <h2 class="hero-section-title">험난한 MSA 구축 여정의 길라잡이</h2>-->
<!--                        &lt;!&ndash;accordion&ndash;&gt;-->
<!--                        <div class="mat-accordion accordion" id="accordion">-->
<!--                            <div class="card">-->
<!--                                <div class="card-header card-header" id="headingOne">-->
<!--                                    <button type="button" class="card-header-title" data-toggle="collapse"-->
<!--                                            data-target="#collapseOne">-->
<!--                                        <img src="/img/icons/img/ic-carousel-3.png"-->
<!--                                             srcset="/img/icons/img/ic-carousel-3.png 1x, /img/icons/img/ic-carousel-3@2x.png 2x, /img/icons/img/ic-carousel-3@3x.png 3x"-->
<!--                                             alt="carousel-item">-->
<!--                                        &lt;!&ndash;<i class="fa fa-plus"></i>&ndash;&gt;BizDevOps 풀 지원-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"-->
<!--                                     data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        <p>계획에서 운영까지 End-to-End 학습을 위한 단계별 효율적인 실천법 제시</p>-->
<!--                                        <img class="carousel-item_img"-->
<!--                                             src="/img/icons/img/introduction-1.png"-->
<!--                                             srcset="/img/icons/img/introduction-1.png 1x, /img/icons/img/introduction-1@2x.png 2x, /img/icons/img/introduction-1@3x.png 3x"-->
<!--                                             alt="carousel-item">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="card">-->
<!--                                <div class="card-header card-header" id="headingTwo">-->
<!--                                    <button type="button" class="card-header-title collapsed"-->
<!--                                            data-toggle="collapse"-->
<!--                                            data-target="#collapseTwo">-->
<!--                                        <img src="/img/icons/img/ic-carousel-2.png"-->
<!--                                             srcset="/img/icons/img/ic-carousel-2.png 1x, /img/icons/img/ic-carousel-2@2x.png 2x, /img/icons/img/ic-carousel-2@3x.png 3x"-->
<!--                                             alt="carousel-item">-->
<!--                                        &lt;!&ndash;<i class="fa fa-plus"></i>&ndash;&gt;실전 MSA 코드 활용-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"-->
<!--                                     data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        <p>실행 가능한 E-Commerce 실전 코드 중심의 디자인 패턴, 구현 전략, 적용 사례 소개</p>-->
<!--                                        <img class="carousel-item_img"-->
<!--                                             src="/img/icons/img/introduction-2.png"-->
<!--                                             srcset="/img/icons/img/introduction-2.png 1x, /img/icons/img/introduction-2@2x.png 2x, /img/icons/img/introduction-2@3x.png 3x"-->
<!--                                             alt="carousel-item">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="card">-->
<!--                                <div class="card-header card-header" id="headingThree">-->
<!--                                    <button type="button" class="card-header-title collapsed"-->
<!--                                            data-toggle="collapse"-->
<!--                                            data-target="#collapseThree">-->
<!--                                        <img src="/img/icons/img/ic-carousel-1.png"-->
<!--                                             srcset="/img/icons/img/ic-carousel-1.png 1x, /img/icons/img/ic-carousel-1@2x.png 2x, /img/icons/img/ic-carousel-1@3x.png 3x"-->
<!--                                             alt="carousel-item">-->
<!--                                        &lt;!&ndash;<i class="fa fa-plus"></i>&ndash;&gt;특화된 MSA 교육-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"-->
<!--                                     data-parent="#accordion">-->
<!--                                    <div class="card-body">-->
<!--                                        <p>주제 영역별 4개 과정, 담당 역할별 3개 과정, 교육신청을 통한 맞춤 교육 실시</p>-->
<!--                                        <img class="carousel-item_img"-->
<!--                                             src="/img/icons/img/introduction-3.png"-->
<!--                                             srcset="/img/icons/img/introduction-3.png 1x, /img/icons/img/introduction-3@2x.png 2x, /img/icons/img/introduction-3@3x.png 3x"-->
<!--                                             alt="carousel-item">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>&lt;!&ndash;//accordion&ndash;&gt;-->
<!--                    </div>&lt;!&ndash;//left&ndash;&gt;-->
<!--                    <div class="hero-section__right">-->
<!--                        <div class="variable slider">-->
<!--                            <div class="carousel-item item">-->
<!--                                <div class="carousel-item_inner">-->
<!--                                    <img class="carousel-item_img"-->
<!--                                         src="/img/icons/img/introduction-1.png"-->
<!--                                         srcset="/img/icons/img/introduction-1.png 1x, /img/icons/img/introduction-1@2x.png 2x, /img/icons/img/introduction-1@3x.png 3x"-->
<!--                                         alt="carousel-item">-->
<!--                                    <div style="margin-top: 244px;">-->
<!--                                        <p class="carousel-item_line1">계획에서 운영까지 End-to-End 학습을 위한 단계별 효율적인 실천법 제시</p>-->
<!--                                        &lt;!&ndash;p class="carousel-item_line2">체계적 학습</p&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="carousel-item item">-->
<!--                                <div class="carousel-item_inner">-->
<!--                                    <img class="carousel-item_img"-->
<!--                                         src="/img/icons/img/introduction-2.png"-->
<!--                                         srcset="/img/icons/img/introduction-2.png 1x, /img/icons/img/introduction-2@2x.png 2x, /img/icons/img/introduction-2@3x.png 3x"-->
<!--                                         alt="carousel-item">-->
<!--                                    <div style="margin-top: 304px;">-->
<!--                                        <p class="carousel-item_line1">실행 가능한 E-Commerce 실전 코드 중심의 디자인 패턴, 구현 전략, 적용 사례 소개</p>-->
<!--                                        &lt;!&ndash;p class="carousel-item_line2">and release Design Fixation</p&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="carousel-item item">-->
<!--                                <div class="carousel-item_inner">-->
<!--                                    <img class="carousel-item_img"-->
<!--                                         src="/img/icons/img/introduction-3.png"-->
<!--                                         srcset="/img/icons/img/introduction-3.png 1x, /img/icons/img/introduction-3@2x.png 2x, /img/icons/img/introduction-3@3x.png 3x"-->
<!--                                         alt="carousel-item">-->
<!--                                    <div style="margin-top: 350px;">-->
<!--                                        <p class="carousel-item_line1" style="max-width: 424px;">주제 영역별 4개 과정, 담당 역할별 3개 과정, 교육신청을 통한 맞춤 교육 실시</p>-->
<!--                                        &lt;!&ndash;p class="carousel-item_line2" style="max-width: 147px;">and test it-->
<!--                                            fast</p&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                        </div>-->
<!--                    </div>&lt;!&ndash;//right&ndash;&gt;-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    <mark-down class="content" style = "margin-bottom:-50px;">
### MSA를 위한 온라인 학교, MSASchool 설립 배경
마이크로서비스(Microservice)는 소프트웨어를 구축하기 위해 애플리케이션을 소규모로 분할하여 구축하고 상호 통합하여 운영하는 접근 방식입니다. 

오늘날 급변하는 고객 요구에 민첩하게 대응하기 위해서는 갈수록 비대해지는 기존의 모노리식 아키텍처(Monolithic Architecture)기반 시스템으로는 한계가 있으며, 민첩한 대응이 가능한 마이크로서비스 아키텍처(Microservice Architecture)로 무장한 경쟁사와의 치열한 경쟁 구도에서 분명 뒤쳐질 수 밖에 없습니다. 
    
MSASchool은 이미 인터넷 시장에 깊숙하게 자리잡은 마이크로서비스를 소개하고, MSA를 적용하여 시스템을 구축하려는 기업들을 위한 든든한 길라잡이로서, 단계별 구축에 필요한 사전 지식과 전문화된 도구를 통한 실전 프랙티스, 온/오프라인 기반의 MSA 교육을 위한 기회의 장을 제공하고자 합니다.
    </mark-down>
<br />
<MobileMarkDown>
    <mark-down class="content">
### BizDevOps에 맞춘 학습 체계
    </mark-down>
    <g-image stlye ="margin-top:10px; margin-bottom:10px;"
            src="~/img/01_Introduction/01_소개/image1.png"
        ></g-image>
    <mark-down class="content" style = "margin-bottom:-50px;">
데브옵스(DevOps)는 IT시스템의 개발과 운영을 통합함으로써 개발과 운영의 사일로를 제거, 애플리케이션을 안정적이고 빠르게 운영하기 위해 시스템 개발자와 운영을 담당하는 정보기술 전문가 사이의 소통, 협업을 위해 탄생한 개발 방법론입니다.

여기에 비즈니스 영역(고객, Product Owner)을 데브옵스 생명주기에 통합한 데브옵스의 진화 형태인 ‘비즈데브옵스’는 비즈니스와 IT의 사일로를 제거하여 보다 신속한 제품 출시가 가능하게 되었습니다.

MSASchool은 비즈데브옵스를 6단계로 나누고, 셀프 스터디가 가능한 단계별 학습 체계에 따른 컨텐츠를 제공합니다.
 </mark-down>
</MobileMarkDown>
<SideMarkDown>
    <g-image src="~/img/01_Introduction/01_소개/image1.png"
                style = "margin-right:50px; margin-top:70px; height:380px !important;
                margin-top:80px;"
        ></g-image>
    <mark-down class="content">
### BizDevOps에 맞춘 학습 체계
데브옵스(DevOps)는 IT시스템의 개발과 운영을 통합함으로써 개발과 운영의 사일로를 제거, 애플리케이션을 안정적이고 빠르게 운영하기 위해 시스템 개발자와 운영을 담당하는 정보기술 전문가 사이의 소통, 협업을 위해 탄생한 개발 방법론입니다.

여기에 비즈니스 영역(고객, Product Owner)을 데브옵스 생명주기에 통합한 데브옵스의 진화 형태인 ‘비즈데브옵스’는 비즈니스와 IT의 사일로를 제거하여 보다 신속한 제품 출시가 가능하게 되었습니다.

MSASchool은 비즈데브옵스를 6단계로 나누고, 셀프 스터디가 가능한 단계별 학습 체계에 따른 컨텐츠를 제공합니다.
 </mark-down>
</SideMarkDown>
<br />
<MobileMarkDown>
    <mark-down class="content">
### 최고의 IT 및 MSA 전문가가 전하는 노하우
MSASchool은 2000년 초반부터 쌓아온 IT 경험과 지난 10년간 다져온 클라우드 플랫폼 및 기반 기술(OCE, http://www.opence.org)을 바탕으로 MSA 현장에 즉시 적용 가능한 최신의 기술 스텍과 컨텐츠를 제공합니다.

DDD(Domain Driven Design)기반 분석/설계의 가장 효율적인 방법론인 이벤트스토밍에서, Spring Boot기반 클라우드 네이티브 애플리케이션 구현, 배포 파이프라인을 거쳐 클라우드 플랫폼에 탑재되고, 컨테이너 기반 서비스 운영과 서비스 메시, 모니터링에 이르기까지... 

마이크로서비스의 전 주기를 아우르는 모든 것이 여기 MSASchool에 있습니다.  
 </mark-down>
    <g-image style="margin-bottom: -50px; margin-top:10px; margin-bottom:10px;"
                src="~/img/01_Introduction/01_소개/image2.png"
        ></g-image>
</MobileMarkDown>
<SideMarkDown>
    <mark-down class="content">
### 최고의 IT 및 MSA 전문가가 전하는 노하우
MSASchool은 2000년 초반부터 쌓아온 IT 경험과 지난 10년간 다져온 클라우드 플랫폼 및 기반 기술(OCE, http://www.opence.org)을 바탕으로 MSA 현장에 즉시 적용 가능한 최신의 기술 스텍과 컨텐츠를 제공합니다.

DDD(Domain Driven Design)기반 분석/설계의 가장 효율적인 방법론인 이벤트스토밍에서, Spring Boot기반 클라우드 네이티브 애플리케이션 구현, 배포 파이프라인을 거쳐 클라우드 플랫폼에 탑재되고, 컨테이너 기반 서비스 운영과 서비스 메시, 모니터링에 이르기까지... 

마이크로서비스의 전 주기를 아우르는 모든 것이 여기 MSASchool에 있습니다.  
 </mark-down>
    <g-image src="~/img/01_Introduction/01_소개/image2.png"
            style = "margin-left:50px; height:380px !important; margin-top:80px;"
        ></g-image>
</SideMarkDown>
<br />
<MobileMarkDown>
    <mark-down class="content">
### 전문화된 실습환경을 통한 실전 프랙티스
    </mark-down>
    <g-image style = "margin-top:10px; margin-bottom:10px;"
            src="~/img/01_Introduction/01_소개/image3.png"
        ></g-image>
    <mark-down class="content">

MSASchool 컨텐츠는 BizDevOps 라이프사이클에 맞는 직관적인 메뉴 구조를 제공합니다. 메뉴별 컨텐츠에 연결된 Quick Menu(“실습 하기”)를 통해, 사용자들은 브라우저 상에서 MSASchool이 제공하는 전문화된 PaaS 환경과 연결되어 컨텐츠에 맞는 상황별 실습이 가능합니다.

이 환경에서 사용자들은  동영상과 Lab 가이드에 따라 실전 예제 코드로 개발 학습을 수행함으로써 현장 중심 마이크로서비스 구현 패턴들을 익힐 수 있습니다.

※ PaaS 환경에서의 일부 LAB은 초기 지급되는 코인(Coin, default 1,000)을 차감한 뒤 이용 가능합니다.   
</mark-down>
</MobileMarkDown>
<SideMarkDown>
    <g-image style = "margin-right:50px; height:300px !important; width:600px; margin-top:80px;"
            src="~/img/01_Introduction/01_소개/image3.png"
        ></g-image>
    <mark-down class="content">
### 전문화된 실습환경을 통한 실전 프랙티스

MSASchool 컨텐츠는 BizDevOps 라이프사이클에 맞는 직관적인 메뉴 구조를 제공합니다. 메뉴별 컨텐츠에 연결된 Quick Menu(“실습 하기”)를 통해, 사용자들은 브라우저 상에서 MSASchool이 제공하는 전문화된 PaaS 환경과 연결되어 컨텐츠에 맞는 상황별 실습이 가능합니다.

이 환경에서 사용자들은  동영상과 Lab 가이드에 따라 실전 예제 코드로 개발 학습을 수행함으로써 현장 중심 마이크로서비스 구현 패턴들을 익힐 수 있습니다.

※ PaaS 환경에서의 일부 LAB은 초기 지급되는 코인(Coin, default 1,000)을 차감한 뒤 이용 가능합니다.   
</mark-down>
</SideMarkDown>
<br /> 

<mark-down class="content">
### MSASchool의 MSA 수업 시간표
</mark-down>
<br>

<!-- <mark-down style="margin-top: -70px;" class="content" source='
<h5>
    <table>
        <thead>
        <tr class="header">
            <th align="center" width="10%"><strong>구분</strong></th>
            <th align="center" width="25%"><strong>과목명</strong></th>
            <th align="center" width="10%"><strong>기간</strong></th>
            <th align="center" width="55%"><strong>주요 학습 내용</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr class="odd">
            <td align="center"><strong>(1교시)<br />분석/설계</strong></td>
            <td align="center">Microservice Modeling</td>
            <td align="center" style="color:blue">2일(14H)</td>
            <td><ul>
                <li><p>마이크로서비스 개념 특성</p></li>
                <li><p>마이크로서비스 외,내부 아키텍처</p></li>
                <li><p>마이크로서비스 설계</p></li>
                <li><p>DDD 와 이벤트스토밍</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>(2교시)<br />구현</strong></td>
            <td align="center">Developing Cloud Native Application</td>
            <td align="center" style="color:blue">3일(21H)</td>
            <td><ul>
                <li><p>DDD 분석 결과와 MSA Design Pattern을 적용한 구현전략</p></li>
                <li><p>Spring Boot 를 이용한 CNA 애플리케이션 개발</p></li>
                <li><p>이벤트 스토밍 설계 결과를 개발하여 클라우드에 자동으로 올리는 실습</p></li>
                <li><p>Spring Cloud 와 Istio, Kafka 를 적용한 아우터아키텍처 적용</p></li>
                <li><p>마이크로서비스의 패키징과 디플로이</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>(3교시)<br />배포</strong></td>
            <td align="center">CI/CD Pipeline with Cloud Pipelines</td>
            <td align="center" style="color:blue">1일(7H)</td>
            <td><ul>
                <li><p>CI (Continuous Integration) / CD (Continuous Delivery) 개요</p></li>
                <li><p>Maven 을 통한 CI</p></li>
                <li><p>Pipelines와 Kubernetes 연동 통한 전체 Pipeline 구축 방법</p></li>
            </ul></td>
        </tr>
        <tr class="odd">
            <td align="center"><strong>(4교시)<br />운영</strong></td>
           <td align="center">Container Orchestration (Docker & Kubernetes)</td>
            <td align="center" style="color:blue">3일(21H)</td>
            <td><ul>
                <li><p>MSA와 DevOps 그리고 Kubernetes</p></li>
                <li><p>Kubernetes 구조 이해 / 서비스 구현</p></li>
                <li><p>Kubernetes 기반 DevOps 환경 및 MSA 애플리케이션 구축하기</p></li>
            </ul></td>
        </tr>
        </tbody>
    </table>
</h5>


    '></mark-down> -->

    <!-- 커리큘럼 시작 -->
    <div>
        <h3 style="margin-top:50px;">커리큘럼 소개</h3>
        <div name="Microservice Modeling">
            <h4 style="margin:0 0 0 0;">Microservice Modeling / 2일, 14시간</h4>
            <h5 style="font-weight:700;">교육목표 : MSA 아키텍처의 분석,설계,구현하기 앞서  이벤트 스토밍(Event Storming) 기법을 기반한 실질적 설계, 구현, 운영 기법 학습</h5>
            <table style="width:100%; border : 1px solid black;">
                <th style="border : 1px solid black; border-collapse : collapse; text-align: center; width:8%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">기간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:20%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:8%; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:64%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습 내용</th>
                <tr>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">1일</td>
                    <td style="border : 1px solid black;  font-weight:700;">마이크로서비스 아키텍처</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black;">
                        • 마이크로서비스아키텍처(MSA)의 출현 배경 (애자일기업과 MSA)<br>
                        • MSA 개념과 특성 마이크로서비스 아키텍처 문제 및 해결책<br>
                        • MSA의 진화: MSA 새시, 서비스 매시, 그리고 이벤트 드리븐 아키텍처<br>
                        • 최근의  MSA 구현 전략: 외부 (아우터) 아키텍처와 내부 (이너) 아키텍처<br>
                        • MSA 의 구축 라이프사이클: BizDevOps<br>
                        • MSA 실 적용 사례 살펴보기<br>
                    </td>
                </tr>
                <tr>
                    <td rowspan="2" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">2일</td>
                    <td style="border : 1px solid black;  font-weight:700;">마이크로서비스 설계</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black;">
                        • 전략적 설계의 정의<br>
                        • 서브도메인과 바운디드 컨텍스트를 통한 서비스 분해 전략<br>
                        • 컨텍스트 매핑 유형과 연동 프로토콜별 특성 (RPC, REST, Pub/Sub)<br>
                        • 이벤트스토밍 기법을 활용한 바운디드 컨텍스트와 마이크로서비스 식별<br>
                        • 이벤트 드리븐 마이크로서비스 아키텍처의 도출<br>
                        • 전술적 설계의 정의 및 도메인 모델링 이해<br>
                        • 도메인 모델링 (Entity, Value Objects)<br>
                        • 헥사고날 (어니언) 아키텍처를 통한 서비스 구현 전략<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; font-weight:700; padding-left:15px;">설문작성 및 테스트</td>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">30 min</td>
                    <td style="border : 1px solid black;">
                        • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                    </td>
                </tr>
            </table>
        </div>



        <!-- Developing Cloud Native Application 시작 -->
        <div name="Developing Cloud Native Application">
            <h4 style="margin:50px 0 0 0;">Developing Cloud Native Application / 4일, 28시간</h4>
            <h5 style="font-weight:700;">교육목표 : Cloud 플랫폼과 Core 서비스를 이해하고 시스템을 구성하고 클라우드 애플리케이션을 개발 · 운영</h5>
            <table style="width:100%; border : 1px solid black;">
                <th style="border : 1px solid black; border-collapse : collapse; text-align: center; width:8%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">기간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:20%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:8%; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:64%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습 내용</th>
                <tr>
                    <td rowspan="3" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">1일</td>
                    <td style="border : 1px solid black;  font-weight:700;">개발 실습 개요</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">1H</td>
                    <td style="border : 1px solid black;">
                        • 개발 대상:  온라인 커머스 서비스<br>
                        • 개발 서비스 품질 목표:  Resiliency, Scalability, Responsiveness<br>
                        • 조직의 전환:  Horizontal to Vertical, Matrix Organization<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">마이크로서비스의 분석과 설계</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">2H</td>
                    <td style="border : 1px solid black;">
                        • DDD와 MSA Design Patterns을 적용한 마이크로서비스 구현 전략, Cloud Native Application 의 특성과 구현원칙들<br>
                        • 서비스 식별과 분해방법들 – Core Domain 과 Supporting Domain, Bounded Context, Aggregate, Business Capability, Mini Service<br>
                        • 분해된 서비스의 연동 방법 – Context Mapping, Request/Response or Event-driven MSA<br>
                        • Outer Architecture 구성요소 – API GW, 분산큐(Kafka), 서비스 레지스트리, 로드밸런서, 서킷브레이커, 사이드카 패턴 등<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">단위 마이크로서비스의 구현</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">4H</td>
                    <td style="border : 1px solid black;">
                        • DDD 와 이벤트 스토밍의 결과를 헥사고날 아키텍처로 매핑하는 방법<br>
                        • Spring Boot와 Maven 을 이용한 단위 서비스 포장<br>
                        • JPA 를 이용한 도메인 모델과 어댑터 구현 (Entity, Value Objects)<br>
                        • Spring Data REST + JPA 를 통한 RESTful API 노출 (HATEOAS)<br>
                    </td>
                </tr>

                <tr>
                    <td style="border : 1px solid black; padding-left:15px; text-align: center; background-color:#f2f3fc;">2일</td>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">프론트엔드를 통한 마이크로 서비스 통합</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">4H</td>
                    <td style="border : 1px solid black;">
                        • UI 를 기반한 서비스 통합 전략:  Client-side Rendering, SPA, MVVM, HATEOAS<br>
                        • MVVM Front-end 프레임워크:  VueJS, React, Angular2<br>
                        • API Gateway 를 통한 진입점 단일화, 전급 관리 및 인증 통합<br>
                        • OAuth2 와 JWT 통한 Stateless 한 토큰 기반 접근과  인증<br>
                        • Front-end 기반 통합의 한계: 트랜잭션 이슈와 성능 문제<br>
                    </td>
                </tr>


                <!-- 3일차 시작 -->
                <tr>
                    <td rowspan="4" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">3일</td>
                    <td style="border : 1px solid black;  font-weight:700;">인터-마이크로서비스의<br> 통합 1: Request-Response 방식</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">2H</td>
                    <td style="border : 1px solid black;">
                        • Request-Response 방식의 연동 (REST + Sync + Orchestration)<br>
                        • 트랜잭션 이슈: 2PC or Shared-Database and schema per service<br>
                        • 추적 이슈: 분산 추척을 통한 오류 점검 방법, Istio 예거와 kiali 사용 방법<br>
                        • 성능 이슈: 장애전파 상황 그리고 Istio 의 Circuit Breaker, Rate Limiting를 통한 회피<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">인터-마이크로서비스의 <br>통합 2: Kafka 활용</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">2H</td>
                    <td style="border : 1px solid black; padding-right:15px;">
                        • Event-driven 방식의 연동 (Pub/Sub + Async + Choreography)<br>
                        • EDA 에서의 분산 큐의 역할과 Kafka 의 장점<br>
                        • Kafka 의 설치와 클라이언트 도구를 통한 Pub/Sub 실습<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">인터-마이크로서비스의<br> 통합 2: Event-driven 방식</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">3H</td>
                    <td style="border : 1px solid black; padding-right:15px;">
                        • 이벤트의 퍼블리싱 – 어그리게이트 내의 엔티티에 JPA 어노테이션 주입 방법, Spring Cloud Streams 를 통한 이벤트 퍼블리시<br>
                        • 이벤트의 서브스크립션 - Spring Cloud Streams 와 Kafka client 를 통한 이벤트의 수신과 처리, Acknowledge<br>
                        • 트랜잭션 이슈: Eventual Transaction 와 Saga, Compensation<br>
                        • 실습 통한 성능의 장점 이해 :  Time-decoupling 과  Non-blocking 속성<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">데이터 프로젝션</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">3H</td>
                    <td style="border : 1px solid black; padding-right:15px;">
                        • Join SQL 를 회피하고, 데이터를 취합하여 보여주는 전략 3가지:  by UI, by Composite-service, by CQRS<br>
                        • Composite-Service 구현방법:  동시 REST 호출 or API GW (GraphQL) 사용<br>
                        • CQRS / GraphQL 구현 방법<br>
                    </td>
                </tr>
                <!-- 3일차 끝 -->

                <tr>
                    <td rowspan="2" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">4일</td>
                    <td style="border : 1px solid black;  font-weight:700;">MSA 패턴을 적용한 샘플 마이크로서비스 구현</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black; ">
                        • MSA 패턴을 적용한 샘플 마이크로서비스 종합 구현 및 테스트<br>
                        • 마이로서비스 토큰 인증 (Key Cloark, Spring Security)<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; font-weight:700; padding-left:15px;">설문작성 및 테스트</td>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">30 min</td>
                    <td style="border : 1px solid black;">
                        • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                    </td>
                </tr>
            </table>
        </div>


        <div name="DevOps: Container Orchestration-Docker & Kubernetes">
            <h4 style="margin:50px 0 0 0;">Container Orchestration-Docker & Kubernetes / 4일, 21시간</h4>
            <h5 style="font-weight:700;">교육목표 : Kubernetes와 Docker 의 설치, 애플리케이션 배포, 무정지 재배포, 운영자동화의 실습 및 학습</h5>
            <table style="width:100%; border : 1px solid black;">
                <th style="border : 1px solid black; border-collapse : collapse; text-align: center; width:8%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">기간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:20%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:8%; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:64%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습 내용</th>
                <tr>
                    <td rowspan="2" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">1일</td>
                    <td style="border : 1px solid black;  font-weight:700;">MSA와 DevOps 그리고 Kubernetes</td>
                    <td rowspan="2" style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black;">
                        • 마이크로서비스와 DevOps의 적용사례 – 아마존과 넷플릭스<br>
                        • 컨테이너와 컨테이너 오케스트레이터의 등장<br>
                        • 컨테이너 기반 애플리케이션 디자인 패턴<br>
                        • 구글의 Kubernetes를 기반한 MSA와 DevOps 환경의 적용 시나리오<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">Kubernetes 의 구조, 활용 시나리오의 전반적 이해</td>
                    <td style="border : 1px solid black;">
                        • Kubernetes 등장 배경 (Borg), Features, Architecture<br>
                        • Kubernetes Runtime Mechanism<br>
                        • Kubernetes Object Model 과 Declarative Configuration 개념<br>
                        • Kubernetes 의 설치:  Configuration, Infrastructure, Localhost vs On-premise vs Cloud Installation, Tools/Resources<br>
                        • Public Kubernetes 서비스 (GCP / AWS / Azure) 계정 생성과 접속<br>
                        • 샘플 MSA 애플리케이션의 디플로이 전과정 미리보기<br>
                    </td>
                </tr>

                <tr>
                    <td style="border : 1px solid black; padding-left:15px; text-align: center; background-color:#f2f3fc;">2일</td>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">Kubernetes 서비스 설치와 운영</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black;">
                        • Kubernetes 기본 명령과 Kubectl 를 통한 객체 다루기<br>
                        • Kubernetes 를 통한 애플리케이션 디플로이, 인터넷으로의 서비스 노출과정<br>
                        • CSP VM 서비스에서의 Node 확인과 pod 디플로이 전략 확인<br>
                        • Pod, Deployment, ReplicaSet, StatefulSet, DaemonSet 등 객체 세부<br>
                        • Self healing, Auto Scaling, Zero-Down time Deployment<br>
                        • Liveness & Readiness 의 설정, 트러블슈팅 방법<br>
                        • Volume, PersistenceVolume, PersistenceVolumeClaim<br>
                        • Yaml, Helm 를 이용한 멀티 티어 애플리케이션 프로비져닝<br>
                    </td>
                </tr>

                <tr>
                    <td style="border : 1px solid black; padding-left:15px; text-align: center; background-color:#f2f3fc;">3일</td>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">쿠버네티스를 이용한 Micro Services and DevOps</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black;">
                        • MSA Application 서비스 시나리오: 샘플 애플리케이션<br>
                        • 애플리케이션 패키징을 위한 컨테이너 (도커)의 이해<br>
                        • 마이크로 서비스 섀시 (Chassis) :  스프링 클라우드와 넷플릭스 OSS, 그리고 도커를 통한 서비스 패키징<br>
                        • Container Registry 를 이용한 도커 레지스트리에 서비스 퍼블리싱<br>
                        • 애플리케이션 디플로이먼트 디스크립터의 설정, Liveness & Readiness 설정<br>
                        • 서비스 매시 Isio의 개념과 쿠버네티스와 관계 이해<br>
                        • Istio 를 통한 Resilience 향상: 서킷 브레이킹, 레이트 리미팅, 리트라이, 풀이젝션<br>
                        • Istio 를 통한 Smart Deploy: 동적 트래픽 라우팅, AB Testing, 카나리 디플로이, 새도우 디플로이<br>
                        • Istio 를 통한 모니터링:  프로메테우스를 통한 모니터링 수집, 예거, 키알리를 통한 분산 서비스 추적 프로파일링<br>
                    </td>
                </tr>


                <tr>
                    <td rowspan="3" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">4일</td>
                    <td style="border : 1px solid black;  font-weight:700;">CI/CD 프로세스와 CSP 의 대응 서비스</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">3H</td>
                    <td style="border : 1px solid black; ">
                        • CI (Continuous Integration) / CD (Continuous Delivery) 개요<br>
                        • CI/CD Pipeline 구성요소 – Source Repository, Builder, Pipeline, Image Registry, Container Orchestrator<br>
                        • CSP 의 대응 서비스 – Repos Git, CSP Pipeline and CSP Container Registry, 그리고 CSP Kubernetes Service<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; font-weight:700; padding-left:15px;">CI/CD Pipeline with CSP Pipelines</td>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">4H</td>
                    <td style="border : 1px solid black;">
                        • Maven 개념과 라이브러리 디펜던시 (pom.xml) 의 구조 이해<br>
                        • CSP Pipelines Yaml 파일 구조<br>
                        • 소스코드의 변경을 통한 Git 트리거를 통한 파이프라인 실행<br>
                        • CSP Pipelines 대시보드<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; font-weight:700; padding-left:15px;">설문작성 및 테스트</td>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">30 min</td>
                    <td style="border : 1px solid black;">
                        • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                    </td>
                </tr>
            </table>
        </div>
        <!-- DevOps: Container Orchestration-Docker & Kubernetes 끝 -->


        <!-- Capstone Project: Developing on Cloud 시작 -->
        <div name="Capstone Project: Developing on Cloud">
            <h4 style="margin:50px 0 0 0;">Capstone Project: Developing on Cloud / 4일, 28시간</h4>
            <h5 style="font-weight:700;">교육목표 : 클라우드 플랫폼에서 마이크로서비스 아키텍처 기반으로 클라우드 네이티브 애플리케이션을  개발 하는 프로젝트 수행 방식의 교육</h5>
            <table style="width:100%; border : 1px solid black;">
                <th style="border : 1px solid black; border-collapse : collapse; text-align: center; width:8%; padding-left:15px; background-color:#e6e9f9; font-weight:900; font-size:20px;">기간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:20%%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주제</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:8%; background-color:#e6e9f9; font-weight:900; font-size:20px;">시간</th>
                <th style="border : 1px solid black; border-collapse : collapse;  text-align: center; width:64%; background-color:#e6e9f9; font-weight:900; font-size:20px;">주요 학습 내용</th>
                <tr>
                    <td rowspan="2" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">1일</td>
                    <td style="border : 1px solid black;  font-weight:700;">평가 방법 설명 및 환경 설정</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">3H</td>
                    <td style="border : 1px solid black;">
                        • 통합 평가 기준과 체크 포인트 설명<br>
                        • 캡스톤 프로젝트 선정 기준 설명<br>
                        • 프로젝트 결과 발표 방법 설명<br>
                        • 팀선정, 팀장선출<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">팀프로젝트 모델링</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">4H</td>
                    <td style="border : 1px solid black;">
                        • 팀별 이벤트 스토밍 통한 도메인 모델링<br>
                        • 강사:  이벤트 스토밍 퍼실러테이션<br>
                    </td>
                </tr>

                <tr>
                    <td style="border : 1px solid black; padding-left:15px; text-align: center; background-color:#f2f3fc;">2일</td>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">팀프로젝트 개발</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">7H</td>
                    <td style="border : 1px solid black;">
                        • 개발 진행
                        • 강사: 질의응답, 문제해결, 가이드
                    </td>
                </tr>

                <tr>
                    <td rowspan="2" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">3일</td>
                    <td style="border : 1px solid black;  font-weight:700;">팀프로젝트 배포</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">4H</td>
                    <td style="border : 1px solid black;">
                        • 쿠버네티스와 CI/CD 를 이용하여 배포<br>
                        • 강사: 질의응답, 문제해결, 가이드<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black;  font-weight:700; padding-left:15px;">팀프로젝트 평가</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">3H</td>
                    <td style="border : 1px solid black;">
                        • 조별 발표: 개발 내역 체크포인트에 따라<br>
                        • 강사: 평가<br>
                    </td>
                </tr>


                <tr>
                    <td rowspan="3" style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">4일</td>
                    <td style="border : 1px solid black;  font-weight:700;">개인개발</td>
                    <td style="border : 1px solid black; text-align: center; background-color:#f2f3fc;">3H</td>
                    <td style="border : 1px solid black; ">
                        • 조별 개발 내용에서 추가 마이크로서비스 주제 선정<br>
                        • 추가 마이크로 서비스에 대한 분석설계 (이벤트스토밍), 개발, 운영의 시나리오로 개발<br>
                        • 팀별 평가의 동일한 체크포인트<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; font-weight:700; padding-left:15px;">개인평가</td>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">4H</td>
                    <td style="border : 1px solid black;">
                        • 개인 발표<br>
                        • 강사:  평가 후 총괄 개인별 점수 산정 →  보고<br>
                    </td>
                </tr>
                <tr>
                    <td style="border : 1px solid black; font-weight:700; padding-left:15px;">설문작성 및 테스트</td>
                    <td style="border : 1px solid black; text-align: center; padding-left:15px; background-color:#f2f3fc;">30 min</td>
                    <td style="border : 1px solid black;">
                        • 과정에 대한 설문 작성 및 온라인 문항을 통한 테스트
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <!-- 커리큘럼 끝 -->

    <!-- 이메일 + 카카오톡 링크 시작 -->
    <div style="margin:20px 0 50px 0; display:inline-flex;">
        <div style="margin-right:20px;">교육관련 연락처 : help@uengine.org</div>
        <a target="_blank" style="color:blue;" href="https://open.kakao.com/me/msaschool">오픈 카카오톡</a>
    </div>
    <!-- 이메일 + 카카오톡 링크 끝 -->
    </div>
</template>


<script>
    // @group 01_01_01
    export default {
        name: 'index',
        directory:'operation_introduction',
        props: {
            "소개": {
                type: String
            },
        },

    }
</script>