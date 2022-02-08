<template>
    <div>
        <h2 style = "margin:50px 0 -20px 0;">MSA School 교과정 안내</h2>
<!-- 클라우드 네이티브 앱구현 맛보기 웨비나(무료) -->
        <table style="margin-top:50px;
            width: 100%;
            border: 1px solid #D8D8D8;
            margin-top:50px;"
        >
            <tr>
                <td colspan="5" style="width:100%; border: 1px solid #D8D8D8; padding:0;">
                    <g-image src="~/img/05_Community/04_교육상담_및_신청/image11.png"></g-image>
                </td>
                <!-- <td style="width:20%; border: 1px solid #D8D8D8;"><div style="font-size:16px; font-weight:500;">Standard 4Days CNA Course</div>
                    <g-image src="~/img/05_Community/04_교육상담_및_신청/image4.png"></g-image>
                </td>
                <td style="width:20%; border: 1px solid #D8D8D8;"><div style="font-size:16px; font-weight:500;">Flipped Learning 4Days CNA Course</div>
                    <g-image src="~/img/05_Community/04_교육상담_및_신청/image5.png"></g-image>
                </td>
                <td style="width:20%; border: 1px solid #D8D8D8;"><div style="font-size:16px; font-weight:500;">One Point Lesson<br>ㅤ</div>
                    <g-image src="~/img/05_Community/04_교육상담_및_신청/image6.png"></g-image>
                </td>
                <td style="width:20%; border: 1px solid #D8D8D8; padding-right:15px;"><div style="font-size:16px; font-weight:500;">Enterprise Full-day (14Days) Course</div>
                    <g-image src="~/img/05_Community/04_교육상담_및_신청/image6.png"></g-image>
                </td> -->
            </tr>
            <!-- <tr>
                <td style="border: 1px solid #D8D8D8; padding-left:15px;">
                    <span>
                        • 매월 2주 차 수요일, 비대면 화상교육 방식<br>
                        • 교육인원 : 최대 20명<br>
                        • 교육시간 : 4시간, (비용 : 무료)<br>
                        • 마이크로 서비스 분석(이벤트 스토밍)에서 Spring Boot 언어를 활용한 실전 코드 기반 구현 및 배포/운영까지 빠르게 알아볼 수 있는 기회<br>
                    </span>
                </td>
                <td style="border: 1px solid #D8D8D8;">
                    
                </td>
                <td style="border: 1px solid #D8D8D8;">
                    
                </td>
                <td style="border: 1px solid #D8D8D8;">
                    
                </td>
                <td style="border: 1px solid #D8D8D8; padding-right:15px;">
                    
                </td>
            </tr> -->
            <tr>
                <td style="border: 1px solid #D8D8D8; padding-left:15px; ">
                    <v-btn style="background-color:#5a67d8 !important;
                        color:white !important;
                        width:100px !important;
                        height:30px !important;
                        text-align-center !important;
                        line-height:30px !important;
                        font-size:16px;
                        display:flex;
                        margin:0 auto;"
                        :href="`http://www.msaschool.io/operation/education/quick-understanding-cna/`"
                        ><span style="color:white !important;">신청하기</span>
                    </v-btn>
                </td>
                <td style="border: 1px solid #D8D8D8;">
                    <v-btn style="background-color:#5a67d8 !important;
                        color:white !important;
                        width:100px !important;
                        height:30px !important;
                        text-align-center !important;
                        line-height:30px !important;
                        font-size:16px;
                        display:flex;
                        margin:0 auto;"
                        :href="`http://www.msaschool.io/operation/education/standard4-days-cna-course/`"
                        ><span style="color:white !important;">신청하기</span>
                    </v-btn>
                </td>
                <td style="border: 1px solid #D8D8D8;">
                    <v-btn style="background-color:#5a67d8 !important;
                        color:white !important;
                        width:100px !important;
                        height:30px !important;
                        text-align-center !important;
                        line-height:30px !important;
                        font-size:16px;
                        display:flex;
                        margin:0 auto;"
                        :href="`http://www.msaschool.io/operation/education/flipped-learning4-days-cna-course/`"
                        ><span style="color:white !important;">신청하기</span>
                    </v-btn>
                </td>
                <td style="border: 1px solid #D8D8D8;">
                    <v-btn style="background-color:#5a67d8 !important;
                        color:white !important;
                        width:100px !important;
                        height:30px !important;
                        text-align-center !important;
                        line-height:30px !important;
                        font-size:16px;
                        display:flex;
                        margin:0 auto;"
                        :href="`http://www.msaschool.io/operation/education/one-point-lesson/`"
                        ><span style="color:white !important;">신청하기</span>
                    </v-btn>
                </td>
                <td style="border: 1px solid #D8D8D8; padding-right:15px;">
                    <v-btn style="background-color:#5a67d8 !important;
                        color:white !important;
                        width:100px !important;
                        height:30px !important;
                        text-align-center !important;
                        line-height:30px !important;
                        font-size:16px;
                        display:flex;
                        margin:0 auto;"
                        :href="`http://www.msaschool.io/operation/education/enterprise-full-day14-days-course/`"
                        ><span style="color:white !important;">신청하기</span>
                    </v-btn>
                </td>
            </tr>
        </table>
<!-- 클라우드 네이티브 데브옵스 실전교육(50%off) -->
        <!-- <mark-down class="content">
## 클라우드 네이티브 데브옵스 실전교육(50% 할인)
        </mark-down>

        <div>
            <g-image style="display:inline-block !important;
                margin:20px 0 20px 0 !important;
                width:40% !important;"
                src="~/img/05_Community/04_교육상담_및_신청/image5.png"></g-image>
            <div style="margin:20px 0 0 20px !important;
                    display:inline-grid !important;
                    position:absolute;"
            >
                <v-btn style="padding: 10px !important;
                    background-color:#5a67d8 !important;
                    color:white !important;
                    width:160px !important;
                    height:60px !important;
                    text-align-center !important;
                    line-height:60px !important;
                    margin-bottom:10px; !important;
                    font-size:20px;"
                    :href="`https://docs.google.com/forms/d/e/1FAIpQLSdlJAdOfPn-ET4maXP2M585OknGQwCgQsPQxUyRziAu6Q3GIw/viewform?usp=pp_url&entry.1858868603=%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C+%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4+%EC%8B%A4%EC%A0%84%EA%B5%90%EC%9C%A1(50%25+%ED%95%A0%EC%9D%B8)`"
                    ><span style="color:white !important;">신청하기</span>
                </v-btn>

                <div class="modal-container">
                    <input id="modal-toggle" type="checkbox">
                    <label class="modal-btn"
                        for="modal-toggle" 
                        style="padding: 10px !important;
                            background-color:#5a67d8 !important;
                            color:white !important;
                            width:160px !important;
                            height:60px !important;
                            text-align-center !important;
                            line-height:42px !important;
                            margin-bottom:10px; !important;
                            font-size:20px;"
                    >커리큘럼 보기</label> 
                    <label class="modal-backdrop" for="modal-toggle"></label>
                    <div class="modal-content">
                        <label class="modal-close" for="modal-toggle">&#x2715;</label>
                        <h2>Cloud Native Modeling & Application 구현과정 교안</h2><hr />
                        <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image7.png"></g-image>
                        <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image8.png"></g-image>
                        <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image9.png"></g-image>
                        <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image10.png"></g-image>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <mark-down class="content">
- 매월 3주 차 월 ~ 목요일, 비대면 화상교육 방식
- **교육인원** : 최대 20명
- **교육시간** : 4일, 28시간 (비용 : 100만 원/인당)
- 분석/설계(Day 1)를 제외한 구현/배포 과정(Day2~Day4)은 본사 MSA 플랫폼 개발자의 실습 주도형 MSA 교육으로 진행되며, 주강사의 최종 랩업을 포함하는 과정
        </mark-down> -->
<!-- 클라우드 네이티브 데브옵스 실전교육(50%off) 끝 -->





<!-- MSA 원 포인트 레슨 시작 -->

        <!-- <mark-down class="content">
### 원 포인트 레슨
        </mark-down>

        <div>
            <g-image style="display:inline-block !important;
                margin:20px 0 20px 0 !important;
                width:40% !important;"
                src="~/img/05_Community/04_교육상담_및_신청/image6.png"></g-image>
            <div style="margin:20px 0 0 20px !important;
                    display:inline-grid !important;
                    position:absolute;"
            >
                <v-btn style="padding: 10px !important;
                    background-color:#5a67d8 !important;
                    color:white !important;
                    width:160px !important;
                    height:60px !important;
                    text-align-center !important;
                    line-height:60px !important;
                    margin-bottom:10px; !important;
                    font-size:20px;"
                    target='_blank'
                    :href="`https://docs.google.com/forms/d/e/1FAIpQLScq7tP3_CkQN6oC5chHo-BOVM7hJneYfGOY1IQV1Lv8Tioxxg/viewform?usp=pp_url&entry.539880325=%EC%9B%90+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EB%A0%88%EC%8A%A8(%ED%9A%8C%EC%82%AC%EB%AA%85)`"
                    ><span style="color:white !important;">신청하기</span>
                </v-btn>
            </div>
        </div>

        <mark-down class="content">

- 요청 시, 비대면 화상교육 방식
- **교육인원** : 제한 없음
- **교육시간** : 제한 없음, (비용 : 시간당 40만 원)
- 신청회사의 업무 도메인을 활용하여 마이크로 서비스로의 전환 및 신규 MSA 도입을 직접 시뮬레이션해 보는 마스트플랜 또는 PoC 레벨의 컨설팅
        </mark-down> -->
<!-- MSA 원 포인트 레슨 끝 -->

<!-- 달력 -->
        <iframe src="https://calendar.google.com/calendar/embed?src=help%40uengine.org&ctz=Asia%2FSeoul" style="border: 0; width:100%; height:600px; margin-bottom:100px; margin-top:60px;" frameborder="0" scrolling="no"></iframe>
    </div>
</template>


<script>
        // @group 05_02_02
    export default {
        name:'schedule',
        data() {
            return {
                dialog: false,
            }
        },
        props: {
            "MSA School 교과정 안내": {
                type: String
            },
        },

    }
</script>

<style>
    
</style>

<style scoped>
/* 버튼 스타일 */
    .default-button {
        padding: 10px !important;
        background-color:#5a67d8 !important;
        color:white !important;
        height:60px !important;
    }

    .default-button:nth-child(1) {
        margin-bottom:10px !important;
    }

/* 버튼 텍스트 */
    .default-button span {
        font-size:24px !important;
        font-weight: 500 !important;
    }

</style>
