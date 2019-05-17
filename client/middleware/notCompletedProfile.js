export default function ({store, route, redirect}) {
  const userIsLoggedIn = !!store.state.user.user
  if (userIsLoggedIn && route.path !== '/orientation'){
    const userCompletedProfile = !!store.state.user.user.email
    if(!userCompletedProfile){
      return redirect({path: '/orientation', query: { step: 1 } })
    }
  }
}