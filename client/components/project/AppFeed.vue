<template>
  <div class="feed-container">

    <user-snippet
      :image="authorImage"
      :date="date"
      :name="authorName"/>

    <div class="content">
      <slot/>
    </div>

    <div class="options">
      <div class="option">
        Me gusta
      </div>
      <div class="option">
        Comentarios
      </div>
      <div class="option">
        Compartir
      </div>
    </div>
  </div>
</template>

<script>
import UserSnippet from '@/components/UserSnippet'

export default {
  name: 'AppFeed',
  components: {
    UserSnippet
  },
  props: {
    authorImage: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped lang="scss">
.title {
  line-height: 1.19;
  margin-bottom: 1em;
}
.temp {
  width: 100%;
  margin-bottom: 1em;
}
.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
}
.meta{
  display: inline-flex;
  align-items: center;
}
.desc{
  margin: 0 16px;
}
.date{
  color: #8fa0b9;
}


.feed-container {
  background: #121e31;
  padding: 1em;
  border-radius: 10px;
}

.content{
  margin-bottom: 1em;
}

.options{
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  font-weight: 600;
  width: 100%;

  .option{
    flex-grow: 1;
    text-align: center;
  }
}
</style>
