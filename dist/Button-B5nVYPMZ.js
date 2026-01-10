import { j } from "./jsx-runtime-tc70JA_2.js";
import { forwardRef as x } from "react";
function N(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var u = { exports: {} };
var l;
function S() {
  return l || (l = 1, (function(n) {
    (function() {
      var i = {}.hasOwnProperty;
      function r() {
        for (var t = "", e = 0; e < arguments.length; e++) {
          var s = arguments[e];
          s && (t = a(t, o(s)));
        }
        return t;
      }
      function o(t) {
        if (typeof t == "string" || typeof t == "number")
          return t;
        if (typeof t != "object")
          return "";
        if (Array.isArray(t))
          return r.apply(null, t);
        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
          return t.toString();
        var e = "";
        for (var s in t)
          i.call(t, s) && t[s] && (e = a(e, s));
        return e;
      }
      function a(t, e) {
        return e ? t ? t + " " + e : t + e : t;
      }
      n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
    })();
  })(u)), u.exports;
}
var w = S();
const A = /* @__PURE__ */ N(w), O = x((n, i) => {
  const {
    size: r,
    variant: o,
    style: a,
    // Can just use small instead of size="sm"
    small: t,
    large: e,
    onClick: s,
    className: c,
    disabled: f,
    active: p,
    type: m,
    onMouseDown: d,
    onMouseUp: b,
    onMouseLeave: y,
    onTouchStart: v,
    onTouchEnd: h,
    ...E
  } = n;
  return /* @__PURE__ */ j.jsx(
    "button",
    {
      ref: i,
      ...m && { type: "submit" },
      disabled: f,
      style: a,
      onMouseDown: d,
      onMouseUp: b,
      onMouseLeave: y,
      onTouchStart: v,
      onTouchEnd: h,
      className: A(
        `btn ${o ? `btn-${o}` : "btn-articles"}`,
        {
          [c]: c,
          "btn-lg": e,
          "btn-sm": t,
          active: p,
          [`btn-${r}`]: r
        }
      ),
      onClick: s,
      children: n.children
    }
  );
});
O.displayName = "ArticlesButton";
export {
  O as A,
  A as c,
  N as g
};
