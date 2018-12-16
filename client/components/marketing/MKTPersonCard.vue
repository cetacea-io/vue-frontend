<template>
  <div class="card">
    <div
      :style="{ 'background-image': 'url(' + picture + ')' }" 
      class="profile-pic" />
    <div class="meta">
      <div class="name">
        {{ name }}
      </div>
      <div class="occupation">
        {{ skill }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: false,
      default: 'https://pbs.twimg.com/profile_images/1012506332639965184/DujLseg3_400x400.jpg'
    },
    name: {
      type: String,
      required: true
    },
    skill: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;

  padding: 1em 1em;

  align-items: center;

  // background: #ffffff;
  border-radius: 5px;
  width: 250px;

  // box-shadow: 0px 0px 30px rgba(0,0,0,0.5);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .profile-pic {
    background-origin: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .meta {
    color: #4e5b72;
    margin-left: 20px;
    .name {
      color: white;
      font-weight: 600;
      font-size: 1.2em;
    }
    .occupation {
      color: #adb9c5;
      font-size: 1.1em;
    }
  }
}
</style>
