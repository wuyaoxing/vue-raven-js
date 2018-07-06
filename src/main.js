import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueRavenjs from 'vue-raven-js'

Vue.use(VueRavenjs, {
    dsn: 'https://<key>@sentry.io/<project>',
    // disable: process.env.NODE_ENV !== 'production'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
