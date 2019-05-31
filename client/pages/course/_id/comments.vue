<template>
  <div>
    <h2 class="title">Comentarios</h2>
    <p>No hay comentarios</p>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'

export default {
  components: {
    GoogleMap,
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>
