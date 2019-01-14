<template>
  <modal
    v-if="visible"
    :closable="false"
    @close="hide">
    <div style="margin: 0px auto 25px; max-width: 550px;">
      <data-feeder />
    </div>
  </modal>
</template>

<script>
import PluginModal from '@/plugins/login-modal'
import Modal from '@/components/Modal'
import FacebookButton from '@/components/FacebookButton'
import GoogleButton from '@/components/GoogleButton'
import DataFeeder from '@/components/DataFeeder'

export default {
  name: 'DataModal',
  components: {
    Modal,
    FacebookButton,
    GoogleButton,
    DataFeeder
  },
  data() {
    return {
      lol: null,
      visible: true,
    }
  },
  beforeCreate() {
    this.lol = this.$optimizely.isFeatureEnabled('show_projects', 'bob')
  },
  beforeMount() {
    PluginModal.EventBus.$on('show', (params) => {
      this.show(params)
    })
  },
  methods: {
    hide() {
      // this.visible = false
      // This one is not hidable
    },
    show(params) {
      // making modal visible
      this.visible = true;
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  color: rgb(0, 0, 0);
  font-size: 32px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -1.2px;
  line-height: 120%;
  text-align: center;
}

.burocracy {
  a {
    color: #464646;
  }
}

.button-container{
  .button {
    width: 100%;
    &:not(:first-child):not(:last-child){
      margin: 10px 0;
    }
  }
}

.already-member {
  cursor: pointer;
  margin-left: 5px;
  font-size: 0.9em;
  color: #525252;
}
</style>
