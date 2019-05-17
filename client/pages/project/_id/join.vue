<template>
  <AppPositionsList :positions="project.positions"/>
</template>

<script>
import AppPositionsList from '@/components/project/AppPositionsList'

export default {
  components: {
    AppPositionsList,
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
