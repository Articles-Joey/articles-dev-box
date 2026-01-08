import { j as t } from "./jsx-runtime-tc70JA_2.js";
import { useEffect as s } from "react";
function a({
  darkMode: r
}) {
  return s(() => {
  }, []), s(() => {
    const e = document.createElement("script");
    return e.src = "https://accounts.articles.media/js/ad.js", e.async = !0, document.body.appendChild(e), () => {
      document.body.removeChild(e);
    };
  }, []), /* @__PURE__ */ t.jsx("div", { className: "", children: /* @__PURE__ */ t.jsx("div", { className: "articles-media-ad" }) });
}
export {
  a as default
};
