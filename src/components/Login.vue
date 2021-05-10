<template>
	<div class="row">
		<div>
			<div>
				<p>Logged in as: <br> {{ currentUser }}</p>
			</div>
			<form>
			<div class="form-group">
				<label>Email</label>
				<input type="email" id="email" class="form-control" placeholder="Enter e-mail">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" id="password" class="form-control" placeholder="Enter a password">
			</div>
			<button class="btn btn-primary" type="button" @click.prevent="signIn">Sign in</button>
			<button class="btn btn-danger" type="button" @click.prevent="signOut">Sign out</button>
			</form>
		</div>
	</div>
</template>

<script>
import Firebase from '../firebaseConfig';
import {store} from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user){
	if(user){
		store.dispatch('setUser', user)
	} else {
		store.dispatch('setUser', null)
	}
});

export default {
	methods: {
		signIn() {
			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;
			
			Firebase.auth().signInWithEmailAndPassword(email, password)
				.catch(function(error) {
					const errorCode = error.code;
					const errorMessage = error.message;

					if(errorCode === 'auth/wrong-password') {
						alert('Wrong password')
					} else {
						alert(errorMessage);
					}
				})
		},
		signOut() {
			Firebase.auth().signOut()
				.then(function() {
					alert('logged out');
			}).catch(function(error) {
				alert('error');
			})
		},
		computed: {
			currentUser() {
				return this.$store.getters.currentUser
			}
		}
	}
}
</script>

<style></style>