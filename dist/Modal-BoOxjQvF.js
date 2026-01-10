import { g as Zt, c as Q } from "./Button-B5nVYPMZ.js";
import * as V from "react";
import pe, { useState as be, useRef as B, useEffect as X, useCallback as W, useMemo as Je, useContext as Pe, createContext as Qt, useLayoutEffect as en, cloneElement as Ze, forwardRef as tn, useImperativeHandle as nn } from "react";
import ge from "react-dom";
import { j } from "./jsx-runtime-tc70JA_2.js";
const Te = !!(typeof window < "u" && window.document && window.document.createElement);
var He = !1, Ve = !1;
try {
  var De = {
    get passive() {
      return He = !0;
    },
    get once() {
      return Ve = He = !0;
    }
  };
  Te && (window.addEventListener("test", De, De), window.removeEventListener("test", De, !0));
} catch {
}
function Mt(e, t, n, r) {
  if (r && typeof r != "boolean" && !Ve) {
    var i = r.once, o = r.capture, s = n;
    !Ve && i && (s = n.__once || function u(d) {
      this.removeEventListener(t, u, o), n.call(this, d);
    }, n.__once = s), e.addEventListener(t, s, He ? r : o);
  }
  e.addEventListener(t, n, r);
}
function Ne(e) {
  return e && e.ownerDocument || document;
}
function ze(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
var we;
function ct(e) {
  if ((!we && we !== 0 || e) && Te) {
    var t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), we = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return we;
}
function rn() {
  return be(null);
}
function on(e) {
  const t = B(e);
  return X(() => {
    t.current = e;
  }, [e]), t;
}
function Ge(e) {
  const t = on(e);
  return W(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const lt = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function an(e, t) {
  const n = lt(e), r = lt(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function At(e, t) {
  return Je(() => an(e, t), [e, t]);
}
function sn(e) {
  const t = B(e);
  return t.current = e, t;
}
function un(e) {
  const t = sn(e);
  X(() => () => t.current(), []);
}
function cn(e) {
  var t = Ne(e);
  return t && t.defaultView || window;
}
function ln(e, t) {
  return cn(e).getComputedStyle(e, t);
}
var fn = /([A-Z])/g;
function dn(e) {
  return e.replace(fn, "-$1").toLowerCase();
}
var pn = /^ms-/;
function Ce(e) {
  return dn(e).replace(pn, "-ms-");
}
var vn = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function hn(e) {
  return !!(e && vn.test(e));
}
function ve(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ce(t)) || ln(e).getPropertyValue(Ce(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(Ce(i)) : hn(i) ? r += i + "(" + o + ") " : n += Ce(i) + ": " + o + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function Ae(e, t, n, r) {
  return Mt(e, t, n, r), function() {
    ze(e, t, n, r);
  };
}
function mn(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function yn(e) {
  var t = ve(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function En(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || mn(e, "transitionend", !0);
  }, t + n), o = Ae(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function Pt(e, t, n, r) {
  n == null && (n = yn(e) || 0);
  var i = En(e, n, r), o = Ae(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function Ie(e) {
  e === void 0 && (e = Ne());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function ft(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
function gn() {
  const e = B(!0), t = B(() => e.current);
  return X(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function bn(e) {
  const t = B(e);
  return t.current = e, t;
}
function Tn(e) {
  const t = bn(e);
  X(() => () => t.current(), []);
}
function xn(e) {
  const t = B(null);
  return X(() => {
    t.current = e;
  }), t.current;
}
function Rn(e) {
  const t = B(e);
  return X(() => {
    t.current = e;
  }, [e]), t;
}
function fe(e) {
  const t = Rn(e);
  return W(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const On = "data-rr-ui-";
function Sn(e) {
  return `${On}${e}`;
}
function wn(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const dt = Sn("modal-open");
class Qe {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1
  } = {}) {
    this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = t;
  }
  getScrollbarWidth() {
    return wn(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {
  }
  removeModalAttributes(t) {
  }
  setContainerStyle(t) {
    const n = {
      overflow: "hidden"
    }, r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.getElement();
    t.style = {
      overflow: i.style.overflow,
      [r]: i.style[r]
    }, t.scrollBarWidth && (n[r] = `${parseInt(ve(i, r) || "0", 10) + t.scrollBarWidth}px`), i.setAttribute(dt, ""), ve(i, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(dt), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return n !== -1 || (n = this.modals.length, this.modals.push(t), this.setModalAttributes(t), n !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n;
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Nt = /* @__PURE__ */ Qt(Te ? window : void 0);
Nt.Provider;
function et() {
  return Pe(Nt);
}
const ke = (e, t) => Te ? e == null ? (t || Ne()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Cn(e, t) {
  const n = et(), [r, i] = be(() => ke(e, n?.document));
  if (!r) {
    const o = ke(e);
    o && i(o);
  }
  return X(() => {
  }, [t, r]), X(() => {
    const o = ke(e);
    o !== r && i(o);
  }, [e, r]), r;
}
const pt = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function _n(e, t) {
  const n = pt(e), r = pt(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function tt(e, t) {
  return Je(() => _n(e, t), [e, t]);
}
const Mn = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", An = typeof document < "u", vt = An || Mn ? en : X;
function Pn(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function Nn() {
  const e = V.version.split(".");
  return {
    major: +e[0],
    minor: +e[1],
    patch: +e[2]
  };
}
function je(e) {
  if (!e || typeof e == "function")
    return null;
  const {
    major: t
  } = Nn();
  return t >= 19 ? e.props.ref : e.ref;
}
function jn({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i
}) {
  const o = B(null), s = B(t), u = fe(n);
  X(() => {
    t ? s.current = !0 : u(o.current);
  }, [t, u]);
  const d = tt(o, je(e)), p = /* @__PURE__ */ Ze(e, {
    ref: d
  });
  return t ? p : i || !s.current && r ? null : p;
}
const Dn = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function In(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function kn(e) {
  let {
    onEnter: t,
    onEntering: n,
    onEntered: r,
    onExit: i,
    onExiting: o,
    onExited: s,
    addEndListener: u,
    children: d
  } = e, p = In(e, Dn);
  const v = B(null), y = tt(v, je(d)), x = (N) => (c) => {
    N && v.current && N(v.current, c);
  }, _ = W(x(t), [t]), D = W(x(n), [n]), C = W(x(r), [r]), L = W(x(i), [i]), $ = W(x(o), [o]), G = W(x(s), [s]), k = W(x(u), [u]);
  return Object.assign({}, p, {
    nodeRef: v
  }, t && {
    onEnter: _
  }, n && {
    onEntering: D
  }, r && {
    onEntered: C
  }, i && {
    onExit: L
  }, o && {
    onExiting: $
  }, s && {
    onExited: G
  }, u && {
    addEndListener: k
  }, {
    children: typeof d == "function" ? (N, c) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      d(N, Object.assign({}, c, {
        ref: y
      }))
    ) : /* @__PURE__ */ Ze(d, {
      ref: y
    })
  });
}
const Ln = ["component"];
function $n(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Fn = /* @__PURE__ */ V.forwardRef((e, t) => {
  let {
    component: n
  } = e, r = $n(e, Ln);
  const i = kn(r);
  return /* @__PURE__ */ j.jsx(n, Object.assign({
    ref: t
  }, i));
});
function Wn({
  in: e,
  onTransition: t
}) {
  const n = B(null), r = B(!0), i = fe(t);
  return vt(() => {
    if (!n.current)
      return;
    let o = !1;
    return i({
      in: e,
      element: n.current,
      initial: r.current,
      isStale: () => o
    }), () => {
      o = !0;
    };
  }, [e, i]), vt(() => (r.current = !1, () => {
    r.current = !0;
  }), []), n;
}
function Bn({
  children: e,
  in: t,
  onExited: n,
  onEntered: r,
  transition: i
}) {
  const [o, s] = be(!t);
  t && o && s(!1);
  const u = Wn({
    in: !!t,
    onTransition: (p) => {
      const v = () => {
        p.isStale() || (p.in ? r?.(p.element, p.initial) : (s(!0), n?.(p.element)));
      };
      Promise.resolve(i(p)).then(v, (y) => {
        throw p.in || s(!0), y;
      });
    }
  }), d = tt(u, je(e));
  return o && !t ? null : /* @__PURE__ */ Ze(e, {
    ref: d
  });
}
function ht(e, t, n) {
  return e ? /* @__PURE__ */ j.jsx(Fn, Object.assign({}, n, {
    component: e
  })) : t ? /* @__PURE__ */ j.jsx(Bn, Object.assign({}, n, {
    transition: t
  })) : /* @__PURE__ */ j.jsx(jn, Object.assign({}, n));
}
const Un = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function qn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
let Le;
function Yn(e) {
  return Le || (Le = new Qe({
    ownerDocument: e?.document
  })), Le;
}
function Hn(e) {
  const t = et(), n = e || Yn(t), r = B({
    dialog: null,
    backdrop: null
  });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: W((i) => {
      r.current.dialog = i;
    }, []),
    setBackdropRef: W((i) => {
      r.current.backdrop = i;
    }, [])
  });
}
const jt = /* @__PURE__ */ tn((e, t) => {
  let {
    show: n = !1,
    role: r = "dialog",
    className: i,
    style: o,
    children: s,
    backdrop: u = !0,
    keyboard: d = !0,
    onBackdropClick: p,
    onEscapeKeyDown: v,
    transition: y,
    runTransition: x,
    backdropTransition: _,
    runBackdropTransition: D,
    autoFocus: C = !0,
    enforceFocus: L = !0,
    restoreFocus: $ = !0,
    restoreFocusOptions: G,
    renderDialog: k,
    renderBackdrop: N = (I) => /* @__PURE__ */ j.jsx("div", Object.assign({}, I)),
    manager: c,
    container: Y,
    onShow: K,
    onHide: ee = () => {
    },
    onExit: se,
    onExited: te,
    onExiting: ne,
    onEnter: oe,
    onEntering: ie,
    onEntered: J
  } = e, ue = qn(e, Un);
  const U = et(), z = Cn(Y), F = Hn(c), ce = gn(), a = xn(n), [f, E] = be(!n), m = B(null);
  nn(t, () => F, [F]), Te && !a && n && (m.current = Ie(U?.document)), n && f && E(!1);
  const h = fe(() => {
    if (F.add(), R.current = Ae(document, "keydown", S), w.current = Ae(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(g),
      !0
    ), K && K(), C) {
      var I, Se;
      const Re = Ie((I = (Se = F.dialog) == null ? void 0 : Se.ownerDocument) != null ? I : U?.document);
      F.dialog && Re && !ft(F.dialog, Re) && (m.current = Re, F.dialog.focus());
    }
  }), O = fe(() => {
    if (F.remove(), R.current == null || R.current(), w.current == null || w.current(), $) {
      var I;
      (I = m.current) == null || I.focus == null || I.focus(G), m.current = null;
    }
  });
  X(() => {
    !n || !z || h();
  }, [
    n,
    z,
    /* should never change: */
    h
  ]), X(() => {
    f && O();
  }, [f, O]), Tn(() => {
    O();
  });
  const g = fe(() => {
    if (!L || !ce() || !F.isTopModal())
      return;
    const I = Ie(U?.document);
    F.dialog && I && !ft(F.dialog, I) && F.dialog.focus();
  }), b = fe((I) => {
    I.target === I.currentTarget && (p?.(I), u === !0 && ee());
  }), S = fe((I) => {
    d && Pn(I) && F.isTopModal() && (v?.(I), I.defaultPrevented || ee());
  }), w = B(), R = B(), q = (...I) => {
    E(!0), te?.(...I);
  };
  if (!z)
    return null;
  const l = Object.assign({
    role: r,
    ref: F.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": r === "dialog" ? !0 : void 0
  }, ue, {
    style: o,
    className: i,
    tabIndex: -1
  });
  let H = k ? k(l) : /* @__PURE__ */ j.jsx("div", Object.assign({}, l, {
    children: /* @__PURE__ */ V.cloneElement(s, {
      role: "document"
    })
  }));
  H = ht(y, x, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: se,
    onExiting: ne,
    onExited: q,
    onEnter: oe,
    onEntering: ie,
    onEntered: J,
    children: H
  });
  let Z = null;
  return u && (Z = N({
    ref: F.setBackdropRef,
    onClick: b
  }), Z = ht(_, D, {
    in: !!n,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: Z
  })), /* @__PURE__ */ j.jsx(j.Fragment, {
    children: /* @__PURE__ */ ge.createPortal(/* @__PURE__ */ j.jsxs(j.Fragment, {
      children: [Z, H]
    }), z)
  });
});
jt.displayName = "Modal";
const Vn = Object.assign(jt, {
  Manager: Qe
});
function zn(e, t) {
  return e.classList ? e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Gn(e, t) {
  e.classList ? e.classList.add(t) : zn(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
var Kn = Function.prototype.bind.call(Function.prototype.call, [].slice);
function me(e, t) {
  return Kn(e.querySelectorAll(t));
}
function mt(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Xn(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = mt(e.className, t) : e.setAttribute("class", mt(e.className && e.className.baseVal || "", t));
}
const ye = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class Jn extends Qe {
  adjustAndStore(t, n, r) {
    const i = n.style[t];
    n.dataset[t] = i, ve(n, {
      [t]: `${parseFloat(ve(n, t)) + r}px`
    });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], ve(n, {
      [t]: r
    }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (Gn(n, "modal-open"), !t.scrollBarWidth) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    me(n, ye.FIXED_CONTENT).forEach((o) => this.adjustAndStore(r, o, t.scrollBarWidth)), me(n, ye.STICKY_CONTENT).forEach((o) => this.adjustAndStore(i, o, -t.scrollBarWidth)), me(n, ye.NAVBAR_TOGGLER).forEach((o) => this.adjustAndStore(i, o, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Xn(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    me(n, ye.FIXED_CONTENT).forEach((o) => this.restore(r, o)), me(n, ye.STICKY_CONTENT).forEach((o) => this.restore(i, o)), me(n, ye.NAVBAR_TOGGLER).forEach((o) => this.restore(i, o));
  }
}
let $e;
function Zn(e) {
  return $e || ($e = new Jn(e)), $e;
}
function Qn(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Ke(e, t) {
  return Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ke(e, t);
}
function er(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ke(e, t);
}
var _e = { exports: {} }, Me = { exports: {} }, A = {};
var yt;
function tr() {
  if (yt) return A;
  yt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, o = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, u = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, v = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, x = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _ = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, D = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, L = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, $ = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, G = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function k(c) {
    if (typeof c == "object" && c !== null) {
      var Y = c.$$typeof;
      switch (Y) {
        case t:
          switch (c = c.type, c) {
            case d:
            case p:
            case r:
            case o:
            case i:
            case y:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case v:
                case D:
                case _:
                case s:
                  return c;
                default:
                  return Y;
              }
          }
        case n:
          return Y;
      }
    }
  }
  function N(c) {
    return k(c) === p;
  }
  return A.AsyncMode = d, A.ConcurrentMode = p, A.ContextConsumer = u, A.ContextProvider = s, A.Element = t, A.ForwardRef = v, A.Fragment = r, A.Lazy = D, A.Memo = _, A.Portal = n, A.Profiler = o, A.StrictMode = i, A.Suspense = y, A.isAsyncMode = function(c) {
    return N(c) || k(c) === d;
  }, A.isConcurrentMode = N, A.isContextConsumer = function(c) {
    return k(c) === u;
  }, A.isContextProvider = function(c) {
    return k(c) === s;
  }, A.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, A.isForwardRef = function(c) {
    return k(c) === v;
  }, A.isFragment = function(c) {
    return k(c) === r;
  }, A.isLazy = function(c) {
    return k(c) === D;
  }, A.isMemo = function(c) {
    return k(c) === _;
  }, A.isPortal = function(c) {
    return k(c) === n;
  }, A.isProfiler = function(c) {
    return k(c) === o;
  }, A.isStrictMode = function(c) {
    return k(c) === i;
  }, A.isSuspense = function(c) {
    return k(c) === y;
  }, A.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === p || c === o || c === i || c === y || c === x || typeof c == "object" && c !== null && (c.$$typeof === D || c.$$typeof === _ || c.$$typeof === s || c.$$typeof === u || c.$$typeof === v || c.$$typeof === L || c.$$typeof === $ || c.$$typeof === G || c.$$typeof === C);
  }, A.typeOf = k, A;
}
var P = {};
var Et;
function nr() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, o = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, u = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, d = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, v = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, y = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, x = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _ = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, D = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, L = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, $ = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, G = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function k(l) {
      return typeof l == "string" || typeof l == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      l === r || l === p || l === o || l === i || l === y || l === x || typeof l == "object" && l !== null && (l.$$typeof === D || l.$$typeof === _ || l.$$typeof === s || l.$$typeof === u || l.$$typeof === v || l.$$typeof === L || l.$$typeof === $ || l.$$typeof === G || l.$$typeof === C);
    }
    function N(l) {
      if (typeof l == "object" && l !== null) {
        var H = l.$$typeof;
        switch (H) {
          case t:
            var Z = l.type;
            switch (Z) {
              case d:
              case p:
              case r:
              case o:
              case i:
              case y:
                return Z;
              default:
                var I = Z && Z.$$typeof;
                switch (I) {
                  case u:
                  case v:
                  case D:
                  case _:
                  case s:
                    return I;
                  default:
                    return H;
                }
            }
          case n:
            return H;
        }
      }
    }
    var c = d, Y = p, K = u, ee = s, se = t, te = v, ne = r, oe = D, ie = _, J = n, ue = o, U = i, z = y, F = !1;
    function ce(l) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(l) || N(l) === d;
    }
    function a(l) {
      return N(l) === p;
    }
    function f(l) {
      return N(l) === u;
    }
    function E(l) {
      return N(l) === s;
    }
    function m(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function h(l) {
      return N(l) === v;
    }
    function O(l) {
      return N(l) === r;
    }
    function g(l) {
      return N(l) === D;
    }
    function b(l) {
      return N(l) === _;
    }
    function S(l) {
      return N(l) === n;
    }
    function w(l) {
      return N(l) === o;
    }
    function R(l) {
      return N(l) === i;
    }
    function q(l) {
      return N(l) === y;
    }
    P.AsyncMode = c, P.ConcurrentMode = Y, P.ContextConsumer = K, P.ContextProvider = ee, P.Element = se, P.ForwardRef = te, P.Fragment = ne, P.Lazy = oe, P.Memo = ie, P.Portal = J, P.Profiler = ue, P.StrictMode = U, P.Suspense = z, P.isAsyncMode = ce, P.isConcurrentMode = a, P.isContextConsumer = f, P.isContextProvider = E, P.isElement = m, P.isForwardRef = h, P.isFragment = O, P.isLazy = g, P.isMemo = b, P.isPortal = S, P.isProfiler = w, P.isStrictMode = R, P.isSuspense = q, P.isValidElementType = k, P.typeOf = N;
  })()), P;
}
var gt;
function Dt() {
  return gt || (gt = 1, process.env.NODE_ENV === "production" ? Me.exports = tr() : Me.exports = nr()), Me.exports;
}
var Fe, bt;
function rr() {
  if (bt) return Fe;
  bt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(s).map(function(v) {
        return s[v];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        p[v] = v;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Fe = i() ? Object.assign : function(o, s) {
    for (var u, d = r(o), p, v = 1; v < arguments.length; v++) {
      u = Object(arguments[v]);
      for (var y in u)
        t.call(u, y) && (d[y] = u[y]);
      if (e) {
        p = e(u);
        for (var x = 0; x < p.length; x++)
          n.call(u, p[x]) && (d[p[x]] = u[p[x]]);
      }
    }
    return d;
  }, Fe;
}
var We, Tt;
function nt() {
  if (Tt) return We;
  Tt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return We = e, We;
}
var Be, xt;
function It() {
  return xt || (xt = 1, Be = Function.call.bind(Object.prototype.hasOwnProperty)), Be;
}
var Ue, Rt;
function or() {
  if (Rt) return Ue;
  Rt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ nt(), n = {}, r = /* @__PURE__ */ It();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, u, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in o)
        if (r(o, v)) {
          var y;
          try {
            if (typeof o[v] != "function") {
              var x = Error(
                (d || "React class") + ": " + u + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            y = o[v](s, v, d, u, null, t);
          } catch (D) {
            y = D;
          }
          if (y && !(y instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in n)) {
            n[y.message] = !0;
            var _ = p ? p() : "";
            e(
              "Failed " + u + " type: " + y.message + (_ ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ue = i, Ue;
}
var qe, Ot;
function ir() {
  if (Ot) return qe;
  Ot = 1;
  var e = Dt(), t = rr(), n = /* @__PURE__ */ nt(), r = /* @__PURE__ */ It(), i = /* @__PURE__ */ or(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return qe = function(u, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function y(a) {
      var f = a && (p && a[p] || a[v]);
      if (typeof f == "function")
        return f;
    }
    var x = "<<anonymous>>", _ = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: G(),
      arrayOf: k,
      element: N(),
      elementType: c(),
      instanceOf: Y,
      node: te(),
      objectOf: ee,
      oneOf: K,
      oneOfType: se,
      shape: oe,
      exact: ie
    };
    function D(a, f) {
      return a === f ? a !== 0 || 1 / a === 1 / f : a !== a && f !== f;
    }
    function C(a, f) {
      this.message = a, this.data = f && typeof f == "object" ? f : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function L(a) {
      if (process.env.NODE_ENV !== "production")
        var f = {}, E = 0;
      function m(O, g, b, S, w, R, q) {
        if (S = S || x, R = R || b, q !== n) {
          if (d) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw l.name = "Invariant Violation", l;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var H = S + ":" + b;
            !f[H] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), f[H] = !0, E++);
          }
        }
        return g[b] == null ? O ? g[b] === null ? new C("The " + w + " `" + R + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new C("The " + w + " `" + R + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : a(g, b, S, w, R);
      }
      var h = m.bind(null, !1);
      return h.isRequired = m.bind(null, !0), h;
    }
    function $(a) {
      function f(E, m, h, O, g, b) {
        var S = E[m], w = U(S);
        if (w !== a) {
          var R = z(S);
          return new C(
            "Invalid " + O + " `" + g + "` of type " + ("`" + R + "` supplied to `" + h + "`, expected ") + ("`" + a + "`."),
            { expectedType: a }
          );
        }
        return null;
      }
      return L(f);
    }
    function G() {
      return L(s);
    }
    function k(a) {
      function f(E, m, h, O, g) {
        if (typeof a != "function")
          return new C("Property `" + g + "` of component `" + h + "` has invalid PropType notation inside arrayOf.");
        var b = E[m];
        if (!Array.isArray(b)) {
          var S = U(b);
          return new C("Invalid " + O + " `" + g + "` of type " + ("`" + S + "` supplied to `" + h + "`, expected an array."));
        }
        for (var w = 0; w < b.length; w++) {
          var R = a(b, w, h, O, g + "[" + w + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return L(f);
    }
    function N() {
      function a(f, E, m, h, O) {
        var g = f[E];
        if (!u(g)) {
          var b = U(g);
          return new C("Invalid " + h + " `" + O + "` of type " + ("`" + b + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return L(a);
    }
    function c() {
      function a(f, E, m, h, O) {
        var g = f[E];
        if (!e.isValidElementType(g)) {
          var b = U(g);
          return new C("Invalid " + h + " `" + O + "` of type " + ("`" + b + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return L(a);
    }
    function Y(a) {
      function f(E, m, h, O, g) {
        if (!(E[m] instanceof a)) {
          var b = a.name || x, S = ce(E[m]);
          return new C("Invalid " + O + " `" + g + "` of type " + ("`" + S + "` supplied to `" + h + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return L(f);
    }
    function K(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function f(E, m, h, O, g) {
        for (var b = E[m], S = 0; S < a.length; S++)
          if (D(b, a[S]))
            return null;
        var w = JSON.stringify(a, function(q, l) {
          var H = z(l);
          return H === "symbol" ? String(l) : l;
        });
        return new C("Invalid " + O + " `" + g + "` of value `" + String(b) + "` " + ("supplied to `" + h + "`, expected one of " + w + "."));
      }
      return L(f);
    }
    function ee(a) {
      function f(E, m, h, O, g) {
        if (typeof a != "function")
          return new C("Property `" + g + "` of component `" + h + "` has invalid PropType notation inside objectOf.");
        var b = E[m], S = U(b);
        if (S !== "object")
          return new C("Invalid " + O + " `" + g + "` of type " + ("`" + S + "` supplied to `" + h + "`, expected an object."));
        for (var w in b)
          if (r(b, w)) {
            var R = a(b, w, h, O, g + "." + w, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return L(f);
    }
    function se(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var f = 0; f < a.length; f++) {
        var E = a[f];
        if (typeof E != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(E) + " at index " + f + "."
          ), s;
      }
      function m(h, O, g, b, S) {
        for (var w = [], R = 0; R < a.length; R++) {
          var q = a[R], l = q(h, O, g, b, S, n);
          if (l == null)
            return null;
          l.data && r(l.data, "expectedType") && w.push(l.data.expectedType);
        }
        var H = w.length > 0 ? ", expected one of type [" + w.join(", ") + "]" : "";
        return new C("Invalid " + b + " `" + S + "` supplied to " + ("`" + g + "`" + H + "."));
      }
      return L(m);
    }
    function te() {
      function a(f, E, m, h, O) {
        return J(f[E]) ? null : new C("Invalid " + h + " `" + O + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return L(a);
    }
    function ne(a, f, E, m, h) {
      return new C(
        (a || "React class") + ": " + f + " type `" + E + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + h + "`."
      );
    }
    function oe(a) {
      function f(E, m, h, O, g) {
        var b = E[m], S = U(b);
        if (S !== "object")
          return new C("Invalid " + O + " `" + g + "` of type `" + S + "` " + ("supplied to `" + h + "`, expected `object`."));
        for (var w in a) {
          var R = a[w];
          if (typeof R != "function")
            return ne(h, O, g, w, z(R));
          var q = R(b, w, h, O, g + "." + w, n);
          if (q)
            return q;
        }
        return null;
      }
      return L(f);
    }
    function ie(a) {
      function f(E, m, h, O, g) {
        var b = E[m], S = U(b);
        if (S !== "object")
          return new C("Invalid " + O + " `" + g + "` of type `" + S + "` " + ("supplied to `" + h + "`, expected `object`."));
        var w = t({}, E[m], a);
        for (var R in w) {
          var q = a[R];
          if (r(a, R) && typeof q != "function")
            return ne(h, O, g, R, z(q));
          if (!q)
            return new C(
              "Invalid " + O + " `" + g + "` key `" + R + "` supplied to `" + h + "`.\nBad object: " + JSON.stringify(E[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var l = q(b, R, h, O, g + "." + R, n);
          if (l)
            return l;
        }
        return null;
      }
      return L(f);
    }
    function J(a) {
      switch (typeof a) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !a;
        case "object":
          if (Array.isArray(a))
            return a.every(J);
          if (a === null || u(a))
            return !0;
          var f = y(a);
          if (f) {
            var E = f.call(a), m;
            if (f !== a.entries) {
              for (; !(m = E.next()).done; )
                if (!J(m.value))
                  return !1;
            } else
              for (; !(m = E.next()).done; ) {
                var h = m.value;
                if (h && !J(h[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(a, f) {
      return a === "symbol" ? !0 : f ? f["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && f instanceof Symbol : !1;
    }
    function U(a) {
      var f = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : ue(f, a) ? "symbol" : f;
    }
    function z(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var f = U(a);
      if (f === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return f;
    }
    function F(a) {
      var f = z(a);
      switch (f) {
        case "array":
        case "object":
          return "an " + f;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + f;
        default:
          return f;
      }
    }
    function ce(a) {
      return !a.constructor || !a.constructor.name ? x : a.constructor.name;
    }
    return _.checkPropTypes = i, _.resetWarningCache = i.resetWarningCache, _.PropTypes = _, _;
  }, qe;
}
var Ye, St;
function ar() {
  if (St) return Ye;
  St = 1;
  var e = /* @__PURE__ */ nt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ye = function() {
    function r(s, u, d, p, v, y) {
      if (y !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Ye;
}
var wt;
function sr() {
  if (wt) return _e.exports;
  if (wt = 1, process.env.NODE_ENV !== "production") {
    var e = Dt(), t = !0;
    _e.exports = /* @__PURE__ */ ir()(e.isElement, t);
  } else
    _e.exports = /* @__PURE__ */ ar()();
  return _e.exports;
}
var ur = /* @__PURE__ */ sr();
const T = /* @__PURE__ */ Zt(ur), Ct = {
  disabled: !1
};
var cr = process.env.NODE_ENV !== "production" ? T.oneOfType([T.number, T.shape({
  enter: T.number,
  exit: T.number,
  appear: T.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && T.oneOfType([T.string, T.shape({
  enter: T.string,
  exit: T.string,
  active: T.string
}), T.shape({
  enter: T.string,
  enterDone: T.string,
  enterActive: T.string,
  exit: T.string,
  exitDone: T.string,
  exitActive: T.string
})]);
const kt = pe.createContext(null);
var lr = function(t) {
  return t.scrollTop;
}, Oe = "unmounted", le = "exited", ae = "entering", de = "entered", Xe = "exiting", re = /* @__PURE__ */ (function(e) {
  er(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var s = i, u = s && !s.isMounting ? r.enter : r.appear, d;
    return o.appearStatus = null, r.in ? u ? (d = le, o.appearStatus = ae) : d = de : r.unmountOnExit || r.mountOnEnter ? d = Oe : d = le, o.state = {
      status: d
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var s = i.in;
    return s && o.status === Oe ? {
      status: le
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ae && s !== de && (o = ae) : (s === ae || s === de) && (o = Xe);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, o, s, u;
    return o = s = u = i, i != null && typeof i != "number" && (o = i.exit, s = i.enter, u = i.appear !== void 0 ? i.appear : s), {
      exit: o,
      enter: s,
      appear: u
    };
  }, n.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === ae) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ge.findDOMNode(this);
          s && lr(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === le && this.setState({
      status: Oe
    });
  }, n.performEnter = function(i) {
    var o = this, s = this.props.enter, u = this.context ? this.context.isMounting : i, d = this.props.nodeRef ? [u] : [ge.findDOMNode(this), u], p = d[0], v = d[1], y = this.getTimeouts(), x = u ? y.appear : y.enter;
    if (!i && !s || Ct.disabled) {
      this.safeSetState({
        status: de
      }, function() {
        o.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, v), this.safeSetState({
      status: ae
    }, function() {
      o.props.onEntering(p, v), o.onTransitionEnd(x, function() {
        o.safeSetState({
          status: de
        }, function() {
          o.props.onEntered(p, v);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, s = this.getTimeouts(), u = this.props.nodeRef ? void 0 : ge.findDOMNode(this);
    if (!o || Ct.disabled) {
      this.safeSetState({
        status: le
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Xe
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: le
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, n.setNextCallback = function(i) {
    var o = this, s = !0;
    return this.nextCallback = function(u) {
      s && (s = !1, o.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ge.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!s || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], p = d[0], v = d[1];
      this.props.addEndListener(p, v);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Oe)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = Qn(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ pe.createElement(kt.Provider, {
        value: null
      }, typeof s == "function" ? s(i, u) : pe.cloneElement(pe.Children.only(s), u))
    );
  }, t;
})(pe.Component);
re.contextType = kt;
re.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: T.shape({
    current: typeof Element > "u" ? T.any : function(e, t, n, r, i, o) {
      var s = e[t];
      return T.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, o);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: T.oneOfType([T.func.isRequired, T.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: T.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: T.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: T.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: T.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: T.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: T.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = cr;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: T.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: T.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: T.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: T.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: T.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: T.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: T.func
} : {};
function Ee() {
}
re.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ee,
  onEntering: Ee,
  onEntered: Ee,
  onExit: Ee,
  onExiting: Ee,
  onExited: Ee
};
re.UNMOUNTED = Oe;
re.EXITED = le;
re.ENTERING = ae;
re.ENTERED = de;
re.EXITING = Xe;
function _t(e, t) {
  const n = ve(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function fr(e, t) {
  const n = _t(e, "transitionDuration"), r = _t(e, "transitionDelay"), i = Pt(e, (o) => {
    o.target === e && (i(), t(o));
  }, n + r);
}
function dr(e) {
  e.offsetHeight;
}
function pr(e) {
  return e && "setState" in e ? ge.findDOMNode(e) : e ?? null;
}
const Lt = /* @__PURE__ */ pe.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  onExited: o,
  addEndListener: s,
  children: u,
  childRef: d,
  ...p
}, v) => {
  const y = B(null), x = At(y, d), _ = (Y) => {
    x(pr(Y));
  }, D = (Y) => (K) => {
    Y && y.current && Y(y.current, K);
  }, C = W(D(e), [e]), L = W(D(t), [t]), $ = W(D(n), [n]), G = W(D(r), [r]), k = W(D(i), [i]), N = W(D(o), [o]), c = W(D(s), [s]);
  return /* @__PURE__ */ j.jsx(re, {
    ref: v,
    ...p,
    onEnter: C,
    onEntered: $,
    onEntering: L,
    onExit: G,
    onExited: N,
    onExiting: k,
    addEndListener: c,
    nodeRef: y,
    children: typeof u == "function" ? (Y, K) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      u(Y, {
        ...K,
        ref: _
      })
    ) : /* @__PURE__ */ pe.cloneElement(u, {
      ref: _
    })
  });
});
Lt.displayName = "TransitionWrapper";
const vr = {
  [ae]: "show",
  [de]: "show"
}, rt = /* @__PURE__ */ V.forwardRef(({
  className: e,
  children: t,
  transitionClasses: n = {},
  onEnter: r,
  ...i
}, o) => {
  const s = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...i
  }, u = W((d, p) => {
    dr(d), r?.(d, p);
  }, [r]);
  return /* @__PURE__ */ j.jsx(Lt, {
    ref: o,
    addEndListener: fr,
    ...s,
    onEnter: u,
    childRef: je(t),
    children: (d, p) => /* @__PURE__ */ V.cloneElement(t, {
      ...p,
      className: Q("fade", e, t.props.className, vr[d], n[d])
    })
  });
});
rt.displayName = "Fade";
const hr = ["xxl", "xl", "lg", "md", "sm", "xs"], mr = "xs", ot = /* @__PURE__ */ V.createContext({
  prefixes: {},
  breakpoints: hr,
  minBreakpoint: mr
}), {
  Consumer: Cr,
  Provider: _r
} = ot;
function xe(e, t) {
  const {
    prefixes: n
  } = Pe(ot);
  return e || n[t] || t;
}
function yr() {
  const {
    dir: e
  } = Pe(ot);
  return e === "rtl";
}
const $t = /* @__PURE__ */ V.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = xe(t, "modal-body"), /* @__PURE__ */ j.jsx(n, {
  ref: i,
  className: Q(e, t),
  ...r
})));
$t.displayName = "ModalBody";
const Ft = /* @__PURE__ */ V.createContext({
  onHide() {
  }
}), it = /* @__PURE__ */ V.forwardRef(({
  bsPrefix: e,
  className: t,
  contentClassName: n,
  centered: r,
  size: i,
  fullscreen: o,
  children: s,
  scrollable: u,
  ...d
}, p) => {
  e = xe(e, "modal");
  const v = `${e}-dialog`, y = typeof o == "string" ? `${e}-fullscreen-${o}` : `${e}-fullscreen`;
  return /* @__PURE__ */ j.jsx("div", {
    ...d,
    ref: p,
    className: Q(v, t, i && `${e}-${i}`, r && `${v}-centered`, u && `${v}-scrollable`, o && y),
    children: /* @__PURE__ */ j.jsx("div", {
      className: Q(`${e}-content`, n),
      children: s
    })
  });
});
it.displayName = "ModalDialog";
const Wt = /* @__PURE__ */ V.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = xe(t, "modal-footer"), /* @__PURE__ */ j.jsx(n, {
  ref: i,
  className: Q(e, t),
  ...r
})));
Wt.displayName = "ModalFooter";
const Er = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": T.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: T.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: T.oneOf(["white"])
}, at = /* @__PURE__ */ V.forwardRef(({
  className: e,
  variant: t,
  "aria-label": n = "Close",
  ...r
}, i) => /* @__PURE__ */ j.jsx("button", {
  ref: i,
  type: "button",
  className: Q("btn-close", t && `btn-close-${t}`, e),
  "aria-label": n,
  ...r
}));
at.displayName = "CloseButton";
at.propTypes = Er;
const Bt = /* @__PURE__ */ V.forwardRef(({
  closeLabel: e = "Close",
  closeVariant: t,
  closeButton: n = !1,
  onHide: r,
  children: i,
  ...o
}, s) => {
  const u = Pe(Ft), d = Ge(() => {
    u?.onHide(), r?.();
  });
  return /* @__PURE__ */ j.jsxs("div", {
    ref: s,
    ...o,
    children: [i, n && /* @__PURE__ */ j.jsx(at, {
      "aria-label": e,
      variant: t,
      onClick: d
    })]
  });
});
Bt.displayName = "AbstractModalHeader";
const Ut = /* @__PURE__ */ V.forwardRef(({
  bsPrefix: e,
  className: t,
  closeLabel: n = "Close",
  closeButton: r = !1,
  ...i
}, o) => (e = xe(e, "modal-header"), /* @__PURE__ */ j.jsx(Bt, {
  ref: o,
  ...i,
  className: Q(t, e),
  closeLabel: n,
  closeButton: r
})));
Ut.displayName = "ModalHeader";
const gr = ((e) => (
  // eslint-disable-next-line react/display-name
  /* @__PURE__ */ V.forwardRef((t, n) => /* @__PURE__ */ j.jsx("div", {
    ...t,
    ref: n,
    className: Q(t.className, e)
  }))
)), br = gr("h4"), qt = /* @__PURE__ */ V.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = br,
  ...r
}, i) => (t = xe(t, "modal-title"), /* @__PURE__ */ j.jsx(n, {
  ref: i,
  className: Q(e, t),
  ...r
})));
qt.displayName = "ModalTitle";
function Tr(e) {
  return /* @__PURE__ */ j.jsx(rt, {
    ...e,
    timeout: null
  });
}
function xr(e) {
  return /* @__PURE__ */ j.jsx(rt, {
    ...e,
    timeout: null
  });
}
const Yt = /* @__PURE__ */ V.forwardRef(({
  bsPrefix: e,
  className: t,
  style: n,
  dialogClassName: r,
  contentClassName: i,
  children: o,
  dialogAs: s = it,
  "data-bs-theme": u,
  "aria-labelledby": d,
  "aria-describedby": p,
  "aria-label": v,
  /* BaseModal props */
  show: y = !1,
  animation: x = !0,
  backdrop: _ = !0,
  keyboard: D = !0,
  onEscapeKeyDown: C,
  onShow: L,
  onHide: $,
  container: G,
  autoFocus: k = !0,
  enforceFocus: N = !0,
  restoreFocus: c = !0,
  restoreFocusOptions: Y,
  onEntered: K,
  onExit: ee,
  onExiting: se,
  onEnter: te,
  onEntering: ne,
  onExited: oe,
  backdropClassName: ie,
  manager: J,
  ...ue
}, U) => {
  const [z, F] = be({}), [ce, a] = be(!1), f = B(!1), E = B(!1), m = B(null), [h, O] = rn(), g = At(U, O), b = Ge($), S = yr();
  e = xe(e, "modal");
  const w = Je(() => ({
    onHide: b
  }), [b]);
  function R() {
    return J || Zn({
      isRTL: S
    });
  }
  function q(M) {
    if (!Te) return;
    const he = R().getScrollbarWidth() > 0, ut = M.scrollHeight > Ne(M).documentElement.clientHeight;
    F({
      paddingRight: he && !ut ? ct() : void 0,
      paddingLeft: !he && ut ? ct() : void 0
    });
  }
  const l = Ge(() => {
    h && q(h.dialog);
  });
  un(() => {
    ze(window, "resize", l), m.current == null || m.current();
  });
  const H = () => {
    f.current = !0;
  }, Z = (M) => {
    f.current && h && M.target === h.dialog && (E.current = !0), f.current = !1;
  }, I = () => {
    a(!0), m.current = Pt(h.dialog, () => {
      a(!1);
    });
  }, Se = (M) => {
    M.target === M.currentTarget && I();
  }, Re = (M) => {
    if (_ === "static") {
      Se(M);
      return;
    }
    if (E.current || M.target !== M.currentTarget) {
      E.current = !1;
      return;
    }
    $?.();
  }, Ht = (M) => {
    D ? C?.(M) : (M.preventDefault(), _ === "static" && I());
  }, Vt = (M, he) => {
    M && q(M), te?.(M, he);
  }, zt = (M) => {
    m.current == null || m.current(), ee?.(M);
  }, Gt = (M, he) => {
    ne?.(M, he), Mt(window, "resize", l);
  }, Kt = (M) => {
    M && (M.style.display = ""), oe?.(M), ze(window, "resize", l);
  }, Xt = W((M) => /* @__PURE__ */ j.jsx("div", {
    ...M,
    className: Q(`${e}-backdrop`, ie, !x && "show")
  }), [x, ie, e]), st = {
    ...n,
    ...z
  };
  st.display = "block";
  const Jt = (M) => /* @__PURE__ */ j.jsx("div", {
    role: "dialog",
    ...M,
    style: st,
    className: Q(t, e, ce && `${e}-static`, !x && "show"),
    onClick: _ ? Re : void 0,
    onMouseUp: Z,
    "data-bs-theme": u,
    "aria-label": v,
    "aria-labelledby": d,
    "aria-describedby": p,
    children: /* @__PURE__ */ j.jsx(s, {
      ...ue,
      onMouseDown: H,
      className: r,
      contentClassName: i,
      children: o
    })
  });
  return /* @__PURE__ */ j.jsx(Ft.Provider, {
    value: w,
    children: /* @__PURE__ */ j.jsx(Vn, {
      show: y,
      ref: g,
      backdrop: _,
      container: G,
      keyboard: !0,
      autoFocus: k,
      enforceFocus: N,
      restoreFocus: c,
      restoreFocusOptions: Y,
      onEscapeKeyDown: Ht,
      onShow: L,
      onHide: $,
      onEnter: Vt,
      onEntering: Gt,
      onEntered: K,
      onExit: zt,
      onExiting: se,
      onExited: Kt,
      manager: R(),
      transition: x ? Tr : void 0,
      backdropTransition: x ? xr : void 0,
      renderBackdrop: Xt,
      renderDialog: Jt
    })
  });
});
Yt.displayName = "Modal";
const Mr = Object.assign(Yt, {
  Body: $t,
  Header: Ut,
  Title: qt,
  Footer: Wt,
  Dialog: it,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});
export {
  Mr as M
};
