import * as Oe from "react";
import Ae, { forwardRef as ar, useEffect as fe, createContext as cr, useLayoutEffect as lr, useContext as ur, useMemo as On, useRef as Ee, useCallback as st, useDebugValue as fr, memo as dr, useState as se } from "react";
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $e = { exports: {} }, De = {};
var $t;
function hr() {
  if ($t) return De;
  $t = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return De.Fragment = t, De.jsx = n, De.jsxs = n, De;
}
var Pe = {};
var Vt;
function mr() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === V ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case b:
          return "Fragment";
        case w:
          return "Profiler";
        case R:
          return "StrictMode";
        case k:
          return "Suspense";
        case D:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case m:
            return "Portal";
          case j:
            return d.displayName || "Context";
          case v:
            return (d._context.displayName || "Context") + ".Consumer";
          case x:
            var S = d.render;
            return d = d.displayName, d || (d = S.displayName || S.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case O:
            return S = d.displayName || null, S !== null ? S : e(d.type) || "Memo";
          case A:
            S = d._payload, d = d._init;
            try {
              return e(d(S));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function n(d) {
      try {
        t(d);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var T = S.error, P = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(d);
      }
    }
    function r(d) {
      if (d === b) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === A)
        return "<...>";
      try {
        var S = e(d);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var d = q.A;
      return d === null ? null : d.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (L.call(d, "key")) {
        var S = Object.getOwnPropertyDescriptor(d, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function a(d, S) {
      function T() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: T,
        configurable: !0
      });
    }
    function p() {
      var d = e(this.type);
      return pe[d] || (pe[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function f(d, S, T, P, ne, he) {
      var F = T.ref;
      return d = {
        $$typeof: l,
        type: d,
        key: S,
        props: T,
        _owner: P
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function u(d, S, T, P, ne, he) {
      var F = S.children;
      if (F !== void 0)
        if (P)
          if (N(F)) {
            for (P = 0; P < F.length; P++)
              h(F[P]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(F);
      if (L.call(S, "key")) {
        F = e(d);
        var me = Object.keys(S).filter(function(Be) {
          return Be !== "key";
        });
        P = 0 < me.length ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}", ye[F + P] || (me = 0 < me.length ? "{" + me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          F,
          me,
          F
        ), ye[F + P] = !0);
      }
      if (F = null, T !== void 0 && (n(T), F = "" + T), i(S) && (n(S.key), F = "" + S.key), "key" in S) {
        T = {};
        for (var Re in S)
          Re !== "key" && (T[Re] = S[Re]);
      } else T = S;
      return F && a(
        T,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), f(
        d,
        F,
        T,
        s(),
        ne,
        he
      );
    }
    function h(d) {
      E(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === A && (d._payload.status === "fulfilled" ? E(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function E(d) {
      return typeof d == "object" && d !== null && d.$$typeof === l;
    }
    var g = Ae, l = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), R = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), V = /* @__PURE__ */ Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, N = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var H, pe = {}, G = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), ee = Q(r(o)), ye = {};
    Pe.Fragment = b, Pe.jsx = function(d, S, T) {
      var P = 1e4 > q.recentlyCreatedOwnerStacks++;
      return u(
        d,
        S,
        T,
        !1,
        P ? Error("react-stack-top-frame") : G,
        P ? Q(r(d)) : ee
      );
    }, Pe.jsxs = function(d, S, T) {
      var P = 1e4 > q.recentlyCreatedOwnerStacks++;
      return u(
        d,
        S,
        T,
        !0,
        P ? Error("react-stack-top-frame") : G,
        P ? Q(r(d)) : ee
      );
    };
  })()), Pe;
}
var qt;
function br() {
  return qt || (qt = 1, process.env.NODE_ENV === "production" ? $e.exports = hr() : $e.exports = mr()), $e.exports;
}
var y = br(), ot = { exports: {} };
var Ht;
function yr() {
  return Ht || (Ht = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var a = arguments[i];
          a && (o = s(o, r(a)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var i = "";
        for (var a in o)
          t.call(o, a) && o[a] && (i = s(i, a));
        return i;
      }
      function s(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(ot)), ot.exports;
}
var Er = yr();
const gr = /* @__PURE__ */ pr(Er), ve = ar((e, t) => {
  const {
    size: n,
    variant: r,
    style: s,
    // Can just use small instead of size="sm"
    small: o,
    large: i,
    onClick: a,
    className: p,
    disabled: f,
    active: u,
    type: h,
    onMouseDown: E,
    onMouseUp: g,
    onMouseLeave: l,
    onTouchStart: m,
    onTouchEnd: b,
    ...R
  } = e;
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      ref: t,
      ...h && { type: "submit" },
      disabled: f,
      style: s,
      onMouseDown: E,
      onMouseUp: g,
      onMouseLeave: l,
      onTouchStart: m,
      onTouchEnd: b,
      className: gr(
        `btn ${r ? `btn-${r}` : "btn-articles"}`,
        {
          [p]: p,
          "btn-lg": i,
          "btn-sm": o,
          active: u,
          [`btn-${n}`]: n
        }
      ),
      onClick: a,
      children: e.children
    }
  );
});
ve.displayName = "ArticlesButton";
function Xo() {
  if (typeof window > "u") return null;
  const e = new URLSearchParams(window.location.search), t = Object.fromEntries(e);
  let { launcher_mode: n } = t;
  return n = n === "1", n ? /* @__PURE__ */ y.jsxs(
    ve,
    {
      className: "w-100",
      small: !0,
      style: {
        zIndex: 10,
        position: "relative"
      },
      onClick: () => {
        window.location.href = "https://games.articles.media";
      },
      children: [
        /* @__PURE__ */ y.jsx("i", { className: "fad fa-gamepad" }),
        "Return to Games"
      ]
    }
  ) : /* @__PURE__ */ y.jsxs(
    ve,
    {
      className: "w-100",
      small: !0,
      style: {
        zIndex: 10,
        position: "relative"
      },
      onClick: () => {
        window.location.href = "https://games.articles.media";
      },
      children: [
        /* @__PURE__ */ y.jsx("i", { className: "fad fa-gamepad" }),
        "View our other games"
      ]
    }
  );
}
function Zo({
  darkMode: e
}) {
  return fe(() => {
  }, []), fe(() => {
    const t = document.createElement("script");
    return t.src = "https://accounts.articles.media/js/ad.js", t.async = !0, document.body.appendChild(t), () => {
      document.body.removeChild(t);
    };
  }, []), /* @__PURE__ */ y.jsx("div", { className: "", children: /* @__PURE__ */ y.jsx("div", { className: "articles-media-ad" }) });
}
function xn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wr } = Object.prototype, { getPrototypeOf: Ct } = Object, { iterator: Xe, toStringTag: vn } = Symbol, Ze = /* @__PURE__ */ ((e) => (t) => {
  const n = wr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => Ze(t) === e), Qe = (e) => (t) => typeof t === e, { isArray: Ne } = Array, Te = Qe("undefined");
function ke(e) {
  return e !== null && !Te(e) && e.constructor !== null && !Te(e.constructor) && Y(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tn = oe("ArrayBuffer");
function Sr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Tn(e.buffer), t;
}
const Rr = Qe("string"), Y = Qe("function"), An = Qe("number"), Fe = (e) => e !== null && typeof e == "object", _r = (e) => e === !0 || e === !1, Je = (e) => {
  if (Ze(e) !== "object")
    return !1;
  const t = Ct(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(vn in e) && !(Xe in e);
}, Or = (e) => {
  if (!Fe(e) || ke(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, xr = oe("Date"), vr = oe("File"), Tr = oe("Blob"), Ar = oe("FileList"), Nr = (e) => Fe(e) && Y(e.pipe), Cr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Y(e.append) && ((t = Ze(e)) === "formdata" || // detect form-data instance
  t === "object" && Y(e.toString) && e.toString() === "[object FormData]"));
}, jr = oe("URLSearchParams"), [Dr, Pr, Lr, kr] = ["ReadableStream", "Request", "Response", "Headers"].map(oe), Fr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ie(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ne(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (ke(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function Nn(e, t) {
  if (ke(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Cn = (e) => !Te(e) && e !== ge;
function yt() {
  const { caseless: e, skipUndefined: t } = Cn(this) && this || {}, n = {}, r = (s, o) => {
    const i = e && Nn(n, o) || o;
    Je(n[i]) && Je(s) ? n[i] = yt(n[i], s) : Je(s) ? n[i] = yt({}, s) : Ne(s) ? n[i] = s.slice() : (!t || !Te(s)) && (n[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && Ie(arguments[s], r);
  return n;
}
const Ir = (e, t, n, { allOwnKeys: r } = {}) => (Ie(t, (s, o) => {
  n && Y(s) ? e[o] = xn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ur = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Mr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Br = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Ct(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, $r = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Vr = (e) => {
  if (!e) return null;
  if (Ne(e)) return e;
  let t = e.length;
  if (!An(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, qr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ct(Uint8Array)), Hr = (e, t) => {
  const r = (e && e[Xe]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Wr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, zr = oe("HTMLFormElement"), Jr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Wt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Kr = oe("RegExp"), jn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ie(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Gr = (e) => {
  jn(e, (t, n) => {
    if (Y(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Y(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Yr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Ne(e) ? r(e) : r(String(e).split(t)), n;
}, Xr = () => {
}, Zr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Qr(e) {
  return !!(e && Y(e.append) && e[vn] === "FormData" && e[Xe]);
}
const es = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Fe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ke(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Ne(r) ? [] : {};
        return Ie(r, (i, a) => {
          const p = n(i, s + 1);
          !Te(p) && (o[a] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ts = oe("AsyncFunction"), ns = (e) => e && (Fe(e) || Y(e)) && Y(e.then) && Y(e.catch), Dn = ((e, t) => e ? setImmediate : t ? ((n, r) => (ge.addEventListener("message", ({ source: s, data: o }) => {
  s === ge && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Y(ge.postMessage)
), rs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ge) : typeof process < "u" && process.nextTick || Dn, ss = (e) => e != null && Y(e[Xe]), c = {
  isArray: Ne,
  isArrayBuffer: Tn,
  isBuffer: ke,
  isFormData: Cr,
  isArrayBufferView: Sr,
  isString: Rr,
  isNumber: An,
  isBoolean: _r,
  isObject: Fe,
  isPlainObject: Je,
  isEmptyObject: Or,
  isReadableStream: Dr,
  isRequest: Pr,
  isResponse: Lr,
  isHeaders: kr,
  isUndefined: Te,
  isDate: xr,
  isFile: vr,
  isBlob: Tr,
  isRegExp: Kr,
  isFunction: Y,
  isStream: Nr,
  isURLSearchParams: jr,
  isTypedArray: qr,
  isFileList: Ar,
  forEach: Ie,
  merge: yt,
  extend: Ir,
  trim: Fr,
  stripBOM: Ur,
  inherits: Mr,
  toFlatObject: Br,
  kindOf: Ze,
  kindOfTest: oe,
  endsWith: $r,
  toArray: Vr,
  forEachEntry: Hr,
  matchAll: Wr,
  isHTMLForm: zr,
  hasOwnProperty: Wt,
  hasOwnProp: Wt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jn,
  freezeMethods: Gr,
  toObjectSet: Yr,
  toCamelCase: Jr,
  noop: Xr,
  toFiniteNumber: Zr,
  findKey: Nn,
  global: ge,
  isContextDefined: Cn,
  isSpecCompliantForm: Qr,
  toJSONObject: es,
  isAsyncFn: ts,
  isThenable: ns,
  setImmediate: Dn,
  asap: rs,
  isIterable: ss
};
function _(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(_, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Pn = _.prototype, Ln = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ln[e] = { value: e };
});
Object.defineProperties(_, Ln);
Object.defineProperty(Pn, "isAxiosError", { value: !0 });
_.from = (e, t, n, r, s, o) => {
  const i = Object.create(Pn);
  c.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", p = t == null && e ? e.code : t;
  return _.call(i, a, p, n, r, s), e && i.cause == null && Object.defineProperty(i, "cause", { value: e, configurable: !0 }), i.name = e && e.name || "Error", o && Object.assign(i, o), i;
};
const os = null;
function Et(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function kn(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = kn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function is(e) {
  return c.isArray(e) && !e.some(Et);
}
const as = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function et(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, b) {
    return !c.isUndefined(b[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(l) {
    if (l === null) return "";
    if (c.isDate(l))
      return l.toISOString();
    if (c.isBoolean(l))
      return l.toString();
    if (!p && c.isBlob(l))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(l) || c.isTypedArray(l) ? p && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function u(l, m, b) {
    let R = l;
    if (l && !b && typeof l == "object") {
      if (c.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), l = JSON.stringify(l);
      else if (c.isArray(l) && is(l) || (c.isFileList(l) || c.endsWith(m, "[]")) && (R = c.toArray(l)))
        return m = kn(m), R.forEach(function(v, j) {
          !(c.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? zt([m], j, o) : i === null ? m : m + "[]",
            f(v)
          );
        }), !1;
    }
    return Et(l) ? !0 : (t.append(zt(b, m, o), f(l)), !1);
  }
  const h = [], E = Object.assign(as, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: Et
  });
  function g(l, m) {
    if (!c.isUndefined(l)) {
      if (h.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(l), c.forEach(l, function(R, w) {
        (!(c.isUndefined(R) || R === null) && s.call(
          t,
          R,
          c.isString(w) ? w.trim() : w,
          m,
          E
        )) === !0 && g(R, m ? m.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Jt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function jt(e, t) {
  this._pairs = [], e && et(e, this, t);
}
const Fn = jt.prototype;
Fn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Fn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Jt);
  } : Jt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function cs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function In(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || cs;
  c.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = c.isURLSearchParams(t) ? t.toString() : new jt(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Kt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Un = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ls = typeof URLSearchParams < "u" ? URLSearchParams : jt, us = typeof FormData < "u" ? FormData : null, fs = typeof Blob < "u" ? Blob : null, ds = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ls,
    FormData: us,
    Blob: fs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Dt = typeof window < "u" && typeof document < "u", gt = typeof navigator == "object" && navigator || void 0, ps = Dt && (!gt || ["ReactNative", "NativeScript", "NS"].indexOf(gt.product) < 0), hs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ms = Dt && window.location.href || "http://localhost", bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Dt,
  hasStandardBrowserEnv: ps,
  hasStandardBrowserWebWorkerEnv: hs,
  navigator: gt,
  origin: ms
}, Symbol.toStringTag, { value: "Module" })), J = {
  ...bs,
  ...ds
};
function ys(e, t) {
  return et(e, new J.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return J.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Es(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function gs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Mn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), p = o >= n.length;
    return i = !i && c.isArray(s) ? s.length : i, p ? (c.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !c.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && c.isArray(s[i]) && (s[i] = gs(s[i])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, s) => {
      t(Es(r), s, n, 0);
    }), n;
  }
  return null;
}
function ws(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ue = {
  transitional: Un,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify(Mn(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ys(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return et(
          a ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ws(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ue.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? _.from(a, _.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: J.classes.FormData,
    Blob: J.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ue.headers[e] = {};
});
const Ss = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Rs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Ss[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Gt = /* @__PURE__ */ Symbol("internals");
function Le(e) {
  return e && String(e).trim().toLowerCase();
}
function Ke(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(Ke) : String(e);
}
function _s(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Os = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function it(e, t, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function xs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function vs(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let X = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, p, f) {
      const u = Le(p);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = c.findKey(s, u);
      (!h || s[h] === void 0 || f === !0 || f === void 0 && s[h] !== !1) && (s[h || p] = Ke(a));
    }
    const i = (a, p) => c.forEach(a, (f, u) => o(f, u, p));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (c.isString(t) && (t = t.trim()) && !Os(t))
      i(Rs(t), n);
    else if (c.isObject(t) && c.isIterable(t)) {
      let a = {}, p, f;
      for (const u of t) {
        if (!c.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = u[0]] = (p = a[f]) ? c.isArray(p) ? [...p, u[1]] : [p, u[1]] : u[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Le(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return _s(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Le(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || it(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Le(i), i) {
        const a = c.findKey(r, i);
        a && (!n || it(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || it(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, o) => {
      const i = c.findKey(r, o);
      if (i) {
        n[i] = Ke(s), delete n[o];
        return;
      }
      const a = t ? xs(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Ke(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && c.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Gt] = this[Gt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Le(i);
      r[a] || (vs(s, i), r[a] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
X.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(X.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(X);
function at(e, t) {
  const n = this || Ue, r = t || n, s = X.from(r.headers);
  let o = r.data;
  return c.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Bn(e) {
  return !!(e && e.__CANCEL__);
}
function Ce(e, t, n) {
  _.call(this, e ?? "canceled", _.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(Ce, _, {
  __CANCEL__: !0
});
function $n(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new _(
    "Request failed with status code " + n.status,
    [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ts(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function As(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const f = Date.now(), u = r[o];
    i || (i = f), n[s] = p, r[s] = f;
    let h = o, E = 0;
    for (; h !== s; )
      E += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const g = u && f - u;
    return g ? Math.round(E * 1e3 / g) : void 0;
  };
}
function Ns(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (f, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...f);
  };
  return [(...f) => {
    const u = Date.now(), h = u - n;
    h >= r ? i(f, u) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const Ye = (e, t, n = 3) => {
  let r = 0;
  const s = As(50, 250);
  return Ns((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, p = i - r, f = s(p), u = i <= a;
    r = i;
    const h = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: p,
      rate: f || void 0,
      estimated: f && a && u ? (a - i) / f : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Yt = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Xt = (e) => (...t) => c.asap(() => e(...t)), Cs = J.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, J.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(J.origin),
  J.navigator && /(msie|trident)/i.test(J.navigator.userAgent)
) : () => !0, js = J.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      c.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), c.isString(r) && a.push(`path=${r}`), c.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), c.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ds(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ps(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vn(e, t, n) {
  let r = !Ds(t);
  return e && (r || n == !1) ? Ps(e, t) : t;
}
const Zt = (e) => e instanceof X ? { ...e } : e;
function Se(e, t) {
  t = t || {};
  const n = {};
  function r(f, u, h, E) {
    return c.isPlainObject(f) && c.isPlainObject(u) ? c.merge.call({ caseless: E }, f, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
  }
  function s(f, u, h, E) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(f))
        return r(void 0, f, h, E);
    } else return r(f, u, h, E);
  }
  function o(f, u) {
    if (!c.isUndefined(u))
      return r(void 0, u);
  }
  function i(f, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, u);
  }
  function a(f, u, h) {
    if (h in t)
      return r(f, u);
    if (h in e)
      return r(void 0, f);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (f, u, h) => s(Zt(f), Zt(u), h, !0)
  };
  return c.forEach(Object.keys({ ...e, ...t }), function(u) {
    const h = p[u] || s, E = h(e[u], t[u], u);
    c.isUndefined(E) && h !== a || (n[u] = E);
  }), n;
}
const qn = (e) => {
  const t = Se({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = X.from(i), t.url = In(Vn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), c.isFormData(n)) {
    if (J.hasStandardBrowserEnv || J.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (c.isFunction(n.getHeaders)) {
      const p = n.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(p).forEach(([u, h]) => {
        f.includes(u.toLowerCase()) && i.set(u, h);
      });
    }
  }
  if (J.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || r !== !1 && Cs(t.url))) {
    const p = s && o && js.read(o);
    p && i.set(s, p);
  }
  return t;
}, Ls = typeof XMLHttpRequest < "u", ks = Ls && function(e) {
  return new Promise(function(n, r) {
    const s = qn(e);
    let o = s.data;
    const i = X.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: p, onDownloadProgress: f } = s, u, h, E, g, l;
    function m() {
      g && g(), l && l(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function R() {
      if (!b)
        return;
      const v = X.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: v,
        config: e,
        request: b
      };
      $n(function(D) {
        n(D), m();
      }, function(D) {
        r(D), m();
      }, x), b = null;
    }
    "onloadend" in b ? b.onloadend = R : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, b.onabort = function() {
      b && (r(new _("Request aborted", _.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function(j) {
      const x = j && j.message ? j.message : "Network Error", k = new _(x, _.ERR_NETWORK, e, b);
      k.event = j || null, r(k), b = null;
    }, b.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || Un;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), r(new _(
        j,
        x.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
        e,
        b
      )), b = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in b && c.forEach(i.toJSON(), function(j, x) {
      b.setRequestHeader(x, j);
    }), c.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), a && a !== "json" && (b.responseType = s.responseType), f && ([E, l] = Ye(f, !0), b.addEventListener("progress", E)), p && b.upload && ([h, g] = Ye(p), b.upload.addEventListener("progress", h), b.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (u = (v) => {
      b && (r(!v || v.type ? new Ce(null, e, b) : v), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const w = Ts(s.url);
    if (w && J.protocols.indexOf(w) === -1) {
      r(new _("Unsupported protocol " + w + ":", _.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(o || null);
  });
}, Fs = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, a();
        const u = f instanceof Error ? f : this.reason;
        r.abort(u instanceof _ ? u : new Ce(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new _(`timeout ${t} of ms exceeded`, _.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: p } = r;
    return p.unsubscribe = () => c.asap(a), p;
  }
}, Is = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Us = async function* (e, t) {
  for await (const n of Ms(e))
    yield* Is(n, t);
}, Ms = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Qt = (e, t, n, r) => {
  const s = Us(e, t);
  let o = 0, i, a = (p) => {
    i || (i = !0, r && r(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: f, value: u } = await s.next();
        if (f) {
          a(), p.close();
          return;
        }
        let h = u.byteLength;
        if (n) {
          let E = o += h;
          n(E);
        }
        p.enqueue(new Uint8Array(u));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(p) {
      return a(p), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, en = 64 * 1024, { isFunction: Ve } = c, Bs = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(c.global), {
  ReadableStream: tn,
  TextEncoder: nn
} = c.global, rn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, $s = (e) => {
  e = c.merge.call({
    skipUndefined: !0
  }, Bs, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? Ve(t) : typeof fetch == "function", o = Ve(n), i = Ve(r);
  if (!s)
    return !1;
  const a = s && Ve(tn), p = s && (typeof nn == "function" ? /* @__PURE__ */ ((l) => (m) => l.encode(m))(new nn()) : async (l) => new Uint8Array(await new n(l).arrayBuffer())), f = o && a && rn(() => {
    let l = !1;
    const m = new n(J.origin, {
      body: new tn(),
      method: "POST",
      get duplex() {
        return l = !0, "half";
      }
    }).headers.has("Content-Type");
    return l && !m;
  }), u = i && a && rn(() => c.isReadableStream(new r("").body)), h = {
    stream: u && ((l) => l.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
    !h[l] && (h[l] = (m, b) => {
      let R = m && m[l];
      if (R)
        return R.call(m);
      throw new _(`Response type '${l}' is not supported`, _.ERR_NOT_SUPPORT, b);
    });
  });
  const E = async (l) => {
    if (l == null)
      return 0;
    if (c.isBlob(l))
      return l.size;
    if (c.isSpecCompliantForm(l))
      return (await new n(J.origin, {
        method: "POST",
        body: l
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(l) || c.isArrayBuffer(l))
      return l.byteLength;
    if (c.isURLSearchParams(l) && (l = l + ""), c.isString(l))
      return (await p(l)).byteLength;
  }, g = async (l, m) => {
    const b = c.toFiniteNumber(l.getContentLength());
    return b ?? E(m);
  };
  return async (l) => {
    let {
      url: m,
      method: b,
      data: R,
      signal: w,
      cancelToken: v,
      timeout: j,
      onDownloadProgress: x,
      onUploadProgress: k,
      responseType: D,
      headers: O,
      withCredentials: A = "same-origin",
      fetchOptions: Z
    } = qn(l), V = t || fetch;
    D = D ? (D + "").toLowerCase() : "text";
    let q = Fs([w, v && v.toAbortSignal()], j), L = null;
    const N = q && q.unsubscribe && (() => {
      q.unsubscribe();
    });
    let Q;
    try {
      if (k && f && b !== "get" && b !== "head" && (Q = await g(O, R)) !== 0) {
        let d = new n(m, {
          method: "POST",
          body: R,
          duplex: "half"
        }), S;
        if (c.isFormData(R) && (S = d.headers.get("content-type")) && O.setContentType(S), d.body) {
          const [T, P] = Yt(
            Q,
            Ye(Xt(k))
          );
          R = Qt(d.body, en, T, P);
        }
      }
      c.isString(A) || (A = A ? "include" : "omit");
      const H = o && "credentials" in n.prototype, pe = {
        ...Z,
        signal: q,
        method: b.toUpperCase(),
        headers: O.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: H ? A : void 0
      };
      L = o && new n(m, pe);
      let G = await (o ? V(L, Z) : V(m, pe));
      const ee = u && (D === "stream" || D === "response");
      if (u && (x || ee && N)) {
        const d = {};
        ["status", "statusText", "headers"].forEach((ne) => {
          d[ne] = G[ne];
        });
        const S = c.toFiniteNumber(G.headers.get("content-length")), [T, P] = x && Yt(
          S,
          Ye(Xt(x), !0)
        ) || [];
        G = new r(
          Qt(G.body, en, T, () => {
            P && P(), N && N();
          }),
          d
        );
      }
      D = D || "text";
      let ye = await h[c.findKey(h, D) || "text"](G, l);
      return !ee && N && N(), await new Promise((d, S) => {
        $n(d, S, {
          data: ye,
          headers: X.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: l,
          request: L
        });
      });
    } catch (H) {
      throw N && N(), H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message) ? Object.assign(
        new _("Network Error", _.ERR_NETWORK, l, L),
        {
          cause: H.cause || H
        }
      ) : _.from(H, H && H.code, l, L);
    }
  };
}, Vs = /* @__PURE__ */ new Map(), Hn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [
    r,
    s,
    n
  ];
  let i = o.length, a = i, p, f, u = Vs;
  for (; a--; )
    p = o[a], f = u.get(p), f === void 0 && u.set(p, f = a ? /* @__PURE__ */ new Map() : $s(t)), u = f;
  return f;
};
Hn();
const Pt = {
  http: os,
  xhr: ks,
  fetch: {
    get: Hn
  }
};
c.forEach(Pt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const sn = (e) => `- ${e}`, qs = (e) => c.isFunction(e) || e === null || e === !1;
function Hs(e, t) {
  e = c.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let a;
    if (s = r, !qs(r) && (s = Pt[(a = String(r)).toLowerCase()], s === void 0))
      throw new _(`Unknown adapter '${a}'`);
    if (s && (c.isFunction(s) || (s = s.get(t))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([p, f]) => `adapter ${p} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(sn).join(`
`) : " " + sn(i[0]) : "as no adapter specified";
    throw new _(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Wn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Hs,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Pt
};
function ct(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ce(null, e);
}
function on(e) {
  return ct(e), e.headers = X.from(e.headers), e.data = at.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wn.getAdapter(e.adapter || Ue.adapter, e)(e).then(function(r) {
    return ct(e), r.data = at.call(
      e,
      e.transformResponse,
      r
    ), r.headers = X.from(r.headers), r;
  }, function(r) {
    return Bn(r) || (ct(e), r && r.response && (r.response.data = at.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = X.from(r.response.headers))), Promise.reject(r);
  });
}
const zn = "1.13.2", tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  tt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const an = {};
tt.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + zn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new _(
        s(i, " has been removed" + (n ? " in " + n : "")),
        _.ERR_DEPRECATED
      );
    return n && !an[i] && (an[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
tt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ws(e, t, n) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], p = a === void 0 || i(a, o, e);
      if (p !== !0)
        throw new _("option " + o + " must be " + p, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new _("Unknown option " + o, _.ERR_BAD_OPTION);
  }
}
const Ge = {
  assertOptions: Ws,
  validators: tt
}, ie = Ge.validators;
let we = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Kt(),
      response: new Kt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Se(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ge.assertOptions(r, {
      silentJSONParsing: ie.transitional(ie.boolean),
      forcedJSONParsing: ie.transitional(ie.boolean),
      clarifyTimeoutError: ie.transitional(ie.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ge.assertOptions(s, {
      encode: ie.function,
      serialize: ie.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ge.assertOptions(n, {
      baseUrl: ie.spelling("baseURL"),
      withXsrfToken: ie.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (l) => {
        delete o[l];
      }
    ), n.headers = X.concat(i, o);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (p = p && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let u, h = 0, E;
    if (!p) {
      const l = [on.bind(this), void 0];
      for (l.unshift(...a), l.push(...f), E = l.length, u = Promise.resolve(n); h < E; )
        u = u.then(l[h++], l[h++]);
      return u;
    }
    E = a.length;
    let g = n;
    for (; h < E; ) {
      const l = a[h++], m = a[h++];
      try {
        g = l(g);
      } catch (b) {
        m.call(this, b);
        break;
      }
    }
    try {
      u = on.call(this, g);
    } catch (l) {
      return Promise.reject(l);
    }
    for (h = 0, E = f.length; h < E; )
      u = u.then(f[h++], f[h++]);
    return u;
  }
  getUri(t) {
    t = Se(this.defaults, t);
    const n = Vn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return In(n, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(t) {
  we.prototype[t] = function(n, r) {
    return this.request(Se(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(Se(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  we.prototype[t] = n(), we.prototype[t + "Form"] = n(!0);
});
let zs = class Jn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new Ce(o, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Jn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Js(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ks(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const wt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(wt).forEach(([e, t]) => {
  wt[t] = e;
});
function Kn(e) {
  const t = new we(e), n = xn(we.prototype.request, t);
  return c.extend(n, we.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Kn(Se(e, s));
  }, n;
}
const I = Kn(Ue);
I.Axios = we;
I.CanceledError = Ce;
I.CancelToken = zs;
I.isCancel = Bn;
I.VERSION = zn;
I.toFormData = et;
I.AxiosError = _;
I.Cancel = I.CanceledError;
I.all = function(t) {
  return Promise.all(t);
};
I.spread = Js;
I.isAxiosError = Ks;
I.mergeConfig = Se;
I.AxiosHeaders = X;
I.formToJSON = (e) => Mn(c.isHTMLForm(e) ? new FormData(e) : e);
I.getAdapter = Wn.getAdapter;
I.HttpStatusCode = wt;
I.default = I;
const {
  Axios: ti,
  AxiosError: ni,
  CanceledError: ri,
  isCancel: si,
  CancelToken: oi,
  VERSION: ii,
  all: ai,
  Cancel: ci,
  isAxiosError: li,
  spread: ui,
  toFormData: fi,
  AxiosHeaders: di,
  HttpStatusCode: pi,
  formToJSON: hi,
  getAdapter: mi,
  mergeConfig: bi
} = I;
var St = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new WeakMap(), cn = 0, Gs;
function Ys(e) {
  return e ? (qe.has(e) || (cn += 1, qe.set(e, cn.toString())), qe.get(e)) : "0";
}
function Xs(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Ys(e.root) : e[t]}`).toString();
}
function Zs(e) {
  const t = Xs(e);
  let n = St.get(t);
  if (!n) {
    const r = /* @__PURE__ */ new Map();
    let s;
    const o = new IntersectionObserver((i) => {
      i.forEach((a) => {
        var p;
        const f = a.isIntersecting && s.some((u) => a.intersectionRatio >= u);
        e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = f), (p = r.get(a.target)) == null || p.forEach((u) => {
          u(f, a);
        });
      });
    }, e);
    s = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
      id: t,
      observer: o,
      elements: r
    }, St.set(t, n);
  }
  return n;
}
function Qs(e, t, n = {}, r = Gs) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const p = e.getBoundingClientRect();
    return t(r, {
      isIntersecting: r,
      target: e,
      intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
      time: 0,
      boundingClientRect: p,
      intersectionRect: p,
      rootBounds: p
    }), () => {
    };
  }
  const { id: s, observer: o, elements: i } = Zs(n), a = i.get(e) || [];
  return i.has(e) || i.set(e, a), a.push(t), o.observe(e), function() {
    a.splice(a.indexOf(t), 1), a.length === 0 && (i.delete(e), o.unobserve(e)), i.size === 0 && (o.disconnect(), St.delete(s));
  };
}
function eo({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: s,
  triggerOnce: o,
  skip: i,
  initialInView: a,
  fallbackInView: p,
  onChange: f
} = {}) {
  var u;
  const [h, E] = Oe.useState(null), g = Oe.useRef(f), l = Oe.useRef(a), [m, b] = Oe.useState({
    inView: !!a,
    entry: void 0
  });
  g.current = f, Oe.useEffect(
    () => {
      if (l.current === void 0 && (l.current = a), i || !h) return;
      let j;
      return j = Qs(
        h,
        (x, k) => {
          const D = l.current;
          l.current = x, !(D === void 0 && !x) && (b({
            inView: x,
            entry: k
          }), g.current && g.current(x, k), k.isIntersecting && o && j && (j(), j = void 0));
        },
        {
          root: s,
          rootMargin: r,
          threshold: e,
          // @ts-expect-error
          trackVisibility: n,
          delay: t
        },
        p
      ), () => {
        j && j();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      h,
      s,
      r,
      o,
      i,
      n,
      p,
      t
    ]
  );
  const R = (u = m.entry) == null ? void 0 : u.target, w = Oe.useRef(void 0);
  !h && R && !o && !i && w.current !== R && (w.current = R, b({
    inView: !!a,
    entry: void 0
  }), l.current = a);
  const v = [E, m.inView, m.entry];
  return v.ref = v[0], v.inView = v[1], v.entry = v[2], v;
}
var He = { exports: {} }, lt = {};
var ln;
function to() {
  if (ln) return lt;
  ln = 1;
  var e = Ae;
  function t(h, E) {
    return h === E && (h !== 0 || 1 / h === 1 / E) || h !== h && E !== E;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function a(h, E) {
    var g = E(), l = r({ inst: { value: g, getSnapshot: E } }), m = l[0].inst, b = l[1];
    return o(
      function() {
        m.value = g, m.getSnapshot = E, p(m) && b({ inst: m });
      },
      [h, g, E]
    ), s(
      function() {
        return p(m) && b({ inst: m }), h(function() {
          p(m) && b({ inst: m });
        });
      },
      [h]
    ), i(g), g;
  }
  function p(h) {
    var E = h.getSnapshot;
    h = h.value;
    try {
      var g = E();
      return !n(h, g);
    } catch {
      return !0;
    }
  }
  function f(h, E) {
    return E();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : a;
  return lt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, lt;
}
var ut = {};
var un;
function no() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g, l) {
      return g === l && (g !== 0 || 1 / g === 1 / l) || g !== g && l !== l;
    }
    function t(g, l) {
      u || s.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = l();
      if (!h) {
        var b = l();
        o(m, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), h = !0);
      }
      b = i({
        inst: { value: m, getSnapshot: l }
      });
      var R = b[0].inst, w = b[1];
      return p(
        function() {
          R.value = m, R.getSnapshot = l, n(R) && w({ inst: R });
        },
        [g, m, l]
      ), a(
        function() {
          return n(R) && w({ inst: R }), g(function() {
            n(R) && w({ inst: R });
          });
        },
        [g]
      ), f(m), m;
    }
    function n(g) {
      var l = g.getSnapshot;
      g = g.value;
      try {
        var m = l();
        return !o(g, m);
      } catch {
        return !0;
      }
    }
    function r(g, l) {
      return l();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = Ae, o = typeof Object.is == "function" ? Object.is : e, i = s.useState, a = s.useEffect, p = s.useLayoutEffect, f = s.useDebugValue, u = !1, h = !1, E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    ut.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ut;
}
var fn;
function ro() {
  return fn || (fn = 1, process.env.NODE_ENV === "production" ? He.exports = to() : He.exports = no()), He.exports;
}
var dn = ro();
const Gn = 0, Yn = 1, Xn = 2, pn = 3;
var hn = Object.prototype.hasOwnProperty;
function Rt(e, t) {
  var n, r;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length)
        for (; r-- && Rt(e[r], t[r]); ) ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (hn.call(e, n) && ++r && !hn.call(t, n) || !(n in t) || !Rt(e[n], t[n])) return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
const ue = /* @__PURE__ */ new WeakMap(), de = () => {
}, z = (
  /*#__NOINLINE__*/
  de()
), _t = Object, C = (e) => e === z, ae = (e) => typeof e == "function", be = (e, t) => ({
  ...e,
  ...t
}), Zn = (e) => ae(e.then), ft = {}, We = {}, Lt = "undefined", Me = typeof window != Lt, Ot = typeof document != Lt, so = Me && "Deno" in window, oo = () => Me && typeof window.requestAnimationFrame != Lt, Qn = (e, t) => {
  const n = ue.get(e);
  return [
    // Getter
    () => !C(t) && e.get(t) || ft,
    // Setter
    (r) => {
      if (!C(t)) {
        const s = e.get(t);
        t in We || (We[t] = s), n[5](t, be(s, r), s || ft);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !C(t) && t in We ? We[t] : !C(t) && e.get(t) || ft
  ];
};
let xt = !0;
const io = () => xt, [vt, Tt] = Me && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  de,
  de
], ao = () => {
  const e = Ot && document.visibilityState;
  return C(e) || e !== "hidden";
}, co = (e) => (Ot && document.addEventListener("visibilitychange", e), vt("focus", e), () => {
  Ot && document.removeEventListener("visibilitychange", e), Tt("focus", e);
}), lo = (e) => {
  const t = () => {
    xt = !0, e();
  }, n = () => {
    xt = !1;
  };
  return vt("online", t), vt("offline", n), () => {
    Tt("online", t), Tt("offline", n);
  };
}, uo = {
  isOnline: io,
  isVisible: ao
}, fo = {
  initFocus: co,
  initReconnect: lo
}, mn = !Ae.useId, xe = !Me || so, po = (e) => oo() ? window.requestAnimationFrame(e) : setTimeout(e, 1), dt = xe ? fe : lr, pt = typeof navigator < "u" && navigator.connection, bn = !xe && pt && ([
  "slow-2g",
  "2g"
].includes(pt.effectiveType) || pt.saveData), ze = /* @__PURE__ */ new WeakMap(), ho = (e) => _t.prototype.toString.call(e), ht = (e, t) => e === `[object ${t}]`;
let mo = 0;
const At = (e) => {
  const t = typeof e, n = ho(e), r = ht(n, "Date"), s = ht(n, "RegExp"), o = ht(n, "Object");
  let i, a;
  if (_t(e) === e && !r && !s) {
    if (i = ze.get(e), i) return i;
    if (i = ++mo + "~", ze.set(e, i), Array.isArray(e)) {
      for (i = "@", a = 0; a < e.length; a++)
        i += At(e[a]) + ",";
      ze.set(e, i);
    }
    if (o) {
      i = "#";
      const p = _t.keys(e).sort();
      for (; !C(a = p.pop()); )
        C(e[a]) || (i += a + ":" + At(e[a]) + ",");
      ze.set(e, i);
    }
  } else
    i = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return i;
}, kt = (e) => {
  if (ae(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? At(e) : "", [
    e,
    t
  ];
};
let bo = 0;
const Nt = () => ++bo;
async function er(...e) {
  const [t, n, r, s] = e, o = be({
    populateCache: !0,
    throwOnError: !0
  }, typeof s == "boolean" ? {
    revalidate: s
  } : s || {});
  let i = o.populateCache;
  const a = o.rollbackOnError;
  let p = o.optimisticData;
  const f = (E) => typeof a == "function" ? a(E) : a !== !1, u = o.throwOnError;
  if (ae(n)) {
    const E = n, g = [], l = t.keys();
    for (const m of l)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && E(t.get(m)._k) && g.push(m);
    return Promise.all(g.map(h));
  }
  return h(n);
  async function h(E) {
    const [g] = kt(E);
    if (!g) return;
    const [l, m] = Qn(t, g), [b, R, w, v] = ue.get(t), j = () => {
      const N = b[g];
      return (ae(o.revalidate) ? o.revalidate(l().data, E) : o.revalidate !== !1) && (delete w[g], delete v[g], N && N[0]) ? N[0](Xn).then(() => l().data) : l().data;
    };
    if (e.length < 3)
      return j();
    let x = r, k, D = !1;
    const O = Nt();
    R[g] = [
      O,
      0
    ];
    const A = !C(p), Z = l(), V = Z.data, q = Z._c, L = C(q) ? V : q;
    if (A && (p = ae(p) ? p(L, V) : p, m({
      data: p,
      _c: L
    })), ae(x))
      try {
        x = x(L);
      } catch (N) {
        k = N, D = !0;
      }
    if (x && Zn(x))
      if (x = await x.catch((N) => {
        k = N, D = !0;
      }), O !== R[g][0]) {
        if (D) throw k;
        return x;
      } else D && A && f(k) && (i = !0, m({
        data: L,
        _c: z
      }));
    if (i && !D)
      if (ae(i)) {
        const N = i(x, L);
        m({
          data: N,
          error: z,
          _c: z
        });
      } else
        m({
          data: x,
          error: z,
          _c: z
        });
    if (R[g][1] = Nt(), Promise.resolve(j()).then(() => {
      m({
        _c: z
      });
    }), D) {
      if (u) throw k;
      return;
    }
    return x;
  }
}
const yn = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, yo = (e, t) => {
  if (!ue.has(e)) {
    const n = be(fo, t), r = /* @__PURE__ */ Object.create(null), s = er.bind(z, e);
    let o = de;
    const i = /* @__PURE__ */ Object.create(null), a = (u, h) => {
      const E = i[u] || [];
      return i[u] = E, E.push(h), () => E.splice(E.indexOf(h), 1);
    }, p = (u, h, E) => {
      e.set(u, h);
      const g = i[u];
      if (g)
        for (const l of g)
          l(h, E);
    }, f = () => {
      if (!ue.has(e) && (ue.set(e, [
        r,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        s,
        p,
        a
      ]), !xe)) {
        const u = n.initFocus(setTimeout.bind(z, yn.bind(z, r, Gn))), h = n.initReconnect(setTimeout.bind(z, yn.bind(z, r, Yn)));
        o = () => {
          u && u(), h && h(), ue.delete(e);
        };
      }
    };
    return f(), [
      e,
      s,
      f,
      o
    ];
  }
  return [
    e,
    ue.get(e)[4]
  ];
}, Eo = (e, t, n, r, s) => {
  const o = n.errorRetryCount, i = s.retryCount, a = ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) * n.errorRetryInterval;
  !C(o) && i > o || setTimeout(r, a, s);
}, go = Rt, [tr, wo] = yo(/* @__PURE__ */ new Map()), So = be(
  {
    // events
    onLoadingSlow: de,
    onSuccess: de,
    onError: de,
    onErrorRetry: Eo,
    onDiscarded: de,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: bn ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: bn ? 5e3 : 3e3,
    // providers
    compare: go,
    isPaused: () => !1,
    cache: tr,
    mutate: wo,
    fallback: {}
  },
  // use web preset by default
  uo
), Ro = (e, t) => {
  const n = be(e, t);
  if (t) {
    const { use: r, fallback: s } = e, { use: o, fallback: i } = t;
    r && o && (n.use = r.concat(o)), s && i && (n.fallback = be(s, i));
  }
  return n;
}, _o = cr({}), Oo = "$inf$", nr = Me && window.__SWR_DEVTOOLS_USE__, xo = nr ? window.__SWR_DEVTOOLS_USE__ : [], vo = () => {
  nr && (window.__SWR_DEVTOOLS_REACT__ = Ae);
}, To = (e) => ae(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], Ao = () => {
  const e = ur(_o);
  return On(() => be(So, e), [
    e
  ]);
}, No = (e) => (t, n, r) => e(t, n && ((...o) => {
  const [i] = kt(t), [, , , a] = ue.get(tr);
  if (i.startsWith(Oo))
    return n(...o);
  const p = a[i];
  return C(p) ? n(...o) : (delete a[i], p);
}), r), Co = xo.concat(No), jo = (e) => function(...n) {
  const r = Ao(), [s, o, i] = To(n), a = Ro(r, i);
  let p = e;
  const { use: f } = a, u = (f || []).concat(Co);
  for (let h = u.length; h--; )
    p = u[h](p);
  return p(s, o || a.fetcher || null, a);
}, Do = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const s = r.indexOf(n);
    s >= 0 && (r[s] = r[r.length - 1], r.pop());
  };
};
vo();
const mt = Ae.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((e) => {
  switch (e.status) {
    case "pending":
      throw e;
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      throw e.status = "pending", e.then((t) => {
        e.status = "fulfilled", e.value = t;
      }, (t) => {
        e.status = "rejected", e.reason = t;
      }), e;
  }
}), bt = {
  dedupe: !0
}, En = Promise.resolve(z), Po = (e, t, n) => {
  const { cache: r, compare: s, suspense: o, fallbackData: i, revalidateOnMount: a, revalidateIfStale: p, refreshInterval: f, refreshWhenHidden: u, refreshWhenOffline: h, keepPreviousData: E, strictServerPrefetchWarning: g } = n, [l, m, b, R] = ue.get(r), [w, v] = kt(e), j = Ee(!1), x = Ee(!1), k = Ee(w), D = Ee(t), O = Ee(n), A = () => O.current, Z = () => A().isVisible() && A().isOnline(), [V, q, L, N] = Qn(r, w), Q = Ee({}).current, H = C(i) ? C(n.fallback) ? z : n.fallback[w] : i, pe = (U, M) => {
    for (const $ in Q) {
      const B = $;
      if (B === "data") {
        if (!s(U[B], M[B]) && (!C(U[B]) || !s(he, M[B])))
          return !1;
      } else if (M[B] !== U[B])
        return !1;
    }
    return !0;
  }, G = On(() => {
    const U = !w || !t ? !1 : C(a) ? A().isPaused() || o ? !1 : p !== !1 : a, M = (K) => {
      const ce = be(K);
      return delete ce._k, U ? {
        isValidating: !0,
        isLoading: !0,
        ...ce
      } : ce;
    }, $ = V(), B = N(), re = M($), _e = $ === B ? re : M(B);
    let W = re;
    return [
      () => {
        const K = M(V());
        return pe(K, W) ? (W.data = K.data, W.isLoading = K.isLoading, W.isValidating = K.isValidating, W.error = K.error, W) : (W = K, K);
      },
      () => _e
    ];
  }, [
    r,
    w
  ]), ee = dn.useSyncExternalStore(st(
    (U) => L(w, (M, $) => {
      pe($, M) || U();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      w
    ]
  ), G[0], G[1]), ye = !j.current, d = l[w] && l[w].length > 0, S = ee.data, T = C(S) ? H && Zn(H) ? mt(H) : H : S, P = ee.error, ne = Ee(T), he = E ? C(S) ? C(ne.current) ? T : ne.current : S : T, F = w && C(T), me = !xe && // eslint-disable-next-line react-hooks/rules-of-hooks
  dn.useSyncExternalStore(() => de, () => !1, () => !0);
  g && me && !o && F && console.warn(`Missing pre-initiated data for serialized key "${w}" during server-side rendering. Data fethcing should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
  const Re = d && !C(P) ? !1 : ye && !C(a) ? a : A().isPaused() ? !1 : o ? C(T) ? !1 : p : C(T) || p, Be = !!(w && t && ye && Re), sr = C(ee.isValidating) ? Be : ee.isValidating, or = C(ee.isLoading) ? Be : ee.isLoading, je = st(
    async (U) => {
      const M = D.current;
      if (!w || !M || x.current || A().isPaused())
        return !1;
      let $, B, re = !0;
      const _e = U || {}, W = !b[w] || !_e.dedupe, K = () => mn ? !x.current && w === k.current && j.current : w === k.current, ce = {
        isValidating: !1,
        isLoading: !1
      }, Ut = () => {
        q(ce);
      }, Mt = () => {
        const te = b[w];
        te && te[1] === B && delete b[w];
      }, Bt = {
        isValidating: !0
      };
      C(V().data) && (Bt.isLoading = !0);
      try {
        if (W && (q(Bt), n.loadingTimeout && C(V().data) && setTimeout(() => {
          re && K() && A().onLoadingSlow(w, n);
        }, n.loadingTimeout), b[w] = [
          M(v),
          Nt()
        ]), [$, B] = b[w], $ = await $, W && setTimeout(Mt, n.dedupingInterval), !b[w] || b[w][1] !== B)
          return W && K() && A().onDiscarded(w), !1;
        ce.error = z;
        const te = m[w];
        if (!C(te) && // case 1
        (B <= te[0] || // case 2
        B <= te[1] || // case 3
        te[1] === 0))
          return Ut(), W && K() && A().onDiscarded(w), !1;
        const le = V().data;
        ce.data = s(le, $) ? le : $, W && K() && A().onSuccess($, w, n);
      } catch (te) {
        Mt();
        const le = A(), { shouldRetryOnError: nt } = le;
        le.isPaused() || (ce.error = te, W && K() && (le.onError(te, w, le), (nt === !0 || ae(nt) && nt(te)) && (!A().revalidateOnFocus || !A().revalidateOnReconnect || Z()) && le.onErrorRetry(te, w, le, (ir) => {
          const rt = l[w];
          rt && rt[0] && rt[0](pn, ir);
        }, {
          retryCount: (_e.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return re = !1, Ut(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      w,
      r
    ]
  ), It = st(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...U) => er(r, k.current, ...U),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (dt(() => {
    D.current = t, O.current = n, C(S) || (ne.current = S);
  }), dt(() => {
    if (!w) return;
    const U = je.bind(z, bt);
    let M = 0;
    A().revalidateOnFocus && (M = Date.now() + A().focusThrottleInterval);
    const B = Do(w, l, (re, _e = {}) => {
      if (re == Gn) {
        const W = Date.now();
        A().revalidateOnFocus && W > M && Z() && (M = W + A().focusThrottleInterval, U());
      } else if (re == Yn)
        A().revalidateOnReconnect && Z() && U();
      else {
        if (re == Xn)
          return je();
        if (re == pn)
          return je(_e);
      }
    });
    return x.current = !1, k.current = w, j.current = !0, q({
      _k: v
    }), Re && (b[w] || (C(T) || xe ? U() : po(U))), () => {
      x.current = !0, B();
    };
  }, [
    w
  ]), dt(() => {
    let U;
    function M() {
      const B = ae(f) ? f(V().data) : f;
      B && U !== -1 && (U = setTimeout($, B));
    }
    function $() {
      !V().error && (u || A().isVisible()) && (h || A().isOnline()) ? je(bt).then(M) : M();
    }
    return M(), () => {
      U && (clearTimeout(U), U = -1);
    };
  }, [
    f,
    u,
    h,
    w
  ]), fr(he), o) {
    if (!mn && xe && F)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    F && (D.current = t, O.current = n, x.current = !1);
    const U = R[w], M = !C(U) && F ? It(U) : En;
    if (mt(M), !C(P) && F)
      throw P;
    const $ = F ? je(bt) : En;
    !C(he) && F && ($.status = "fulfilled", $.value = !0), mt($);
  }
  return {
    mutate: It,
    get data() {
      return Q.data = !0, he;
    },
    get error() {
      return Q.error = !0, P;
    },
    get isValidating() {
      return Q.isValidating = !0, sr;
    },
    get isLoading() {
      return Q.isLoading = !0, or;
    }
  };
}, Ft = jo(Po), Lo = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await I.get(`http://localhost:3001/api/ads/${e.ad_id}`, {
        params: {
          ad_id: e.ad_id
        }
      })).data.result;
    } catch {
    }
  return I.get(e.url, {
    params: {
      ad_id: e.ad_id
    }
  }).then((t) => t.data.result);
}, ko = 60, Fo = {
  dedupingInterval: 1e3 * 60 * ko
  // keepPreviousData: true,
  // fallbackData: []
}, Io = (e) => {
  const { data: t, error: n, isLoading: r, mutate: s } = Ft(
    e ? {
      url: `https://articles.media/api/ads/${e}`,
      ad_id: e
    } : null,
    Lo,
    Fo
  );
  return {
    data: t,
    error: n,
    isLoading: r,
    mutate: s
  };
}, rr = 6e4, gn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Uo(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && gn in e ? e[gn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function wn(e, t) {
  return Uo(e, e);
}
function Mo(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function Bo(e, t) {
  return +wn(e) - +wn(t);
}
function Sn(e, t, n) {
  const r = Bo(e, t) / rr;
  return Mo(n?.roundingMethod)(r);
}
function Rn(e) {
  return Math.trunc(e * rr);
}
const $o = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await I.get("http://localhost:3001/api/ads", {
        params: {
          // ad_id: data.ad_id
        }
      })).data;
    } catch {
    }
  return I.get(e.url, {
    params: {
      // ad_id: data.ad_id
    }
  }).then((t) => t.data);
}, _n = 60, Vo = {
  dedupingInterval: Rn(_n),
  focusThrottleInterval: Rn(_n)
  // keepPreviousData: true,
  // fallbackData: []
}, qo = (e) => {
  const { data: t, error: n, isLoading: r, mutate: s } = Ft(
    {
      url: "https://articles.media/api/ads"
      // ad_id
    },
    $o,
    Vo
  );
  return {
    data: t,
    error: n,
    isLoading: r,
    mutate: s
  };
};
function Ho(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function Wo(e) {
  const n = [], {
    data: r
  } = qo();
  let { previewMode: s } = e, o = e.previewData || {};
  const [i, a] = se(null), [p, f] = se(null), [u, h] = se(null), [E, g] = se(null), [l, m] = se(0), [b, R] = se(!1), [w, v] = se(!1), [j, x] = se(/* @__PURE__ */ new Date()), [k, D] = se([]), { data: O } = Io(i);
  fe(() => {
    r && r?.length > 0 && !i && (console.log("Ad Mounted or reduxAds changed"), a(e.ad_id || r[Ho(0, r?.length - 1)]?._id));
  }, [r]), fe(() => {
  }, [O]), fe(() => {
    O?.populated_promos && l >= 0 && g(O?.populated_promos[l]);
  }, [l, O]);
  function A() {
    v(!w);
  }
  const { ref: Z, inView: V } = eo({
    /* Optional options */
    threshold: 0,
    triggerOnce: !0
  });
  function q(L) {
    if (s && console.log("Preventing this event from being logged as this ad is being shown in preview mode."), k.find((N) => N == L)) {
      console.log("Already logged this event");
      return;
    }
    I.get("/api/ads/event", {
      params: {
        ad_id: O?._id,
        event: L
      }
    }).then(function(N) {
      D([...k, L]), console.log(N.data);
    }).catch(function(N) {
      console.log(N);
    });
  }
  return fe(() => {
    if (!s && (console.log("inView", V), V && i)) {
      let L = [
        {
          ad_id: i,
          date: (/* @__PURE__ */ new Date()).toString()
        },
        ...n.filter((N) => {
          if (console.log(
            Sn(/* @__PURE__ */ new Date(), new Date(N.date))
          ), Sn(/* @__PURE__ */ new Date(), new Date(N.date)) > 5) {
            console.log("adsViewed - Remove Old Ad View Object");
            return;
          } else
            return console.log("adsViewed - Keep Ad View Object"), N;
        })
      ];
      console.log("unexpiredRecentViews", L);
    }
  }, [V, i]), /* @__PURE__ */ y.jsxs(
    "div",
    {
      ref: Z,
      className: "ad-wrap",
      style: {
        "--articles-ad-background-color": o.background_color || O?.background_color,
        "--articles-ad-font-color": o.font_color || O?.font_color,
        "--articles-ad-border-color": o.border_color || O?.border_color
      },
      children: [
        /* @__PURE__ */ y.jsx(
          "div",
          {
            className: "ad",
            children: /* @__PURE__ */ y.jsxs(
              "div",
              {
                className: "main-panel",
                children: [
                  /* @__PURE__ */ y.jsx("div", { className: "ad-warning flex-header", children: /* @__PURE__ */ y.jsxs("div", { className: "", children: [
                    O?.city && "Local",
                    " Advertisement"
                  ] }) }),
                  /* @__PURE__ */ y.jsxs("div", { className: "content-wrap", children: [
                    /* @__PURE__ */ y.jsxs("div", { className: "photo-banner", children: [
                      /* @__PURE__ */ y.jsx("div", { className: "logo", children: (o.logo?.location || O?.logo?.location) && /* @__PURE__ */ y.jsx(
                        "img",
                        {
                          src: o?.logo?.key ? `${process.env.NEXT_PUBLIC_CDN}${o?.logo?.key}` : `${process.env.NEXT_PUBLIC_CDN}${O?.logo?.key}`,
                          alt: ""
                        }
                      ) }),
                      /* @__PURE__ */ y.jsx("div", { className: "icon d-none", children: /* @__PURE__ */ y.jsx("i", { className: "fas fa-mug-hot" }) }),
                      /* @__PURE__ */ y.jsx(
                        "img",
                        {
                          className: "photo",
                          src: o?.background?.key ? `${process.env.NEXT_PUBLIC_CDN}${o.background?.key}` : `${process.env.NEXT_PUBLIC_CDN}${O?.background?.key}`,
                          alt: ""
                        }
                      )
                    ] }),
                    /* @__PURE__ */ y.jsxs("div", { className: "details-wrap", children: [
                      /* @__PURE__ */ y.jsxs("div", { className: "detail-title", children: [
                        /* @__PURE__ */ y.jsx("div", { className: "detail", children: /* @__PURE__ */ y.jsx("span", { className: "h4", children: o?.business || O?.business }) }),
                        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-column d-none", children: [
                          /* @__PURE__ */ y.jsxs("div", { className: "detail", children: [
                            /* @__PURE__ */ y.jsx("span", { className: "icon", children: /* @__PURE__ */ y.jsx("i", { className: "fas fa-search-location" }) }),
                            /* @__PURE__ */ y.jsxs("span", { children: [
                              O?.city,
                              ", ",
                              O?.state
                            ] })
                          ] }),
                          /* @__PURE__ */ y.jsxs("div", { className: "detail", children: [
                            /* @__PURE__ */ y.jsx("span", { className: "icon", children: /* @__PURE__ */ y.jsx("i", { className: "fas fa-clock me-2" }) }),
                            /* @__PURE__ */ y.jsx("span", { children: "6:30AM–8PM" })
                          ] })
                        ] })
                      ] }),
                      O?.city && /* @__PURE__ */ y.jsx("div", { className: "details mb-3 d-none" }),
                      /* @__PURE__ */ y.jsx("div", { className: "short-description", children: o?.description || O?.description })
                    ] })
                  ] }),
                  (!1)?.roles?.isDev && O?.populated_promos?.length > 0 && /* @__PURE__ */ y.jsxs("div", { children: [
                    E && /* @__PURE__ */ y.jsx("div", { className: "promos-wrap", children: E && /* @__PURE__ */ y.jsxs(
                      "div",
                      {
                        className: "promo-wrap d-flex justify-content-between align-items-center mx-2 p-1 px-2 border border-2 border-light mb-0",
                        children: [
                          /* @__PURE__ */ y.jsxs("div", { className: "", children: [
                            /* @__PURE__ */ y.jsx("div", { children: E.title }),
                            /* @__PURE__ */ y.jsx("div", { className: "small", children: /* @__PURE__ */ y.jsx("div", { className: "small", children: E.details }) })
                          ] }),
                          /* @__PURE__ */ y.jsx(
                            ve,
                            {
                              className: "px-3",
                              small: !0,
                              onClick: () => {
                                console.log("Load Save Modal"), R(!0);
                              },
                              children: "Save"
                            }
                          )
                        ]
                      },
                      E._id
                    ) }),
                    /* @__PURE__ */ y.jsxs("div", { className: "d-flex justify-content-between", children: [
                      /* @__PURE__ */ y.jsxs("div", { className: "px-2", children: [
                        O?.populated_promos?.length,
                        " Promos Active"
                      ] }),
                      /* @__PURE__ */ y.jsxs("div", { className: "controls", children: [
                        /* @__PURE__ */ y.jsx(
                          "i",
                          {
                            className: "fad fa-arrow-circle-left",
                            type: "button",
                            onClick: () => {
                              l == 0 ? m(O?.populated_promos?.length - 1) : m((L) => L - 1);
                            }
                          }
                        ),
                        O?.populated_promos?.map(
                          (L, N) => /* @__PURE__ */ y.jsx(
                            "i",
                            {
                              className: `fa-square ${N == l ? "fad" : "fas"}`
                            },
                            L._id
                          )
                        ),
                        /* @__PURE__ */ y.jsx(
                          "i",
                          {
                            className: "fad fa-arrow-circle-right",
                            type: "button",
                            onClick: () => {
                              l == O?.populated_promos?.length - 1 ? m(0) : m((L) => L + 1);
                            }
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ y.jsx("hr", { style: { borderColor: "white" }, className: "mt-auto mb-0" }),
                  /* @__PURE__ */ y.jsxs("div", { className: "action-wrap d-flex justify-content-lg-between px-3 py-2", children: [
                    /* @__PURE__ */ y.jsx(
                      "div",
                      {
                        onClick: () => {
                          A(), q("Details");
                        },
                        className: "action flex-grow-1 flex-shrink-0",
                        children: "Details"
                      }
                    ),
                    /* @__PURE__ */ y.jsx("span", { className: "px-4" }),
                    /* @__PURE__ */ y.jsx(
                      "a",
                      {
                        className: "action flex-grow-1 flex-shrink-0",
                        href: O?.website,
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => q("Website"),
                        children: /* @__PURE__ */ y.jsx("div", { children: "Website" })
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        !s && /* @__PURE__ */ y.jsx(
          "div",
          {
            className: "advertise-with-us p-1",
            style: {
              // ...(props.previewData ? props.previewData.background_color : ad?.background_color),
              backgroundColor: o.background_color || O?.background_color,
              color: o.font_color || O?.font_color,
              borderColor: o.border_color || O?.border_color
            },
            children: /* @__PURE__ */ y.jsxs(
              "div",
              {
                className: "small d-block w-100 text-center",
                children: [
                  /* @__PURE__ */ y.jsx("i", { className: "fas fa-share me-1" }),
                  "Advertise with Articles Media!"
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const yi = dr(Wo), zo = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await I.get("http://localhost:3001/api/community/games/scoreboard", {
        params: {
          game: e.game
        }
      })).data;
    } catch {
    }
  return I.get(e.url, {
    params: {
      game: e.game
    }
  }).then((t) => t.data);
}, Jo = {
  dedupingInterval: 1e3 * 60 * 30,
  refreshInterval: 0,
  revalidateOnFocus: !1,
  revalidateIfStale: !1,
  shouldRetryOnError: !1
  // fallbackData: []
}, Ko = (e) => {
  const { data: t, error: n, isLoading: r, isValidating: s, mutate: o } = Ft(
    e?.game ? {
      // url: "/api/community/games/scoreboard",
      url: "https://articles.media/api/community/games/scoreboard",
      game: e.game
    } : null,
    zo,
    Jo
  );
  return {
    data: t,
    error: n,
    isLoading: r,
    isValidating: s,
    mutate: o
  };
};
function Ei({ game: e, reloadScoreboard: t, setReloadScoreboard: n }) {
  const [r, s] = se(!1), [o, i] = se(!1), {
    data: a,
    mutate: p
  } = Ko({
    game: e
  });
  return fe(() => {
  }, []), fe(() => {
    t && (n(!1), p());
  }, [t]), /* @__PURE__ */ y.jsx("div", { className: "scoreboard", children: /* @__PURE__ */ y.jsxs("div", { className: "card card-articles card-sm mb-3 mb-lg-0", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "card-header d-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ y.jsxs("span", { children: [
        e,
        " Scoreboard"
      ] }),
      /* @__PURE__ */ y.jsx(
        ve,
        {
          onClick: () => {
            p();
          },
          small: !0,
          children: /* @__PURE__ */ y.jsx("i", { className: "fad fa-redo me-0" })
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "card-body p-0", children: [
      (a?.length || 0) == 0 && /* @__PURE__ */ y.jsx("div", { className: "small p-2", children: "No scores yet" }),
      a?.map(
        (f, u) => /* @__PURE__ */ y.jsxs("div", { className: "result d-flex flex-column justify-content-between border-bottom p-2", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "d-flex justify-content-between lh-sm", children: [
            /* @__PURE__ */ y.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ y.jsx("h5", { className: "mb-0 me-3", children: u + 1 }),
              /* @__PURE__ */ y.jsx("div", { className: "lh-sm" })
            ] }),
            /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx("h5", { className: "mb-0", children: f.score || f.total }) })
          ] }),
          f.last_play && f.public_last_play && /* @__PURE__ */ y.jsxs("small", { className: "mt-1", style: { fontSize: "0.75rem" }, children: [
            "Played: ",
            format(new Date(f.last_play), "MM/d/yy hh:mmaa")
          ] })
        ] }, f._id)
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "card-footer d-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ y.jsx("div", { className: "small", children: "Play to get on the board!" }),
      /* @__PURE__ */ y.jsx(
        ve,
        {
          small: !0,
          onClick: () => {
            s(!0);
          },
          children: /* @__PURE__ */ y.jsx("i", { className: "fad fa-cog me-0" })
        }
      )
    ] })
  ] }) });
}
function gi() {
  return "Hello, world!";
}
export {
  yi as Ad,
  Zo as ArticlesAd,
  Ei as GameScoreboard,
  Xo as ReturnToLauncherButton,
  gi as helloWorld
};
