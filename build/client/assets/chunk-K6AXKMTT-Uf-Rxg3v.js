var Zn = Object.defineProperty
var ea = (e, t, r) =>
	t in e
		? Zn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
		: (e[t] = r)
var pt = (e, t, r) => ea(e, typeof t != 'symbol' ? t + '' : t, r)
var Ft = { exports: {} },
	Qe = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr
function ta() {
	if (Pr) return Qe
	Pr = 1
	var e = Symbol.for('react.transitional.element'),
		t = Symbol.for('react.fragment')
	function r(n, a, o) {
		var i = null
		if (
			(o !== void 0 && (i = '' + o),
			a.key !== void 0 && (i = '' + a.key),
			'key' in a)
		) {
			o = {}
			for (var l in a) l !== 'key' && (o[l] = a[l])
		} else o = a
		return (
			(a = o.ref),
			{ $$typeof: e, type: n, key: i, ref: a !== void 0 ? a : null, props: o }
		)
	}
	return (Qe.Fragment = t), (Qe.jsx = r), (Qe.jsxs = r), Qe
}
var Tr
function ra() {
	return Tr || ((Tr = 1), (Ft.exports = ta())), Ft.exports
}
var ji = ra(),
	jt = { exports: {} },
	H = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dr
function na() {
	if (Dr) return H
	Dr = 1
	var e = Symbol.for('react.transitional.element'),
		t = Symbol.for('react.portal'),
		r = Symbol.for('react.fragment'),
		n = Symbol.for('react.strict_mode'),
		a = Symbol.for('react.profiler'),
		o = Symbol.for('react.consumer'),
		i = Symbol.for('react.context'),
		l = Symbol.for('react.forward_ref'),
		s = Symbol.for('react.suspense'),
		u = Symbol.for('react.memo'),
		p = Symbol.for('react.lazy'),
		v = Symbol.iterator
	function h(m) {
		return m === null || typeof m != 'object'
			? null
			: ((m = (v && m[v]) || m['@@iterator']),
				typeof m == 'function' ? m : null)
	}
	var y = {
			isMounted: function () {
				return !1
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		w = Object.assign,
		b = {}
	function x(m, C, N) {
		;(this.props = m),
			(this.context = C),
			(this.refs = b),
			(this.updater = N || y)
	}
	;(x.prototype.isReactComponent = {}),
		(x.prototype.setState = function (m, C) {
			if (typeof m != 'object' && typeof m != 'function' && m != null)
				throw Error(
					'takes an object of state variables to update or a function which returns an object of state variables.',
				)
			this.updater.enqueueSetState(this, m, C, 'setState')
		}),
		(x.prototype.forceUpdate = function (m) {
			this.updater.enqueueForceUpdate(this, m, 'forceUpdate')
		})
	function E() {}
	E.prototype = x.prototype
	function P(m, C, N) {
		;(this.props = m),
			(this.context = C),
			(this.refs = b),
			(this.updater = N || y)
	}
	var L = (P.prototype = new E())
	;(L.constructor = P), w(L, x.prototype), (L.isPureReactComponent = !0)
	var D = Array.isArray,
		f = { H: null, A: null, T: null, S: null },
		M = Object.prototype.hasOwnProperty
	function U(m, C, N, $, Y, J) {
		return (
			(N = J.ref),
			{ $$typeof: e, type: m, key: C, ref: N !== void 0 ? N : null, props: J }
		)
	}
	function I(m, C) {
		return U(m.type, C, void 0, void 0, void 0, m.props)
	}
	function B(m) {
		return typeof m == 'object' && m !== null && m.$$typeof === e
	}
	function K(m) {
		var C = { '=': '=0', ':': '=2' }
		return (
			'$' +
			m.replace(/[=:]/g, function (N) {
				return C[N]
			})
		)
	}
	var le = /\/+/g
	function pe(m, C) {
		return typeof m == 'object' && m !== null && m.key != null
			? K('' + m.key)
			: C.toString(36)
	}
	function ye() {}
	function Ue(m) {
		switch (m.status) {
			case 'fulfilled':
				return m.value
			case 'rejected':
				throw m.reason
			default:
				switch (
					(typeof m.status == 'string'
						? m.then(ye, ye)
						: ((m.status = 'pending'),
							m.then(
								function (C) {
									m.status === 'pending' &&
										((m.status = 'fulfilled'), (m.value = C))
								},
								function (C) {
									m.status === 'pending' &&
										((m.status = 'rejected'), (m.reason = C))
								},
							)),
					m.status)
				) {
					case 'fulfilled':
						return m.value
					case 'rejected':
						throw m.reason
				}
		}
		throw m
	}
	function q(m, C, N, $, Y) {
		var J = typeof m
		;(J === 'undefined' || J === 'boolean') && (m = null)
		var W = !1
		if (m === null) W = !0
		else
			switch (J) {
				case 'bigint':
				case 'string':
				case 'number':
					W = !0
					break
				case 'object':
					switch (m.$$typeof) {
						case e:
						case t:
							W = !0
							break
						case p:
							return (W = m._init), q(W(m._payload), C, N, $, Y)
					}
			}
		if (W)
			return (
				(Y = Y(m)),
				(W = $ === '' ? '.' + pe(m, 0) : $),
				D(Y)
					? ((N = ''),
						W != null && (N = W.replace(le, '$&/') + '/'),
						q(Y, C, N, '', function (ae) {
							return ae
						}))
					: Y != null &&
						(B(Y) &&
							(Y = I(
								Y,
								N +
									(Y.key == null || (m && m.key === Y.key)
										? ''
										: ('' + Y.key).replace(le, '$&/') + '/') +
									W,
							)),
						C.push(Y)),
				1
			)
		W = 0
		var ge = $ === '' ? '.' : $ + ':'
		if (D(m))
			for (var ee = 0; ee < m.length; ee++)
				($ = m[ee]), (J = ge + pe($, ee)), (W += q($, C, N, J, Y))
		else if (((ee = h(m)), typeof ee == 'function'))
			for (m = ee.call(m), ee = 0; !($ = m.next()).done; )
				($ = $.value), (J = ge + pe($, ee++)), (W += q($, C, N, J, Y))
		else if (J === 'object') {
			if (typeof m.then == 'function') return q(Ue(m), C, N, $, Y)
			throw (
				((C = String(m)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(C === '[object Object]'
							? 'object with keys {' + Object.keys(m).join(', ') + '}'
							: C) +
						'). If you meant to render a collection of children, use an array instead.',
				))
			)
		}
		return W
	}
	function Re(m, C, N) {
		if (m == null) return m
		var $ = [],
			Y = 0
		return (
			q(m, $, '', '', function (J) {
				return C.call(N, J, Y++)
			}),
			$
		)
	}
	function Oe(m) {
		if (m._status === -1) {
			var C = m._result
			;(C = C()),
				C.then(
					function (N) {
						;(m._status === 0 || m._status === -1) &&
							((m._status = 1), (m._result = N))
					},
					function (N) {
						;(m._status === 0 || m._status === -1) &&
							((m._status = 2), (m._result = N))
					},
				),
				m._status === -1 && ((m._status = 0), (m._result = C))
		}
		if (m._status === 1) return m._result.default
		throw m._result
	}
	var be =
		typeof reportError == 'function'
			? reportError
			: function (m) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var C = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof m == 'object' &&
								m !== null &&
								typeof m.message == 'string'
									? String(m.message)
									: String(m),
							error: m,
						})
						if (!window.dispatchEvent(C)) return
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', m)
						return
					}
					console.error(m)
				}
	function fe() {}
	return (
		(H.Children = {
			map: Re,
			forEach: function (m, C, N) {
				Re(
					m,
					function () {
						C.apply(this, arguments)
					},
					N,
				)
			},
			count: function (m) {
				var C = 0
				return (
					Re(m, function () {
						C++
					}),
					C
				)
			},
			toArray: function (m) {
				return (
					Re(m, function (C) {
						return C
					}) || []
				)
			},
			only: function (m) {
				if (!B(m))
					throw Error(
						'React.Children.only expected to receive a single React element child.',
					)
				return m
			},
		}),
		(H.Component = x),
		(H.Fragment = r),
		(H.Profiler = a),
		(H.PureComponent = P),
		(H.StrictMode = n),
		(H.Suspense = s),
		(H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
		(H.act = function () {
			throw Error('act(...) is not supported in production builds of React.')
		}),
		(H.cache = function (m) {
			return function () {
				return m.apply(null, arguments)
			}
		}),
		(H.cloneElement = function (m, C, N) {
			if (m == null)
				throw Error(
					'The argument must be a React element, but you passed ' + m + '.',
				)
			var $ = w({}, m.props),
				Y = m.key,
				J = void 0
			if (C != null)
				for (W in (C.ref !== void 0 && (J = void 0),
				C.key !== void 0 && (Y = '' + C.key),
				C))
					!M.call(C, W) ||
						W === 'key' ||
						W === '__self' ||
						W === '__source' ||
						(W === 'ref' && C.ref === void 0) ||
						($[W] = C[W])
			var W = arguments.length - 2
			if (W === 1) $.children = N
			else if (1 < W) {
				for (var ge = Array(W), ee = 0; ee < W; ee++) ge[ee] = arguments[ee + 2]
				$.children = ge
			}
			return U(m.type, Y, void 0, void 0, J, $)
		}),
		(H.createContext = function (m) {
			return (
				(m = {
					$$typeof: i,
					_currentValue: m,
					_currentValue2: m,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(m.Provider = m),
				(m.Consumer = { $$typeof: o, _context: m }),
				m
			)
		}),
		(H.createElement = function (m, C, N) {
			var $,
				Y = {},
				J = null
			if (C != null)
				for ($ in (C.key !== void 0 && (J = '' + C.key), C))
					M.call(C, $) &&
						$ !== 'key' &&
						$ !== '__self' &&
						$ !== '__source' &&
						(Y[$] = C[$])
			var W = arguments.length - 2
			if (W === 1) Y.children = N
			else if (1 < W) {
				for (var ge = Array(W), ee = 0; ee < W; ee++) ge[ee] = arguments[ee + 2]
				Y.children = ge
			}
			if (m && m.defaultProps)
				for ($ in ((W = m.defaultProps), W)) Y[$] === void 0 && (Y[$] = W[$])
			return U(m, J, void 0, void 0, null, Y)
		}),
		(H.createRef = function () {
			return { current: null }
		}),
		(H.forwardRef = function (m) {
			return { $$typeof: l, render: m }
		}),
		(H.isValidElement = B),
		(H.lazy = function (m) {
			return { $$typeof: p, _payload: { _status: -1, _result: m }, _init: Oe }
		}),
		(H.memo = function (m, C) {
			return { $$typeof: u, type: m, compare: C === void 0 ? null : C }
		}),
		(H.startTransition = function (m) {
			var C = f.T,
				N = {}
			f.T = N
			try {
				var $ = m(),
					Y = f.S
				Y !== null && Y(N, $),
					typeof $ == 'object' &&
						$ !== null &&
						typeof $.then == 'function' &&
						$.then(fe, be)
			} catch (J) {
				be(J)
			} finally {
				f.T = C
			}
		}),
		(H.unstable_useCacheRefresh = function () {
			return f.H.useCacheRefresh()
		}),
		(H.use = function (m) {
			return f.H.use(m)
		}),
		(H.useActionState = function (m, C, N) {
			return f.H.useActionState(m, C, N)
		}),
		(H.useCallback = function (m, C) {
			return f.H.useCallback(m, C)
		}),
		(H.useContext = function (m) {
			return f.H.useContext(m)
		}),
		(H.useDebugValue = function () {}),
		(H.useDeferredValue = function (m, C) {
			return f.H.useDeferredValue(m, C)
		}),
		(H.useEffect = function (m, C) {
			return f.H.useEffect(m, C)
		}),
		(H.useId = function () {
			return f.H.useId()
		}),
		(H.useImperativeHandle = function (m, C, N) {
			return f.H.useImperativeHandle(m, C, N)
		}),
		(H.useInsertionEffect = function (m, C) {
			return f.H.useInsertionEffect(m, C)
		}),
		(H.useLayoutEffect = function (m, C) {
			return f.H.useLayoutEffect(m, C)
		}),
		(H.useMemo = function (m, C) {
			return f.H.useMemo(m, C)
		}),
		(H.useOptimistic = function (m, C) {
			return f.H.useOptimistic(m, C)
		}),
		(H.useReducer = function (m, C, N) {
			return f.H.useReducer(m, C, N)
		}),
		(H.useRef = function (m) {
			return f.H.useRef(m)
		}),
		(H.useState = function (m) {
			return f.H.useState(m)
		}),
		(H.useSyncExternalStore = function (m, C, N) {
			return f.H.useSyncExternalStore(m, C, N)
		}),
		(H.useTransition = function () {
			return f.H.useTransition()
		}),
		(H.version = '19.0.0'),
		H
	)
}
var Mr
function aa() {
	return Mr || ((Mr = 1), (jt.exports = na())), jt.exports
}
var d = aa(),
	oa = -1,
	ia = -2,
	la = -3,
	sa = -4,
	ua = -5,
	ca = -6,
	da = -7,
	fa = 'B',
	ha = 'D',
	rn = 'E',
	ma = 'M',
	pa = 'N',
	nn = 'P',
	ya = 'R',
	ga = 'S',
	va = 'Y',
	wa = 'U',
	Ea = 'Z',
	an = class {
		constructor() {
			pt(this, 'promise')
			pt(this, 'resolve')
			pt(this, 'reject')
			this.promise = new Promise((t, r) => {
				;(this.resolve = t), (this.reject = r)
			})
		}
	}
function Ra() {
	const e = new TextDecoder()
	let t = ''
	return new TransformStream({
		transform(r, n) {
			const a = e.decode(r, { stream: !0 }),
				o = (t + a).split(`
`)
			t = o.pop() || ''
			for (const i of o) n.enqueue(i)
		},
		flush(r) {
			t && r.enqueue(t)
		},
	})
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
var Ut =
	typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0
function Vt(e) {
	const { hydrated: t, values: r } = this
	if (typeof e == 'number') return kr.call(this, e)
	if (!Array.isArray(e) || !e.length) throw new SyntaxError()
	const n = r.length
	for (const a of e) r.push(a)
	return (t.length = r.length), kr.call(this, n)
}
function kr(e) {
	const { hydrated: t, values: r, deferred: n, plugins: a } = this
	let o
	const i = [
		[
			e,
			(s) => {
				o = s
			},
		],
	]
	let l = []
	for (; i.length > 0; ) {
		const [s, u] = i.pop()
		switch (s) {
			case da:
				u(void 0)
				continue
			case ua:
				u(null)
				continue
			case ia:
				u(NaN)
				continue
			case ca:
				u(1 / 0)
				continue
			case la:
				u(-1 / 0)
				continue
			case sa:
				u(-0)
				continue
		}
		if (t[s]) {
			u(t[s])
			continue
		}
		const p = r[s]
		if (!p || typeof p != 'object') {
			;(t[s] = p), u(p)
			continue
		}
		if (Array.isArray(p))
			if (typeof p[0] == 'string') {
				const [v, h, y] = p
				switch (v) {
					case ha:
						u((t[s] = new Date(h)))
						continue
					case wa:
						u((t[s] = new URL(h)))
						continue
					case fa:
						u((t[s] = BigInt(h)))
						continue
					case ya:
						u((t[s] = new RegExp(h, y)))
						continue
					case va:
						u((t[s] = Symbol.for(h)))
						continue
					case ga:
						const w = new Set()
						t[s] = w
						for (let D = 1; D < p.length; D++)
							i.push([
								p[D],
								(f) => {
									w.add(f)
								},
							])
						u(w)
						continue
					case ma:
						const b = new Map()
						t[s] = b
						for (let D = 1; D < p.length; D += 2) {
							const f = []
							i.push([
								p[D + 1],
								(M) => {
									f[1] = M
								},
							]),
								i.push([
									p[D],
									(M) => {
										f[0] = M
									},
								]),
								l.push(() => {
									b.set(f[0], f[1])
								})
						}
						u(b)
						continue
					case pa:
						const x = Object.create(null)
						t[s] = x
						for (const D of Object.keys(h).reverse()) {
							const f = []
							i.push([
								h[D],
								(M) => {
									f[1] = M
								},
							]),
								i.push([
									Number(D.slice(1)),
									(M) => {
										f[0] = M
									},
								]),
								l.push(() => {
									x[f[0]] = f[1]
								})
						}
						u(x)
						continue
					case nn:
						if (t[h]) u((t[s] = t[h]))
						else {
							const D = new an()
							;(n[h] = D), u((t[s] = D.promise))
						}
						continue
					case rn:
						const [, E, P] = p
						let L = P && Ut && Ut[P] ? new Ut[P](E) : new Error(E)
						;(t[s] = L), u(L)
						continue
					case Ea:
						u((t[s] = t[h]))
						continue
					default:
						if (Array.isArray(a)) {
							const D = [],
								f = p.slice(1)
							for (let M = 0; M < f.length; M++) {
								const U = f[M]
								i.push([
									U,
									(I) => {
										D[M] = I
									},
								])
							}
							l.push(() => {
								for (const M of a) {
									const U = M(p[0], ...D)
									if (U) {
										u((t[s] = U.value))
										return
									}
								}
								throw new SyntaxError()
							})
							continue
						}
						throw new SyntaxError()
				}
			} else {
				const v = []
				t[s] = v
				for (let h = 0; h < p.length; h++) {
					const y = p[h]
					y !== oa &&
						i.push([
							y,
							(w) => {
								v[h] = w
							},
						])
				}
				u(v)
				continue
			}
		else {
			const v = {}
			t[s] = v
			for (const h of Object.keys(p).reverse()) {
				const y = []
				i.push([
					p[h],
					(w) => {
						y[1] = w
					},
				]),
					i.push([
						Number(h.slice(1)),
						(w) => {
							y[0] = w
						},
					]),
					l.push(() => {
						v[y[0]] = y[1]
					})
			}
			u(v)
			continue
		}
	}
	for (; l.length > 0; ) l.pop()()
	return o
}
async function ba(e, t) {
	const { plugins: r } = t,
		n = new an(),
		a = e.pipeThrough(Ra()).getReader(),
		o = { values: [], hydrated: [], deferred: {}, plugins: r },
		i = await Sa.call(o, a)
	let l = n.promise
	return (
		i.done
			? n.resolve()
			: (l = xa
					.call(o, a)
					.then(n.resolve)
					.catch((s) => {
						for (const u of Object.values(o.deferred)) u.reject(s)
						n.reject(s)
					})),
		{ done: l.then(() => a.closed), value: i.value }
	)
}
async function Sa(e) {
	const t = await e.read()
	if (!t.value) throw new SyntaxError()
	let r
	try {
		r = JSON.parse(t.value)
	} catch {
		throw new SyntaxError()
	}
	return { done: t.done, value: Vt.call(this, r) }
}
async function xa(e) {
	let t = await e.read()
	for (; !t.done; ) {
		if (!t.value) continue
		const r = t.value
		switch (r[0]) {
			case nn: {
				const n = r.indexOf(':'),
					a = Number(r.slice(1, n)),
					o = this.deferred[a]
				if (!o) throw new Error(`Deferred ID ${a} not found in stream`)
				const i = r.slice(n + 1)
				let l
				try {
					l = JSON.parse(i)
				} catch {
					throw new SyntaxError()
				}
				const s = Vt.call(this, l)
				o.resolve(s)
				break
			}
			case rn: {
				const n = r.indexOf(':'),
					a = Number(r.slice(1, n)),
					o = this.deferred[a]
				if (!o) throw new Error(`Deferred ID ${a} not found in stream`)
				const i = r.slice(n + 1)
				let l
				try {
					l = JSON.parse(i)
				} catch {
					throw new SyntaxError()
				}
				const s = Vt.call(this, l)
				o.reject(s)
				break
			}
			default:
				throw new SyntaxError()
		}
		t = await e.read()
	}
}
var Ze = {},
	_r
function La() {
	if (_r) return Ze
	;(_r = 1),
		Object.defineProperty(Ze, '__esModule', { value: !0 }),
		(Ze.parse = i),
		(Ze.serialize = u)
	const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
		t = /^[\u0021-\u003A\u003C-\u007E]*$/,
		r =
			/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
		n = /^[\u0020-\u003A\u003D-\u007E]*$/,
		a = Object.prototype.toString,
		o = (() => {
			const h = function () {}
			return (h.prototype = Object.create(null)), h
		})()
	function i(h, y) {
		const w = new o(),
			b = h.length
		if (b < 2) return w
		const x = (y == null ? void 0 : y.decode) || p
		let E = 0
		do {
			const P = h.indexOf('=', E)
			if (P === -1) break
			const L = h.indexOf(';', E),
				D = L === -1 ? b : L
			if (P > D) {
				E = h.lastIndexOf(';', P - 1) + 1
				continue
			}
			const f = l(h, E, P),
				M = s(h, P, f),
				U = h.slice(f, M)
			if (w[U] === void 0) {
				let I = l(h, P + 1, D),
					B = s(h, D, I)
				const K = x(h.slice(I, B))
				w[U] = K
			}
			E = D + 1
		} while (E < b)
		return w
	}
	function l(h, y, w) {
		do {
			const b = h.charCodeAt(y)
			if (b !== 32 && b !== 9) return y
		} while (++y < w)
		return w
	}
	function s(h, y, w) {
		for (; y > w; ) {
			const b = h.charCodeAt(--y)
			if (b !== 32 && b !== 9) return y + 1
		}
		return w
	}
	function u(h, y, w) {
		const b = (w == null ? void 0 : w.encode) || encodeURIComponent
		if (!e.test(h)) throw new TypeError(`argument name is invalid: ${h}`)
		const x = b(y)
		if (!t.test(x)) throw new TypeError(`argument val is invalid: ${y}`)
		let E = h + '=' + x
		if (!w) return E
		if (w.maxAge !== void 0) {
			if (!Number.isInteger(w.maxAge))
				throw new TypeError(`option maxAge is invalid: ${w.maxAge}`)
			E += '; Max-Age=' + w.maxAge
		}
		if (w.domain) {
			if (!r.test(w.domain))
				throw new TypeError(`option domain is invalid: ${w.domain}`)
			E += '; Domain=' + w.domain
		}
		if (w.path) {
			if (!n.test(w.path))
				throw new TypeError(`option path is invalid: ${w.path}`)
			E += '; Path=' + w.path
		}
		if (w.expires) {
			if (!v(w.expires) || !Number.isFinite(w.expires.valueOf()))
				throw new TypeError(`option expires is invalid: ${w.expires}`)
			E += '; Expires=' + w.expires.toUTCString()
		}
		if (
			(w.httpOnly && (E += '; HttpOnly'),
			w.secure && (E += '; Secure'),
			w.partitioned && (E += '; Partitioned'),
			w.priority)
		)
			switch (
				typeof w.priority == 'string' ? w.priority.toLowerCase() : void 0
			) {
				case 'low':
					E += '; Priority=Low'
					break
				case 'medium':
					E += '; Priority=Medium'
					break
				case 'high':
					E += '; Priority=High'
					break
				default:
					throw new TypeError(`option priority is invalid: ${w.priority}`)
			}
		if (w.sameSite)
			switch (
				typeof w.sameSite == 'string' ? w.sameSite.toLowerCase() : w.sameSite
			) {
				case !0:
				case 'strict':
					E += '; SameSite=Strict'
					break
				case 'lax':
					E += '; SameSite=Lax'
					break
				case 'none':
					E += '; SameSite=None'
					break
				default:
					throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)
			}
		return E
	}
	function p(h) {
		if (h.indexOf('%') === -1) return h
		try {
			return decodeURIComponent(h)
		} catch {
			return h
		}
	}
	function v(h) {
		return a.call(h) === '[object Date]'
	}
	return Ze
}
La()
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Or = 'popstate'
function Hi(e = {}) {
	function t(n, a) {
		let { pathname: o, search: i, hash: l } = n.location
		return at(
			'',
			{ pathname: o, search: i, hash: l },
			(a.state && a.state.usr) || null,
			(a.state && a.state.key) || 'default',
		)
	}
	function r(n, a) {
		return typeof a == 'string' ? a : ke(a)
	}
	return Pa(t, r, null, e)
}
function V(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function ne(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t)
		try {
			throw new Error(t)
		} catch {}
	}
}
function Ca() {
	return Math.random().toString(36).substring(2, 10)
}
function Ar(e, t) {
	return { usr: e.state, key: e.key, idx: t }
}
function at(e, t, r = null, n) {
	return {
		pathname: typeof e == 'string' ? e : e.pathname,
		search: '',
		hash: '',
		...(typeof t == 'string' ? _e(t) : t),
		state: r,
		key: (t && t.key) || n || Ca(),
	}
}
function ke({ pathname: e = '/', search: t = '', hash: r = '' }) {
	return (
		t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
		r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
		e
	)
}
function _e(e) {
	let t = {}
	if (e) {
		let r = e.indexOf('#')
		r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)))
		let n = e.indexOf('?')
		n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
			e && (t.pathname = e)
	}
	return t
}
function Pa(e, t, r, n = {}) {
	let { window: a = document.defaultView, v5Compat: o = !1 } = n,
		i = a.history,
		l = 'POP',
		s = null,
		u = p()
	u == null && ((u = 0), i.replaceState({ ...i.state, idx: u }, ''))
	function p() {
		return (i.state || { idx: null }).idx
	}
	function v() {
		l = 'POP'
		let x = p(),
			E = x == null ? null : x - u
		;(u = x), s && s({ action: l, location: b.location, delta: E })
	}
	function h(x, E) {
		l = 'PUSH'
		let P = at(b.location, x, E)
		u = p() + 1
		let L = Ar(P, u),
			D = b.createHref(P)
		try {
			i.pushState(L, '', D)
		} catch (f) {
			if (f instanceof DOMException && f.name === 'DataCloneError') throw f
			a.location.assign(D)
		}
		o && s && s({ action: l, location: b.location, delta: 1 })
	}
	function y(x, E) {
		l = 'REPLACE'
		let P = at(b.location, x, E)
		u = p()
		let L = Ar(P, u),
			D = b.createHref(P)
		i.replaceState(L, '', D),
			o && s && s({ action: l, location: b.location, delta: 0 })
	}
	function w(x) {
		let E = a.location.origin !== 'null' ? a.location.origin : a.location.href,
			P = typeof x == 'string' ? x : ke(x)
		return (
			(P = P.replace(/ $/, '%20')),
			V(
				E,
				`No window.location.(origin|href) available to create URL for href: ${P}`,
			),
			new URL(P, E)
		)
	}
	let b = {
		get action() {
			return l
		},
		get location() {
			return e(a, i)
		},
		listen(x) {
			if (s) throw new Error('A history only accepts one active listener')
			return (
				a.addEventListener(Or, v),
				(s = x),
				() => {
					a.removeEventListener(Or, v), (s = null)
				}
			)
		},
		createHref(x) {
			return t(a, x)
		},
		createURL: w,
		encodeLocation(x) {
			let E = w(x)
			return { pathname: E.pathname, search: E.search, hash: E.hash }
		},
		push: h,
		replace: y,
		go(x) {
			return i.go(x)
		},
	}
	return b
}
var Ta = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function Da(e) {
	return e.index === !0
}
function Ct(e, t, r = [], n = {}) {
	return e.map((a, o) => {
		let i = [...r, String(o)],
			l = typeof a.id == 'string' ? a.id : i.join('-')
		if (
			(V(
				a.index !== !0 || !a.children,
				'Cannot specify children on an index route',
			),
			V(
				!n[l],
				`Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`,
			),
			Da(a))
		) {
			let s = { ...a, ...t(a), id: l }
			return (n[l] = s), s
		} else {
			let s = { ...a, ...t(a), id: l, children: void 0 }
			return (n[l] = s), a.children && (s.children = Ct(a.children, t, i, n)), s
		}
	})
}
function Le(e, t, r = '/') {
	return Rt(e, t, r, !1)
}
function Rt(e, t, r, n) {
	let a = typeof t == 'string' ? _e(t) : t,
		o = ce(a.pathname || '/', r)
	if (o == null) return null
	let i = ln(e)
	Ma(i)
	let l = null
	for (let s = 0; l == null && s < i.length; ++s) {
		let u = Ha(o)
		l = ja(i[s], u, n)
	}
	return l
}
function on(e, t) {
	let { route: r, pathname: n, params: a } = e
	return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle }
}
function ln(e, t = [], r = [], n = '') {
	let a = (o, i, l) => {
		let s = {
			relativePath: l === void 0 ? o.path || '' : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: i,
			route: o,
		}
		s.relativePath.startsWith('/') &&
			(V(
				s.relativePath.startsWith(n),
				`Absolute route path "${s.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
			),
			(s.relativePath = s.relativePath.slice(n.length)))
		let u = we([n, s.relativePath]),
			p = r.concat(s)
		o.children &&
			o.children.length > 0 &&
			(V(
				o.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${u}".`,
			),
			ln(o.children, t, p, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: Ia(u, o.index), routesMeta: p })
	}
	return (
		e.forEach((o, i) => {
			var l
			if (o.path === '' || !((l = o.path) != null && l.includes('?'))) a(o, i)
			else for (let s of sn(o.path)) a(o, i, s)
		}),
		t
	)
}
function sn(e) {
	let t = e.split('/')
	if (t.length === 0) return []
	let [r, ...n] = t,
		a = r.endsWith('?'),
		o = r.replace(/\?$/, '')
	if (n.length === 0) return a ? [o, ''] : [o]
	let i = sn(n.join('/')),
		l = []
	return (
		l.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
		a && l.push(...i),
		l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
	)
}
function Ma(e) {
	e.sort((t, r) =>
		t.score !== r.score
			? r.score - t.score
			: Fa(
					t.routesMeta.map((n) => n.childrenIndex),
					r.routesMeta.map((n) => n.childrenIndex),
				),
	)
}
var ka = /^:[\w-]+$/,
	_a = 3,
	Oa = 2,
	Aa = 1,
	Na = 10,
	$a = -2,
	Nr = (e) => e === '*'
function Ia(e, t) {
	let r = e.split('/'),
		n = r.length
	return (
		r.some(Nr) && (n += $a),
		t && (n += Oa),
		r
			.filter((a) => !Nr(a))
			.reduce((a, o) => a + (ka.test(o) ? _a : o === '' ? Aa : Na), n)
	)
}
function Fa(e, t) {
	return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
		? e[e.length - 1] - t[t.length - 1]
		: 0
}
function ja(e, t, r = !1) {
	let { routesMeta: n } = e,
		a = {},
		o = '/',
		i = []
	for (let l = 0; l < n.length; ++l) {
		let s = n[l],
			u = l === n.length - 1,
			p = o === '/' ? t : t.slice(o.length) || '/',
			v = Pt(
				{ path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
				p,
			),
			h = s.route
		if (
			(!v &&
				u &&
				r &&
				!n[n.length - 1].route.index &&
				(v = Pt(
					{ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
					p,
				)),
			!v)
		)
			return null
		Object.assign(a, v.params),
			i.push({
				params: a,
				pathname: we([o, v.pathname]),
				pathnameBase: Ya(we([o, v.pathnameBase])),
				route: h,
			}),
			v.pathnameBase !== '/' && (o = we([o, v.pathnameBase]))
	}
	return i
}
function Pt(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
	let [r, n] = Ua(e.path, e.caseSensitive, e.end),
		a = t.match(r)
	if (!a) return null
	let o = a[0],
		i = o.replace(/(.)\/+$/, '$1'),
		l = a.slice(1)
	return {
		params: n.reduce((u, { paramName: p, isOptional: v }, h) => {
			if (p === '*') {
				let w = l[h] || ''
				i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1')
			}
			const y = l[h]
			return (
				v && !y ? (u[p] = void 0) : (u[p] = (y || '').replace(/%2F/g, '/')), u
			)
		}, {}),
		pathname: o,
		pathnameBase: i,
		pattern: e,
	}
}
function Ua(e, t = !1, r = !0) {
	ne(
		e === '*' || !e.endsWith('*') || e.endsWith('/*'),
		`Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`,
	)
	let n = [],
		a =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(i, l, s) => (
						n.push({ paramName: l, isOptional: s != null }),
						s ? '/?([^\\/]+)?' : '/([^\\/]+)'
					),
				)
	return (
		e.endsWith('*')
			? (n.push({ paramName: '*' }),
				(a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: r
				? (a += '\\/*$')
				: e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
		[new RegExp(a, t ? void 0 : 'i'), n]
	)
}
function Ha(e) {
	try {
		return e
			.split('/')
			.map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/')
	} catch (t) {
		return (
			ne(
				!1,
				`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
			),
			e
		)
	}
}
function ce(e, t) {
	if (t === '/') return e
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
	let r = t.endsWith('/') ? t.length - 1 : t.length,
		n = e.charAt(r)
	return n && n !== '/' ? null : e.slice(r) || '/'
}
function Ba(e, t = '/') {
	let {
		pathname: r,
		search: n = '',
		hash: a = '',
	} = typeof e == 'string' ? _e(e) : e
	return {
		pathname: r ? (r.startsWith('/') ? r : za(r, t)) : t,
		search: Wa(n),
		hash: Va(a),
	}
}
function za(e, t) {
	let r = t.replace(/\/+$/, '').split('/')
	return (
		e.split('/').forEach((a) => {
			a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a)
		}),
		r.length > 1 ? r.join('/') : '/'
	)
}
function Ht(e, t, r, n) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function un(e) {
	return e.filter(
		(t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
	)
}
function er(e) {
	let t = un(e)
	return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase))
}
function tr(e, t, r, n = !1) {
	let a
	typeof e == 'string'
		? (a = _e(e))
		: ((a = { ...e }),
			V(
				!a.pathname || !a.pathname.includes('?'),
				Ht('?', 'pathname', 'search', a),
			),
			V(
				!a.pathname || !a.pathname.includes('#'),
				Ht('#', 'pathname', 'hash', a),
			),
			V(!a.search || !a.search.includes('#'), Ht('#', 'search', 'hash', a)))
	let o = e === '' || a.pathname === '',
		i = o ? '/' : a.pathname,
		l
	if (i == null) l = r
	else {
		let v = t.length - 1
		if (!n && i.startsWith('..')) {
			let h = i.split('/')
			for (; h[0] === '..'; ) h.shift(), (v -= 1)
			a.pathname = h.join('/')
		}
		l = v >= 0 ? t[v] : '/'
	}
	let s = Ba(a, l),
		u = i && i !== '/' && i.endsWith('/'),
		p = (o || i === '.') && r.endsWith('/')
	return !s.pathname.endsWith('/') && (u || p) && (s.pathname += '/'), s
}
var we = (e) => e.join('/').replace(/\/\/+/g, '/'),
	Ya = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	Wa = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	Va = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
	Ja = class {
		constructor(e, t) {
			;(this.type = 'DataWithResponseInit'),
				(this.data = e),
				(this.init = t || null)
		}
	}
function Ga(e, t) {
	return new Ja(e, typeof t == 'number' ? { status: t } : t)
}
var Xa = (e, t = 302) => {
		let r = t
		typeof r == 'number'
			? (r = { status: r })
			: typeof r.status > 'u' && (r.status = 302)
		let n = new Headers(r.headers)
		return n.set('Location', e), new Response(null, { ...r, headers: n })
	},
	Pe = class {
		constructor(e, t, r, n = !1) {
			;(this.status = e),
				(this.statusText = t || ''),
				(this.internal = n),
				r instanceof Error
					? ((this.data = r.toString()), (this.error = r))
					: (this.data = r)
		}
	}
function We(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	)
}
var cn = ['POST', 'PUT', 'PATCH', 'DELETE'],
	Ka = new Set(cn),
	qa = ['GET', ...cn],
	Qa = new Set(qa),
	Za = new Set([301, 302, 303, 307, 308]),
	eo = new Set([307, 308]),
	Bt = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	to = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	et = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	rr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ro = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	dn = 'remix-router-transitions',
	fn = Symbol('ResetLoaderData')
function Bi(e) {
	const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
		r =
			typeof t < 'u' &&
			typeof t.document < 'u' &&
			typeof t.document.createElement < 'u'
	V(
		e.routes.length > 0,
		'You must provide a non-empty routes array to createRouter',
	)
	let n = e.mapRouteProperties || ro,
		a = {},
		o = Ct(e.routes, n, void 0, a),
		i,
		l = e.basename || '/',
		s = e.dataStrategy || lo,
		u = e.patchRoutesOnNavigation,
		p = { ...e.future },
		v = null,
		h = new Set(),
		y = null,
		w = null,
		b = null,
		x = e.hydrationData != null,
		E = Le(o, e.history.location, l),
		P = null
	if (E == null && !u) {
		let c = ue(404, { pathname: e.history.location.pathname }),
			{ matches: g, route: R } = Vr(o)
		;(E = g), (P = { [R.id]: c })
	}
	E &&
		!e.hydrationData &&
		ct(E, o, e.history.location.pathname).active &&
		(E = null)
	let L
	if (E)
		if (E.some((c) => c.route.lazy)) L = !1
		else if (!E.some((c) => c.route.loader)) L = !0
		else {
			let c = e.hydrationData ? e.hydrationData.loaderData : null,
				g = e.hydrationData ? e.hydrationData.errors : null
			if (g) {
				let R = E.findIndex((S) => g[S.route.id] !== void 0)
				L = E.slice(0, R + 1).every((S) => !Gt(S.route, c, g))
			} else L = E.every((R) => !Gt(R.route, c, g))
		}
	else {
		;(L = !1), (E = [])
		let c = ct(null, o, e.history.location.pathname)
		c.active && c.matches && (E = c.matches)
	}
	let D,
		f = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: E,
			initialized: L,
			navigation: Bt,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || P,
			fetchers: new Map(),
			blockers: new Map(),
		},
		M = 'POP',
		U = !1,
		I,
		B = !1,
		K = new Map(),
		le = null,
		pe = !1,
		ye = !1,
		Ue = new Set(),
		q = new Map(),
		Re = 0,
		Oe = -1,
		be = new Map(),
		fe = new Set(),
		m = new Map(),
		C = new Map(),
		N = new Set(),
		$ = new Map(),
		Y,
		J = null
	function W() {
		if (
			((v = e.history.listen(({ action: c, location: g, delta: R }) => {
				if (Y) {
					Y(), (Y = void 0)
					return
				}
				ne(
					$.size === 0 || R != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
				)
				let S = Sr({
					currentLocation: f.location,
					nextLocation: g,
					historyAction: c,
				})
				if (S && R != null) {
					let k = new Promise((A) => {
						Y = A
					})
					e.history.go(R * -1),
						ut(S, {
							state: 'blocked',
							location: g,
							proceed() {
								ut(S, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: g,
								}),
									k.then(() => e.history.go(R))
							},
							reset() {
								let A = new Map(f.blockers)
								A.set(S, et), ae({ blockers: A })
							},
						})
					return
				}
				return Ae(c, g)
			})),
			r)
		) {
			wo(t, K)
			let c = () => Eo(t, K)
			t.addEventListener('pagehide', c),
				(le = () => t.removeEventListener('pagehide', c))
		}
		return f.initialized || Ae('POP', f.location, { initialHydration: !0 }), D
	}
	function ge() {
		v && v(),
			le && le(),
			h.clear(),
			I && I.abort(),
			f.fetchers.forEach((c, g) => Nt(g)),
			f.blockers.forEach((c, g) => br(g))
	}
	function ee(c) {
		return h.add(c), () => h.delete(c)
	}
	function ae(c, g = {}) {
		f = { ...f, ...c }
		let R = [],
			S = []
		f.fetchers.forEach((k, A) => {
			k.state === 'idle' && (N.has(A) ? R.push(A) : S.push(A))
		}),
			[...h].forEach((k) =>
				k(f, {
					deletedFetchers: R,
					viewTransitionOpts: g.viewTransitionOpts,
					flushSync: g.flushSync === !0,
				}),
			),
			R.forEach((k) => Nt(k)),
			S.forEach((k) => f.fetchers.delete(k))
	}
	function He(c, g, { flushSync: R } = {}) {
		var T, j
		let S =
				f.actionData != null &&
				f.navigation.formMethod != null &&
				he(f.navigation.formMethod) &&
				f.navigation.state === 'loading' &&
				((T = c.state) == null ? void 0 : T._isRedirect) !== !0,
			k
		g.actionData
			? Object.keys(g.actionData).length > 0
				? (k = g.actionData)
				: (k = null)
			: S
				? (k = f.actionData)
				: (k = null)
		let A = g.loaderData
				? Yr(f.loaderData, g.loaderData, g.matches || [], g.errors)
				: f.loaderData,
			F = f.blockers
		F.size > 0 && ((F = new Map(F)), F.forEach((z, Q) => F.set(Q, et)))
		let _ =
			U === !0 ||
			(f.navigation.formMethod != null &&
				he(f.navigation.formMethod) &&
				((j = c.state) == null ? void 0 : j._isRedirect) !== !0)
		i && ((o = i), (i = void 0)),
			pe ||
				M === 'POP' ||
				(M === 'PUSH'
					? e.history.push(c, c.state)
					: M === 'REPLACE' && e.history.replace(c, c.state))
		let O
		if (M === 'POP') {
			let z = K.get(f.location.pathname)
			z && z.has(c.pathname)
				? (O = { currentLocation: f.location, nextLocation: c })
				: K.has(c.pathname) &&
					(O = { currentLocation: c, nextLocation: f.location })
		} else if (B) {
			let z = K.get(f.location.pathname)
			z
				? z.add(c.pathname)
				: ((z = new Set([c.pathname])), K.set(f.location.pathname, z)),
				(O = { currentLocation: f.location, nextLocation: c })
		}
		ae(
			{
				...g,
				actionData: k,
				loaderData: A,
				historyAction: M,
				location: c,
				initialized: !0,
				navigation: Bt,
				revalidation: 'idle',
				restoreScrollPosition: Lr(c, g.matches || f.matches),
				preventScrollReset: _,
				blockers: F,
			},
			{ viewTransitionOpts: O, flushSync: R === !0 },
		),
			(M = 'POP'),
			(U = !1),
			(B = !1),
			(pe = !1),
			(ye = !1),
			J == null || J.resolve(),
			(J = null)
	}
	async function pr(c, g) {
		if (typeof c == 'number') {
			e.history.go(c)
			return
		}
		let R = Jt(
				f.location,
				f.matches,
				l,
				c,
				g == null ? void 0 : g.fromRouteId,
				g == null ? void 0 : g.relative,
			),
			{ path: S, submission: k, error: A } = $r(!1, R, g),
			F = f.location,
			_ = at(f.location, S, g && g.state)
		_ = { ..._, ...e.history.encodeLocation(_) }
		let O = g && g.replace != null ? g.replace : void 0,
			T = 'PUSH'
		O === !0
			? (T = 'REPLACE')
			: O === !1 ||
				(k != null &&
					he(k.formMethod) &&
					k.formAction === f.location.pathname + f.location.search &&
					(T = 'REPLACE'))
		let j =
				g && 'preventScrollReset' in g ? g.preventScrollReset === !0 : void 0,
			z = (g && g.flushSync) === !0,
			Q = Sr({ currentLocation: F, nextLocation: _, historyAction: T })
		if (Q) {
			ut(Q, {
				state: 'blocked',
				location: _,
				proceed() {
					ut(Q, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: _,
					}),
						pr(c, g)
				},
				reset() {
					let oe = new Map(f.blockers)
					oe.set(Q, et), ae({ blockers: oe })
				},
			})
			return
		}
		await Ae(T, _, {
			submission: k,
			pendingError: A,
			preventScrollReset: j,
			replace: g && g.replace,
			enableViewTransition: g && g.viewTransition,
			flushSync: z,
		})
	}
	function jn() {
		J || (J = Ro()), At(), ae({ revalidation: 'loading' })
		let c = J.promise
		return f.navigation.state === 'submitting'
			? c
			: f.navigation.state === 'idle'
				? (Ae(f.historyAction, f.location, {
						startUninterruptedRevalidation: !0,
					}),
					c)
				: (Ae(M || f.historyAction, f.navigation.location, {
						overrideNavigation: f.navigation,
						enableViewTransition: B === !0,
					}),
					c)
	}
	async function Ae(c, g, R) {
		I && I.abort(),
			(I = null),
			(M = c),
			(pe = (R && R.startUninterruptedRevalidation) === !0),
			Xn(f.location, f.matches),
			(U = (R && R.preventScrollReset) === !0),
			(B = (R && R.enableViewTransition) === !0)
		let S = i || o,
			k = R && R.overrideNavigation,
			A = Le(S, g, l),
			F = (R && R.flushSync) === !0,
			_ = ct(A, S, g.pathname)
		if ((_.active && _.matches && (A = _.matches), !A)) {
			let { error: Z, notFoundMatches: X, route: re } = $t(g.pathname)
			He(
				g,
				{ matches: X, loaderData: {}, errors: { [re.id]: Z } },
				{ flushSync: F },
			)
			return
		}
		if (
			f.initialized &&
			!ye &&
			mo(f.location, g) &&
			!(R && R.submission && he(R.submission.formMethod))
		) {
			He(g, { matches: A }, { flushSync: F })
			return
		}
		I = new AbortController()
		let O = Ye(e.history, g, I.signal, R && R.submission),
			T
		if (R && R.pendingError)
			T = [Ie(A).route.id, { type: 'error', error: R.pendingError }]
		else if (R && R.submission && he(R.submission.formMethod)) {
			let Z = await Un(O, g, R.submission, A, _.active, {
				replace: R.replace,
				flushSync: F,
			})
			if (Z.shortCircuited) return
			if (Z.pendingActionResult) {
				let [X, re] = Z.pendingActionResult
				if (se(re) && We(re.error) && re.error.status === 404) {
					;(I = null),
						He(g, {
							matches: Z.matches,
							loaderData: {},
							errors: { [X]: re.error },
						})
					return
				}
			}
			;(A = Z.matches || A),
				(T = Z.pendingActionResult),
				(k = zt(g, R.submission)),
				(F = !1),
				(_.active = !1),
				(O = Ye(e.history, O.url, O.signal))
		}
		let {
			shortCircuited: j,
			matches: z,
			loaderData: Q,
			errors: oe,
		} = await Hn(
			O,
			g,
			A,
			_.active,
			k,
			R && R.submission,
			R && R.fetcherSubmission,
			R && R.replace,
			R && R.initialHydration === !0,
			F,
			T,
		)
		j ||
			((I = null),
			He(g, { matches: z || A, ...Wr(T), loaderData: Q, errors: oe }))
	}
	async function Un(c, g, R, S, k, A = {}) {
		At()
		let F = go(g, R)
		if ((ae({ navigation: F }, { flushSync: A.flushSync === !0 }), k)) {
			let T = await dt(S, g.pathname, c.signal)
			if (T.type === 'aborted') return { shortCircuited: !0 }
			if (T.type === 'error') {
				let j = Ie(T.partialMatches).route.id
				return {
					matches: T.partialMatches,
					pendingActionResult: [j, { type: 'error', error: T.error }],
				}
			} else if (T.matches) S = T.matches
			else {
				let { notFoundMatches: j, error: z, route: Q } = $t(g.pathname)
				return {
					matches: j,
					pendingActionResult: [Q.id, { type: 'error', error: z }],
				}
			}
		}
		let _,
			O = nt(S, g)
		if (!O.route.action && !O.route.lazy)
			_ = {
				type: 'error',
				error: ue(405, {
					method: c.method,
					pathname: g.pathname,
					routeId: O.route.id,
				}),
			}
		else if (
			((_ = (await Ge('action', f, c, [O], S, null))[O.route.id]),
			c.signal.aborted)
		)
			return { shortCircuited: !0 }
		if (Fe(_)) {
			let T
			return (
				A && A.replace != null
					? (T = A.replace)
					: (T =
							Hr(_.response.headers.get('Location'), new URL(c.url), l) ===
							f.location.pathname + f.location.search),
				await Ne(c, _, !0, { submission: R, replace: T }),
				{ shortCircuited: !0 }
			)
		}
		if (se(_)) {
			let T = Ie(S, O.route.id)
			return (
				(A && A.replace) !== !0 && (M = 'PUSH'),
				{ matches: S, pendingActionResult: [T.route.id, _] }
			)
		}
		return { matches: S, pendingActionResult: [O.route.id, _] }
	}
	async function Hn(c, g, R, S, k, A, F, _, O, T, j) {
		let z = k || zt(g, A),
			Q = A || F || Gr(z),
			oe = !pe && !O
		if (S) {
			if (oe) {
				let ie = yr(j)
				ae(
					{ navigation: z, ...(ie !== void 0 ? { actionData: ie } : {}) },
					{ flushSync: T },
				)
			}
			let G = await dt(R, g.pathname, c.signal)
			if (G.type === 'aborted') return { shortCircuited: !0 }
			if (G.type === 'error') {
				let ie = Ie(G.partialMatches).route.id
				return {
					matches: G.partialMatches,
					loaderData: {},
					errors: { [ie]: G.error },
				}
			} else if (G.matches) R = G.matches
			else {
				let { error: ie, notFoundMatches: mt, route: qe } = $t(g.pathname)
				return { matches: mt, loaderData: {}, errors: { [qe.id]: ie } }
			}
		}
		let Z = i || o,
			[X, re] = Fr(e.history, f, R, Q, g, O === !0, ye, Ue, N, m, fe, Z, l, j)
		if (((Oe = ++Re), X.length === 0 && re.length === 0)) {
			let G = Er()
			return (
				He(
					g,
					{
						matches: R,
						loaderData: {},
						errors: j && se(j[1]) ? { [j[0]]: j[1].error } : null,
						...Wr(j),
						...(G ? { fetchers: new Map(f.fetchers) } : {}),
					},
					{ flushSync: T },
				),
				{ shortCircuited: !0 }
			)
		}
		if (oe) {
			let G = {}
			if (!S) {
				G.navigation = z
				let ie = yr(j)
				ie !== void 0 && (G.actionData = ie)
			}
			re.length > 0 && (G.fetchers = Bn(re)), ae(G, { flushSync: T })
		}
		re.forEach((G) => {
			De(G.key), G.controller && q.set(G.key, G.controller)
		})
		let Be = () => re.forEach((G) => De(G.key))
		I && I.signal.addEventListener('abort', Be)
		let { loaderResults: Xe, fetcherResults: xe } = await gr(f, R, X, re, c)
		if (c.signal.aborted) return { shortCircuited: !0 }
		I && I.signal.removeEventListener('abort', Be),
			re.forEach((G) => q.delete(G.key))
		let ve = yt(Xe)
		if (ve)
			return await Ne(c, ve.result, !0, { replace: _ }), { shortCircuited: !0 }
		if (((ve = yt(xe)), ve))
			return (
				fe.add(ve.key),
				await Ne(c, ve.result, !0, { replace: _ }),
				{ shortCircuited: !0 }
			)
		let { loaderData: It, errors: Ke } = zr(f, R, Xe, j, re, xe)
		O && f.errors && (Ke = { ...f.errors, ...Ke })
		let $e = Er(),
			ft = Rr(Oe),
			ht = $e || ft || re.length > 0
		return {
			matches: R,
			loaderData: It,
			errors: Ke,
			...(ht ? { fetchers: new Map(f.fetchers) } : {}),
		}
	}
	function yr(c) {
		if (c && !se(c[1])) return { [c[0]]: c[1].data }
		if (f.actionData)
			return Object.keys(f.actionData).length === 0 ? null : f.actionData
	}
	function Bn(c) {
		return (
			c.forEach((g) => {
				let R = f.fetchers.get(g.key),
					S = tt(void 0, R ? R.data : void 0)
				f.fetchers.set(g.key, S)
			}),
			new Map(f.fetchers)
		)
	}
	async function zn(c, g, R, S) {
		De(c)
		let k = (S && S.flushSync) === !0,
			A = i || o,
			F = Jt(f.location, f.matches, l, R, g, S == null ? void 0 : S.relative),
			_ = Le(A, F, l),
			O = ct(_, A, F)
		if ((O.active && O.matches && (_ = O.matches), !_)) {
			Se(c, g, ue(404, { pathname: F }), { flushSync: k })
			return
		}
		let { path: T, submission: j, error: z } = $r(!0, F, S)
		if (z) {
			Se(c, g, z, { flushSync: k })
			return
		}
		let Q = nt(_, T),
			oe = (S && S.preventScrollReset) === !0
		if (j && he(j.formMethod)) {
			await Yn(c, g, T, Q, _, O.active, k, oe, j)
			return
		}
		m.set(c, { routeId: g, path: T }),
			await Wn(c, g, T, Q, _, O.active, k, oe, j)
	}
	async function Yn(c, g, R, S, k, A, F, _, O) {
		At(), m.delete(c)
		function T(te) {
			if (!te.route.action && !te.route.lazy) {
				let ze = ue(405, { method: O.formMethod, pathname: R, routeId: g })
				return Se(c, g, ze, { flushSync: F }), !0
			}
			return !1
		}
		if (!A && T(S)) return
		let j = f.fetchers.get(c)
		Te(c, vo(O, j), { flushSync: F })
		let z = new AbortController(),
			Q = Ye(e.history, R, z.signal, O)
		if (A) {
			let te = await dt(k, R, Q.signal)
			if (te.type === 'aborted') return
			if (te.type === 'error') {
				Se(c, g, te.error, { flushSync: F })
				return
			} else if (te.matches) {
				if (((k = te.matches), (S = nt(k, R)), T(S))) return
			} else {
				Se(c, g, ue(404, { pathname: R }), { flushSync: F })
				return
			}
		}
		q.set(c, z)
		let oe = Re,
			X = (await Ge('action', f, Q, [S], k, c))[S.route.id]
		if (Q.signal.aborted) {
			q.get(c) === z && q.delete(c)
			return
		}
		if (N.has(c)) {
			if (Fe(X) || se(X)) {
				Te(c, Me(void 0))
				return
			}
		} else {
			if (Fe(X))
				if ((q.delete(c), Oe > oe)) {
					Te(c, Me(void 0))
					return
				} else
					return (
						fe.add(c),
						Te(c, tt(O)),
						Ne(Q, X, !1, { fetcherSubmission: O, preventScrollReset: _ })
					)
			if (se(X)) {
				Se(c, g, X.error)
				return
			}
		}
		let re = f.navigation.location || f.location,
			Be = Ye(e.history, re, z.signal),
			Xe = i || o,
			xe =
				f.navigation.state !== 'idle'
					? Le(Xe, f.navigation.location, l)
					: f.matches
		V(xe, "Didn't find any matches after fetcher action")
		let ve = ++Re
		be.set(c, ve)
		let It = tt(O, X.data)
		f.fetchers.set(c, It)
		let [Ke, $e] = Fr(e.history, f, xe, O, re, !1, ye, Ue, N, m, fe, Xe, l, [
			S.route.id,
			X,
		])
		$e
			.filter((te) => te.key !== c)
			.forEach((te) => {
				let ze = te.key,
					Cr = f.fetchers.get(ze),
					Qn = tt(void 0, Cr ? Cr.data : void 0)
				f.fetchers.set(ze, Qn),
					De(ze),
					te.controller && q.set(ze, te.controller)
			}),
			ae({ fetchers: new Map(f.fetchers) })
		let ft = () => $e.forEach((te) => De(te.key))
		z.signal.addEventListener('abort', ft)
		let { loaderResults: ht, fetcherResults: G } = await gr(f, xe, Ke, $e, Be)
		if (z.signal.aborted) return
		z.signal.removeEventListener('abort', ft),
			be.delete(c),
			q.delete(c),
			$e.forEach((te) => q.delete(te.key))
		let ie = yt(ht)
		if (ie) return Ne(Be, ie.result, !1, { preventScrollReset: _ })
		if (((ie = yt(G)), ie))
			return fe.add(ie.key), Ne(Be, ie.result, !1, { preventScrollReset: _ })
		let { loaderData: mt, errors: qe } = zr(f, xe, ht, void 0, $e, G)
		if (f.fetchers.has(c)) {
			let te = Me(X.data)
			f.fetchers.set(c, te)
		}
		Rr(ve),
			f.navigation.state === 'loading' && ve > Oe
				? (V(M, 'Expected pending action'),
					I && I.abort(),
					He(f.navigation.location, {
						matches: xe,
						loaderData: mt,
						errors: qe,
						fetchers: new Map(f.fetchers),
					}))
				: (ae({
						errors: qe,
						loaderData: Yr(f.loaderData, mt, xe, qe),
						fetchers: new Map(f.fetchers),
					}),
					(ye = !1))
	}
	async function Wn(c, g, R, S, k, A, F, _, O) {
		let T = f.fetchers.get(c)
		Te(c, tt(O, T ? T.data : void 0), { flushSync: F })
		let j = new AbortController(),
			z = Ye(e.history, R, j.signal)
		if (A) {
			let X = await dt(k, R, z.signal)
			if (X.type === 'aborted') return
			if (X.type === 'error') {
				Se(c, g, X.error, { flushSync: F })
				return
			} else if (X.matches) (k = X.matches), (S = nt(k, R))
			else {
				Se(c, g, ue(404, { pathname: R }), { flushSync: F })
				return
			}
		}
		q.set(c, j)
		let Q = Re,
			Z = (await Ge('loader', f, z, [S], k, c))[S.route.id]
		if ((q.get(c) === j && q.delete(c), !z.signal.aborted)) {
			if (N.has(c)) {
				Te(c, Me(void 0))
				return
			}
			if (Fe(Z))
				if (Oe > Q) {
					Te(c, Me(void 0))
					return
				} else {
					fe.add(c), await Ne(z, Z, !1, { preventScrollReset: _ })
					return
				}
			if (se(Z)) {
				Se(c, g, Z.error)
				return
			}
			Te(c, Me(Z.data))
		}
	}
	async function Ne(
		c,
		g,
		R,
		{
			submission: S,
			fetcherSubmission: k,
			preventScrollReset: A,
			replace: F,
		} = {},
	) {
		g.response.headers.has('X-Remix-Revalidate') && (ye = !0)
		let _ = g.response.headers.get('Location')
		V(_, 'Expected a Location header on the redirect Response'),
			(_ = Hr(_, new URL(c.url), l))
		let O = at(f.location, _, { _isRedirect: !0 })
		if (r) {
			let Z = !1
			if (g.response.headers.has('X-Remix-Reload-Document')) Z = !0
			else if (rr.test(_)) {
				const X = e.history.createURL(_)
				Z = X.origin !== t.location.origin || ce(X.pathname, l) == null
			}
			if (Z) {
				F ? t.location.replace(_) : t.location.assign(_)
				return
			}
		}
		I = null
		let T =
				F === !0 || g.response.headers.has('X-Remix-Replace')
					? 'REPLACE'
					: 'PUSH',
			{ formMethod: j, formAction: z, formEncType: Q } = f.navigation
		!S && !k && j && z && Q && (S = Gr(f.navigation))
		let oe = S || k
		if (eo.has(g.response.status) && oe && he(oe.formMethod))
			await Ae(T, O, {
				submission: { ...oe, formAction: _ },
				preventScrollReset: A || U,
				enableViewTransition: R ? B : void 0,
			})
		else {
			let Z = zt(O, S)
			await Ae(T, O, {
				overrideNavigation: Z,
				fetcherSubmission: k,
				preventScrollReset: A || U,
				enableViewTransition: R ? B : void 0,
			})
		}
	}
	async function Ge(c, g, R, S, k, A) {
		let F,
			_ = {}
		try {
			F = await so(s, c, g, R, S, k, A, a, n)
		} catch (O) {
			return (
				S.forEach((T) => {
					_[T.route.id] = { type: 'error', error: O }
				}),
				_
			)
		}
		for (let [O, T] of Object.entries(F))
			if (po(T)) {
				let j = T.result
				_[O] = { type: 'redirect', response: fo(j, R, O, k, l) }
			} else _[O] = await co(T)
		return _
	}
	async function gr(c, g, R, S, k) {
		let A = Ge('loader', c, k, R, g, null),
			F = Promise.all(
				S.map(async (T) => {
					if (T.matches && T.match && T.controller) {
						let z = (
							await Ge(
								'loader',
								c,
								Ye(e.history, T.path, T.controller.signal),
								[T.match],
								T.matches,
								T.key,
							)
						)[T.match.route.id]
						return { [T.key]: z }
					} else
						return Promise.resolve({
							[T.key]: { type: 'error', error: ue(404, { pathname: T.path }) },
						})
				}),
			),
			_ = await A,
			O = (await F).reduce((T, j) => Object.assign(T, j), {})
		return { loaderResults: _, fetcherResults: O }
	}
	function At() {
		;(ye = !0),
			m.forEach((c, g) => {
				q.has(g) && Ue.add(g), De(g)
			})
	}
	function Te(c, g, R = {}) {
		f.fetchers.set(c, g),
			ae(
				{ fetchers: new Map(f.fetchers) },
				{ flushSync: (R && R.flushSync) === !0 },
			)
	}
	function Se(c, g, R, S = {}) {
		let k = Ie(f.matches, g)
		Nt(c),
			ae(
				{ errors: { [k.route.id]: R }, fetchers: new Map(f.fetchers) },
				{ flushSync: (S && S.flushSync) === !0 },
			)
	}
	function vr(c) {
		return (
			C.set(c, (C.get(c) || 0) + 1),
			N.has(c) && N.delete(c),
			f.fetchers.get(c) || to
		)
	}
	function Nt(c) {
		let g = f.fetchers.get(c)
		q.has(c) && !(g && g.state === 'loading' && be.has(c)) && De(c),
			m.delete(c),
			be.delete(c),
			fe.delete(c),
			N.delete(c),
			Ue.delete(c),
			f.fetchers.delete(c)
	}
	function Vn(c) {
		let g = (C.get(c) || 0) - 1
		g <= 0 ? (C.delete(c), N.add(c)) : C.set(c, g),
			ae({ fetchers: new Map(f.fetchers) })
	}
	function De(c) {
		let g = q.get(c)
		g && (g.abort(), q.delete(c))
	}
	function wr(c) {
		for (let g of c) {
			let R = vr(g),
				S = Me(R.data)
			f.fetchers.set(g, S)
		}
	}
	function Er() {
		let c = [],
			g = !1
		for (let R of fe) {
			let S = f.fetchers.get(R)
			V(S, `Expected fetcher: ${R}`),
				S.state === 'loading' && (fe.delete(R), c.push(R), (g = !0))
		}
		return wr(c), g
	}
	function Rr(c) {
		let g = []
		for (let [R, S] of be)
			if (S < c) {
				let k = f.fetchers.get(R)
				V(k, `Expected fetcher: ${R}`),
					k.state === 'loading' && (De(R), be.delete(R), g.push(R))
			}
		return wr(g), g.length > 0
	}
	function Jn(c, g) {
		let R = f.blockers.get(c) || et
		return $.get(c) !== g && $.set(c, g), R
	}
	function br(c) {
		f.blockers.delete(c), $.delete(c)
	}
	function ut(c, g) {
		let R = f.blockers.get(c) || et
		V(
			(R.state === 'unblocked' && g.state === 'blocked') ||
				(R.state === 'blocked' && g.state === 'blocked') ||
				(R.state === 'blocked' && g.state === 'proceeding') ||
				(R.state === 'blocked' && g.state === 'unblocked') ||
				(R.state === 'proceeding' && g.state === 'unblocked'),
			`Invalid blocker state transition: ${R.state} -> ${g.state}`,
		)
		let S = new Map(f.blockers)
		S.set(c, g), ae({ blockers: S })
	}
	function Sr({ currentLocation: c, nextLocation: g, historyAction: R }) {
		if ($.size === 0) return
		$.size > 1 && ne(!1, 'A router only supports one blocker at a time')
		let S = Array.from($.entries()),
			[k, A] = S[S.length - 1],
			F = f.blockers.get(k)
		if (
			!(F && F.state === 'proceeding') &&
			A({ currentLocation: c, nextLocation: g, historyAction: R })
		)
			return k
	}
	function $t(c) {
		let g = ue(404, { pathname: c }),
			R = i || o,
			{ matches: S, route: k } = Vr(R)
		return { notFoundMatches: S, route: k, error: g }
	}
	function Gn(c, g, R) {
		if (((y = c), (b = g), (w = R || null), !x && f.navigation === Bt)) {
			x = !0
			let S = Lr(f.location, f.matches)
			S != null && ae({ restoreScrollPosition: S })
		}
		return () => {
			;(y = null), (b = null), (w = null)
		}
	}
	function xr(c, g) {
		return (
			(w &&
				w(
					c,
					g.map((S) => on(S, f.loaderData)),
				)) ||
			c.key
		)
	}
	function Xn(c, g) {
		if (y && b) {
			let R = xr(c, g)
			y[R] = b()
		}
	}
	function Lr(c, g) {
		if (y) {
			let R = xr(c, g),
				S = y[R]
			if (typeof S == 'number') return S
		}
		return null
	}
	function ct(c, g, R) {
		if (u)
			if (c) {
				if (Object.keys(c[0].params).length > 0)
					return { active: !0, matches: Rt(g, R, l, !0) }
			} else return { active: !0, matches: Rt(g, R, l, !0) || [] }
		return { active: !1, matches: null }
	}
	async function dt(c, g, R) {
		if (!u) return { type: 'success', matches: c }
		let S = c
		for (;;) {
			let k = i == null,
				A = i || o,
				F = a
			try {
				await u({
					path: g,
					matches: S,
					patch: (T, j) => {
						R.aborted || Ur(T, j, A, F, n)
					},
				})
			} catch (T) {
				return { type: 'error', error: T, partialMatches: S }
			} finally {
				k && !R.aborted && (o = [...o])
			}
			if (R.aborted) return { type: 'aborted' }
			let _ = Le(A, g, l)
			if (_) return { type: 'success', matches: _ }
			let O = Rt(A, g, l, !0)
			if (
				!O ||
				(S.length === O.length &&
					S.every((T, j) => T.route.id === O[j].route.id))
			)
				return { type: 'success', matches: null }
			S = O
		}
	}
	function Kn(c) {
		;(a = {}), (i = Ct(c, n, void 0, a))
	}
	function qn(c, g) {
		let R = i == null
		Ur(c, g, i || o, a, n), R && ((o = [...o]), ae({}))
	}
	return (
		(D = {
			get basename() {
				return l
			},
			get future() {
				return p
			},
			get state() {
				return f
			},
			get routes() {
				return o
			},
			get window() {
				return t
			},
			initialize: W,
			subscribe: ee,
			enableScrollRestoration: Gn,
			navigate: pr,
			fetch: zn,
			revalidate: jn,
			createHref: (c) => e.history.createHref(c),
			encodeLocation: (c) => e.history.encodeLocation(c),
			getFetcher: vr,
			deleteFetcher: Vn,
			dispose: ge,
			getBlocker: Jn,
			deleteBlocker: br,
			patchRoutes: qn,
			_internalFetchControllers: q,
			_internalSetRoutes: Kn,
		}),
		D
	)
}
function no(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	)
}
function Jt(e, t, r, n, a, o) {
	let i, l
	if (a) {
		i = []
		for (let u of t)
			if ((i.push(u), u.route.id === a)) {
				l = u
				break
			}
	} else (i = t), (l = t[t.length - 1])
	let s = tr(n || '.', er(i), ce(e.pathname, r) || e.pathname, o === 'path')
	if (
		(n == null && ((s.search = e.search), (s.hash = e.hash)),
		(n == null || n === '' || n === '.') && l)
	) {
		let u = ar(s.search)
		if (l.route.index && !u)
			s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'
		else if (!l.route.index && u) {
			let p = new URLSearchParams(s.search),
				v = p.getAll('index')
			p.delete('index'), v.filter((y) => y).forEach((y) => p.append('index', y))
			let h = p.toString()
			s.search = h ? `?${h}` : ''
		}
	}
	return (
		r !== '/' && (s.pathname = s.pathname === '/' ? r : we([r, s.pathname])),
		ke(s)
	)
}
function $r(e, t, r) {
	if (!r || !no(r)) return { path: t }
	if (r.formMethod && !yo(r.formMethod))
		return { path: t, error: ue(405, { method: r.formMethod }) }
	let n = () => ({ path: t, error: ue(400, { type: 'invalid-body' }) }),
		o = (r.formMethod || 'get').toUpperCase(),
		i = mn(t)
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!he(o)) return n()
			let v =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
						? Array.from(r.body.entries()).reduce(
								(h, [y, w]) => `${h}${y}=${w}
`,
								'',
							)
						: String(r.body)
			return {
				path: t,
				submission: {
					formMethod: o,
					formAction: i,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: v,
				},
			}
		} else if (r.formEncType === 'application/json') {
			if (!he(o)) return n()
			try {
				let v = typeof r.body == 'string' ? JSON.parse(r.body) : r.body
				return {
					path: t,
					submission: {
						formMethod: o,
						formAction: i,
						formEncType: r.formEncType,
						formData: void 0,
						json: v,
						text: void 0,
					},
				}
			} catch {
				return n()
			}
		}
	}
	V(
		typeof FormData == 'function',
		'FormData is not available in this environment',
	)
	let l, s
	if (r.formData) (l = Xt(r.formData)), (s = r.formData)
	else if (r.body instanceof FormData) (l = Xt(r.body)), (s = r.body)
	else if (r.body instanceof URLSearchParams) (l = r.body), (s = Br(l))
	else if (r.body == null) (l = new URLSearchParams()), (s = new FormData())
	else
		try {
			;(l = new URLSearchParams(r.body)), (s = Br(l))
		} catch {
			return n()
		}
	let u = {
		formMethod: o,
		formAction: i,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: s,
		json: void 0,
		text: void 0,
	}
	if (he(u.formMethod)) return { path: t, submission: u }
	let p = _e(t)
	return (
		e && p.search && ar(p.search) && l.append('index', ''),
		(p.search = `?${l}`),
		{ path: ke(p), submission: u }
	)
}
function Ir(e, t, r = !1) {
	let n = e.findIndex((a) => a.route.id === t)
	return n >= 0 ? e.slice(0, r ? n + 1 : n) : e
}
function Fr(e, t, r, n, a, o, i, l, s, u, p, v, h, y) {
	let w = y ? (se(y[1]) ? y[1].error : y[1].data) : void 0,
		b = e.createURL(t.location),
		x = e.createURL(a),
		E = r
	o && t.errors
		? (E = Ir(r, Object.keys(t.errors)[0], !0))
		: y && se(y[1]) && (E = Ir(r, y[0]))
	let P = y ? y[1].statusCode : void 0,
		L = P && P >= 400,
		D = E.filter((M, U) => {
			let { route: I } = M
			if (I.lazy) return !0
			if (I.loader == null) return !1
			if (o) return Gt(I, t.loaderData, t.errors)
			if (ao(t.loaderData, t.matches[U], M)) return !0
			let B = t.matches[U],
				K = M
			return jr(M, {
				currentUrl: b,
				currentParams: B.params,
				nextUrl: x,
				nextParams: K.params,
				...n,
				actionResult: w,
				actionStatus: P,
				defaultShouldRevalidate: L
					? !1
					: i ||
						b.pathname + b.search === x.pathname + x.search ||
						b.search !== x.search ||
						oo(B, K),
			})
		}),
		f = []
	return (
		u.forEach((M, U) => {
			if (o || !r.some((pe) => pe.route.id === M.routeId) || s.has(U)) return
			let I = Le(v, M.path, h)
			if (!I) {
				f.push({
					key: U,
					routeId: M.routeId,
					path: M.path,
					matches: null,
					match: null,
					controller: null,
				})
				return
			}
			let B = t.fetchers.get(U),
				K = nt(I, M.path),
				le = !1
			p.has(U)
				? (le = !1)
				: l.has(U)
					? (l.delete(U), (le = !0))
					: B && B.state !== 'idle' && B.data === void 0
						? (le = i)
						: (le = jr(K, {
								currentUrl: b,
								currentParams: t.matches[t.matches.length - 1].params,
								nextUrl: x,
								nextParams: r[r.length - 1].params,
								...n,
								actionResult: w,
								actionStatus: P,
								defaultShouldRevalidate: L ? !1 : i,
							})),
				le &&
					f.push({
						key: U,
						routeId: M.routeId,
						path: M.path,
						matches: I,
						match: K,
						controller: new AbortController(),
					})
		}),
		[D, f]
	)
}
function Gt(e, t, r) {
	if (e.lazy) return !0
	if (!e.loader) return !1
	let n = t != null && t[e.id] !== void 0,
		a = r != null && r[e.id] !== void 0
	return !n && a
		? !1
		: typeof e.loader == 'function' && e.loader.hydrate === !0
			? !0
			: !n && !a
}
function ao(e, t, r) {
	let n = !t || r.route.id !== t.route.id,
		a = !e.hasOwnProperty(r.route.id)
	return n || a
}
function oo(e, t) {
	let r = e.route.path
	return (
		e.pathname !== t.pathname ||
		(r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
	)
}
function jr(e, t) {
	if (e.route.shouldRevalidate) {
		let r = e.route.shouldRevalidate(t)
		if (typeof r == 'boolean') return r
	}
	return t.defaultShouldRevalidate
}
function Ur(e, t, r, n, a) {
	let o
	if (e) {
		let s = n[e]
		V(s, `No route found to patch children into: routeId = ${e}`),
			s.children || (s.children = []),
			(o = s.children)
	} else o = r
	let i = t.filter((s) => !o.some((u) => hn(s, u))),
		l = Ct(
			i,
			a,
			[e || '_', 'patch', String((o == null ? void 0 : o.length) || '0')],
			n,
		)
	o.push(...l)
}
function hn(e, t) {
	return 'id' in e && 'id' in t && e.id === t.id
		? !0
		: e.index === t.index &&
			  e.path === t.path &&
			  e.caseSensitive === t.caseSensitive
			? (!e.children || e.children.length === 0) &&
				(!t.children || t.children.length === 0)
				? !0
				: e.children.every((r, n) => {
						var a
						return (a = t.children) == null ? void 0 : a.some((o) => hn(r, o))
					})
			: !1
}
async function io(e, t, r) {
	if (!e.lazy) return
	let n = await e.lazy()
	if (!e.lazy) return
	let a = r[e.id]
	V(a, 'No route found in manifest')
	let o = {}
	for (let i in n) {
		let s = a[i] !== void 0 && i !== 'hasErrorBoundary'
		ne(
			!s,
			`Route "${a.id}" has a static property "${i}" defined but its lazy function is also returning a value for this property. The lazy route property "${i}" will be ignored.`,
		),
			!s && !Ta.has(i) && (o[i] = n[i])
	}
	Object.assign(a, o), Object.assign(a, { ...t(a), lazy: void 0 })
}
async function lo({ matches: e }) {
	let t = e.filter((n) => n.shouldLoad)
	return (await Promise.all(t.map((n) => n.resolve()))).reduce(
		(n, a, o) => Object.assign(n, { [t[o].route.id]: a }),
		{},
	)
}
async function so(e, t, r, n, a, o, i, l, s, u) {
	let p = o.map((y) => (y.route.lazy ? io(y.route, s, l) : void 0)),
		v = o.map((y, w) => {
			let b = p[w],
				x = a.some((P) => P.route.id === y.route.id)
			return {
				...y,
				shouldLoad: x,
				resolve: async (P) => (
					P &&
						n.method === 'GET' &&
						(y.route.lazy || y.route.loader) &&
						(x = !0),
					x
						? uo(t, n, y, b, P, u)
						: Promise.resolve({ type: 'data', result: void 0 })
				),
			}
		}),
		h = await e({
			matches: v,
			request: n,
			params: o[0].params,
			fetcherKey: i,
			context: u,
		})
	try {
		await Promise.all(p)
	} catch {}
	return h
}
async function uo(e, t, r, n, a, o) {
	let i,
		l,
		s = (u) => {
			let p,
				v = new Promise((w, b) => (p = b))
			;(l = () => p()), t.signal.addEventListener('abort', l)
			let h = (w) =>
					typeof u != 'function'
						? Promise.reject(
								new Error(
									`You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${r.route.id}]`,
								),
							)
						: u(
								{ request: t, params: r.params, context: o },
								...(w !== void 0 ? [w] : []),
							),
				y = (async () => {
					try {
						return { type: 'data', result: await (a ? a((b) => h(b)) : h()) }
					} catch (w) {
						return { type: 'error', result: w }
					}
				})()
			return Promise.race([y, v])
		}
	try {
		let u = r.route[e]
		if (n)
			if (u) {
				let p,
					[v] = await Promise.all([
						s(u).catch((h) => {
							p = h
						}),
						n,
					])
				if (p !== void 0) throw p
				i = v
			} else if ((await n, (u = r.route[e]), u)) i = await s(u)
			else if (e === 'action') {
				let p = new URL(t.url),
					v = p.pathname + p.search
				throw ue(405, { method: t.method, pathname: v, routeId: r.route.id })
			} else return { type: 'data', result: void 0 }
		else if (u) i = await s(u)
		else {
			let p = new URL(t.url),
				v = p.pathname + p.search
			throw ue(404, { pathname: v })
		}
	} catch (u) {
		return { type: 'error', result: u }
	} finally {
		l && t.signal.removeEventListener('abort', l)
	}
	return i
}
async function co(e) {
	var n, a, o, i
	let { result: t, type: r } = e
	if (nr(t)) {
		let l
		try {
			let s = t.headers.get('Content-Type')
			s && /\bapplication\/json\b/.test(s)
				? t.body == null
					? (l = null)
					: (l = await t.json())
				: (l = await t.text())
		} catch (s) {
			return { type: 'error', error: s }
		}
		return r === 'error'
			? {
					type: 'error',
					error: new Pe(t.status, t.statusText, l),
					statusCode: t.status,
					headers: t.headers,
				}
			: { type: 'data', data: l, statusCode: t.status, headers: t.headers }
	}
	if (r === 'error') {
		if (Jr(t)) {
			if (t.data instanceof Error)
				return {
					type: 'error',
					error: t.data,
					statusCode: (n = t.init) == null ? void 0 : n.status,
				}
			t = new Pe(
				((a = t.init) == null ? void 0 : a.status) || 500,
				void 0,
				t.data,
			)
		}
		return { type: 'error', error: t, statusCode: We(t) ? t.status : void 0 }
	}
	return Jr(t)
		? {
				type: 'data',
				data: t.data,
				statusCode: (o = t.init) == null ? void 0 : o.status,
				headers:
					(i = t.init) != null && i.headers
						? new Headers(t.init.headers)
						: void 0,
			}
		: { type: 'data', data: t }
}
function fo(e, t, r, n, a) {
	let o = e.headers.get('Location')
	if (
		(V(
			o,
			'Redirects returned/thrown from loaders/actions must have a Location header',
		),
		!rr.test(o))
	) {
		let i = n.slice(0, n.findIndex((l) => l.route.id === r) + 1)
		;(o = Jt(new URL(t.url), i, a, o)), e.headers.set('Location', o)
	}
	return e
}
function Hr(e, t, r) {
	if (rr.test(e)) {
		let n = e,
			a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
			o = ce(a.pathname, r) != null
		if (a.origin === t.origin && o) return a.pathname + a.search + a.hash
	}
	return e
}
function Ye(e, t, r, n) {
	let a = e.createURL(mn(t)).toString(),
		o = { signal: r }
	if (n && he(n.formMethod)) {
		let { formMethod: i, formEncType: l } = n
		;(o.method = i.toUpperCase()),
			l === 'application/json'
				? ((o.headers = new Headers({ 'Content-Type': l })),
					(o.body = JSON.stringify(n.json)))
				: l === 'text/plain'
					? (o.body = n.text)
					: l === 'application/x-www-form-urlencoded' && n.formData
						? (o.body = Xt(n.formData))
						: (o.body = n.formData)
	}
	return new Request(a, o)
}
function Xt(e) {
	let t = new URLSearchParams()
	for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name)
	return t
}
function Br(e) {
	let t = new FormData()
	for (let [r, n] of e.entries()) t.append(r, n)
	return t
}
function ho(e, t, r, n = !1, a = !1) {
	let o = {},
		i = null,
		l,
		s = !1,
		u = {},
		p = r && se(r[1]) ? r[1].error : void 0
	return (
		e.forEach((v) => {
			if (!(v.route.id in t)) return
			let h = v.route.id,
				y = t[h]
			if (
				(V(!Fe(y), 'Cannot handle redirect results in processLoaderData'),
				se(y))
			) {
				let w = y.error
				if ((p !== void 0 && ((w = p), (p = void 0)), (i = i || {}), a))
					i[h] = w
				else {
					let b = Ie(e, h)
					i[b.route.id] == null && (i[b.route.id] = w)
				}
				n || (o[h] = fn),
					s || ((s = !0), (l = We(y.error) ? y.error.status : 500)),
					y.headers && (u[h] = y.headers)
			} else
				(o[h] = y.data),
					y.statusCode && y.statusCode !== 200 && !s && (l = y.statusCode),
					y.headers && (u[h] = y.headers)
		}),
		p !== void 0 && r && ((i = { [r[0]]: p }), (o[r[0]] = void 0)),
		{ loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: u }
	)
}
function zr(e, t, r, n, a, o) {
	let { loaderData: i, errors: l } = ho(t, r, n)
	return (
		a.forEach((s) => {
			let { key: u, match: p, controller: v } = s,
				h = o[u]
			if (
				(V(h, 'Did not find corresponding fetcher result'),
				!(v && v.signal.aborted))
			)
				if (se(h)) {
					let y = Ie(e.matches, p == null ? void 0 : p.route.id)
					;(l && l[y.route.id]) || (l = { ...l, [y.route.id]: h.error }),
						e.fetchers.delete(u)
				} else if (Fe(h)) V(!1, 'Unhandled fetcher revalidation redirect')
				else {
					let y = Me(h.data)
					e.fetchers.set(u, y)
				}
		}),
		{ loaderData: i, errors: l }
	)
}
function Yr(e, t, r, n) {
	let a = Object.entries(t)
		.filter(([, o]) => o !== fn)
		.reduce((o, [i, l]) => ((o[i] = l), o), {})
	for (let o of r) {
		let i = o.route.id
		if (
			(!t.hasOwnProperty(i) &&
				e.hasOwnProperty(i) &&
				o.route.loader &&
				(a[i] = e[i]),
			n && n.hasOwnProperty(i))
		)
			break
	}
	return a
}
function Wr(e) {
	return e
		? se(e[1])
			? { actionData: {} }
			: { actionData: { [e[0]]: e[1].data } }
		: {}
}
function Ie(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
			.reverse()
			.find((n) => n.route.hasErrorBoundary === !0) || e[0]
	)
}
function Vr(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find((r) => r.index || !r.path || r.path === '/') || {
					id: '__shim-error-route__',
				}
	return {
		matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
		route: t,
	}
}
function ue(
	e,
	{ pathname: t, routeId: r, method: n, type: a, message: o } = {},
) {
	let i = 'Unknown Server Error',
		l = 'Unknown @remix-run/router error'
	return (
		e === 400
			? ((i = 'Bad Request'),
				n && t && r
					? (l = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
					: a === 'invalid-body' && (l = 'Unable to encode submission body'))
			: e === 403
				? ((i = 'Forbidden'), (l = `Route "${r}" does not match URL "${t}"`))
				: e === 404
					? ((i = 'Not Found'), (l = `No route matches URL "${t}"`))
					: e === 405 &&
						((i = 'Method Not Allowed'),
						n && t && r
							? (l = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
							: n && (l = `Invalid request method "${n.toUpperCase()}"`)),
		new Pe(e || 500, i, new Error(l), !0)
	)
}
function yt(e) {
	let t = Object.entries(e)
	for (let r = t.length - 1; r >= 0; r--) {
		let [n, a] = t[r]
		if (Fe(a)) return { key: n, result: a }
	}
}
function mn(e) {
	let t = typeof e == 'string' ? _e(e) : e
	return ke({ ...t, hash: '' })
}
function mo(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
			? t.hash !== ''
			: e.hash === t.hash
				? !0
				: t.hash !== ''
}
function po(e) {
	return nr(e.result) && Za.has(e.result.status)
}
function se(e) {
	return e.type === 'error'
}
function Fe(e) {
	return (e && e.type) === 'redirect'
}
function Jr(e) {
	return (
		typeof e == 'object' &&
		e != null &&
		'type' in e &&
		'data' in e &&
		'init' in e &&
		e.type === 'DataWithResponseInit'
	)
}
function nr(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	)
}
function yo(e) {
	return Qa.has(e.toUpperCase())
}
function he(e) {
	return Ka.has(e.toUpperCase())
}
function ar(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function nt(e, t) {
	let r = typeof t == 'string' ? _e(t).search : t.search
	if (e[e.length - 1].route.index && ar(r || '')) return e[e.length - 1]
	let n = un(e)
	return n[n.length - 1]
}
function Gr(e) {
	let {
		formMethod: t,
		formAction: r,
		formEncType: n,
		text: a,
		formData: o,
		json: i,
	} = e
	if (!(!t || !r || !n)) {
		if (a != null)
			return {
				formMethod: t,
				formAction: r,
				formEncType: n,
				formData: void 0,
				json: void 0,
				text: a,
			}
		if (o != null)
			return {
				formMethod: t,
				formAction: r,
				formEncType: n,
				formData: o,
				json: void 0,
				text: void 0,
			}
		if (i !== void 0)
			return {
				formMethod: t,
				formAction: r,
				formEncType: n,
				formData: void 0,
				json: i,
				text: void 0,
			}
	}
}
function zt(e, t) {
	return t
		? {
				state: 'loading',
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
			}
		: {
				state: 'loading',
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
			}
}
function go(e, t) {
	return {
		state: 'submitting',
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	}
}
function tt(e, t) {
	return e
		? {
				state: 'loading',
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
			}
		: {
				state: 'loading',
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
			}
}
function vo(e, t) {
	return {
		state: 'submitting',
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	}
}
function Me(e) {
	return {
		state: 'idle',
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	}
}
function wo(e, t) {
	try {
		let r = e.sessionStorage.getItem(dn)
		if (r) {
			let n = JSON.parse(r)
			for (let [a, o] of Object.entries(n || {}))
				o && Array.isArray(o) && t.set(a, new Set(o || []))
		}
	} catch {}
}
function Eo(e, t) {
	if (t.size > 0) {
		let r = {}
		for (let [n, a] of t) r[n] = [...a]
		try {
			e.sessionStorage.setItem(dn, JSON.stringify(r))
		} catch (n) {
			ne(
				!1,
				`Failed to save applied view transitions in sessionStorage (${n}).`,
			)
		}
	}
}
function Ro() {
	let e,
		t,
		r = new Promise((n, a) => {
			;(e = async (o) => {
				n(o)
				try {
					await r
				} catch {}
			}),
				(t = async (o) => {
					a(o)
					try {
						await r
					} catch {}
				})
		})
	return { promise: r, resolve: e, reject: t }
}
var je = d.createContext(null)
je.displayName = 'DataRouter'
var Ve = d.createContext(null)
Ve.displayName = 'DataRouterState'
var or = d.createContext({ isTransitioning: !1 })
or.displayName = 'ViewTransition'
var pn = d.createContext(new Map())
pn.displayName = 'Fetchers'
var bo = d.createContext(null)
bo.displayName = 'Await'
var de = d.createContext(null)
de.displayName = 'Navigation'
var Dt = d.createContext(null)
Dt.displayName = 'Location'
var me = d.createContext({ outlet: null, matches: [], isDataRoute: !1 })
me.displayName = 'Route'
var ir = d.createContext(null)
ir.displayName = 'RouteError'
function So(e, { relative: t } = {}) {
	V(ot(), 'useHref() may be used only in the context of a <Router> component.')
	let { basename: r, navigator: n } = d.useContext(de),
		{ hash: a, pathname: o, search: i } = it(e, { relative: t }),
		l = o
	return (
		r !== '/' && (l = o === '/' ? r : we([r, o])),
		n.createHref({ pathname: l, search: i, hash: a })
	)
}
function ot() {
	return d.useContext(Dt) != null
}
function Ee() {
	return (
		V(
			ot(),
			'useLocation() may be used only in the context of a <Router> component.',
		),
		d.useContext(Dt).location
	)
}
var yn =
	'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function gn(e) {
	d.useContext(de).static || d.useLayoutEffect(e)
}
function xo() {
	let { isDataRoute: e } = d.useContext(me)
	return e ? Fo() : Lo()
}
function Lo() {
	V(
		ot(),
		'useNavigate() may be used only in the context of a <Router> component.',
	)
	let e = d.useContext(je),
		{ basename: t, navigator: r } = d.useContext(de),
		{ matches: n } = d.useContext(me),
		{ pathname: a } = Ee(),
		o = JSON.stringify(er(n)),
		i = d.useRef(!1)
	return (
		gn(() => {
			i.current = !0
		}),
		d.useCallback(
			(s, u = {}) => {
				if ((ne(i.current, yn), !i.current)) return
				if (typeof s == 'number') {
					r.go(s)
					return
				}
				let p = tr(s, JSON.parse(o), a, u.relative === 'path')
				e == null &&
					t !== '/' &&
					(p.pathname = p.pathname === '/' ? t : we([t, p.pathname])),
					(u.replace ? r.replace : r.push)(p, u.state, u)
			},
			[t, r, o, a, e],
		)
	)
}
var Co = d.createContext(null)
function Po(e) {
	let t = d.useContext(me).outlet
	return t && d.createElement(Co.Provider, { value: e }, t)
}
function zi() {
	let { matches: e } = d.useContext(me),
		t = e[e.length - 1]
	return t ? t.params : {}
}
function it(e, { relative: t } = {}) {
	let { matches: r } = d.useContext(me),
		{ pathname: n } = Ee(),
		a = JSON.stringify(er(r))
	return d.useMemo(() => tr(e, JSON.parse(a), n, t === 'path'), [e, a, n, t])
}
function To(e, t, r, n) {
	V(
		ot(),
		'useRoutes() may be used only in the context of a <Router> component.',
	)
	let { navigator: a } = d.useContext(de),
		{ matches: o } = d.useContext(me),
		i = o[o.length - 1],
		l = i ? i.params : {},
		s = i ? i.pathname : '/',
		u = i ? i.pathnameBase : '/',
		p = i && i.route
	{
		let E = (p && p.path) || ''
		En(
			s,
			!p || E.endsWith('*') || E.endsWith('*?'),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E === '/' ? '*' : `${E}/*`}">.`,
		)
	}
	let v = Ee(),
		h
	h = v
	let y = h.pathname || '/',
		w = y
	if (u !== '/') {
		let E = u.replace(/^\//, '').split('/')
		w = '/' + y.replace(/^\//, '').split('/').slice(E.length).join('/')
	}
	let b = Le(e, { pathname: w })
	return (
		ne(
			p || b != null,
			`No routes matched location "${h.pathname}${h.search}${h.hash}" `,
		),
		ne(
			b == null ||
				b[b.length - 1].route.element !== void 0 ||
				b[b.length - 1].route.Component !== void 0 ||
				b[b.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
		),
		Oo(
			b &&
				b.map((E) =>
					Object.assign({}, E, {
						params: Object.assign({}, l, E.params),
						pathname: we([
							u,
							a.encodeLocation
								? a.encodeLocation(E.pathname).pathname
								: E.pathname,
						]),
						pathnameBase:
							E.pathnameBase === '/'
								? u
								: we([
										u,
										a.encodeLocation
											? a.encodeLocation(E.pathnameBase).pathname
											: E.pathnameBase,
									]),
					}),
				),
			o,
			r,
			n,
		)
	)
}
function Do() {
	let e = wn(),
		t = We(e)
			? `${e.status} ${e.statusText}`
			: e instanceof Error
				? e.message
				: JSON.stringify(e),
		r = e instanceof Error ? e.stack : null,
		n = 'rgba(200,200,200, 0.5)',
		a = { padding: '0.5rem', backgroundColor: n },
		o = { padding: '2px 4px', backgroundColor: n },
		i = null
	return (
		console.error('Error handled by React Router default ErrorBoundary:', e),
		(i = d.createElement(
			d.Fragment,
			null,
			d.createElement('p', null, '💿 Hey developer 👋'),
			d.createElement(
				'p',
				null,
				'You can provide a way better UX than this when your app throws errors by providing your own ',
				d.createElement('code', { style: o }, 'ErrorBoundary'),
				' or',
				' ',
				d.createElement('code', { style: o }, 'errorElement'),
				' prop on your route.',
			),
		)),
		d.createElement(
			d.Fragment,
			null,
			d.createElement('h2', null, 'Unexpected Application Error!'),
			d.createElement('h3', { style: { fontStyle: 'italic' } }, t),
			r ? d.createElement('pre', { style: a }, r) : null,
			i,
		)
	)
}
var Mo = d.createElement(Do, null),
	ko = class extends d.Component {
		constructor(e) {
			super(e),
				(this.state = {
					location: e.location,
					revalidation: e.revalidation,
					error: e.error,
				})
		}
		static getDerivedStateFromError(e) {
			return { error: e }
		}
		static getDerivedStateFromProps(e, t) {
			return t.location !== e.location ||
				(t.revalidation !== 'idle' && e.revalidation === 'idle')
				? { error: e.error, location: e.location, revalidation: e.revalidation }
				: {
						error: e.error !== void 0 ? e.error : t.error,
						location: t.location,
						revalidation: e.revalidation || t.revalidation,
					}
		}
		componentDidCatch(e, t) {
			console.error(
				'React Router caught the following error during render',
				e,
				t,
			)
		}
		render() {
			return this.state.error !== void 0
				? d.createElement(
						me.Provider,
						{ value: this.props.routeContext },
						d.createElement(ir.Provider, {
							value: this.state.error,
							children: this.props.component,
						}),
					)
				: this.props.children
		}
	}
function _o({ routeContext: e, match: t, children: r }) {
	let n = d.useContext(je)
	return (
		n &&
			n.static &&
			n.staticContext &&
			(t.route.errorElement || t.route.ErrorBoundary) &&
			(n.staticContext._deepestRenderedBoundaryId = t.route.id),
		d.createElement(me.Provider, { value: e }, r)
	)
}
function Oo(e, t = [], r = null, n = null) {
	if (e == null) {
		if (!r) return null
		if (r.errors) e = r.matches
		else if (t.length === 0 && !r.initialized && r.matches.length > 0)
			e = r.matches
		else return null
	}
	let a = e,
		o = r == null ? void 0 : r.errors
	if (o != null) {
		let s = a.findIndex(
			(u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0,
		)
		V(
			s >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`,
		),
			(a = a.slice(0, Math.min(a.length, s + 1)))
	}
	let i = !1,
		l = -1
	if (r)
		for (let s = 0; s < a.length; s++) {
			let u = a[s]
			if (
				((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (l = s),
				u.route.id)
			) {
				let { loaderData: p, errors: v } = r,
					h =
						u.route.loader &&
						!p.hasOwnProperty(u.route.id) &&
						(!v || v[u.route.id] === void 0)
				if (u.route.lazy || h) {
					;(i = !0), l >= 0 ? (a = a.slice(0, l + 1)) : (a = [a[0]])
					break
				}
			}
		}
	return a.reduceRight((s, u, p) => {
		let v,
			h = !1,
			y = null,
			w = null
		r &&
			((v = o && u.route.id ? o[u.route.id] : void 0),
			(y = u.route.errorElement || Mo),
			i &&
				(l < 0 && p === 0
					? (En(
							'route-fallback',
							!1,
							'No `HydrateFallback` element provided to render during initial hydration',
						),
						(h = !0),
						(w = null))
					: l === p &&
						((h = !0), (w = u.route.hydrateFallbackElement || null))))
		let b = t.concat(a.slice(0, p + 1)),
			x = () => {
				let E
				return (
					v
						? (E = y)
						: h
							? (E = w)
							: u.route.Component
								? (E = d.createElement(u.route.Component, null))
								: u.route.element
									? (E = u.route.element)
									: (E = s),
					d.createElement(_o, {
						match: u,
						routeContext: { outlet: s, matches: b, isDataRoute: r != null },
						children: E,
					})
				)
			}
		return r && (u.route.ErrorBoundary || u.route.errorElement || p === 0)
			? d.createElement(ko, {
					location: r.location,
					revalidation: r.revalidation,
					component: y,
					error: v,
					children: x(),
					routeContext: { outlet: null, matches: b, isDataRoute: !0 },
				})
			: x()
	}, null)
}
function lr(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Ao(e) {
	let t = d.useContext(je)
	return V(t, lr(e)), t
}
function lt(e) {
	let t = d.useContext(Ve)
	return V(t, lr(e)), t
}
function No(e) {
	let t = d.useContext(me)
	return V(t, lr(e)), t
}
function st(e) {
	let t = No(e),
		r = t.matches[t.matches.length - 1]
	return (
		V(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
		r.route.id
	)
}
function $o() {
	return st('useRouteId')
}
function Io() {
	return lt('useNavigation').navigation
}
function vn() {
	let { matches: e, loaderData: t } = lt('useMatches')
	return d.useMemo(() => e.map((r) => on(r, t)), [e, t])
}
function Yi() {
	let e = lt('useLoaderData'),
		t = st('useLoaderData')
	return e.loaderData[t]
}
function Wi() {
	let e = lt('useActionData'),
		t = st('useLoaderData')
	return e.actionData ? e.actionData[t] : void 0
}
function wn() {
	var n
	let e = d.useContext(ir),
		t = lt('useRouteError'),
		r = st('useRouteError')
	return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r]
}
function Fo() {
	let { router: e } = Ao('useNavigate'),
		t = st('useNavigate'),
		r = d.useRef(!1)
	return (
		gn(() => {
			r.current = !0
		}),
		d.useCallback(
			async (a, o = {}) => {
				ne(r.current, yn),
					r.current &&
						(typeof a == 'number'
							? e.navigate(a)
							: await e.navigate(a, { fromRouteId: t, ...o }))
			},
			[e, t],
		)
	)
}
var Xr = {}
function En(e, t, r) {
	!t && !Xr[e] && ((Xr[e] = !0), ne(!1, r))
}
var Kr = {}
function qr(e, t) {
	!e && !Kr[t] && ((Kr[t] = !0), console.warn(t))
}
function Vi(e) {
	let t = {
		hasErrorBoundary:
			e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
	}
	return (
		e.Component &&
			(e.element &&
				ne(
					!1,
					'You should not include both `Component` and `element` on your route - `Component` will be used.',
				),
			Object.assign(t, {
				element: d.createElement(e.Component),
				Component: void 0,
			})),
		e.HydrateFallback &&
			(e.hydrateFallbackElement &&
				ne(
					!1,
					'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
				),
			Object.assign(t, {
				hydrateFallbackElement: d.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			})),
		e.ErrorBoundary &&
			(e.errorElement &&
				ne(
					!1,
					'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
				),
			Object.assign(t, {
				errorElement: d.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			})),
		t
	)
}
var jo = class {
	constructor() {
		;(this.status = 'pending'),
			(this.promise = new Promise((e, t) => {
				;(this.resolve = (r) => {
					this.status === 'pending' && ((this.status = 'resolved'), e(r))
				}),
					(this.reject = (r) => {
						this.status === 'pending' && ((this.status = 'rejected'), t(r))
					})
			}))
	}
}
function Ji({ router: e, flushSync: t }) {
	let [r, n] = d.useState(e.state),
		[a, o] = d.useState(),
		[i, l] = d.useState({ isTransitioning: !1 }),
		[s, u] = d.useState(),
		[p, v] = d.useState(),
		[h, y] = d.useState(),
		w = d.useRef(new Map()),
		b = d.useCallback(
			(L, { deletedFetchers: D, flushSync: f, viewTransitionOpts: M }) => {
				D.forEach((I) => w.current.delete(I)),
					L.fetchers.forEach((I, B) => {
						I.data !== void 0 && w.current.set(B, I.data)
					}),
					qr(
						f === !1 || t != null,
						'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
					)
				let U =
					e.window != null &&
					e.window.document != null &&
					typeof e.window.document.startViewTransition == 'function'
				if (
					(qr(
						M == null || U,
						'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.',
					),
					!M || !U)
				) {
					t && f ? t(() => n(L)) : d.startTransition(() => n(L))
					return
				}
				if (t && f) {
					t(() => {
						p && (s && s.resolve(), p.skipTransition()),
							l({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: M.currentLocation,
								nextLocation: M.nextLocation,
							})
					})
					let I = e.window.document.startViewTransition(() => {
						t(() => n(L))
					})
					I.finished.finally(() => {
						t(() => {
							u(void 0), v(void 0), o(void 0), l({ isTransitioning: !1 })
						})
					}),
						t(() => v(I))
					return
				}
				p
					? (s && s.resolve(),
						p.skipTransition(),
						y({
							state: L,
							currentLocation: M.currentLocation,
							nextLocation: M.nextLocation,
						}))
					: (o(L),
						l({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: M.currentLocation,
							nextLocation: M.nextLocation,
						}))
			},
			[e.window, t, p, s],
		)
	d.useLayoutEffect(() => e.subscribe(b), [e, b]),
		d.useEffect(() => {
			i.isTransitioning && !i.flushSync && u(new jo())
		}, [i]),
		d.useEffect(() => {
			if (s && a && e.window) {
				let L = a,
					D = s.promise,
					f = e.window.document.startViewTransition(async () => {
						d.startTransition(() => n(L)), await D
					})
				f.finished.finally(() => {
					u(void 0), v(void 0), o(void 0), l({ isTransitioning: !1 })
				}),
					v(f)
			}
		}, [a, s, e.window]),
		d.useEffect(() => {
			s && a && r.location.key === a.location.key && s.resolve()
		}, [s, p, r.location, a]),
		d.useEffect(() => {
			!i.isTransitioning &&
				h &&
				(o(h.state),
				l({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: h.currentLocation,
					nextLocation: h.nextLocation,
				}),
				y(void 0))
		}, [i.isTransitioning, h])
	let x = d.useMemo(
			() => ({
				createHref: e.createHref,
				encodeLocation: e.encodeLocation,
				go: (L) => e.navigate(L),
				push: (L, D, f) =>
					e.navigate(L, {
						state: D,
						preventScrollReset: f == null ? void 0 : f.preventScrollReset,
					}),
				replace: (L, D, f) =>
					e.navigate(L, {
						replace: !0,
						state: D,
						preventScrollReset: f == null ? void 0 : f.preventScrollReset,
					}),
			}),
			[e],
		),
		E = e.basename || '/',
		P = d.useMemo(
			() => ({ router: e, navigator: x, static: !1, basename: E }),
			[e, x, E],
		)
	return d.createElement(
		d.Fragment,
		null,
		d.createElement(
			je.Provider,
			{ value: P },
			d.createElement(
				Ve.Provider,
				{ value: r },
				d.createElement(
					pn.Provider,
					{ value: w.current },
					d.createElement(
						or.Provider,
						{ value: i },
						d.createElement(
							Bo,
							{
								basename: E,
								location: r.location,
								navigationType: r.historyAction,
								navigator: x,
							},
							d.createElement(Uo, {
								routes: e.routes,
								future: e.future,
								state: r,
							}),
						),
					),
				),
			),
		),
		null,
	)
}
var Uo = d.memo(Ho)
function Ho({ routes: e, future: t, state: r }) {
	return To(e, void 0, r, t)
}
function Gi(e) {
	return Po(e.context)
}
function Bo({
	basename: e = '/',
	children: t = null,
	location: r,
	navigationType: n = 'POP',
	navigator: a,
	static: o = !1,
}) {
	V(
		!ot(),
		'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
	)
	let i = e.replace(/^\/*/, '/'),
		l = d.useMemo(
			() => ({ basename: i, navigator: a, static: o, future: {} }),
			[i, a, o],
		)
	typeof r == 'string' && (r = _e(r))
	let {
			pathname: s = '/',
			search: u = '',
			hash: p = '',
			state: v = null,
			key: h = 'default',
		} = r,
		y = d.useMemo(() => {
			let w = ce(s, i)
			return w == null
				? null
				: {
						location: { pathname: w, search: u, hash: p, state: v, key: h },
						navigationType: n,
					}
		}, [i, s, u, p, v, h, n])
	return (
		ne(
			y != null,
			`<Router basename="${i}"> is not able to match the URL "${s}${u}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
		),
		y == null
			? null
			: d.createElement(
					de.Provider,
					{ value: l },
					d.createElement(Dt.Provider, { children: t, value: y }),
				)
	)
}
var bt = 'get',
	St = 'application/x-www-form-urlencoded'
function Mt(e) {
	return e != null && typeof e.tagName == 'string'
}
function zo(e) {
	return Mt(e) && e.tagName.toLowerCase() === 'button'
}
function Yo(e) {
	return Mt(e) && e.tagName.toLowerCase() === 'form'
}
function Wo(e) {
	return Mt(e) && e.tagName.toLowerCase() === 'input'
}
function Vo(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Jo(e, t) {
	return e.button === 0 && (!t || t === '_self') && !Vo(e)
}
var gt = null
function Go() {
	if (gt === null)
		try {
			new FormData(document.createElement('form'), 0), (gt = !1)
		} catch {
			gt = !0
		}
	return gt
}
var Xo = new Set([
	'application/x-www-form-urlencoded',
	'multipart/form-data',
	'text/plain',
])
function Yt(e) {
	return e != null && !Xo.has(e)
		? (ne(
				!1,
				`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${St}"`,
			),
			null)
		: e
}
function Ko(e, t) {
	let r, n, a, o, i
	if (Yo(e)) {
		let l = e.getAttribute('action')
		;(n = l ? ce(l, t) : null),
			(r = e.getAttribute('method') || bt),
			(a = Yt(e.getAttribute('enctype')) || St),
			(o = new FormData(e))
	} else if (zo(e) || (Wo(e) && (e.type === 'submit' || e.type === 'image'))) {
		let l = e.form
		if (l == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>',
			)
		let s = e.getAttribute('formaction') || l.getAttribute('action')
		if (
			((n = s ? ce(s, t) : null),
			(r = e.getAttribute('formmethod') || l.getAttribute('method') || bt),
			(a =
				Yt(e.getAttribute('formenctype')) ||
				Yt(l.getAttribute('enctype')) ||
				St),
			(o = new FormData(l, e)),
			!Go())
		) {
			let { name: u, type: p, value: v } = e
			if (p === 'image') {
				let h = u ? `${u}.` : ''
				o.append(`${h}x`, '0'), o.append(`${h}y`, '0')
			} else u && o.append(u, v)
		}
	} else {
		if (Mt(e))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
			)
		;(r = bt), (n = null), (a = St), (i = e)
	}
	return (
		o && a === 'text/plain' && ((i = o), (o = void 0)),
		{ action: n, method: r.toLowerCase(), encType: a, formData: o, body: i }
	)
}
function Ce(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
async function Rn(e, t) {
	if (e.id in t) return t[e.id]
	try {
		let r = await import(e.module)
		return (t[e.id] = r), r
	} catch (r) {
		return (
			console.error(
				`Error loading route module \`${e.module}\`, reloading page...`,
			),
			console.error(r),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		)
	}
}
function qo(e, t, r) {
	let n = e
			.map((o) => {
				var s
				let i = t[o.route.id],
					l = r.routes[o.route.id]
				return [
					l && l.css ? l.css.map((u) => ({ rel: 'stylesheet', href: u })) : [],
					((s = i == null ? void 0 : i.links) == null ? void 0 : s.call(i)) ||
						[],
				]
			})
			.flat(2),
		a = ri(e, r)
	return xn(n, a)
}
async function bn(e, t) {
	if ((!e.css && !t.links) || !ai()) return
	let r = []
	if (
		(e.css && r.push(...e.css.map((o) => ({ rel: 'stylesheet', href: o }))),
		t.links && r.push(...t.links()),
		r.length === 0)
	)
		return
	let n = []
	for (let o of r)
		!sr(o) &&
			o.rel === 'stylesheet' &&
			n.push({ ...o, rel: 'preload', as: 'style' })
	let a = n.filter(
		(o) =>
			(!o.media || window.matchMedia(o.media).matches) &&
			!document.querySelector(`link[rel="stylesheet"][href="${o.href}"]`),
	)
	await Promise.all(a.map(Qo))
}
async function Qo(e) {
	return new Promise((t) => {
		let r = document.createElement('link')
		Object.assign(r, e)
		function n() {
			document.head.contains(r) && document.head.removeChild(r)
		}
		;(r.onload = () => {
			n(), t()
		}),
			(r.onerror = () => {
				n(), t()
			}),
			document.head.appendChild(r)
	})
}
function sr(e) {
	return e != null && typeof e.page == 'string'
}
function Zo(e) {
	return e == null
		? !1
		: e.href == null
			? e.rel === 'preload' &&
				typeof e.imageSrcSet == 'string' &&
				typeof e.imageSizes == 'string'
			: typeof e.rel == 'string' && typeof e.href == 'string'
}
async function ei(e, t, r) {
	let n = await Promise.all(
		e.map(async (a) => {
			let o = t.routes[a.route.id]
			if (o) {
				let i = await Rn(o, r)
				return i.links ? i.links() : []
			}
			return []
		}),
	)
	return xn(
		n
			.flat(1)
			.filter(Zo)
			.filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
			.map((a) =>
				a.rel === 'stylesheet'
					? { ...a, rel: 'prefetch', as: 'style' }
					: { ...a, rel: 'prefetch' },
			),
	)
}
function Qr(e, t, r, n, a, o) {
	let i = (s, u) => (r[u] ? s.route.id !== r[u].route.id : !0),
		l = (s, u) => {
			var p
			return (
				r[u].pathname !== s.pathname ||
				(((p = r[u].route.path) == null ? void 0 : p.endsWith('*')) &&
					r[u].params['*'] !== s.params['*'])
			)
		}
	return o === 'assets'
		? t.filter((s, u) => i(s, u) || l(s, u))
		: o === 'data'
			? t.filter((s, u) => {
					var v
					let p = n.routes[s.route.id]
					if (!p || !p.hasLoader) return !1
					if (i(s, u) || l(s, u)) return !0
					if (s.route.shouldRevalidate) {
						let h = s.route.shouldRevalidate({
							currentUrl: new URL(
								a.pathname + a.search + a.hash,
								window.origin,
							),
							currentParams: ((v = r[0]) == null ? void 0 : v.params) || {},
							nextUrl: new URL(e, window.origin),
							nextParams: s.params,
							defaultShouldRevalidate: !0,
						})
						if (typeof h == 'boolean') return h
					}
					return !0
				})
			: []
}
function ti(e, t) {
	return Sn(
		e
			.map((r) => {
				let n = t.routes[r.route.id]
				if (!n) return []
				let a = [n.module]
				return n.imports && (a = a.concat(n.imports)), a
			})
			.flat(1),
	)
}
function ri(e, t) {
	return Sn(
		e
			.map((r) => {
				let n = t.routes[r.route.id]
				if (!n) return []
				let a = [n.module]
				return n.imports && (a = a.concat(n.imports)), a
			})
			.flat(1),
	)
}
function Sn(e) {
	return [...new Set(e)]
}
function ni(e) {
	let t = {},
		r = Object.keys(e).sort()
	for (let n of r) t[n] = e[n]
	return t
}
function xn(e, t) {
	let r = new Set(),
		n = new Set(t)
	return e.reduce((a, o) => {
		if (t && !sr(o) && o.as === 'script' && o.href && n.has(o.href)) return a
		let l = JSON.stringify(ni(o))
		return r.has(l) || (r.add(l), a.push({ key: l, link: o })), a
	}, [])
}
var vt
function ai() {
	if (vt !== void 0) return vt
	let e = document.createElement('link')
	return (vt = e.relList.supports('preload')), (e = null), vt
}
function Zr(e) {
	return { __html: e }
}
async function ur(e) {
	let t = { signal: e.signal }
	if (e.method !== 'GET') {
		t.method = e.method
		let r = e.headers.get('Content-Type')
		r && /\bapplication\/json\b/.test(r)
			? ((t.headers = { 'Content-Type': r }),
				(t.body = JSON.stringify(await e.json())))
			: r && /\btext\/plain\b/.test(r)
				? ((t.headers = { 'Content-Type': r }), (t.body = await e.text()))
				: r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
					? (t.body = new URLSearchParams(await e.text()))
					: (t.body = await e.formData())
	}
	return t
}
var Ln = Symbol('SingleFetchRedirect')
function Xi(e, t, r) {
	return async ({ request: n, matches: a, fetcherKey: o }) =>
		n.method !== 'GET' ? oi(n, a) : o ? li(n, a) : ii(e, t, r(), n, a)
}
async function oi(e, t) {
	let r = t.find((o) => o.shouldLoad)
	Ce(r, 'No action match found')
	let n,
		a = await r.resolve(
			async (o) =>
				await o(async () => {
					let l = kt(e.url),
						s = await ur(e),
						{ data: u, status: p } = await cr(l, s)
					return (n = p), Kt(u, r.route.id)
				}),
		)
	return nr(a.result) || We(a.result)
		? { [r.route.id]: a }
		: { [r.route.id]: { type: a.type, result: Ga(a.result, n) } }
}
async function ii(e, t, r, n, a) {
	let o = new Set(),
		i = !1,
		l = a.map(() => en()),
		s = Promise.all(l.map((w) => w.promise)),
		u = en(),
		p = Pn(kt(n.url)),
		v = await ur(n),
		h = {},
		y = Promise.all(
			a.map(async (w, b) =>
				w.resolve(async (x) => {
					var P
					l[b].resolve()
					let E = e.routes[w.route.id]
					if (!w.shouldLoad) {
						if (!r.state.initialized) return
						if (
							w.route.id in r.state.loaderData &&
							E &&
							E.hasLoader &&
							(P = t[w.route.id]) != null &&
							P.shouldRevalidate
						) {
							i = !0
							return
						}
					}
					if (E && E.hasClientLoader) {
						E.hasLoader && (i = !0)
						try {
							let L = await Cn(x, p, v, w.route.id)
							h[w.route.id] = { type: 'data', result: L }
						} catch (L) {
							h[w.route.id] = { type: 'error', result: L }
						}
						return
					}
					E && E.hasLoader && o.add(w.route.id)
					try {
						let L = await x(async () => {
							let D = await u.promise
							return Tn(D, w.route.id)
						})
						h[w.route.id] = { type: 'data', result: L }
					} catch (L) {
						h[w.route.id] = { type: 'error', result: L }
					}
				}),
			),
		)
	if (
		(await s,
		(!r.state.initialized || o.size === 0) && !window.__reactRouterHdrActive)
	)
		u.resolve({})
	else
		try {
			i &&
				o.size > 0 &&
				p.searchParams.set(
					'_routes',
					a
						.filter((b) => o.has(b.route.id))
						.map((b) => b.route.id)
						.join(','),
				)
			let w = await cr(p, v)
			u.resolve(w.data)
		} catch (w) {
			u.reject(w)
		}
	return await y, h
}
async function li(e, t) {
	let r = t.find((a) => a.shouldLoad)
	Ce(r, 'No fetcher match found')
	let n = await r.resolve(async (a) => {
		let o = Pn(kt(e.url)),
			i = await ur(e)
		return Cn(a, o, i, r.route.id)
	})
	return { [r.route.id]: n }
}
function Cn(e, t, r, n) {
	return e(async () => {
		let a = new URL(t)
		a.searchParams.set('_routes', n)
		let { data: o } = await cr(a, r)
		return Tn(o, n)
	})
}
function Pn(e) {
	let t = e.searchParams.getAll('index')
	e.searchParams.delete('index')
	let r = []
	for (let n of t) n && r.push(n)
	for (let n of r) e.searchParams.append('index', n)
	return e
}
function kt(e) {
	let t =
		typeof e == 'string'
			? new URL(
					e,
					typeof window > 'u'
						? 'server://singlefetch/'
						: window.location.origin,
				)
			: e
	return (
		t.pathname === '/'
			? (t.pathname = '_root.data')
			: (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
		t
	)
}
async function cr(e, t) {
	let r = await fetch(e, t)
	if (r.status === 404 && !r.headers.has('X-Remix-Response'))
		throw new Pe(404, 'Not Found', !0)
	Ce(r.body, 'No response body to decode')
	try {
		let n = await si(r.body, window)
		return { status: r.status, data: n.value }
	} catch {
		throw new Error('Unable to decode turbo-stream response')
	}
}
function si(e, t) {
	return ba(e, {
		plugins: [
			(r, ...n) => {
				if (r === 'SanitizedError') {
					let [a, o, i] = n,
						l = Error
					a && a in t && typeof t[a] == 'function' && (l = t[a])
					let s = new l(o)
					return (s.stack = i), { value: s }
				}
				if (r === 'ErrorResponse') {
					let [a, o, i] = n
					return { value: new Pe(o, i, a) }
				}
				if (r === 'SingleFetchRedirect') return { value: { [Ln]: n[0] } }
				if (r === 'SingleFetchClassInstance') return { value: n[0] }
				if (r === 'SingleFetchFallback') return { value: void 0 }
			},
		],
	})
}
function Tn(e, t) {
	let r = e[Ln]
	return r ? Kt(r, t) : e[t] !== void 0 ? Kt(e[t], t) : null
}
function Kt(e, t) {
	if ('error' in e) throw e.error
	if ('redirect' in e) {
		let r = {}
		throw (
			(e.revalidate && (r['X-Remix-Revalidate'] = 'yes'),
			e.reload && (r['X-Remix-Reload-Document'] = 'yes'),
			e.replace && (r['X-Remix-Replace'] = 'yes'),
			Xa(e.redirect, { status: e.status, headers: r }))
		)
	} else {
		if ('data' in e) return e.data
		throw new Error(`No response found for routeId "${t}"`)
	}
}
function en() {
	let e,
		t,
		r = new Promise((n, a) => {
			;(e = async (o) => {
				n(o)
				try {
					await r
				} catch {}
			}),
				(t = async (o) => {
					a(o)
					try {
						await r
					} catch {}
				})
		})
	return { promise: r, resolve: e, reject: t }
}
var Ki = class extends d.Component {
	constructor(e) {
		super(e), (this.state = { error: e.error || null, location: e.location })
	}
	static getDerivedStateFromError(e) {
		return { error: e }
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location
			? { error: e.error || null, location: e.location }
			: { error: e.error || t.error, location: t.location }
	}
	render() {
		return this.state.error
			? d.createElement(Dn, { error: this.state.error, isOutsideRemixApp: !0 })
			: this.props.children
	}
}
function Dn({ error: e, isOutsideRemixApp: t }) {
	console.error(e)
	let r = d.createElement('script', {
		dangerouslySetInnerHTML: {
			__html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
		},
	})
	if (We(e))
		return d.createElement(
			qt,
			{ title: 'Unhandled Thrown Response!' },
			d.createElement(
				'h1',
				{ style: { fontSize: '24px' } },
				e.status,
				' ',
				e.statusText,
			),
			r,
		)
	let n
	if (e instanceof Error) n = e
	else {
		let a =
			e == null
				? 'Unknown Error'
				: typeof e == 'object' && 'toString' in e
					? e.toString()
					: JSON.stringify(e)
		n = new Error(a)
	}
	return d.createElement(
		qt,
		{ title: 'Application Error!', isOutsideRemixApp: t },
		d.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
		d.createElement(
			'pre',
			{
				style: {
					padding: '2rem',
					background: 'hsla(10, 50%, 50%, 0.1)',
					color: 'red',
					overflow: 'auto',
				},
			},
			n.stack,
		),
		r,
	)
}
function qt({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
	var o
	let { routeModules: a } = Je()
	return (o = a.root) != null && o.Layout && !r
		? n
		: d.createElement(
				'html',
				{ lang: 'en' },
				d.createElement(
					'head',
					null,
					d.createElement('meta', { charSet: 'utf-8' }),
					d.createElement('meta', {
						name: 'viewport',
						content: 'width=device-width,initial-scale=1,viewport-fit=cover',
					}),
					d.createElement('title', null, e),
				),
				d.createElement(
					'body',
					null,
					d.createElement(
						'main',
						{ style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
						n,
						t ? d.createElement(Si, null) : null,
					),
				),
			)
}
function ui() {
	return d.createElement(
		qt,
		{ title: 'Loading...', renderScripts: !0 },
		d.createElement('script', {
			dangerouslySetInnerHTML: {
				__html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `,
			},
		}),
	)
}
function Mn(e) {
	let t = {}
	return (
		Object.values(e).forEach((r) => {
			if (r) {
				let n = r.parentId || ''
				t[n] || (t[n] = []), t[n].push(r)
			}
		}),
		t
	)
}
function ci(e, t, r) {
	let n = kn(t),
		a =
			t.HydrateFallback && (!r || e.id === 'root')
				? t.HydrateFallback
				: e.id === 'root'
					? ui
					: void 0,
		o = t.ErrorBoundary
			? t.ErrorBoundary
			: e.id === 'root'
				? () => d.createElement(Dn, { error: wn() })
				: void 0
	return e.id === 'root' && t.Layout
		? {
				...(n
					? {
							element: d.createElement(
								t.Layout,
								null,
								d.createElement(n, null),
							),
						}
					: { Component: n }),
				...(o
					? {
							errorElement: d.createElement(
								t.Layout,
								null,
								d.createElement(o, null),
							),
						}
					: { ErrorBoundary: o }),
				...(a
					? {
							hydrateFallbackElement: d.createElement(
								t.Layout,
								null,
								d.createElement(a, null),
							),
						}
					: { HydrateFallback: a }),
			}
		: { Component: n, ErrorBoundary: o, HydrateFallback: a }
}
function qi(e, t, r, n, a, o) {
	return dr(t, r, n, o, '', Mn(t), e)
}
function wt(e, t, r) {
	if (r) {
		let i = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`
		throw (console.error(i), new Pe(400, 'Bad Request', new Error(i), !0))
	}
	let a = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`
	if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
		throw (console.error(a), new Pe(400, 'Bad Request', new Error(a), !0))
}
function Wt(e, t) {
	let r = e === 'clientAction' ? 'a' : 'an',
		n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`
	throw (console.error(n), new Pe(405, 'Method Not Allowed', new Error(n), !0))
}
function dr(e, t, r, n, a = '', o = Mn(e), i) {
	return (o[a] || []).map((l) => {
		var b, x, E
		let s = t[l.id]
		function u(P) {
			return (
				Ce(
					typeof P == 'function',
					'No single fetch function available for route handler',
				),
				P()
			)
		}
		function p(P) {
			return l.hasLoader ? u(P) : Promise.resolve(null)
		}
		function v(P) {
			if (!l.hasAction) throw Wt('action', l.id)
			return u(P)
		}
		async function h(P) {
			let L = t[l.id],
				D = L ? bn(l, L) : Promise.resolve()
			try {
				return P()
			} finally {
				await D
			}
		}
		let y = { id: l.id, index: l.index, path: l.path }
		if (s) {
			Object.assign(y, {
				...y,
				...ci(l, s, n),
				handle: s.handle,
				shouldRevalidate: tn(s, l.id, i),
			})
			let P = r && r.loaderData && l.id in r.loaderData,
				L = P
					? (b = r == null ? void 0 : r.loaderData) == null
						? void 0
						: b[l.id]
					: void 0,
				D = r && r.errors && l.id in r.errors,
				f = D
					? (x = r == null ? void 0 : r.errors) == null
						? void 0
						: x[l.id]
					: void 0,
				M =
					i == null &&
					(((E = s.clientLoader) == null ? void 0 : E.hydrate) === !0 ||
						!l.hasLoader)
			;(y.loader = async ({ request: U, params: I }, B) => {
				try {
					return await h(
						async () => (
							Ce(s, 'No `routeModule` available for critical-route loader'),
							s.clientLoader
								? s.clientLoader({
										request: U,
										params: I,
										async serverLoader() {
											if ((wt('loader', l, n), M)) {
												if (P) return L
												if (D) throw f
											}
											return p(B)
										},
									})
								: n
									? null
									: p(B)
						),
					)
				} finally {
					M = !1
				}
			}),
				(y.loader.hydrate = hi(l, s, n)),
				(y.action = ({ request: U, params: I }, B) =>
					h(async () => {
						if (
							(Ce(s, 'No `routeModule` available for critical-route action'),
							!s.clientAction)
						) {
							if (n) throw Wt('clientAction', l.id)
							return v(B)
						}
						return s.clientAction({
							request: U,
							params: I,
							async serverAction() {
								return wt('action', l, n), v(B)
							},
						})
					}))
		} else
			l.hasClientLoader ||
				(y.loader = ({ request: P }, L) =>
					h(() => (n ? Promise.resolve(null) : p(L)))),
				l.hasClientAction ||
					(y.action = ({ request: P }, L) =>
						h(() => {
							if (n) throw Wt('clientAction', l.id)
							return v(L)
						})),
				(y.lazy = async () => {
					let P = await fi(l, t),
						L = { ...P }
					if (P.clientLoader) {
						let D = P.clientLoader
						L.loader = (f, M) =>
							D({
								...f,
								async serverLoader() {
									return wt('loader', l, n), p(M)
								},
							})
					}
					if (P.clientAction) {
						let D = P.clientAction
						L.action = (f, M) =>
							D({
								...f,
								async serverAction() {
									return wt('action', l, n), v(M)
								},
							})
					}
					return {
						...(L.loader ? { loader: L.loader } : {}),
						...(L.action ? { action: L.action } : {}),
						hasErrorBoundary: L.hasErrorBoundary,
						shouldRevalidate: tn(L, l.id, i),
						handle: L.handle,
						Component: L.Component,
						ErrorBoundary: L.ErrorBoundary,
					}
				})
		let w = dr(e, t, r, n, l.id, o, i)
		return w.length > 0 && (y.children = w), y
	})
}
function tn(e, t, r) {
	if (r) return di(t, e.shouldRevalidate, r)
	if (e.shouldRevalidate) {
		let n = e.shouldRevalidate
		return (a) => n({ ...a, defaultShouldRevalidate: !0 })
	}
	return e.shouldRevalidate
}
function di(e, t, r) {
	let n = !1
	return (a) =>
		n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e))
}
async function fi(e, t) {
	let r = await Rn(e, t)
	return (
		await bn(e, r),
		{
			Component: kn(r),
			ErrorBoundary: r.ErrorBoundary,
			clientAction: r.clientAction,
			clientLoader: r.clientLoader,
			handle: r.handle,
			links: r.links,
			meta: r.meta,
			shouldRevalidate: r.shouldRevalidate,
		}
	)
}
function kn(e) {
	if (e.default == null) return
	if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
		return e.default
}
function hi(e, t, r) {
	return (
		(r && e.id !== 'root') ||
		(t.clientLoader != null &&
			(t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
	)
}
var xt = new Set(),
	mi = 1e3,
	Tt = new Set(),
	pi = 7680
function fr(e) {
	return !e
}
function yi(e, t) {
	let r = new Set(t.state.matches.map((i) => i.route.id)),
		n = t.state.location.pathname.split('/').filter(Boolean),
		a = ['/']
	for (n.pop(); n.length > 0; ) a.push(`/${n.join('/')}`), n.pop()
	a.forEach((i) => {
		let l = Le(t.routes, i, t.basename)
		l && l.forEach((s) => r.add(s.route.id))
	})
	let o = [...r].reduce((i, l) => Object.assign(i, { [l]: e.routes[l] }), {})
	return { ...e, routes: o }
}
function Qi(e, t, r, n) {
	if (fr(r))
		return async ({ path: a, patch: o }) => {
			Tt.has(a) || (await _n([a], e, t, r, n, o))
		}
}
function Zi(e, t, r, n) {
	d.useEffect(() => {
		var u
		if (
			!fr(n) ||
			((u = navigator.connection) == null ? void 0 : u.saveData) === !0
		)
			return
		function a(p) {
			let v =
				p.tagName === 'FORM' ? p.getAttribute('action') : p.getAttribute('href')
			if (!v) return
			let h = new URL(v, window.location.origin)
			Tt.has(h.pathname) || xt.add(h.pathname)
		}
		async function o() {
			let p = Array.from(xt.keys()).filter((v) =>
				Tt.has(v) ? (xt.delete(v), !1) : !0,
			)
			if (p.length !== 0)
				try {
					await _n(p, t, r, n, e.basename, e.patchRoutes)
				} catch (v) {
					console.error('Failed to fetch manifest patches', v)
				}
		}
		document.body
			.querySelectorAll('a[data-discover], form[data-discover]')
			.forEach((p) => a(p)),
			o()
		let i = vi(o, 100)
		function l(p) {
			return p.nodeType === Node.ELEMENT_NODE
		}
		let s = new MutationObserver((p) => {
			let v = new Set()
			p.forEach((h) => {
				;[h.target, ...h.addedNodes].forEach((y) => {
					l(y) &&
						(((y.tagName === 'A' && y.getAttribute('data-discover')) ||
							(y.tagName === 'FORM' && y.getAttribute('data-discover'))) &&
							v.add(y),
						y.tagName !== 'A' &&
							y
								.querySelectorAll('a[data-discover], form[data-discover]')
								.forEach((w) => v.add(w)))
				})
			}),
				v.forEach((h) => a(h)),
				i()
		})
		return (
			s.observe(document.documentElement, {
				subtree: !0,
				childList: !0,
				attributes: !0,
				attributeFilter: ['data-discover', 'href', 'action'],
			}),
			() => s.disconnect()
		)
	}, [n, t, r, e])
}
async function _n(e, t, r, n, a, o) {
	let i = `${a ?? '/'}/__manifest`.replace(/\/+/g, '/'),
		l = new URL(i, window.location.origin)
	if (
		(e.sort().forEach((y) => l.searchParams.append('p', y)),
		l.searchParams.set('version', t.version),
		l.toString().length > pi)
	) {
		xt.clear()
		return
	}
	let s = await fetch(l)
	if (s.ok) {
		if (s.status >= 400) throw new Error(await s.text())
	} else throw new Error(`${s.status} ${s.statusText}`)
	let u = await s.json(),
		p = new Set(Object.keys(t.routes)),
		v = Object.values(u).reduce(
			(y, w) => (w && !p.has(w.id) && (y[w.id] = w), y),
			{},
		)
	Object.assign(t.routes, v), e.forEach((y) => gi(y, Tt))
	let h = new Set()
	Object.values(v).forEach((y) => {
		y && (!y.parentId || !v[y.parentId]) && h.add(y.parentId)
	}),
		h.forEach((y) => o(y || null, dr(v, r, null, n, y)))
}
function gi(e, t) {
	if (t.size >= mi) {
		let r = t.values().next().value
		t.delete(r)
	}
	t.add(e)
}
function vi(e, t) {
	let r
	return (...n) => {
		window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t))
	}
}
function On() {
	let e = d.useContext(je)
	return (
		Ce(
			e,
			'You must render this element inside a <DataRouterContext.Provider> element',
		),
		e
	)
}
function _t() {
	let e = d.useContext(Ve)
	return (
		Ce(
			e,
			'You must render this element inside a <DataRouterStateContext.Provider> element',
		),
		e
	)
}
var Ot = d.createContext(void 0)
Ot.displayName = 'FrameworkContext'
function Je() {
	let e = d.useContext(Ot)
	return (
		Ce(e, 'You must render this element inside a <HydratedRouter> element'), e
	)
}
function wi(e, t) {
	let r = d.useContext(Ot),
		[n, a] = d.useState(!1),
		[o, i] = d.useState(!1),
		{
			onFocus: l,
			onBlur: s,
			onMouseEnter: u,
			onMouseLeave: p,
			onTouchStart: v,
		} = t,
		h = d.useRef(null)
	d.useEffect(() => {
		if ((e === 'render' && i(!0), e === 'viewport')) {
			let b = (E) => {
					E.forEach((P) => {
						i(P.isIntersecting)
					})
				},
				x = new IntersectionObserver(b, { threshold: 0.5 })
			return (
				h.current && x.observe(h.current),
				() => {
					x.disconnect()
				}
			)
		}
	}, [e]),
		d.useEffect(() => {
			if (n) {
				let b = setTimeout(() => {
					i(!0)
				}, 100)
				return () => {
					clearTimeout(b)
				}
			}
		}, [n])
	let y = () => {
			a(!0)
		},
		w = () => {
			a(!1), i(!1)
		}
	return r
		? e !== 'intent'
			? [o, h, {}]
			: [
					o,
					h,
					{
						onFocus: rt(l, y),
						onBlur: rt(s, w),
						onMouseEnter: rt(u, y),
						onMouseLeave: rt(p, w),
						onTouchStart: rt(v, y),
					},
				]
		: [!1, h, {}]
}
function rt(e, t) {
	return (r) => {
		e && e(r), r.defaultPrevented || t(r)
	}
}
function hr(e, t, r) {
	if (r && !Lt) return [e[0]]
	if (t) {
		let n = e.findIndex((a) => t[a.route.id] !== void 0)
		return e.slice(0, n + 1)
	}
	return e
}
function el() {
	let { isSpaMode: e, manifest: t, routeModules: r, criticalCss: n } = Je(),
		{ errors: a, matches: o } = _t(),
		i = hr(o, a, e),
		l = d.useMemo(() => qo(i, r, t), [i, r, t])
	return d.createElement(
		d.Fragment,
		null,
		n
			? d.createElement('style', { dangerouslySetInnerHTML: { __html: n } })
			: null,
		l.map(({ key: s, link: u }) =>
			sr(u)
				? d.createElement(An, { key: s, ...u })
				: d.createElement('link', { key: s, ...u }),
		),
	)
}
function An({ page: e, ...t }) {
	let { router: r } = On(),
		n = d.useMemo(() => Le(r.routes, e, r.basename), [r.routes, e, r.basename])
	return n ? d.createElement(Ri, { page: e, matches: n, ...t }) : null
}
function Ei(e) {
	let { manifest: t, routeModules: r } = Je(),
		[n, a] = d.useState([])
	return (
		d.useEffect(() => {
			let o = !1
			return (
				ei(e, t, r).then((i) => {
					o || a(i)
				}),
				() => {
					o = !0
				}
			)
		}, [e, t, r]),
		n
	)
}
function Ri({ page: e, matches: t, ...r }) {
	let n = Ee(),
		{ manifest: a, routeModules: o } = Je(),
		{ loaderData: i, matches: l } = _t(),
		s = d.useMemo(() => Qr(e, t, l, a, n, 'data'), [e, t, l, a, n]),
		u = d.useMemo(() => Qr(e, t, l, a, n, 'assets'), [e, t, l, a, n]),
		p = d.useMemo(() => {
			if (e === n.pathname + n.search + n.hash) return []
			let y = new Set(),
				w = !1
			if (
				(t.forEach((x) => {
					var P
					let E = a.routes[x.route.id]
					!E ||
						!E.hasLoader ||
						((!s.some((L) => L.route.id === x.route.id) &&
							x.route.id in i &&
							(P = o[x.route.id]) != null &&
							P.shouldRevalidate) ||
						E.hasClientLoader
							? (w = !0)
							: y.add(x.route.id))
				}),
				y.size === 0)
			)
				return []
			let b = kt(e)
			return (
				w &&
					y.size > 0 &&
					b.searchParams.set(
						'_routes',
						t
							.filter((x) => y.has(x.route.id))
							.map((x) => x.route.id)
							.join(','),
					),
				[b.pathname + b.search]
			)
		}, [i, n, a, s, t, e, o]),
		v = d.useMemo(() => ti(u, a), [u, a]),
		h = Ei(u)
	return d.createElement(
		d.Fragment,
		null,
		p.map((y) =>
			d.createElement('link', {
				key: y,
				rel: 'prefetch',
				as: 'fetch',
				href: y,
				...r,
			}),
		),
		v.map((y) =>
			d.createElement('link', { key: y, rel: 'modulepreload', href: y, ...r }),
		),
		h.map(({ key: y, link: w }) => d.createElement('link', { key: y, ...w })),
	)
}
function tl() {
	let { isSpaMode: e, routeModules: t } = Je(),
		{ errors: r, matches: n, loaderData: a } = _t(),
		o = Ee(),
		i = hr(n, r, e),
		l = null
	r && (l = r[i[i.length - 1].route.id])
	let s = [],
		u = null,
		p = []
	for (let v = 0; v < i.length; v++) {
		let h = i[v],
			y = h.route.id,
			w = a[y],
			b = h.params,
			x = t[y],
			E = [],
			P = {
				id: y,
				data: w,
				meta: [],
				params: h.params,
				pathname: h.pathname,
				handle: h.route.handle,
				error: l,
			}
		if (
			((p[v] = P),
			x != null && x.meta
				? (E =
						typeof x.meta == 'function'
							? x.meta({
									data: w,
									params: b,
									location: o,
									matches: p,
									error: l,
								})
							: Array.isArray(x.meta)
								? [...x.meta]
								: x.meta)
				: u && (E = [...u]),
			(E = E || []),
			!Array.isArray(E))
		)
			throw new Error(
				'The route at ' +
					h.route.path +
					` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
			)
		;(P.meta = E), (p[v] = P), (s = [...E]), (u = s)
	}
	return d.createElement(
		d.Fragment,
		null,
		s.flat().map((v) => {
			if (!v) return null
			if ('tagName' in v) {
				let { tagName: h, ...y } = v
				if (!bi(h))
					return (
						console.warn(
							`A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`,
						),
						null
					)
				let w = h
				return d.createElement(w, { key: JSON.stringify(y), ...y })
			}
			if ('title' in v)
				return d.createElement('title', { key: 'title' }, String(v.title))
			if (
				('charset' in v &&
					(v.charSet ?? (v.charSet = v.charset), delete v.charset),
				'charSet' in v && v.charSet != null)
			)
				return typeof v.charSet == 'string'
					? d.createElement('meta', { key: 'charSet', charSet: v.charSet })
					: null
			if ('script:ld+json' in v)
				try {
					let h = JSON.stringify(v['script:ld+json'])
					return d.createElement('script', {
						key: `script:ld+json:${h}`,
						type: 'application/ld+json',
						dangerouslySetInnerHTML: { __html: h },
					})
				} catch {
					return null
				}
			return d.createElement('meta', { key: JSON.stringify(v), ...v })
		}),
	)
}
function bi(e) {
	return typeof e == 'string' && /^(meta|link)$/.test(e)
}
var Lt = !1
function Si(e) {
	let {
			manifest: t,
			serverHandoffString: r,
			isSpaMode: n,
			renderMeta: a,
		} = Je(),
		{ router: o, static: i, staticContext: l } = On(),
		{ matches: s } = _t(),
		u = fr(n)
	a && (a.didRenderScripts = !0)
	let p = hr(s, null, n)
	d.useEffect(() => {
		Lt = !0
	}, [])
	let v = d.useMemo(() => {
			var E
			let b = l
					? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
					: ' ',
				x = i
					? `${(E = t.hmr) != null && E.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${u ? '' : `import ${JSON.stringify(t.url)}`};
${p.map(
	(P, L) =>
		`import * as route${L} from ${JSON.stringify(t.routes[P.route.id].module)};`,
).join(`
`)}
  ${u ? `window.__reactRouterManifest = ${JSON.stringify(yi(t, o), null, 2)};` : ''}
  window.__reactRouterRouteModules = {${p.map((P, L) => `${JSON.stringify(P.route.id)}:route${L}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
					: ' '
			return d.createElement(
				d.Fragment,
				null,
				d.createElement('script', {
					...e,
					suppressHydrationWarning: !0,
					dangerouslySetInnerHTML: Zr(b),
					type: void 0,
				}),
				d.createElement('script', {
					...e,
					suppressHydrationWarning: !0,
					dangerouslySetInnerHTML: Zr(x),
					type: 'module',
					async: !0,
				}),
			)
		}, []),
		h = p
			.map((w) => {
				let b = t.routes[w.route.id]
				return b ? (b.imports || []).concat([b.module]) : []
			})
			.flat(1),
		y = Lt ? [] : t.entry.imports.concat(h)
	return Lt
		? null
		: d.createElement(
				d.Fragment,
				null,
				u
					? null
					: d.createElement('link', {
							rel: 'modulepreload',
							href: t.url,
							crossOrigin: e.crossOrigin,
						}),
				d.createElement('link', {
					rel: 'modulepreload',
					href: t.entry.module,
					crossOrigin: e.crossOrigin,
				}),
				xi(y).map((w) =>
					d.createElement('link', {
						key: w,
						rel: 'modulepreload',
						href: w,
						crossOrigin: e.crossOrigin,
					}),
				),
				v,
			)
}
function xi(e) {
	return [...new Set(e)]
}
function Li(...e) {
	return (t) => {
		e.forEach((r) => {
			typeof r == 'function' ? r(t) : r != null && (r.current = t)
		})
	}
}
var Nn =
	typeof window < 'u' &&
	typeof window.document < 'u' &&
	typeof window.document.createElement < 'u'
try {
	Nn && (window.__reactRouterVersion = '7.1.1')
} catch {}
var $n = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	In = d.forwardRef(function (
		{
			onClick: t,
			discover: r = 'render',
			prefetch: n = 'none',
			relative: a,
			reloadDocument: o,
			replace: i,
			state: l,
			target: s,
			to: u,
			preventScrollReset: p,
			viewTransition: v,
			...h
		},
		y,
	) {
		let { basename: w } = d.useContext(de),
			b = typeof u == 'string' && $n.test(u),
			x,
			E = !1
		if (typeof u == 'string' && b && ((x = u), Nn))
			try {
				let B = new URL(window.location.href),
					K = u.startsWith('//') ? new URL(B.protocol + u) : new URL(u),
					le = ce(K.pathname, w)
				K.origin === B.origin && le != null
					? (u = le + K.search + K.hash)
					: (E = !0)
			} catch {
				ne(
					!1,
					`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
				)
			}
		let P = So(u, { relative: a }),
			[L, D, f] = wi(n, h),
			M = Mi(u, {
				replace: i,
				state: l,
				target: s,
				preventScrollReset: p,
				relative: a,
				viewTransition: v,
			})
		function U(B) {
			t && t(B), B.defaultPrevented || M(B)
		}
		let I = d.createElement('a', {
			...h,
			...f,
			href: x || P,
			onClick: E || o ? t : U,
			ref: Li(y, D),
			target: s,
			'data-discover': !b && r === 'render' ? 'true' : void 0,
		})
		return L && !b
			? d.createElement(d.Fragment, null, I, d.createElement(An, { page: P }))
			: I
	})
In.displayName = 'Link'
var Ci = d.forwardRef(function (
	{
		'aria-current': t = 'page',
		caseSensitive: r = !1,
		className: n = '',
		end: a = !1,
		style: o,
		to: i,
		viewTransition: l,
		children: s,
		...u
	},
	p,
) {
	let v = it(i, { relative: u.relative }),
		h = Ee(),
		y = d.useContext(Ve),
		{ navigator: w, basename: b } = d.useContext(de),
		x = y != null && Ii(v) && l === !0,
		E = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
		P = h.pathname,
		L =
			y && y.navigation && y.navigation.location
				? y.navigation.location.pathname
				: null
	r ||
		((P = P.toLowerCase()),
		(L = L ? L.toLowerCase() : null),
		(E = E.toLowerCase())),
		L && b && (L = ce(L, b) || L)
	const D = E !== '/' && E.endsWith('/') ? E.length - 1 : E.length
	let f = P === E || (!a && P.startsWith(E) && P.charAt(D) === '/'),
		M =
			L != null &&
			(L === E || (!a && L.startsWith(E) && L.charAt(E.length) === '/')),
		U = { isActive: f, isPending: M, isTransitioning: x },
		I = f ? t : void 0,
		B
	typeof n == 'function'
		? (B = n(U))
		: (B = [
				n,
				f ? 'active' : null,
				M ? 'pending' : null,
				x ? 'transitioning' : null,
			]
				.filter(Boolean)
				.join(' '))
	let K = typeof o == 'function' ? o(U) : o
	return d.createElement(
		In,
		{
			...u,
			'aria-current': I,
			className: B,
			ref: p,
			style: K,
			to: i,
			viewTransition: l,
		},
		typeof s == 'function' ? s(U) : s,
	)
})
Ci.displayName = 'NavLink'
var Pi = d.forwardRef(
	(
		{
			discover: e = 'render',
			fetcherKey: t,
			navigate: r,
			reloadDocument: n,
			replace: a,
			state: o,
			method: i = bt,
			action: l,
			onSubmit: s,
			relative: u,
			preventScrollReset: p,
			viewTransition: v,
			...h
		},
		y,
	) => {
		let w = Oi(),
			b = Ai(l, { relative: u }),
			x = i.toLowerCase() === 'get' ? 'get' : 'post',
			E = typeof l == 'string' && $n.test(l),
			P = (L) => {
				if ((s && s(L), L.defaultPrevented)) return
				L.preventDefault()
				let D = L.nativeEvent.submitter,
					f = (D == null ? void 0 : D.getAttribute('formmethod')) || i
				w(D || L.currentTarget, {
					fetcherKey: t,
					method: f,
					navigate: r,
					replace: a,
					state: o,
					relative: u,
					preventScrollReset: p,
					viewTransition: v,
				})
			}
		return d.createElement('form', {
			ref: y,
			method: x,
			action: b,
			onSubmit: n ? s : P,
			...h,
			'data-discover': !E && e === 'render' ? 'true' : void 0,
		})
	},
)
Pi.displayName = 'Form'
function Ti({ getKey: e, storageKey: t, ...r }) {
	let n = d.useContext(Ot),
		{ basename: a } = d.useContext(de),
		o = Ee(),
		i = vn()
	Ni({ getKey: e, storageKey: t })
	let l = d.useMemo(() => {
		if (!n || !e) return null
		let u = Zt(o, i, a, e)
		return u !== o.key ? u : null
	}, [])
	if (!n || n.isSpaMode) return null
	let s = ((u, p) => {
		if (!window.history.state || !window.history.state.key) {
			let v = Math.random().toString(32).slice(2)
			window.history.replaceState({ key: v }, '')
		}
		try {
			let h = JSON.parse(sessionStorage.getItem(u) || '{}')[
				p || window.history.state.key
			]
			typeof h == 'number' && window.scrollTo(0, h)
		} catch (v) {
			console.error(v), sessionStorage.removeItem(u)
		}
	}).toString()
	return d.createElement('script', {
		...r,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: {
			__html: `(${s})(${JSON.stringify(t || Qt)}, ${JSON.stringify(l)})`,
		},
	})
}
Ti.displayName = 'ScrollRestoration'
function Fn(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function mr(e) {
	let t = d.useContext(je)
	return V(t, Fn(e)), t
}
function Di(e) {
	let t = d.useContext(Ve)
	return V(t, Fn(e)), t
}
function Mi(
	e,
	{
		target: t,
		replace: r,
		state: n,
		preventScrollReset: a,
		relative: o,
		viewTransition: i,
	} = {},
) {
	let l = xo(),
		s = Ee(),
		u = it(e, { relative: o })
	return d.useCallback(
		(p) => {
			if (Jo(p, t)) {
				p.preventDefault()
				let v = r !== void 0 ? r : ke(s) === ke(u)
				l(e, {
					replace: v,
					state: n,
					preventScrollReset: a,
					relative: o,
					viewTransition: i,
				})
			}
		},
		[s, l, u, r, n, t, e, a, o, i],
	)
}
var ki = 0,
	_i = () => `__${String(++ki)}__`
function Oi() {
	let { router: e } = mr('useSubmit'),
		{ basename: t } = d.useContext(de),
		r = $o()
	return d.useCallback(
		async (n, a = {}) => {
			let { action: o, method: i, encType: l, formData: s, body: u } = Ko(n, t)
			if (a.navigate === !1) {
				let p = a.fetcherKey || _i()
				await e.fetch(p, r, a.action || o, {
					preventScrollReset: a.preventScrollReset,
					formData: s,
					body: u,
					formMethod: a.method || i,
					formEncType: a.encType || l,
					flushSync: a.flushSync,
				})
			} else
				await e.navigate(a.action || o, {
					preventScrollReset: a.preventScrollReset,
					formData: s,
					body: u,
					formMethod: a.method || i,
					formEncType: a.encType || l,
					replace: a.replace,
					state: a.state,
					fromRouteId: r,
					flushSync: a.flushSync,
					viewTransition: a.viewTransition,
				})
		},
		[e, t, r],
	)
}
function Ai(e, { relative: t } = {}) {
	let { basename: r } = d.useContext(de),
		n = d.useContext(me)
	V(n, 'useFormAction must be used inside a RouteContext')
	let [a] = n.matches.slice(-1),
		o = { ...it(e || '.', { relative: t }) },
		i = Ee()
	if (e == null) {
		o.search = i.search
		let l = new URLSearchParams(o.search),
			s = l.getAll('index')
		if (s.some((p) => p === '')) {
			l.delete('index'), s.filter((v) => v).forEach((v) => l.append('index', v))
			let p = l.toString()
			o.search = p ? `?${p}` : ''
		}
	}
	return (
		(!e || e === '.') &&
			a.route.index &&
			(o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
		r !== '/' && (o.pathname = o.pathname === '/' ? r : we([r, o.pathname])),
		ke(o)
	)
}
var Qt = 'react-router-scroll-positions',
	Et = {}
function Zt(e, t, r, n) {
	let a = null
	return (
		n &&
			(r !== '/'
				? (a = n({ ...e, pathname: ce(e.pathname, r) || e.pathname }, t))
				: (a = n(e, t))),
		a == null && (a = e.key),
		a
	)
}
function Ni({ getKey: e, storageKey: t } = {}) {
	let { router: r } = mr('useScrollRestoration'),
		{ restoreScrollPosition: n, preventScrollReset: a } = Di(
			'useScrollRestoration',
		),
		{ basename: o } = d.useContext(de),
		i = Ee(),
		l = vn(),
		s = Io()
	d.useEffect(
		() => (
			(window.history.scrollRestoration = 'manual'),
			() => {
				window.history.scrollRestoration = 'auto'
			}
		),
		[],
	),
		$i(
			d.useCallback(() => {
				if (s.state === 'idle') {
					let u = Zt(i, l, o, e)
					Et[u] = window.scrollY
				}
				try {
					sessionStorage.setItem(t || Qt, JSON.stringify(Et))
				} catch (u) {
					ne(
						!1,
						`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`,
					)
				}
				window.history.scrollRestoration = 'auto'
			}, [s.state, e, o, i, l, t]),
		),
		typeof document < 'u' &&
			(d.useLayoutEffect(() => {
				try {
					let u = sessionStorage.getItem(t || Qt)
					u && (Et = JSON.parse(u))
				} catch {}
			}, [t]),
			d.useLayoutEffect(() => {
				let u =
					r == null
						? void 0
						: r.enableScrollRestoration(
								Et,
								() => window.scrollY,
								e ? (p, v) => Zt(p, v, o, e) : void 0,
							)
				return () => u && u()
			}, [r, o, e]),
			d.useLayoutEffect(() => {
				if (n !== !1) {
					if (typeof n == 'number') {
						window.scrollTo(0, n)
						return
					}
					if (i.hash) {
						let u = document.getElementById(decodeURIComponent(i.hash.slice(1)))
						if (u) {
							u.scrollIntoView()
							return
						}
					}
					a !== !0 && window.scrollTo(0, 0)
				}
			}, [i, n, a]))
}
function $i(e, t) {
	let { capture: r } = {}
	d.useEffect(() => {
		let n = r != null ? { capture: r } : void 0
		return (
			window.addEventListener('pagehide', e, n),
			() => {
				window.removeEventListener('pagehide', e, n)
			}
		)
	}, [e, r])
}
function Ii(e, t = {}) {
	let r = d.useContext(or)
	V(
		r != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
	)
	let { basename: n } = mr('useViewTransitionState'),
		a = it(e, { relative: t.relative })
	if (!r.isTransitioning) return !1
	let o = ce(r.currentLocation.pathname, n) || r.currentLocation.pathname,
		i = ce(r.nextLocation.pathname, n) || r.nextLocation.pathname
	return Pt(a.pathname, i) != null || Pt(a.pathname, o) != null
}
new TextEncoder()
function rl(e) {
	if (!e) return null
	let t = Object.entries(e),
		r = {}
	for (let [n, a] of t)
		if (a && a.__type === 'RouteErrorResponse')
			r[n] = new Pe(a.status, a.statusText, a.data, a.internal === !0)
		else if (a && a.__type === 'Error') {
			if (a.__subType) {
				let o = window[a.__subType]
				if (typeof o == 'function')
					try {
						let i = new o(a.message)
						;(i.stack = a.stack), (r[n] = i)
					} catch {}
			}
			if (r[n] == null) {
				let o = new Error(a.message)
				;(o.stack = a.stack), (r[n] = o)
			}
		} else r[n] = a
	return r
}
export {
	Ot as F,
	el as L,
	tl as M,
	Gi as O,
	Ki as R,
	Ti as S,
	d as a,
	Ji as b,
	dr as c,
	si as d,
	rl as e,
	Bi as f,
	Hi as g,
	Vi as h,
	V as i,
	Xi as j,
	Qi as k,
	qi as l,
	Le as m,
	ji as n,
	Si as o,
	zi as p,
	Yi as q,
	aa as r,
	hi as s,
	Wi as t,
	Zi as u,
	vn as v,
}
