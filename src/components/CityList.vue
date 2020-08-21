<template lang="pug">
	.city-wrapper
		select.form-control(v-model='city' name='city' id='city')
			option(value='날씨정보를 살펴볼 도시를 선택하세요.')
			option(v-for='v in GET_CITY' :key='v.id' :value='v.id') {{ v.name }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'CityList',
	data() {
		return {
			city: '',
			x: ''
		}
	},
	created() {
		// Component가 처음 실행될 때 한번 실행된다.
		this.$store.dispatch('ACT_CITY');
	},
	computed: {
		...mapGetters(['GET_CITY']),
	},
	watch: {
		
	}
}
</script>

<style lang="less">
.city-wrapper {width: 90%; max-width: 600px; margin: 5rem auto 2rem auto;}
</style>