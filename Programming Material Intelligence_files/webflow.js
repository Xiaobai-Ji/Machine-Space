/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }
  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var i in t) r.d(n, i, function (e) {
        return t[e]
      }.bind(null, i));
    return n
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "", r(r.s = 156)
}([function (t, e, r) {
  var n = r(8),
    i = r(119).f,
    a = r(21),
    s = r(120),
    o = r(73),
    l = r(232),
    h = r(236);
  t.exports = function (t, e) {
    var r, c, u, f, p, d = t.target,
      m = t.global,
      y = t.stat;
    if (r = m ? n : y ? n[d] || o(d, {}) : (n[d] || {}).prototype)
      for (c in e) {
        if (f = e[c], u = t.noTargetGet ? (p = i(r, c)) && p.value : r[c], !h(m ? c : d + (y ? "." : "#") + c, t.forced) && void 0 !== u) {
          if (typeof f == typeof u) continue;
          l(f, u)
        }(t.sham || u && u.sham) && a(f, "sham", !0), s(r, c, f, t)
      }
  }
}, function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
}, function (t, e) {
  var r = Array.isArray;
  t.exports = r
}, function (t, e, r) {
  var n = r(27),
    i = Math.min;
  t.exports = function (t) {
    return t > 0 ? i(n(t), 9007199254740991) : 0
  }
}, function (t, e, r) {
  var n = r(71);
  t.exports = function (t) {
    return Object(n(t))
  }
}, function (t, e, r) {
  var n = r(8),
    i = r(50),
    a = r(117),
    s = r(239),
    o = n.Symbol,
    l = i("wks");
  t.exports = function (t) {
    return l[t] || (l[t] = s && o[t] || (s ? o : a)("Symbol." + t))
  }
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function (t, e, r) {
  var n = r(97),
    i = "object" == typeof self && self && self.Object === Object && self,
    a = n || i || Function("return this")();
  t.exports = a
}, function (t, e, r) {
  (function (e) {
    var r = "object",
      n = function (t) {
        return t && t.Math == Math && t
      };
    t.exports = n(typeof globalThis == r && globalThis) || n(typeof window == r && window) || n(typeof self == r && self) || n(typeof e == r && e) || Function("return this")()
  }).call(this, r(42))
}, function (t, e, r) {
  var n = r(5),
    i = r(125),
    a = r(21),
    s = n("unscopables"),
    o = Array.prototype;
  null == o[s] && a(o, s, i(null)), t.exports = function (t) {
    o[s][t] = !0
  }
}, function (t, e, r) {
  "use strict";
  var n = r(54);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2Interactions = e.IX2Events = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
  var i = n(r(85));
  e.IX2BrowserSupport = i;
  var a = n(r(139));
  e.IX2Easings = a;
  var s = n(r(141));
  e.IX2EasingUtils = s;
  var o = n(r(143));
  e.IX2EngineActionTypes = o;
  var l = n(r(144));
  e.IX2EngineEventTypes = l;
  var h = n(r(86));
  e.IX2EngineItemTypes = h;
  var c = n(r(87));
  e.IX2EngineConstants = c;
  var u = n(r(309));
  e.IX2ElementsReducer = u;
  var f = n(r(310));
  e.IX2Events = f;
  var p = n(r(311));
  e.IX2Interactions = p;
  var d = n(r(145));
  e.IX2VanillaPlugins = d;
  var m = n(r(313));
  e.IX2VanillaUtils = m
}, function (t, e, r) {
  "use strict";
  var n = {},
    i = {},
    a = [],
    s = window.Webflow || [],
    o = window.jQuery,
    l = o(window),
    h = o(document),
    c = o.isFunction,
    u = n._ = r(158),
    f = n.tram = r(92) && o.tram,
    p = !1,
    d = !1;

  function m(t) {
    n.env() && (c(t.design) && l.on("__wf_design", t.design), c(t.preview) && l.on("__wf_preview", t.preview)), c(t.destroy) && l.on("__wf_destroy", t.destroy), t.ready && c(t.ready) && function (t) {
      if (p) return void t.ready();
      if (u.contains(a, t.ready)) return;
      a.push(t.ready)
    }(t)
  }

  function y(t) {
    c(t.design) && l.off("__wf_design", t.design), c(t.preview) && l.off("__wf_preview", t.preview), c(t.destroy) && l.off("__wf_destroy", t.destroy), t.ready && c(t.ready) && function (t) {
      a = u.filter(a, function (e) {
        return e !== t.ready
      })
    }(t)
  }
  f.config.hideBackface = !1, f.config.keepInherited = !0, n.define = function (t, e, r) {
    i[t] && y(i[t]);
    var n = i[t] = e(o, u, r) || {};
    return m(n), n
  }, n.require = function (t) {
    return i[t]
  }, n.push = function (t) {
    p ? c(t) && t() : s.push(t)
  }, n.env = function (t) {
    var e = window.__wf_design,
      r = void 0 !== e;
    return t ? "design" === t ? r && e : "preview" === t ? r && !e : "slug" === t ? r && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : r
  };
  var v, g = navigator.userAgent.toLowerCase(),
    E = n.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    _ = n.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
    b = n.env.ios = /(ipod|iphone|ipad)/.test(g);
  n.env.safari = /safari/.test(g) && !_ && !b, E && h.on("touchstart mousedown", function (t) {
    v = t.target
  }), n.validClick = E ? function (t) {
    return t === v || o.contains(t, v)
  } : function () {
    return !0
  };
  var T, S = "resize.webflow orientationchange.webflow load.webflow";

  function I(t, e) {
    var r = [],
      n = {};
    return n.up = u.throttle(function (t) {
      u.each(r, function (e) {
        e(t)
      })
    }), t && e && t.on(e, n.up), n.on = function (t) {
      "function" == typeof t && (u.contains(r, t) || r.push(t))
    }, n.off = function (t) {
      r = arguments.length ? u.filter(r, function (e) {
        return e !== t
      }) : []
    }, n
  }

  function A(t) {
    c(t) && t()
  }

  function x() {
    T && (T.reject(), l.off("load", T.resolve)), T = new o.Deferred, l.on("load", T.resolve)
  }
  n.resize = I(l, S), n.scroll = I(l, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), n.redraw = I(), n.location = function (t) {
    window.location = t
  }, n.env() && (n.location = function () {}), n.ready = function () {
    p = !0, d ? (d = !1, u.each(i, m)) : u.each(a, A), u.each(s, A), n.resize.up()
  }, n.load = function (t) {
    T.then(t)
  }, n.destroy = function (t) {
    t = t || {}, d = !0, l.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), u.each(i, y), n.resize.off(), n.scroll.off(), n.redraw.off(), a = [], s = [], "pending" === T.state() && x()
  }, o(n.ready), x(), t.exports = window.Webflow = n
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(6);
  t.exports = function (t, e) {
    var r = [][t];
    return !r || !n(function () {
      r.call(null, e || function () {
        throw 1
      }, 1)
    })
  }
}, function (t, e, r) {
  var n = r(6);
  t.exports = !n(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e, r) {
  var n = r(14),
    i = r(115),
    a = r(28),
    s = r(74),
    o = Object.defineProperty;
  e.f = n ? o : function (t, e, r) {
    if (a(t), e = s(e, !0), a(r), i) try {
      return o(t, e, r)
    } catch (t) {}
    if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
    return "value" in r && (t[e] = r.value), t
  }
}, function (t, e) {
  t.exports = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, function (t, e) {
  var r = {}.hasOwnProperty;
  t.exports = function (t, e) {
    return r.call(t, e)
  }
}, function (t, e, r) {
  var n = r(162),
    i = r(216),
    a = r(68),
    s = r(2),
    o = r(223);
  t.exports = function (t) {
    return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? s(t) ? i(t[0], t[1]) : n(t) : o(t)
  }
}, function (t, e, r) {
  var n = r(174),
    i = r(179);
  t.exports = function (t, e) {
    var r = i(t, e);
    return n(r) ? r : void 0
  }
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, r) {
  var n = r(14),
    i = r(15),
    a = r(51);
  t.exports = n ? function (t, e, r) {
    return i.f(t, e, a(1, r))
  } : function (t, e, r) {
    return t[e] = r, t
  }
}, function (t, e, r) {
  var n = r(52),
    i = r(71);
  t.exports = function (t) {
    return n(i(t))
  }
}, function (t, e, r) {
  var n = r(82),
    i = r(52),
    a = r(4),
    s = r(3),
    o = r(36),
    l = [].push,
    h = function (t) {
      var e = 1 == t,
        r = 2 == t,
        h = 3 == t,
        c = 4 == t,
        u = 6 == t,
        f = 5 == t || u;
      return function (p, d, m, y) {
        for (var v, g, E = a(p), _ = i(E), b = n(d, m, 3), T = s(_.length), S = 0, I = y || o, A = e ? I(p, T) : r ? I(p, 0) : void 0; T > S; S++)
          if ((f || S in _) && (g = b(v = _[S], S, E), t))
            if (e) A[S] = g;
            else if (g) switch (t) {
          case 3:
            return !0;
          case 5:
            return v;
          case 6:
            return S;
          case 2:
            l.call(A, v)
        } else if (c) return !1;
        return u ? -1 : h || c ? c : A
      }
    };
  t.exports = {
    forEach: h(0),
    map: h(1),
    filter: h(2),
    some: h(3),
    every: h(4),
    find: h(5),
    findIndex: h(6)
  }
}, function (t, e) {
  t.exports = function (t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t
  }
}, function (t, e, r) {
  var n = r(31),
    i = r(175),
    a = r(176),
    s = "[object Null]",
    o = "[object Undefined]",
    l = n ? n.toStringTag : void 0;
  t.exports = function (t) {
    return null == t ? void 0 === t ? o : s : l && l in Object(t) ? i(t) : a(t)
  }
}, function (t, e, r) {
  var n = r(96),
    i = r(62);
  t.exports = function (t) {
    return null != t && i(t.length) && !n(t)
  }
}, function (t, e) {
  var r = Math.ceil,
    n = Math.floor;
  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
  }
}, function (t, e, r) {
  var n = r(16);
  t.exports = function (t) {
    if (!n(t)) throw TypeError(String(t) + " is not an object");
    return t
  }
}, function (t, e, r) {
  var n = r(78);
  t.exports = Array.isArray || function (t) {
    return "Array" == n(t)
  }
}, function (t, e, r) {
  var n = r(24);
  t.exports = function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), i.forEach(function (e) {
        n(t, e, r[e])
      })
    }
    return t
  }
}, function (t, e, r) {
  var n = r(7).Symbol;
  t.exports = n
}, function (t, e, r) {
  var n = r(49),
    i = 1 / 0;
  t.exports = function (t) {
    if ("string" == typeof t || n(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e
  }
}, function (t, e, r) {
  var n = r(27),
    i = Math.max,
    a = Math.min;
  t.exports = function (t, e) {
    var r = n(t);
    return r < 0 ? i(r + e, 0) : a(r, e)
  }
}, function (t, e) {
  t.exports = {}
}, function (t, e, r) {
  "use strict";
  var n = r(74),
    i = r(15),
    a = r(51);
  t.exports = function (t, e, r) {
    var s = n(e);
    s in t ? i.f(t, s, a(0, r)) : t[s] = r
  }
}, function (t, e, r) {
  var n = r(16),
    i = r(29),
    a = r(5)("species");
  t.exports = function (t, e) {
    var r;
    return i(t) && ("function" != typeof (r = t.constructor) || r !== Array && !i(r.prototype) ? n(r) && null === (r = r[a]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
  }
}, function (t, e, r) {
  var n = r(6),
    i = r(5)("species");
  t.exports = function (t) {
    return !n(function () {
      var e = [];
      return (e.constructor = {})[i] = function () {
        return {
          foo: 1
        }
      }, 1 !== e[t](Boolean).foo
    })
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  e.clone = l, e.addLast = u, e.addFirst = f, e.removeLast = p, e.removeFirst = d, e.insert = m, e.removeAt = y, e.replaceAt = v, e.getIn = g, e.set = E, e.setIn = _, e.update = b, e.updateIn = T, e.merge = S, e.mergeDeep = I, e.mergeIn = A, e.omit = x, e.addDefaults = C;
  /*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   */
  var i = "INVALID_ARGS";

  function a(t) {
    throw new Error(t)
  }

  function s(t) {
    var e = Object.keys(t);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
  }
  var o = {}.hasOwnProperty;

  function l(t) {
    if (Array.isArray(t)) return t.slice();
    for (var e = s(t), r = {}, n = 0; n < e.length; n++) {
      var i = e[n];
      r[i] = t[i]
    }
    return r
  }

  function h(t, e, r) {
    var n = r;
    null == n && a(i);
    for (var o = !1, u = arguments.length, f = Array(u > 3 ? u - 3 : 0), p = 3; p < u; p++) f[p - 3] = arguments[p];
    for (var d = 0; d < f.length; d++) {
      var m = f[d];
      if (null != m) {
        var y = s(m);
        if (y.length)
          for (var v = 0; v <= y.length; v++) {
            var g = y[v];
            if (!t || void 0 === n[g]) {
              var E = m[g];
              e && c(n[g]) && c(E) && (E = h(t, e, n[g], E)), void 0 !== E && E !== n[g] && (o || (o = !0, n = l(n)), n[g] = E)
            }
          }
      }
    }
    return n
  }

  function c(t) {
    var e = void 0 === t ? "undefined" : n(t);
    return null != t && ("object" === e || "function" === e)
  }

  function u(t, e) {
    return Array.isArray(e) ? t.concat(e) : t.concat([e])
  }

  function f(t, e) {
    return Array.isArray(e) ? e.concat(t) : [e].concat(t)
  }

  function p(t) {
    return t.length ? t.slice(0, t.length - 1) : t
  }

  function d(t) {
    return t.length ? t.slice(1) : t
  }

  function m(t, e, r) {
    return t.slice(0, e).concat(Array.isArray(r) ? r : [r]).concat(t.slice(e))
  }

  function y(t, e) {
    return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
  }

  function v(t, e, r) {
    if (t[e] === r) return t;
    for (var n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = t[a];
    return i[e] = r, i
  }

  function g(t, e) {
    if (!Array.isArray(e) && a(i), null != t) {
      for (var r = t, n = 0; n < e.length; n++) {
        var s = e[n];
        if (void 0 === (r = null != r ? r[s] : void 0)) return r
      }
      return r
    }
  }

  function E(t, e, r) {
    var n = null == t ? "number" == typeof e ? [] : {} : t;
    if (n[e] === r) return n;
    var i = l(n);
    return i[e] = r, i
  }

  function _(t, e, r) {
    return e.length ? function t(e, r, n, i) {
      var a = void 0,
        s = r[i];
      a = i === r.length - 1 ? n : t(c(e) && c(e[s]) ? e[s] : "number" == typeof r[i + 1] ? [] : {}, r, n, i + 1);
      return E(e, s, a)
    }(t, e, r, 0) : r
  }

  function b(t, e, r) {
    return E(t, e, r(null == t ? void 0 : t[e]))
  }

  function T(t, e, r) {
    return _(t, e, r(g(t, e)))
  }

  function S(t, e, r, n, i, a) {
    for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
    return o.length ? h.call.apply(h, [null, !1, !1, t, e, r, n, i, a].concat(o)) : h(!1, !1, t, e, r, n, i, a)
  }

  function I(t, e, r, n, i, a) {
    for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
    return o.length ? h.call.apply(h, [null, !1, !0, t, e, r, n, i, a].concat(o)) : h(!1, !0, t, e, r, n, i, a)
  }

  function A(t, e, r, n, i, a, s) {
    var o = g(t, e);
    null == o && (o = {});
    for (var l = arguments.length, c = Array(l > 7 ? l - 7 : 0), u = 7; u < l; u++) c[u - 7] = arguments[u];
    return _(t, e, c.length ? h.call.apply(h, [null, !1, !1, o, r, n, i, a, s].concat(c)) : h(!1, !1, o, r, n, i, a, s))
  }

  function x(t, e) {
    for (var r = Array.isArray(e) ? e : [e], n = !1, i = 0; i < r.length; i++)
      if (o.call(t, r[i])) {
        n = !0;
        break
      } if (!n) return t;
    for (var a = {}, l = s(t), h = 0; h < l.length; h++) {
      var c = l[h];
      r.indexOf(c) >= 0 || (a[c] = t[c])
    }
    return a
  }

  function C(t, e, r, n, i, a) {
    for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
    return o.length ? h.call.apply(h, [null, !0, !1, t, e, r, n, i, a].concat(o)) : h(!0, !1, t, e, r, n, i, a)
  }
  var P = {
    clone: l,
    addLast: u,
    addFirst: f,
    removeLast: p,
    removeFirst: d,
    insert: m,
    removeAt: y,
    replaceAt: v,
    getIn: g,
    set: E,
    setIn: _,
    update: b,
    updateIn: T,
    merge: S,
    mergeDeep: I,
    mergeIn: A,
    omit: x,
    addDefaults: C
  };
  e.default = P
}, function (t, e) {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function n(e) {
    return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = n = function (t) {
      return r(t)
    } : t.exports = n = function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
    }, n(e)
  }
  t.exports = n
}, function (t, e, r) {
  var n = r(164),
    i = r(165),
    a = r(166),
    s = r(167),
    o = r(168);

  function l(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1])
    }
  }
  l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = s, l.prototype.set = o, t.exports = l
}, function (t, e, r) {
  var n = r(55);
  t.exports = function (t, e) {
    for (var r = t.length; r--;)
      if (n(t[r][0], e)) return r;
    return -1
  }
}, function (t, e) {
  var r;
  r = function () {
    return this
  }();
  try {
    r = r || new Function("return this")()
  } catch (t) {
    "object" == typeof window && (r = window)
  }
  t.exports = r
}, function (t, e, r) {
  var n = r(19)(Object, "create");
  t.exports = n
}, function (t, e, r) {
  var n = r(188);
  t.exports = function (t, e) {
    var r = t.__data__;
    return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
  }
}, function (t, e, r) {
  var n = r(104),
    i = r(63),
    a = r(26);
  t.exports = function (t) {
    return a(t) ? n(t) : i(t)
  }
}, function (t, e, r) {
  var n = r(206),
    i = r(20),
    a = Object.prototype,
    s = a.hasOwnProperty,
    o = a.propertyIsEnumerable,
    l = n(function () {
      return arguments
    }()) ? n : function (t) {
      return i(t) && s.call(t, "callee") && !o.call(t, "callee")
    };
  t.exports = l
}, function (t, e, r) {
  var n = r(66);
  t.exports = function (t, e, r) {
    var i = null == t ? void 0 : n(t, e);
    return void 0 === i ? r : i
  }
}, function (t, e, r) {
  var n = r(2),
    i = r(67),
    a = r(217),
    s = r(110);
  t.exports = function (t, e) {
    return n(t) ? t : i(t, e) ? [t] : a(s(t))
  }
}, function (t, e, r) {
  var n = r(25),
    i = r(20),
    a = "[object Symbol]";
  t.exports = function (t) {
    return "symbol" == typeof t || i(t) && n(t) == a
  }
}, function (t, e, r) {
  var n = r(8),
    i = r(73),
    a = r(75),
    s = n["__core-js_shared__"] || i("__core-js_shared__", {});
  (t.exports = function (t, e) {
    return s[t] || (s[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: "3.1.3",
    mode: a ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function (t, e, r) {
  var n = r(6),
    i = r(78),
    a = "".split;
  t.exports = n(function () {
    return !Object("z").propertyIsEnumerable(0)
  }) ? function (t) {
    return "String" == i(t) ? a.call(t, "") : Object(t)
  } : Object
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t
  }
}, function (t, e) {
  t.exports = function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
          n.get || n.set ? Object.defineProperty(e, r, n) : e[r] = t[r]
        } return e.default = t, e
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e
  }
}, function (t, e, r) {
  var n = r(19)(r(7), "Map");
  t.exports = n
}, function (t, e, r) {
  var n = r(180),
    i = r(187),
    a = r(189),
    s = r(190),
    o = r(191);

  function l(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1])
    }
  }
  l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = s, l.prototype.set = o, t.exports = l
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
    return t
  }
}, function (t, e, r) {
  (function (t) {
    var n = r(7),
      i = r(207),
      a = e && !e.nodeType && e,
      s = a && "object" == typeof t && t && !t.nodeType && t,
      o = s && s.exports === a ? n.Buffer : void 0,
      l = (o ? o.isBuffer : void 0) || i;
    t.exports = l
  }).call(this, r(105)(t))
}, function (t, e) {
  var r = 9007199254740991,
    n = /^(?:0|[1-9]\d*)$/;
  t.exports = function (t, e) {
    var i = typeof t;
    return !!(e = null == e ? r : e) && ("number" == i || "symbol" != i && n.test(t)) && t > -1 && t % 1 == 0 && t < e
  }
}, function (t, e, r) {
  var n = r(208),
    i = r(209),
    a = r(210),
    s = a && a.isTypedArray,
    o = s ? i(s) : n;
  t.exports = o
}, function (t, e) {
  var r = 9007199254740991;
  t.exports = function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
  }
}, function (t, e, r) {
  var n = r(64),
    i = r(211),
    a = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!n(t)) return i(t);
    var e = [];
    for (var r in Object(t)) a.call(t, r) && "constructor" != r && e.push(r);
    return e
  }
}, function (t, e) {
  var r = Object.prototype;
  t.exports = function (t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || r)
  }
}, function (t, e, r) {
  var n = r(212),
    i = r(56),
    a = r(213),
    s = r(214),
    o = r(107),
    l = r(25),
    h = r(98),
    c = h(n),
    u = h(i),
    f = h(a),
    p = h(s),
    d = h(o),
    m = l;
  (n && "[object DataView]" != m(new n(new ArrayBuffer(1))) || i && "[object Map]" != m(new i) || a && "[object Promise]" != m(a.resolve()) || s && "[object Set]" != m(new s) || o && "[object WeakMap]" != m(new o)) && (m = function (t) {
    var e = l(t),
      r = "[object Object]" == e ? t.constructor : void 0,
      n = r ? h(r) : "";
    if (n) switch (n) {
      case c:
        return "[object DataView]";
      case u:
        return "[object Map]";
      case f:
        return "[object Promise]";
      case p:
        return "[object Set]";
      case d:
        return "[object WeakMap]"
    }
    return e
  }), t.exports = m
}, function (t, e, r) {
  var n = r(48),
    i = r(32);
  t.exports = function (t, e) {
    for (var r = 0, a = (e = n(e, t)).length; null != t && r < a;) t = t[i(e[r++])];
    return r && r == a ? t : void 0
  }
}, function (t, e, r) {
  var n = r(2),
    i = r(49),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
  t.exports = function (t, e) {
    if (n(t)) return !1;
    var r = typeof t;
    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !i(t)) || s.test(t) || !a.test(t) || null != e && t in Object(e)
  }
}, function (t, e) {
  t.exports = function (t) {
    return t
  }
}, function (t, e, r) {
  var n = r(225);
  t.exports = function (t) {
    var e = n(t),
      r = e % 1;
    return e == e ? r ? e - r : e : 0
  }
}, function (t, e, r) {
  var n = r(12),
    i = r(49),
    a = NaN,
    s = /^\s+|\s+$/g,
    o = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    h = /^0o[0-7]+$/i,
    c = parseInt;
  t.exports = function (t) {
    if ("number" == typeof t) return t;
    if (i(t)) return a;
    if (n(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = n(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(s, "");
    var r = l.test(t);
    return r || h.test(t) ? c(t.slice(2), r ? 2 : 8) : o.test(t) ? a : +t
  }
}, function (t, e) {
  t.exports = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t
  }
}, function (t, e, r) {
  var n, i, a, s = r(230),
    o = r(8),
    l = r(16),
    h = r(21),
    c = r(17),
    u = r(76),
    f = r(77),
    p = o.WeakMap;
  if (s) {
    var d = new p,
      m = d.get,
      y = d.has,
      v = d.set;
    n = function (t, e) {
      return v.call(d, t, e), e
    }, i = function (t) {
      return m.call(d, t) || {}
    }, a = function (t) {
      return y.call(d, t)
    }
  } else {
    var g = u("state");
    f[g] = !0, n = function (t, e) {
      return h(t, g, e), e
    }, i = function (t) {
      return c(t, g) ? t[g] : {}
    }, a = function (t) {
      return c(t, g)
    }
  }
  t.exports = {
    set: n,
    get: i,
    has: a,
    enforce: function (t) {
      return a(t) ? i(t) : n(t, {})
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!l(e) || (r = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return r
      }
    }
  }
}, function (t, e, r) {
  var n = r(8),
    i = r(21);
  t.exports = function (t, e) {
    try {
      i(n, t, e)
    } catch (r) {
      n[t] = e
    }
    return e
  }
}, function (t, e, r) {
  var n = r(16);
  t.exports = function (t, e) {
    if (!n(t)) return t;
    var r, i;
    if (e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
    if ("function" == typeof (r = t.valueOf) && !n(i = r.call(t))) return i;
    if (!e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (t, e) {
  t.exports = !1
}, function (t, e, r) {
  var n = r(50),
    i = r(117),
    a = n("keys");
  t.exports = function (t) {
    return a[t] || (a[t] = i(t))
  }
}, function (t, e) {
  t.exports = {}
}, function (t, e) {
  var r = {}.toString;
  t.exports = function (t) {
    return r.call(t).slice(8, -1)
  }
}, function (t, e, r) {
  var n = r(121),
    i = r(8),
    a = function (t) {
      return "function" == typeof t ? t : void 0
    };
  t.exports = function (t, e) {
    return arguments.length < 2 ? a(n[t]) || a(i[t]) : n[t] && n[t][e] || i[t] && i[t][e]
  }
}, function (t, e, r) {
  var n = r(22),
    i = r(3),
    a = r(33),
    s = function (t) {
      return function (e, r, s) {
        var o, l = n(e),
          h = i(l.length),
          c = a(s, h);
        if (t && r != r) {
          for (; h > c;)
            if ((o = l[c++]) != o) return !0
        } else
          for (; h > c; c++)
            if ((t || c in l) && l[c] === r) return t || c || 0;
        return !t && -1
      }
    };
  t.exports = {
    includes: s(!0),
    indexOf: s(!1)
  }
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, r) {
  var n = r(53);
  t.exports = function (t, e, r) {
    if (n(t), void 0 === e) return t;
    switch (r) {
      case 0:
        return function () {
          return t.call(e)
        };
      case 1:
        return function (r) {
          return t.call(e, r)
        };
      case 2:
        return function (r, n) {
          return t.call(e, r, n)
        };
      case 3:
        return function (r, n, i) {
          return t.call(e, r, n, i)
        }
    }
    return function () {
      return t.apply(e, arguments)
    }
  }
}, function (t, e, r) {
  "use strict";
  r.r(e), r.d(e, "ActionTypes", function () {
    return a
  }), r.d(e, "default", function () {
    return s
  });
  var n = r(131),
    i = r(301),
    a = {
      INIT: "@@redux/INIT"
    };

  function s(t, e, r) {
    var o;
    if ("function" == typeof e && void 0 === r && (r = e, e = void 0), void 0 !== r) {
      if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
      return r(s)(t, e)
    }
    if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
    var l = t,
      h = e,
      c = [],
      u = c,
      f = !1;

    function p() {
      u === c && (u = c.slice())
    }

    function d() {
      return h
    }

    function m(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return p(), u.push(t),
        function () {
          if (e) {
            e = !1, p();
            var r = u.indexOf(t);
            u.splice(r, 1)
          }
        }
    }

    function y(t) {
      if (!Object(n.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (f) throw new Error("Reducers may not dispatch actions.");
      try {
        f = !0, h = l(h, t)
      } finally {
        f = !1
      }
      for (var e = c = u, r = 0; r < e.length; r++) e[r]();
      return t
    }
    return y({
      type: a.INIT
    }), (o = {
      dispatch: y,
      subscribe: m,
      getState: d,
      replaceReducer: function (t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        l = t, y({
          type: a.INIT
        })
      }
    })[i.default] = function () {
      var t, e = m;
      return (t = {
        subscribe: function (t) {
          if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

          function r() {
            t.next && t.next(d())
          }
          return r(), {
            unsubscribe: e(r)
          }
        }
      })[i.default] = function () {
        return this
      }, t
    }, o
  }
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    if (0 === e.length) return function (t) {
      return t
    };
    if (1 === e.length) return e[0];
    var n = e[e.length - 1],
      i = e.slice(0, -1);
    return function () {
      return i.reduceRight(function (t, e) {
        return e(t)
      }, n.apply(void 0, arguments))
    }
  }
  r.r(e), r.d(e, "default", function () {
    return n
  })
}, function (t, e, r) {
  "use strict";
  var n = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
  var i = n(r(137)),
    a = "undefined" != typeof window;
  e.IS_BROWSER_ENV = a;
  var s = function (t, e) {
    return a ? t() : e
  };
  e.withBrowser = s;
  var o = s(function () {
    return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
      return t in Element.prototype
    })
  });
  e.ELEMENT_MATCHES = o;
  var l = s(function () {
    var t = document.createElement("i"),
      e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
    try {
      for (var r = e.length, n = 0; n < r; n++) {
        var i = e[n];
        if (t.style.display = i, t.style.display === i) return i
      }
      return ""
    } catch (t) {
      return ""
    }
  }, "flex");
  e.FLEX_PREFIXED = l;
  var h = s(function () {
    var t = document.createElement("i");
    if (null == t.style.transform)
      for (var e = ["Webkit", "Moz", "ms"], r = e.length, n = 0; n < r; n++) {
        var i = e[n] + "Transform";
        if (void 0 !== t.style[i]) return i
      }
    return "transform"
  }, "transform");
  e.TRANSFORM_PREFIXED = h;
  var c = h.split("transform")[0],
    u = c ? c + "TransformStyle" : "transformStyle";
  e.TRANSFORM_STYLE_PREFIXED = u
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PLUGIN_LOTTIE = e.PLUGIN_LOTTIE_EFFECT = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0;
  e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
  e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
  e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
  e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
  e.STYLE_OPACITY = "STYLE_OPACITY";
  e.STYLE_SIZE = "STYLE_SIZE";
  e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
  e.STYLE_FILTER = "STYLE_FILTER";
  e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
  e.STYLE_BORDER = "STYLE_BORDER";
  e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
  e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
  e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
  e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
  e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
  e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
  e.GENERAL_LOOP = "GENERAL_LOOP";
  e.OBJECT_VALUE = "OBJECT_VALUE";
  e.FADE_EFFECT = "FADE_EFFECT";
  e.SLIDE_EFFECT = "SLIDE_EFFECT";
  e.BLUR_EFFECT = "BLUR_EFFECT";
  e.GROW_EFFECT = "GROW_EFFECT";
  e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
  e.SHRINK_EFFECT = "SHRINK_EFFECT";
  e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
  e.SPIN_EFFECT = "SPIN_EFFECT";
  e.FLY_EFFECT = "FLY_EFFECT";
  e.POP_EFFECT = "POP_EFFECT";
  e.FLIP_EFFECT = "FLIP_EFFECT";
  e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
  e.PULSE_EFFECT = "PULSE_EFFECT";
  e.DROP_EFFECT = "DROP_EFFECT";
  e.BLINK_EFFECT = "BLINK_EFFECT";
  e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
  e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
  e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
  e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
  e.JELLO_EFFECT = "JELLO_EFFECT";
  e.PLUGIN_LOTTIE_EFFECT = "PLUGIN_LOTTIE_EFFECT";
  e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE"
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
  e.IX2_ID_DELIMITER = "|";
  e.WF_PAGE = "data-wf-page";
  e.W_MOD_JS = "w-mod-js";
  e.W_MOD_IX = "w-mod-ix";
  e.BOUNDARY_SELECTOR = ".w-dyn-item";
  e.CONFIG_X_VALUE = "xValue";
  e.CONFIG_Y_VALUE = "yValue";
  e.CONFIG_Z_VALUE = "zValue";
  e.CONFIG_VALUE = "value";
  e.CONFIG_X_UNIT = "xUnit";
  e.CONFIG_Y_UNIT = "yUnit";
  e.CONFIG_Z_UNIT = "zUnit";
  e.CONFIG_UNIT = "unit";
  e.TRANSFORM = "transform";
  e.TRANSLATE_X = "translateX";
  e.TRANSLATE_Y = "translateY";
  e.TRANSLATE_Z = "translateZ";
  e.TRANSLATE_3D = "translate3d";
  e.SCALE_X = "scaleX";
  e.SCALE_Y = "scaleY";
  e.SCALE_Z = "scaleZ";
  e.SCALE_3D = "scale3d";
  e.ROTATE_X = "rotateX";
  e.ROTATE_Y = "rotateY";
  e.ROTATE_Z = "rotateZ";
  e.SKEW = "skew";
  e.SKEW_X = "skewX";
  e.SKEW_Y = "skewY";
  e.OPACITY = "opacity";
  e.FILTER = "filter";
  e.WIDTH = "width";
  e.HEIGHT = "height";
  e.BACKGROUND_COLOR = "backgroundColor";
  e.BACKGROUND = "background";
  e.BORDER_COLOR = "borderColor";
  e.COLOR = "color";
  e.DISPLAY = "display";
  e.FLEX = "flex";
  e.WILL_CHANGE = "willChange";
  e.AUTO = "AUTO";
  e.COMMA_DELIMITER = ",";
  e.COLON_DELIMITER = ":";
  e.BAR_DELIMITER = "|";
  e.CHILDREN = "CHILDREN";
  e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
  e.SIBLINGS = "SIBLINGS";
  e.PARENT = "PARENT";
  e.PRESERVE_3D = "preserve-3d";
  e.HTML_ELEMENT = "HTML_ELEMENT";
  e.PLAIN_OBJECT = "PLAIN_OBJECT";
  e.ABSTRACT_NODE = "ABSTRACT_NODE";
  e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
  e.RENDER_GENERAL = "RENDER_GENERAL";
  e.RENDER_STYLE = "RENDER_STYLE";
  e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (t, e, r) {
  "use strict";
  var n = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
  var i = n(r(30)),
    a = r(10),
    s = a.IX2EngineActionTypes,
    o = s.IX2_RAW_DATA_IMPORTED,
    l = s.IX2_SESSION_INITIALIZED,
    h = s.IX2_SESSION_STARTED,
    c = s.IX2_SESSION_STOPPED,
    u = s.IX2_PREVIEW_REQUESTED,
    f = s.IX2_PLAYBACK_REQUESTED,
    p = s.IX2_STOP_REQUESTED,
    d = s.IX2_CLEAR_REQUESTED,
    m = s.IX2_EVENT_LISTENER_ADDED,
    y = s.IX2_TEST_FRAME_RENDERED,
    v = s.IX2_EVENT_STATE_CHANGED,
    g = s.IX2_ANIMATION_FRAME_CHANGED,
    E = s.IX2_PARAMETER_CHANGED,
    _ = s.IX2_INSTANCE_ADDED,
    b = s.IX2_INSTANCE_STARTED,
    T = s.IX2_INSTANCE_REMOVED,
    S = s.IX2_ELEMENT_STATE_CHANGED,
    I = s.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    A = s.IX2_VIEWPORT_WIDTH_CHANGED,
    x = s.IX2_MEDIA_QUERIES_DEFINED,
    C = a.IX2EngineItemTypes,
    P = C.GENERAL_START_ACTION,
    w = (C.GENERAL_CONTINUOUS_ACTION, a.IX2VanillaUtils.reifyState);
  e.rawDataImported = function (t) {
    return {
      type: o,
      payload: (0, i.default)({}, w(t))
    }
  };
  e.sessionInitialized = function (t) {
    var e = t.hasBoundaryNodes;
    return {
      type: l,
      payload: {
        hasBoundaryNodes: e
      }
    }
  };
  e.sessionStarted = function () {
    return {
      type: h
    }
  };
  e.sessionStopped = function () {
    return {
      type: c
    }
  };
  e.previewRequested = function (t) {
    var e = t.rawData,
      r = t.defer;
    return {
      type: u,
      payload: {
        defer: r,
        rawData: e
      }
    }
  };
  e.playbackRequested = function (t) {
    var e = t.actionTypeId,
      r = void 0 === e ? P : e,
      n = t.actionListId,
      i = t.actionItemId,
      a = t.eventId,
      s = t.allowEvents,
      o = t.immediate,
      l = t.testManual,
      h = t.verbose,
      c = t.rawData;
    return {
      type: f,
      payload: {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        testManual: l,
        eventId: a,
        allowEvents: s,
        immediate: o,
        verbose: h,
        rawData: c
      }
    }
  };
  e.stopRequested = function (t) {
    return {
      type: p,
      payload: {
        actionListId: t
      }
    }
  };
  e.clearRequested = function () {
    return {
      type: d
    }
  };
  e.eventListenerAdded = function (t, e) {
    return {
      type: m,
      payload: {
        target: t,
        listenerParams: e
      }
    }
  };
  e.testFrameRendered = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return {
      type: y,
      payload: {
        step: t
      }
    }
  };
  e.eventStateChanged = function (t, e) {
    return {
      type: v,
      payload: {
        stateKey: t,
        newState: e
      }
    }
  };
  e.animationFrameChanged = function (t, e) {
    return {
      type: g,
      payload: {
        now: t,
        parameters: e
      }
    }
  };
  e.parameterChanged = function (t, e) {
    return {
      type: E,
      payload: {
        key: t,
        value: e
      }
    }
  };
  e.instanceAdded = function (t) {
    return {
      type: _,
      payload: (0, i.default)({}, t)
    }
  };
  e.instanceStarted = function (t, e) {
    return {
      type: b,
      payload: {
        instanceId: t,
        time: e
      }
    }
  };
  e.instanceRemoved = function (t) {
    return {
      type: T,
      payload: {
        instanceId: t
      }
    }
  };
  e.elementStateChanged = function (t, e, r, n) {
    return {
      type: S,
      payload: {
        elementId: t,
        actionTypeId: e,
        current: r,
        actionItem: n
      }
    }
  };
  e.actionListPlaybackChanged = function (t) {
    var e = t.actionListId,
      r = t.isPlaying;
    return {
      type: I,
      payload: {
        actionListId: e,
        isPlaying: r
      }
    }
  };
  e.viewportWidthChanged = function (t) {
    var e = t.width,
      r = t.mediaQueries;
    return {
      type: A,
      payload: {
        width: e,
        mediaQueries: r
      }
    }
  };
  e.mediaQueriesDefined = function () {
    return {
      type: x
    }
  }
}, function (t, e, r) {
  var n = r(153),
    i = r(90);

  function a(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
  }
  a.prototype = n(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e) {
  t.exports = function () {}
}, function (t, e, r) {
  var n = r(153),
    i = r(90),
    a = 4294967295;

  function s(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = a, this.__views__ = []
  }
  s.prototype = n(i.prototype), s.prototype.constructor = s, t.exports = s
}, function (t, e, r) {
  "use strict";
  var n = r(1)(r(39));
  window.tram = function (t) {
    function e(t, e) {
      return (new N.Bare).init(t, e)
    }

    function r(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase()
      })
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }

    function a(t, e, r) {
      return "#" + (1 << 24 | t << 16 | e << 8 | r).toString(16).slice(1)
    }

    function s() {}

    function o(t, e, r) {
      h("Units do not match [" + t + "]: " + e + ", " + r)
    }

    function l(t, e, r) {
      if (void 0 !== e && (r = e), void 0 === t) return r;
      var n = r;
      return $.test(t) || !Z.test(t) ? n = parseInt(t, 10) : Z.test(t) && (n = 1e3 * parseFloat(t)), 0 > n && (n = 0), n == n ? n : r
    }

    function h(t) {
      U.debug && window && window.console.warn(t)
    }
    var c = function (t, e, r) {
        function i(t) {
          return "object" == (0, n.default)(t)
        }

        function a(t) {
          return "function" == typeof t
        }

        function s() {}
        return function n(o, l) {
          function h() {
            var t = new c;
            return a(t.init) && t.init.apply(t, arguments), t
          }

          function c() {}
          l === r && (l = o, o = Object), h.Bare = c;
          var u, f = s[t] = o[t],
            p = c[t] = h[t] = new s;
          return p.constructor = h, h.mixin = function (e) {
            return c[t] = h[t] = n(h, e)[t], h
          }, h.open = function (t) {
            if (u = {}, a(t) ? u = t.call(h, p, f, h, o) : i(t) && (u = t), i(u))
              for (var r in u) e.call(u, r) && (p[r] = u[r]);
            return a(p.init) || (p.init = o), h
          }, h.open(l)
        }
      }("prototype", {}.hasOwnProperty),
      u = {
        ease: ["ease", function (t, e, r, n) {
          var i = (t /= n) * t,
            a = i * t;
          return e + r * (-2.75 * a * i + 11 * i * i + -15.5 * a + 8 * i + .25 * t)
        }],
        "ease-in": ["ease-in", function (t, e, r, n) {
          var i = (t /= n) * t,
            a = i * t;
          return e + r * (-1 * a * i + 3 * i * i + -3 * a + 2 * i)
        }],
        "ease-out": ["ease-out", function (t, e, r, n) {
          var i = (t /= n) * t,
            a = i * t;
          return e + r * (.3 * a * i + -1.6 * i * i + 2.2 * a + -1.8 * i + 1.9 * t)
        }],
        "ease-in-out": ["ease-in-out", function (t, e, r, n) {
          var i = (t /= n) * t,
            a = i * t;
          return e + r * (2 * a * i + -5 * i * i + 2 * a + 2 * i)
        }],
        linear: ["linear", function (t, e, r, n) {
          return r * t / n + e
        }],
        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, r, n) {
          return r * (t /= n) * t + e
        }],
        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, r, n) {
          return -r * (t /= n) * (t - 2) + e
        }],
        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, r, n) {
          return (t /= n / 2) < 1 ? r / 2 * t * t + e : -r / 2 * (--t * (t - 2) - 1) + e
        }],
        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, r, n) {
          return r * (t /= n) * t * t + e
        }],
        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, r, n) {
          return r * ((t = t / n - 1) * t * t + 1) + e
        }],
        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, r, n) {
          return (t /= n / 2) < 1 ? r / 2 * t * t * t + e : r / 2 * ((t -= 2) * t * t + 2) + e
        }],
        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, r, n) {
          return r * (t /= n) * t * t * t + e
        }],
        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, r, n) {
          return -r * ((t = t / n - 1) * t * t * t - 1) + e
        }],
        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, r, n) {
          return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + e : -r / 2 * ((t -= 2) * t * t * t - 2) + e
        }],
        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, r, n) {
          return r * (t /= n) * t * t * t * t + e
        }],
        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, r, n) {
          return r * ((t = t / n - 1) * t * t * t * t + 1) + e
        }],
        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, r, n) {
          return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + e : r / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }],
        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, r, n) {
          return -r * Math.cos(t / n * (Math.PI / 2)) + r + e
        }],
        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, r, n) {
          return r * Math.sin(t / n * (Math.PI / 2)) + e
        }],
        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, r, n) {
          return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + e
        }],
        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, r, n) {
          return 0 === t ? e : r * Math.pow(2, 10 * (t / n - 1)) + e
        }],
        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, r, n) {
          return t === n ? e + r : r * (1 - Math.pow(2, -10 * t / n)) + e
        }],
        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, r, n) {
          return 0 === t ? e : t === n ? e + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : r / 2 * (2 - Math.pow(2, -10 * --t)) + e
        }],
        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, r, n) {
          return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + e
        }],
        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, r, n) {
          return r * Math.sqrt(1 - (t = t / n - 1) * t) + e
        }],
        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, r, n) {
          return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }],
        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, r, n, i) {
          return void 0 === i && (i = 1.70158), r * (t /= n) * t * ((i + 1) * t - i) + e
        }],
        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, r, n, i) {
          return void 0 === i && (i = 1.70158), r * ((t = t / n - 1) * t * ((i + 1) * t + i) + 1) + e
        }],
        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, r, n, i) {
          return void 0 === i && (i = 1.70158), (t /= n / 2) < 1 ? r / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : r / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
        }]
      },
      f = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      },
      p = document,
      d = window,
      m = "bkwld-tram",
      y = /[\-\.0-9]/g,
      v = /[A-Z]/,
      g = "number",
      E = /^(rgb|#)/,
      _ = /(em|cm|mm|in|pt|pc|px)$/,
      b = /(em|cm|mm|in|pt|pc|px|%)$/,
      T = /(deg|rad|turn)$/,
      S = "unitless",
      I = /(all|none) 0s ease 0s/,
      A = /^(width|height)$/,
      x = " ",
      C = p.createElement("a"),
      P = ["Webkit", "Moz", "O", "ms"],
      w = ["-webkit-", "-moz-", "-o-", "-ms-"],
      O = function (t) {
        if (t in C.style) return {
          dom: t,
          css: t
        };
        var e, r, n = "",
          i = t.split("-");
        for (e = 0; e < i.length; e++) n += i[e].charAt(0).toUpperCase() + i[e].slice(1);
        for (e = 0; e < P.length; e++)
          if ((r = P[e] + n) in C.style) return {
            dom: r,
            css: w[e] + t
          }
      },
      D = e.support = {
        bind: Function.prototype.bind,
        transform: O("transform"),
        transition: O("transition"),
        backface: O("backface-visibility"),
        timing: O("transition-timing-function")
      };
    if (D.transition) {
      var M = D.timing.dom;
      if (C.style[M] = u["ease-in-back"][0], !C.style[M])
        for (var R in f) u[R][0] = f[R]
    }
    var F = e.frame = function () {
        var t = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
        return t && D.bind ? t.bind(d) : function (t) {
          d.setTimeout(t, 16)
        }
      }(),
      k = e.now = function () {
        var t = d.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
        return e && D.bind ? e.bind(t) : Date.now || function () {
          return +new Date
        }
      }(),
      L = c(function (e) {
        function i(t, e) {
          var r = function (t) {
              for (var e = -1, r = t ? t.length : 0, n = []; ++e < r;) {
                var i = t[e];
                i && n.push(i)
              }
              return n
            }(("" + t).split(x)),
            n = r[0];
          e = e || {};
          var i = K[n];
          if (!i) return h("Unsupported property: " + n);
          if (!e.weak || !this.props[n]) {
            var a = i[0],
              s = this.props[n];
            return s || (s = this.props[n] = new a.Bare), s.init(this.$el, r, i, e), s
          }
        }

        function a(t, e, r) {
          if (t) {
            var a = (0, n.default)(t);
            if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == a && e) return this.timer = new H({
              duration: t,
              context: this,
              complete: s
            }), void(this.active = !0);
            if ("string" == a && e) {
              switch (t) {
                case "hide":
                  c.call(this);
                  break;
                case "stop":
                  o.call(this);
                  break;
                case "redraw":
                  u.call(this);
                  break;
                default:
                  i.call(this, t, r && r[1])
              }
              return s.call(this)
            }
            if ("function" == a) return void t.call(this, this);
            if ("object" == a) {
              var h = 0;
              p.call(this, t, function (t, e) {
                t.span > h && (h = t.span), t.stop(), t.animate(e)
              }, function (t) {
                "wait" in t && (h = l(t.wait, 0))
              }), f.call(this), h > 0 && (this.timer = new H({
                duration: h,
                context: this
              }), this.active = !0, e && (this.timer.complete = s));
              var d = this,
                m = !1,
                y = {};
              F(function () {
                p.call(d, t, function (t) {
                  t.active && (m = !0, y[t.name] = t.nextStyle)
                }), m && d.$el.css(y)
              })
            }
          }
        }

        function s() {
          if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
            var t = this.queue.shift();
            a.call(this, t.options, !0, t.args)
          }
        }

        function o(t) {
          var e;
          this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, n.default)(t) && null != t ? t : this.props, p.call(this, e, d), f.call(this)
        }

        function c() {
          o.call(this), this.el.style.display = "none"
        }

        function u() {
          this.el.offsetHeight
        }

        function f() {
          var t, e, r = [];
          for (t in this.upstream && r.push(this.upstream), this.props)(e = this.props[t]).active && r.push(e.string);
          r = r.join(","), this.style !== r && (this.style = r, this.el.style[D.transition.dom] = r)
        }

        function p(t, e, n) {
          var a, s, o, l, h = e !== d,
            c = {};
          for (a in t) o = t[a], a in Q ? (c.transform || (c.transform = {}), c.transform[a] = o) : (v.test(a) && (a = r(a)), a in K ? c[a] = o : (l || (l = {}), l[a] = o));
          for (a in c) {
            if (o = c[a], !(s = this.props[a])) {
              if (!h) continue;
              s = i.call(this, a)
            }
            e.call(this, s, o)
          }
          n && l && n.call(this, l)
        }

        function d(t) {
          t.stop()
        }

        function y(t, e) {
          t.set(e)
        }

        function g(t) {
          this.$el.css(t)
        }

        function E(t, r) {
          e[t] = function () {
            return this.children ? function (t, e) {
              var r, n = this.children.length;
              for (r = 0; n > r; r++) t.apply(this.children[r], e);
              return this
            }.call(this, r, arguments) : (this.el && r.apply(this, arguments), this)
          }
        }
        e.init = function (e) {
          if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
            var r = Y(this.el, "transition");
            r && !I.test(r) && (this.upstream = r)
          }
          D.backface && U.hideBackface && W(this.el, D.backface.css, "hidden")
        }, E("add", i), E("start", a), E("wait", function (t) {
          t = l(t, 0), this.active ? this.queue.push({
            options: t
          }) : (this.timer = new H({
            duration: t,
            context: this,
            complete: s
          }), this.active = !0)
        }), E("then", function (t) {
          return this.active ? (this.queue.push({
            options: t,
            args: arguments
          }), void(this.timer.complete = s)) : h("No active transition timer. Use start() or wait() before then().")
        }), E("next", s), E("stop", o), E("set", function (t) {
          o.call(this, t), p.call(this, t, y, g)
        }), E("show", function (t) {
          "string" != typeof t && (t = "block"), this.el.style.display = t
        }), E("hide", c), E("redraw", u), E("destroy", function () {
          o.call(this), t.removeData(this.el, m), this.$el = this.el = null
        })
      }),
      N = c(L, function (e) {
        function r(e, r) {
          var n = t.data(e, m) || t.data(e, m, new L.Bare);
          return n.el || n.init(e), r ? n.start(r) : n
        }
        e.init = function (e, n) {
          var i = t(e);
          if (!i.length) return this;
          if (1 === i.length) return r(i[0], n);
          var a = [];
          return i.each(function (t, e) {
            a.push(r(e, n))
          }), this.children = a, this
        }
      }),
      V = c(function (t) {
        function e() {
          var t = this.get();
          this.update("auto");
          var e = this.get();
          return this.update(t), e
        }

        function r(t) {
          var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
          return (e ? a(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
        }
        var i = 500,
          s = "ease",
          o = 0;
        t.init = function (t, e, r, n) {
          this.$el = t, this.el = t[0];
          var a = e[0];
          r[2] && (a = r[2]), q[a] && (a = q[a]), this.name = a, this.type = r[1], this.duration = l(e[1], this.duration, i), this.ease = function (t, e, r) {
            return void 0 !== e && (r = e), t in u ? t : r
          }(e[2], this.ease, s), this.delay = l(e[3], this.delay, o), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = n.unit || this.unit || U.defaultUnit, this.angle = n.angle || this.angle || U.defaultAngle, U.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + x + this.duration + "ms" + ("ease" != this.ease ? x + u[this.ease][0] : "") + (this.delay ? x + this.delay + "ms" : ""))
        }, t.set = function (t) {
          t = this.convert(t, this.type), this.update(t), this.redraw()
        }, t.transition = function (t) {
          this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
        }, t.fallback = function (t) {
          var r = this.el.style[this.name] || this.convert(this.get(), this.type);
          t = this.convert(t, this.type), this.auto && ("auto" == r && (r = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new z({
            from: r,
            to: t,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.get = function () {
          return Y(this.el, this.name)
        }, t.update = function (t) {
          W(this.el, this.name, t)
        }, t.stop = function () {
          (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, W(this.el, this.name, this.get()));
          var t = this.tween;
          t && t.context && t.destroy()
        }, t.convert = function (t, e) {
          if ("auto" == t && this.auto) return t;
          var i, a = "number" == typeof t,
            s = "string" == typeof t;
          switch (e) {
            case g:
              if (a) return t;
              if (s && "" === t.replace(y, "")) return +t;
              i = "number(unitless)";
              break;
            case E:
              if (s) {
                if ("" === t && this.original) return this.original;
                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t)
              }
              i = "hex or rgb string";
              break;
            case _:
              if (a) return t + this.unit;
              if (s && e.test(t)) return t;
              i = "number(px) or string(unit)";
              break;
            case b:
              if (a) return t + this.unit;
              if (s && e.test(t)) return t;
              i = "number(px) or string(unit or %)";
              break;
            case T:
              if (a) return t + this.angle;
              if (s && e.test(t)) return t;
              i = "number(deg) or string(angle)";
              break;
            case S:
              if (a) return t;
              if (s && b.test(t)) return t;
              i = "number(unitless) or string(unit or %)"
          }
          return function (t, e) {
            h("Type warning: Expected: [" + t + "] Got: [" + (0, n.default)(e) + "] " + e)
          }(i, t), t
        }, t.redraw = function () {
          this.el.offsetHeight
        }
      }),
      G = c(V, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), E))
        }
      }),
      B = c(V, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.animate = this.fallback
        }, t.get = function () {
          return this.$el[this.name]()
        }, t.update = function (t) {
          this.$el[this.name](t)
        }
      }),
      j = c(V, function (t, e) {
        function r(t, e) {
          var r, n, i, a, s;
          for (r in t) i = (a = Q[r])[0], n = a[1] || r, s = this.convert(t[r], i), e.call(this, n, s, i)
        }
        t.init = function () {
          e.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && U.perspective && (this.current.perspective = U.perspective, W(this.el, this.name, this.style(this.current)), this.redraw()))
        }, t.set = function (t) {
          r.call(this, t, function (t, e) {
            this.current[t] = e
          }), W(this.el, this.name, this.style(this.current)), this.redraw()
        }, t.transition = function (t) {
          var e = this.values(t);
          this.tween = new X({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease
          });
          var r, n = {};
          for (r in this.current) n[r] = r in e ? e[r] : this.current[r];
          this.active = !0, this.nextStyle = this.style(n)
        }, t.fallback = function (t) {
          var e = this.values(t);
          this.tween = new X({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.update = function () {
          W(this.el, this.name, this.style(this.current))
        }, t.style = function (t) {
          var e, r = "";
          for (e in t) r += e + "(" + t[e] + ") ";
          return r
        }, t.values = function (t) {
          var e, n = {};
          return r.call(this, t, function (t, r, i) {
            n[t] = r, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
          }), n
        }
      }),
      z = c(function (e) {
        function r() {
          var t, e, n, i = l.length;
          if (i)
            for (F(r), e = k(), t = i; t--;)(n = l[t]) && n.render(e)
        }
        var n = {
          ease: u.ease[1],
          from: 0,
          to: 1
        };
        e.init = function (t) {
          this.duration = t.duration || 0, this.delay = t.delay || 0;
          var e = t.ease || n.ease;
          u[e] && (e = u[e][1]), "function" != typeof e && (e = n.ease), this.ease = e, this.update = t.update || s, this.complete = t.complete || s, this.context = t.context || this, this.name = t.name;
          var r = t.from,
            i = t.to;
          void 0 === r && (r = n.from), void 0 === i && (i = n.to), this.unit = t.unit || "", "number" == typeof r && "number" == typeof i ? (this.begin = r, this.change = i - r) : this.format(i, r), this.value = this.begin + this.unit, this.start = k(), !1 !== t.autoplay && this.play()
        }, e.play = function () {
          var t;
          this.active || (this.start || (this.start = k()), this.active = !0, t = this, 1 === l.push(t) && F(r))
        }, e.stop = function () {
          var e, r, n;
          this.active && (this.active = !1, e = this, (n = t.inArray(e, l)) >= 0 && (r = l.slice(n + 1), l.length = n, r.length && (l = l.concat(r))))
        }, e.render = function (t) {
          var e, r = t - this.start;
          if (this.delay) {
            if (r <= this.delay) return;
            r -= this.delay
          }
          if (r < this.duration) {
            var n = this.ease(r, 0, 1, this.duration);
            return e = this.startRGB ? function (t, e, r) {
              return a(t[0] + r * (e[0] - t[0]), t[1] + r * (e[1] - t[1]), t[2] + r * (e[2] - t[2]))
            }(this.startRGB, this.endRGB, n) : function (t) {
              return Math.round(t * h) / h
            }(this.begin + n * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
          }
          e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
        }, e.format = function (t, e) {
          if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
          if (!this.unit) {
            var r = e.replace(y, "");
            r !== t.replace(y, "") && o("tween", e, t), this.unit = r
          }
          e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
        }, e.destroy = function () {
          this.stop(), this.context = null, this.ease = this.update = this.complete = s
        };
        var l = [],
          h = 1e3
      }),
      H = c(z, function (t) {
        t.init = function (t) {
          this.duration = t.duration || 0, this.complete = t.complete || s, this.context = t.context, this.play()
        }, t.render = function (t) {
          t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
        }
      }),
      X = c(z, function (t, e) {
        t.init = function (t) {
          var e, r;
          for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) r = t.values[e], this.current[e] !== r && this.tweens.push(new z({
            name: e,
            from: this.current[e],
            to: r,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
          this.play()
        }, t.render = function (t) {
          var e, r, n = !1;
          for (e = this.tweens.length; e--;)(r = this.tweens[e]).context && (r.render(t), this.current[r.name] = r.value, n = !0);
          return n ? void(this.update && this.update.call(this.context)) : this.destroy()
        }, t.destroy = function () {
          if (e.destroy.call(this), this.tweens) {
            var t;
            for (t = this.tweens.length; t--;) this.tweens[t].destroy();
            this.tweens = null, this.current = null
          }
        }
      }),
      U = e.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !D.transition,
        agentTests: []
      };
    e.fallback = function (t) {
      if (!D.transition) return U.fallback = !0;
      U.agentTests.push("(" + t + ")");
      var e = new RegExp(U.agentTests.join("|"), "i");
      U.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new z(t)
    }, e.delay = function (t, e, r) {
      return new H({
        complete: e,
        duration: t,
        context: r
      })
    }, t.fn.tram = function (t) {
      return e.call(null, this, t)
    };
    var W = t.style,
      Y = t.css,
      q = {
        transform: D.transform && D.transform.css
      },
      K = {
        color: [G, E],
        background: [G, E, "background-color"],
        "outline-color": [G, E],
        "border-color": [G, E],
        "border-top-color": [G, E],
        "border-right-color": [G, E],
        "border-bottom-color": [G, E],
        "border-left-color": [G, E],
        "border-width": [V, _],
        "border-top-width": [V, _],
        "border-right-width": [V, _],
        "border-bottom-width": [V, _],
        "border-left-width": [V, _],
        "border-spacing": [V, _],
        "letter-spacing": [V, _],
        margin: [V, _],
        "margin-top": [V, _],
        "margin-right": [V, _],
        "margin-bottom": [V, _],
        "margin-left": [V, _],
        padding: [V, _],
        "padding-top": [V, _],
        "padding-right": [V, _],
        "padding-bottom": [V, _],
        "padding-left": [V, _],
        "outline-width": [V, _],
        opacity: [V, g],
        top: [V, b],
        right: [V, b],
        bottom: [V, b],
        left: [V, b],
        "font-size": [V, b],
        "text-indent": [V, b],
        "word-spacing": [V, b],
        width: [V, b],
        "min-width": [V, b],
        "max-width": [V, b],
        height: [V, b],
        "min-height": [V, b],
        "max-height": [V, b],
        "line-height": [V, S],
        "scroll-top": [B, g, "scrollTop"],
        "scroll-left": [B, g, "scrollLeft"]
      },
      Q = {};
    D.transform && (K.transform = [j], Q = {
      x: [b, "translateX"],
      y: [b, "translateY"],
      rotate: [T],
      rotateX: [T],
      rotateY: [T],
      scale: [g],
      scaleX: [g],
      scaleY: [g],
      skew: [T],
      skewX: [T],
      skewY: [T]
    }), D.transform && D.backface && (Q.z = [b, "translateZ"], Q.rotateZ = [T], Q.scaleZ = [g], Q.perspective = [_]);
    var $ = /ms/,
      Z = /s|\./;
    return t.tram = e
  }(window.jQuery)
}, function (t, e, r) {
  var n = r(94),
    i = r(18),
    a = r(69),
    s = Math.max;
  t.exports = function (t, e, r) {
    var o = null == t ? 0 : t.length;
    if (!o) return -1;
    var l = null == r ? 0 : a(r);
    return l < 0 && (l = s(o + l, 0)), n(t, i(e, 3), l)
  }
}, function (t, e) {
  t.exports = function (t, e, r, n) {
    for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
      if (e(t[a], a, t)) return a;
    return -1
  }
}, function (t, e, r) {
  var n = r(40),
    i = r(169),
    a = r(170),
    s = r(171),
    o = r(172),
    l = r(173);

  function h(t) {
    var e = this.__data__ = new n(t);
    this.size = e.size
  }
  h.prototype.clear = i, h.prototype.delete = a, h.prototype.get = s, h.prototype.has = o, h.prototype.set = l, t.exports = h
}, function (t, e, r) {
  var n = r(25),
    i = r(12),
    a = "[object AsyncFunction]",
    s = "[object Function]",
    o = "[object GeneratorFunction]",
    l = "[object Proxy]";
  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = n(t);
    return e == s || e == o || e == a || e == l
  }
}, function (t, e, r) {
  (function (e) {
    var r = "object" == typeof e && e && e.Object === Object && e;
    t.exports = r
  }).call(this, r(42))
}, function (t, e) {
  var r = Function.prototype.toString;
  t.exports = function (t) {
    if (null != t) {
      try {
        return r.call(t)
      } catch (t) {}
      try {
        return t + ""
      } catch (t) {}
    }
    return ""
  }
}, function (t, e, r) {
  var n = r(192),
    i = r(20);
  t.exports = function t(e, r, a, s, o) {
    return e === r || (null == e || null == r || !i(e) && !i(r) ? e != e && r != r : n(e, r, a, s, t, o))
  }
}, function (t, e, r) {
  var n = r(193),
    i = r(196),
    a = r(197),
    s = 1,
    o = 2;
  t.exports = function (t, e, r, l, h, c) {
    var u = r & s,
      f = t.length,
      p = e.length;
    if (f != p && !(u && p > f)) return !1;
    var d = c.get(t);
    if (d && c.get(e)) return d == e;
    var m = -1,
      y = !0,
      v = r & o ? new n : void 0;
    for (c.set(t, e), c.set(e, t); ++m < f;) {
      var g = t[m],
        E = e[m];
      if (l) var _ = u ? l(E, g, m, e, t, c) : l(g, E, m, t, e, c);
      if (void 0 !== _) {
        if (_) continue;
        y = !1;
        break
      }
      if (v) {
        if (!i(e, function (t, e) {
            if (!a(v, e) && (g === t || h(g, t, r, l, c))) return v.push(e)
          })) {
          y = !1;
          break
        }
      } else if (g !== E && !h(g, E, r, l, c)) {
        y = !1;
        break
      }
    }
    return c.delete(t), c.delete(e), y
  }
}, function (t, e, r) {
  var n = r(58),
    i = r(2);
  t.exports = function (t, e, r) {
    var a = e(t);
    return i(t) ? a : n(a, r(t))
  }
}, function (t, e, r) {
  var n = r(204),
    i = r(103),
    a = Object.prototype.propertyIsEnumerable,
    s = Object.getOwnPropertySymbols,
    o = s ? function (t) {
      return null == t ? [] : (t = Object(t), n(s(t), function (e) {
        return a.call(t, e)
      }))
    } : i;
  t.exports = o
}, function (t, e) {
  t.exports = function () {
    return []
  }
}, function (t, e, r) {
  var n = r(205),
    i = r(46),
    a = r(2),
    s = r(59),
    o = r(60),
    l = r(61),
    h = Object.prototype.hasOwnProperty;
  t.exports = function (t, e) {
    var r = a(t),
      c = !r && i(t),
      u = !r && !c && s(t),
      f = !r && !c && !u && l(t),
      p = r || c || u || f,
      d = p ? n(t.length, String) : [],
      m = d.length;
    for (var y in t) !e && !h.call(t, y) || p && ("length" == y || u && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || o(y, m)) || d.push(y);
    return d
  }
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (r) {
      return t(e(r))
    }
  }
}, function (t, e, r) {
  var n = r(19)(r(7), "WeakMap");
  t.exports = n
}, function (t, e, r) {
  var n = r(12);
  t.exports = function (t) {
    return t == t && !n(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (r) {
      return null != r && r[t] === e && (void 0 !== e || t in Object(r))
    }
  }
}, function (t, e, r) {
  var n = r(111);
  t.exports = function (t) {
    return null == t ? "" : n(t)
  }
}, function (t, e, r) {
  var n = r(31),
    i = r(112),
    a = r(2),
    s = r(49),
    o = 1 / 0,
    l = n ? n.prototype : void 0,
    h = l ? l.toString : void 0;
  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (a(e)) return i(e, t) + "";
    if (s(e)) return h ? h.call(e) : "";
    var r = e + "";
    return "0" == r && 1 / e == -o ? "-0" : r
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
    return i
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t]
    }
  }
}, function (t, e, r) {
  var n = r(50);
  t.exports = n("native-function-to-string", Function.toString)
}, function (t, e, r) {
  var n = r(14),
    i = r(6),
    a = r(116);
  t.exports = !n && !i(function () {
    return 7 != Object.defineProperty(a("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e, r) {
  var n = r(8),
    i = r(16),
    a = n.document,
    s = i(a) && i(a.createElement);
  t.exports = function (t) {
    return s ? a.createElement(t) : {}
  }
}, function (t, e) {
  var r = 0,
    n = Math.random();
  t.exports = function (t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + n).toString(36)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(237),
    a = r(124),
    s = r(243),
    o = r(126),
    l = r(21),
    h = r(120),
    c = r(5),
    u = r(75),
    f = r(34),
    p = r(123),
    d = p.IteratorPrototype,
    m = p.BUGGY_SAFARI_ITERATORS,
    y = c("iterator"),
    v = function () {
      return this
    };
  t.exports = function (t, e, r, c, p, g, E) {
    i(r, e, c);
    var _, b, T, S = function (t) {
        if (t === p && P) return P;
        if (!m && t in x) return x[t];
        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new r(this, t)
            }
        }
        return function () {
          return new r(this)
        }
      },
      I = e + " Iterator",
      A = !1,
      x = t.prototype,
      C = x[y] || x["@@iterator"] || p && x[p],
      P = !m && C || S(p),
      w = "Array" == e && x.entries || C;
    if (w && (_ = a(w.call(new t)), d !== Object.prototype && _.next && (u || a(_) === d || (s ? s(_, d) : "function" != typeof _[y] && l(_, y, v)), o(_, I, !0, !0), u && (f[I] = v))), "values" == p && C && "values" !== C.name && (A = !0, P = function () {
        return C.call(this)
      }), u && !E || x[y] === P || l(x, y, P), f[e] = P, p)
      if (b = {
          values: S("values"),
          keys: g ? P : S("keys"),
          entries: S("entries")
        }, E)
        for (T in b) !m && !A && T in x || h(x, T, b[T]);
      else n({
        target: e,
        proto: !0,
        forced: m || A
      }, b);
    return b
  }
}, function (t, e, r) {
  var n = r(14),
    i = r(231),
    a = r(51),
    s = r(22),
    o = r(74),
    l = r(17),
    h = r(115),
    c = Object.getOwnPropertyDescriptor;
  e.f = n ? c : function (t, e) {
    if (t = s(t), e = o(e, !0), h) try {
      return c(t, e)
    } catch (t) {}
    if (l(t, e)) return a(!i.f.call(t, e), t[e])
  }
}, function (t, e, r) {
  var n = r(8),
    i = r(50),
    a = r(21),
    s = r(17),
    o = r(73),
    l = r(114),
    h = r(72),
    c = h.get,
    u = h.enforce,
    f = String(l).split("toString");
  i("inspectSource", function (t) {
    return l.call(t)
  }), (t.exports = function (t, e, r, i) {
    var l = !!i && !!i.unsafe,
      h = !!i && !!i.enumerable,
      c = !!i && !!i.noTargetGet;
    "function" == typeof r && ("string" != typeof e || s(r, "name") || a(r, "name", e), u(r).source = f.join("string" == typeof e ? e : "")), t !== n ? (l ? !c && t[e] && (h = !0) : delete t[e], h ? t[e] = r : a(t, e, r)) : h ? t[e] = r : o(e, r)
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && c(this).source || l.call(this)
  })
}, function (t, e, r) {
  t.exports = r(8)
}, function (t, e, r) {
  var n = r(17),
    i = r(22),
    a = r(80).indexOf,
    s = r(77);
  t.exports = function (t, e) {
    var r, o = i(t),
      l = 0,
      h = [];
    for (r in o) !n(s, r) && n(o, r) && h.push(r);
    for (; e.length > l;) n(o, r = e[l++]) && (~a(h, r) || h.push(r));
    return h
  }
}, function (t, e, r) {
  "use strict";
  var n, i, a, s = r(124),
    o = r(21),
    l = r(17),
    h = r(5),
    c = r(75),
    u = h("iterator"),
    f = !1;
  [].keys && ("next" in (a = [].keys()) ? (i = s(s(a))) !== Object.prototype && (n = i) : f = !0), null == n && (n = {}), c || l(n, u) || o(n, u, function () {
    return this
  }), t.exports = {
    IteratorPrototype: n,
    BUGGY_SAFARI_ITERATORS: f
  }
}, function (t, e, r) {
  var n = r(17),
    i = r(4),
    a = r(76),
    s = r(238),
    o = a("IE_PROTO"),
    l = Object.prototype;
  t.exports = s ? Object.getPrototypeOf : function (t) {
    return t = i(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null
  }
}, function (t, e, r) {
  var n = r(28),
    i = r(240),
    a = r(81),
    s = r(77),
    o = r(242),
    l = r(116),
    h = r(76)("IE_PROTO"),
    c = function () {},
    u = function () {
      var t, e = l("iframe"),
        r = a.length;
      for (e.style.display = "none", o.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[a[r]];
      return u()
    };
  t.exports = Object.create || function (t, e) {
    var r;
    return null !== t ? (c.prototype = n(t), r = new c, c.prototype = null, r[h] = t) : r = u(), void 0 === e ? r : i(r, e)
  }, s[h] = !0
}, function (t, e, r) {
  var n = r(15).f,
    i = r(17),
    a = r(5)("toStringTag");
  t.exports = function (t, e, r) {
    t && !i(t = r ? t : t.prototype, a) && n(t, a, {
      configurable: !0,
      value: e
    })
  }
}, function (t, e, r) {
  "use strict";
  var n = r(29),
    i = r(3),
    a = r(82),
    s = function (t, e, r, o, l, h, c, u) {
      for (var f, p = l, d = 0, m = !!c && a(c, u, 3); d < o;) {
        if (d in r) {
          if (f = m ? m(r[d], d, e) : r[d], h > 0 && n(f)) p = s(t, e, f, i(f.length), p, h - 1) - 1;
          else {
            if (p >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
            t[p] = f
          }
          p++
        }
        d++
      }
      return p
    };
  t.exports = s
}, function (t, e, r) {
  var n = r(53),
    i = r(4),
    a = r(52),
    s = r(3),
    o = function (t) {
      return function (e, r, o, l) {
        n(r);
        var h = i(e),
          c = a(h),
          u = s(h.length),
          f = t ? u - 1 : 0,
          p = t ? -1 : 1;
        if (o < 2)
          for (;;) {
            if (f in c) {
              l = c[f], f += p;
              break
            }
            if (f += p, t ? f < 0 : u <= f) throw TypeError("Reduce of empty array with no initial value")
          }
        for (; t ? f >= 0 : u > f; f += p) f in c && (l = r(l, c[f], f, h));
        return l
      }
    };
  t.exports = {
    left: o(!1),
    right: o(!0)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(290);

  function i(t, e) {
    var r = document.createEvent("CustomEvent");
    r.initCustomEvent(e, !0, !0, null), t.dispatchEvent(r)
  }
  var a = window.jQuery,
    s = {},
    o = {
      reset: function (t, e) {
        n.triggers.reset(t, e)
      },
      intro: function (t, e) {
        n.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
      },
      outro: function (t, e) {
        n.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
      }
    };
  s.triggers = {}, s.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, a.extend(s.triggers, o), t.exports = s
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(83);
  r.d(e, "createStore", function () {
    return n.default
  });
  var i = r(133);
  r.d(e, "combineReducers", function () {
    return i.default
  });
  var a = r(135);
  r.d(e, "bindActionCreators", function () {
    return a.default
  });
  var s = r(136);
  r.d(e, "applyMiddleware", function () {
    return s.default
  });
  var o = r(84);
  r.d(e, "compose", function () {
    return o.default
  });
  r(134)
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(293),
    i = r(298),
    a = r(300),
    s = "[object Object]",
    o = Function.prototype,
    l = Object.prototype,
    h = o.toString,
    c = l.hasOwnProperty,
    u = h.call(Object);
  e.default = function (t) {
    if (!Object(a.default)(t) || Object(n.default)(t) != s) return !1;
    var e = Object(i.default)(t);
    if (null === e) return !0;
    var r = c.call(e, "constructor") && e.constructor;
    return "function" == typeof r && r instanceof r && h.call(r) == u
  }
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(294).default.Symbol;
  e.default = n
}, function (t, e, r) {
  "use strict";
  r.r(e), r.d(e, "default", function () {
    return a
  });
  var n = r(83);
  r(131), r(134);

  function i(t, e) {
    var r = e && e.type;
    return "Given action " + (r && '"' + r.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
  }

  function a(t) {
    for (var e = Object.keys(t), r = {}, a = 0; a < e.length; a++) {
      var s = e[a];
      0, "function" == typeof t[s] && (r[s] = t[s])
    }
    var o, l = Object.keys(r);
    try {
      ! function (t) {
        Object.keys(t).forEach(function (e) {
          var r = t[e];
          if (void 0 === r(void 0, {
              type: n.ActionTypes.INIT
            })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          if (void 0 === r(void 0, {
              type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
        })
      }(r)
    } catch (t) {
      o = t
    }
    return function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = arguments[1];
      if (o) throw o;
      for (var n = !1, a = {}, s = 0; s < l.length; s++) {
        var h = l[s],
          c = r[h],
          u = t[h],
          f = c(u, e);
        if (void 0 === f) {
          var p = i(h, e);
          throw new Error(p)
        }
        a[h] = f, n = n || f !== u
      }
      return n ? a : t
    }
  }
}, function (t, e, r) {
  "use strict";

  function n(t) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(t);
    try {
      throw new Error(t)
    } catch (t) {}
  }
  r.r(e), r.d(e, "default", function () {
    return n
  })
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function () {
      return e(t.apply(void 0, arguments))
    }
  }

  function i(t, e) {
    if ("function" == typeof t) return n(t, e);
    if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    for (var r = Object.keys(t), i = {}, a = 0; a < r.length; a++) {
      var s = r[a],
        o = t[s];
      "function" == typeof o && (i[s] = n(o, e))
    }
    return i
  }
  r.r(e), r.d(e, "default", function () {
    return i
  })
}, function (t, e, r) {
  "use strict";
  r.r(e), r.d(e, "default", function () {
    return a
  });
  var n = r(84),
    i = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
      }
      return t
    };

  function a() {
    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    return function (t) {
      return function (r, a, s) {
        var o, l = t(r, a, s),
          h = l.dispatch,
          c = {
            getState: l.getState,
            dispatch: function (t) {
              return h(t)
            }
          };
        return o = e.map(function (t) {
          return t(c)
        }), h = n.default.apply(void 0, o)(l.dispatch), i({}, l, {
          dispatch: h
        })
      }
    }
  }
}, function (t, e, r) {
  var n = r(138)(r(93));
  t.exports = n
}, function (t, e, r) {
  var n = r(18),
    i = r(26),
    a = r(45);
  t.exports = function (t) {
    return function (e, r, s) {
      var o = Object(e);
      if (!i(e)) {
        var l = n(r, 3);
        e = a(e), r = function (t) {
          return l(o[t], t, o)
        }
      }
      var h = t(e, r, s);
      return h > -1 ? o[l ? e[h] : h] : void 0
    }
  }
}, function (t, e, r) {
  "use strict";
  var n = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.inQuad = function (t) {
    return Math.pow(t, 2)
  }, e.outQuad = function (t) {
    return -(Math.pow(t - 1, 2) - 1)
  }, e.inOutQuad = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
    return -.5 * ((t -= 2) * t - 2)
  }, e.inCubic = function (t) {
    return Math.pow(t, 3)
  }, e.outCubic = function (t) {
    return Math.pow(t - 1, 3) + 1
  }, e.inOutCubic = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
    return .5 * (Math.pow(t - 2, 3) + 2)
  }, e.inQuart = function (t) {
    return Math.pow(t, 4)
  }, e.outQuart = function (t) {
    return -(Math.pow(t - 1, 4) - 1)
  }, e.inOutQuart = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
    return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
  }, e.inQuint = function (t) {
    return Math.pow(t, 5)
  }, e.outQuint = function (t) {
    return Math.pow(t - 1, 5) + 1
  }, e.inOutQuint = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
    return .5 * (Math.pow(t - 2, 5) + 2)
  }, e.inSine = function (t) {
    return 1 - Math.cos(t * (Math.PI / 2))
  }, e.outSine = function (t) {
    return Math.sin(t * (Math.PI / 2))
  }, e.inOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
  }, e.inExpo = function (t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
  }, e.outExpo = function (t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
  }, e.inOutExpo = function (t) {
    if (0 === t) return 0;
    if (1 === t) return 1;
    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (2 - Math.pow(2, -10 * --t))
  }, e.inCirc = function (t) {
    return -(Math.sqrt(1 - t * t) - 1)
  }, e.outCirc = function (t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2))
  }, e.inOutCirc = function (t) {
    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  }, e.outBounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.inBack = function (t) {
    return t * t * ((a + 1) * t - a)
  }, e.outBack = function (t) {
    return (t -= 1) * t * ((a + 1) * t + a) + 1
  }, e.inOutBack = function (t) {
    var e = a;
    if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
    return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.inElastic = function (t) {
    var e = a,
      r = 0,
      n = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    r || (r = .3);
    n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n);
    return -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)
  }, e.outElastic = function (t) {
    var e = a,
      r = 0,
      n = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    r || (r = .3);
    n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n);
    return n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1
  }, e.inOutElastic = function (t) {
    var e = a,
      r = 0,
      n = 1;
    if (0 === t) return 0;
    if (2 == (t /= .5)) return 1;
    r || (r = .3 * 1.5);
    n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n);
    if (t < 1) return n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * -.5;
    return n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1
  }, e.swingFromTo = function (t) {
    var e = a;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.swingFrom = function (t) {
    return t * t * ((a + 1) * t - a)
  }, e.swingTo = function (t) {
    return (t -= 1) * t * ((a + 1) * t + a) + 1
  }, e.bounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.bouncePast = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
  }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
  var i = n(r(140)),
    a = 1.70158,
    s = (0, i.default)(.25, .1, .25, 1);
  e.ease = s;
  var o = (0, i.default)(.42, 0, 1, 1);
  e.easeIn = o;
  var l = (0, i.default)(0, 0, .58, 1);
  e.easeOut = l;
  var h = (0, i.default)(.42, 0, .58, 1);
  e.easeInOut = h
}, function (t, e) {
  var r = 4,
    n = .001,
    i = 1e-7,
    a = 10,
    s = 11,
    o = 1 / (s - 1),
    l = "function" == typeof Float32Array;

  function h(t, e) {
    return 1 - 3 * e + 3 * t
  }

  function c(t, e) {
    return 3 * e - 6 * t
  }

  function u(t) {
    return 3 * t
  }

  function f(t, e, r) {
    return ((h(e, r) * t + c(e, r)) * t + u(e)) * t
  }

  function p(t, e, r) {
    return 3 * h(e, r) * t * t + 2 * c(e, r) * t + u(e)
  }
  t.exports = function (t, e, h, c) {
    if (!(0 <= t && t <= 1 && 0 <= h && h <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var u = l ? new Float32Array(s) : new Array(s);
    if (t !== e || h !== c)
      for (var d = 0; d < s; ++d) u[d] = f(d * o, t, h);

    function m(e) {
      for (var l = 0, c = 1, d = s - 1; c !== d && u[c] <= e; ++c) l += o;
      var m = l + (e - u[--c]) / (u[c + 1] - u[c]) * o,
        y = p(m, t, h);
      return y >= n ? function (t, e, n, i) {
        for (var a = 0; a < r; ++a) {
          var s = p(e, n, i);
          if (0 === s) return e;
          e -= (f(e, n, i) - t) / s
        }
        return e
      }(e, m, t, h) : 0 === y ? m : function (t, e, r, n, s) {
        var o, l, h = 0;
        do {
          (o = f(l = e + (r - e) / 2, n, s) - t) > 0 ? r = l : e = l
        } while (Math.abs(o) > i && ++h < a);
        return l
      }(e, l, l + o, t, h)
    }
    return function (r) {
      return t === e && h === c ? r : 0 === r ? 0 : 1 === r ? 1 : f(m(r), e, c)
    }
  }
}, function (t, e, r) {
  "use strict";
  var n = r(1)(r(142)),
    i = r(1),
    a = r(54);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.optimizeFloat = l, e.createBezierEasing = function (t) {
    return o.default.apply(void 0, (0, n.default)(t))
  }, e.applyEasing = function (t, e, r) {
    if (0 === e) return 0;
    if (1 === e) return 1;
    if (r) return l(e > 0 ? r(e) : e);
    return l(e > 0 && t && s[t] ? s[t](e) : e)
  };
  var s = a(r(139)),
    o = i(r(140));

  function l(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      n = Math.pow(r, e),
      i = Number(Math.round(t * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0
  }
}, function (t, e, r) {
  var n = r(306),
    i = r(307),
    a = r(308);
  t.exports = function (t) {
    return n(t) || i(t) || a()
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
  e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
  e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
  e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
  e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
  e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
  e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
  e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
  e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
  e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
  e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
  e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
  e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
  e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
  e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
  e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
  e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
  e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
  e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
  e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
  e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0;
  e.MOUSE_CLICK = "MOUSE_CLICK";
  e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
  e.MOUSE_DOWN = "MOUSE_DOWN";
  e.MOUSE_UP = "MOUSE_UP";
  e.MOUSE_OVER = "MOUSE_OVER";
  e.MOUSE_OUT = "MOUSE_OUT";
  e.MOUSE_MOVE = "MOUSE_MOVE";
  e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
  e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
  e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
  e.TAB_ACTIVE = "TAB_ACTIVE";
  e.TAB_INACTIVE = "TAB_INACTIVE";
  e.NAVBAR_OPEN = "NAVBAR_OPEN";
  e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
  e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
  e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
  e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
  e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
  e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
  e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
  e.PAGE_START = "PAGE_START";
  e.PAGE_FINISH = "PAGE_FINISH";
  e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
  e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
  e.PAGE_SCROLL = "PAGE_SCROLL";
  e.ELEMENT = "ELEMENT";
  e.VIEWPORT = "VIEWPORT";
  e.PAGE = "PAGE";
  e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
  e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE"
}, function (t, e, r) {
  "use strict";
  var n = r(1)(r(24));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isPluginType = function (t) {
    return t === a.PLUGIN_LOTTIE
  }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
  var i = r(312),
    a = r(86),
    s = r(85),
    o = (0, n.default)({}, a.PLUGIN_LOTTIE, {
      getConfig: i.getPluginConfig,
      getOrigin: i.getPluginOrigin,
      getDuration: i.getPluginDuration,
      getDestination: i.getPluginDestination,
      createInstance: i.createPluginInstance,
      render: i.renderPlugin,
      clear: i.clearPlugin
    });
  var l = function (t) {
      return function (e) {
        if (!s.IS_BROWSER_ENV) return function () {
          return null
        };
        var r = o[e];
        if (!r) throw new Error("IX2 no plugin configured for: ".concat(e));
        var n = r[t];
        if (!n) throw new Error("IX2 invalid plugin method: ".concat(t));
        return n
      }
    },
    h = l("getConfig");
  e.getPluginConfig = h;
  var c = l("getOrigin");
  e.getPluginOrigin = c;
  var u = l("getDuration");
  e.getPluginDuration = u;
  var f = l("getDestination");
  e.getPluginDestination = f;
  var p = l("createInstance");
  e.createPluginInstance = p;
  var d = l("render");
  e.renderPlugin = d;
  var m = l("clear");
  e.clearPlugin = m
}, function (t, e, r) {
  var n = r(147),
    i = r(319)(n);
  t.exports = i
}, function (t, e, r) {
  var n = r(317),
    i = r(45);
  t.exports = function (t, e) {
    return t && n(t, e, i)
  }
}, function (t, e, r) {
  "use strict";
  e.__esModule = !0;
  var n, i = r(323),
    a = (n = i) && n.__esModule ? n : {
      default: n
    };
  e.default = a.default
}, function (t, e, r) {
  "use strict";
  var n = r(1)(r(142)),
    i = r(54),
    a = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.observeRequests = function (t) {
    V({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.preview
      },
      onChange: at
    }), V({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.playback
      },
      onChange: lt
    }), V({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.stop
      },
      onChange: ht
    }), V({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.clear
      },
      onChange: ct
    })
  }, e.startEngine = ut, e.stopEngine = ft, e.stopAllActionGroups = _t, e.stopActionGroup = bt, e.startActionGroup = Tt;
  var s = a(r(30)),
    o = a(r(328)),
    l = a(r(137)),
    h = a(r(47)),
    c = a(r(330)),
    u = a(r(336)),
    f = a(r(348)),
    p = a(r(349)),
    d = a(r(350)),
    m = a(r(353)),
    y = a(r(354)),
    v = a(r(148)),
    g = r(10),
    E = r(88),
    _ = i(r(357)),
    b = a(r(358)),
    T = g.IX2EngineEventTypes,
    S = T.MOUSE_CLICK,
    I = T.MOUSE_SECOND_CLICK,
    A = g.IX2EngineConstants,
    x = A.COLON_DELIMITER,
    C = A.BOUNDARY_SELECTOR,
    P = A.HTML_ELEMENT,
    w = A.RENDER_GENERAL,
    O = A.W_MOD_IX,
    D = g.IX2EngineItemTypes,
    M = D.GENERAL_START_ACTION,
    R = D.GENERAL_CONTINUOUS_ACTION,
    F = g.IX2VanillaUtils,
    k = F.getAffectedElements,
    L = F.getElementId,
    N = F.getDestinationValues,
    V = F.observeStore,
    G = F.getInstanceId,
    B = F.renderHTMLElement,
    j = F.clearAllStyles,
    z = F.getMaxDurationItemIndex,
    H = F.getComputedStyle,
    X = F.getInstanceOrigin,
    U = F.reduceListToGroup,
    W = F.shouldNamespaceEventParameter,
    Y = F.getNamespacedParameterId,
    q = F.shouldAllowMediaQuery,
    K = F.cleanupHTMLElement,
    Q = F.stringifyTarget,
    $ = F.mediaQueriesEqual,
    Z = g.IX2VanillaPlugins,
    J = Z.isPluginType,
    tt = Z.createPluginInstance,
    et = Z.getPluginDuration,
    rt = navigator.userAgent,
    nt = rt.match(/iPad/i) || rt.match(/iPhone/),
    it = 12;

  function at(t, e) {
    var r = t.rawData,
      n = function () {
        ut({
          store: e,
          rawData: r,
          allowEvents: !0
        }), st()
      };
    t.defer ? setTimeout(n, 0) : n()
  }

  function st() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }

  function ot(t) {
    return t && (0, m.default)(t, "_EFFECT")
  }

  function lt(t, e) {
    var r = t.actionTypeId,
      n = t.actionListId,
      i = t.actionItemId,
      a = t.eventId,
      s = t.allowEvents,
      o = t.immediate,
      l = t.testManual,
      h = t.verbose,
      c = void 0 === h || h,
      u = t.rawData;
    if (n && i && u && o) {
      var f = u.actionLists[n];
      f && (u = U({
        actionList: f,
        actionItemId: i,
        rawData: u
      }))
    }
    if (ut({
        store: e,
        rawData: u,
        allowEvents: s,
        testManual: l
      }), n && r === M || ot(r)) {
      bt({
        store: e,
        actionListId: n
      }), Et({
        store: e,
        actionListId: n,
        eventId: a
      });
      var p = Tt({
        store: e,
        eventId: a,
        actionListId: n,
        immediate: o,
        verbose: c
      });
      c && p && e.dispatch((0, E.actionListPlaybackChanged)({
        actionListId: n,
        isPlaying: !o
      }))
    }
  }

  function ht(t, e) {
    var r = t.actionListId;
    r ? bt({
      store: e,
      actionListId: r
    }) : _t({
      store: e
    }), ft(e)
  }

  function ct(t, e) {
    ft(e), j({
      store: e,
      elementApi: _
    })
  }

  function ut(t) {
    var e, r = t.store,
      i = t.rawData,
      a = t.allowEvents,
      s = t.testManual,
      o = r.getState().ixSession;
    i && r.dispatch((0, E.rawDataImported)(i)), o.active || (r.dispatch((0, E.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(C))
    })), a && (function (t) {
      var e = t.getState().ixData.eventTypeMap;
      mt(t), (0, d.default)(e, function (e, r) {
        var i = b.default[r];
        i ? function (t) {
          var e = t.logic,
            r = t.store,
            i = t.events;
          ! function (t) {
            if (nt) {
              var e = {},
                r = "";
              for (var n in t) {
                var i = t[n],
                  a = i.eventTypeId,
                  s = i.target,
                  o = _.getQuerySelector(s);
                e[o] || a !== S && a !== I || (e[o] = !0, r += o + "{cursor: pointer;touch-action: manipulation;}")
              }
              if (r) {
                var l = document.createElement("style");
                l.textContent = r, document.body.appendChild(l)
              }
            }
          }(i);
          var a = e.types,
            s = e.handler,
            o = r.getState().ixData,
            u = o.actionLists,
            f = yt(i, gt);
          if ((0, c.default)(f)) {
            (0, d.default)(f, function (t, e) {
              var a = i[e],
                s = a.action,
                c = a.id,
                f = a.mediaQueries,
                p = void 0 === f ? o.mediaQueryKeys : f,
                d = s.config.actionListId;
              if ($(p, o.mediaQueryKeys) || r.dispatch((0, E.mediaQueriesDefined)()), s.actionTypeId === R) {
                var m = Array.isArray(a.config) ? a.config : [a.config];
                m.forEach(function (e) {
                  var i = e.continuousParameterGroupId,
                    a = (0, h.default)(u, "".concat(d, ".continuousParameterGroups"), []),
                    s = (0, l.default)(a, function (t) {
                      var e = t.id;
                      return e === i
                    }),
                    o = (e.smoothing || 0) / 100,
                    f = (e.restingState || 0) / 100;
                  s && t.forEach(function (t, i) {
                    var a = c + x + i;
                    ! function (t) {
                      var e = t.store,
                        r = t.eventStateKey,
                        i = t.eventTarget,
                        a = t.eventId,
                        s = t.eventConfig,
                        o = t.actionListId,
                        l = t.parameterGroup,
                        c = t.smoothing,
                        u = t.restingValue,
                        f = e.getState(),
                        p = f.ixData,
                        d = f.ixSession,
                        m = p.events[a],
                        y = m.eventTypeId,
                        v = {},
                        g = {},
                        E = [],
                        b = l.continuousActionGroups,
                        T = l.id;
                      W(y, s) && (T = Y(r, T));
                      var S = d.hasBoundaryNodes && i ? _.getClosestElement(i, C) : null;
                      b.forEach(function (t) {
                        var e = t.keyframe,
                          r = t.actionItems;
                        r.forEach(function (t) {
                          var r = t.actionTypeId,
                            a = t.config.target;
                          if (a) {
                            var s = a.boundaryMode ? S : null,
                              o = Q(a) + x + r;
                            if (g[o] = function () {
                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  r = arguments.length > 1 ? arguments[1] : void 0,
                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                  a = (0, n.default)(e);
                                return a.some(function (e, n) {
                                  return e.keyframe === r && (t = n, !0)
                                }), null == t && (t = a.length, a.push({
                                  keyframe: r,
                                  actionItems: []
                                })), a[t].actionItems.push(i), a
                              }(g[o], e, t), !v[o]) {
                              v[o] = !0;
                              var l = t.config;
                              k({
                                config: l,
                                event: m,
                                eventTarget: i,
                                elementRoot: s,
                                elementApi: _
                              }).forEach(function (t) {
                                E.push({
                                  element: t,
                                  key: o
                                })
                              })
                            }
                          }
                        })
                      }), E.forEach(function (t) {
                        var r = t.element,
                          n = t.key,
                          i = g[n],
                          s = (0, h.default)(i, "[0].actionItems[0]", {}),
                          l = s.actionTypeId,
                          f = J(l) ? tt(l)(r, s) : null,
                          p = N({
                            element: r,
                            actionItem: s,
                            elementApi: _
                          }, f);
                        St({
                          store: e,
                          element: r,
                          eventId: a,
                          actionListId: o,
                          actionItem: s,
                          destination: p,
                          continuous: !0,
                          parameterId: T,
                          actionGroups: i,
                          smoothing: c,
                          restingValue: u,
                          pluginInstance: f
                        })
                      })
                    }({
                      store: r,
                      eventStateKey: a,
                      eventTarget: t,
                      eventId: c,
                      eventConfig: e,
                      actionListId: d,
                      parameterGroup: s,
                      smoothing: o,
                      restingValue: f
                    })
                  })
                })
              }(s.actionTypeId === M || ot(s.actionTypeId)) && Et({
                store: r,
                actionListId: d,
                eventId: c
              })
            });
            var p = function (t) {
                var e = r.getState(),
                  n = e.ixSession;
                vt(f, function (e, a, l) {
                  var h = i[a],
                    c = n.eventState[l],
                    u = h.action,
                    f = h.mediaQueries,
                    p = void 0 === f ? o.mediaQueryKeys : f;
                  if (q(p, n.mediaQueryKey)) {
                    var d = function () {
                      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = s({
                          store: r,
                          element: e,
                          event: h,
                          eventConfig: n,
                          nativeEvent: t,
                          eventStateKey: l
                        }, c);
                      (0, v.default)(i, c) || r.dispatch((0, E.eventStateChanged)(l, i))
                    };
                    if (u.actionTypeId === R) {
                      var m = Array.isArray(h.config) ? h.config : [h.config];
                      m.forEach(d)
                    } else d()
                  }
                })
              },
              m = (0, y.default)(p, it),
              g = function (t) {
                var e = t.target,
                  n = void 0 === e ? document : e,
                  i = t.types,
                  a = t.throttle;
                i.split(" ").filter(Boolean).forEach(function (t) {
                  var e = a ? m : p;
                  n.addEventListener(t, e), r.dispatch((0, E.eventListenerAdded)(n, [t, e]))
                })
              };
            Array.isArray(a) ? a.forEach(g) : "string" == typeof a && g(e)
          }
        }({
          logic: i,
          store: t,
          events: e
        }) : console.warn("IX2 event type not configured: ".concat(r))
      }), t.getState().ixSession.eventListeners.length && function (t) {
        var e = function () {
          mt(t)
        };
        dt.forEach(function (r) {
          window.addEventListener(r, e), t.dispatch((0, E.eventListenerAdded)(window, [r, e]))
        }), e()
      }(t)
    }(r), -1 === (e = document.documentElement).className.indexOf(O) && (e.className += " ".concat(O)), r.getState().ixSession.hasDefinedMediaQueries && function (t) {
      V({
        store: t,
        select: function (t) {
          return t.ixSession.mediaQueryKey
        },
        onChange: function () {
          ft(t), j({
            store: t,
            elementApi: _
          }), ut({
            store: t,
            allowEvents: !0
          }), st()
        }
      })
    }(r)), r.dispatch((0, E.sessionStarted)()), function (t, e) {
      ! function r(n) {
        var i = t.getState(),
          a = i.ixSession,
          s = i.ixParameters;
        a.active && (t.dispatch((0, E.animationFrameChanged)(n, s)), e ? function (t, e) {
          var r = V({
            store: t,
            select: function (t) {
              return t.ixSession.tick
            },
            onChange: function (t) {
              e(t), r()
            }
          })
        }(t, r) : requestAnimationFrame(r))
      }(window.performance.now())
    }(r, s))
  }

  function ft(t) {
    var e = t.getState().ixSession;
    e.active && (e.eventListeners.forEach(pt), t.dispatch((0, E.sessionStopped)()))
  }

  function pt(t) {
    var e = t.target,
      r = t.listenerParams;
    e.removeEventListener.apply(e, r)
  }
  var dt = ["resize", "orientationchange"];

  function mt(t) {
    var e = t.getState(),
      r = e.ixSession,
      n = e.ixData,
      i = window.innerWidth;
    if (i !== r.viewportWidth) {
      var a = n.mediaQueries;
      t.dispatch((0, E.viewportWidthChanged)({
        width: i,
        mediaQueries: a
      }))
    }
  }
  var yt = function (t, e) {
      return (0, u.default)((0, p.default)(t, e), f.default)
    },
    vt = function (t, e) {
      (0, d.default)(t, function (t, r) {
        t.forEach(function (t, n) {
          e(t, r, r + x + n)
        })
      })
    },
    gt = function (t) {
      var e = {
        target: t.target
      };
      return k({
        config: e,
        elementApi: _
      })
    };

  function Et(t) {
    var e = t.store,
      r = t.actionListId,
      n = t.eventId,
      i = e.getState(),
      a = i.ixData,
      s = i.ixSession,
      o = a.actionLists,
      l = a.events[n],
      c = o[r];
    if (c && c.useFirstGroupAsInitialState) {
      var u = (0, h.default)(c, "actionItemGroups[0].actionItems", []),
        f = (0, h.default)(l, "mediaQueries", a.mediaQueryKeys);
      if (!q(f, s.mediaQueryKey)) return;
      u.forEach(function (t) {
        var i = t.config,
          a = t.actionTypeId,
          s = k({
            config: i,
            event: l,
            elementApi: _
          }),
          o = J(a);
        s.forEach(function (i) {
          var s = o ? tt(a)(i, t) : null;
          St({
            destination: N({
              element: i,
              actionItem: t,
              elementApi: _
            }, s),
            immediate: !0,
            store: e,
            element: i,
            eventId: n,
            actionItem: t,
            actionListId: r,
            pluginInstance: s
          })
        })
      })
    }
  }

  function _t(t) {
    var e = t.store,
      r = e.getState().ixInstances;
    (0, d.default)(r, function (t) {
      if (!t.continuous) {
        var r = t.actionListId,
          n = t.verbose;
        It(t, e), n && e.dispatch((0, E.actionListPlaybackChanged)({
          actionListId: r,
          isPlaying: !1
        }))
      }
    })
  }

  function bt(t) {
    var e = t.store,
      r = t.eventId,
      n = t.eventTarget,
      i = t.eventStateKey,
      a = t.actionListId,
      s = e.getState(),
      o = s.ixInstances,
      l = s.ixSession.hasBoundaryNodes && n ? _.getClosestElement(n, C) : null;
    (0, d.default)(o, function (t) {
      var n = (0, h.default)(t, "actionItem.config.target.boundaryMode"),
        s = !i || t.eventStateKey === i;
      if (t.actionListId === a && t.eventId === r && s) {
        if (l && n && !_.elementContains(l, t.element)) return;
        It(t, e), t.verbose && e.dispatch((0, E.actionListPlaybackChanged)({
          actionListId: a,
          isPlaying: !1
        }))
      }
    })
  }

  function Tt(t) {
    var e = t.store,
      r = t.eventId,
      n = t.eventTarget,
      i = t.eventStateKey,
      a = t.actionListId,
      s = t.groupIndex,
      o = void 0 === s ? 0 : s,
      l = t.immediate,
      c = t.verbose,
      u = e.getState(),
      f = u.ixData,
      p = u.ixSession,
      d = f.events[r] || {},
      m = d.mediaQueries,
      y = void 0 === m ? f.mediaQueryKeys : m,
      v = (0, h.default)(f, "actionLists.".concat(a), {}),
      g = v.actionItemGroups,
      E = v.useFirstGroupAsInitialState;
    if (!g || !g.length) return !1;
    o >= g.length && (0, h.default)(d, "config.loop") && (o = 0), 0 === o && E && o++;
    var b = (0 === o || 1 === o && E) && ot(d.action && d.action.actionTypeId) ? d.config.delay : void 0,
      T = (0, h.default)(g, [o, "actionItems"], []);
    if (!T.length) return !1;
    if (!q(y, p.mediaQueryKey)) return !1;
    var S = p.hasBoundaryNodes && n ? _.getClosestElement(n, C) : null,
      I = z(T),
      A = !1;
    return T.forEach(function (t, s) {
      var h = t.config,
        u = t.actionTypeId,
        f = J(u),
        p = h.target;
      if (p) {
        var m = p.boundaryMode ? S : null;
        k({
          config: h,
          event: d,
          eventTarget: n,
          elementRoot: m,
          elementApi: _
        }).forEach(function (h, p) {
          var d = f ? tt(u)(h, t) : null,
            m = f ? et(u)(h, t) : null;
          A = !0;
          var y = I === s && 0 === p,
            v = H({
              element: h,
              actionItem: t
            }),
            g = N({
              element: h,
              actionItem: t,
              elementApi: _
            }, d);
          St({
            store: e,
            element: h,
            actionItem: t,
            eventId: r,
            eventTarget: n,
            eventStateKey: i,
            actionListId: a,
            groupIndex: o,
            isCarrier: y,
            computedStyle: v,
            destination: g,
            immediate: l,
            verbose: c,
            pluginInstance: d,
            pluginDuration: m,
            instanceDelay: b
          })
        })
      }
    }), A
  }

  function St(t) {
    var e = t.store,
      r = t.computedStyle,
      n = (0, o.default)(t, ["store", "computedStyle"]),
      i = !n.continuous,
      a = n.element,
      l = n.actionItem,
      h = n.immediate,
      c = n.pluginInstance,
      u = G(),
      f = e.getState(),
      p = f.ixElements,
      d = f.ixSession,
      m = L(p, a),
      y = (p[m] || {}).refState,
      v = _.getRefType(a),
      g = X(a, y, r, l, _, c);
    e.dispatch((0, E.instanceAdded)((0, s.default)({
      instanceId: u,
      elementId: m,
      origin: g,
      refType: v
    }, n))), At(document.body, "ix2-animation-started", u), h ? function (t, e) {
      var r = t.getState().ixParameters;
      t.dispatch((0, E.instanceStarted)(e, 0)), t.dispatch((0, E.animationFrameChanged)(performance.now(), r)), xt(t.getState().ixInstances[e], t)
    }(e, u) : (V({
      store: e,
      select: function (t) {
        return t.ixInstances[u]
      },
      onChange: xt
    }), i && e.dispatch((0, E.instanceStarted)(u, d.tick)))
  }

  function It(t, e) {
    At(document.body, "ix2-animation-stopping", {
      instanceId: t.id,
      state: e.getState()
    });
    var r = t.elementId,
      n = t.actionItem,
      i = e.getState().ixElements[r] || {},
      a = i.ref;
    i.refType === P && K(a, n, _), e.dispatch((0, E.instanceRemoved)(t.id))
  }

  function At(t, e, r) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, r), t.dispatchEvent(n)
  }

  function xt(t, e) {
    var r = t.active,
      n = t.continuous,
      i = t.complete,
      a = t.elementId,
      s = t.actionItem,
      o = t.actionTypeId,
      l = t.renderType,
      h = t.current,
      c = t.groupIndex,
      u = t.eventId,
      f = t.eventTarget,
      p = t.eventStateKey,
      d = t.actionListId,
      m = t.isCarrier,
      y = t.styleProp,
      v = t.verbose,
      g = t.pluginInstance,
      b = e.getState(),
      T = b.ixData,
      S = b.ixSession,
      I = (T.events[u] || {}).mediaQueries,
      A = void 0 === I ? T.mediaQueryKeys : I;
    if (q(A, S.mediaQueryKey) && (n || r || i)) {
      if (h || l === w && i) {
        e.dispatch((0, E.elementStateChanged)(a, o, h, s));
        var x = e.getState().ixElements[a] || {},
          C = x.ref,
          O = x.refType,
          D = x.refState,
          M = D && D[o];
        switch (O) {
          case P:
            B(C, D, M, u, s, y, _, l, g)
        }
      }
      if (i) {
        if (m) {
          var R = Tt({
            store: e,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: d,
            groupIndex: c + 1,
            verbose: v
          });
          v && !R && e.dispatch((0, E.actionListPlaybackChanged)({
            actionListId: d,
            isPlaying: !1
          }))
        }
        It(t, e)
      }
    }
  }
}, function (t, e, r) {
  var n = r(151);
  t.exports = function (t, e, r) {
    "__proto__" == e && n ? n(t, e, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : t[e] = r
  }
}, function (t, e, r) {
  var n = r(19),
    i = function () {
      try {
        var t = n(Object, "defineProperty");
        return t({}, "", {}), t
      } catch (t) {}
    }();
  t.exports = i
}, function (t, e) {
  t.exports = function (t, e, r) {
    return t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== e && (t = t >= e ? t : e)), t
  }
}, function (t, e, r) {
  var n = r(12),
    i = Object.create,
    a = function () {
      function t() {}
      return function (e) {
        if (!n(e)) return {};
        if (i) return i(e);
        t.prototype = e;
        var r = new t;
        return t.prototype = void 0, r
      }
    }();
  t.exports = a
}, function (t, e, r) {
  var n = r(371),
    i = r(372),
    a = n ? function (t) {
      return n.get(t)
    } : i;
  t.exports = a
}, function (t, e, r) {
  var n = r(373),
    i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    for (var e = t.name + "", r = n[e], a = i.call(n, e) ? r.length : 0; a--;) {
      var s = r[a],
        o = s.func;
      if (null == o || o == t) return s.name
    }
    return e
  }
}, function (t, e, r) {
  r(157), r(288), r(289), r(129), r(291), r(379), r(380), r(381), r(382), t.exports = r(387)
}, function (t, e, r) {
  "use strict";
  var n = r(11),
    i = r(159),
    a = r(287);
  n.define("lottie", t.exports = function () {
    return {
      lottie: a,
      createInstance: i.createInstance,
      cleanupElement: i.cleanupElement,
      init: i.init,
      destroy: i.destroy,
      ready: i.ready
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = window.$,
    i = r(92) && n.tram;
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  t.exports = function () {
    var t = {
        VERSION: "1.6.0-Webflow"
      },
      e = {},
      r = Array.prototype,
      n = Object.prototype,
      a = Function.prototype,
      s = (r.push, r.slice),
      o = (r.concat, n.toString, n.hasOwnProperty),
      l = r.forEach,
      h = r.map,
      c = (r.reduce, r.reduceRight, r.filter),
      u = (r.every, r.some),
      f = r.indexOf,
      p = (r.lastIndexOf, Array.isArray, Object.keys),
      d = (a.bind, t.each = t.forEach = function (r, n, i) {
        if (null == r) return r;
        if (l && r.forEach === l) r.forEach(n, i);
        else if (r.length === +r.length) {
          for (var a = 0, s = r.length; a < s; a++)
            if (n.call(i, r[a], a, r) === e) return
        } else {
          var o = t.keys(r);
          for (a = 0, s = o.length; a < s; a++)
            if (n.call(i, r[o[a]], o[a], r) === e) return
        }
        return r
      });
    t.map = t.collect = function (t, e, r) {
      var n = [];
      return null == t ? n : h && t.map === h ? t.map(e, r) : (d(t, function (t, i, a) {
        n.push(e.call(r, t, i, a))
      }), n)
    }, t.find = t.detect = function (t, e, r) {
      var n;
      return m(t, function (t, i, a) {
        if (e.call(r, t, i, a)) return n = t, !0
      }), n
    }, t.filter = t.select = function (t, e, r) {
      var n = [];
      return null == t ? n : c && t.filter === c ? t.filter(e, r) : (d(t, function (t, i, a) {
        e.call(r, t, i, a) && n.push(t)
      }), n)
    };
    var m = t.some = t.any = function (r, n, i) {
      n || (n = t.identity);
      var a = !1;
      return null == r ? a : u && r.some === u ? r.some(n, i) : (d(r, function (t, r, s) {
        if (a || (a = n.call(i, t, r, s))) return e
      }), !!a)
    };
    t.contains = t.include = function (t, e) {
      return null != t && (f && t.indexOf === f ? -1 != t.indexOf(e) : m(t, function (t) {
        return t === e
      }))
    }, t.delay = function (t, e) {
      var r = s.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, r)
      }, e)
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(s.call(arguments, 1)))
    }, t.throttle = function (t) {
      var e, r, n;
      return function () {
        e || (e = !0, r = arguments, n = this, i.frame(function () {
          e = !1, t.apply(n, r)
        }))
      }
    }, t.debounce = function (e, r, n) {
      var i, a, s, o, l, h = function h() {
        var c = t.now() - o;
        c < r ? i = setTimeout(h, r - c) : (i = null, n || (l = e.apply(s, a), s = a = null))
      };
      return function () {
        s = this, a = arguments, o = t.now();
        var c = n && !i;
        return i || (i = setTimeout(h, r)), c && (l = e.apply(s, a), s = a = null), l
      }
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;
      for (var r = 1, n = arguments.length; r < n; r++) {
        var i = arguments[r];
        for (var a in i) void 0 === e[a] && (e[a] = i[a])
      }
      return e
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (p) return p(e);
      var r = [];
      for (var n in e) t.has(e, n) && r.push(n);
      return r
    }, t.has = function (t, e) {
      return o.call(t, e)
    }, t.isObject = function (t) {
      return t === Object(t)
    }, t.now = Date.now || function () {
      return (new Date).getTime()
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var y = /(.)^/,
      v = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      g = /\\|'|\r|\n|\u2028|\u2029/g,
      E = function (t) {
        return "\\" + v[t]
      };
    return t.template = function (e, r, n) {
      !r && n && (r = n), r = t.defaults({}, r, t.templateSettings);
      var i = RegExp([(r.escape || y).source, (r.interpolate || y).source, (r.evaluate || y).source].join("|") + "|$", "g"),
        a = 0,
        s = "__p+='";
      e.replace(i, function (t, r, n, i, o) {
        return s += e.slice(a, o).replace(g, E), a = o + t.length, r ? s += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : n ? s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (s += "';\n" + i + "\n__p+='"), t
      }), s += "';\n", r.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
      try {
        var o = new Function(r.variable || "obj", "_", s)
      } catch (t) {
        throw t.source = s, t
      }
      var l = function (e) {
          return o.call(this, e, t)
        },
        h = r.variable || "obj";
      return l.source = "function(" + h + "){\n" + s + "}", l
    }, t
  }()
}, function (t, e, r) {
  "use strict";
  var n = r(1),
    i = n(r(160)),
    a = n(r(161)),
    s = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ready = e.destroy = e.init = e.cleanupElement = e.createInstance = void 0;
  var o = s(r(30)),
    l = s(r(24)),
    h = s(r(93));
  r(226);
  var c = {
      Playing: "playing",
      Stopped: "stopped"
    },
    u = new(function () {
      function t() {
        (0, i.default)(this, t), (0, l.default)(this, "_cache", [])
      }
      return (0, a.default)(t, [{
        key: "set",
        value: function (t, e) {
          var r = (0, h.default)(this._cache, function (e) {
            return e.wrapper === t
          }); - 1 !== r && this._cache.splice(r, 1), this._cache.push({
            wrapper: t,
            instance: e
          })
        }
      }, {
        key: "delete",
        value: function (t) {
          var e = (0, h.default)(this._cache, function (e) {
            return e.wrapper === t
          }); - 1 !== e && this._cache.splice(e, 1)
        }
      }, {
        key: "get",
        value: function (t) {
          var e = (0, h.default)(this._cache, function (e) {
            return e.wrapper === t
          });
          return -1 !== e ? this._cache[e].instance : null
        }
      }]), t
    }()),
    f = {},
    p = function () {
      function t() {
        (0, i.default)(this, t), (0, l.default)(this, "config", null), (0, l.default)(this, "currentState", c.Stopped), (0, l.default)(this, "handlers", {
          enterFrame: [],
          complete: [],
          loop: [],
          dataReady: [],
          destroy: [],
          error: []
        })
      }
      return (0, a.default)(t, [{
        key: "load",
        value: function (t) {
          var e = this,
            r = t.dataset || f,
            n = r.src || "",
            i = r.preserveAspectRatio || "xMidYMid meet",
            a = r.renderer || "svg",
            s = 1 === parseFloat(r.loop),
            l = parseFloat(r.direction) || 1,
            h = 1 === parseFloat(r.autoplay),
            p = parseFloat(r.duration) || 0,
            d = 1 === parseFloat(r.isIx2Target),
            m = parseFloat(r.ix2InitialState);
          isNaN(m) && (m = null);
          var y = {
            src: n,
            loop: s,
            autoplay: h,
            renderer: a,
            direction: l,
            duration: p,
            hasIx2: d,
            ix2InitialValue: m,
            preserveAspectRatio: i
          };
          if (this.animationItem && this.config && this.config.src === n && a === this.config.renderer && i === this.config.preserveAspectRatio) {
            if (s !== this.config.loop && this.setLooping(s), d || (l !== this.config.direction && this.setDirection(l), p !== this.config.duration && (p > 0 && p !== this.duration ? this.setSpeed(this.duration / p) : this.setSpeed(1))), h && this.play(), m && m !== this.config.ix2InitialValue) {
              var v = m / 100;
              this.goToFrame(this.frames * v)
            }
            this.config = y
          } else {
            var g = {
              container: t,
              loop: s,
              autoplay: h,
              renderer: a,
              rendererSettings: {
                preserveAspectRatio: i,
                progressiveLoad: !0,
                hideOnTransparent: !0
              }
            };
            try {
              this.animationItem && this.destroy(), this.animationItem = window.Webflow.require("lottie").lottie.loadAnimation((0, o.default)({}, g, {
                path: n
              }))
            } catch (t) {
              return void this.handlers.error.forEach(function (e) {
                return e(t)
              })
            }
            this.animationItem && (Boolean(window.Webflow.env("design") || window.Webflow.env("preview")) && (this.animationItem.addEventListener("enterFrame", function () {
              if (e.isPlaying) {
                var t = e.animationItem,
                  r = t.currentFrame,
                  n = t.totalFrames,
                  i = t.playDirection,
                  a = r / n * 100,
                  s = Math.round(1 === i ? a : 100 - a);
                e.handlers.enterFrame.forEach(function (t) {
                  return t(s, r)
                })
              }
            }), this.animationItem.addEventListener("complete", function () {
              e.currentState === c.Playing && e.animationItem.loop ? e.currentState = c.Stopped : e.handlers.complete.forEach(function (t) {
                return t()
              })
            }), this.animationItem.addEventListener("loopComplete", function (t) {
              e.handlers.loop.forEach(function (e) {
                return e(t)
              })
            }), this.animationItem.addEventListener("data_failed", function (t) {
              e.handlers.error.forEach(function (e) {
                return e(t)
              })
            }), this.animationItem.addEventListener("error", function (t) {
              e.handlers.error.forEach(function (e) {
                return e(t)
              })
            })), this.isLoaded ? (this.handlers.dataReady.forEach(function (t) {
              return t()
            }), h && this.play()) : this.animationItem.addEventListener("data_ready", function () {
              if (e.handlers.dataReady.forEach(function (t) {
                  return t()
                }), d || (e.setDirection(l), p > 0 && p !== e.duration && e.setSpeed(e.duration / p), h && e.play()), m) {
                var t = m / 100;
                e.goToFrame(e.frames * t)
              }
            }), u.set(t, this), this.container = t, this.config = y)
          }
        }
      }, {
        key: "onFrameChange",
        value: function (t) {
          -1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t)
        }
      }, {
        key: "onPlaybackComplete",
        value: function (t) {
          -1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t)
        }
      }, {
        key: "onLoopComplete",
        value: function (t) {
          -1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t)
        }
      }, {
        key: "onDestroy",
        value: function (t) {
          -1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t)
        }
      }, {
        key: "onDataReady",
        value: function (t) {
          -1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t)
        }
      }, {
        key: "onError",
        value: function (t) {
          -1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t)
        }
      }, {
        key: "play",
        value: function () {
          if (this.animationItem) {
            var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
            this.animationItem.goToAndPlay(t, !0), this.currentState = c.Playing
          }
        }
      }, {
        key: "stop",
        value: function () {
          if (this.animationItem) {
            if (this.isPlaying) {
              var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
              this.animationItem.goToAndStop(t, !0)
            }
            this.currentState = c.Stopped
          }
        }
      }, {
        key: "destroy",
        value: function () {
          var t = this;
          this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(function (t) {
            return t()
          }), this.container && u.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(function (e) {
            return t.handlers[e].length = 0
          }), this.animationItem = null, this.container = null, this.config = null)
        }
      }, {
        key: "goToFrame",
        value: function (t) {
          this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
        }
      }, {
        key: "setSubframe",
        value: function (t) {
          this.animationItem && this.animationItem.setSubframe(t)
        }
      }, {
        key: "setSpeed",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
        }
      }, {
        key: "setLooping",
        value: function (t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
        }
      }, {
        key: "setDirection",
        value: function (t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(1 === t ? 0 : this.frames))
        }
      }, {
        key: "isPlaying",
        get: function () {
          return !!this.animationItem && !this.animationItem.isPaused
        }
      }, {
        key: "isPaused",
        get: function () {
          return !!this.animationItem && this.animationItem.isPaused
        }
      }, {
        key: "duration",
        get: function () {
          return this.animationItem ? this.animationItem.getDuration() : 0
        }
      }, {
        key: "frames",
        get: function () {
          return this.animationItem ? this.animationItem.totalFrames : 0
        }
      }, {
        key: "direction",
        get: function () {
          return this.animationItem ? this.animationItem.playDirection : 1
        }
      }, {
        key: "isLoaded",
        get: function () {
          return this.animationItem, this.animationItem.isLoaded
        }
      }, {
        key: "ix2InitialValue",
        get: function () {
          return this.config ? this.config.ix2InitialValue : null
        }
      }]), t
    }(),
    d = function () {
      return Array.from(document.querySelectorAll('[data-animation-type="lottie"]'))
    },
    m = function (t) {
      var e = u.get(t);
      return null == e && (e = new p), e.load(t), e
    };
  e.createInstance = m;
  var y = function (t) {
    var e = u.get(t);
    e && e.destroy()
  };
  e.cleanupElement = y;
  var v = function () {
    d().forEach(function (t) {
      1 === parseFloat(t.getAttribute("data-is-ix2-target")) || y(t), m(t)
    })
  };
  e.init = v;
  e.destroy = function () {
    d().forEach(y)
  };
  var g = v;
  e.ready = g
}, function (t, e) {
  t.exports = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
}, function (t, e) {
  function r(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
  }
  t.exports = function (t, e, n) {
    return e && r(t.prototype, e), n && r(t, n), t
  }
}, function (t, e, r) {
  var n = r(163),
    i = r(215),
    a = r(109);
  t.exports = function (t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function (r) {
      return r === t || n(r, t, e)
    }
  }
}, function (t, e, r) {
  var n = r(95),
    i = r(99),
    a = 1,
    s = 2;
  t.exports = function (t, e, r, o) {
    var l = r.length,
      h = l,
      c = !o;
    if (null == t) return !h;
    for (t = Object(t); l--;) {
      var u = r[l];
      if (c && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
    }
    for (; ++l < h;) {
      var f = (u = r[l])[0],
        p = t[f],
        d = u[1];
      if (c && u[2]) {
        if (void 0 === p && !(f in t)) return !1
      } else {
        var m = new n;
        if (o) var y = o(p, d, f, t, e, m);
        if (!(void 0 === y ? i(d, p, a | s, o, m) : y)) return !1
      }
    }
    return !0
  }
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0
  }
}, function (t, e, r) {
  var n = r(41),
    i = Array.prototype.splice;
  t.exports = function (t) {
    var e = this.__data__,
      r = n(e, t);
    return !(r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0))
  }
}, function (t, e, r) {
  var n = r(41);
  t.exports = function (t) {
    var e = this.__data__,
      r = n(e, t);
    return r < 0 ? void 0 : e[r][1]
  }
}, function (t, e, r) {
  var n = r(41);
  t.exports = function (t) {
    return n(this.__data__, t) > -1
  }
}, function (t, e, r) {
  var n = r(41);
  t.exports = function (t, e) {
    var r = this.__data__,
      i = n(r, t);
    return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
  }
}, function (t, e, r) {
  var n = r(40);
  t.exports = function () {
    this.__data__ = new n, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__,
      r = e.delete(t);
    return this.size = e.size, r
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t)
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e, r) {
  var n = r(40),
    i = r(56),
    a = r(57),
    s = 200;
  t.exports = function (t, e) {
    var r = this.__data__;
    if (r instanceof n) {
      var o = r.__data__;
      if (!i || o.length < s - 1) return o.push([t, e]), this.size = ++r.size, this;
      r = this.__data__ = new a(o)
    }
    return r.set(t, e), this.size = r.size, this
  }
}, function (t, e, r) {
  var n = r(96),
    i = r(177),
    a = r(12),
    s = r(98),
    o = /^\[object .+?Constructor\]$/,
    l = Function.prototype,
    h = Object.prototype,
    c = l.toString,
    u = h.hasOwnProperty,
    f = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  t.exports = function (t) {
    return !(!a(t) || i(t)) && (n(t) ? f : o).test(s(t))
  }
}, function (t, e, r) {
  var n = r(31),
    i = Object.prototype,
    a = i.hasOwnProperty,
    s = i.toString,
    o = n ? n.toStringTag : void 0;
  t.exports = function (t) {
    var e = a.call(t, o),
      r = t[o];
    try {
      t[o] = void 0;
      var n = !0
    } catch (t) {}
    var i = s.call(t);
    return n && (e ? t[o] = r : delete t[o]), i
  }
}, function (t, e) {
  var r = Object.prototype.toString;
  t.exports = function (t) {
    return r.call(t)
  }
}, function (t, e, r) {
  var n, i = r(178),
    a = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
  t.exports = function (t) {
    return !!a && a in t
  }
}, function (t, e, r) {
  var n = r(7)["__core-js_shared__"];
  t.exports = n
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e]
  }
}, function (t, e, r) {
  var n = r(181),
    i = r(40),
    a = r(56);
  t.exports = function () {
    this.size = 0, this.__data__ = {
      hash: new n,
      map: new(a || i),
      string: new n
    }
  }
}, function (t, e, r) {
  var n = r(182),
    i = r(183),
    a = r(184),
    s = r(185),
    o = r(186);

  function l(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1])
    }
  }
  l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = s, l.prototype.set = o, t.exports = l
}, function (t, e, r) {
  var n = r(43);
  t.exports = function () {
    this.__data__ = n ? n(null) : {}, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e, r) {
  var n = r(43),
    i = "__lodash_hash_undefined__",
    a = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    if (n) {
      var r = e[t];
      return r === i ? void 0 : r
    }
    return a.call(e, t) ? e[t] : void 0
  }
}, function (t, e, r) {
  var n = r(43),
    i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    return n ? void 0 !== e[t] : i.call(e, t)
  }
}, function (t, e, r) {
  var n = r(43),
    i = "__lodash_hash_undefined__";
  t.exports = function (t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? i : e, this
  }
}, function (t, e, r) {
  var n = r(44);
  t.exports = function (t) {
    var e = n(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
  }
}, function (t, e, r) {
  var n = r(44);
  t.exports = function (t) {
    return n(this, t).get(t)
  }
}, function (t, e, r) {
  var n = r(44);
  t.exports = function (t) {
    return n(this, t).has(t)
  }
}, function (t, e, r) {
  var n = r(44);
  t.exports = function (t, e) {
    var r = n(this, t),
      i = r.size;
    return r.set(t, e), this.size += r.size == i ? 0 : 1, this
  }
}, function (t, e, r) {
  var n = r(95),
    i = r(100),
    a = r(198),
    s = r(202),
    o = r(65),
    l = r(2),
    h = r(59),
    c = r(61),
    u = 1,
    f = "[object Arguments]",
    p = "[object Array]",
    d = "[object Object]",
    m = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, r, y, v, g) {
    var E = l(t),
      _ = l(e),
      b = E ? p : o(t),
      T = _ ? p : o(e),
      S = (b = b == f ? d : b) == d,
      I = (T = T == f ? d : T) == d,
      A = b == T;
    if (A && h(t)) {
      if (!h(e)) return !1;
      E = !0, S = !1
    }
    if (A && !S) return g || (g = new n), E || c(t) ? i(t, e, r, y, v, g) : a(t, e, b, r, y, v, g);
    if (!(r & u)) {
      var x = S && m.call(t, "__wrapped__"),
        C = I && m.call(e, "__wrapped__");
      if (x || C) {
        var P = x ? t.value() : t,
          w = C ? e.value() : e;
        return g || (g = new n), v(P, w, r, y, g)
      }
    }
    return !!A && (g || (g = new n), s(t, e, r, y, v, g))
  }
}, function (t, e, r) {
  var n = r(57),
    i = r(194),
    a = r(195);

  function s(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.__data__ = new n; ++e < r;) this.add(t[e])
  }
  s.prototype.add = s.prototype.push = i, s.prototype.has = a, t.exports = s
}, function (t, e) {
  var r = "__lodash_hash_undefined__";
  t.exports = function (t) {
    return this.__data__.set(t, r), this
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
      if (e(t[r], r, t)) return !0;
    return !1
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e)
  }
}, function (t, e, r) {
  var n = r(31),
    i = r(199),
    a = r(55),
    s = r(100),
    o = r(200),
    l = r(201),
    h = 1,
    c = 2,
    u = "[object Boolean]",
    f = "[object Date]",
    p = "[object Error]",
    d = "[object Map]",
    m = "[object Number]",
    y = "[object RegExp]",
    v = "[object Set]",
    g = "[object String]",
    E = "[object Symbol]",
    _ = "[object ArrayBuffer]",
    b = "[object DataView]",
    T = n ? n.prototype : void 0,
    S = T ? T.valueOf : void 0;
  t.exports = function (t, e, r, n, T, I, A) {
    switch (r) {
      case b:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;
      case _:
        return !(t.byteLength != e.byteLength || !I(new i(t), new i(e)));
      case u:
      case f:
      case m:
        return a(+t, +e);
      case p:
        return t.name == e.name && t.message == e.message;
      case y:
      case g:
        return t == e + "";
      case d:
        var x = o;
      case v:
        var C = n & h;
        if (x || (x = l), t.size != e.size && !C) return !1;
        var P = A.get(t);
        if (P) return P == e;
        n |= c, A.set(t, e);
        var w = s(x(t), x(e), n, T, I, A);
        return A.delete(t), w;
      case E:
        if (S) return S.call(t) == S.call(e)
    }
    return !1
  }
}, function (t, e, r) {
  var n = r(7).Uint8Array;
  t.exports = n
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
      r = Array(t.size);
    return t.forEach(function (t, n) {
      r[++e] = [n, t]
    }), r
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
      r = Array(t.size);
    return t.forEach(function (t) {
      r[++e] = t
    }), r
  }
}, function (t, e, r) {
  var n = r(203),
    i = 1,
    a = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, r, s, o, l) {
    var h = r & i,
      c = n(t),
      u = c.length;
    if (u != n(e).length && !h) return !1;
    for (var f = u; f--;) {
      var p = c[f];
      if (!(h ? p in e : a.call(e, p))) return !1
    }
    var d = l.get(t);
    if (d && l.get(e)) return d == e;
    var m = !0;
    l.set(t, e), l.set(e, t);
    for (var y = h; ++f < u;) {
      var v = t[p = c[f]],
        g = e[p];
      if (s) var E = h ? s(g, v, p, e, t, l) : s(v, g, p, t, e, l);
      if (!(void 0 === E ? v === g || o(v, g, r, s, l) : E)) {
        m = !1;
        break
      }
      y || (y = "constructor" == p)
    }
    if (m && !y) {
      var _ = t.constructor,
        b = e.constructor;
      _ != b && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (m = !1)
    }
    return l.delete(t), l.delete(e), m
  }
}, function (t, e, r) {
  var n = r(101),
    i = r(102),
    a = r(45);
  t.exports = function (t) {
    return n(t, a, i)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n;) {
      var s = t[r];
      e(s, r, t) && (a[i++] = s)
    }
    return a
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
    return n
  }
}, function (t, e, r) {
  var n = r(25),
    i = r(20),
    a = "[object Arguments]";
  t.exports = function (t) {
    return i(t) && n(t) == a
  }
}, function (t, e) {
  t.exports = function () {
    return !1
  }
}, function (t, e, r) {
  var n = r(25),
    i = r(62),
    a = r(20),
    s = {};
  s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function (t) {
    return a(t) && i(t.length) && !!s[n(t)]
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e)
    }
  }
}, function (t, e, r) {
  (function (t) {
    var n = r(97),
      i = e && !e.nodeType && e,
      a = i && "object" == typeof t && t && !t.nodeType && t,
      s = a && a.exports === i && n.process,
      o = function () {
        try {
          var t = a && a.require && a.require("util").types;
          return t || s && s.binding && s.binding("util")
        } catch (t) {}
      }();
    t.exports = o
  }).call(this, r(105)(t))
}, function (t, e, r) {
  var n = r(106)(Object.keys, Object);
  t.exports = n
}, function (t, e, r) {
  var n = r(19)(r(7), "DataView");
  t.exports = n
}, function (t, e, r) {
  var n = r(19)(r(7), "Promise");
  t.exports = n
}, function (t, e, r) {
  var n = r(19)(r(7), "Set");
  t.exports = n
}, function (t, e, r) {
  var n = r(108),
    i = r(45);
  t.exports = function (t) {
    for (var e = i(t), r = e.length; r--;) {
      var a = e[r],
        s = t[a];
      e[r] = [a, s, n(s)]
    }
    return e
  }
}, function (t, e, r) {
  var n = r(99),
    i = r(47),
    a = r(220),
    s = r(67),
    o = r(108),
    l = r(109),
    h = r(32),
    c = 1,
    u = 2;
  t.exports = function (t, e) {
    return s(t) && o(e) ? l(h(t), e) : function (r) {
      var s = i(r, t);
      return void 0 === s && s === e ? a(r, t) : n(e, s, c | u)
    }
  }
}, function (t, e, r) {
  var n = r(218),
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g,
    s = n(function (t) {
      var e = [];
      return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, r, n, i) {
        e.push(n ? i.replace(a, "$1") : r || t)
      }), e
    });
  t.exports = s
}, function (t, e, r) {
  var n = r(219),
    i = 500;
  t.exports = function (t) {
    var e = n(t, function (t) {
        return r.size === i && r.clear(), t
      }),
      r = e.cache;
    return e
  }
}, function (t, e, r) {
  var n = r(57),
    i = "Expected a function";

  function a(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
    var r = function () {
      var n = arguments,
        i = e ? e.apply(this, n) : n[0],
        a = r.cache;
      if (a.has(i)) return a.get(i);
      var s = t.apply(this, n);
      return r.cache = a.set(i, s) || a, s
    };
    return r.cache = new(a.Cache || n), r
  }
  a.Cache = n, t.exports = a
}, function (t, e, r) {
  var n = r(221),
    i = r(222);
  t.exports = function (t, e) {
    return null != t && i(t, e, n)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null != t && e in Object(t)
  }
}, function (t, e, r) {
  var n = r(48),
    i = r(46),
    a = r(2),
    s = r(60),
    o = r(62),
    l = r(32);
  t.exports = function (t, e, r) {
    for (var h = -1, c = (e = n(e, t)).length, u = !1; ++h < c;) {
      var f = l(e[h]);
      if (!(u = null != t && r(t, f))) break;
      t = t[f]
    }
    return u || ++h != c ? u : !!(c = null == t ? 0 : t.length) && o(c) && s(f, c) && (a(t) || i(t))
  }
}, function (t, e, r) {
  var n = r(113),
    i = r(224),
    a = r(67),
    s = r(32);
  t.exports = function (t) {
    return a(t) ? n(s(t)) : i(t)
  }
}, function (t, e, r) {
  var n = r(66);
  t.exports = function (t) {
    return function (e) {
      return n(e, t)
    }
  }
}, function (t, e, r) {
  var n = r(70),
    i = 1 / 0,
    a = 1.7976931348623157e308;
  t.exports = function (t) {
    return t ? (t = n(t)) === i || t === -i ? (t < 0 ? -1 : 1) * a : t == t ? t : 0 : 0 === t ? t : 0
  }
}, function (t, e, r) {
  t.exports = r(227), r(285), r(286)
}, function (t, e, r) {
  r(228), r(245), r(252), r(253), r(254), r(255), r(257), r(258), r(260), r(261), r(262), r(263), r(264), r(265), r(267), r(268), r(269), r(270), r(271), r(273), r(274), r(275), r(276), r(277), r(278), r(279), r(280), r(282), r(283), r(284);
  var n = r(121);
  t.exports = n.Array
}, function (t, e, r) {
  "use strict";
  var n = r(229).charAt,
    i = r(72),
    a = r(118),
    s = i.set,
    o = i.getterFor("String Iterator");
  a(String, "String", function (t) {
    s(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    })
  }, function () {
    var t, e = o(this),
      r = e.string,
      i = e.index;
    return i >= r.length ? {
      value: void 0,
      done: !0
    } : (t = n(r, i), e.index += t.length, {
      value: t,
      done: !1
    })
  })
}, function (t, e, r) {
  var n = r(27),
    i = r(71),
    a = function (t) {
      return function (e, r) {
        var a, s, o = String(i(e)),
          l = n(r),
          h = o.length;
        return l < 0 || l >= h ? t ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === h || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? o.charAt(l) : a : t ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
      }
    };
  t.exports = {
    codeAt: a(!1),
    charAt: a(!0)
  }
}, function (t, e, r) {
  var n = r(8),
    i = r(114),
    a = n.WeakMap;
  t.exports = "function" == typeof a && /native code/.test(i.call(a))
}, function (t, e, r) {
  "use strict";
  var n = {}.propertyIsEnumerable,
    i = Object.getOwnPropertyDescriptor,
    a = i && !n.call({
      1: 2
    }, 1);
  e.f = a ? function (t) {
    var e = i(this, t);
    return !!e && e.enumerable
  } : n
}, function (t, e, r) {
  var n = r(17),
    i = r(233),
    a = r(119),
    s = r(15);
  t.exports = function (t, e) {
    for (var r = i(e), o = s.f, l = a.f, h = 0; h < r.length; h++) {
      var c = r[h];
      n(t, c) || o(t, c, l(e, c))
    }
  }
}, function (t, e, r) {
  var n = r(79),
    i = r(234),
    a = r(235),
    s = r(28);
  t.exports = n("Reflect", "ownKeys") || function (t) {
    var e = i.f(s(t)),
      r = a.f;
    return r ? e.concat(r(t)) : e
  }
}, function (t, e, r) {
  var n = r(122),
    i = r(81).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function (t) {
    return n(t, i)
  }
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols
}, function (t, e, r) {
  var n = r(6),
    i = /#|\.prototype\./,
    a = function (t, e) {
      var r = o[s(t)];
      return r == h || r != l && ("function" == typeof e ? n(e) : !!e)
    },
    s = a.normalize = function (t) {
      return String(t).replace(i, ".").toLowerCase()
    },
    o = a.data = {},
    l = a.NATIVE = "N",
    h = a.POLYFILL = "P";
  t.exports = a
}, function (t, e, r) {
  "use strict";
  var n = r(123).IteratorPrototype,
    i = r(125),
    a = r(51),
    s = r(126),
    o = r(34),
    l = function () {
      return this
    };
  t.exports = function (t, e, r) {
    var h = e + " Iterator";
    return t.prototype = i(n, {
      next: a(1, r)
    }), s(t, h, !1, !0), o[h] = l, t
  }
}, function (t, e, r) {
  var n = r(6);
  t.exports = !n(function () {
    function t() {}
    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
  })
}, function (t, e, r) {
  var n = r(6);
  t.exports = !!Object.getOwnPropertySymbols && !n(function () {
    return !String(Symbol())
  })
}, function (t, e, r) {
  var n = r(14),
    i = r(15),
    a = r(28),
    s = r(241);
  t.exports = n ? Object.defineProperties : function (t, e) {
    a(t);
    for (var r, n = s(e), o = n.length, l = 0; o > l;) i.f(t, r = n[l++], e[r]);
    return t
  }
}, function (t, e, r) {
  var n = r(122),
    i = r(81);
  t.exports = Object.keys || function (t) {
    return n(t, i)
  }
}, function (t, e, r) {
  var n = r(79);
  t.exports = n("document", "documentElement")
}, function (t, e, r) {
  var n = r(28),
    i = r(244);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t, e = !1,
      r = {};
    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
    } catch (t) {}
    return function (r, a) {
      return n(r), i(a), e ? t.call(r, a) : r.__proto__ = a, r
    }
  }() : void 0)
}, function (t, e, r) {
  var n = r(16);
  t.exports = function (t) {
    if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
    return t
  }
}, function (t, e, r) {
  var n = r(0),
    i = r(246);
  n({
    target: "Array",
    stat: !0,
    forced: !r(251)(function (t) {
      Array.from(t)
    })
  }, {
    from: i
  })
}, function (t, e, r) {
  "use strict";
  var n = r(82),
    i = r(4),
    a = r(247),
    s = r(248),
    o = r(3),
    l = r(35),
    h = r(249);
  t.exports = function (t) {
    var e, r, c, u, f = i(t),
      p = "function" == typeof this ? this : Array,
      d = arguments.length,
      m = d > 1 ? arguments[1] : void 0,
      y = void 0 !== m,
      v = 0,
      g = h(f);
    if (y && (m = n(m, d > 2 ? arguments[2] : void 0, 2)), null == g || p == Array && s(g))
      for (r = new p(e = o(f.length)); e > v; v++) l(r, v, y ? m(f[v], v) : f[v]);
    else
      for (u = g.call(f), r = new p; !(c = u.next()).done; v++) l(r, v, y ? a(u, m, [c.value, v], !0) : c.value);
    return r.length = v, r
  }
}, function (t, e, r) {
  var n = r(28);
  t.exports = function (t, e, r, i) {
    try {
      return i ? e(n(r)[0], r[1]) : e(r)
    } catch (e) {
      var a = t.return;
      throw void 0 !== a && n(a.call(t)), e
    }
  }
}, function (t, e, r) {
  var n = r(5),
    i = r(34),
    a = n("iterator"),
    s = Array.prototype;
  t.exports = function (t) {
    return void 0 !== t && (i.Array === t || s[a] === t)
  }
}, function (t, e, r) {
  var n = r(250),
    i = r(34),
    a = r(5)("iterator");
  t.exports = function (t) {
    if (null != t) return t[a] || t["@@iterator"] || i[n(t)]
  }
}, function (t, e, r) {
  var n = r(78),
    i = r(5)("toStringTag"),
    a = "Arguments" == n(function () {
      return arguments
    }());
  t.exports = function (t) {
    var e, r, s;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
      try {
        return t[e]
      } catch (t) {}
    }(e = Object(t), i)) ? r : a ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
  }
}, function (t, e, r) {
  var n = r(5)("iterator"),
    i = !1;
  try {
    var a = 0,
      s = {
        next: function () {
          return {
            done: !!a++
          }
        },
        return: function () {
          i = !0
        }
      };
    s[n] = function () {
      return this
    }, Array.from(s, function () {
      throw 2
    })
  } catch (t) {}
  t.exports = function (t, e) {
    if (!e && !i) return !1;
    var r = !1;
    try {
      var a = {};
      a[n] = function () {
        return {
          next: function () {
            return {
              done: r = !0
            }
          }
        }
      }, t(a)
    } catch (t) {}
    return r
  }
}, function (t, e, r) {
  r(0)({
    target: "Array",
    stat: !0
  }, {
    isArray: r(29)
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(6),
    a = r(35);
  n({
    target: "Array",
    stat: !0,
    forced: i(function () {
      function t() {}
      return !(Array.of.call(t) instanceof t)
    })
  }, {
    of: function () {
      for (var t = 0, e = arguments.length, r = new("function" == typeof this ? this : Array)(e); e > t;) a(r, t, arguments[t++]);
      return r.length = e, r
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(6),
    a = r(29),
    s = r(16),
    o = r(4),
    l = r(3),
    h = r(35),
    c = r(36),
    u = r(37),
    f = r(5)("isConcatSpreadable"),
    p = !i(function () {
      var t = [];
      return t[f] = !1, t.concat()[0] !== t
    }),
    d = u("concat"),
    m = function (t) {
      if (!s(t)) return !1;
      var e = t[f];
      return void 0 !== e ? !!e : a(t)
    };
  n({
    target: "Array",
    proto: !0,
    forced: !p || !d
  }, {
    concat: function (t) {
      var e, r, n, i, a, s = o(this),
        u = c(s, 0),
        f = 0;
      for (e = -1, n = arguments.length; e < n; e++)
        if (a = -1 === e ? s : arguments[e], m(a)) {
          if (f + (i = l(a.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          for (r = 0; r < i; r++, f++) r in a && h(u, f, a[r])
        } else {
          if (f >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          h(u, f++, a)
        } return u.length = f, u
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(256),
    a = r(9);
  n({
    target: "Array",
    proto: !0
  }, {
    copyWithin: i
  }), a("copyWithin")
}, function (t, e, r) {
  "use strict";
  var n = r(4),
    i = r(33),
    a = r(3),
    s = Math.min;
  t.exports = [].copyWithin || function (t, e) {
    var r = n(this),
      o = a(r.length),
      l = i(t, o),
      h = i(e, o),
      c = arguments.length > 2 ? arguments[2] : void 0,
      u = s((void 0 === c ? o : i(c, o)) - h, o - l),
      f = 1;
    for (h < l && l < h + u && (f = -1, h += u - 1, l += u - 1); u-- > 0;) h in r ? r[l] = r[h] : delete r[l], l += f, h += f;
    return r
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(23).every;
  n({
    target: "Array",
    proto: !0,
    forced: r(13)("every")
  }, {
    every: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(259),
    a = r(9);
  n({
    target: "Array",
    proto: !0
  }, {
    fill: i
  }), a("fill")
}, function (t, e, r) {
  "use strict";
  var n = r(4),
    i = r(33),
    a = r(3);
  t.exports = function (t) {
    for (var e = n(this), r = a(e.length), s = arguments.length, o = i(s > 1 ? arguments[1] : void 0, r), l = s > 2 ? arguments[2] : void 0, h = void 0 === l ? r : i(l, r); h > o;) e[o++] = t;
    return e
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(23).filter;
  n({
    target: "Array",
    proto: !0,
    forced: !r(37)("filter")
  }, {
    filter: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(23).find,
    a = r(9),
    s = !0;
  "find" in [] && Array(1).find(function () {
    s = !1
  }), n({
    target: "Array",
    proto: !0,
    forced: s
  }, {
    find: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), a("find")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(23).findIndex,
    a = r(9),
    s = !0;
  "findIndex" in [] && Array(1).findIndex(function () {
    s = !1
  }), n({
    target: "Array",
    proto: !0,
    forced: s
  }, {
    findIndex: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), a("findIndex")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(127),
    a = r(4),
    s = r(3),
    o = r(27),
    l = r(36);
  n({
    target: "Array",
    proto: !0
  }, {
    flat: function () {
      var t = arguments.length ? arguments[0] : void 0,
        e = a(this),
        r = s(e.length),
        n = l(e, 0);
      return n.length = i(n, e, e, r, 0, void 0 === t ? 1 : o(t)), n
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(127),
    a = r(4),
    s = r(3),
    o = r(53),
    l = r(36);
  n({
    target: "Array",
    proto: !0
  }, {
    flatMap: function (t) {
      var e, r = a(this),
        n = s(r.length);
      return o(t), (e = l(r, 0)).length = i(e, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(266);
  n({
    target: "Array",
    proto: !0,
    forced: [].forEach != i
  }, {
    forEach: i
  })
}, function (t, e, r) {
  "use strict";
  var n = r(23).forEach,
    i = r(13);
  t.exports = i("forEach") ? function (t) {
    return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
  } : [].forEach
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(80).includes,
    a = r(9);
  n({
    target: "Array",
    proto: !0
  }, {
    includes: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), a("includes")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(80).indexOf,
    a = r(13),
    s = [].indexOf,
    o = !!s && 1 / [1].indexOf(1, -0) < 0,
    l = a("indexOf");
  n({
    target: "Array",
    proto: !0,
    forced: o || l
  }, {
    indexOf: function (t) {
      return o ? s.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(22),
    i = r(9),
    a = r(34),
    s = r(72),
    o = r(118),
    l = s.set,
    h = s.getterFor("Array Iterator");
  t.exports = o(Array, "Array", function (t, e) {
    l(this, {
      type: "Array Iterator",
      target: n(t),
      index: 0,
      kind: e
    })
  }, function () {
    var t = h(this),
      e = t.target,
      r = t.kind,
      n = t.index++;
    return !e || n >= e.length ? (t.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == r ? {
      value: n,
      done: !1
    } : "values" == r ? {
      value: e[n],
      done: !1
    } : {
      value: [n, e[n]],
      done: !1
    }
  }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(52),
    a = r(22),
    s = r(13),
    o = [].join,
    l = i != Object,
    h = s("join", ",");
  n({
    target: "Array",
    proto: !0,
    forced: l || h
  }, {
    join: function (t) {
      return o.call(a(this), void 0 === t ? "," : t)
    }
  })
}, function (t, e, r) {
  var n = r(0),
    i = r(272);
  n({
    target: "Array",
    proto: !0,
    forced: i !== [].lastIndexOf
  }, {
    lastIndexOf: i
  })
}, function (t, e, r) {
  "use strict";
  var n = r(22),
    i = r(27),
    a = r(3),
    s = r(13),
    o = Math.min,
    l = [].lastIndexOf,
    h = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
    c = s("lastIndexOf");
  t.exports = h || c ? function (t) {
    if (h) return l.apply(this, arguments) || 0;
    var e = n(this),
      r = a(e.length),
      s = r - 1;
    for (arguments.length > 1 && (s = o(s, i(arguments[1]))), s < 0 && (s = r + s); s >= 0; s--)
      if (s in e && e[s] === t) return s || 0;
    return -1
  } : l
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(23).map;
  n({
    target: "Array",
    proto: !0,
    forced: !r(37)("map")
  }, {
    map: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(128).left;
  n({
    target: "Array",
    proto: !0,
    forced: r(13)("reduce")
  }, {
    reduce: function (t) {
      return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(128).right;
  n({
    target: "Array",
    proto: !0,
    forced: r(13)("reduceRight")
  }, {
    reduceRight: function (t) {
      return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(29),
    a = [].reverse,
    s = [1, 2];
  n({
    target: "Array",
    proto: !0,
    forced: String(s) === String(s.reverse())
  }, {
    reverse: function () {
      return i(this) && (this.length = this.length), a.call(this)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(16),
    a = r(29),
    s = r(33),
    o = r(3),
    l = r(22),
    h = r(35),
    c = r(37),
    u = r(5)("species"),
    f = [].slice,
    p = Math.max;
  n({
    target: "Array",
    proto: !0,
    forced: !c("slice")
  }, {
    slice: function (t, e) {
      var r, n, c, d = l(this),
        m = o(d.length),
        y = s(t, m),
        v = s(void 0 === e ? m : e, m);
      if (a(d) && ("function" != typeof (r = d.constructor) || r !== Array && !a(r.prototype) ? i(r) && null === (r = r[u]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return f.call(d, y, v);
      for (n = new(void 0 === r ? Array : r)(p(v - y, 0)), c = 0; y < v; y++, c++) y in d && h(n, c, d[y]);
      return n.length = c, n
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(23).some;
  n({
    target: "Array",
    proto: !0,
    forced: r(13)("some")
  }, {
    some: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(53),
    a = r(4),
    s = r(6),
    o = r(13),
    l = [].sort,
    h = [1, 2, 3],
    c = s(function () {
      h.sort(void 0)
    }),
    u = s(function () {
      h.sort(null)
    }),
    f = o("sort");
  n({
    target: "Array",
    proto: !0,
    forced: c || !u || f
  }, {
    sort: function (t) {
      return void 0 === t ? l.call(a(this)) : l.call(a(this), i(t))
    }
  })
}, function (t, e, r) {
  r(281)("Array")
}, function (t, e, r) {
  "use strict";
  var n = r(79),
    i = r(15),
    a = r(5),
    s = r(14),
    o = a("species");
  t.exports = function (t) {
    var e = n(t),
      r = i.f;
    s && e && !e[o] && r(e, o, {
      configurable: !0,
      get: function () {
        return this
      }
    })
  }
}, function (t, e, r) {
  "use strict";
  var n = r(0),
    i = r(33),
    a = r(27),
    s = r(3),
    o = r(4),
    l = r(36),
    h = r(35),
    c = r(37),
    u = Math.max,
    f = Math.min;
  n({
    target: "Array",
    proto: !0,
    forced: !c("splice")
  }, {
    splice: function (t, e) {
      var r, n, c, p, d, m, y = o(this),
        v = s(y.length),
        g = i(t, v),
        E = arguments.length;
      if (0 === E ? r = n = 0 : 1 === E ? (r = 0, n = v - g) : (r = E - 2, n = f(u(a(e), 0), v - g)), v + r - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
      for (c = l(y, n), p = 0; p < n; p++)(d = g + p) in y && h(c, p, y[d]);
      if (c.length = n, r < n) {
        for (p = g; p < v - n; p++) m = p + r, (d = p + n) in y ? y[m] = y[d] : delete y[m];
        for (p = v; p > v - n + r; p--) delete y[p - 1]
      } else if (r > n)
        for (p = v - n; p > g; p--) m = p + r - 1, (d = p + n - 1) in y ? y[m] = y[d] : delete y[m];
      for (p = 0; p < r; p++) y[p + g] = arguments[p + 2];
      return y.length = v - n + r, c
    }
  })
}, function (t, e, r) {
  r(9)("flat")
}, function (t, e, r) {
  r(9)("flatMap")
}, function (t, e, r) {
  "use strict";
  var n = r(14),
    i = r(9),
    a = r(4),
    s = r(3),
    o = r(15).f;
  !n || "lastItem" in [] || (o(Array.prototype, "lastItem", {
    configurable: !0,
    get: function () {
      var t = a(this),
        e = s(t.length);
      return 0 == e ? void 0 : t[e - 1]
    },
    set: function (t) {
      var e = a(this),
        r = s(e.length);
      return e[0 == r ? 0 : r - 1] = t
    }
  }), i("lastItem"))
}, function (t, e, r) {
  "use strict";
  var n = r(14),
    i = r(9),
    a = r(4),
    s = r(3),
    o = r(15).f;
  !n || "lastIndex" in [] || (o(Array.prototype, "lastIndex", {
    configurable: !0,
    get: function () {
      var t = a(this),
        e = s(t.length);
      return 0 == e ? 0 : e - 1
    }
  }), i("lastIndex"))
}, function (module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
  "undefined" != typeof navigator && (root = window || {}, factory = function (window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg",
      locationHref = "",
      initialDefaultFrame = -999999,
      subframeEnabled = !0,
      expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      cachedColors = {},
      bm_rounder = Math.round,
      bm_rnd, bm_pow = Math.pow,
      bm_sqrt = Math.sqrt,
      bm_abs = Math.abs,
      bm_floor = Math.floor,
      bm_max = Math.max,
      bm_min = Math.min,
      blitter = 10,
      BMMath = {};

    function ProjectInterface() {
      return {}
    }! function () {
      var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
        r = e.length;
      for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function (t) {
      if ("object" === typeof t && t.length) {
        var e, r = createSizedArray(t.length),
          n = t.length;
        for (e = 0; e < n; e += 1) r[e] = Math.abs(t[e]);
        return r
      }
      return Math.abs(t)
    };
    var defaultCurveSegments = 150,
      degToRads = Math.PI / 180,
      roundCorner = .5519;

    function roundValues(t) {
      bm_rnd = t ? Math.round : function (t) {
        return t
      }
    }

    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }

    function BMEnterFrameEvent(t, e, r, n) {
      this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, r, n) {
      this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, r) {
      this.type = t, this.firstFrame = e, this.totalFrames = r
    }

    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e
    }

    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
    }

    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t
    }

    function BMAnimationConfigErrorEvent(t, e) {
      this.type = t, this.nativeError = e, this.currentTime = currentTime
    }
    roundValues(!1);
    var createElementID = (_count = 0, function () {
        return "__lottie_element_" + ++_count
      }),
      _count;

    function HSVtoRGB(t, e, r) {
      var n, i, a, s, o, l, h, c;
      switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), c = r * (1 - (1 - o) * e), s % 6) {
        case 0:
          n = r, i = c, a = l;
          break;
        case 1:
          n = h, i = r, a = l;
          break;
        case 2:
          n = l, i = r, a = c;
          break;
        case 3:
          n = l, i = h, a = r;
          break;
        case 4:
          n = c, i = l, a = r;
          break;
        case 5:
          n = r, i = l, a = h
      }
      return [n, i, a]
    }

    function RGBtoHSV(t, e, r) {
      var n, i = Math.max(t, e, r),
        a = Math.min(t, e, r),
        s = i - a,
        o = 0 === i ? 0 : s / i,
        l = i / 255;
      switch (i) {
        case a:
          n = 0;
          break;
        case t:
          n = e - r + s * (e < r ? 6 : 0), n /= 6 * s;
          break;
        case e:
          n = r - t + 2 * s, n /= 6 * s;
          break;
        case r:
          n = t - e + 4 * s, n /= 6 * s
      }
      return [n, o, l]
    }

    function addSaturationToRGB(t, e) {
      var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
    }

    function addBrightnessToRGB(t, e) {
      var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
    }

    function addHueToRGB(t, e) {
      var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
    }
    var rgbToHex = function () {
      var t, e, r = [];
      for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 == e.length ? "0" + e : e;
      return function (t, e, n) {
        return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + r[t] + r[e] + r[n]
      }
    }();

    function BaseEvent() {}
    BaseEvent.prototype = {
      triggerEvent: function (t, e) {
        if (this._cbs[t])
          for (var r = this._cbs[t].length, n = 0; n < r; n++) this._cbs[t][n](e)
      },
      addEventListener: function (t, e) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
          function () {
            this.removeEventListener(t, e)
          }.bind(this)
      },
      removeEventListener: function (t, e) {
        if (e) {
          if (this._cbs[t]) {
            for (var r = 0, n = this._cbs[t].length; r < n;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, n -= 1), r += 1;
            this._cbs[t].length || (this._cbs[t] = null)
          }
        } else this._cbs[t] = null
      }
    };
    var createTypedArray = function () {
      return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (t, e) {
        return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
      } : function (t, e) {
        var r, n = 0,
          i = [];
        switch (t) {
          case "int16":
          case "uint8c":
            r = 1;
            break;
          default:
            r = 1.1
        }
        for (n = 0; n < e; n += 1) i.push(r);
        return i
      }
    }();

    function createSizedArray(t) {
      return Array.apply(null, {
        length: t
      })
    }

    function createNS(t) {
      return document.createElementNS(svgNS, t)
    }

    function createTag(t) {
      return document.createElement(t)
    }

    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function (t) {
        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
      },
      iterateDynamicProperties: function () {
        this._mdf = !1;
        var t, e = this.dynamicProperties.length;
        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
      },
      initDynamicPropertyContainer: function (t) {
        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
      }
    };
    var getBlendMode = (blendModeEnums = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      }, function (t) {
        return blendModeEnums[t] || ""
      }),
      blendModeEnums, Matrix = function () {
        var t = Math.cos,
          e = Math.sin,
          r = Math.tan,
          n = Math.round;

        function i() {
          return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
        }

        function a(r) {
          if (0 === r) return this;
          var n = t(r),
            i = e(r);
          return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function s(r) {
          if (0 === r) return this;
          var n = t(r),
            i = e(r);
          return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
        }

        function o(r) {
          if (0 === r) return this;
          var n = t(r),
            i = e(r);
          return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
        }

        function l(r) {
          if (0 === r) return this;
          var n = t(r),
            i = e(r);
          return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function h(t, e) {
          return this._t(1, e, t, 1, 0, 0)
        }

        function c(t, e) {
          return this.shear(r(t), r(e))
        }

        function u(n, i) {
          var a = t(i),
            s = e(i);
          return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function f(t, e, r) {
          return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
        }

        function p(t, e, r, n, i, a, s, o, l, h, c, u, f, p, d, m) {
          return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = u, this.props[12] = f, this.props[13] = p, this.props[14] = d, this.props[15] = m, this
        }

        function d(t, e, r) {
          return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
        }

        function m(t, e, r, n, i, a, s, o, l, h, c, u, f, p, d, m) {
          var y = this.props;
          if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === c && 0 === u) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * p, y[14] = y[14] * c + y[15] * d, y[15] = y[15] * m, this._identityCalculated = !1, this;
          var v = y[0],
            g = y[1],
            E = y[2],
            _ = y[3],
            b = y[4],
            T = y[5],
            S = y[6],
            I = y[7],
            A = y[8],
            x = y[9],
            C = y[10],
            P = y[11],
            w = y[12],
            O = y[13],
            D = y[14],
            M = y[15];
          return y[0] = v * t + g * i + E * l + _ * f, y[1] = v * e + g * a + E * h + _ * p, y[2] = v * r + g * s + E * c + _ * d, y[3] = v * n + g * o + E * u + _ * m, y[4] = b * t + T * i + S * l + I * f, y[5] = b * e + T * a + S * h + I * p, y[6] = b * r + T * s + S * c + I * d, y[7] = b * n + T * o + S * u + I * m, y[8] = A * t + x * i + C * l + P * f, y[9] = A * e + x * a + C * h + P * p, y[10] = A * r + x * s + C * c + P * d, y[11] = A * n + x * o + C * u + P * m, y[12] = w * t + O * i + D * l + M * f, y[13] = w * e + O * a + D * h + M * p, y[14] = w * r + O * s + D * c + M * d, y[15] = w * n + O * o + D * u + M * m, this._identityCalculated = !1, this
        }

        function y() {
          return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
        }

        function v(t) {
          for (var e = 0; e < 16;) {
            if (t.props[e] !== this.props[e]) return !1;
            e += 1
          }
          return !0
        }

        function g(t) {
          var e;
          for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
        }

        function E(t) {
          var e;
          for (e = 0; e < 16; e += 1) this.props[e] = t[e]
        }

        function _(t, e, r) {
          return {
            x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
            y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
            z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
          }
        }

        function b(t, e, r) {
          return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
        }

        function T(t, e, r) {
          return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
        }

        function S(t, e, r) {
          return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
        }

        function I(t) {
          var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            r = this.props[5] / e,
            n = -this.props[1] / e,
            i = -this.props[4] / e,
            a = this.props[0] / e,
            s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
            o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
          return [t[0] * r + t[1] * i + s, t[0] * n + t[1] * a + o, 0]
        }

        function A(t) {
          var e, r = t.length,
            n = [];
          for (e = 0; e < r; e += 1) n[e] = I(t[e]);
          return n
        }

        function x(t, e, r) {
          var n = createTypedArray("float32", 6);
          if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
          else {
            var i = this.props[0],
              a = this.props[1],
              s = this.props[4],
              o = this.props[5],
              l = this.props[12],
              h = this.props[13];
            n[0] = t[0] * i + t[1] * s + l, n[1] = t[0] * a + t[1] * o + h, n[2] = e[0] * i + e[1] * s + l, n[3] = e[0] * a + e[1] * o + h, n[4] = r[0] * i + r[1] * s + l, n[5] = r[0] * a + r[1] * o + h
          }
          return n
        }

        function C(t, e, r) {
          return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
        }

        function P(t, e) {
          if (this.isIdentity()) return t + "," + e;
          var r = this.props;
          return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
        }

        function w() {
          for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += n(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
          return r
        }

        function O(t) {
          return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? n(1e4 * t) / 1e4 : t
        }

        function D() {
          var t = this.props;
          return "matrix(" + O(t[0]) + "," + O(t[1]) + "," + O(t[4]) + "," + O(t[5]) + "," + O(t[12]) + "," + O(t[13]) + ")"
        }
        return function () {
          this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = u, this.shear = h, this.scale = f, this.setTransform = p, this.translate = d, this.transform = m, this.applyToPoint = _, this.applyToX = b, this.applyToY = T, this.applyToZ = S, this.applyToPointArray = C, this.applyToTriplePoints = x, this.applyToPointStringified = P, this.toCSS = w, this.to2dCSS = D, this.clone = g, this.cloneFromProps = E, this.equals = v, this.inversePoints = A, this.inversePoint = I, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
        }
      }();
    ! function (t, e) {
      var r, n = this,
        i = 256,
        a = 6,
        s = "random",
        o = e.pow(i, a),
        l = e.pow(2, 52),
        h = 2 * l,
        c = i - 1;

      function u(t) {
        var e, r = t.length,
          n = this,
          a = 0,
          s = n.i = n.j = 0,
          o = n.S = [];
        for (r || (t = [r++]); a < i;) o[a] = a++;
        for (a = 0; a < i; a++) o[a] = o[s = c & s + t[a % r] + (e = o[a])], o[s] = e;
        n.g = function (t) {
          for (var e, r = 0, a = n.i, s = n.j, o = n.S; t--;) e = o[a = c & a + 1], r = r * i + o[c & (o[a] = o[s = c & s + e]) + (o[s] = e)];
          return n.i = a, n.j = s, r
        }
      }

      function f(t, e) {
        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
      }

      function p(t, e) {
        for (var r, n = t + "", i = 0; i < n.length;) e[c & i] = c & (r ^= 19 * e[c & i]) + n.charCodeAt(i++);
        return d(e)
      }

      function d(t) {
        return String.fromCharCode.apply(0, t)
      }
      e["seed" + s] = function (c, m, y) {
        var v = [],
          g = p(function t(e, r) {
            var n, i = [],
              a = typeof e;
            if (r && "object" == a)
              for (n in e) try {
                i.push(t(e[n], r - 1))
              } catch (t) {}
            return i.length ? i : "string" == a ? e : e + "\0"
          }((m = !0 === m ? {
            entropy: !0
          } : m || {}).entropy ? [c, d(t)] : null === c ? function () {
            try {
              if (r) return d(r.randomBytes(i));
              var e = new Uint8Array(i);
              return (n.crypto || n.msCrypto).getRandomValues(e), d(e)
            } catch (e) {
              var a = n.navigator,
                s = a && a.plugins;
              return [+new Date, n, s, n.screen, d(t)]
            }
          }() : c, 3), v),
          E = new u(v),
          _ = function () {
            for (var t = E.g(a), e = o, r = 0; t < l;) t = (t + r) * i, e *= i, r = E.g(1);
            for (; t >= h;) t /= 2, e /= 2, r >>>= 1;
            return (t + r) / e
          };
        return _.int32 = function () {
          return 0 | E.g(4)
        }, _.quick = function () {
          return E.g(4) / 4294967296
        }, _.double = _, p(d(E.S), t), (m.pass || y || function (t, r, n, i) {
          return i && (i.S && f(i, E), t.state = function () {
            return f(E, {})
          }), n ? (e[s] = t, r) : t
        })(_, g, "global" in m ? m.global : this == e, m.state)
      }, p(e.random(), t)
    }([], BMMath);
    var BezierFactory = function () {
      var t = {
          getBezierEasing: function (t, r, n, i, a) {
            var s = a || ("bez_" + t + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
            if (e[s]) return e[s];
            var o = new p([t, r, n, i]);
            return e[s] = o, o
          }
        },
        e = {};
      var r = 4,
        n = 1e-7,
        i = 10,
        a = 11,
        s = 1 / (a - 1),
        o = "function" == typeof Float32Array;

      function l(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function h(t, e) {
        return 3 * e - 6 * t
      }

      function c(t) {
        return 3 * t
      }

      function u(t, e, r) {
        return ((l(e, r) * t + h(e, r)) * t + c(e)) * t
      }

      function f(t, e, r) {
        return 3 * l(e, r) * t * t + 2 * h(e, r) * t + c(e)
      }

      function p(t) {
        this._p = t, this._mSampleValues = o ? new Float32Array(a) : new Array(a), this._precomputed = !1, this.get = this.get.bind(this)
      }
      return p.prototype = {
        get: function (t) {
          var e = this._p[0],
            r = this._p[1],
            n = this._p[2],
            i = this._p[3];
          return this._precomputed || this._precompute(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : u(this._getTForX(t), r, i)
        },
        _precompute: function () {
          var t = this._p[0],
            e = this._p[1],
            r = this._p[2],
            n = this._p[3];
          this._precomputed = !0, t === e && r === n || this._calcSampleValues()
        },
        _calcSampleValues: function () {
          for (var t = this._p[0], e = this._p[2], r = 0; r < a; ++r) this._mSampleValues[r] = u(r * s, t, e)
        },
        _getTForX: function (t) {
          for (var e = this._p[0], o = this._p[2], l = this._mSampleValues, h = 0, c = 1, p = a - 1; c !== p && l[c] <= t; ++c) h += s;
          var d = h + (t - l[--c]) / (l[c + 1] - l[c]) * s,
            m = f(d, e, o);
          return m >= .001 ? function (t, e, n, i) {
            for (var a = 0; a < r; ++a) {
              var s = f(e, n, i);
              if (0 === s) return e;
              e -= (u(e, n, i) - t) / s
            }
            return e
          }(t, d, e, o) : 0 === m ? d : function (t, e, r, a, s) {
            var o, l, h = 0;
            do {
              (o = u(l = e + (r - e) / 2, a, s) - t) > 0 ? r = l : e = l
            } while (Math.abs(o) > n && ++h < i);
            return l
          }(t, h, h + s, e, o)
        }
      }, t
    }();

    function extendPrototype(t, e) {
      var r, n, i = t.length;
      for (r = 0; r < i; r += 1)
        for (var a in n = t[r].prototype) n.hasOwnProperty(a) && (e.prototype[a] = n[a])
    }

    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e)
    }

    function createProxyFunction(t) {
      function e() {}
      return e.prototype = t, e
    }

    function bezFunction() {
      Math;

      function t(t, e, r, n, i, a) {
        var s = t * n + e * i + r * a - i * n - a * t - r * e;
        return s > -.001 && s < .001
      }
      var e = function (t, e, r, n) {
        var i, a, s, o, l, h, c = defaultCurveSegments,
          u = 0,
          f = [],
          p = [],
          d = bezier_length_pool.newElement();
        for (s = r.length, i = 0; i < c; i += 1) {
          for (l = i / (c - 1), h = 0, a = 0; a < s; a += 1) o = bm_pow(1 - l, 3) * t[a] + 3 * bm_pow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bm_pow(l, 2) * n[a] + bm_pow(l, 3) * e[a], f[a] = o, null !== p[a] && (h += bm_pow(f[a] - p[a], 2)), p[a] = f[a];
          h && (u += h = bm_sqrt(h)), d.percents[i] = l, d.lengths[i] = u
        }
        return d.addedLength = u, d
      };

      function r(t) {
        this.segmentLength = 0, this.points = new Array(t)
      }

      function n(t, e) {
        this.partialLength = t, this.point = e
      }
      var i, a = (i = {}, function (e, a, s, o) {
        var l = (e[0] + "_" + e[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
        if (!i[l]) {
          var h, c, u, f, p, d, m, y = defaultCurveSegments,
            v = 0,
            g = null;
          2 === e.length && (e[0] != a[0] || e[1] != a[1]) && t(e[0], e[1], a[0], a[1], e[0] + s[0], e[1] + s[1]) && t(e[0], e[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (y = 2);
          var E = new r(y);
          for (u = s.length, h = 0; h < y; h += 1) {
            for (m = createSizedArray(u), p = h / (y - 1), d = 0, c = 0; c < u; c += 1) f = bm_pow(1 - p, 3) * e[c] + 3 * bm_pow(1 - p, 2) * p * (e[c] + s[c]) + 3 * (1 - p) * bm_pow(p, 2) * (a[c] + o[c]) + bm_pow(p, 3) * a[c], m[c] = f, null !== g && (d += bm_pow(m[c] - g[c], 2));
            v += d = bm_sqrt(d), E.points[h] = new n(d, m), g = m
          }
          E.segmentLength = v, i[l] = E
        }
        return i[l]
      });

      function s(t, e) {
        var r = e.percents,
          n = e.lengths,
          i = r.length,
          a = bm_floor((i - 1) * t),
          s = t * e.addedLength,
          o = 0;
        if (a === i - 1 || 0 === a || s === n[a]) return r[a];
        for (var l = n[a] > s ? -1 : 1, h = !0; h;)
          if (n[a] <= s && n[a + 1] > s ? (o = (s - n[a]) / (n[a + 1] - n[a]), h = !1) : a += l, a < 0 || a >= i - 1) {
            if (a === i - 1) return r[a];
            h = !1
          } return r[a] + (r[a + 1] - r[a]) * o
      }
      var o = createTypedArray("float32", 8);
      return {
        getSegmentsLength: function (t) {
          var r, n = segments_length_pool.newElement(),
            i = t.c,
            a = t.v,
            s = t.o,
            o = t.i,
            l = t._length,
            h = n.lengths,
            c = 0;
          for (r = 0; r < l - 1; r += 1) h[r] = e(a[r], a[r + 1], s[r], o[r + 1]), c += h[r].addedLength;
          return i && l && (h[r] = e(a[r], a[0], s[r], o[0]), c += h[r].addedLength), n.totalLength = c, n
        },
        getNewSegment: function (t, e, r, n, i, a, l) {
          var h, c = s(i = i < 0 ? 0 : i > 1 ? 1 : i, l),
            u = s(a = a > 1 ? 1 : a, l),
            f = t.length,
            p = 1 - c,
            d = 1 - u,
            m = p * p * p,
            y = c * p * p * 3,
            v = c * c * p * 3,
            g = c * c * c,
            E = p * p * d,
            _ = c * p * d + p * c * d + p * p * u,
            b = c * c * d + p * c * u + c * p * u,
            T = c * c * u,
            S = p * d * d,
            I = c * d * d + p * u * d + p * d * u,
            A = c * u * d + p * u * u + c * d * u,
            x = c * u * u,
            C = d * d * d,
            P = u * d * d + d * u * d + d * d * u,
            w = u * u * d + d * u * u + u * d * u,
            O = u * u * u;
          for (h = 0; h < f; h += 1) o[4 * h] = Math.round(1e3 * (m * t[h] + y * r[h] + v * n[h] + g * e[h])) / 1e3, o[4 * h + 1] = Math.round(1e3 * (E * t[h] + _ * r[h] + b * n[h] + T * e[h])) / 1e3, o[4 * h + 2] = Math.round(1e3 * (S * t[h] + I * r[h] + A * n[h] + x * e[h])) / 1e3, o[4 * h + 3] = Math.round(1e3 * (C * t[h] + P * r[h] + w * n[h] + O * e[h])) / 1e3;
          return o
        },
        getPointInSegment: function (t, e, r, n, i, a) {
          var o = s(i, a),
            l = 1 - o;
          return [Math.round(1e3 * (l * l * l * t[0] + (o * l * l + l * o * l + l * l * o) * r[0] + (o * o * l + l * o * o + o * l * o) * n[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (l * l * l * t[1] + (o * l * l + l * o * l + l * l * o) * r[1] + (o * o * l + l * o * o + o * l * o) * n[1] + o * o * o * e[1])) / 1e3]
        },
        buildBezierData: a,
        pointOnLine2D: t,
        pointOnLine3D: function (e, r, n, i, a, s, o, l, h) {
          if (0 === n && 0 === s && 0 === h) return t(e, r, i, a, o, l);
          var c, u = Math.sqrt(Math.pow(i - e, 2) + Math.pow(a - r, 2) + Math.pow(s - n, 2)),
            f = Math.sqrt(Math.pow(o - e, 2) + Math.pow(l - r, 2) + Math.pow(h - n, 2)),
            p = Math.sqrt(Math.pow(o - i, 2) + Math.pow(l - a, 2) + Math.pow(h - s, 2));
          return (c = u > f ? u > p ? u - f - p : p - f - u : p > f ? p - f - u : f - u - p) > -1e-4 && c < 1e-4
        }
      }
    }! function () {
      for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function (e, r) {
        var n = (new Date).getTime(),
          i = Math.max(0, 16 - (n - t)),
          a = setTimeout(function () {
            e(n + i)
          }, i);
        return t = n + i, a
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
      })
    }();
    var bez = bezFunction();

    function dataFunctionManager() {
      function t(t, e) {
        for (var r = 0, n = e.length; r < n;) {
          if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
          r += 1
        }
      }

      function e(t) {
        var n, i, a;
        for (n = t.length - 1; n >= 0; n -= 1)
          if ("sh" == t[n].ty) {
            if (t[n].ks.k.i) r(t[n].ks.k);
            else
              for (a = t[n].ks.k.length, i = 0; i < a; i += 1) t[n].ks.k[i].s && r(t[n].ks.k[i].s[0]), t[n].ks.k[i].e && r(t[n].ks.k[i].e[0]);
            !0
          } else "gr" == t[n].ty && e(t[n].it)
      }

      function r(t) {
        var e, r = t.i.length;
        for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
      }

      function n(t, e) {
        var r = e ? e.split(".") : [100, 100, 100];
        return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0))
      }
      var i, a = function () {
          var t = [4, 4, 14];

          function e(t) {
            var e, r, n, i = t.length;
            for (e = 0; e < i; e += 1) 5 === t[e].ty && (r = t[e], n = void 0, n = r.t.d, r.t.d = {
              k: [{
                s: n,
                t: 0
              }]
            })
          }
          return function (r) {
            if (n(t, r.v) && (e(r.layers), r.assets)) {
              var i, a = r.assets.length;
              for (i = 0; i < a; i += 1) r.assets[i].layers && e(r.assets[i].layers)
            }
          }
        }(),
        s = (i = [4, 7, 99], function (t) {
          if (t.chars && !n(i, t.v)) {
            var e, a, s, o, l, h = t.chars.length;
            for (e = 0; e < h; e += 1)
              if (t.chars[e].data && t.chars[e].data.shapes)
                for (s = (l = t.chars[e].data.shapes[0].it).length, a = 0; a < s; a += 1)(o = l[a].ks.k).__converted || (r(l[a].ks.k), o.__converted = !0)
          }
        }),
        o = function () {
          var t = [4, 1, 9];

          function e(t) {
            var r, n, i, a = t.length;
            for (r = 0; r < a; r += 1)
              if ("gr" === t[r].ty) e(t[r].it);
              else if ("fl" === t[r].ty || "st" === t[r].ty)
              if (t[r].c.k && t[r].c.k[0].i)
                for (i = t[r].c.k.length, n = 0; n < i; n += 1) t[r].c.k[n].s && (t[r].c.k[n].s[0] /= 255, t[r].c.k[n].s[1] /= 255, t[r].c.k[n].s[2] /= 255, t[r].c.k[n].s[3] /= 255), t[r].c.k[n].e && (t[r].c.k[n].e[0] /= 255, t[r].c.k[n].e[1] /= 255, t[r].c.k[n].e[2] /= 255, t[r].c.k[n].e[3] /= 255);
              else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
          }

          function r(t) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) 4 === t[r].ty && e(t[r].shapes)
          }
          return function (e) {
            if (n(t, e.v) && (r(e.layers), e.assets)) {
              var i, a = e.assets.length;
              for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
            }
          }
        }(),
        l = function () {
          var t = [4, 4, 18];

          function e(t) {
            var r, n, i;
            for (r = t.length - 1; r >= 0; r -= 1)
              if ("sh" == t[r].ty) {
                if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                else
                  for (i = t[r].ks.k.length, n = 0; n < i; n += 1) t[r].ks.k[n].s && (t[r].ks.k[n].s[0].c = t[r].closed), t[r].ks.k[n].e && (t[r].ks.k[n].e[0].c = t[r].closed);
                !0
              } else "gr" == t[r].ty && e(t[r].it)
          }

          function r(t) {
            var r, n, i, a, s, o, l = t.length;
            for (n = 0; n < l; n += 1) {
              if ((r = t[n]).hasMask) {
                var h = r.masksProperties;
                for (a = h.length, i = 0; i < a; i += 1)
                  if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                  else
                    for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl)
              }
              4 === r.ty && e(r.shapes)
            }
          }
          return function (e) {
            if (n(t, e.v) && (r(e.layers), e.assets)) {
              var i, a = e.assets.length;
              for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
            }
          }
        }();
      var h = {};
      return h.completeData = function (n, i) {
        n.__complete || (o(n), a(n), s(n), l(n), function n(i, a, s) {
          var o, l, h, c, u, f, p, d = i.length;
          for (l = 0; l < d; l += 1)
            if ("ks" in (o = i[l]) && !o.completed) {
              if (o.completed = !0, o.tt && (i[l - 1].td = o.tt), o.hasMask) {
                var m = o.masksProperties;
                for (c = m.length, h = 0; h < c; h += 1)
                  if (m[h].pt.k.i) r(m[h].pt.k);
                  else
                    for (f = m[h].pt.k.length, u = 0; u < f; u += 1) m[h].pt.k[u].s && r(m[h].pt.k[u].s[0]), m[h].pt.k[u].e && r(m[h].pt.k[u].e[0])
              }
              0 === o.ty ? (o.layers = t(o.refId, a), n(o.layers, a, s)) : 4 === o.ty ? e(o.shapes) : 5 == o.ty && (0 !== (p = o).t.a.length || "m" in p.t.p || (p.singleShape = !0))
            }
        }(n.layers, n.assets, i), n.__complete = !0)
      }, h
    }
    var dataManager = dataFunctionManager(),
      FontManager = function () {
        var t = 5e3,
          e = {
            w: 0,
            size: 0,
            shapes: []
          },
          r = [];

        function n(t, e) {
          var r = createTag("span");
          r.style.fontFamily = e;
          var n = createTag("span");
          n.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
          var i = n.offsetWidth;
          return n.style.fontFamily = t + ", " + e, {
            node: n,
            w: i,
            parent: r
          }
        }

        function i(t, e) {
          var r = createNS("text");
          return r.style.fontSize = "100px", r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", e.fStyle), r.setAttribute("font-weight", e.fWeight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r
        }
        r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var a = function () {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
        };
        return a.getCombinedCharacterCodes = function () {
          return r
        }, a.prototype.addChars = function (t) {
          if (t) {
            this.chars || (this.chars = []);
            var e, r, n, i = t.length,
              a = this.chars.length;
            for (e = 0; e < i; e += 1) {
              for (r = 0, n = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (n = !0), r += 1;
              n || (this.chars.push(t[e]), a += 1)
            }
          }
        }, a.prototype.addFonts = function (t, e) {
          if (t) {
            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
            var r, a = t.list,
              s = a.length,
              o = s;
            for (r = 0; r < s; r += 1) {
              var l, h, c = !0;
              if (a[r].loaded = !1, a[r].monoCase = n(a[r].fFamily, "monospace"), a[r].sansCase = n(a[r].fFamily, "sans-serif"), a[r].fPath) {
                if ("p" === a[r].fOrigin || 3 === a[r].origin) {
                  if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[r].fFamily + '"], style[f-origin="3"][f-family="' + a[r].fFamily + '"]')).length > 0 && (c = !1), c) {
                    var u = createTag("style");
                    u.setAttribute("f-forigin", a[r].fOrigin), u.setAttribute("f-origin", a[r].origin), u.setAttribute("f-family", a[r].fFamily), u.type = "text/css", u.innerHTML = "@font-face {font-family: " + a[r].fFamily + "; font-style: normal; src: url('" + a[r].fPath + "');}", e.appendChild(u)
                  }
                } else if ("g" === a[r].fOrigin || 1 === a[r].origin) {
                  for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h++) - 1 !== l[h].href.indexOf(a[r].fPath) && (c = !1);
                  if (c) {
                    var f = createTag("link");
                    f.setAttribute("f-forigin", a[r].fOrigin), f.setAttribute("f-origin", a[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = a[r].fPath, document.body.appendChild(f)
                  }
                } else if ("t" === a[r].fOrigin || 2 === a[r].origin) {
                  for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h++) a[r].fPath === l[h].src && (c = !1);
                  if (c) {
                    var p = createTag("link");
                    p.setAttribute("f-forigin", a[r].fOrigin), p.setAttribute("f-origin", a[r].origin), p.setAttribute("rel", "stylesheet"), p.setAttribute("href", a[r].fPath), e.appendChild(p)
                  }
                }
              } else a[r].loaded = !0, o -= 1;
              a[r].helper = i(e, a[r]), a[r].cache = {}, this.fonts.push(a[r])
            }
            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
          } else this.isLoaded = !0
        }, a.prototype.getCharData = function (t, r, n) {
          for (var i = 0, a = this.chars.length; i < a;) {
            if (this.chars[i].ch === t && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
            i += 1
          }
          return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, r, n), e
        }, a.prototype.getFontByName = function (t) {
          for (var e = 0, r = this.fonts.length; e < r;) {
            if (this.fonts[e].fName === t) return this.fonts[e];
            e += 1
          }
          return this.fonts[0]
        }, a.prototype.measureText = function (t, e, r) {
          var n = this.getFontByName(e),
            i = t.charCodeAt(0);
          if (!n.cache[i + 1]) {
            var a = n.helper;
            if (" " === t) {
              a.textContent = "|" + t + "|";
              var s = a.getComputedTextLength();
              a.textContent = "||";
              var o = a.getComputedTextLength();
              n.cache[i + 1] = (s - o) / 100
            } else a.textContent = t, n.cache[i + 1] = a.getComputedTextLength() / 100
          }
          return n.cache[i + 1] * r
        }, a.prototype.checkLoadedFonts = function () {
          var e, r, n, i = this.fonts.length,
            a = i;
          for (e = 0; e < i; e += 1) this.fonts[e].loaded ? a -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (r = this.fonts[e].monoCase.node, n = this.fonts[e].monoCase.w, r.offsetWidth !== n ? (a -= 1, this.fonts[e].loaded = !0) : (r = this.fonts[e].sansCase.node, n = this.fonts[e].sansCase.w, r.offsetWidth !== n && (a -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
          0 !== a && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function () {
            this.isLoaded = !0
          }.bind(this), 0)
        }, a.prototype.loaded = function () {
          return this.isLoaded
        }, a
      }(),
      PropertyFactory = function () {
        var t = initialDefaultFrame,
          e = Math.abs;

        function r(t, e) {
          var r, i = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var a, s, o, l, h, c, u, f, p = e.lastIndex, d = p, m = this.keyframes.length - 1, y = !0; y;) {
            if (a = this.keyframes[d], s = this.keyframes[d + 1], d === m - 1 && t >= s.t - i) {
              a.h && (a = s), p = 0;
              break
            }
            if (s.t - i > t) {
              p = d;
              break
            }
            d < m - 1 ? d += 1 : (p = 0, y = !1)
          }
          var v, g, E, _, b, T, S, I, A, x, C = s.t - i,
            P = a.t - i;
          if (a.to) {
            a.bezierData || (a.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
            var w = a.bezierData;
            if (t >= C || t < P) {
              var O = t >= C ? w.points.length - 1 : 0;
              for (l = w.points[O].point.length, o = 0; o < l; o += 1) r[o] = w.points[O].point[o]
            } else {
              a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = f), h = f((t - P) / (C - P));
              var D, M = w.segmentLength * h,
                R = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (u = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, y = !0, c = w.points.length; y;) {
                if (R += w.points[u].partialLength, 0 === M || 0 === h || u === w.points.length - 1) {
                  for (l = w.points[u].point.length, o = 0; o < l; o += 1) r[o] = w.points[u].point[o];
                  break
                }
                if (M >= R && M < R + w.points[u + 1].partialLength) {
                  for (D = (M - R) / w.points[u + 1].partialLength, l = w.points[u].point.length, o = 0; o < l; o += 1) r[o] = w.points[u].point[o] + (w.points[u + 1].point[o] - w.points[u].point[o]) * D;
                  break
                }
                u < c - 1 ? u += 1 : y = !1
              }
              e._lastPoint = u, e._lastAddedLength = R - w.points[u].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var F, k, L, N, V;
            if (m = a.s.length, v = s.s || a.e, this.sh && 1 !== a.h)
              if (t >= C) r[0] = v[0], r[1] = v[1], r[2] = v[2];
              else if (t <= P) r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2];
            else {
              var G = n(a.s),
                B = n(v);
              g = r, E = function (t, e, r) {
                var n, i, a, s, o, l = [],
                  h = t[0],
                  c = t[1],
                  u = t[2],
                  f = t[3],
                  p = e[0],
                  d = e[1],
                  m = e[2],
                  y = e[3];
                (i = h * p + c * d + u * m + f * y) < 0 && (i = -i, p = -p, d = -d, m = -m, y = -y);
                1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r);
                return l[0] = s * h + o * p, l[1] = s * c + o * d, l[2] = s * u + o * m, l[3] = s * f + o * y, l
              }(G, B, (t - P) / (C - P)), _ = E[0], b = E[1], T = E[2], S = E[3], I = Math.atan2(2 * b * S - 2 * _ * T, 1 - 2 * b * b - 2 * T * T), A = Math.asin(2 * _ * b + 2 * T * S), x = Math.atan2(2 * _ * S - 2 * b * T, 1 - 2 * _ * _ - 2 * T * T), g[0] = I / degToRads, g[1] = A / degToRads, g[2] = x / degToRads
            } else
              for (d = 0; d < m; d += 1) 1 !== a.h && (t >= C ? h = 1 : t < P ? h = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? f = a.__fnct[d] : (F = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], k = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], L = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], N = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], f = BezierFactory.getBezierEasing(F, k, L, N).get, a.__fnct[d] = f)) : a.__fnct ? f = a.__fnct : (F = a.o.x, k = a.o.y, L = a.i.x, N = a.i.y, f = BezierFactory.getBezierEasing(F, k, L, N).get, a.__fnct = f), h = f((t - P) / (C - P)))), v = s.s || a.e, V = 1 === a.h ? a.s[d] : a.s[d] + (v[d] - a.s[d]) * h, "multidimensional" === this.propType ? r[d] = V : r = V
          }
          return e.lastIndex = p, r
        }

        function n(t) {
          var e = t[0] * degToRads,
            r = t[1] * degToRads,
            n = t[2] * degToRads,
            i = Math.cos(e / 2),
            a = Math.cos(r / 2),
            s = Math.cos(n / 2),
            o = Math.sin(e / 2),
            l = Math.sin(r / 2),
            h = Math.sin(n / 2);
          return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h]
        }

        function i() {
          var e = this.comp.renderedFrame - this.offsetTime,
            r = this.keyframes[0].t - this.offsetTime,
            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && e >= n || this._caching.lastFrame < r && e < r))) {
            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var i = this.interpolateValue(e, this._caching);
            this.pv = i
          }
          return this._caching.lastFrame = e, this.pv
        }

        function a(t) {
          var r;
          if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
          else
            for (var n = 0, i = this.v.length; n < i;) r = t[n] * this.mult, e(this.v[n] - r) > 1e-5 && (this.v[n] = r, this._mdf = !0), n += 1
        }

        function s() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              this.lock = !0, this._mdf = this._isFirstFrame;
              var t, e = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function o(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function l(t, e, r, n) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o
        }

        function h(t, e, r, n) {
          this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var i, l = e.k.length;
          this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l);
          createTypedArray("float32", l);
          for (this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = e.k[i] * this.mult, this.pv[i] = e.k[i];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o
        }

        function c(e, n, l, h) {
          this.propType = "unidimensional", this.keyframes = n.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
            lastFrame: t,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [i.bind(this)], this.addEffect = o
        }

        function u(e, n, l, h) {
          this.propType = "multidimensional";
          var c, u, f, p, d, m = n.k.length;
          for (c = 0; c < m - 1; c += 1) n.k[c].to && n.k[c].s && n.k[c].e && (u = n.k[c].s, f = n.k[c].e, p = n.k[c].to, d = n.k[c].ti, (2 === u.length && (u[0] !== f[0] || u[1] !== f[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], u[0] + p[0], u[1] + p[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], f[0] + d[0], f[1] + d[1]) || 3 === u.length && (u[0] !== f[0] || u[1] !== f[1] || u[2] !== f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], u[0] + p[0], u[1] + p[1], u[2] + p[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], f[0] + d[0], f[1] + d[1], f[2] + d[2])) && (n.k[c].to = null, n.k[c].ti = null), u[0] === f[0] && u[1] === f[1] && 0 === p[0] && 0 === p[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === f[2] && 0 === p[2] && 0 === d[2]) && (n.k[c].to = null, n.k[c].ti = null));
          this.effectsSequence = [i.bind(this)], this.keyframes = n.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
          var y = n.k[0].s.length;
          for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), c = 0; c < y; c += 1) this.v[c] = t, this.pv[c] = t;
          this._caching = {
            lastFrame: t,
            lastIndex: 0,
            value: createTypedArray("float32", y)
          }, this.addEffect = o
        }
        return {
          getProp: function (t, e, r, n, i) {
            var a;
            if (e.k.length)
              if ("number" == typeof e.k[0]) a = new h(t, e, n, i);
              else switch (r) {
                case 0:
                  a = new c(t, e, n, i);
                  break;
                case 1:
                  a = new u(t, e, n, i)
              } else a = new l(t, e, n, i);
            return a.effectsSequence.length && i.addDynamicProperty(a), a
          }
        }
      }(),
      TransformPropertyFactory = function () {
        function t(t, e, r) {
          if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
              k: [0, 0, 0]
            }, 1, 0, this), e.rx) {
            if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
              var n, i = e.or.k.length;
              for (n = 0; n < i; n += 1) e.or.k[n].to = e.or.k[n].ti = null
            }
            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(t, e.r || {
            k: 0
          }, 0, degToRads, this);
          e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
            k: [100, 100, 100]
          }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        return t.prototype = {
          applyToMatrix: function (t) {
            var e = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          },
          getValue: function (t) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                  var e, r, n = this.elem.globalData.frameRate;
                  if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (e = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    e = [], r = [];
                    var i = this.px,
                      a = this.py;
                    i._caching.lastFrame + i.offsetTime <= i.keyframes[0].t ? (e[0] = i.getValueAtTime((i.keyframes[0].t + .01) / n, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / n, 0), r[0] = i.getValueAtTime(i.keyframes[0].t / n, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / n, 0)) : i._caching.lastFrame + i.offsetTime >= i.keyframes[i.keyframes.length - 1].t ? (e[0] = i.getValueAtTime(i.keyframes[i.keyframes.length - 1].t / n, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0), r[0] = i.getValueAtTime((i.keyframes[i.keyframes.length - 1].t - .01) / n, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / n, 0)) : (e = [i.pv, a.pv], r[0] = i.getValueAtTime((i._caching.lastFrame + i.offsetTime - .01) / n, i.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / n, a.offsetTime))
                  }
                  this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]))
                }
                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
              }
              this.frameId = this.elem.globalData.frameId
            }
          },
          precalculateMatrix: function () {
            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
              }
              if (this.r) {
                if (this.r.effectsSequence.length) return;
                this.pre.rotate(-this.r.v), this.appliedTransformations = 4
              } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }
          },
          autoOrient: function () {}
        }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function (t) {
          this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
        }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
          getTransformProperty: function (e, r, n) {
            return new t(e, r, n)
          }
        }
      }();

    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
    }
    ShapePath.prototype.setPathData = function (t, e) {
      this.c = t, this.setLength(e);
      for (var r = 0; r < e;) this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1
    }, ShapePath.prototype.setLength = function (t) {
      for (; this._maxLength < t;) this.doubleArrayLength();
      this._length = t
    }, ShapePath.prototype.doubleArrayLength = function () {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function (t, e, r, n, i) {
      var a;
      switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          a = this.v;
          break;
        case "i":
          a = this.i;
          break;
        case "o":
          a = this.o
      }(!a[n] || a[n] && !i) && (a[n] = point_pool.newElement()), a[n][0] = t, a[n][1] = e
    }, ShapePath.prototype.setTripleAt = function (t, e, r, n, i, a, s, o) {
      this.setXYAt(t, e, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
    }, ShapePath.prototype.reverse = function () {
      var t = new ShapePath;
      t.setPathData(this.c, this._length);
      var e = this.v,
        r = this.o,
        n = this.i,
        i = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
      var a, s = this._length - 1,
        o = this._length;
      for (a = i; a < o; a += 1) t.setTripleAt(e[s][0], e[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
      return t
    };
    var ShapePropertyFactory = function () {
        var t = -999999;

        function e(t, e, r) {
          var n, i, a, s, o, l, h, c, u, f = r.lastIndex,
            p = this.keyframes;
          if (t < p[0].t - this.offsetTime) n = p[0].s[0], a = !0, f = 0;
          else if (t >= p[p.length - 1].t - this.offsetTime) n = p[p.length - 1].s ? p[p.length - 1].s[0] : p[p.length - 2].e[0], a = !0;
          else {
            for (var d, m, y = f, v = p.length - 1, g = !0; g && (d = p[y], !((m = p[y + 1]).t - this.offsetTime > t));) y < v - 1 ? y += 1 : g = !1;
            if (f = y, !(a = 1 === d.h)) {
              if (t >= m.t - this.offsetTime) c = 1;
              else if (t < d.t - this.offsetTime) c = 0;
              else {
                var E;
                d.__fnct ? E = d.__fnct : (E = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = E), c = E((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
              }
              i = m.s ? m.s[0] : d.e[0]
            }
            n = d.s[0]
          }
          for (l = e._length, h = n.i[0].length, r.lastIndex = f, s = 0; s < l; s += 1)
            for (o = 0; o < h; o += 1) u = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * c, e.i[s][o] = u, u = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * c, e.o[s][o] = u, u = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * c, e.v[s][o] = u
        }

        function r() {
          var e = this.comp.renderedFrame - this.offsetTime,
            r = this.keyframes[0].t - this.offsetTime,
            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
            i = this._caching.lastFrame;
          return i !== t && (i < r && e < r || i > n && e > n) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
        }

        function n() {
          this.paths = this.localShapeCollection
        }

        function i(t) {
          (function (t, e) {
            if (t._length !== e._length || t.c !== e.c) return !1;
            var r, n = t._length;
            for (r = 0; r < n; r += 1)
              if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
            return !0
          })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
        }

        function a() {
          if (this.elem.globalData.frameId !== this.frameId)
            if (this.effectsSequence.length)
              if (this.lock) this.setVValue(this.pv);
              else {
                this.lock = !0, this._mdf = !1;
                var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                  r = this.effectsSequence.length;
                for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
              }
          else this._mdf = !1
        }

        function s(t, e, r) {
          this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
          var i = 3 === r ? e.pt.k : e.ks.k;
          this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
        }

        function o(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function l(e, i, a) {
          this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.k = !0, this.kf = !0;
          var s = this.keyframes[0].s[0].i.length;
          this.keyframes[0].s[0].i[0].length;
          this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = n, this._caching = {
            lastFrame: t,
            lastIndex: 0
          }, this.effectsSequence = [r.bind(this)]
        }
        s.prototype.interpolateShape = e, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = i, l.prototype.addEffect = o;
        var h = function () {
            var t = roundCorner;

            function e(t, e) {
              this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
            }
            return e.prototype = {
              reset: n,
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
              },
              convertEllToPath: function () {
                var e = this.p.v[0],
                  r = this.p.v[1],
                  n = this.s.v[0] / 2,
                  i = this.s.v[1] / 2,
                  a = 3 !== this.d,
                  s = this.v;
                s.v[0][0] = e, s.v[0][1] = r - i, s.v[1][0] = a ? e + n : e - n, s.v[1][1] = r, s.v[2][0] = e, s.v[2][1] = r + i, s.v[3][0] = a ? e - n : e + n, s.v[3][1] = r, s.i[0][0] = a ? e - n * t : e + n * t, s.i[0][1] = r - i, s.i[1][0] = a ? e + n : e - n, s.i[1][1] = r - i * t, s.i[2][0] = a ? e + n * t : e - n * t, s.i[2][1] = r + i, s.i[3][0] = a ? e - n : e + n, s.i[3][1] = r + i * t, s.o[0][0] = a ? e + n * t : e - n * t, s.o[0][1] = r - i, s.o[1][0] = a ? e + n : e - n, s.o[1][1] = r + i * t, s.o[2][0] = a ? e - n * t : e + n * t, s.o[2][1] = r + i, s.o[3][0] = a ? e - n : e + n, s.o[3][1] = r - i * t
              }
            }, extendPrototype([DynamicPropertyContainer], e), e
          }(),
          c = function () {
            function t(t, e) {
              this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
            }
            return t.prototype = {
              reset: n,
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
              },
              convertStarToPath: function () {
                var t, e, r, n, i = 2 * Math.floor(this.pt.v),
                  a = 2 * Math.PI / i,
                  s = !0,
                  o = this.or.v,
                  l = this.ir.v,
                  h = this.os.v,
                  c = this.is.v,
                  u = 2 * Math.PI * o / (2 * i),
                  f = 2 * Math.PI * l / (2 * i),
                  p = -Math.PI / 2;
                p += this.r.v;
                var d = 3 === this.data.d ? -1 : 1;
                for (this.v._length = 0, t = 0; t < i; t += 1) {
                  r = s ? h : c, n = s ? u : f;
                  var m = (e = s ? o : l) * Math.cos(p),
                    y = e * Math.sin(p),
                    v = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                    g = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                  m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - v * n * r * d, y - g * n * r * d, m + v * n * r * d, y + g * n * r * d, t, !0), s = !s, p += a * d
                }
              },
              convertPolygonToPath: function () {
                var t, e = Math.floor(this.pt.v),
                  r = 2 * Math.PI / e,
                  n = this.or.v,
                  i = this.os.v,
                  a = 2 * Math.PI * n / (4 * e),
                  s = -Math.PI / 2,
                  o = 3 === this.data.d ? -1 : 1;
                for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                  var l = n * Math.cos(s),
                    h = n * Math.sin(s),
                    c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                    u = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                  l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * a * i * o, h - u * a * i * o, l + c * a * i * o, h + u * a * i * o, t, !0), s += r * o
                }
                this.paths.length = 0, this.paths[0] = this.v
              }
            }, extendPrototype([DynamicPropertyContainer], t), t
          }(),
          u = function () {
            function t(t, e) {
              this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
            }
            return t.prototype = {
              convertRectToPath: function () {
                var t = this.p.v[0],
                  e = this.p.v[1],
                  r = this.s.v[0] / 2,
                  n = this.s.v[1] / 2,
                  i = bm_min(r, n, this.r.v),
                  a = i * (1 - roundCorner);
                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + i, t + r, e - n + a, 0, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - a, t + r, e + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e + n, t + r - i, e + n, t + r - a, e + n, 2, !0), this.v.setTripleAt(t - r + i, e + n, t - r + a, e + n, t - r + i, e + n, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - i, t - r, e + n - a, 4, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + a, t - r, e - n + i, 5, !0), this.v.setTripleAt(t - r + i, e - n, t - r + i, e - n, t - r + a, e - n, 6, !0), this.v.setTripleAt(t + r - i, e - n, t + r - a, e - n, t + r - i, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + a, e + n, t - r, e + n, 2), this.v.setTripleAt(t - r, e - n, t - r, e - n + a, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + a, t + r, e - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e - n, t + r - i, e - n, t + r - a, e - n, 1, !0), this.v.setTripleAt(t - r + i, e - n, t - r + a, e - n, t - r + i, e - n, 2, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + i, t - r, e - n + a, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - a, t - r, e + n - i, 4, !0), this.v.setTripleAt(t - r + i, e + n, t - r + i, e + n, t - r + a, e + n, 5, !0), this.v.setTripleAt(t + r - i, e + n, t + r - a, e + n, t + r - i, e + n, 6, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - i, t + r, e + n - a, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + a, e - n, t - r, e - n, 1, !0), this.v.setTripleAt(t - r, e + n, t - r, e + n - a, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - a, e + n, t + r, e + n, 3, !0)))
              },
              getValue: function (t) {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
              },
              reset: n
            }, extendPrototype([DynamicPropertyContainer], t), t
          }();
        var f = {
          getShapeProp: function (t, e, r) {
            var n;
            return 3 === r || 4 === r ? n = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new s(t, e, r) : 5 === r ? n = new u(t, e) : 6 === r ? n = new h(t, e) : 7 === r && (n = new c(t, e)), n.k && t.addDynamicProperty(n), n
          },
          getConstructorFunction: function () {
            return s
          },
          getKeyframedConstructorFunction: function () {
            return l
          }
        };
        return f
      }(),
      ShapeModifiers = function () {
        var t = {},
          e = {};
        return t.registerModifier = function (t, r) {
          e[t] || (e[t] = r)
        }, t.getModifier = function (t, r, n) {
          return new e[t](r, n)
        }, t
      }();

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
    }

    function DashProperty(t, e, r, n) {
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
      var i, a, s = e.length || 0;
      for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(t, e[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
        n: e[i].n,
        p: a
      };
      this.k || this.getValue(!0), this._isAnimated = this.k
    }

    function GradientProperty(t, e, r) {
      this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
      var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
      this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
    }
    ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = {
          shape: t.sh,
          data: t,
          localShapeCollection: shapeCollection_pool.newShapeCollection()
        };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
      }
    }, ShapeModifier.prototype.init = function (t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, ShapeModifier.prototype.processKeys = function () {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
    }, TrimModifier.prototype.addShapeToModifier = function (t) {
      t.pathsData = []
    }, TrimModifier.prototype.calculateShapeEdges = function (t, e, r, n, i) {
      var a = [];
      e <= 1 ? a.push({
        s: t,
        e: e
      }) : t >= 1 ? a.push({
        s: t - 1,
        e: e - 1
      }) : (a.push({
        s: t,
        e: 1
      }), a.push({
        s: 0,
        e: e - 1
      }));
      var s, o, l = [],
        h = a.length;
      for (s = 0; s < h; s += 1) {
        var c, u;
        if ((o = a[s]).e * i < n || o.s * i > n + r);
        else c = o.s * i <= n ? 0 : (o.s * i - n) / r, u = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([c, u])
      }
      return l.length || l.push([0, 0]), l
    }, TrimModifier.prototype.releasePathsData = function (t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) segments_length_pool.release(t[e]);
      return t.length = 0, t
    }, TrimModifier.prototype.processShapes = function (t) {
      var e, r, n;
      if (this._mdf || t) {
        var i = this.o.v % 360 / 360;
        if (i < 0 && (i += 1), (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + i) > (r = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + i)) {
          var a = e;
          e = r, r = a
        }
        e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
      } else e = this.sValue, r = this.eValue;
      var s, o, l, h, c, u, f = this.shapes.length,
        p = 0;
      if (r === e)
        for (s = 0; s < f; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection;
      else if (1 === r && 0 === e || 0 === r && 1 === e) {
        if (this._mdf)
          for (s = 0; s < f; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
      } else {
        var d, m, y = [];
        for (s = 0; s < f; s += 1)
          if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
            if (l = (n = d.shape.paths)._length, u = 0, !d.shape._mdf && d.pathsData.length) u = d.totalShapeLength;
            else {
              for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(n.shapes[o]), h.push(c), u += c.totalLength;
              d.totalShapeLength = u, d.pathsData = h
            }
            p += u, d.shape._mdf = !0
          } else d.shape.paths = d.localShapeCollection;
        var v, g = e,
          E = r,
          _ = 0;
        for (s = f - 1; s >= 0; s -= 1)
          if ((d = this.shapes[s]).shape._mdf) {
            for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (v = this.calculateShapeEdges(e, r, d.totalShapeLength, _, p), _ += d.totalShapeLength) : v = [
                [g, E]
              ], l = v.length, o = 0; o < l; o += 1) {
              g = v[o][0], E = v[o][1], y.length = 0, E <= 1 ? y.push({
                s: d.totalShapeLength * g,
                e: d.totalShapeLength * E
              }) : g >= 1 ? y.push({
                s: d.totalShapeLength * (g - 1),
                e: d.totalShapeLength * (E - 1)
              }) : (y.push({
                s: d.totalShapeLength * g,
                e: d.totalShapeLength
              }), y.push({
                s: 0,
                e: d.totalShapeLength * (E - 1)
              }));
              var b = this.addShapes(d, y[0]);
              if (y[0].s !== y[0].e) {
                if (y.length > 1)
                  if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                    var T = b.pop();
                    this.addPaths(b, m), b = this.addShapes(d, y[1], T)
                  } else this.addPaths(b, m), b = this.addShapes(d, y[1]);
                this.addPaths(b, m)
              }
            }
            d.shape.paths = m
          }
      }
    }, TrimModifier.prototype.addPaths = function (t, e) {
      var r, n = t.length;
      for (r = 0; r < n; r += 1) e.addShape(t[r])
    }, TrimModifier.prototype.addSegment = function (t, e, r, n, i, a, s) {
      i.setXYAt(e[0], e[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(t[0], t[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
    }, TrimModifier.prototype.addSegmentFromArray = function (t, e, r, n) {
      e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
    }, TrimModifier.prototype.addShapes = function (t, e, r) {
      var n, i, a, s, o, l, h, c, u = t.pathsData,
        f = t.shape.paths.shapes,
        p = t.shape.paths._length,
        d = 0,
        m = [],
        y = !0;
      for (r ? (o = r._length, c = r._length) : (r = shape_pool.newElement(), o = 0, c = 0), m.push(r), n = 0; n < p; n += 1) {
        for (l = u[n].lengths, r.c = f[n].c, a = f[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
          if (d + (s = l[i - 1]).addedLength < e.s) d += s.addedLength, r.c = !1;
          else {
            if (d > e.e) {
              r.c = !1;
              break
            }
            e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[i], f[n].v[i], r, o, y), y = !1) : (h = bez.getNewSegment(f[n].v[i - 1], f[n].v[i], f[n].o[i - 1], f[n].i[i], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1), d += s.addedLength, o += 1
          } if (f[n].c && l.length) {
          if (s = l[i - 1], d <= e.e) {
            var v = l[i - 1].addedLength;
            e.s <= d && e.e >= d + v ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[0], f[n].v[0], r, o, y), y = !1) : (h = bez.getNewSegment(f[n].v[i - 1], f[n].v[0], f[n].o[i - 1], f[n].i[0], (e.s - d) / v, (e.e - d) / v, l[i - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1)
          } else r.c = !1;
          d += s.addedLength, o += 1
        }
        if (r._length && (r.setXYAt(r.v[c][0], r.v[c][1], "i", c), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
        n < p - 1 && (r = shape_pool.newElement(), y = !0, m.push(r), o = 0)
      }
      return m
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
    }, RoundCornersModifier.prototype.processPath = function (t, e) {
      var r = shape_pool.newElement();
      r.c = t.c;
      var n, i, a, s, o, l, h, c, u, f, p, d, m, y = t._length,
        v = 0;
      for (n = 0; n < y; n += 1) i = t.v[n], s = t.o[n], a = t.i[n], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== n && n !== y - 1 || t.c ? (o = 0 === n ? t.v[y - 1] : t.v[n - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = d = i[0] + (o[0] - i[0]) * h, u = m = i[1] - (i[1] - o[1]) * h, f = c - (c - i[0]) * roundCorner, p = u - (u - i[1]) * roundCorner, r.setTripleAt(c, u, f, p, d, m, v), v += 1, o = n === y - 1 ? t.v[0] : t.v[n + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = f = i[0] + (o[0] - i[0]) * h, u = p = i[1] + (o[1] - i[1]) * h, d = c - (c - i[0]) * roundCorner, m = u - (u - i[1]) * roundCorner, r.setTripleAt(c, u, f, p, d, m, v), v += 1) : (r.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], v), v += 1) : (r.setTripleAt(t.v[n][0], t.v[n][1], t.o[n][0], t.o[n][1], t.i[n][0], t.i[n][1], v), v += 1);
      return r
    }, RoundCornersModifier.prototype.processShapes = function (t) {
      var e, r, n, i, a, s, o = this.shapes.length,
        l = this.rd.v;
      if (0 !== l)
        for (r = 0; r < o; r += 1) {
          if ((a = this.shapes[r]).shape.paths, s = a.localShapeCollection, a.shape._mdf || this._mdf || t)
            for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(e[n], l));
          a.shape.paths = a.localShapeCollection
        }
      this.dynamicProperties.length || (this._mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function (t, e, r, n, i, a) {
      var s = a ? -1 : 1,
        o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
        l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
      t.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * s * i), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
    }, RepeaterModifier.prototype.init = function (t, e, r, n) {
      this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]);
      for (; r > 0;) r -= 1, this._elements.unshift(e[r]), 1;
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function (t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
    }, RepeaterModifier.prototype.cloneElements = function (t) {
      t.length;
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e
    }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
      var r, n = t.length;
      for (r = 0; r < n; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
    }, RepeaterModifier.prototype.processShapes = function (t) {
      var e, r, n, i, a;
      if (this._mdf || t) {
        var s, o = Math.ceil(this.c.v);
        if (this._groups.length < o) {
          for (; this._groups.length < o;) {
            var l = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            l.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
          }
          this.elem.reloadShapes()
        }
        for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) s = a < o, this._groups[n]._render = s, this.changeGroupRender(this._groups[n].it, s), a += 1;
        this._currentCopies = o;
        var h = this.o.v,
          c = h % 1,
          u = h > 0 ? Math.floor(h) : Math.ceil(h),
          f = (this.tr.v.props, this.pMatrix.props),
          p = this.rMatrix.props,
          d = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var m, y, v = 0;
        if (h > 0) {
          for (; v < u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), v += 1;
          c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1), v += c)
        } else if (h < 0) {
          for (; v > u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), v -= 1;
          c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0), v -= c)
        }
        for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
          if (y = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== v) {
            for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), m = 0; m < y; m += 1) r[m] = this.matrix.props[m];
            this.matrix.reset()
          } else
            for (this.matrix.reset(), m = 0; m < y; m += 1) r[m] = this.matrix.props[m];
          v += 1, a -= 1, n += i
        }
      } else
        for (a = this._currentCopies, n = 0, i = 1; a;) r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, n += i
    }, RepeaterModifier.prototype.addShape = function () {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function () {
      var t;
      for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
      this._length = 0
    }, DashProperty.prototype.getValue = function (t) {
      if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0,
          r = this.dataProps.length;
        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function (t, e) {
      for (var r = 0, n = this.o.length / 2; r < n;) {
        if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
        r += 1
      }
      return !0
    }, GradientProperty.prototype.checkCollapsable = function () {
      if (this.o.length / 2 != this.c.length / 4) return !1;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e;) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
          t += 1
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
      return !0
    }, GradientProperty.prototype.getValue = function (t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, r, n, i = 4 * this.data.p;
        for (e = 0; e < i; e += 1) r = e % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[e] * r), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
        if (this.o.length)
          for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) r = e % 2 == 0 ? 100 : 1, n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== n && (this.o[e - 4 * this.data.p] = n, this._omdf = !t);
        this._mdf = !t
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function (t, e, r, n) {
        if (0 === e) return "";
        var i, a = t.o,
          s = t.i,
          o = t.v,
          l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
        for (i = 1; i < e; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
        return r && e && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
      },
      ImagePreloader = function () {
        var t = function () {
          var t = createTag("canvas");
          t.width = 1, t.height = 1;
          var e = t.getContext("2d");
          return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
        }();

        function e() {
          this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
        }

        function r(e) {
          var r = function (t, e, r) {
              var n = "";
              if (t.e) n = t.p;
              else if (e) {
                var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = e + i
              } else n = r, n += t.u ? t.u : "", n += t.p;
              return n
            }(e, this.assetsPath, this.path),
            n = createTag("img");
          n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded.bind(this), !1), n.addEventListener("error", function () {
            i.img = t, this._imageLoaded()
          }.bind(this), !1), n.src = r;
          var i = {
            img: n,
            assetData: e
          };
          return i
        }

        function n(t, e) {
          this.imagesLoadedCb = e;
          var r, n = t.length;
          for (r = 0; r < n; r += 1) t[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[r])))
        }

        function i(t) {
          this.path = t || ""
        }

        function a(t) {
          this.assetsPath = t || ""
        }

        function s(t) {
          for (var e = 0, r = this.images.length; e < r;) {
            if (this.images[e].assetData === t) return this.images[e].img;
            e += 1
          }
        }

        function o() {
          this.imagesLoadedCb = null, this.images.length = 0
        }

        function l() {
          return this.totalImages === this.loadedAssets
        }
        return function () {
          this.loadAssets = n, this.setAssetsPath = a, this.setPath = i, this.loaded = l, this.destroy = o, this.getImage = s, this._createImageData = r, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
        }
      }(),
      featureSupport = function () {
        var t = {
          maskType: !0
        };
        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
      }(),
      filtersFactory = function () {
        var t = {};
        return t.createFilter = function (t) {
          var e = createNS("filter");
          return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
        }, t.createAlphaToLuminanceFilter = function () {
          var t = createNS("feColorMatrix");
          return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
        }, t
      }(),
      assetLoader = function () {
        function t(t) {
          return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
        }
        return {
          load: function (e, r, n) {
            var i, a = new XMLHttpRequest;
            a.open("GET", e, !0);
            try {
              a.responseType = "json"
            } catch (t) {}
            a.send(), a.onreadystatechange = function () {
              if (4 == a.readyState)
                if (200 == a.status) i = t(a), r(i);
                else try {
                  i = t(a), r(i)
                } catch (t) {
                  n && n(t)
                }
            }
          }
        }
      }();

    function TextAnimatorProperty(t, e, r) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
    }

    function TextAnimatorDataProperty(t, e, r) {
      var n = {
          propType: !1
        },
        i = PropertyFactory.getProp,
        a = e.a;
      this.a = {
        r: a.r ? i(t, a.r, 0, degToRads, r) : n,
        rx: a.rx ? i(t, a.rx, 0, degToRads, r) : n,
        ry: a.ry ? i(t, a.ry, 0, degToRads, r) : n,
        sk: a.sk ? i(t, a.sk, 0, degToRads, r) : n,
        sa: a.sa ? i(t, a.sa, 0, degToRads, r) : n,
        s: a.s ? i(t, a.s, 1, .01, r) : n,
        a: a.a ? i(t, a.a, 1, 0, r) : n,
        o: a.o ? i(t, a.o, 0, .01, r) : n,
        p: a.p ? i(t, a.p, 1, 0, r) : n,
        sw: a.sw ? i(t, a.sw, 0, 0, r) : n,
        sc: a.sc ? i(t, a.sc, 1, 0, r) : n,
        fc: a.fc ? i(t, a.fc, 1, 0, r) : n,
        fh: a.fh ? i(t, a.fh, 0, 0, r) : n,
        fs: a.fs ? i(t, a.fs, 0, .01, r) : n,
        fb: a.fb ? i(t, a.fb, 0, .01, r) : n,
        t: a.t ? i(t, a.t, 0, 0, r) : n
      }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
    }

    function LetterProps(t, e, r, n, i, a) {
      this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
        o: !0,
        sw: !!e,
        sc: !!r,
        fc: !!n,
        m: !0,
        p: !0
      }
    }

    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
    }
    TextAnimatorProperty.prototype.searchProperties = function () {
      var t, e, r = this._textData.a.length,
        n = PropertyFactory.getProp;
      for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        f: n(this._elem, this._textData.p.f, 0, 0, this),
        l: n(this._elem, this._textData.p.l, 0, 0, this),
        r: this._textData.p.r,
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
    }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
      if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = !1;
        var r, n, i, a, s, o, l, h, c, u, f, p, d, m, y, v, g, E, _, b = this._moreOptions.alignment.v,
          T = this._animatorsData,
          S = this._textData,
          I = this.mHelper,
          A = this._renderType,
          x = this.renderedLetters.length,
          C = (this.data, t.l);
        if (this._hasMaskedPath) {
          if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var P, w = _.v;
            for (this._pathData.r && (w = w.reverse()), s = {
                tLength: 0,
                segments: []
              }, a = w._length - 1, v = 0, i = 0; i < a; i += 1) P = bez.buildBezierData(w.v[i], w.v[i + 1], [w.o[i][0] - w.v[i][0], w.o[i][1] - w.v[i][1]], [w.i[i + 1][0] - w.v[i + 1][0], w.i[i + 1][1] - w.v[i + 1][1]]), s.tLength += P.segmentLength, s.segments.push(P), v += P.segmentLength;
            i = a, _.v.c && (P = bez.buildBezierData(w.v[i], w.v[0], [w.o[i][0] - w.v[i][0], w.o[i][1] - w.v[i][1]], [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]]), s.tLength += P.segmentLength, s.segments.push(P), v += P.segmentLength), this._pathData.pi = s
          }
          if (s = this._pathData.pi, o = this._pathData.f.v, f = 0, u = 1, h = 0, c = !0, m = s.segments, o < 0 && _.v.c)
            for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), u = (d = m[f = m.length - 1].points).length - 1; o < 0;) o += d[u].partialLength, (u -= 1) < 0 && (u = (d = m[f -= 1].points).length - 1);
          p = (d = m[f].points)[u - 1], y = (l = d[u]).partialLength
        }
        a = C.length, r = 0, n = 0;
        var O, D, M, R, F = 1.2 * t.finalSize * .714,
          k = !0;
        M = T.length;
        var L, N, V, G, B, j, z, H, X, U, W, Y, q, K = -1,
          Q = o,
          $ = f,
          Z = u,
          J = -1,
          tt = "",
          et = this.defaultPropsArray;
        if (2 === t.j || 1 === t.j) {
          var rt = 0,
            nt = 0,
            it = 2 === t.j ? -.5 : -1,
            at = 0,
            st = !0;
          for (i = 0; i < a; i += 1)
            if (C[i].n) {
              for (rt && (rt += nt); at < i;) C[at].animatorJustifyOffset = rt, at += 1;
              rt = 0, st = !0
            } else {
              for (D = 0; D < M; D += 1)(O = T[D].a).t.propType && (st && 2 === t.j && (nt += O.t.v * it), (L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars)).length ? rt += O.t.v * L[0] * it : rt += O.t.v * L * it);
              st = !1
            } for (rt && (rt += nt); at < i;) C[at].animatorJustifyOffset = rt, at += 1
        }
        for (i = 0; i < a; i += 1) {
          if (I.reset(), B = 1, C[i].n) r = 0, n += t.yOffset, n += k ? 1 : 0, o = Q, k = !1, 0, this._hasMaskedPath && (u = Z, p = (d = m[f = $].points)[u - 1], y = (l = d[u]).partialLength, h = 0), q = U = Y = tt = "", et = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (J !== C[i].line) {
                switch (t.j) {
                  case 1:
                    o += v - t.lineWidths[C[i].line];
                    break;
                  case 2:
                    o += (v - t.lineWidths[C[i].line]) / 2
                }
                J = C[i].line
              }
              K !== C[i].ind && (C[K] && (o += C[K].extra), o += C[i].an / 2, K = C[i].ind), o += b[0] * C[i].an / 200;
              var ot = 0;
              for (D = 0; D < M; D += 1)(O = T[D].a).p.propType && ((L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars)).length ? ot += O.p.v[0] * L[0] : ot += O.p.v[0] * L), O.a.propType && ((L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars)).length ? ot += O.a.v[0] * L[0] : ot += O.a.v[0] * L);
              for (c = !0; c;) h + y >= o + ot || !d ? (g = (o + ot - h) / l.partialLength, V = p.point[0] + (l.point[0] - p.point[0]) * g, G = p.point[1] + (l.point[1] - p.point[1]) * g, I.translate(-b[0] * C[i].an / 200, -b[1] * F / 100), c = !1) : d && (h += l.partialLength, (u += 1) >= d.length && (u = 0, m[f += 1] ? d = m[f].points : _.v.c ? (u = 0, d = m[f = 0].points) : (h -= l.partialLength, d = null)), d && (p = l, y = (l = d[u]).partialLength));
              N = C[i].an / 2 - C[i].add, I.translate(-N, 0, 0)
            } else N = C[i].an / 2 - C[i].add, I.translate(-N, 0, 0), I.translate(-b[0] * C[i].an / 200, -b[1] * F / 100, 0);
            for (C[i].l / 2, D = 0; D < M; D += 1)(O = T[D].a).t.propType && (L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? L.length ? o += O.t.v * L[0] : o += O.t.v * L : L.length ? r += O.t.v * L[0] : r += O.t.v * L));
            for (C[i].l / 2, t.strokeWidthAnim && (z = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < M; D += 1)(O = T[D].a).a.propType && ((L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars)).length ? I.translate(-O.a.v[0] * L[0], -O.a.v[1] * L[1], O.a.v[2] * L[2]) : I.translate(-O.a.v[0] * L, -O.a.v[1] * L, O.a.v[2] * L));
            for (D = 0; D < M; D += 1)(O = T[D].a).s.propType && ((L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars)).length ? I.scale(1 + (O.s.v[0] - 1) * L[0], 1 + (O.s.v[1] - 1) * L[1], 1) : I.scale(1 + (O.s.v[0] - 1) * L, 1 + (O.s.v[1] - 1) * L, 1));
            for (D = 0; D < M; D += 1) {
              if (O = T[D].a, L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars), O.sk.propType && (L.length ? I.skewFromAxis(-O.sk.v * L[0], O.sa.v * L[1]) : I.skewFromAxis(-O.sk.v * L, O.sa.v * L)), O.r.propType && (L.length ? I.rotateZ(-O.r.v * L[2]) : I.rotateZ(-O.r.v * L)), O.ry.propType && (L.length ? I.rotateY(O.ry.v * L[1]) : I.rotateY(O.ry.v * L)), O.rx.propType && (L.length ? I.rotateX(O.rx.v * L[0]) : I.rotateX(O.rx.v * L)), O.o.propType && (L.length ? B += (O.o.v * L[0] - B) * L[0] : B += (O.o.v * L - B) * L), t.strokeWidthAnim && O.sw.propType && (L.length ? z += O.sw.v * L[0] : z += O.sw.v * L), t.strokeColorAnim && O.sc.propType)
                for (X = 0; X < 3; X += 1) L.length ? j[X] = j[X] + (O.sc.v[X] - j[X]) * L[0] : j[X] = j[X] + (O.sc.v[X] - j[X]) * L;
              if (t.fillColorAnim && t.fc) {
                if (O.fc.propType)
                  for (X = 0; X < 3; X += 1) L.length ? H[X] = H[X] + (O.fc.v[X] - H[X]) * L[0] : H[X] = H[X] + (O.fc.v[X] - H[X]) * L;
                O.fh.propType && (H = L.length ? addHueToRGB(H, O.fh.v * L[0]) : addHueToRGB(H, O.fh.v * L)), O.fs.propType && (H = L.length ? addSaturationToRGB(H, O.fs.v * L[0]) : addSaturationToRGB(H, O.fs.v * L)), O.fb.propType && (H = L.length ? addBrightnessToRGB(H, O.fb.v * L[0]) : addBrightnessToRGB(H, O.fb.v * L))
              }
            }
            for (D = 0; D < M; D += 1)(O = T[D].a).p.propType && (L = T[D].s.getMult(C[i].anIndexes[D], S.a[D].s.totalChars), this._hasMaskedPath ? L.length ? I.translate(0, O.p.v[1] * L[0], -O.p.v[2] * L[1]) : I.translate(0, O.p.v[1] * L, -O.p.v[2] * L) : L.length ? I.translate(O.p.v[0] * L[0], O.p.v[1] * L[1], -O.p.v[2] * L[2]) : I.translate(O.p.v[0] * L, O.p.v[1] * L, -O.p.v[2] * L));
            if (t.strokeWidthAnim && (U = z < 0 ? 0 : z), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
              if (I.translate(0, -t.ls), I.translate(0, b[1] * F / 100 + n, 0), S.p.p) {
                E = (l.point[1] - p.point[1]) / (l.point[0] - p.point[0]);
                var lt = 180 * Math.atan(E) / Math.PI;
                l.point[0] < p.point[0] && (lt += 180), I.rotate(-lt * Math.PI / 180)
              }
              I.translate(V, G, 0), o -= b[0] * C[i].an / 200, C[i + 1] && K !== C[i + 1].ind && (o += C[i].an / 2, o += t.tr / 1e3 * t.finalSize)
            } else {
              switch (I.translate(r, n, 0), t.ps && I.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  I.translate(C[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[i].line]), 0, 0);
                  break;
                case 2:
                  I.translate(C[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[i].line]) / 2, 0, 0)
              }
              I.translate(0, -t.ls), I.translate(N, 0, 0), I.translate(b[0] * C[i].an / 200, b[1] * F / 100, 0), r += C[i].l + t.tr / 1e3 * t.finalSize
            }
            "html" === A ? tt = I.toCSS() : "svg" === A ? tt = I.to2dCSS() : et = [I.props[0], I.props[1], I.props[2], I.props[3], I.props[4], I.props[5], I.props[6], I.props[7], I.props[8], I.props[9], I.props[10], I.props[11], I.props[12], I.props[13], I.props[14], I.props[15]], q = B
          }
          x <= i ? (R = new LetterProps(q, U, W, Y, tt, et), this.renderedLetters.push(R), x += 1, this.lettersChangedFlag = !0) : (R = this.renderedLetters[i], this.lettersChangedFlag = R.update(q, U, W, Y, tt, et) || this.lettersChangedFlag)
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function () {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function (t, e, r, n, i, a) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var s = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      return t
    }, TextProperty.prototype.setCurrentData = function (t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
    }, TextProperty.prototype.searchProperty = function () {
      return this.searchKeyframes()
    }, TextProperty.prototype.searchKeyframes = function () {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
    }, TextProperty.prototype.addEffect = function (t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.getValue = function (t) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData,
          r = this.keysIndex;
        if (this.lock) this.setCurrentData(this.currentData);
        else {
          this.lock = !0, this._mdf = !1;
          var n, i = this.effectsSequence.length,
            a = t || this.data.d.k[this.keysIndex].s;
          for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
          e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
        }
      }
    }, TextProperty.prototype.getKeyframeValue = function () {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length; r <= n - 1 && (t[r].s, !(r === n - 1 || t[r + 1].t > e));) r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
    }, TextProperty.prototype.buildFinalText = function (t) {
      for (var e, r = FontManager.getCombinedCharacterCodes(), n = [], i = 0, a = t.length; i < a;) e = t.charCodeAt(i), -1 !== r.indexOf(e) ? n[n.length - 1] += t.charAt(i) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(i + 1)) >= 56320 && e <= 57343 ? (n.push(t.substr(i, 2)), ++i) : n.push(t.charAt(i)), i += 1;
      return n
    }, TextProperty.prototype.completeTextData = function (t) {
      t.__complete = !0;
      var e, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
        h = this.data,
        c = [],
        u = 0,
        f = h.m.g,
        p = 0,
        d = 0,
        m = 0,
        y = [],
        v = 0,
        g = 0,
        E = l.getFontByName(t.f),
        _ = 0,
        b = E.fStyle ? E.fStyle.split(" ") : [],
        T = "normal",
        S = "normal";
      for (r = b.length, e = 0; e < r; e += 1) switch (b[e].toLowerCase()) {
        case "italic":
          S = "italic";
          break;
        case "bold":
          T = "700";
          break;
        case "black":
          T = "900";
          break;
        case "medium":
          T = "500";
          break;
        case "regular":
        case "normal":
          T = "400";
          break;
        case "light":
        case "thin":
          T = "200"
      }
      t.fWeight = E.fWeight || T, t.fStyle = S, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
      var I, A = t.tr / 1e3 * t.finalSize;
      if (t.sz)
        for (var x, C, P = !0, w = t.sz[0], O = t.sz[1]; P;) {
          x = 0, v = 0, r = (C = this.buildFinalText(t.t)).length, A = t.tr / 1e3 * t.finalSize;
          var D = -1;
          for (e = 0; e < r; e += 1) I = C[e].charCodeAt(0), n = !1, " " === C[e] ? D = e : 13 !== I && 3 !== I || (v = 0, n = !0, x += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(C[e], E.fStyle, E.fFamily), _ = n ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(C[e], t.f, t.finalSize), v + _ > w && " " !== C[e] ? (-1 === D ? r += 1 : e = D, x += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, D === e ? 1 : 0, "\r"), D = -1, v = 0) : (v += _, v += A);
          x += E.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && O < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, r = t.finalText.length, P = !1)
        }
      v = -A, _ = 0;
      var M, R = 0;
      for (e = 0; e < r; e += 1)
        if (n = !1, I = (M = t.finalText[e]).charCodeAt(0), " " === M ? i = " " : 13 === I || 3 === I ? (R = 0, y.push(v), g = v > g ? v : g, v = -2 * A, i = "", n = !0, m += 1) : i = t.finalText[e], l.chars ? (o = l.getCharData(M, E.fStyle, l.getFontByName(t.f).fFamily), _ = n ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(i, t.f, t.finalSize), " " === M ? R += _ + A : (v += _ + A + R, R = 0), c.push({
            l: _,
            an: _,
            add: p,
            n: n,
            anIndexes: [],
            val: i,
            line: m,
            animatorJustifyOffset: 0
          }), 2 == f) {
          if (p += _, "" === i || " " === i || e === r - 1) {
            for ("" !== i && " " !== i || (p -= _); d <= e;) c[d].an = p, c[d].ind = u, c[d].extra = _, d += 1;
            u += 1, p = 0
          }
        } else if (3 == f) {
        if (p += _, "" === i || e === r - 1) {
          for ("" === i && (p -= _); d <= e;) c[d].an = p, c[d].ind = u, c[d].extra = _, d += 1;
          p = 0, u += 1
        }
      } else c[u].ind = u, c[u].extra = 0, u += 1;
      if (t.l = c, g = v > g ? v : g, y.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = g, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0
      }
      t.lineWidths = y;
      var F, k, L = h.a;
      s = L.length;
      var N, V, G = [];
      for (a = 0; a < s; a += 1) {
        for ((F = L[a]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), V = 0, N = F.s.b, e = 0; e < r; e += 1)(k = c[e]).anIndexes[a] = V, (1 == N && "" !== k.val || 2 == N && "" !== k.val && " " !== k.val || 3 == N && (k.n || " " == k.val || e == r - 1) || 4 == N && (k.n || e == r - 1)) && (1 === F.s.rn && G.push(V), V += 1);
        h.a[a].s.totalChars = V;
        var B, j = -1;
        if (1 === F.s.rn)
          for (e = 0; e < r; e += 1) j != (k = c[e]).anIndexes[a] && (j = k.anIndexes[a], B = G.splice(Math.floor(Math.random() * G.length), 1)[0]), k.anIndexes[a] = B
      }
      t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = E.ascent * t.finalSize / 100
    }, TextProperty.prototype.updateDocumentData = function (t, e) {
      e = void 0 === e ? this.keysIndex : e;
      var r = this.copyData({}, this.data.d.k[e].s);
      r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.recalculate = function (t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
    }, TextProperty.prototype.canResizeFont = function (t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.setMinimumFontSize = function (t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    };
    var TextSelectorProp = function () {
        var t = Math.max,
          e = Math.min,
          r = Math.floor;

        function n(t, e) {
          this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
            k: 0
          }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
            v: 100
          }, this.o = PropertyFactory.getProp(t, e.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
            k: 0
          }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        return n.prototype = {
          getMult: function (n) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var i = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
              a = 0,
              s = this.finalS,
              o = this.finalE,
              l = this.data.sh;
            if (2 == l) a = i(a = o === s ? n >= o ? 1 : 0 : t(0, e(.5 / (o - s) + (n - s) / (o - s), 1)));
            else if (3 == l) a = i(a = o === s ? n >= o ? 0 : 1 : 1 - t(0, e(.5 / (o - s) + (n - s) / (o - s), 1)));
            else if (4 == l) o === s ? a = 0 : (a = t(0, e(.5 / (o - s) + (n - s) / (o - s), 1))) < .5 ? a *= 2 : a = 1 - 2 * (a - .5), a = i(a);
            else if (5 == l) {
              if (o === s) a = 0;
              else {
                var h = o - s,
                  c = -h / 2 + (n = e(t(0, n + .5 - s), o - s)),
                  u = h / 2;
                a = Math.sqrt(1 - c * c / (u * u))
              }
              a = i(a)
            } else 6 == l ? (o === s ? a = 0 : (n = e(t(0, n + .5 - s), o - s), a = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (o - s))) / 2), a = i(a)) : (n >= r(s) && (a = n - s < 0 ? 1 - (s - n) : t(0, e(o - n, 1))), a = i(a));
            return a * this.a.v
          },
          getValue: function (t) {
            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
              r = this.o.v / e,
              n = this.s.v / e + r,
              i = this.e.v / e + r;
            if (n > i) {
              var a = n;
              n = i, i = a
            }
            this.finalS = n, this.finalE = i
          }
        }, extendPrototype([DynamicPropertyContainer], n), {
          getTextSelectorProp: function (t, e, r) {
            return new n(t, e, r)
          }
        }
      }(),
      pool_factory = function (t, e, r, n) {
        var i = 0,
          a = t,
          s = createSizedArray(a);

        function o() {
          return i ? s[i -= 1] : e()
        }
        return {
          newElement: o,
          release: function (t) {
            i === a && (s = pooling.double(s), a *= 2), r && r(t), s[i] = t, i += 1
          }
        }
      },
      pooling = function () {
        return {
          double: function (t) {
            return t.concat(createSizedArray(t.length))
          }
        }
      }(),
      point_pool = function () {
        return pool_factory(8, function () {
          return createTypedArray("float32", 2)
        })
      }(),
      shape_pool = function () {
        var t = pool_factory(4, function () {
          return new ShapePath
        }, function (t) {
          var e, r = t._length;
          for (e = 0; e < r; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
          t._length = 0, t.c = !1
        });
        return t.clone = function (e) {
          var r, n = t.newElement(),
            i = void 0 === e._length ? e.v.length : e._length;
          for (n.setLength(i), n.c = e.c, r = 0; r < i; r += 1) n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
          return n
        }, t
      }(),
      shapeCollection_pool = function () {
        var t = {
            newShapeCollection: function () {
              var t;
              t = e ? n[e -= 1] : new ShapeCollection;
              return t
            },
            release: function (t) {
              var i, a = t._length;
              for (i = 0; i < a; i += 1) shape_pool.release(t.shapes[i]);
              t._length = 0, e === r && (n = pooling.double(n), r *= 2);
              n[e] = t, e += 1
            }
          },
          e = 0,
          r = 4,
          n = createSizedArray(r);
        return t
      }(),
      segments_length_pool = function () {
        return pool_factory(8, function () {
          return {
            lengths: [],
            totalLength: 0
          }
        }, function (t) {
          var e, r = t.lengths.length;
          for (e = 0; e < r; e += 1) bezier_length_pool.release(t.lengths[e]);
          t.lengths.length = 0
        })
      }(),
      bezier_length_pool = function () {
        return pool_factory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", defaultCurveSegments),
            lengths: createTypedArray("float32", defaultCurveSegments)
          }
        })
      }();

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (e && e.title) {
        var n = createNS("title"),
          i = createElementID();
        n.setAttribute("id", i), n.textContent = e.title, this.svgElement.appendChild(n), r += i
      }
      if (e && e.description) {
        var a = createNS("desc"),
          s = createElementID();
        a.setAttribute("id", s), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + s
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var o = createNS("defs");
      this.svgElement.appendChild(o);
      var l = createNS("g");
      this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !e || !1 !== e.hideOnTransparent,
        viewBoxOnly: e && e.viewBoxOnly || !1,
        viewBoxSize: e && e.viewBoxSize || !1,
        className: e && e.className || "",
        focusable: e && e.focusable
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: o,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
    }

    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = {
        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
        context: e && e.context || null,
        progressiveLoad: e && e.progressiveLoad || !1,
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        className: e && e.className || ""
      }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
    }

    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: e && e.className || "",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !e || !1 !== e.hideOnTransparent
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
    }

    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var n, i = this.globalData.defs,
        a = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(a), this.solidPath = "";
      var s, o, l, h, c, u, f, p = this.masksProperties,
        d = 0,
        m = [],
        y = createElementID(),
        v = "clipPath",
        g = "clip-path";
      for (n = 0; n < a; n++)
        if (("a" !== p[n].mode && "n" !== p[n].mode || p[n].inv || 100 !== p[n].o.k || p[n].o.x) && (v = "mask", g = "mask"), "s" != p[n].mode && "i" != p[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), s = createNS("path"), "n" != p[n].mode) {
          var E;
          if (d += 1, s.setAttribute("fill", "s" === p[n].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== p[n].x.k ? (v = "mask", g = "mask", f = PropertyFactory.getProp(this.element, p[n].x, 0, null, this.element), E = createElementID(), (c = createNS("filter")).setAttribute("id", E), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), c.appendChild(u), i.appendChild(c), s.setAttribute("stroke", "s" === p[n].mode ? "#000000" : "#ffffff")) : (u = null, f = null), this.storedData[n] = {
              elem: s,
              x: f,
              expan: u,
              lastPath: "",
              lastOperator: "",
              filterId: E,
              lastRadius: 0
            }, "i" == p[n].mode) {
            l = m.length;
            var _ = createNS("g");
            for (o = 0; o < l; o += 1) _.appendChild(m[o]);
            var b = createNS("mask");
            b.setAttribute("mask-type", "alpha"), b.setAttribute("id", y + "_" + d), b.appendChild(s), i.appendChild(b), _.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), m.length = 0, m.push(_)
          } else m.push(s);
          p[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
            elem: s,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, p[n].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3),
            invRect: h
          }, this.viewData[n].prop.k || this.drawPath(p[n], this.viewData[n].prop.v, this.viewData[n])
        } else this.viewData[n] = {
          op: PropertyFactory.getProp(this.element, p[n].o, 0, .01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3),
          elem: s,
          lastPath: ""
        }, i.appendChild(s);
      for (this.maskElement = createNS(v), a = m.length, n = 0; n < a; n += 1) this.maskElement.appendChild(m[n]);
      d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(g, "url(" + locationHref + "#" + y + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
    }

    function HierarchyElement() {}

    function FrameElement() {}

    function TransformElement() {}

    function RenderableElement() {}

    function RenderableDOMElement() {}

    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e
    }

    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
    }

    function SVGShapeData(t, e, r) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
      for (var n = 0, i = t.length; n < i;) {
        if (t[n].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break
        }
        n += 1
      }
    }

    function SVGTransformData(t, e, r) {
      this.transform = {
        mProps: t,
        op: e,
        container: r
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
    }

    function SVGStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
    }

    function SVGFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
    }

    function SVGGradientFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
    }

    function SVGGradientStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
    }

    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g")
    }
    BaseRenderer.prototype.checkLayers = function (t) {
      var e, r, n = this.layers.length;
      for (this.completeLayers = !0, e = n - 1; e >= 0; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
      this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function (t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 13:
          return this.createCamera(t)
      }
      return this.createNull(t)
    }, BaseRenderer.prototype.createCamera = function () {
      throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.buildAllItems = function () {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function (t) {
      this.completeLayers = !1;
      var e, r, n = t.length,
        i = this.layers.length;
      for (e = 0; e < n; e += 1)
        for (r = 0; r < i;) {
          if (this.layers[r].id == t[e].id) {
            this.layers[r] = t[e];
            break
          }
          r += 1
        }
    }, BaseRenderer.prototype.setProjectInterface = function (t) {
      this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function () {
      this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
      for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == e && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(t, i[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
    }, BaseRenderer.prototype.addPendingElement = function (t) {
      this.pendingElements.push(t)
    }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var n = this.createComp(t[e]);
          n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
        }
    }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
      this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      }
    }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function (t) {
      return new NullElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function (t) {
      return new SVGShapeElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createText = function (t) {
      return new SVGTextElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function (t) {
      return new IImageElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function (t) {
      return new SVGCompElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function (t) {
      return new ISolidElement(t, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function (t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var r = createNS("clipPath"),
        n = createNS("rect");
      n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
      var i = createElementID();
      r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
    }, SVGRenderer.prototype.destroy = function () {
      this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function () {}, SVGRenderer.prototype.buildItem = function (t) {
      var e = this.elements;
      if (!e[t] && 99 != this.layers[t].ty) {
        e[t] = !0;
        var r = this.createItem(this.layers[t]);
        e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
      }
    }, SVGRenderer.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, r = this.elements.length; e < r;) {
            if (this.elements[e] === t) {
              t.setMatte(this.elements[e - 1].layerId);
              break
            }
            e += 1
          }
      }
    }, SVGRenderer.prototype.renderFrame = function (t) {
      if (this.renderedFrame !== t && !this.destroyed) {
        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var e, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }
    }, SVGRenderer.prototype.appendElementInPos = function (t, e) {
      var r = t.getBaseElement();
      if (r) {
        for (var n, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
        n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
      }
    }, SVGRenderer.prototype.hide = function () {
      this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function () {
      this.layerElement.style.display = "block"
    }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function (t) {
      return new CVShapeElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createText = function (t) {
      return new CVTextElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createImage = function (t) {
      return new CVImageElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createComp = function (t) {
      return new CVCompElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createSolid = function (t) {
      return new CVSolidElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function (t) {
      if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
        if (this.renderConfig.clearCanvas) {
          this.transformMat.cloneFromProps(t);
          var e = this.contextData.cTr.props;
          this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
          var r = this.contextData.cTr.props;
          this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
    }, CanvasRenderer.prototype.ctxOpacity = function (t) {
      if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
      this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
    }, CanvasRenderer.prototype.reset = function () {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
    }, CanvasRenderer.prototype.save = function (t) {
      if (this.renderConfig.clearCanvas) {
        t && this.canvasContext.save();
        var e = this.contextData.cTr.props;
        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
        var r, n = this.contextData.saved[this.contextData.cArrPos];
        for (r = 0; r < 16; r += 1) n[r] = e[r];
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
      } else this.canvasContext.save()
    }, CanvasRenderer.prototype.restore = function (t) {
      if (this.renderConfig.clearCanvas) {
        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
        var e, r = this.contextData.saved[this.contextData.cArrPos],
          n = this.contextData.cTr.props;
        for (e = 0; e < 16; e += 1) n[e] = r[e];
        this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
      } else this.canvasContext.restore()
    }, CanvasRenderer.prototype.configAnimation = function (t) {
      this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
        w: t.w,
        h: t.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
    }, CanvasRenderer.prototype.updateContainerSize = function () {
      var t, e, r, n;
      if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
        var i = this.renderConfig.preserveAspectRatio.split(" "),
          a = i[1] || "meet",
          s = i[0] || "xMidYMid",
          o = s.substr(0, 4),
          l = s.substr(4);
        r = t / e, (n = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === a || n < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (n < r && "meet" === a || n > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (n < r && "meet" === a || n > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (n > r && "meet" === a || n < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (n > r && "meet" === a || n < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
      } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
    }, CanvasRenderer.prototype.destroy = function () {
      var t;
      for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRenderer.prototype.renderFrame = function (t, e) {
      if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var r, n = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), r = 0; r < n; r++)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
        if (this.globalData._mdf) {
          for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          !0 !== this.renderConfig.clearCanvas && this.restore()
        }
      }
    }, CanvasRenderer.prototype.buildItem = function (t) {
      var e = this.elements;
      if (!e[t] && 99 != this.layers[t].ty) {
        var r = this.createItem(this.layers[t], this, this.globalData);
        e[t] = r, r.initExpressions()
      }
    }, CanvasRenderer.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        this.pendingElements.pop().checkParenting()
      }
    }, CanvasRenderer.prototype.hide = function () {
      this.animationItem.container.style.display = "none"
    }, CanvasRenderer.prototype.show = function () {
      this.animationItem.container.style.display = "block"
    }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        this.pendingElements.pop().checkParenting()
      }
    }, HybridRenderer.prototype.appendElementInPos = function (t, e) {
      var r = t.getBaseElement();
      if (r) {
        var n = this.layers[e];
        if (n.ddd && this.supports3d) this.addTo3dContainer(r, e);
        else if (this.threeDElements) this.addTo3dContainer(r, e);
        else {
          for (var i, a, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
          i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
        }
      }
    }, HybridRenderer.prototype.createShape = function (t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createText = function (t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createCamera = function (t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera
    }, HybridRenderer.prototype.createImage = function (t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createComp = function (t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createSolid = function (t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
      for (var e = 0, r = this.threeDElements.length; e < r;) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1
      }
    }, HybridRenderer.prototype.createThreeDContainer = function (t, e) {
      var r = createTag("div");
      styleDiv(r);
      var n = createTag("div");
      styleDiv(n), "3d" === e && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", n.style.transform = n.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(n);
      var i = {
        container: n,
        perspectiveElem: r,
        startPos: t,
        endPos: t,
        type: e
      };
      return this.threeDElements.push(i), i
    }, HybridRenderer.prototype.build3dContainers = function () {
      var t, e, r = this.layers.length,
        n = "";
      for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== n && (n = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== n && (n = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
      for (t = (r = this.threeDElements.length) - 1; t >= 0; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
    }, HybridRenderer.prototype.addTo3dContainer = function (t, e) {
      for (var r = 0, n = this.threeDElements.length; r < n;) {
        if (e <= this.threeDElements[r].endPos) {
          for (var i, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
          i ? this.threeDElements[r].container.insertBefore(t, i) : this.threeDElements[r].container.appendChild(t);
          break
        }
        r += 1
      }
    }, HybridRenderer.prototype.configAnimation = function (t) {
      var e = createTag("div"),
        r = this.animationItem.wrapper;
      e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), e.style.overflow = "hidden";
      var n = createNS("svg");
      n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
      var i = createNS("defs");
      n.appendChild(i), this.data = t, this.setupGlobalData(t, n), this.globalData.defs = i, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRenderer.prototype.destroy = function () {
      this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t++) this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRenderer.prototype.updateContainerSize = function () {
      var t, e, r, n, i = this.animationItem.wrapper.offsetWidth,
        a = this.animationItem.wrapper.offsetHeight,
        s = i / a;
      this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + n + ",0,1)"
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function () {
      this.resizerElem.style.display = "none"
    }, HybridRenderer.prototype.show = function () {
      this.resizerElem.style.display = "block"
    }, HybridRenderer.prototype.initItems = function () {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t, e = this.globalData.compSize.w,
          r = this.globalData.compSize.h,
          n = this.threeDElements.length;
        for (t = 0; t < n; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"
      }
    }, HybridRenderer.prototype.searchExtraCompositions = function (t) {
      var e, r = t.length,
        n = createTag("div");
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var i = this.createComp(t[e], n, this.globalData.comp, null);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
        }
    }, MaskElement.prototype.getMaskProperty = function (t) {
      return this.viewData[t].prop
    }, MaskElement.prototype.renderFrame = function (t) {
      var e, r = this.element.finalTransform.mat,
        n = this.masksProperties.length;
      for (e = 0; e < n; e++)
        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -r.props[12]), this.viewData[e].invRect.setAttribute("y", -r.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
          var i = this.storedData[e].expan;
          this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
        }
    }, MaskElement.prototype.getMaskelement = function () {
      return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function () {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function (t, e, r) {
      var n, i, a = " M" + e.v[0][0] + "," + e.v[0][1];
      for (i = e._length, n = 1; n < i; n += 1) a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
      if (e.c && i > 1 && (a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
        var s = "";
        r.elem && (e.c && (s = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
      }
    }, MaskElement.prototype.destroy = function () {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
    }, HierarchyElement.prototype = {
      initHierarchy: function () {
        this.hierarchy = [], this._isParent = !1, this.checkParenting()
      },
      setHierarchy: function (t) {
        this.hierarchy = t
      },
      setAsParent: function () {
        this._isParent = !0
      },
      checkParenting: function () {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
      }
    }, FrameElement.prototype = {
      initFrame: function () {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
      },
      prepareProperties: function (t, e) {
        var r, n = this.dynamicProperties.length;
        for (r = 0; r < n; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
      },
      addDynamicProperty: function (t) {
        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
      }
    }, TransformElement.prototype = {
      initTransform: function () {
        this.finalTransform = {
          mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _opMdf: !1,
          mat: new Matrix
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
      },
      renderTransform: function () {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var t, e = this.finalTransform.mat,
            r = 0,
            n = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; r < n;) {
              if (this.hierarchy[r].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break
              }
              r += 1
            }
          if (this.finalTransform._matMdf)
            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < n; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
        }
      },
      globalToLocal: function (t) {
        var e = [];
        e.push(this.finalTransform);
        for (var r = !0, n = this.comp; r;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : r = !1;
        var i, a, s = e.length;
        for (i = 0; i < s; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
        return t
      },
      mHelper: new Matrix
    }, RenderableElement.prototype = {
      initRenderable: function () {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
      },
      addRenderableComponent: function (t) {
        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
      },
      removeRenderableComponent: function (t) {
        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
      },
      prepareRenderableFrame: function (t) {
        this.checkLayerLimits(t)
      },
      checkTransparency: function () {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
      },
      checkLayerLimits: function (t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
      },
      renderRenderable: function () {
        var t, e = this.renderableComponents.length;
        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
      },
      sourceRectAtTime: function () {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        }
      },
      getLayerSize: function () {
        return 5 === this.data.ty ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        }
      }
    }, extendPrototype([RenderableElement, createProxyFunction({
      initElement: function (t, e, r) {
        this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
      },
      hide: function () {
        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
      },
      show: function () {
        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
      },
      renderFrame: function () {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
      },
      renderInnerContent: function () {},
      prepareFrame: function (t) {
        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
      },
      destroy: function () {
        this.innerElem = null, this.destroyBaseElement()
      }
    })], RenderableDOMElement), SVGStyleData.prototype.reset = function () {
      this.d = "", this._mdf = !1
    }, SVGShapeData.prototype.setAsAnimated = function () {
      this._isAnimated = !0
    }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, r) {
      this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
        k: 0
      }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
        k: 0
      }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
    }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
      var r = createElementID(),
        n = createNS(1 === e.t ? "linearGradient" : "radialGradient");
      n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
      var i, a, s, o = [];
      for (s = 4 * e.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
      t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = n, this.cst = o
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, n, i, a = createNS("mask"),
          s = createNS("path");
        a.appendChild(s);
        var o = createElementID(),
          l = createElementID();
        a.setAttribute("id", l);
        var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
        h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var c = this.stops;
        for (n = 4 * t.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), c.push(r);
        s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = a, this.ost = c, this.maskId = l, e.msElem = s
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var SVGElementsRenderer = function () {
      var t = new Matrix,
        e = new Matrix;

      function r(t, e, r) {
        (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
      }

      function n(r, n, i) {
        var a, s, o, l, h, c, u, f, p, d, m, y = n.styles.length,
          v = n.lvl;
        for (c = 0; c < y; c += 1) {
          if (l = n.sh._mdf || i, n.styles[c].lvl < v) {
            for (f = e.reset(), d = v - n.styles[c].lvl, m = n.transformers.length - 1; !l && d > 0;) l = n.transformers[m].mProps._mdf || l, d--, m--;
            if (l)
              for (d = v - n.styles[c].lvl, m = n.transformers.length - 1; d > 0;) p = n.transformers[m].mProps.v.props, f.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), d--, m--
          } else f = t;
          if (s = (u = n.sh.paths)._length, l) {
            for (o = "", a = 0; a < s; a += 1)(h = u.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, f));
            n.caches[c] = o
          } else o = n.caches[c];
          n.styles[c].d += !0 === r.hd ? "" : o, n.styles[c]._mdf = l || n.styles[c]._mdf
        }
      }

      function i(t, e, r) {
        var n = e.style;
        (e.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("fill-opacity", e.o.v)
      }

      function a(t, e, r) {
        s(t, e, r), o(t, e, r)
      }

      function s(t, e, r) {
        var n, i, a, s, o, l = e.gf,
          h = e.g._hasOpacity,
          c = e.s.v,
          u = e.e.v;
        if (e.o._mdf || r) {
          var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
          e.style.pElem.setAttribute(f, e.o.v)
        }
        if (e.s._mdf || r) {
          var p = 1 === t.t ? "x1" : "cx",
            d = "x1" === p ? "y1" : "cy";
          l.setAttribute(p, c[0]), l.setAttribute(d, c[1]), h && !e.g._collapsable && (e.of.setAttribute(p, c[0]), e.of.setAttribute(d, c[1]))
        }
        if (e.g._cmdf || r) {
          n = e.cst;
          var m = e.g.c;
          for (a = n.length, i = 0; i < a; i += 1)(s = n[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
        }
        if (h && (e.g._omdf || r)) {
          var y = e.g.o;
          for (a = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1) s = n[i], e.g._collapsable || s.setAttribute("offset", y[2 * i] + "%"), s.setAttribute("stop-opacity", y[2 * i + 1])
        }
        if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", u[0]), l.setAttribute("y2", u[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
        else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
          o || (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)));
          var v = Math.atan2(u[1] - c[1], u[0] - c[0]),
            g = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
            E = Math.cos(v + e.a.v) * g + c[0],
            _ = Math.sin(v + e.a.v) * g + c[1];
          l.setAttribute("fx", E), l.setAttribute("fy", _), h && !e.g._collapsable && (e.of.setAttribute("fx", E), e.of.setAttribute("fy", _))
        }
      }

      function o(t, e, r) {
        var n = e.style,
          i = e.d;
        i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), e.c && (e.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
      }
      return {
        createRenderFunction: function (t) {
          t.ty;
          switch (t.ty) {
            case "fl":
              return i;
            case "gf":
              return s;
            case "gs":
              return a;
            case "st":
              return o;
            case "sh":
            case "el":
            case "rc":
            case "sr":
              return n;
            case "tr":
              return r
          }
        }
      }
    }();

    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
    }

    function CVShapeData(t, e, r, n) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var i = 4;
      "rc" == e.ty ? i = 5 : "el" == e.ty ? i = 6 : "sr" == e.ty && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, i, t);
      var a, s, o = r.length;
      for (a = 0; a < o; a += 1) r[a].closed || (s = {
        transforms: n.addTransformSequence(r[a].transforms),
        trNodes: []
      }, this.styledShapes.push(s), r[a].elements.push(s))
    }

    function BaseElement() {}

    function NullElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
    }

    function SVGBaseElement() {}

    function IShapeElement() {}

    function ITextElement() {}

    function ICompElement() {}

    function IImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      }
    }

    function ISolidElement(t, e, r) {
      this.initElement(t, e, r)
    }

    function SVGCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function SVGTextElement(t, e, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
    }

    function SVGShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
    }

    function SVGTintFilter(t, e) {
      this.filterManager = e;
      var r = createNS("feColorMatrix");
      if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
        var n, i = createNS("feMerge");
        t.appendChild(i), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), i.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "f2"), i.appendChild(n)
      }
    }

    function SVGFillFilter(t, e) {
      this.filterManager = e;
      var r = createNS("feColorMatrix");
      r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
    }

    function SVGGaussianBlurEffect(t, e) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var r = createNS("feGaussianBlur");
      t.appendChild(r), this.feGaussianBlur = r
    }

    function SVGStrokeEffect(t, e) {
      this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function SVGTritoneFilter(t, e) {
      this.filterManager = e;
      var r = createNS("feColorMatrix");
      r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
      var n = createNS("feComponentTransfer");
      n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.matrixFilter = n;
      var i = createNS("feFuncR");
      i.setAttribute("type", "table"), n.appendChild(i), this.feFuncR = i;
      var a = createNS("feFuncG");
      a.setAttribute("type", "table"), n.appendChild(a), this.feFuncG = a;
      var s = createNS("feFuncB");
      s.setAttribute("type", "table"), n.appendChild(s), this.feFuncB = s
    }

    function SVGProLevelsFilter(t, e) {
      this.filterManager = e;
      var r = this.filterManager.effectElements,
        n = createNS("feComponentTransfer");
      (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), n = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
    }

    function SVGDropShadowEffect(t, e) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
      var r = createNS("feGaussianBlur");
      r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
      var n = createNS("feOffset");
      n.setAttribute("dx", "25"), n.setAttribute("dy", "0"), n.setAttribute("in", "drop_shadow_1"), n.setAttribute("result", "drop_shadow_2"), this.feOffset = n, t.appendChild(n);
      var i = createNS("feFlood");
      i.setAttribute("flood-color", "#00ff00"), i.setAttribute("flood-opacity", "1"), i.setAttribute("result", "drop_shadow_3"), this.feFlood = i, t.appendChild(i);
      var a = createNS("feComposite");
      a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
      var s, o = createNS("feMerge");
      t.appendChild(o), s = createNS("feMergeNode"), o.appendChild(s), (s = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = s, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(s)
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function (t) {
        var e, r = t.length,
          n = "_";
        for (e = 0; e < r; e += 1) n += t[e].transform.key + "_";
        var i = this.sequences[n];
        return i || (i = {
          transforms: [].concat(t),
          finalTransform: new Matrix,
          _mdf: !1
        }, this.sequences[n] = i, this.sequenceList.push(i)), i
      },
      processSequence: function (t, e) {
        for (var r, n = 0, i = t.transforms.length, a = e; n < i && !e;) {
          if (t.transforms[n].transform.mProps._mdf) {
            a = !0;
            break
          }
          n += 1
        }
        if (a)
          for (t.finalTransform.reset(), n = i - 1; n >= 0; n -= 1) r = t.transforms[n].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
        t._mdf = a
      },
      processSequences: function (t) {
        var e, r = this.sequenceList.length;
        for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
      },
      getNewKey: function () {
        return "_" + this.transform_key_count++
      }
    }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
      checkMasks: function () {
        if (!this.data.hasMask) return !1;
        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
          if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
          t += 1
        }
        return !1
      },
      initExpressions: function () {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
      },
      setBlendMode: function () {
        var t = getBlendMode(this.data.bm);
        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
      },
      initBaseData: function (t, e, r) {
        this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
      },
      getType: function () {
        return this.type
      },
      sourceRectAtTime: function () {}
    }, NullElement.prototype.prepareFrame = function (t) {
      this.prepareProperties(t, !0)
    }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
      return null
    }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
      initRendererElement: function () {
        this.layerElement = createNS("g")
      },
      createContainerElements: function () {
        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var t, e, r, n = null;
        if (this.data.td) {
          if (3 == this.data.td || 1 == this.data.td) {
            var i = createNS("mask");
            i.setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), n = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), n = r, i.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
          } else if (2 == this.data.td) {
            var a = createNS("mask");
            a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
            var s = createNS("g");
            a.appendChild(s), t = createElementID(), e = filtersFactory.createFilter(t);
            var o = createNS("feComponentTransfer");
            o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
            var l = createNS("feFuncA");
            l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
            var h = createNS("rect");
            h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), s.appendChild(h), s.appendChild(this.layerElement), n = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), s.appendChild(h), r.appendChild(this.layerElement), n = r, s.appendChild(r)), this.globalData.defs.appendChild(a)
          }
        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), n = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
          var c = createNS("clipPath"),
            u = createNS("path");
          u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var f = createElementID();
          if (c.setAttribute("id", f), c.appendChild(u), this.globalData.defs.appendChild(c), this.checkMasks()) {
            var p = createNS("g");
            p.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), p.appendChild(this.layerElement), this.transformedElement = p, n ? n.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
          } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
        }
        0 !== this.data.bm && this.setBlendMode()
      },
      renderElement: function () {
        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
      },
      destroyBaseElement: function () {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
      },
      getBaseElement: function () {
        return this.data.hd ? null : this.baseElement
      },
      createRenderableComponents: function () {
        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
      },
      setMatte: function (t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
      }
    }, IShapeElement.prototype = {
      addShapeToModifiers: function (t) {
        var e, r = this.shapeModifiers.length;
        for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
      },
      isShapeInAnimatedModifiers: function (t) {
        for (var e = this.shapeModifiers.length; 0 < e;)
          if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
        return !1
      },
      renderModifiers: function () {
        if (this.shapeModifiers.length) {
          var t, e = this.shapes.length;
          for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
          for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
        }
      },
      lcEnum: {
        1: "butt",
        2: "round",
        3: "square"
      },
      ljEnum: {
        1: "miter",
        2: "round",
        3: "bevel"
      },
      searchProcessedElement: function (t) {
        for (var e = this.processedElements, r = 0, n = e.length; r < n;) {
          if (e[r].elem === t) return e[r].pos;
          r += 1
        }
        return 0
      },
      addProcessedElement: function (t, e) {
        for (var r = this.processedElements, n = r.length; n;)
          if (r[n -= 1].elem === t) return void(r[n].pos = e);
        r.push(new ProcessedElement(t, e))
      },
      prepareFrame: function (t) {
        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
      }
    }, ITextElement.prototype.initElement = function (t, e, r) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
    }, ITextElement.prototype.prepareFrame = function (t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
    }, ITextElement.prototype.createPathShape = function (t, e) {
      var r, n, i = e.length,
        a = "";
      for (r = 0; r < i; r += 1) n = e[r].ks.k, a += buildShapeString(n, n.i.length, !0, t);
      return a
    }, ITextElement.prototype.updateDocumentData = function (t, e) {
      this.textProperty.updateDocumentData(t, e)
    }, ITextElement.prototype.canResizeFont = function (t) {
      this.textProperty.canResizeFont(t)
    }, ITextElement.prototype.setMinimumFontSize = function (t) {
      this.textProperty.setMinimumFontSize(t)
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, n, i) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
      }
      e.translate(n, i, 0)
    }, ITextElement.prototype.buildColor = function (t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
    }, ICompElement.prototype.prepareFrame = function (t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
        }
        var r, n = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
      }
    }, ICompElement.prototype.renderInnerContent = function () {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, ICompElement.prototype.setElements = function (t) {
      this.elements = t
    }, ICompElement.prototype.getElements = function () {
      return this.elements
    }, ICompElement.prototype.destroyElements = function () {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.destroy = function () {
      this.destroyElements(), this.destroyBaseElement()
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
    }, IImageElement.prototype.sourceRectAtTime = function () {
      return this.sourceRect
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
    }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function () {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
    }, SVGTextElement.prototype.buildTextContents = function (t) {
      for (var e = 0, r = t.length, n = [], i = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (n.push(i), i = "") : i += t[e], e += 1;
      return n.push(i), n
    }, SVGTextElement.prototype.buildNewText = function () {
      var t, e, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var n = this.globalData.fontManager.getFontByName(r.f);
      if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
      else {
        this.layerElement.setAttribute("font-family", n.fFamily);
        var i = r.fWeight,
          a = r.fStyle;
        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var s, o = r.l || [],
        l = !!this.globalData.fontManager.chars;
      e = o.length;
      var h, c = this.mHelper,
        u = "",
        f = this.data.singleShape,
        p = 0,
        d = 0,
        m = !0,
        y = r.tr / 1e3 * r.finalSize;
      if (!f || l || r.sz) {
        var v, g, E = this.textSpans.length;
        for (t = 0; t < e; t += 1) l && f && 0 !== t || (s = E > t ? this.textSpans[t] : createNS(l ? "path" : "text"), E <= t && (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = s, this.layerElement.appendChild(s)), s.style.display = "inherit"), c.reset(), c.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (p = -y, d += r.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, c, o[t].line, p, d), p += o[t].l || 0, p += y), l ? (h = (v = (g = this.globalData.fontManager.getCharData(r.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && g.data || {}).shapes ? v.shapes[0].it : [], f ? u += this.createPathShape(c, h) : s.setAttribute("d", this.createPathShape(c, h))) : (f && s.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
        f && s && s.setAttribute("d", u)
      } else {
        var _ = this.textContainer,
          b = "start";
        switch (r.j) {
          case 1:
            b = "end";
            break;
          case 2:
            b = "middle"
        }
        _.setAttribute("text-anchor", b), _.setAttribute("letter-spacing", y);
        var T = this.buildTextContents(r.finalText);
        for (e = T.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t] || createNS("tspan")).textContent = T[t], s.setAttribute("x", 0), s.setAttribute("y", d), s.style.display = "inherit", _.appendChild(s), this.textSpans[t] = s, d += r.finalLineHeight;
        this.layerElement.appendChild(_)
      }
      for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
      this._sizeChanged = !0
    }, SVGTextElement.prototype.sourceRectAtTime = function (t) {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var e = this.layerElement.getBBox();
        this.bbox = {
          top: e.y,
          left: e.x,
          width: e.width,
          height: e.height
        }
      }
      return this.bbox
    }, SVGTextElement.prototype.renderInnerContent = function () {
      if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        var t, e;
        this._sizeChanged = !0;
        var r, n, i = this.textAnimator.renderedLetters,
          a = this.textProperty.currentData.l;
        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = i[t], n = this.textSpans[t], r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
      }
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
    }, SVGShapeElement.prototype.filterUniqueShapes = function () {
      var t, e, r, n, i = this.shapes.length,
        a = this.stylesList.length,
        s = [],
        o = !1;
      for (r = 0; r < a; r += 1) {
        for (n = this.stylesList[r], o = !1, s.length = 0, t = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (s.push(e), o = e._isAnimated || o);
        s.length > 1 && o && this.setShapesAsAnimated(s)
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e].setAsAnimated()
    }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
      var r, n = new SVGStyleData(t, e),
        i = n.pElem;
      if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, n);
      else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, n);
      else if ("gf" === t.ty || "gs" === t.ty) {
        r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))
      }
      return "st" !== t.ty && "gs" !== t.ty || (i.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), i.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), i.setAttribute("fill-opacity", "0"), 1 === t.lj && i.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && i.setAttribute("fill-rule", "evenodd"), t.ln && i.setAttribute("id", t.ln), t.cl && i.setAttribute("class", t.cl), t.bm && (i.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(n), this.addToAnimatedContents(t, r), r
    }, SVGShapeElement.prototype.createGroupElement = function (t) {
      var e = new ShapeGroupData;
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
    }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
      var r = TransformPropertyFactory.getTransformProperty(this, t, this),
        n = new SVGTransformData(r, r.o, e);
      return this.addToAnimatedContents(t, n), n
    }, SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
      var n = 4;
      "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7);
      var i = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this));
      return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i
    }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
      for (var r = 0, n = this.animatedContents.length; r < n;) {
        if (this.animatedContents[r].element === e) return;
        r += 1
      }
      this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(t),
        element: e,
        data: t
      })
    }, SVGShapeElement.prototype.setElementStyles = function (t) {
      var e, r = t.styles,
        n = this.stylesList.length;
      for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
    }, SVGShapeElement.prototype.reloadShapes = function () {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers()
    }, SVGShapeElement.prototype.searchShapes = function (t, e, r, n, i, a, s) {
      var o, l, h, c, u, f, p = [].concat(a),
        d = t.length - 1,
        m = [],
        y = [];
      for (o = d; o >= 0; o -= 1) {
        if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = s, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], i), t[o]._render && n.appendChild(e[o].style.pElem), m.push(e[o].style);
        else if ("gr" == t[o].ty) {
          if (f)
            for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
          else e[o] = this.createGroupElement(t[o]);
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, i + 1, p, s), t[o]._render && n.appendChild(e[o].gr)
        } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], n)), c = e[o].transform, p.push(c)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], p, i)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (f ? (u = e[o]).closed = !1 : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = u, this.shapeModifiers.push(u)), y.push(u)) : "rp" == t[o].ty && (f ? (u = e[o]).closed = !0 : (u = ShapeModifiers.getModifier(t[o].ty), e[o] = u, u.init(this, t, o, e), this.shapeModifiers.push(u), s = !1), y.push(u));
        this.addProcessedElement(t[o], o + 1)
      }
      for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
      for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
    }, SVGShapeElement.prototype.renderInnerContent = function () {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
    }, SVGShapeElement.prototype.renderShape = function () {
      var t, e, r = this.animatedContents.length;
      for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
    }, SVGShapeElement.prototype.destroy = function () {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
    }, SVGTintFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v,
          r = this.filterManager.effectElements[1].p.v,
          n = this.filterManager.effectElements[2].p.v / 100;
        this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + n + " 0")
      }
    }, SVGFillFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v,
          r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
      }
    }, SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
      if (t || this.filterManager._mdf) {
        var e = .3 * this.filterManager.effectElements[0].p.v,
          r = this.filterManager.effectElements[1].p.v,
          n = 3 == r ? 0 : e,
          i = 2 == r ? 0 : e;
        this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a)
      }
    }, SVGStrokeEffect.prototype.initialize = function () {
      var t, e, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < n; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
        p: t,
        m: r
      });
      if (3 === this.filterManager.effectElements[10].p.v) {
        var a = createNS("mask"),
          s = createElementID();
        a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
        var o = createNS("g");
        for (o.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); i[0];) o.appendChild(i[0]);
        this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
      } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
        if (2 === this.filterManager.effectElements[10].p.v)
          for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
      }
      this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function (t) {
      this.initialized || this.initialize();
      var e, r, n, i = this.paths.length;
      for (e = 0; e < i; e += 1)
        if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], n = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
          var a;
          if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
            var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              l = n.getTotalLength();
            a = "0 0 0 " + l * s + " ";
            var h, c = l * (o - s),
              u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
              f = Math.floor(c / u);
            for (h = 0; h < f; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
            a += "0 " + 10 * l + " 0 0"
          } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
          n.setAttribute("stroke-dasharray", a)
        } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var p = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * p[0]) + "," + bm_floor(255 * p[1]) + "," + bm_floor(255 * p[2]) + ")")
      }
    }, SVGTritoneFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v,
          r = this.filterManager.effectElements[1].p.v,
          n = this.filterManager.effectElements[2].p.v,
          i = n[0] + " " + r[0] + " " + e[0],
          a = n[1] + " " + r[1] + " " + e[1],
          s = n[2] + " " + r[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
      var r = createNS(t);
      return r.setAttribute("type", "table"), e.appendChild(r), r
    }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, n, i) {
      for (var a, s, o = 0, l = Math.min(t, e), h = Math.max(t, e), c = Array.call(null, {
          length: 256
        }), u = 0, f = i - n, p = e - t; o <= 256;) s = (a = o / 256) <= l ? p < 0 ? i : n : a >= h ? p < 0 ? n : i : n + f * Math.pow((a - t) / p, 1 / r), c[u++] = s, o += 256 / 255;
      return c.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager._mdf) {
        var e, r = this.filterManager.effectElements;
        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
      }
    }, SVGDropShadowEffect.prototype.renderFrame = function (t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v,
            n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
            i = r * Math.cos(n),
            a = r * Math.sin(n);
          this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
        }
      }
    };
    var _svgMatteSymbols = [];

    function SVGMatte3Effect(t, e, r) {
      this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
    }

    function SVGEffects(t) {
      var e, r, n = t.data.ef ? t.data.ef.length : 0,
        i = createElementID(),
        a = filtersFactory.createFilter(i),
        s = 0;
      for (this.filters = [], e = 0; e < n; e += 1) r = null, 20 === t.data.ef[e].ty ? (s += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (s += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (s += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (s += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (s += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (s += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
      s && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + i + ")")), this.filters.length && t.addRenderableComponent(this)
    }

    function CVContextData() {
      this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
      var t;
      for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
      this._length = 15
    }

    function CVBaseElement() {}

    function CVImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, r)
    }

    function CVCompElement(t, e, r) {
      this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function CVMaskElement(t, e) {
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r, n = this.masksProperties.length,
        i = !1;
      for (r = 0; r < n; r++) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = i, i && this.element.addRenderableComponent(this)
    }

    function CVShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
    }

    function CVSolidElement(t, e, r) {
      this.initElement(t, e, r)
    }

    function CVTextElement(t, e, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(t, e, r)
    }

    function CVEffects() {}

    function HBaseElement(t, e, r) {}

    function HSolidElement(t, e, r) {
      this.initElement(t, e, r)
    }

    function HCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }
    }

    function HShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }
    }

    function HTextElement(t, e, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
    }

    function HImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
    }

    function HCameraElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
      var n = PropertyFactory.getProp;
      if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var i, a = t.ks.or.k.length;
        for (i = 0; i < a; i += 1) t.ks.or.k[i].to = null, t.ks.or.k[i].ti = null
      }
      this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      }
    }

    function HEffects() {}
    SVGMatte3Effect.prototype.findSymbol = function (t) {
      for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
        e += 1
      }
      return null
    }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
      var r = t.layerElement.parentNode;
      if (r) {
        for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== t.layerElement;) a += 1;
        a <= s - 2 && (n = i[a + 1]);
        var o = createNS("use");
        o.setAttribute("href", "#" + e), n ? r.insertBefore(o, n) : r.appendChild(o)
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
      if (!this.findSymbol(e)) {
        var r = createElementID(),
          n = createNS("mask");
        n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var i = t.globalData.defs;
        i.appendChild(n);
        var a = createNS("symbol");
        a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), i.appendChild(a);
        var s = createNS("use");
        s.setAttribute("href", "#" + r), n.appendChild(s), e.data.hd = !1, e.show()
      }
      t.setMatte(e.layerId)
    }, SVGMatte3Effect.prototype.initialize = function () {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, n = e.length; r < n;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
      this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function () {
      this.initialized || this.initialize()
    }, SVGEffects.prototype.renderFrame = function (t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
    }, CVContextData.prototype.duplicate = function () {
      var t = 2 * this._length,
        e = this.savedOp;
      this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
      var r = 0;
      for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
      this._length = t
    }, CVContextData.prototype.reset = function () {
      this.cArrPos = 0, this.cTr.reset(), this.cO = 1
    }, CVBaseElement.prototype = {
      createElements: function () {},
      initRendererElement: function () {},
      createContainerElements: function () {
        this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
      },
      createContent: function () {},
      setBlendMode: function () {
        var t = this.globalData;
        if (t.blendMode !== this.data.bm) {
          t.blendMode = this.data.bm;
          var e = getBlendMode(this.data.bm);
          t.canvasContext.globalCompositeOperation = e
        }
      },
      createRenderableComponents: function () {
        this.maskManager = new CVMaskElement(this.data, this)
      },
      hideElement: function () {
        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
      },
      showElement: function () {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
      },
      renderFrame: function () {
        if (!this.hidden && !this.data.hd) {
          this.renderTransform(), this.renderRenderable(), this.setBlendMode();
          var t = 0 === this.data.ty;
          this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
        }
      },
      destroy: function () {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
      },
      mHelper: new Matrix
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e, r, n = t.getContext("2d"),
          i = this.img.width,
          a = this.img.height,
          s = i / a,
          o = this.assetData.w / this.assetData.h,
          l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (r = a) * o : r = (e = i) / o, n.drawImage(this.img, (i - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
      }
    }, CVImageElement.prototype.renderInnerContent = function (t) {
      this.canvasContext.drawImage(this.img, 0, 0)
    }, CVImageElement.prototype.destroy = function () {
      this.img = null
    }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
      var t, e = this.canvasContext;
      for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, CVCompElement.prototype.destroy = function () {
      var t;
      for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null
    }, CVMaskElement.prototype.renderFrame = function () {
      if (this.hasMasks) {
        var t, e, r, n, i = this.element.finalTransform.mat,
          a = this.element.canvasContext,
          s = this.masksProperties.length;
        for (a.beginPath(), t = 0; t < s; t++)
          if ("n" !== this.masksProperties[t].mode) {
            this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[t].v, e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(e[0], e[1]);
            var o, l = n._length;
            for (o = 1; o < l; o++) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
            r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
          } this.element.globalData.renderer.save(!0), a.clip()
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
      this.element = null
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
    }, CVShapeElement.prototype.createStyleElement = function (t, e) {
      var r = {
          data: t,
          type: t.ty,
          preTransforms: this.transformsManager.addTransformSequence(e),
          transforms: [],
          elements: [],
          closed: !0 === t.hd
        },
        n = {};
      if ("fl" == t.ty || "st" == t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bm_floor(n.c.v[0]) + "," + bm_floor(n.c.v[1]) + "," + bm_floor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || {
          k: 0
        }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || {
          k: 0
        }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
        if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), n.w.k || (r.wi = n.w.v), t.d) {
          var i = new DashProperty(this, t.d, "canvas", this);
          n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
        }
      } else r.r = 2 === t.r ? "evenodd" : "nonzero";
      return this.stylesList.push(r), n.style = r, n
    }, CVShapeElement.prototype.createGroupElement = function (t) {
      return {
        it: [],
        prevViewData: []
      }
    }, CVShapeElement.prototype.createTransformElement = function (t) {
      return {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: PropertyFactory.getProp(this, t.o, 0, .01, this),
          mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
        }
      }
    }, CVShapeElement.prototype.createShapeElement = function (t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e
    }, CVShapeElement.prototype.reloadShapes = function () {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
    }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
      var e, r = this.stylesList.length;
      for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
    }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
    }, CVShapeElement.prototype.closeStyles = function (t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e].closed = !0
    }, CVShapeElement.prototype.searchShapes = function (t, e, r, n, i) {
      var a, s, o, l, h, c, u = t.length - 1,
        f = [],
        p = [],
        d = [].concat(i);
      for (a = u; a >= 0; a -= 1) {
        if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = n, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);
        else if ("gr" == t[a].ty) {
          if (l)
            for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
          else e[a] = this.createGroupElement(t[a]);
          this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, n, d)
        } else "tr" == t[a].ty ? (l || (c = this.createTransformElement(t[a]), e[a] = c), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (l ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = h, this.shapeModifiers.push(h)), p.push(h)) : "rp" == t[a].ty && (l ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty), e[a] = h, h.init(this, t, a, e), this.shapeModifiers.push(h), n = !1), p.push(h));
        this.addProcessedElement(t[a], a + 1)
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(f), u = p.length, a = 0; a < u; a += 1) p[a].closed = !0
    }, CVShapeElement.prototype.renderInnerContent = function () {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
    }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
    }, CVShapeElement.prototype.drawLayer = function () {
      var t, e, r, n, i, a, s, o, l, h = this.stylesList.length,
        c = this.globalData.renderer,
        u = this.globalData.canvasContext;
      for (t = 0; t < h; t += 1)
        if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
          for (c.save(), a = l.elements, "st" === o || "gs" === o ? (u.strokeStyle = "st" === o ? l.co : l.grd, u.lineWidth = l.wi, u.lineCap = l.lc, u.lineJoin = l.lj, u.miterLimit = l.ml || 0) : u.fillStyle = "fl" === o ? l.co : l.grd, c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && u.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
            for ("st" !== o && "gs" !== o || (u.beginPath(), l.da && (u.setLineDash(l.da), u.lineDashOffset = l.do)), i = (s = a[e].trNodes).length, n = 0; n < i; n += 1) "m" == s[n].t ? u.moveTo(s[n].p[0], s[n].p[1]) : "c" == s[n].t ? u.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : u.closePath();
            "st" !== o && "gs" !== o || (u.stroke(), l.da && u.setLineDash(this.dashResetter))
          }
          "st" !== o && "gs" !== o && u.fill(l.r), c.restore()
        }
    }, CVShapeElement.prototype.renderShape = function (t, e, r, n) {
      var i, a;
      for (a = t, i = e.length - 1; i >= 0; i -= 1) "tr" == e[i].ty ? (a = r[i].transform, this.renderShapeTransform(t, a)) : "sh" == e[i].ty || "el" == e[i].ty || "rc" == e[i].ty || "sr" == e[i].ty ? this.renderPath(e[i], r[i]) : "fl" == e[i].ty ? this.renderFill(e[i], r[i], a) : "st" == e[i].ty ? this.renderStroke(e[i], r[i], a) : "gf" == e[i].ty || "gs" == e[i].ty ? this.renderGradientFill(e[i], r[i], a) : "gr" == e[i].ty ? this.renderShape(a, e[i].it, r[i].it) : e[i].ty;
      n && this.drawLayer()
    }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var r, n, i, a = t.trNodes,
          s = e.paths,
          o = s._length;
        a.length = 0;
        var l = t.transforms.finalTransform;
        for (i = 0; i < o; i += 1) {
          var h = s.shapes[i];
          if (h && h.v) {
            for (n = h._length, r = 1; r < n; r += 1) 1 === r && a.push({
              t: "m",
              p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
            }), a.push({
              t: "c",
              pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
            });
            1 === n && a.push({
              t: "m",
              p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
            }), h.c && n && (a.push({
              t: "c",
              pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
            }), a.push({
              t: "z"
            }))
          }
        }
        t.trNodes = a
      }
    }, CVShapeElement.prototype.renderPath = function (t, e) {
      if (!0 !== t.hd && t._shouldRender) {
        var r, n = e.styledShapes.length;
        for (r = 0; r < n; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
      }
    }, CVShapeElement.prototype.renderFill = function (t, e, r) {
      var n = e.style;
      (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity)
    }, CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
      var n = e.style;
      if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
        var i = this.globalData.canvasContext,
          a = e.s.v,
          s = e.e.v;
        if (1 === t.t) f = i.createLinearGradient(a[0], a[1], s[0], s[1]);
        else var o = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)),
          l = Math.atan2(s[1] - a[1], s[0] - a[0]),
          h = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
          c = Math.cos(l + e.a.v) * h + a[0],
          u = Math.sin(l + e.a.v) * h + a[1],
          f = i.createRadialGradient(c, u, 0, a[0], a[1], o);
        var p, d = t.g.p,
          m = e.g.c,
          y = 1;
        for (p = 0; p < d; p += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * p + 1]), f.addColorStop(m[4 * p] / 100, "rgba(" + m[4 * p + 1] + "," + m[4 * p + 2] + "," + m[4 * p + 3] + "," + y + ")");
        n.grd = f
      }
      n.coOp = e.o.v * r.opacity
    }, CVShapeElement.prototype.renderStroke = function (t, e, r) {
      var n = e.style,
        i = e.d;
      i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v)
    }, CVShapeElement.prototype.destroy = function () {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
      var t = this.canvasContext;
      t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = !1;
      t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var r = !1;
      t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var n, i, a = this.globalData.fontManager.getFontByName(t.f),
        s = t.l,
        o = this.mHelper;
      this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length;
      var l, h, c, u, f, p, d, m, y, v, g = this.data.singleShape,
        E = t.tr / 1e3 * t.finalSize,
        _ = 0,
        b = 0,
        T = !0,
        S = 0;
      for (n = 0; n < i; n += 1) {
        for (h = (l = this.globalData.fontManager.getCharData(t.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && l.data || {}, o.reset(), g && s[n].n && (_ = -E, b += t.yOffset, b += T ? 1 : 0, T = !1), d = (f = h.shapes ? h.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), g && this.applyTextPropertiesToMatrix(t, o, s[n].line, _, b), y = createSizedArray(d), p = 0; p < d; p += 1) {
          for (u = f[p].ks.k.i.length, m = f[p].ks.k, v = [], c = 1; c < u; c += 1) 1 == c && v.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), v.push(o.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToX(m.i[c][0], m.i[c][1], 0), o.applyToY(m.i[c][0], m.i[c][1], 0), o.applyToX(m.v[c][0], m.v[c][1], 0), o.applyToY(m.v[c][0], m.v[c][1], 0));
          v.push(o.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), y[p] = v
        }
        g && (_ += s[n].l, _ += E), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = {
          elem: y
        }, S += 1
      }
    }, CVTextElement.prototype.renderInnerContent = function () {
      var t, e, r, n, i, a, s = this.canvasContext;
      this.finalTransform.mat.props;
      s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var o, l = this.textAnimator.renderedLetters,
        h = this.textProperty.currentData.l;
      e = h.length;
      var c, u, f = null,
        p = null,
        d = null;
      for (t = 0; t < e; t += 1)
        if (!h[t].n) {
          if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
            for (o && o.fc ? f !== o.fc && (f = o.fc, s.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, s.fillStyle = this.values.fill), n = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
              for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
          }
          if (this.stroke) {
            for (o && o.sw ? d !== o.sw && (d = o.sw, s.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? p !== o.sc && (p = o.sc, s.strokeStyle = o.sc) : p !== this.values.stroke && (p = this.values.stroke, s.strokeStyle = this.values.stroke), n = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
              for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
          }
          o && this.globalData.renderer.restore()
        }
    }, CVEffects.prototype.renderFrame = function () {}, HBaseElement.prototype = {
      checkBlendMode: function () {},
      initRendererElement: function () {
        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
      },
      createContainerElements: function () {
        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
      },
      renderElement: function () {
        this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
      },
      renderFrame: function () {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
      },
      destroy: function () {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
      },
      createRenderableComponents: function () {
        this.maskManager = new MaskElement(this.data, this, this.globalData)
      },
      addEffects: function () {},
      setMatte: function () {}
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
      var t;
      this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
    }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
    }, HCompElement.prototype.addTo3dContainer = function (t, e) {
      for (var r, n = 0; n < e;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
      r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
    }, HShapeElement.prototype.getTransformedPoint = function (t, e) {
      var r, n = t.length;
      for (r = 0; r < n; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e
    }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
      var r, n, i, a, s, o = t.sh.v,
        l = t.transformers,
        h = o._length;
      if (!(h <= 1)) {
        for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, e);
        o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, e))
      }
    }, HShapeElement.prototype.checkBounds = function (t, e, r, n, i) {
      this.getBoundsOfCurve(t, e, r, n);
      var a = this.shapeBoundingBox;
      i.x = bm_min(a.left, i.x), i.xMax = bm_max(a.right, i.xMax), i.y = bm_min(a.top, i.y), i.yMax = bm_max(a.bottom, i.yMax)
    }, HShapeElement.prototype.shapeBoundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
      x: 0,
      xMax: 0,
      y: 0,
      yMax: 0,
      width: 0,
      height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, n) {
      for (var i, a, s, o, l, h, c, u = [
          [t[0], n[0]],
          [t[1], n[1]]
        ], f = 0; f < 2; ++f)
        if (a = 6 * t[f] - 12 * e[f] + 6 * r[f], i = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * n[f], s = 3 * e[f] - 3 * t[f], a |= 0, s |= 0, 0 !== (i |= 0))(l = a * a - 4 * s * i) < 0 || (0 < (h = (-a + bm_sqrt(l)) / (2 * i)) && h < 1 && u[f].push(this.calculateF(h, t, e, r, n, f)), 0 < (c = (-a - bm_sqrt(l)) / (2 * i)) && c < 1 && u[f].push(this.calculateF(c, t, e, r, n, f)));
        else {
          if (0 === a) continue;
          0 < (o = -s / a) && o < 1 && u[f].push(this.calculateF(o, t, e, r, n, f))
        } this.shapeBoundingBox.left = bm_min.apply(null, u[0]), this.shapeBoundingBox.top = bm_min.apply(null, u[1]), this.shapeBoundingBox.right = bm_max.apply(null, u[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, u[1])
    }, HShapeElement.prototype.calculateF = function (t, e, r, n, i, a) {
      return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bm_pow(t, 2) * n[a] + bm_pow(t, 3) * i[a]
    }, HShapeElement.prototype.calculateBoundingBox = function (t, e) {
      var r, n = t.length;
      for (r = 0; r < n; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
    }, HShapeElement.prototype.currentBoxContains = function (t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
    }, HShapeElement.prototype.renderInnerContent = function () {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox,
          e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
        var r = !1;
        this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting()
    }, HTextElement.prototype.buildNewText = function () {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style;
      e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var r, n, i = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars)
        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
        else {
          e.fontFamily = i.fFamily;
          var a = t.fWeight,
            s = t.fStyle;
          e.fontStyle = s, e.fontWeight = a
        } var o, l, h, c = t.l;
      n = c.length;
      var u, f = this.mHelper,
        p = "",
        d = 0;
      for (r = 0; r < n; r += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? h = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(o), styleDiv(l)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(o = createTag("span")), l.appendChild(o)), this.globalData.fontManager.chars) {
          var m, y = this.globalData.fontManager.getCharData(t.finalText[r], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          if (m = y ? y.data : null, f.reset(), m && m.shapes && (u = m.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), p = this.createPathShape(f, u), o.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(o);
          else {
            if (this.innerElem.appendChild(l), m && m.shapes) {
              document.body.appendChild(h);
              var v = h.getBBox();
              h.setAttribute("width", v.width + 2), h.setAttribute("height", v.height + 2), h.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2)), h.style.transform = h.style.webkitTransform = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)", c[r].yOffset = v.y - 1
            } else h.setAttribute("width", 1), h.setAttribute("height", 1);
            l.appendChild(h)
          }
        } else o.textContent = c[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(l), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
        this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1
      }
      for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
    }, HTextElement.prototype.renderInnerContent = function () {
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var t, e, r, n, i, a = 0,
          s = this.textAnimator.renderedLetters,
          o = this.textProperty.currentData.l;
        for (e = o.length, t = 0; t < e; t += 1) o[t].n ? a += 1 : (n = this.textSpans[t], i = this.textPaths[t], r = s[a], a += 1, r._mdf.m && (this.isMasked ? n.setAttribute("transform", r.m) : n.style.transform = n.style.webkitTransform = r.m), n.style.opacity = r.o, r.sw && r._mdf.sw && i.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && i.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (i.setAttribute("fill", r.fc), i.style.color = r.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var l = this.innerElem.getBBox();
          this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height));
          this.currentBBox.w === l.width + 2 && this.currentBBox.h === l.height + 2 && this.currentBBox.x === l.x - 1 && this.currentBBox.y === l.y - 1 || (this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
      var t = this.globalData.getAssetsPath(this.assetData),
        e = new Image;
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
      var t, e, r = this.comp.threeDElements.length;
      for (t = 0; t < r; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
    }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
      var t, e, r = this._isFirstFrame;
      if (this.hierarchy)
        for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
      if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
            var n = this.hierarchy[t].finalTransform.mProp;
            this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var i;
          i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
            s = [i[0] / a, i[1] / a, i[2] / a],
            o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
            l = Math.atan2(s[1], o),
            h = Math.atan2(s[0], -s[2]);
          this.mat.rotateY(h).rotateX(-l)
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var c = !this._prevMat.equals(this.mat);
        if ((c || this.pe._mdf) && this.comp.threeDElements) {
          var u;
          for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (u = this.comp.threeDElements[t]).type && (c && (u.container.style.transform = u.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (u.perspectiveElem.style.perspective = u.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
          this.mat.clone(this._prevMat)
        }
      }
      this._isFirstFrame = !1
    }, HCameraElement.prototype.prepareFrame = function (t) {
      this.prepareProperties(t, !0)
    }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
      return null
    }, HEffects.prototype.renderFrame = function () {};
    var animationManager = function () {
        var t = {},
          e = [],
          r = 0,
          n = 0,
          i = 0,
          a = !0,
          s = !1;

        function o(t) {
          for (var r = 0, i = t.target; r < n;) e[r].animation === i && (e.splice(r, 1), r -= 1, n -= 1, i.isPaused || c()), r += 1
        }

        function l(t, r) {
          if (!t) return null;
          for (var i = 0; i < n;) {
            if (e[i].elem == t && null !== e[i].elem) return e[i].animation;
            i += 1
          }
          var a = new AnimationItem;
          return u(a, t), a.setData(t, r), a
        }

        function h() {
          i += 1, d()
        }

        function c() {
          i -= 1
        }

        function u(t, r) {
          t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", c), e.push({
            elem: r,
            animation: t
          }), n += 1
        }

        function f(t) {
          var o, l = t - r;
          for (o = 0; o < n; o += 1) e[o].animation.advanceTime(l);
          r = t, i && !s ? window.requestAnimationFrame(f) : a = !0
        }

        function p(t) {
          r = t, window.requestAnimationFrame(f)
        }

        function d() {
          !s && i && a && (window.requestAnimationFrame(p), a = !1)
        }
        return t.registerAnimation = l, t.loadAnimation = function (t) {
          var e = new AnimationItem;
          return u(e, null), e.setParams(t), e
        }, t.setSpeed = function (t, r) {
          var i;
          for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r)
        }, t.setDirection = function (t, r) {
          var i;
          for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r)
        }, t.play = function (t) {
          var r;
          for (r = 0; r < n; r += 1) e[r].animation.play(t)
        }, t.pause = function (t) {
          var r;
          for (r = 0; r < n; r += 1) e[r].animation.pause(t)
        }, t.stop = function (t) {
          var r;
          for (r = 0; r < n; r += 1) e[r].animation.stop(t)
        }, t.togglePause = function (t) {
          var r;
          for (r = 0; r < n; r += 1) e[r].animation.togglePause(t)
        }, t.searchAnimations = function (t, e, r) {
          var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
            a = i.length;
          for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], t);
          if (e && 0 === a) {
            r || (r = "svg");
            var s = document.getElementsByTagName("body")[0];
            s.innerHTML = "";
            var o = createTag("div");
            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, t)
          }
        }, t.resize = function () {
          var t;
          for (t = 0; t < n; t += 1) e[t].animation.resize()
        }, t.goToAndStop = function (t, r, i) {
          var a;
          for (a = 0; a < n; a += 1) e[a].animation.goToAndStop(t, r, i)
        }, t.destroy = function (t) {
          var r;
          for (r = n - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
        }, t.freeze = function () {
          s = !0
        }, t.unfreeze = function () {
          s = !1, d()
        }, t.getRegisteredAnimations = function () {
          var t, r = e.length,
            n = [];
          for (t = 0; t < r; t += 1) n.push(e[t].animation);
          return n
        }, t
      }(),
      AnimationItem = function () {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
      };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
      t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
      switch (e) {
        case "canvas":
          this.renderer = new CanvasRenderer(this, t.rendererSettings);
          break;
        case "svg":
          this.renderer = new SVGRenderer(this, t.rendererSettings);
          break;
        default:
          this.renderer = new HybridRenderer(this, t.rendererSettings)
      }
      this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function () {
        this.trigger("data_failed")
      }.bind(this)))
    }, AnimationItem.prototype.setData = function (t, e) {
      var r = {
          wrapper: t,
          animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
        },
        n = t.attributes;
      r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
      var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
      "" === i || (r.loop = "false" !== i && ("true" === i || parseInt(i)));
      var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
      r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
    }, AnimationItem.prototype.includeLayers = function (t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e, r, n = this.animationData.layers,
        i = n.length,
        a = t.layers,
        s = a.length;
      for (r = 0; r < s; r += 1)
        for (e = 0; e < i;) {
          if (n[e].id == a[r].id) {
            n[e] = a[r];
            break
          }
          e += 1
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
      this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function () {
      var t = this.animationData.segments;
      if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function () {
        this.trigger("data_failed")
      }.bind(this))
    }, AnimationItem.prototype.loadSegments = function () {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
    }, AnimationItem.prototype.imagesLoaded = function () {
      this.trigger("loaded_images"), this.checkLoaded()
    }, AnimationItem.prototype.preloadImages = function () {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
    }, AnimationItem.prototype.configAnimation = function (t) {
      if (this.renderer) try {
        this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
      } catch (t) {
        this.triggerConfigError(t)
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function () {
      this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
    }, AnimationItem.prototype.checkLoaded = function () {
      this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
        this.trigger("DOMLoaded")
      }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
    }, AnimationItem.prototype.resize = function () {
      this.renderer.updateContainerSize()
    }, AnimationItem.prototype.setSubframe = function (t) {
      this.subframeEnabled = !!t
    }, AnimationItem.prototype.gotoFrame = function () {
      this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
    }, AnimationItem.prototype.renderFrame = function () {
      if (!1 !== this.isLoaded) try {
        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
      } catch (t) {
        this.triggerRenderFrameError(t)
      }
    }, AnimationItem.prototype.play = function (t) {
      t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function (t) {
      t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
    }, AnimationItem.prototype.togglePause = function (t) {
      t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function (t) {
      t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
    }, AnimationItem.prototype.goToAndStop = function (t, e, r) {
      r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
    }, AnimationItem.prototype.goToAndPlay = function (t, e, r) {
      this.goToAndStop(t, e, r), this.play()
    }, AnimationItem.prototype.advanceTime = function (t) {
      if (!0 !== this.isPaused && !1 !== this.isLoaded) {
        var e = this.currentRawFrame + t * this.frameModifier,
          r = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
      }
    }, AnimationItem.prototype.adjustSegment = function (t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function (t, e) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0)
    }, AnimationItem.prototype.playSegments = function (t, e) {
      if (e && (this.segments.length = 0), "object" == typeof t[0]) {
        var r, n = t.length;
        for (r = 0; r < n; r += 1) this.segments.push(t[r])
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function (t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
    }, AnimationItem.prototype.checkSegments = function (t) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
    }, AnimationItem.prototype.destroy = function (t) {
      t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
      this.currentRawFrame = t, this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function (t) {
      this.playSpeed = t, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function (t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
    }, AnimationItem.prototype.updaFrameModifier = function () {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
    }, AnimationItem.prototype.getPath = function () {
      return this.path
    }, AnimationItem.prototype.getAssetsPath = function (t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e
    }, AnimationItem.prototype.getAssetData = function (t) {
      for (var e = 0, r = this.assets.length; e < r;) {
        if (t == this.assets[e].id) return this.assets[e];
        e += 1
      }
    }, AnimationItem.prototype.hide = function () {
      this.renderer.hide()
    }, AnimationItem.prototype.show = function () {
      this.renderer.show()
    }, AnimationItem.prototype.getDuration = function (t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate
    }, AnimationItem.prototype.trigger = function (t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t)
      }
      "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
    }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
    }, AnimationItem.prototype.triggerConfigError = function (t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
    };
    var Expressions = function () {
      var t = {};
      return t.initExpressions = function (t) {
        var e = 0,
          r = [];
        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
          e += 1
        }, t.renderer.globalData.popExpression = function () {
          0 == (e -= 1) && function () {
            var t, e = r.length;
            for (t = 0; t < e; t += 1) r[t].release();
            r.length = 0
          }()
        }, t.renderer.globalData.registerExpressionProperty = function (t) {
          -1 === r.indexOf(t) && r.push(t)
        }
      }, t
    }();
    expressionsPlugin = Expressions;
    var ExpressionManager = function () {
        var ob = {},
          Math = BMMath,
          window = null,
          document = null;

        function $bm_isInstanceOfArray(t) {
          return t.constructor === Array || t.constructor === Float32Array
        }

        function isNumerable(t, e) {
          return "number" === t || "boolean" === t || "string" === t || e instanceof Number
        }

        function $bm_neg(t) {
          var e = typeof t;
          if ("number" === e || "boolean" === e || t instanceof Number) return -t;
          if ($bm_isInstanceOfArray(t)) {
            var r, n = t.length,
              i = [];
            for (r = 0; r < n; r += 1) i[r] = -t[r];
            return i
          }
          return t.propType ? t.v : void 0
        }
        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
          easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
          easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

        function sum(t, e) {
          var r = typeof t,
            n = typeof e;
          if ("string" === r || "string" === n) return t + e;
          if (isNumerable(r, t) && isNumerable(n, e)) return t + e;
          if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] = t[0] + e, t;
          if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
          if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
            for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] + e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
            return o
          }
          return 0
        }
        var add = sum;

        function sub(t, e) {
          var r = typeof t,
            n = typeof e;
          if (isNumerable(r, t) && isNumerable(n, e)) return "string" === r && (t = parseInt(t)), "string" === n && (e = parseInt(e)), t - e;
          if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] = t[0] - e, t;
          if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
          if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
            for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] - e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
            return o
          }
          return 0
        }

        function mul(t, e) {
          var r, n, i, a = typeof t,
            s = typeof e;
          if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
          if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
            for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] * e;
            return r
          }
          if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
            for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t * e[n];
            return r
          }
          return 0
        }

        function div(t, e) {
          var r, n, i, a = typeof t,
            s = typeof e;
          if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
          if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
            for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] / e;
            return r
          }
          if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
            for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t / e[n];
            return r
          }
          return 0
        }

        function mod(t, e) {
          return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
        }
        var $bm_sum = sum,
          $bm_sub = sub,
          $bm_mul = mul,
          $bm_div = div,
          $bm_mod = mod;

        function clamp(t, e, r) {
          if (e > r) {
            var n = r;
            r = e, e = n
          }
          return Math.min(Math.max(t, e), r)
        }

        function radiansToDegrees(t) {
          return t / degToRads
        }
        var radians_to_degrees = radiansToDegrees;

        function degreesToRadians(t) {
          return t * degToRads
        }
        var degrees_to_radians = radiansToDegrees,
          helperLengthArray = [0, 0, 0, 0, 0, 0];

        function length(t, e) {
          if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
          e || (e = helperLengthArray);
          var r, n = Math.min(t.length, e.length),
            i = 0;
          for (r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2);
          return Math.sqrt(i)
        }

        function normalize(t) {
          return div(t, length(t))
        }

        function rgbToHsl(t) {
          var e, r, n = t[0],
            i = t[1],
            a = t[2],
            s = Math.max(n, i, a),
            o = Math.min(n, i, a),
            l = (s + o) / 2;
          if (s == o) e = r = 0;
          else {
            var h = s - o;
            switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
              case n:
                e = (i - a) / h + (i < a ? 6 : 0);
                break;
              case i:
                e = (a - n) / h + 2;
                break;
              case a:
                e = (n - i) / h + 4
            }
            e /= 6
          }
          return [e, r, l, t[3]]
        }

        function hue2rgb(t, e, r) {
          return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }

        function hslToRgb(t) {
          var e, r, n, i = t[0],
            a = t[1],
            s = t[2];
          if (0 === a) e = r = n = s;
          else {
            var o = s < .5 ? s * (1 + a) : s + a - s * a,
              l = 2 * s - o;
            e = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
          }
          return [e, r, n, t[3]]
        }

        function linear(t, e, r, n, i) {
          if (void 0 !== n && void 0 !== i || (n = e, i = r, e = 0, r = 1), r < e) {
            var a = r;
            r = e, e = a
          }
          if (t <= e) return n;
          if (t >= r) return i;
          var s = r === e ? 0 : (t - e) / (r - e);
          if (!n.length) return n + (i - n) * s;
          var o, l = n.length,
            h = createTypedArray("float32", l);
          for (o = 0; o < l; o += 1) h[o] = n[o] + (i[o] - n[o]) * s;
          return h
        }

        function random(t, e) {
          if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
            var r, n = e.length;
            t || (t = createTypedArray("float32", n));
            var i = createTypedArray("float32", n),
              a = BMMath.random();
            for (r = 0; r < n; r += 1) i[r] = t[r] + a * (e[r] - t[r]);
            return i
          }
          return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
        }

        function createPath(t, e, r, n) {
          var i, a = t.length,
            s = shape_pool.newElement();
          s.setPathData(!!n, a);
          var o, l, h = [0, 0];
          for (i = 0; i < a; i += 1) o = e && e[i] ? e[i] : h, l = r && r[i] ? r[i] : h, s.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], o[0] + t[i][0], o[1] + t[i][1], i, !0);
          return s
        }

        function initiateExpression(elem, data, property) {
          var val = data.x,
            needsVelocity = /velocity(?![\w\d])/.test(val),
            _needsRandom = -1 !== val.indexOf("random"),
            elemType = elem.data.ty,
            transform, $bm_transform, content, effect, thisProperty = property;
          thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
            get: function () {
              return thisProperty.v
            }
          }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
          var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
            outPoint = elem.data.op / elem.comp.globalData.frameRate,
            width = elem.data.sw ? elem.data.sw : 0,
            height = elem.data.sh ? elem.data.sh : 0,
            name = elem.data.nm,
            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
            scoped_bm_rt;
          if (data.xf) {
            var i, len = data.xf.length;
            for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
          }
          var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
            numKeys = property.kf ? data.k.length : 0,
            active = !this.data || !0 !== this.data.hd,
            wiggle = function (t, e) {
              var r, n, i = this.pv.length ? this.pv.length : 1,
                a = createTypedArray("float32", i);
              var s = Math.floor(5 * time);
              for (r = 0, n = 0; r < s;) {
                for (n = 0; n < i; n += 1) a[n] += -e + 2 * e * BMMath.random();
                r += 1
              }
              var o = 5 * time,
                l = o - Math.floor(o),
                h = createTypedArray("float32", i);
              if (i > 1) {
                for (n = 0; n < i; n += 1) h[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * l;
                return h
              }
              return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
            }.bind(this);

          function loopInDuration(t, e) {
            return loopIn(t, e, !0)
          }

          function loopOutDuration(t, e) {
            return loopOut(t, e, !0)
          }
          thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
          var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
            time, velocity, value, text, textIndex, textTotal, selectorValue;

          function lookAt(t, e) {
            var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
              n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
            return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
          }

          function easeOut(t, e, r, n, i) {
            return applyEase(easeOutBez, t, e, r, n, i)
          }

          function easeIn(t, e, r, n, i) {
            return applyEase(easeInBez, t, e, r, n, i)
          }

          function ease(t, e, r, n, i) {
            return applyEase(easeInOutBez, t, e, r, n, i)
          }

          function applyEase(t, e, r, n, i, a) {
            void 0 === i ? (i = r, a = n) : e = (e - r) / (n - r);
            var s = t(e = e > 1 ? 1 : e < 0 ? 0 : e);
            if ($bm_isInstanceOfArray(i)) {
              var o, l = i.length,
                h = createTypedArray("float32", l);
              for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
              return h
            }
            return (a - i) * s + i
          }

          function nearestKey(t) {
            var e, r, n, i = data.k.length;
            if (data.k.length && "number" != typeof data.k[0])
              if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
              else {
                for (e = 0; e < i - 1; e += 1) {
                  if (t === data.k[e].t) {
                    r = e + 1, n = data.k[e].t;
                    break
                  }
                  if (t > data.k[e].t && t < data.k[e + 1].t) {
                    t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, n = data.k[e + 1].t) : (r = e + 1, n = data.k[e].t);
                    break
                  }
                } - 1 === r && (r = e + 1, n = data.k[e].t)
              }
            else r = 0, n = 0;
            var a = {};
            return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
          }

          function key(t) {
            var e, r, n;
            if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
            t -= 1, e = {
              time: data.k[t].t / elem.comp.globalData.frameRate,
              value: []
            };
            var i = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
            for (n = i.length, r = 0; r < n; r += 1) e[r] = i[r], e.value[r] = i[r];
            return e
          }

          function framesToTime(t, e) {
            return e || (e = elem.comp.globalData.frameRate), t / e
          }

          function timeToFrames(t, e) {
            return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
          }

          function seedRandom(t) {
            BMMath.seedrandom(randSeed + t)
          }

          function sourceRectAtTime() {
            return elem.sourceRectAtTime()
          }

          function substring(t, e) {
            return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
          }

          function substr(t, e) {
            return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
          }
          var index = elem.data.ind,
            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
            parent, randSeed = Math.floor(1e6 * Math.random()),
            globalData = elem.globalData;

          function executeExpression(t) {
            return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
          }
          return executeExpression
        }
        return ob.initiateExpression = initiateExpression, ob
      }(),
      expressionHelpers = function () {
        return {
          searchExpressions: function (t, e, r) {
            e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
          },
          getSpeedAtTime: function (t) {
            var e = this.getValueAtTime(t),
              r = this.getValueAtTime(t + -.01),
              n = 0;
            if (e.length) {
              var i;
              for (i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
              n = 100 * Math.sqrt(n)
            } else n = 0;
            return n
          },
          getVelocityAtTime: function (t) {
            if (void 0 !== this.vel) return this.vel;
            var e, r, n = this.getValueAtTime(t),
              i = this.getValueAtTime(t + -.001);
            if (n.length)
              for (e = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) e[r] = (i[r] - n[r]) / -.001;
            else e = (i - n) / -.001;
            return e
          },
          getValueAtTime: function (t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function () {
            return this.pv
          },
          setGroupProperty: function (t) {
            this.propertyGroup = t
          }
        }
      }();
    ! function () {
      function t(t, e, r) {
        if (!this.k || !this.keyframes) return this.pv;
        t = t ? t.toLowerCase() : "";
        var n, i, a, s, o, l = this.comp.renderedFrame,
          h = this.keyframes,
          c = h[h.length - 1].t;
        if (l <= c) return this.pv;
        if (r ? i = c - (n = e ? Math.abs(c - elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = c - (i = h[h.length - 1 - e].t)), "pingpong" === t) {
          if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
        } else {
          if ("offset" === t) {
            var u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
              f = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
              p = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
              d = Math.floor((l - i) / n);
            if (this.pv.length) {
              for (s = (o = new Array(u.length)).length, a = 0; a < s; a += 1) o[a] = (f[a] - u[a]) * d + p[a];
              return o
            }
            return (f - u) * d + p
          }
          if ("continue" === t) {
            var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
              y = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
              return o
            }
            return m + (l - c) / .001 * (m - y)
          }
        }
        return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
      }

      function e(t, e, r) {
        if (!this.k) return this.pv;
        t = t ? t.toLowerCase() : "";
        var n, i, a, s, o, l = this.comp.renderedFrame,
          h = this.keyframes,
          c = h[0].t;
        if (l >= c) return this.pv;
        if (r ? i = c + (n = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = (i = h[e].t) - c), "pingpong" === t) {
          if (Math.floor((c - l) / n) % 2 == 0) return this.getValueAtTime(((c - l) % n + c) / this.comp.globalData.frameRate, 0)
        } else {
          if ("offset" === t) {
            var u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
              f = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
              p = this.getValueAtTime((n - (c - l) % n + c) / this.comp.globalData.frameRate, 0),
              d = Math.floor((c - l) / n) + 1;
            if (this.pv.length) {
              for (s = (o = new Array(u.length)).length, a = 0; a < s; a += 1) o[a] = p[a] - (f[a] - u[a]) * d;
              return o
            }
            return p - (f - u) * d
          }
          if ("continue" === t) {
            var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
              y = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * (c - l) / .001;
              return o
            }
            return m + (m - y) * (c - l) / .001
          }
        }
        return this.getValueAtTime((n - (c - l) % n + c) / this.comp.globalData.frameRate, 0)
      }

      function r(t, e) {
        if (!this.k) return this.pv;
        if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
        var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
          a = i - t,
          s = e > 1 ? (i + t - a) / (e - 1) : 1,
          o = 0,
          l = 0;
        for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
          if (n = this.getValueAtTime(a + o * s), this.pv.length)
            for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
          else r += n;
          o += 1
        }
        if (this.pv.length)
          for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
        else r /= e;
        return r
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function (t, e, r) {
        var i = n(t, e, r);
        return i.dynamicProperties.length ? i.getValueAtTime = function (t) {
          console.warn("Transform at time not supported")
        }.bind(i) : i.getValueAtTime = function (t) {}.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i
      };
      var i = PropertyFactory.getProp;
      PropertyFactory.getProp = function (n, a, s, o, l) {
        var h = i(n, a, s, o, l);
        h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === a.a ? a.k.length : 0, h.propertyIndex = a.ix;
        var c = 0;
        return 0 !== s && (c = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), h._cachingAtTime = {
          lastFrame: initialDefaultFrame,
          lastIndex: 0,
          value: c
        }, expressionHelpers.searchExpressions(n, a, h), h.k && l.addDynamicProperty(h), h
      };
      var a = ShapePropertyFactory.getConstructorFunction(),
        s = ShapePropertyFactory.getKeyframedConstructorFunction();

      function o() {}
      o.prototype = {
        vertices: function (t, e) {
          this.k && this.getValue();
          var r = this.v;
          void 0 !== e && (r = this.getValueAtTime(e, 0));
          var n, i = r._length,
            a = r[t],
            s = r.v,
            o = createSizedArray(i);
          for (n = 0; n < i; n += 1) o[n] = "i" === t || "o" === t ? [a[n][0] - s[n][0], a[n][1] - s[n][1]] : [a[n][0], a[n][1]];
          return o
        },
        points: function (t) {
          return this.vertices("v", t)
        },
        inTangents: function (t) {
          return this.vertices("i", t)
        },
        outTangents: function (t) {
          return this.vertices("o", t)
        },
        isClosed: function () {
          return this.v.c
        },
        pointOnPath: function (t, e) {
          var r = this.v;
          void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
          for (var n, i = this._segmentsLength, a = i.lengths, s = i.totalLength * t, o = 0, l = a.length, h = 0; o < l;) {
            if (h + a[o].addedLength > s) {
              var c = o,
                u = r.c && o === l - 1 ? 0 : o + 1,
                f = (s - h) / a[o].addedLength;
              n = bez.getPointInSegment(r.v[c], r.v[u], r.o[c], r.i[u], f, a[o]);
              break
            }
            h += a[o].addedLength, o += 1
          }
          return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
        },
        vectorOnPath: function (t, e, r) {
          t = 1 == t ? this.v.c ? 0 : .999 : t;
          var n = this.pointOnPath(t, e),
            i = this.pointOnPath(t + .001, e),
            a = i[0] - n[0],
            s = i[1] - n[1],
            o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
          return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
        },
        tangentOnPath: function (t, e) {
          return this.vectorOnPath(t, e, "tangent")
        },
        normalOnPath: function (t, e) {
          return this.vectorOnPath(t, e, "normal")
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
      }, extendPrototype([o], a), extendPrototype([o], s), s.prototype.getValueAtTime = function (t) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: shape_pool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
      }, s.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var l = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function (t, e, r, n, i) {
        var a = l(t, e, r, n, i);
        return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
      }
    }(),
    function () {
      TextProperty.prototype.getExpressionValue = function (t, e) {
        var r = this.calculateExpression(e);
        if (t.t !== r) {
          var n = {};
          return this.copyData(n, t), n.t = r.toString(), n.__complete = !1, n
        }
        return t
      }, TextProperty.prototype.searchProperty = function () {
        var t = this.searchKeyframes(),
          e = this.searchExpressions();
        return this.kf = t || e, this.kf
      }, TextProperty.prototype.searchExpressions = function () {
        if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
      }
    }();
    var ShapeExpressionInterface = function () {
        function t(t, u, f) {
          var p, d = [],
            m = t ? t.length : 0;
          for (p = 0; p < m; p += 1) "gr" == t[p].ty ? d.push(e(t[p], u[p], f)) : "fl" == t[p].ty ? d.push(r(t[p], u[p], f)) : "st" == t[p].ty ? d.push(n(t[p], u[p], f)) : "tm" == t[p].ty ? d.push(i(t[p], u[p], f)) : "tr" == t[p].ty || ("el" == t[p].ty ? d.push(a(t[p], u[p], f)) : "sr" == t[p].ty ? d.push(s(t[p], u[p], f)) : "sh" == t[p].ty ? d.push(c(t[p], u[p], f)) : "rc" == t[p].ty ? d.push(o(t[p], u[p], f)) : "rd" == t[p].ty ? d.push(l(t[p], u[p], f)) : "rp" == t[p].ty && d.push(h(t[p], u[p], f)));
          return d
        }

        function e(e, r, n) {
          var i = function (t) {
            switch (t) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return i.content;
              default:
                return i.transform
            }
          };
          i.propertyGroup = function (t) {
            return 1 === t ? i : n(t - 1)
          };
          var a = function (e, r, n) {
              var i, a = function (t) {
                for (var e = 0, r = i.length; e < r;) {
                  if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                  e += 1
                }
                if ("number" == typeof t) return i[t - 1]
              };
              return a.propertyGroup = function (t) {
                return 1 === t ? a : n(t - 1)
              }, i = t(e.it, r.it, a.propertyGroup), a.numProperties = i.length, a.propertyIndex = e.cix, a._name = e.nm, a
            }(e, r, i.propertyGroup),
            s = function (t, e, r) {
              function n(t) {
                return 1 == t ? i : r(--t)
              }
              e.transform.mProps.o.setGroupProperty(n), e.transform.mProps.p.setGroupProperty(n), e.transform.mProps.a.setGroupProperty(n), e.transform.mProps.s.setGroupProperty(n), e.transform.mProps.r.setGroupProperty(n), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(n), e.transform.mProps.sa.setGroupProperty(n));

              function i(e) {
                return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : void 0
              }
              return e.transform.op.setGroupProperty(n), Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i
            }(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
          return i.content = a, i.transform = s, Object.defineProperty(i, "_name", {
            get: function () {
              return e.nm
            }
          }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i
        }

        function r(t, e, r) {
          function n(t) {
            return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : void 0
          }
          return Object.defineProperties(n, {
            color: {
              get: ExpressionPropertyInterface(e.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), n
        }

        function n(t, e, r) {
          function n(t) {
            return 1 === t ? ob : r(t - 1)
          }

          function i(t) {
            return 1 === t ? l : n(t - 1)
          }

          function a(r) {
            Object.defineProperty(l, t.d[r].nm, {
              get: ExpressionPropertyInterface(e.d.dataProps[r].p)
            })
          }
          var s, o = t.d ? t.d.length : 0,
            l = {};
          for (s = 0; s < o; s += 1) a(s), e.d.dataProps[s].p.setGroupProperty(i);

          function h(t) {
            return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : void 0
          }
          return Object.defineProperties(h, {
            color: {
              get: ExpressionPropertyInterface(e.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(e.o)
            },
            strokeWidth: {
              get: ExpressionPropertyInterface(e.w)
            },
            dash: {
              get: function () {
                return l
              }
            },
            _name: {
              value: t.nm
            },
            mn: {
              value: t.mn
            }
          }), e.c.setGroupProperty(n), e.o.setGroupProperty(n), e.w.setGroupProperty(n), h
        }

        function i(t, e, r) {
          function n(t) {
            return 1 == t ? i : r(--t)
          }

          function i(e) {
            return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : void 0
          }
          return i.propertyIndex = t.ix, e.s.setGroupProperty(n), e.e.setGroupProperty(n), e.o.setGroupProperty(n), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
            start: {
              get: ExpressionPropertyInterface(e.s)
            },
            end: {
              get: ExpressionPropertyInterface(e.e)
            },
            offset: {
              get: ExpressionPropertyInterface(e.o)
            },
            _name: {
              value: t.nm
            }
          }), i.mn = t.mn, i
        }

        function a(t, e, r) {
          function n(t) {
            return 1 == t ? a : r(--t)
          }
          a.propertyIndex = t.ix;
          var i = "tm" === e.sh.ty ? e.sh.prop : e.sh;

          function a(e) {
            return t.p.ix === e ? a.position : t.s.ix === e ? a.size : void 0
          }
          return i.s.setGroupProperty(n), i.p.setGroupProperty(n), Object.defineProperties(a, {
            size: {
              get: ExpressionPropertyInterface(i.s)
            },
            position: {
              get: ExpressionPropertyInterface(i.p)
            },
            _name: {
              value: t.nm
            }
          }), a.mn = t.mn, a
        }

        function s(t, e, r) {
          function n(t) {
            return 1 == t ? a : r(--t)
          }
          var i = "tm" === e.sh.ty ? e.sh.prop : e.sh;

          function a(e) {
            return t.p.ix === e ? a.position : t.r.ix === e ? a.rotation : t.pt.ix === e ? a.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? a.outerRadius : t.os.ix === e ? a.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? a.innerRoundness : void 0 : a.innerRadius
          }
          return a.propertyIndex = t.ix, i.or.setGroupProperty(n), i.os.setGroupProperty(n), i.pt.setGroupProperty(n), i.p.setGroupProperty(n), i.r.setGroupProperty(n), t.ir && (i.ir.setGroupProperty(n), i.is.setGroupProperty(n)), Object.defineProperties(a, {
            position: {
              get: ExpressionPropertyInterface(i.p)
            },
            rotation: {
              get: ExpressionPropertyInterface(i.r)
            },
            points: {
              get: ExpressionPropertyInterface(i.pt)
            },
            outerRadius: {
              get: ExpressionPropertyInterface(i.or)
            },
            outerRoundness: {
              get: ExpressionPropertyInterface(i.os)
            },
            innerRadius: {
              get: ExpressionPropertyInterface(i.ir)
            },
            innerRoundness: {
              get: ExpressionPropertyInterface(i.is)
            },
            _name: {
              value: t.nm
            }
          }), a.mn = t.mn, a
        }

        function o(t, e, r) {
          function n(t) {
            return 1 == t ? a : r(--t)
          }
          var i = "tm" === e.sh.ty ? e.sh.prop : e.sh;

          function a(e) {
            return t.p.ix === e ? a.position : t.r.ix === e ? a.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? a.size : void 0
          }
          return a.propertyIndex = t.ix, i.p.setGroupProperty(n), i.s.setGroupProperty(n), i.r.setGroupProperty(n), Object.defineProperties(a, {
            position: {
              get: ExpressionPropertyInterface(i.p)
            },
            roundness: {
              get: ExpressionPropertyInterface(i.r)
            },
            size: {
              get: ExpressionPropertyInterface(i.s)
            },
            _name: {
              value: t.nm
            }
          }), a.mn = t.mn, a
        }

        function l(t, e, r) {
          var n = e;

          function i(e) {
            if (t.r.ix === e || "Round Corners 1" === e) return i.radius
          }
          return i.propertyIndex = t.ix, n.rd.setGroupProperty(function (t) {
            return 1 == t ? i : r(--t)
          }), Object.defineProperties(i, {
            radius: {
              get: ExpressionPropertyInterface(n.rd)
            },
            _name: {
              value: t.nm
            }
          }), i.mn = t.mn, i
        }

        function h(t, e, r) {
          function n(t) {
            return 1 == t ? a : r(--t)
          }
          var i = e;

          function a(e) {
            return t.c.ix === e || "Copies" === e ? a.copies : t.o.ix === e || "Offset" === e ? a.offset : void 0
          }
          return a.propertyIndex = t.ix, i.c.setGroupProperty(n), i.o.setGroupProperty(n), Object.defineProperties(a, {
            copies: {
              get: ExpressionPropertyInterface(i.c)
            },
            offset: {
              get: ExpressionPropertyInterface(i.o)
            },
            _name: {
              value: t.nm
            }
          }), a.mn = t.mn, a
        }

        function c(t, e, r) {
          var n = e.sh;

          function i(t) {
            if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return i.path
          }
          return n.setGroupProperty(function (t) {
            return 1 == t ? i : r(--t)
          }), Object.defineProperties(i, {
            path: {
              get: function () {
                return n.k && n.getValue(), n
              }
            },
            shape: {
              get: function () {
                return n.k && n.getValue(), n
              }
            },
            _name: {
              value: t.nm
            },
            ix: {
              value: t.ix
            },
            propertyIndex: {
              value: t.ix
            },
            mn: {
              value: t.mn
            }
          }), i
        }
        return function (e, r, n) {
          var i;

          function a(t) {
            if ("number" == typeof t) return i[t - 1];
            for (var e = 0, r = i.length; e < r;) {
              if (i[e]._name === t) return i[e];
              e += 1
            }
          }
          return a.propertyGroup = n, i = t(e, r, a), a.numProperties = i.length, a
        }
      }(),
      TextExpressionInterface = function (t) {
        var e;

        function r() {}
        return Object.defineProperty(r, "sourceText", {
          get: function () {
            t.textProperty.getValue();
            var r = t.textProperty.currentData.t;
            return void 0 !== r && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), e
          }
        }), r
      },
      LayerExpressionInterface = function () {
        function t(t, e) {
          var r = new Matrix;
          if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
            var n, i = this._elem.hierarchy.length;
            for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(r);
            return r.applyToPointArray(t[0], t[1], t[2] || 0)
          }
          return r.applyToPointArray(t[0], t[1], t[2] || 0)
        }

        function e(t, e) {
          var r = new Matrix;
          if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
            var n, i = this._elem.hierarchy.length;
            for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(r);
            return r.inversePoint(t)
          }
          return r.inversePoint(t)
        }

        function r(t) {
          var e = new Matrix;
          if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
            var r, n = this._elem.hierarchy.length;
            for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
            return e.inversePoint(t)
          }
          return e.inversePoint(t)
        }

        function n() {
          return [1, 1, 1, 1]
        }
        return function (i) {
          var a;

          function s(t) {
            switch (t) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return s.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return a;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return s.effect
            }
          }
          s.toWorld = t, s.fromWorld = e, s.toComp = t, s.fromComp = r, s.sampleImage = n, s.sourceRectAtTime = i.sourceRectAtTime.bind(i), s._elem = i;
          var o = getDescriptor(a = TransformExpressionInterface(i.finalTransform.mProp), "anchorPoint");
          return Object.defineProperties(s, {
            hasParent: {
              get: function () {
                return i.hierarchy.length
              }
            },
            parent: {
              get: function () {
                return i.hierarchy[0].layerInterface
              }
            },
            rotation: getDescriptor(a, "rotation"),
            scale: getDescriptor(a, "scale"),
            position: getDescriptor(a, "position"),
            opacity: getDescriptor(a, "opacity"),
            anchorPoint: o,
            anchor_point: o,
            transform: {
              get: function () {
                return a
              }
            },
            active: {
              get: function () {
                return i.isInRange
              }
            }
          }), s.startTime = i.data.st, s.index = i.data.ind, s.source = i.data.refId, s.height = 0 === i.data.ty ? i.data.h : 100, s.width = 0 === i.data.ty ? i.data.w : 100, s.inPoint = i.data.ip / i.comp.globalData.frameRate, s.outPoint = i.data.op / i.comp.globalData.frameRate, s._name = i.data.nm, s.registerMaskInterface = function (t) {
            s.mask = new MaskManagerInterface(t, i)
          }, s.registerEffectsInterface = function (t) {
            s.effect = t
          }, s
        }
      }(),
      CompExpressionInterface = function (t) {
        function e(e) {
          for (var r = 0, n = t.layers.length; r < n;) {
            if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
            r += 1
          }
          return null
        }
        return Object.defineProperty(e, "_name", {
          value: t.data.nm
        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
      },
      TransformExpressionInterface = function (t) {
        function e(t) {
          switch (t) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return e.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return e.rotation;
            case "ADBE Rotate X":
              return e.xRotation;
            case "ADBE Rotate Y":
              return e.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return e.position;
            case "ADBE Position_0":
              return e.xPosition;
            case "ADBE Position_1":
              return e.yPosition;
            case "ADBE Position_2":
              return e.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return e.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return e.opacity
          }
        }
        if (Object.defineProperty(e, "rotation", {
            get: ExpressionPropertyInterface(t.r || t.rz)
          }), Object.defineProperty(e, "zRotation", {
            get: ExpressionPropertyInterface(t.rz || t.r)
          }), Object.defineProperty(e, "xRotation", {
            get: ExpressionPropertyInterface(t.rx)
          }), Object.defineProperty(e, "yRotation", {
            get: ExpressionPropertyInterface(t.ry)
          }), Object.defineProperty(e, "scale", {
            get: ExpressionPropertyInterface(t.s)
          }), t.p) var r = ExpressionPropertyInterface(t.p);
        return Object.defineProperty(e, "position", {
          get: function () {
            return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
          }
        }), Object.defineProperty(e, "xPosition", {
          get: ExpressionPropertyInterface(t.px)
        }), Object.defineProperty(e, "yPosition", {
          get: ExpressionPropertyInterface(t.py)
        }), Object.defineProperty(e, "zPosition", {
          get: ExpressionPropertyInterface(t.pz)
        }), Object.defineProperty(e, "anchorPoint", {
          get: ExpressionPropertyInterface(t.a)
        }), Object.defineProperty(e, "opacity", {
          get: ExpressionPropertyInterface(t.o)
        }), Object.defineProperty(e, "skew", {
          get: ExpressionPropertyInterface(t.sk)
        }), Object.defineProperty(e, "skewAxis", {
          get: ExpressionPropertyInterface(t.sa)
        }), Object.defineProperty(e, "orientation", {
          get: ExpressionPropertyInterface(t.or)
        }), e
      },
      ProjectInterface = function () {
        function t(t) {
          this.compositions.push(t)
        }
        return function () {
          function e(t) {
            for (var e = 0, r = this.compositions.length; e < r;) {
              if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
              e += 1
            }
          }
          return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
        }
      }(),
      EffectsExpressionInterface = function () {
        function t(r, n, i, a) {
          var s, o = [],
            l = r.ef.length;
          for (s = 0; s < l; s += 1) 5 === r.ef[s].ty ? o.push(t(r.ef[s], n.effectElements[s], n.effectElements[s].propertyGroup, a)) : o.push(e(n.effectElements[s], r.ef[s].ty, a, h));

          function h(t) {
            return 1 === t ? c : i(t - 1)
          }
          var c = function (t) {
            for (var e = r.ef, n = 0, i = e.length; n < i;) {
              if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? o[n] : o[n]();
              n += 1
            }
            return o[0]()
          };
          return c.propertyGroup = h, "ADBE Color Control" === r.mn && Object.defineProperty(c, "color", {
            get: function () {
              return o[0]()
            }
          }), Object.defineProperty(c, "numProperties", {
            get: function () {
              return r.np
            }
          }), c.active = c.enabled = 0 !== r.en, c
        }

        function e(t, e, r, n) {
          var i = ExpressionPropertyInterface(t.p);
          return t.p.setGroupProperty && t.p.setGroupProperty(n),
            function () {
              return 10 === e ? r.comp.compInterface(t.p.v) : i()
            }
        }
        return {
          createEffectsInterface: function (e, r) {
            if (e.effectsManager) {
              var n, i = [],
                a = e.data.ef,
                s = e.effectsManager.effectElements.length;
              for (n = 0; n < s; n += 1) i.push(t(a[n], e.effectsManager.effectElements[n], r, e));
              return function (t) {
                for (var r = e.data.ef || [], n = 0, a = r.length; n < a;) {
                  if (t === r[n].nm || t === r[n].mn || t === r[n].ix) return i[n];
                  n += 1
                }
              }
            }
          }
        }
      }(),
      MaskManagerInterface = function () {
        function t(t, e) {
          this._mask = t, this._data = e
        }
        Object.defineProperty(t.prototype, "maskPath", {
          get: function () {
            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
          }
        }), Object.defineProperty(t.prototype, "maskOpacity", {
          get: function () {
            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
          }
        });
        return function (e, r) {
          var n, i = createSizedArray(e.viewData.length),
            a = e.viewData.length;
          for (n = 0; n < a; n += 1) i[n] = new t(e.viewData[n], e.masksProperties[n]);
          return function (t) {
            for (n = 0; n < a;) {
              if (e.masksProperties[n].nm === t) return i[n];
              n += 1
            }
          }
        }
      }(),
      ExpressionPropertyInterface = function () {
        var t = {
            pv: 0,
            v: 0,
            mult: 1
          },
          e = {
            pv: [0, 0, 0],
            v: [0, 0, 0],
            mult: 1
          };

        function r(t, e, r) {
          Object.defineProperty(t, "velocity", {
            get: function () {
              return e.getVelocityAtTime(e.comp.currentFrame)
            }
          }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function (n) {
            if (t.numKeys) {
              var i = "";
              i = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s;
              var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
              return a.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, a
            }
            return 0
          }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
        }

        function n() {
          return t
        }
        return function (i) {
          return i ? "unidimensional" === i.propType ? function (e) {
            e && "pv" in e || (e = t);
            var n = 1 / e.mult,
              i = e.pv * n,
              a = new Number(i);
            return a.value = i, r(a, e, "unidimensional"),
              function () {
                return e.k && e.getValue(), i = e.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, e, "unidimensional")), a
              }
          }(i) : function (t) {
            t && "pv" in t || (t = e);
            var n = 1 / t.mult,
              i = t.pv.length,
              a = createTypedArray("float32", i),
              s = createTypedArray("float32", i);
            return a.value = s, r(a, t, "multidimensional"),
              function () {
                t.k && t.getValue();
                for (var e = 0; e < i; e += 1) a[e] = s[e] = t.v[e] * n;
                return a
              }
          }(i) : n
        }
      }(),
      TextExpressionSelectorProp, propertyGetTextProp;

    function SliderEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function AngleEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function ColorEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
    }

    function PointEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
    }

    function LayerIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function MaskIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function CheckboxEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function NoValueEffect() {
      this.p = {}
    }

    function EffectsManager() {}

    function EffectsManager(t, e) {
      var r = t.ef || [];
      this.effectElements = [];
      var n, i, a = r.length;
      for (n = 0; n < a; n++) i = new GroupEffect(r[n], e), this.effectElements.push(i)
    }

    function GroupEffect(t, e) {
      this.init(t, e)
    }
    TextExpressionSelectorProp = function () {
      function t(t, e) {
        return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
      }
      return function (e, r) {
        this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
      }
    }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function (t, e, r) {
      return 1 === e.t ? new TextExpressionSelectorProp(t, e, r) : propertyGetTextProp(t, e, r)
    }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, n, i = this.data.ef.length,
        a = this.data.ef;
      for (r = 0; r < i; r += 1) {
        switch (n = null, a[r].ty) {
          case 0:
            n = new SliderEffect(a[r], e, this);
            break;
          case 1:
            n = new AngleEffect(a[r], e, this);
            break;
          case 2:
            n = new ColorEffect(a[r], e, this);
            break;
          case 3:
            n = new PointEffect(a[r], e, this);
            break;
          case 4:
          case 7:
            n = new CheckboxEffect(a[r], e, this);
            break;
          case 10:
            n = new LayerIndexEffect(a[r], e, this);
            break;
          case 11:
            n = new MaskIndexEffect(a[r], e, this);
            break;
          case 5:
            n = new EffectsManager(a[r], e, this);
            break;
          default:
            n = new NoValueEffect(a[r], e, this)
        }
        n && this.effectElements.push(n)
      }
    };
    var lottiejs = {},
      _isFrozen = !1;

    function setLocationHref(t) {
      locationHref = t
    }

    function searchAnimations() {
      !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function setSubframeRendering(t) {
      subframeEnabled = t
    }

    function loadAnimation(t) {
      return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function setQuality(t) {
      if ("string" == typeof t) switch (t) {
        case "high":
          defaultCurveSegments = 200;
          break;
        case "medium":
          defaultCurveSegments = 50;
          break;
        case "low":
          defaultCurveSegments = 10
      } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
      roundValues(!(defaultCurveSegments >= 50))
    }

    function inBrowser() {
      return "undefined" != typeof navigator
    }

    function installPlugin(t, e) {
      "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix
      }
    }

    function checkReady() {
      "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
      for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
        var n = e[r].split("=");
        if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1])
      }
    }
    lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.9";
    var standalone = "__[STANDALONE]__",
      animationData = "__[ANIMATIONDATA]__",
      renderer = "";
    if (standalone) {
      var scripts = document.getElementsByTagName("script"),
        index = scripts.length - 1,
        myScript = scripts[index] || {
          src: ""
        },
        queryString = myScript.src.replace(/^[^\?]+\??/, "");
      renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottiejs
  }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return factory(root)
  }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function (t, e, r) {
  "use strict";
  var n = r(11);
  n.define("brand", t.exports = function (t) {
    var e, r = {},
      i = document,
      a = t("html"),
      s = t("body"),
      o = ".w-webflow-badge",
      l = window.location,
      h = /PhantomJS/i.test(navigator.userAgent),
      c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

    function u() {
      var r = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
      t(e).attr("style", r ? "display: none !important;" : "")
    }

    function f() {
      var t = s.children(o),
        r = t.length && t.get(0) === e,
        i = n.env("editor");
      r ? i && t.remove() : (t.length && t.remove(), i || s.append(e))
    }
    return r.ready = function () {
    }, r
  })
}, function (t, e, r) {
  "use strict";
  var n = r(11);
  n.define("edit", t.exports = function (t, e, r) {
    if (r = r || {}, (n.env("test") || n.env("frame")) && !r.fixture && ! function () {
        try {
          return window.top.__Cypress__
        } catch (t) {
          return !1
        }
      }()) return {
      exit: 1
    };
    var i, a = t(window),
      s = t(document.documentElement),
      o = document.location,
      l = "hashchange",
      h = r.load || function () {
        i = !0, window.WebflowEditor = !0, a.off(l, u),
          function (t) {
            var e = window.document.createElement("iframe");
            e.src = "https://gsd.harvard.edu/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
            var r = function r(n) {
              "WF_third_party_cookies_unsupported" === n.data ? (v(e, r), t(!1)) : "WF_third_party_cookies_supported" === n.data && (v(e, r), t(!0))
            };
            e.onerror = function () {
              v(e, r), t(!1)
            }, window.addEventListener("message", r, !1), window.document.body.appendChild(e)
          }(function (e) {
            t.ajax({
              url: y("https://editor-api.gsd.harvard.edu/api/editor/view"),
              data: {
                siteId: s.attr("data-wf-site")
              },
              xhrFields: {
                withCredentials: !0
              },
              dataType: "json",
              crossDomain: !0,
              success: f(e)
            })
          })
      },
      c = !1;
    try {
      c = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
    } catch (t) {}

    function u() {
      i || /\?edit/.test(o.hash) && h()
    }

    function f(t) {
      return function (e) {
        e ? (e.thirdPartyCookiesSupported = t, p(m(e.bugReporterScriptPath), function () {
          p(m(e.scriptPath), function () {
            window.WebflowEditor(e)
          })
        })) : console.error("Could not load editor data")
      }
    }

    function p(e, r) {
      t.ajax({
        type: "GET",
        url: e,
        dataType: "script",
        cache: !0
      }).then(r, d)
    }

    function d(t, e, r) {
      throw console.error("Could not load editor script: " + e), r
    }

    function m(t) {
      return t.indexOf("//") >= 0 ? t : y("https://editor-api.gsd.harvard.edu" + t)
    }

    function y(t) {
      return t.replace(/([^:])\/\//g, "$1/")
    }

    function v(t, e) {
      window.removeEventListener("message", e, !1), t.remove()
    }
    return c ? h() : o.search ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) || /\?edit$/.test(o.href)) && h() : a.on(l, u).triggerHandler(l), {}
  })
}, function (t, e, r) {
  "use strict";
  var n = window.jQuery,
    i = {},
    a = [],
    s = {
      reset: function (t, e) {
        e.__wf_intro = null
      },
      intro: function (t, e) {
        e.__wf_intro || (e.__wf_intro = !0, n(e).triggerHandler(i.types.INTRO))
      },
      outro: function (t, e) {
        e.__wf_intro && (e.__wf_intro = null, n(e).triggerHandler(i.types.OUTRO))
      }
    };
  i.triggers = {}, i.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, i.init = function () {
    for (var t = a.length, e = 0; e < t; e++) {
      var r = a[e];
      r[0](0, r[1])
    }
    a = [], n.extend(i.triggers, s)
  }, i.async = function () {
    for (var t in s) {
      var e = s[t];
      s.hasOwnProperty(t) && (i.triggers[t] = function (t, r) {
        a.push([e, r])
      })
    }
  }, i.async(), t.exports = i
}, function (t, e, r) {
  "use strict";
  var n = r(11),
    i = r(292);
  i.setEnv(n.env), n.define("ix2", t.exports = function () {
    return i
  })
}, function (t, e, r) {
  "use strict";
  var n = r(54),
    i = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setEnv = function (t) {
    t() && (0, o.observeRequests)(h)
  }, e.init = function (t) {
    c(), (0, o.startEngine)({
      store: h,
      rawData: t,
      allowEvents: !0
    })
  }, e.destroy = c, e.actions = e.store = void 0;
  var a = r(130),
    s = i(r(304)),
    o = r(149),
    l = n(r(88));
  e.actions = l;
  var h = (0, a.createStore)(s.default);

  function c() {
    (0, o.stopEngine)(h)
  }
  e.store = h
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(132),
    i = r(296),
    a = r(297),
    s = "[object Null]",
    o = "[object Undefined]",
    l = n.default ? n.default.toStringTag : void 0;
  e.default = function (t) {
    return null == t ? void 0 === t ? o : s : l && l in Object(t) ? Object(i.default)(t) : Object(a.default)(t)
  }
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(295),
    i = "object" == typeof self && self && self.Object === Object && self,
    a = n.default || i || Function("return this")();
  e.default = a
}, function (t, e, r) {
  "use strict";
  r.r(e),
    function (t) {
      var r = "object" == typeof t && t && t.Object === Object && t;
      e.default = r
    }.call(this, r(42))
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(132),
    i = Object.prototype,
    a = i.hasOwnProperty,
    s = i.toString,
    o = n.default ? n.default.toStringTag : void 0;
  e.default = function (t) {
    var e = a.call(t, o),
      r = t[o];
    try {
      t[o] = void 0;
      var n = !0
    } catch (t) {}
    var i = s.call(t);
    return n && (e ? t[o] = r : delete t[o]), i
  }
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = Object.prototype.toString;
  e.default = function (t) {
    return n.call(t)
  }
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(299),
    i = Object(n.default)(Object.getPrototypeOf, Object);
  e.default = i
}, function (t, e, r) {
  "use strict";
  r.r(e), e.default = function (t, e) {
    return function (r) {
      return t(e(r))
    }
  }
}, function (t, e, r) {
  "use strict";
  r.r(e), e.default = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, r) {
  "use strict";
  r.r(e),
    function (t, n) {
      var i, a = r(303);
      i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : n;
      var s = Object(a.default)(i);
      e.default = s
    }.call(this, r(42), r(302)(t))
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      var e = Object.create(t);
      e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i
        }
      }), Object.defineProperty(e, "exports", {
        enumerable: !0
      }), e.webpackPolyfill = 1
    }
    return e
  }
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e, r = t.Symbol;
    return "function" == typeof r ? r.observable ? e = r.observable : (e = r("observable"), r.observable = e) : e = "@@observable", e
  }
  r.r(e), r.d(e, "default", function () {
    return n
  })
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var n = r(130),
    i = r(305),
    a = r(324),
    s = r(325),
    o = r(10),
    l = r(326),
    h = r(327),
    c = o.IX2ElementsReducer.ixElements,
    u = (0, n.combineReducers)({
      ixData: i.ixData,
      ixRequest: a.ixRequest,
      ixSession: s.ixSession,
      ixElements: c,
      ixInstances: l.ixInstances,
      ixParameters: h.ixParameters
    });
  e.default = u
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixData = void 0;
  var n = r(10).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
  e.ixData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case n:
        return e.payload.ixData || Object.freeze({});
      default:
        return t
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) {
      for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
      return r
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
  }
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createElementState = l, e.mergeActionState = h, e.ixElements = void 0;
  var n = r(38),
    i = r(87),
    a = r(143),
    s = {},
    o = "refState";

  function l(t, e, r, a, s) {
    var o = r === i.PLAIN_OBJECT ? (0, n.getIn)(s, ["config", "target", "objectId"]) : null;
    return (0, n.mergeIn)(t, [a], {
      id: a,
      ref: e,
      refId: o,
      refType: r
    })
  }

  function h(t, e, r, i, a) {
    var s = function (t) {
        var e = t.config;
        return c.reduce(function (t, r) {
          var n = r[0],
            i = r[1],
            a = e[n],
            s = e[i];
          return null != a && null != s && (t[i] = s), t
        }, {})
      }(a),
      l = [e, o, r];
    return (0, n.mergeIn)(t, l, i, s)
  }
  e.ixElements = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (e.type) {
      case a.IX2_SESSION_STOPPED:
        return s;
      case a.IX2_INSTANCE_ADDED:
        var r = e.payload,
          i = r.elementId,
          o = r.element,
          c = r.origin,
          u = r.actionItem,
          f = r.refType,
          p = u.actionTypeId,
          d = t;
        return (0, n.getIn)(d, [i, o]) !== o && (d = l(d, o, f, i, u)), h(d, i, p, c, u);
      case a.IX2_ELEMENT_STATE_CHANGED:
        var m = e.payload;
        return h(t, m.elementId, m.actionTypeId, m.current, m.actionItem);
      default:
        return t
    }
  };
  var c = [
    [i.CONFIG_X_VALUE, i.CONFIG_X_UNIT],
    [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT],
    [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT],
    [i.CONFIG_VALUE, i.CONFIG_UNIT]
  ]
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_EVENT_ENGINE_EVENT_TYPES = e.DIRECTIONS = e.EVENT_APPLIES_TO = e.EVENT_ACTION_TYPES = e.BASED_ON_TYPES = e.AXES = void 0;
  e.AXES = {
    X_AXIS: "X_AXIS",
    Y_AXIS: "Y_AXIS"
  };
  e.BASED_ON_TYPES = {
    ELEMENT: "ELEMENT",
    VIEWPORT: "VIEWPORT",
    PAGE: "PAGE"
  };
  e.EVENT_ACTION_TYPES = {
    START: "START",
    STOP: "STOP",
    CONTINUOUS: "CONTINUOUS",
    CHANGE_COMBO: "CHANGE_COMBO"
  };
  e.EVENT_APPLIES_TO = {
    ELEMENT: "ELEMENT",
    CLASS: "CLASS",
    PAGE: "PAGE"
  };
  e.DIRECTIONS = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    BOTTOM: "BOTTOM",
    TOP: "TOP",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP_LEFT: "TOP_LEFT",
    CLOCKWISE: "CLOCKWISE",
    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
  };
  e.IX2_EVENT_ENGINE_EVENT_TYPES = {
    MOUSE_CLICK: "MOUSE_CLICK",
    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
    MOUSE_DOWN: "MOUSE_DOWN",
    MOUSE_UP: "MOUSE_UP",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
    TAB_ACTIVE: "TAB_ACTIVE",
    TAB_INACTIVE: "TAB_INACTIVE",
    NAVBAR_OPEN: "NAVBAR_OPEN",
    NAVBAR_CLOSE: "NAVBAR_CLOSE",
    SLIDER_ACTIVE: "SLIDER_ACTIVE",
    SLIDER_INACTIVE: "SLIDER_INACTIVE",
    DROPDOWN_OPEN: "DROPDOWN_OPEN",
    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
    COMPONENT_ACTIVE: "COMPONENT_ACTIVE",
    COMPONENT_INACTIVE: "COMPONENT_INACTIVE",
    PAGE_START: "PAGE_START",
    PAGE_FINISH: "PAGE_FINISH",
    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
    PAGE_SCROLL: "PAGE_SCROLL",
    ELEMENT: "ELEMENT",
    VIEWPORT: "VIEWPORT",
    PAGE: "PAGE",
    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE"
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_INTERACTION_TYPES = void 0;
  e.IX2_INTERACTION_TYPES = {
    MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
    MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
    SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
    PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
    PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
    MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
    SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
    PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
    DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
    NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
    TAB_INTERACTION: "TAB_INTERACTION",
    SLIDER_INTERACTION: "SLIDER_INTERACTION",
    ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION"
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
  e.getPluginConfig = function (t) {
    return t.value
  };
  e.getPluginDuration = function (t, e) {
    if ("auto" !== e.config.duration) return null;
    var r = parseFloat(t.getAttribute("data-duration"));
    return r > 0 ? 1e3 * r : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
  };
  e.getPluginOrigin = function (t) {
    return t || {
      value: 0
    }
  };
  e.getPluginDestination = function (t) {
    return {
      value: t.value
    }
  };
  e.createPluginInstance = function (t) {
    var e = window.Webflow.require("lottie").createInstance(t);
    return e.stop(), e.setSubframe(!0), e
  };
  e.renderPlugin = function (t, e, r) {
    if (t) {
      var n = e[r.actionTypeId].value / 100;
      t.goToFrame(t.frames * n)
    }
  };
  e.clearPlugin = function (t) {
    window.Webflow.require("lottie").createInstance(t).stop()
  }
}, function (t, e, r) {
  "use strict";
  var n, i, a, s = r(1),
    o = s(r(39)),
    l = s(r(24)),
    h = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getInstanceId = function () {
    return "i" + x++
  }, e.getElementId = function (t, e) {
    for (var r in t) {
      var n = t[r];
      if (n && n.ref === e) return n.id
    }
    return "e" + C++
  }, e.reifyState = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.events,
      r = t.actionLists,
      n = t.site,
      i = (0, u.default)(e, function (t, e) {
        var r = e.eventTypeId;
        return t[r] || (t[r] = {}), t[r][e.id] = e, t
      }, {}),
      a = n && n.mediaQueries,
      s = [];
    a ? s = a.map(function (t) {
      return t.key
    }) : (a = [], console.warn("IX2 missing mediaQueries in site data"));
    return {
      ixData: {
        events: e,
        actionLists: r,
        eventTypeMap: i,
        mediaQueries: a,
        mediaQueryKeys: s
      }
    }
  }, e.observeStore = function (t) {
    var e = t.store,
      r = t.select,
      n = t.onChange,
      i = t.comparator,
      a = void 0 === i ? P : i,
      s = e.getState,
      o = (0, e.subscribe)(function () {
        var t = r(s());
        if (null == t) return void o();
        a(t, l) || n(l = t, e)
      }),
      l = r(s());
    return o
  }, e.getAffectedElements = O, e.getComputedStyle = function (t) {
    var e = t.element,
      r = t.actionItem;
    if (!b.IS_BROWSER_ENV) return {};
    switch (r.actionTypeId) {
      case _.STYLE_SIZE:
      case _.STYLE_BACKGROUND_COLOR:
      case _.STYLE_BORDER:
      case _.STYLE_TEXT_COLOR:
      case _.GENERAL_DISPLAY:
        return window.getComputedStyle(e);
      default:
        return {}
    }
  }, e.getInstanceOrigin = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = arguments.length > 3 ? arguments[3] : void 0,
      i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
      a = n.actionTypeId,
      s = n.config;
    if ((0, v.isPluginType)(a)) return (0, v.getPluginOrigin)(a)(e[a]);
    switch (a) {
      case _.TRANSFORM_MOVE:
      case _.TRANSFORM_SCALE:
      case _.TRANSFORM_ROTATE:
      case _.TRANSFORM_SKEW:
        return e[a] || k[a];
      case _.STYLE_FILTER:
        return M(e[a], n.config.filters);
      case _.STYLE_OPACITY:
        return {
          value: (0, c.default)(parseFloat(i(t, g.OPACITY)), 1)
        };
      case _.STYLE_SIZE:
        var o, l, h = i(t, g.WIDTH),
          u = i(t, g.HEIGHT);
        return o = s.widthUnit === g.AUTO ? D.test(h) ? parseFloat(h) : parseFloat(r.width) : (0, c.default)(parseFloat(h), parseFloat(r.width)), l = s.heightUnit === g.AUTO ? D.test(u) ? parseFloat(u) : parseFloat(r.height) : (0, c.default)(parseFloat(u), parseFloat(r.height)), {
          widthValue: o,
          heightValue: l
        };
      case _.STYLE_BACKGROUND_COLOR:
      case _.STYLE_BORDER:
      case _.STYLE_TEXT_COLOR:
        return function (t) {
          var e = t.element,
            r = t.actionTypeId,
            n = t.computedStyle,
            i = t.getStyle,
            a = S[r],
            s = i(e, a),
            o = G.test(s) ? s : n[a],
            l = function (t, e) {
              var r = t.exec(e);
              return r ? r[1] : ""
            }(B, o).split(g.COMMA_DELIMITER);
          return {
            rValue: (0, c.default)(parseInt(l[0], 10), 255),
            gValue: (0, c.default)(parseInt(l[1], 10), 255),
            bValue: (0, c.default)(parseInt(l[2], 10), 255),
            aValue: (0, c.default)(parseFloat(l[3]), 1)
          }
        }({
          element: t,
          actionTypeId: a,
          computedStyle: r,
          getStyle: i
        });
      case _.GENERAL_DISPLAY:
        return {
          value: (0, c.default)(i(t, g.DISPLAY), r.display)
        };
      case _.OBJECT_VALUE:
        return e[a] || {
          value: 0
        };
      default:
        return
    }
  }, e.getDestinationValues = function (t) {
    var e = t.element,
      r = t.actionItem,
      n = t.elementApi,
      i = r.actionTypeId;
    if ((0, v.isPluginType)(i)) return (0, v.getPluginDestination)(i)(r.config);
    switch (i) {
      case _.TRANSFORM_MOVE:
      case _.TRANSFORM_SCALE:
      case _.TRANSFORM_ROTATE:
      case _.TRANSFORM_SKEW:
        var a = r.config,
          s = a.xValue,
          o = a.yValue,
          l = a.zValue;
        return {
          xValue: s,
          yValue: o,
          zValue: l
        };
      case _.STYLE_SIZE:
        var h = n.getStyle,
          c = n.setStyle,
          u = n.getProperty,
          f = r.config,
          p = f.widthUnit,
          d = f.heightUnit,
          m = r.config,
          y = m.widthValue,
          E = m.heightValue;
        if (!b.IS_BROWSER_ENV) return {
          widthValue: y,
          heightValue: E
        };
        if (p === g.AUTO) {
          var T = h(e, g.WIDTH);
          c(e, g.WIDTH, ""), y = u(e, "offsetWidth"), c(e, g.WIDTH, T)
        }
        if (d === g.AUTO) {
          var S = h(e, g.HEIGHT);
          c(e, g.HEIGHT, ""), E = u(e, "offsetHeight"), c(e, g.HEIGHT, S)
        }
        return {
          widthValue: y,
          heightValue: E
        };
      case _.STYLE_BACKGROUND_COLOR:
      case _.STYLE_BORDER:
      case _.STYLE_TEXT_COLOR:
        var I = r.config,
          A = I.rValue,
          x = I.gValue,
          C = I.bValue,
          P = I.aValue;
        return {
          rValue: A,
          gValue: x,
          bValue: C,
          aValue: P
        };
      case _.STYLE_FILTER:
        return r.config.filters.reduce(R, {});
      default:
        var w = r.config.value;
        return {
          value: w
        }
    }
  }, e.getRenderType = F, e.getStyleProp = function (t, e) {
    return t === g.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null
  }, e.renderHTMLElement = function (t, e, r, n, i, a, s, o, l) {
    switch (o) {
      case g.RENDER_TRANSFORM:
        return function (t, e, r, n, i) {
          var a = V.map(function (t) {
              var r = k[t],
                n = e[t] || {},
                i = n.xValue,
                a = void 0 === i ? r.xValue : i,
                s = n.yValue,
                o = void 0 === s ? r.yValue : s,
                l = n.zValue,
                h = void 0 === l ? r.zValue : l,
                c = n.xUnit,
                u = void 0 === c ? "" : c,
                f = n.yUnit,
                p = void 0 === f ? "" : f,
                d = n.zUnit,
                m = void 0 === d ? "" : d;
              switch (t) {
                case _.TRANSFORM_MOVE:
                  return "".concat(g.TRANSLATE_3D, "(").concat(a).concat(u, ", ").concat(o).concat(p, ", ").concat(h).concat(m, ")");
                case _.TRANSFORM_SCALE:
                  return "".concat(g.SCALE_3D, "(").concat(a).concat(u, ", ").concat(o).concat(p, ", ").concat(h).concat(m, ")");
                case _.TRANSFORM_ROTATE:
                  return "".concat(g.ROTATE_X, "(").concat(a).concat(u, ") ").concat(g.ROTATE_Y, "(").concat(o).concat(p, ") ").concat(g.ROTATE_Z, "(").concat(h).concat(m, ")");
                case _.TRANSFORM_SKEW:
                  return "".concat(g.SKEW, "(").concat(a).concat(u, ", ").concat(o).concat(p, ")");
                default:
                  return ""
              }
            }).join(" "),
            s = i.setStyle;
          j(t, b.TRANSFORM_PREFIXED, i), s(t, b.TRANSFORM_PREFIXED, a), o = n, l = r, h = o.actionTypeId, c = l.xValue, u = l.yValue, f = l.zValue, (h === _.TRANSFORM_MOVE && void 0 !== f || h === _.TRANSFORM_SCALE && void 0 !== f || h === _.TRANSFORM_ROTATE && (void 0 !== c || void 0 !== u)) && s(t, b.TRANSFORM_STYLE_PREFIXED, g.PRESERVE_3D);
          var o, l, h, c, u, f
        }(t, e, r, i, s);
      case g.RENDER_STYLE:
        return function (t, e, r, n, i, a) {
          var s = a.setStyle,
            o = n.actionTypeId,
            l = n.config;
          switch (o) {
            case _.STYLE_SIZE:
              var h = n.config,
                c = h.widthUnit,
                f = void 0 === c ? "" : c,
                p = h.heightUnit,
                d = void 0 === p ? "" : p,
                m = r.widthValue,
                y = r.heightValue;
              void 0 !== m && (f === g.AUTO && (f = "px"), j(t, g.WIDTH, a), s(t, g.WIDTH, m + f)), void 0 !== y && (d === g.AUTO && (d = "px"), j(t, g.HEIGHT, a), s(t, g.HEIGHT, y + d));
              break;
            case _.STYLE_FILTER:
              ! function (t, e, r, n) {
                var i = (0, u.default)(e, function (t, e, n) {
                    return "".concat(t, " ").concat(n, "(").concat(e).concat(N(n, r), ")")
                  }, ""),
                  a = n.setStyle;
                j(t, g.FILTER, n), a(t, g.FILTER, i)
              }(t, r, l, a);
              break;
            case _.STYLE_BACKGROUND_COLOR:
            case _.STYLE_BORDER:
            case _.STYLE_TEXT_COLOR:
              var v = S[o],
                E = Math.round(r.rValue),
                b = Math.round(r.gValue),
                T = Math.round(r.bValue),
                I = r.aValue;
              j(t, v, a), s(t, v, I >= 1 ? "rgb(".concat(E, ",").concat(b, ",").concat(T, ")") : "rgba(".concat(E, ",").concat(b, ",").concat(T, ",").concat(I, ")"));
              break;
            default:
              var A = l.unit,
                x = void 0 === A ? "" : A;
              j(t, i, a), s(t, i, r.value + x)
          }
        }(t, 0, r, i, a, s);
      case g.RENDER_GENERAL:
        return function (t, e, r) {
          var n = r.setStyle;
          switch (e.actionTypeId) {
            case _.GENERAL_DISPLAY:
              var i = e.config.value;
              return void(i === g.FLEX && b.IS_BROWSER_ENV ? n(t, g.DISPLAY, b.FLEX_PREFIXED) : n(t, g.DISPLAY, i))
          }
        }(t, i, s);
      case g.RENDER_PLUGIN:
        var h = i.actionTypeId;
        if ((0, v.isPluginType)(h)) return (0, v.renderPlugin)(h)(l, e, i)
    }
  }, e.clearAllStyles = function (t) {
    var e = t.store,
      r = t.elementApi,
      n = e.getState().ixData,
      i = n.events,
      a = void 0 === i ? {} : i,
      s = n.actionLists,
      o = void 0 === s ? {} : s;
    Object.keys(a).forEach(function (t) {
      var e = a[t],
        n = e.action.config,
        i = n.actionListId,
        s = o[i];
      s && H({
        actionList: s,
        event: e,
        elementApi: r
      })
    }), Object.keys(o).forEach(function (t) {
      H({
        actionList: o[t],
        elementApi: r
      })
    })
  }, e.cleanupHTMLElement = function (t, e, r) {
    var n = r.setStyle,
      i = r.getStyle,
      a = e.actionTypeId;
    if (a === _.STYLE_SIZE) {
      var s = e.config;
      s.widthUnit === g.AUTO && n(t, g.WIDTH, ""), s.heightUnit === g.AUTO && n(t, g.HEIGHT, "")
    }
    i(t, g.WILL_CHANGE) && U({
      effect: z,
      actionTypeId: a,
      elementApi: r
    })(t)
  }, e.getMaxDurationItemIndex = Y, e.getActionListProgress = function (t, e) {
    var r = t.actionItemGroups,
      n = t.useFirstGroupAsInitialState,
      i = e.actionItem,
      a = e.verboseTimeElapsed,
      s = void 0 === a ? 0 : a,
      o = 0,
      l = 0;
    return r.forEach(function (t, e) {
      if (!n || 0 !== e) {
        var r = t.actionItems,
          a = r[Y(r)],
          h = a.config,
          c = a.actionTypeId;
        i.id === a.id && (l = o + s);
        var u = F(c) === g.RENDER_GENERAL ? 0 : h.duration;
        o += h.delay + u
      }
    }), o > 0 ? (0, y.optimizeFloat)(l / o) : 0
  }, e.reduceListToGroup = function (t) {
    var e = t.actionList,
      r = t.actionItemId,
      n = t.rawData,
      i = e.actionItemGroups,
      a = e.continuousParameterGroups,
      s = [],
      o = function (t) {
        return s.push((0, d.mergeIn)(t, ["config"], {
          delay: 0,
          duration: 0
        })), t.id === r
      };
    return i && i.some(function (t) {
      return t.actionItems.some(o)
    }), a && a.some(function (t) {
      return t.continuousActionGroups.some(function (t) {
        return t.actionItems.some(o)
      })
    }), (0, d.setIn)(n, ["actionLists"], (0, l.default)({}, e.id, {
      id: e.id,
      actionItemGroups: [{
        actionItems: s
      }]
    }))
  }, e.shouldNamespaceEventParameter = function (t, e) {
    var r = e.basedOn;
    return t === E.SCROLLING_IN_VIEW && (r === E.ELEMENT || null == r) || t === E.MOUSE_MOVE && r === E.ELEMENT
  }, e.getNamespacedParameterId = function (t, e) {
    return t + g.COLON_DELIMITER + e
  }, e.shouldAllowMediaQuery = function (t, e) {
    if (null == e) return !0;
    return -1 !== t.indexOf(e)
  }, e.mediaQueriesEqual = function (t, e) {
    return (0, m.default)(t && t.sort(), e && e.sort())
  }, e.stringifyTarget = function (t) {
    if ("string" == typeof t) return t;
    var e = t.id,
      r = void 0 === e ? "" : e,
      n = t.selector,
      i = void 0 === n ? "" : n,
      a = t.useEventTarget,
      s = void 0 === a ? "" : a;
    return r + g.BAR_DELIMITER + i + g.BAR_DELIMITER + s
  }, e.getItemConfigByKey = void 0;
  var c = h(r(314)),
    u = h(r(315)),
    f = h(r(321)),
    p = h(r(47)),
    d = r(38),
    m = h(r(148)),
    y = r(141),
    v = r(145),
    g = r(87),
    E = r(144),
    _ = r(86),
    b = r(85),
    T = function (t) {
      return t.trim()
    },
    S = Object.freeze((n = {}, (0, l.default)(n, _.STYLE_BACKGROUND_COLOR, g.BACKGROUND_COLOR), (0, l.default)(n, _.STYLE_BORDER, g.BORDER_COLOR), (0, l.default)(n, _.STYLE_TEXT_COLOR, g.COLOR), n)),
    I = Object.freeze((i = {}, (0, l.default)(i, b.TRANSFORM_PREFIXED, g.TRANSFORM), (0, l.default)(i, g.BACKGROUND_COLOR, g.BACKGROUND), (0, l.default)(i, g.OPACITY, g.OPACITY), (0, l.default)(i, g.FILTER, g.FILTER), (0, l.default)(i, g.WIDTH, g.WIDTH), (0, l.default)(i, g.HEIGHT, g.HEIGHT), i)),
    A = {},
    x = 1;
  var C = 1;
  var P = function (t, e) {
    return t === e
  };

  function w(t) {
    var e = (0, o.default)(t);
    return "string" === e ? {
      id: t
    } : null != t && "object" === e ? {
      id: t.id,
      objectId: t.objectId,
      selector: t.selector,
      selectorGuids: t.selectorGuids,
      appliesTo: t.appliesTo,
      useEventTarget: t.useEventTarget
    } : {}
  }

  function O(t) {
    var e = t.config,
      r = t.event,
      n = t.eventTarget,
      i = t.elementRoot,
      a = t.elementApi;
    if (!a) throw new Error("IX2 missing elementApi");
    var s = a.getValidDocument,
      o = a.getQuerySelector,
      l = a.queryDocument,
      h = a.getChildElements,
      c = a.getSiblingElements,
      u = a.matchSelector,
      f = a.elementContains,
      d = a.isSiblingNode,
      m = e.target;
    if (!m) return [];
    var y = w(m),
      v = y.id,
      _ = y.objectId,
      T = y.selector,
      S = y.selectorGuids,
      I = y.appliesTo,
      x = y.useEventTarget;
    if (_) return [A[_] || (A[_] = {})];
    if (I === E.PAGE) {
      var C = s(v);
      return C ? [C] : []
    }
    var P, O, D, M = (0, p.default)(r, "action.config.affectedElements", {})[v || T] || {},
      R = Boolean(M.id || M.selector),
      F = r && o(w(r.target));
    if (R ? (P = M.limitAffectedElements, O = F, D = o(M)) : O = D = o({
        id: v,
        selector: T,
        selectorGuids: S
      }), r && x) {
      var k = n && (D || !0 === x) ? [n] : l(F);
      if (D) {
        if (x === g.PARENT) return l(D).filter(function (t) {
          return k.some(function (e) {
            return f(t, e)
          })
        });
        if (x === g.CHILDREN) return l(D).filter(function (t) {
          return k.some(function (e) {
            return f(e, t)
          })
        });
        if (x === g.SIBLINGS) return l(D).filter(function (t) {
          return k.some(function (e) {
            return d(e, t)
          })
        })
      }
      return k
    }
    return null == O || null == D ? [] : b.IS_BROWSER_ENV && i ? l(D).filter(function (t) {
      return i.contains(t)
    }) : P === g.CHILDREN ? l(O, D) : P === g.IMMEDIATE_CHILDREN ? h(l(O)).filter(u(D)) : P === g.SIBLINGS ? c(l(O)).filter(u(D)) : l(D)
  }
  var D = /px/,
    M = function (t, e) {
      return e.reduce(function (t, e) {
        return null == t[e.type] && (t[e.type] = L[e.type]), t
      }, t || {})
    };
  var R = function (t, e) {
    return e && (t[e.type] = e.value || 0), t
  };

  function F(t) {
    return /^TRANSFORM_/.test(t) ? g.RENDER_TRANSFORM : /^STYLE_/.test(t) ? g.RENDER_STYLE : /^GENERAL_/.test(t) ? g.RENDER_GENERAL : /^PLUGIN_/.test(t) ? g.RENDER_PLUGIN : void 0
  }
  e.getItemConfigByKey = function (t, e, r) {
    if ((0, v.isPluginType)(t)) return (0, v.getPluginConfig)(t)(r, e);
    switch (t) {
      case _.STYLE_FILTER:
        var n = (0, f.default)(r.filters, function (t) {
          return t.type === e
        });
        return n ? n.value : 0;
      default:
        return r[e]
    }
  };
  var k = (a = {}, (0, l.default)(a, _.TRANSFORM_MOVE, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), (0, l.default)(a, _.TRANSFORM_SCALE, Object.freeze({
      xValue: 1,
      yValue: 1,
      zValue: 1
    })), (0, l.default)(a, _.TRANSFORM_ROTATE, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), (0, l.default)(a, _.TRANSFORM_SKEW, Object.freeze({
      xValue: 0,
      yValue: 0
    })), a),
    L = Object.freeze({
      blur: 0,
      "hue-rotate": 0,
      invert: 0,
      grayscale: 0,
      saturate: 100,
      sepia: 0,
      contrast: 100,
      brightness: 100
    }),
    N = function (t, e) {
      var r = (0, f.default)(e.filters, function (e) {
        return e.type === t
      });
      if (r && r.unit) return r.unit;
      switch (t) {
        case "blur":
          return "px";
        case "hue-rotate":
          return "deg";
        default:
          return "%"
      }
    },
    V = Object.keys(k);
  var G = /^rgb/,
    B = RegExp("rgba?".concat("\\(([^)]+)\\)"));

  function j(t, e, r) {
    if (b.IS_BROWSER_ENV) {
      var n = I[e];
      if (n) {
        var i = r.getStyle,
          a = r.setStyle,
          s = i(t, g.WILL_CHANGE);
        if (s) {
          var o = s.split(g.COMMA_DELIMITER).map(T); - 1 === o.indexOf(n) && a(t, g.WILL_CHANGE, o.concat(n).join(g.COMMA_DELIMITER))
        } else a(t, g.WILL_CHANGE, n)
      }
    }
  }

  function z(t, e, r) {
    if (b.IS_BROWSER_ENV) {
      var n = I[e];
      if (n) {
        var i = r.getStyle,
          a = r.setStyle,
          s = i(t, g.WILL_CHANGE);
        s && -1 !== s.indexOf(n) && a(t, g.WILL_CHANGE, s.split(g.COMMA_DELIMITER).map(T).filter(function (t) {
          return t !== n
        }).join(g.COMMA_DELIMITER))
      }
    }
  }

  function H(t) {
    var e = t.actionList,
      r = void 0 === e ? {} : e,
      n = t.event,
      i = t.elementApi,
      a = r.actionItemGroups,
      s = r.continuousParameterGroups;
    a && a.forEach(function (t) {
      X({
        actionGroup: t,
        event: n,
        elementApi: i
      })
    }), s && s.forEach(function (t) {
      t.continuousActionGroups.forEach(function (t) {
        X({
          actionGroup: t,
          event: n,
          elementApi: i
        })
      })
    })
  }

  function X(t) {
    var e = t.actionGroup,
      r = t.event,
      n = t.elementApi;
    e.actionItems.forEach(function (t) {
      var e, i = t.actionTypeId,
        a = t.config;
      e = (0, v.isPluginType)(i) ? (0, v.clearPlugin)(i) : U({
        effect: W,
        actionTypeId: i,
        elementApi: n
      }), O({
        config: a,
        event: r,
        elementApi: n
      }).forEach(e)
    })
  }
  var U = function (t) {
    var e = t.effect,
      r = t.actionTypeId,
      n = t.elementApi;
    return function (t) {
      switch (r) {
        case _.TRANSFORM_MOVE:
        case _.TRANSFORM_SCALE:
        case _.TRANSFORM_ROTATE:
        case _.TRANSFORM_SKEW:
          e(t, b.TRANSFORM_PREFIXED, n);
          break;
        case _.STYLE_FILTER:
          e(t, g.FILTER, n);
          break;
        case _.STYLE_OPACITY:
          e(t, g.OPACITY, n);
          break;
        case _.STYLE_SIZE:
          e(t, g.WIDTH, n), e(t, g.HEIGHT, n);
          break;
        case _.STYLE_BACKGROUND_COLOR:
        case _.STYLE_BORDER:
        case _.STYLE_TEXT_COLOR:
          e(t, S[r], n);
          break;
        case _.GENERAL_DISPLAY:
          e(t, g.DISPLAY, n)
      }
    }
  };

  function W(t, e, r) {
    var n = r.setStyle;
    z(t, e, r), n(t, e, ""), e === b.TRANSFORM_PREFIXED && n(t, b.TRANSFORM_STYLE_PREFIXED, "")
  }

  function Y(t) {
    var e = 0,
      r = 0;
    return t.forEach(function (t, n) {
      var i = t.config,
        a = i.delay + i.duration;
      a >= e && (e = a, r = n)
    }), r
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t || t != t ? e : t
  }
}, function (t, e, r) {
  var n = r(316),
    i = r(146),
    a = r(18),
    s = r(320),
    o = r(2);
  t.exports = function (t, e, r) {
    var l = o(t) ? n : s,
      h = arguments.length < 3;
    return l(t, a(e, 4), r, h, i)
  }
}, function (t, e) {
  t.exports = function (t, e, r, n) {
    var i = -1,
      a = null == t ? 0 : t.length;
    for (n && a && (r = t[++i]); ++i < a;) r = e(r, t[i], i, t);
    return r
  }
}, function (t, e, r) {
  var n = r(318)();
  t.exports = n
}, function (t, e) {
  t.exports = function (t) {
    return function (e, r, n) {
      for (var i = -1, a = Object(e), s = n(e), o = s.length; o--;) {
        var l = s[t ? o : ++i];
        if (!1 === r(a[l], l, a)) break
      }
      return e
    }
  }
}, function (t, e, r) {
  var n = r(26);
  t.exports = function (t, e) {
    return function (r, i) {
      if (null == r) return r;
      if (!n(r)) return t(r, i);
      for (var a = r.length, s = e ? a : -1, o = Object(r);
        (e ? s-- : ++s < a) && !1 !== i(o[s], s, o););
      return r
    }
  }
}, function (t, e) {
  t.exports = function (t, e, r, n, i) {
    return i(t, function (t, i, a) {
      r = n ? (n = !1, t) : e(r, t, i, a)
    }), r
  }
}, function (t, e, r) {
  var n = r(138)(r(322));
  t.exports = n
}, function (t, e, r) {
  var n = r(94),
    i = r(18),
    a = r(69),
    s = Math.max,
    o = Math.min;
  t.exports = function (t, e, r) {
    var l = null == t ? 0 : t.length;
    if (!l) return -1;
    var h = l - 1;
    return void 0 !== r && (h = a(r), h = r < 0 ? s(l + h, 0) : o(h, l - 1)), n(t, i(e, 3), h, !0)
  }
}, function (t, e, r) {
  "use strict";
  var n = Object.prototype.hasOwnProperty;

  function i(t, e) {
    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
  }
  t.exports = function (t, e) {
    if (i(t, e)) return !0;
    if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
    var r = Object.keys(t),
      a = Object.keys(e);
    if (r.length !== a.length) return !1;
    for (var s = 0; s < r.length; s++)
      if (!n.call(e, r[s]) || !i(t[r[s]], e[r[s]])) return !1;
    return !0
  }
}, function (t, e, r) {
  "use strict";
  var n, i = r(1)(r(24)),
    a = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixRequest = void 0;
  var s = a(r(30)),
    o = r(10),
    l = r(38),
    h = o.IX2EngineActionTypes,
    c = h.IX2_PREVIEW_REQUESTED,
    u = h.IX2_PLAYBACK_REQUESTED,
    f = h.IX2_STOP_REQUESTED,
    p = h.IX2_CLEAR_REQUESTED,
    d = {
      preview: {},
      playback: {},
      stop: {},
      clear: {}
    },
    m = Object.create(null, (n = {}, (0, i.default)(n, c, {
      value: "preview"
    }), (0, i.default)(n, u, {
      value: "playback"
    }), (0, i.default)(n, f, {
      value: "stop"
    }), (0, i.default)(n, p, {
      value: "clear"
    }), n));
  e.ixRequest = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
      e = arguments.length > 1 ? arguments[1] : void 0;
    if (e.type in m) {
      var r = [m[e.type]];
      return (0, l.setIn)(t, [r], (0, s.default)({}, e.payload))
    }
    return t
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixSession = void 0;
  var n = r(10),
    i = r(38),
    a = n.IX2EngineActionTypes,
    s = a.IX2_SESSION_INITIALIZED,
    o = a.IX2_SESSION_STARTED,
    l = a.IX2_TEST_FRAME_RENDERED,
    h = a.IX2_SESSION_STOPPED,
    c = a.IX2_EVENT_LISTENER_ADDED,
    u = a.IX2_EVENT_STATE_CHANGED,
    f = a.IX2_ANIMATION_FRAME_CHANGED,
    p = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    d = a.IX2_VIEWPORT_WIDTH_CHANGED,
    m = a.IX2_MEDIA_QUERIES_DEFINED,
    y = {
      active: !1,
      tick: 0,
      eventListeners: [],
      eventState: {},
      playbackState: {},
      viewportWidth: 0,
      mediaQueryKey: null,
      hasBoundaryNodes: !1,
      hasDefinedMediaQueries: !1
    };
  e.ixSession = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case s:
        var r = e.payload.hasBoundaryNodes;
        return (0, i.set)(t, "hasBoundaryNodes", r);
      case o:
        return (0, i.set)(t, "active", !0);
      case l:
        var n = e.payload.step,
          a = void 0 === n ? 20 : n;
        return (0, i.set)(t, "tick", t.tick + a);
      case h:
        return y;
      case f:
        var v = e.payload.now;
        return (0, i.set)(t, "tick", v);
      case c:
        var g = (0, i.addLast)(t.eventListeners, e.payload);
        return (0, i.set)(t, "eventListeners", g);
      case u:
        var E = e.payload,
          _ = E.stateKey,
          b = E.newState;
        return (0, i.setIn)(t, ["eventState", _], b);
      case p:
        var T = e.payload,
          S = T.actionListId,
          I = T.isPlaying;
        return (0, i.setIn)(t, ["playbackState", S], I);
      case d:
        for (var A = e.payload, x = A.width, C = A.mediaQueries, P = C.length, w = null, O = 0; O < P; O++) {
          var D = C[O],
            M = D.key,
            R = D.min,
            F = D.max;
          if (x >= R && x <= F) {
            w = M;
            break
          }
        }
        return (0, i.merge)(t, {
          viewportWidth: x,
          mediaQueryKey: w
        });
      case m:
        return (0, i.set)(t, "hasDefinedMediaQueries", !0);
      default:
        return t
    }
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixInstances = void 0;
  var n = r(10),
    i = r(38),
    a = n.IX2EngineActionTypes,
    s = a.IX2_RAW_DATA_IMPORTED,
    o = a.IX2_SESSION_STOPPED,
    l = a.IX2_INSTANCE_ADDED,
    h = a.IX2_INSTANCE_STARTED,
    c = a.IX2_INSTANCE_REMOVED,
    u = a.IX2_ANIMATION_FRAME_CHANGED,
    f = n.IX2EasingUtils,
    p = f.optimizeFloat,
    d = f.applyEasing,
    m = f.createBezierEasing,
    y = n.IX2EngineConstants.RENDER_GENERAL,
    v = n.IX2VanillaUtils,
    g = v.getItemConfigByKey,
    E = v.getRenderType,
    _ = v.getStyleProp,
    b = function (t, e) {
      var r = t.position,
        n = t.parameterId,
        a = t.actionGroups,
        s = t.destinationKeys,
        o = t.smoothing,
        l = t.restingValue,
        h = t.actionTypeId,
        c = t.customEasingFn,
        u = e.payload.parameters,
        f = Math.max(1 - o, .01),
        m = u[n];
      null == m && (f = 1, m = l);
      var y, v, E, _, b = Math.max(m, 0) || 0,
        T = p(b - r),
        S = p(r + T * f),
        I = 100 * S;
      if (S === r && t.current) return t;
      for (var A = 0, x = a.length; A < x; A++) {
        var C = a[A],
          P = C.keyframe,
          w = C.actionItems;
        if (0 === A && (y = w[0]), I >= P) {
          y = w[0];
          var O = a[A + 1],
            D = O && I !== P;
          v = D ? O.actionItems[0] : null, D && (E = P / 100, _ = (O.keyframe - P) / 100)
        }
      }
      var M = {};
      if (y && !v)
        for (var R = 0, F = s.length; R < F; R++) {
          var k = s[R];
          M[k] = g(h, k, y.config)
        } else if (y && v && void 0 !== E && void 0 !== _)
          for (var L = (S - E) / _, N = y.config.easing, V = d(N, L, c), G = 0, B = s.length; G < B; G++) {
            var j = s[G],
              z = g(h, j, y.config),
              H = (g(h, j, v.config) - z) * V + z;
            M[j] = H
          }
      return (0, i.merge)(t, {
        position: S,
        current: M
      })
    },
    T = function (t, e) {
      var r = t,
        n = r.active,
        a = r.origin,
        s = r.start,
        o = r.immediate,
        l = r.renderType,
        h = r.verbose,
        c = r.actionItem,
        u = r.destination,
        f = r.destinationKeys,
        m = r.pluginDuration,
        v = r.instanceDelay,
        g = r.customEasingFn,
        E = c.config.easing,
        _ = c.config,
        b = _.duration,
        T = _.delay;
      null != m && (b = m), T = null != v ? v : T, l === y ? b = 0 : o && (b = T = 0);
      var S = e.payload.now;
      if (n && a) {
        var I = S - (s + T);
        if (h) {
          var A = S - s,
            x = b + T,
            C = p(Math.min(Math.max(0, A / x), 1));
          t = (0, i.set)(t, "verboseTimeElapsed", x * C)
        }
        if (I < 0) return t;
        var P = p(Math.min(Math.max(0, I / b), 1)),
          w = d(E, P, g),
          O = {},
          D = null;
        return f.length && (D = f.reduce(function (t, e) {
          var r = u[e],
            n = parseFloat(a[e]) || 0,
            i = (parseFloat(r) - n) * w + n;
          return t[e] = i, t
        }, {})), O.current = D, O.position = P, 1 === P && (O.active = !1, O.complete = !0), (0, i.merge)(t, O)
      }
      return t
    };
  e.ixInstances = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case s:
        return e.payload.ixInstances || Object.freeze({});
      case o:
        return Object.freeze({});
      case l:
        var r = e.payload,
          n = r.instanceId,
          a = r.elementId,
          f = r.actionItem,
          p = r.eventId,
          d = r.eventTarget,
          y = r.eventStateKey,
          v = r.actionListId,
          g = r.groupIndex,
          S = r.isCarrier,
          I = r.origin,
          A = r.destination,
          x = r.immediate,
          C = r.verbose,
          P = r.continuous,
          w = r.parameterId,
          O = r.actionGroups,
          D = r.smoothing,
          M = r.restingValue,
          R = r.pluginInstance,
          F = r.pluginDuration,
          k = r.instanceDelay,
          L = f.actionTypeId,
          N = E(L),
          V = _(N, L),
          G = Object.keys(A).filter(function (t) {
            return null != A[t]
          }),
          B = f.config.easing;
        return (0, i.set)(t, n, {
          id: n,
          elementId: a,
          active: !1,
          position: 0,
          start: 0,
          origin: I,
          destination: A,
          destinationKeys: G,
          immediate: x,
          verbose: C,
          current: null,
          actionItem: f,
          actionTypeId: L,
          eventId: p,
          eventTarget: d,
          eventStateKey: y,
          actionListId: v,
          groupIndex: g,
          renderType: N,
          isCarrier: S,
          styleProp: V,
          continuous: P,
          parameterId: w,
          actionGroups: O,
          smoothing: D,
          restingValue: M,
          pluginInstance: R,
          pluginDuration: F,
          instanceDelay: k,
          customEasingFn: Array.isArray(B) && 4 === B.length ? m(B) : void 0
        });
      case h:
        var j = e.payload,
          z = j.instanceId,
          H = j.time;
        return (0, i.mergeIn)(t, [z], {
          active: !0,
          complete: !1,
          start: H
        });
      case c:
        var X = e.payload.instanceId;
        if (!t[X]) return t;
        for (var U = {}, W = Object.keys(t), Y = W.length, q = 0; q < Y; q++) {
          var K = W[q];
          K !== X && (U[K] = t[K])
        }
        return U;
      case u:
        for (var Q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
          var tt = $[J],
            et = t[tt],
            rt = et.continuous ? b : T;
          Q = (0, i.set)(Q, tt, rt(et, e))
        }
        return Q;
      default:
        return t
    }
  }
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixParameters = void 0;
  var n = r(10).IX2EngineActionTypes,
    i = n.IX2_RAW_DATA_IMPORTED,
    a = n.IX2_SESSION_STOPPED,
    s = n.IX2_PARAMETER_CHANGED;
  e.ixParameters = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case i:
        return e.payload.ixParameters || {};
      case a:
        return {};
      case s:
        var r = e.payload,
          n = r.key,
          o = r.value;
        return t[n] = o, t;
      default:
        return t
    }
  }
}, function (t, e, r) {
  var n = r(329);
  t.exports = function (t, e) {
    if (null == t) return {};
    var r, i, a = n(t, e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      for (i = 0; i < s.length; i++) r = s[i], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
    }
    return a
  }
}, function (t, e) {
  t.exports = function (t, e) {
    if (null == t) return {};
    var r, n, i = {},
      a = Object.keys(t);
    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
    return i
  }
}, function (t, e, r) {
  var n = r(63),
    i = r(65),
    a = r(26),
    s = r(331),
    o = r(332),
    l = "[object Map]",
    h = "[object Set]";
  t.exports = function (t) {
    if (null == t) return 0;
    if (a(t)) return s(t) ? o(t) : t.length;
    var e = i(t);
    return e == l || e == h ? t.size : n(t).length
  }
}, function (t, e, r) {
  var n = r(25),
    i = r(2),
    a = r(20),
    s = "[object String]";
  t.exports = function (t) {
    return "string" == typeof t || !i(t) && a(t) && n(t) == s
  }
}, function (t, e, r) {
  var n = r(333),
    i = r(334),
    a = r(335);
  t.exports = function (t) {
    return i(t) ? a(t) : n(t)
  }
}, function (t, e, r) {
  var n = r(113)("length");
  t.exports = n
}, function (t, e) {
  var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  t.exports = function (t) {
    return r.test(t)
  }
}, function (t, e) {
  var r = "[\\ud800-\\udfff]",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    a = "[^\\ud800-\\udfff]",
    s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    l = "(?:" + n + "|" + i + ")" + "?",
    h = "[\\ufe0e\\ufe0f]?" + l + ("(?:\\u200d(?:" + [a, s, o].join("|") + ")[\\ufe0e\\ufe0f]?" + l + ")*"),
    c = "(?:" + [a + n + "?", n, s, o, r].join("|") + ")",
    u = RegExp(i + "(?=" + i + ")|" + c + h, "g");
  t.exports = function (t) {
    for (var e = u.lastIndex = 0; u.test(t);) ++e;
    return e
  }
}, function (t, e, r) {
  var n = r(18),
    i = r(337),
    a = r(338);
  t.exports = function (t, e) {
    return a(t, i(n(e)))
  }
}, function (t, e) {
  var r = "Expected a function";
  t.exports = function (t) {
    if ("function" != typeof t) throw new TypeError(r);
    return function () {
      var e = arguments;
      switch (e.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, e[0]);
        case 2:
          return !t.call(this, e[0], e[1]);
        case 3:
          return !t.call(this, e[0], e[1], e[2])
      }
      return !t.apply(this, e)
    }
  }
}, function (t, e, r) {
  var n = r(112),
    i = r(18),
    a = r(339),
    s = r(342);
  t.exports = function (t, e) {
    if (null == t) return {};
    var r = n(s(t), function (t) {
      return [t]
    });
    return e = i(e), a(t, r, function (t, r) {
      return e(t, r[0])
    })
  }
}, function (t, e, r) {
  var n = r(66),
    i = r(340),
    a = r(48);
  t.exports = function (t, e, r) {
    for (var s = -1, o = e.length, l = {}; ++s < o;) {
      var h = e[s],
        c = n(t, h);
      r(c, h) && i(l, a(h, t), c)
    }
    return l
  }
}, function (t, e, r) {
  var n = r(341),
    i = r(48),
    a = r(60),
    s = r(12),
    o = r(32);
  t.exports = function (t, e, r, l) {
    if (!s(t)) return t;
    for (var h = -1, c = (e = i(e, t)).length, u = c - 1, f = t; null != f && ++h < c;) {
      var p = o(e[h]),
        d = r;
      if (h != u) {
        var m = f[p];
        void 0 === (d = l ? l(m, p, f) : void 0) && (d = s(m) ? m : a(e[h + 1]) ? [] : {})
      }
      n(f, p, d), f = f[p]
    }
    return t
  }
}, function (t, e, r) {
  var n = r(150),
    i = r(55),
    a = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, r) {
    var s = t[e];
    a.call(t, e) && i(s, r) && (void 0 !== r || e in t) || n(t, e, r)
  }
}, function (t, e, r) {
  var n = r(101),
    i = r(343),
    a = r(345);
  t.exports = function (t) {
    return n(t, a, i)
  }
}, function (t, e, r) {
  var n = r(58),
    i = r(344),
    a = r(102),
    s = r(103),
    o = Object.getOwnPropertySymbols ? function (t) {
      for (var e = []; t;) n(e, a(t)), t = i(t);
      return e
    } : s;
  t.exports = o
}, function (t, e, r) {
  var n = r(106)(Object.getPrototypeOf, Object);
  t.exports = n
}, function (t, e, r) {
  var n = r(104),
    i = r(346),
    a = r(26);
  t.exports = function (t) {
    return a(t) ? n(t, !0) : i(t)
  }
}, function (t, e, r) {
  var n = r(12),
    i = r(64),
    a = r(347),
    s = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!n(t)) return a(t);
    var e = i(t),
      r = [];
    for (var o in t)("constructor" != o || !e && s.call(t, o)) && r.push(o);
    return r
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (null != t)
      for (var r in Object(t)) e.push(r);
    return e
  }
}, function (t, e, r) {
  var n = r(63),
    i = r(65),
    a = r(46),
    s = r(2),
    o = r(26),
    l = r(59),
    h = r(64),
    c = r(61),
    u = "[object Map]",
    f = "[object Set]",
    p = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (null == t) return !0;
    if (o(t) && (s(t) || "string" == typeof t || "function" == typeof t.splice || l(t) || c(t) || a(t))) return !t.length;
    var e = i(t);
    if (e == u || e == f) return !t.size;
    if (h(t)) return !n(t).length;
    for (var r in t)
      if (p.call(t, r)) return !1;
    return !0
  }
}, function (t, e, r) {
  var n = r(150),
    i = r(147),
    a = r(18);
  t.exports = function (t, e) {
    var r = {};
    return e = a(e, 3), i(t, function (t, i, a) {
      n(r, i, e(t, i, a))
    }), r
  }
}, function (t, e, r) {
  var n = r(351),
    i = r(146),
    a = r(352),
    s = r(2);
  t.exports = function (t, e) {
    return (s(t) ? n : i)(t, a(e))
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
    return t
  }
}, function (t, e, r) {
  var n = r(68);
  t.exports = function (t) {
    return "function" == typeof t ? t : n
  }
}, function (t, e, r) {
  var n = r(152),
    i = r(111),
    a = r(69),
    s = r(110);
  t.exports = function (t, e, r) {
    t = s(t), e = i(e);
    var o = t.length,
      l = r = void 0 === r ? o : n(a(r), 0, o);
    return (r -= e.length) >= 0 && t.slice(r, l) == e
  }
}, function (t, e, r) {
  var n = r(355),
    i = r(12),
    a = "Expected a function";
  t.exports = function (t, e, r) {
    var s = !0,
      o = !0;
    if ("function" != typeof t) throw new TypeError(a);
    return i(r) && (s = "leading" in r ? !!r.leading : s, o = "trailing" in r ? !!r.trailing : o), n(t, e, {
      leading: s,
      maxWait: e,
      trailing: o
    })
  }
}, function (t, e, r) {
  var n = r(12),
    i = r(356),
    a = r(70),
    s = "Expected a function",
    o = Math.max,
    l = Math.min;
  t.exports = function (t, e, r) {
    var h, c, u, f, p, d, m = 0,
      y = !1,
      v = !1,
      g = !0;
    if ("function" != typeof t) throw new TypeError(s);

    function E(e) {
      var r = h,
        n = c;
      return h = c = void 0, m = e, f = t.apply(n, r)
    }

    function _(t) {
      var r = t - d;
      return void 0 === d || r >= e || r < 0 || v && t - m >= u
    }

    function b() {
      var t = i();
      if (_(t)) return T(t);
      p = setTimeout(b, function (t) {
        var r = e - (t - d);
        return v ? l(r, u - (t - m)) : r
      }(t))
    }

    function T(t) {
      return p = void 0, g && h ? E(t) : (h = c = void 0, f)
    }

    function S() {
      var t = i(),
        r = _(t);
      if (h = arguments, c = this, d = t, r) {
        if (void 0 === p) return function (t) {
          return m = t, p = setTimeout(b, e), y ? E(t) : f
        }(d);
        if (v) return clearTimeout(p), p = setTimeout(b, e), E(d)
      }
      return void 0 === p && (p = setTimeout(b, e)), f
    }
    return e = a(e) || 0, n(r) && (y = !!r.leading, u = (v = "maxWait" in r) ? o(a(r.maxWait) || 0, e) : u, g = "trailing" in r ? !!r.trailing : g), S.cancel = function () {
      void 0 !== p && clearTimeout(p), m = 0, h = d = c = p = void 0
    }, S.flush = function () {
      return void 0 === p ? f : T(i())
    }, S
  }
}, function (t, e, r) {
  var n = r(7);
  t.exports = function () {
    return n.Date.now()
  }
}, function (t, e, r) {
  "use strict";
  var n = r(1)(r(39));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setStyle = function (t, e, r) {
    t.style[e] = r
  }, e.getStyle = function (t, e) {
    return t.style[e]
  }, e.getProperty = function (t, e) {
    return t[e]
  }, e.matchSelector = function (t) {
    return function (e) {
      return e[a](t)
    }
  }, e.getQuerySelector = function (t) {
    var e = t.id,
      r = t.selector;
    if (e) {
      var n = e;
      if (-1 !== e.indexOf(o)) {
        var i = e.split(o),
          a = i[0];
        if (n = i[1], a !== document.documentElement.getAttribute(c)) return null
      }
      return '[data-w-id^="'.concat(n, '"]')
    }
    return r
  }, e.getValidDocument = function (t) {
    if (null == t || t === document.documentElement.getAttribute(c)) return document;
    return null
  }, e.queryDocument = function (t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
  }, e.elementContains = function (t, e) {
    return t.contains(e)
  }, e.isSiblingNode = function (t, e) {
    return t !== e && t.parentNode === e.parentNode
  }, e.getChildElements = function (t) {
    for (var e = [], r = 0, n = (t || []).length; r < n; r++) {
      var i = t[r].children,
        a = i.length;
      if (a)
        for (var s = 0; s < a; s++) e.push(i[s])
    }
    return e
  }, e.getSiblingElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], r = [], n = 0, i = t.length; n < i; n++) {
      var a = t[n].parentNode;
      if (a && a.children && a.children.length && -1 === r.indexOf(a)) {
        r.push(a);
        for (var s = a.firstElementChild; null != s;) - 1 === t.indexOf(s) && e.push(s), s = s.nextElementSibling
      }
    }
    return e
  }, e.getRefType = function (t) {
    if (null != t && "object" == (0, n.default)(t)) return t instanceof Element ? l : h;
    return null
  }, e.getClosestElement = void 0;
  var i = r(10),
    a = i.IX2BrowserSupport.ELEMENT_MATCHES,
    s = i.IX2EngineConstants,
    o = s.IX2_ID_DELIMITER,
    l = s.HTML_ELEMENT,
    h = s.PLAIN_OBJECT,
    c = s.WF_PAGE;
  var u = Element.prototype.closest ? function (t, e) {
    return document.documentElement.contains(t) ? t.closest(e) : null
  } : function (t, e) {
    if (!document.documentElement.contains(t)) return null;
    var r = t;
    do {
      if (r[a] && r[a](e)) return r;
      r = r.parentNode
    } while (null != r);
    return null
  };
  e.getClosestElement = u
}, function (t, e, r) {
  "use strict";
  var n, i = r(1),
    a = i(r(24)),
    s = i(r(39)),
    o = r(1);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var l, h, c, u = o(r(30)),
    f = o(r(359)),
    p = o(r(47)),
    d = o(r(378)),
    m = r(149),
    y = r(88),
    v = r(10),
    g = v.IX2EngineEventTypes,
    E = g.MOUSE_CLICK,
    _ = g.MOUSE_SECOND_CLICK,
    b = g.MOUSE_DOWN,
    T = g.MOUSE_UP,
    S = g.MOUSE_OVER,
    I = g.MOUSE_OUT,
    A = g.DROPDOWN_CLOSE,
    x = g.DROPDOWN_OPEN,
    C = g.SLIDER_ACTIVE,
    P = g.SLIDER_INACTIVE,
    w = g.TAB_ACTIVE,
    O = g.TAB_INACTIVE,
    D = g.NAVBAR_CLOSE,
    M = g.NAVBAR_OPEN,
    R = g.MOUSE_MOVE,
    F = g.PAGE_SCROLL_DOWN,
    k = g.SCROLL_INTO_VIEW,
    L = g.COMPONENT_ACTIVE,
    N = g.COMPONENT_INACTIVE,
    V = g.SCROLL_OUT_OF_VIEW,
    G = g.PAGE_SCROLL_UP,
    B = g.SCROLLING_IN_VIEW,
    j = g.PAGE_FINISH,
    z = g.ECOMMERCE_CART_CLOSE,
    H = g.ECOMMERCE_CART_OPEN,
    X = g.PAGE_START,
    U = g.PAGE_SCROLL,
    W = g.ELEMENT,
    Y = g.VIEWPORT,
    q = g.PAGE,
    K = v.IX2EngineConstants.COLON_DELIMITER,
    Q = v.IX2VanillaUtils.getNamespacedParameterId,
    $ = function (t) {
      return function (e) {
        return !("object" !== (0, s.default)(e) || !t(e)) || e
      }
    },
    Z = $(function (t) {
      return t.element === t.nativeEvent.target
    }),
    J = $(function (t) {
      var e = t.element,
        r = t.nativeEvent;
      return e.contains(r.target)
    }),
    tt = (0, f.default)([Z, J]),
    et = function (t, e) {
      if (e) {
        var r = t.getState().ixData.events[e];
        if (r && !lt[r.eventTypeId]) return r
      }
      return null
    },
    rt = function (t, e) {
      var r = t.store,
        n = t.event,
        i = t.element,
        a = t.eventStateKey,
        s = n.action,
        o = n.id,
        l = s.config,
        h = l.actionListId,
        c = l.autoStopEventId,
        u = et(r, c);
      return u && (0, m.stopActionGroup)({
        store: r,
        eventId: c,
        eventTarget: i,
        eventStateKey: c + K + a.split(K)[1],
        actionListId: (0, p.default)(u, "action.config.actionListId")
      }), (0, m.stopActionGroup)({
        store: r,
        eventId: o,
        eventTarget: i,
        eventStateKey: a,
        actionListId: h
      }), (0, m.startActionGroup)({
        store: r,
        eventId: o,
        eventTarget: i,
        eventStateKey: a,
        actionListId: h
      }), e
    },
    nt = function (t, e) {
      return function (r, n) {
        return !0 === t(r, n) ? e(r, n) : n
      }
    },
    it = {
      handler: nt(tt, rt)
    },
    at = (0, u.default)({}, it, {
      types: [L, N].join(" ")
    }),
    st = [{
      target: window,
      types: "resize orientationchange",
      throttle: !0
    }, {
      target: document,
      types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
      throttle: !0
    }],
    ot = {
      types: st
    },
    lt = {
      PAGE_START: X,
      PAGE_FINISH: j
    },
    ht = (l = void 0 !== window.pageXOffset, h = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
      return {
        scrollLeft: l ? window.pageXOffset : h.scrollLeft,
        scrollTop: l ? window.pageYOffset : h.scrollTop,
        stiffScrollTop: (0, d.default)(l ? window.pageYOffset : h.scrollTop, 0, h.scrollHeight - window.innerHeight),
        scrollWidth: h.scrollWidth,
        scrollHeight: h.scrollHeight,
        clientWidth: h.clientWidth,
        clientHeight: h.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
    }),
    ct = function (t) {
      var e = t.element,
        r = t.nativeEvent,
        n = r.type,
        i = r.target,
        a = r.relatedTarget,
        s = e.contains(i);
      if ("mouseover" === n && s) return !0;
      var o = e.contains(a);
      return !("mouseout" !== n || !s || !o)
    },
    ut = function (t) {
      var e, r, n = t.element,
        i = t.event.config,
        a = ht(),
        s = a.clientWidth,
        o = a.clientHeight,
        l = i.scrollOffsetValue,
        h = "PX" === i.scrollOffsetUnit ? l : o * (l || 0) / 100;
      return e = n.getBoundingClientRect(), r = {
        left: 0,
        top: h,
        right: s,
        bottom: o - h
      }, !(e.left > r.right || e.right < r.left || e.top > r.bottom || e.bottom < r.top)
    },
    ft = function (t) {
      return function (e, r) {
        var n = e.nativeEvent.type,
          i = -1 !== [L, N].indexOf(n) ? n === L : r.isActive,
          a = (0, u.default)({}, r, {
            isActive: i
          });
        return r && a.isActive === r.isActive ? a : t(e, a) || a
      }
    },
    pt = function (t) {
      return function (e, r) {
        var n = {
          elementHovered: ct(e)
        };
        return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && t(e, n) || n
      }
    },
    dt = function (t) {
      return function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = ht(),
          i = n.stiffScrollTop,
          a = n.scrollHeight,
          s = n.innerHeight,
          o = e.event,
          l = o.config,
          h = o.eventTypeId,
          c = l.scrollOffsetValue,
          f = "PX" === l.scrollOffsetUnit,
          p = a - s,
          d = Number((i / p).toFixed(2));
        if (r && r.percentTop === d) return r;
        var m, y, v = (f ? c : s * (c || 0) / 100) / p,
          g = 0;
        r && (m = d > r.percentTop, g = (y = r.scrollingDown !== m) ? d : r.anchorTop);
        var E = h === F ? d >= g + v : d <= g - v,
          _ = (0, u.default)({}, r, {
            percentTop: d,
            inBounds: E,
            anchorTop: g,
            scrollingDown: m
          });
        return r && E && (y || _.inBounds !== r.inBounds) && t(e, _) || _
      }
    },
    mt = function (t) {
      return function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            clickCount: 0
          },
          n = {
            clickCount: r.clickCount % 2 + 1
          };
        return n.clickCount !== r.clickCount && t(e, n) || n
      }
    },
    yt = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return (0, u.default)({}, at, {
        handler: nt(t ? tt : Z, ft(function (t, e) {
          return e.isActive ? it.handler(t, e) : e
        }))
      })
    },
    vt = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return (0, u.default)({}, at, {
        handler: nt(t ? tt : Z, ft(function (t, e) {
          return e.isActive ? e : it.handler(t, e)
        }))
      })
    },
    gt = (0, u.default)({}, ot, {
      handler: (c = function (t, e) {
        var r = e.elementVisible,
          n = t.event;
        return !t.store.getState().ixData.events[n.action.config.autoStopEventId] && e.triggered ? e : n.eventTypeId === k === r ? (rt(t), (0, u.default)({}, e, {
          triggered: !0
        })) : e
      }, function (t, e) {
        var r = (0, u.default)({}, e, {
          elementVisible: ut(t)
        });
        return (e ? r.elementVisible !== e.elementVisible : r.elementVisible) && c(t, r) || r
      })
    }),
    Et = (n = {}, (0, a.default)(n, C, yt()), (0, a.default)(n, P, vt()), (0, a.default)(n, x, yt()), (0, a.default)(n, A, vt()), (0, a.default)(n, M, yt(!1)), (0, a.default)(n, D, vt(!1)), (0, a.default)(n, w, yt()), (0, a.default)(n, O, vt()), (0, a.default)(n, H, {
      types: "ecommerce-cart-open",
      handler: nt(tt, rt)
    }), (0, a.default)(n, z, {
      types: "ecommerce-cart-close",
      handler: nt(tt, rt)
    }), (0, a.default)(n, E, {
      types: "click",
      handler: nt(tt, mt(function (t, e) {
        var r, n, i, a = e.clickCount;
        n = (r = t).store, i = r.event.action.config.autoStopEventId, Boolean(et(n, i)) ? 1 === a && rt(t) : rt(t)
      }))
    }), (0, a.default)(n, _, {
      types: "click",
      handler: nt(tt, mt(function (t, e) {
        2 === e.clickCount && rt(t)
      }))
    }), (0, a.default)(n, b, (0, u.default)({}, it, {
      types: "mousedown"
    })), (0, a.default)(n, T, (0, u.default)({}, it, {
      types: "mouseup"
    })), (0, a.default)(n, S, {
      types: "mouseover mouseout",
      handler: nt(tt, pt(function (t, e) {
        e.elementHovered && rt(t)
      }))
    }), (0, a.default)(n, I, {
      types: "mouseover mouseout",
      handler: nt(tt, pt(function (t, e) {
        e.elementHovered || rt(t)
      }))
    }), (0, a.default)(n, R, {
      types: "mousemove mouseout scroll",
      handler: function (t) {
        var e = t.store,
          r = t.element,
          n = t.eventConfig,
          i = t.nativeEvent,
          a = t.eventStateKey,
          s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          },
          o = n.basedOn,
          l = n.selectedAxis,
          h = n.continuousParameterGroupId,
          c = n.reverse,
          u = n.restingState,
          f = void 0 === u ? 0 : u,
          p = i.clientX,
          d = void 0 === p ? s.clientX : p,
          m = i.clientY,
          v = void 0 === m ? s.clientY : m,
          g = i.pageX,
          E = void 0 === g ? s.pageX : g,
          _ = i.pageY,
          b = void 0 === _ ? s.pageY : _,
          T = "X_AXIS" === l,
          S = "mouseout" === i.type,
          I = f / 100,
          A = h,
          x = !1;
        switch (o) {
          case Y:
            I = T ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(v, window.innerHeight) / window.innerHeight;
            break;
          case q:
            var C = ht(),
              P = C.scrollLeft,
              w = C.scrollTop,
              O = C.scrollWidth,
              D = C.scrollHeight;
            I = T ? Math.min(P + E, O) / O : Math.min(w + b, D) / D;
            break;
          case W:
          default:
            A = Q(a, h);
            var M = 0 === i.type.indexOf("mouse");
            if (M && !0 !== tt({
                element: r,
                nativeEvent: i
              })) break;
            var R = r.getBoundingClientRect(),
              F = R.left,
              k = R.top,
              L = R.width,
              N = R.height;
            if (!M && ! function (t, e) {
                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
              }({
                left: d,
                top: v
              }, R)) break;
            x = !0, I = T ? (d - F) / L : (v - k) / N
        }
        return S && (I > .95 || I < .05) && (I = Math.round(I)), (o !== W || x || x !== s.elementHovered) && (I = c ? 1 - I : I, e.dispatch((0, y.parameterChanged)(A, I))), {
          elementHovered: x,
          clientX: d,
          clientY: v,
          pageX: E,
          pageY: b
        }
      }
    }), (0, a.default)(n, U, {
      types: st,
      handler: function (t) {
        var e = t.store,
          r = t.eventConfig,
          n = r.continuousParameterGroupId,
          i = r.reverse,
          a = ht(),
          s = a.scrollTop / (a.scrollHeight - a.clientHeight);
        s = i ? 1 - s : s, e.dispatch((0, y.parameterChanged)(n, s))
      }
    }), (0, a.default)(n, B, {
      types: st,
      handler: function (t) {
        var e = t.element,
          r = t.store,
          n = t.eventConfig,
          i = t.eventStateKey,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            scrollPercent: 0
          },
          s = ht(),
          o = s.scrollLeft,
          l = s.scrollTop,
          h = s.scrollWidth,
          c = s.scrollHeight,
          u = s.clientHeight,
          f = n.basedOn,
          p = n.selectedAxis,
          d = n.continuousParameterGroupId,
          m = n.startsEntering,
          v = n.startsExiting,
          g = n.addEndOffset,
          E = n.addStartOffset,
          _ = n.addOffsetValue,
          b = void 0 === _ ? 0 : _,
          T = n.endOffsetValue,
          S = void 0 === T ? 0 : T;
        if (f === Y) {
          var I = "X_AXIS" === p ? o / h : l / c;
          return I !== a.scrollPercent && r.dispatch((0, y.parameterChanged)(d, I)), {
            scrollPercent: I
          }
        }
        var A = Q(i, d),
          x = e.getBoundingClientRect(),
          C = (E ? b : 0) / 100,
          P = (g ? S : 0) / 100;
        C = m ? C : 1 - C, P = v ? P : 1 - P;
        var w = x.top + Math.min(x.height * C, u),
          O = x.top + x.height * P - w,
          D = Math.min(u + O, c),
          M = Math.min(Math.max(0, u - w), D) / D;
        return M !== a.scrollPercent && r.dispatch((0, y.parameterChanged)(A, M)), {
          scrollPercent: M
        }
      }
    }), (0, a.default)(n, k, gt), (0, a.default)(n, V, gt), (0, a.default)(n, F, (0, u.default)({}, ot, {
      handler: dt(function (t, e) {
        e.scrollingDown && rt(t)
      })
    })), (0, a.default)(n, G, (0, u.default)({}, ot, {
      handler: dt(function (t, e) {
        e.scrollingDown || rt(t)
      })
    })), (0, a.default)(n, j, {
      types: "readystatechange IX2_PAGE_UPDATE",
      handler: nt(Z, function (t) {
        return function (e, r) {
          var n = {
            finished: "complete" === document.readyState
          };
          return !n.finished || r && r.finshed || t(e), n
        }
      }(rt))
    }), (0, a.default)(n, X, {
      types: "readystatechange IX2_PAGE_UPDATE",
      handler: nt(Z, function (t) {
        return function (e, r) {
          return r || t(e), {
            started: !0
          }
        }
      }(rt))
    }), n);
  e.default = Et
}, function (t, e, r) {
  var n = r(360)();
  t.exports = n
}, function (t, e, r) {
  var n = r(89),
    i = r(361),
    a = r(154),
    s = r(155),
    o = r(2),
    l = r(374),
    h = "Expected a function",
    c = 8,
    u = 32,
    f = 128,
    p = 256;
  t.exports = function (t) {
    return i(function (e) {
      var r = e.length,
        i = r,
        d = n.prototype.thru;
      for (t && e.reverse(); i--;) {
        var m = e[i];
        if ("function" != typeof m) throw new TypeError(h);
        if (d && !y && "wrapper" == s(m)) var y = new n([], !0)
      }
      for (i = y ? i : r; ++i < r;) {
        m = e[i];
        var v = s(m),
          g = "wrapper" == v ? a(m) : void 0;
        y = g && l(g[0]) && g[1] == (f | c | u | p) && !g[4].length && 1 == g[9] ? y[s(g[0])].apply(y, g[3]) : 1 == m.length && l(m) ? y[v]() : y.thru(m)
      }
      return function () {
        var t = arguments,
          n = t[0];
        if (y && 1 == t.length && o(n)) return y.plant(n).value();
        for (var i = 0, a = r ? e[i].apply(this, t) : n; ++i < r;) a = e[i].call(this, a);
        return a
      }
    })
  }
}, function (t, e, r) {
  var n = r(362),
    i = r(365),
    a = r(367);
  t.exports = function (t) {
    return a(i(t, void 0, n), t + "")
  }
}, function (t, e, r) {
  var n = r(363);
  t.exports = function (t) {
    return null != t && t.length ? n(t, 1) : []
  }
}, function (t, e, r) {
  var n = r(58),
    i = r(364);
  t.exports = function t(e, r, a, s, o) {
    var l = -1,
      h = e.length;
    for (a || (a = i), o || (o = []); ++l < h;) {
      var c = e[l];
      r > 0 && a(c) ? r > 1 ? t(c, r - 1, a, s, o) : n(o, c) : s || (o[o.length] = c)
    }
    return o
  }
}, function (t, e, r) {
  var n = r(31),
    i = r(46),
    a = r(2),
    s = n ? n.isConcatSpreadable : void 0;
  t.exports = function (t) {
    return a(t) || i(t) || !!(s && t && t[s])
  }
}, function (t, e, r) {
  var n = r(366),
    i = Math.max;
  t.exports = function (t, e, r) {
    return e = i(void 0 === e ? t.length - 1 : e, 0),
      function () {
        for (var a = arguments, s = -1, o = i(a.length - e, 0), l = Array(o); ++s < o;) l[s] = a[e + s];
        s = -1;
        for (var h = Array(e + 1); ++s < e;) h[s] = a[s];
        return h[e] = r(l), n(t, this, h)
      }
  }
}, function (t, e) {
  t.exports = function (t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2])
    }
    return t.apply(e, r)
  }
}, function (t, e, r) {
  var n = r(368),
    i = r(370)(n);
  t.exports = i
}, function (t, e, r) {
  var n = r(369),
    i = r(151),
    a = r(68),
    s = i ? function (t, e) {
      return i(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: n(e),
        writable: !0
      })
    } : a;
  t.exports = s
}, function (t, e) {
  t.exports = function (t) {
    return function () {
      return t
    }
  }
}, function (t, e) {
  var r = 800,
    n = 16,
    i = Date.now;
  t.exports = function (t) {
    var e = 0,
      a = 0;
    return function () {
      var s = i(),
        o = n - (s - a);
      if (a = s, o > 0) {
        if (++e >= r) return arguments[0]
      } else e = 0;
      return t.apply(void 0, arguments)
    }
  }
}, function (t, e, r) {
  var n = r(107),
    i = n && new n;
  t.exports = i
}, function (t, e) {
  t.exports = function () {}
}, function (t, e) {
  t.exports = {}
}, function (t, e, r) {
  var n = r(91),
    i = r(154),
    a = r(155),
    s = r(375);
  t.exports = function (t) {
    var e = a(t),
      r = s[e];
    if ("function" != typeof r || !(e in n.prototype)) return !1;
    if (t === r) return !0;
    var o = i(r);
    return !!o && t === o[0]
  }
}, function (t, e, r) {
  var n = r(91),
    i = r(89),
    a = r(90),
    s = r(2),
    o = r(20),
    l = r(376),
    h = Object.prototype.hasOwnProperty;

  function c(t) {
    if (o(t) && !s(t) && !(t instanceof n)) {
      if (t instanceof i) return t;
      if (h.call(t, "__wrapped__")) return l(t)
    }
    return new i(t)
  }
  c.prototype = a.prototype, c.prototype.constructor = c, t.exports = c
}, function (t, e, r) {
  var n = r(91),
    i = r(89),
    a = r(377);
  t.exports = function (t) {
    if (t instanceof n) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = a(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var r = -1,
      n = t.length;
    for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
    return e
  }
}, function (t, e, r) {
  var n = r(152),
    i = r(70);
  t.exports = function (t, e, r) {
    return void 0 === r && (r = e, e = void 0), void 0 !== r && (r = (r = i(r)) == r ? r : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), n(i(t), e, r)
  }
}, function (t, e, r) {
  "use strict";
  var n = r(11);
  n.define("links", t.exports = function (t, e) {
    var r, i, a, s = {},
      o = t(window),
      l = n.env(),
      h = window.location,
      c = document.createElement("a"),
      u = "w--current",
      f = /index\.(html|php)$/,
      p = /\/$/;

    function d(e) {
      var n = r && e.getAttribute("href-disabled") || e.getAttribute("href");
      if (c.href = n, !(n.indexOf(":") >= 0)) {
        var s = t(e);
        if (c.hash.length > 1 && c.host + c.pathname === h.host + h.pathname) {
          if (!/^#[a-zA-Z0-9\-\_]+$/.test(c.hash)) return;
          var o = t(c.hash);
          o.length && i.push({
            link: s,
            sec: o,
            active: !1
          })
        } else if ("#" !== n && "" !== n) {
          var l = c.href === h.href || n === a || f.test(n) && p.test(a);
          y(s, u, l)
        }
      }
    }

    function m() {
      var t = o.scrollTop(),
        r = o.height();
      e.each(i, function (e) {
        var n = e.link,
          i = e.sec,
          a = i.offset().top,
          s = i.outerHeight(),
          o = .5 * r,
          l = i.is(":visible") && a + s - o >= t && a + o <= t + r;
        e.active !== l && (e.active = l, y(n, u, l))
      })
    }

    function y(t, e, r) {
      var n = t.hasClass(e);
      r && n || (r || n) && (r ? t.addClass(e) : t.removeClass(e))
    }
    return s.ready = s.design = s.preview = function () {
      r = l && n.env("design"), a = n.env("slug") || h.pathname || "", n.scroll.off(m), i = [];
      for (var t = document.links, e = 0; e < t.length; ++e) d(t[e]);
      i.length && (n.scroll.on(m), m())
    }, s
  })
}, function (t, e, r) {
  "use strict";
  var n = r(11);
  n.define("scroll", t.exports = function (t) {
    var e = t(document),
      r = window,
      i = r.location,
      a = function () {
        try {
          return Boolean(r.frameElement)
        } catch (t) {
          return !0
        }
      }() ? null : r.history,
      s = /^[a-zA-Z0-9][\w:.-]*$/;
    return {
      ready: function () {
        var o = i.href.split("#")[0];
        e.on("click", "a", function (e) {
          if (!(n.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link")))
            if ("#" !== this.getAttribute("href")) {
              var l = this.href.split("#"),
                h = l[0] === o ? l[1] : null;
              h && function (e, o) {
                if (s.test(e)) {
                  var l = t("#" + e);
                  if (l.length) {
                    if (o && (o.preventDefault(), o.stopPropagation()), i.hash !== e && a && a.pushState && (!n.env.chrome || "file:" !== i.protocol)) {
                      var h = a.state && a.state.hash;
                      h !== e && a.pushState({
                        hash: e
                      }, "", "#" + e)
                    }
                    var c = n.env("editor") ? ".w-editor-body" : "body",
                      u = t("header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"),
                      f = "fixed" === u.css("position") ? u.outerHeight() : 0;
                    r.setTimeout(function () {
                      ! function (e, n) {
                        var i = t(r).scrollTop(),
                          a = e.offset().top - n;
                        if ("mid" === e.data("scroll")) {
                          var s = t(r).height() - n,
                            o = e.outerHeight();
                          o < s && (a -= Math.round((s - o) / 2))
                        }
                        var l = 1;
                        t("body").add(e).each(function () {
                          var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                          !isNaN(e) && (0 === e || e > 0) && (l = e)
                        }), Date.now || (Date.now = function () {
                          return (new Date).getTime()
                        });
                        var h = Date.now(),
                          c = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function (t) {
                            r.setTimeout(t, 15)
                          },
                          u = (472.143 * Math.log(Math.abs(i - a) + 125) - 2e3) * l;
                        ! function t() {
                          var e = Date.now() - h;
                          r.scroll(0, function (t, e, r, n) {
                            return r > n ? e : t + (e - t) * ((i = r / n) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                            var i
                          }(i, a, e, u)), e <= u && c(t)
                        }()
                      }(l, f)
                    }, o ? 0 : 300)
                  }
                }
              }(h, e)
            } else e.preventDefault()
        })
      }
    }
  })
}, function (t, e, r) {
  "use strict";
  r(11).define("touch", t.exports = function (t) {
    var e = {},
      r = window.getSelection;

    function n(e) {
      var n, i, a = !1,
        s = !1,
        o = Math.min(Math.round(.04 * window.innerWidth), 40);

      function l(t) {
        var e = t.touches;
        e && e.length > 1 || (a = !0, e ? (s = !0, n = e[0].clientX) : n = t.clientX, i = n)
      }

      function h(e) {
        if (a) {
          if (s && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
          var n = e.touches,
            l = n ? n[0].clientX : e.clientX,
            h = l - i;
          i = l, Math.abs(h) > o && r && "" === String(r()) && (! function (e, r, n) {
            var i = t.Event(e, {
              originalEvent: r
            });
            t(r.target).trigger(i, n)
          }("swipe", e, {
            direction: h > 0 ? "right" : "left"
          }), u())
        }
      }

      function c(t) {
        if (a) return a = !1, s && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(s = !1)) : void 0
      }

      function u() {
        a = !1
      }
      e.addEventListener("touchstart", l, !1), e.addEventListener("touchmove", h, !1), e.addEventListener("touchend", c, !1), e.addEventListener("touchcancel", u, !1), e.addEventListener("mousedown", l, !1), e.addEventListener("mousemove", h, !1), e.addEventListener("mouseup", c, !1), e.addEventListener("mouseout", u, !1), this.destroy = function () {
        e.removeEventListener("touchstart", l, !1), e.removeEventListener("touchmove", h, !1), e.removeEventListener("touchend", c, !1), e.removeEventListener("touchcancel", u, !1), e.removeEventListener("mousedown", l, !1), e.removeEventListener("mousemove", h, !1), e.removeEventListener("mouseup", c, !1), e.removeEventListener("mouseout", u, !1), e = null
      }
    }
    return t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }, e.init = function (e) {
      return (e = "string" == typeof e ? t(e).get(0) : e) ? new n(e) : null
    }, e.instance = e.init(document), e
  })
}, function (t, e, r) {
  "use strict";
  var n = r(1)(r(383)),
    i = r(11);
  i.define("forms", t.exports = function (t, e) {
    var r, a, s, o, l, h = {},
      c = t(document),
      u = window.location,
      f = window.XDomainRequest && !window.atob,
      p = ".w-form",
      d = /e(-)?mail/i,
      m = /^\S+@\S+$/,
      y = window.alert,
      v = i.env(),
      g = /list-manage[1-9]?.com/i,
      E = e.debounce(function () {
        y("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
      }, 100);

    function _(e, r) {
      var n = t(r),
        i = t.data(r, p);
      i || (i = t.data(r, p, {
        form: n
      })), b(i);
      var s = n.closest("div.w-form");
      i.done = s.find("> .w-form-done"), i.fail = s.find("> .w-form-fail"), i.fileUploads = s.find(".w-file-upload"), i.fileUploads.each(function (e) {
        ! function (e, r) {
          if (!r.fileUploads || !r.fileUploads[e]) return;
          var n, i = t(r.fileUploads[e]),
            a = i.find("> .w-file-upload-default"),
            s = i.find("> .w-file-upload-uploading"),
            o = i.find("> .w-file-upload-success"),
            h = i.find("> .w-file-upload-error"),
            c = a.find(".w-file-upload-input"),
            u = a.find(".w-file-upload-label"),
            f = u.children(),
            p = h.find(".w-file-upload-error-msg"),
            d = o.find(".w-file-upload-file"),
            m = o.find(".w-file-remove-link"),
            y = d.find(".w-file-upload-file-name"),
            g = p.attr("data-w-size-error"),
            E = p.attr("data-w-type-error"),
            _ = p.attr("data-w-generic-error");
          if (v) c.on("click", function (t) {
            t.preventDefault()
          }), u.on("click", function (t) {
            t.preventDefault()
          }), f.on("click", function (t) {
            t.preventDefault()
          });
          else {
            m.on("click", function () {
              c.removeAttr("data-value"), c.val(""), y.html(""), a.toggle(!0), o.toggle(!1)
            }), c.on("change", function (i) {
              (n = i.target && i.target.files && i.target.files[0]) && (a.toggle(!1), h.toggle(!1), s.toggle(!0), y.text(n.name), C() || T(r), r.fileUploads[e].uploading = !0, function (e, r) {
                var n = {
                  name: e.name,
                  size: e.size
                };
                t.ajax({
                  type: "POST",
                  url: l,
                  data: n,
                  dataType: "json",
                  crossDomain: !0
                }).done(function (t) {
                  r(null, t)
                }).fail(function (t) {
                  r(t)
                })
              }(n, A))
            });
            var S = u.outerHeight();
            c.height(S), c.width(1)
          }

          function I(t) {
            var n = t.responseJSON && t.responseJSON.msg,
              i = _;
            "string" == typeof n && 0 === n.indexOf("InvalidFileTypeError") ? i = E : "string" == typeof n && 0 === n.indexOf("MaxFileSizeError") && (i = g), p.text(i), c.removeAttr("data-value"), c.val(""), s.toggle(!1), a.toggle(!0), h.toggle(!0), r.fileUploads[e].uploading = !1, C() || b(r)
          }

          function A(e, r) {
            if (e) return I(e);
            var i = r.fileName,
              a = r.postData,
              s = r.fileId,
              o = r.s3Url;
            c.attr("data-value", s),
              function (e, r, n, i, a) {
                var s = new FormData;
                for (var o in r) s.append(o, r[o]);
                s.append("file", n, i), t.ajax({
                  type: "POST",
                  url: e,
                  data: s,
                  processData: !1,
                  contentType: !1
                }).done(function () {
                  a(null)
                }).fail(function (t) {
                  a(t)
                })
              }(o, a, n, i, x)
          }

          function x(t) {
            if (t) return I(t);
            s.toggle(!1), o.css("display", "inline-block"), r.fileUploads[e].uploading = !1, C() || b(r)
          }

          function C() {
            var t = r.fileUploads && r.fileUploads.toArray() || [];
            return t.some(function (t) {
              return t.uploading
            })
          }
        }(e, i)
      });
      var o = i.action = n.attr("action");
      i.handler = null, i.redirect = n.attr("data-redirect"), g.test(o) ? i.handler = A : o || (a ? i.handler = I : E())
    }

    function b(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
    }

    function T(t) {
      var e = t.btn,
        r = t.wait;
      e.prop("disabled", !0), r && (t.label = e.val(), e.val(r))
    }

    function S(e, r) {
      var n = null;
      return r = r || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, a) {
        var s = t(a),
          o = s.attr("type"),
          l = s.attr("data-name") || s.attr("name") || "Field " + (i + 1),
          h = s.val();
        if ("checkbox" === o) h = s.is(":checked");
        else if ("radio" === o) {
          if (null === r[l] || "string" == typeof r[l]) return;
          h = e.find('input[name="' + s.attr("name") + '"]:checked').val() || null
        }
        "string" == typeof h && (h = t.trim(h)), r[l] = h, n = n || function (t, e, r, n) {
          var i = null;
          "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? n ? d.test(t.attr("type")) && (m.test(n) || (i = "Please enter a valid email address for: " + r)) : i = "Please fill out the required field: " + r : "g-recaptcha-response" !== r || n || (i = "Please confirm you’re not a robot.");
          return i
        }(s, o, l, h)
      }), n
    }

    function I(e) {
      b(e);
      var r = e.form,
        n = {
          name: r.attr("data-name") || r.attr("name") || "Untitled Form",
          source: u.href,
          test: i.env(),
          fields: {},
          fileUploads: {},
          dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(r.html())
        };
      C(e);
      var s = S(r, n.fields);
      if (s) return y(s);
      n.fileUploads = function (e) {
        var r = {};
        return e.find(':input[type="file"]').each(function (e, n) {
          var i = t(n),
            a = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
            s = i.attr("data-value");
          "string" == typeof s && (s = t.trim(s)), r[a] = s
        }), r
      }(r), T(e), a ? t.ajax({
        url: o,
        type: "POST",
        data: n,
        dataType: "json",
        crossDomain: !0
      }).done(function (t) {
        t && 200 === t.code && (e.success = !0), x(e)
      }).fail(function () {
        x(e)
      }) : x(e)
    }

    function A(r) {
      b(r);
      var n = r.form,
        i = {};
      if (!/^https/.test(u.href) || /^https/.test(r.action)) {
        C(r);
        var a, s = S(n, i);
        if (s) return y(s);
        T(r), e.each(i, function (t, e) {
          d.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (a = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
        }), a && !i.FNAME && (a = a.split(" "), i.FNAME = a[0], i.LNAME = i.LNAME || a[1]);
        var o = r.action.replace("/post?", "/post-json?") + "&c=?",
          l = o.indexOf("u=") + 2;
        l = o.substring(l, o.indexOf("&", l));
        var h = o.indexOf("id=") + 3;
        h = o.substring(h, o.indexOf("&", h)), i["b_" + l + "_" + h] = "", t.ajax({
          url: o,
          data: i,
          dataType: "jsonp"
        }).done(function (t) {
          r.success = "success" === t.result || /already/.test(t.msg), r.success || console.info("MailChimp error: " + t.msg), x(r)
        }).fail(function () {
          x(r)
        })
      } else n.attr("method", "post")
    }

    function x(t) {
      var e = t.form,
        r = t.redirect,
        n = t.success;
      n && r ? i.location(r) : (t.done.toggle(n), t.fail.toggle(!n), e.toggle(!n), b(t))
    }

    function C(t) {
      t.evt && t.evt.preventDefault(), t.evt = null
    }
    return h.ready = h.design = h.preview = function () {
      ! function () {
        a = t("html").attr("data-wf-site"), o = "https://gsd.harvard.edu/api/v1/form/" + a, f && o.indexOf("https://gsd.harvard.edu") >= 0 && (o = o.replace("https://gsd.harvard.edu", "http://formdata.gsd.harvard.edu"));
        if (l = "".concat(o, "/signFile"), !(r = t(p + " form")).length) return;
        r.each(_)
      }(), v || s || function () {
        s = !0, c.on("submit", p + " form", function (e) {
          var r = t.data(this, p);
          r.handler && (r.evt = e, r.handler(r))
        });
        var e = [
          ["checkbox", ".w-checkbox-input"],
          ["radio", ".w-radio-input"]
        ];
        c.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
          t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
        }), c.on("change", p + ' form input[type="radio"]', function (e) {
          t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, r) {
            return t(r).siblings(".w-radio-input").removeClass("w--redirected-checked")
          });
          var r = t(e.target);
          r.hasClass("w-radio-input") || r.siblings(".w-radio-input").addClass("w--redirected-checked")
        }), e.forEach(function (e) {
          var r = (0, n.default)(e, 2),
            i = r[0],
            a = r[1];
          c.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + a + ")", function (e) {
            t(e.target).siblings(a).addClass("w--redirected-focus")
          }), c.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + a + ")", function (e) {
            t(e.target).siblings(a).removeClass("w--redirected-focus")
          })
        })
      }()
    }, h
  })
}, function (t, e, r) {
  var n = r(384),
    i = r(385),
    a = r(386);
  t.exports = function (t, e) {
    return n(t) || i(t, e) || a()
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) return t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
    } catch (t) {
      i = !0, a = t
    } finally {
      try {
        n || null == o.return || o.return()
      } finally {
        if (i) throw a
      }
    }
    return r
  }
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
  }
}, function (t, e, r) {
  "use strict";
  var n = r(11),
    i = r(129);
  n.define("navbar", t.exports = function (t, e) {
    var r, a, s, o, l = {},
      h = t.tram,
      c = t(window),
      u = t(document),
      f = n.env(),
      p = '<div class="w-nav-overlay" data-wf-ignore />',
      d = ".w-nav",
      m = "w--open",
      y = "w--nav-dropdown-open",
      v = "w--nav-dropdown-toggle-open",
      g = "w--nav-dropdown-list-open",
      E = "w--nav-link-open",
      _ = i.triggers,
      b = t();

    function T() {
      n.resize.off(S)
    }

    function S() {
      a.each(O)
    }

    function I(r, i) {
      var a = t(i),
        l = t.data(i, d);
      l || (l = t.data(i, d, {
        open: !1,
        el: a,
        config: {}
      })), l.menu = a.find(".w-nav-menu"), l.links = l.menu.find(".w-nav-link"), l.dropdowns = l.menu.find(".w-dropdown"), l.dropdownToggle = l.menu.find(".w-dropdown-toggle"), l.dropdownList = l.menu.find(".w-dropdown-list"), l.button = a.find(".w-nav-button"), l.container = a.find(".w-container"), l.outside = function (e) {
        e.outside && u.off("click" + d, e.outside);
        return function (r) {
          var n = t(r.target);
          o && n.closest(".w-editor-bem-EditorOverlay").length || w(e, n)
        }
      }(l), l.el.off(d), l.button.off(d), l.menu.off(d), C(l), s ? (x(l), l.el.on("setting" + d, function (t) {
        return function (r, n) {
          n = n || {};
          var i = c.width();
          C(t), !0 === n.open && F(t, !0), !1 === n.open && L(t, !0), t.open && e.defer(function () {
            i !== c.width() && P(t)
          })
        }
      }(l))) : (! function (e) {
        if (e.overlay) return;
        e.overlay = t(p).appendTo(e.el), e.parent = e.menu.parent(), L(e, !0)
      }(l), l.button.on("click" + d, function (t) {
        return e.debounce(function () {
          t.open ? L(t) : F(t)
        })
      }(l)), l.menu.on("click" + d, "a", function (e) {
        return function (r) {
          var i = t(this),
            a = i.attr("href");
          n.validClick(r.currentTarget) ? a && 0 === a.indexOf("#") && e.open && L(e) : r.preventDefault()
        }
      }(l))), O(r, i)
    }

    function A(e, r) {
      var n = t.data(r, d);
      n && (x(n), t.removeData(r, d))
    }

    function x(t) {
      t.overlay && (L(t, !0), t.overlay.remove(), t.overlay = null)
    }

    function C(t) {
      var r = {},
        n = t.config || {},
        i = r.animation = t.el.attr("data-animation") || "default";
      r.animOver = /^over/.test(i), r.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && t.open && e.defer(P, t), r.easing = t.el.attr("data-easing") || "ease", r.easing2 = t.el.attr("data-easing2") || "ease";
      var a = t.el.attr("data-duration");
      r.duration = null != a ? Number(a) : 400, r.docHeight = t.el.attr("data-doc-height"), t.config = r
    }

    function P(t) {
      t.open && (L(t, !0), F(t, !0))
    }
    l.ready = l.design = l.preview = function () {
      if (s = f && n.env("design"), o = n.env("editor"), r = t(document.body), !(a = u.find(d)).length) return;
      a.each(I), T(), n.resize.on(S)
    }, l.destroy = function () {
      b = t(), T(), a && a.length && a.each(A)
    };
    var w = e.debounce(function (t, e) {
      if (t.open) {
        var r = e.closest(".w-nav-menu");
        t.menu.is(r) || L(t)
      }
    });

    function O(e, r) {
      var n = t.data(r, d),
        i = n.collapsed = "none" !== n.button.css("display");
      if (!n.open || i || s || L(n, !0), n.container.length) {
        var a = function (e) {
          var r = e.container.css(D);
          "none" === r && (r = "");
          return function (e, n) {
            (n = t(n)).css(D, ""), "none" === n.css(D) && n.css(D, r)
          }
        }(n);
        n.links.each(a), n.dropdowns.each(a)
      }
      n.open && k(n)
    }
    var D = "max-width";

    function M(t, e) {
      e.setAttribute("data-nav-menu-open", "")
    }

    function R(t, e) {
      e.removeAttribute("data-nav-menu-open")
    }

    function F(t, e) {
      if (!t.open) {
        t.open = !0, t.menu.each(M), t.links.addClass(E), t.dropdowns.addClass(y), t.dropdownToggle.addClass(v), t.dropdownList.addClass(g), t.button.addClass(m);
        var r = t.config;
        "none" !== r.animation && h.support.transform || (e = !0);
        var i = k(t),
          a = t.menu.outerHeight(!0),
          o = t.menu.outerWidth(!0),
          l = t.el.height(),
          c = t.el[0];
        if (O(0, c), _.intro(0, c), n.redraw.up(), s || u.on("click" + d, t.outside), !e) {
          var f = "transform " + r.duration + "ms " + r.easing;
          if (t.overlay && (b = t.menu.prev(), t.overlay.show().append(t.menu)), r.animOver) return h(t.menu).add(f).set({
            x: r.animDirect * o,
            height: i
          }).start({
            x: 0
          }), void(t.overlay && t.overlay.width(o));
          var p = l + a;
          h(t.menu).add(f).set({
            y: -p
          }).start({
            y: 0
          })
        }
      }
    }

    function k(t) {
      var e = t.config,
        n = e.docHeight ? u.height() : r.height();
      return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
    }

    function L(t, e) {
      if (t.open) {
        t.open = !1, t.button.removeClass(m);
        var r = t.config;
        if (("none" === r.animation || !h.support.transform || r.duration <= 0) && (e = !0), _.outro(0, t.el[0]), u.off("click" + d, t.outside), e) return h(t.menu).stop(), void l();
        var n = "transform " + r.duration + "ms " + r.easing2,
          i = t.menu.outerHeight(!0),
          a = t.menu.outerWidth(!0),
          s = t.el.height();
        if (r.animOver) h(t.menu).add(n).start({
          x: a * r.animDirect
        }).then(l);
        else {
          var o = s + i;
          h(t.menu).add(n).start({
            y: -o
          }).then(l)
        }
      }

      function l() {
        t.menu.height(""), h(t.menu).set({
          x: 0,
          y: 0
        }), t.menu.each(R), t.links.removeClass(E), t.dropdowns.removeClass(y), t.dropdownToggle.removeClass(v), t.dropdownList.removeClass(g), t.overlay && t.overlay.children().length && (b.length ? t.menu.insertAfter(b) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
      }
    }
    return l
  })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  "events": {
    "e-4": {
      "id": "e-4",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-3",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
      },
      "config": [{
        "continuousParameterGroupId": "a-3-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580457819190
    },
    "e-5": {
      "id": "e-5",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-4",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|da9776da-f362-8bad-a88a-01bdf6d489a5"
      },
      "config": [{
        "continuousParameterGroupId": "a-4-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580457887126
    },
    "e-6": {
      "id": "e-6",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-5",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|70b1f6e0-e021-244f-16da-a918f4fcd366"
      },
      "config": [{
        "continuousParameterGroupId": "a-5-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580457894740
    },
    "e-8": {
      "id": "e-8",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-7"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1580464465801
    },
    "e-9": {
      "id": "e-9",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-8",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13"
      },
      "config": [{
        "continuousParameterGroupId": "a-8-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580477191484
    },
    "e-10": {
      "id": "e-10",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-9",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|74879370-485d-0117-559f-9afde0b92f0f"
      },
      "config": [{
        "continuousParameterGroupId": "a-9-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580480180790
    },
    "e-12": {
      "id": "e-12",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-11",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|a308fea9-a9ca-5105-ec5b-414d88af8720"
      },
      "config": [{
        "continuousParameterGroupId": "a-11-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580481855737
    },
    "e-13": {
      "id": "e-13",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-12",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|a308fea9-a9ca-5105-ec5b-414d88af8720"
      },
      "config": [{
        "continuousParameterGroupId": "a-12-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580481918868
    },
    "e-14": {
      "id": "e-14",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-10",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|d6c89d94-7715-d12c-35a7-d8e6bbb2fdcb"
      },
      "config": [{
        "continuousParameterGroupId": "a-10-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580482146781
    },
    "e-15": {
      "id": "e-15",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-13",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|b9444b09-5a83-95d1-b044-7708bbd92c20"
      },
      "config": [{
        "continuousParameterGroupId": "a-13-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": true,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580486776654
    },
    "e-16": {
      "id": "e-16",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-14",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|9955f3b3-faeb-706c-d35d-a719abf33edc"
      },
      "config": [{
        "continuousParameterGroupId": "a-14-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": true,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580486786083
    },
    "e-17": {
      "id": "e-17",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-15",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|fa979339-a2c6-831e-a73d-3e1aca0175e2"
      },
      "config": [{
        "continuousParameterGroupId": "a-15-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": true,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580486793493
    },
    "e-18": {
      "id": "e-18",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-16",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|c7219553-ddab-555e-251a-92b7df4387c4"
      },
      "config": [{
        "continuousParameterGroupId": "a-16-p",
        "smoothing": 50,
        "startsEntering": false,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580490614540
    },
    "e-19": {
      "id": "e-19",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-17",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|c7219553-ddab-555e-251a-92b7df4387c4"
      },
      "config": [{
        "continuousParameterGroupId": "a-17-p",
        "smoothing": 50,
        "startsEntering": false,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580491344874
    },
    "e-20": {
      "id": "e-20",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-18",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|d9be0c26-f9ae-1cdb-45da-581b7c9f1927"
      },
      "config": [{
        "continuousParameterGroupId": "a-18-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580525731652
    },
    "e-22": {
      "id": "e-22",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-20",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|a308fea9-a9ca-5105-ec5b-414d88af8720"
      },
      "config": [{
        "continuousParameterGroupId": "a-20-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580529819505
    },
    "e-23": {
      "id": "e-23",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-21",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|8fdc3107-3430-7a10-acf1-064ff82b8999"
      },
      "config": [{
        "continuousParameterGroupId": "a-21-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580530335512
    },
    "e-24": {
      "id": "e-24",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-22",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13|aea13ea8-e94f-023a-bf12-a2f8d0ff00ed"
      },
      "config": [{
        "continuousParameterGroupId": "a-22-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": true,
        "addOffsetValue": 100,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1580568012045
    },
    "e-26": {
      "id": "e-26",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-23",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-25"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d6e2f023b13"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1580571124812
    },
    "e-30": {
      "id": "e-30",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-25",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d5522023b1a"
      },
      "config": [{
        "continuousParameterGroupId": "a-25-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1581084641966
    },
    "e-31": {
      "id": "e-31",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-26",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d5522023b1a"
      },
      "config": [{
        "continuousParameterGroupId": "a-26-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1581084883580
    },
    "e-32": {
      "id": "e-32",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-27",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d5522023b1a"
      },
      "config": [{
        "continuousParameterGroupId": "a-27-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1581084929853
    },
    "e-34": {
      "id": "e-34",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-28",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-33"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d5522023b1a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1581085021696
    },
    "e-35": {
      "id": "e-35",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-29",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e3396fc806f6d5522023b1a"
      },
      "config": [{
        "continuousParameterGroupId": "a-29-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1581085981413
    }
  },
  "actionLists": {
    "a-3": {
      "id": "a-3",
      "title": "FeatureImageMovement25",
      "continuousParameterGroups": [{
        "id": "a-3-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-3-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-3-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
              },
              "yValue": -25,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1580457823274
    },
    "a-4": {
      "id": "a-4",
      "title": "FeatureImageMovement35",
      "continuousParameterGroups": [{
        "id": "a-4-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-4-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-4-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
              },
              "yValue": -35,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1580457823274
    },
    "a-5": {
      "id": "a-5",
      "title": "FeatureImageMovement15",
      "continuousParameterGroups": [{
        "id": "a-5-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-5-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-5-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5e3396fc806f6d6e2f023b13|59516f1e-9e85-dbb6-7ebf-5defcf3cf01b"
              },
              "yValue": -15,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1580457823274
    },
    "a-6": {
      "id": "a-6",
      "title": "iPhoneModelShow",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-6-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e3396fc806f6d6e2f023b13|cc634302-6384-b323-fe63-ce9823a55b33"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-6-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 7000,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e3396fc806f6d6e2f023b13|cc634302-6384-b323-fe63-ce9823a55b33"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-6-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e3396fc806f6d6e2f023b13|cc634302-6384-b323-fe63-ce9823a55b33"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1580464470226,
      "useFirstGroupAsInitialState": true
    },
    "a-8": {
      "id": "a-8",
      "title": "FeatureImageMovement15 3",
      "continuousParameterGroups": [{
        "id": "a-8-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 50,
          "actionItems": [{
            "id": "a-8-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|821ebafa-adbf-4b9c-b2ea-b9c560ef5b3d"
              },
              "yValue": 5,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-8-n-6",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|e70f72f1-5bc4-1ade-09a9-0048c88b27d1"
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-8-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|821ebafa-adbf-4b9c-b2ea-b9c560ef5b3d"
              },
              "yValue": -5,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-8-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|e70f72f1-5bc4-1ade-09a9-0048c88b27d1"
              },
              "yValue": -10,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1580457823274
    },
    "a-9": {
      "id": "a-9",
      "title": "LensGridRotate",
      "continuousParameterGroups": [{
        "id": "a-9-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 50,
          "actionItems": [{
            "id": "a-9-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|74879370-485d-0117-559f-9afde0b92f0f"
              },
              "zValue": 180,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-9-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|74879370-485d-0117-559f-9afde0b92f0f"
              },
              "zValue": 360,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1580480184217
    },
    "a-11": {
      "id": "a-11",
      "title": "LensTitleShow",
      "continuousParameterGroups": [{
        "id": "a-11-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 63,
          "actionItems": [{
            "id": "a-11-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|f3802386-e9a5-c80a-5a9f-9059c89bd74d"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-11-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|f3802386-e9a5-c80a-5a9f-9059c89bd74d"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-11-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|f3802386-e9a5-c80a-5a9f-9059c89bd74d"
              },
              "yValue": -5,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-11-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|f3802386-e9a5-c80a-5a9f-9059c89bd74d"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580480975036
    },
    "a-12": {
      "id": "a-12",
      "title": "LensTitleShow 2",
      "continuousParameterGroups": [{
        "id": "a-12-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 64,
          "actionItems": [{
            "id": "a-12-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".heading-5",
                "selectorGuids": ["89ea56fa-2333-a507-881e-c7ede78786c2"]
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-12-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".heading-5",
                "selectorGuids": ["89ea56fa-2333-a507-881e-c7ede78786c2"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-12-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".heading-5",
                "selectorGuids": ["89ea56fa-2333-a507-881e-c7ede78786c2"]
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-12-n-8",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".heading-5",
                "selectorGuids": ["89ea56fa-2333-a507-881e-c7ede78786c2"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580480975036
    },
    "a-10": {
      "id": "a-10",
      "title": "LensGridRotate 2",
      "continuousParameterGroups": [{
        "id": "a-10-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-10-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".grid-4",
                "selectorGuids": ["2bccef34-e4d0-d1d5-2bc5-79706f0fa87e"]
              },
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-10-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".grid-4",
                "selectorGuids": ["2bccef34-e4d0-d1d5-2bc5-79706f0fa87e"]
              },
              "zValue": 180,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1580480184217
    },
    "a-13": {
      "id": "a-13",
      "title": "Camera1",
      "continuousParameterGroups": [{
        "id": "a-13-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-13-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|72f490db-862f-74dd-113d-fe617fa7bc76"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 50,
          "actionItems": [{
            "id": "a-13-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|72f490db-862f-74dd-113d-fe617fa7bc76"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580486085590
    },
    "a-14": {
      "id": "a-14",
      "title": "Camera1 2",
      "continuousParameterGroups": [{
        "id": "a-14-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 50,
          "actionItems": [{
            "id": "a-14-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".imagegallary._1",
                "selectorGuids": ["4865fd62-8517-3f59-46bc-37e2161b77db", "54049925-3e6b-acac-d4a3-c1cea2ee54b5"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-14-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".imagegallary._1",
                "selectorGuids": ["4865fd62-8517-3f59-46bc-37e2161b77db", "54049925-3e6b-acac-d4a3-c1cea2ee54b5"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580486085590
    },
    "a-15": {
      "id": "a-15",
      "title": "Camera1 3",
      "continuousParameterGroups": [{
        "id": "a-15-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 50,
          "actionItems": [{
            "id": "a-15-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".imagegallary._2",
                "selectorGuids": ["4865fd62-8517-3f59-46bc-37e2161b77db", "17059580-2bdd-81c5-aa79-ee8877c2465a"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-15-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".imagegallary._2",
                "selectorGuids": ["4865fd62-8517-3f59-46bc-37e2161b77db", "17059580-2bdd-81c5-aa79-ee8877c2465a"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580486085590
    },
    "a-16": {
      "id": "a-16",
      "title": "CameraWideAngleAnalysis",
      "continuousParameterGroups": [{
        "id": "a-16-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-16-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|c469cfd6-5aec-e3d3-f0f2-5448e022d9b5"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 34,
          "actionItems": [{
            "id": "a-16-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|c469cfd6-5aec-e3d3-f0f2-5448e022d9b5"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-16-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".image-9",
                "selectorGuids": ["5449062c-8a81-2555-82fd-c8f48a33a444"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 66,
          "actionItems": [{
            "id": "a-16-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".image-9",
                "selectorGuids": ["5449062c-8a81-2555-82fd-c8f48a33a444"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580490618072
    },
    "a-17": {
      "id": "a-17",
      "title": "WideAngleScrollBar",
      "continuousParameterGroups": [{
        "id": "a-17-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-17-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|30d1bf99-a17b-52fa-9b7a-373b13182503"
              },
              "xValue": -20,
              "xUnit": "VW",
              "yUnit": "VW",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 1,
          "actionItems": [{
            "id": "a-17-n-13",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|30d1bf99-a17b-52fa-9b7a-373b13182503"
              },
              "xValue": 1,
              "locked": false
            }
          }]
        }, {
          "keyframe": 6,
          "actionItems": [{
            "id": "a-17-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|afa16cd3-eefd-63a1-7c08-1deaab0781a3"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 13,
          "actionItems": [{
            "id": "a-17-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|afa16cd3-eefd-63a1-7c08-1deaab0781a3"
              },
              "value": 0.4,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 25,
          "actionItems": [{
            "id": "a-17-n-9",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|57731eb4-3b35-8440-98d1-0f611617e211"
              },
              "value": 0.4,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 32,
          "actionItems": [{
            "id": "a-17-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|57731eb4-3b35-8440-98d1-0f611617e211"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 33,
          "actionItems": [{
            "id": "a-17-n-11",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|30d1bf99-a17b-52fa-9b7a-373b13182503"
              },
              "xValue": 2,
              "locked": false
            }
          }]
        }, {
          "keyframe": 39,
          "actionItems": [{
            "id": "a-17-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|57731eb4-3b35-8440-98d1-0f611617e211"
              },
              "value": 0.4,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 56,
          "actionItems": [{
            "id": "a-17-n-10",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|01b5a8a3-b2da-7d8c-e75d-effd17c5eade"
              },
              "value": 0.4,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 63,
          "actionItems": [{
            "id": "a-17-n-8",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|01b5a8a3-b2da-7d8c-e75d-effd17c5eade"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 64,
          "actionItems": [{
            "id": "a-17-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|30d1bf99-a17b-52fa-9b7a-373b13182503"
              },
              "xValue": 20,
              "xUnit": "VW",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-12",
            "actionTypeId": "TRANSFORM_SCALE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|30d1bf99-a17b-52fa-9b7a-373b13182503"
              },
              "xValue": 1.1,
              "locked": false
            }
          }]
        }]
      }],
      "createdOn": 1580491348159
    },
    "a-18": {
      "id": "a-18",
      "title": "CameraInterface",
      "continuousParameterGroups": [{
        "id": "a-18-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-18-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|c3fd9f31-d8ff-53ec-acf0-62db05a8285e"
              },
              "value": 0.2,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 20,
          "actionItems": [{
            "id": "a-18-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|c3fd9f31-d8ff-53ec-acf0-62db05a8285e"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-18-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9d29958d-4dbb-7348-a18d-0d7e1674006c"
              },
              "value": 0.3,
              "unit": ""
            }
          }, {
            "id": "a-18-n-9",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9d29958d-4dbb-7348-a18d-0d7e1674006c"
              },
              "yValue": 10,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 40,
          "actionItems": [{
            "id": "a-18-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9d29958d-4dbb-7348-a18d-0d7e1674006c"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-18-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|c3fd9f31-d8ff-53ec-acf0-62db05a8285e"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 81,
          "actionItems": [{
            "id": "a-18-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|c3fd9f31-d8ff-53ec-acf0-62db05a8285e"
              },
              "value": 0.2,
              "unit": ""
            }
          }, {
            "id": "a-18-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9d29958d-4dbb-7348-a18d-0d7e1674006c"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }, {
            "id": "a-18-n-7",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9d29958d-4dbb-7348-a18d-0d7e1674006c"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 89,
          "actionItems": [{
            "id": "a-18-n-8",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9d29958d-4dbb-7348-a18d-0d7e1674006c"
              },
              "value": 0.2,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580525735954
    },
    "a-20": {
      "id": "a-20",
      "title": "CloserLookMovement1",
      "continuousParameterGroups": [{
        "id": "a-20-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 50,
          "actionItems": [{
            "id": "a-20-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9f95ce81-4e2d-4abd-f934-e1644bcfc463"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-20-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "5e3396fc806f6d6e2f023b13|9f95ce81-4e2d-4abd-f934-e1644bcfc463"
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1580529822789
    },
    "a-21": {
      "id": "a-21",
      "title": "4KIntroPhotoMovement",
      "continuousParameterGroups": [{
        "id": "a-21-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-21-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|8fdc3107-3430-7a10-acf1-064ff82b8999"
              },
              "yValue": -20,
              "xUnit": "PX",
              "yUnit": "VH",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-21-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d6e2f023b13|8fdc3107-3430-7a10-acf1-064ff82b8999"
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1580530342171
    },
    "a-22": {
      "id": "a-22",
      "title": "LottieAnimation",
      "continuousParameterGroups": [{
        "id": "a-22-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-22-n",
            "actionTypeId": "PLUGIN_LOTTIE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".lottie-animation-2",
                "selectorGuids": ["a32ca067-27e8-83da-3425-3c8f753ec189"]
              },
              "value": 0
            }
          }]
        }, {
          "keyframe": 1,
          "actionItems": [{
            "id": "a-22-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".lottie-animation-2",
                "selectorGuids": ["a32ca067-27e8-83da-3425-3c8f753ec189"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 10,
          "actionItems": [{
            "id": "a-22-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".lottie-animation-2",
                "selectorGuids": ["a32ca067-27e8-83da-3425-3c8f753ec189"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 90,
          "actionItems": [{
            "id": "a-22-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".lottie-animation-2",
                "selectorGuids": ["a32ca067-27e8-83da-3425-3c8f753ec189"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-22-n-2",
            "actionTypeId": "PLUGIN_LOTTIE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".lottie-animation-2",
                "selectorGuids": ["a32ca067-27e8-83da-3425-3c8f753ec189"]
              },
              "value": 100
            }
          }, {
            "id": "a-22-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".lottie-animation-2",
                "selectorGuids": ["a32ca067-27e8-83da-3425-3c8f753ec189"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1580567694309
    },
    "a-23": {
      "id": "a-23",
      "title": "LoadingLogoFade",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-23-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e3396fc806f6d6e2f023b13|1fb4b36b-d295-1376-f281-30a64318a69c"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-23-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": [0.42, 0, 0.58, 1],
            "duration": 300,
            "target": {
              "id": "5e3396fc806f6d6e2f023b13|1fb4b36b-d295-1376-f281-30a64318a69c"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1580571130317,
      "useFirstGroupAsInitialState": false
    },
    "a-25": {
      "id": "a-25",
      "title": "2 - HeroSectionMovement",
      "continuousParameterGroups": [{
        "id": "a-25-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-25-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd4eb"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd4eb"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-25-n-4",
            "actionTypeId": "STYLE_FILTER",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd4eb"
              },
              "filters": [{
                "type": "blur",
                "filterId": "d67f",
                "value": 0,
                "unit": "px"
              }]
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-25-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd4eb"
              },
              "yValue": -400,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-6",
            "actionTypeId": "STYLE_FILTER",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd4eb"
              },
              "filters": [{
                "type": "blur",
                "filterId": "2b1e",
                "value": 15,
                "unit": "px"
              }]
            }
          }, {
            "id": "a-25-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd4eb"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1581084661375
    },
    "a-26": {
      "id": "a-26",
      "title": "2 - HeroTextMoveMent",
      "continuousParameterGroups": [{
        "id": "a-26-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-26-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd503"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-26-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd501"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-26-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd503"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-26-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|39866e2e-62d9-68d6-1c4c-b94b229dd501"
              },
              "yValue": -300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1581084792573
    },
    "a-27": {
      "id": "a-27",
      "title": "2 - AnimationMovement",
      "continuousParameterGroups": [{
        "id": "a-27-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-27-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".animation1",
                "selectorGuids": ["c91a0136-45e3-ebb2-5192-5f517fba0f57"]
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-3",
            "actionTypeId": "STYLE_FILTER",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".animation1",
                "selectorGuids": ["c91a0136-45e3-ebb2-5192-5f517fba0f57"]
              },
              "filters": [{
                "type": "blur",
                "filterId": "dd77",
                "value": 0,
                "unit": "px"
              }]
            }
          }, {
            "id": "a-27-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".animation1",
                "selectorGuids": ["c91a0136-45e3-ebb2-5192-5f517fba0f57"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-27-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".animation1",
                "selectorGuids": ["c91a0136-45e3-ebb2-5192-5f517fba0f57"]
              },
              "yValue": -500,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-5",
            "actionTypeId": "STYLE_FILTER",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".animation1",
                "selectorGuids": ["c91a0136-45e3-ebb2-5192-5f517fba0f57"]
              },
              "filters": [{
                "type": "blur",
                "filterId": "7fac",
                "value": 15,
                "unit": "px"
              }]
            }
          }, {
            "id": "a-27-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".animation1",
                "selectorGuids": ["c91a0136-45e3-ebb2-5192-5f517fba0f57"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1581084932788
    },
    "a-28": {
      "id": "a-28",
      "title": "2 - LoadingIconFade",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-28-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 400,
            "target": {
              "id": "5e3396fc806f6d5522023b1a|b8da8dc8-0cfb-4a43-0991-e38b1877315b"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-28-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 10,
            "target": {
              "id": "5e3396fc806f6d5522023b1a|b8da8dc8-0cfb-4a43-0991-e38b1877315b"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-28-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 10,
            "target": {
              "id": "5e3396fc806f6d5522023b1a|b8da8dc8-0cfb-4a43-0991-e38b1877315b"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-28-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e3396fc806f6d5522023b1a|b8da8dc8-0cfb-4a43-0991-e38b1877315b"
            },
            "yValue": -100,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }],
      "createdOn": 1581085053553,
      "useFirstGroupAsInitialState": false
    },
    "a-29": {
      "id": "a-29",
      "title": "2 - BackgroundFade",
      "continuousParameterGroups": [{
        "id": "a-29-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-29-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|77373e4d-edd4-b847-4285-79f8b76068cc"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "keyframe": 20,
          "actionItems": [{
            "id": "a-29-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5e3396fc806f6d5522023b1a|77373e4d-edd4-b847-4285-79f8b76068cc"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }]
      }],
      "createdOn": 1581085984054
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});
