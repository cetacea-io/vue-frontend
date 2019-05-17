<template>
  <div>

    <div class="form-wrapper">
      <form>
        <div class="register-wrapper">
          <div>
            <h1 class="title">Crea tu cuenta</h1>
          </div>
          <div>
            <GoogleButton @click.native="register"/>
            <FacebookButton @click.native="register"/>
          </div>
          <p>o</p>

          <div>
            <div @click="register({username: 'agente', email: 'me@met.com', password: '1234'})">Registrate con correo</div>
          </div>

          <!-- <nuxt-link to="/orientation">registrar</nuxt-link> -->

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
import AppInputField from '@/components/ui/AppInputField'
import GoogleButton from '@/components/GoogleButton'
import FacebookButton from '@/components/FacebookButton'

import { mapActions } from 'vuex'

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
    ...mapActions({
      register: 'authentication/register',
    }),
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
