type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
	const ret: any = {};
	for (const [prefix, target] of list) {
		const isHttps = httpsRE.test(target);

		// https://github.com/http-party/node-http-proxy#options
		ret[prefix] = {
			target: target,
			changeOrigin: true,
			ws: true,
			rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
			// https is require secure=false
			...(isHttps ? { secure: false } : {}),
		};
	}
	return ret;
}