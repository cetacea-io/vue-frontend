<template>
  <div>

    <div class="head-section">
      <div>
        <!-- <div class="section-title">
          Contribuciones
        </div> -->
        <div class="section-description">
          Proyectos en los que colaboro
        </div>
      </div>

      <!-- <div class="star">
        <i class="fas fa-star"/>
      </div> -->

    </div>

    <!-- <no-ssr> -->
    <!-- <AppCarrousel 
    class="scrolling-wrapper"> -->
    <!-- <ProjectCard
        v-for="(item, index) in items"
        :key="index"
        :id="item.id"
        :category="item.category"
        :author-image="item.author.profilePicture"
        :author-title="`${item.author.user.firstName} ${item.author.user.lastName}`"
        :date="item.title"
        :description="item.quickDesc"
        :likes="4"
        :shares="6"

        :image="item.coverImage"
        :title="item.title"
        :route="`/project/`"
        
        class="mini"
      /> -->

    <div
      v-for="(item, index) in items"
      :key="index"
      class="mini"
    >

      <div class="project-card">

        <div class="curtain" />

        <div
          :style="{ 'background-image': 'url(' + item.coverImage + ')' }"
          class="cover-image" />

        <div class="project-wrapper">
          <div class="space"/>

          <div class="project-content">
            <div class="category">{{ item.category }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="avatar-wrapper">
              <div
                :style="{ 'background-image': 'url(' + item.userImage + ')' }"
                class="user-avatar"/>
              <div class="skills">
                {{ item.skills }}
              </div>
            </div>
            <div>{{ item.time }}</div>
          </div>
        </div>

      </div>

    </div>

    <!-- </AppCarrousel> -->
    <!-- </no-ssr> -->
  </div>
</template>

<script>
import AppCarrousel from '@/components/AppCarrousel'
import MKTProject from '@/components/marketing/MKTProject'

export default {
  components: {
    AppCarrousel,
    MKTProject
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  border-radius: 10px;
  background-color: #131313;
  padding: 0 !important;
  width: 100%;
  min-height: 400px;
  height: 100%;
  position: relative;

  .cover-image {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-width: 200px;
    min-height: 254px;
    position: absolute;
  }

  .curtain {
    width: 100%;
    height: 80%;
    background: linear-gradient(to top,rgb(19, 19, 19) 29%, rgba(19, 19, 19, 0));
  }


  .project-wrapper {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    position: absolute;

    .space {

    }

    .project-content {
      display: grid;
      z-index: 2;
      padding: 0px 20px 20px 20px;
      grid-template-rows: auto 1fr 1fr auto;

      .avatar-wrapper {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        width: 100%;

        .user-avatar{
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 30px;
          height: 30px;
          min-width: 30px;
          min-height: 30px;
          border-radius: 100%;
        }
        .skills {
          margin-left: 20px;
          font-size: 13px;
        }
      }

      .category {
        font-size: 12px;
        text-transform: uppercase;
      }

      .title {
        font-size: 1.3em;
        font-weight: 600;
      }


      .meta {
        bottom: 0;
      }
    }

  }
}
</style>


<style lang="scss" scoped>
.head-section {
  border-top: solid 1px rgb(107, 107, 107);
  margin-top: 20px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
}

.section-title {
  font-size: 1.2em;
  font-weight: 600;
}

.section-description {
  font-size: 0.9em;
  color: rgb(201, 201, 201);
}

.star {
  align-self: center;
  background-color: #3853ff;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mini{
  // width: 252px;
  position: relative;
  display: inline-flex;
  width: 33.33%;
  padding: 5px;
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 667px) {
    width: 100%;
  }
}
</style>