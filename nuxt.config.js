const pkg = require('./package')
// require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cetacea — Colabora en proyectos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Crea proyectos alrededor del mundo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main',
    '~/assets/css/variables',
    'cetacea-design-system/dist/system/system'
  ],

  styleResources: {
    scss: [
      '~/assets/css/main',
      '~/assets/css/variables',
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/design-system', ssr: true },
    '@/mixins/mixins',
    '@/mixins/form-modal',
    { src: '~/plugins/segment', ssr: false },
    { src: '~/plugins/optimizely', ssr: true },
    { src: '~/plugins/flickity', ssr: false },
    { src: '~/plugins/installationPromptPWA', ssr: false },
    { src: '~/plugins/unauthorized-handler', ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    ['@nuxtjs/style-resources','cetacea-design-system/dist/system/system.css'],
    '@nuxtjs/sitemap'
  ],
  /*
  ** Sitemap
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL, //change for BASE_URL
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: [
      '/secret',  //change
      '/admin/**' //change
    ],
    routes() {
      return app.apolloProvider.defaultClient.query({
        query: gql`
          query projects {
            projects {
              title
            }
          }
        `,
      })
      .then(res => res.data.map(project => '/projects/' + project.title ))
    }
  },
  /*
  **  One Signal Push Notifications
  */
  oneSignal: {
    init: {
      appId: process.env.ONE_SIGNAL_ID,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  },
  /*
  **  Apollo module
  */
  apollo: {
    includeNodeModules: true,
    authenticationType: 'JWT',
    clientConfigs: {
      default: '~/plugins/apollo-config.js'
    }
  },
  /*
  ** Render function
  */
  render: {
    compressor: {
      treshold: 0
    }
  },

  /**
   * Router
   */
  router: {
    middleware: ['notCompletedProfile']
  },
  srcDir: 'client/',
  /*
  ** Build configuration
  */
  build: {
    /**
     * Babel
     */
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              targets: isServer ? { node: '10' } : { ie: '11' },
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    /*
    ** PostCSS
    */
    postcss: {
      plugins: {
          // Disable `postcss-url`
        'postcss-url': false,
        // Add some plugins
        'postcss-custom-media': {},
        'postcss-nesting': {},
        'postcss-color-mod-function': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },
          // {
          //   test: /\.(graphql|gql)$/,
          //   exclude: /node_modules/,
          //   loader: 'graphql-tag/loader'
          // }
        )
      }
    }
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    DEV_GRAPH: process.env.DEV_GRAPH,
    ONE_SIGNAL_ID: process.env.ONE_SIGNAL_ID,
    SEGMENT_KEY: process.env.SEGMENT_KEY,
    OPTIMIZELY_DATAFILE: process.env.OPTIMIZELY_DATAFILE,
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID
  }
}
