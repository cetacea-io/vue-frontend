<template>
  <div style="position: relative;">

    <div class="background-header">
      <div class="half-background"/>
      <div
        :style="{ 'background-image': 'url(' + mainImage + ')' }" 
        class="header"/>
      <div class="gradient-background" />
    </div>

    <div class="container header-content">

      <div class="home-header-left-side">

        <div class="header-title">
          Colabora en proyectos <span class="underline">{{ mainHeadline }}</span>
        </div>

        <div class="header-description">
          Cetacea es una plataforma de colaboracion de proyectos artisticos y causas sociales. Unete a un proyecto o crea tu propio proyecto.
        </div>

        <div style="margin-top:50px;">
          <facebook-button />
          <google-button />
          <!-- <nuxt-link to="/signup">
            <Button 
              size="large"
              type="a">
              Registrate ahora!
            </Button>
          </nuxt-link> -->
        </div>

      </div>


      <div class="home-header-right-side">
        <script 
          src="https://fast.wistia.com/embed/medias/fcmx886ihl.jsonp"
          async="" />
        <script 
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async="" />
        <div class="header-video-overlay">
          <img
            src="https://www.glidr.io/assets/home_header.png"
            alt="GLIDR project workspace UI"
            style="height:100%;width:100%;">
          <div class="header-play-button-container blue">
            <div class="play-button-white position-absolute"/>
          </div>
        </div>
        <span
          id="wistia-fcmx886ihl-1"
          class="wistia_embed wistia_async_fcmx886ihl popover=true popoverAnimateThumbnail=true header-video-image wistia_embed_initialized"
          style="display:inline-block;position:relative;opacity:0" >
          <div 
            id="wistia_29.thumb_container"
            class="wistia_click_to_play" 
            style="position: relative; height: 400px; width: 616px;">
            <div
              id="wistia_73.thumbnail"
              tabindex="0"
              style="cursor: pointer; display: block; height: 400px; overflow: hidden; outline: none; position: relative; width: 616px;">
              <div
                id="wistia_89.big_play_button_background"
                style="height: 81px; position: absolute; width: 127px; z-index: 1; background-color: rgba(90, 63, 253, 0.76); left: 245px; top: 160px; transition: all 80ms ease-out; mix-blend-mode: normal;"
              />
              <div
                id="wistia_89.big_play_button_graphic"
                tabindex="0"
                aria-role="Button"
                aria-label="Play"
                style="background: url(@/assets/img/arrow.png) 0px 0px / 127px 81px no-repeat transparent; cursor: pointer; display: block; height: 81px; outline: none; position: absolute; width: 127px; z-index: 1; left: 245px; top: 160px;"
              />
              <img 
                id="wistia_73.thumbnail_img"
                alt="Wistia video thumbnail"
                src="https://embedwistia-a.akamaihd.net/deliveries/3f696196f5d1d14ad8a5a3d711a7476e9298ca37.jpg?image_crop_resized=960x540"
                style="border: 0px; display: block; float: none; height: 400px; margin: 0px; max-height: none; max-width: none; padding: 0px; position: absolute; width: 711px; left: -47px; top: 0px;">
              <style
                id="wistia_127_style"
                type="text/css"
                class="wistia_injected_style">
                .wistia_no_animate * {
                transition: none !important;
                -mozilla-transition: none !important;
                -ms-transition: none !important;
                -o-transition: none !important;
                -webkit-transition: none !important;
                }
              </style>
            </div>
          </div>
        </span>
      </div>



    </div>

  </div>
</template>

<script>
import FacebookButton from '@/components/FacebookButton'
import GoogleButton from '@/components/GoogleButton'

export default {
  components: {
    GoogleButton,
    FacebookButton
  },
  data () {
    return {
      mainImage: null,
      mainHeadline: null,
      variations: [
        {
          headline: 'artisticos',
          image: 'https://images.clarin.com/2018/10/10/CVg7l-z76_1256x620__1.jpg'
        },
        {
          headline: 'sociales',
          image: 'https://pmcvariety.files.wordpress.com/2018/07/christopher-robin-6.jpg?w=1000'
        },
        {
          headline: 'de investigacion',
          image: 'https://www.nacionrex.com/__export/1520369919733/sites/debate/img/2018/03/06/winnie-the-pooh-and-christopher-robin.jpg_1834093470.jpg'
        }
      ]
      // 'https://www.utexas.edu/sites/default/files/styles/utexas_hero_photo_image/public/hero-photos/earseyesfeet_hero.jpg?itok=h1Ni2hyF',
    }
  },
  created() {
    let self = this

    setInterval( function() {
      let rand = Math.floor(Math.random()*self.variations.length)
      self.mainHeadline = self.variations[rand].headline
      self.mainImage = self.variations[rand].image
    }, 2500)
  }
}
</script>

<style scoped>
.underline {
  text-decoration: underline;
}

.header-video-overlay {
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.20);
  position: absolute;
  height: 400px;
  width: 616px;
  z-index: 2;
  border-radius: 12px;
}

.header-play-button-container.blue {
  background-color: #5A3FFD;
}

.header-play-button-container {
  height: 100px;
  width: 100px;
  background-color: #FFF;
  border-radius: 50px;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  transition: 300ms transform, 300ms box-shadow;
  will-change: transform, box-shadow;
  position: absolute;
}

.play-button-white {
  background-image: url('~assets/img/download.svg');
  height: 34px;
  width: 34px;
  background-repeat: no-repeat;
  left: calc(50% - 13px);
  top: calc(50% - 18px);
}

.position-absolute {
  position: absolute!important;
}

.header-video-image {
  height: 400px;
  width: 616px;
  background-repeat: no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}
</style>

<style scoped lang="scss">
.home-header-left-side {
  float: left;
  max-width: 600px;
}

.home-header-right-side {
  float: right;
  max-width: 616px;
}




.header {
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  width: 100%;
  height: 100%;

  > * {
    justify-self: center;
  }
}

.background-header {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  display: inline-flex;
}

.half-background {
  width: 50%;
  background: #000;
  height: 100%;
  display: none;
}

.gradient-background{
  background: linear-gradient(to right, #000000 0%,#000000 41%,rgba(0, 0, 0, 0) 100%);
  position: absolute;
  width:  100%;
  height: 100%;
}

.header-title {
  font-size: 2.0em;
  font-weight: 700;
  margin-bottom: 1.2em;
}

.header-description {
  color: #d6d9ef;
  font-size: 0.98em;
}

.header-content {
  width:100%;
  height:91vh;
  align-items: center;
  display: flex;
}

.content-wrapper{
  max-width: 100%;
  padding: 0 20px;
}

@media only screen and (min-width: 768px) {
  .header-title {
    font-size: 2.5em;
  }
  .content-wrapper {
    max-width: 50%;
    padding: 0;
  }
  .header-description {
    font-size: 1.1em;
  }
  .half-background {
    display: block;
  }
}
</style>
