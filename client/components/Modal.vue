<template>
  <transition name="modal">
    <div
      class="modal-backdrop"
      @click="close">
      <div 
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop
      >
        <!-- <header
          id="modalTitle"
          class="modal-header"
        >
          <slot name="header">
            This is the default tile!

            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              x
            </button>
          </slot>
        </header> -->
        <section
          id="modalDescription"
          class="modal-body"
        >
          <slot>
            I'm the default body!
          </slot>
        </section>
        <!-- <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              aria-label="Close modal"
              @click="close"
            >
              Close me!
            </button>
          </slot>
        </footer> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      closable: {
        type: Boolean,
        required: false,
        default: true
      }
    }
  },
  methods: {
    close() {
      if (this.closable) {
        this.$emit('close')
      }
    }
  }
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
  padding: 20px 10px;
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