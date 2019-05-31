<template>
  <div
    name="fade"
    tag="div">
    <div class="featured-wrap">
      
      <div class="featured-inner">
        <h1 class="subtitle"> <span class="type">{{ currentClassification }}</span> • {{ currentArea }} </h1>
        <h2 class="title">
          {{ currentTitle }}
        </h2>

        <div class="author-wrapper">
          <!-- <div class="author-avatar" /> -->
          <div>Por</div>
          <div class="author-title">{{ currentAuthor }}</div>
        </div>

        <div style="display: flex;">
          <nuxt-link
            :to="`/course/${currentId}`" 
            style="background: #fff;color: #000;padding: 11px 20px;border-radius: 5px;display: inline-block;">
            Me interesa
          </nuxt-link>
          <div class="meta">
            <div class="icon">
              <i class="far fa-heart"/>
              <strong class="icon-text">{{ currentLikes }}</strong>
            </div>
            <div class="icon">
              <i class="far fa-eye"/>
              <strong class="icon-text">{{ currentViews }}</strong>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div
      :style="{ 'background-image': 'url(' + currentImage + ')' }"
      class="cover-image">

      <div class="cover-curtain" />

    </div>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      timer: null,
      currentNumber: 0,
      milliseconds: 5000
    }
  },
  computed: {
    currentId () {
      return this.list[Math.abs(this.currentNumber) % this.list.length].id
    },
    currentTitle () {
      return this.list[Math.abs(this.currentNumber) % this.list.length].title
    },
    currentArea () {
      return this.list[Math.abs(this.currentNumber) % this.list.length].area
    },
    currentImage () {
      return this.list[Math.abs(this.currentNumber) % this.list.length].image
    },
    currentClassification () {
      return this.list[Math.abs(this.currentNumber) % this.list.length].classification
    },
    currentAuthor () {
      return this.list[Math.abs(this.currentNumber) % this.list.length].author
    },
    currentLikes () {
      let rawLikes = this.list[Math.abs(this.currentNumber) % this.list.length].likes
      return this.abbrNum(rawLikes, 2)
    },
    currentViews () {
      let rawViews = this.list[Math.abs(this.currentNumber) % this.list.length].views
      return this.abbrNum(rawViews, 2)
    },
  },
  mounted () {
    // this.startRotation()
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.next, this.milliseconds)
    },
    stopRotation() {
      clearTimeout(this.timer)
      this.timer = null
    },
    next() {
      this.currentNumber += 1
    },
    prev() {
      this.currentNumber -= 1
    }
  }
}
</script>

<style scoped lang="scss">
.featured-wrap {
  width: 100%;
  height: 50vh;
  padding: 9% 4%;
  max-width: 56%;
  position: relative;

  @media (max-width: 767px) {
    max-width: 100%;
    height: 75vh;
  }

  .featured-inner {
    @media (max-width: 767px) {
      position: absolute;
      bottom: 0;
    }
  }
}

.title {
  font-size: 2.1em;

  @media (max-width: 767px) {
    font-size: 1.3em;
  }
}

.subtitle {
  font-size: 1.2em;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 0.85em;
  }

  .type {
    display: inline-block;
    background: #ff0182;
    // background: hsl(338, 100%, 50%)
    padding: 1px 9px;
  }
}

.meta {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.author-wrapper {
  display: flex;
  align-items: center;
  margin: 10px 0 20px;

  .author-avatar {
    width: 29px;
    height: 29px;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
    border: 2px solid #000;
    box-shadow: 0 0 0 2px #67686f;
  }

  .author-title {
    margin-left: 10px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: #dedede;
    font-size: 14px;
  }
}

.cover-image {
  height: 80vh;
  width: 64%;
  background-position: center; //52% 28%
  background-size: cover; //100%
  background-color: #000;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media (max-width: 767px) {
    height: 80vh;
    width: 100%;
    background-position: none;
  }

}

.cover-curtain {
  width: 20%;
  height: 100%;
  background: linear-gradient(to right, #000, #0000);

  @media (max-width: 767px) {
    width: 100%;
    height: 38%;
    background: linear-gradient(to top, #000, #0000);
    bottom: 0;
    position: absolute;
  }

}

.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
