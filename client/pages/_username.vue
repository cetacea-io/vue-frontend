<template>
  <div>
    
    <div
      v-if="account && account.__typename == 'OrganizationType'"
      class="container profile">

      <h1>{{ account.title }}</h1>

    </div>
    
    <div
      v-if="account && account.__typename == 'UserType'"
      class="container profile">

      <div class="user-wrapper">
        <div
          :style="{ 'background-image': 'url(' + account.profile.profilePicture + ')' }"
          class="avatar user-avatar"
        />

        <div class="username-wrapper">
          <div class="name-wrapper">
            <h1 class="name">
              {{ account.firstName }} {{ account.lastName }}
            </h1>
            <div
              v-if="true"
              style="
                z-index: 1;
                background: #ffffff;
                width: 19px;
                height: 19px;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4px;
                margin-left: 7px;
              ">
              <div class="check-icon"/>
            </div>
          </div>
          <h2>@{{ account.username }}</h2>
        </div>
      </div>

      <div class="bio">
        {{ account.profile.bio }}
        <!-- <div v-if="user.id == $store.getters['authentication/actualUser'].id"> -->
        <!-- {{ user.id }} {{ $store.getters['authentication/actualUser'].id }} -->
        <!-- </div> -->
      </div>

      <!-- <div class="card-wrapper">
        <div
          style="
          border: 1px solid #2a3240;
          border-left: 0;
          border-right: 0;
          display: flex;
          justify-content: space-around;
        ">
          <div>
            <div
              style="
              font-size: 1.5em;
              font-weight: 600;">
              1,020
            </div>
            <div>Posts</div>
          </div>

          <div>
            <div>1,020</div>
            <div>Posts</div>
          </div>
          <div>
            <div>1,020</div>
            <div>Posts</div>
          </div>

        </div>   
      </div> -->

      <!-- <Card class="card-wrapper">

        <h2>Intereses</h2>

        <Tag 
          v-for="interest in account.profile.interests"
          :key="interest.id">
          {{ interest.title }}
        </Tag>

        <h2>Habilidades</h2>

        <Tag 
          v-for="interest in interests"
          :key="interest">
          {{ interest }}
        </Tag>
      </Card> -->

      <Card class="card-wrapper">

        <SecondNavbar
          style="background: #000;">
          <div class="container custom-header">
            <div
              style="
              height: 100%;
              display: flex;
              width: 100%;
              justify-content: space-around;
              align-items: center;">
              
              
              <nuxt-link
                v-for="(tab, index) in tabs"
                :key="index"
                :to="`${currentRoute}${tab.route}`"
                class="tab"
                exact
              >
                {{ tab.title }}
              </nuxt-link>
        
            </div>
          </div>
        </SecondNavbar>

        <div class="portfolio-grid">

          <div
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/67841297_10162080819655613_5108916920610979840_n.jpg?_nc_cat=105&_nc_oc=AQmV6RcUlLBtCQZV-C9ihDBUWVtlN_pYZT6dk1aCaYp__tqM5iginLQT3_y8Hb7-VSk&_nc_ht=scontent.fntr3-1.fna&oh=995a21422da182de368f153c58a143d8&oe=5DCDD9E7' + ')' }"
            class="portfolio-item">
            <!-- <div class="portfolio-meta">
              Musica
            </div> -->
          </div>
          <div
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/67782900_10162066773935613_5485907726556987392_n.jpg?_nc_cat=100&_nc_oc=AQlokxGv_dXglDF7g6m6r7g4qZHpeCeoB8rR7h1RWeTokKdTQl-fd1kBpOIIm0RcCF4&_nc_ht=scontent.fntr3-1.fna&oh=2fb5658ba4960392059a7475411da4eb&oe=5DD45FF1' + ')' }"
            class="portfolio-item">
            <!-- <div class="portfolio-meta">
              Teatro
            </div> -->
          </div>
          <div
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/67830130_10162084714515613_950948777726836736_n.jpg?_nc_cat=109&_nc_oc=AQlFWy7WrNC_DkF4naS7iHWbHmzIHLo4c8kx6SKkytFt7SsPM1mCmvc7oIVCHyw3Wy8&_nc_ht=scontent.fntr3-1.fna&oh=44f4cc11af0dce79de9efb364b217500&oe=5DD33933' + ')' }"
            class="portfolio-item">
            <!-- <div class="portfolio-meta">
              Musica
            </div> -->
          </div>
          <div
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/67936999_10162084714940613_3569974763440832512_n.jpg?_nc_cat=101&_nc_oc=AQk8x4l1OvUc1PRztbM8cIdy7bTIHuIxOI3aqrvyvplZnzEa7Q-joklzqn9YPE_61Aw&_nc_ht=scontent.fntr3-1.fna&oh=6d3607b11d38f6a0659cf985bf1f501e&oe=5DA061A9' + ')' }"
            class="portfolio-item">
            <!-- <div class="portfolio-meta">
              4 +
            </div> -->
          </div>

        </div>

        <AppPortfolioItem
          thumbnail="http://www.ivancdg.com/images/etudeno1_videostill_stefan_botez_2017.jpg"
          title="Musica" />

      </Card>

      <Card class="card-wrapper">

        <h2>Educacion</h2>

        <div class="education-card">
          <div
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/20375765_1250887728354228_2158041739831476769_n.png?_nc_cat=101&_nc_oc=AQndL6YFdeBtRNw8hjgbQUgMX7V9yc04YSigTJpvBp5RqKFlDeUAC_-wUoI_Wa0VJi8&_nc_ht=scontent.fntr3-1.fna&oh=27023b7bc60ac65bdb8447003ade5241&oe=5DD62363' + ')' }"
            class="education-avatar" />
          <div class="education-content">
            <div class="education-title">El cuerpo poiético</div>
            <div class="education-subtitle">ISEM Cultura</div>
            <div class="education-meta">2017</div>
          </div>
        </div>

        <div class="education-card">
          <div 
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/42592091_10155915956356909_8284350585172393984_n.png?_nc_cat=108&_nc_oc=AQkai97_1UwHYodJ1GdgGgoIwIAsP4vCpVacbdNjl0Y2NDNOrOjQ6nPcYyC2vj_-50M&_nc_ht=scontent.fntr3-1.fna&oh=d829103336475b4febc0ee1f62e70fec&oe=5DDBF13A' + ')' }"
            class="education-avatar" />
          <div class="education-content">
            <div class="education-title">Laboratorio de Improvisación</div>
            <div class="education-subtitle">Foro Arcadia</div>
            <div class="education-meta">2017</div>
          </div>
        </div>

        <div class="education-card">
          <div 
            :style="{ 'background-image': 'url(' + 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/21558892_10159350347715613_8547834712861897935_n.png?_nc_cat=109&_nc_oc=AQkY3FKjUancB8SSq0wdF0GH3SF5I2Hf80eT2ctAEGPsu4wRYvWW-T97jSgpsY-yEHk&_nc_ht=scontent.fntr3-1.fna&oh=bacd8162bc0f1323a6af03129583f25c&oe=5DE503F1' + ')' }"
            class="education-avatar" />
          <div class="education-content">
            <div class="education-title">Introducción a la actuación</div>
            <div class="education-subtitle">Foro Arcadia</div>
            <div class="education-meta">2017</div>
          </div>
        </div>

        <!-- <AppEducationCertificateList :certificates="account.certificates"/> -->

      </Card>

      <Card class="card-wrapper">
        <h2>Colaboraciones</h2>
        
        <ItemsProjectsCarrousel
          :items="projects"
          title="Contribucions"/>
      </Card>

    </div>


  </div>
</template>

<script>
import { account } from '@/graphql/queries/account'
import { user } from '@/graphql/queries/user/user'
import gql from 'graphql-tag'

// import AppPortfolioItem from '~/components/molecules/AppPortfolioItem'
// import AppEducationCertificateList from '~/components/organisms/AppEducationCertificateList'
import ItemsProjectsCarrousel from '@/components/ItemsProjectsCarrousel'
import AppProjectsList from '@/components/project/AppProjectsList'
import AppCarrousel from '@/components/AppCarrousel'

import { mapGetters } from 'vuex'

import SecondNavbar from '@/components/layout/SecondNavbar'

export default {
  components: {
    // AppPortfolioItem,
    // AppEducationCertificateList,
    ItemsProjectsCarrousel,
    AppProjectsList,
    AppCarrousel,
    SecondNavbar
  },
  data() {
    return {
      list: null,
      isModalVisible: false,
      links: '',
      interests: ['Piano', 'Musica', 'Teatro'],
      tabs: [
        {
          title: `General`,
          route: ``,
        },
        {
          title: `Actuacion`,
          route: `/actuacion`,
        },
        {
          title: `Musica`,
          route: `/musica`,
        },
        {
          title: `Produccion`,
          route: `/produccion`,
        }
      ],
    }
  },
  async asyncData({error, app, params}) {
    if(params.username[0] == '@') {
      let actualUsername = params.username.substring(1)

      // try {
      //   const { data } = await app.apolloProvider.defaultClient.query({
      //     query: account,
      //     variables: { username: actualUsername }
      //   })

      //   return { account: data.account }
      // } catch(err) {

      //   error({statusCode: 404, message: 'Not found'})
      // }

      try {
        const { data } = await app.apolloProvider.defaultClient.query({
          query: gql`
            #import "../queries/fragments/userProfile.gql"
            #import "../queries/fragments/organizationProfile.gql"
            query account($username: String!) {
              account(username: $username) {
                __typename
                ...on UserType {
                  id
                  firstName
                  lastName
                  username
                  profile {
                    profilePicture
                    bio
                    interests {
                      id
                      title
                    }
                    coursesTaught {
                      title
                    }
                    # projectsCreated {
                    #   id
                    #   title
                    #   coverImage
                    #   category
                    #   author {
                    #     id
                    #     profilePicture
                    #     user {
                    #       username
                    #       firstName
                    #       lastName
                    #     }
                    #   }
                    #   location
                    #   creationDate
                    #   quickDesc
                    # }
                  }
                }
                ...on OrganizationType {
                  id
                  title
                  username
                }
              }
            }
          `,
          variables: { username: actualUsername }
        })

        return { account: data.account }
      } catch(err) {

        error({statusCode: 404, message: 'Not found'})
      }

    }
    else  { error({statusCode: 404, message: 'Not found'}) } 
  },
  computed: {
    ...mapGetters({
      courses: 'courses/courses'
    }),
    currentRoute() {
      return this.$route.path
    },
    projects() {
      return [
        {
          title: 'En la soledad de los campos de algodon',
          coverImage: `http://conarte.org.mx/wp-content/uploads/2019/07/Foto-Last-Man-Standing-por-Gabriel-Morales-INBA-CITRU_0454.jpg`,
          category: 'Obra de teatro',
          time: 'Hace 1 mes',
          userImage: this.account.profile.profilePicture,
          skills: 'Actor, Productor Musical, Escenografo'
        },
        {
          title: 'El tiempo esta muerto',
          coverImage: `https://imgs-akamai.mnstatic.com/ea/99/ea99b80ddbd995d3033ad31e22860701.jpg?quality=75&format=pjpg&width=967&height=959&fit=bounds`,
          category: 'Cortometraje',
          time: 'Hace 3 meses',
          userImage: this.account.profile.profilePicture,
          skills: 'Actor, Fotografo'
        },
        {
          title: 'El clarín con su bélico acento',
          coverImage: `https://media.istockphoto.com/photos/government-house-picture-id539847922?k=6&m=539847922&s=612x612&w=0&h=vWCoo_VCWGYRXcP8-EtCglM7E5CZJXWVb-3EiAPQv-8=`,
          category: 'Cortometraje',
          time: 'Hace 5 meses',
          userImage: this.account.profile.profilePicture,
          skills: 'Narrador, Audio'
        },
      ]
    }
  },
  mounted() {
    // console.log(this.$apollo.queries.user)
  },
  methods: {
  }
}
</script>

<style scoped>
.avatar{
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 100%;
  position: relative;
}

.check-icon{
  mask-image: url('~assets/img/verify-sign.svg');
  mask-size: cover;
  background-color: #000;
  height: 100%;
  width: 100%;
  border-radius: 500px;
}

.user-avatar{
  height: 177px !important;
  width: 177px !important;
  margin: 0 auto;
}

.bio{
  color: #d0d0d0;
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
}

.card-wrapper{
  margin: 20px;
  background-color: #000;
}

.portfolio-grid {
  margin-top: 30px;
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
  background: transparent;
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
        display: inline-flex;
        padding-top: 20px;
        .name {
          display: inline-block;
          font-size: 2.8em;
          margin: 0;
          line-height: 0.8;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.custom-header {
  // position: fixed;
  // bottom: 0;
  background-color:#000;

  // @media only screen and (min-width: 960px) {
  //   padding: 1em;
  //   flex-flow: row;
  //   align-items: start;
  //   top: 0;
  //   position: sticky;
  // }
  display: grid;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 60px;
  grid-template-columns: 1fr auto;
  overflow-x: scroll;
  overflow-y: unset;
  @media only screen and (min-width: 960px) {
    overflow: unset;
  }
}

.tab {
  height: 100%;
  display: flex;
  align-items: center;
  color: #8a8a8a;
  width: 100%;
  justify-content: center;
  min-width: 158px;
  position: relative;
  font-size: 15px;
}

.nuxt-link-active {
  color: #fff !important;

  &:after{
    content: '';
    background: #fff;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    position: absolute;
    bottom: 0px;
  }
}
</style>

<style lang="scss" scoped>
.education-card {
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  .education-avatar {
    width: 100px;
    height: 100px;
    background-size: cover;
    border-radius: 100%;
  }

  .education-content {
    margin-left: 20px;

    .education-title {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    .education-subtitle {
      color: #8c8c8c;
      font-size: 15px;
    }
    .education-meta {

    }
  }
}
</style>
