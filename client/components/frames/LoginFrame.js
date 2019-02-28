import { mapActions } from 'vuex'

// Public token.
const RECAPTCHA_TOKEN = `6LelBIcUAAAAAGkihBXg7vWPXV5QJaj0bE_qeX1e`

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      error: null,
      loading: false,
      success: false,
    }
  },
  methods: {
    ...mapActions({
      login: 'authentication/login'
    }),
    async submit() {
      try {
        this.error = null
        this.loading = true

        // const token = await this.recaptchaToken()
        // await post({
        //   data: { ...this.data, token },
        //   endpoint: this.endpoint,
        // })
        this.login({id: this.id, password: this.password})

        this.loading = false
        this.success = true
      } catch (error) {
        this.error = error
        this.loading = false
        this.success = false
      }
    },
    recaptchaToken() {
      return new Promise((resolve) => {
        // eslint-disable-next-line no-undef
        grecaptcha.ready(async () => {
          // eslint-disable-next-line no-undef
          const token = await grecaptcha.execute(RECAPTCHA_TOKEN)
          resolve(token)
        })
      })
    },
  },
  render() {
    return this.$scopedSlots.default({
      // Data
      error: this.error,
      loading: this.loading,
      success: this.success,
      // Methods
      submit: this.submit,
    })
  },
}