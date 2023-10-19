;(() => {
  var e = {}
  ;(e.id = 429),
    (e.ids = [429]),
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
      1255: (e, t, a) => {
        'use strict'
        a.r(t),
          a.d(t, {
            GlobalError: () => r.a,
            __next_app__: () => m,
            originalPathname: () => g,
            pages: () => p,
            routeModule: () => h,
            tree: () => c,
          })
        var s = a(3137),
          i = a(4647),
          n = a(4183),
          r = a.n(n),
          o = a(1775),
          l = {}
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
            ].indexOf(e) && (l[e] = () => o[e])
        a.d(t, l)
        let d = s.AppPageRouteModule,
          c = [
            '',
            {
              children: [
                'Team',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(a.bind(a, 461)),
                        'C:\\tdw-gcalcada\\app\\Team\\page.tsx',
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(a.bind(a, 7481))).default(
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
                () => Promise.resolve().then(a.bind(a, 9958)),
                'C:\\tdw-gcalcada\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(a.t.bind(a, 1918, 23)),
                'next/dist/client/components/not-found-error',
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(a.bind(a, 7481))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          p = ['C:\\tdw-gcalcada\\app\\Team\\page.tsx'],
          g = '/Team/page',
          m = { require: a, loadChunk: () => Promise.resolve() },
          h = new d({
            definition: {
              kind: i.x.APP_PAGE,
              page: '/Team/page',
              pathname: '/Team',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          })
      },
      8056: (e, t, a) => {
        Promise.resolve().then(a.t.bind(a, 5251, 23))
      },
      461: (e, t, a) => {
        'use strict'
        a.r(t), a.d(t, { default: () => index })
        var s = a(8144),
          i = a(808),
          n = a.n(i),
          r = a(5042),
          o = a.n(r)
        function index() {
          return s.jsx('main', {
            className:
              'flex min-h-screen flex-col items-baseline justify-between p-24',
            children: s.jsx('div', {
              className: 'flex flex-wrap -mx-4',
              children: n().map((e, t) =>
                s.jsx(
                  'div',
                  {
                    className: 'pl-20 pt-4 mt-10 justify-center',
                    children: (0, s.jsxs)('div', {
                      className: 'max-w-sm rounded overflow-hidden shadow-lg',
                      children: [
                        s.jsx(o(), {
                          className: 'w-96 h-96',
                          src: e.image,
                          alt: e.name,
                        }),
                        (0, s.jsxs)('div', {
                          className: 'px-6 py-4',
                          children: [
                            s.jsx('div', {
                              className: 'font-bold text-xl mb-2',
                              children: e.name,
                            }),
                            s.jsx('p', {
                              className: 'text-gray-700 text-base',
                              children: e.description,
                            }),
                          ],
                        }),
                        s.jsx('div', {
                          className: 'px-6 pt-4 pb-2',
                          children: s.jsx('div', {
                            className: 'flex flex-wrap',
                            children: e.tags.map((e, t) =>
                              s.jsx(
                                'span',
                                {
                                  className:
                                    'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2',
                                  children: e,
                                },
                                t,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                  },
                  t,
                ),
              ),
            }),
          })
        }
      },
      808: (e) => {
        'use strict'
        e.exports = [
          {
            name: 'Bernardo Silva',
            description:
              'Bernardo Mota Veiga de Carvalho e Silva (born 10 August 1994), known as Bernardo Silva or simply Bernardo, is a Portuguese football player. He plays as an attacking midfielder or a winger for Manchester City and the Portugal national team.',
            tags: ['#futebol', '#Portugal', '#ManCity'],
            image:
              'https://pbs.twimg.com/media/F3q_NnYWIAAITYH?format=jpg&name=large',
          },
          {
            name: 'Erling Haaland',
            description:
              'Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box. In his debut Premier League season, Haaland broke the record for the most goals scored by a player in a single season, with 36 ',
            tags: ['#Man City', '#futebol'],
            image:
              'https://s2-ge.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg',
          },
          {
            name: 'Erling Haaland',
            description:
              'Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box. In his debut Premier League season, Haaland broke the record for the most goals scored by a player in a single season, with 36 ',
            tags: ['#Man City', '#futebol'],
            image:
              'https://s2-ge.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg',
          },
          {
            name: 'Erling Haaland',
            description:
              'Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box. In his debut Premier League season, Haaland broke the record for the most goals scored by a player in a single season, with 36 ',
            tags: ['#Man City', '#futebol'],
            image:
              'https://s2-ge.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg',
          },
          {
            name: 'Erling Haaland',
            description:
              'Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box. In his debut Premier League season, Haaland broke the record for the most goals scored by a player in a single season, with 36 ',
            tags: ['#Man City', '#futebol'],
            image:
              'https://s2-ge.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg',
          },
          {
            name: 'Erling Haaland',
            description:
              'Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box. In his debut Premier League season, Haaland broke the record for the most goals scored by a player in a single season, with 36 ',
            tags: ['#Man City', '#futebol'],
            image:
              'https://s2-ge.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg',
          },
        ]
      },
      7481: (e, t, a) => {
        'use strict'
        a.r(t), a.d(t, { default: () => __WEBPACK_DEFAULT_EXPORT__ })
        var s = a(6885)
        let __WEBPACK_DEFAULT_EXPORT__ = (e) => {
          let t = (0, s.fillMetadataSegment)('.', e.params, 'favicon.ico')
          return [{ type: 'image/x-icon', sizes: '16x16', url: t + '' }]
        }
      },
    })
  var t = require('../../webpack-runtime.js')
  t.C(e)
  var __webpack_exec__ = (e) => t((t.s = e)),
    a = t.X(0, [336, 770, 42, 60], () => __webpack_exec__(1255))
  module.exports = a
})()
