<template>
  <nuxt-link 
    :to="route"
    :class="['inline', {'disabled': disabled}]"
  >
    <div>
      <div 
        :style="{ 'background-image': 'url(' + image + ')' }"
        :class="['cover', {'disabled': disabled}]"
      />
    </div>
    <div class="content-wrapper">
      <div>
        <div class="area">{{ area }}</div>
        <div class="title">{{ title }}</div>
      </div>
      <div>
        <div class="subcontent">Empieza en 2 dias | Quedan 4 lugares</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import baseItemComponent from '@/mixins/baseItemComponent'

export default {
  mixins: [baseItemComponent],
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>


<style lang="scss" scoped>
.cover {
  width: 224px;
  height: 114px;
  background-size: cover;

  &.disabled {
    filter: grayscale(1);
  }
}

.inline {
  display: flex;
  color: #fff;

  &.disabled {
    opacity: 0.5;
  }

}

.content-wrapper {
  padding: 5px 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.area {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title {
  margin-top: 3px;
  font-size: 1.1em;
}

.subcontent {
  font-size: 15px;
}
</style>
