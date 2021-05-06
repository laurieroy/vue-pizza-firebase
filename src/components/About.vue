<template>
	<div>
		<p>Click on the links below for more info:</p>
		<nav class="navbar navbar-expand-md navbar-light">
			<ul class="navbar-nav">
				<router-link :to="{ name: 'historyLink' }" tag="li" class="nav-link">our history</router-link>
				<router-link :to="{ name: 'contactLink' }"  tag="li" class="nav-link">contact us</router-link>
				<router-link :to="{ name: 'orderingLink' }" tag="li" class="nav-link">ordering guide</router-link>
				<router-link :to="{ name: 'deliveryLink' }" tag="li" class="nav-link">delivery</router-link>
			</ul>
		</nav>
		<router-view></router-view>
	</div>
</template>