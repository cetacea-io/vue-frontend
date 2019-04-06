<template>
  <AppTabs>

    <AppTabPane 
      :selected="true"
      :id-key="1"
      name="Proyecto">

      <Card>
        <!-- <vue-markdown>{{ overview }}</vue-markdown> -->
        <!-- Mi parte -->
        <!-- Ingresos (esperados) -->
        <!-- Riesgos y retos -->
      </Card>

    </AppTabPane>

    <AppTabPane 
      :id-key="2"
      name="Unete">

      <article class="">

        <AppPositionsList :positions="positions"/>

      </article>
    </AppTabPane>

    <AppTabPane
      :id-key="3"
      name="Feed">

      <article class="">

        <app-feed-list 
          :feed-list="feedList" />

      </article>

    </AppTabPane>

    <AppTabPane 
      :id-key="4"
      name="Comentarios">

      <AppCreateComment :project="parseInt(id)" />
      <AppCommentsList :comments="comments"/>

    </AppTabPane>

    <!-- <AppTabPane
      :id-key="5"
      name="Patrocinadores">

      <img 
        width="200"
        src="http://cdn.museoamparo.com/patrocinadores/candida-hofer-en-mexico_180305_014626exposicion-patrocinador.png"
        alt="Nuevo Leon">
      <img 
        width="200" 
        src="http://cdn.museoamparo.com/patrocinadores/candida-hofer-en-mexico_180305_014748exposicion-patrocinador.png" 
        alt="Conarte">
      <img 
        width="200"
        src="http://cdn.museoamparo.com/patrocinadores/candida-hofer-en-mexico_180305_015350exposicion-patrocinador.png"
        alt="Nuevo Leon Cultura">

    </AppTabPane> -->

  </AppTabs>
</template>

<script>
import AppTabPane from '@/components/AppTabPane'
import AppTabs from '@/components/AppTabs'

import AppCreateComment from '@/components/AppCreateComment'
import AppCommentsList from '@/components/AppCommentsList'
import AppPositionsList from '@/components/project/AppPositionsList'
import AppFeedList from '@/components/project/AppFeedList'
// import VueMarkdown from 'vue-markdown'

export default {
  name: 'AppSections',
  components: {
    AppTabPane,
    AppTabs,
    AppCreateComment,
    AppCommentsList,
    AppPositionsList,
    AppFeedList,
    // VueMarkdown
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    positions: {
      type: Array,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
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
  methods: {
    hello(){
      console.log('hey')
    }
  }
}
</script>

<style scoped>
</style>
