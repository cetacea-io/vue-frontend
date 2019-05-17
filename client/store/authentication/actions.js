import { tokenAuth } from '@/graphql/mutations/user/tokenAuth.gql'
import { createUser } from '@/graphql/mutations/user/createUser.gql'
import { getAccessToken } from '@/graphql/mutations/user/getAccessToken.gql'
import { socialAuth } from '@/graphql/mutations/user/socialAuth.gql'
import { me } from '@/graphql/queries/user/me.gql'

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

          location.reload()
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
  async socialAuth({commit, dispatch}, code) {

    try {
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: getAccessToken,
        variables: {
          redirectUri: 'http://localhost:3333/complete/facebook/',
          provider: 'facebook',
          code: code
        },
        error(error){
          resolve(error)
        }
      })
      .then(({data}) => data)

      let accessToken = response.getAccessToken.accessToken

      const response2 = await this.app.apolloProvider.defaultClient.mutate({
        mutation: socialAuth,
        variables: {
          provider: 'facebook',
          accessToken: accessToken,
        },
        error(error){
          resolve(error)
        }
      })
      .then(({data}) => data)

      this.app.$apolloHelpers.onLogin(response2.socialAuth.token)

    
      dispatch('fetch')

      //   await commit('hideModal', true, {root: true})

      //     commit('isAuthenticated')
      //   // if(rootState.user.user.profile.interests.length <= 0){
      //   //   this.app.router.push('/orientation')
      //   // } else {
      //     this.app.router.push('/')

      //     location.reload()
        // }
  
    } catch (e) {
      console.log(e)
    }
  },
  //TODO: fix this
  async register({commit}, {username, email, password}) {
    try{
      //TODO: Fix this
      // this.app.$optimizely.track('user_registered', userID)
      const response2 = await this.app.apolloProvider.defaultClient.mutate({
        mutation: createUser,
        variables: {
          username: username,
          email: email,
          password: password
        },
        error(error){
          resolve(error)
        }
      })




      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: tokenAuth,
        variables: {
          username: username,
          password: password
        },
        error(error){
          resolve(error)
        }
      })
      .then(({data}) => data)

      await this.app.$apolloHelpers.onLogin(response.tokenAuth.token)




      // Register logic
      this.app.router.push({ path: 'orientation', query: { step: 1 } })
    } catch (e) {
      console.error(e)
    }
  },
  
}