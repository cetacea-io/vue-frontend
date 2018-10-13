<template>
  <div class="position-wrapper">
    <p class="title">{{ title }}</p>
    <p class="time"><i class="far fa-clock"/>{{ time }}</p>
    <div class="block">
      <p class="subtitle"> Descripcion de puesto </p>
      <p>{{ description }}</p>
    </div>
    <div class="block">
      <p class="subtitle">Requisitos</p>
      <p>{{ requirements }}</p>
    </div>
    <div class="block">
      <!-- <AppAvatarList/> -->
    </div>
    <Button>Postularme</Button>
  </div>
</template>

<script>

  // import AppAvatarList from '~/components/molecules/AppAvatarList'

  export default {
    name: 'AppPositionCard',
    components: {
      // AppAvatarList,
    },
    props: {
      title: {
        type: String,
        default: null
      },
      description: {
        type: String,
        default: null
      },
      requirements: {
        type: String,
        default: null
      },
      time: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped>
  .position-wrapper{
    width: 100%; 
    background-color:#121f32;
    border-radius:8px;
    padding: 2em;

    .block{
      padding-bottom: 20px;
      &:nth-of-type(3){
        padding-bottom: 50px;
      }
    }

    .title{
      font-size: 1.4em;
      font-weight: 600;
      padding-bottom: 1.2em;
    }

    .subtitle{
      font-size: 1.2em;
      font-weight: 600;
      padding-bottom: 0.5em;
    }

    .time{
      padding-bottom: 10px;

      i {
        margin-right: 10px;
      }
    }
  }
</style>
