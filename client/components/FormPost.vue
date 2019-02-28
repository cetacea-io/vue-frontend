<template>
  <div>
    <h1
      v-if="title"
      class="title">
      {{ title }}
    </h1>
    <a
      href="https://es.surveymonkey.com/r/DJSS2JM" 
      target="_blank">
      <Button 
        size="large"
        type="a">
        Cuentanos sobre ti!
      </Button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Buscas mas cursos?'
    }
  }
}
</script>

<style scoped>
.title {
  padding-bottom: 20px;
}

.section {
  padding: 50px 0px;
  border-bottom: 4px solid #101a25;
  border-top: 4px solid #101a25;
  text-align: center;
}
</style>
