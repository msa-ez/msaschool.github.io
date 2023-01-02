<template>
    <div v-if="!small" class="row" style="flex-flow:row;">
             <slot /> 
    </div>
</template>


<script>

export default {
    name: 'sidemarkdown',

  data() {
    return {
        small: false,
    };
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
   methods: {
        innerWidth() {
            var me = this
            if (typeof window != 'undefined') {
                if (window.innerWidth <= 1300) {
                    me.small = true
                } else {
                    me.small = false
                }
                me.$emit('small', me.small)
            }
        },
   }
}
  
    
</script>

<style scoped>
</style>