import ALL_COURSES from '@/queries/allCourses.gql'

export default {
  async get_courses ({dispatch}, category) {
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
  }
}