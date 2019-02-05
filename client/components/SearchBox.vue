<template>
  <div class="searchbox-wrapper">
    <autocomplete
      v-model="searchbox"
      :items="options"
      :async="true"
      placeholder="Que te interesa?"
      @enter="search(searchbox)"/>
    <button
      type="submit"
      class="main-button"
      @click="search(searchbox)">
      Buscar
    </button>
  </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete'

export default {
  name: 'SearchBox',
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
      this.$router.push({ path: 'search', query: { q: query } })
    }
  }
}
</script>

<style scoped>
.searchbox-wrapper{
  width: 100%;
}

.main-button{
  padding: 25px;
  font-size: 16px;
  margin: 10px;
  -webkit-transition: padding 250ms ease;
  transition: padding 250ms ease;
  display: inline-block;
  border: none;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  /* background-color: #fa6484; */
  background-color: #00ceb3;
  color: #fff;
}
</style>
