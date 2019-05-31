import { meta } from '@/utils/seo/meta'
import { course } from '@/graphql/queries/courses/course'

export default {
  async asyncData ({store, error, app, params}) {
    try {
      const courseData = await app.apolloProvider.defaultClient.query({
        query: course,
        variables: { id: params.id }
      })
   
      return {
        course: courseData.data.course,
      }
    } catch(err) {
      error({statusCode: 404, message: 'Not found'})
      console.log(err)
    }
  },
  // head() {
  //   return meta(
  //     this.course.title,
  //     this.course.description,
  //     this.course.coverImage,
  //     this.$route.fullPath
  //   )
  // },
}