<template>
  <div class="feeder-wrapper">
    <div class="first">
      <h2>Cuales son tus {{ maxSelected }} intereses?</h2>
      <div class="option-wrapper">
        <AppOption
          v-for="interest in interests"
          ref="option"
          v-model="checkedInterests"
          :key="interest.id"
          :title="interest.title"
          :name="interest.title"
          :val="interest"
          :image="interest.image"
        />
      </div>
    </div>

    <div v-show="step === 2">
      <h2>Tienes algun interes que no se menciono?</h2>
    </div>

    <div v-show="step === 3">
      <h2>¿Cuáles son tus habilidades?</h2>
      <h3>A qué te dedicas, que estudias(o estudiaste), que sabes hacer en general. Ej. Actuación, Piano, Dibujo, Arquitectura, Ilustración, etc. Sé tan específico como gustes.</h3>
      <form>
        <input
          type="text"
          name="fname" >
      </form>
    </div>

    <div v-show="step === 4">
      <h2>A que tipo de proyectos te gustaria contribuir</h2>
      <form>
        <input
          type="text"
          name="fname" >
      </form>
    </div>

    <!-- <Button
      class="button"
      @click.native="next">
      Siguente
    </Button> -->
  </div>
</template>

<script>
import AppOption from '@/components/AppOption'

import { mapGetters } from 'vuex'

export default {
  components: {
    AppOption
  },
  data() {
    return {
      interestsLiked: [],
      maxSelected: 7
    }
  },
  computed: {
    ...mapGetters({
      interests: 'user/categories'
    }),
    checkedInterests: {
      get () {
        return this.interestsLiked
      },
      set (val) {
        if(val.length >= this.maxSelected){
          for (var x in this.interests){
            if( !this.$refs.option[x].selected )
              this.$refs.option[x].disabled = true
          }
          this.$emit('valid', true)
          for (var x in this.interests){
            if( this.$refs.option[x].selected )
              this.$store.commit('SET_INTEREST', x, true)
            else
              this.$store.commit('SET_INTEREST', x, false)
          }
        } else {
          for (var x in this.interests){
            this.$refs.option[x].disabled = false
          }
          this.$emit('valid', false)
        }
          this.interestsLiked = val
      }
    }
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
.feeder-wrapper{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(48px, auto));
  color: inherit;
}
.first{
  display: grid;
  /* grid-template-rows: repeat(auto-fit, minmax(68px, 1fr)); */
  height: 100%;
  padding: 19px;
}
h2{
  padding-bottom: 19px;
}
.option-wrapper {
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 9px;
  grid-row-gap: 9px;
  grid-auto-rows: 139px;
}
.button {
  background: #3853ff;
  width: 100%;
  border-radius: 100px;
  font-size: 1.2em;
}
</style>
