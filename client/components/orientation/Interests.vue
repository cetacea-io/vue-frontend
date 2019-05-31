<template>
  <div class="feeder-wrapper">
    <div class="first">
      <h2>Cuales son tus {{ maxSelected }} intereses?</h2>
      <h3>Ingresa cuales son tus intereses principales que deseas</h3>
      <div class="option-wrapper">
        <AppOption
          v-for="interest in interests"
          ref="option"
          v-model="checkedInterests"
          :key="interest.id"
          :title="interest.title"
          :name="interest.title"
          :val="interest"
          :image="interest.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppOption from '@/components/AppOption'

import gql from 'graphql-tag'

export default {
  components: {
    AppOption
  },
  data() {
    return {
      interestsLiked: [],
      maxSelected: 7,
      minRequired: 5,
      isReady: false
    }
  },
  apollo: {
    interests: { 
      query: gql`
        query {
          mainCategories {
            id
            title
            image: thumbnail
          }
        }
      `,
      update: data => data.mainCategories,
    }
  },
  computed: {
    checkedInterests: {
      get () {
        return this.interestsLiked
      },
      set (val) {
        if(val.length >= this.maxSelected){
          for (var x in this.interests){
            if( !this.$refs.option[x].selected )
              this.$refs.option[x].disabled = true
          }
        } else {
          for (var x in this.interests){
            this.$refs.option[x].disabled = false
          }
        }
        if(val.length >= this.minRequired){
          this.isReady = true
        } else {
          this.isReady = false
        }
        this.interestsLiked = val
        this.$emit('interests-liked', this.interestsLiked)
      }
    }
  },
  watch: {
    isReady(newValue, oldValue) {
      this.$emit('ready', newValue)
    }
  },
}
</script>

<style scoped lang="scss">
.feeder-wrapper{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(48px, auto));
  color: inherit;
}
.first{
  display: grid;
  /* grid-template-rows: repeat(auto-fit, minmax(68px, 1fr)); */
  height: 100%;
}
h2{
  margin-bottom: 19px;
  text-align: center;
}
h3{
  text-align: center;
  margin-bottom: 2em;
  font-weight: 500;
}
.option-wrapper {
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 9px;
  grid-row-gap: 9px;
  grid-auto-rows: 139px;
}
.button {
  background: #3853ff;
  width: 100%;
  border-radius: 100px;
  font-size: 1.2em;
}
</style>
