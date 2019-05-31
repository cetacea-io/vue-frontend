export default {
  set_user (store, data) {
    store.user = data

    // Completed profile logic
    if (data.profile.interests.length <= 0) {
      store.uncompletedProfileList.push('interests')
    }

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