<template>
  <div class="container">

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
      <facebook-button/>
      <google-button/>
      <p>Email/teléfono/nombre de usuario</p>
      <input
        v-model="credentials.username" 
        type="text"
        name="email">
      <p>Contraseña</p>
      <input
        v-model="credentials.password"
        type="password"
        name="password">
      <Button submit="submit">Entrar</Button>
    </form>

  </div>
</template>

<script>
import FacebookButton from '@/components/FacebookButton'
import GoogleButton from '@/components/GoogleButton'

export default {
  // middleware: 'isAuthenticated',
  components: {
    FacebookButton,
    GoogleButton
  },
  data () {
    return {
      credentials: {
        username: null,
        password: null,
      },
      alert: null,
      loading: false
    }
  },
  computed: {
    isAuthenticated() {
      // return !!this.$apolloHelpers.getToken()
      return this.$store.getters['authentication/isAuthenticated']
    }
  },
  middleware: 'unauthRequired',
  methods: {
    async submit() {
      const credentials = this.credentials
      this.alert = null
      this.loading = true

      this.$store.dispatch(
        'authentication/login', {id: credentials.username, password: credentials.password})
      .then(result => {
        this.alert = {type: 'success', message: result.data.message}
        this.loading = false
        this.$router.push('/')
      })
      .catch(error => {
        this.loading = false
        this.alert = { message: 'Hubo un error, comprueba tu usuario y tu contrasena'}
      })
    }
  }
}
</script>

<style scoped>
</style>
