export type IglobalConfig = {
	type?: string;
	show: boolean;
};
export const merge = (options: any, globalConfig: IglobalConfig): any => {
	let config = {} as any;
	options = options || {};
	config = {
		...globalConfig,
		...options,
	};
	return config;
};

export const appendToElement = (container: HTMLElement): void => {
	const firstNode = document.getElementById('global_dialog') as HTMLIFrameElement;
	if (!firstNode) {
		const warpper = document.createElement('div');
		warpper.id = 'global_dialog';
		document.body.appendChild(warpper);
	}
	const globalDialog = document.getElementById('global_dialog') as HTMLIFrameElement;
	globalDialog.appendChild(container);
};
