<template>
  <div>
    <h2 
      id="subscribe"
      class="title"
    >
      Inscripciones
    </h2>


    <h1 v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</h1>
    <h1 v-else>Dirección no esh1ecificada</h1>
    <h1 v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</h1>
    <h1 v-else>Dirección no esh1ecificada</h1>
    <h1 v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</h1>
    <h1 v-else>Dirección no esh1ecificada</h1>
    <h1 v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</h1>
    <h1 v-else>Dirección no esh1ecificada</h1>
    <h1 v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</h1>
    <h1 v-else>Dirección no esh1ecificada</h1>
    <h1 v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</h1>
    <h1 v-else>Dirección no esh1ecificada</h1>


    <p v-if="course.location && course.location.text">Dirección: {{ course.location.text }}</p>
    <p v-else>Dirección no especificada</p>
    <google-map
      v-if="course.location && course.location.latitude && course.location.longitude"
      :latitude="course.location.latitude"
      :longitude="course.location.longitude"
      name="example"/>
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
