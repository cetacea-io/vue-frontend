export default f => (...args) => {
  try {
    if (false) {
      return f(...args)
    } else {
      this.$store.commit('showModal', 'ModalLogin')
      alert('se pusoooooo')
    }
  } catch (ex) {
    
  }
}