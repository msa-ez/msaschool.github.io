<template>
    <div class="font-sans antialiased text-ui-typo bg-ui-background">
        <v-app>
                <div class="flex flex-col justify-start min-h-screen">
                    <header
                            ref="header"
                            class="top-0 z-10 border-b bg-ui-background border-ui-border"
                            :style="headStyleBySize"
                            @resize="setHeaderHeight"
                    >
                        <VueLayoutHeader @login="login()" @sidebarState="sidebarState" @small="setSmall"></VueLayoutHeader>
                    </header>

                    <main style="max-width:1900px; padding-left:2.5%; padding-right:0;" class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background is-mobile-main">
                        <aside
                                v-if="hasSidebar"
                                class="sidebar"
                                :class="{ 'open': sidebarOpen }"
                                :style="sidebarStyle"
                        >
                            <div class="w-full pb-16 bg-ui-background">
                                <ClientOnly>
                                    <VueSidebar @navigate="sidebarOpen = false" @sidebarState="sidebarState"/>
                                </ClientOnly>
                            </div>
                        </aside>

                        <div class="is-mobile-contents"
                            :class="{ 'pl-0 lg:pl-12 lg:w-4/5': hasSidebar }"
                            :style="mainStyleBySize">
                            <slot/>
                        </div>
                    </main>
                    <footer
                            ref="footer"
                            class="top-0 z-10 border-b bg-ui-background border-ui-border"
                    >
                        <VueLayoutFooter @login="login()" @sidebarState="sidebarState" @small="setSmall"></VueLayoutFooter>
                    </footer>
                </div>

                <!-- <div  v-if="floatMenu" style="position: fixed; z-index:999; right:5px; bottom:5px;">
                    <button class="p-2 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
                            @click="openComplexBtn()">
                        <MenuIcon/>
                    </button>
                </div> -->
                            <!-- @mouseover="openMenuList()"
                            @mouseleave="closeMenuList()" -->

                <div style="position: fixed; z-index:999; right:5px; bottom:5px;">
                    <button v-if="small" 
                            class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
                            @click="openComplexBtn()"
                            style="margin: 0 27px 27px 0; position:relative;">
                            <div v-if="sidebarOpen">
                                <XIcon/>
                            </div>
                            <div v-else>
                                <MenuIcon/>
                            </div>
                    </button>
                    <button v-else style="background-color:#5a67d8; color:white; border-radius:100%; height:40px; width:40px; border:0; outline:0;"
                            @click="openComplexBtn()">
                        <span class="mdi mdi-wechat" style="font-size:30px;"></span>
                    </button>
                </div>
        </v-app>
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>

<script>
    import VueSidebar from "../components/VueSidebar";
    import VueLayoutHeader from "../components/VueLayoutHeader";
    import VueLayoutFooter from "../components/VueLayoutFooter";
    import VueSubLayoutHeader from "../components/VueSubLayoutHeader";
    import VueSubLayoutCard from "../components/VueSubLayoutCard";
    import {XIcon, MenuIcon} from 'vue-feather-icons'


    export default {
        components: {
            // LayoutHeader,
            // Sidebar,
            VueSidebar,
            VueLayoutHeader,
            VueLayoutFooter,
            VueSubLayoutHeader,
            VueSubLayoutCard,
            XIcon,
            MenuIcon,
        },
        data() {
            return {
                headerHeight: 0,
                sidebarOpen: false,
                showLoginDialog: false,
                small: false,
                floatMenu:false,
            };
        },
        created() {
            var me = this

            if (me.$route.path == '/' || me.$route.path == '/operation/') {
                me.$router.push('/operation/introduction/');
            }

        },
        mounted() {
            var me = this

            if (me.$route.path == '/' || me.$route.path == '/operation/') {
                me.$router.push('/operation/introduction/');
            }
        },
        watch: {
            sidebarOpen: function (isOpen) {
                document.body.classList.toggle("sidebar-open", isOpen);
            }
        },
        methods: {
            // openMenuList(newVal){
            //     console.log(newVal)
            //     var me = this
            //     me.floatMenu = true
            // },
            // closeMenuList(){
            //     var me = this
            //     me.floatMenu = false
            // },
            setSmall(newVal) {
                this.small = newVal
            },
            sidebarState() {
                this.sidebarOpen = !this.sidebarOpen
            },
            login() {
                if (this.showLoginDialog) this.showLoginDialog = false;
                this.showLoginDialog = true;
            },
            setHeaderHeight() {
                this.$nextTick(() => {
                    this.headerHeight = this.$refs.header.offsetHeight;
                });
            },
            openComplexBtn() {
                var me = this
                if (me.small) {
                    me.sidebarState()
                } else {
                    window.open(`https://open.kakao.com/o/sPDIQmEf`, "_blank")
                }
                // https://docs.google.com/forms/d/1lXuc2MdKI4CaqF8h0DAFp6phrUS3qBm1bhxL9Oezrk0/edit
            }
        },
        computed: {
            mainStyleBySize() {
                if (this.small) {
                    return "max-width: 100%; margin-top: -10% !important;"
                } else {
                    return "max-width: 100% !important; margin-top: 3% !important; margin-left:-1%; padding-left:3% !important; padding-bottom:30px;"
                }
            },
            headStyleBySize() {
                if (this.small) {
                    return {position: 'relative', width: '100%'}
                } else {
                    return {position: 'fixed', width: '100%'}
                }
            },
            sidebarStyle() {
                return {
                    // top: "0px",
                    // height: `calc(100vh - ${this.headerHeight}px)`
                    top: this.headerHeight + 'px',
                    height: `calc(100vh - ${this.headerHeight}px)`
                };
            },
            hasSidebar() {
                return this.$page && this.headerHeight > 0;
            }
        },
        mounted() {
            var me = this;
            me.setHeaderHeight();
            me.$EventBus.$on("loginState", () => {
                me.showLoginDialog = false;
            });
        },
        metaInfo() {
            return {
                meta: [
                    {
                        key: "og:type",
                        name: "og:type",
                        content: "website"
                    },
                    {
                        key: "twitter:card",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        key: "og:image",
                        name: "og:image",
                        content: process.env.SITE_URL + "/logo.jpg"
                    },
                    {
                        key: "twitter:image",
                        name: "twitter:image",
                        content: process.env.SITE_URL + "/logo.jpg"
                    }
                ]
            };
        }
    };
</script>

<style lang="scss">
    .flex {
        flex: 1 1 auto;
    }

    :root {
        --color-ui-background: theme("colors.white");
        --color-ui-typo: theme("colors.gray.700");
        --color-ui-sidebar: theme("colors.gray.200");
        --color-ui-border: theme("colors.gray.300");
        --color-ui-primary: theme("colors.indigo.600");
    }

    html[lights-out] {
        --color-ui-background: theme("colors.gray.900");
        --color-ui-typo: theme("colors.gray.100");
        --color-ui-sidebar: theme("colors.gray.800");
        --color-ui-border: theme("colors.gray.800");
        --color-ui-primary: theme("colors.indigo.500");

        pre[class*="language-"],
        code[class*="language-"] {
            @apply bg-ui-border;
        }
    }

    * {
        transition-property: color, background-color, border-color;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
    }

    h1,
    h2,
    h3,
    h4 {
        @apply leading-snug font-black mb-4 text-ui-typo;

        &:hover {
            a::before {
                @apply opacity-100;
            }
        }

        a {
            &::before {
                content: "#";
                margin-left: -1em;
                padding-right: 1em;
                @apply text-ui-primary absolute opacity-0 float-left;
            }
        }
    }

    h1 {
        @apply text-4xl;
    }

    h2 {
        @apply text-2xl;
    }

    h3 {
        @apply text-xl;
    }

    h4 {
        @apply text-lg;
    }

    a:not(.active):not(.text-ui-primary):not(.text-white) {
        @apply text-ui-typo;
    }

    p,
    ol,
    ul,
    pre,
    strong,
    blockquote {
        @apply mb-4 text-base text-ui-typo;
    }

    .content {
        a {
            @apply text-ui-primary underline;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            @apply -mt-12 pt-20;
        }

        h2 + h3,
        h2 + h2,
        h3 + h3 {
            @apply border-none -mt-20;
        }

        h2,
        h3 {
            @apply border-b border-ui-border pb-1 mb-3;
        }

        ul {
            @apply list-disc;

            ul {
                list-style: circle;
            }
        }

        ol {
            @apply list-decimal;
        }

        ol,
        ul {
            @apply pl-5 py-1;

            li {
                @apply mb-2;

                p {
                    @apply mb-0;
                }

                &:last-child {
                    @apply mb-0;
                }
            }
        }
    }

    /*==============================================*/
    .content .octicon {
        display: inline-block;
        fill: currentColor;
        vertical-align: text-bottom
    }

    .content .anchor {
        float: left;
        line-height: 1;
        margin-left: -20px;
        padding-right: 4px
    }

    .content .anchor:focus {
        outline: 0
    }

    .content h1 .octicon-link, .content h2 .octicon-link, .content h3 .octicon-link, .content h4 .octicon-link, .content h5 .octicon-link, .content h6 .octicon-link {
        color: #1b1f23;
        vertical-align: middle;
        visibility: hidden
    }

    .content h1:hover .anchor, .content h2:hover .anchor, .content h3:hover .anchor, .content h4:hover .anchor, .content h5:hover .anchor, .content h6:hover .anchor {
        text-decoration: none
    }

    .content h1:hover .anchor .octicon-link, .content h2:hover .anchor .octicon-link, .content h3:hover .anchor .octicon-link, .content h4:hover .anchor .octicon-link, .content h5:hover .anchor .octicon-link, .content h6:hover .anchor .octicon-link {
        visibility: visible
    }

    .content h1:hover .anchor .octicon-link:before, .content h2:hover .anchor .octicon-link:before, .content h3:hover .anchor .octicon-link:before, .content h4:hover .anchor .octicon-link:before, .content h5:hover .anchor .octicon-link:before, .content h6:hover .anchor .octicon-link:before {
        width: 16px;
        height: 16px;
        content: ' ';
        display: inline-block;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E")
    }

    .content {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 1.5;
        color: #24292e;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        font-size: 16px;
        line-height: 1.5;
        word-wrap: break-word
    }

    .content details {
        display: block
    }

    .content summary {
        display: list-item
    }

    .content a {
        background-color: initial
    }

    .content a:active, .content a:hover {
        outline-width: 0
    }

    .content strong {
        font-weight: inherit;
        font-weight: bolder
    }

    .content h1 {
        font-size: 2em;
        margin: .67em 0
    }

    .content img {
        border-style: none
    }

    .content code, .content kbd, .content pre {
        font-family: monospace, monospace;
        font-size: 1em
    }

    .content hr {
        box-sizing: initial;
        height: 0;
        overflow: visible
    }

    .content input {
        font: inherit;
        margin: 0
    }

    .content input {
        overflow: visible
    }

    .content [type=checkbox] {
        box-sizing: border-box;
        padding: 0
    }

    .content * {
        box-sizing: border-box
    }

    .content input {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit
    }

    .content a {
        color: #0366d6;
        text-decoration: none
    }

    .content a:hover {
        text-decoration: underline
    }

    .content strong {
        font-weight: 600
    }

    .content hr {
        height: 0;
        margin: 15px 0;
        overflow: hidden;
        background: 0 0;
        border: 0;
        border-bottom: 1px solid #dfe2e5
    }

    .content hr:after, .content hr:before {
        display: table;
        content: ""
    }

    .content hr:after {
        clear: both
    }

    .content table {
        border-spacing: 0;
        border-collapse: collapse
    }

    .content td, .content th {
        padding: 0
    }

    .content details summary {
        cursor: pointer
    }

    .content kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: 1px solid #d1d5da;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 #d1d5da
    }

    .content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
        margin-top: 0;
        margin-bottom: 0
    }

    .content h1 {
        font-size: 32px
    }

    .content h1, .content h2 {
        font-weight: 600
    }

    .content h2 {
        font-size: 24px
    }

    .content h3 {
        font-size: 20px
    }

    .content h3, .content h4 {
        font-weight: 600
    }

    .content h4 {
        font-size: 16px
    }

    .content h5 {
        font-size: 14px
    }

    .content h5, .content h6 {
        font-weight: 600
    }

    .content h6 {
        font-size: 12px
    }

    .content p {
        margin-top: 0;
        margin-bottom: 10px
    }

    .content blockquote {
        margin: 0
    }

    .content ol, .content ul {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0
    }

    .content ol ol, .content ul ol {
        list-style-type: lower-roman
    }

    .content ol ol ol, .content ol ul ol, .content ul ol ol, .content ul ul ol {
        list-style-type: lower-alpha
    }

    .content dd {
        margin-left: 0
    }

    .content code, .content pre {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        font-size: 12px
    }

    .content pre {
        margin-top: 0;
        margin-bottom: 0
    }

    .content input::-webkit-inner-spin-button, .content input::-webkit-outer-spin-button {
        margin: 0;
        -webkit-appearance: none;
        appearance: none
    }

    .content :checked + .radio-label {
        position: relative;
        z-index: 1;
        border-color: #0366d6
    }

    .content .border {
        border: 1px solid #e1e4e8 !important
    }

    .content .border-0 {
        border: 0 !important
    }

    .content .border-bottom {
        border-bottom: 1px solid #e1e4e8 !important
    }

    .content .rounded-1 {
        border-radius: 3px !important
    }

    .content .bg-white {
        background-color: #fff !important
    }

    .content .bg-gray-light {
        background-color: #fafbfc !important
    }

    .content .text-gray-light {
        color: #6a737d !important
    }

    .content .mb-0 {
        margin-bottom: 0 !important
    }

    .content .my-2 {
        margin-top: 8px !important;
        margin-bottom: 8px !important
    }

    .content .pl-0 {
        padding-left: 0 !important
    }

    .content .py-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .content .pl-1 {
        padding-left: 4px !important
    }

    .content .pl-2 {
        padding-left: 8px !important
    }

    .content .py-2 {
        padding-top: 8px !important;
        padding-bottom: 8px !important
    }

    .content .pl-3, .content .px-3 {
        padding-left: 16px !important
    }

    .content .px-3 {
        padding-right: 16px !important
    }

    .content .pl-4 {
        padding-left: 24px !important
    }

    .content .pl-5 {
        padding-left: 32px !important
    }

    .content .pl-6 {
        padding-left: 40px !important
    }

    .content .f6 {
        font-size: 12px !important
    }

    .content .lh-condensed {
        line-height: 1.25 !important
    }

    .content .text-bold {
        font-weight: 600 !important
    }

    .content .pl-c {
        color: #6a737d
    }

    .content .pl-c1, .content .pl-s .pl-v {
        color: #005cc5
    }

    .content .pl-e, .content .pl-en {
        color: #6f42c1
    }

    .content .pl-s .pl-s1, .content .pl-smi {
        color: #24292e
    }

    .content .pl-ent {
        color: #22863a
    }

    .content .pl-k {
        color: #d73a49
    }

    .content .pl-pds, .content .pl-s, .content .pl-s .pl-pse .pl-s1, .content .pl-sr, .content .pl-sr .pl-cce, .content .pl-sr .pl-sra, .content .pl-sr .pl-sre {
        color: #032f62
    }

    .content .pl-smw, .content .pl-v {
        color: #e36209
    }

    .content .pl-bu {
        color: #b31d28
    }

    .content .pl-ii {
        color: #fafbfc;
        background-color: #b31d28
    }

    .content .pl-c2 {
        color: #fafbfc;
        background-color: #d73a49
    }

    .content .pl-c2:before {
        content: "^M"
    }

    .content .pl-sr .pl-cce {
        font-weight: 700;
        color: #22863a
    }

    .content .pl-ml {
        color: #735c0f
    }

    .content .pl-mh, .content .pl-mh .pl-en, .content .pl-ms {
        font-weight: 700;
        color: #005cc5
    }

    .content .pl-mi {
        font-style: italic;
        color: #24292e
    }

    .content .pl-mb {
        font-weight: 700;
        color: #24292e
    }

    .content .pl-md {
        color: #b31d28;
        background-color: #ffeef0
    }

    .content .pl-mi1 {
        color: #22863a;
        background-color: #f0fff4
    }

    .content .pl-mc {
        color: #e36209;
        background-color: #ffebda
    }

    .content .pl-mi2 {
        color: #f6f8fa;
        background-color: #005cc5
    }

    .content .pl-mdr {
        font-weight: 700;
        color: #6f42c1
    }

    .content .pl-ba {
        color: #586069
    }

    .content .pl-sg {
        color: #959da5
    }

    .content .pl-corl {
        text-decoration: underline;
        color: #032f62
    }

    .content .mb-0 {
        margin-bottom: 0 !important
    }

    .content .my-2 {
        margin-bottom: 8px !important
    }

    .content .my-2 {
        margin-top: 8px !important
    }

    .content .pl-0 {
        padding-left: 0 !important
    }

    .content .py-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .content .pl-1 {
        padding-left: 4px !important
    }

    .content .pl-2 {
        padding-left: 8px !important
    }

    .content .py-2 {
        padding-top: 8px !important;
        padding-bottom: 8px !important
    }

    .content .pl-3 {
        padding-left: 16px !important
    }

    .content .pl-4 {
        padding-left: 24px !important
    }

    .content .pl-5 {
        padding-left: 32px !important
    }

    .content .pl-6 {
        padding-left: 40px !important
    }

    .content .pl-7 {
        padding-left: 48px !important
    }

    .content .pl-8 {
        padding-left: 64px !important
    }

    .content .pl-9 {
        padding-left: 80px !important
    }

    .content .pl-10 {
        padding-left: 96px !important
    }

    .content .pl-11 {
        padding-left: 112px !important
    }

    .content .pl-12 {
        padding-left: 128px !important
    }

    .content hr {
        border-bottom-color: #eee
    }

    .content kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        line-height: 10px;
        color: #444d56;
        vertical-align: middle;
        background-color: #fafbfc;
        border: 1px solid #d1d5da;
        border-radius: 3px;
        box-shadow: inset 0 -1px 0 #d1d5da
    }

    .content:after, .content:before {
        display: table;
        content: ""
    }

    .content:after {
        clear: both
    }

    .content > :first-child {
        margin-top: 0px;
    }

    .content > :last-child {
        margin-bottom: 0 !important
    }

    .content a:not([href]) {
        color: inherit;
        text-decoration: none
    }

    .content blockquote, .content details, .content dl, .content ol, .content p, .content pre, .content table, .content ul {
        margin-top: 0;
        margin-bottom: 16px
    }

    .content hr {
        height: .25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0
    }

    .content blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: .25em solid #dfe2e5
    }

    .content blockquote > :first-child {
        margin-top: 0
    }

    .content blockquote > :last-child {
        margin-bottom: 0
    }

    .content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25
    }

    .content h1 {
        font-size: 2em
    }

    .content h1, .content h2 {
        padding-bottom: .3em;
        border-bottom: 1px solid #eaecef
    }

    .content h2 {
        font-size: 1.5em
    }

    .content h3 {
        font-size: 1.25em
    }

    .content h4 {
        font-size: 1em
    }

    .content h5 {
        font-size: .875em
    }

    .content h6 {
        font-size: .85em;
        color: #6a737d
    }

    .content ol, .content ul {
        padding-left: 2em
    }

    .content ol ol, .content ol ul, .content ul ol, .content ul ul {
        margin-top: 0;
        margin-bottom: 0
    }

    .content li {
        word-wrap: break-all
    }

    .content li > p {
        margin-top: 16px
    }

    .content li + li {
        margin-top: .25em
    }

    .content dl {
        padding: 0
    }

    .content dl dt {
        padding: 0;
        margin-top: 16px;
        font-size: 1em;
        font-style: italic;
        font-weight: 600
    }

    .content dl dd {
        padding: 0 16px;
        margin-bottom: 16px
    }

    .content table {
        display: block;
        width: 100%;
        overflow: auto
    }

    .content table th {
        font-weight: 600
    }

    .content table td, .content table th {
        padding: 6px 13px;
        border: 1px solid #dfe2e5
    }

    .content table tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1
    }

    .content table tr:nth-child(2n) {
        background-color: #f6f8fa
    }

    .content img {
        max-width: 100%;
        box-sizing: initial;
        background-color: #fff
    }

    .content img[align=right] {
        padding-left: 20px
    }

    .content img[align=left] {
        padding-right: 20px
    }

    .content code {
        padding: .2em .4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27, 31, 35, .05);
        border-radius: 3px;
    }

    .content pre {
        word-wrap: normal
    }

    .content pre > code {
        padding: 0;
        margin: 0;
        font-size: 100%;
        word-break: normal;
        white-space: pre;
        background: 0 0;
        border: 0;
        color: black;
    }

    .content .highlight {
        margin-bottom: 16px
    }

    .content .highlight pre {
        margin-bottom: 0;
        word-break: normal
    }

    .content .highlight pre, .content pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px
    }

    .content pre code {
        display: inline;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        /*background-color: initial;*/
        border: 0;

    }

    .content .commit-tease-sha {
        display: inline-block;
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        font-size: 90%;
        color: #444d56
    }

    .content .full-commit .btn-outline:not(:disabled):hover {
        color: #005cc5;
        border-color: #005cc5
    }

    .content .blob-wrapper {
        overflow-x: auto;
        overflow-y: hidden
    }

    .content .blob-wrapper-embedded {
        max-height: 240px;
        overflow-y: auto
    }

    .content .blob-num {
        width: 1%;
        min-width: 50px;
        padding-right: 10px;
        padding-left: 10px;
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        font-size: 12px;
        line-height: 20px;
        color: rgba(27, 31, 35, .3);
        text-align: right;
        white-space: nowrap;
        vertical-align: top;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }

    .content .blob-num:hover {
        color: rgba(27, 31, 35, .6)
    }

    .content .blob-num:before {
        content: attr(data-line-number)
    }

    .content .blob-code {
        position: relative;
        padding-right: 10px;
        padding-left: 10px;
        line-height: 20px;
        vertical-align: top
    }

    .content .blob-code-inner {
        overflow: visible;
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        font-size: 12px;
        color: #24292e;
        word-wrap: normal;
        white-space: pre
    }

    .content .pl-token.active, .content .pl-token:hover {
        cursor: pointer;
        background: #ffea7f
    }

    .content .tab-size[data-tab-size="1"] {
        -moz-tab-size: 1;
        tab-size: 1
    }

    .content .tab-size[data-tab-size="2"] {
        -moz-tab-size: 2;
        tab-size: 2
    }

    .content .tab-size[data-tab-size="3"] {
        -moz-tab-size: 3;
        tab-size: 3
    }

    .content .tab-size[data-tab-size="4"] {
        -moz-tab-size: 4;
        tab-size: 4
    }

    .content .tab-size[data-tab-size="5"] {
        -moz-tab-size: 5;
        tab-size: 5
    }

    .content .tab-size[data-tab-size="6"] {
        -moz-tab-size: 6;
        tab-size: 6
    }

    .content .tab-size[data-tab-size="7"] {
        -moz-tab-size: 7;
        tab-size: 7
    }

    .content .tab-size[data-tab-size="8"] {
        -moz-tab-size: 8;
        tab-size: 8
    }

    .content .tab-size[data-tab-size="9"] {
        -moz-tab-size: 9;
        tab-size: 9
    }

    .content .tab-size[data-tab-size="10"] {
        -moz-tab-size: 10;
        tab-size: 10
    }

    .content .tab-size[data-tab-size="11"] {
        -moz-tab-size: 11;
        tab-size: 11
    }

    .content .tab-size[data-tab-size="12"] {
        -moz-tab-size: 12;
        tab-size: 12
    }

    .content .task-list-item {
        list-style-type: none
    }

    .content .task-list-item + .task-list-item {
        margin-top: 3px
    }

    .content .task-list-item input {
        margin: 0 .2em .25em -1.6em;
        vertical-align: middle
    }

    /*==============================================*/

    blockquote {
        @apply border-l-4 border-ui-border py-2 pl-4;

        p:last-child {
            @apply mb-0;
        }
    }

    code {
        @apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
    }

    pre[class*="language-"] {
        @apply max-w-full overflow-x-auto rounded;

        & + p {
            @apply mt-4;
        }

        & > code[class*="language-"] {
            @apply border-none leading-relaxed;
        }
    }

    header {
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
    }

    table {
        @apply text-left mb-6;

        td,
        th {
            @apply py-3 px-4;
            &:first-child {
                @apply pl-0;
            }

            &:last-child {
                @apply pr-0;
            }
        }

        tr {
            @apply border-b border-ui-border;
            &:last-child {
                @apply border-b-0;
            }
        }
    }

    .sidebar {
        @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-scroll transition-all z-40;
        /*<!--transform: translateX(-100);-->*/
        transform: translateX(-100%);
        /*transition: absolute;*/
        /*height: 0%;*/
        /*width: 80%;*/

        &.open {
            transform: translateX(0);
        }

        @screen lg {
            @apply w-1/5 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
            transform: translateX(0);
        }
    }
</style>

<style scoped>
    @media only screen and (max-width:1023px) {
        .is-mobile-main {
            margin-top:5% !important;
        }
    }
</style>

