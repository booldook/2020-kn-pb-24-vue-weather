import { axCity, axWeather } from '../api'

export default {
	async ACT_CITY({ commit }) {
		commit('MUT_CITY', await axCity());
	},
	async ACT_WEATHER({ commit }, cityId) {
		const { daily, weekly } = await axWeather(cityId);
		commit('MUT_DAILY', daily);
		commit('MUT_WEEKLY', weekly);
	}
}