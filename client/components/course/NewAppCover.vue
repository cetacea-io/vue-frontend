<template>
  <div
    name="fade"
    class="container meta-wrapper"
    tag="div">
    <div
      :class="['featured-wrap', {'unavailable': !available}]"
    >
      
      <div class="featured-inner">
        <h1 class="subtitle"> <span class="type">{{ classification }}</span> • {{ area }} </h1>
        <h2 class="title">
          {{ title }}
        </h2>

        <div
          style="margin: 30px 0 30px;"
          class="author-wrapper">
          <div 
            date="something"
            class="meta"
          >
            <div>
              <div>
                <i 
                  class="fas fa-star"
                  style="color: #ffd401;font-size: 0.94em;" />
              </div>
            </div> 
            <div
              class="desc"
              style="font-size: 0.95em;margin-left: 13px;">
              <span>4.4</span>
              <span style="color: darkgrey;letter-spacing: 0.8px;">(1,245)</span>
            </div>
            <div
              class="desc"
              style="font-size: 0.95em;margin-left: 13px;">
              <span>•</span>
            </div>

            <div 
              class="desc"
              style="font-size: 0.95em;margin-left: 13px;"
            >
              <span>120</span>
              <span 
                style="color: darkgrey;letter-spacing: 0.8px;">Enrolados</span>
            </div>
          </div>
        </div>





        <div class="author-wrapper">
          <!-- <div class="author-avatar" /> -->

          <UserSnippet
            :name="authorTitle"
            :image="authorPicture"
            :date="`something`"/>

          <div class="author-title">{{ currentAuthor }}</div>
        </div>

        <div style="display: flex;">
          <div
            style="cursor: pointer; background: #fff;color: #000;padding: 11px 20px;border-radius: 5px;display: inline-block;text-align: center;"
            @click="$emit('call-to-action')"
          >
            <span style="display: block;font-size: 1.2em;font-weight: 600;">Inscribirme</span>
            <span style="display: block;font-size: 0.9em;">Empieza en dos dias</span>
          </div>
          <!-- <div class="meta">
            <div class="icon">
              <i class="far fa-heart"/>
              <strong class="icon-text">{{ currentLikes }}</strong>
            </div>
            <div class="icon">
              <i class="far fa-eye"/>
              <strong class="icon-text">{{ currentViews }}</strong>
            </div>
          </div> -->
        </div>
      </div>

    </div>


    <div
      :style="{ 'background-image': 'url(' + image + ')' }"
      :class="['cover-image', {'unavailable': !available}]"
    >

      <div class="cover-curtain" />

    </div>

  </div>
</template>

<script>
import UserSnippet from '@/components/UserSnippet'

export default {
  components: {
    UserSnippet,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    classification: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    authorTitle: {
      type: String,
      required: true
    },
    authorPicture: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.meta-wrapper {
  @media (max-width: 767px) {
    display: flex;
    flex-flow: column-reverse;
  }
}

.featured-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 65vh;
  max-width: 56%;
  position: relative;

  @media (max-width: 767px) {
    max-width: 100%;
    height: auto;
    top: -15px;
  }

  .featured-inner {
    @media (max-width: 767px) {
      bottom: 0;
      width: 100%;
      padding: 0 19px;
    }
  }

  &.unavailable {
    opacity: 0.7;
  }
}

.title {
  font-size: 2.1em;
  text-shadow: 0px 0px 7px #000;

  @media (max-width: 767px) {
    font-size: 1.3em;
  }
}

.subtitle {
  font-size: 1.0em;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 0.85em;
    margin-top: 0;
    margin-bottom: 8px;
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
  margin: 20px 0 27px;

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
  height: 69vh;
  width: 64%;
  background-position: center; //52% 28%
  background-size: cover; //100%
  background-color: #000;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: -1;

  @media (max-width: 767px) {
    position: relative;
    height: 300px;
    width: 100%;
    background-position: none;
  }

  &.unavailable {
    filter: grayscale(1);
    opacity: 0.7;
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
