<template lang="pug">
	.p-3
		h1 {{ GET_WEEKLY.city.name }}, 
			small {{ GET_WEEKLY.city.country }}
		ul.list-wrapper.d-flex.flex-wrap.justify-content-between
			li.list.d-flex.justify-content-between.align-items-center.mb-3(v-for='v in GET_WEEKLY.list' :key='v.dt')
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

<style scoped lang="less">
@767: ~"(max-width: 767px)";
@575: ~"(max-width: 575px)";

.list {
	padding: 1rem;
	flex: 49.5% 0 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	@media @767 {
		flex: 100% 0 0;
	}
	.icon {flex: 20% 0 0;}
	.cont-wrap {flex: 75% 0 0;}
}
</style>