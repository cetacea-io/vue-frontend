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
          <div class="tag">{{ tab.tag }}</div>
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
$back-color: #030c1a;

.tabs {
  width: 100%;
  position: relative;
  top: 0;
  background: $back-color;
  z-index: 1;

  & > ul {
    width: 100%;
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
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    min-width: 130px;

    color: #99a8bf;

    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgb(109, 110, 112);

    & .tag {
      background: hsla(217, 42%, 23%, 1);
      color: #99a8bf;
      padding: 2px 10px;
      border-radius: 5px;
      margin-left: 13px;
    }
  }
}
.is-active {
  color: #ffffff !important;
  border-color:#3853ff !important;

  & .tag {
    background: #3853ff !important;
    color: #fff !important;
  }
}
</style>
