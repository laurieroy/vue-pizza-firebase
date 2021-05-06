<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>Welcome to Pizza Planet</h1>
				<h2>Feeling hungry?</h2>
				<button class="btn btn-success" @click="goToMenu">Let's order!</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goToMenu() {
			this.$router.push({ name: 'menuLink' })
		}
	}
}
</script>

<style>
</style>