<template>
	<div class="row">
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
</template>

<script>
import Firebase from '../firebaseConfig';

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
	}
}
</script>

<style></style>