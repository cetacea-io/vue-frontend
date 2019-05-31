<template>
  <div class="feeder-wrapper">

    <div>
      <h2>¿Cuáles son tus habilidades?</h2>
      <h3>A qué te dedicas, cuales son tus estudios, que sabes hacer en general.</h3>
      <form>
        <textarea
          v-model="abilitiesText"
          placeholder="Ej. Actuación, Piano, Dibujo, Arquitectura, Ilustración, etc. Sé tan específico como gustes."
          class="style-textarea"
          name="fname" />
      </form>
    </div>

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
      abilitiesText: null,
      minCharacters: 7,
      isReady: false,
    }
  },
  computed: {
    ...mapGetters({
      interests: 'user/categories'
    }),
  },
  watch: {
    isReady(newValue, oldValue) {
      this.$emit('ready', newValue)
    },
    abilitiesText(newValue, oldValue) {
      this.$emit('abilities-text', newValue)
      if (newValue.length >= this.minCharacters) {
        this.isReady = true
      } else {
        this.isReady = false
      }
    }
  },
  mounted() {
    this.isReady = false
    this.$emit('ready', false)
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

.style-textarea {
  border-radius: 10px;
  font-family: 'Soleil';
  font-size: 1.0em;
  padding: 1em;
  width: 100%;
}
</style>
