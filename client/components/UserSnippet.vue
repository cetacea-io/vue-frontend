<template>
  <div class="meta">
    <Avatar 
      :image="image"/>
    <div class="desc">
      <div>{{ name }}</div>
      <div class="date">{{ shortTimestamp(date) }}</div>
    </div>
    <Button 
      size="small"
      @click.native="join" >
      Seguir
    </Button>
  </div>
</template>

<script>
export default {
  name: 'UserSnippet',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>

