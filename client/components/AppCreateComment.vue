<template>
  <div>

    <div>
      <AppTextarea
        v-model="content"
        placeholder="Ingresa un comentario..."/>
    </div>

    <div>
      <Button @click.native="submit">Enviar</Button>
    </div>

  </div>
</template>

<script>
import AppTextarea from '@/components/ui/AppTextarea'
import { mapActions } from 'vuex'

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
    ...mapActions({
      submitComment: 'user/submit_comment'
    }),
    async submit() {
      const content = this.content
      const project = this.project
      this.submitComment({content, project})
    }
  }
}
</script>

<style scoped>
</style>
