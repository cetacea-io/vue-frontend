<template>
  <div class="app-checkbox">
    <label>
      <input
        v-model="checked"
        :name="name"
        :value="val"
        :disabled="disabled"
        :selected="selected"
        type="checkbox"
        @change="onChange">
      <div
        :class="{ disabled: disabled }"
        class="checkmark">
        <div class="circle">
          <div class="check-icon" />
        </div>

        <div class="curtain" />

        <div
          :style="{ 'background-image': 'url(' + image + ')' }"
          class="content-wrapper">
          <div class="text">
            {{ title }}
          </div>
        </div>

      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppOption',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Array,
      required: false,
      default: null
    },
    val: {
      type: Object,
      required: true,
      default: null
    },
    image: {
      type: String,
      required: true,
    }
  },
  data () {
    return{
      checkedProxy: false,
      disabled: false,
      selected: false,
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  },
  methods: {
    onChange: function(e){
      this.selected ? this.selected = false : this.selected = true
      this.$emit('input', this.checkedProxy, this.event)
    }
  }
}
</script>

<style scoped lang="scss">

$sumcolor: #FFF;

$accent-color: #fff;
$default-font: 'Soleil';

$shadow-color: #dfe0eb;

.curtain {
  background: rgba(0,0,0,0.3);
  align-self: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  position: absolute;

  transition: all 0.5s ease;
}

.content-wrapper{
  background-size: cover;
  background-repeat: no-repeat;
  align-self: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.disabled{
    cursor: not-allowed;
    .text{
        color: $shadow-color;
    }

    .content-wrapper{
      opacity: 0.5;
      filter: grayscale(100%);
    }

    label:hover input ~ .checkmark {
    border-color: $shadow-color;
    .text{
      color: $shadow-color;
    }
}
}

/* The container */
.app-checkbox {
    display: inline-block;
    position: relative;
    // padding-left: 35px;
    // margin-bottom: 12px;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 10px;
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    min-height: 82px;
}

.circle{
    height: 22px;
    width: 22px;
    position: absolute;
    background: inherit;
    border-radius: 100%;
    background: #ffffff;
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 10px;
    display: none;
    align-items: center;
    justify-content: center;

    z-index: 1;

    .check-icon{
      background-image: url('~assets/img/verify-sign.svg');
      background-size: cover;
      height: 70%;
      width: 70%;
      // margin: 6px;
      border-radius: 500px;
      // display: none;
    }
}

label{
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100%;
  width: 100%;

}

/* Hide the browser's default radio button */
label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    display: grid;
    position: relative;
    top: 0;
    left: 0;

    background: inherit;

    // border: 2px solid #FFF;
    // border: 2px solid hwb(230, 8%, 82%, 1);

    text-align:center;

    border-radius: 10px;
    transition: all 0.3s ease;

    height: 100%;
    width: 100%;
}

/* On mouse-over, add a grey background color */
// label:hover input ~ .checkmark {
//     border-color: var(--primary-color);
//     .text{
//       color: $accent-color;
//     }
// }
.text{
  color: #FFFFFF;
  text-shadow: 0px 0px 13px #252525;
  font-weight: 600;
  font-size: 1.3rem;
  z-index: 1;
}

/* When the radio button is checked, add a blue background */
label input:checked ~ .checkmark {
  .circle{
    display: flex;
  }
  .curtain {
    background: rgba(0,0,0,0.7);
  }
  .text{
    color: #ffffff;
  }
}

label input:checked ~ .check-icon{
    background: var(--primary-color);
}

label input:checked ~ .checkmark > .text{
    color: var(--primary-color);
}
</style>
