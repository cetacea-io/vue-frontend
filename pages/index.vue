<template>
  <div class="container">
    <div class="header">
      <div style="margin: 0px 16px;">
        <nuxt-link to="/start">
          <NewsSlider
            :id="1"
            :likes="45"
            :shares="24"
            image="https://dcjazzfest.org/sites/default/files/Cory-Henry_1.png"
            title="Concierto Jazz Monterrey"
            category="Musica"
            description="Concierto de Jazz Fusion y Avant Garde. Invitado especial Cory Henry"
          />
        </nuxt-link>
      </div>
      <!-- <AppIdea title="Teatro: Fantasma de la opera" author="Ivan Castellanos" date="hace 3 minutos"/> -->
      <!-- <AppProjectsList :projects="projects"/> -->
      <!-- {{ projects }} -->
      <div style="margin: 40px 16px;">
        <ProjectCard
          :id="3"
          :likes="45"
          :shares="24"
          image="https://i.redd.it/x12pys0090q11.jpg"
          title="Fountain of Salmacis: Album"
          category="Musica"
          description="Album conceptual de Rock Progresivo, inspirado en sonidos de los 80's.
            La trama relata la historia de dos astronautas perdidos en el espacio, entre el silencio
            del espacio profundo, de pronto se escucha que tocan la puerta de la nave espacial"
        />
      </div>
      <div style="margin: 0px 16px;">
        <nuxt-link to="/start">
          <ProjectCard
            :id="2"
            :likes="45"
            :shares="24"
            image="https://i.redd.it/x12pys0090q11.jpg"
            title="Fountain of Salmacis: Album"
            category="Musica"
            description="Album conceptual de Rock Progresivo, inspirado en sonidos de los 80's.
              La trama relata la historia de dos astronautas perdidos en el espacio, entre el silencio
              del espacio profundo, de pronto se escucha que tocan la puerta de la nave espacial"
          />
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
// import AppIdea from '~/components/molecules/AppIdea'
// import AppProjectsList from '@/components/project/AppProjectsList'

import gql from 'graphql-tag'

export default {
  components: {
    // AppIdea,
    // AppProjectsList
  },
  // async asyncData({ params }) {
  //   let projects = [
  //     {
  //       id: 1,
  //       title: 'Los demonios detras de la pared',
  //       coverImage:
  //         'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/37713933_1436399193127775_520740539549614080_n.jpg?_nc_cat=0&oh=15c39cb12483b1cafa7a774813c6b6c9&oe=5BF1B8F0',
  //       category: 'Teatro',
  //       location: 'Monterrey, Nuevo Leon, Mexico',
  //       likes: '542',
  //       quickDesc:
  //         'En Moscú, al final del día escolar, los estudiantes se van de camino a casa. Un niño de doce años, Alexey, decide tomar un camino indirecto a casa en lugar de utilizar las calles regulares de la ciudad. Alexey toma un camino que lo lleva a'
  //     },
  //     {
  //       id: 2,
  //       title: 'Young Garter 2: Album',
  //       coverImage: 'https://i.redd.it/dnm2ja6e7pj11.png',
  //       category: 'Musica',
  //       location: '',
  //       likes: '942',
  //       quickDesc: `Album conceptual de Rock Progressivo, inspirado en sonidos de los 80's. La trama relata la historia de dos astronautas perdidos en el espacio, entre el silencio del espacio profundo de pronto se escucha que tocan la puerta de la nave espacial`
  //     },
  //     {
  //       id: 3,
  //       title: 'Limpieza de calles del centro de Monterrey',
  //       coverImage:
  //         'http://image.posta.com.mx/sites/default/files/img-20160423-wa0021_0.jpg',
  //       category: 'Activismo',
  //       location: 'Monterrey, Nuevo Leon, Mexico',
  //       quickDesc: 'Nos juntaremos este Sabado a limpiar el centro de Monterrey'
  //     }
  //   ]
  //   return {
  //     projects
  //   }
  // },
  // apollo: {
  //   projects: {
  //     query: gql`
  //       query projects {
  //         projects {
  //           id
  //           title
  //           coverImage
  //           category
  //           location
  //           quickDesc
  //         }
  //       }
  //     `,
  //     prefetch: true
  //   }
  // },
  data() {
    return {}
  }
}
</script>

<style>
.header {
  min-height: 80vh;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
