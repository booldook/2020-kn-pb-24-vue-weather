<template lang="pug">
	.city-wrapper
		select.form-control(v-model='city' name='city' id='city')
			option(value='날씨정보를 살펴볼 도시를 선택하세요.')
</template>

<script>
export default {
	name: 'CityList',
	data() {
		return {
			city: ''
		}
	}
}
</script>

<style lang="less">
.city-wrapper {width: 90%; max-width: 600px; margin: 5rem auto 2rem auto;}
</style>