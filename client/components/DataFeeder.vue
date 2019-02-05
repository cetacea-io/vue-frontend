<template>
  <div>
    <div v-show="step === 1">
      <h2>Cuales son tus {{ maxSelected }} intereses?</h2>
      <div class="option-wrapper">
        <AppOption
          v-for="interest in interests"
          ref="option"
          v-model="checkedInterests"
          :key="interest.id"
          :selected="interest.checked"
          :title="interest.title"
          :name="interest.title"
          :val="interest.title"
          :svg="interest.image"
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

    <Button
      class="button"
      @click.native="next">
      Siguente
    </Button>
  </div>
</template>

<script>
import AppOption from '@/components/AppOption'

import { mapGetters } from 'vuex';

export default {
  components: {
    AppOption
  },
  data() {
    return {
      step: 1,
      interestsLiked: [],
      maxSelected: 3
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
    next() {
      this.step++
    }
  }
}
</script>

<style scoped>
.option-wrapper {
  overflow-y: scroll;
  max-height: 500px;
}
.button {
  background: #3853ff;
  width: 100%;
  border-radius: 100px;
  font-size: 1.2em;
}
</style>
