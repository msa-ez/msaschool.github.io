<template>
    <vueLayout>
<!--        <g-link to="/vue/"-->
<!--                class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"-->
<!--        >-->
<!--            소개-->
<!--            <ArrowRightCircleIcon class="ml-4" size="1x"/>-->
<!--        </g-link>-->
<!--        <g-link to="/vue//Instruction/Domain"-->
<!--                class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"-->
<!--        >-->
<!--            계획 단계-->
<!--            <ArrowRightCircleIcon class="ml-4" size="1x"/>-->
<!--        </g-link>-->
<!--        <g-link to="/Planning/FinalGoal"-->
<!--                class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"-->
<!--        >-->
<!--            계획 단계2-->
<!--            <ArrowRightCircleIcon class="ml-4" size="1x"/>-->
<!--        </g-link>-->
<!--        <g-link to="/docs/"-->
<!--                class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"-->
<!--        >-->
<!--            설계/구현/운영 단계-->
<!--            <ArrowRightCircleIcon class="ml-4" size="1x"/>-->
<!--        </g-link>-->
    </vueLayout>
</template>

<script>
    export default {
        mounted() {
            var me = this
            if(me.$route.path == '/' || me.$route.path == '/operation/'){
                me.$router.push('/operation/introduction/');
            }
        },
        components: {},
        metaInfo() {
            const title = 'MSA School';
            const description = 'Welcome to MSA School. "msaschool.io" ';

            return {
                title: title,
                meta: [
                    {
                        name: 'description',
                        content: description
                    },
                    {
                        key: 'og:title',
                        name: 'og:title',
                        content: title,
                    },
                    {
                        key: 'twitter:title',
                        name: 'twitter:title',
                        content: title,
                    },
                    {
                        key: 'og:description',
                        name: 'og:description',
                        content: description,
                    },
                    {
                        key: 'twitter:description',
                        name: 'twitter:description',
                        content: description,
                    },
                ]
            }
        }
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }
</style>
