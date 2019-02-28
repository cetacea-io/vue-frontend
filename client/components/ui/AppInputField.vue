<template>
  <input
    :value="value"
    :placeholder="placeholder"
    :type="type"
    @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>
input{
  background: transparent;
  border: 1px solid #d6d6d6;
  padding: 0.7em 1.5em;
  border-radius: 5px;
  color: inherit;
  font-size: 1em;
  font-family: 'Soleil';
  width: 100%;
}
</style>
