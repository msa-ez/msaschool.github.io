<template>
    <v-btn id = "training-btn"
            style="padding: 5px !important;
                    background-color:#5a67d8 !important;
                    color:white !important;
                    margin-bottom:-140px !important;
                    width:140px;
                    height:30px;">
        <pen-tool-icon size="1x" style="margin-right: 3px !important; margin-top:4px !important; float:left !important;"></pen-tool-icon>
        <g-link
                v-if="lab"
                :to="`${connectionLink}`"
                style ="color:white;
                font-weight:700 !important;
                font-size:16px;">
            실습 하러가기
        </g-link>
    </v-btn>
</template>

<script>
    import {PenToolIcon} from 'vue-feather-icons'
    export default {
        data() {
            return {
                baseLabUrl: 'http://labs.msaez.io/#/courses/cna-full-msaschool/f2d61030-2b3c-11ec-aec9-271650cd7592',
            };
        },
        components:{
            PenToolIcon
        },
        props: {
            lab: {
                type: String,
                default: function () {
                    return null;
                }
            },
        },
        created() {
        },
        mounted() {
        },
        computed: {
            connectionLink() {
                if (this.lab) {
                    return this.baseLabUrl + '/' + this.lab
                }
                return null
            },
            // displayTitle() {
            //     var me = this
            //     if (me.linkInfo.title)
            //         return me.linkInfo.title
            //     else
            //         return ''
            // },
            // displayDesc() {
            //     var me = this
            //     if (me.linkInfo.desc)
            //         return me.linkInfo.desc
            //     else
            //         return ''
            // },
        },
        methods: {
            getDetailForChildren() {
                return {
                    // "text-white bg-ui-primary transition transform hover:translate-y-2 hover:text-ui-primary": true,
                    "text-white bg-ui-primary transition transform hover:translate-x-1": true,
                };
            },
        },
    };
</script>

<style scoped type='text/css'>
    @media only screen and (max-width:1025px) and (min-width:800px){

        
    }
    @media only screen and (max-width:500px){
    }
</style>
