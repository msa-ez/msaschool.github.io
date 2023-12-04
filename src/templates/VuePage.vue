<template>
    <vueLayout>
        <div class="flex flex-wrap items-start justify-start">
            <div class="order-1 w-full " style="width:98%; margin-top:-2%;">
                <v-runtime-template :template="getComponentName"/>
            </div>
        </div>
    </vueLayout>
</template>

<page-query>
query ($path: String!) {
    thisPage: vuePage(path: $path) {
        id
        name
        mockData
        source
        path
        props {
            name
        }
        componentDesc {
            group
        }
        fileInfo {
            name
            path
            directory
        }
    }

    allPagesByName: allVuePage(sortBy: "componentDesc.group", order: ASC) {
        edges {
            node {
                id
                name
                path
                props {
                    name
                }
                componentDesc {
                    group
                }
                fileInfo {
                    name
                    path
                    directory
                }
            }
        }
    }

    allPages: allVuePage {
        edges {
            node {
                name
                path
                fileInfo {
                    name
                    directory
                }
            }
        }
    }
}
</page-query>
  
<script>
    import VueSubLayoutHeader from "../components/VueSubLayoutHeader";
    import {MenuIcon, XIcon} from 'vue-feather-icons';

    export default {
        name: 'VuePage',
        components: {
            MenuIcon,
            XIcon,
            VueSubLayoutHeader,
        },
        mounted() {
            // 콘솔에 쿼리 결과 출력
            console.log('thisPage:', this.$page.thisPage);
            console.log('allPagesByName:', this.$page.allPagesByName);
            console.log('allPages:', this.$page.allPages);
        },
        computed: {
            getComponentName() {

                this.track()
                if (this.$page.thisPage.fileInfo.name == 'index') {
                    var dir = this.$page.thisPage.fileInfo.directory.replace(/\//gi, '_')
                    if (dir) {
                        return `<${dir}_${this.$page.thisPage.name}/>`
                    }
                    return `<${this.$page.thisPage.name}/>`
                }
                return `<${this.$page.thisPage.name}/>`
            }
        },
        props: {
            name: String
        },
        methods: {
            track() {
                if (typeof window !== "undefined") {
                    var getTitle = this.$page.thisPage && this.$page.thisPage.props[0] ?
                        this.$page.thisPage.props[0].name :
                        (this.$page.thisPage.name ? this.$page.thisPage.name : this.$route.path)
                    var location = window.location.hostname
                    if (location && location != 'localhost') {
                        getTitle = `${location}_${getTitle}`
                    }

                    this.$ga.page({
                        page: this.$route.path,
                        title: getTitle
                    })
                }
            },
        },
        data() {
            return {}

        },


    }
</script>
<style>
    @import "prism-themes/themes/prism-material-oceanic.css";
</style>