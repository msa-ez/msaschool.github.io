<template>
  <div>
	<MainPage/>
  </div>
</template>

<script>
// @group 01_01_01
import MainPage from '@/components/mainPage/main.vue'

  export default {
    name: 'index',
    directory:'operation_introduction',
    props: {
        "교육과정 소개": {
            type: String
        },
    },
	components: {
		MainPage
	}
}
</script>

<style>
</style>