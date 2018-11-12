<template>
  <textarea
    :value="value"
    class="textarea"
    @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.textarea {
  background: #121f32;
  border: 0;
  border-radius: 8px;
  color: #fff;
  padding: 1.2em;

  outline: none;

  width: 100%;

  font-family: 'Soleil';
  font-size: 1em;
  font-weight: 400;

  resize: none;

  &:focus {
    box-shadow: inset 0 0 0 2px var(--blue);
  }
}
</style>
