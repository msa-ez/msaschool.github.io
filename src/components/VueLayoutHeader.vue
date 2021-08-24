<template>
    <!--    <div class="py-2 border-t-2 border-ui-primary" style="background-color: #1e88e5;">-->
    <div class="py-2 border-t-2 border-ui-primary">
        <!--        <div class="container">-->
        <div>

            <div class="flex item-center justify-center">

                <!-- 사이드바 버튼 -->
                <!--                <div style="max-width: 3%; z-index: 999;" >-->
                <!--                    <button class="p-3 text-black rounded-full "-->
                <!--                            @click="sidebarClicked()">-->
                <!--                        <MenuIcon size="20" />-->
                <!--                    </button>-->
                <!--                </div>-->


                <div class="flex flex-col items-center  sm:flex-row" style="margin-left:5%; place-self:center; ">
                    <!--                <div class="flex flex-col items-center px-3  mr-auto  sm:flex-row" style="margin-left:5%;">-->
                    <g-link
                            to="/operation/introduction/"
                            title="Home"
                            style="margin-right: 30px;"
                    >
                        <Logo/>
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>

                </div>

                <div class="flex flex-col items-center px-3   mr-auto  sm:flex-row"
                     style="justify-content:flex-end;margin-right:5%;">
                    <!-- <ClientOnly>
                        <login/>
                    </ClientOnly> -->
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
