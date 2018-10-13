<template>
  <div class="">
    <div class="tabs">
      <ul>
        <li 
          v-for="tab in tabs"
          :key="tab.key"
          :class="{ 'is-active': tab.isActive}"
          class="tab">
          <a 
            :href="tab.href"
            @click="selectTab(tab)">
            {{ tab.name }}
          </a>
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

<style scoped>
.tabs {
  width: 100%;
  position: sticky;
  top: 0;
  background: #030c1a;
  z-index: 1;

  & > ul {
    width: 100%;
    display: grid;
    grid-auto-flow: column;

    flex-wrap: nowrap;
    overflow: auto;
    /* border-bottom: 1px solid rgb(148, 148, 148); */
  }

  & > .tab {
    display: inline-block;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    min-width: 130px;

    & > a {
      color: inherit;

      display: inline-block;
      padding: 12px 16px;
    }
  }
}
.is-active {
  color: #1890ff !important;
  border-bottom: 2px solid #1890ff;
}
</style>
