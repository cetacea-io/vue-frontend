<template>
  <div>
    <div class="container orientation-wrapper">
      <Interests
        v-if="step == 1"
        @mounted="loading=false"/>
      <Loader v-if="loading" />
      <Abilities v-if="step == 2"/>
      <NotMentionedInterests v-if="step == 3"/>
      <Abilities v-if="step == 4"/>
    </div>
    <div class="footer-navbar">
      <div class="container footer-container">
        Paso {{ step }} de {{ numberOfSteps }}
        <Button @click.native="submit()">
          Continuar
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

const Interests = () => ({
  component: import('../../components/orientation/Interests'),
  loading: Loader,
  delay: 5000
})

export default {
  asyncData({params, redirect, query}){
    let { step } = parseInt(query)
    if (step == null) {
      step = 1
      redirect({ path: 'orientation', query: { step: step } })
    }
    return {
      step: step
    }
  },
  components: {
    Loader,
    Interests,
    Abilities: () => ({
      component: import('../../components/orientation/Abilities'),
      loading: Loader,
      delay: 5000,
      timeout: 6000
    }),
    NotMentionedInterests: () => ({
      component: import('../../components/orientation/NotMentionedInterests'),
      loading: Loader,
      delay: 5000,
      timeout: 6000
    }),
  },
  data() {
    return { 
      numberOfSteps: 5,
      loading: true,
    }
  },
  layout: 'blank',
  computed: {
    query() {
      return this.$route.query.step
    }
  },
  methods: {
    submit() {
      if (this.step < this.numberOfSteps) {
        this.step += 1
        this.$router.replace({ path: 'orientation', query: { step: this.step } })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.orientation-wrapper{
  padding: 66px 10px;
}
.footer-navbar{
  position: fixed;
  bottom: 0;
  background: #ffffff;
  width: 100%;
  padding: 7px 11px;
  color: #000;
 
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  display: flex;
  z-index: 9;
}

.footer-container{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
