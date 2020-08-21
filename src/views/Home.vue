<template lang="pug">
	.home-wrapper
		.jumbotron
			h1 일별/주별 날씨정보
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

<style lang="less">

</style>