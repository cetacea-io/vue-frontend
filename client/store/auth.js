// import Cookies from 'js-cookie'
const Cookie = process.client ? require('js-cookie') : undefined 
import gql from 'graphql-tag'

export const state = () => ({
  // token: process.client ? cookies.get('apollo-token') : null,
  token: process.client ? Cookie.get('apollo-token') || null : null,
  status: '',
  user: {}
})

export const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

export const actions = {

  login({commit}, user) {
    return new Promise((resolve, reject) => {
      this.app.apolloProvider.defaultClient.mutate({

        mutation: gql`
          mutation tokenAuth($username: String!, $password: String!) {
            tokenAuth(username: $username, password: $password) {
              token
            }
          }
        `,
        variables: user

      })
      .then(resp => {
        const token = resp.data.tokenAuth.token
        this.app.$apolloHelpers.onLogin(token)
        console.log(Cookie.get('apollo-token'))

        resolve(resp)

        // this.app.apolloProvider.defaultClient.query({
        //   query: gql`
        //     query me {
        //       me {
        //         id
        //         username
        //       }
        //     }
        //   `,
        // })

      })

    })
  }

}