export default function ({store, route, redirect}) {
  const userIsLoggedIn = !!store.state.user.user
  const profileIsNotCompleted = store.state.user.uncompletedProfileList.length > 0 ? true : false 
  if (userIsLoggedIn && route.path !== '/orientation' && profileIsNotCompleted) {
    return redirect({path: '/orientation'})
  }
}