import { jsx, jsxs } from 'react/jsx-runtime'
import { PassThrough } from 'node:stream'
import { createReadableStreamFromReadable } from '@react-router/node'
import {
	ServerRouter,
	useParams,
	useLoaderData,
	useActionData,
	useMatches,
	Meta,
	Links,
	ScrollRestoration,
	Scripts,
	Outlet,
} from 'react-router'
import { isbot } from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { createElement } from 'react'

const streamTimeout = 5e3
function handleRequest(
	request,
	responseStatusCode,
	responseHeaders,
	routerContext,
	loadContext,
) {
	return new Promise((resolve, reject) => {
		let shellRendered = false
		let userAgent = request.headers.get('user-agent')
		let readyOption =
			(userAgent && isbot(userAgent)) || routerContext.isSpaMode
				? 'onAllReady'
				: 'onShellReady'
		const { pipe, abort } = renderToPipeableStream(
			/* @__PURE__ */ jsx(ServerRouter, {
				context: routerContext,
				url: request.url,
			}),
			{
				[readyOption]() {
					shellRendered = true
					const body = new PassThrough()
					const stream = createReadableStreamFromReadable(body)
					responseHeaders.set('Content-Type', 'text/html')
					resolve(
						new Response(stream, {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					)
					pipe(body)
				},
				onShellError(error) {
					reject(error)
				},
				onError(error) {
					responseStatusCode = 500
					if (shellRendered) {
						console.error(error)
					}
				},
			},
		)
		setTimeout(abort, streamTimeout + 1e3)
	})
}

const entryServer = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			default: handleRequest,
			streamTimeout,
		},
		Symbol.toStringTag,
		{ value: 'Module' },
	),
)

function withComponentProps(Component) {
	return function Wrapped() {
		const props = {
			params: useParams(),
			loaderData: useLoaderData(),
			actionData: useActionData(),
			matches: useMatches(),
		}
		return createElement(Component, props)
	}
}

const stylesheet = '/assets/app-1IW71QWL.css'

const links = () => [
	{
		rel: 'stylesheet',
		href: stylesheet,
	},
]
function Layout({ children }) {
	return /* @__PURE__ */ jsxs('html', {
		lang: 'en',
		children: [
			/* @__PURE__ */ jsxs('head', {
				children: [
					/* @__PURE__ */ jsx('meta', {
						charSet: 'utf-8',
					}),
					/* @__PURE__ */ jsx('meta', {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1',
					}),
					/* @__PURE__ */ jsx(Meta, {}),
					/* @__PURE__ */ jsx(Links, {}),
				],
			}),
			/* @__PURE__ */ jsxs('body', {
				children: [
					children,
					/* @__PURE__ */ jsx(ScrollRestoration, {}),
					/* @__PURE__ */ jsx(Scripts, {}),
				],
			}),
		],
	})
}
const root = withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {})
})

const route0 = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			Layout,
			default: root,
			links,
		},
		Symbol.toStringTag,
		{ value: 'Module' },
	),
)

const home = withComponentProps(function Home(props) {
	return /* @__PURE__ */ jsx('div', {
		children: 'Home',
	})
})

const route1 = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			default: home,
		},
		Symbol.toStringTag,
		{ value: 'Module' },
	),
)

const serverManifest = {
	entry: {
		module: '/assets/entry.client-nW39Dl5L.js',
		imports: ['/assets/chunk-K6AXKMTT-Uf-Rxg3v.js'],
		css: [],
	},
	routes: {
		root: {
			id: 'root',
			parentId: undefined,
			path: '',
			index: undefined,
			caseSensitive: undefined,
			hasAction: false,
			hasLoader: false,
			hasClientAction: false,
			hasClientLoader: false,
			hasErrorBoundary: false,
			module: '/assets/root-DZjrSBux.js',
			imports: [
				'/assets/chunk-K6AXKMTT-Uf-Rxg3v.js',
				'/assets/with-props-DqyziH9M.js',
			],
			css: [],
		},
		'routes/home': {
			id: 'routes/home',
			parentId: 'root',
			path: undefined,
			index: true,
			caseSensitive: undefined,
			hasAction: false,
			hasLoader: false,
			hasClientAction: false,
			hasClientLoader: false,
			hasErrorBoundary: false,
			module: '/assets/home-ByeqEsBJ.js',
			imports: [
				'/assets/with-props-DqyziH9M.js',
				'/assets/chunk-K6AXKMTT-Uf-Rxg3v.js',
			],
			css: [],
		},
	},
	url: '/assets/manifest-bf661a2c.js',
	version: 'bf661a2c',
}

const assetsBuildDirectory = 'build/client'
const basename = '/'
const future = { unstable_optimizeDeps: false }
const isSpaMode = false
const publicPath = '/'
const entry = { module: entryServer }
const routes = {
	root: {
		id: 'root',
		parentId: undefined,
		path: '',
		index: undefined,
		caseSensitive: undefined,
		module: route0,
	},
	'routes/home': {
		id: 'routes/home',
		parentId: 'root',
		path: undefined,
		index: true,
		caseSensitive: undefined,
		module: route1,
	},
}

export {
	serverManifest as assets,
	assetsBuildDirectory,
	basename,
	entry,
	future,
	isSpaMode,
	publicPath,
	routes,
}
