import { j as s } from "./jsx-runtime-tc70JA_2.js";
import * as w from "react";
import { lazy as q, memo as K, useState as p, useEffect as R } from "react";
import { u as W, a as M } from "./index-CsgQIn35.js";
import { A as G } from "./Button-B5nVYPMZ.js";
var $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new WeakMap(), P = 0, H;
function J(e) {
  return e ? (k.has(e) || (P += 1, k.set(e, P.toString())), k.get(e)) : "0";
}
function Q(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? J(e.root) : e[t]}`).toString();
}
function Y(e) {
  const t = Q(e);
  let a = $.get(t);
  if (!a) {
    const o = /* @__PURE__ */ new Map();
    let l;
    const n = new IntersectionObserver((c) => {
      c.forEach((i) => {
        var u;
        const N = i.isIntersecting && l.some((v) => i.intersectionRatio >= v);
        e.trackVisibility && typeof i.isVisible > "u" && (i.isVisible = N), (u = o.get(i.target)) == null || u.forEach((v) => {
          v(N, i);
        });
      });
    }, e);
    l = n.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
      id: t,
      observer: n,
      elements: o
    }, $.set(t, a);
  }
  return a;
}
function Z(e, t, a = {}, o = H) {
  if (typeof window.IntersectionObserver > "u" && o !== void 0) {
    const u = e.getBoundingClientRect();
    return t(o, {
      isIntersecting: o,
      target: e,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: u,
      intersectionRect: u,
      rootBounds: u
    }), () => {
    };
  }
  const { id: l, observer: n, elements: c } = Y(a), i = c.get(e) || [];
  return c.has(e) || c.set(e, i), i.push(t), n.observe(e), function() {
    i.splice(i.indexOf(t), 1), i.length === 0 && (c.delete(e), n.unobserve(e)), c.size === 0 && (n.disconnect(), $.delete(l));
  };
}
function ee({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: o,
  root: l,
  triggerOnce: n,
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
      return j = Z(
        _,
        (I, b) => {
          const C = d.current;
          d.current = I, !(C === void 0 && !I) && (E({
            inView: I,
            entry: b
          }), y.current && y.current(I, b), b.isIntersecting && n && j && (j(), j = void 0));
        },
        {
          root: l,
          rootMargin: o,
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
      o,
      n,
      c,
      a,
      u,
      t
    ]
  );
  const D = (v = g.entry) == null ? void 0 : v.target, A = w.useRef(void 0);
  !_ && D && !n && !c && A.current !== D && (A.current = D, E({
    inView: !!i,
    entry: void 0
  }), d.current = i);
  const h = [x, g.inView, g.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
const se = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await M.get(`http://localhost:3001/api/ads/${e.ad_id}`, {
        params: {
          ad_id: e.ad_id
        }
      })).data.result;
    } catch {
    }
  return M.get(e.url, {
    params: {
      ad_id: e.ad_id
    }
  }).then((t) => t.data.result);
}, te = 60, re = {
  dedupingInterval: 1e3 * 60 * te
  // keepPreviousData: true,
  // fallbackData: []
}, ne = (e) => {
  const { data: t, error: a, isLoading: o, mutate: l } = W(
    e ? {
      url: `https://articles.media/api/ads/${e}`,
      ad_id: e
    } : null,
    se,
    re
  );
  return {
    data: t,
    error: a,
    isLoading: o,
    mutate: l
  };
}, X = 6e4, T = /* @__PURE__ */ Symbol.for("constructDateFrom");
function oe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && T in e ? e[T](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function L(e, t) {
  return oe(e, e);
}
function ae(e) {
  return (t) => {
    const o = (e ? Math[e] : Math.trunc)(t);
    return o === 0 ? 0 : o;
  };
}
function ie(e, t) {
  return +L(e) - +L(t);
}
function O(e, t, a) {
  const o = ie(e, t) / X;
  return ae(a?.roundingMethod)(o);
}
function B(e) {
  return Math.trunc(e * X);
}
const ce = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await M.get("http://localhost:3001/api/ads", {
        params: {
          // ad_id: data.ad_id
        }
      })).data;
    } catch {
    }
  return M.get(e.url, {
    params: {
      // ad_id: data.ad_id
    }
  }).then((t) => t.data);
}, U = 60, le = {
  dedupingInterval: B(U),
  focusThrottleInterval: B(U)
  // keepPreviousData: true,
  // fallbackData: []
}, de = (e) => {
  const { data: t, error: a, isLoading: o, mutate: l } = W(
    {
      url: "https://articles.media/api/ads"
      // ad_id
    },
    ce,
    le
  );
  return {
    data: t,
    error: a,
    isLoading: o,
    mutate: l
  };
}, ue = q(() => import("./AdDetailsModal-BOLzA3ZL.js"));
function fe(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function me(e) {
  const a = [], {
    data: o
  } = de();
  let { previewMode: l } = e, n = e.previewData || {};
  const [c, i] = p(null), [u, N] = p(null), [v, _] = p(null), [x, y] = p(null), [d, g] = p(0), [E, D] = p(!1), [A, h] = p(!1), [j, I] = p(/* @__PURE__ */ new Date()), [b, C] = p([]), { data: r } = ne(c);
  R(() => {
    o && o?.length > 0 && !c && (console.log("Ad Mounted or reduxAds changed"), i(e.ad_id || o[fe(0, o?.length - 1)]?._id));
  }, [o]), R(() => {
  }, [r]), R(() => {
    r?.populated_promos && d >= 0 && y(r?.populated_promos[d]);
  }, [d, r]);
  function F() {
    h(!A);
  }
  const { ref: z, inView: S } = ee({
    /* Optional options */
    threshold: 0,
    triggerOnce: !0
  });
  function V(f) {
    if (l && console.log("Preventing this event from being logged as this ad is being shown in preview mode."), b.find((m) => m == f)) {
      console.log("Already logged this event");
      return;
    }
    M.get("/api/ads/event", {
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
  return R(() => {
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
      ref: z,
      className: "ad-wrap",
      style: {
        "--articles-ad-background-color": n.background_color || r?.background_color,
        "--articles-ad-font-color": n.font_color || r?.font_color,
        "--articles-ad-border-color": n.border_color || r?.border_color
      },
      children: [
        A && /* @__PURE__ */ s.jsx(
          ue,
          {
            setModalShow: h,
            ad: r,
            previewData: n
          }
        ),
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
                      /* @__PURE__ */ s.jsx("div", { className: "logo", children: (n.logo?.location || r?.logo?.location) && /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: n?.logo?.key ? `${process.env.NEXT_PUBLIC_CDN}${n?.logo?.key}` : `${process.env.NEXT_PUBLIC_CDN}${r?.logo?.key}`,
                          alt: ""
                        }
                      ) }),
                      /* @__PURE__ */ s.jsx("div", { className: "icon d-none", children: /* @__PURE__ */ s.jsx("i", { className: "fas fa-mug-hot" }) }),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          className: "photo",
                          src: n?.background?.key ? `${process.env.NEXT_PUBLIC_CDN}${n.background?.key}` : `${process.env.NEXT_PUBLIC_CDN}${r?.background?.key}`,
                          alt: ""
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "details-wrap", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "detail-title", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "detail", children: /* @__PURE__ */ s.jsx("span", { className: "h4", children: n?.business || r?.business }) }),
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
                      /* @__PURE__ */ s.jsx("div", { className: "short-description", children: n?.description || r?.description })
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
                            G,
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
              backgroundColor: n.background_color || r?.background_color,
              color: n.font_color || r?.font_color,
              borderColor: n.border_color || r?.border_color
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
const xe = K(me);
export {
  xe as default
};
