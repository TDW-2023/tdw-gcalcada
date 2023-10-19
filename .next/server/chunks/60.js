;(exports.id = 60),
  (exports.ids = [60]),
  (exports.modules = {
    2872: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 40))
    },
    2750: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 9918, 23)),
        Promise.resolve().then(s.t.bind(s, 2057, 23)),
        Promise.resolve().then(s.t.bind(s, 6148, 23)),
        Promise.resolve().then(s.t.bind(s, 8359, 23)),
        Promise.resolve().then(s.t.bind(s, 1860, 23)),
        Promise.resolve().then(s.t.bind(s, 2427, 23))
    },
    40: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { default: () => RootLayout })
      var r = s(80),
        a = s(9885)
      s(4047)
      var i = s(1440),
        l = s.n(i)
      function RootLayout({ children: e }) {
        let [t, s] = (0, a.useState)(!1)
        return (0, r.jsxs)('html', {
          lang: 'en',
          children: [
            r.jsx('head', {}),
            (0, r.jsxs)('body', {
              className: t ? 'dark' : 'light',
              children: [
                r.jsx('nav', {
                  className: 'bg-white',
                  children: r.jsx('div', {
                    className: 'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8',
                    children: r.jsx('div', {
                      className:
                        'relative flex h-40 items-center justify-between',
                      children: (0, r.jsxs)('div', {
                        className:
                          'flex flex-1 items-center justify-center sm:items-stretch sm:justify-start',
                        children: [
                          r.jsx('div', {
                            className: 'flex flex-shrink-0 items-center',
                            children: (0, r.jsxs)(l(), {
                              href: '/',
                              children: [
                                ' ',
                                r.jsx('img', {
                                  className: 'h-20 w-20',
                                  src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
                                  alt: 'Man City',
                                }),
                              ],
                            }),
                          }),
                          r.jsx('div', {
                            className: 'hidden sm:ml-20 p-7 sm:block',
                            children: (0, r.jsxs)('div', {
                              className: 'flex space-x-8',
                              children: [
                                r.jsx(l(), {
                                  href: '/',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Home',
                                }),
                                r.jsx(l(), {
                                  href: '/Team',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Team',
                                }),
                                r.jsx('a', {
                                  href: '#',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Projects',
                                }),
                                r.jsx('a', {
                                  href: '#',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Calendar',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                r.jsx('main', { children: e }),
              ],
            }),
          ],
        })
      }
    },
    9958: (e, t, s) => {
      'use strict'
      s.r(t),
        s.d(t, { $$typeof: () => l, __esModule: () => i, default: () => n })
      var r = s(7536)
      let a = (0, r.createProxy)(String.raw`C:\tdw-gcalcada\app\layout.tsx`),
        { __esModule: i, $$typeof: l } = a,
        d = a.default,
        n = d
    },
    4047: () => {},
  })
