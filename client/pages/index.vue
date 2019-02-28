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

    <component
      v-for="(component, index) in content"
      :key="index"
      :is="component.type"
      v-bind="component.properties"/>

  <!-- <div 
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
      @click.native="applyContent">
      Ver mas
    </Button> -->

  </div>
</template>

<script>
import FeaturedProject from '@/components/FeaturedProject'
import SearchBox from '@/components/SearchBox'

import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData ({store, error, app, params}) {

    return {
      enabled: app.$optimizely.isFeatureEnabled('show_projects', 'bob'),
    }
  },
  async fetch({store}){
    //
  },
  components: {
    FeaturedProject,
    SearchBox,
  },
  data(){ 
    return {
      content: []
    }
  },
  computed: {
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.applyContent()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({
      loadContent: 'dashboard/loadContent'
    }),
    async applyContent(){
      let newContent = await this.loadContent()
      this.content.push(newContent)
    },
    handleScroll() {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.applyContent()
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
