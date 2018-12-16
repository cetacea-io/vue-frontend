<template>
  <div class="stage">
    <div
      class="person-feed">
      <m-k-t-person-card
        ref="person"
        :picture="actualPerson.avatar"
        :name="actualPerson.name"
        :skill="actualPerson.skill"
        class="person" />
    </div>
    <div class="df-project">
      <m-k-t-project
        ref="project"
        :contributors="[
          'https://www.aspentimes.com/wp-content/uploads/2016/08/labor-atd-031116.jpg',
          'https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg',
          'http://www.contemporarymusiccenter.com/wp-content/uploads/2013/10/Michael-League-4.jpg',
        ]"
        image="https://teatrodeltemple.com/wp-content/uploads/2018/06/1971-Teatro-del-Temple-6.jpg"
        title="Clipperton: Obra de teatro"
        category="Teatro"/>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap"

import MKTProject from '@/components/marketing/MKTProject'
import MKTPersonCard from '@/components/marketing/MKTPersonCard'

export default {
  components: {
    MKTProject,
    MKTPersonCard
  },
  data() {
    return {
      timeline: null,
      persons: [
        { 
          name: 'Cory Henry',
          skill: 'Musico',
          avatar: 'https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg'
        },
        { 
          name: 'Michael League',
          skill: 'Bajista',
          avatar: 'http://mediad.publicbroadcasting.net/p/wbgo/files/styles/small/public/201702/snarky3-s.jpg'
        },
        {
          name: 'Aaron Paul',
          skill: 'Actor',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Aaron_Paul_by_Gage_Skidmore_2.jpg/220px-Aaron_Paul_by_Gage_Skidmore_2.jpg'
        },
        {
          name: 'Frank Zappa',
          skill: 'Compositor',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mErOYR0A64P4SOfARRqz1EXIlpQ43z7EktpbLhNcukIRK4Ds'
        },
      ],
      personIteration: 1,
      actualPerson: { 
          name: 'Cory Henry',
          skill: 'Musico',
          avatar: 'https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg'
        }
    }
  },
  mounted() {
    const person = this.$refs.person.$el
    const project = this.$refs.project

    this.timeline = new TimelineLite({
      onComplete: () => {
        this.timeline.restart()
        this.actualPerson = this.persons[this.personIteration]
        if (this.personIteration >= (this.persons.length - 1)) {
          this.personIteration = 0
        } else {
          this.personIteration++
          project.addContributor()
        }
      }
    })

    this.timeline.to(
      person,
      2.5, 
      {
        y: '150px',
        opacity: 1,
        ease: Expo.easeOut
      },
    //  '-=0.6'
    )
    
    this.timeline.to(
      person,
      1.0,
      {
        yPercent: 120,
        scale: 0.5,
        opacity: 0,
        ease: Expo.easeOut,
      },
      // '-=1.2'
    )
  }
}
</script>

<style scoped>
.stage {
  grid-template-rows: 150px 75px 75px auto;
  grid-template-columns: auto 125px 250px 125px auto;

  margin: 0 auto;
  width: 500px;
  height: 400px;
  display: grid;
  position: relative;
}

.person-feed {
  grid-column: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.person {
  position: absolute;
  /* z-index: 1; */
  /* height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px; */
  opacity: 0;
  top: -80%;
}

.df-project {
  grid-column: 3;
  display: flex;
  justify-content: center;
}
</style>
