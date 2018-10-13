<template>
  <div class="container list">
    <PositionCard
      v-for="position in positions"
      :key="parseInt(position.id)"
      :id="parseInt(position.id)"
      :title="position.title"
      :time="position.time"
      :description="position.description"
      :requirements="position.requirements"
      class="item"
    />
  </div>
</template>

<script>
  export default {
    props: {
      positions: {
        type: Array,
        required: true,
      }
    },
  }
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    > *{
      flex: 1 100%;
      align-self: stretch;
    }

    > .item{
      margin: 30px 0;
      width: 100%;
    }
  }
</style>
