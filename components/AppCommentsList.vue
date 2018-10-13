<template>
  <div class="container list">
    <AppComment
      v-for="comment in comments"
      :key="parseInt(comment.id)"
      :id="parseInt(comment.id)"
      :likes="comment.likes"
      :date="shortTimestamp(comment.published)"
      :content="comment.content"
      :username="comment.owner.username"
      class="item"
    />
  </div>
</template>

<script>
import AppComment from '@/components/AppComment'

export default {
  components: {
    AppComment
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  > * {
    flex: 1 100%;
    align-self: stretch;
  }

  > .item {
    margin: 10px 0;
  }
}
</style>
