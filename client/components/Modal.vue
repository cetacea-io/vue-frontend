<template>
  <!-- <transition name="modal">
    <div
      class="modal-backdrop"
      @click="close">
      <div 
        class="modal"
        role="dialog"
        @click.stop
      >
        <section
          id="modalDescription"
          class="modal-body"
        >
          <component :is="component"/>
        </section>
      </div>
    </div>
  </transition> -->

  <div class="c-appModal">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div
        v-if="visible"
        class="c-appModal__overlay"
      />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <div
        v-if="visible"
        class="c-appModal__content"
        @click.self="hideModal"
      >
        <div class="c-appModal__innerContent">
          <component :is="component"/>
        </div>
      </div>
    </transition>
  </div>


</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Modal',
  data() {
    return {
      closable: false,
      component: null
    }
  },
  computed: {
    ...mapState({
      visible: `modalVisible`,
      modalComponent: `modalComponent`
    })
  },
  watch: {
    modalComponent(componentName) {
      if (!componentName) return
      
      Vue.component(componentName, () => import(`./modal/${componentName}`))
      this.component = componentName
    }
  },
  // created() {
  //   const escapeHandler = (e) => {
  //     if (e.key === 'Escape' && this.visible) {
  //       this.hideModal()
  //     }
  //   }

  //   document.addEventListener('keydown', escapeHandler)
  //   this.$once('hook:destroyed', () => {
  //     document.removeEventListener('keydown', escapeHandler)
  //   })
  // },
  methods: {
    ...mapMutations([`hideModal`])
  },
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: #FFFFFF;
  color: #000000;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  width: 100vh;
  height: 100vh;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  /* padding: 20px 10px; */
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<style lang="scss" scoped>
.c-appModal {
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.65);
  }
  &__content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 901;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__innerContent {
    @media only screen and (min-width: 960px) {
      width: auto;
      height: auto;
      // min-width: 453px;
      // min-height: 392px;
    }
    max-width: 80%;
    max-height: 80%;
    background: #fff;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
.fadeIn {
  animation-name: fadeIn;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
.fadeOut {
  animation-name: fadeOut;
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
.fadeInUp {
  animation-name: fadeInUp;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
}
.fadeOutDown {
  animation-name: fadeOutDown;
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
}
</style>
