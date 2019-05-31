<template>
  <nav
    ref="navbar"
    class="navbar-container">
    <DefaultMenu />
  </nav>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import DefaultMenu from '@/components/layout/DefaultMenu'

export default {
  name: 'TheNavbar',
  components: {
    DefaultMenu
  },
  data() {
    return {
      currentScroll: false,
      prevScroll: false,
      scrollTop: true
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
    // handleScroll() {
    //   this.scrollTop = window.scrollY > 0
    //   if (this.scrollTop) {
    //     this.$refs.navbar.style.background = "rgb(7, 17, 25)"
    //   } else  {
    //     this.$refs.navbar.style.background = "transparent";
    //   }

    //   this.currentScroll = window.scrollY
    //   if(this.currentScroll > this.prevScroll) {
    //     this.$refs.navbar.style.transform = "translateY(-100%)";
    //   }
    //   else {
    //     this.$refs.navbar.style.transform = "translateY(0px)";
    //   }
    //   this.prevScroll = this.currentScroll
    // }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  background: transparent;
  // background: $color-ucla-gold;
  height: auto; /* This is for the main menu bit at the top */
  /*width: 100%;			/* This means on every screen no matter the size, the width will cover the top  */
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  display: flex;
  width: 100%;
  // position: ;
  z-index: 9;

  top: 0;

  // @media #{$media-query-l}{
  //   background: red;
  // }

  transition: all 0.3s ease;

  & > .primary-section {
    background: red;
  }
  .mover {
    top: 0px;
  }
  .desmover {
    top: -100px;
  }
}
</style>
