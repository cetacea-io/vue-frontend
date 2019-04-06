<template>
  <div class="container">
    <AppCover
      :title="project.title" 
      :image="project.coverImage"/>
    <div class="temp">
      <p>Categoría: {{ project.category }}</p>

      <p v-if="project.location">Locación: {{ project.location }}</p>
      <p v-else>No se requiere ubicación</p>

    </div>


    <div class="temp meta">
      <UserSnippet
        :username="project.author.user.username"
        :image="project.author.profilePicture"
        :name="`${project.author.user.firstName} ${project.author.user.lastName}`"
        type="user"/>
    </div>

    <AppSections 
      :id="project.id"
      :overview="project.overview"
      :positions="project.positions"
      :comments="project.comments"
    />

  </div>
</template>

<script>
//@ts-ignore
import AppCover from '@/components/project/AppCover'
// @ts-ignore
import AppSections from '@/components/project/AppSections'
import UserSnippet from '@/components/UserSnippet'
// @ts-ignore
import { meta } from '@/utils/seo/meta'
//@ts-ignore
import { project } from '@/queries/project'

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
    AppCover,
    AppSections,
    UserSnippet
  }
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
</style>
