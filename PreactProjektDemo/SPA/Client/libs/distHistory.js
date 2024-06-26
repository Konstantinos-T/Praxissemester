var t,
  e = t || (t = {});
function n(t) {
  t.preventDefault(), (t.returnValue = "");
}
function a() {
  let t = [];
  return {
    get length() {
      return t.length;
    },
    push: (e) => (
      t.push(e),
      function () {
        t = t.filter((t) => t !== e);
      }
    ),
    call(e) {
      t.forEach((t) => t && t(e));
    },
  };
}
function l() {
  return Math.random().toString(36).substr(2, 8);
}
function i({ pathname: t = "/", search: e = "", hash: n = "" }) {
  return t + e + n;
}
function r(t) {
  let e = {};
  if (t) {
    var n = t.indexOf("#");
    0 <= n && ((e.hash = t.substr(n)), (t = t.substr(0, n))),
      0 <= (n = t.indexOf("?")) &&
        ((e.search = t.substr(n)), (t = t.substr(0, n))),
      t && (e.pathname = t);
  }
  return e;
}
function o(e = {}) {
  function o() {
    let { pathname: t, search: e, hash: n } = h.location,
      a = g.state || {};
    return [
      a.idx,
      {
        pathname: t,
        search: e,
        hash: n,
        state: a.usr || null,
        key: a.key || "default",
      },
    ];
  }
  function c(t) {
    return "string" == typeof t ? t : i(t);
  }
  function s(t, e = null) {
    return Object.assign(
      Object.assign(Object.assign({}, b), "string" == typeof t ? r(t) : t),
      { state: e, key: l() }
    );
  }
  function u(t) {
    (d = t), ([y, b] = o()), k.call({ action: d, location: b });
  }
  function f(t) {
    g.go(t);
  }
  let { window: h = document.defaultView } = e,
    g = h.history,
    p = null;
  h.addEventListener("popstate", function () {
    if (p) m.call(p), (p = null);
    else {
      let e = t.Pop,
        [n, a] = o();
      if (m.length) {
        if (null != n) {
          let t = y - n;
          t &&
            ((p = {
              action: e,
              location: a,
              retry() {
                f(-1 * t);
              },
            }),
            f(t));
        }
      } else u(e);
    }
  });
  let d = t.Pop,
    [y, b] = o(),
    k = a(),
    m = a();
  return (
    null == y &&
      ((y = 0),
      g.replaceState(
        Object.assign(Object.assign({}, g.state), { idx: y }),
        ""
      )),
    {
      get action() {
        return d;
      },
      get location() {
        return b;
      },
      createHref: c,
      push: function e(n, a) {
        let l = t.Push,
          i = s(n, a);
        if (
          !m.length ||
          (m.call({
            action: l,
            location: i,
            retry: function () {
              e(n, a);
            },
          }),
          0)
        ) {
          let [t, e] = [{ usr: i.state, key: i.key, idx: y + 1 }, c(i)];
          try {
            g.pushState(t, "", e);
          } catch (r) {
            h.location.assign(e);
          }
          u(l);
        }
      },
      replace: function e(n, a) {
        let l = t.Replace,
          i = s(n, a);
        if (
          !m.length ||
          (m.call({
            action: l,
            location: i,
            retry: function () {
              e(n, a);
            },
          }),
          0)
        ) {
          let [t, e] = [{ usr: i.state, key: i.key, idx: y }, c(i)];
          g.replaceState(t, "", e), u(l);
        }
      },
      go: f,
      back() {
        f(-1);
      },
      forward() {
        f(1);
      },
      listen: (t) => k.push(t),
      block(t) {
        let e = m.push(t);
        return (
          1 === m.length && h.addEventListener("beforeunload", n),
          function () {
            e(), m.length || h.removeEventListener("beforeunload", n);
          }
        );
      },
    }
  );
}
function c(e = {}) {
  function o() {
    let { pathname: t = "/", search: e = "", hash: n = "" } = r(
        g.location.hash.substr(1)
      ),
      a = p.state || {};
    return [
      a.idx,
      {
        pathname: t,
        search: e,
        hash: n,
        state: a.usr || null,
        key: a.key || "default",
      },
    ];
  }
  function c() {
    if (d) O.call(d), (d = null);
    else {
      let e = t.Pop,
        [n, a] = o();
      if (O.length) {
        if (null != n) {
          let t = b - n;
          t &&
            ((d = {
              action: e,
              location: a,
              retry() {
                h(-1 * t);
              },
            }),
            h(t));
        }
      } else f(e);
    }
  }
  function s(t) {
    var e = document.querySelector("base"),
      n = "";
    return (
      e &&
        e.getAttribute("href") &&
        (n =
          -1 === (n = (e = g.location.href).indexOf("#")) ? e : e.slice(0, n)),
      (e = n) + "#" + ("string" == typeof t ? t : i(t))
    );
  }
  function u(t, e = null) {
    return Object.assign(
      Object.assign(Object.assign({}, k), "string" == typeof t ? r(t) : t),
      { state: e, key: l() }
    );
  }
  function f(t) {
    (y = t), ([b, k] = o()), m.call({ action: y, location: k });
  }
  function h(t) {
    p.go(t);
  }
  let { window: g = document.defaultView } = e,
    p = g.history,
    d = null;
  g.addEventListener("popstate", c),
    g.addEventListener("hashchange", () => {
      let [, t] = o();
      i(t) !== i(k) && c();
    });
  let y = t.Pop,
    [b, k] = o(),
    m = a(),
    O = a();
  return (
    null == b &&
      ((b = 0),
      p.replaceState(
        Object.assign(Object.assign({}, p.state), { idx: b }),
        ""
      )),
    {
      get action() {
        return y;
      },
      get location() {
        return k;
      },
      createHref: s,
      push: function e(n, a) {
        let l = t.Push,
          i = u(n, a);
        if (
          !O.length ||
          (O.call({
            action: l,
            location: i,
            retry: function () {
              e(n, a);
            },
          }),
          0)
        ) {
          let [t, e] = [{ usr: i.state, key: i.key, idx: b + 1 }, s(i)];
          try {
            p.pushState(t, "", e);
          } catch (r) {
            g.location.assign(e);
          }
          f(l);
        }
      },
      replace: function e(n, a) {
        let l = t.Replace,
          i = u(n, a);
        if (
          !O.length ||
          (O.call({
            action: l,
            location: i,
            retry: function () {
              e(n, a);
            },
          }),
          0)
        ) {
          let [t, e] = [{ usr: i.state, key: i.key, idx: b }, s(i)];
          p.replaceState(t, "", e), f(l);
        }
      },
      go: h,
      back() {
        h(-1);
      },
      forward() {
        h(1);
      },
      listen: (t) => m.push(t),
      block(t) {
        let e = O.push(t);
        return (
          1 === O.length && g.addEventListener("beforeunload", n),
          function () {
            e(), O.length || g.removeEventListener("beforeunload", n);
          }
        );
      },
    }
  );
}
function s(e = {}) {
  function n(t, e = null) {
    return Object.assign(
      Object.assign(Object.assign({}, d), "string" == typeof t ? r(t) : t),
      { state: e, key: l() }
    );
  }
  function o(t, e, n) {
    return !b.length || (b.call({ action: t, location: e, retry: n }), !1);
  }
  function c(t, e) {
    (p = t), (d = e), y.call({ action: p, location: d });
  }
  function s(e) {
    let n = Math.min(Math.max(g + e, 0), h.length - 1),
      a = t.Pop,
      l = h[n];
    o(a, l, function () {
      s(e);
    }) && ((g = n), c(a, l));
  }
  let { initialEntries: u = ["/"], initialIndex: f } = e,
    h = u.map((t) =>
      Object.assign(
        { pathname: "/", search: "", hash: "", state: null, key: l() },
        "string" == typeof t ? r(t) : t
      )
    ),
    g = Math.min(Math.max(null == f ? h.length - 1 : f, 0), h.length - 1),
    p = t.Pop,
    d = h[g],
    y = a(),
    b = a();
  return {
    get index() {
      return g;
    },
    get action() {
      return p;
    },
    get location() {
      return d;
    },
    createHref: function (t) {
      return "string" == typeof t ? t : i(t);
    },
    push: function e(a, l) {
      let i = t.Push,
        r = n(a, l);
      o(i, r, function () {
        e(a, l);
      }) && ((g += 1), h.splice(g, h.length, r), c(i, r));
    },
    replace: function e(a, l) {
      let i = t.Replace,
        r = n(a, l);
      o(i, r, function () {
        e(a, l);
      }) && ((h[g] = r), c(i, r));
    },
    go: s,
    back() {
      s(-1);
    },
    forward() {
      s(1);
    },
    listen: (t) => y.push(t),
    block: (t) => b.push(t),
  };
}
(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
export {
  t as Action,
  o as createBrowserHistory,
  c as createHashHistory,
  s as createMemoryHistory,
  i as createPath,
  r as parsePath,
};
//# sourceMappingURL=history.production.min.js.map
