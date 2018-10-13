<template>
  <div class="fullscreen">

    <h1>Login</h1>
    <form
      v-if="!isAuthenticated"
      @submit.prevent="submit">
      <h2
        v-if="alert"
        style="color: red;"
        type="alert.type"
        value="true">
        {{ alert.message }}
      </h2>
      <p>Email</p>
      <input
        v-model="credentials.username" 
        type="text"
        name="email">
      <p>Password</p>
      <input
        v-model="credentials.password"
        type="password"
        name="password">
      <Button submit="submit">Entrar</Button>
    </form>

  </div>
</template>

<script>
import gql from 'graphql-tag'
// import {tokenAuth} from '~/queries/tokenAuth'

export default {
  // middleware: 'notAuthenticated',
  data () {
    return {
      isAuthenticated: false,
      credentials: {
        username: null,
        password: null,
      },
      alert: null,
      loading: false
    }
  },
  mounted (){
    this.isAuthenticated = !!this.$apolloHelpers.getToken()
  },
  methods: {
    async submit() {
      const credentials = this.credentials
      try{
        const res = await this.$apollo.mutate({
          mutation: gql`
            mutation tokenAuth($username: String!, $password: String!) {
                tokenAuth(username: $username, password: $password) {
                    token
                }
            }
        `,
        variables: credentials
        }).then(({data}) => data && data.tokenAuth)
        await this.$apolloHelpers.onLogin(res.token, undefined, 7)
        this.isAuthenticated = true
        this.$router.replace('/')
      }
      catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
</style>
