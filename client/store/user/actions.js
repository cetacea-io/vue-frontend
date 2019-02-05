import { createComment } from '@/queries/createComment'

export default {
  async submit_comment ({project, content}) {
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: createComment,
        variables: {
          content: content,
          project: project
        },
        error(error) {
          resolve(error)
        }
      })
      .then(() => {
        analytics.track('Followed User', {
          user: 'Some user',
          course: 'Some course'
        })
        alert('oh se mamo la verga')
      })
    } catch (e) {
      // Aqui va el error
    }
  },
  async follow ({followed}) {
    try {
      //
    } catch (e) {
      //
    }
  },
  async register ({course}) {
    try{
      alert('hola')
    } catch (e) {
      //
    }
  },
  async join_project ({project}) {
    try {
      alert('Se unio al project')
    } catch (e) {
      //
    }
  }
}