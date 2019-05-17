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

<style scoped lang="scss">
input{
  background: #071421;
  border: 1px solid #071421;
  padding: 0.7em 1.5em;
  border-radius: 5px;
  color: inherit;
  font-size: 1em;
  font-family: 'Soleil';
  width: 100%;
  outline: none;
  &:focus {
    box-shadow: 0 0 2px 1px #4a9bff;
  }
}
</style>
