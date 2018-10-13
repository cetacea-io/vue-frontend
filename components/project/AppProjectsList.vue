<template>
  <div class="container list">
    <ProjectCard
      v-for="project in projects"
      :key="parseInt(project.id)"
      :id="parseInt(project.id)"
      :route="`/project/${project.id}`"
      :image="project.coverImage"
      :title="project.title"
      :category="project.category"
      :author="project.author"
      :description="project.quickDesc"
      :location="project.location"
      :likes="project.likes"
      class="project"
    />
  </div>
</template>

<script>

export default {
  props: {
    projects: {
      type: Array,
      required: true
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
    margin: 30px 0;
  }
}
</style>
