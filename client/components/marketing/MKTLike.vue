<template>
  <div class="stage">
    <div class="options">
      <h1>Teatro</h1>
    </div>
    <div
      class="buttons"
      style="grid-column: 2;">
      <m-k-t-button />
    </div>
    <div
      class="buttons"
      style="grid-column: 4;">
      <m-k-t-button />
    </div>
  </div>
</template>

<script>
import MKTButton from '@/components/marketing/MKTButton'

export default {
  components: {
    MKTButton
  }
}
</script>

<style scoped>
.stage {
  display: grid;
  grid-template-rows: 100px auto auto auto;
  grid-template-columns: auto 125px 250px 125px auto;

  margin: 0 auto;
  position: relative;
}

.buttons {
  display: flex;
  justify-content: center;
  position: relative;
}

.options {
  grid-column: 3;
  display: flex;
  justify-content: center;
  position: relative;
}
</style>
