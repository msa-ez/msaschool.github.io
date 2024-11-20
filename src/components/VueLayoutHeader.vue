<template>
    <div class="py-2 border-t-2 border-ui-primary" style="box-shadow: 0 7x 7px -7px #ccc;">

        <!-- pc 화면 -->
        <div class="is-pc-header">
            <div class="flex item-center justify-center">
                <div class="flex flex-col items-center  sm:flex-row" style="margin-left:40px; place-self:center; ">
                    <g-link
                        to="/operation/introduction/"
                        title="Home"
                    >
                        <img src="../img/msa-school-logo.svg" style="width:200px; height:50px;">
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>
                </div>
                <v-row style="margin:0px; padding:0px;">
                    <div style="flex-grow: 1 !important;"></div>
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
            <v-row class="ma-0 pa-0 pl-4 pr-2" style="display: flex; justify-content: space-between; align-items: center; margin:0px;">
                <div style="padding:0px 0px 0px 30px; display: flex; align-items: center;">
                    <g-link
                        to="/operation/introduction/"
                        title="Home"
                    >
                        <Logo/>
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>
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
