<template lang="pug">
	.home-wrapper
		.jumbotron
			h1.text-primary 일별/주별 날씨정보
				p.pl-3.text-secondary
					small vue.js로 개발한 이용한 날씨정보 앱
		city-list
</template>

<script>
import CityList from '../components/CityList.vue'

export default {
	name: 'Home',
	components: {
		'city-list': CityList,
	}
}
</script>

<style scoped lang="less">
@767: ~"(max-width: 767px)";
@575: ~"(max-width: 575px)";
.jumbotron {
	background-color: #efefef;
	@media @767 {
		h1 {font-size: 2rem;}
	}
	@media @575 {
		h1 {font-size: 1.5rem;}
	}
}
</style>