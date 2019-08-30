import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
        count: 0
    }
    // 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

export default new Vuex.Store({
    state,
    mutations
})