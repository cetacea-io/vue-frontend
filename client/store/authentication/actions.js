import { tokenAuth } from '@/queries/tokenAuth.gql'
import { me } from '@/queries/me.gql'

export default {

  async fetch ({commit}) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: me
      })
      .then(({data}) => data)
    } catch (e) {
      console.error(e)
    }
  },
  
  async login({commit}, {id, password}) {
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
      
      try {
        const response = await this.app.apolloProvider.defaultClient.query({
          query: me
        })
        .then(({data}) => data)
  
        await commit('user/set_user', response.me, {root: true})
  
      } catch (e) {
        console.error(e)
      }
  
    } catch (e) {
      console.error(e)
    }
  
  },
  //TODO: fix this
  async register({commit}, data) {
    try{
      //TODO: Fix this
      this.app.$optimizely.track('user_registered', userID)
    } catch (e) {
      console.error(e)
    }
  }
  
}