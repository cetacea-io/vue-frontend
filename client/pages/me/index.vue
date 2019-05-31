<script>
export default {
  asyncData({redirect, store}){
    const actualUser = store.state.user.user.username
    console.log(actualUser)
    return redirect({path: `/user/${actualUser}`})
  },
  middleware: ['authRequired']
}
</script>
