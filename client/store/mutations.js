export default {
  showModal(state, componentName) {
    state.modalVisible = true
    state.modalComponent = componentName
  },
  hideModal(state) {
    state.modalVisible = false
  }
}