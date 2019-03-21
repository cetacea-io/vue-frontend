// import cookie from 'cookie'
// import {setAuthToken, resetAuthToken} from '~/utils/auth'

// export const actions = {
//   // Called only from the server side
//   nuxtServerInit ({ dispatch }, context) {
//     return new Promise((resolve, reject) => {
//       const cookies = cookie.parse(context.req.headers.cookie || '')
//       if (cookies.hasOwnProperty('x-access-token')) {
//         setAuthToken(cookies['x-access-token'])
//         dispatch('auth/fetch')
//         .then(result => {
//           resolve(true)
//         })
//         .catch(error => {
//           console.log('Provided token is invalid: ', error)
//           resetAuthToken()
//           resolve(false)
//         })
//       } else {
//         resetAuthToken()
//         resolve(false)
//       }
//     })
//   }
// }

export const state = () => ({
  modalVisible: false,
  modalComponent: null
})

export const mutations = {
  showModal(state, componentName) {
    state.modalVisible = true
    state.modalComponent = componentName
  },
  hideModal(state) {
    state.modalVisible = false
  }
}





import Vuex from 'vuex'
import userModule from './user'
import coursesModule from './courses'
import authenticationModule from './authentication'
import dashboardModule from './dashboard'

// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    // actions,
    // getters,
    state,
    mutations,
    modules: {
      user: userModule,
      courses: coursesModule,
      authentication: authenticationModule,
      dashboard: dashboardModule
    }
  })
}

export default createStore