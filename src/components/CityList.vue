<template lang="pug">
	.city-wrapper
		select.form-control(v-model='city' name='city' id='city' @change="onCityChanged")
			option(selected value='') 날씨정보를 살펴볼 도시를 선택하세요.
			option(v-for='v in GET_CITY' :key='v.id' :value='v.id') {{ v.name }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
	name: 'CityList',
	data() {
		return {
			city: '',
		}
	},
	created() {
		// Component가 처음 실행될 때 한번 실행된다.
		this.$store.dispatch('ACT_CITY');
	},
	computed: {
		...mapGetters(['GET_CITY', 'GET_DAILY', 'GET_WEEKLY']),
		/*
		3. getter를 mapGetters로 불러오는 법 -> 위의 완성된 문장으로 축약할 수 있다.
		...mapGetters({
			'GET_CITY': GET_CITY
		})
		2. state를 mapState로 요청하여 computed에서 getter를 구현하는 방식
		...mapState({
			'GET_CITY': state => state.cityLists,
			'GET_DAILY': state => state.daily,
		})
		1. store에 getters를 구현하지 않고 아래와 같이 사용해도 된다.
		getCity() {
			return this.$store.state.cityLists
		}
		*/
	},
	watch: {
		GET_DAILY(val, old) {
			this.$router.push('/daily')
		}
	},
	methods: {
		onCityChanged(e) {
			this.$store.dispatch('ACT_WEATHER', this.city);
		}
	}
}
</script>

<style scoped lang="less">
.city-wrapper {width: 90%; max-width: 600px; margin: 5rem auto 2rem auto;}
option {font-size: 1.5rem;}
</style>