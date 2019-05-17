<template>
  <div>
    <div style="width: 100%; height: 100%; position: relative;">
      <no-ssr>
        <AppCarrousel>
        
          <div 
            v-for="(position, index) in project.positions"
            :key="index"
            class="position-schema">

            <MiniPositionCard
              :id="position.id"
              :title="position.title"
              :description="position.description"
              :contributors="position.randomContributors"
              :already-applied="position.alreadyApplied"
            />

          </div>

        </AppCarrousel>
      </no-ssr>
    </div>

    <article class="content-wrapper">

      <Card style="background: #071119;">
        <Markdown :content="project.overview" />
      </Card>

    </article>
  </div>
</template>

<script>
import AppCarrousel from '@/components/AppCarrousel'
import Markdown from '@/components/Markdown'
import MiniPositionCard from '@/components/project/MiniPositionCard'

export default {
  components: {
    AppCarrousel,
    Markdown,
    MiniPositionCard
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.position-schema {
  width: 80%;
  &:not(:first-child){
    margin-left: 10px;
  }
  @media only screen and (min-width: 960px) {
    width: 40%;
  }
}
</style>
