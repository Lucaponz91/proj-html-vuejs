import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Font Montserrat
import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/500.css"


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
