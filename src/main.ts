import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // 状态管理
import { i18nLang } from '@/locals/index'; // 国际化语言
const app = createApp(App);
app.use(i18nLang);
app.use(createPinia());
app.mount('#app');
