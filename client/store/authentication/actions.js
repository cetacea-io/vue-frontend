import { tokenAuth } from '@/queries/tokenAuth.gql'
import { me } from '@/queries/me.gql'

export default {

  async fetch ({commit}) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: me
      })
      .then(({data}) => data)

      await commit('user/set_user', response.me, {root: true})
    } catch (e) {
      console.error(e)
    }
  },
  
  async login({commit, rootState, dispatch}, {id, password}) {
    try {
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: tokenAuth,
        variables: {
          username: id,
          password: password
        },
        error(error){
          resolve(error)
        }
      })
      .then(({data}) => data)

      await this.app.$apolloHelpers.onLogin(response.tokenAuth.token)
      
      dispatch('fetch')

        await commit('hideModal', true, {root: true})

          commit('isAuthenticated')
        // if(rootState.user.user.profile.interests.length <= 0){
        //   this.app.router.push('/orientation')
        // } else {
          this.app.router.push('/')
        // }

      // try {
      //   const response = await this.app.apolloProvider.defaultClient.query({
      //     query: me
      //   })
      //   .then(({data}) => data)
  
      //   await commit('user/set_user', response.me, {root: true})
      //   commit('isAuthenticated')

      //   await commit('hideModal', true, {root: true})
      //   // if(rootState.user.user.profile.interests.length <= 0){
      //   //   this.app.router.push('/orientation')
      //   // } else {
      //     this.app.router.push('/')
      //   // }
  
      // } catch (e) {
      //   reject(error)
      // }
  
    } catch (e) {
      reject(error)
    }
  
  },
  //TODO: fix this
  async register({commit}, data) {
    try{
      //TODO: Fix this
      // this.app.$optimizely.track('user_registered', userID)
      // Register logic
      this.app.router.push('/')
      this.app.$loginModal.show()
    } catch (e) {
      console.error(e)
    }
  },
  
}