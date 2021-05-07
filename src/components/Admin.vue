<template>
	<div>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<pp-new-pizza></pp-new-pizza>
			</div>
			<div class="col-sm-12 col-md-6">
				<h3>Menu:</h3>
				<table class="table table-hover">
					<thead class="thead-default">
						<tr>
							<th>Item</th>
							<th>Remove from menu</th>
						</tr>
					</thead>
					<tbody v-for="item in getMenuItems">
						<tr>
							<td>{{item.name}}</td>
							<td><button class="btn btn-sm btn-outline-danger">x</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<h3>Current Orders: {{numberOfOrders}} </h3>
				<table class="table table-sm">
					<thead class="thead-default">
						<tr>
							<th>Item</th>
							<th>Size</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<div class="order-number">
							<strong><em>Order Number: 1</em></strong>
							<button class="btn btn-sm btn-outline-danger">x</button>
						</div>
						<tr>
							<td>{{}}</td>
							<td>9"</td>
							<td>1</td>
							<td>9.99</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-sm-12 col-lg-6">
				<pp-login></pp-login>
			</div>
		</div>
	</div>
</template>

<script>
import NewPizza from './NewPizza';
import Login from './Login';

export default {
	components: {
		ppLogin: Login,
		ppNewPizza: NewPizza
	},
	computed: {
		getMenuItems() {
			return this.$store.state.menuItems
		},
		numberOfOrders() {
			return this.$store.getters.numberOfOrders
		}
	},
	beforeRouteLeave: (to, from, next) => {
		if(confirm("Have you remembered to log out?") === true ) {
			next();
		} else {
			next(false);
		}
	}
}
</script>

<style></style>