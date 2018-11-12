<template>
  <div 
    :style="{ 'background-image': 'url(' + image + ')' }" 
    class="cover-image">
    <button class="button" />
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'nuxt-property-decorator'

// @Component({})
// export default class AppCover extends Vue {
//   @Prop()
//   image
// }
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.cover-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 300px;

  position: relative;

  border-top-left-radius: var(--custom-border-radius);
  border-top-right-radius: var(--custom-border-radius);

  & > .button {
    border: 0;
    height: 38px;
    width: 38px;
    background-color: rgba(200, 200, 280, 0.3);
    border-radius: var(--custom-border-radius);
    margin-left: 10px;
    margin-top: 10px;
  }
}
</style>
