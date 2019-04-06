<template>
  <div class="main">

    <!-- <div class="container">
      <featured-project/>
    </div> -->

    <!-- <div
      class="container"
      style="text-align: center;">
      <search-box/>
    </div> -->

    <div class="tag-container">
      <div class="tag-title">
        <i class="fas fa-sliders-h" />
      </div>
      <AppCarrousel>
        <div 
          v-for="(category, index) in categories"
          :key="index"
          class="tag">
          {{ category.title }}
        </div>
      </AppCarrousel>
    </div>

    <div class="container">
      <component
        v-for="(component, index) in content"
        :key="index"
        :is="component.type"
        v-bind="component.properties"/>
    </div>

    <Loader v-if="isLoading"/>

    <!-- <AppProjectCard
      v-bind="event"
    /> -->

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
import AppProjectCard from '@/components/AppProjectCard'

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
    AppCarrousel,
    AppProjectCard
  },
  data(){ 
    return {
      content: [],
      isLoading: false,
      categories: [
        {title: 'Blues'},
        {title: 'Zappa'},
        {title: 'EDM'},
        {title: 'Chango'},
        {title: 'changa'},
      ],
      event: {
        image: "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/19260392_780388468809321_8919585700069935588_n.png?_nc_cat=110&_nc_ht=scontent.fntr3-1.fna&oh=2ecb2aee139efc9b43f79adfc0fc2f59&oe=5D037DB4",
        title: "Did Procreate change illustration?",
        category: "`cursos`",
        authorImage: "item.author.profilePicture",
        date: "item.author.title",
        route: "`/course/${item.id}`",
        type: "nuxt-link"
      }
    }
  },
  computed: {
  },
  // middleware: ['isAuthenticated'],
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted(){
    for (let i = 0; i <= 5; i++){
      this.applyContent()
    }
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
    background: transparent;
    color: rgb(0, 153, 255);
    padding: 7px 23px;
    border-radius: 5px;
    margin: 5px;
    // border: 1px solid rgb(117, 117, 117);
  }
  .tag{
    background: transparent;
    color: rgb(117, 117, 117);
    padding: 7px 23px;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid rgb(117, 117, 117);
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
