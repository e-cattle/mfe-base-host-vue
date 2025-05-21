export default {
  name: 'app',
  remotes: {
    registerDevice: 'https://localhost:5005/assets/remoteEntry.js',
    animalApp: 'https://localhost:5007/assets/remoteEntry.js'
  },
  shared: [
    'vue',
    'vuetify',
    'axios',
    'core-js',
    'pinia',
    'vue-router'
  ]
}
