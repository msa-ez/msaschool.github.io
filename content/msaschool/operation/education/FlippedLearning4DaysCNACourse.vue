<template>
    <div>
        <div>
            <h2 style="margin-top:50px; display:inline-block !important;">Flipped Learning CNA 과정 커리큘럼</h2>
            <v-btn style="background-color:#5a67d8 !important;
                color:white !important;
                width:100px !important;
                height:36px !important;
                text-align-center !important;
                line-height:36px !important;
                font-size:20px;
                margin:-7px 0 0 10px;"
                target='_blank'
                :href="`https://docs.google.com/forms/d/e/1FAIpQLSdlJAdOfPn-ET4maXP2M585OknGQwCgQsPQxUyRziAu6Q3GIw/viewform?usp=pp_url&entry.1858868603=Flipped+Learning+CNA+%EA%B3%BC%EC%A0%95`"
                >
                    <span style="color:white !important;">
                        강의신청
                    </span>
            </v-btn>
        </div>
        <g-image style="margin-top:20px;" src="~/img/05_Community/04_교육상담_및_신청/image7.png"></g-image>
        <g-image style="margin-top:20px;" src="~/img/05_Community/04_교육상담_및_신청/image8.png"></g-image>
        <g-image style="margin-top:20px;" src="~/img/05_Community/04_교육상담_및_신청/image9.png"></g-image>
        <g-image style="margin-top:20px;" src="~/img/05_Community/04_교육상담_및_신청/image10.png"></g-image>

        <div style="margin:100px 0 50px 0;">
            <div>
                <h2 style="display:inline-block !important;">강사진 소개</h2>
                <v-btn style="background-color:#5a67d8 !important;
                    color:white !important;
                    width:90px !important;
                    height:30px !important;
                    text-align-center !important;
                    line-height:30px !important;
                    font-size:20px;
                    margin:-7px 0 0 10px;"
                    target='_blank'
                    :href="`https://docs.google.com/forms/d/e/1FAIpQLSdlJAdOfPn-ET4maXP2M585OknGQwCgQsPQxUyRziAu6Q3GIw/viewform?usp=pp_url&entry.1858868603=Flipped+Learning+CNA+%EA%B3%BC%EC%A0%95`"
                    >
                        <span style="color:white !important;">
                            강의신청
                        </span>
                </v-btn>
            </div>
            <hr  style="size:0.5; width:100%; margin:-10px 0 10px 0;"  color="black"  align="center">
            <!-- 대표님, 이사님 -->
            <div class="clearfix" >
                <!-- 대표님 -->
                <div class="clearfix" style="width:50%; float:left;">
                    <h3 style="margin-bottom:0;">장진영 대표</h3>
                    <p style="margin-bottom:0;">uEngineSolutions CEO & President</p>
                    <div style=" height:100%; float:left; padding:10px 10px 10px 0;">
                        <g-image src="~/img/05_Community/02_MSA_교육과정/img3.png"></g-image>
                    </div>
                    <div style="float:left;">
                        <p>
                            • MSA 교육, 기업 컨설팅<br>
                            • MSAEz, MSA School, CNA PaaS Platform<br>
                            • Open Source Open Cloud Engine<br>
                            • uEngine BPM, SNS(Process CODI), ALM(ESSENCIA)<br>
                            ---------------------------------------------------------<br>
                            • 現 유엔진솔루션즈 대표이사<br>
                            • 現 MSA 교육, 기업 컨설팅<br>
                            • 現 MSA Facebook 운영(www.facebook.com/groups/cloudswmoding)<br>
                            • 클라우드(MSA, DDD) 강의 다수<br>
                            • 객체지향 프로그래밍 University 강의<br>
                            • 한국소프트웨어기술진흥협회 전문강사<br>
                        </p>
                    </div>
                </div>


                <!-- 이수헌 매니저 -->
                <div class="clearfix" style="width:50%; float:left;">
                    <h3 style="margin-bottom:0;">이수헌 매니저</h3>
                    <p style="margin-bottom:0;">uEngineSolutions Cloud Platform Developer & Manager</p>
                    <div style=" height:100%; float:left; padding:10px 10px 10px 0;">
                        <g-image src="~/img/05_Community/02_MSA_교육과정/img6.png"></g-image>
                    </div>
                    <div style="float:left;">
                        <p>
                            • Legacy MSA DT Project AA & Developer  <br>
                            • Eventstorming online platform 개발<br>
                            • MSA Pattern(Service Composition, Oauth) Expert<br>
                            • Event Sourcing & EDA Expert<br>
                            ---------------------------------------------------------<br>
                            • 現 uEngine MSA 정규 교과정 보조강사<br>
                            • 現 MSA App. Engineering 기업과정 보조강사<br>
                            • ‘21 : SK MSA App. Engineering 과정 보조강사 외<br>
                            • ‘20 : SK MSA App. Engineering 과정 보조강사<br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
        // @group 05_02_05
    export default {
        name:'FlippedLearning4DaysCNACourse',
        data() {
            return {}
        },
        props: {
            "3. Flipped Learning CNA 과정": {
                type: String
            },
        },

    }
</script>