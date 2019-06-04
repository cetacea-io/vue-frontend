<template>
  <div class="container">
    <CourseHeader 
      :title="project.title"
      :cover-image="project.coverImage"
      :classification="`proyecto`"
      :area="project.category"
      :author-title="project.author.title"
      :author-picture="project.author.picture"
      :current-route="`/project/${project.id}`"
      :tabs="tabs"
    />

    <nuxt-child :project="project"/>

  </div>
</template>

<script>
// @ts-ignore
import CourseHeader from '@/components/course/CourseHeader'
// @ts-ignore
import { meta } from '@/utils/seo/meta'
//@ts-ignore
import { project } from '@/graphql/queries/project'

export default {
  async asyncData ({store, error, app, params}) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: project,
        variables: { id: params.id }
      })
      return {project: data.project}
    } catch(err) {
      error({statusCode: 404, message: 'Not found'})
    }
    //@ts-ignore
    // analytics.track('Looked project', {
    //   user: store.getters['user/user'].id,
    //   project: project.id
    // })
  },
  head() {
    return meta(
      //@ts-ignore
      this.project.title,
      //@ts-ignore
      this.project.description,
      //@ts-ignore
      this.project.coverImage,
      //@ts-ignore
      this.$route.fullPath
    )
  },
  components: {
    CourseHeader
  },
  data(){
    return {
      tabs: [
        {
          title: `Proyecto`,
          route: ``
        },
        {
          title: `Unete`,
          route: `/join`
        },
        {
          title: `Feed`,
          route: `/feed`
        },
        {
          title: `Comentarios`,
          route: `/comments`
        },
        {
          title: `Patrocinadores`,
          route: `/backers`
        }
      ]
    }
  },
}
</script>

<style scoped>
.temp {
  padding: 1em;
  border-color: hsl(217, 32%, 15%);
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  width: 100%;
}
.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
}
.meta{
  display: inline-flex;
  align-items: center;
}
.desc{
  margin: 0 16px;
}
.date{
  color: #8fa0b9;
}
.content-wrapper{
  margin: 30px 0;
}
</style>
