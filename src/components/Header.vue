<template>
	<header class="row">
		<nav class="navbar navbar-expand-md navbar-light">
			<a href="/" class="navbar-brand">PIZZA PLANET</a>
			<ul class="navbar-nav">
				<router-link :to="{ name: 'homeLink' }" tag="li" class="nav-link">home</router-link>
				<router-link :to="{ name: 'menuLink' }"  tag="li" class="nav-link">menu</router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {

}
</script>

<style>
header {
	margin-bottom: 20px;
}
.navbar-brand {
	font-size: 1.5em;
}
</style>