<template>
  <div>

    <div class="container">
      <featured-project/>
    </div>


    <div
      class="container"
      style="text-align: center;">
      <search-box/>
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
              :author-image="item.author.profilePicture"
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
        <ItemsCarrousel
          :title="course.title"
          :items="course.items"/>

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
import FeaturedProject from '@/components/FeaturedProject'
import ItemsCarrousel from '@/components/ItemsCarrousel'
import SearchBox from '@/components/SearchBox'

import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData ({store, error, app, params}) {
    let projectsillos = []

    return {
      enabled: app.$optimizely.isFeatureEnabled('show_projects', 'bob'),
      projects: projectsillos,
    }
  },
  async fetch({store}){
    await store.dispatch('courses/poblate_courses')
  },
  components: {
    FeaturedProject,
    ItemsCarrousel,
    SearchBox
  },
  data(){
    return{
      
    }
  },
  computed: {
    ...mapGetters({
      courses: 'courses/courses'
    })
  },
  mounted() {
    this.scroll()
  },
  destroyed() {
    
  },
  methods: {
    ...mapActions({
      add: 'courses/poblate_courses',
      loadCourses: 'courses/load_courses'
    }),
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.loadCourses()
        }
      }
    }
  }
}
</script>

<style scoped>

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
</style>
