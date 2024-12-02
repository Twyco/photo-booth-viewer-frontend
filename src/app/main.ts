import {createApp} from 'vue'
import './style.css'
import App from '@views/application/App.vue'
import vuetify from "./vuetify"
import router from "@/router/router"
import {createPinia} from "pinia";

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .use(router)
  .mount('#app')
