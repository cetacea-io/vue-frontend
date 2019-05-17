<template>
  <div class="container">
    Busqueda: {{ query }}
    <SearchTabs>

      <AppTabPane 
        :selected="true"
        :id-key="1"
        :tag="16"
        name="Cursos/Talleres">

        <div class="slot-wrapp">
          <ItemsGrid />
        </div>

      </AppTabPane>

      <AppTabPane 
        :id-key="2"
        :tag="1"
        name="Eventos">

        <div
          class="slot-wrapp"
          style="text-align: center; font-size: 1.2em;">
          Lamentablemente aun no hay eventos 😥
          <p>Pero puedes agregar uno <a href="#">aqui</a> 😃</p>
        </div>

      </AppTabPane>

      <AppTabPane 
        :id-key="3"
        :tag="8"
        name="Proyectos">

        <div class="slot-wrapp">
          <ItemsGrid />
        </div>

      </AppTabPane>

    </SearchTabs>
  </div>
</template>

<script>
import AppCarrousel from '@/components/AppCarrousel'
import AppTabPane from '@/components/AppTabPane'
import SearchTabs from '@/components/SearchTabs'
import ItemsGrid from '@/components/ItemsGrid'

import { mapGetters, mapActions } from 'vuex';

export default {
  async asyncData ({store, error, app, params, query}) {
    return {
      query: query.q
    }
  },
  async fetch({store}){
    // await store.dispatch('courses/poblate_courses')
  },
  components: {
    AppCarrousel,
    AppTabPane,
    SearchTabs,
    ItemsGrid
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      courses: 'courses/courses'
    })
  },
  mounted() {
    // this.scroll()
  },
  methods: {
    ...mapActions({
      add: 'courses/poblate_courses'
    }),
  }
}
</script>

<style scoped>
.slot-wrapp {
  margin-top: 40px;
}

.box{
  vertical-align: middle;
  display: inline-block;
  width: 295px;
  padding: 25px;
  font-size: 16px;
  color: #444;
  margin-right: 10px;
  border: 1px solid transparent;
  -webkit-transition: border-color 250ms ease, padding 250ms ease;
  transition: border-color 250ms ease, padding 250ms ease;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  font-family: 'Soleil';
}
</style>
