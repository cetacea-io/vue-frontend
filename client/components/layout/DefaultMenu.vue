<template>
  <div style="flex: 1;">

    <div class="nav_position">
      <div
        ref="inner"
        :class="['nav_inner', {'is-visible': desktopMenuActive}]">

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
            class="nav_main container">

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
                  :class="[
                    'nav_item',
                    {'disabled': handleSubmenuTitleSwitch(0)}
                  ]"
                  @mouseover="same(0)">

                  <div class="nav-text">Descubre</div>
                  <div 
                    :class="[
                      'nav_dropdown',
                      'thingy',
                      {'left-animation': handleSubmenuSwitch(0, 'left')},
                      {'right-animation': handleSubmenuSwitch(0, 'right')}
                    ]"
                  >

                    <div
                      class="nav_mobile-back-wrap"
                      @click="hideThing"
                    >
                      <div class="nav_mobile-back">
                        <img 
                          src="https://assets-global.website-files.com/5b16310a8abd739dc4fad4af/5b1767e9269b9c05e6d834fd_L.svg"
                          style="width: 10px;height: 16px;margin-right: 32px;"
                        >
                        <div>Descubre</div>
                      </div>
                    </div>

                    <div class="nav_1">
                      <ul class="products_ul">

                        <li
                          style="background-image: url(https://dramaticarts.usc.edu/files/2014/07/MFA-Acting-800x450.jpg);"
                          class="products_li">
                          <div class="curtain" />
                          <nuxt-link 
                            to="/hey"
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







                <li
                  :class="[
                    'nav_item',
                    {'disabled': handleSubmenuTitleSwitch(1)}
                  ]"
                  @mouseover="same(1)">

                  <div class="nav-text">Colabora</div>
                  <div
                    :class="[
                      'nav_dropdown',
                      'thingy',
                      {'left-animation': handleSubmenuSwitch(1, 'left')},
                      {'right-animation': handleSubmenuSwitch(1, 'right')}
                    ]"
                  >

                    <div
                      class="nav_mobile-back-wrap"
                      @click="hideThing"
                    >
                      <div class="nav_mobile-back">
                        <img 
                          src="https://assets-global.website-files.com/5b16310a8abd739dc4fad4af/5b1767e9269b9c05e6d834fd_L.svg"
                          style="width: 10px;height: 16px;margin-right: 32px;"
                        >
                        <div>Colabora</div>
                      </div>
                    </div>

                    <div class="nav_1">
                      <ul class="products_ul">

                        <li
                          style="background-image: url(https://dramaticarts.usc.edu/files/2014/07/MFA-Acting-800x450.jpg);"
                          class="products_li">
                          <div class="curtain" />
                          <nuxt-link 
                            to="/hey"
                            class="products_link-block">
                            <div class="nav_link-inner">
                              <div/>
                              <div class="nav_link-bottom">
                                <h4 class="nav_link-title">En cosas</h4>
                                <p class="nav_paragraph">Que pedo perrillo.</p>
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












                <li
                  :class="[
                    'nav_item',
                    {'disabled': handleSubmenuTitleSwitch(2)}
                  ]"
                  @mouseover="same(2)">

                  <div class="nav-text">Aprende</div>
                  <div 
                    :class="[
                      'nav_dropdown',
                      'thingy',
                      {'left-animation': handleSubmenuSwitch(2, 'left')},
                      {'right-animation': handleSubmenuSwitch(2, 'right')}
                    ]"
                  >

                    <div
                      class="nav_mobile-back-wrap"
                      @click="hideThing"
                    >
                      <div class="nav_mobile-back">
                        <img 
                          src="https://assets-global.website-files.com/5b16310a8abd739dc4fad4af/5b1767e9269b9c05e6d834fd_L.svg"
                          style="width: 10px;height: 16px;margin-right: 32px;"
                        >
                        <div>Aprende</div>
                      </div>
                    </div>

                    <div class="nav_1">
                      <ul class="products_ul">

                        <li
                          style="background-image: url(https://dramaticarts.usc.edu/files/2014/07/MFA-Acting-800x450.jpg);"
                          class="products_li">
                          <div class="curtain" />
                          <nuxt-link 
                            to="/hey"
                            class="products_link-block">
                            <div class="nav_link-inner">
                              <div/>
                              <div class="nav_link-bottom">
                                <h4 class="nav_link-title">En cosillass</h4>
                                <p class="nav_paragraph">Que pedo perrote dice el doctor que evite consumir cannabis.</p>
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

              <div 
                class="nav_item"
                @click="toggleSearch"
              >
                <div 
                  class="search-trigger"
                >
                  Buscar
                </div>
              </div>

            </div>

            <div class="nav_signup_wrap">
              <nuxt-link 
                class="button_main"
                to="/signup"
              >
                <!-- <div class="user-icon" /> -->
                Registrate
              </nuxt-link>
            </div>

            <div
              class="nav_x"
              @click="mobileMenu = false" />

          </div>

        </transition>

        <div 
          id="search"
          :class="['cd-main-search', {'is-visible': searchActive}]"
        >
          <form @submit.prevent="submitSearchForm">
            <!-- <input
              ref="searchInput"
              v-model="searchForm.query"
              type="search"
              placeholder="Search..."
            > -->

            <div class="cd-select">
              <span>in</span>
              <select name="select-category">
                <option value="all-categories">all Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
              <span class="selected-value">all Categories</span>
            </div>
          </form>

          <div
            :class="['cd-search-suggestions', {'is-visible': searchActive}]"
          >
            <div class="news">
              <h3>News</h3>
              <ul>
                <li>
                  <a 
                    class="image-wrapper"
                    href="#0"
                  >
                    <img
                      src="img/placeholder.png"
                      alt="News image"
                    >
                  </a>
                  <h4>
                    <a
                      class="cd-nowrap"
                      href="#0"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </a>
                  </h4>
                  <time datetime="2016-01-12">Feb 03, 2016</time>
                </li>

                <li>
                  <a
                    class="image-wrapper"
                    href="#0"
                  >
                    <img
                      src="img/placeholder.png"
                      alt="News image"
                    >
                  </a>
                  <h4>
                    <a
                      class="cd-nowrap"
                      href="#0"
                    >
                      Incidunt voluptatem adipisci voluptates fugit beatae culpa eum, distinctio, assumenda est ad
                    </a>
                  </h4>
                  <time datetime="2016-01-12">Jan 28, 2016</time>
                </li>

                <li>
                  <a
                    class="image-wrapper" 
                    href="#0"
                  >
                    <img
                      src="img/placeholder.png"
                      alt="News image"
                    >
                  </a>
                  <h4>
                    <a 
                      class="cd-nowrap"
                      href="#0"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, esse.
                    </a>
                  </h4>
                  <time datetime="2016-01-12">Jan 12, 2016</time>
                </li>
              </ul>
            </div> <!-- .news -->

            <div class="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#0">Find a store</a></li>
                <li><a href="#0">Accessories</a></li>
                <li><a href="#0">Warranty info</a></li>
                <li><a href="#0">Support</a></li>
                <li><a href="#0">Contact us</a></li>
              </ul>
            </div> <!-- .quick-links -->
          </div> <!-- .cd-search-suggestions -->

          <a
            href="#0"
            class="close cd-text-replace"
          >
            Close Form
          </a>
        </div> <!-- .cd-main-search -->

      </div>

    </div>

    <div
      ref="curtain"
      class="nav_background" />

    <div
      :class="['cd-cover-layer', {'search-form-visible': searchActive}]" />

  </div>
</template>

<style lang="scss" scoped>
$color-1: #333545; // Tuna
$color-2: #dd85ac; // Shocking
$color-3: #ffffff; // White
$color-4: #40508e; // Chambray

// fonts 

$primary-font: 'Open Sans', sans-serif;
// breakpoints
   
$S:     480px;   
$M:     768px;     
$L:     1024px;     

// media queries

@mixin MQ($canvas) {
  @if $canvas == S {
   @media only screen and (min-width: $S) { @content; } 
  }
  @else if $canvas == M {
   @media only screen and (min-width: $M) { @content; } 
  }
  @else if $canvas == L {
   @media only screen and (min-width: $L) { @content; } 
  }
}

// super light grid - it works with the .cd-container class inside style.scss

@mixin column($percentage, $float-direction:left) {
  width: 100% * $percentage;
  float: $float-direction;
}

@mixin center($xy:xy) {
  @if $xy == xy {
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    // @include transform(translateX(-50%) translateY(-50%));
  }
  @else if $xy == x {
    left: 50%;
    right: auto;
    // @include transform(translateX(-50%));
  }
  @else if $xy == y {
    top: 50%;
    bottom: auto;
    // @include transform(translateY(-50%));
  }
}

// border radius

@mixin border-radius($radius:.25em) {
  border-radius: $radius;
}

// antialiasing mode font rendering

@mixin font-smoothing {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cd-main-search {

	.cd-select {
		/* hide select element on small devices */
		display: none;
	}

	.close {
		/* 'X' icon to close search form - hidden on small devices */
		display: none;
	}

	input[type="search"] {
		width: 100%;
		color: white;

		&:focus {
			outline: none;
		}

		// @include placeholder {
		// 	color: tint(red, 20%);
		// }
	}
	
	@include MQ(L) {
		position: absolute;
		z-index: 9;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgb(46, 46, 46);
		opacity: 0;
		visibility: hidden;
		transition: opacity .3s, visibility .3s;

		form {
			position: relative;
			height: 100%;
			/* 170px (margin left) is the sum of the logo width (124px) and additional 46px margin (to separate the form form the logo) */
			/* 116px (margin right) takes into account the space occupied by the a.cd-search-trigger and a.close */
			margin: 0 calc(5% + 116px) 0 calc(5% + 170px);
		}

		input[type="search"] {
			font-size: 1.2rem;
			height: 100%;
			background-color: transparent;
			/* don't overlap <select> element */
      padding-right: 170px;
      outline: none;
      border: none;
		}

		.cd-select {
			display: inline-block;
			position: absolute;
			right: 0;
			// @include center(y);
			color: tint(red, 20%);
			font-size: 1.4rem;
			overflow: hidden;
		}

		span {
			display: inline-block;
		}

		option {
			/* style <option> elements on Firefox */
			color: red;
			background-color: green;
		}

		select {
			/* the <select> element is not visible (if the list of options is not open) -  it is covered by the .selected-value element */
			position: absolute;
			right: 0;
			// @include center(y);
			opacity: 0;
			color: transparent;

			&:focus {
				outline: none;
			}

			&:focus + span.selected-value {
				background-color: tint(red, 5%);
			}
		}

		.selected-value {
			/* this <span> element covers the <select> element - its content is changed (using JavaScript) and set equal to the selected <option> value */
			/* its width automatically changes according to the text of the selected <option> (not possible with a <select> element) */
			color: green;
			/* clicking on this element will open the <select> drop-down list */
			pointer-events: none;
			
			// @include transition(background-color .3s);
			
		}

		select, .selected-value {
			padding: 0.5em 1.7em 0.5em .3em;
			font-size: 1.4rem;
			border-radius: 3px;
		}

		.no-pointerevents & .selected-value {
			/* if the browser doesn't support the pointer-events property, hide the .selected-value element */
			display: none;
		}

		.no-pointerevents & select {
			/* if the browser doesn't support the pointer-events property, show the <select> element */
			position: relative;
			color: green;
			// @include transform(translateY(0));

			&:focus {
				background-color: tint(red, 5%);
			}
		}

		.close {
			/* 'X' icon - used to close the search form */
			display: inline-block;
			position: absolute;
			right: 5%;
			top: 50%;
			height: 40px;
			width: 40px;
			// @include transform(translateY(-50%) scale(0));
			// @include transition(transform .3s);

			&::before, &::after {
				/* used to create the 'X' icon in css */
				content: '';
				position: absolute;
				height: 20px;
				width: 2px;
				background-color: green;
				left: 50%;
    			top: 50%;
			}

			&::before {
				// @include transform(translateX(-50%) translateY(-50%) rotate(-45deg));
			}

			&::after {
				// @include transform(translateX(-50%) translateY(-50%) rotate(45deg));
			}
		}


		&.is-visible {
			/* search form open */
			opacity: 1;
      visibility: visible;
      animation: cd-slide-in .3s;

			.close {
				// @include transform(translateY(-50%) scale(1));
			}
		}

		.animate-search &.is-visible  {
			/* trigger search form animation if <header> has the .animate-search class */
      // @include animation(cd-slide-in .3s);
      animation: cd-slide-in .3s;
		}
	}
}

@keyframes cd-slide-in {
	0% {
    // @include transform(translateY(-100%));
    transform: translateY(-100%);
	}

	100% {
    // @include transform(translateY(0));
    transform: translateY(0);
	}
}


















.cd-search-suggestions {
	/* drowpdown with search suggestions - hidden on small devices */
	display: none;

	@include MQ(L) {
		display: none;
		position: absolute;
		top: 80px;
		left: 0;
		/* same width of <form> element */
		width: calc( 90% - 286px);
		padding: 2em;
		/* same margin of <form> element */
		margin: 0 calc(5% + 116px) 0 calc(5% + 170px);
		background-color: #fff;
		box-shadow: 0 4px 40px rgba(#000, .39);
		// @include clearfix;

		.quick-links, .news {
			display: inline-block;
		}

		.quick-links {
			float: right;
			width: 140px;
			text-align: right;
		}

		.news {
			float: left;
			width: calc(100% - 140px);
		}

		h3 {
			margin-bottom: 1.5em;
			text-transform: uppercase;
			color: tint($color-1, 35%);
			font-size: 1.2rem; 
			font-weight: bold;
			letter-spacing: .1em;
		}

		h4 {
			font-weight: bold;
			font-size: 1.4rem;

			a {
				/* prevent the text from wrapping */
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 100%;
				padding: .2em 0;
			}
		}

		a {
			display: inline-block;
			color: $color-1;

			.no-touch &:hover {
				opacity: .8;
			}
		}

		time {
			font-size: 1.2rem;
			color: tint($color-1, 30%);
		}

		.news li {
			position: relative;
			padding: 0.625em 0.75em 0.75em 4em; 
			margin-bottom: 0.25em;

			&:last-of-type {
				margin-bottom: 0;
			}	
		}

		.image-wrapper {
			position: absolute;
			left: 0;
			// @include center(y);
			width: 50px;
			height: 50px;

			img {
				display: block;
			}
		}

		.quick-links a {
			padding: .5em 0;
			font-size: 1.4rem;
			line-height: 1.2;
		}

    &.is-visible{
			transform-origin: center top;
			transform: translateZ(0);
			backface-visibility: hidden;
			
			animation: cd-3d-rotation .5s .3s;
			animation-fill-mode: backwards;
      display: block;
		}

		.animate-search .is-visible & {
			/* trigger the dropdown animation if <header> has the .animate-search class */
			transform-origin: center top;
			/* Force Hardware Acceleration */
			transform: translateZ(0);
			backface-visibility: hidden;
			
			animation: cd-3d-rotation .5s .3s;
			animation-fill-mode: backwards;
		}
	}
}

@keyframes cd-3d-rotation {
	0% {
		transform: perspective(1000px) rotateX(-90deg);
	}

	100% {
		transform: perspective(1000px) translateY(0);
	}
}














.cd-cover-layer {
	/* cover main content when search form is open - hidden on smal devices */
	display: none;

	@include MQ(L) {
		display: block;
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(#000, .5);
		opacity: 0;
		visibility: hidden;

		transition: opacity .3s, visibility .3s;

		&.search-form-visible {
			opacity: 1;
			visibility: visible;
		}
	}
}
</style>


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
      desktopMenuActive: false,
      searchActive: false,
      searchForm: {
        query: ''
      },
      lastSubmenuSeen: null,
      submenus: [
        false,
        false,
        false 
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
    }),
    isAuth() {
      return !!this.user
    },
  },
  methods: {
    ...mapMutations({
      
    }),
    toggleSearch() {
      this.searchActive = true
      this.$nextTick( () => {
        this.$refs.searchInput.focus()
      })
    },
    submitSearchForm() {
      this.$router.push({ path: '/search', query: { q: this.searchForm.query } })
    },
    some () {
      this.desktopMenuActive = true

      this.$refs.curtain.style.opacity = '1'
      this.$refs.curtain.style.display = 'block'
    },
    somo () {
      this.desktopMenuActive = false

      this.$refs.curtain.style.opacity = '0'
      this.$refs.curtain.style.display = 'none'
    },
    same (index) {
      for(let i = 0; i < this.submenus.length; i++) {
        if (i == index) {
          this.submenus[i] = true
        } else {
          this.submenus[i] = false
        }
      }
      // this.$refs.one.style.opacity = '1'
      // this.$refs.one.style.display = 'block'
    },
    same2 () {
      this.$refs.two.style.opacity = '1'
      this.$refs.two.style.display = 'block'
    },
    hideThing () {
      this.$refs.one.style.opacity = '0';
      this.$refs.one.style.display = 'none';
      this.somo()

    },
    handleSubmenuTitleSwitch(index) {
      if(this.desktopMenuActive){
        return !this.handleSubmenuSwitch(index)
      } else {
        return false
      }
    },
    handleSubmenuSwitch(index, side) {
      if (this.submenus[index]){
        console.log(side == 'right')
        if(this.lastSubmenuSeen && this.lastSubmenuSeen < index) {
          console.log(`${this.lastSubmenuSeen} < ${index}`)
          if (side == 'left') {
            console.log(`A la izquierda`)
            this.lastSubmenuSeen = index
            return true
          }
          else if (side == 'right') {
            console.log(`A la derecha`)
            this.lastSubmenuSeen = index
            return false
          }
        }
        if(this.lastSubmenuSeen && this.lastSubmenuSeen > index) {
          console.log(`${this.lastSubmenuSeen} > ${index}`)
          if (side == 'right') {
            console.log(`A la derecha`)
            this.lastSubmenuSeen = index
            return true
          }
          else if (side == 'right') {
            console.log(`A la derecha`)
            this.lastSubmenuSeen = index
            return false
          }
        }
        // console.log(`Ninguno`)
        this.lastSubmenuSeen = index
        return true
      }
    }
    // handleSubmenuSwitch(index, side) {
    //   if (this.submenus[index]){
    //     if(this.lastSubmenuSeen > index){
    //       if (side == 'right') {
    //         this.lastSubmenuSeen = index;
    //         return true
    //       } else if (side == 'left') {
    //         this.lastSubmenuSeen = index;
    //         return false
    //       }
    //     }
    //     else if (this.lastSubmenuSeen < index) {
    //       if (side == 'left') {
    //         this.lastSubmenuSeen = index;
    //         return true
    //       } else if (side == 'right') {
    //         this.lastSubmenuSeen = index;
    //         return false
    //       }
    //     }
    //     else {
    //       this.lastSubmenuSeen = index;
    //       return false
    //     }
    //   }
    //   else {
    //     this.lastSubmenuSeen = index;
    //     return true
    //   }
    // }
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
  z-index: 3;
  // max-width: 1100px;
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
  transition: all 0.2s ease-out;

  &.is-visible {
    background-color: rgba(46,46,46,1);
    height: 460px;
  }
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

  @media (max-width: 767px) {
    display: block;
    margin-bottom: 10vw;
    flex: 0 0 auto;
  }

  .nav_items {
    display: flex;
    height: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    list-style: none;

    @media (max-width: 767px) {
      display: block;
      height: auto;
    }

    .nav-text {
      @media (max-width: 767px) {
        position: relative;
        z-index: 1;
        padding: 15px 20px;
        flex: 0 0 auto;
      }
    }

    .nav_dropdown {
      position: absolute;
      left: 0px;
      top: 100%;
      right: 0px;
      display: none;
      transition: all 0.2s ease;

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
        background-color: #000;
      }

      &.right-animation {
        opacity: 1;
        display: block;
        animation: animate-from-right 0.3s ease;
      }

      &.left-animation {
        opacity: 1;
        display: block;
        animation: animate-from-left 0.3s ease;
      }

    }
  }
}

@keyframes animate-from-right{
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes animate-from-left{
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.nav_signup_wrap {
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 767px) {
    position: relative;
    display: block;
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

  &.disabled {
    opacity: 0.4;
  }

  @media (max-width: 767px) {
    display: flex;
    height: auto;
    padding-right: 0px;
    padding-left: 0px;
    justify-content: flex-start;
  }
}

.nav_mobile-back-wrap {
  position: sticky !important;

  @media (max-width: 767px) {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    display: flex;
    padding-top: 8vw;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
  }

  .nav_mobile-back {
    display: none;

    @media (max-width: 767px) {
      display: flex;
      padding: 20px;
      align-items: center;
    }
  }
}

.nav_1 {
  display: flex;
  height: 400px;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (max-width: 767px) {
    height: auto;
    padding-top: 30px;
    flex-direction: row;
  }
}

.products_ul {
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  flex: 1;
  list-style: none;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  .products_li {
    display: flex;
    width: 16.6666%;
    flex: 0 0 auto;
    background-size: cover;
    background-position: center top;
    position: relative;

    @media (max-width: 767px) {
      width: 100%;
    }

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
  z-index: 0;
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

.button_main{
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  line-height: 1;
}
</style>
