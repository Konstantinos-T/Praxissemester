var n,
  l,
  u,
  i,
  t,
  o,
  r = {},
  f = [],
  e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function a(n, l, u) {
  var i,
    t,
    o,
    r = arguments,
    f = {};
  for (o in l)
    "key" == o ? (i = l[o]) : "ref" == o ? (t = l[o]) : (f[o] = l[o]);
  if (arguments.length > 3)
    for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (
    (null != u && (f.children = u),
    "function" == typeof n && null != n.defaultProps)
  )
    for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return v(n, f, i, t, null);
}
function v(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++n.__v : o,
  };
  return null != n.vnode && n.vnode(r), r;
}
function h() {
  return { current: null };
}
function y(n) {
  return n.children;
}
function p(n, l) {
  (this.props = n), (this.context = l);
}
function d(n, l) {
  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++)
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? d(n) : null;
}
function _(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    return _(n);
  }
}
function k(l) {
  ((!l.__d && (l.__d = !0) && u.push(l) && !b.__r++) ||
    t !== n.debounceRendering) &&
    ((t = n.debounceRendering) || i)(b);
}
function b() {
  for (var n; (b.__r = u.length); )
    (n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    })),
      (u = []),
      n.some(function (n) {
        var l, u, i, t, o, r;
        n.__d &&
          ((o = (t = (l = n).__v).__e),
          (r = l.__P) &&
            ((u = []),
            ((i = c({}, t)).__v = t.__v + 1),
            I(
              r,
              t,
              i,
              l.__n,
              void 0 !== r.ownerSVGElement,
              null != t.__h ? [o] : null,
              u,
              null == o ? d(t) : o,
              t.__h
            ),
            T(u, t),
            t.__e != o && _(t)));
      });
}
function m(n, l, u, i, t, o, e, c, s, a) {
  var h,
    p,
    _,
    k,
    b,
    m,
    w,
    A = (i && i.__k) || f,
    P = A.length;
  for (u.__k = [], h = 0; h < l.length; h++)
    if (
      null !=
      (k = u.__k[h] =
        null == (k = l[h]) || "boolean" == typeof k
          ? null
          : "string" == typeof k || "number" == typeof k || "bigint" == typeof k
          ? v(null, k, null, null, k)
          : Array.isArray(k)
          ? v(y, { children: k }, null, null, null)
          : k.__b > 0
          ? v(k.type, k.props, k.key, null, k.__v)
          : k)
    ) {
      if (
        ((k.__ = u),
        (k.__b = u.__b + 1),
        null === (_ = A[h]) || (_ && k.key == _.key && k.type === _.type))
      )
        A[h] = void 0;
      else
        for (p = 0; p < P; p++) {
          if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
            A[p] = void 0;
            break;
          }
          _ = null;
        }
      I(n, k, (_ = _ || r), t, o, e, c, s, a),
        (b = k.__e),
        (p = k.ref) &&
          _.ref != p &&
          (w || (w = []),
          _.ref && w.push(_.ref, null, k),
          w.push(p, k.__c || b, k)),
        null != b
          ? (null == m && (m = b),
            "function" == typeof k.type && null != k.__k && k.__k === _.__k
              ? (k.__d = s = g(k, s, n))
              : (s = x(n, k, _, A, b, s)),
            a || "option" !== u.type
              ? "function" == typeof u.type && (u.__d = s)
              : (n.value = ""))
          : s && _.__e == s && s.parentNode != n && (s = d(_));
    }
  for (u.__e = m, h = P; h--; )
    null != A[h] &&
      ("function" == typeof u.type &&
        null != A[h].__e &&
        A[h].__e == u.__d &&
        (u.__d = d(i, h + 1)),
      L(A[h], A[h]));
  if (w) for (h = 0; h < w.length; h++) z(w[h], w[++h], w[++h]);
}
function g(n, l, u) {
  var i, t;
  for (i = 0; i < n.__k.length; i++)
    (t = n.__k[i]) &&
      ((t.__ = n),
      (l =
        "function" == typeof t.type
          ? g(t, l, u)
          : x(u, t, t, n.__k, t.__e, l)));
  return l;
}
function w(n, l) {
  return (
    (l = l || []),
    null == n ||
      "boolean" == typeof n ||
      (Array.isArray(n)
        ? n.some(function (n) {
            w(n, l);
          })
        : l.push(n)),
    l
  );
}
function x(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) (r = l.__d), (l.__d = void 0);
  else if (null == u || t != o || null == t.parentNode)
    n: if (null == o || o.parentNode !== n) n.appendChild(t), (r = null);
    else {
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2)
        if (f == t) break n;
      n.insertBefore(t, o), (r = o);
    }
  return void 0 !== r ? r : t.nextSibling;
}
function A(n, l, u, i, t) {
  var o;
  for (o in u)
    "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);
  for (o in l)
    (t && "function" != typeof l[o]) ||
      "children" === o ||
      "key" === o ||
      "value" === o ||
      "checked" === o ||
      u[o] === l[o] ||
      C(n, o, l[o], u[o], i);
}
function P(n, l, u) {
  "-" === l[0]
    ? n.setProperty(l, u)
    : (n[l] =
        null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px");
}
function C(n, l, u, i, t) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;
    else {
      if (("string" == typeof i && (n.style.cssText = i = ""), i))
        for (l in i) (u && l in u) || P(n.style, l, "");
      if (u) for (l in u) (i && u[l] === i[l]) || P(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1])
    (o = l !== (l = l.replace(/Capture$/, ""))),
      (l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
      n.l || (n.l = {}),
      (n.l[l + o] = u),
      u
        ? i || n.addEventListener(l, o ? H : $, o)
        : n.removeEventListener(l, o ? H : $, o);
  else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
    else if (
      "href" !== l &&
      "list" !== l &&
      "form" !== l &&
      "tabIndex" !== l &&
      "download" !== l &&
      l in n
    )
      try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
    "function" == typeof u ||
      (null != u && (!1 !== u || ("a" === l[0] && "r" === l[1]))
        ? n.setAttribute(l, u)
        : n.removeAttribute(l));
  }
}
function $(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}
function H(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}
function I(l, u, i, t, o, r, f, e, s) {
  var a,
    v,
    h,
    d,
    _,
    k,
    b,
    g,
    w,
    x,
    A,
    P = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h &&
    ((s = i.__h), (e = u.__e = i.__e), (u.__h = null), (r = [e])),
    (a = n.__b) && a(u);
  try {
    n: if ("function" == typeof P) {
      if (
        ((g = u.props),
        (w = (a = P.contextType) && t[a.__c]),
        (x = a ? (w ? w.props.value : a.__) : t),
        i.__c
          ? (b = (v = u.__c = i.__c).__ = v.__E)
          : ("prototype" in P && P.prototype.render
              ? (u.__c = v = new P(g, x))
              : ((u.__c = v = new p(g, x)),
                (v.constructor = P),
                (v.render = M)),
            w && w.sub(v),
            (v.props = g),
            v.state || (v.state = {}),
            (v.context = x),
            (v.__n = t),
            (h = v.__d = !0),
            (v.__h = [])),
        null == v.__s && (v.__s = v.state),
        null != P.getDerivedStateFromProps &&
          (v.__s == v.state && (v.__s = c({}, v.__s)),
          c(v.__s, P.getDerivedStateFromProps(g, v.__s))),
        (d = v.props),
        (_ = v.state),
        h)
      )
        null == P.getDerivedStateFromProps &&
          null != v.componentWillMount &&
          v.componentWillMount(),
          null != v.componentDidMount && v.__h.push(v.componentDidMount);
      else {
        if (
          (null == P.getDerivedStateFromProps &&
            g !== d &&
            null != v.componentWillReceiveProps &&
            v.componentWillReceiveProps(g, x),
          (!v.__e &&
            null != v.shouldComponentUpdate &&
            !1 === v.shouldComponentUpdate(g, v.__s, x)) ||
            u.__v === i.__v)
        ) {
          (v.props = g),
            (v.state = v.__s),
            u.__v !== i.__v && (v.__d = !1),
            (v.__v = u),
            (u.__e = i.__e),
            (u.__k = i.__k),
            u.__k.forEach(function (n) {
              n && (n.__ = u);
            }),
            v.__h.length && f.push(v);
          break n;
        }
        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x),
          null != v.componentDidUpdate &&
            v.__h.push(function () {
              v.componentDidUpdate(d, _, k);
            });
      }
      (v.context = x),
        (v.props = g),
        (v.state = v.__s),
        (a = n.__r) && a(u),
        (v.__d = !1),
        (v.__v = u),
        (v.__P = l),
        (a = v.render(v.props, v.state, v.context)),
        (v.state = v.__s),
        null != v.getChildContext && (t = c(c({}, t), v.getChildContext())),
        h ||
          null == v.getSnapshotBeforeUpdate ||
          (k = v.getSnapshotBeforeUpdate(d, _)),
        (A = null != a && a.type === y && null == a.key ? a.props.children : a),
        m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, s),
        (v.base = u.__e),
        (u.__h = null),
        v.__h.length && f.push(v),
        b && (v.__E = v.__ = null),
        (v.__e = !1);
    } else
      null == r && u.__v === i.__v
        ? ((u.__k = i.__k), (u.__e = i.__e))
        : (u.__e = j(i.__e, u, i, t, o, r, f, s));
    (a = n.diffed) && a(u);
  } catch (l) {
    (u.__v = null),
      (s || null != r) &&
        ((u.__e = e), (u.__h = !!s), (r[r.indexOf(e)] = null)),
      n.__e(l, u, i);
  }
}
function T(l, u) {
  n.__c && n.__c(u, l),
    l.some(function (u) {
      try {
        (l = u.__h),
          (u.__h = []),
          l.some(function (n) {
            n.call(u);
          });
      } catch (l) {
        n.__e(l, u.__v);
      }
    });
}
function j(n, l, u, i, t, o, e, c) {
  var a,
    v,
    h,
    y,
    p = u.props,
    d = l.props,
    _ = l.type,
    k = 0;
  if (("svg" === _ && (t = !0), null != o))
    for (; k < o.length; k++)
      if ((a = o[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
        (n = a), (o[k] = null);
        break;
      }
  if (null == n) {
    if (null === _) return document.createTextNode(d);
    (n = t
      ? document.createElementNS("http://www.w3.org/2000/svg", _)
      : document.createElement(_, d.is && d)),
      (o = null),
      (c = !1);
  }
  if (null === _) p === d || (c && n.data === d) || (n.data = d);
  else {
    if (
      ((o = o && f.slice.call(n.childNodes)),
      (v = (p = u.props || r).dangerouslySetInnerHTML),
      (h = d.dangerouslySetInnerHTML),
      !c)
    ) {
      if (null != o)
        for (p = {}, y = 0; y < n.attributes.length; y++)
          p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) &&
        ((h && ((v && h.__html == v.__html) || h.__html === n.innerHTML)) ||
          (n.innerHTML = (h && h.__html) || ""));
    }
    if ((A(n, d, p, t, c), h)) l.__k = [];
    else if (
      ((k = l.props.children),
      m(
        n,
        Array.isArray(k) ? k : [k],
        l,
        u,
        i,
        t && "foreignObject" !== _,
        o,
        e,
        n.firstChild,
        c
      ),
      null != o)
    )
      for (k = o.length; k--; ) null != o[k] && s(o[k]);
    c ||
      ("value" in d &&
        void 0 !== (k = d.value) &&
        (k !== n.value || ("progress" === _ && !k)) &&
        C(n, "value", k, p.value, !1),
      "checked" in d &&
        void 0 !== (k = d.checked) &&
        k !== n.checked &&
        C(n, "checked", k, p.checked, !1));
  }
  return n;
}
function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : (l.current = u);
  } catch (l) {
    n.__e(l, i);
  }
}
function L(l, u, i) {
  var t, o, r;
  if (
    (n.unmount && n.unmount(l),
    (t = l.ref) && ((t.current && t.current !== l.__e) || z(t, null, u)),
    i || "function" == typeof l.type || (i = null != (o = l.__e)),
    (l.__e = l.__d = void 0),
    null != (t = l.__c))
  ) {
    if (t.componentWillUnmount)
      try {
        t.componentWillUnmount();
      } catch (l) {
        n.__e(l, u);
      }
    t.base = t.__P = null;
  }
  if ((t = l.__k)) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
  null != o && s(o);
}
function M(n, l, u) {
  return this.constructor(n, u);
}
function N(l, u, i) {
  var t, o, e;
  n.__ && n.__(l, u),
    (o = (t = "function" == typeof i) ? null : (i && i.__k) || u.__k),
    (e = []),
    I(
      u,
      (l = ((!t && i) || u).__k = a(y, null, [l])),
      o || r,
      r,
      void 0 !== u.ownerSVGElement,
      !t && i
        ? [i]
        : o
        ? null
        : u.firstChild
        ? f.slice.call(u.childNodes)
        : null,
      e,
      !t && i ? i : o ? o.__e : u.firstChild,
      t
    ),
    T(e, l);
}
function O(n, l) {
  N(n, l, O);
}
function S(n, l, u) {
  var i,
    t,
    o,
    r = arguments,
    f = c({}, n.props);
  for (o in l)
    "key" == o ? (i = l[o]) : "ref" == o ? (t = l[o]) : (f[o] = l[o]);
  if (arguments.length > 3)
    for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return (
    null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null)
  );
}
function q(n, l) {
  var u = {
    __c: (l = "__cC" + o++),
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return (
        this.getChildContext ||
          ((u = []),
          ((i = {})[l] = this),
          (this.getChildContext = function () {
            return i;
          }),
          (this.shouldComponentUpdate = function (n) {
            this.props.value !== n.value && u.some(k);
          }),
          (this.sub = function (n) {
            u.push(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function () {
              u.splice(u.indexOf(n), 1), l && l.call(n);
            };
          })),
        n.children
      );
    },
  };
  return (u.Provider.__ = u.Consumer.contextType = u);
}
(n = {
  __e: function (n, l) {
    for (var u, i, t; (l = l.__); )
      if ((u = l.__c) && !u.__)
        try {
          if (
            ((i = u.constructor) &&
              null != i.getDerivedStateFromError &&
              (u.setState(i.getDerivedStateFromError(n)), (t = u.__d)),
            null != u.componentDidCatch &&
              (u.componentDidCatch(n), (t = u.__d)),
            t)
          )
            return (u.__E = u);
        } catch (l) {
          n = l;
        }
    throw n;
  },
  __v: 0,
}),
  (l = function (n) {
    return null != n && void 0 === n.constructor;
  }),
  (p.prototype.setState = function (n, l) {
    var u;
    (u =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = c({}, this.state))),
      "function" == typeof n && (n = n(c({}, u), this.props)),
      n && c(u, n),
      null != n && this.__v && (l && this.__h.push(l), k(this));
  }),
  (p.prototype.forceUpdate = function (n) {
    this.__v && ((this.__e = !0), n && this.__h.push(n), k(this));
  }),
  (p.prototype.render = y),
  (u = []),
  (i =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (b.__r = 0),
  (o = 0);
export {
  N as render,
  O as hydrate,
  a as createElement,
  a as h,
  y as Fragment,
  h as createRef,
  l as isValidElement,
  p as Component,
  S as cloneElement,
  q as createContext,
  w as toChildArray,
  n as options,
};
