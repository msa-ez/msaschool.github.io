<template>
    <vueLayout>
        <div class="flex flex-wrap items-start justify-start">
            <div class="order-1 w-full " style="width:90%; margin-left: 5%; margin-right: 2%;">
                <v-runtime-template :template="getComponentName"/>
            </div>
        </div>
    </vueLayout>
</template>

<page-query>
    query ( $path: String!, ) {
        thisPage : vuePage(path: $path) {
            id
            name
            mockData
            source
            path
            props{
                name
            }
            componentDesc{
                group
            }
            fileInfo {
                name
                path
                directory
            }
        }
        allPagesByName : allVuePage (sortBy: "componentDesc.group", order: ASC) {
            edges{
                node{
                    id
                    name
                    path
                    props{
                        name
                    }
                    componentDesc{
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
        allPages : allVuePage{
                edges{
                    node{
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
        name:'VuePage',
        components:{
            MenuIcon,
            XIcon,
            VueSubLayoutHeader,
        },
        mounted(){
        },
        computed: {
            getComponentName() {

                if(this.$page.thisPage.fileInfo.name == 'index'){
                    var dir = this.$page.thisPage.fileInfo.directory.replace(/\//gi,'_')
                    if(dir){
                        return `<${dir}_${this.$page.thisPage.name}/>`
                    }
                    return `<${this.$page.thisPage.name}/>`
                }
                return `<${this.$page.thisPage.name}/>`
            }
        },
        props:{
          name:String
        },
        data(){
            return {
            }

        },


    }
</script>
<style>
@import "prism-themes/themes/prism-material-oceanic.css";
</style>