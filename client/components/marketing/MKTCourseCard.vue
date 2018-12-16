<template>
  <div 
    v-bind="thingsProps"
    class="card">
    <!-- @mouseover="mouseOver"> -->
    <div class="card-wrapper">
      <div
        :style="{ 'background-image': 'url(' + image + ')' }"
        class="image">

        <!-- <div class="image-hover"/> -->
      </div>

      <div class="content">
        <div class="title">
          {{ title }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/**
 * Used as project card in project navigation
 */
export default {
  name: "MiniProjectCard",
  status: "review",
  release: "1.0.0",
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
     * Date of the projects
     */
    date: {
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
    },
    /**
     * Number of extras in the contributors
     */
    contributorsExtras: {
      type: Array,
      required: false,
      default: null,
    },
  },
  computed: {
    thingsProps() {
      if (this.type == "nuxt-link") return { to: this.route }
      else if (this.type == "a") return { href: this.route }
    },
  },
}
</script>

<style lang="scss" scoped>
$radius-default: 5px;
$font-text: 'Soleil';
$space-xs: 5px;
$space-s: 10px;
$weight-semi-bold: 600;

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
  grid-template-rows: 1fr auto;

  color: #000;

  // width: 100%;
  width: 188px;
  /* min-width: 450px; */

  & .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 188px;

    position: relative;

    border-top-left-radius: $radius-default;
    border-top-right-radius: $radius-default;
  }

  & .content {
    display: grid;
    grid-template-rows: auto 1fr auto;

    padding: 18px;

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
