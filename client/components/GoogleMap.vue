<template>
  <div
    :id="mapName"
    class="google-map"/>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'GoogleMap',
  props: {
    name: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: this.latitude,
        longitude: this.longitude
      }]
    }
  },
  computed: {
    ...mapGetters({
      mapsScript: 'mapsScript'
    })
  },
  mounted() {
    if(!this.mapsScript){
      let scriptMounted = new Promise((resolve, reject) => {
        let recaptchaScript = document.createElement('script')
        // recaptchaScript.async = true
        // recaptchaScript.defer = true
        // recaptchaScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&callback=initMap`)
        recaptchaScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}`)
        document.body.appendChild(recaptchaScript)
        this.setScript()
        resolve()
      })
      
      scriptMounted.then(() => {
        // this.getMap()
      })
    } else {
      this.getMap()
    }
  },
  methods: {
    ...mapMutations({
      setScript: 'setMapsScript'
    }),
    getMap(){
      const element = document.getElementById(this.mapName)

      const options = {
        zoom: 17,
        center: new google.maps.LatLng(this.latitude, this.longitude)
      }

      const map = new google.maps.Map(element, options)

      this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude)
        const marker = new google.maps.Marker({ 
          position,
          map
        })
      })
    }
  }
}
</script>

<style scoped>
.google-map{
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: gray;
  border-radius: 10px;
}
</style>
