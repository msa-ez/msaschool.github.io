<template>
    <div>
        <div class="content" style="margin-top:-10px;">
            <h3 class="con-tit mt-4">MSA School 은</h3>
            <p style="font-weight: 700;">MSA분야 최고의 전문 컨텐츠로 마이크로서비스 시장을 선도할 클라우드 네이티브 전문가를 배출하고 있습니다.</p>
            <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
                MSA School은 분석, 설계에서 구현, 배포까지 마이크로서비스 전 생명주기를 지원하는 학습 교구와 전문 커리큘럼으로 End-to-End 학습 및 실습이 가능한 환경을 제공합니다.
                <br>Cloud native한 최신 컨텐츠는 물론, 이벤트 드리븐 마이크로서비스 구현에 필수인 전용 프레임워크(Eventuate, Axon 등)와 최신 MSA 기술이 반영된 실습코드로 MSA School은 항상 진화합니다.
            </div>
            <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
                모든 CNA 교과정은 로컬에 SW 설치없이 웹 브라우저에서 수강 가능합니다. 브라우저 상에서 Domain driven Design(도메인 주도 설계)기반 분석/설계 도구인 이벤트스토밍(Eventstorming)으로 설계된 도메인 모델은 다양한 언어(Axon, Eventuate, Go, Nodejs, Python, Spring-boot, Custom Language)로 CNA Code가 생성되고, 클라우드 IDE 도구인 GitPod와 자동 연계됩니다.
            </div>
            <div style="color:#444d56;">
                MSA School이 전하는 축적된 Cloud 전문 지식, 마이크로서비스 현장 경험 및 질높은 교육 후기로 인해, 매년 마이크로서비스를 도입하려는 많은 선도 기업들이 MSA School을 통해 CNA를 학습하고 재방문의 발길이 꾸준하게 이어지고 있습니다.
            </div>
        </div>
        <div style="margin-top:70px; display: flex; justify-content: flex-start; align-items: center;">
            <h3 class="con-tit">학습 교구의 특징</h3>
        </div>
       
        <div>
            <div class="content">
                <p style="font-weight: 700;">MSA School에서 사용하는 학습 교구 MSA Easy는 마이크로서비스의 분석, 설계, 구현 및 운영을 지원하도록 설계된 통합 플랫폼입니다.</p>
            </div>
            <div class="default-row">
                <div v-for="(learningParish, index) in learningParishs" :key="index"
                    class="default-col text-center"
                >
                    <v-card style="padding:10px; height:100%;"
                        class="clearfix"
                        outlined
                    >
                        <iframe 
                            :src="learningParish.link"
                            class="youtube-card-image"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div>
                            <div class="card-main-text">{{ learningParish.mainText }}</div>
                            <div class="card-sub-text">{{ learningParish.subText }}</div>
                        </div>
                            <v-btn @click="goToModel(learningParish.type)"
                                target="_blank"
                                style="background-color:#5a67d8 !important;
                                    border-radius: 4px;
                                    height: 24px;
                                    width: 120px;
                                    text-align: center;
                                    line-height: 36px;
                                    font-size: 12px;
                                    font-weight: 500;
                                    float: right;
                                    margin-top: 16px;"
                                ><span style="color:white;">학습 교구 사용하기</span>
                            </v-btn>
                    </v-card>
                </div>
            </div>
            
        
            <div style="margin-top: 10px; margin-bottom: 15px; line-height: 1.5; color:#444d56;">
                MSA Easy는 Biz-Dev-Ops 전 라이프사이클에 걸쳐 ChatGPT를 활용한 자동화 및 가이드 기능을 지원하고 있어 애자일한 CNA 구현에 필요한 최적의 수행 환경을 제공합니다.            </div>
            <div style="color:#444d56;">
                설치가 필요없이 100% 브라우저 기반에서 동작하며 협업기반의 팀워크를 지원하는 최신의 OpenAI 엔진들이 탑재되어 비즈니스 기획자, 데브옵스 개발자, 클라우드 운영자를 위애 비즈니스 기획에서 구현, 테스트, 배포를 아우르는 클라우드 네이티브한 task들을 자동화하며 다양한 애자일한 경험들을 제공합니다.
            </div>

            <mainSampleExerciseVue />

            <h3 style="margin-top: 20px;">마이크로서비스 아키텍처 도구 비교</h3>
            <table class="tbl-ez" style="width:100%;">
                <th style="padding: 0 !important;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">제품명</div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">오픈소스</div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">코드생성기능</div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">AI기능</div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">모델링 도구</div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">국내지원여부</div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title-ai mobile" style="color: #fff; margin-left: 1px;">프레임워크 종속성</div>
                </th>

                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="text-align:center; text-decoration: underline;">MSAEZ</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="text-align:center;">ContextMapper</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="text-align:center;">QLERIFY</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">△</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="text-align:center;">vLINGO</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                    <td style="border-left: 1px solid #aaa;">X</td>
                    <td style="border-left: 1px solid #aaa;">O</td>
                </tr>
            </table>
        </div>

        <!-- <div class="content banner-pc" style="margin-top:-20px;">
            <h3 class="con-tit w190">Upcoming Event</h3>
            <a :href="'/operation/introduction/ai-curriculum'">
                <g-image style="width: 100%;"
                    src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/7690662d-1544-41dc-8088-6566412af6f1">
                </g-image>
            </a>
        </div>
        <div class="content banner-mo" style="margin-top:-20px;">
            <h3 class="con-tit w190">Upcoming Event</h3>
            <a :href="'/operation/introduction/ai-curriculum'">
                <g-image style="width: 100%;"
                    src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/fda15811-423b-4992-893d-e66b9fdffe37">
                </g-image>
            </a>
        </div> -->

        <div style="margin-top:70px; display: flex; justify-content: flex-start; align-items: center;">
            <h3 class="con-tit w190">웨비나 영상 다시보기</h3>
            <!-- <h3 class="con-tit-webinar">웨비나 영상 다시보기</h3> -->
            <a href="https://www.youtube.com/@uengine5309" target="_blank">
                <v-btn style="background-color:#5a67d8 !important;
                    border-radius: 4px;
                    margin-left:30px;
                    margin-top: -25px;
                    height: 36px;
                    width: 130px;
                    text-align: center;
                    line-height: 36px;
                    font-size: 14px;
                    font-weight: 700;"
                ><span style="color:white;">전체 영상 확인</span>
                </v-btn>
            </a>
        </div>

        <!-- <v-slide-group
            v-model="model"
            class="pa-4"
            show-arrows
            style="border-bottom: 3px solid #E2E8F0;"
        >
            <v-slide-item v-for="webinarCard in webinarCard">
                <a :href="webinarCard.youtubeUrl" target="_blank">
                    <v-card style="margin:20px 10px;">
                        <div outlined class="clearfix youtube-card-box">
                            <v-img class="youtube-card-image"
                                :src="webinarCard.imgUrl" 
                            />
                            <div>
                                <div class="card-main-text">{{ webinarCard.title }}</div>
                                <div class="card-sub-text">{{ webinarCard.subTitle }}</div>
                            </div>
                        </div>
                    </v-card>
                </a>
            </v-slide-item> 
        </v-slide-group> -->

        <div class="default-row">
            <div v-for="(webinar, index) in webinars" :key="index"
                class="default-col text-center"
            >
                <a :href="webinar.link" target="_blank">
                    <v-card style="padding: 10px; height: 100%;"
                        class="clearfix"
                        outlined
                    >
                        <g-image class="youtube-card-image"
                                :src="webinar.image">
                        </g-image>
                        <div>
                            <div class="card-main-text">{{ webinar.mainText }}</div>
                            <div class="card-sub-text">{{ webinar.subText }}</div>
                        </div>
                    </v-card>
                </a>
            </div>
        </div>
        <!-- <div style="width:100%; height:3px; background-color:#E2E8F0;margin-top: 20px;"></div>
        <div style="width:100%; height:12px; background-color:#ebf0f4;"></div> -->
    </div>
</template>

<script>
import mainSampleExerciseVue from './mainSampleExercise.vue';

export default {
    props: {

    },
    components: {
        mainSampleExerciseVue
    },
    data() {
        return {
            model: null,
            // webinarCard : [
            //     {
            //         title: "11월 웨비나",
            //         subTitle: "오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개",
            //         youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-",
            //         imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/517e2fc5-3064-4534-9e9c-bce75838404f"
            //     },
            //     {
            //         title: "10월 웨비나",
            //         subTitle: "ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!",
            //         youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK",
            //         imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/a27eaa0b-1356-420c-91ed-7422e0935e1e"
            //     },
            //     {
            //         title: "8월 웨비나",
            //         subTitle: "ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기",
            //         youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X",
            //         imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/09ebe08a-9c29-4a93-a1e6-e607d5568257"
            //     },
            //     {
            //         title: "7월 웨비나",
            //         subTitle: "ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기",
            //         youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY",
            //         imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/4ab69e92-c87a-4acf-a722-0f175115ae81"
            //     }
            // ],
            learningParishs: [
            {
                link: "https://www.youtube.com/embed/FeQEKhKXrmQ",
                image: "https://github.com/msa-ez/msaschool.github.io/assets/113568664/9f526b81-99d9-4309-b219-11106c90cc53",
                mainText: "Eventstorming Model",
                subText: "도메인 이벤트를 도출하고 시스템을 설계",
                type: "storming"
            },
            {
                link: "https://www.youtube.com/embed/ZLAGzlAeviM",
                image: "https://github.com/msa-ez/msaschool.github.io/assets/113568664/5d6292c6-e2b0-40c1-9c86-1876937955a0",
                mainText: "Auto Code Gen",
                subText: "완성된 모델에 템플릿을 적용해 코딩 작업 최소화",
                type: "auto-code-gen"
            },
            {
                link: "https://www.youtube.com/embed/sAdJOxv-qKo",
                image: "https://github.com/msa-ez/msaschool.github.io/assets/113568664/a8c3a161-b5eb-40b6-b28e-5d197ecc9ab1",
                mainText: "Customer Journey Map",
                subText: "페르소나의 Pain-Point에 대한 솔루션 도출",
                type: "cjm"
            },
            {
                link: "https://www.youtube.com/embed/2S1Zb_oDcuc",
                image: "https://github.com/msa-ez/msaschool.github.io/assets/113568664/55f5e9fc-1dc9-4a10-af5b-8593f91937dc",
                mainText: "Business Model Canvas",
                subText: "비즈니스에 필요한 요소를 분석하고 시각화하기",
                type: "business-model-canvas"
            }
            ],
            webinars: [
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW915F7tPJ4WBAXDMVssin2b",
                    image: "https://www.uengine.org/images/blog/post-prev-10.jpg",
                    mainText: "2025년 2월 웨비나",
                    subText: "딥시크 R1과 MSA 개발 프로세스 자동화"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW-gUFl7a0mwpKnd_HsmTNyV",
                    image: "https://www.uengine.org/images/blog/post-prev-9.jpg",
                    mainText: "2024년 12월 웨비나",
                    subText: "AI 기반 개발의 새로운 접근 : MSA Easy 무료 세미나 "
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW8ZWYu6M7agDdpuoiNXXSAe",
                    image: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/b444ccb5-cfce-4abd-b2cd-0982edbb6394",
                    mainText: "2024년 6월 웨비나",
                    subText: "전자정부 표준 프레임워크 기반의 CNA 설계 Part 3: 쿠버네티스 Patterns"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW-FDEB44rFm1b95oH_tIL5B",
                    image: "https://github.com/msa-ez/msaschool.github.io/assets/113568664/595dc8f5-a4d0-4ecf-86b7-16b670a39a01",
                    mainText: "2024년 5월 웨비나",
                    subText: "전자정부 표준 프레임워크 기반의 CNA 설계 Part 2: MSA의 구현"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW9eV2YUvvtkJDI_DTBqziYV",
                    image: "https://github.com/msa-ez/msa-ez-kor.github.io/assets/113568664/6ea66bc7-f3dd-45c5-87cf-1e3517817d36",
                    mainText: "2024년 4월 웨비나",
                    subText: "전자정부 표준 프레임워크 기반의 CNA 설계 Part 1: DDD와 이벤트스토밍"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_j5qld31Owdmf1XvqAinR1",
                    image: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/c080271b-d7dc-4e5e-ba90-ba8af41b792d",
                    mainText: "2024년 1월 웨비나",
                    subText: "생성형 AI를 이용한 SW아키텍처링과 마이크로서비스 구현"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-",
                    image: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/517e2fc5-3064-4534-9e9c-bce75838404f",
                    mainText: "2023년 11월 웨비나",
                    subText: "오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK",
                    image: "https://github.com/msa-ez/msaschool.github.io/assets/113568664/bc3467a2-2b1e-4eab-abd3-bdd490a3b6a6",
                    mainText: "2023년 10월 웨비나",
                    subText: "ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X",
                    image: "https://github.com/kykim97/factory-pattern/assets/113568664/1b393e58-f09d-4fdc-9126-244ac4a5d98c",
                    mainText: "2023년 8월 웨비나",
                    subText: "ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기"
                },
                {
                    link: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY",
                    image: "https://github.com/kykim97/factory-pattern/assets/113568664/271e0ff2-5aaf-4f73-a27b-c62e14a41fbb",
                    mainText: "7월 웨비나",
                    subText: "ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기"
                }
            ]
        }
    },
    mounted() {

    },
    methods: {
        goToModel(type) {
            if(type === 'auto-code-gen') {
                window.open('https://www.msaez.io/#/storming/d8525abb1acc3cf621b6aacf371fa4be', '_blank')
            } else {
                window.open(`https://www.msaez.io/#/${type}/${this.dbuid()}`, '_blank')
            }
        },
        dbuid: function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
        },
    }
}
</script>
  
<style>
.banner-mo {
    display: none;
}
@media only screen and (max-width:676px) {
    .banner-pc {
        display: none;
    }
    .banner-mo {
        display: block;
    }
}
</style>