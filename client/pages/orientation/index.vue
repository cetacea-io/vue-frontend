<template>
  <div>
    <div class="container orientation-wrapper">
      <Interests
        v-if="step == 1"
        @interests-liked="changeInterests" />
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
import { updateInterests } from '@/graphql/mutations/user/updateInterests.gql'

const Interests = () => ({
  component: import('../../components/orientation/Interests'),
  delay: 5000
})

export default {

  asyncData({params, redirect, query}){
    let { step } = parseInt(query)
    console.log(step)
    console.log(step == null)
    // if (step == null) {
    //   step = 1
    //   redirect({ path: 'orientation', query: { step: step } })
    // }
    // return {
    //   step: step
    // }
  },
  validate({params, query}) {
    return true
  },
  components: {
    Interests,
    Abilities: () => ({
      component: import('../../components/orientation/Abilities'),
      delay: 5000,
      timeout: 6000
    }),
    NotMentionedInterests: () => ({
      component: import('../../components/orientation/NotMentionedInterests'),
      delay: 5000,
      timeout: 6000
    }),
  },
  data() {
    return { 
      numberOfSteps: 5,
      interestsLiked: [],
    }
  },
  layout: 'blank',
  middleware: ['authRequired'],
  computed: {
    step() {
      return this.$route.query.step
    },
  },
  methods: {
    changeInterests(value){
      this.interestsLiked = value
    },
    submit() {
      if (this.step < this.numberOfSteps) {
        let newStep = parseInt(this.step) + 1
        this.$router.replace({ path: 'orientation', query: { step: newStep } })
      }
      else {
        this.checkout()
      }
    },
    checkout() {
      const interests = this.interestsLiked
      let interestsID = []
      for (let i = 0; i < interests.length; i++) {
        interestsID.push(interests[i].id)
      }

      this.$apollo.mutate({
        mutation: updateInterests,
        variables: {
          categories: interestsID,
        },
        error(error){
          resolve(error)
        }
      })
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
