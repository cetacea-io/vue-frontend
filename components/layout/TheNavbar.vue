<template>
  <nav class="navbar-container">
    <div class="logo-section">
      <!-- <AppLogo /> -->
      <div>
        Cetacea
      </div>
    </div>
    <div class="secondary-section">
      <div v-if="user">
        <!-- <Avatar 
          icon 
          image="/no-avatar.svg"/>
        {{ user.email }} -->
        <i class="fas fa-home"/>
        <i class="fas fa-search"/>
        <i class="fas fa-bell"/>
        <i class="fas fa-envelope"/>
      </div>
      <div v-else>
        <Button>Registrate</Button>
      </div>
    </div>
  </nav>
</template>

<script>
// import AppLogo from '~/components/atoms/AppLogo'
// import AppAvatar from '~/components/atoms/AppAvatar'

export default {
  name: 'TheNavbar',
  components: {
    // AppLogo,
  },
  data() {
    return {
      scrolled: false
    }
  },
  computed: {
    user() {
      return true
      // return this.$store.getters['auth/isAuthenticated']
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
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>

<style scoped>
.navbar-container {
  background: var(--black);
  height: auto; /* This is for the main menu bit at the top */
  /*width: 100%;			/* This means on every screen no matter the size, the width will cover the top  */
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9;

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
.logo-section {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.secondary-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
i {
  width: 100px;
}
</style>
