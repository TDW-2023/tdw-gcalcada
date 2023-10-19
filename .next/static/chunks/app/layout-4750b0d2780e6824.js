;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9651: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 3061))
    },
    3061: function (e, t, s) {
      'use strict'
      s.r(t),
        s.d(t, {
          default: function () {
            return RootLayout
          },
        })
      var a = s(7437),
        r = s(2265)
      s(8877)
      var i = s(1396),
        n = s.n(i)
      function RootLayout(e) {
        let { children: t } = e,
          [s, i] = (0, r.useState)(!1)
        return (0, a.jsxs)('html', {
          lang: 'en',
          children: [
            (0, a.jsx)('head', {}),
            (0, a.jsxs)('body', {
              className: s ? 'dark' : 'light',
              children: [
                (0, a.jsx)('nav', {
                  className: 'bg-white',
                  children: (0, a.jsx)('div', {
                    className: 'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8',
                    children: (0, a.jsx)('div', {
                      className:
                        'relative flex h-40 items-center justify-between',
                      children: (0, a.jsxs)('div', {
                        className:
                          'flex flex-1 items-center justify-center sm:items-stretch sm:justify-start',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'flex flex-shrink-0 items-center',
                            children: (0, a.jsxs)(n(), {
                              href: '/',
                              children: [
                                ' ',
                                (0, a.jsx)('img', {
                                  className: 'h-20 w-20',
                                  src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
                                  alt: 'Man City',
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)('div', {
                            className: 'hidden sm:ml-20 p-7 sm:block',
                            children: (0, a.jsxs)('div', {
                              className: 'flex space-x-8',
                              children: [
                                (0, a.jsx)(n(), {
                                  href: '/',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Home',
                                }),
                                (0, a.jsx)(n(), {
                                  href: '/Team',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Team',
                                }),
                                (0, a.jsx)('a', {
                                  href: '#',
                                  className:
                                    'text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-3xl font-medium',
                                  children: 'Projects',
                                }),
                                (0, a.jsx)('a', {
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
                (0, a.jsx)('main', { children: t }),
              ],
            }),
          ],
        })
      }
    },
    8877: function () {},
  },
  function (e) {
    e.O(0, [176, 971, 864, 744], function () {
      return e((e.s = 9651))
    }),
      (_N_E = e.O())
  },
])
