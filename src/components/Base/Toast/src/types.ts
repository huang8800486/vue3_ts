export type IglobalConfig = {
	type?: 'success' | 'error';
	time?: number;
	show?: boolean;
	text: string;
};
// 合并参数
export const merge = (options: IglobalConfig, globalConfig: IglobalConfig): IglobalConfig => {
	let config = {} as IglobalConfig;
	options = options || {};
	if (typeof options === 'string') {
		config.text = options;
	}
	const mergeOptions: IglobalConfig = typeof options === 'string' ? config : options;
	config = {
		...globalConfig,
		...mergeOptions,
	};
	return config;
};
export const appendToElement = (container: HTMLElement): void => {
	const firstNode = document.getElementById('global_toast') as HTMLIFrameElement;
	if (!firstNode) {
		const warpper = document.createElement('div');
		warpper.id = 'global_toast';
		document.body.appendChild(warpper);
	}
	const globalToast = document.getElementById('global_toast') as HTMLIFrameElement;
	globalToast.appendChild(container);
};
