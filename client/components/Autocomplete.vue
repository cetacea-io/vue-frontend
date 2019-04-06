<script>
  export default {
    name: 'Autocomplete',
    props: {
      value: {
        type: String,
        required: false,
        default: ''
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      items: {
        type: Array,
        required: false,
        default: () => []
      },
      isAsync: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    data() {
      return {
        isOpen: false,
        results: [],
        inputVal: this.value,
        isLoading: false,
        arrowCounter: 0,
      };
    },

    watch: {
      inputVal(val) {
        this.$emit('input', val)
      },
      items: function (val, oldValue) {
        // actually compare them
        if (val.length !== oldValue.length) {
          this.results = val
          this.isLoading = false
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    },

    methods: {
      onChange() {
        // Let's warn the parent that a change was made
        this.$emit('input', this.inputVal)

        // Is the data given by an outside ajax request?
        if (this.isAsync) {
          this.isLoading = true
        } else {
          // Let's  our flat array
          this.filterResults()
          this.isOpen = true
        }
      },

      filterResults() {
        // first uncapitalize all the things
        this.results = this.items.filter((item) => {
          return item.toLowerCase().indexOf(this.inputVal.toLowerCase()) > -1
        })
      },
      setResult(result) {
        this.inputVal = result
        this.isOpen = false
      },
      onArrowDown(evt) {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter -1
        }
      },
      onEnter() {
        this.inputVal = this.results[this.arrowCounter]
        this.isOpen = false
        this.arrowCounter = -1
        this.$emit('enter')
      },
      handleClickOutside(evt) {
        if (!this.$el.contains(evt.target)) {
          this.isOpen = false
          this.arrowCounter = -1
        }
      }
    }
  }
</script>

<template>
  <div class="autocomplete">
    <input
      v-model="inputVal"
      :placeholder="placeholder"
      class="input"
      type="text"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    >
    <!-- <ul
      v-show="isOpen"
      id="autocomplete-results"
      class="autocomplete-results"
    >
      <li
        v-if="isLoading"
        class="loading"
      >
        Cargando resultados...
      </li>
      <li
        v-for="(result, i) in results"
        v-else
        :key="i"
        :class="{ 'is-active': i === arrowCounter }"
        class="autocomplete-result"
        @click="setResult(result)"
      >
        {{ result }}
      </li>
    </ul> -->
  </div>
</template>

<style scoped>
  .autocomplete {
    position: relative;
    height: 46px;
  }

  .input {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    padding: 0 17px;
    font-size: 16px;
    color: #ffffff;
    border: 1px solid transparent;
    transition: border-color 250ms ease, padding 250ms ease;
    border-radius: 50px;
    font-family: 'Soleil';
    background: #13131d;
  }

  /* .input {
    vertical-align: middle;
    display: inline-block;
    width: auto;
    padding: 25px;
    font-size: 16px;
    color: #444;
    margin-right: 10px;
    border: 1px solid transparent;
    -webkit-transition: border-color 250ms ease, padding 250ms ease;
    transition: border-color 250ms ease, padding 250ms ease;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    font-family: 'Soleil';
  } */

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
    width: 100%;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }

</style>