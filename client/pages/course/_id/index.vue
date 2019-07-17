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

      <section class="section">
        <h2 class="title">Fechas y Horarios</h2>
        <div class="description">
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
                <span>Martes, 28 de Abril — 17:00 a 19:00</span>
                <br>
              </div>

            </div>

          </div>
          <div v-if="course.dateAndTime && course.dateAndTime.text">
            <Markdown :content="course.dateAndTime.text" />
          </div>
          <div v-else>Por el momento no se especifican las fechas.</div>
        </div>
      </section>

      <section class="section">
        <h2 class="title">Inscripciones</h2>
        <div class="description">
          <div class="chunk">

            <div class="sec">

              <div class="desc">
                <span>$250 MXN</span>
                <br>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section
        class="section"
      >
        <h2 class="title">
          <span v-if="course.instructors.length > 1">Imparten</span>
          <span v-else>Imparte</span>
        </h2>
        <div class="user-container">
          <div 
            v-for="(instructor, index) in course.instructors"
            :key="index"
            class="user-snippet">
            <div
              :style="{ 'background-image': 'url(' + instructor.profilePicture + ')' }"
              class="user-photo"
            />
            <div class="user-name">{{ instructor.user.firstName }} {{ instructor.user.lastName }}</div>
          </div>
          <!-- <UserSnippet
            :name="`${instructor.user.firstName} ${instructor.user.lastName}`"
            :image="instructor.profilePicture"/> -->
        </div>
      </section>

      <section class="section">
        <h2 class="title">Fotos</h2>
        <div class="photo-container">
          <div
            v-for="(photo, index) in course.gallery"
            :key="index"
            :style="{ 'background-image': 'url(' + photo + ')' }"
            class="photo-item" />
        </div>
      </section>
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

        <div
          v-if="course.location && course.location.text"
          class="chunk">

          <div class="sec">

            <div class="icon">
              <span class="svg svg--location">
                <svg 
                  preserveAspectRatio="xMinYMin meet"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="svg-icon valign--middle"
                  role="img">
                  <use xlink:href="#icon-location-pin--small">
                    <svg
                      id="icon-location-pin--small"
                      viewBox="0 0 16 16"
                      width="100%"
                      height="100%">
                      <path
                        fill="#FFF"
                        d="M7.972 7.606a.79.79 0 0 1-.778-.8c0-.441.349-.8.778-.8.43 0 .778.359.778.8 0 .44-.348.8-.778.8m0-2.4c-.858 0-1.555.717-1.555 1.6 0 .882.697 1.6 1.555 1.6s1.556-.718 1.556-1.6c0-.883-.698-1.6-1.556-1.6m2.215 8.816A2.652 2.652 0 0 1 7.972 15.2a2.652 2.652 0 0 1-2.214-1.178c-2.113-3.09-3.23-5.585-3.23-7.217C2.528 2.905 5.332.8 7.972.8s5.445 2.105 5.445 6.005c0 1.632-1.118 4.128-3.23 7.217M7.972 0C4.913 0 1.75 2.546 1.75 6.805c0 1.823 1.135 4.406 3.372 7.677.66.965 1.7 1.518 2.85 1.518 1.151 0 2.19-.553 2.85-1.518 2.238-3.27 3.372-5.854 3.372-7.677C14.194 2.545 11.031 0 7.972 0"
                        fill-rule="evenodd" />
                    </svg>
                  </use>
                </svg>
              </span>
            </div>

            <div class="desc">
              <span>{{ course.location.text }}</span>
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
import { mapMutations } from 'vuex'

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
  },
  methods: {
    ...mapMutations({
      add: 'shopping/add_item'
    }),
    async purchase(){
      await this.add({
        title: this.course.title,
        image: this.course.coverImage,
        price: 4.10
      })
      const userIsLoggedIn = !!this.$store.state.user.user
      if (userIsLoggedIn) {
        this.$router.push('/checkout')
      } else {
        this.$router.push('/signup')
      }
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
}

.user-snippet {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 35px;

  .user-photo {
    width: 75px;
    height: 75px;
    border-radius: 100%;

    background-size: cover;
    background-position: center;
  }
  .user-name {
    font-size: 1.1em;
    font-weight: 500;
    margin-top: 10px;
  }
}

.photo-container {
  display: flex;

  .photo-item {
    width: 209px;
    height: 209px;

    background-size: cover;
    background-position: center;

    border-radius: 5px;
    margin-right: 11px;
  }
}
</style>

