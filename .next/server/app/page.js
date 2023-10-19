;(() => {
  var e = {}
  ;(e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      5403: (e) => {
        'use strict'
        e.exports = require('next/dist/client/components/request-async-storage.external')
      },
      4749: (e) => {
        'use strict'
        e.exports = require('next/dist/client/components/static-generation-async-storage.external')
      },
      399: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      5528: (e) => {
        'use strict'
        e.exports = require('next/dist\\client\\components\\action-async-storage.external.js')
      },
      1877: (e) => {
        'use strict'
        e.exports = require('next/dist\\client\\components\\request-async-storage.external.js')
      },
      5319: (e) => {
        'use strict'
        e.exports = require('next/dist\\client\\components\\static-generation-async-storage.external.js')
      },
      1017: (e) => {
        'use strict'
        e.exports = require('path')
      },
      7310: (e) => {
        'use strict'
        e.exports = require('url')
      },
      5983: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => _,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => x,
            tree: () => c,
          })
        var a = r(3137),
          s = r(4647),
          n = r(4183),
          i = r.n(n),
          o = r(1775),
          p = {}
        for (let e in o)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (p[e] = () => o[e])
        r.d(t, p)
        let l = a.AppPageRouteModule,
          c = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 4165)),
                    'C:\\tdw-gcalcada\\app\\page.tsx',
                  ],
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(r.bind(r, 7481))).default(
                          e,
                        ),
                    ],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 9958)),
                'C:\\tdw-gcalcada\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.t.bind(r, 1918, 23)),
                'next/dist/client/components/not-found-error',
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(r.bind(r, 7481))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          d = ['C:\\tdw-gcalcada\\app\\page.tsx'],
          u = '/page',
          _ = { require: r, loadChunk: () => Promise.resolve() },
          x = new l({
            definition: {
              kind: s.x.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          })
      },
      8850: () => {},
      4165: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => Home })
        var a = r(8144)
        function Home() {
          return a.jsx('h2', { children: 'Em sConstrucao' })
        }
        r(7272)
      },
      7481: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => __WEBPACK_DEFAULT_EXPORT__ })
        var a = r(6885)
        let __WEBPACK_DEFAULT_EXPORT__ = (e) => {
          let t = (0, a.fillMetadataSegment)('.', e.params, 'favicon.ico')
          return [{ type: 'image/x-icon', sizes: '16x16', url: t + '' }]
        }
      },
      7272: () => {},
    })
  var t = require('../webpack-runtime.js')
  t.C(e)
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [334, 770, 60], () => __webpack_exec__(5983))
  module.exports = r
})()
