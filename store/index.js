export const state = () => ({
    allMovies: [],
    searchValue: ''
})

export const mutations = {
    SET_ALL_MOVIES(state, allMovies) {
        state.searchValue = ''
        state.allMovies = allMovies.Search;
    },

    SEARCH_DATA(state, value) {
        state.searchValue = value
    }
}

export const actions = {
    async GET_ALL_MOVIES({ commit }, page) {
        const KEY = '4ed03e49';
        const getMovies = await fetch(`http://www.omdbapi.com/?s=marvel&apikey=${KEY}&page=${page}`)
        const allMovies = await getMovies.json();
        commit('SET_ALL_MOVIES', allMovies)
    }
}

export const getters = {
    allMovies(state) {
        return state.allMovies;
    },
    searchValue(state) {
        return state.searchValue;
    }
}