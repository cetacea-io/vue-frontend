<template>
  <div class="container list">
    <nuxt-link 
      v-for="project in projects"
      :key="parseInt(project.id)"
      :to="`/project/${project.id}/`">
      <ProjectCard
        :id="parseInt(project.id)"
        :route="`/project/${project.id}`"
        :image="project.coverImage"
        :title="project.title"
        :category="project.category"
        :author="project.author"
        :description="project.quickDesc"
        :location="project.location"
        :likes="project.likes"

        :author-title="authorTitle"
        :author-image="authorImage"
        :contributors-images="contributorsImages"
        :contributors-extras="contributorsExtras"
        :date="date"

        class="project"
      />
    </nuxt-link>
  </div>
</template>

<script>

export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    authorTitle: {
      type: String,
      required: true
    },
    authorImage: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    contributorsImages: {
      type: Array,
      required: false,
      default: null
    },
    contributorsExtras: {
      type: Number,
      required: false,
      default: null
    }
  },
  data() {
    return {
      images: {}
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  & * {
    /* flex: 1 40%; */
    flex: 1 100%;
    align-self: stretch;
  }

  & .project {

  }
}
</style>
