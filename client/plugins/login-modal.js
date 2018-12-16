import Vue from 'vue'
import LoginModal from '@/components/LoginModal'

const Modal = {
  install(Vue, options) {
    this.EventBus = new Vue()

    Vue.component('login-modal', LoginModal)

    Vue.prototype.$loginModal = {
      show(params) {
        Modal.EventBus.$emit('show', params)
      }
    }
  }
}

Vue.use(Modal)

export default Modal