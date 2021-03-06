import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

// const inBrowser = typeof window !== 'undefined'
// const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}