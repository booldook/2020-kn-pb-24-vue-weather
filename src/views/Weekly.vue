<template lang="pug">
	.p-3
		h1 {{ GET_WEEKLY.city.name }}, 
			small {{ GET_WEEKLY.city.country }}
		ul.list-wrapper.d-flex.flex-wrap.justify-content-between
			li.list.d-flex.justify-content-between.mb-3(v-for='v in GET_WEEKLY.list' :key='v.dt')
				.icon.text-center
					img(:src='v.icon')
				.cont-wrap
					h3 {{ v.main.temp }}℃ / 
						small 체감온도: {{ v.main.feels_like }}℃
					h4 {{ v.weather[0].main }}
						small &nbsp;-&nbsp; {{ v.weather[0].description }}
					.text-primary {{ v.wind.speed }}ms ({{ v.windDir }})
					.text-secondary {{ v.date }} 

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Weekly',
	computed: {
		...mapGetters(['GET_WEEKLY'])
	}
}
</script>

<style lang="less">

</style>