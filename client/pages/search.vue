<template>
  <div class="container">

    <div class="search-container">
      <form
        class="search-form"
        action=""
        @submit.prevent="search"
      >
        <input 
          v-model="query"
          class="search-input">
        <input 
          type="submit"
          value=""
          class="search-submit"
        >
      </form>
    </div>

    <div class="slot-wrapp">
      <ItemsGrid :items="items.edges[0].node.content"/>
    </div>

  </div>
</template>

<script>
import AppCarrousel from '@/components/AppCarrousel'
import AppTabPane from '@/components/AppTabPane'
import SearchTabs from '@/components/SearchTabs'
import ItemsGrid from '@/components/ItemsGrid'
import SEARCH from '@/graphql/queries/search.gql'

import { mapGetters, mapActions } from 'vuex';

export default {
  async asyncData ({store, error, app, params, query}) {
    let response = await app.apolloProvider.defaultClient.query({
      query: SEARCH,
      variables: {
        first: 1,
        after: '',
        query: query.q
      },
      update: result => result.items,
      error(error) {
        resolve(error)
      }
    })
    return {
      query: query.q,
      items: response.data.search
    }
  },
  async fetch({store}){
    //
  },
  components: {
    AppCarrousel,
    AppTabPane,
    SearchTabs,
    ItemsGrid
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      //
    })
  },
  mounted() {
    // this.scroll()
  },
  methods: {
    ...mapActions({
      //
    }),
    async search() {
      let response = await this.$apollo.query({
        query: SEARCH,
        variables: {
          first: 1,
          after: '',
          query: this.query
        },
        update: result => result.items,
        error(error) {
          resolve(error)
        }
      })
      this.$router.push({ path: '/search', query: { q: this.query } })
      this.items = response.data.search
    },
  }
}
</script>

<style lang="scss" scoped>
.slot-wrapp {
  margin-top: 40px;
}

.box{
  vertical-align: middle;
  display: inline-block;
  width: 295px;
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
}

.search-container {
  padding: 60px 0;
  margin: 0 auto;
  width: 90%;
  max-width: 550px;

  .search-form {
    width: 100%;
    margin-bottom: 0;
    position: relative;
    display: block;
    flex: 0 0 auto;

    .search-input {
      background: #3a3a3a;
      border: 0;
      color: #fff;
      padding: 14px 14px;
      height: 60px;
      font-size: 15px;
      width: 100%;
      outline: none;
      transition: all 0.3s ease;

      &:hover {
        background: #242424;
      }
    }

    .search-submit {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      width: 54px;
      height: 100%;
      background-color: transparent;
      background-image: url("https://assets-global.website-files.com/583347ca8f6c7ee058111b3b/5a25bcdea945fe00015c9039_b-nav-icon-1-white.svg");
      background-position: 50% 50%;
      background-size: 20px;
      background-repeat: no-repeat;
      box-shadow: none;
      opacity: 1;
      border: 0;
    }
  }
}
</style>
