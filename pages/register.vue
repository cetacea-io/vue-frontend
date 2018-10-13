<template>
  <div>
    <h1>Registrate</h1>
    <!-- <Input>
    <Input>
    <Input> -->
    <Button @click="register">Registrar</Button>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  import AppInputField from '@/components/ui/AppInputField'

  export default {
    components: {
      AppInputField,
    },
    data () {
      return{
        username: null,
        email: null,
        password: null,
      }
    },
    methods: {
      register() {
        console.log('entro')

        this.$apollo.mutate({
          mutation: gql`mutation ($username: String!, $email: String!, $password: String!) {
            createUser(username: $username, email: $email, password: $password){
              user{
                id
                username
                email
              }
            }
          }`,
          variables: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        })

      }

    },
    // middleware: 'notAuthenticated',
  }
</script>

<style scoped lang="scss">
</style>
