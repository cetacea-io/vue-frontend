<template>
  <div class="container">
    <AppCover :image="project.coverImage"/>

    <!-- <portal to="des">
      <p>
        This slot content will be rendered wherever the with name 'destination' is located.
      </p>
    </portal> -->

    <div class="temp">
      <h1 
        class="title">
        {{ project.title }}
      </h1>
      <p>{{ project.quickDesc }}</p>
      <Button>Hey you</Button>
    </div>
    <div class="temp">
      <!-- <portal-target name="des" /> -->
      <p>by {{ author }}</p>
      <p>Area: {{ project.category }}</p>

      <p v-if="project.location">Locacion: {{ project.location }}</p>
      <p v-else>No se requiere ubicacion</p>

      <i class="fas fa-eye"/> 4541
      <i class="fas fa-heart"/> 24
      <i class="fas fa-comment-dots"/> 214
      <i class="fas fa-share-alt"/> 214
    </div>

    <!-- <p>Equipo:</p> <AppAvatarList/> -->

    <div class="buttons-wrapper">
      <!-- <AppButton :circle="true"><i class="fas fa-heart"/></AppButton>
      <AppButton :circle="true"><i class="fas fa-share-alt"/></AppButton>
      <AppButton 
        :circle="true"
        @click.native="loginRequired(showModal)">
        <i class="fas fa-donate"/>
      </AppButton>
      <AppButton :circle="true"><i class="fas fa-user-plus"/></AppButton> -->
    </div>


    <div>
      <Avatar 
        image="https://instagram.fntr3-1.fna.fbcdn.net/vp/201c98880fe189ec9d1a5e4118b40971/5C627DCD/t51.2885-15/sh0.08/e35/s640x640/26872108_174111689871975_5353072071788199936_n.jpg"
        size="small"
      />
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
import AppCover from '@/components/project/AppCover'
import AppSections from '@/components/project/AppSections'
// import AppRangeSlider from '~/components/atoms/AppRangeSlider'

// import AppCreateComment from '~/components/molecules/AppCreateComment'
// import AppCommentsList from '~/components/organisms/AppCommentsList'

// import AppFeed from '~/components/molecules/AppFeed'

// import AppPositionsList from '~/components/organisms/AppPositionsList'
// import AppAvatarList from '~/components/molecules/AppAvatarList'

// import project from '~/queries/project'
import gql from 'graphql-tag'

export default {
  // asyncData (context) {
  //   let client = context.app.apolloProvider.defaultClient
  // },
  apollo: {
    project: {
      query: gql`
        query project($id: Int!) {
          project(id: $id) {
            id
            title
            # coverImage
            # category
            # location
            # overview
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
      prefetch: ({ route }) => {
        return {
          id: 1
        }
      },
      variables() {
        return {
          id: 1
        }
      },
      error(error) {
        error({statusCode: 404, message: 'Page not found'})
      }
    }
  },
  components: {
    AppCover,
    AppSections
    // AppRangeSlider,
    // AppPositionsList,
    // AppAvatarList,
    // AppCreateComment,
    // AppCommentsList,
    // AppFeed
  },
  data() {
    return {
      projectSlug: null
    }
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  computed: {},
  created() {
    // console.log(this.$route.params)
  },
  methods: {
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
  border-color: hsl(217, 44%, 29%);
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
}
</style>
