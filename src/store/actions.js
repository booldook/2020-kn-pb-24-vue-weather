import { axCity } from '../api'

export default {
	async ACT_CITY({ commit }) {
		commit('MUT_CITY', await axCity());
	}
}