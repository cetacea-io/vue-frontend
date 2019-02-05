<template>
  <div>
    <div
      v-for="(feed, i) in feedList"
      :key="i">
      <app-feed
        author-image="https://s3.us-east-2.amazonaws.com/temporarycetacea/juegos1.png"
        author-name="Ivan Castellanos"
        date="2019-01-07T03:28:03+00:00">
        {{ feed.content }}
      </app-feed>
      <div
        style="
        width: 2px;
        height: 50px;
        background: #2c384a;
        margin: 0 auto;
      "/>
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/project/AppFeed'

export default {
  name: 'AppFeedList',
  components: {
    AppFeed
  },
  props: {
    feedList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
