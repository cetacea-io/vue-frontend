<template>
  <div id="app">
    <h1>VueJS Braintree Integration</h1>

    <h2>About Me</h2>

    <div class="line">
      <button 
        style="background-color: purple;"
        @click="add({title: 'Poesia expandid', image: 'https://cetacea-backend-assets.s3.amazonaws.com/media/public/images/1524272557815.jpg', price: 250})"
      >
        agregar
      </button>
      <div 
        v-for="(item, index) in items"
        :key="index"
      >
        <div 
          :style="{ 'background-image': 'url(' + item.image + ')' }"
          class="image-shop"
        />
        {{ item.title }}
        ${{ item.price }}
      </div>
      Subtotal: ${{ subtotal }}
      Total: ${{ total }}
    </div>

    <div class="line">
      <label for="billing-first-name">
        First Name
        <input 
          v-model="txn.billing.firstName"
          type="text"
          class="input-field"
          name="billing-first-name"
        >
      </label>
      <label for="billing-last-name">
        Last Name
        <input 
          v-model="txn.billing.lastName"
          type="text"
          class="input-field"
          name="billing-last-name"
        >
      </label>
    </div>

    <label for="customer-email">
      Email Address
      <input
        v-model="txn.customer.email"
        type="text"
        class="input-field"
        name="customer-email"
      >
    </label>

    <label for="customer-phone">
      Phone Number
      <input
        v-model="txn.customer.phone"
        type="text"
        class="input-field"
        name="customer-phone"
      >
    </label>

    vue-braintree-hosted-fields:

    <hosted-fields
      :auth-token="authToken"
      :collect-card-holder-name="true"
      :collect-postal-code="false"
      :enable-data-collector="true"
      wrapper-class="constrain"
      @bthferror="btHFError"
      @bthfpayload="btHFPayload"
    />

    <button
      id="submitTransaction"
      type="submit"
      style="padding-top: 1rem;"
      @click="submitTransaction">
      TOKENIZE
    </button>

  </div>
</template>

<script>
import HostedFields from '@/components/braintree/hostedFields'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    HostedFields,
  },
  data () {
    return {
      authToken: 'sandbox_jyp6yhyq_p6wg2szfgs7q5njh',
      txn: {
        billing: {
          firstName: '',
          lastName: '',
        },
        customer: {
          firstName: '',
          lastName: '',
          phone: '',
          email: ''
        },
        options: {
          submitForSettlement: true
        },
        payment: {
          amount: '',
          merchantAccountId: 'whildcaught',
          paymentMethodNonce: '',
          paymentMethodToken: '',
          paypal: ''
        }
      }

    }
  },
  computed: {
    ...mapGetters({
      items: 'shopping/items',
      subtotal: 'shopping/subtotal',
      total: 'shopping/total'
    }),
    ...mapGetters({
      user: 'user/user',
    }),
  },
  methods: {
    ...mapMutations({
      add: 'shopping/add_item'
    }),
    ...mapActions({
      purchase: 'shopping/purchase'
    }),
    btHFError(message) {
      console.error(message);
      // do something with the error message
    },
    btHFPayload(payload) {
      console.log(payload.nonce);
      this.purchase({nonce: payload.nonce, amount: this.total})
      // do something with the token payload
    },
    submitTransaction() {
      this.$emit('tokenize');
    }
  }
}
</script>

<style scoped>
.image-shop {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
}


button, input[type="submit"] {
  background-color: #FF6B00;
  display: inline-block;
  border: none;
  padding: 1rem 1.5rem;
  margin: 1px;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
}

button[type="submit"] {
  margin-top: 1rem;
  background-color: #44a948;
}

button[type="submit"]:disabled {
  background-color: #E6E6E6;
}

.line {
  width: 100%;
  display: flex;
  flex-direction: row;
}

button.paypal {
  background-color: #00457C;
  font-weight: 600;
}

button.paypal:disabled {
  background-color: #E6E6E6;
}

button.card {
  background-color: black;
  color: #44a948;
  font-weight: 600;
}

.constrain {
  width: 480px;
  margin: 0 auto;
  padding: 1rem;
}

label {
  font-size: 16px;
  display: block;
  text-align: left;
  font-weight: bold;
  padding: 0.25rem;
  width: 100%;
}

.input-field {
  height: 50px;
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem;
  display: inline-block;
  box-shadow: none;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dddddd;
  line-height: 1.2;
  background: #fcfcfc;
  margin-top: 0.1rem;
  margin-bottom: 0.8rem;
  background: linear-gradient(to right, white 50%, #fcfcfc 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 300ms ease-in-out;
  font-size: 18px;
  text-align: left;
}
</style>