export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtvuex-todo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    ['@nuxtjs/firebase',
      {
        config: {
          // (https://firebase.nuxtjs.org/guide/getting-started)
          apiKey: '<apiKey>',
          authDomain: '<authDomain>',
          databaseURL: '<databaseURL>',
          projectId: '<projectId>',
          storageBucket: '<storageBucket>',
          messagingSenderId: '<messagingSenderId>',
          appId: '<appId>',
          measurementId: '<measurementId>'
        },

        services: {
          firestore: true,
        },

        firestore: {
          memoryOnly: false, // default
          chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
          enablePersistence: true,
          emulatorPort: 8080,
          emulatorHost: 'localhost',
          settings: {
            // Firestore Settings - currently only works in SPA mode
          }
        },
      }
    ]
  ],



  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
