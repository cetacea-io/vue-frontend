<template>
  <div class="container">
    <AppCover 
      :title="course.title"
      :image="course.coverImage"/>

    <div class="temp">

      <UserSnippet
        :image="course.author.profilePicture"
        :name="course.author.title"
        :date="course.date"/>

      <SocialShare
        :url="getFullPath"
        :title="getTitle"
        :description="getDescription"
        class="social-share"
        quote="Un nuevo curso en Cetacea"
        hashtags="arte,cultura,talleres"
        twitter-user="cetacea"/>

    </div>

    <div class="">
      <div class="first-row">
        <Card class="card-wrapper">
          <h2 class="title">Descripción</h2>
          <div class="description">
            <div v-if="course.overview">
              <span v-html="compiledMarkdown(course.overview)" />
            </div>
            <div v-else>Por el momento no hay una descripción disponible.</div>
          </div>
          <h2 class="title">Fechas y Horarios</h2>
          <div class="description">
            <div v-if="course.dateAndTime">
              <span v-html="compiledMarkdown(course.dateAndTime.text)" />
            </div>
            <div v-else>Por el momento no se especifican las fechas.</div>
          </div>
          <div v-if="course.instructors.length > 0">
            <h2 class="title"> Imparte </h2>
            <div
              v-for="(instructor, index) in course.instructors"
              :key="index"
              class="user-container">
              <UserSnippet
                :name="`${instructor.user.firstName} ${instructor.user.lastName}`"
                :image="instructor.profilePicture"/>
            </div>
          </div>
        </Card>
        <Card class="card-wrapper">
          <h2 class="title">Costo</h2>
          <div style="text-align:center;">
            <PriceTag 
              :amount="600"
              currency="MXN"/>
          </div>
          <Button
            :href="course.url"
            style="width: 100%;"
            target="_blank"
            type="a">
            Más información
          </Button>
        </Card>
      </div>
      <div class="second-row">
        <Card class="card-wrapper">
          <h2 class="title">Ubicación</h2>
          <p v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</p>
          <p v-else>Dirección no especificada</p>
          <google-map
            v-if="course.location && course.location.latitude && course.location.longitude"
            :latitude="course.location.latitude"
            :longitude="course.location.longitude"
            name="example"/>
        </Card>
      </div>
    </div>


    <div>

      <ItemsCarrousel
        :items="similarCourses"
        title="similar"/>

    </div>

  </div>
</template>

<script>
//@ts-ignore
import AppCover from '@/components/project/AppCover';
// @ts-ignore
import UserSnippet from '@/components/UserSnippet';
// @ts-ignore
import SocialShare from '@/components/social-share/SocialShare';
// @ts-ignore
import { meta } from '@/utils/seo/meta';

import { course } from '@/queries/course';

import marked from 'marked'

//@ts-ignore
import GoogleMap from '@/components/GoogleMap';

//@ts-ignore
import { mapActions } from 'vuex';

//@ts-ignore
import ItemsCarrousel from '@/components/ItemsCarrousel';
import PriceTag from '@/components/PriceTag'

export default {
  async asyncData ({store, error, app, params}) {
    try {
      const courseData = await app.apolloProvider.defaultClient.query({
        query: course,
        variables: { id: params.id }
      })
    
      let similarCoursesData = await store.dispatch('courses/recommend_courses', courseData.data.course)
      
      return {
        course: courseData.data.course,
        similarCourses: similarCoursesData.data.recommendCoursesByCourse
      }
    } catch(err) {
      error({statusCode: 404, message: 'Not found'})
      // console.log(err)
    }
  },
  head() {
    return meta(
      //@ts-ignore
      this.course.title,
      //@ts-ignore
      this.course.description,
      //@ts-ignore
      this.course.coverImage,
      //@ts-ignore
      this.$route.fullPath
    )
  },
  components: {
    AppCover,
    UserSnippet,
    GoogleMap,
    SocialShare,
    ItemsCarrousel,
    PriceTag
  },
  computed: {
    getFullPath(){
      return `${process.env.BASE_URL}${this.$route.fullPath}`
    },
    getTitle(){
      return this.course.title
    },
    getDescription(){
      return this.course.description
    }
  },
  methods: {
    // ...mapActions({
    //   register: 'user/register',
    // }),
    register(){
      const url = this.course.url
      window.open(this.course.url, '_blank')
    },
    compiledMarkdown(input){
      return marked(input, { sanitize: true }) 
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  margin-bottom: 10px;
}
.description{
  margin-bottom: 20px;
}
.user-container{
  background: #2b3c56;
  display: inline-block;
  padding: 1em;
  border-radius: 10px;
}
.first-row{
  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 0.5fr;
    .card-wrapper{
      margin-right: 20px;
      &:nth-child(2){
        margin-right: 0;
      }
    }
  }
  display: grid;
  grid-template-columns: 1fr;
  .card-wrapper{
    margin-bottom: 20px;
  }
}
</style>


<style scoped lang="scss">
.content-container{
  background: hsl(217, 32%, 15%);
  padding: 1em;
  border-radius: 10px;
}
.temp {
  @media only screen and (min-width: 960px) {
    padding: 1em;
    flex-flow: row;
    align-items: start;
  }
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
  border-color: hsl(217, 32%, 15%);
  // border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  width: 100%;
  flex-flow: column;
  align-items: center;
  &:last-child{
    border: none;
  }
}

.social-share{
  @media only screen and (min-width: 960px) {
    padding: 0;
  }
  padding-top: 20px;
}
</style>
