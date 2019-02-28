<template>
  <div class="landing">

    <TheHeader />

    <div class="container">
      <div class="tag">
        Me interesa el arte
      </div>
      <div class="tag">
        Me interesa la investigacion
      </div>
      <div class="tag">
        Me interesa la sociedad
      </div>
    </div>


    <div style="padding: 50px 50px;">
      <div class="container">
        <div class="hzGroup">
          <div class="left">
            <h2>Colabora en proyectos</h2>
            <p>
              Colabora en proyectos de tu interes con tus habilidades o crea tu propio proyecto
              y haz que los demas se interesen en tu idea
            </p>
          </div>
          <div class="right">
            <m-k-t-section />
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 50px 50px;">
      <div class="container">
        <projects-section />
      </div>
    </div>

    <div>
      <m-k-t-like />
    </div>

    <div style="padding: 50px 50px;">
      <m-k-t-profile-card
        :tags="[
          'Musica',
          'Piano',
          'Jazz'
        ]"
        :portfolio="[
          'https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg',
          'https://bandonthewall.org/app/uploads/2016/07/4.jpg',
          'https://images.sk-static.com/images/media/profile_images/artists/3084391/huge_avatar',
          'https://upload.wikimedia.org/wikipedia/commons/2/2c/Cory_Henry_%26_The_Funk_Apostles_Cosmopolite_2017_%28214625%29.jpg'
        ]"
        name="Cory Henry"
        skill="Músico" />
      <m-k-t-course-card
        image="https://teatrodeltemple.com/wp-content/uploads/2018/06/1971-Teatro-del-Temple-6.jpg"
        title="Heartbreaking" />

    </div>

    <div
      class="section"
      style="text-align: center; padding: 50px 0;">
      <h1 style="padding-bottom: 20px;">¿Buscas más cursos?</h1>
      <a
        href="https://es.surveymonkey.com/r/DJSS2JM" 
        target="_blank">
        <Button 
          size="large"
          type="a">
          Cuentanos sobre ti!
        </Button>
      </a>
    </div>

  </div>
</template>

<script>
// import AppIdea from '~/components/molecules/AppIdea'
import AppProjectsList from '@/components/project/AppProjectsList'
import TheHeader from '@/components/layout/TheHeader'
import AppCarrousel from '@/components/AppCarrousel'

import FacebookButton from '@/components/FacebookButton'
import GoogleButton from '@/components/GoogleButton'

import gql from 'graphql-tag'
import ALL_PROJECTS from '@/queries/allProjects.gql'
import ALL_COURSES from '@/queries/allCourses.gql'


import MKTSection from '@/components/marketing/MKTSection'
import ProjectsSection from '@/components/marketing/ProjectsSection'
import MKTLike from '@/components/marketing/MKTLike'
import MKTProfileCard from '@/components/marketing/MKTProfileCard'
import MKTCourseCard from '@/components/marketing/MKTCourseCard'


export default {
  async asyncData ({error, app, params}) {
    return {
      enabled: app.$optimizely.isFeatureEnabled('show_projects', 'bob')
    }
  },
  components: {
    // AppIdea,
    MKTSection,
    ProjectsSection,
    MKTLike,
    MKTProfileCard,
    MKTCourseCard,

    AppProjectsList,
    TheHeader,
    AppCarrousel,
    FacebookButton,
    GoogleButton
  },
  data() {
    return {
      test: [

        {
          image: "https://i.redd.it/x12pys0090q11.jpg",
          title: "Fountain of Salmacis: Album",
          category: "Musica",
          authorImage: "http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg",
          date: "6 de Junio",
          route: "/"
        },
        {
          image: "https://66.media.tumblr.com/f9255859f94a22d656ed4221ce1f7ea3/tumblr_peee0iEtV51wopx9lo1_1280.png",
          title: "Young Garter 2: Album",
          category: "Musica",
          authorImage: "http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg",
          date: "6 de Junio",
          route: "/"
        },
        {
          image: "https://cdn.dribbble.com/users/19319/screenshots/5489912/playbook_notebook_4x.jpg",
          title: "Beyond the Playbook: Album de Ilustracion",
          category: "Ilustración",
          authorImage: "http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg",
          date: "6 de Junio",
          route: "/"
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5d34e471611645.5bcb3fd3d8974.jpg",
          title: "Beyond the Playbook: Album de Ilustracion",
          category: "Musica",
          authorImage: "http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg",
          date: "6 de Junio",
          route: "/"
        },
        {
          image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75c15171257607.5bbf1b25870b5.jpg",
          title: "Beyond the Playbook: Album de Ilustracion",
          category: "Musica",
          authorImage: "http://www.ultimasnoticiasenred.com.mx/wp-content/uploads/2016/04/don-ramon.jpg",
          date: "6 de Junio",
          route: "/"
        },
      ]
      
    }
  },
  methods: {
    clicky(){
      console.log('dio click')
    }
  }
}
</script>

<style scoped lang="scss">
.tag {
  background: rgb(161, 180, 206);
  color: #000;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 50px;
  display: inline;
}
</style>


<style scoped lang="scss">
.landing {
  /* background: #22314e; */
  background: #000;
}

.hzGroup {
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column-reverse;
}

.left {
  @media only screen and (min-width: 960px) {
    width: 40%;
    text-align: right;
    max-width: auto;
  }
  width: 100%;
  text-align: center;
  max-width: 500px;
}

.right {
  @media only screen and (min-width: 960px) {
    width: 60%;
    justify-content: flex-end;
    display: flex;
    position: relative;
    margin-bottom: 0;
    max-width: auto;
  }
  margin-bottom: 450px;
  width: 100%;
  text-align: center;
  max-width: 500px;
}

.mini{
  width: 252px;
  padding: 5px;
}

.section {
  padding: 30px 16px;
  border-bottom: 4px solid #101a25;
  border-top: 4px solid #101a25;
}

.head-title{
  font-size: 1.5em;
  font-weight: 600;
  padding-bottom: 16px;
}

.head-section {
  border-top: solid 1px rgb(107, 107, 107);
  margin-top: 20px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
}

.section-title {
  font-size: 1.2em;
  font-weight: 600;
}

.section-description {
  font-size: 0.9em;
  color: rgb(201, 201, 201);
}

.star {
  align-self: center;
  background-color: #3853ff;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
