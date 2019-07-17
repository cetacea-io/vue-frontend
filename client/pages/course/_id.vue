<template>
  <div class="main-course">

    <NewCourseHeader
      :title="course.title"
      :cover-image="course.coverImage"
      :classification="course.classification.title"
      :area="course.area"
      :author-title="course.author.title"
      :author-picture="course.author.picture"
      :current-route="`/course/${course.id}`"
      :tabs="tabs"
      @call-to-action="callToAction"
    />

    <!-- <CourseHeader
      :title="course.title"
      :cover-image="course.coverImage"
      :classification="course.classification.title"
      :area="course.area"
      :author-title="course.author.title"
      :author-picture="course.author.picture"
      :current-route="`/course/${course.id}`"
      :tabs="tabs"
    >
      <a
        v-if="course.url"
        :href="course.url"
        target="_blank"
        rel="noreferrer"
        style="cursor: pointer; background: #3853ff;text-align: center;padding: 13px 0; display: block; color: #fff;"
      >
        Ver mas informacion
      </a>
    </CourseHeader> -->


    <div
      class="content-wrapper"
      style="background: #000000; padding: 20px 0;">

      <div class="container">
        <nuxt-child :course="course"/>
      </div>

    </div>


    <div>

      <ItemsCarrousel
        :items="course.recommended"
        title="similar"
      />

    </div>

  </div>
</template>

<style lang="scss">
.chunk {
  margin-bottom: 20px;
}
.sec {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  .icon {

  }

  .desc {
    margin-left: 20px;
  }
}
</style>


<script>
import courseMixin from '@/mixins/courseMixin'

import { mapActions, mapMutations } from 'vuex'

import ItemsCarrousel from '@/components/ItemsCarrousel'
import PriceTag from '@/components/PriceTag'
import CourseHeader from '@/components/course/CourseHeader'
import NewCourseHeader from '@/components/course/NewCourseHeader'

export default {
  components: {
    ItemsCarrousel,
    PriceTag,
    CourseHeader,
    NewCourseHeader,
  },
  mixins: [courseMixin],
  props: {
    url: {
      type: String,
      required: false,
      default: null
    }
  },
  data(){
    return {
      tabs: [
        {
          title: `Curso`,
          route: ``
        },
        {
          title: `Ubicacion`,
          route: `/location`
        },
        {
          title: `Inscripciones`,
          route: `/price`
        },
        {
          title: `Comentarios`,
          route: `/comments`
        }
      ]
    }
  },
  computed: {
    getFullPath(){
      return `${process.env.BASE_URL}${this.$route.fullPath}`
    },
    getTitle(){
      return this.course.title
    },
    getDescription(){
      return this.course.description
    },
  },
  methods: {
    // ...mapActions({
    //   register: 'user/register',
    // }),
    ...mapMutations({
      add: 'shopping/add_item'
    }),
    async callToAction(){
      await this.add({
        title: this.course.title,
        image: this.course.coverImage,
        price: 4.10
      })
      const userIsLoggedIn = !!this.$store.state.user.user
      if (userIsLoggedIn) {
        this.$router.push('/checkout')
      } else {
        this.$router.push('/signup')
      }
      return
    }
  }
}
</script>

<style lang="scss">
.content-wrapper {

  .section {
    margin-bottom: 60px;
  }

  .title{
    margin-bottom: 26px;
  }


  .first-row{
    @media only screen and (min-width: 960px) {
      grid-template-columns: 1fr 0.5fr;
      .card-wrapper{
        margin-right: 20px;
        &:nth-child(2){
          margin-right: 0;
        }
      }
    }
    display: grid;
    grid-template-columns: 1fr;
  }

  .card-wrapper{
    // background: #071119 !important;
    background: #000000 !important;
    margin-bottom: 20px;
  }
}
</style>


<style lang="scss" scoped>
.main-course{
  // margin-top: 50px;
  margin-bottom: 50px;
}

.title{
  margin-bottom: 10px;
}

.description{
  color: hsla(207, 11%, 66%, 1);
  margin-bottom: 20px;
}
</style>


<style lang="scss">
.content-container{
  background: hsl(217, 32%, 15%);
  padding: 1em;
  border-radius: 10px;
}


.social-share{
  @media only screen and (min-width: 960px) {
    padding: 0;
  }
  padding-top: 20px;
}
</style>
