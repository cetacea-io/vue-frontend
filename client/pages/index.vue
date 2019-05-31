<template>
  <div class="main">

    <FeaturedProject
      :list="cover_list"
    />
    <!-- <div 
      style="width: 100%;height: 50vh;padding: 9% 4%;max-width: 56%;">

      <h1 class="subtitle"> <span class="type">TALLER</span> • TECNOLOGIA </h1>
      <h2 class="title">
        Arma tu propio visor de realidad virtual analogico y digital
      </h2>

      <div class="author-wrapper">
        <div>Por</div>
        <div class="author-title">Escuela Adolfo Prieto</div>
      </div>

      <div style="display: flex;">
        <div 
          style="background: #fff;color: #000;padding: 11px 20px;border-radius: 5px;display: inline-block;">
          Me interesa
        </div>
        <div class="meta">
          <div class="icon">
            <i class="far fa-heart"/>
            <strong class="icon-text">124</strong>
          </div>
          <div class="icon">
            <i class="far fa-eye"/>
            <strong class="icon-text">341</strong>
          </div>
        </div>
      </div>

    </div> -->

    <!-- <div class="cover-image">

      <div class="cover-curtain" />

    </div> -->

    <!-- <div class="tag-container">
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
    </div> -->

    <!-- <div class="container"> -->
    <component
      v-for="(component, index) in projectsContent"
      :key="index"
      :is="component.type"
      v-bind="component.properties"/>

    <component
      v-for="(component, index) in content"
      :key="index"
      :is="component.type"
      v-bind="component.properties"/>
    <!-- </div> -->

    <Loader v-if="isLoading"/>

    <p 
      v-show="endOfContent"
      style="
      text-align: center;
      font-size: 1.28em;
      margin-top: 50px;
      color: #969696;">
      No encontraste lo que buscabas?
    </p>

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
import Loader from '@/components/Loader'
import AppCarrousel from '@/components/AppCarrousel'
import AppProjectCard from '@/components/AppProjectCard'
import FeaturedProject from '@/components/FeaturedProject'
import gql from 'graphql-tag'

import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData ({store, error, app, params}) {
    await store.dispatch('dashboard/poblate_categories')

    let cover_item = await app.apolloProvider.defaultClient.query({
      query: gql`
        query {
          cover {
            id
            title
            author
            image
            classification
            area
          }
        }
      `,
      error(error) {
        resolve(error)
      }
    })

    let cover_list = []

    cover_list.push(cover_item.data.cover)

    return {
      enabled: app.$optimizely.isFeatureEnabled('show_projects', 'bob'),
      cover_list: cover_list,
    }
  },
  components: {
    Loader,
    AppCarrousel,
    AppProjectCard,
    FeaturedProject
  },
  data(){ 
    return {
      endOfContent: false,
      isLoading: false,
      content: [],
      projectsContent: [],
      iterator: 0
    }
  },
  computed: {
    ...mapGetters({
      storeCategories: 'dashboard/categories'
    }),
    categories() {
      return this.storeCategories.slice(0, 10)
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  async beforeCreate(){
    this.iterator = 0

    //Just projects
    let newProjectContent = await this.$store.dispatch('dashboard/loadAllProjects')
    this.projectsContent.push(newProjectContent)

    // Now courses
    for (let i = 0; i <= 5; i++){
      let newContent = await this.$store.dispatch('dashboard/loadContent', this.iterator)
      this.content.push(newContent)
      this.iterator = this.iterator + 1
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({
      loadContent: 'dashboard/loadContent',
    }),
    async applyContent(){
      this.isLoading = true
      let newContent = await this.loadContent(this.iterator)
      if ( newContent != null){
        this.content.push(newContent)
        this.iterator = this.iterator + 1
      }
      else {
        window.removeEventListener('scroll', this.handleScroll)
        this.endOfContent = true
      }
      this.isLoading = false
    },
    async handleScroll() {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        for (let i = 0; i <= 5; i++){
          await this.applyContent()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.1em;
}

.subtitle {
  font-size: 1.2em;
  .type {
    display: inline-block;
    background: #ff0182;
    // background: hsl(338, 100%, 50%)
    padding: 1px 9px;
  }
}

.meta {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.author-wrapper {
  display: flex;
  align-items: center;
  margin: 10px 0 20px;

  .author-avatar {
    background-image: url(https://instagram.fntr3-1.fna.fbcdn.net/vp/a672a7d08523e1a0e8ffa10a77054fec/5D2E14A4/t51.2885-19/10844109_959694924073085_730837776_a.jpg?_nc_ht=instagram.fntr3-1.fna.fbcdn.net);
    width: 29px;
    height: 29px;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
    border: 2px solid #000;
    box-shadow: 0 0 0 2px #67686f;
  }

  .author-title {
    margin-left: 10px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: #dedede;
    font-size: 14px;
  }
}

.cover-image {
  background: url(https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80);
  height: 80vh;
  width: 64%;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.cover-curtain {
  width: 20%;
  height: 100%;
  background: linear-gradient(to right, #000, #0000);
}

</style>


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
