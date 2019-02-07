export default {
  set_user (store, data) {
    store.user = data
    // Identify analytics user
    analytics.identify(data.id, {
        username: data.username,
        email: data.email
    })
  },
  reset_user (store) {
    store.user = null
  }
}