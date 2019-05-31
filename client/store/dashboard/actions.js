import CARD_COURSES from '@/graphql/queries/courses/cardCourses.gql'
import CARD_PROJECTS from '@/graphql/queries/projects/cardProjects.gql'
import RECOMMEND_CATEGORIES from '@/graphql/queries/recommendCategories.gql'

export default {
  async fetchContent ({dispatch}, category) {
    let response
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
    return response
  },
  async fetchProjectContent ({dispatch}) {
    let response
      try {
        response = await this.app.apolloProvider.defaultClient.query({
          query: CARD_PROJECTS,
          update: result => result.projects,
          error(error) {
            resolve(error)
          }
        })
      } catch (e) {
        // Aqui va el error
      }
    return response
  },
  async loadContent ({commit, dispatch, state, rootState}, iterator) {
    // Get the categories
    let categories
      = !!rootState.user.user ?
        rootState.user.user.profile.interests :
        state.categories
    // console.log(categories)
    let category = categories[iterator]
    // console.log(category)
    
    let component = null

    try {

      let componentType = `ItemsCarrousel`

      let { data } = await dispatch('fetchContent', category)
      // console.log(data)

      let itemsCarrouselProperties = {
        title: `Cursos/Talleres de ${category.title}`,
        description: `Los talleres mas destacados de ${category.title}`,
        items: data.courses,
      }

      component = {
        type: () => import(`../../components/${componentType}`),
        properties: itemsCarrouselProperties,
        events: null
      }
    } catch (e) {
      //error
    }
    return component
  },
  async loadAllProjects ({commit, dispatch, state, rootState}) {
    let component = null
    try {

      let componentType = `ItemsCarrousel`

      let { data } = await dispatch('fetchProjectContent', null, true)
      // console.log(data)

      let itemsCarrouselProperties = {
        title: `Proyectos destacados`,
        description: `Los proyectos mas destacados`,
        items: data.projects
      }

      component = {
        type: () => import(`../../components/${componentType}`),
        properties: itemsCarrouselProperties,
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