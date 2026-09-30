import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import ECharts from 'vue-echarts'
import './styles/tokens.css'
import './styles/global.css'
import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#563827',
          secondary: '#5d7a50',
          accent: '#d7a65f',
          background: '#f7f2ea',
          surface: '#fdfaf5',
          error: '#c76d4f',
        },
      },
      dark: {
        colors: {
          primary: '#d7a65f',
          secondary: '#7ea87a',
          accent: '#d7a65f',
          background: '#1d1714',
          surface: '#241f1d',
          error: '#df7c5e',
        },
      },
    },
  },
})

const app = createApp(App)
app.component('v-chart', ECharts)
app.use(vuetify)
app.mount('#app')
