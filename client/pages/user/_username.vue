<template>
  <div class="container profile">

    <div class="user-wrapper">
      <Avatar
        :image="user.picture"
        class="user-avatar" />

      <div class="username-wrapper">
        <div class="name-wrapper">
          <h1 class="name">
            {{ user.firstName }} {{ user.lastName }}
          </h1>
          <i
            v-if="user.verified"
            class="badge fas fa-check-circle"/>
        </div>
        <h2>@{{ user.username }}</h2>
      </div>
    </div>

    <div class="bio">
      {{ user.bio }}
      <!-- <div v-if="user.id == $store.getters['auth/actualUser'].id"> -->
      <!-- {{ user.id }} {{ $store.getters['auth/actualUser'].id }} -->
      <!-- </div> -->
    </div>

    <Card class="card-wrapper">

      <h2>Intereses</h2>

      <Tag 
        v-for="interest in interests"
        :key="interest">
        {{ interest }}
      </Tag>

      <h2>Habilidades</h2>

      <Tag 
        v-for="interest in interests"
        :key="interest">
        {{ interest }}
      </Tag>
    </Card>

    <Card class="card-wrapper">
      <h1>Portafolio</h1>

      <div class="portfolio-grid">

        <div class="portfolio-item">
          <div class="portfolio-meta">
            Musica
          </div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-meta">
            Teatro
          </div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-meta">
            Musica
          </div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-meta">
            4 +
          </div>
        </div>

      </div>

      <AppPortfolioItem
        thumbnail="http://www.ivancdg.com/images/etudeno1_videostill_stefan_botez_2017.jpg"
        title="Musica" />

    </Card>

    <!-- <div class="education">

      <h2>Educacion</h2>

      <AppEducationCertificateList :certificates="user.certificates"/>

    </div> -->


    <div class="created"/>

    <Card class="card-wrapper">
      <h1>Colaboraciones</h1>
      <!-- <AppProjectsList :projects="user.projects"/> -->
      <div 
        v-for="(course, index) in courses"
        :key="index">
        <no-ssr>
          <AppCarrousel 
            class="scrolling-wrapper">
            <MiniProjectCard
              v-for="(item, index) in course.items"
              :key="index"
              :image="item.coverImage"
              :title="item.title"
              :category="item.category"
              :author-image="item.creatorImage"
              :date="shortTimestamp(item.startDate)"
              :route="`course/${item.id}`"
              type="nuxt-link"
              class="mini"
            />
          </AppCarrousel>
        </no-ssr>

      </div>
    </Card>

  </div>
</template>

<script>
// import { ALL_LINKS_QUERY } from '~/queries/graphql'

import gql from 'graphql-tag'

// import AppPortfolioItem from '~/components/molecules/AppPortfolioItem'
// import AppEducationCertificateList from '~/components/organisms/AppEducationCertificateList'

import AppProjectsList from '@/components/project/AppProjectsList'
import AppCarrousel from '@/components/AppCarrousel'

import { mapGetters } from 'vuex'

export default {
  components: {
    // AppPortfolioItem,
    // AppEducationCertificateList,
    AppProjectsList,
    AppCarrousel
  },
  data() {
    return {
      list: null,
      isModalVisible: false,
      links: '',
      interests: ['Piano', 'Musica', 'Teatro']
    }
  },
  async asyncData({error, app, params}) {
    const user = await app.apolloProvider.defaultClient.query({
      query: gql`
        query user($username: String!) {
          user(username: $username) {
            id
            firstName
            lastName
            username
            picture
            bio
          }
        }
      `,
      variables: { username: params.username }
    })
    .then(({data}) => data && data.user)
    if(!user) {
      return error({statusCode: 404, message: 'Not found'})
    }
    return {user}
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    ...mapGetters({
      courses: 'courses/courses'
    })
  },
  mounted() {
    // console.log(this.$apollo.queries.user)
  },
  methods: {
  }
}
</script>

<style scoped>
.card-wrapper{
  margin: 20px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.portfolio-item {
  background: url('https://media.timeout.com/images/101571301/660/370/image.jpg');
  background-size: cover;
  background-position: center;
  height: 200px;
  position: relative;
  border-radius: var(--custom-border-radius);
}

.portfolio-meta {
  background: #6772bd;
  position: absolute;
  bottom: 0;
  width: 100%;

  border-bottom-left-radius: var(--custom-border-radius);
  border-bottom-right-radius: var(--custom-border-radius);

  padding: 0.5em 1em;
}
</style>


<style lang="scss" scoped>
.profile {
  .user-wrapper {
    display: grid;
    justify-content: center;

    .user-avatar {
      height: 200px !important;
      width: 200px !important;
      margin: 0 auto;
    }

    .username-wrapper {
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      font-size: 0.88em;

      .name-wrapper {
        display: inline-block;
        .name {
          display: inline-block;
          font-size: 2.8em;
          margin: 0;
        }
        .badge {
          background-color: #fff;
          border-radius: 100%;
          color: rgb(30, 152, 241);
          font-size: 25px;

          margin-left: 15px;
        }
      }
    }
  }
}
</style>
