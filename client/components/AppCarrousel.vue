<template>
  <div style="position: relative;">
    <div class="curtain"/>
    <flickity
      :options="flickityOptions">
      <slot/>
    </flickity>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        freeScroll: false,
        cellAlign: "left",
        contain: true,
        accessibility: false,
        resize: true,
        percentPosition: true,
        groupCells: "80%"
      }
    }
  }
}
</script>

<style>
.curtain {
  width: 26%;
  height: 100%;
  display: block;
  background: linear-gradient(270deg, #000,#fff0);
  position: absolute;
  z-index: 1;
  pointer-events: none;
  right:0;
}
</style>
