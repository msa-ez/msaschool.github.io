<template>
    <div>
        <mark-down v-if="getMarkDownText" :html="false" :source="getMarkDownText"></mark-down>
    </div>
</template>

<script>
    export default {
        name: 'html-mark-down',
        computed: {
            getMarkDownText() {
                // return '## NEW TEST \n                          ## FIRST TEST'
                if (this.$slots.default[0].text) {
                    var src  = this.$slots.default[0].text
                    return src
                } else {
                    return null
                }
            },
        }
    }

</script>