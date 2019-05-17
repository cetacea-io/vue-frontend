<template>
  <nav
    ref="navbar"
    class="navbar-container">
    <slot />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentScroll: false,
      prevScroll: false,
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
    handleScroll() {
      this.currentScroll = window.scrollY
      if(this.currentScroll > this.prevScroll) {
        // this.$refs.navbar.style.position = 'fixed';
        // this.$refs.navbar.style.transform = "translateY(0)";
      }
      else {
        // this.$refs.navbar.style.transform = "translateY(76px)";
      }
      this.prevScroll = this.currentScroll
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  position: relative;
//   z-index: 9;

  top: 0px;
  left: 0;

  transition: all 0.3s ease;
}

</style>
