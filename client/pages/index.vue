<template>
  <div class="main">

    <!-- <div class="container">
      <featured-project/>
    </div> -->
    <h1>{{ $store.state.authentication.isAuthenticated }}</h1>

    <div
      class="container"
      style="text-align: center;">
      <search-box/>
    </div>

    <div class="tag-container">
      <div class="tag-title">Trending:</div>
      <AppCarrousel>
        <div class="tag">Blues</div>
        <div class="tag">Classical</div>
        <div class="tag">Country</div>
        <div class="tag">Dance</div>
        <div class="tag">Electronic</div>
        <div class="tag">HipHop</div>
        <div class="tag">Jazz</div>
        <div class="tag">Zappa</div>
        <div class="tag">Rock</div>
        <div class="tag">EDM</div>
      </AppCarrousel>
    </div>

    <component
      v-for="(component, index) in content"
      :key="index"
      :is="component.type"
      v-bind="component.properties"/>

    <Loader v-if="isLoading"/>

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
import Loader from '@/components/Loader'
import AppCarrousel from '@/components/AppCarrousel'

import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData ({store, error, app, params}) {
    await store.dispatch('dashboard/poblate_categories')

    return {
      enabled: app.$optimizely.isFeatureEnabled('show_projects', 'bob'),
    }
  },
  components: {
    FeaturedProject,
    SearchBox,
    Loader,
    AppCarrousel
  },
  data(){ 
    return {
      content: [],
      isLoading: false,
    }
  },
  computed: {
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({
      loadContent: 'dashboard/loadContent'
    }),
    async applyContent(){
      this.isLoading = true
      let newContent = await this.loadContent()
      this.content.push(newContent)
      this.isLoading = false
    },
    async handleScroll() {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        await this.applyContent()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tag-container{
  // display: inline-flex;
  // align-items: center;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;

  .tag-title {
    margin-right: 10px;
  }
  .tag{
    background: #444;
    padding: 7px 23px;
    border-radius: 5px;
    margin: 5px;
  }
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

.main {
  margin-bottom: 100px;
}
</style>
