<template>
    <div class="card select-none block rounded-lg shadow-lg border border-gray-300 hover:shadow-md p-4 max-w-lg bg-white text-gray-600"
         :class="{stacked}">
        <v-col>
            <v-row align="start" justify="end"><x-icon size="15" @click="$emit('close')"></x-icon></v-row>
            <v-runtime-template v-if="html" :template="html"></v-runtime-template>
        </v-col>

    </div>

</template>

<script>
    import { XIcon } from 'vue-feather-icons'
    export default {
        name: 'VueDialog',
        components: {
            XIcon
        },
        props: {
            type: {
                type: String,
                default: function () {
                    return null
                }
            },
            stacked: {
                type: String,
                default: function () {
                    return 'false'
                }
            },
        },
        data: () => ({
            html: null,
        }),
        created() {
            // if(this.type){
            //     if(this.type == 'login'){
            //         this.html ='<LoginDialog></LoginDialog>'
            //     }
            // }
        },
        methods:{
        },
    }
</script>

<style lang="css">
    /*.card {*/
    /*    transition: .3s;*/
    /*}*/

    /*.card.stacked {*/
    /*    position: absolute;*/
    /*}*/

    /*.card.stacked:before,.card.stacked:after {*/
    /*    content: '';*/
    /*    width: 4px;*/
    /*    transition: .3s;*/
    /*    @apply block absolute rounded-r-lg;*/
    /*}*/
    /*.card.stacked:before {*/
    /*    background: #ECECEC;*/
    /*    top: 5%;*/
    /*    bottom: 5%;*/
    /*    right: -5px;*/
    /*}*/
    /*.card.stacked:after {*/
    /*    background: #D4D4D4;*/
    /*    top: 10%;*/
    /*    bottom: 10%;*/
    /*    right: -9px;*/
    /*}*/
    /*.card.stacked:hover {*/
    /*    transform: translateX(-12px);*/
    /*}*/

    /*.card.stacked:hover:before {*/
    /*    width: 8px;*/
    /*    right: -9px;*/
    /*}*/
    /*.card.stacked:hover:after {*/
    /*    width: 8px;*/
    /*    right: -17px;*/
    /*}*/
</style>