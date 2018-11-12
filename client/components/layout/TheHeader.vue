<template>
  <div style="position: relative;">

    <div class="background-header">
      <div class="half-background"/>
      <div class="header" />
      <div class="gradient-background" />
    </div>

    <div class="container header-content">

      <div class="content-wrapper">

        <div class="header-title">
          Colabora en proyectos artísticos
        </div>

        <div class="header-description">
          Cetacea es una plataforma de colaboracion de proyectos artisticos y causas sociales. Unete a un proyecto o crea tu propio proyecto.
        </div>

        <div style="margin-top:50px;">
          <nuxt-link to="/signup">
            <Button 
              size="large"
              type="a">
              Registrate ahora!
            </Button>
          </nuxt-link>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header {
  background: url('https://www.utexas.edu/sites/default/files/styles/utexas_hero_photo_image/public/hero-photos/earseyesfeet_hero.jpg?itok=h1Ni2hyF');
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100%;
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
