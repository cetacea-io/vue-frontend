<template>
  <div class="searchbox-wrapper">
    <autocomplete
      v-model="searchbox"
      :items="options"
      :async="true"
      placeholder="Que te interesa?"
      @enter="search(searchbox)"/>
  </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'

export default {
  name: 'NavbarSearch',
  components: {
    Autocomplete
  },
  data(){
    return {
      searchbox: '',
      options: ['banana', 'alfredito vuela', 'que ya no me quedan', 'muchas horas de vida']
    }
  },
  methods: {
    search(query){
      this.$router.push({ path: '/search', query: { q: query } })
    }
  }
}
</script>

<style scoped>
.searchbox-wrapper{
  width: 100%;
  height: 100%;
}
</style>
