<template>
  <div>
    <!-- <no-ssr> -->
    <div class="grid-wrapper">
      <component
        v-for="(item, index) in items"
        :is="actualComponent(item.tipo)"
        :key="index"
        v-bind="item"
        type="nuxt-link"
        class="mini"
      />
    </div>
    <!-- </no-ssr> -->
  </div>
</template>

<script>
import AppEventCard from '@/components/AppEventCard'
import AppProjectCard from '@/components/AppProjectCard'
import AppCourseInline from '@/components/AppCourseInline'

export default {
  components: {
    AppEventCard,
    AppProjectCard,
    AppCourseInline
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
  },
  methods: {
    actualComponent (type) {
      if (type == 'CourseType') {
        return 'AppCourseInline'
      } else if (type == 'ProjectType') {
        return 'AppProjectCard'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  // margin: 0 10%;
  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
}

.mini{
  // width: 252px;
  width: 100%;
}
</style>
