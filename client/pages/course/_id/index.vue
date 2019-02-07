<template>
  <div class="container">
    <AppCover 
      :title="course.title"
      :image="course.coverImage"/>

    <!-- <div class="temp">
      <h1 
        class="title">
        {{ course.title }}
      </h1>
      <p>{{ course.quickDesc }}</p>

    </div> -->
    <!-- <div class="temp">
      <p>Categoría: {{ course.category }}</p>

      <p>Imparte: {{ course.category }}</p>

      <p>Costo: $500 pesos, público en general; $300 pesos estudiantes, maestros e INAPAM</p>

      <p v-if="course.location">Lugar: {{ course.location }}</p>
      <p v-else>No se requiere ubicación</p> -->

    <!-- <i class="fas fa-eye"/> 4541
    <i class="fas fa-heart"/> 24
    <i class="fas fa-comment-dots"/> 214
    <i class="fas fa-share-alt"/> 214 -->
    <!-- </div> -->

    <!-- <p>Equipo:</p> <AppAvatarList/> -->

    <!-- <div class="buttons-wrapper">
      <AppButton :circle="true"><i class="fas fa-heart"/></AppButton>
      <AppButton :circle="true"><i class="fas fa-share-alt"/></AppButton>
      <AppButton 
        :circle="true"
        @click.native="loginRequired(showModal)">
        <i class="fas fa-donate"/>
      </AppButton>
      <AppButton :circle="true"><i class="fas fa-user-plus"/></AppButton>
    </div> -->
    <div class="temp">

      <UserSnippet
        :image="course.author.profilePicture"
        :name="course.author.title"
        :date="course.date"/>

      <SocialShare
        :url="getFullPath"
        :title="getTitle"
        :description="getDescription"
        quote="Vue is a progressive framework for building user interfaces."
        hashtags="vuejs,javascript,framework"
        twitter-user="cetacea"/>

    </div>

    <div class="">
      <div class="first-row">
        <Card class="card-wrapper">
          <h2 class="title">Descripción</h2>
          <div class="description">
            <div v-if="course.overview"><vue-markdown>{{ course.overview }}</vue-markdown></div>
            <div v-else>Por el momento no hay una descripción disponible.</div>
          </div>
          <h2 class="title">Fechas y Horarios</h2>
          <div class="description">
            <div v-if="course.overview"><vue-markdown>{{ course.overview }}</vue-markdown></div>
            <div v-else>Por el momento no hay una descripción disponible.</div>
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
          <h2 class="title">Cooperación</h2>
          <div style="text-align:center;">
            <span style="font-size: 30px; font-weight: 600;">$600</span>
            <span style="color: hsl(216, 16%, 64%);font-size: 15px;">MXN</span>
          </div>
          <Button
            style="width: 100%;"
            @click.native="register">
            Inscríbete ahora
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
        :items="similarCourses"/>

    </div>

  </div>
</template>

<script>
//@ts-ignore
import AppCover from '@/components/project/AppCover';
// @ts-ignore
import AppSections from '@/components/project/AppSections';
// @ts-ignore
import UserSnippet from '@/components/UserSnippet';
// @ts-ignore
import VueMarkdown from 'vue-markdown';
// @ts-ignore
import SocialShare from '@/components/social-share/SocialShare';
// @ts-ignore
import { loginRequired } from '@/utils/authentication';
// @ts-ignore
import { meta } from '@/utils/seo/meta';

//@ts-ignore
import { course } from '@/queries/course';

//@ts-ignore
import GoogleMap from '@/components/GoogleMap';

//@ts-ignore
import { mapActions, mapGetters } from 'vuex';

//@ts-ignore
import ItemsCarrousel from '@/components/ItemsCarrousel';

export default {
  async asyncData ({error, app, params}) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: course,
        variables: { id: params.id }
      })
      return {course: data.course}
    } catch(err) {
      error({statusCode: 404, message: 'Not found'})
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
    AppSections,
    UserSnippet,
    GoogleMap,
    VueMarkdown,
    SocialShare,
    ItemsCarrousel
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
    },
    ...mapGetters({
      similarCourses: 'courses/similarCourses'
    })
  },
  methods: {
    ...mapActions({
      registerUser: 'user/register'
    })
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
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-color: hsl(217, 32%, 15%);
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  width: 100%;
  &:last-child{
    border: none;
  }
}
</style>
