import Oe, { createContext as jn, useEffect as kn, useLayoutEffect as qn, useContext as Hn, useMemo as en, useRef as le, useCallback as ze, useDebugValue as Mn } from "react";
function tn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Vn } = Object.prototype, { getPrototypeOf: Et } = Object, { iterator: ke, toStringTag: nn } = Symbol, qe = /* @__PURE__ */ ((e) => (t) => {
  const n = Vn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), G = (e) => (e = e.toLowerCase(), (t) => qe(t) === e), He = (e) => (t) => typeof t === e, { isArray: we } = Array, ye = He("undefined");
function Te(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && k(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rn = G("ArrayBuffer");
function $n(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rn(e.buffer), t;
}
const Wn = He("string"), k = He("function"), sn = He("number"), Ae = (e) => e !== null && typeof e == "object", zn = (e) => e === !0 || e === !1, Ue = (e) => {
  if (qe(e) !== "object")
    return !1;
  const t = Et(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(nn in e) && !(ke in e);
}, Jn = (e) => {
  if (!Ae(e) || Te(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Kn = G("Date"), Gn = G("File"), Xn = G("Blob"), Yn = G("FileList"), Qn = (e) => Ae(e) && k(e.pipe), Zn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || k(e.append) && ((t = qe(e)) === "formdata" || // detect form-data instance
  t === "object" && k(e.toString) && e.toString() === "[object FormData]"));
}, er = G("URLSearchParams"), [tr, nr, rr, sr] = ["ReadableStream", "Request", "Response", "Headers"].map(G), or = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _e(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), we(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Te(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function on(e, t) {
  if (Te(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const fe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, an = (e) => !ye(e) && e !== fe;
function st() {
  const { caseless: e, skipUndefined: t } = an(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && on(n, i) || i;
    Ue(n[o]) && Ue(s) ? n[o] = st(n[o], s) : Ue(s) ? n[o] = st({}, s) : we(s) ? n[o] = s.slice() : (!t || !ye(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && _e(arguments[s], r);
  return n;
}
const ir = (e, t, n, { allOwnKeys: r } = {}) => (_e(t, (s, i) => {
  n && k(s) ? e[i] = tn(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), ar = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), cr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ur = (e, t, n, r) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && Et(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, lr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, fr = (e) => {
  if (!e) return null;
  if (we(e)) return e;
  let t = e.length;
  if (!sn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, dr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Et(Uint8Array)), pr = (e, t) => {
  const r = (e && e[ke]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, hr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, mr = G("HTMLFormElement"), Er = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), xt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), yr = G("RegExp"), cn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _e(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, wr = (e) => {
  cn(e, (t, n) => {
    if (k(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (k(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Sr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return we(e) ? r(e) : r(String(e).split(t)), n;
}, br = () => {
}, gr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Rr(e) {
  return !!(e && k(e.append) && e[nn] === "FormData" && e[ke]);
}
const Or = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Te(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = we(r) ? [] : {};
        return _e(r, (o, a) => {
          const d = n(o, s + 1);
          !ye(d) && (i[a] = d);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, Tr = G("AsyncFunction"), Ar = (e) => e && (Ae(e) || k(e)) && k(e.then) && k(e.catch), un = ((e, t) => e ? setImmediate : t ? ((n, r) => (fe.addEventListener("message", ({ source: s, data: i }) => {
  s === fe && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), fe.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  k(fe.postMessage)
), _r = typeof queueMicrotask < "u" ? queueMicrotask.bind(fe) : typeof process < "u" && process.nextTick || un, Cr = (e) => e != null && k(e[ke]), c = {
  isArray: we,
  isArrayBuffer: rn,
  isBuffer: Te,
  isFormData: Zn,
  isArrayBufferView: $n,
  isString: Wn,
  isNumber: sn,
  isBoolean: zn,
  isObject: Ae,
  isPlainObject: Ue,
  isEmptyObject: Jn,
  isReadableStream: tr,
  isRequest: nr,
  isResponse: rr,
  isHeaders: sr,
  isUndefined: ye,
  isDate: Kn,
  isFile: Gn,
  isBlob: Xn,
  isRegExp: yr,
  isFunction: k,
  isStream: Qn,
  isURLSearchParams: er,
  isTypedArray: dr,
  isFileList: Yn,
  forEach: _e,
  merge: st,
  extend: ir,
  trim: or,
  stripBOM: ar,
  inherits: cr,
  toFlatObject: ur,
  kindOf: qe,
  kindOfTest: G,
  endsWith: lr,
  toArray: fr,
  forEachEntry: pr,
  matchAll: hr,
  isHTMLForm: mr,
  hasOwnProperty: xt,
  hasOwnProp: xt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: cn,
  freezeMethods: wr,
  toObjectSet: Sr,
  toCamelCase: Er,
  noop: br,
  toFiniteNumber: gr,
  findKey: on,
  global: fe,
  isContextDefined: an,
  isSpecCompliantForm: Rr,
  toJSONObject: Or,
  isAsyncFn: Tr,
  isThenable: Ar,
  setImmediate: un,
  asap: _r,
  isIterable: Cr
};
function S(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
c.inherits(S, Error, {
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
const ln = S.prototype, fn = {};
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
  fn[e] = { value: e };
});
Object.defineProperties(S, fn);
Object.defineProperty(ln, "isAxiosError", { value: !0 });
S.from = (e, t, n, r, s, i) => {
  const o = Object.create(ln);
  c.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const a = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return S.call(o, a, d, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const xr = null;
function ot(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function dn(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dt(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = dn(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Dr(e) {
  return c.isArray(e) && !e.some(ot);
}
const Lr = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Me(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !c.isUndefined(h[m]);
  });
  const r = n.metaTokens, s = n.visitor || l, i = n.dots, o = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(u) {
    if (u === null) return "";
    if (c.isDate(u))
      return u.toISOString();
    if (c.isBoolean(u))
      return u.toString();
    if (!d && c.isBlob(u))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(u) || c.isTypedArray(u) ? d && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function l(u, m, h) {
    let b = u;
    if (u && !h && typeof u == "object") {
      if (c.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), u = JSON.stringify(u);
      else if (c.isArray(u) && Dr(u) || (c.isFileList(u) || c.endsWith(m, "[]")) && (b = c.toArray(u)))
        return m = dn(m), b.forEach(function(A, x) {
          !(c.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Dt([m], x, i) : o === null ? m : m + "[]",
            f(A)
          );
        }), !1;
    }
    return ot(u) ? !0 : (t.append(Dt(h, m, i), f(u)), !1);
  }
  const p = [], E = Object.assign(Lr, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: ot
  });
  function y(u, m) {
    if (!c.isUndefined(u)) {
      if (p.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      p.push(u), c.forEach(u, function(b, w) {
        (!(c.isUndefined(b) || b === null) && s.call(
          t,
          b,
          c.isString(w) ? w.trim() : w,
          m,
          E
        )) === !0 && y(b, m ? m.concat(w) : [w]);
      }), p.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Lt(e) {
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
function yt(e, t) {
  this._pairs = [], e && Me(e, this, t);
}
const pn = yt.prototype;
pn.append = function(t, n) {
  this._pairs.push([t, n]);
};
pn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Lt);
  } : Lt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Nr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function hn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Nr;
  c.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = c.isURLSearchParams(t) ? t.toString() : new yt(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Nt {
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
const mn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Fr = typeof URLSearchParams < "u" ? URLSearchParams : yt, Pr = typeof FormData < "u" ? FormData : null, vr = typeof Blob < "u" ? Blob : null, Ur = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Fr,
    FormData: Pr,
    Blob: vr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, wt = typeof window < "u" && typeof document < "u", it = typeof navigator == "object" && navigator || void 0, Ir = wt && (!it || ["ReactNative", "NativeScript", "NS"].indexOf(it.product) < 0), Br = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", jr = wt && window.location.href || "http://localhost", kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: wt,
  hasStandardBrowserEnv: Ir,
  hasStandardBrowserWebWorkerEnv: Br,
  navigator: it,
  origin: jr
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...kr,
  ...Ur
};
function qr(e, t) {
  return Me(e, new I.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return I.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Hr(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Mr(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function En(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), d = i >= n.length;
    return o = !o && c.isArray(s) ? s.length : o, d ? (c.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !c.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && c.isArray(s[o]) && (s[o] = Mr(s[o])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, s) => {
      t(Hr(r), s, n, 0);
    }), n;
  }
  return null;
}
function Vr(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ce = {
  transitional: mn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = c.isObject(t);
    if (i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s ? JSON.stringify(En(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return qr(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Me(
          a ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Vr(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ce.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
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
  Ce.headers[e] = {};
});
const $r = c.toObjectSet([
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
]), Wr = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && $r[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ft = /* @__PURE__ */ Symbol("internals");
function Re(e) {
  return e && String(e).trim().toLowerCase();
}
function Ie(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(Ie) : String(e);
}
function zr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Jr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Je(e, t, n, r, s) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function Kr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Gr(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let q = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, d, f) {
      const l = Re(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = c.findKey(s, l);
      (!p || s[p] === void 0 || f === !0 || f === void 0 && s[p] !== !1) && (s[p || d] = Ie(a));
    }
    const o = (a, d) => c.forEach(a, (f, l) => i(f, l, d));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (c.isString(t) && (t = t.trim()) && !Jr(t))
      o(Wr(t), n);
    else if (c.isObject(t) && c.isIterable(t)) {
      let a = {}, d, f;
      for (const l of t) {
        if (!c.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[f = l[0]] = (d = a[f]) ? c.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      o(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Re(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return zr(s);
        if (c.isFunction(n))
          return n.call(this, s, r);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Re(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Je(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = Re(o), o) {
        const a = c.findKey(r, o);
        a && (!n || Je(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Je(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (s, i) => {
      const o = c.findKey(r, i);
      if (o) {
        n[o] = Ie(s), delete n[i];
        return;
      }
      const a = t ? Kr(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Ie(s), r[a] = !0;
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
    const r = (this[Ft] = this[Ft] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = Re(o);
      r[a] || (Gr(s, o), r[a] = !0);
    }
    return c.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
q.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(q.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(q);
function Ke(e, t) {
  const n = this || Ce, r = t || n, s = q.from(r.headers);
  let i = r.data;
  return c.forEach(e, function(a) {
    i = a.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function yn(e) {
  return !!(e && e.__CANCEL__);
}
function Se(e, t, n) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(Se, S, {
  __CANCEL__: !0
});
function wn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Xr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Yr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), l = r[i];
    o || (o = f), n[s] = d, r[s] = f;
    let p = i, E = 0;
    for (; p !== s; )
      E += n[p++], p = p % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), f - o < t)
      return;
    const y = l && f - l;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function Qr(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (f, l = Date.now()) => {
    n = l, s = null, i && (clearTimeout(i), i = null), e(...f);
  };
  return [(...f) => {
    const l = Date.now(), p = l - n;
    p >= r ? o(f, l) : (s = f, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - p)));
  }, () => s && o(s)];
}
const je = (e, t, n = 3) => {
  let r = 0;
  const s = Yr(50, 250);
  return Qr((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, d = o - r, f = s(d), l = o <= a;
    r = o;
    const p = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && a && l ? (a - o) / f : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, Pt = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, vt = (e) => (...t) => c.asap(() => e(...t)), Zr = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, I.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(I.origin),
  I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)
) : () => !0, es = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i, o) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      c.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), c.isString(r) && a.push(`path=${r}`), c.isString(s) && a.push(`domain=${s}`), i === !0 && a.push("secure"), c.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
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
function ts(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ns(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Sn(e, t, n) {
  let r = !ts(t);
  return e && (r || n == !1) ? ns(e, t) : t;
}
const Ut = (e) => e instanceof q ? { ...e } : e;
function pe(e, t) {
  t = t || {};
  const n = {};
  function r(f, l, p, E) {
    return c.isPlainObject(f) && c.isPlainObject(l) ? c.merge.call({ caseless: E }, f, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l;
  }
  function s(f, l, p, E) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(f))
        return r(void 0, f, p, E);
    } else return r(f, l, p, E);
  }
  function i(f, l) {
    if (!c.isUndefined(l))
      return r(void 0, l);
  }
  function o(f, l) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined(f))
        return r(void 0, f);
    } else return r(void 0, l);
  }
  function a(f, l, p) {
    if (p in t)
      return r(f, l);
    if (p in e)
      return r(void 0, f);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (f, l, p) => s(Ut(f), Ut(l), p, !0)
  };
  return c.forEach(Object.keys({ ...e, ...t }), function(l) {
    const p = d[l] || s, E = p(e[l], t[l], l);
    c.isUndefined(E) && p !== a || (n[l] = E);
  }), n;
}
const bn = (e) => {
  const t = pe({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = t;
  if (t.headers = o = q.from(o), t.url = hn(Sn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), c.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (c.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(d).forEach(([l, p]) => {
        f.includes(l.toLowerCase()) && o.set(l, p);
      });
    }
  }
  if (I.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(t)), r || r !== !1 && Zr(t.url))) {
    const d = s && i && es.read(i);
    d && o.set(s, d);
  }
  return t;
}, rs = typeof XMLHttpRequest < "u", ss = rs && function(e) {
  return new Promise(function(n, r) {
    const s = bn(e);
    let i = s.data;
    const o = q.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: d, onDownloadProgress: f } = s, l, p, E, y, u;
    function m() {
      y && y(), u && u(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function b() {
      if (!h)
        return;
      const A = q.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: A,
        config: e,
        request: h
      };
      wn(function(_) {
        n(_), m();
      }, function(_) {
        r(_), m();
      }, R), h = null;
    }
    "onloadend" in h ? h.onloadend = b : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, h.onabort = function() {
      h && (r(new S("Request aborted", S.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function(x) {
      const R = x && x.message ? x.message : "Network Error", P = new S(R, S.ERR_NETWORK, e, h);
      P.event = x || null, r(P), h = null;
    }, h.ontimeout = function() {
      let x = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const R = s.transitional || mn;
      s.timeoutErrorMessage && (x = s.timeoutErrorMessage), r(new S(
        x,
        R.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in h && c.forEach(o.toJSON(), function(x, R) {
      h.setRequestHeader(R, x);
    }), c.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), a && a !== "json" && (h.responseType = s.responseType), f && ([E, u] = je(f, !0), h.addEventListener("progress", E)), d && h.upload && ([p, y] = je(d), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (l = (A) => {
      h && (r(!A || A.type ? new Se(null, e, h) : A), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const w = Xr(s.url);
    if (w && I.protocols.indexOf(w) === -1) {
      r(new S("Unsupported protocol " + w + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, os = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(f) {
      if (!s) {
        s = !0, a();
        const l = f instanceof Error ? f : this.reason;
        r.abort(l instanceof S ? l : new Se(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(i) : f.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => c.asap(a), d;
  }
}, is = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, as = async function* (e, t) {
  for await (const n of cs(e))
    yield* is(n, t);
}, cs = async function* (e) {
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
}, It = (e, t, n, r) => {
  const s = as(e, t);
  let i = 0, o, a = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: l } = await s.next();
        if (f) {
          a(), d.close();
          return;
        }
        let p = l.byteLength;
        if (n) {
          let E = i += p;
          n(E);
        }
        d.enqueue(new Uint8Array(l));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(d) {
      return a(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Bt = 64 * 1024, { isFunction: Ne } = c, us = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(c.global), {
  ReadableStream: jt,
  TextEncoder: kt
} = c.global, qt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ls = (e) => {
  e = c.merge.call({
    skipUndefined: !0
  }, us, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? Ne(t) : typeof fetch == "function", i = Ne(n), o = Ne(r);
  if (!s)
    return !1;
  const a = s && Ne(jt), d = s && (typeof kt == "function" ? /* @__PURE__ */ ((u) => (m) => u.encode(m))(new kt()) : async (u) => new Uint8Array(await new n(u).arrayBuffer())), f = i && a && qt(() => {
    let u = !1;
    const m = new n(I.origin, {
      body: new jt(),
      method: "POST",
      get duplex() {
        return u = !0, "half";
      }
    }).headers.has("Content-Type");
    return u && !m;
  }), l = o && a && qt(() => c.isReadableStream(new r("").body)), p = {
    stream: l && ((u) => u.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
    !p[u] && (p[u] = (m, h) => {
      let b = m && m[u];
      if (b)
        return b.call(m);
      throw new S(`Response type '${u}' is not supported`, S.ERR_NOT_SUPPORT, h);
    });
  });
  const E = async (u) => {
    if (u == null)
      return 0;
    if (c.isBlob(u))
      return u.size;
    if (c.isSpecCompliantForm(u))
      return (await new n(I.origin, {
        method: "POST",
        body: u
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(u) || c.isArrayBuffer(u))
      return u.byteLength;
    if (c.isURLSearchParams(u) && (u = u + ""), c.isString(u))
      return (await d(u)).byteLength;
  }, y = async (u, m) => {
    const h = c.toFiniteNumber(u.getContentLength());
    return h ?? E(m);
  };
  return async (u) => {
    let {
      url: m,
      method: h,
      data: b,
      signal: w,
      cancelToken: A,
      timeout: x,
      onDownloadProgress: R,
      onUploadProgress: P,
      responseType: _,
      headers: X,
      withCredentials: O = "same-origin",
      fetchOptions: ee
    } = bn(u), H = t || fetch;
    _ = _ ? (_ + "").toLowerCase() : "text";
    let W = os([w, A && A.toAbortSignal()], x), M = null;
    const F = W && W.unsubscribe && (() => {
      W.unsubscribe();
    });
    let te;
    try {
      if (P && f && h !== "get" && h !== "head" && (te = await y(X, b)) !== 0) {
        let Y = new n(m, {
          method: "POST",
          body: b,
          duplex: "half"
        }), V;
        if (c.isFormData(b) && (V = Y.headers.get("content-type")) && X.setContentType(V), Y.body) {
          const [J, re] = Pt(
            te,
            je(vt(P))
          );
          b = It(Y.body, Bt, J, re);
        }
      }
      c.isString(O) || (O = O ? "include" : "omit");
      const B = i && "credentials" in n.prototype, be = {
        ...ee,
        signal: W,
        method: h.toUpperCase(),
        headers: X.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: B ? O : void 0
      };
      M = i && new n(m, be);
      let z = await (i ? H(M, ee) : H(m, be));
      const ne = l && (_ === "stream" || _ === "response");
      if (l && (R || ne && F)) {
        const Y = {};
        ["status", "statusText", "headers"].forEach((he) => {
          Y[he] = z[he];
        });
        const V = c.toFiniteNumber(z.headers.get("content-length")), [J, re] = R && Pt(
          V,
          je(vt(R), !0)
        ) || [];
        z = new r(
          It(z.body, Bt, J, () => {
            re && re(), F && F();
          }),
          Y
        );
      }
      _ = _ || "text";
      let De = await p[c.findKey(p, _) || "text"](z, u);
      return !ne && F && F(), await new Promise((Y, V) => {
        wn(Y, V, {
          data: De,
          headers: q.from(z.headers),
          status: z.status,
          statusText: z.statusText,
          config: u,
          request: M
        });
      });
    } catch (B) {
      throw F && F(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new S("Network Error", S.ERR_NETWORK, u, M),
        {
          cause: B.cause || B
        }
      ) : S.from(B, B && B.code, u, M);
    }
  };
}, fs = /* @__PURE__ */ new Map(), gn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, a = o, d, f, l = fs;
  for (; a--; )
    d = i[a], f = l.get(d), f === void 0 && l.set(d, f = a ? /* @__PURE__ */ new Map() : ls(t)), l = f;
  return f;
};
gn();
const St = {
  http: xr,
  xhr: ss,
  fetch: {
    get: gn
  }
};
c.forEach(St, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ht = (e) => `- ${e}`, ds = (e) => c.isFunction(e) || e === null || e === !1;
function ps(e, t) {
  e = c.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let a;
    if (s = r, !ds(r) && (s = St[(a = String(r)).toLowerCase()], s === void 0))
      throw new S(`Unknown adapter '${a}'`);
    if (s && (c.isFunction(s) || (s = s.get(t))))
      break;
    i[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([d, f]) => `adapter ${d} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? o.length > 1 ? `since :
` + o.map(Ht).join(`
`) : " " + Ht(o[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Rn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ps,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: St
};
function Ge(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Se(null, e);
}
function Mt(e) {
  return Ge(e), e.headers = q.from(e.headers), e.data = Ke.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rn.getAdapter(e.adapter || Ce.adapter, e)(e).then(function(r) {
    return Ge(e), r.data = Ke.call(
      e,
      e.transformResponse,
      r
    ), r.headers = q.from(r.headers), r;
  }, function(r) {
    return yn(r) || (Ge(e), r && r.response && (r.response.data = Ke.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = q.from(r.response.headers))), Promise.reject(r);
  });
}
const On = "1.13.2", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Vt = {};
Ve.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + On + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new S(
        s(o, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !Vt[o] && (Vt[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
Ve.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function hs(e, t, n) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const a = e[i], d = a === void 0 || o(a, i, e);
      if (d !== !0)
        throw new S("option " + i + " must be " + d, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const Be = {
  assertOptions: hs,
  validators: Ve
}, Q = Be.validators;
let de = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Nt(),
      response: new Nt()
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
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = pe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && Be.assertOptions(r, {
      silentJSONParsing: Q.transitional(Q.boolean),
      forcedJSONParsing: Q.transitional(Q.boolean),
      clarifyTimeoutError: Q.transitional(Q.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Be.assertOptions(s, {
      encode: Q.function,
      serialize: Q.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Be.assertOptions(n, {
      baseUrl: Q.spelling("baseURL"),
      withXsrfToken: Q.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && c.merge(
      i.common,
      i[n.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (u) => {
        delete i[u];
      }
    ), n.headers = q.concat(o, i);
    const a = [];
    let d = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (d = d && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(m) {
      f.push(m.fulfilled, m.rejected);
    });
    let l, p = 0, E;
    if (!d) {
      const u = [Mt.bind(this), void 0];
      for (u.unshift(...a), u.push(...f), E = u.length, l = Promise.resolve(n); p < E; )
        l = l.then(u[p++], u[p++]);
      return l;
    }
    E = a.length;
    let y = n;
    for (; p < E; ) {
      const u = a[p++], m = a[p++];
      try {
        y = u(y);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      l = Mt.call(this, y);
    } catch (u) {
      return Promise.reject(u);
    }
    for (p = 0, E = f.length; p < E; )
      l = l.then(f[p++], f[p++]);
    return l;
  }
  getUri(t) {
    t = pe(this.defaults, t);
    const n = Sn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return hn(n, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(t) {
  de.prototype[t] = function(n, r) {
    return this.request(pe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, a) {
      return this.request(pe(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  de.prototype[t] = n(), de.prototype[t + "Form"] = n(!0);
});
let ms = class Tn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      r.reason || (r.reason = new Se(i, o, a), n(r.reason));
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
      token: new Tn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Es(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ys(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const at = {
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
Object.entries(at).forEach(([e, t]) => {
  at[t] = e;
});
function An(e) {
  const t = new de(e), n = tn(de.prototype.request, t);
  return c.extend(n, de.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return An(pe(e, s));
  }, n;
}
const N = An(Ce);
N.Axios = de;
N.CanceledError = Se;
N.CancelToken = ms;
N.isCancel = yn;
N.VERSION = On;
N.toFormData = Me;
N.AxiosError = S;
N.Cancel = N.CanceledError;
N.all = function(t) {
  return Promise.all(t);
};
N.spread = Es;
N.isAxiosError = ys;
N.mergeConfig = pe;
N.AxiosHeaders = q;
N.formToJSON = (e) => En(c.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = Rn.getAdapter;
N.HttpStatusCode = at;
N.default = N;
const {
  Axios: eo,
  AxiosError: to,
  CanceledError: no,
  isCancel: ro,
  CancelToken: so,
  VERSION: oo,
  all: io,
  Cancel: ao,
  isAxiosError: co,
  spread: uo,
  toFormData: lo,
  AxiosHeaders: fo,
  HttpStatusCode: po,
  formToJSON: ho,
  getAdapter: mo,
  mergeConfig: Eo
} = N;
var Fe = { exports: {} }, Xe = {};
var $t;
function ws() {
  if ($t) return Xe;
  $t = 1;
  var e = Oe;
  function t(p, E) {
    return p === E && (p !== 0 || 1 / p === 1 / E) || p !== p && E !== E;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, i = e.useLayoutEffect, o = e.useDebugValue;
  function a(p, E) {
    var y = E(), u = r({ inst: { value: y, getSnapshot: E } }), m = u[0].inst, h = u[1];
    return i(
      function() {
        m.value = y, m.getSnapshot = E, d(m) && h({ inst: m });
      },
      [p, y, E]
    ), s(
      function() {
        return d(m) && h({ inst: m }), p(function() {
          d(m) && h({ inst: m });
        });
      },
      [p]
    ), o(y), y;
  }
  function d(p) {
    var E = p.getSnapshot;
    p = p.value;
    try {
      var y = E();
      return !n(p, y);
    } catch {
      return !0;
    }
  }
  function f(p, E) {
    return E();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : a;
  return Xe.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, Xe;
}
var Ye = {};
var Wt;
function Ss() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(y, u) {
      return y === u && (y !== 0 || 1 / y === 1 / u) || y !== y && u !== u;
    }
    function t(y, u) {
      l || s.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = u();
      if (!p) {
        var h = u();
        i(m, h) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      h = o({
        inst: { value: m, getSnapshot: u }
      });
      var b = h[0].inst, w = h[1];
      return d(
        function() {
          b.value = m, b.getSnapshot = u, n(b) && w({ inst: b });
        },
        [y, m, u]
      ), a(
        function() {
          return n(b) && w({ inst: b }), y(function() {
            n(b) && w({ inst: b });
          });
        },
        [y]
      ), f(m), m;
    }
    function n(y) {
      var u = y.getSnapshot;
      y = y.value;
      try {
        var m = u();
        return !i(y, m);
      } catch {
        return !0;
      }
    }
    function r(y, u) {
      return u();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = Oe, i = typeof Object.is == "function" ? Object.is : e, o = s.useState, a = s.useEffect, d = s.useLayoutEffect, f = s.useDebugValue, l = !1, p = !1, E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Ye.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ye;
}
var zt;
function bs() {
  return zt || (zt = 1, process.env.NODE_ENV === "production" ? Fe.exports = ws() : Fe.exports = Ss()), Fe.exports;
}
var Jt = bs();
const _n = 0, Cn = 1, xn = 2, Kt = 3;
var Gt = Object.prototype.hasOwnProperty;
function ct(e, t) {
  var n, r;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length)
        for (; r-- && ct(e[r], t[r]); ) ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (Gt.call(e, n) && ++r && !Gt.call(t, n) || !(n in t) || !ct(e[n], t[n])) return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
const ie = /* @__PURE__ */ new WeakMap(), ae = () => {
}, U = (
  /*#__NOINLINE__*/
  ae()
), ut = Object, g = (e) => e === U, Z = (e) => typeof e == "function", ce = (e, t) => ({
  ...e,
  ...t
}), Dn = (e) => Z(e.then), Qe = {}, Pe = {}, bt = "undefined", xe = typeof window != bt, lt = typeof document != bt, gs = xe && "Deno" in window, Rs = () => xe && typeof window.requestAnimationFrame != bt, Ln = (e, t) => {
  const n = ie.get(e);
  return [
    // Getter
    () => !g(t) && e.get(t) || Qe,
    // Setter
    (r) => {
      if (!g(t)) {
        const s = e.get(t);
        t in Pe || (Pe[t] = s), n[5](t, ce(s, r), s || Qe);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !g(t) && t in Pe ? Pe[t] : !g(t) && e.get(t) || Qe
  ];
};
let ft = !0;
const Os = () => ft, [dt, pt] = xe && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  ae,
  ae
], Ts = () => {
  const e = lt && document.visibilityState;
  return g(e) || e !== "hidden";
}, As = (e) => (lt && document.addEventListener("visibilitychange", e), dt("focus", e), () => {
  lt && document.removeEventListener("visibilitychange", e), pt("focus", e);
}), _s = (e) => {
  const t = () => {
    ft = !0, e();
  }, n = () => {
    ft = !1;
  };
  return dt("online", t), dt("offline", n), () => {
    pt("online", t), pt("offline", n);
  };
}, Cs = {
  isOnline: Os,
  isVisible: Ts
}, xs = {
  initFocus: As,
  initReconnect: _s
}, Xt = !Oe.useId, Ee = !xe || gs, Ds = (e) => Rs() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Ze = Ee ? kn : qn, et = typeof navigator < "u" && navigator.connection, Yt = !Ee && et && ([
  "slow-2g",
  "2g"
].includes(et.effectiveType) || et.saveData), ve = /* @__PURE__ */ new WeakMap(), Ls = (e) => ut.prototype.toString.call(e), tt = (e, t) => e === `[object ${t}]`;
let Ns = 0;
const ht = (e) => {
  const t = typeof e, n = Ls(e), r = tt(n, "Date"), s = tt(n, "RegExp"), i = tt(n, "Object");
  let o, a;
  if (ut(e) === e && !r && !s) {
    if (o = ve.get(e), o) return o;
    if (o = ++Ns + "~", ve.set(e, o), Array.isArray(e)) {
      for (o = "@", a = 0; a < e.length; a++)
        o += ht(e[a]) + ",";
      ve.set(e, o);
    }
    if (i) {
      o = "#";
      const d = ut.keys(e).sort();
      for (; !g(a = d.pop()); )
        g(e[a]) || (o += a + ":" + ht(e[a]) + ",");
      ve.set(e, o);
    }
  } else
    o = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return o;
}, gt = (e) => {
  if (Z(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? ht(e) : "", [
    e,
    t
  ];
};
let Fs = 0;
const mt = () => ++Fs;
async function Nn(...e) {
  const [t, n, r, s] = e, i = ce({
    populateCache: !0,
    throwOnError: !0
  }, typeof s == "boolean" ? {
    revalidate: s
  } : s || {});
  let o = i.populateCache;
  const a = i.rollbackOnError;
  let d = i.optimisticData;
  const f = (E) => typeof a == "function" ? a(E) : a !== !1, l = i.throwOnError;
  if (Z(n)) {
    const E = n, y = [], u = t.keys();
    for (const m of u)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && E(t.get(m)._k) && y.push(m);
    return Promise.all(y.map(p));
  }
  return p(n);
  async function p(E) {
    const [y] = gt(E);
    if (!y) return;
    const [u, m] = Ln(t, y), [h, b, w, A] = ie.get(t), x = () => {
      const F = h[y];
      return (Z(i.revalidate) ? i.revalidate(u().data, E) : i.revalidate !== !1) && (delete w[y], delete A[y], F && F[0]) ? F[0](xn).then(() => u().data) : u().data;
    };
    if (e.length < 3)
      return x();
    let R = r, P, _ = !1;
    const X = mt();
    b[y] = [
      X,
      0
    ];
    const O = !g(d), ee = u(), H = ee.data, W = ee._c, M = g(W) ? H : W;
    if (O && (d = Z(d) ? d(M, H) : d, m({
      data: d,
      _c: M
    })), Z(R))
      try {
        R = R(M);
      } catch (F) {
        P = F, _ = !0;
      }
    if (R && Dn(R))
      if (R = await R.catch((F) => {
        P = F, _ = !0;
      }), X !== b[y][0]) {
        if (_) throw P;
        return R;
      } else _ && O && f(P) && (o = !0, m({
        data: M,
        _c: U
      }));
    if (o && !_)
      if (Z(o)) {
        const F = o(R, M);
        m({
          data: F,
          error: U,
          _c: U
        });
      } else
        m({
          data: R,
          error: U,
          _c: U
        });
    if (b[y][1] = mt(), Promise.resolve(x()).then(() => {
      m({
        _c: U
      });
    }), _) {
      if (l) throw P;
      return;
    }
    return R;
  }
}
const Qt = (e, t) => {
  for (const n in e)
    e[n][0] && e[n][0](t);
}, Ps = (e, t) => {
  if (!ie.has(e)) {
    const n = ce(xs, t), r = /* @__PURE__ */ Object.create(null), s = Nn.bind(U, e);
    let i = ae;
    const o = /* @__PURE__ */ Object.create(null), a = (l, p) => {
      const E = o[l] || [];
      return o[l] = E, E.push(p), () => E.splice(E.indexOf(p), 1);
    }, d = (l, p, E) => {
      e.set(l, p);
      const y = o[l];
      if (y)
        for (const u of y)
          u(p, E);
    }, f = () => {
      if (!ie.has(e) && (ie.set(e, [
        r,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        s,
        d,
        a
      ]), !Ee)) {
        const l = n.initFocus(setTimeout.bind(U, Qt.bind(U, r, _n))), p = n.initReconnect(setTimeout.bind(U, Qt.bind(U, r, Cn)));
        i = () => {
          l && l(), p && p(), ie.delete(e);
        };
      }
    };
    return f(), [
      e,
      s,
      f,
      i
    ];
  }
  return [
    e,
    ie.get(e)[4]
  ];
}, vs = (e, t, n, r, s) => {
  const i = n.errorRetryCount, o = s.retryCount, a = ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
  !g(i) && o > i || setTimeout(r, a, s);
}, Us = ct, [Fn, Is] = Ps(/* @__PURE__ */ new Map()), Bs = ce(
  {
    // events
    onLoadingSlow: ae,
    onSuccess: ae,
    onError: ae,
    onErrorRetry: vs,
    onDiscarded: ae,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Yt ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Yt ? 5e3 : 3e3,
    // providers
    compare: Us,
    isPaused: () => !1,
    cache: Fn,
    mutate: Is,
    fallback: {}
  },
  // use web preset by default
  Cs
), js = (e, t) => {
  const n = ce(e, t);
  if (t) {
    const { use: r, fallback: s } = e, { use: i, fallback: o } = t;
    r && i && (n.use = r.concat(i)), s && o && (n.fallback = ce(s, o));
  }
  return n;
}, ks = jn({}), qs = "$inf$", Pn = xe && window.__SWR_DEVTOOLS_USE__, Hs = Pn ? window.__SWR_DEVTOOLS_USE__ : [], Ms = () => {
  Pn && (window.__SWR_DEVTOOLS_REACT__ = Oe);
}, Vs = (e) => Z(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], $s = () => {
  const e = Hn(ks);
  return en(() => ce(Bs, e), [
    e
  ]);
}, Ws = (e) => (t, n, r) => e(t, n && ((...i) => {
  const [o] = gt(t), [, , , a] = ie.get(Fn);
  if (o.startsWith(qs))
    return n(...i);
  const d = a[o];
  return g(d) ? n(...i) : (delete a[o], d);
}), r), zs = Hs.concat(Ws), Js = (e) => function(...n) {
  const r = $s(), [s, i, o] = Vs(n), a = js(r, o);
  let d = e;
  const { use: f } = a, l = (f || []).concat(zs);
  for (let p = l.length; p--; )
    d = l[p](d);
  return d(s, i || a.fetcher || null, a);
}, Ks = (e, t, n) => {
  const r = t[e] || (t[e] = []);
  return r.push(n), () => {
    const s = r.indexOf(n);
    s >= 0 && (r[s] = r[r.length - 1], r.pop());
  };
};
Ms();
const nt = Oe.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
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
}), rt = {
  dedupe: !0
}, Zt = Promise.resolve(U), Gs = (e, t, n) => {
  const { cache: r, compare: s, suspense: i, fallbackData: o, revalidateOnMount: a, revalidateIfStale: d, refreshInterval: f, refreshWhenHidden: l, refreshWhenOffline: p, keepPreviousData: E, strictServerPrefetchWarning: y } = n, [u, m, h, b] = ie.get(r), [w, A] = gt(e), x = le(!1), R = le(!1), P = le(w), _ = le(t), X = le(n), O = () => X.current, ee = () => O().isVisible() && O().isOnline(), [H, W, M, F] = Ln(r, w), te = le({}).current, B = g(o) ? g(n.fallback) ? U : n.fallback[w] : o, be = (T, C) => {
    for (const L in te) {
      const D = L;
      if (D === "data") {
        if (!s(T[D], C[D]) && (!g(T[D]) || !s(Le, C[D])))
          return !1;
      } else if (C[D] !== T[D])
        return !1;
    }
    return !0;
  }, z = en(() => {
    const T = !w || !t ? !1 : g(a) ? O().isPaused() || i ? !1 : d !== !1 : a, C = (j) => {
      const se = ce(j);
      return delete se._k, T ? {
        isValidating: !0,
        isLoading: !0,
        ...se
      } : se;
    }, L = H(), D = F(), K = C(L), me = L === D ? K : C(D);
    let v = K;
    return [
      () => {
        const j = C(H());
        return be(j, v) ? (v.data = j.data, v.isLoading = j.isLoading, v.isValidating = j.isValidating, v.error = j.error, v) : (v = j, j);
      },
      () => me
    ];
  }, [
    r,
    w
  ]), ne = Jt.useSyncExternalStore(ze(
    (T) => M(w, (C, L) => {
      be(L, C) || T();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      w
    ]
  ), z[0], z[1]), De = !x.current, Y = u[w] && u[w].length > 0, V = ne.data, J = g(V) ? B && Dn(B) ? nt(B) : B : V, re = ne.error, he = le(J), Le = E ? g(V) ? g(he.current) ? J : he.current : V : J, ue = w && g(J), vn = !Ee && // eslint-disable-next-line react-hooks/rules-of-hooks
  Jt.useSyncExternalStore(() => ae, () => !1, () => !0);
  y && vn && !i && ue && console.warn(`Missing pre-initiated data for serialized key "${w}" during server-side rendering. Data fethcing should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
  const Rt = Y && !g(re) ? !1 : De && !g(a) ? a : O().isPaused() ? !1 : i ? g(J) ? !1 : d : g(J) || d, Ot = !!(w && t && De && Rt), Un = g(ne.isValidating) ? Ot : ne.isValidating, In = g(ne.isLoading) ? Ot : ne.isLoading, ge = ze(
    async (T) => {
      const C = _.current;
      if (!w || !C || R.current || O().isPaused())
        return !1;
      let L, D, K = !0;
      const me = T || {}, v = !h[w] || !me.dedupe, j = () => Xt ? !R.current && w === P.current && x.current : w === P.current, se = {
        isValidating: !1,
        isLoading: !1
      }, At = () => {
        W(se);
      }, _t = () => {
        const $ = h[w];
        $ && $[1] === D && delete h[w];
      }, Ct = {
        isValidating: !0
      };
      g(H().data) && (Ct.isLoading = !0);
      try {
        if (v && (W(Ct), n.loadingTimeout && g(H().data) && setTimeout(() => {
          K && j() && O().onLoadingSlow(w, n);
        }, n.loadingTimeout), h[w] = [
          C(A),
          mt()
        ]), [L, D] = h[w], L = await L, v && setTimeout(_t, n.dedupingInterval), !h[w] || h[w][1] !== D)
          return v && j() && O().onDiscarded(w), !1;
        se.error = U;
        const $ = m[w];
        if (!g($) && // case 1
        (D <= $[0] || // case 2
        D <= $[1] || // case 3
        $[1] === 0))
          return At(), v && j() && O().onDiscarded(w), !1;
        const oe = H().data;
        se.data = s(oe, L) ? oe : L, v && j() && O().onSuccess(L, w, n);
      } catch ($) {
        _t();
        const oe = O(), { shouldRetryOnError: $e } = oe;
        oe.isPaused() || (se.error = $, v && j() && (oe.onError($, w, oe), ($e === !0 || Z($e) && $e($)) && (!O().revalidateOnFocus || !O().revalidateOnReconnect || ee()) && oe.onErrorRetry($, w, oe, (Bn) => {
          const We = u[w];
          We && We[0] && We[0](Kt, Bn);
        }, {
          retryCount: (me.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return K = !1, At(), !0;
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
  ), Tt = ze(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...T) => Nn(r, P.current, ...T),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Ze(() => {
    _.current = t, X.current = n, g(V) || (he.current = V);
  }), Ze(() => {
    if (!w) return;
    const T = ge.bind(U, rt);
    let C = 0;
    O().revalidateOnFocus && (C = Date.now() + O().focusThrottleInterval);
    const D = Ks(w, u, (K, me = {}) => {
      if (K == _n) {
        const v = Date.now();
        O().revalidateOnFocus && v > C && ee() && (C = v + O().focusThrottleInterval, T());
      } else if (K == Cn)
        O().revalidateOnReconnect && ee() && T();
      else {
        if (K == xn)
          return ge();
        if (K == Kt)
          return ge(me);
      }
    });
    return R.current = !1, P.current = w, x.current = !0, W({
      _k: A
    }), Rt && (h[w] || (g(J) || Ee ? T() : Ds(T))), () => {
      R.current = !0, D();
    };
  }, [
    w
  ]), Ze(() => {
    let T;
    function C() {
      const D = Z(f) ? f(H().data) : f;
      D && T !== -1 && (T = setTimeout(L, D));
    }
    function L() {
      !H().error && (l || O().isVisible()) && (p || O().isOnline()) ? ge(rt).then(C) : C();
    }
    return C(), () => {
      T && (clearTimeout(T), T = -1);
    };
  }, [
    f,
    l,
    p,
    w
  ]), Mn(Le), i) {
    if (!Xt && Ee && ue)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    ue && (_.current = t, X.current = n, R.current = !1);
    const T = b[w], C = !g(T) && ue ? Tt(T) : Zt;
    if (nt(C), !g(re) && ue)
      throw re;
    const L = ue ? ge(rt) : Zt;
    !g(Le) && ue && (L.status = "fulfilled", L.value = !0), nt(L);
  }
  return {
    mutate: Tt,
    get data() {
      return te.data = !0, Le;
    },
    get error() {
      return te.error = !0, re;
    },
    get isValidating() {
      return te.isValidating = !0, Un;
    },
    get isLoading() {
      return te.isLoading = !0, In;
    }
  };
}, yo = Js(Gs);
export {
  N as a,
  yo as u
};
