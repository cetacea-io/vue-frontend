<template>
  <div>
    <app-feed-list 
      :feed-list="feedList"
    />
  </div>
</template>

<script>
import AppFeedList from '@/components/project/AppFeedList'

export default {
  components: {
    AppFeedList,
  },
  data(){
    return{
      feedList: [
        {
          content: 'Hola como estas mi nombre'
        },
        {
          content: 'Hola como estas mi nombre'
        },
        {
          content: 'Hola como estas mi nombre'
        },
        {
          content: 'Hola como estas mi nombre'
        },
        {
          content: 'Hola como estas mi nombre'
        },
        {
          content: 'Hola como estas mi nombre'
        },
      ]
    }
  },
}
</script>
