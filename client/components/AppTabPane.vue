<template>
  <section 
    v-show="isActive" 
    class="tab">
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    idKey: {
      type: Number,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    href() {
      // name-of-tab
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  mounted() {
    this.isActive = this.selected
  }
}
</script>

<style scoped>
</style>
