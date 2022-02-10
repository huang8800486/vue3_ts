import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // 状态管理
import router from './router';
import { i18nLang } from '@/locals/index'; // 国际化语言
const app = createApp(App);
app.use(router);
app.use(i18nLang);
app.use(createPinia());
app.mount('#app');
