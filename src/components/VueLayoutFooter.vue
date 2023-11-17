<template>
    <!--    <div class="py-2 border-t-2 border-ui-primary" style="background-color: #1e88e5;">-->
    <div class="py-10 border-t-2 border-ui-primary">
        <div class="is-not-mobile-main-top" style="text-align:center;">
            <!-- <g-image style="width:150px; height:30px; position: absolute; left:50%;"
                src="https://github.com/kykim97/factory-pattern/assets/113568664/2c714be7-81cc-4179-aa83-342e2f35c9d1">
            </g-image> -->
            <div> Copyright © uEngine All Rights Reserved | 주소 : 서울특별시 서초구 신반포로45길 18 502호(잠원동, 주일빌딩) </div>
            <div> 사업자등록번호 : 211-87-95355 | 전화번호 : 02-567-8301 | 대표이사 : 장진영 </div>
        </div>
        <div class="is-mobile-main-top" style="text-align:center;">
            <!-- <g-image style="width:150px; height:30px; position: absolute; left:50%;"
                src="https://github.com/kykim97/factory-pattern/assets/113568664/2c714be7-81cc-4179-aa83-342e2f35c9d1">
            </g-image> -->
            <div>Copyright © uEngine All Rights Reserved</div>
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
    @media only screen and (max-width:1410px){
        .is-not-mobile-main-top {
            display:none;
        }
        .is-mobile-main-top {
            display:block;
        }
    }
</style>
