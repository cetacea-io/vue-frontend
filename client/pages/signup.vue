<template>
  <div>

    <div class="form-wrapper">
      <form>
        <div class="register-wrapper">
          <div>
            <h1 class="title">Crea tu cuenta</h1>
          </div>
          <div>
            <GoogleButton/>
            <FacebookButton/>
          </div>
          <p>o</p>

          <div>
            <a href="#">Registrate con correo</a>
          </div>

        </div>
      </form>
    </div>


    <!-- <h1>Registrate en Cetacea</h1>
    <iframe 
      class="google-forms"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdl5fZfCj0HwOz7_1POoITFJA_fkuW5G26WgRf2zzLfv4_sig/viewform?embedded=true"
      height="500"
      frameborder="0"
      marginheight="0"
      marginwidth="0">
      Cargando…
    </iframe> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'

import AppInputField from '@/components/ui/AppInputField'
import GoogleButton from '@/components/GoogleButton'
import FacebookButton from '@/components/FacebookButton'

export default {
  layout: 'blank',
  components: {
    AppInputField,
    GoogleButton,
    FacebookButton
  },
  data () {
    return{
      username: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register() {
      console.log('entro')

      this.$apollo.mutate({
        mutation: gql`mutation ($username: String!, $email: String!, $password: String!) {
          createUser(username: $username, email: $email, password: $password){
            user{
              id
              username
              email
            }
          }
        }`,
        variables: {
          username: this.username,
          email: this.email,
          password: this.password,
        },
      })

    }

  },
  // middleware: 'notAuthenticated',
}
</script>

<style scoped lang="scss">
.google-forms {
  width: 100%;
  height: 500px;
}

.form-wrapper {
  padding: 20px 2.5rem;
}

.register-wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: column;

  .title{
    font-size: 1.5em;
    font-weight: 800;
  }
}

.form-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 440px;
}

.button {
  width: 100%;
}

.step-column{
  color: #fff;
  padding: 40px 80px 60px;
  text-align: center;
}
</style>
