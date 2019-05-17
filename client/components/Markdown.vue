<template>
  <span
    id="markdown"
    v-html="compiledMarkdown" />
</template>

<script>
import marked from 'marked'

export default {
  name: 'Markdown',
  props: {
    content: {
      type: String,
      required: true,
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content, {sanitize: true})
    }
  }
}
</script>

<style lang="scss">
#markdown{
  color: #9fa9b2;
  max-width: 100%;

  h1, h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: .3em;
  }

  strong {
    font-size: 1.028em;
    color: #fff;
    font-weight: 800;
  }

  img {
    max-width: 100%;
  }

  a {
    color: hsla(207, 56%, 50%, 1);
  }
}
</style>
