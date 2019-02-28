<template>
  <span>
    <span style="font-size: 30px; font-weight: 600;">${{ amount }}</span>
    <span style="color: hsl(216, 16%, 64%);font-size: 15px;">{{ currency }}</span>
  </span>
</template>

<script>
export default {
  name: 'PriceTag',
  props: {
    currency: {
      type: String,
      default: 'MXN',
      required: true
    },
    amount: {
      type: Number,
      default: null,
      required: true
    }
  }
}
</script>
