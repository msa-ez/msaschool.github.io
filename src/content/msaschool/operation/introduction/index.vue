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
<br><br>
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