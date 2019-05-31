<template>
  <div>
    <div class="container orientation-wrapper">
      <Interests
        v-if="step == 1"
        @ready="changeReady"
        @interests-liked="changeInterests"
      />
      <NotMentionedInterests
        v-if="step == 2"
        @ready="changeReady"
        @not-mentioned-interests="changeNotMentionedInterests"
      />
      <Abilities
        v-if="step == 3"
        @ready="changeReady"
        @abilities-text="changeAbilitiesText"
      />
    </div>
    <div class="footer-navbar">
      <div class="container footer-container">
        Paso {{ step }} de {{ numberOfSteps }}
        <div 
          :class="{ available: isReady }"
          class="btn-cus"
          @click="submit()">
          Continuar
        </div>
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
    if (step == null) {
      step = 1
      redirect({ path: 'orientation', query: { step: step } })
      // return {
      //   step: step
      // }
    }
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
      numberOfSteps: 3,
      interestsLiked: [],
      notMentionedInterestsLiked: null,
      abilitiesText: null,
      isReady: false,
    }
  },
  layout: 'blank',
  // middleware: ['authRequired'],
  computed: {
    step() {
      return this.$route.query.step
    },
  },
  methods: {
    changeInterests(value){
      this.interestsLiked = value
    },
    changeNotMentionedInterests(value){
      this.notMentionedInterestsLiked = value
    },
    changeAbilitiesText(value){
      this.abilitiesText = value
    },
    changeReady(value){
      this.isReady = value
    },
    submit() {
      if (this.isReady) {
        if (this.step < this.numberOfSteps) {
          let newStep = parseInt(this.step) + 1
          this.$router.replace({ path: 'orientation', query: { step: newStep } })
        }
        else {
          this.checkout()
        }
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

.btn-cus{
  background: rgba(93,124,137,.5);
  padding: 12px 34px;
  color: #fff;
  cursor:default;
  border-radius: 100px;
}

.available {
  background: #0043ff;
  cursor: pointer;
}
</style>
