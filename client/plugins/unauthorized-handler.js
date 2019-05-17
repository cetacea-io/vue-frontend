export default ({ redirect }, inject) => {
  inject('handleUnauthorizedAction', 
    () => {
      redirect('/login')
    } 
  )
}