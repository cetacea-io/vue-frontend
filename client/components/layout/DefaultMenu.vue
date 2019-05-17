<template>
  <div style="flex: 1;">

    <div class="nav_position">
      <div
        ref="inner"
        class="nav_inner">

        <div class="nav_mobile">

          <img
            style="height:14px; display: flex; align-self:center;"
            src="~/static/logo.svg">

          <div
            class="wrapper-menu"
            @click="mobileMenu = !mobileMenu">
            <div class="line-menu half start" />
            <!-- <div class="line-menu" /> -->
            <div class="line-menu half end" />
          </div>

        </div>

        <transition name="fade-mobile">
          <div
            v-if="mobileMenu"
            class="nav_main">

            <nuxt-link 
              to="/"
              class="nav_logo-wrap">
              <img
                style="height:14px; display: flex; align-self:center;"
                src="~/static/logo.svg">
            </nuxt-link>


            <div class="nav_list">
              <ul 
                class="nav_items"
                @mouseout="somo"
                @mouseover="some">

                <li
                  class="nav_item"
                  @mouseover="same">

                  <div>Descubre</div>
                  <div 
                    ref="one"
                    class="nav_dropdown thingy">
                    <div class="nav_1">
                      <ul class="products_ul">

                        <li
                          style="background-image: url(https://dramaticarts.usc.edu/files/2014/07/MFA-Acting-800x450.jpg);"
                          class="products_li">
                          <div class="curtain" />
                          <nuxt-link 
                            to="/"
                            class="products_link-block">
                            <div class="nav_link-inner">
                              <div/>
                              <div class="nav_link-bottom">
                                <h4 class="nav_link-title">Proyectos</h4>
                                <p class="nav_paragraph">Colabora con tus habilidades en proyectos.</p>
                              </div>
                            </div>
                          </nuxt-link>
                        </li>

                        <li
                          style="background-image: url(https://www.middlechildtheatre.co.uk/wp-content/uploads/2018/06/late-night-bingo-acting-wmp-50_orig.jpg);"
                          class="products_li">
                          <div class="curtain" />
                          <nuxt-link 
                            to="/"
                            class="products_link-block">
                            <div class="nav_link-inner">
                              <div/>
                              <div class="nav_link-bottom">
                                <h4 class="nav_link-title">Cursos / Talleres</h4>
                                <p class="nav_paragraph">Avanza en tu carrera o aprende algo nuevo cada dia.</p>
                              </div>
                            </div>
                          </nuxt-link>
                        </li>

                        <li
                          style="background-image: url(https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);"
                          class="products_li">
                          <div class="curtain" />
                          <nuxt-link 
                            to="/"
                            class="products_link-block">
                            <div class="nav_link-inner">
                              <div/>
                              <div class="nav_link-bottom">
                                <h4 class="nav_link-title">Convocatorias</h4>
                                <p class="nav_paragraph">Avanza en tu carrera o aprende algo nuevo cada dia.</p>
                              </div>
                            </div>
                          </nuxt-link>
                        </li>

                      </ul>
                    </div>
                  </div>

                </li>
              </ul>

              <div class="nav_item">
                <nuxt-link 
                  to="/"
                  class="search-trigger">
                  Buscar
                </nuxt-link>
              </div>

            </div>

            <Button @click.native="showModal('ModalLogin')">
              <div class="user-icon" />
              Registrate
            </Button>

            <div
              class="nav_x"
              @click="mobileMenu = false" />

          </div>

        </transition>

      </div>
    </div>

    <div
      ref="curtain"
      class="nav_background" />

  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import NavbarSearch from '@/components/NavbarSearch'

export default {
  components: {
    NavbarSearch
  },
  data() {
    return {
      mobileMenu: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
    }),
    isAuth() {
      return !!this.user
    }
  },
  methods: {
    ...mapMutations({
      showModal: `showModal`
    }),
    some () {
      this.$refs.inner.style.height = '460px'
      this.$refs.inner.style.background = 'rgba(46,46,46,1)'

      this.$refs.curtain.style.opacity = '1'
      this.$refs.curtain.style.display = 'block'
    },
    somo () {
      this.$refs.inner.style.height = '60px'
      this.$refs.inner.style.background = '#000'

      this.$refs.curtain.style.opacity = '0'
      this.$refs.curtain.style.display = 'none'
    },
    same () {
      this.$refs.one.style.opacity = '1'
      this.$refs.one.style.display = 'block'
    },
  }
}
</script>


<style lang="scss" scoped>
.fade-mobile-enter-active, .fade-mobile-leave-active {
  transition: all .2s ease-out;
  // transition: transform .2s ease-out;
}

.fade-mobile-enter, .fade-mobile-leave-to {
  opacity: 0;
  transform: translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.fade-mobile-enter-to, .fade-mobile-leave {
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}
</style>

<style lang="scss" scoped>
.nav_position {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  flex: 1;
}

.nav_inner {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  display: flex;
  overflow: hidden;
  height: 60px;
  align-items: center;
  flex: 0 0 auto;
  background-color: #000;
}

.nav_mobile {
  display: none;

  @media (max-width: 767px) {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 1;
    display: flex;
    height: 50px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: #000;
    align-items: center;
  }
}

.wrapper-menu {
  width: 17px;
  height: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;

  margin-right: 20px;

  .line-menu {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 1px;
  }

  .half {
    // width: 50%;
  }

  .start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  .end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

}



.nav_logo-wrap {
  position: relative;
  display: flex;
  height: 100%;
  margin-bottom: 0px;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;
  flex: 0 0 auto;

  @media (max-width: 767px) {
    position: absolute;
    left: 8vw;
    top: 8vw;
    height: auto;
    padding: 20px;
  }
}



.nav_main {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  height: 60px;
  align-items: stretch;
  background-color: rgba(0, 0, 0, .15);

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0px;
    z-index: 999;
    display: flex;
    overflow: scroll;
    height: auto;
    padding: 25vw 8vw 20vw;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #000;
    -webkit-transform-origin: 100% 0%;
    -ms-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
  }
}

.navi {
  background-color: rgba(46,46,46,1);
  width: 1100px;
  height: 460px;
}

.nav_background {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 0;
  display: none;
  background-color: rgba(0, 0, 0, .5);
  opacity: 0;
}

.thingy {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  opacity: 0;
  display: none;
}

.thingy2 {
  opacity: 1 !important;
  display: block !important;
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

.nav_list {
  display: flex;

  .nav_items {
    display: flex;
    height: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    list-style: none;

    .nav_dropdown {
      position: absolute;
      left: 0px;
      top: 100%;
      right: 0px;
      display: none;

      @media (max-width: 767px) {
        position: absolute;
        left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 1000;
      display: none;
      overflow: scroll;
      padding-right: 8vw;
      padding-bottom: 16vw;
      padding-left: 8vw;
      background-color: #222;
      }
    }
  }
}

.nav_x {
  display: none;

  @media (max-width: 767px) {
    position: absolute;
    top: 8vw;
    right: 8vw;
    display: block;
    width: 76px;
    height: 76px;
    margin-top: -10px;
    margin-right: -10px;
    background-image: url("https://assets-global.website-files.com/583347ca8f6c7ee058111b3b/5b3fef9a95a9f00254df7e62_x.svg");
    background-position: 50% 50%;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
}

.nav_item {
  display: flex;
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}

.nav_1 {
  display: flex;
  height: 400px;
  flex-direction: column;
  flex-wrap: nowrap;
}

.products_ul {
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  flex: 1;
  list-style: none;
  .products_li {
    display: flex;
    width: 16.6666%;
    flex: 0 0 auto;
    background-size: cover;
    background-position: center top;
    position: relative;

    .products_link-block {
      display: flex;
      margin-bottom: 0px;
      padding: 35px 20px 35px 40px;
      box-orient: horizontal;
      box-direction: normal;
      flex-direction: row;
      box-pack: center;
      justify-content: center;
      box-align: stretch;
      align-items: stretch;
      flex: 1;
      color: hsla(0, 0%, 100%, 0.5);
      text-decoration: none;
      max-width: 100%;

    }
  }
}

.nav_link-inner {
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  box-pack: justify;
  justify-content: space-between;
  box-align: start;
  align-items: flex-start;
  flex: 1;

  .nav_link-bottom {
    position: relative;
    height: 0px;
    min-height: 108px;
    box-flex: 0;
    flex: 0 0 auto;
    transition: height 200ms cubic-bezier(.215, .61, .355, 1);

    .nav_link-title {
      margin-top: 0px;
      margin-bottom: 12px;
      color: #fff;
      font-size: 15px;
      line-height: 20px;
      font-weight: 500;
    }

    .nav_paragraph {
      margin-top: 0px;
      margin-bottom: 0px;
      box-flex: 0;
      flex: 0 0 auto;
      font-size: 12px;
      line-height: 19px;
      font-weight: 400;
      color: hsl(0, 0%, 68%);
    }
  }
}

.curtain {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, #000000f5, #0000003b);
}

.searcher {
  margin: 0 20px;
}
.secondary-section {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.selected {
  border-bottom: 2px solid var(--blue);
  color: var(--blue);
}

.normal{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.user-icon {
  width: 24px;
  height: 24px;
  margin-right: 11px;
  background: url('~assets/img/round-account.svg');
  background-size: cover;
}

.search-trigger{
  color: transparent;
  text-indent: 100%;
  overflow: hidden;
  white-space: nowrap;

  display: block;
  position: relative;
  z-index: 3;
  height: 16px;
  width: 16px;
  float: right;
  transition: transform 0.3s;

  &::before {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0);
    height: 100%;
    width: 100%;
    background-color: #dd85ac;
    border-radius: 50%;
    transition: transform 0.3s;
    content: '';
    position: absolute;
  }

  &::after {
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    transform: translateX(-50%) translateY(-50%);
    height: 16px;
    width: 16px;
    background: url('~assets/img/cd-icons.svg') no-repeat -16px 0;
    content: '';
    position: absolute;
  }
}
</style>
