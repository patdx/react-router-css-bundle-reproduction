import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		reactRouter(),
		{
			name: 'ssr-config',
			apply: 'build',
			enforce: 'post',
			config(config, env) {
				if (env.isSsrBuild) {
					return {
						build: {
							target: 'esnext',
							minify: false,
						},
					}
				}
			},
		},
	],
})
