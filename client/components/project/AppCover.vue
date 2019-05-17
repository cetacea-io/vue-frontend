<template>
  <div 
    :style="{ 'background-image': 'url(' + image + ')' }"
    class="cover-image">
    <div class="project-card-inline__cover__obscurer" />
    <button class="button" />
    <div class="bottom">
      <div
        class="meta"
        style="font-size: 17px;font-weight:600;text-transform:uppercase;">
        {{ classification }} • {{ area }}
      </div>
      <div class="title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    classification: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;

  .meta {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    font-size: 12px;
    color: #fff;
    line-height: 1.3;
  }

  .title {
    @media only screen and (min-width: 960px) {
      font-size: 36px;
      line-height: 40px;
    }
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    text-shadow: 0px 0px 10px #000;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 100%;
    margin: 8px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: #fff;
  }
}

.project-card-inline__cover__obscurer {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  -webkit-mask-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
  -webkit-mask-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));
  mask-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.6)));
  mask-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));
}
</style>


<style scoped lang="scss">
.cover-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 300px;

  position: relative;

  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background-position: 50%;
  overflow: hidden;

  @media only screen and (min-width: 960px) {
    min-height: 420px;
  }

  & > .button {
    border: 0;
    height: 38px;
    width: 38px;
    background-color: rgba(200, 200, 280, 0.3);
    border-radius: var(--custom-border-radius);
    margin-left: 10px;
    margin-top: 10px;
  }
}
</style>
