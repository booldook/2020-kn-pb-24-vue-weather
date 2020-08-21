const cityLists = [
	{
		id: 1, 
		name: 'Seoul'
	},
	{
		id: 2, 
		name: 'Pusan'
	},
] 

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', cityLists)
	}
}