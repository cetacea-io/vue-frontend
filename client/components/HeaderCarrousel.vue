<template>
  <div>

    <div class="head-section">
      <div>
        <div class="section-title">
          {{ title }}
        </div>
        <div class="section-description">
          Los talleres más destacados de {{ title }}
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
        :is="MiniProjectCard"
        :key="index"
        :image="item.coverImage"
        :title="item.title"
        category="`cursos`"
        author-image="item.author.profilePicture"
        date=""
        route="`/course/${item.id}`"
        type="nuxt-link"
        class="mini"
      />
    </AppCarrousel>
    <!-- </no-ssr> -->
  </div>
</template>

<script>
import AppCarrousel from '@/components/AppCarrousel'

export default {
  components: {
    AppCarrousel,
    // 'MiniProjectCard': () => import(`./MiniProjectCard`),
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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

.mini{
  // width: 252px;
  width: 80vw;
  padding: 5px;
}
</style>
