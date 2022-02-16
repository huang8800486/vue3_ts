declare type Recordable<T = any> = Record<string, T>;
declare interface ViteEnv {
	VITE_PORT: number;
	VITE_USE_PWA: boolean;
	VITE_PROXY: [string, string][];
	VITE_APP_TITLE: string;
	VITE_PUBLIC_PATH: string;
	VITE_USER_NODE_ENV: string;
}

declare type Nullable<T> = T | null;
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
