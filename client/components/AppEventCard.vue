<template>
  <component 
    v-bind="thingsProps"
    :is="type"
    class="card">
    <!-- @mouseover="mouseOver"> -->
    <div class="card-wrapper">
      <div
        :style="{ 'background-image': 'url(' + image + ')' }"
        class="image">

        <div 
          style="
          position: absolute;
          background: #fff;
          text-align: center;
          left: 21px;
          bottom: -17px;
          padding: 10px 13px;
          border-radius: 5px;
          box-shadow: 0px 0px 45px 13px #63636330;
        ">

          <div 
            style="
            font-weight: 600;
            line-height: 0.9;
            font-size: 1.7em;
          ">
            21
          </div>
          <div 
            style="
            color: #f0425a;
            font-weight: 600;
          ">
            Mayo
          </div>

        </div>

        <!-- <div class="image-hover"/> -->
        <div
          v-if="location"
          class="location">
          <i class="fas fa-map-marker-alt"/> {{ location }}
        </div>
      </div>

      <div class="content">

        <div class="meta">
          <!-- <i class="fas fa-theater-masks"/>{{ category }} -->
        </div>
        <div class="title">
          {{ title }}
        </div>
        <div 
          style="
          font-size: 0.9em;
          color: #888888;
          line-height: 1;
          margin-top: 8px;
        ">
          12 de Abril a las 10:47 AM
        </div>
        <div class="extra">
          <div class="author-wrapper">
            <Avatar 
              :image="authorImage"
              border-color="#101a25"
              size="mini"/>
            <div class="author-meta">
              <div class="author-date">
                {{ date }}
              </div>
            </div>
          </div>
          <div
            v-if="contributorsImages || contributorsExtras"
            class="cetaceans">
            <AvatarList 
              :images="contributorsImages"
              :number="contributorsExtras"
              size="mini"
            />
          </div>
        </div>

        <div 
          style="
          width: 100%;
          height: 1px;
          background: #9c9c9c4d;
          margin: 10px 0;"/>

        <div class="footer">
          <div
            class="btn">
            <i class="far fa-heart" />
          </div>
          <strong 
            style="
            color: #b0b6bd;
            line-height: 1;
            margin: auto 0 auto 10px;">
            124
          </strong>
          <div
            class="btn">
            <i class="far fa-bookmark"/>
          </div>
        </div>

      </div>
    </div>

  </component>
</template>

<script>
/**
 * Used as project card in project navigation
 */
export default {
  name: "AppEventCard",
  status: "review",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the project card.
     */
    type: {
      type: String,
      default: "nuxt-link",
      required: false,
      validator: value => {
        return value.match(/(nuxt-link|a)/)
      },
    },
    /**
     * Sets dark mode to true
     */
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * I don't know what to write here
     */
    id: {
      type: Number,
      required: false,
      default: null
    },
    /**
     * I don't know what to write here
     */
    route: {
      type: String,
      required: false,
      default: '',
    },
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
     * Preferable location of the project
     */
    location: {
      type: String,
      required: false,
      default: "",
    },
    /**
     * Category of the project
     */
    category: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Image of the author
     */
    authorImage: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Name of the author
     */
    authorTitle: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Date of the projects
     */
    date: {
      type: String,
      required: false,
      default: ''
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
// Design Tokens with local scope
$color-nav-link: blue;
$color-nav-link-active: red;
$space-xs: 5px;
$space-s: 10px;
$radius-default: 10px;
$font-text: 'Soleil';
$weight-semi-bold: 500;

.nav {
//   @include stack-space($space-m);
  font-family: 'Soleil';
  font-size: 14px;
  line-height: 1;
  color: #fff;
  text-align: center;
  width: 100%;
//   @media #{$media-query-l} {
//     // This is how you’d use design tokens with media queries
//   }
  a {
    color: $color-nav-link;
    padding: $space-xs 0;
    margin: 0 $space-xs;
    text-decoration: none;
    display: inline-block;
    &:hover {
      color: $color-nav-link-active;
    }
    &.active {
      border-bottom: 2px solid $color-nav-link;
      font-weight: 600;
      color: $color-nav-link;
    }
  }
}

.footer{
  display: flex;
  .btn{
    border-radius: 100%;
    height: 40px;
    width: 40px;
    background: #d3d7dd85;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;

    &:first{
      
    }
    i {
      color: #7d889a;
      font-size: 1.1em;
    }
  }
}
</style>

<style lang="scss" scoped>

$color-nav-link: blue;
$color-nav-link-active: red;
$space-xs: 5px;
$space-s: 10px;
$radius-default: 10px;
$font-text: 'Soleil';
$weight-semi-bold: 500;
.image-hover {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  font-family: 'Soleil';
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

  width: 100%;
  // max-width: 450px;

  & .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 250px;

    position: relative;

    border-top-left-radius: $radius-default;
    border-top-right-radius: $radius-default;
  }

  & .content {
    display: grid;
    grid-template-rows: auto 1fr auto;

    padding: 8px 21px 18px;

    border-radius: 0 0 $radius-default $radius-default;

    background-color: #ffffff;
    color: #1d212f;

    & .title {
      font-size: 1.3em;
      font-weight: 600;
      margin-top: 24px;
      line-height: 1;
    }
    & .meta {
      font-size: 0.87em;
      & i {
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
