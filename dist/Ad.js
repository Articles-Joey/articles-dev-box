import { j as s } from "./jsx-runtime-tc70JA_2.js";
import * as w from "react";
import { memo as z, useState as p, useEffect as M } from "react";
import { u as W, a as I } from "./index-CsgQIn35.js";
import { A as K } from "./Button-g7fiSVpz.js";
var $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new WeakMap(), P = 0, G;
function H(e) {
  return e ? (k.has(e) || (P += 1, k.set(e, P.toString())), k.get(e)) : "0";
}
function J(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? H(e.root) : e[t]}`).toString();
}
function Q(e) {
  const t = J(e);
  let a = $.get(t);
  if (!a) {
    const n = /* @__PURE__ */ new Map();
    let l;
    const o = new IntersectionObserver((c) => {
      c.forEach((i) => {
        var u;
        const N = i.isIntersecting && l.some((v) => i.intersectionRatio >= v);
        e.trackVisibility && typeof i.isVisible > "u" && (i.isVisible = N), (u = n.get(i.target)) == null || u.forEach((v) => {
          v(N, i);
        });
      });
    }, e);
    l = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
      id: t,
      observer: o,
      elements: n
    }, $.set(t, a);
  }
  return a;
}
function Y(e, t, a = {}, n = G) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const u = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: l, observer: o, elements: c } = Q(a), i = c.get(e) || [];
  return c.has(e) || c.set(e, i), i.push(t), o.observe(e), function() {
    i.splice(i.indexOf(t), 1), i.length === 0 && (c.delete(e), o.unobserve(e)), c.size === 0 && (o.disconnect(), $.delete(l));
  };
}
function Z({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: n,
  root: l,
  triggerOnce: o,
  skip: c,
  initialInView: i,
  fallbackInView: u,
  onChange: N
} = {}) {
  var v;
  const [_, x] = w.useState(null), y = w.useRef(N), d = w.useRef(i), [g, E] = w.useState({
    inView: !!i,
    entry: void 0
  });
  y.current = N, w.useEffect(
    () => {
      if (d.current === void 0 && (d.current = i), c || !_) return;
      let j;
      return j = Y(
        _,
        (A, b) => {
          const C = d.current;
          d.current = A, !(C === void 0 && !A) && (E({
            inView: A,
            entry: b
          }), y.current && y.current(A, b), b.isIntersecting && o && j && (j(), j = void 0));
        },
        {
          root: l,
          rootMargin: n,
          threshold: e,
          // @ts-expect-error
          trackVisibility: a,
          delay: t
        },
        u
      ), () => {
        j && j();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      _,
      l,
      n,
      o,
      c,
      a,
      u,
      t
    ]
  );
  const D = (v = g.entry) == null ? void 0 : v.target, R = w.useRef(void 0);
  !_ && D && !o && !c && R.current !== D && (R.current = D, E({
    inView: !!i,
    entry: void 0
  }), d.current = i);
  const h = [x, g.inView, g.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
const ee = async (e) => {
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
}, se = 60, te = {
  dedupingInterval: 1e3 * 60 * se
  // keepPreviousData: true,
  // fallbackData: []
}, re = (e) => {
  const { data: t, error: a, isLoading: n, mutate: l } = W(
    e ? {
      url: `https://articles.media/api/ads/${e}`,
      ad_id: e
    } : null,
    ee,
    te
  );
  return {
    data: t,
    error: a,
    isLoading: n,
    mutate: l
  };
}, X = 6e4, T = /* @__PURE__ */ Symbol.for("constructDateFrom");
function ne(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && T in e ? e[T](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function L(e, t) {
  return ne(e, e);
}
function oe(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function ae(e, t) {
  return +L(e) - +L(t);
}
function O(e, t, a) {
  const n = ae(e, t) / X;
  return oe(a?.roundingMethod)(n);
}
function B(e) {
  return Math.trunc(e * X);
}
const ie = async (e) => {
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
}, U = 60, ce = {
  dedupingInterval: B(U),
  focusThrottleInterval: B(U)
  // keepPreviousData: true,
  // fallbackData: []
}, le = (e) => {
  const { data: t, error: a, isLoading: n, mutate: l } = W(
    {
      url: "https://articles.media/api/ads"
      // ad_id
    },
    ie,
    ce
  );
  return {
    data: t,
    error: a,
    isLoading: n,
    mutate: l
  };
};
function de(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function ue(e) {
  const a = [], {
    data: n
  } = le();
  let { previewMode: l } = e, o = e.previewData || {};
  const [c, i] = p(null), [u, N] = p(null), [v, _] = p(null), [x, y] = p(null), [d, g] = p(0), [E, D] = p(!1), [R, h] = p(!1), [j, A] = p(/* @__PURE__ */ new Date()), [b, C] = p([]), { data: r } = re(c);
  M(() => {
    n && n?.length > 0 && !c && (console.log("Ad Mounted or reduxAds changed"), i(e.ad_id || n[de(0, n?.length - 1)]?._id));
  }, [n]), M(() => {
  }, [r]), M(() => {
    r?.populated_promos && d >= 0 && y(r?.populated_promos[d]);
  }, [d, r]);
  function F() {
    h(!R);
  }
  const { ref: q, inView: S } = Z({
    /* Optional options */
    threshold: 0,
    triggerOnce: !0
  });
  function V(f) {
    if (l && console.log("Preventing this event from being logged as this ad is being shown in preview mode."), b.find((m) => m == f)) {
      console.log("Already logged this event");
      return;
    }
    I.get("/api/ads/event", {
      params: {
        ad_id: r?._id,
        event: f
      }
    }).then(function(m) {
      C([...b, f]), console.log(m.data);
    }).catch(function(m) {
      console.log(m);
    });
  }
  return M(() => {
    if (!l && (console.log("inView", S), S && c)) {
      let f = [
        {
          ad_id: c,
          date: (/* @__PURE__ */ new Date()).toString()
        },
        ...a.filter((m) => {
          if (console.log(
            O(/* @__PURE__ */ new Date(), new Date(m.date))
          ), O(/* @__PURE__ */ new Date(), new Date(m.date)) > 5) {
            console.log("adsViewed - Remove Old Ad View Object");
            return;
          } else
            return console.log("adsViewed - Keep Ad View Object"), m;
        })
      ];
      console.log("unexpiredRecentViews", f);
    }
  }, [S, c]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: q,
      className: "ad-wrap",
      style: {
        "--articles-ad-background-color": o.background_color || r?.background_color,
        "--articles-ad-font-color": o.font_color || r?.font_color,
        "--articles-ad-border-color": o.border_color || r?.border_color
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "ad",
            children: /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "main-panel",
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "ad-warning flex-header", children: /* @__PURE__ */ s.jsxs("div", { className: "", children: [
                    r?.city && "Local",
                    " Advertisement"
                  ] }) }),
                  /* @__PURE__ */ s.jsxs("div", { className: "content-wrap", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "photo-banner", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "logo", children: (o.logo?.location || r?.logo?.location) && /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: o?.logo?.key ? `${process.env.NEXT_PUBLIC_CDN}${o?.logo?.key}` : `${process.env.NEXT_PUBLIC_CDN}${r?.logo?.key}`,
                          alt: ""
                        }
                      ) }),
                      /* @__PURE__ */ s.jsx("div", { className: "icon d-none", children: /* @__PURE__ */ s.jsx("i", { className: "fas fa-mug-hot" }) }),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          className: "photo",
                          src: o?.background?.key ? `${process.env.NEXT_PUBLIC_CDN}${o.background?.key}` : `${process.env.NEXT_PUBLIC_CDN}${r?.background?.key}`,
                          alt: ""
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "details-wrap", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "detail-title", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "detail", children: /* @__PURE__ */ s.jsx("span", { className: "h4", children: o?.business || r?.business }) }),
                        /* @__PURE__ */ s.jsxs("div", { className: "flex flex-column d-none", children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "detail", children: [
                            /* @__PURE__ */ s.jsx("span", { className: "icon", children: /* @__PURE__ */ s.jsx("i", { className: "fas fa-search-location" }) }),
                            /* @__PURE__ */ s.jsxs("span", { children: [
                              r?.city,
                              ", ",
                              r?.state
                            ] })
                          ] }),
                          /* @__PURE__ */ s.jsxs("div", { className: "detail", children: [
                            /* @__PURE__ */ s.jsx("span", { className: "icon", children: /* @__PURE__ */ s.jsx("i", { className: "fas fa-clock me-2" }) }),
                            /* @__PURE__ */ s.jsx("span", { children: "6:30AM–8PM" })
                          ] })
                        ] })
                      ] }),
                      r?.city && /* @__PURE__ */ s.jsx("div", { className: "details mb-3 d-none" }),
                      /* @__PURE__ */ s.jsx("div", { className: "short-description", children: o?.description || r?.description })
                    ] })
                  ] }),
                  (!1)?.roles?.isDev && r?.populated_promos?.length > 0 && /* @__PURE__ */ s.jsxs("div", { children: [
                    x && /* @__PURE__ */ s.jsx("div", { className: "promos-wrap", children: x && /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: "promo-wrap d-flex justify-content-between align-items-center mx-2 p-1 px-2 border border-2 border-light mb-0",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "", children: [
                            /* @__PURE__ */ s.jsx("div", { children: x.title }),
                            /* @__PURE__ */ s.jsx("div", { className: "small", children: /* @__PURE__ */ s.jsx("div", { className: "small", children: x.details }) })
                          ] }),
                          /* @__PURE__ */ s.jsx(
                            K,
                            {
                              className: "px-3",
                              small: !0,
                              onClick: () => {
                                console.log("Load Save Modal"), D(!0);
                              },
                              children: "Save"
                            }
                          )
                        ]
                      },
                      x._id
                    ) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "d-flex justify-content-between", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "px-2", children: [
                        r?.populated_promos?.length,
                        " Promos Active"
                      ] }),
                      /* @__PURE__ */ s.jsxs("div", { className: "controls", children: [
                        /* @__PURE__ */ s.jsx(
                          "i",
                          {
                            className: "fad fa-arrow-circle-left",
                            type: "button",
                            onClick: () => {
                              d == 0 ? g(r?.populated_promos?.length - 1) : g((f) => f - 1);
                            }
                          }
                        ),
                        r?.populated_promos?.map(
                          (f, m) => /* @__PURE__ */ s.jsx(
                            "i",
                            {
                              className: `fa-square ${m == d ? "fad" : "fas"}`
                            },
                            f._id
                          )
                        ),
                        /* @__PURE__ */ s.jsx(
                          "i",
                          {
                            className: "fad fa-arrow-circle-right",
                            type: "button",
                            onClick: () => {
                              d == r?.populated_promos?.length - 1 ? g(0) : g((f) => f + 1);
                            }
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ s.jsx("hr", { style: { borderColor: "white" }, className: "mt-auto mb-0" }),
                  /* @__PURE__ */ s.jsxs("div", { className: "action-wrap d-flex justify-content-lg-between px-3 py-2", children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        onClick: () => {
                          F(), V("Details");
                        },
                        className: "action flex-grow-1 flex-shrink-0",
                        children: "Details"
                      }
                    ),
                    /* @__PURE__ */ s.jsx("span", { className: "px-4" }),
                    /* @__PURE__ */ s.jsx(
                      "a",
                      {
                        className: "action flex-grow-1 flex-shrink-0",
                        href: r?.website,
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: () => V("Website"),
                        children: /* @__PURE__ */ s.jsx("div", { children: "Website" })
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        !l && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "advertise-with-us p-1",
            style: {
              // ...(props.previewData ? props.previewData.background_color : ad?.background_color),
              backgroundColor: o.background_color || r?.background_color,
              color: o.font_color || r?.font_color,
              borderColor: o.border_color || r?.border_color
            },
            children: /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "small d-block w-100 text-center",
                children: [
                  /* @__PURE__ */ s.jsx("i", { className: "fas fa-share me-1" }),
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
const ge = z(ue);
export {
  ge as default
};
