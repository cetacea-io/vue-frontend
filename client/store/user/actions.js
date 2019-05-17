import { createComment } from '@/graphql/mutations/createComment'
import { joinProject } from '@/graphql/mutations/joinProject'

import { applyWithGuard } from '@/helpers/applyWithGuard'

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
  async register ({commit}, {course}) {
    if(false) {
      // 
      try{
      } catch (e) {
        //
      }
    } else {
      commit('showModal', 'ModalLogin', { root: true })
    }
  },
  join_project:
    async function ({rootState, commit}, position) {
      const userIsLogged = !!rootState.user.user

      if(!userIsLogged) {
        this.app.$handleUnauthorizedAction()
        return
      }
      else {
        try {
          await this.app.apolloProvider.defaultClient.mutate({
            mutation: joinProject,
            variables: {
              position: position,
            },
            error(error) {
              resolve(error)
            }
          })
          .then(() => {
            //somethings
          })
        } catch (e) {
          this.app.router.push('/login')
        }
      }
    }
}