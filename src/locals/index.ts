import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import zh_CN from './zh_CN';
import en_US from './en_US';

/**
 * @name: loadLocalesData
 * @description: Helper to load the locale json files with each locale data
 */
const lang: string = localStorage.getItem('lan') || 'en_US';
export const i18nLang = createI18n({
	locale: lang,
	fallbackLocale: lang,
	messages: {
		zh_CN,
		en_US,
	},
});
/**
 * 初始化国际化
 * @param app => vue对象
 */
export function setupI18n(app: App<Element>) {
	app.use(i18nLang);
}
/**
 * switchLanguage 切换语言
 * @param {Object} i18n => i18n对象
 * @param {string} lang => 语言字符串, 如zh_CN, en_US
 */
export function switchLanguage(i18n: any, lang: string): void {
	i18n.locale.value = lang;
	i18n.locale.fallbackLocale = lang;
	localStorage.setItem('lan', lang);
}
