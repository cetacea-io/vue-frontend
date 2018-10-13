<template>
  <AppTabs>

    <AppTabPane 
      :selected="true"
      :id-key="1"
      name="Proyecto">

      <div style="width: 100%; background-color:#121f32;border-radius:8px; padding: 2em; margin:30px 0;">
        <h1>Descripcion</h1>
        <p>{{ overview }}</p>
        <h1>Mi parte</h1>
        <p>Me encargare de la direccion y de la produccion del cortometraje, estoy dispuesto a cambiar el script si hay mejores ideas</p>
        <h1>Ingresos (esperados)</h1>
        <p>Si nuestro proyecto llega a conseguir dinero, lo vamos a repartir en partes iguales con todo el equipo</p>
        <h1>Riesgos y retos</h1>
      </div>

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
        <!-- <AppFeed
              likes="54"
              facebook="245"
              twitter="124"
              date="04/Julio/2018"
          >
          GRACIAS! LO LOGRAMOS!
          <video style="margin:40px 0;" width="400" controls>
              <source src="https://s3.us-east-2.amazonaws.com/temporarycetacea/38496927_231858200991266_6460253948514140160_n.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
          </video>
          </AppFeed>

          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>
          <h1 style="
              margin: 0 auto;
              text-align: center;
              font-size: 2.0em;
          ">JUNIO</h1>
          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>
          
          <AppFeed
          likes="54"
          facebook="245"
          twitter="124"
          date="04/Julio/2018"
          >
          Gracias a el ISEM por prestarnos un lugar, podremos presentar la obra dentro de dos semanas!
          <div><img src="http://www.isem.edu.mx/img/emblema_nombre.svg" width="200" alt=""></div>
          </AppFeed>

          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>

          <AppFeed
          likes="54"
          facebook="245"
          twitter="124"
          date="04/Julio/2018"
          >
          Nos cancelaron el lugar donde teniamos planeado presentar la obra, necesitamos un lugar.
          </AppFeed>

          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>
          <h1 style="
              margin: 0 auto;
              text-align: center;
              font-size: 2.0em;
          ">MAYO</h1>
          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>

          <AppFeed
          likes="54"
          facebook="245"
          twitter="124"
          date="04/Julio/2018"
          >
          Necesitamos mejorar nuestra publicidad. Buscamos a un Social Media Manager.
          </AppFeed>
          
          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>

          <AppFeed
          likes="54"
          facebook="245"
          twitter="124"
          date="04/Julio/2018"
          >
          En ensayos!
          <video style="margin:40px 0;" width="400" controls>
              <source src="https://s3.us-east-2.amazonaws.com/temporarycetacea/31264886_163245914341513_220426083932045312_n.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
          </video>
          </AppFeed>

          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>

          <AppFeed
          likes="54"
          facebook="245"
          twitter="124"
          date="04/Julio/2018"
          >
          Logramos conseguir un nuevo patrocinador!
          <div><img src="http://cdn.museoamparo.com/patrocinadores/candida-hofer-en-mexico_180305_014748exposicion-patrocinador.png" width="200" alt=""></div>
          </AppFeed>

          <div style="
              width: 2px;
              height: 50px;
              background: #2c384a;
              margin: 0 auto;
          "></div>

          <AppFeed
          likes="54"
          facebook="245"
          twitter="124"
          date="04/Julio/2018"
          >
          Necesitamos un actor que pueda hacer el papel del hermano mayor, que este en Monterrey Nuevo Leon
          y tenga mucha deshinibicion
        </AppFeed>

        <div style="
            width: 2px;
            height: 50px;
            background: #2c384a;
            margin: 0 auto;
        "></div>
        <AppFeed
        likes="54"
        facebook="245"
        twitter="124"
        date="04/Julio/2018"
        >
        <video style="margin:40px 0;" width="400" controls>
            <source src="https://s3.us-east-2.amazonaws.com/temporarycetacea/27803448_167611933872958_6719233870803238912_n.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
        </AppFeed>


        <div style="
            width: 2px;
            height: 50px;
            background: #2c384a;
            margin: 0 auto;
        "></div>
        <h1 style="
            margin: 0 auto;
            text-align: center;
            font-size: 2.0em;
        ">ABRIL</h1>
        <div style="
            width: 2px;
            height: 50px;
            background: #2c384a;
            margin: 0 auto;
        "></div>

        <AppFeed
        likes="54"
        facebook="245"
        twitter="124"
        date="04/Julio/2018"
        >
        Estamos comenzando con el proyecto
        </AppFeed> -->

      </article>
    </AppTabPane>

    <AppTabPane 
      :id-key="4"
      name="Comentarios">

      <AppCreateComment :project="parseInt(id)" />
      <AppCommentsList :comments="comments"/>

    </AppTabPane>

    <AppTabPane
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

    </AppTabPane>

  </AppTabs>
</template>

<script>
import AppTabPane from '@/components/AppTabPane'
import AppTabs from '@/components/AppTabs'
import AppCreateComment from '@/components/AppCreateComment'
import AppCommentsList from '@/components/AppCommentsList'
import AppPositionsList from '@/components/project/AppPositionsList'

export default {
  components: {
    AppTabPane,
    AppTabs,
    AppCreateComment,
    AppCommentsList,
    AppPositionsList
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
  }
}
</script>

<style scoped>
</style>
