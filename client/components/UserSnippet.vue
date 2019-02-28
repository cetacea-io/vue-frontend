<template>
  <div class="meta">
    <component
      v-bind="thingsProps"
      :is="tag">
      <Avatar 
        :image="image"/>
    </component>
    <component
      v-bind="thingsProps"
      :is="tag">
      <div class="desc">
        <div>{{ name }}</div>
        <div class="date">{{ shortTimestamp(date) }}</div>
      </div>
    </component>
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
    },
    username: {
      type: String,
      default: null,
      required: false
    },
    type: {
      type: String,
      default: null,
      required: false,
      validator: value => {
        return value === 'avatar'
      }
    }
  },
  computed: {
    tag(){
      if (this.type === 'user'){
        return 'nuxt-link'
      } else {
        return 'div'
      }
    },
    thingsProps() {
      if (this.type == "user") return { to: `/user/${this.username}` }
      else return null
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
  color: #ffffff;
}
.date{
  color: #8fa0b9;
}
</style>

