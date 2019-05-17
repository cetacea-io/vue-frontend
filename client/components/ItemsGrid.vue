<template>
  <div>
    <!-- <no-ssr> -->
    <div class="grid-wrapper">
      <component
        v-for="(item, index) in items"
        :is="item.component"
        :key="index"
        v-bind="item.properties"
        type="nuxt-link"
        class="mini"
      />
    </div>
    <!-- </no-ssr> -->
  </div>
</template>

<script>
import AppEventCard from '@/components/AppEventCard'
import AppProjectCard from '@/components/AppProjectCard'

export default {
  components: {
    AppEventCard,
    AppProjectCard
  },
  // props: {
  //   items: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      
    }
  },
  computed: {
    items() {
      return [{"properties":{"id":"9","title":"Party center well.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"13","title":"country","__typename":"CategoryType"},{"id":"1","title":"his","__typename":"CategoryType"},{"id":"11","title":"include","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/13-Vida-William1-750x500.jpg","author":{"title":"Murphy, Carney and Evans","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_SMpcsic.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"10","title":"Throughout state now bill stock citizen.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"1","title":"his","__typename":"CategoryType"},{"id":"4","title":"know","__typename":"CategoryType"},{"id":"6","title":"less","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/socialnets.gif","author":{"title":"Decker Ltd","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_bQfFQFq.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"24","title":"Feeling husband area.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"8","title":"call","__typename":"CategoryType"},{"id":"12","title":"shoulder","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/Taller-_-El-Dibujo-en-su-totalidad-primera-emisi%C3%B3n-2019-e1554308077322.jpg","author":{"title":"Cross, Smith and Flynn","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_021ip1O.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"38","title":"Puertas abiertas del poema","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"13","title":"country","__typename":"CategoryType"},{"id":"1","title":"his","__typename":"CategoryType"},{"id":"19","title":"talk","__typename":"CategoryType"},{"id":"15","title":"want","__typename":"CategoryType"},{"id":"7","title":"watch","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/WF-TallerPoesia-e1553883624729.jpg","author":{"title":"Walton, Washington and Davis","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_qMB9rB1.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"68","title":"Donde me siento cuando tengo que sentarme a escribir","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"1","title":"his","__typename":"CategoryType"},{"id":"17","title":"key","__typename":"CategoryType"},{"id":"5","title":"model","__typename":"CategoryType"},{"id":"3","title":"moment","__typename":"CategoryType"},{"id":"19","title":"talk","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/WF-TallerNarra-e1553883605946.jpg","author":{"title":"Andersen-Rodriguez","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_zqYXMXz.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"71","title":"Did procreate change illustration?","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"2","title":"everyone","__typename":"CategoryType"},{"id":"12","title":"shoulder","__typename":"CategoryType"},{"id":"18","title":"small","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/19260392_780388468809321_8919585700069935588_n.png","author":{"title":"Cook, Buck and Roberts","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_NqCjYKa.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"84","title":"Share beyond role.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"13","title":"country","__typename":"CategoryType"},{"id":"2","title":"everyone","__typename":"CategoryType"},{"id":"1","title":"his","__typename":"CategoryType"},{"id":"3","title":"moment","__typename":"CategoryType"},{"id":"16","title":"short","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_mJYm9Ij.jpg","author":{"title":"Riley and Sons","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_LlmDdIC.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"86","title":"Half window agency explain would.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"13","title":"country","__typename":"CategoryType"},{"id":"3","title":"moment","__typename":"CategoryType"},{"id":"9","title":"yeah","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_OsGhhu3.jpg","author":{"title":"Morrison, Trevino and Banks","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_vrIXDNM.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"93","title":"Threat reduce grow course billion.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"2","title":"everyone","__typename":"CategoryType"},{"id":"6","title":"less","__typename":"CategoryType"},{"id":"18","title":"small","__typename":"CategoryType"},{"id":"15","title":"want","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_4dKiFxg.jpg","author":{"title":"Valenzuela-Bell","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_LJSXWH8.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"97","title":"Just why image former.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"13","title":"country","__typename":"CategoryType"},{"id":"11","title":"include","__typename":"CategoryType"},{"id":"4","title":"know","__typename":"CategoryType"},{"id":"3","title":"moment","__typename":"CategoryType"},{"id":"15","title":"want","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_jhKrU6s.jpg","author":{"title":"Hunter and Sons","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_wQQvcC9.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"},{"properties":{"id":"100","title":"Sure chair local.","area":"hello","classification":{"title":"Taller","__typename":"CourseClassificationType"},"categories":[{"id":"10","title":"business","__typename":"CategoryType"},{"id":"1","title":"his","__typename":"CategoryType"},{"id":"17","title":"key","__typename":"CategoryType"},{"id":"6","title":"less","__typename":"CategoryType"},{"id":"5","title":"model","__typename":"CategoryType"},{"id":"9","title":"yeah","__typename":"CategoryType"}],"dateAndTime":null,"image":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_uzejl2T.jpg","author":{"title":"Stanley, Holloway and Mason","profilePicture":"https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/example_3mqOZJ3.jpg","__typename":"OrganizationType"},"__typename":"CourseType"},"component":"AppProjectCard"}]
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  // margin: 0 10%;
  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
  }
}

.mini{
  // width: 252px;
  width: 100%;
}
</style>
