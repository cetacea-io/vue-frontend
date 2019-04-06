export default function ({store, route, redirect}) {
  const userIsLoggedIn = !!store.state.user.user
  if (userIsLoggedIn && route.path !== '/orientation'){
    return redirect('/orientation')
  }
}