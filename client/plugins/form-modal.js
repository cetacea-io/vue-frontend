import Vue from 'vue'
import DataModal from '@/components/DataModal'

const Modal = {
  install(Vue, options) {
    this.EventBus = new Vue()

    Vue.component('data-modal', DataModal)

    Vue.prototype.$formModal = {
      show(params) {
        Modal.EventBus.$emit('show', params)
      }
    }
  }
}

Vue.use(Modal)

export default Modal