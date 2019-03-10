import ALL_COURSES from '@/queries/allCourses.gql'
import RECOMMEND_CATEGORIES from '@/queries/recommendCategories.gql'

export default {
  async fetchContent ({dispatch}, category) {
    let response
    try {
      response = await this.app.apolloProvider.defaultClient.query({
        query: ALL_COURSES,
        variables: {
          category: category.id
        },
        update: result => result.courses,
        error(error) {
          resolve(error)
        }
      })
    } catch (e) {
      // Aqui va el error
    }
    return response
  },
  async loadContent ({commit, dispatch, state, rootState}) {
    let categories
      = rootState.authentication.isAuthenticated ?
        rootState.user.user.profile.interests :
        state.categories

    let category = categories[state.iterator]
    let component = null

    try {

      let componentType = `ItemsCarrousel`

      let { data } = await dispatch('fetchContent', category)

      let componentProperties = {
        title: category.title,
        items: data.courses
      }
      component = {
        type: () => import(`../../components/${componentType}`),
        properties: componentProperties,
        events: null
      }
    } catch (e) {
      //error
    }

    state.iterator = state.iterator + 1
    return component
  },
  async load_courses ({commit, state, dispatch, rootState}){
    try{
      let categories
          = rootState.authentication.isAuthenticated ?
            rootState.user.user.profile.interests : 
            state.categories
      for(let interest of categories) {
        await dispatch('courses/get_courses', interest, {root: true})
        .then(({ data }) => {
          commit('add_courses', { category: interest.title, courses_list: data.courses })
        })
      }
    } catch (e) {
      //aqqui va el error gg
    }
  },
  async poblate_categories ({state}) {
    let response
    try {
      response = await this.app.apolloProvider.defaultClient.query({
        query: RECOMMEND_CATEGORIES,
        error(error) {
          resolve(error)
        }
      })
    } catch (e) {
      // Aqui va el error
    }
    state.categories = response.data.recommendCategories
  }
}