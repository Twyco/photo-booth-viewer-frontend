import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    colors: {
      primary: '#42b983',
      secondary: '#35495e',
      accent: '#9c27b0',
      error: '#f44336',
      info: '#2196f3',
      success: '#4caf50',
      warning: '#ff9800',
    }
  }
});