import ALL_COURSES from '@/queries/allCourses.gql'

export default {
  async get_courses ({commit}, area) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: ALL_COURSES,
        variables: {
          area: area
        },
        update: result => result.courses,
        error(error) {
          resolve(error)
        }
      })
      .then(({data}) => 
        commit('add_courses', { area: area, courses_list: data.courses })
      )
    } catch (e) {
      // Aqui va el error
    }
  },
  async poblate_courses ({dispatch, state}){
    if (state.courses.length <= 0){
      try{
        for(let interest of state.interests) {
          await dispatch('get_courses', interest)
        }
      } catch (e) {
        //aqqui va el error gg
      }
    }
  },
  async load_courses ({dispatch, state}){
    try{
      for(let interest of state.interests) {
        await dispatch('get_courses', interest)
      }
    } catch (e) {
      //aqqui va el error gg
    }
  }
}