'use strict'
;(exports.id = 42),
  (exports.ids = [42]),
  (exports.modules = {
    8141: (e, t, i) => {
      let { createProxy: r } = i(7536)
      e.exports = r(
        'C:\\tdw-gcalcada\\node_modules\\next\\dist\\client\\image-component.js',
      )
    },
    1078: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImgProps', {
          enumerable: !0,
          get: function () {
            return getImgProps
          },
        }),
        i(6179)
      let r = i(3986),
        n = i(145)
      function isStaticRequire(e) {
        return void 0 !== e.default
      }
      function getInt(e) {
        return void 0 === e
          ? e
          : 'number' == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : 'string' == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN
      }
      function getImgProps(e, t) {
        var i
        let o,
          a,
          s,
          {
            src: l,
            sizes: u,
            unoptimized: d = !1,
            priority: c = !1,
            loading: g,
            className: f,
            quality: m,
            width: p,
            height: h,
            fill: b = !1,
            style: w,
            onLoad: v,
            onLoadingComplete: y,
            placeholder: S = 'empty',
            blurDataURL: _,
            fetchPriority: x,
            layout: I,
            objectFit: j,
            objectPosition: P,
            lazyBoundary: O,
            lazyRoot: C,
            ...z
          } = e,
          { imgConf: E, showAltText: M, blurComplete: R, defaultLoader: k } = t,
          D = E || n.imageConfigDefault
        if ('allSizes' in D) o = D
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t)
          o = { ...D, allSizes: e, deviceSizes: t }
        }
        let L = z.loader || k
        delete z.loader, delete z.srcSet
        let A = '__next_img_default' in L
        if (A) {
          if ('custom' === o.loader)
            throw Error(
              'Image with src "' +
                l +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            )
        } else {
          let e = L
          L = (t) => {
            let { config: i, ...r } = t
            return e(r)
          }
        }
        if (I) {
          'fill' === I && (b = !0)
          let e = {
            intrinsic: { maxWidth: '100%', height: 'auto' },
            responsive: { width: '100%', height: 'auto' },
          }[I]
          e && (w = { ...w, ...e })
          let t = { responsive: '100vw', fill: '100vw' }[I]
          t && !u && (u = t)
        }
        let B = '',
          G = getInt(p),
          N = getInt(h)
        if (
          'object' == typeof (i = l) &&
          (isStaticRequire(i) || void 0 !== i.src)
        ) {
          let e = isStaticRequire(l) ? l.default : l
          if (!e.src)
            throw Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                JSON.stringify(e),
            )
          if (!e.height || !e.width)
            throw Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                JSON.stringify(e),
            )
          if (
            ((a = e.blurWidth),
            (s = e.blurHeight),
            (_ = _ || e.blurDataURL),
            (B = e.src),
            !b)
          ) {
            if (G || N) {
              if (G && !N) {
                let t = G / e.width
                N = Math.round(e.height * t)
              } else if (!G && N) {
                let t = N / e.height
                G = Math.round(e.width * t)
              }
            } else (G = e.width), (N = e.height)
          }
        }
        let F = !c && ('lazy' === g || void 0 === g)
        ;(!(l = 'string' == typeof l ? l : B) ||
          l.startsWith('data:') ||
          l.startsWith('blob:')) &&
          ((d = !0), (F = !1)),
          o.unoptimized && (d = !0),
          A && l.endsWith('.svg') && !o.dangerouslyAllowSVG && (d = !0),
          c && (x = 'high')
        let W = getInt(m),
          q = Object.assign(
            b
              ? {
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: P,
                }
              : {},
            M ? {} : { color: 'transparent' },
            w,
          ),
          U =
            R || 'empty' === S
              ? null
              : 'blur' === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: N,
                  blurWidth: a,
                  blurHeight: s,
                  blurDataURL: _ || '',
                  objectFit: q.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          V = U
            ? {
                backgroundSize: q.objectFit || 'cover',
                backgroundPosition: q.objectPosition || '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: U,
              }
            : {},
          T = (function (e) {
            let {
              config: t,
              src: i,
              unoptimized: r,
              width: n,
              quality: o,
              sizes: a,
              loader: s,
            } = e
            if (r) return { src: i, srcSet: void 0, sizes: void 0 }
            let { widths: l, kind: u } = (function (e, t, i) {
                let { deviceSizes: r, allSizes: n } = e
                if (i) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = []
                  for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]))
                  if (t.length) {
                    let e = 0.01 * Math.min(...t)
                    return { widths: n.filter((t) => t >= r[0] * e), kind: 'w' }
                  }
                  return { widths: n, kind: 'w' }
                }
                if ('number' != typeof t) return { widths: r, kind: 'w' }
                let o = [
                  ...new Set(
                    [t, 2 * t].map(
                      (e) => n.find((t) => t >= e) || n[n.length - 1],
                    ),
                  ),
                ]
                return { widths: o, kind: 'x' }
              })(t, n, a),
              d = l.length - 1
            return {
              sizes: a || 'w' !== u ? a : '100vw',
              srcSet: l
                .map(
                  (e, r) =>
                    s({ config: t, src: i, quality: o, width: e }) +
                    ' ' +
                    ('w' === u ? e : r + 1) +
                    u,
                )
                .join(', '),
              src: s({ config: t, src: i, quality: o, width: l[d] }),
            }
          })({
            config: o,
            src: l,
            unoptimized: d,
            width: G,
            quality: W,
            sizes: u,
            loader: L,
          }),
          J = {
            ...z,
            loading: F ? 'lazy' : g,
            fetchPriority: x,
            width: G,
            height: N,
            decoding: 'async',
            className: f,
            style: { ...q, ...V },
            sizes: T.sizes,
            srcSet: T.srcSet,
            src: T.src,
          },
          Y = { unoptimized: d, priority: c, placeholder: S, fill: b }
        return { props: J, meta: Y }
      }
    },
    3986: (e, t) => {
      function getImageBlurSvg(e) {
        let {
            widthInt: t,
            heightInt: i,
            blurWidth: r,
            blurHeight: n,
            blurDataURL: o,
            objectFit: a,
          } = e,
          s = r ? 40 * r : t,
          l = n ? 40 * n : i,
          u = s && l ? "viewBox='0 0 " + s + ' ' + l + "'" : ''
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? 'none'
            : 'contain' === a
            ? 'xMidYMid'
            : 'cover' === a
            ? 'xMidYMid slice'
            : 'none') +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return getImageBlurSvg
          },
        })
    },
    145: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] })
        })(t, {
          VALID_LOADERS: function () {
            return i
          },
          imageConfigDefault: function () {
            return r
          },
        })
      let i = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          loaderFile: '',
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ['image/webp'],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: 'inline',
          remotePatterns: [],
          unoptimized: !1,
        }
    },
    2155: (e, t, i) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] })
        })(t, {
          default: function () {
            return l
          },
          unstable_getImgProps: function () {
            return unstable_getImgProps
          },
        })
      let r = i(1974),
        n = i(1078),
        o = i(6179),
        a = i(8141),
        s = r._(i(4318)),
        unstable_getImgProps = (e) => {
          ;(0, o.warnOnce)(
            'Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.',
          )
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: '/_next/image/',
              loader: 'default',
              dangerouslyAllowSVG: !1,
              unoptimized: !0,
            },
          })
          for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e]
          return { props: t }
        },
        l = a.Image
    },
    4318: (e, t) => {
      function defaultLoader(e) {
        let { config: t, src: i, width: r, quality: n } = e
        return (
          t.path +
          '?url=' +
          encodeURIComponent(i) +
          '&w=' +
          r +
          '&q=' +
          (n || 75)
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return i
          },
        }),
        (defaultLoader.__next_img_default = !0)
      let i = defaultLoader
    },
    6179: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'warnOnce', {
          enumerable: !0,
          get: function () {
            return warnOnce
          },
        })
      let warnOnce = (e) => {}
    },
    5042: (e, t, i) => {
      e.exports = i(2155)
    },
  })
