import Firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyDkH7qSeDINYTGuaKNOjRnh0oq-Gt24UCU",
	authDomain: "pizza-planet-7f099.firebaseapp.com",
	projectId: "pizza-planet-7f099",
	storageBucket: "pizza-planet-7f099.appspot.com",
	messagingSenderId: "306196925389",
	appId: "1:306196925389:web:3dfa12d19aaced5cc01284"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders');