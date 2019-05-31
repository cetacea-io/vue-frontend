export default {
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    classification: {
      type: Object,
      required: false,
      default: ''
    },
    views: {
      type: Number,
      required: true,
      default: 0
    },
    likes: {
      type: Number,
      required: true,
      default: 0
    },
    tipo: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    route() {
      if (this.tipo == 'ProjectType'){
        return `/project/${this.id}`
      } else if (this.tipo == 'CourseType'){
        return `/course/${this.id}`
      }
    }
  }
}