<template>
  <div>

    <!-- <div 
      style="
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      position: fixed;
      bottom: 0;
      z-index: 4963;
    ">
      <div
        style="
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 500px;
        background: #101a25;
        height: auto;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin: auto;
        left: 0;
        right: 0;
        padding: 24px;
      ">
        <div
          style="
          display: flex;
          align-items: center;
          padding-bottom: 24px;
        ">
          
          <Avatar
            :icon="true"
            style="margin-right: 16px;"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpw3brtf2P7LKukd8m9tLyoDi2SNr7yp_HsFTmzniyfmQCn65"/>
          <h2
            style="
            font-size: 1.1em;
          ">
            Ivan Castellanos
          </h2>
      
        </div>

        <div
          style="
          padding: 12px 0;
          border-top: 1px solid #37414c;
          border-bottom: 1px solid #37414c;
        ">
          <ul>
            <li>Notificaciones y compartido</li>
            <li>Mi Actividad</li>
            <li>Ajustes</li>
            <li>Ayuda y Feedback</li>
          </ul>
        </div>

      </div>
    </div> -->

    <TheNavbar/>

    <div v-if="form">
      <!-- <DataModal/> -->
    </div>
    <login-modal/>
    <nuxt/>
  </div>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar'
import LoginModal from '@/components/LoginModal'
import DataModal from '@/components/DataModal'

import { mapGetters } from 'vuex'

export default {
  components: {
    TheNavbar,
    LoginModal,
    DataModal
  },
  computed:{
    ...mapGetters({
      form: 'authentication/funnelResponded'
    })
  }
  // middleware: ['form-modal']
}
</script>


<style>

</style>
