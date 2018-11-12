<template>
  <nav
    ref="navbar"
    :style="{ top: computedTop }"
    class="navbar-container">
    <div 
      v-if="user"
      class="secondary-section container">
      <!-- <Avatar 
        icon 
        image="/no-avatar.svg"/>
      {{ user.email }} -->
      <i class="selected fas fa-home"/>
      <i class="fas fa-search"/>
      <i class="fas fa-bell"/>
      <i class="fas fa-envelope"/>
    </div>
    <div 
      v-else
      class="normal container">
      <img 
        style="height:50px;"
        src="~/static/icon.png">
      <nuxt-link to="/signup">
        <Button
          type="a">
          Comienza
        </Button>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
// import AppAvatar from '~/components/atoms/AppAvatar'

export default {
  name: 'TheNavbar',
  data() {
    return {
      currentScroll: false,
      prevScroll: false,
      top: '0px'
    }
  },
  computed: {
    computedTop() {
      return this.top
    },
    user() {
      return this.$store.getters['auth/isAuthenticated']
    }
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
        this.top = `-${this.$refs.navbar.clientHeight}px`
      }
      else {
        this.top = '0px'
      }
      this.prevScroll = this.currentScroll
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  background: #000;
  // background: $color-ucla-gold;
  height: auto; /* This is for the main menu bit at the top */
  /*width: 100%;			/* This means on every screen no matter the size, the width will cover the top  */
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  display: flex;
  width: 100%;
  position: sticky;
  z-index: 9;

  // @media #{$media-query-l}{
  //   background: red;
  // }

  transition: top 0.3s ease;

  & > .primary-section {
    background: red;
  }
}
ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}
li {
  text-decoration: none;
  list-style: none;
  display: inline-block;
}
.secondary-section {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
i {
  width: 100%;
  padding: 16px 0;
  font-size: 1.19em;
}
.selected {
  border-bottom: 2px solid var(--blue);
  color: var(--blue);
}

.normal{
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
