<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found 404</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
