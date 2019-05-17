import CARD_COURSES from '@/graphql/queries/courses/cardCourses.gql'
import CARD_PROJECTS from '@/graphql/queries/projects/cardProjects.gql'
import RECOMMEND_CATEGORIES from '@/graphql/queries/recommendCategories.gql'

export default {
  async fetchContent ({dispatch}, category, proj) {
    let response
    if (true) {
      try {
        response = await this.app.apolloProvider.defaultClient.query({
          query: CARD_COURSES,
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
    } else {
      try {
        response = await this.app.apolloProvider.defaultClient.query({
          query: CARD_PROJECTS,
          update: result => result.courses,
          error(error) {
            resolve(error)
          }
        })
      } catch (e) {
        // Aqui va el error
      }
    }
    return response
  },
  async loadContent ({commit, dispatch, state, rootState}, iterator) {
    // Get the categories
    let categories
      = !!rootState.user.user ?
        rootState.user.user.profile.interests :
        state.categories
    console.log(categories)
    let category = categories[iterator]
    console.log(category)
    
    let component = null

    try {

      let componentType = `ItemsCarrousel`

      let { data } = await dispatch('fetchContent', category, true)
      console.log(data)

      let itemsArray = []

      for (var i = 0; i < data.courses.length; i++) {
        itemsArray.push(
          { 
            properties: data.courses[i],
            component: `AppProjectCard`,
          }
        )
      }

      let componentProperties = {
        title: `Cursos/Talleres de ${category.title}`,
        items: itemsArray
      }

      component = {
        type: () => import(`../../components/${componentType}`),
        properties: componentProperties,
        events: null
      }
    } catch (e) {
      //error
    }
    return component
  },
  async load_courses ({commit, state, dispatch, rootState}){
    try{
      let categories
          = !!rootState.user.user ?
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