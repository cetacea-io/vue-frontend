<template>
  <div class="showcase-recent">
    <h2 class="heading_2">New and trending</h2>
    <div class="project-container">
      <m-k-t-project
        :contributors="['https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg']"
        title="Rabioles Negros"
        image="http://conarte.org.mx/wp-content/uploads/2018/08/RAVIOLES-NEGROS-e1539011998794-1660x1232.jpg"/>
      <m-k-t-project
        title="Electronic Music Experience"
        image="http://conarte.org.mx/wp-content/uploads/2017/07/museos-escuela-de-espectadores.jpg"/>
    </div>
  </div>
</template>

<script>
import MKTProject from '@/components/marketing/MKTProject'

export default {
  components: {
    MKTProject
  }
}
</script>

<style lang="scss" scoped>
.showcase-recent {
}

.heading_2 {
  font-size: 44px;
  line-height: 48px;
  font-weight: 400;
}
.project-container {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
}
</style>
