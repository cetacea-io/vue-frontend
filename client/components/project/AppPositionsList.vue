<template>
  <div class="container list">
    <PositionCard
      v-for="position in positions"
      :key="parseInt(position.id)"
      :id="parseInt(position.id)"
      :title="position.title"
      :time="position.time"
      :compensation="position.compensation"
      :description="position.description"
      :requirements="position.requirements"
      :url="position.form"
      class="item"
    />
  </div>
</template>

<script>
  export default {
    props: {
      positions: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    & > .item{
      margin: 30px 0;
      width: 100%;
    }
  }
</style>
