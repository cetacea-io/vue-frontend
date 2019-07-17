import PURCHASE from '@/graphql/mutations/purchase.gql'

export default {
  async purchase ({dispatch, state}, {nonce, amount}) {
    let response
      try {
        response = await this.app.apolloProvider.defaultClient.mutate({
          mutation: PURCHASE,
          variables: {
            nonce: nonce,
            amount: amount
          },
          error(error) {
            resolve(error)
          }
        })
      } catch (e) {
        // Aqui va el error
      }
    return response    
  },
}