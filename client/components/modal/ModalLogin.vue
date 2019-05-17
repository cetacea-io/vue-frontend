<template>
  <div style="margin: 21px 45px;">
    <div style="margin: 0px auto 25px; max-width: 385px;">
      <h3 class="title">Accesa a las mejores ideas del mundo</h3>
    </div>
    <div style="margin: 0px auto 25px; max-width: 270px;">
      <h3 class="subtitle">
        Ingresa para ver más
      </h3>
    </div>


    <div style="margin: 0px auto; position: relative; text-align: center;">
      <div style="margin: 0px auto;width: 268px;">

        <div
          v-if="emailMethod"
          class="form__login">
          <LoginFrame 
            :id="credentials.username"
            :password="credentials.password">
            <div
              slot-scope="{ error, loading, succes, submit }">
              <form @submit.prevent="submit">
                <AppInputField
                  v-model="credentials.username"
                  class="form__input"
                  placeholder="Email"/>
                <AppInputField
                  v-model="credentials.password"
                  class="form__input"
                  type="password"
                  placeholder="Password"/>
                <input 
                  class="form__button"
                  value="Ingresar"
                  type="submit" >
              </form>
            </div>
          </LoginFrame>
        </div>
        
        <div class="button-container">
          <facebook-button class="button"/>
          <google-button class="button"/>
          <div
            style="color: rgb(170, 170, 170); font-size: 13px; cursor: pointer;"
            @click="toggleLoginMethod()">
            O ingresa con correo electronico
          </div>
        </div>

        <div style="margin-top: 15px;">
          <span class="burocracy">
            <span>Al continuar, estas de acuerdo con los
              <nuxt-link
                to="/terms"
                target="_blank">
                Terminos y condiciones
              </nuxt-link> y la
              <nuxt-link
                to="/privacy"
                target="_blank">
                Política de Privacidad
              </nuxt-link>
              de Cetacea
            </span>
          </span>
        </div>


        <div>
          <div style="border-bottom: 1px solid rgb(239, 239, 239); margin: 20px auto 15px auto; width: 100%;"/>
          <div>
            <div style="margin: 0px auto 5px; width: fit-content; display: flex; align-items: baseline;">
              <a class="already-member">Ya eres miembro? <span style="color: #0a9ffc;font-weight: 600;">Ingresa aquí</span></a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import FacebookButton from '@/components/FacebookButton'
import GoogleButton from '@/components/GoogleButton'
import AppInputField from '@/components/ui/AppInputField'
import LoginFrame from '@/components/frames/LoginFrame'
import { mapMutations } from 'vuex'

export default {
  name: 'ModalLogin',
  components: {
    FacebookButton,
    GoogleButton,
    AppInputField,
    LoginFrame
  },
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      lol: null,
      visible: false,
      emailMethod: false, 
    }
  },
  beforeCreate() {
    this.lol = this.$optimizely.isFeatureEnabled('show_projects', 'bob')
  },
  methods: {
    ...mapMutations([`hideModal`]),
    toggleLoginMethod(){
      this.emailMethod = true
    },
  }
}
</script>

<style scoped lang="scss">
$def-font-color: rgb(172, 187, 197);
$def-anchor-color: rgb(60, 177, 255);

.title {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -1.2px;
  line-height: 120%;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: $def-font-color;
  font-size: 16px;
  font-weight: normal;
  margin: -15px 0px 20px;
}

.burocracy {
  -webkit-font-smoothing: antialiased;
  font-size: 11px;
  font-weight: normal;
  text-align: center;
  transition: opacity 0.2s linear;
  color: $def-font-color;
  width: 224px;
  a {
    color: $def-anchor-color;
  }
}

.button-container{
  display: inline-block;
  .button {
    width: 100%;
    &:not(:first-child):not(:last-child){
      margin: 10px 0;
    }
  }
}

.already-member {
  cursor: pointer;
  margin-left: 5px;
  font-size: 0.9em;
  color: $def-font-color;
}

.form__login {
  .form__input {
    margin-bottom: 10px;
  }
  .form__button {
    background: #0a87fc;
    border: 1px solid #0a87fc;
    padding: 0.7em 1.5em;
    border-radius: 5px;
    color: #ffff;
    font-size: 1em;
    font-family: 'Soleil';
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
