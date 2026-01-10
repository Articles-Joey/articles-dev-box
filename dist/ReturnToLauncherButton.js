import { j as e } from "./jsx-runtime-tc70JA_2.js";
import { A as s } from "./Button-B5nVYPMZ.js";
import { useState as i, useEffect as l } from "react";
function f() {
  const [a, r] = i(!1);
  if (l(() => {
    r(!0);
  }, []), !a)
    return null;
  const o = new URLSearchParams(window.location.search), n = Object.fromEntries(o);
  let { launcher_mode: t } = n;
  return t = t === "1", t ? /* @__PURE__ */ e.jsxs(
    s,
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
        /* @__PURE__ */ e.jsx("i", { className: "fad fa-gamepad" }),
        "Return to Games"
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    s,
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
        /* @__PURE__ */ e.jsx("i", { className: "fad fa-gamepad" }),
        "View our other games"
      ]
    }
  );
}
export {
  f as default
};
