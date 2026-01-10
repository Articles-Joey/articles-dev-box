import { j as e } from "./jsx-runtime-tc70JA_2.js";
import { memo as s } from "react";
function t(a) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    process.env.NODE_ENV === "development" && /* @__PURE__ */ e.jsx("style", { children: `                        
                        @keyframes grow-shrink {
                            0% { transform: translateY(-50px); }
                            50% { transform: translateY(0px); }
                            100% { transform: translateY(-50px); }
                        }
                        .articles-global-body {
                            transform: translateY(-40px);
                            z-index: 1055!important;
                            position: absolute;
                            top: 0;
                            left: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 50px;
                            height: 50px;
                            margin: 0;
                            padding: 0;
                            background-color: green;
                            color: #FFFFFF;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                            animation: grow-shrink 2s ease-in;
                    }
                ` }),
    /* @__PURE__ */ e.jsxs("div", { className: "articles-global-body", children: [
      /* @__PURE__ */ e.jsx(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.articles.media/fonts/fontawsome/css/all.min.css"
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "content", children: /* @__PURE__ */ e.jsx("i", { className: "fas fa-thumbs-up" }) })
    ] })
  ] });
}
const r = s(t);
export {
  r as default
};
