<template>
  <div class="main-course">

    <CourseHeader
      :title="course.title"
      :cover-image="course.coverImage"
      :classification="course.classification.title"
      :area="course.area"
      :author-title="course.author.title"
      :author-picture="course.author.profilePicture"
      :current-route="`/course/${course.id}`"
      :tabs="tabs"
    />



    <div style="background: #071119; padding: 20px 0;">

      <div class="container">
        <div class="first-row">
          
          <nuxt-child :course="course"/>

        </div>
      </div>

    </div>


    <div>

      <ItemsCarrousel
        :items="course.recommended"
        title="similar"/>

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

import { mapActions } from 'vuex'

import ItemsCarrousel from '@/components/ItemsCarrousel'
import PriceTag from '@/components/PriceTag'
import CourseHeader from '@/components/course/CourseHeader'

export default {
  components: {
    ItemsCarrousel,
    PriceTag,
    CourseHeader,
  },
  mixins: [courseMixin],
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
          title: `Costos`,
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
  }
}
</script>

<style lang="scss">
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
.user-container{
  background: #2b3c56;
  display: inline-block;
  padding: 1em;
  border-radius: 10px;
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
  background: #071119 !important;
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
