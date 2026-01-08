import { j as e } from "./jsx-runtime-tc70JA_2.js";
import { useState as o, useEffect as d } from "react";
import { A as f } from "./Button-g7fiSVpz.js";
import { u as x, a as h } from "./index-CsgQIn35.js";
const j = async (s) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await h.get("http://localhost:3001/api/community/games/scoreboard", {
        params: {
          game: s.game
        }
      })).data;
    } catch {
    }
  return h.get(s.url, {
    params: {
      game: s.game
    }
  }).then((a) => a.data);
}, p = {
  dedupingInterval: 1e3 * 60 * 30,
  refreshInterval: 0,
  revalidateOnFocus: !1,
  revalidateIfStale: !1,
  shouldRetryOnError: !1
  // fallbackData: []
}, g = (s) => {
  const { data: a, error: r, isLoading: i, isValidating: l, mutate: c } = x(
    s?.game ? {
      // url: "/api/community/games/scoreboard",
      url: "https://articles.media/api/community/games/scoreboard",
      game: s.game
    } : null,
    j,
    p
  );
  return {
    data: a,
    error: r,
    isLoading: i,
    isValidating: l,
    mutate: c
  };
};
function w({ game: s, reloadScoreboard: a, setReloadScoreboard: r }) {
  const [i, l] = o(!1), [c, b] = o(!1), {
    data: n,
    mutate: m
  } = g({
    game: s
  });
  return d(() => {
  }, []), d(() => {
    a && (r(!1), m());
  }, [a]), /* @__PURE__ */ e.jsx("div", { className: "scoreboard", children: /* @__PURE__ */ e.jsxs("div", { className: "card card-articles card-sm mb-3 mb-lg-0", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "card-header d-flex justify-content-between align-items-center", children: [
      /* @__PURE__ */ e.jsxs("span", { children: [
        s,
        " Scoreboard"
      ] }),
      /* @__PURE__ */ e.jsx(
        f,
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
      (n?.length || 0) == 0 && /* @__PURE__ */ e.jsx("div", { className: "small p-2", children: "No scores yet" }),
      n?.map(
        (t, u) => /* @__PURE__ */ e.jsxs("div", { className: "result d-flex flex-column justify-content-between border-bottom p-2", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "d-flex justify-content-between lh-sm", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ e.jsx("h5", { className: "mb-0 me-3", children: u + 1 }),
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
        f,
        {
          small: !0,
          onClick: () => {
            l(!0);
          },
          children: /* @__PURE__ */ e.jsx("i", { className: "fad fa-cog me-0" })
        }
      )
    ] })
  ] }) });
}
export {
  w as default
};
