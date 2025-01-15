# CSS Bundle Repro

## Vite Config

```ts
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
```

## Building the app

```sh
$ pnpm build

vite v6.0.7 building for production...
✓ 43 modules transformed.
build/client/.vite/manifest.json                  1.69 kB │ gzip:  0.45 kB
build/client/assets/app-Sh1IY-Fl.css              0.03 kB │ gzip:  0.05 kB
build/client/assets/home-ByeqEsBJ.js              0.18 kB │ gzip:  0.17 kB
build/client/assets/with-props-DqyziH9M.js        0.22 kB │ gzip:  0.19 kB
build/client/assets/root-DZjrSBux.js              0.57 kB │ gzip:  0.37 kB
build/client/assets/chunk-K6AXKMTT-Uf-Rxg3v.js  105.54 kB │ gzip: 35.79 kB
build/client/assets/entry.client-nW39Dl5L.js    179.29 kB │ gzip: 56.96 kB
✓ built in 502ms
vite v6.0.7 building SSR bundle for production...
✓ 8 modules transformed.
build/server/.vite/manifest.json      0.38 kB
build/server/assets/app-1IW71QWL.css  0.01 kB
build/server/index.js                 5.01 kB

✓ 1 asset moved from React Router server build to client assets.
build/client/assets/app-1IW71QWL.css
```

## CSS Comparison

### Input `app/app.css`

```css
* {
  inset: 0;
}
```

### Server Output `build/client/assets/app-1IW71QWL.css`

```css
* {
  inset: 0;
}
```

### Client Output `build/client/assets/app-Sh1IY-Fl.css`

```css
* {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

## Running the app

The initial app HTML response includes a reference to the CSS bundle from the SSR build.

```html
<link rel="stylesheet" href="/assets/app-1IW71QWL.css" />
```

The only reference to the Server CSS bundle in the built Server JS:

```js
// build/server/index.js
const stylesheet = '/assets/app-1IW71QWL.css'

const links = () => [
  {
    rel: 'stylesheet',
    href: stylesheet,
  },
]
```

The only reference to the Client CSS bundle in the Client Root JS:

```js
// build/client/assets/root-DZjrSBux.js
const x = '/assets/app-Sh1IY-Fl.css'
f = () => [{ rel: 'stylesheet', href: x }]
```

There is a hydration error on start

```text
Uncaught Error: Minified React error #418; visit https://react.dev/errors/418?args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at ou (entry.client-nW39Dl5L.js:2601:11)
    at vs (entry.client-nW39Dl5L.js:5493:12)
    at ps (entry.client-nW39Dl5L.js:8287:11)
    at Ey (entry.client-nW39Dl5L.js:8284:33)
    at ry (entry.client-nW39Dl5L.js:8269:5)
    at js (entry.client-nW39Dl5L.js:7940:12)
    at Is (entry.client-nW39Dl5L.js:8694:8)
    at MessagePort.C (entry.client-nW39Dl5L.js:148:22)
```
