<template>
  <div>
    <div class="">
      <NewAppCover 
        :title="title"
        :classification="classification"
        :area="area"
        :author-title="authorTitle"
        :author-picture="authorPicture"
        :image="coverImage"
        :available="available"
        @call-to-action="$emit('call-to-action')"
      />

      <slot class="container"/>

      <div class="container temp">

        <SocialShare
          :url="getFullPath"
          :title="getTitle"
          :description="getDescription"
          class="social-share"
          quote="Un nuevo curso en Cetacea"
          hashtags="arte,cultura,talleres"
          twitter-user="cetacea"/>

      </div>
    
    </div>

    <SecondNavbar
      v-if="available"
      style="background: #000;">
      <div class="container custom-header">
        <div
          style="
          height: 100%;
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;">
          
          
          <nuxt-link
            v-for="(tab, index) in tabs"
            :key="index"
            :to="`${currentRoute}${tab.route}`"
            class="tab"
            exact
          >
            {{ tab.title }}
          </nuxt-link>
    
        </div>
        <!-- <span v-if="course.dateAndTime && course.dateAndTime.startDate">
          Comienza {{ shortTimestamp(course.dateAndTime.startDate) }}
        </span> -->
        
        <!-- <div style="text-align:center;display: flex;">
          <PriceTag 
            :amount="600"
            currency="MXN"/>
          <div
            style="background-color: #3853ff;padding: 7px 16px;border-radius: 5px;">
            Adquirir
          </div>
        </div> -->
      </div>
    </SecondNavbar>

    <!-- <div 
      class="super-top"
    >
    
      <div 
        class="inside container"
      >
    
        <div
          :style="{ 'background-image': 'url(' + coverImage + ')' }"
          class="cover"
        />

        <div
          class="title"
        >
          {{ title }}
        </div>


        <div
          style="display: flex;">
          <div 
            style="background: #ff0099;"
            class="buten"
          >
            Add to cart
          </div>
          <div
            class="buten"
            style="border: 1px solid #fff;margin-left: 10px;
          ">
            Comprar
          </div>
        </div>
        
      </div>
    </div> -->

  </div>
</template>

<script>
import NewAppCover from '@/components/course/NewAppCover'
import SocialShare from '@/components/social-share/SocialShare'
import SecondNavbar from '@/components/layout/SecondNavbar'
import PriceTag from '@/components/PriceTag'

export default {
  components: {
    NewAppCover,
    SocialShare,
    PriceTag,
    SecondNavbar
  },
  props: {
    tabs: {
      type: Array,
      required: true
    },
    currentRoute: {
      type: String,
      required: true
    },
    title: {
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
    coverImage: {
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
  computed: {
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async handleScroll() {
      let passedCover = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

      // if (passedCover) {
      //   for (let i = 0; i <= 5; i++){
      //     await this.applyContent()
      //   }
      // }
    }
  },
}
</script>

<style lang="scss" scoped>
.super-top {
  width: 100%;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: 0 0 56px #000;

  .inside {
    display: flex;
    align-items: center;

    .cover {
      height: 100px;
      width: 142px;
      background-size: cover;
      background-position: center;
    }

    .title {
      font-size: 1.2em;
      font-weight: 600;
    }

  }
}

.buten{ 
  padding: 5px 10px;
  border-radius: 5px;
}

.custom-header {
  // position: fixed;
  // bottom: 0;
  background-color:#000;

  // @media only screen and (min-width: 960px) {
  //   padding: 1em;
  //   flex-flow: row;
  //   align-items: start;
  //   top: 0;
  //   position: sticky;
  // }
  display: grid;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 60px;
  grid-template-columns: 1fr auto;
  overflow-x: scroll;
  overflow-y: unset;
  @media only screen and (min-width: 960px) {
    overflow: unset;
  }
}

.temp {
  @media only screen and (min-width: 960px) {
    padding: 1em;
    flex-flow: row;
    align-items: start;
  }
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
  border-color: hsl(217, 32%, 15%);
  // border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  width: 100%;
  flex-flow: column;
  align-items: center;
  &:last-child{
    border: none;
  }
}

.social-share{
  @media only screen and (min-width: 960px) {
    padding: 0;
  }
  padding-top: 20px;
}

.tab {
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  color: #a6b5c5;
  width: 100%;
  justify-content: center;
  min-width: 158px;
  position: relative;
}

.nuxt-link-active {
  color: #fff !important;
  border-color: #fff !important;
  // border-color: #e6ecf7 !important;

  &:after{
    content: '';
    width: 0px;
    height: 0px;
    border-top: 8px solid #fff;
    border-right: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    position: absolute;
    bottom: -16px;
  }
}
</style>
