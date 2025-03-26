<template>
    <!--    <div class="py-2 border-t-2 border-ui-primary" style="background-color: #1e88e5;">-->
    <div class="border-t-2 border-ui-primary"
        style="padding: 16px !important;"
    >
        <a href="https://www.msaez.io" target="_blank" class="footer-banner">
            <g-image style="width:150px; height:150px; border-radius:15px; position:absolute; top:0; left:0;"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/0dda67eb-8b79-4442-bdd9-c4526edaf6a8">
            </g-image>
            <g-image style="width:150px; height:150px; border-radius:15px; position:absolute; top:0; right:0;"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/f8dac983-8824-402b-8a6b-e7ce0c1e1758">
            </g-image>
            <g-image style="height:150px; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"
                src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/07fa7e92-2efc-4a9d-a857-d576b942030d">
            </g-image>
        </a>

        <div class="is-not-mobile-main-top" style="text-align:center;">
            <!-- <g-image style="width:150px; height:30px; position: absolute; left:50%;"
                src="https://github.com/kykim97/factory-pattern/assets/113568664/2c714be7-81cc-4179-aa83-342e2f35c9d1">
            </g-image> -->
            <!-- <a href="https://www.msaez.io" target="_blank" style="display: block; width: 30%; margin: 20px auto; margin-top: -10px;">
                <g-image style="width:100%;"
                    src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/02ae596d-db77-4dff-bd05-92a70ceaf410">
                </g-image>
            </a> -->

            <div style="font-size: 14px; margin-bottom: 20px;"> *MSA School의 모든 콘텐츠에 대한 권리는 MSA School에 있으며, 무단 복제 및 배포를 금합니다. 영리 목적의 사용은 허용되지 않으며, 개인적 용도로 복제할 경우 반드시 출처를 표기해야 합니다.
            </div>
            <div> © uEngine. All Rights Reserved. | 주소 : 서울특별시 서초구 신반포로45길 18 502호(잠원동, 주일빌딩) </div>
            <div> 사업자등록번호 : 211-87-95355 | 전화번호 : 02-567-8301 | 대표이사 : 장진영 </div>
        </div>
        <div class="is-mobile-main-top" style="text-align:center;">
            <!-- <g-image style="width:100%;"
                src="https://github.com/kykim97/factory-pattern/assets/113568664/2c714be7-81cc-4179-aa83-342e2f35c9d1"> 
            </g-image>-->
            
            <div style="font-size: 14px; margin-bottom: 20px;"> 
                *MSA School의 모든 콘텐츠에 대한 권리는 MSA School에 있으며, 무단 복제 및 배포를 금합니다.
                <br>영리 목적의 사용은 허용되지 않으며, 개인적 용도로 복제할 경우 반드시 출처를 표기해야 합니다.
            </div>
            <div>© uEngine. All Rights Reserved.</div>
            <div>주소 : 서울특별시 서초구 신반포로45길 18 502호(잠원동, 주일빌딩)</div>
            <div>사업자등록번호 : 211-87-95355</div>
            <div>전화번호 : 02-567-8301</div>
            <div>대표이사 : 장진영</div>
        </div>
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    settings {
    web
    }
    }
    }
</static-query>

<script>
    import Logo from "@/components/Logo";
    import {XIcon, MenuIcon} from 'vue-feather-icons'

    export default {
        components: {
            Logo,
            XIcon, MenuIcon
        },
        data: () => ({
            sidebarOpen: false,
            small: false,
        }),
        created() {
            var me = this
            me.innerWidth()
        },
        mounted() {
            var me = this
            if (typeof window != 'undefined') {
                $(window).resize(function () {
                    me.innerWidth()
                })
            }
        },
        methods: {
            innerWidth() {
                var me = this
                if (typeof window != 'undefined') {
                    if (window.innerWidth <= 1025) {
                        me.small = true
                    } else {
                        me.small = false
                    }
                    me.$emit('small', me.small)
                }
            },
        },
        computed: {
            isSmall() {
                return this.small
            },
            meta() {
                return this.$static.metadata;
            },
            settings() {
                return this.meta.settings;
            }
        }
    };
</script>


<style scoped>
    .g-images {
        margin:20px 0 20px 0;
    }

    .modal-container #modal-toggle.active ~ .modal-content, .modal-container #modal-toggle:checked ~ .modal-content {
        margin-top:80px;
    }
</style>
<style lang="scss">
    header {
        svg:not(.feather-search) {
            &:hover {
                @apply text-ui-primary;
            }
        }
    }

    .nav-link {
        &.active {
            @apply text-ui-primary font-bold border-ui-primary;
        }
    }
    // .footer-banner-m {
    //     display: block; 
    //     width: 90%; 
    //     margin: 15px auto; 
    //     margin-top: 0;
    // }
    .footer-banner {
        display: block;
        width: 95%;
        height: 150px;
        border-radius: 15px;
        background-color: #9775c0;
        margin: 0 auto;
        margin-bottom: 30px;
        position: relative;
    }

    @media only screen and (max-width:1410px){
        .is-not-mobile-main-top {
            display:none;
        }
        .is-mobile-main-top {
            display:block;
        }

        // .footer-banner-m {
        //     width: 40%; 
        // }
    }
    @media only screen and (max-width:1100px){
        // .footer-banner-m {
        //     width: 50%; 
        // }
    }
    @media only screen and (max-width:960px){
        // .footer-banner-m {
        //     width: 60%; 
        // }
    }
    @media only screen and (max-width:676px){
        // .footer-banner-m {
        //     width: 70%; 
        // }
    }
    @media only screen and (max-width:460px){
        // .footer-banner-m {
        //     width: 90%; 
        // }
    }
</style>
