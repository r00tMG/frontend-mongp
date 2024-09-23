import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
const app = createApp(App)
app.use(router)
app.component('VueDatePicker', VueDatePicker)
app.mount('#app')

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_PUSHER_KEY,
    cluster: process.env.VUE_APP_PUSHER_CLUSTER,
    forceTLS: true,
});
console.log(process.env)