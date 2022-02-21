import { onMounted, reactive } from 'vue';

export function setShowFun(props: any): any {
	const state = reactive({
		showValue: props.show,
	});

	// 显示组件
	const showDialog = (): void => {
		setTimeout(() => {
			state.showValue = true;
		}, 100);
	};
	// 销毁组件
	const destoryDialog = (): void => {
		setTimeout((): void => {
			const globalToast = document.getElementById('global_dialog') as HTMLIFrameElement;
			const len = globalToast.childNodes.length;
			if (len === 1) {
				state.showValue = false;
			}
			setTimeout(() => {
				if (globalToast.hasChildNodes()) {
					if (globalToast.childNodes.length === 1) {
						globalToast.removeChild(globalToast.childNodes[0]);
					} else if (globalToast.childNodes.length > 1) {
						const target = globalToast.childNodes[len - 1].childNodes[0] as HTMLIFrameElement;
						target.classList.remove('show');
						setTimeout(() => {
							globalToast.childNodes.length &&
								globalToast.removeChild(globalToast.childNodes[globalToast.childNodes.length - 1]);
						}, 300);
					}
				}
			}, 300);
		}, props.time);
	};

	onMounted(() => {
		// 显示
		showDialog();
	});

	return {
		state,
		destoryDialog,
	};
}
