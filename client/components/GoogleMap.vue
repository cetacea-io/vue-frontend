<template>
  <div
    :id="mapName"
    class="google-map"/>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      mapName: this.name + '-map', 
    }
  },
  //@ts-ignore
//   mounted() {
//     let recaptchaScript = document.createElement('script')
//     recaptchaScript.async = true
//     recaptchaScript.defer = true
//     recaptchaScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}`)
//     document.head.appendChild(recaptchaScript)

//     const element = document.getElementById(this.mapName)
//     const options = {
//       zoom: 14,
//       center: new google.maps.LatLng(51.501527,-0.1921837)
//     }

//     const map = new google.maps.Map(element, options)
//   }
}
</script>

<style scoped>
.google-map{
  width: 600px;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>
