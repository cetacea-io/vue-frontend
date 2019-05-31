<template>
  <div class="feeder-wrapper">

    <div>
      <h2>Tienes algun interes que no se menciono?</h2>
    </div>

    <div
      v-for="(fieldName, index) in formFields"
      :key="index"
    >
      <input
        :name="index"
        v-model="formFields[index]"
        size="40"
        type="text"
        class="style-input"
        placeholder="Ej. Periodismo, Programacion, etc."
      >
    </div>

    <Button @click.native="addNew">Agrega otro</Button>

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
      isReady: false,
      formFields: [
        '',
      ]
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
    formFields(newValue, oldValue) {
      this.$emit('not-mentioned-interests', newValue)
    }
  },
  mounted() {
    this.isReady = true
  },
  methods: {
    addNew() {
      this.formFields.push('')
    }
  },
}
</script>

<style scoped>
h2{
  padding-bottom: 19px;
}

.style-input {
  border-radius: 7px;
  padding: 1em 2em;
  margin-bottom: 1em;
  background: #000000;
  border: 1px solid #989898;
  color: #fff;
}
</style>
