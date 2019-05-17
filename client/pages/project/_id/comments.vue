<template>
  <div>
    <AppCreateComment :project="parseInt(id)" />
    <AppCommentsList :comments="comments"/>
  </div>
</template>

<script>
import AppCreateComment from '@/components/AppCreateComment'
import AppCommentsList from '@/components/AppCommentsList'

export default {
  components: {
    AppCreateComment,
    AppCommentsList,
  },
}
</script>
