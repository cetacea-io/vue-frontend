<template>
  <nuxt-link
    :style="{ 'background-image': 'url(' + image + ')' }"
    :to="route"
    class="project-card-featured">
    <div
      :style="{ 'background-image': 'url(' + image + ')' }"
      class="project-card-featured__hover" />
    <div class="project-card-inline__cover__obscurer" />
    <div 
      class="user-list-line">

      <slot name="header"/>

    </div>
    <div class="bottom">
      <div
        class="meta"
        style="font-size: 13px;font-weight:600;text-transform:uppercase;">
        {{ classification }} • {{ area }}
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="line-separator"/>
      <div class="meta">
        <div class="icon">
          <i class="far fa-heart" />
          <strong class="icon-text">
            {{ currentViews }}
          </strong>
        </div>
        <div class="icon">
          <i class="far fa-eye" />
          <strong class="icon-text">
            {{ currentLikes }}
          </strong>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    classification: {
      type: String,
      required: false,
      default: ''
    },
    views: {
      type: Number,
      required: true,
      default: 0
    },
    likes: {
      type: Number,
      required: true,
      default: 0
    },
  },
  computed: {
    currentLikes () {
      return this.abbrNum(this.likes, 2)
    },
    currentViews () {
      return this.abbrNum(this.views, 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-wrapper {
  position:absolute;
  text-align:center;
  border-radius:20px;
  background: #00000087;
  box-shadow:0px 0px 45px 13px #63636330;

  .number {
    font-weight:600;
    line-height:0.9;
    font-size: 1.2em;
    color: black;
    mix-blend-mode: lighten;
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 10px 13px 0px;
  }

  .month {
    color: black;
    font-weight:600;
    font-size: 0.88em;
    mix-blend-mode: lighten;
    background: #fff;
    padding: 0px 10px 10px;
    border-radius: 0 0 15px 15px;
  }
}

.icon {
  &:not(:first-child){
    margin-left: 30px;
  }
  .icon-text{
    line-height:1;
    margin:auto 0 auto 6px;
  }
}

.line-separator {
  width: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.22));
  height: 1px;
  margin: 10px 0px;
  z-index: 1;
}
</style>


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
  padding: 24px 24px 10px 24px !important;
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
      color: #fff;
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
      // font-size: 12px;
      // color: hsla(0,0%,100%,.4);
      line-height: 1.3;
    }

    .title {
      @media only screen and (min-width: 960px) {
        font-size: 24px;
        line-height: 30px;
      }
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;

      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
      -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      width: 100%;
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

  .avatar-link:not(:first-child) {
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
    text-shadow: 0px 0px 3px #0009;

    strong:before {
      content: '+';
    }
  }
}
</style>