<template>
  <input
    :value="value"
    type="text"
    @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
input[type="text"]{
    background: transparent;
    border: 3px solid #315ee8;
    padding: 0.9em 1.7em;
    border-radius: 50px;
    color: inherit;
    font-size: 1em;
}
</style>
