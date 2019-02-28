<template>
  <div class="container list">
    <AppComment
      v-for="(comment, key) in comments"
      :key="key"
      :id="parseInt(comment.id)"
      :likes="comment.likes"
      :date="shortTimestamp(comment.published)"
      :content="comment.content"
      :username="comment.author.username"
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

<style scoped lang="scss">
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
