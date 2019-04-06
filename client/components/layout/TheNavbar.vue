<template>
  <nav
    ref="navbar"
    :style="{ top: computedTop }"
    class="navbar-container">
    <div
      v-if="isAuth"
      class="normal container">

      <img
        style="height:50px;"
        src="~/static/icon.png">

      <NavbarSearch class="searcher"/>

      <Avatar
        :image="user.profile.profilePicture" />

    </div>
    <div
      v-else
      class="normal container">

      <img
        style="height:50px;"
        src="~/static/icon.png">

      <NavbarSearch class="searcher"/>

      <Button @click.native="showModal('ModalLogin')">
        Registrate
      </Button>

    </div>
  </nav>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import NavbarSearch from '@/components/NavbarSearch'

export default {
  name: 'TheNavbar',
  components: {
    NavbarSearch
  },
  data() {
    return {
      currentScroll: false,
      prevScroll: false,
      top: '0px'
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      isAuthenticated: 'authentication/isAuthenticated'
    }),
    computedTop() {
      return this.top
    },
    isAuth() {
      return !!this.user
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations({
      showModal: `showModal`
    }),
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
  background: #2b2c40;
  // background: $color-ucla-gold;
  height: 76px; /* This is for the main menu bit at the top */
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
.searcher {
  margin: 0 20px;
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
