// import Cookies from 'js-cookie'
const cookie = process.client ? require('js-cookie') : undefined 
import gql from 'graphql-tag'

import { tokenAuth } from '@/queries/tokenAuth.gql'
import { me } from '@/queries/me.gql'

export const state = () => ({
  // token: process.client ? cookies.get('apollo-token') : null,
  token: process.client ? cookie.get('apollo-token') || null : null,
  // token: !!this.app.$apolloHelpers.getToken(),
  status: '',
  user: null
})

export const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  actualUser: state => state.user
}

export const mutations = {
  set_user (store, data) {
    store.user = data
    // Identify analytics user
    analytics.identify(data.id, {
      username: data.username,
      email: data.email
    })
  },
  reset_user (store) {
    store.user = null
  }
}

export const actions = {

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

  async login({commit}, id, password) {
    try {
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: tokenAuth,
        variables: {
          username: 'ivan',
          password: '60a7e5c4'
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

        commit('set_user', response.me)

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