import { firebaseAction } from 'vuexfire'

const state = {
	menuItems: []
}
const getters = {
	getMenuItems: state => state.menuItems
}
const mutations = {

}
const actions = {
	setMenuRef: firestoreAction(
		({ bindFirestoreRef }, { ref }) => {
			bindFirestoreRef('menuItems', ref)
		}
	)

}

export default {
	state,
	mutations,
	getters,
	actions
}