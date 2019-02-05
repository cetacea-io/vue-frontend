<template>
  <div 
    :style="{ 'background': net.color }"
    class="twitter__container">
    <span class="twitter__logo">
      <img :src="net.icon">
    </span>
    <span class="twitter__text">{{ net.name }}</span>
  </div>
</template>

<script>
import FacebookIcon from '@/assets/img/facebook-logo.svg'
import TwitterIcon from '@/assets/img/twitter-logo.svg'
import WhatsappIcon from '@/assets/img/whatsapp-logo.svg'
import EmailIcon from '@/assets/img/email-logo.svg'

export default {
  name: 'TwitterShare',
  props: {
    network: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    net() {
      if (this.network ==  'facebook') {
        return {
          name: 'Facebook',
          color: '#0687fc',
          icon: FacebookIcon,
        }
      } else if (this.network == 'twitter') {
        return {
          name: 'Twitter',
          color: '#00a7ff',
          icon: TwitterIcon,
        }
      } else if (this.network == 'whatsapp') {
        return {
          name: 'WhatsApp',
          color: '#27c57f',
          icon: WhatsappIcon,
        }
      } else if (this.network == 'email') {
        return {
          name: 'Email',
          color: '#00a7ff',
          icon: EmailIcon,
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.twitter__container{
  height: 40px;
  border-width: 0;
  background: #0687fc;
  color: #ffffff;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0,0,0,0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0 12px;
  display: flex;
  align-items: center;

  .twitter__logo{
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
  }
  .twitter__text {
    display: inline-block;
    vertical-align: middle;
    padding-left: 7px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Soleil';
  }
}
</style>
