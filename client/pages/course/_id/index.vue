<template>
  <div>
    <Card class="card-wrapper">
      <h2 class="title">Descripción</h2>
      <div class="description">
        <div v-if="course.overview">
          <Markdown :content="course.overview" />
        </div>
        <div v-else>Por el momento no hay una descripción disponible.</div>
      </div>
      <h2 class="title">Fechas y Horarios</h2>
      <div class="description">
        <div v-if="course.dateAndTime && course.dateAndTime.text">
          <Markdown :content="course.dateAndTime.text" />
        </div>
        <div v-else>Por el momento no se especifican las fechas.</div>
      </div>
      <div v-if="course.instructors.length > 0">
        <h2 class="title"> Imparte </h2>
        <div
          v-for="(instructor, index) in course.instructors"
          :key="index"
          class="user-container">
          <!-- <UserSnippet
            :name="`${instructor.user.firstName} ${instructor.user.lastName}`"
            :image="instructor.profilePicture"/> -->
        </div>
      </div>
    </Card>


    <Card 
      style="padding: 0;"
      class="card-wrapper">
      <!-- <h2 class="title">Costo</h2>
      <div style="text-align:center;">
        <PriceTag 
          :amount="600"
          currency="MXN"/>
      </div>
      <Button
        :href="course.url"
        style="width: 100%;"
        target="_blank"
        type="a">
        Más información
      </Button> -->
      <section style="margin: 16px 20px 0px 20px;">

        <div class="chunk">

          <div class="sec">

            <div class="icon">
              <span class="svg svg--clock">
                <svg 
                  preserveAspectRatio="xMinYMin meet"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="svg-icon valign--middle"
                  role="img">
                  <use xlink:href="#icon-clock--small">
                    <svg
                      id="icon-clock--small"
                      viewBox="0 0 16 16"
                      width="100%"
                      height="100%">
                      <path
                        fill="#FFF"
                        d="M14.222 8A6.23 6.23 0 0 0 8 1.778 6.23 6.23 0 0 0 1.778 8 6.23 6.23 0 0 0 8 14.222 6.23 6.23 0 0 0 14.222 8M15 8a7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 7 7m-4.297 1.29a.391.391 0 0 1-.493.246l-2.333-.778a.39.39 0 0 1-.266-.37v-3.11a.389.389 0 0 1 .778 0v2.83l2.067.69a.39.39 0 0 1 .247.492" 
                        fill-rule="evenodd" />
                    </svg>
                  </use>
                </svg>
              </span>
            </div>

            <div class="desc">
              <span>Martes, 28 de Abril, 2019</span>
              <br>
            </div>

          </div>

        </div>

        <div class="chunk">

          <div class="sec">

            <div class="icon">
              <span class="svg svg--clock">
                <svg 
                  preserveAspectRatio="xMinYMin meet"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="svg-icon valign--middle"
                  role="img">
                  <use xlink:href="#icon-clock--small">
                    <svg
                      id="icon-clock--small"
                      viewBox="0 0 16 16"
                      width="100%"
                      height="100%">
                      <path
                        fill="#FFF"
                        d="M14.222 8A6.23 6.23 0 0 0 8 1.778 6.23 6.23 0 0 0 1.778 8 6.23 6.23 0 0 0 8 14.222 6.23 6.23 0 0 0 14.222 8M15 8a7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 7 7m-4.297 1.29a.391.391 0 0 1-.493.246l-2.333-.778a.39.39 0 0 1-.266-.37v-3.11a.389.389 0 0 1 .778 0v2.83l2.067.69a.39.39 0 0 1 .247.492" 
                        fill-rule="evenodd" />
                    </svg>
                  </use>
                </svg>
              </span>
            </div>

            <div class="desc">
              <span>Martes, 28 de Abril, 2019</span>
              <br>
            </div>

          </div>

        </div>

      </section>

      <div>
        <google-map
          v-if="course.location && course.location.latitude && course.location.longitude"
          :latitude="course.location.latitude"
          :longitude="course.location.longitude"
          name="example"/>
      </div>

    </Card>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import Markdown from '@/components/Markdown'

export default {
  components: {
    GoogleMap,
    Markdown,
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

