<template>
    <!--    <div class="py-2 border-t-2 border-ui-primary" style="background-color: #1e88e5;">-->
    <div class="py-2 border-t-2 border-ui-primary" style="box-shadow: 0 7x 7px -7px #ccc;">
        <!--        <div class="container">-->
        <div class="is-not-mobile-main-top">

            <div class="flex item-center justify-center">

                <!-- 사이드바 버튼 -->
                <!--                <div style="max-width: 3%; z-index: 999;" >-->
                <!--                    <button class="p-3 text-black rounded-full "-->
                <!--                            @click="sidebarClicked()">-->
                <!--                        <MenuIcon size="20" />-->
                <!--                    </button>-->
                <!--                </div>-->


                <div class="flex flex-col items-center  sm:flex-row" style="margin-left:40px; place-self:center; ">
                    <!--                <div class="flex flex-col items-center px-3  mr-auto  sm:flex-row" style="margin-left:5%;">-->
                    <g-link
                            to="/operation/introduction/"
                            title="Home"
                            style="margin-right:235px;"
                    >
                        <Logo/>
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>

                </div>

                <div class="flex flex-col items-center px-3   mr-auto  sm:flex-row"
                     style="justify-content:flex-end;margin-right:1.5%;">
                    <!-- <div class="modal-container">
                        <input id="modal-toggle" type="checkbox">
                        <label class="modal-btn"
                            for="modal-toggle" 
                            style="display: block;
                                width:120px;
                                height:36px;
                                line-height: 36px;
                                margin: 0 auto;
                                font-weight: 500;
                                font-size:24px;
                                color: #fff;
                                background: #5a67d8;
                                font-size: 14px;
                                border: 0;
                                border-radius: 4px;
                                cursor: pointer;
                                text-align: center;
                                box-shadow: 0 5px 5px -5px #333;
                                transition: background 0.3s ease-in;" 
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
                    </div>  -->
                    <v-btn style="background-color:#5a67d8 !important;
                        border-radius: 4px;
                        margin-right:15px;
                        height: 36px;
                        width: 120px;
                        text-align: center;
                        line-height: 36px;
                        font-size: 14px;
                        font-weight: 700;"
                        :href="'/operation/education/one-point-lesson/'"
                    ><span style="color:white;">컨설팅 문의</span>
                    </v-btn>
                    <v-btn style="background-color:#5a67d8 !important;
                        border-radius: 4px;
                        margin-right:15px;
                        height: 36px;
                        width: 120px;
                        text-align: center;
                        line-height: 36px;
                        font-size: 14px;
                        font-weight: 700;"
                        :href="'/operation/education/schedule/'"
                    ><span style="color:white;">교과정 안내</span>
                    </v-btn>
                </div>

            </div>
        </div>
        <div class="is-mobile-main-top">

            <div class="flex item-center justify-center">

                <!-- 사이드바 버튼 -->
                <!--                <div style="max-width: 3%; z-index: 999;" >-->
                <!--                    <button class="p-3 text-black rounded-full "-->
                <!--                            @click="sidebarClicked()">-->
                <!--                        <MenuIcon size="20" />-->
                <!--                    </button>-->
                <!--                </div>-->


                <div class="flex flex-col items-center  sm:flex-row" style="margin-left:40px; place-self:center; ">
                    <!--                <div class="flex flex-col items-center px-3  mr-auto  sm:flex-row" style="margin-left:5%;">-->
                    <g-link
                            to="/operation/introduction/"
                            title="Home"
                            style="margin-right:190px;"
                    >
                        <Logo/>
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>

                </div>

                <div class="flex flex-col items-center px-3   mr-auto  sm:flex-row"
                     style="justify-content:flex-end;margin-right:1.5%;">
                    <!-- <div class="modal-container">
                        <input id="modal-toggle" type="checkbox">
                        <label class="modal-btn"
                            for="modal-toggle" 
                            style="display: block;
                                width:120px;
                                height:36px;
                                line-height: 36px;
                                margin: 0 auto;
                                font-weight: 500;
                                font-size:24px;
                                color: #fff;
                                background: #5a67d8;
                                font-size: 14px;
                                border: 0;
                                border-radius: 4px;
                                cursor: pointer;
                                text-align: center;
                                box-shadow: 0 5px 5px -5px #333;
                                transition: background 0.3s ease-in;" 
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
                    </div>  -->
                    <v-btn style="background-color:#5a67d8 !important;
                        border-radius: 4px;
                        margin-right:15px;
                        margin-bottom: 4px;
                        height: 33px;
                        width: 120px;
                        text-align: center;
                        line-height: 36px;
                        font-size: 14px;
                        font-weight: 700;"
                        :href="'/operation/education/one-point-lesson/'"
                    ><span style="color:white;">컨설팅 문의</span>
                    </v-btn>
                    <v-btn style="background-color:#5a67d8 !important;
                        border-radius: 4px;
                        margin-right:15px;
                        height: 33px;
                        width: 120px;
                        text-align: center;
                        line-height: 36px;
                        font-size: 14px;
                        font-weight: 700;"
                        :href="'/operation/education/schedule/'"
                    ><span style="color:white;">교과정 안내</span>
                    </v-btn>
                </div>

            </div>
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
    @media only screen and (max-width:1410px){
    .is-not-mobile-main-top {
      display:none;
    }
    .is-mobile-main-top {
      display:block;
    }
  }
</style>
