<template>
  <div
    class="card">
    <!-- @mouseover="mouseOver"> -->
    <div class="card-wrapper">
      <div
        :style="{ 'background-image': 'url(' + image + ')' }"
        class="image"/>

      <div class="content">
        <div class="meta">
          <img
            class="icon"
            src="~/assets/img/theater.svg" >
          {{ category }}
        </div>
        <div class="title">
          {{ title }}
        </div>
        <div class="extra">
          <div class="author-wrapper">
            <Avatar
              :image="authorImage"
              border-color="#101a25"
              size="mini"/>
            <div class="author-meta">
              <div class="author-date">
                <!-- {{ date }} -->
              </div>
            </div>
          </div>
          <div
            v-if="contributorsImages || contributorsExtras"
            class="cetaceans">
            <div
              v-for="(image, index) in contributorsImages"
              ref="avatar"
              :key="index"
              :style="{ 'background-image': 'url(' + image + ')' }"
              class="avatar"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap"

export default {
  props: {
    /**
     * Image to be displayed in the Card
     */
    image: {
      type: String,
      required: true,
    },
    /**
     * Title of the project
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Category of the project
     */
    category: {
      type: String,
      required: true,
    },
    /**
     * Image of the author
     */
    authorImage: {
      type: String,
      required: false,
      default: null
    },
    /**
     * Name of the author
     */
    authorTitle: {
      type: String,
      required: false,
      default: null
    },
    /**
     * Array of profile pictures of contributors
     */
    contributorsImages: {
      type: Array,
      required: false,
      default: null,
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
$radius-default: 5px;
$font-text: 'Soleil';
$space-xs: 5px;
$space-s: 10px;
$weight-semi-bold: 600;

.avatar {
  transform: scale(0.2);

  background: #d3d7dd;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  border-style: solid;
  border-width: 2px;
  color: #7e92af;
  display: inline-grid;

  justify-items: center;
  vertical-align: middle;

  height: 35px;
  width: 35px;

  align-items: center;
  font-family: Soleil, Helvetica, Arial, sans-serif;

  border-color: white;

  &:not(:last-child) {
    margin-right: -9px;
  }
}

.image-hover {
  background: #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;
  border-top-left-radius: $radius-default;
  border-top-right-radius: $radius-default;
}

.location {
  color: #fff;
  bottom: 0;
  position: absolute;
  padding: 15px;

  text-shadow: 0px 0px 7px #000;
  & i {
    font-size: 20px;
  }
}

.card {
  position: relative;
  display: inline-block;
  font-family: $font-text;
  text-decoration: none;

  &:hover {
    & .image-hover {
      visibility: visible;
      opacity: 1;
    }
  }
}

.share {
  position: absolute;
  background-color: black;
  width: auto;
  padding: $space-xs $space-s;
  top: $space-xs;
  left: $space-xs;
  border-radius: 50px;
  z-index: 1;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  & .no-of-shares {
    margin-left: 10px;
  }
}

.like {
  position: absolute;
  background-color: black;
  width: auto;
  padding: $space-xs $space-s;
  top: $space-xs;
  right: $space-xs;
  border-radius: 50px;
  z-index: 1;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ff0072;

  & .no-of-likes {
    margin-left: 10px;
  }
}

.card-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;

  color: #000;

  width: 100%;
  /* min-width: 450px; */

  & .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 140px;

    position: relative;

    border-top-left-radius: $radius-default;
    border-top-right-radius: $radius-default;
  }

  & .content {
    display: grid;
    grid-template-rows: auto 1fr auto;

    padding: $space-xs $space-s;

    border-radius: 0 0 $radius-default $radius-default;

    background-color: #ffffff;
    color: #4e5b72;

    & .title {
      font-size: 1em;
    }
    & .meta {
      display: flex;
      align-items: center;
      font-size: 0.97em;
      & .icon {
        width: 21px;
        margin-right: 10px;
      }
    }
    & .description {
      // color: rgb(106, 106, 106);
      color: hsl(0, 0%, 92%);
      margin-bottom: $space-s;
      position: relative;

      & .curtain {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0), rgb(16, 26, 37));
        bottom: 0;
      }
    }
    & .extra {
      display: flex;
      align-self: end;
      justify-content: space-between;

      & .author-wrapper {
        display: flex;
        align-items: center;

        & .author-meta {
          margin-left: $space-xs;

          & .author-date {
            color: #8e9baf;
            font-size: 0.85em;
          }
        }
      }
    }
  }
}
</style>
