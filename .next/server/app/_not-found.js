'use strict'
;(() => {
  var e = {}
  ;(e.id = 165),
    (e.ids = [165]),
    (e.modules = {
      5403: (e) => {
        e.exports = require('next/dist/client/components/request-async-storage.external')
      },
      4749: (e) => {
        e.exports = require('next/dist/client/components/static-generation-async-storage.external')
      },
      399: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      5528: (e) => {
        e.exports = require('next/dist\\client\\components\\action-async-storage.external.js')
      },
      1877: (e) => {
        e.exports = require('next/dist\\client\\components\\request-async-storage.external.js')
      },
      5319: (e) => {
        e.exports = require('next/dist\\client\\components\\static-generation-async-storage.external.js')
      },
      6541: (e, t, n) => {
        n.r(t),
          n.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => x,
            originalPathname: () => c,
            pages: () => u,
            routeModule: () => _,
            tree: () => p,
          })
        var r = n(3137),
          o = n(4647),
          a = n(4183),
          s = n.n(a),
          i = n(1775),
          l = {}
        for (let e in i)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (l[e] = () => i[e])
        n.d(t, l)
        let d = r.AppPageRouteModule,
          p = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(n.t.bind(n, 1918, 23)),
                    'next/dist/client/components/not-found-error',
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 9958)),
                'C:\\tdw-gcalcada\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(n.t.bind(n, 1918, 23)),
                'next/dist/client/components/not-found-error',
              ],
            },
          ],
          u = [],
          c = '/_not-found',
          x = { require: n, loadChunk: () => Promise.resolve() },
          _ = new d({
            definition: {
              kind: o.x.APP_PAGE,
              page: '/_not-found',
              pathname: '/_not-found',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
          })
      },
    })
  var t = require('../webpack-runtime.js')
  t.C(e)
  var __webpack_exec__ = (e) => t((t.s = e)),
    n = t.X(0, [336, 60], () => __webpack_exec__(6541))
  module.exports = n
})()
