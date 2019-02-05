<template>
  <div style="width: 100%; background-color:#121f32;border-radius:8px; padding: 1.2em;">
    <div class="comment-wrapper">

      <div 
        :class="{ liked: liked}"
        class="likes">
        <i class="fas fa-angle-up"/>
        <div>{{ likes.length }}</div>
      </div>

      <div class="content-wrapper">
        <div class="content">
          {{ content }}
        </div>
        <div class="meta"> 
          {{ username }} · Responder · {{ date }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      type: Array,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    liked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.liked {
  color: #1890ff;
}

.comment-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;

  > .likes {
    padding-right: 20px;
    display: flex;
    align-self: flex-start;
    align-items: center;
    flex-direction: column;

    font-size: 1.3em;
  }

  > .content-wrapper {
    display: grid;
    grid-template-rows: 1fr auto;

    > .content {
      padding-bottom: 20px;
    }

    > .meta {
      align-self: end;
      font-size: 0.87em;
    }
  }
}
</style>
