<template>
    <div
        ref="sidebar"
        class="pa-0"
    >
        <ClientOnly>
            <VueSearch v-if="small" style="margin-bottom:20px;"></VueSearch>
        </ClientOnly>
        <template v-for="parent in thisSides">
            <div v-if="parent.header.props[0].name == '계획'" class="py-3 pb-1 pt-1 font-semibold uppercase border-t" style="font-size: 16px; color: #4a5567;">
                클라우드 네이티브 학습
            </div>
            <div
                class="pl-3 pb-0 mb-2 border-ui-border"
                :class="getClassesForHeader(parent)"
                @click="closeSideByClicked()"
                v-if="parent.header.props[0].name != '교육과정 소개'"
            >
                <h3 class="pt-0 pb-0 mb-0 mt-1 tracking-tight uppercase border-none"
                    style="font-size: 16px;"
                    :class="getDetailForHeader(parent)"
                >
                    {{parent.header.props[0].name}}
                </h3>

                <ul class="max-w-full pl-5 mt-0 mb-1">
                    <li
                        v-for="child in parent.children"
                        :key="child.path"
                        style="font-size: 14px;"
                        :class="getDetailForChildren(child)"
                    >
                        <g-link
                            :to="getLinkForName(child.name) || child.path"
                            class="flex items-center py-1 pt-0 pb-0"
                            :style="styleBySize"
                            style="display: ruby;"
                            v-if="child.name != 'one-point-lesson'"
                        >
                            <span class="absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"></span>
                            <div style="display: flex; align-items: center;">
                                <div>
                                    {{child.props[0].name}}
                                </div> 
                                <div v-if="checkLinks(child)" class="blink-animation">
                                    실습
                                </div>
                            </div>
                            <!-- <pen-tool-icon v-if="checkLinks(child)" size="1x" style="margin-left: 3px; color: #5a67d8;"></pen-tool-icon> -->

                        </g-link>
                    </li>
                </ul>
                <g-link
                    v-for="child in parent.children"
                    :to="child.path"
                    class="flex items-center py-1 pt-0 pb-0"
                    :style="styleBySize"
                    v-if="child.name == 'one-point-lesson'"
                >
                    <h3 class="pt-0 pb-0 mb-0 mt-0 tracking-tight uppercase border-none"
                        style="font-size: 16px;"
                        :class="getDetailForHeader(parent)"
                    >
                        {{child.props[0].name}}
                    </h3>
                </g-link>
            </div>
        </template>
        <div class="pa-0 pt-1 font-semibold tracking-tight uppercase border-t">
            <h3 class="pt-0 pb-0 mb-0 mt-0" style="margin-left: 12px; font-size: 16px; color: #4a5567;">클라우드 네이티브 실습</h3>
        </div>
        <div style="margin: 0 0 3px 16px;"
            class="pl-4"
            onclick="location.href='http://instruction.msaschool.io/business/'">
            <span style="font-size: 14px; cursor: pointer;">
            실습 컨텐츠
            </span>
        </div>
        <template v-for="parent in thisSides">
            <div v-if="parent.header.props[0].name == '교육과정 소개'" class="py-3 pt-1 pb-1 font-semibold uppercase border-t" style="font-size: 16px; color: #4a5567;">
                교육 및 컨설팅
            </div>
            <div
                class="pl-3 pb-0 mb-2 border-ui-border"
                :class="getClassesForHeader(parent)"
                @click="closeSideByClicked()"
                v-if="parent.header.props[0].name == '교육과정 소개'"
            >
                <h3 class="pt-0 pb-0 mb-0 mt-1 tracking-tight uppercase border-none"
                    style="font-size: 16px;"
                    :class="getDetailForHeader(parent)"
                >
                    {{parent.header.props[0].name}}
                </h3>

                <ul class="max-w-full pl-5 mt-0 mb-1">
                    <li
                        v-for="child in parent.children"
                        :key="child.path"
                        style="font-size: 14px;"
                        :class="getDetailForChildren(child)"
                    >
                        <g-link
                        :to="child.path"
                        class="flex items-center py-1 pt-0 pb-0"
                        :style="styleBySize"
                        v-if="child.name != 'one-point-lesson'"
                        >
                            <span class="absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"></span>
                            {{child.props[0].name}} <pen-tool-icon v-if="checkLinks(child)" size="1x" style="margin-left: 3px; color: #5a67d8;"></pen-tool-icon>
                        </g-link>
                    </li>
                </ul>
                <g-link
                    v-for="child in parent.children"
                    :to="child.path"
                    class="flex items-center py-1 pt-0 pb-0"
                    :style="styleBySize"
                    v-if="child.name == 'one-point-lesson'"
                >
                    <h3 class="pt-0 pb-0 mb-0 mt-0 tracking-tight uppercase border-none"
                        style="font-size: 16px;"
                        :class="getDetailForHeader(parent)"
                    >
                        {{child.props[0].name}}
                    </h3>
                </g-link>
            </div>
        </template>
    </div>

</template>

<static-query>
    query {
    allVuePage{
    edges{
    node{
    name
    path
    fileInfo {
    directory
    }
    }
    }
    }
    }
</static-query>

<script>
    import {PenToolIcon} from 'vue-feather-icons'

    export default {
        data() {
            return {
                subTitle: null,
                small: false,
            };
        },
        components: {
            PenToolIcon
        },
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
        computed: {
            styleBySize() {
                if (this.small) {
                    return 'justify-content:flex-start;'
                } else {
                    return null
                }
            },
            allPages() {
                return this.$page.allPagesByName.edges
            },
            thisPage() {
                return this.$page.thisPage
            },
            thisSides() {
                var me = this
                var trees = {}
                if (me.$page) {
                    var startDirName = me.thisPage.path.split('/')
                    var getSides = me.allPages.filter(page => page.node.fileInfo.directory)
                    trees = me.insertTree(this.thisPage.path, getSides)
                    return trees
                }
                return null
            },

        },
        methods: {
            getLinkForName(name) {
                // 이름에 따라 링크를 반환하는 로직
                const links = {
                    "ToolOne": "https://intro-kor.msaez.io/tool/google-drive-examples/",
                    "ToolThree": "https://intro-kor.msaez.io/toppings/k8s-kubernetes/#%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95"
                };
                return links[name] || null;
            },
            checkLinks(child){
                if(child.componentDesc.group &&  child.componentDesc.group[0].includes('true')){
                    return true
                }
              return false
            },
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
            closeSideByClicked() {
                this.$emit('sidebarState', false)
            },
            insertTree(path, branches) {
                var treeObj = {}

                if (branches) {
                    branches.forEach(function (branchNode) {
                        var branch = branchNode.node
                        var branchPath = branch.path.substr(0, branch.path.length - 1).slice(1)

                        if (branchPath.split('/').length < 3) {
                            if (!treeObj[branchPath]) treeObj[branchPath] = {}
                            treeObj[branchPath].header = branch
                        } else {
                            var parentPath = branchPath.split('/')[0] + '/' + branchPath.split('/')[1]
                            if (!treeObj[parentPath]) treeObj[parentPath] = {}
                            if (!treeObj[parentPath].children) treeObj[parentPath].children = {}
                            treeObj[parentPath].children[branchPath] = branch
                        }
                    })
                    return treeObj
                }
                return null
            },
            getClassesForHeader(path) {
                if(path.header.props[0].name == "교육과정 소개" || path.header.props[0].name == "MSA 아우터 아키텍처"){
                    return {
                        "text-ui-primary": true,
                        "hover:text-ui-primary": true,
                    };
                }else{
                    return {
                        "text-ui-primary": true,
                        // "transition transform hover:translate-x-1 hover:text-ui-primary": true,
                        "hover:text-ui-primary": true,
                        'border-b': true
                    };
                }
            },
            getDetailForHeader({path}) {
                return false
                // return {
                //     "color : #1e88e5": true,
                //     // "block p-1 font-large nav-link text-ui-typo hover:text-ui-primary": true,
                //     "block p-1 font-large nav-link text-ui-typo hover:text-ui-primary": true,
                // };
            },
            getDetailForChildren({path}) {
                return {
                    "text-ui-primary": true,
                    // "transition transform hover:translate-x-1 hover:text-ui-primary": true,
                    "hover:text-ui-primary": true,
                };
            },
        },
    };
</script>

<style>
.blink-animation {
    display: inline-block;
    border: 1px solid #5a67d8;
    border-radius: 10%;
    font-size: 9px;
    color: #5a67d8;
    font-weight: 700;
    padding: 0 2px;
    margin-left: 2px;
}
/* blink-animation 클래스에 깜빡이는 애니메이션 추가하고싶을 때 animation: blinker 3s linear infinite; */

/* @keyframes blinker {
    50% {
        opacity: 0.3;
    }
} */
</style>
