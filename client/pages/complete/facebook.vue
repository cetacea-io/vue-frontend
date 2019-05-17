<template>
  <div/>
</template>

<script>
export default {
  async asyncData ({store, redirect, query}) {
    // redirect('/login')
    // await store.dispatch('authentication/socialAuth', query.code)

    // redirect({ path: '/'})
    return {
      code: query.code
    }
  },
  mounted(){
    this.$store.dispatch('authentication/socialAuth', this.code)
    this.$router.push('/')
  }
}
</script>
