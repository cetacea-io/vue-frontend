<template>
  <modal
    v-if="visible"
    @close="hide">
    <div style="margin: 0px auto 25px; max-width: 385px;">
      <h3 class="title">Accesa a las mejores ideas del mundo</h3>
    </div>
    <div style="margin: 0px auto 25px; max-width: 270px;">
      <h3 style="text-align: center; color: rgb(51, 51, 51); font-size: 16px; font-weight: normal; margin: -15px 0px 20px;">
        Ingresa para ver más
      </h3>
    </div>


    <div style="margin: 0px auto; position: relative; text-align: center;">
      <div style="margin: 0px auto;width: 268px;">
        
        <div class="button-container">
          <facebook-button class="button"/>
          <google-button class="button"/>
          <google-button class="button"/>
        </div>

        <div style="margin-top: 15px;">
          <span
            class="burocracy"
            style="-webkit-font-smoothing: antialiased; font-size: 11px; font-weight: normal; text-align: center; transition: opacity 0.2s linear; color: rgb(170, 170, 170); width: 224px;">
            <span>Al continuar, estas de acuerdo con los
              <a
                href="/_/_/about/terms-service/"
                target="_blank">
                Terminos y condiciones
              </a> y la
              <a
                href="/_/_/about/privacy/"
                target="_blank">
                Política de Privacidad
              </a>
              de Cetacea
            </span>
          </span>
        </div>


        <div>
          <div style="border-bottom: 1px solid rgb(239, 239, 239); margin: 20px 0px 15px -68px; width: 404px;"/>
          <div>
            <div style="margin: 0px auto 5px; width: fit-content; display: flex; align-items: baseline;">
              <a class="already-member">Ya eres miembro? Ingresa aquí</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </modal>
</template>

<script>
import PluginModal from '@/plugins/login-modal'
import Modal from '@/components/Modal'
import FacebookButton from '@/components/FacebookButton'
import GoogleButton from '@/components/GoogleButton'

export default {
  name: 'LoginModal',
  components: {
    Modal,
    FacebookButton,
    GoogleButton
  },
  data() {
    return {
      lol: null,
      visible: false,
    }
  },
  beforeCreate() {
    this.lol = this.$optimizely.isFeatureEnabled('show_projects', 'bob')
  },
  beforeMount() {
    PluginModal.EventBus.$on('show', (params) => {
      this.show(params)
    })
  },
  methods: {
    hide() {
      this.visible = false
    },
    show(params) {
      // making modal visible
      this.visible = true;
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  color: rgb(0, 0, 0);
  font-size: 32px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -1.2px;
  line-height: 120%;
  text-align: center;
}

.burocracy {
  a {
    color: #464646;
  }
}

.button-container{
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
  color: #525252;
}
</style>
