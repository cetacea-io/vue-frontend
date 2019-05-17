export default function ({store, redirect}) {
  const userIsLoggedIn = !!store.state.user.user
  if (userIsLoggedIn){
    redirect('/')
  }
}