<template>
  <div>
    <div v-show="step === 1">
      <h2>Cuales son tus {{ maxSelected }} intereses?</h2>
      <div class="option-wrapper">
        <AppOption
          v-for="interest in interests"
          ref="option"
          v-model="checkedInterests"
          :key="interest.id"
          :selected="interest.checked"
          :title="interest.title"
          :name="interest.title"
          :val="interest.title"
          :svg="interest.image"
        />
      </div>
    </div>

    <div v-show="step === 2">
      <h2>¿Cuáles son tus habilidades?</h2>
      <h3>A qué te dedicas, que estudias(o estudiaste), que sabes hacer en general. Ej. Actuación, Piano, Dibujo, Arquitectura, Ilustración, etc. Sé tan específico como gustes.</h3>
      <form>
        <input
          type="text"
          name="fname" >
      </form>
    </div>

    <div v-show="step === 3">
      <h2>A que tipo de proyectos te gustaria contribuir</h2>
      <form>
        <input
          type="text"
          name="fname" >
      </form>
    </div>

    <Button
      class="button"
      @click.native="next">
      Siguente
    </Button>
  </div>
</template>

<script>
import AppOption from '@/components/AppOption'

export default {
  components: {
    AppOption
  },
  data() {
    return {
      step: 1,
      interestsLiked: [],
      maxSelected: 3,
      interests: [
        {
          title: 'Teatro',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Noh3.jpg',
          checked: false
        },
        {
          title: 'Cine',
          image: 'http://profiles.sulekhalive.com/mstore/25509323/albums/default/thumbnailfull/film-production.jpg',
          checked: false
        },
        {
          title: 'Musica',
          image: 'https://listasspotify.es/wp-content/uploads/2018/03/Jazz.jpg',
          checked: false
        },
        {
          title: 'Videojuegos',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Noh3.jpg',
          checked: false
        },
        {
          title: 'Educación',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Noh3.jpg',
          checked: false
        },
        {
          title: 'Literatura',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Noh3.jpg',
          checked: false
        },
        {
          title: 'Activismo',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Noh3.jpg',
          checked: false
        },
        {
          title: 'Tecnología',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Noh3.jpg',
          checked: false
        },
        {
          title: 'Danza',
          image: 'http://www.madrimasd.org/blogs/matematicas/files/2016/01/danzaclasica.jpg',
          checked: false
        },
        {
          title: 'Fotografía',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fountain_pen_writing_%28literacy%29.jpg/300px-Fountain_pen_writing_%28literacy%29.jpg',
          checked: false
        }
      ]
    }
  },
  computed: {
    checkedInterests: {
      get () {
        return this.interestsLiked
      },
      set (val) {
        if(val.length >= this.maxSelected){
          for (var x in this.interests){
            if( !this.$refs.option[x].selected )
              this.$refs.option[x].disabled = true
          }
          this.$emit('valid', true)
          for (var x in this.interests){
            if( this.$refs.option[x].selected )
              this.$store.commit('SET_INTEREST', x, true)
            else
              this.$store.commit('SET_INTEREST', x, false)
          }
        } else {
          for (var x in this.interests){
            this.$refs.option[x].disabled = false
          }
          this.$emit('valid', false)
        }
          this.interestsLiked = val
      }
    }
  },
  methods: {
    next() {
      this.step++
    }
  }
}
</script>

<style scoped>
.option-wrapper {
  overflow-y: scroll;
  max-height: 500px;
}
.button {
  background: #3853ff;
  width: 100%;
  border-radius: 100px;
  font-size: 1.2em;
}
</style>
