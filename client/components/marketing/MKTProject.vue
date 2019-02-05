<template>
  <div
    :style="{ 'background-image': 'url(' + image + ')' }"
    class="project-card-featured">
    <div
      :style="{ 'background-image': 'url(' + image + ')' }"
      class="project-card-featured__hover" />
    <div class="project-card-inline__cover__obscurer" />
    <div class="user-list-line">
      <a 
        v-for="(avatar, index) in contributors"
        :key="index"
        class="avatar-link"
        href="#">
        <div
          ref="avatar"
          :style="{ 'background-image': 'url(' + avatar + ')' }"
          class="avatar"/>
      </a>
      <div class="plus-users">
        <strong>545</strong>
        <span>usuarios</span>
      </div>
    </div>
    <div class="bottom">
      <!-- <div class="meta">
        
      </div> -->
      <div class="title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap"

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    contributors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      timeline: null
    }
  },
  mounted() {

    this.timeline = new TimelineLite({
      onComplete: () => {
      }
    })
  },
  methods: {
    addContributor() {
      const avatar = this.$refs.avatar

      let actual = 2

      this.timeline.to(
        avatar[2],
        1.5,
        {
          scale: 1,
          opacity: 1,
          ease: Elastic.easeOut.config(1, 0.3)
        }
      )
      this.timeline.restart()
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card-featured {

  // width: 304px;
  width: 100%;
  height: 344px;

  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  border-radius: 5px;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;

  .bottom {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;

    .meta {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      overflow: hidden;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      font-size: 12px;
      color: hsla(0,0%,100%,.4);
      line-height: 1.3;
    }

    .title {
      @media only screen and (min-width: 960px) {
        font-size: 36px;
        line-height: 40px;
      }
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;

      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      width: 100%;
      margin: 8px 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      color: #fff;
    }
  }
}

.project-card-featured__hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: opacity .2s ease-in;
  opacity: 0;
  filter: brightness(1.4);
  mask-image: linear-gradient(180deg, transparent 40%, #000);
  background: no-repeat 50%/cover;
  z-index: 1;
}

.project-card-inline__cover__obscurer {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  -webkit-mask-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
  -webkit-mask-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));
  mask-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
  mask-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));
  border-radius: 6px;
}

.avatar {
  transform: scale(0.2);

  width: 24px;
  height: 24px;


  border-radius: 50%;
  background: transparent no-repeat 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-list-line {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  .avatar-link {
    background-image: none;
    margin-left: -6px;
  }

  .plus-users {
    font-size: 14px;
    line-height: normal;
    font-weight: 400;
    padding-left: 8px;
    text-align: left;
    color: #fff;

    strong:before {
      content: '+';
    }
  }
}
</style>
