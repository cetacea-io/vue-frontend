export default {
  mounted() {
    if (!this.$store.getters['authentication/funnelResponded']) {
        this.$store.commit('showModal', 'ModalFeeder')
    }
  }
}