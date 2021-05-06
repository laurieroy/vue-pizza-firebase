<template>
	<footer class="row">
		<nav class="navbar navbar-expand-md navbar-light">
			<ul class="navbar-nav">
				<router-link :to="{ name: 'homeLink' }" tag="li" class="nav-link">home</router-link>
				<router-link :to="{ name: 'aboutLink' }" tag="li" class="nav-link">about</router-link>
				<router-link :to="{ name: 'adminLink' }" tag="li" class="nav-link">admin</router-link>
			</ul>
		</nav>
	</footer>
</template>

<script></script>
<style></style>