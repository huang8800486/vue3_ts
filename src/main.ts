import 'virtual:svg-icons-register';
import { app } from './mount';
import { setupStore } from '@/store';
import { setupI18n } from '@/locals';
import { setupRouter } from '@/router';
import { setupGlobDirectives } from '@/directives';
import '@/assets/styles/index.styl';

async function bootstrap() {
	// 注册路由
	setupRouter(app);

	// 注册国际化语言
	setupI18n(app);

	// 注册状态管理pinia
	setupStore(app);

	// 注册全局自定义指令
	setupGlobDirectives(app);

	app.mount('#app');
}

bootstrap();
