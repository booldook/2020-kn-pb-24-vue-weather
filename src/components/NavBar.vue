<template lang="pug">
	.header
		.d-flex.align-items-center.bg-dark.text-light-gray
			.logo.p-3.mr-2
				i.fa.fa-sun.text-light
			router-link(to='/')
				.p-2.mr-2 Home
			router-link(to='/daily')
				.p-2.mr-2 Daily Weather
			router-link(to='/weekly')
				.p-2.mr-2 Weekly Weather
</template>

<script>
export default {
	name: 'NavBar'
}
</script>

<style scoped lang="less">
	a {
		text-decoration: none;
		&:link {color: #fdf1e1; text-decoration: none;}
		&:visited {color: #fdf1e1; text-decoration: none;}
		&:active {color: #fdf1e1; text-decoration: none;}
		&:hover {color: #ffd9a8; text-decoration: none;}
	}
</style>