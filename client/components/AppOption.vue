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
          :style="{ 'background-image': 'url(' + svg + ')' }"
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
      type: String,
      required: false,
      default: 'none'
    },
    val: {
      type: String,
      required: false,
      default: 'none'
    },
    svg: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return{
        checkedProxy: false,
        disabled: false,
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
  background: rgba(0,0,0,0.7);
  align-self: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: none;

  transition: all 0.5s ease;
}

.content-wrapper{
  background-size: cover;
  background-repeat: no-repeat;
  align-self: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}

.disabled{
    cursor: not-allowed;
    .text{
        color: $shadow-color;
    }

    label:hover input ~ .checkmark {
    border-color: $shadow-color;
    .text{
      color: $shadow-color;
    }
    svg{
      fill: $shadow-color;
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
//     svg{
//       fill: $accent-color;
//     }
// }
.text{
  color: #FFFFFF;
  text-shadow: 0px 0px 13px #252525;
  font-weight: 600;
  font-size: 1.2rem;
  bottom: 0;
  position: absolute;

  margin-bottom: 6px;
  margin-left: 11px;
}

/* When the radio button is checked, add a blue background */
label input:checked ~ .checkmark {
  .circle{
    display: flex;
  }
  .curtain {
    display: block;
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
