export default {
  isAuthenticated(store){
    store.isAuthenticated = !store.isAuthenticated
  },
  reset_user (store) {
    store.user = null
  }
}