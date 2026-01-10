import { j as s } from "./jsx-runtime-tc70JA_2.js";
import { useEffect as t } from "react";
import { M as i } from "./Modal-BoOxjQvF.js";
import { A as n } from "./Button-B5nVYPMZ.js";
function c(l) {
  const { href: r, children: e, newPage: d, ...a } = l;
  return /* @__PURE__ */ s.jsx(
    "a",
    {
      href: r,
      ...a,
      ...d && { target: "_blank", rel: "noopener noreferrer" },
      children: e
    }
  );
}
function j(l) {
  let { setModalShow: r, ad: e, previewData: d } = l;
  t(() => {
    console.log("Mounted");
  }, []);
  const a = () => {
    r(!1);
  };
  return /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsxs(
    i,
    {
      show: !0,
      backdropClassName: "ad-details-modal-backdrop",
      className: "articles-modal",
      centered: !0,
      onHide: a,
      size: "md",
      children: [
        /* @__PURE__ */ s.jsx(i.Header, { className: "align-items-center", closeButton: !0, children: /* @__PURE__ */ s.jsx(i.Title, { children: "Ad Details" }) }),
        /* @__PURE__ */ s.jsxs(
          i.Body,
          {
            className: "",
            children: [
              /* @__PURE__ */ s.jsxs("p", { className: "mb-1", children: [
                "Advertiser: ",
                /* @__PURE__ */ s.jsx("b", { children: e.business })
              ] }),
              /* @__PURE__ */ s.jsxs("p", { className: "mb-0", children: [
                "Ad ID: ",
                /* @__PURE__ */ s.jsx("b", { children: d?._id || e._id })
              ] }),
              /* @__PURE__ */ s.jsx("hr", {}),
              /* @__PURE__ */ s.jsx("div", { className: "mb-1", children: "This ad is being shown to you for the following reasons" }),
              e.city ? /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("div", { className: "h4 mb-1", children: e.business }),
                /* @__PURE__ */ s.jsx("div", { children: "Is advertising to all zip codes within a" }),
                /* @__PURE__ */ s.jsx("span", { children: /* @__PURE__ */ s.jsx("div", { className: "badge bg-light shadow-articles", children: "15 Mile Radius" }) }),
                /* @__PURE__ */ s.jsx("div", { children: "of it's business" }),
                /* @__PURE__ */ s.jsx("hr", { className: "border w-50 border-white" }),
                /* @__PURE__ */ s.jsxs("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ s.jsx("div", { children: "Your Zip code" }),
                  /* @__PURE__ */ s.jsx("div", { className: "badge bg-light shadow-articles ms-2", children: "12524" }),
                  /* @__PURE__ */ s.jsx("div", { className: "ms-2", children: "is" }),
                  /* @__PURE__ */ s.jsx("div", { className: "badge bg-light shadow-articles ms-2", children: "1.7 miles away" })
                ] })
              ] }) : /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("div", { className: "h4 mb-1", children: e.business }),
                /* @__PURE__ */ s.jsx("div", { children: "Is advertising to all users" })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "grow" }),
              /* @__PURE__ */ s.jsx("hr", { className: "w-100" }),
              /* @__PURE__ */ s.jsx("div", { className: "reason lh-sm mb-2", children: "Ads we display to you will always be transparent as to why you are seeing them." }),
              /* @__PURE__ */ s.jsx(c, { href: "https://articles.media/settings/account", newPage: !0, className: "", children: /* @__PURE__ */ s.jsx(
                n,
                {
                  small: !0,
                  children: "Settings"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(i.Footer, { className: "d-flex justify-content-center", children: /* @__PURE__ */ s.jsx(
          n,
          {
            variant: "articles",
            onClick: a,
            children: "Close"
          }
        ) })
      ]
    }
  ) });
}
export {
  j as default
};
