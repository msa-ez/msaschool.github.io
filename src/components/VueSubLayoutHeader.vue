<template>
    <div class="row" :style="subLayoutStyleBySize">
        <div v-if="urlListByPage" v-for="link in urlListByPage"
             style="width: auto; margin-right: 5px; margin-bottom: 3px; text-align: center; background-color: aliceblue; border:solid; border-width: thin; border-color: ghostwhite; ">
            <VueSubLayoutCard :linkInfo="link"></VueSubLayoutCard>
        </div>
    </div>
</template>

<script>
    import {XIcon, MenuIcon} from 'vue-feather-icons'
    import VueSubLayoutCard from "./VueSubLayoutCard";

    export default {
        components: {
            XIcon, MenuIcon,
            VueSubLayoutCard
        },
        data: () => ({
            small: false,
            sidebarOpen: false,
            smallSize: false,
            linkLists: [],
            baseLabUrl: 'http://labs.msaez.io/#/courses/cna-full-msaschool/f2d61030-2b3c-11ec-aec9-271650cd7592',
            allLinkLists: [
                {key: 'ExampleApplication', title: 'end-to-end', desc: 'Quick PreView', lab: 'end-to-end', url: null},
                {key: 'TestMeasures', title: 'contract-test', desc: null, lab: 'contract-test', url: null},
                {key: 'DesignThree', title: 'design-event', desc: null, lab: 'design-event', url: null},
                // {key: 'DesignThree', title: 'design-policy', desc: null, lab: 'design-policy', url: null},
                // {
                //     key: 'DesignThree',
                //     title: 'design-aggregate',
                //     desc: null,
                //     lab: 'design-aggregate',
                //     url: null
                // },
                {
                    key: 'DesignSeven',
                    title: 'oauth2',
                    desc: '발급된 JWT 토큰을 Gateway에서 Authoriztion.',
                    lab: 'oauth2',
                    url: null
                },
                // {
                //     key: 'ImplementationOne',
                //     title: 'pre-lab-linux',
                //     desc: 'Container Orchestration 운영에 필요한 기본 Linux 명령어 대해 학습한다.',
                //     lab: 'pre-lab-linux',
                //     url: null
                // },
                // {key: 'ImplementationOne', title: 'default-env', desc: null, lab: 'default-env', url: null},
                {key: 'implementationFour', title: 'design-to-code', desc: null, lab: 'design-to-code', url: null},
                {key: 'implementationFive', title: 'monolith2misvc', desc: null, lab: 'monolith2misvc', url: null},
                {key: 'ImplementationSix', title: 'gateway', desc: null, lab: 'gateway', url: null},
                {key: 'ImplementationSeven', title: 'kafka-base', desc: null, lab: 'kafka-base', url: null},
                {key: 'IntegrationTwo', title: 'monolith2misvc', desc: null, lab: 'monolith2misvc', url: null},
                {key: 'IntegrationThree', title: 'cna-pubsub', desc: null, lab: 'cna-pubsub', url: null},
                {key: 'IntegrationFour', title: 'cna-pubsub', desc: null, lab: 'cna-pubsub', url: null},
                // {key: 'IntegrationFour', title: 'cna-pubsub2', desc: null, lab: 'cna-pubsub2', url: null},
                {key: 'IntegrationFiv', title: 'dp-composite-svc', desc: null, lab: 'dp-composite-svc', url: null},
                {key: 'IntegrationSix', title: 'dp-cqrs', desc: null, lab: 'dp-cqrs', url: null},
                {key: 'OperationOne', title: 'ops-docker', desc: null, lab: 'ops-docker', url: null},
                {key: 'OperationTwo', title: 'ops-kubernetes', desc: null, lab: 'ops-kubernetes', url: null},
                // {key: 'OperationTwo', title: 'ops-deploy-my-app', desc: null, lab: 'ops-deploy-my-app', url: null},
                {key: 'OperationThree', title: 'ops-readiness', desc: null, lab: 'ops-readiness', url: null},
                // {key: 'OperationThree', title: 'ops-liveness', desc: null, lab: 'ops-liveness', url: null},
                // {key: 'OperationThree', title: 'ops-autoscale', desc: null, lab: 'ops-autoscale', url: null},
            ]
        }),
        watch: {
            "thisPage": function (newVal) {
                var me = this
                me.setLinkLists()
                // if (newVal) {
                //     var fileName = newVal.fileInfo.name
                //     var findUrlLists = me.allLinkLists.filter(url => url.key == fileName)
                //
                //     if (findUrlLists) {
                //         findUrlLists.forEach((urlList) => {
                //             if (!urlList.url)
                //                 urlList.url = `${me.baseLabUrl}/${urlList.lab}`
                //         })
                //         me.linkLists = findUrlLists
                //     }
                // }
            },
        },
        created() {
            var me = this
            me.innerWidth()
            me.setLinkLists()
        },
        computed: {
            isSmall() {
                return this.small
            },
            thisPage() {
                if(this.$page)
                    return this.$page.thisPage
                else 
                    return null
            },
            urlListByPage() {
                return this.linkLists
            },
            link() {
                return `${this.baseLabUrl}/`
            },
            subLayoutStyleBySize() {
                if (this.isSmall) {
                    return 'position:fixed; margin-top: 6%; margin-left: -1%; '
                } else {
                    return 'position:fixed; margin-top: 25px; '
                }

            },
        },
        methods: {
            setLinkLists (){
                var me = this
                if(me.thisPage){
                    var fileName = me.thisPage.fileInfo.name
                    var findUrlLists = me.allLinkLists.filter(url => url.key == fileName)

                    if (findUrlLists) {
                        findUrlLists.forEach((urlList) => {
                            if (!urlList.url)
                                urlList.url = `${me.baseLabUrl}/${urlList.lab}`
                        })
                        me.linkLists = findUrlLists
                    }
                }
            },
            innerWidth() {
                var me = this
                if (typeof window != 'undefined') {
                    if (window.innerWidth <= 1025) {
                        me.small = true
                    } else {
                        me.small = false
                    }
                }
            },
        },
        mounted() {
            var me = this
            if (typeof window != 'undefined') {
                $(window).resize(function () {
                    me.innerWidth()
                })
            }

        }
    };
</script>
