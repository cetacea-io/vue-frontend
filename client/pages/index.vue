<template>
  <div>

    <TheHeader />


    <div 
      v-if="enabled"
      class="section">
      <div class="head-title">
        Proyectos destacados
      </div>
      <div class="head-section">

        <div>
          <div class="section-title">
            Proyectos
          </div>
          <div class="section-description">
            Los proyectos más destacados
          </div>
        </div>

        <div class="star">
          <i class="fas fa-star"/>
        </div>

      </div>
      <no-ssr>
        <AppCarrousel
          class="scrolling-wrapper">
          <MiniProjectCard
            v-for="(item, index) in projects"
            :key="index"
            :image="item.coverImage"
            :title="item.title"
            :category="item.category"
            :author-image="item.authorImage"
            :date="item.date"
            :route="`/project/${item.id}`"
            class="mini"
          />
        </AppCarrousel>
      </no-ssr>
    </div>



    <div class="section">
      <div class="head-title">
        Talleres destacados
      </div>
      <div class="head-section">

        <div>
          <div class="section-title">
            Teatro
          </div>
          <div class="section-description">
            Los talleres más destacados de Teatro
          </div>
        </div>

        <div class="star">
          <i class="fas fa-star"/>
        </div>

      </div>
      <no-ssr>
        <AppCarrousel
          class="scrolling-wrapper">
          <MiniProjectCard
            v-for="(item, index) in eduTeatro"
            :key="index"
            :image="item.coverImage"
            :title="item.title"
            :category="item.category"
            :author-image="item.creatorImage"
            :date="shortTimestamp(item.startDate)"
            :route="item.url"
            type="a"
            class="mini"
            @click="clicky"
          />
        </AppCarrousel>
      </no-ssr>
      <div class="head-section">

        <div>
          <div class="section-title">
            Cultura
          </div>
          <div class="section-description">
            Los talleres más destacados de Cultura
          </div>
        </div>

        <div class="star">
          <i class="fas fa-star"/>
        </div>

      </div>
      <no-ssr>
        <AppCarrousel 
          class="scrolling-wrapper">
          <MiniProjectCard
            v-for="(item, index) in eduGeneral"
            :key="index"
            :image="item.coverImage"
            :title="item.title"
            :category="item.category"
            :author-image="item.creatorImage"
            :date="shortTimestamp(item.startDate)"
            :route="item.url"
            type="a"
            class="mini"
          />
        </AppCarrousel>
      </no-ssr>
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

    <!-- <div style="margin: 40px 16px 0;">
      <a href="https://www.facebook.com/isemcultura/photos/a.300389383404072/1691352120974451/?type=3&theater">
        <NewsSlider
          :id="1"
          :likes="45"
          :shares="24"
          image="https://edge.cwtv-egress.top.comcast.net/image-service/CWTV/The_CW/254/596/WBITV_Marketing_WHOSE_LINE_IS_IT_ANYWAY_YR02_99_00_SHOW_202_NTSC_2997fps_4x3_7513224_a3c04c840_CWtv_1920x1080.jpg"
          title="Taller de Improv"
          category="Teatro"
          description="Conoce el mundo de la improvisación escénica. Por ISEM Cultura"
        />
      </a>
    </div> -->
    <!-- <AppIdea title="Teatro: Fantasma de la opera" author="Ivan Castellanos" date="hace 3 minutos"/> -->
    <!-- <AppProjectsList :projects="projects"/> -->
    <!-- {{ projects }} -->
    <!-- <div style="margin: 40px 16px;">
      <ProjectCard
        :id="3"
        :likes="45"
        :shares="24"
        image="https://i.redd.it/x12pys0090q11.jpg"
        title="Fountain of Salmacis: Album"
        category="Musica"
        description="Album conceptual de Rock Progresivo, inspirado en sonidos de los 80's.
          La trama relata la historia de dos astronautas perdidos en el espacio, entre el silencio
          del espacio profundo, de pronto se escucha que tocan la puerta de la nave espacial"
      />
    </div> -->


    <!-- <div 
      class="container"
      style="max-width:400px; margin-top:80px;">
      <AppProjectsList
        :projects="projects"
        :contributors-images="[
          'https://s3.us-east-2.amazonaws.com/temporarycetacea/carlosbarajas.jpeg',
          'https://s3.us-east-2.amazonaws.com/temporarycetacea/edgarzapata.png'
        ]"
        :contributors-extras="12"
        author-image="https://s3.us-east-2.amazonaws.com/temporarycetacea/juegos1.png"
        author-title="Juegos de Azar"
        date="18 de Julio"
        @click="clicky"
      />
    </div> -->

  </div>
</template>

<script>
// import AppIdea from '~/components/molecules/AppIdea'
import AppProjectsList from '@/components/project/AppProjectsList'
import TheHeader from '@/components/layout/TheHeader'
import AppCarrousel from '@/components/AppCarrousel'

import gql from 'graphql-tag'
import ALL_PROJECTS from '@/queries/allProjects.gql'
import ALL_COURSES from '@/queries/allCourses.gql'

export default {
  async asyncData ({error, app, params}) {
    return {
      enabled: app.$optimizely.isFeatureEnabled('show_projects', 'bob')
    }
  },
  components: {
    // AppIdea,
    AppProjectsList,
    TheHeader,
    AppCarrousel
  },
  apollo: {
    projects: {
      query: ALL_PROJECTS,
      prefetch: true
    },
    eduTeatro: {
      query: ALL_COURSES,
      prefetch: true,
      variables: {
        area: 'teatro'
      },
      update: result => result.courses
    },
    eduGeneral: {
      query: ALL_COURSES,
      prefetch: true,
      variables: {
        area: 'general'
      },
      update: result => result.courses
    }
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

<style>
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
