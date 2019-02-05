<template>
  <div
    style="display: flex; align-items: center;">
    <social-sharing
      :url="url"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags"
      :twitter-user="twitterUser"
      inline-template>
      <div
        style="display: flex; flex-direction: row;">
        <network network="facebook">
          <TwitterShare network="facebook"/>
        </network>
        <network network="whatsapp">
          <TwitterShare network="whatsapp"/>
        </network>
        <network network="twitter">
          <TwitterShare network="twitter"/>
        </network>
        <network network="email">
          <TwitterShare network="email"/>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
import SocialSharing from '@/components/social-share/social-sharing'

import TwitterShare from '@/components/social-share/TwitterShare'

export default {
  name: 'SocialShare',
  components: {
    SocialSharing,
    TwitterShare,
  },
  props: {
    /**
     * URL to share.
     * @var string
     */
    url: {
      type: String,
      default: inBrowser ? window.location.href : ''
    },

    /**
     * Sharing title, if available by network.
     * @var string
     */
    title: {
      type: String,
      default: ''
    },

    /**
     * Sharing description, if available by network.
     * @var string
     */
    description: {
      type: String,
      default: ''
    },

    /**
     * Facebook quote
     * @var string
     */
    quote: {
      type: String,
      default: ''
    },

    /**
     * Twitter hashtags
     * @var string
     */
    hashtags: {
      type: String,
      default: ''
    },

    /**
     * Twitter user.
     * @var string
     */
    twitterUser: {
      type: String,
      default: ''
    },

    /**
     * Pinterest Media URL.
     * Specifies the image/media to be used.
     */
    media: {
      type: String,
      default: ''
    }
  }
}
</script>
