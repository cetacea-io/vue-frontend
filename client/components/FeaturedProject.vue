<template>
  <div class="featured">
    <h1>Projecto destacado</h1>
    <div
      style="
      display:flex;
      flex-wrap: nowrap;
      justify-content: center;
      ">
      <m-k-t-project
        :contributors="['https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg']"
        title="Los cuentos posmodernos"
        image="https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/38391254_2136342736612921_3255655471737995264_n.jpg?_nc_cat=111&_nc_ht=scontent.fntr3-1.fna&oh=d3147d38d80597827ff6804e2a70b3ee&oe=5CD14760"/>
      <div
        style="
        display:inline-block;
        max-width: 400px;
        margin-left: 50px;
        ">
        <h2>Los cuentos posmodernos</h2>
        <h4
          style="
          font-size: 15px;
          font-weight: 200;
          color: #ccc;
          ">
          La infancia, con esa caracteristica teatral de desvanecerse
          mostrando la fragilidad de la existencia se nos acomoda sobre
          lo no dicho. Hablar sin involucrar a otros. La potencia de detener
          a tiempo lo vivido y revolcarnos frente a nuestros fracasos,
          expectativas y esa vaga idea que tenemos de lo que significa un
          abismo.
        </h4>

        <user-snippet
          image="https://s3.us-east-2.amazonaws.com/temporarycetacea/juegos1.png"
          name="Ivan Castellanos"/>

      </div>
    </div>
  </div>
</template>

<script>
import MKTProject from '@/components/marketing/MKTProject'
import UserSnippet from '@/components/UserSnippet'

export default {
  components: {
    MKTProject,
    UserSnippet
  }
}
</script>

<style scoped>
.title {
  line-height: 1.19;
  margin-bottom: 1em;
}
</style>
