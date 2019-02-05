<template>
  <div class="container list">
    <PositionCard
      v-for="(position, i) in positions"
      :key="parseInt(position.id)"
      :id="parseInt(position.id)"
      :title="position.title"
      :time="position.time"
      :compensation="position.compensation"
      :description="position.description"
      :requirements="position.requirements"
      class="item"
      @clicked="clicky(position, i, $event)"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    props: {
      positions: {
        type: Array,
        required: true
      }
    },
    methods: {
      ...mapActions({
        joinProject: 'user/joinProject'
      }),
      clicky(product, index, event){
        console.log(`${product}, ${index}, ${event}`)
        this.joinProject()
      }
    }
  }
</script>

<style scoped lang="scss">
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
