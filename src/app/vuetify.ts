import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
  },
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#002566",
          secondary: "#96bcff",
          accent: "#999999",
          error: "#D32F2F",
          info: "#1976D2",
          success: "#388E3C",
          warning: "#FBC02D",
          'custom-white': "#eaeaea"
        }
      }
    }
  }
});