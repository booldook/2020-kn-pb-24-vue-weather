<template lang="pug">
	#app.container.d-flex.flex-column.justify-content-between
		nav-bar
		router-view.wrapper
		footer-bar
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		'nav-bar': NavBar,
		'footer-bar': Footer,
	}
}
</script>

<style lang="less">
div, ul, li, p, h1, h2, h3, h4, h5, form {margin: 0; padding: 0;}
ul {list-style: none;}
#app {height: 100vh; border-left: 1px solid #f1f1f1; border-right: 1px solid #f1f1f1;}
.container {padding: 0 !important;}
.wrapper {height: 100vh;}
</style>