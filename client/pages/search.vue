<template>
  <div>

    <h1>BUSCADOR</h1>
    <p>{{ query }}</p>
    <div class="featured">
      <h1>Projecto destacado</h1>
      <div
        style="
        display:flex;
        flex-wrap: nowrap;
        justify-content: center;
        ">
        <m-k-t-project
          :contributors="['https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg']"
          title="Los cuentos posmodernos"
          image="https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/38391254_2136342736612921_3255655471737995264_n.jpg?_nc_cat=111&_nc_ht=scontent.fntr3-1.fna&oh=d3147d38d80597827ff6804e2a70b3ee&oe=5CD14760"/>
        <div
          style="
          display:inline-block;
          max-width: 400px;
          margin-left: 50px;
          ">
          <h2>Los cuentos posmodernos</h2>
          <h4
            style="
            font-size: 15px;
            font-weight: 200;
            color: #ccc;
            ">
            La infancia, con esa caracteristica teatral de desvanecerse
            mostrando la fragilidad de la existencia se nos acomoda sobre
            lo no dicho. Hablar sin involucrar a otros. La potencia de detener
            a tiempo lo vivido y revolcarnos frente a nuestros fracasos,
            expectativas y esa vaga idea que tenemos de lo que significa un
            abismo.
          </h4>

          <div class="temp meta">

            <Avatar 
              image="https://s3.us-east-2.amazonaws.com/temporarycetacea/juegos1.png"
              size="small"
            />
            <div class="desc">
              <div>Ivan Castellanos</div>
              <div class="date">{{ shortTimestamp(`hola`) }}</div>
            </div>
            <Button 
              size="small"
              @click.native="join" >
              Seguir
            </Button>

          </div>

        </div>
      </div>
    </div>



    <div style="margin: 30px 0;">
      <input 
        class="box"
        placeholder="Que te interesa?" 
        type="text">
    </div>



    <div 
      v-if="true"
      class="section">
      <div class="head-title">
        Proyectos destacados
      </div>

      <div
        v-for="(project, index) in projects"
        :key="index">
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
              v-for="(item, index) in project.items"
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


    </div>



    <div class="section">
      <div class="head-title">
        Talleres destacados
      </div>

      <div 
        v-for="(course, index) in courses"
        :key="index">
        <div class="head-section">

          <div>
            <div class="section-title">
              {{ course.title }}
            </div>
            <div class="section-description">
              Los talleres más destacados de {{ course.title }}
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

    </div>

    <Button
      size="large"
      type="button"
      @click.native="add">
      Ver mas
    </Button>


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
import AppProjectsList from '@/components/project/AppProjectsList'
import TheHeader from '@/components/layout/TheHeader'
import AppCarrousel from '@/components/AppCarrousel'

import MKTProject from '@/components/marketing/MKTProject'

import { mapGetters, mapActions } from 'vuex';

export default {
  async asyncData ({store, error, app, params, query}) {
    return {
      query: query.q
    }
  },
  async fetch({store}){
    // await store.dispatch('courses/poblate_courses')
  },
  components: {
    AppProjectsList,
    TheHeader,
    AppCarrousel,
    MKTProject
  },
  computed: {
    ...mapGetters({
      courses: 'courses/courses'
    })
  },
  mounted() {
    // this.scroll()
  },
  methods: {
    ...mapActions({
      add: 'courses/poblate_courses'
    }),
    // scroll() {
    //   window.onscroll = () => {
    //     let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

    //     if (bottomOfWindow) {
    //       this.add()
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
.box{
  vertical-align: middle;
  display: inline-block;
  width: 295px;
  padding: 25px;
  font-size: 16px;
  color: #444;
  margin-right: 10px;
  border: 1px solid transparent;
  -webkit-transition: border-color 250ms ease, padding 250ms ease;
  transition: border-color 250ms ease, padding 250ms ease;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  font-family: 'Soleil';
}
</style>


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


<style scoped>
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
