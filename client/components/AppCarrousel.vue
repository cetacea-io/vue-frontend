<template>
  <flickity
    :options="flickityOptions">
    <slot>
      <div
        v-for="(item, index) in filteredItems"
        :item="item"
        :key="index"
        class="item" />
    </slot>
  </flickity>
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

<style scoped>
.item{
  width: 252px;
  padding: 5px;
}
</style>
