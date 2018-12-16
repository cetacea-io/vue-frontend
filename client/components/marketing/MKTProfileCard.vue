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
    <div class="tags">
      <div
        v-for="tag in tags"
        :key="tag.key"
        class="tag">
        {{ tag }}
      </div>
    </div>
    <div class="portfolio">
      <div
        v-for="item in portfolio"
        :key="item.key"
        :style="{ 'background-image': 'url(' + item + ')' }"
        class="item">
        <div class="arrow-triangle right" />
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
    portfolio: {
      type: Array,
      required: true
    },
    tags: {
      type: Array,
      required: true
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
  // background-image: url('https://i.pinimg.com/originals/5c/78/a3/5c78a3ee8cc8866f0b55ee750d179a2d.jpg');
  background-image: url('https://i.pinimg.com/564x/a2/3c/fd/a23cfd3fce85ebaf85089ec43ee10214.jpg');
  background-size: cover;

  display: flex;
  align-items: center;
  flex-flow: column;

  padding: 1em 0em;

  // background: #ffffff;
  border-radius: 5px;
  width: 250px;

  box-shadow: 0px 0px 30px rgba(0,0,0,0.5);

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
    // width: 50px;
    // height: 50px;
    width: 65px;
    height: 65px;
    border-radius: 100%;
  }
  .meta {
    color: #FFFFFF;
    text-align: center;
    .name {
      font-weight: 500;
      font-size: 1.0em;
    }
    .occupation {
      color: #010a13;
      font-size: 0.9em;
    }
  }

  .tags {
    margin: 10px 0;
    .tag {
      background: rgba(255,255,255,0.4);
      color: #240603;
      padding: 3px 7px;
      display: inline;
      border-radius: 5px;
      margin-left: 5px;
      font-size: 13px;
    }
  }

  .portfolio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 2px;
    padding: 2px;
    width: 100%;
    img {
        width: 100%;
    //   width: 50%;
    }
    .item {
      background-origin: center;
      background-repeat: no-repeat;
      background-size: cover;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<style lang="scss" scoped>
.arrow-triangle {
  position: relative;
  background-color: #fff;
  text-align: left;
  margin: 1.2em;
}

.arrow-triangle:before,
.arrow-triangle:after {
  content: '';
  position: absolute;
  background-color: inherit;
}

.arrow-triangle,
.arrow-triangle:before,
.arrow-triangle:after {
  width:  1em;
  height: 1em;
  border-top-right-radius: 30%;
}

.arrow-triangle.left {
  transform: rotate(-90deg) skewX(-30deg) scale(1,.866);
  box-shadow: 0px 0px 80px #000;
}

.arrow-triangle.right {
  transform: rotate(-30deg) skewX(-30deg) scale(1,.866);
  box-shadow: 0px 0px 80px #000;
}

.arrow-triangle:before {
  transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
}

.arrow-triangle:after {
  transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
}

</style>
