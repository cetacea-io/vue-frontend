<template>
  <div class="container">
    <AppCover :image="course.coverImage"/>

    <div class="temp">
      <h1 
        class="title">
        {{ course.title }}
      </h1>
      <!-- <p>{{ course.quickDesc }}</p> -->
      <nuxt-link to="/register">
        <Button type="a">
          Registrate en Cetacea
        </Button>
      </nuxt-link>
    </div>
    <div class="temp">
      <p>Categoría: {{ course.category }}</p>

      <p>Fechas y Horarios: {{ course.category }}</p>

      <p v-if="course.location">Lugar: {{ course.location }}</p>
      <p v-else>No se requiere ubicación</p>

      <!-- <i class="fas fa-eye"/> 4541
      <i class="fas fa-heart"/> 24
      <i class="fas fa-comment-dots"/> 214
      <i class="fas fa-share-alt"/> 214 -->
    </div>

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


    <div class="temp meta">
      <Avatar 
        :image="course.creatorImage"
        size="small"
      />
      <div class="desc">
        <div>CONARTE</div>
        <div class="date">{{ shortTimestamp(course.creationDate) }}</div>
      </div>
      <Button 
        size="small"
        @click.native="join" >
        Seguir
      </Button>
    </div>

    <div class="content-container">
      <div v-if="course.overview">{{ course.overview }}</div>
      <div v-else>Por el momento no hay una descripcion disponible.</div>
      <google-map name="example"/>
    </div>

  </div>
</template>

<script lang="ts">
//@ts-ignore
import AppCover from '@/components/project/AppCover'
// @ts-ignore
import AppSections from '@/components/project/AppSections'
// @ts-ignore
import { loginRequired } from '@/utils/authentication'

//@ts-ignore
import { course } from '@/queries/course'

//@ts-ignore
import GoogleMap from '@/components/GoogleMap'

import {
  Component,
  Vue
} from 'nuxt-property-decorator'

@Component({
  name: 'course',
  components: {
    AppCover,
    AppSections,
    GoogleMap
  }
})
export default class Index extends Vue {

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
  }

  head() {
    return {
      //@ts-ignore
      title: `${this.course.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          //@ts-ignore
          content: `${this.course.description}`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          //@ts-ignore
          content: `${this.$route.fullPath}`
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          //@ts-ignore
          content: `${this.course.title}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          //@ts-ignore
          content: `${this.course.description}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          //@ts-ignore
          content: `${this.course.coverImage}`
        }
      ]
    }
  }

  @loginRequired()
  join():void {
    //@ts-ignore
    analytics.track('Followed User', {
      user: 'Some user',
      course: 'Some course'
    })
  }

}
</script>

<style scoped>
.title {
  line-height: 1.19;
  margin-bottom: 1em;
}
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

.content-container{
  background: hsl(217, 32%, 15%);
  padding: 1em;
  border-radius: 10px;
}
</style>
