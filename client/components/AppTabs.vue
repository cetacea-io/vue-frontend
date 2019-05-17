<template>
  <div class="">
    <div class="tabs">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.key"
          :class="{ 'is-active': tab.isActive}"
          class="tab"
          @click="selectTab(tab)">
          {{ tab.name }}
        </li>
      </ul>
    </div>

    <div class="tabs-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > ul {
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    padding: 0;
    text-align: center;

    flex-wrap: nowrap;
    overflow: auto;
    /* border-bottom: 1px solid rgb(148, 148, 148); */
  }

  & .tab {
    // display: inline-block;
    // height: 100%;
    // margin: 0;
    // box-sizing: border-box;
    // position: relative;
    // cursor: pointer;
    // text-decoration: none;
    // text-align: center;
    // min-width: 130px;
    cursor: pointer;

    // color: inherit;

    // display: inline-block;
    // padding: 12px 16px;

    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    color: #a6b5c5;
    width: 100%;
    justify-content: center;
  }
}
.is-active {
  color: #fff !important;
  border-color: #387eff !important;
}


</style>
