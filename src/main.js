import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';
ThemeServiceInit({ infinityTheme }, 'infinityTheme');

import 'animate.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DevUI)

app.mount('#app')
