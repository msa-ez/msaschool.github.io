<template>
    <div class="py-2 border-t-2 border-ui-primary" style="box-shadow: 0 7x 7px -7px #ccc;">

        <!-- pc 화면 -->
        <div class="is-pc-header">
            <div class="flex item-center justify-center">
                <div class="flex flex-col items-center sm:flex-row" style="margin-left: 40px; place-self: center; ">
                    <g-link
                        to="/operation/introduction/"
                        title="Home"
                    >
                        <img src="../img/msa-school-logo.svg" style="width: 200px; height: 50px;">
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>
                </div>
                
                <v-row style="margin: 0px; padding: 0px; margin-left: auto;">
                    <div style="flex-grow: 1 !important;"></div>

                    <div class="" style="display: flex; flex-direction: row; align-items: center; justify-content: center; margin-right: 7px;">
                        <g-link
                            to="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/ddd-google-drive-associate"
                            title="MSAEZ 체험하기"
                        >
                            <img src="https://labs.msaez.io/static/image/logo.png" class="msaez-logo mr-2">
                        </g-link>
                        <v-btn class="experience-btn">
                            <span style="color: white; font-weight: bold;">체험하기 》</span>
                        </v-btn>
                    </div>
                    
                    <v-btn class="main-top-btn"
                        :href="'/operation/introduction/one-point-lesson/'"
                        style="margin:7px 7px 0px 0px;"
                    ><span style="color:white;">컨설팅 문의</span>
                    </v-btn>
                    <v-btn class="main-top-btn"
                        :href="'/operation/introduction/schedule/'"
                        style="margin:7px 7px 0px 0px;"
                    ><span style="color:white;">교과정 안내</span>
                    </v-btn>
                </v-row>
            </div>
        </div>
        
        <!-- 모바일 화면  -->
        <div class="is-mobile-header">
            <v-row class="ma-0 pa-0 pl-4 pr-2" style="display: flex; justify-content: space-between; align-items: center; margin: 0px;">
                <div style="padding: 0px 0px 0px 30px; display: flex; align-items: center;">
                    <g-link
                        to="/operation/introduction/"
                        title="Home"
                    >
                        <Logo src="../img/msa-school-logo.svg" style="width: 150px; height: 40px;"/>
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>
                </div>  
                <div style="display: flex; justify-content: space-between; align-items: center; ">
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-right: 10px;">
                        <g-link
                            to="https://labs.msaez.io/#/courses/fea33dd0-8030-11ed-9757-3db21672e322/1f2deec0-c856-11ed-aa53-950d34db487f/ddd-google-drive-associate"
                            title="MSAEZ 체험하기"
                        >
                            <img src="https://labs.msaez.io/static/image/logo.png" class="msaez-logo mb-2"/>
                        </g-link>
                        <v-btn class="experience-btn">
                            <span style="color: white; font-weight: bold;">체험하기 》</span>
                        </v-btn>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end;">
                        <v-btn class="main-top-btn mb-2"
                            :href="'/operation/introduction/one-point-lesson/'"
                        >
                            <span style="color:white;">컨설팅 문의</span>
                        </v-btn>
                        <v-btn class="main-top-btn"
                            :href="'/operation/introduction/schedule/'"
                        >
                            <span style="color:white;">교과정 안내</span>
                        </v-btn>
                    </div>
                </div>
            </v-row>
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
    .mobile-header-btn-box {
        display: flex;                /* d-flex */
        flex-direction: column;       /* flex-column */
        align-self: flex-end;         /* align-self-end */
        padding: 0;                   /* pa-0 */
        padding-right: 10px;           /* pr-1, assuming 1 unit equals 4px, adjust as necessary */
    }
    .main-top-btn {
        background-color:#5a67d8 !important;
        border-radius: 4px;
        height: 33px;
        width: 120px;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
        font-weight: 700;
    }
    .g-images {
        margin:20px 0 20px 0;
    }
    
    .is-mobile-header {
        display:none;
    }
    .msaez-logo {
        width: 80px;
        height: 43px;
    }
    .experience-btn {
        background-color: #9775c0 !important;
        width: 90px !important;
        height: 30px !important;
    }
    .modal-container #modal-toggle.active ~ .modal-content, .modal-container #modal-toggle:checked ~ .modal-content {
        margin-top:80px;
    }
    @media only screen and (max-width:1024px){
        .is-pc-header {
            display:none;
        }
        .is-mobile-header {
            display:block;
        }
    }
    @media screen and (max-width: 375px) {
        /* .logo-image {
            width: 150px !important;
            height: 40px !important;
        } */
        .msaez-logo {
            width: 60px !important;
            height: 32px !important;
            margin-bottom: 2px;
        }
        .experience-btn {
            width: 70px !important;
            height: 25px !important;
            font-size: 12px !important;
        }
        .main-top-btn {
            font-size: 12px !important;
            height: 25px !important;
            width: 80px !important;
        }
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
</style>
