import {createApp} from 'vue'
import './style.css'
import App from '@views/application/App.vue'
import vuetify from "./vuetify"
import router from "@/router/router"

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
