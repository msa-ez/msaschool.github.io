<template>
    <div>
        <div class="content" style="margin-top:-40px;">
            <h3 class="con-tit">MSA School 은</h3>
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

        <!-- <div class="content banner-pc" style="margin-top:-20px;">
            <h3 class="con-tit w190">Upcoming Event</h3>
            <a :href="'/operation/education/ai-curriculum'">
                <g-image style="width: 100%;"
                    src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/7690662d-1544-41dc-8088-6566412af6f1">
                </g-image>
            </a>
        </div>
        <div class="content banner-mo" style="margin-top:-20px;">
            <h3 class="con-tit w190">Upcoming Event</h3>
            <a :href="'/operation/education/ai-curriculum'">
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

        <v-row style="margin:0;">
            <!-- 5번 카드 -->
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_j5qld31Owdmf1XvqAinR1" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image" style="border: 1px solid #eee;"
                        src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/c080271b-d7dc-4e5e-ba90-ba8af41b792d">
                    </g-image>
                    <div>
                        <div class="card-main-text">1월 웨비나</div>
                        <div class="card-sub-text">생성형 AI를 이용한 SW아키텍처링과 마이크로서비스 구현</div>
                    </div>
                </div>
            </a>
            <!-- 4번 카드 -->
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/517e2fc5-3064-4534-9e9c-bce75838404f">
                    </g-image>
                    <div>
                        <div class="card-main-text">11월 웨비나</div>
                        <div class="card-sub-text">오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개</div>
                    </div>
                </div>
            </a>
            <!-- 3번 카드 -->
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/msa-ez/msaschool.github.io/assets/113568664/bc3467a2-2b1e-4eab-abd3-bdd490a3b6a6">
                    </g-image>
                    <div>
                        <div class="card-main-text">10월 웨비나</div>
                        <div class="card-sub-text">ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!</div>
                    </div>
                </div>
            </a>
            <!-- 2번 카드 -->
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/kykim97/factory-pattern/assets/113568664/1b393e58-f09d-4fdc-9126-244ac4a5d98c">
                    </g-image>
                    <div>
                        <div class="card-main-text">8월 웨비나</div>
                        <div class="card-sub-text">ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기</div>
                    </div>
                </div>
            </a>            
            <!-- 1번 카드 -->
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/kykim97/factory-pattern/assets/113568664/271e0ff2-5aaf-4f73-a27b-c62e14a41fbb">
                    </g-image>
                    <div>
                        <div class="card-main-text">7월 웨비나</div>
                        <div class="card-sub-text">ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기</div>
                    </div>
                </div>
            </a>
        </v-row>
        <!-- <div style="width:100%; height:3px; background-color:#E2E8F0;margin-top: 20px;"></div>
        <div style="width:100%; height:12px; background-color:#ebf0f4;"></div> -->
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            model: null,
            webinarCard : [
                {
                    title: "11월 웨비나",
                    subTitle: "오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/517e2fc5-3064-4534-9e9c-bce75838404f"
                },
                {
                    title: "10월 웨비나",
                    subTitle: "ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/a27eaa0b-1356-420c-91ed-7422e0935e1e"
                },
                {
                    title: "8월 웨비나",
                    subTitle: "ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/09ebe08a-9c29-4a93-a1e6-e607d5568257"
                },
                {
                    title: "7월 웨비나",
                    subTitle: "ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/4ab69e92-c87a-4acf-a722-0f175115ae81"
                }
            ]
        }
    },
    mounted() {

    },
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