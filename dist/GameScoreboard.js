import { j as e } from "./jsx-runtime-tc70JA_2.js";
import { useState as h, useEffect as f } from "react";
import { M as n } from "./Modal-BoOxjQvF.js";
import { A as o } from "./Button-B5nVYPMZ.js";
import { u as p, a as x } from "./index-CsgQIn35.js";
function b({
  setChecked: s,
  checked: a,
  readOnly: r
}) {
  return /* @__PURE__ */ e.jsxs("label", { className: `articles-switch mb-0 ${a && "checked"}`, children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        readOnly: !!r,
        checked: a,
        onChange: () => {
        }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        onClick: (l) => {
          if (s) {
            s(!a);
            return;
          } else {
            l.preventDefault();
            return;
          }
        },
        className: "slider"
      }
    )
  ] });
}
const y = async (s) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await x.get("http://localhost:3001/api/community/games/scoreboard", {
        params: {
          game: s.game
        }
      })).data;
    } catch {
    }
  return x.get(s.url, {
    params: {
      game: s.game
    }
  }).then((a) => a.data);
}, N = {
  dedupingInterval: 1e3 * 60 * 30,
  refreshInterval: 0,
  revalidateOnFocus: !1,
  revalidateIfStale: !1,
  shouldRetryOnError: !1
  // fallbackData: []
}, g = (s) => {
  const { data: a, error: r, isLoading: l, isValidating: i, mutate: c } = p(
    s?.game ? {
      // url: "/api/community/games/scoreboard",
      url: "https://articles.media/api/community/games/scoreboard",
      game: s.game
    } : null,
    y,
    N
  );
  return {
    data: a,
    error: r,
    isLoading: l,
    isValidating: i,
    mutate: c
  };
};
function k({ game: s, reloadScoreboard: a, setReloadScoreboard: r }) {
  const [l, i] = h(!1), [c, u] = h(!1), {
    data: d,
    mutate: m
  } = g({
    game: s
  });
  return f(() => {
  }, []), f(() => {
    a && (r(!1), m());
  }, [a]), /* @__PURE__ */ e.jsxs("div", { className: "scoreboard", children: [
    /* @__PURE__ */ e.jsxs(n, { show: l, size: "md", className: "articles-modal", centered: !0, onHide: () => i(!1), children: [
      /* @__PURE__ */ e.jsx(n.Header, { children: /* @__PURE__ */ e.jsx(n.Title, { children: "Scoreboard Settings" }) }),
      /* @__PURE__ */ e.jsx(n.Body, { children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "d-flex justify-content-between align-items-center",
          onClick: () => u(!c),
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("i", { className: "fas fa-trophy-alt" }),
              /* @__PURE__ */ e.jsx("span", { children: "Join Scoreboard?" })
            ] }),
            /* @__PURE__ */ e.jsx(
              b,
              {
                checked: c
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ e.jsx(n.Footer, { className: "justify-content-between", children: /* @__PURE__ */ e.jsx(
        o,
        {
          variant: "articles",
          onClick: () => {
            i(!1);
          },
          children: "Close"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "card card-articles card-sm mb-3 mb-lg-0", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "card-header d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          s,
          " Scoreboard"
        ] }),
        /* @__PURE__ */ e.jsx(
          o,
          {
            onClick: () => {
              m();
            },
            small: !0,
            children: /* @__PURE__ */ e.jsx("i", { className: "fad fa-redo me-0" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "card-body p-0", children: [
        (d?.length || 0) == 0 && /* @__PURE__ */ e.jsx("div", { className: "small p-2", children: "No scores yet" }),
        d?.map(
          (t, j) => /* @__PURE__ */ e.jsxs("div", { className: "result d-flex flex-column justify-content-between border-bottom p-2", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "d-flex justify-content-between lh-sm", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "d-flex", children: [
                /* @__PURE__ */ e.jsx("h5", { className: "mb-0 me-3", children: j + 1 }),
                /* @__PURE__ */ e.jsx("div", { className: "lh-sm" })
              ] }),
              /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx("h5", { className: "mb-0", children: t.score || t.total }) })
            ] }),
            t.last_play && t.public_last_play && /* @__PURE__ */ e.jsxs("small", { className: "mt-1", style: { fontSize: "0.75rem" }, children: [
              "Played: ",
              format(new Date(t.last_play), "MM/d/yy hh:mmaa")
            ] })
          ] }, t._id)
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "card-footer d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ e.jsx("div", { className: "small", children: "Play to get on the board!" }),
        /* @__PURE__ */ e.jsx(
          o,
          {
            small: !0,
            onClick: () => {
              i(!0);
            },
            children: /* @__PURE__ */ e.jsx("i", { className: "fad fa-cog me-0" })
          }
        )
      ] })
    ] })
  ] });
}
export {
  k as default
};
