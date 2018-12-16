<template>
  <div class="container">
    <AppCover :image="project.coverImage"/>

    <div class="temp">
      <h1 
        class="title">
        {{ project.title }}
      </h1>
      <!-- <p>{{ project.quickDesc }}</p> -->
      <nuxt-link to="/register">
        <Button type="a">
          Registrate en Cetacea
        </Button>
      </nuxt-link>
    </div>
    <div class="temp">
      <p>Categoría: {{ project.category }}</p>

      <p>Fechas y Horarios: {{ project.category }}</p>

      <p v-if="project.location">Lugar: {{ project.location }}</p>
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
        image="https://s3.us-east-2.amazonaws.com/temporarycetacea/juegos1.png"
        size="small"
      />
      <div class="desc">
        <div>CONARTE</div>
        <div class="date">{{ shortTimestamp(project.creationDate) }}</div>
      </div>
      <Button 
        size="small"
        @click.native="join" >
        Seguir
      </Button>
    </div>

    <login-modal/>

  </div>
</template>

<script lang="ts">
//@ts-ignore
import AppCover from '@/components/project/AppCover'
// @ts-ignore
import AppSections from '@/components/project/AppSections'
// @ts-ignore
import LoginModal from '@/components/LoginModal'
// @ts-ignore
import { loginRequired } from '@/utils/authentication'
// import AppRangeSlider from '~/components/atoms/AppRangeSlider'

// import AppCreateComment from '~/components/molecules/AppCreateComment'
// import AppCommentsList from '~/components/organisms/AppCommentsList'

// import AppFeed from '~/components/molecules/AppFeed'

// import AppPositionsList from '~/components/organisms/AppPositionsList'

// import project from '~/queries/project'
import gql from 'graphql-tag'

import {
  Component, 
  Vue
} from 'nuxt-property-decorator'

@Component({
  name: 'project',
  components: {
    AppCover,
    AppSections,
    LoginModal
    // AppRangeSlider,
    // AppPositionsList,
    // AppAvatarList,
    // AppCreateComment,
    // AppCommentsList,
    // AppFeed
  }
})
export default class Index extends Vue {

  async asyncData ({error, app, params}) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: gql`
          query project($id: Int!) {
            project(id: $id) {
              id
              title
              coverImage
              category
              location
              creationDate
              overview
              positions {
                title
                description
                compensation
                time
                requirements
                form
              }
              # likes {
              #   id
              # }
              # comments {
              #   owner {
              #     username
              #   }
              #   content
              #   published
              #   likes {
              #     id
              #   }
              # }
            }
          }
        `,
        variables: { id: params.id }
      })
      return {project: data.project}
    } catch(err) {
      error({statusCode: 404, message: 'Not found'})
    }
  }

  head = {
    // title: `${this.project.title}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        // content: `${this.project.description}`
      },
      {
        hid: 'og:url',
        property: 'og:url',
        // content: 'actual url complete with https', PROJECT URL
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        // content: `${this.project.title}`
      },
      {
        hid: 'og:description',
        name: 'og:description',
        // content: `${this.project.description}`
      },
      {
        hid: 'og:image',
        name: 'og:image',
        // content: `${this.project.image}` //ej. https://cetacea.io/project/id/image.jpg
      }
    ]
  }

  @loginRequired()
  join():void {
    //@ts-ignore
    analytics.track('Followed User', {
      user: 'Some user',
      project: 'Some project'
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
</style>
