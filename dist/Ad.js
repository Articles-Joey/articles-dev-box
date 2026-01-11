import { j as s } from "./jsx-runtime-tc70JA_2.js";
import * as w from "react";
import { lazy as X, memo as G, useState as p, useEffect as I } from "react";
import { u as W, a as D, t as V, m as z, L as H } from "./toDate-CDo8dBwb.js";
import { A as J } from "./Button-B5nVYPMZ.js";
var S = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new WeakMap(), O = 0, Q;
function Y(e) {
  return e ? (R.has(e) || (O += 1, R.set(e, O.toString())), R.get(e)) : "0";
}
function Z(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Y(e.root) : e[t]}`).toString();
}
function ee(e) {
  const t = Z(e);
  let a = S.get(t);
  if (!a) {
    const n = /* @__PURE__ */ new Map();
    let d;
    const o = new IntersectionObserver((c) => {
      c.forEach((i) => {
        var f;
        const b = i.isIntersecting && d.some((x) => i.intersectionRatio >= x);
        e.trackVisibility && typeof i.isVisible > "u" && (i.isVisible = b), (f = n.get(i.target)) == null || f.forEach((x) => {
          x(b, i);
        });
      });
    }, e);
    d = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
      id: t,
      observer: o,
      elements: n
    }, S.set(t, a);
  }
  return a;
}
function se(e, t, a = {}, n = Q) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const f = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof a.threshold == "number" ? a.threshold : 0,
      time: 0,
      boundingClientRect: f,
      intersectionRect: f,
      rootBounds: f
    }), () => {
    };
  }
  const { id: d, observer: o, elements: c } = ee(a), i = c.get(e) || [];
  return c.has(e) || c.set(e, i), i.push(t), o.observe(e), function() {
    i.splice(i.indexOf(t), 1), i.length === 0 && (c.delete(e), o.unobserve(e)), c.size === 0 && (o.disconnect(), S.delete(d));
  };
}
function te({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: n,
  root: d,
  triggerOnce: o,
  skip: c,
  initialInView: i,
  fallbackInView: f,
  onChange: b
} = {}) {
  var x;
  const [_, j] = w.useState(null), y = w.useRef(b), u = w.useRef(i), [g, k] = w.useState({
    inView: !!i,
    entry: void 0
  });
  y.current = b, w.useEffect(
    () => {
      if (u.current === void 0 && (u.current = i), c || !_) return;
      let v;
      return v = se(
        _,
        (N, E) => {
          const $ = u.current;
          u.current = N, !($ === void 0 && !N) && (k({
            inView: N,
            entry: E
          }), y.current && y.current(N, E), E.isIntersecting && o && v && (v(), v = void 0));
        },
        {
          root: d,
          rootMargin: n,
          threshold: e,
          // @ts-expect-error
          trackVisibility: a,
          delay: t
        },
        f
      ), () => {
        v && v();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      _,
      d,
      n,
      o,
      c,
      a,
      f,
      t
    ]
  );
  const A = (x = g.entry) == null ? void 0 : x.target, M = w.useRef(void 0);
  !_ && A && !o && !c && M.current !== A && (M.current = A, k({
    inView: !!i,
    entry: void 0
  }), u.current = i);
  const h = [j, g.inView, g.entry];
  return h.ref = h[0], h.inView = h[1], h.entry = h[2], h;
}
const re = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await D.get(`http://localhost:3001/api/ads/${e.ad_id}`, {
        params: {
          ad_id: e.ad_id
        }
      })).data.result;
    } catch {
    }
  return D.get(e.url, {
    params: {
      ad_id: e.ad_id
    }
  }).then((t) => t.data.result);
}, oe = 60, ne = {
  dedupingInterval: 1e3 * 60 * oe
  // keepPreviousData: true,
  // fallbackData: []
}, ae = (e) => {
  const { data: t, error: a, isLoading: n, mutate: d } = W(
    e ? {
      url: `https://articles.media/api/ads/${e}`,
      ad_id: e
    } : null,
    re,
    ne
  );
  return {
    data: t,
    error: a,
    isLoading: n,
    mutate: d
  };
};
function ie(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function ce(e, t) {
  return +V(e) - +V(t);
}
function T(e, t, a) {
  const n = ce(e, t) / z;
  return ie(a?.roundingMethod)(n);
}
function B(e) {
  return Math.trunc(e * z);
}
const de = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await D.get("http://localhost:3001/api/ads", {
        params: {
          // ad_id: data.ad_id
        }
      })).data;
    } catch {
    }
  return D.get(e.url, {
    params: {
      // ad_id: data.ad_id
    }
  }).then((t) => t.data);
}, U = 60, le = {
  dedupingInterval: B(U),
  focusThrottleInterval: B(U)
  // keepPreviousData: true,
  // fallbackData: []
}, ue = (e) => {
  const { data: t, error: a, isLoading: n, mutate: d } = W(
    {
      url: "https://articles.media/api/ads"
      // ad_id
    },
    de,
    le
  );
  return {
    data: t,
    error: a,
    isLoading: n,
    mutate: d
  };
}, fe = X(() => import("./AdDetailsModal-C3ytLQho.js")), me = X(() => import("./AdConfirmExitModal-TTHQo9Ou.js"));
function he(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function pe(e) {
  const a = [], {
    data: n
  } = ue();
  let { previewMode: d } = e, o = e.previewData || {};
  const [c, i] = p(null), [f, b] = p(null), [x, _] = p(null), [j, y] = p(null), [u, g] = p(0), [k, A] = p(!1), [M, h] = p(!1), [v, N] = p(!1), [E, $] = p(/* @__PURE__ */ new Date()), [L, q] = p([]), { data: r } = ae(c);
  I(() => {
    n && n?.length > 0 && !c && (console.log("Ad Mounted or reduxAds changed"), i(e.ad_id || n[he(0, n?.length - 1)]?._id));
  }, [n]), I(() => {
  }, [r]), I(() => {
    r?.populated_promos && u >= 0 && y(r?.populated_promos[u]);
  }, [u, r]);
  function K() {
    h(!M);
  }
  const { ref: F, inView: C } = te({
    /* Optional options */
    threshold: 0,
    triggerOnce: !0
  });
  function P(l) {
    if (d && console.log("Preventing this event from being logged as this ad is being shown in preview mode."), L.find((m) => m == l)) {
      console.log("Already logged this event");
      return;
    }
    D.get("/api/ads/event", {
      params: {
        ad_id: r?._id,
        event: l
      }
    }).then(function(m) {
      q([...L, l]), console.log(m.data);
    }).catch(function(m) {
      console.log(m);
    });
  }
  return I(() => {
    if (!d && (console.log("inView", C), C && c)) {
      let l = [
        {
          ad_id: c,
          date: (/* @__PURE__ */ new Date()).toString()
        },
        ...a.filter((m) => {
          if (console.log(
            T(/* @__PURE__ */ new Date(), new Date(m.date))
          ), T(/* @__PURE__ */ new Date(), new Date(m.date)) > 5) {
            console.log("adsViewed - Remove Old Ad View Object");
            return;
          } else
            return console.log("adsViewed - Keep Ad View Object"), m;
        })
      ];
      console.log("unexpiredRecentViews", l);
    }
  }, [C, c]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: F,
      className: "ad-wrap",
      style: {
        "--articles-ad-background-color": o.background_color || r?.background_color,
        "--articles-ad-font-color": o.font_color || r?.font_color,
        "--articles-ad-border-color": o.border_color || r?.border_color
      },
      children: [
        M && /* @__PURE__ */ s.jsx(
          fe,
          {
            setModalShow: h,
            ad: r,
            previewData: o
          }
        ),
        v && /* @__PURE__ */ s.jsx(
          me,
          {
            setModalShow: N,
            ad: r,
            previewData: o
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
                    j && /* @__PURE__ */ s.jsx("div", { className: "promos-wrap", children: j && /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: "promo-wrap d-flex justify-content-between align-items-center mx-2 p-1 px-2 border border-2 border-light mb-0",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "", children: [
                            /* @__PURE__ */ s.jsx("div", { children: j.title }),
                            /* @__PURE__ */ s.jsx("div", { className: "small", children: /* @__PURE__ */ s.jsx("div", { className: "small", children: j.details }) })
                          ] }),
                          /* @__PURE__ */ s.jsx(
                            J,
                            {
                              className: "px-3",
                              small: !0,
                              onClick: () => {
                                console.log("Load Save Modal"), A(!0);
                              },
                              children: "Save"
                            }
                          )
                        ]
                      },
                      j._id
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
                              u == 0 ? g(r?.populated_promos?.length - 1) : g((l) => l - 1);
                            }
                          }
                        ),
                        r?.populated_promos?.map(
                          (l, m) => /* @__PURE__ */ s.jsx(
                            "i",
                            {
                              className: `fa-square ${m == u ? "fad" : "fas"}`
                            },
                            l._id
                          )
                        ),
                        /* @__PURE__ */ s.jsx(
                          "i",
                          {
                            className: "fad fa-arrow-circle-right",
                            type: "button",
                            onClick: () => {
                              u == r?.populated_promos?.length - 1 ? g(0) : g((l) => l + 1);
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
                          K(), P("Details");
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
                        onClick: (l) => {
                          l.preventDefault(), N(!0), P("Confirm Exit Modal Opened");
                        },
                        children: /* @__PURE__ */ s.jsx("div", { children: "Website" })
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        !d && /* @__PURE__ */ s.jsx(
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
              H,
              {
                className: "small d-block w-100 text-center",
                href: "https://articles.media/advertising",
                newPage: !0,
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
const Ne = G(pe);
export {
  Ne as default
};
