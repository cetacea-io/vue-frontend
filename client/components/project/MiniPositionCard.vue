<template>
  <div
    class="position-wrap">
    <div style="margin-bottom: 10px;">
      <p>{{ title }}</p>
    </div>
    <div class="desc-section">
      <div class="cortina"/>
      <div class="description">
        {{ description }}
      </div>
    </div>
    <div style="margin-top: 20px; display: flex; justify-content: space-between;">
      <div>
        <ul style="padding: 0;">
          <li
            v-for="(contributor, contributorIndex) in contributors"
            :key="contributorIndex"
            class="avatar-item">
            <span 
              :style="{ 'background-image': 'url(' + contributor + ')' }"
              class="avatar"/>
          </li>
        </ul>
      </div>
      <div>
        <div 
          v-if="!alreadyApplied"
          class="getin-button"
          @click="request">
          Me interesa
        </div>
        <div 
          v-else
          class="getin-button unable">
          Listo
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    alreadyApplied: {
      type: Boolean,
      default: null
    },
    contributors: {
      type: Array,
      default: null
    }
  },
  methods: {
    ...mapActions({
      joinProject: 'user/join_project'
    }),
    request(){
      this.joinProject(this.id)
    }
  }
}
</script>


<style lang="scss" scoped>
.unable {
  border: 1px solid #34414c !important;
  background: #34414c !important;
  color: #a2a2a2 !important;
}

.getin-button {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  padding: 5px 10px;
  background: white;
  color: #071119;
  cursor: pointer;
}

.avatar-item {
  list-style: none;
  display: inline;
  position: relative;
  margin-left: 0;
  &:not(:first-child) {
    margin-left: -8px;
  }
}

.avatar {
  height: 30px;
  width: 30px;
  background-size: cover;
  border-radius: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 2px solid #071119;
  display: inline-block;

}

.position-wrap{
  background-color: #000 !important;
  color: #fff;
  font-family: Soleil, Helvetica, Arial, sans-serif;
  padding: 24px;
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;

  .desc-section {
    max-height: 61px;
    min-height: 61px;
    overflow: hidden;
    position: relative;
  }
  .cortina {
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .description{
    font-size: 0.89em;
    color: hsla(207, 4%, 64%, 1);
  }
}
</style>
