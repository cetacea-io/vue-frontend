<template>
  <div class="feeder-wrapper">

    <div>
      <h2>Tienes algun interes que no se menciono?</h2>
    </div>

  </div>
</template>

<script>
import AppOption from '@/components/AppOption'

import { mapGetters } from 'vuex'

export default {
  components: {
    AppOption
  },
  data() {
    return {
      interestsLiked: [],
      maxSelected: 3
    }
  },
  computed: {
    ...mapGetters({
      interests: 'user/categories'
    }),
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
          this.$emit('valid', true)
          for (var x in this.interests){
            if( this.$refs.option[x].selected )
              this.$store.commit('SET_INTEREST', x, true)
            else
              this.$store.commit('SET_INTEREST', x, false)
          }
        } else {
          for (var x in this.interests){
            this.$refs.option[x].disabled = false
          }
          this.$emit('valid', false)
        }
          this.interestsLiked = val
      }
    }
  },
  methods: {
    next() {
      this.step++
    }
  },
}
</script>

<style scoped>
.feeder-wrapper{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(48px, auto));
  color: #fff;
}
.first{
  display: grid;
  /* grid-template-rows: repeat(auto-fit, minmax(68px, 1fr)); */
  height: 100%;
  padding: 19px;
}
h2{
  padding-bottom: 19px;
}
.option-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-auto-rows: 139px;
}
.button {
  background: #3853ff;
  width: 100%;
  border-radius: 100px;
  font-size: 1.2em;
}
</style>
