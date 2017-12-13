import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
