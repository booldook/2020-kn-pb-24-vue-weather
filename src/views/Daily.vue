<template lang="pug">
	.d-flex.flex-column.align-items-center.justify-content-center.text-center
		h1.city {{ GET_DAILY.name }}
		img.icon(:src="`${ GET_DAILY.icon }`")
		h3.temp {{ GET_DAILY.main.temp }} 도
		h3.main 체감온도: {{ GET_DAILY.main.feels_like }} 도 / 습도: {{ GET_DAILY.main.humidity }} %
		h5.desc {{ GET_DAILY.weather[0].description }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Daily',
	computed: {
		...mapGetters(['GET_DAILY'])
	}
}
</script>

<style lang="less">

</style>