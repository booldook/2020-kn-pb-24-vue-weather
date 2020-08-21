const cityLists = { 
	cities: [
		{
			id: 1, 
			name: 'Seoul'
		}
	] 
}

export default {
	ACT_CITY({ commit }) {
		commit('MUT_CITY', cityLists)
	}
}