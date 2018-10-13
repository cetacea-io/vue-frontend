<template>
  <div>

    <div>
      <AppTextarea v-model="content"/>
    </div>

    <div>
      <Button @click.native="submit">Enviar</Button>
    </div>

  </div>
</template>

<script>
import AppTextarea from '@/components/ui/AppTextarea'

// import { createComment } from '@/queries/createComment'

export default {
  components: {
    AppTextarea
  },
  props: {
    project: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      content: null
    }
  },
  methods: {
    async submit() {
      const content = this.content
      const project = this.project
      //   try {
      //     const res = await this.$apollo.mutate({
      //       mutation: createComment,
      //       variables: {
      //         content: this.content,
      //         project: this.project
      //       }
      //     })
      //   } catch (e) {
      //     console.error(e)
      //   }
    }
  }
}
</script>

<style scoped>
</style>
