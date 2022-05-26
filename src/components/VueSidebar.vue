<template>
    <div
            ref="sidebar"
            class="px-4 pt-4 lg:pt-12"
    >
        <ClientOnly>
            <VueSearch v-if="small" style="margin-bottom:20px;"></VueSearch>
        </ClientOnly>
        <div
                v-if="thisSides"
                v-for="parent in thisSides"
                class="pb-4 mb-4 border-ui-border "
                :class="getClassesForHeader(parent)"
                @click="closeSideByClicked()"
        >
            <g-link
                    class="flex items-center py-1 font-semibold"
                    :style="styleBySize"
            >
                <h3 class="pt-0 mt-0 mb-1 tracking-tight uppercase border-none  "
                    style="font-size: 17px;"
                    :class="getDetailForHeader(parent)"
                >
                    {{parent.header.props[0].name}}
                </h3>
            </g-link>

            <ul class="max-w-full pl-5 mb-0">
                <li
                        v-for="child in parent.children"
                        :key="child.path"
                        :class="getDetailForChildren(child)"
                >
                    <g-link
                            :to="child.path"
                            class="flex items-center py-1 font-semibold"
                            :style="styleBySize"
                    >
                       <span
                               class="absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"
                       ></span>
                        {{child.props[0].name}} <pen-tool-icon v-if="checkLinks(child)" size="1x" style="margin-left: 3px; color: #5a67d8;"></pen-tool-icon>
                    </g-link>
                </li>
            </ul>
        </div>
        <div style="margin-top:5px; margin-bottom:30px;">
            <g-link
                to="http://instruction.msaschool.io/business/"
                style="font-weight: 900; font-size: 17.5px;"
            >
            실습 컨텐츠
            </g-link>
        </div>
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
            getClassesForHeader({path}) {
                return {
                    "text-ui-primary": true,
                    // "transition transform hover:translate-x-1 hover:text-ui-primary": true,
                    "hover:text-ui-primary": true,
                    'border-b': true
                };
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
