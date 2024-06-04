import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import UInput from './components/global/UInput.vue' это другой вариант подключения
// import globalComponents from './components/global/index.js'

const app = createApp(App)

// app.component('UInput', UInput) это другой вариант подключения

// app.use(globalComponents)

app.mount('#app')
