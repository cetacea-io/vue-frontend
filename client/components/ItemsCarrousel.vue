<template>
  <div>

    <div class="head-section">
      <div>
        <div class="section-title">
          {{ title }}
        </div>
        <div class="section-description">
          {{ description }}
        </div>
      </div>

      <div class="star">
        <i class="fas fa-star"/>
      </div>

    </div>

    <!-- <no-ssr> -->
    <AppCarrousel 
      class="scrolling-wrapper">
      <component
        v-for="(item, index) in items"
        :is="actualComponent(item.tipo)"
        :key="index"
        v-bind="item"
        type="nuxt-link"
        class="mini"
      />
    </AppCarrousel>
    <!-- </no-ssr> -->
  </div>
</template>

<script>
import AppCarrousel from '@/components/AppCarrousel'
import AppEventCard from '@/components/AppEventCard'
import AppProjectCard from '@/components/AppProjectCard'
import AppCourseCard from '@/components/AppCourseCard'

export default {
  components: {
    AppCarrousel,
    AppEventCard,
    AppProjectCard,
    AppCourseCard
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      //
    }
  },
  methods:{
    actualComponent (type) {
      if (type == 'CourseType') {
        return 'AppCourseCard'
      } else if (type == 'ProjectType') {
        return 'AppProjectCard'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.head-section {
  // border-top: solid 1px rgb(107, 107, 107);
  margin: 26px 11px 15px;
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
  background-color: #4a4a4a;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9c9c9c;
}

.mini{
  // width: 252px;
  @media only screen and (min-width: 960px) {
    width: 43%;
    height: 344px;
  }
  @media only screen and (min-width: 1024px) {
    width: 34%;
    height: 344px;
  }
  width: 85%;
  height: 271px;
  margin: 0 5px;
}
</style>
