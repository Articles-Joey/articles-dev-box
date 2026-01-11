import { j as s } from "./jsx-runtime-tc70JA_2.js";
import * as ue from "react";
import { useRef as z, useEffect as Y, useMemo as $e, useState as S, useCallback as X, useLayoutEffect as Sn, cloneElement as En } from "react";
import { u as Cn, a as Tn, c as ct, b as lt, o as an, l as Te, i as Wn, d as An, e as Et, r as Rn, f as Oe, g as sn, h as Ct, j as on, k as $n, F as Tt, s as dt, m as Fn, P as Ln, M as ie } from "./Modal-CZ77qLgM.js";
import { t as K, c as ve, b as Bn, d as cn, w as Yn, u as pt, a as Ge, L as Xe } from "./toDate-CDo8dBwb.js";
import { g as Un, c as be, A as R } from "./Button-B5nVYPMZ.js";
import In from "react-dom";
let Hn = {};
function Ze() {
  return Hn;
}
function Fe(e, t) {
  const n = Ze(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = K(e, t?.in), i = a.getDay(), o = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function Je(e, t) {
  return Fe(e, { ...t, weekStartsOn: 1 });
}
function ln(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = ve(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Je(a), o = ve(n, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const c = Je(o);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Wt(e) {
  const t = K(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Vn(e, ...t) {
  const n = ve.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function At(e, t) {
  const n = K(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function qn(e, t, n) {
  const [r, a] = Vn(
    n?.in,
    e,
    t
  ), i = At(r), o = At(a), c = +i - Wt(i), l = +o - Wt(o);
  return Math.round((c - l) / Bn);
}
function Xn(e, t) {
  const n = ln(e, t), r = ve(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Je(r);
}
function zn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qn(e) {
  return !(!zn(e) && typeof e != "number" || isNaN(+K(e)));
}
function Gn(e, t) {
  const n = K(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Jn = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Kn = (e, t, n) => {
  let r;
  const a = Jn[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function st(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Zn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, er = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nr = {
  date: st({
    formats: Zn,
    defaultWidth: "full"
  }),
  time: st({
    formats: er,
    defaultWidth: "full"
  }),
  dateTime: st({
    formats: tr,
    defaultWidth: "full"
  })
}, rr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ar = (e, t, n, r) => rr[e];
function Se(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, c = n?.width ? String(n.width) : o;
      a = e.formattingValues[c] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, c = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[c] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const sr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ir = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, or = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, cr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, lr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, dr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ur = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, fr = {
  ordinalNumber: ur,
  era: Se({
    values: sr,
    defaultWidth: "wide"
  }),
  quarter: Se({
    values: ir,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Se({
    values: or,
    defaultWidth: "wide"
  }),
  day: Se({
    values: cr,
    defaultWidth: "wide"
  }),
  dayPeriod: Se({
    values: lr,
    defaultWidth: "wide",
    formattingValues: dr,
    defaultFormattingWidth: "wide"
  })
};
function Ee(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const o = i[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(c) ? pr(c, (m) => m.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      mr(c, (m) => m.test(o))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(l) : l, f = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(f)
    ) : f;
    const d = t.slice(o.length);
    return { value: f, rest: d };
  };
}
function mr(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function pr(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function hr(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const c = t.slice(a.length);
    return { value: o, rest: c };
  };
}
const vr = /^(\d+)(th|st|nd|rd)?/i, gr = /\d+/i, br = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yr = {
  any: [/^b/i, /^(a|c)/i]
}, xr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, wr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, jr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Or = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Nr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Pr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Mr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Dr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, _r = {
  ordinalNumber: hr({
    matchPattern: vr,
    parsePattern: gr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ee({
    matchPatterns: br,
    defaultMatchWidth: "wide",
    parsePatterns: yr,
    defaultParseWidth: "any"
  }),
  quarter: Ee({
    matchPatterns: xr,
    defaultMatchWidth: "wide",
    parsePatterns: wr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ee({
    matchPatterns: jr,
    defaultMatchWidth: "wide",
    parsePatterns: Or,
    defaultParseWidth: "any"
  }),
  day: Ee({
    matchPatterns: Nr,
    defaultMatchWidth: "wide",
    parsePatterns: Pr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ee({
    matchPatterns: Mr,
    defaultMatchWidth: "any",
    parsePatterns: Dr,
    defaultParseWidth: "any"
  })
}, kr = {
  code: "en-US",
  formatDistance: Kn,
  formatLong: nr,
  formatRelative: ar,
  localize: fr,
  match: _r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Sr(e, t) {
  const n = K(e, t?.in);
  return qn(n, Gn(n)) + 1;
}
function Er(e, t) {
  const n = K(e, t?.in), r = +Je(n) - +Xn(n);
  return Math.round(r / cn) + 1;
}
function dn(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = Ze(), i = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, o = ve(t?.in || e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const c = Fe(o, t), l = ve(t?.in || e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const f = Fe(l, t);
  return +n >= +c ? r + 1 : +n >= +f ? r : r - 1;
}
function Cr(e, t) {
  const n = Ze(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = dn(e, t), i = ve(t?.in || e, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), Fe(i, t);
}
function Tr(e, t) {
  const n = K(e, t?.in), r = +Fe(n, t) - +Cr(n, t);
  return Math.round(r / cn) + 1;
}
function M(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const de = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return M(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : M(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return M(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return M(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return M(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return M(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return M(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return M(a, t.length);
  }
}, je = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Rt = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return de.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = dn(e, r), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const o = i % 100;
      return M(o, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : M(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ln(e);
    return M(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return M(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return M(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return M(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return de.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return M(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Tr(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : M(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Er(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : M(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : de.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Sr(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : M(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return M(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return M(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return M(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = je.noon : r === 0 ? a = je.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = je.evening : r >= 12 ? a = je.afternoon : r >= 4 ? a = je.morning : a = je.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return de.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : de.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : M(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : M(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : de.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : de.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return de.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ft(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return pe(r);
      // Hours and minutes with `:` delimiter
      default:
        return pe(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ft(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return pe(r);
      // Hours and minutes with `:` delimiter
      default:
        return pe(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + $t(r, ":");
      default:
        return "GMT" + pe(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + $t(r, ":");
      default:
        return "GMT" + pe(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return M(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return M(+e, t.length);
  }
};
function $t(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(a) : n + String(a) + t + M(i, 2);
}
function Ft(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + M(Math.abs(e) / 60, 2) : pe(e, t);
}
function pe(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = M(Math.trunc(r / 60), 2), i = M(r % 60, 2);
  return n + a + t + i;
}
const Lt = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, un = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, Wr = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Lt(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Lt(r, t)).replace("{{time}}", un(a, t));
}, Ar = {
  p: un,
  P: Wr
}, Rr = /^D+$/, $r = /^Y+$/, Fr = ["D", "DD", "YY", "YYYY"];
function Lr(e) {
  return Rr.test(e);
}
function Br(e) {
  return $r.test(e);
}
function Yr(e, t, n) {
  const r = Ur(e, t, n);
  if (console.warn(r), Fr.includes(e)) throw new RangeError(r);
}
function Ur(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ir = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Vr = /^'([^]*?)'?$/, qr = /''/g, Xr = /[a-zA-Z]/;
function zr(e, t, n) {
  const r = Ze(), a = r.locale ?? kr, i = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, c = K(e, n?.in);
  if (!Qn(c))
    throw new RangeError("Invalid time value");
  let l = t.match(Hr).map((d) => {
    const m = d[0];
    if (m === "p" || m === "P") {
      const h = Ar[m];
      return h(d, a.formatLong);
    }
    return d;
  }).join("").match(Ir).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const m = d[0];
    if (m === "'")
      return { isToken: !1, value: Qr(d) };
    if (Rt[m])
      return { isToken: !0, value: d };
    if (m.match(Xr))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: d };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(c, l));
  const f = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: a
  };
  return l.map((d) => {
    if (!d.isToken) return d.value;
    const m = d.value;
    (Br(m) || Lr(m)) && Yr(m, t, String(e));
    const h = Rt[m[0]];
    return h(c, m, a.localize, f);
  }).join("");
}
function Qr(e) {
  const t = e.match(Vr);
  return t ? t[1].replace(qr, "'") : e;
}
function Gr() {
  const e = z(!0), t = z(() => e.current);
  return Y(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
const ut = 2 ** 31 - 1;
function fn(e, t, n) {
  const r = n - Date.now();
  e.current = r <= ut ? setTimeout(t, r) : setTimeout(() => fn(e, t, n), ut);
}
function Jr() {
  const e = Gr(), t = z();
  return Cn(() => clearTimeout(t.current)), $e(() => {
    const n = () => clearTimeout(t.current);
    function r(a, i = 0) {
      e() && (n(), i <= ut ? t.current = setTimeout(a, i) : fn(t, a, Date.now() + i));
    }
    return {
      set: r,
      clear: n,
      handleRef: t
    };
  }, []);
}
var it, Bt;
function Kr() {
  if (Bt) return it;
  Bt = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var n = function(a, i) {
      var o = arguments.length;
      i = new Array(o > 1 ? o - 1 : 0);
      for (var c = 1; c < o; c++)
        i[c - 1] = arguments[c];
      var l = 0, f = "Warning: " + a.replace(/%s/g, function() {
        return i[l++];
      });
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
    t = function(r, a, i) {
      var o = arguments.length;
      i = new Array(o > 2 ? o - 2 : 0);
      for (var c = 2; c < o; c++)
        i[c - 2] = arguments[c];
      if (a === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      r || n.apply(null, [a].concat(i));
    };
  }
  return it = t, it;
}
var Zr = Kr();
const mn = /* @__PURE__ */ Un(Zr);
function ea(e, t, n) {
  var r = z(e !== void 0), a = S(t), i = a[0], o = a[1], c = e !== void 0, l = r.current;
  return r.current = c, !c && l && i !== t && o(t), [c ? e : i, X(function(f) {
    for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++)
      m[h - 1] = arguments[h];
    n && n.apply(void 0, [f].concat(m)), o(f);
  }, [n])];
}
function Yt() {
  return S(null);
}
var Ut = Object.prototype.hasOwnProperty;
function It(e, t, n) {
  for (n of e.keys())
    if (We(n, t)) return n;
}
function We(e, t) {
  var n, r, a;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length)
        for (; r-- && We(e[r], t[r]); ) ;
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (r of e)
        if (a = r, a && typeof a == "object" && (a = It(t, a), !a) || !t.has(a)) return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (r of e)
        if (a = r[0], a && typeof a == "object" && (a = It(t, a), !a) || !We(r[1], t.get(a)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); ) ;
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e[r] === t[r]; ) ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (Ut.call(e, n) && ++r && !Ut.call(t, n) || !(n in t) || !We(e[n], t[n])) return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function ta(e) {
  const t = Tn();
  return [e[0], X((n) => {
    if (t())
      return e[1](n);
  }, [t, e[1]])];
}
var U = "top", Q = "bottom", G = "right", I = "left", ht = "auto", Ye = [U, Q, G, I], Ne = "start", Le = "end", na = "clippingParents", pn = "viewport", Ce = "popper", ra = "reference", Ht = /* @__PURE__ */ Ye.reduce(function(e, t) {
  return e.concat([t + "-" + Ne, t + "-" + Le]);
}, []), hn = /* @__PURE__ */ [].concat(Ye, [ht]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ne, t + "-" + Le]);
}, []), aa = "beforeRead", sa = "read", ia = "afterRead", oa = "beforeMain", ca = "main", la = "afterMain", da = "beforeWrite", ua = "write", fa = "afterWrite", ma = [aa, sa, ia, oa, ca, la, da, ua, fa];
function ee(e) {
  return e.split("-")[0];
}
function H(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ge(e) {
  var t = H(e).Element;
  return e instanceof t || e instanceof Element;
}
function te(e) {
  var t = H(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function vt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = H(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var he = Math.max, Ke = Math.min, Pe = Math.round;
function ft() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vn() {
  return !/^((?!chrome|android).)*safari/i.test(ft());
}
function Me(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && te(e) && (a = e.offsetWidth > 0 && Pe(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pe(r.height) / e.offsetHeight || 1);
  var o = ge(e) ? H(e) : window, c = o.visualViewport, l = !vn() && n, f = (r.left + (l && c ? c.offsetLeft : 0)) / a, d = (r.top + (l && c ? c.offsetTop : 0)) / i, m = r.width / a, h = r.height / i;
  return {
    width: m,
    height: h,
    top: d,
    right: f + m,
    bottom: d + h,
    left: f,
    x: f,
    y: d
  };
}
function gt(e) {
  var t = Me(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function gn(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && vt(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function oe(e) {
  return H(e).getComputedStyle(e);
}
function pa(e) {
  return ["table", "td", "th"].indexOf(fe(e)) >= 0;
}
function me(e) {
  return ((ge(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function et(e) {
  return fe(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (vt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    me(e)
  );
}
function Vt(e) {
  return !te(e) || // https://github.com/popperjs/popper-core/issues/837
  oe(e).position === "fixed" ? null : e.offsetParent;
}
function ha(e) {
  var t = /firefox/i.test(ft()), n = /Trident/i.test(ft());
  if (n && te(e)) {
    var r = oe(e);
    if (r.position === "fixed")
      return null;
  }
  var a = et(e);
  for (vt(a) && (a = a.host); te(a) && ["html", "body"].indexOf(fe(a)) < 0; ) {
    var i = oe(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ue(e) {
  for (var t = H(e), n = Vt(e); n && pa(n) && oe(n).position === "static"; )
    n = Vt(n);
  return n && (fe(n) === "html" || fe(n) === "body" && oe(n).position === "static") ? t : n || ha(e) || t;
}
function bt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ae(e, t, n) {
  return he(e, Ke(t, n));
}
function va(e, t, n) {
  var r = Ae(e, t, n);
  return r > n ? n : r;
}
function bn() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yn(e) {
  return Object.assign({}, bn(), e);
}
function xn(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ga = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, yn(typeof t != "number" ? t : xn(t, Ye));
};
function ba(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, o = n.modifiersData.popperOffsets, c = ee(n.placement), l = bt(c), f = [I, G].indexOf(c) >= 0, d = f ? "height" : "width";
  if (!(!i || !o)) {
    var m = ga(a.padding, n), h = gt(i), u = l === "y" ? U : I, v = l === "y" ? Q : G, b = n.rects.reference[d] + n.rects.reference[l] - o[l] - n.rects.popper[d], p = o[l] - n.rects.reference[l], w = Ue(i), g = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, N = b / 2 - p / 2, y = m[u], O = g - h[d] - m[v], j = g / 2 - h[d] / 2 + N, P = Ae(y, j, O), E = l;
    n.modifiersData[r] = (t = {}, t[E] = P, t.centerOffset = P - j, t);
  }
}
function ya(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || gn(t.elements.popper, a) && (t.elements.arrow = a));
}
const xa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ba,
  effect: ya,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function De(e) {
  return e.split("-")[1];
}
var wa = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ja(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Pe(n * a) / a || 0,
    y: Pe(r * a) / a || 0
  };
}
function qt(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, o = e.offsets, c = e.position, l = e.gpuAcceleration, f = e.adaptive, d = e.roundOffsets, m = e.isFixed, h = o.x, u = h === void 0 ? 0 : h, v = o.y, b = v === void 0 ? 0 : v, p = typeof d == "function" ? d({
    x: u,
    y: b
  }) : {
    x: u,
    y: b
  };
  u = p.x, b = p.y;
  var w = o.hasOwnProperty("x"), g = o.hasOwnProperty("y"), N = I, y = U, O = window;
  if (f) {
    var j = Ue(n), P = "clientHeight", E = "clientWidth";
    if (j === H(n) && (j = me(n), oe(j).position !== "static" && c === "absolute" && (P = "scrollHeight", E = "scrollWidth")), j = j, a === U || (a === I || a === G) && i === Le) {
      y = Q;
      var C = m && j === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        j[P]
      );
      b -= C - r.height, b *= l ? 1 : -1;
    }
    if (a === I || (a === U || a === Q) && i === Le) {
      N = G;
      var D = m && j === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        j[E]
      );
      u -= D - r.width, u *= l ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: c
  }, f && wa), W = d === !0 ? ja({
    x: u,
    y: b
  }, H(n)) : {
    x: u,
    y: b
  };
  if (u = W.x, b = W.y, l) {
    var _;
    return Object.assign({}, k, (_ = {}, _[y] = g ? "0" : "", _[N] = w ? "0" : "", _.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + b + "px)" : "translate3d(" + u + "px, " + b + "px, 0)", _));
  }
  return Object.assign({}, k, (t = {}, t[y] = g ? b + "px" : "", t[N] = w ? u + "px" : "", t.transform = "", t));
}
function Oa(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, o = i === void 0 ? !0 : i, c = n.roundOffsets, l = c === void 0 ? !0 : c, f = {
    placement: ee(t.placement),
    variation: De(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qt(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qt(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Na = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Oa,
  data: {}
};
var qe = {
  passive: !0
};
function Pa(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, o = r.resize, c = o === void 0 ? !0 : o, l = H(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(d) {
    d.addEventListener("scroll", n.update, qe);
  }), c && l.addEventListener("resize", n.update, qe), function() {
    i && f.forEach(function(d) {
      d.removeEventListener("scroll", n.update, qe);
    }), c && l.removeEventListener("resize", n.update, qe);
  };
}
const Ma = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Pa,
  data: {}
};
var Da = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ze(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Da[t];
  });
}
var _a = {
  start: "end",
  end: "start"
};
function Xt(e) {
  return e.replace(/start|end/g, function(t) {
    return _a[t];
  });
}
function yt(e) {
  var t = H(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function xt(e) {
  return Me(me(e)).left + yt(e).scrollLeft;
}
function ka(e, t) {
  var n = H(e), r = me(e), a = n.visualViewport, i = r.clientWidth, o = r.clientHeight, c = 0, l = 0;
  if (a) {
    i = a.width, o = a.height;
    var f = vn();
    (f || !f && t === "fixed") && (c = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: c + xt(e),
    y: l
  };
}
function Sa(e) {
  var t, n = me(e), r = yt(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = he(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = he(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), c = -r.scrollLeft + xt(e), l = -r.scrollTop;
  return oe(a || n).direction === "rtl" && (c += he(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: c,
    y: l
  };
}
function wt(e) {
  var t = oe(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function wn(e) {
  return ["html", "body", "#document"].indexOf(fe(e)) >= 0 ? e.ownerDocument.body : te(e) && wt(e) ? e : wn(et(e));
}
function Re(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = wn(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = H(r), o = a ? [i].concat(i.visualViewport || [], wt(r) ? r : []) : r, c = t.concat(o);
  return a ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Re(et(o)))
  );
}
function mt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ea(e, t) {
  var n = Me(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zt(e, t, n) {
  return t === pn ? mt(ka(e, n)) : ge(t) ? Ea(t, n) : mt(Sa(me(e)));
}
function Ca(e) {
  var t = Re(et(e)), n = ["absolute", "fixed"].indexOf(oe(e).position) >= 0, r = n && te(e) ? Ue(e) : e;
  return ge(r) ? t.filter(function(a) {
    return ge(a) && gn(a, r) && fe(a) !== "body";
  }) : [];
}
function Ta(e, t, n, r) {
  var a = t === "clippingParents" ? Ca(e) : [].concat(t), i = [].concat(a, [n]), o = i[0], c = i.reduce(function(l, f) {
    var d = zt(e, f, r);
    return l.top = he(d.top, l.top), l.right = Ke(d.right, l.right), l.bottom = Ke(d.bottom, l.bottom), l.left = he(d.left, l.left), l;
  }, zt(e, o, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function jn(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ee(r) : null, i = r ? De(r) : null, o = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case U:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Q:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case G:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case I:
      l = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? bt(a) : null;
  if (f != null) {
    var d = f === "y" ? "height" : "width";
    switch (i) {
      case Ne:
        l[f] = l[f] - (t[d] / 2 - n[d] / 2);
        break;
      case Le:
        l[f] = l[f] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Be(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, o = i === void 0 ? e.strategy : i, c = n.boundary, l = c === void 0 ? na : c, f = n.rootBoundary, d = f === void 0 ? pn : f, m = n.elementContext, h = m === void 0 ? Ce : m, u = n.altBoundary, v = u === void 0 ? !1 : u, b = n.padding, p = b === void 0 ? 0 : b, w = yn(typeof p != "number" ? p : xn(p, Ye)), g = h === Ce ? ra : Ce, N = e.rects.popper, y = e.elements[v ? g : h], O = Ta(ge(y) ? y : y.contextElement || me(e.elements.popper), l, d, o), j = Me(e.elements.reference), P = jn({
    reference: j,
    element: N,
    placement: a
  }), E = mt(Object.assign({}, N, P)), C = h === Ce ? E : j, D = {
    top: O.top - C.top + w.top,
    bottom: C.bottom - O.bottom + w.bottom,
    left: O.left - C.left + w.left,
    right: C.right - O.right + w.right
  }, k = e.modifiersData.offset;
  if (h === Ce && k) {
    var W = k[a];
    Object.keys(D).forEach(function(_) {
      var A = [G, Q].indexOf(_) >= 0 ? 1 : -1, T = [U, Q].indexOf(_) >= 0 ? "y" : "x";
      D[_] += W[T] * A;
    });
  }
  return D;
}
function Wa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, o = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? hn : l, d = De(r), m = d ? c ? Ht : Ht.filter(function(v) {
    return De(v) === d;
  }) : Ye, h = m.filter(function(v) {
    return f.indexOf(v) >= 0;
  });
  h.length === 0 && (h = m);
  var u = h.reduce(function(v, b) {
    return v[b] = Be(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: o
    })[ee(b)], v;
  }, {});
  return Object.keys(u).sort(function(v, b) {
    return u[v] - u[b];
  });
}
function Aa(e) {
  if (ee(e) === ht)
    return [];
  var t = ze(e);
  return [Xt(e), t, Xt(t)];
}
function Ra(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, o = n.altAxis, c = o === void 0 ? !0 : o, l = n.fallbackPlacements, f = n.padding, d = n.boundary, m = n.rootBoundary, h = n.altBoundary, u = n.flipVariations, v = u === void 0 ? !0 : u, b = n.allowedAutoPlacements, p = t.options.placement, w = ee(p), g = w === p, N = l || (g || !v ? [ze(p)] : Aa(p)), y = [p].concat(N).reduce(function(q, Z) {
      return q.concat(ee(Z) === ht ? Wa(t, {
        placement: Z,
        boundary: d,
        rootBoundary: m,
        padding: f,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : Z);
    }, []), O = t.rects.reference, j = t.rects.popper, P = /* @__PURE__ */ new Map(), E = !0, C = y[0], D = 0; D < y.length; D++) {
      var k = y[D], W = ee(k), _ = De(k) === Ne, A = [U, Q].indexOf(W) >= 0, T = A ? "width" : "height", L = Be(t, {
        placement: k,
        boundary: d,
        rootBoundary: m,
        altBoundary: h,
        padding: f
      }), V = A ? _ ? G : I : _ ? Q : U;
      O[T] > j[T] && (V = ze(V));
      var ye = ze(V), ne = [];
      if (i && ne.push(L[W] <= 0), c && ne.push(L[V] <= 0, L[ye] <= 0), ne.every(function(q) {
        return q;
      })) {
        C = k, E = !1;
        break;
      }
      P.set(k, ne);
    }
    if (E)
      for (var ce = v ? 3 : 1, _e = function(Z) {
        var re = y.find(function(we) {
          var ae = P.get(we);
          if (ae)
            return ae.slice(0, Z).every(function(ke) {
              return ke;
            });
        });
        if (re)
          return C = re, "break";
      }, $ = ce; $ > 0; $--) {
        var xe = _e($);
        if (xe === "break") break;
      }
    t.placement !== C && (t.modifiersData[r]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const $a = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ra,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qt(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Gt(e) {
  return [U, G, Q, I].some(function(t) {
    return e[t] >= 0;
  });
}
function Fa(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, o = Be(t, {
    elementContext: "reference"
  }), c = Be(t, {
    altBoundary: !0
  }), l = Qt(o, r), f = Qt(c, a, i), d = Gt(l), m = Gt(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const La = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Fa
};
function Ba(e, t, n) {
  var r = ee(e), a = [I, U].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = i[0], c = i[1];
  return o = o || 0, c = (c || 0) * a, [I, G].indexOf(r) >= 0 ? {
    x: c,
    y: o
  } : {
    x: o,
    y: c
  };
}
function Ya(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, o = hn.reduce(function(d, m) {
    return d[m] = Ba(m, t.rects, i), d;
  }, {}), c = o[t.placement], l = c.x, f = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = o;
}
const Ua = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ya
};
function Ia(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = jn({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Ha = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ia,
  data: {}
};
function Va(e) {
  return e === "x" ? "y" : "x";
}
function qa(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, o = n.altAxis, c = o === void 0 ? !1 : o, l = n.boundary, f = n.rootBoundary, d = n.altBoundary, m = n.padding, h = n.tether, u = h === void 0 ? !0 : h, v = n.tetherOffset, b = v === void 0 ? 0 : v, p = Be(t, {
    boundary: l,
    rootBoundary: f,
    padding: m,
    altBoundary: d
  }), w = ee(t.placement), g = De(t.placement), N = !g, y = bt(w), O = Va(y), j = t.modifiersData.popperOffsets, P = t.rects.reference, E = t.rects.popper, C = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, D = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (j) {
    if (i) {
      var _, A = y === "y" ? U : I, T = y === "y" ? Q : G, L = y === "y" ? "height" : "width", V = j[y], ye = V + p[A], ne = V - p[T], ce = u ? -E[L] / 2 : 0, _e = g === Ne ? P[L] : E[L], $ = g === Ne ? -E[L] : -P[L], xe = t.elements.arrow, q = u && xe ? gt(xe) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bn(), re = Z[A], we = Z[T], ae = Ae(0, P[L], q[L]), ke = N ? P[L] / 2 - ce - ae - re - D.mainAxis : _e - ae - re - D.mainAxis, B = N ? -P[L] / 2 + ce + ae + we + D.mainAxis : $ + ae + we + D.mainAxis, le = t.elements.arrow && Ue(t.elements.arrow), Ie = le ? y === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, tt = (_ = k?.[y]) != null ? _ : 0, Ot = V + ke - tt - Ie, Nt = V + B - tt, nt = Ae(u ? Ke(ye, Ot) : ye, V, u ? he(ne, Nt) : ne);
      j[y] = nt, W[y] = nt - V;
    }
    if (c) {
      var He, rt = y === "x" ? U : I, Ve = y === "x" ? Q : G, x = j[O], F = O === "y" ? "height" : "width", Pt = x + p[rt], Mt = x - p[Ve], at = [U, I].indexOf(w) !== -1, Dt = (He = k?.[O]) != null ? He : 0, _t = at ? Pt : x - P[F] - E[F] - Dt + D.altAxis, kt = at ? x + P[F] + E[F] - Dt - D.altAxis : Mt, St = u && at ? va(_t, x, kt) : Ae(u ? _t : Pt, x, u ? kt : Mt);
      j[O] = St, W[O] = St - x;
    }
    t.modifiersData[r] = W;
  }
}
const Xa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qa,
  requiresIfExists: ["offset"]
};
function za(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Qa(e) {
  return e === H(e) || !te(e) ? yt(e) : za(e);
}
function Ga(e) {
  var t = e.getBoundingClientRect(), n = Pe(t.width) / e.offsetWidth || 1, r = Pe(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ja(e, t, n) {
  n === void 0 && (n = !1);
  var r = te(t), a = te(t) && Ga(t), i = me(t), o = Me(e, a, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((fe(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wt(i)) && (c = Qa(t)), te(t) ? (l = Me(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = xt(i))), {
    x: o.left + c.scrollLeft - l.x,
    y: o.top + c.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Ka(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(c) {
      if (!n.has(c)) {
        var l = t.get(c);
        l && a(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function Za(e) {
  var t = Ka(e);
  return ma.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function es(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ts(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Jt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Kt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ns(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Jt : a;
  return function(c, l, f) {
    f === void 0 && (f = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Jt, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, u = {
      state: d,
      setOptions: function(w) {
        var g = typeof w == "function" ? w(d.options) : w;
        b(), d.options = Object.assign({}, i, d.options, g), d.scrollParents = {
          reference: ge(c) ? Re(c) : c.contextElement ? Re(c.contextElement) : [],
          popper: Re(l)
        };
        var N = Za(ts([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = N.filter(function(y) {
          return y.enabled;
        }), v(), u.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var w = d.elements, g = w.reference, N = w.popper;
          if (Kt(g, N)) {
            d.rects = {
              reference: Ja(g, Ue(N), d.options.strategy === "fixed"),
              popper: gt(N)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
              return d.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var y = 0; y < d.orderedModifiers.length; y++) {
              if (d.reset === !0) {
                d.reset = !1, y = -1;
                continue;
              }
              var O = d.orderedModifiers[y], j = O.fn, P = O.options, E = P === void 0 ? {} : P, C = O.name;
              typeof j == "function" && (d = j({
                state: d,
                options: E,
                name: C,
                instance: u
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: es(function() {
        return new Promise(function(p) {
          u.forceUpdate(), p(d);
        });
      }),
      destroy: function() {
        b(), h = !0;
      }
    };
    if (!Kt(c, l))
      return u;
    u.setOptions(f).then(function(p) {
      !h && f.onFirstUpdate && f.onFirstUpdate(p);
    });
    function v() {
      d.orderedModifiers.forEach(function(p) {
        var w = p.name, g = p.options, N = g === void 0 ? {} : g, y = p.effect;
        if (typeof y == "function") {
          var O = y({
            state: d,
            name: w,
            instance: u,
            options: N
          }), j = function() {
          };
          m.push(O || j);
        }
      });
    }
    function b() {
      m.forEach(function(p) {
        return p();
      }), m = [];
    }
    return u;
  };
}
const rs = ns({
  defaultModifiers: [La, Ha, Na, Ma, Ua, $a, Xa, xa]
}), as = ["enabled", "placement", "strategy", "modifiers"];
function ss(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const is = {
  name: "applyStyles",
  enabled: !1,
  phase: "afterWrite",
  fn: () => {
  }
}, os = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: ({
    state: e
  }) => () => {
    const {
      reference: t,
      popper: n
    } = e.elements;
    if ("removeAttribute" in t) {
      const r = (t.getAttribute("aria-describedby") || "").split(",").filter((a) => a.trim() !== n.id);
      r.length ? t.setAttribute("aria-describedby", r.join(",")) : t.removeAttribute("aria-describedby");
    }
  },
  fn: ({
    state: e
  }) => {
    var t;
    const {
      popper: n,
      reference: r
    } = e.elements, a = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
    if (n.id && a === "tooltip" && "setAttribute" in r) {
      const i = r.getAttribute("aria-describedby");
      if (i && i.split(",").indexOf(n.id) !== -1)
        return;
      r.setAttribute("aria-describedby", i ? `${i},${n.id}` : n.id);
    }
  }
}, cs = [];
function ls(e, t, n = {}) {
  let {
    enabled: r = !0,
    placement: a = "bottom",
    strategy: i = "absolute",
    modifiers: o = cs
  } = n, c = ss(n, as);
  const l = z(o), f = z(), d = X(() => {
    var p;
    (p = f.current) == null || p.update();
  }, []), m = X(() => {
    var p;
    (p = f.current) == null || p.forceUpdate();
  }, []), [h, u] = ta(S({
    placement: a,
    update: d,
    forceUpdate: m,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  })), v = $e(() => ({
    name: "updateStateModifier",
    enabled: !0,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({
      state: p
    }) => {
      const w = {}, g = {};
      Object.keys(p.elements).forEach((N) => {
        w[N] = p.styles[N], g[N] = p.attributes[N];
      }), u({
        state: p,
        styles: w,
        attributes: g,
        update: d,
        forceUpdate: m,
        placement: p.placement
      });
    }
  }), [d, m, u]), b = $e(() => (We(l.current, o) || (l.current = o), l.current), [o]);
  return Y(() => {
    !f.current || !r || f.current.setOptions({
      placement: a,
      strategy: i,
      modifiers: [...b, v, is]
    });
  }, [i, a, v, r, b]), Y(() => {
    if (!(!r || e == null || t == null))
      return f.current = rs(e, t, Object.assign({}, c, {
        placement: a,
        strategy: i,
        modifiers: [...b, os, v]
      })), () => {
        f.current != null && (f.current.destroy(), f.current = void 0, u((p) => Object.assign({}, p, {
          attributes: {},
          styles: {
            popper: {}
          }
        })));
      };
  }, [r, e, t]), h;
}
const Zt = () => {
};
function ds(e) {
  return e.button === 0;
}
function us(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Qe = (e) => e && ("current" in e ? e.current : e), en = {
  click: "mousedown",
  mouseup: "mousedown",
  pointerup: "pointerdown"
};
function fs(e, t = Zt, {
  disabled: n,
  clickTrigger: r = "click"
} = {}) {
  const a = z(!1), i = z(!1), o = X((f) => {
    const d = Qe(e);
    mn(!!d, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), a.current = !d || us(f) || !ds(f) || !!ct(d, f.target) || i.current, i.current = !1;
  }, [e]), c = lt((f) => {
    const d = Qe(e);
    d && ct(d, f.target) ? i.current = !0 : i.current = !1;
  }), l = lt((f) => {
    a.current || t(f);
  });
  Y(() => {
    var f, d;
    if (n || e == null) return;
    const m = an(Qe(e)), h = m.defaultView || window;
    let u = (f = h.event) != null ? f : (d = h.parent) == null ? void 0 : d.event, v = null;
    en[r] && (v = Te(m, en[r], c, !0));
    const b = Te(m, r, o, !0), p = Te(m, r, (g) => {
      if (g === u) {
        u = void 0;
        return;
      }
      l(g);
    });
    let w = [];
    return "ontouchstart" in m.documentElement && (w = [].slice.call(m.body.children).map((g) => Te(g, "mousemove", Zt))), () => {
      v?.(), b(), p(), w.forEach((g) => g());
    };
  }, [e, n, r, o, c, l]);
}
const ms = () => {
};
function ps(e, t, {
  disabled: n,
  clickTrigger: r
} = {}) {
  const a = t || ms;
  fs(e, a, {
    disabled: n,
    clickTrigger: r
  });
  const i = lt((o) => {
    Wn(o) && a(o);
  });
  Y(() => {
    if (n || e == null) return;
    const o = an(Qe(e));
    let c = (o.defaultView || window).event;
    const l = Te(o, "keyup", (f) => {
      if (f === c) {
        c = void 0;
        return;
      }
      i(f);
    });
    return () => {
      l();
    };
  }, [e, n, i]);
}
function hs(e) {
  const t = {};
  return Array.isArray(e) ? (e?.forEach((n) => {
    t[n.name] = n;
  }), t) : e || t;
}
function vs(e = {}) {
  return Array.isArray(e) ? e : Object.keys(e).map((t) => (e[t].name = t, e[t]));
}
function gs({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: a,
  fixed: i,
  containerPadding: o,
  arrowElement: c,
  popperConfig: l = {}
}) {
  var f, d, m, h;
  const u = hs(l.modifiers);
  return Object.assign({}, l, {
    placement: n,
    enabled: e,
    strategy: i ? "fixed" : l.strategy,
    modifiers: vs(Object.assign({}, u, {
      eventListeners: {
        enabled: t,
        options: (f = u.eventListeners) == null ? void 0 : f.options
      },
      preventOverflow: Object.assign({}, u.preventOverflow, {
        options: Object.assign({
          padding: o
        }, (d = u.preventOverflow) == null ? void 0 : d.options)
      }),
      offset: {
        options: Object.assign({
          offset: a
        }, (m = u.offset) == null ? void 0 : m.options)
      },
      arrow: Object.assign({}, u.arrow, {
        enabled: !!c,
        options: Object.assign({}, (h = u.arrow) == null ? void 0 : h.options, {
          element: c
        })
      }),
      flip: Object.assign({
        enabled: !!r
      }, u.flip)
    }))
  });
}
const On = /* @__PURE__ */ ue.forwardRef((e, t) => {
  const {
    flip: n,
    offset: r,
    placement: a,
    containerPadding: i,
    popperConfig: o = {},
    transition: c,
    runTransition: l
  } = e, [f, d] = Yt(), [m, h] = Yt(), u = An(d, t), v = Et(e.container), b = Et(e.target), [p, w] = S(!e.show), g = ls(b, f, gs({
    placement: a,
    enableEvents: !!e.show,
    containerPadding: i || 5,
    flip: n,
    offset: r,
    arrowElement: m,
    popperConfig: o
  }));
  e.show && p && w(!1);
  const N = (...k) => {
    w(!0), e.onExited && e.onExited(...k);
  }, y = e.show || !p;
  if (ps(f, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !y)
    return null;
  const {
    onExit: O,
    onExiting: j,
    onEnter: P,
    onEntering: E,
    onEntered: C
  } = e;
  let D = e.children(Object.assign({}, g.attributes.popper, {
    style: g.styles.popper,
    ref: u
  }), {
    popper: g,
    placement: a,
    show: !!e.show,
    arrowProps: Object.assign({}, g.attributes.arrow, {
      style: g.styles.arrow,
      ref: h
    })
  });
  return D = Rn(c, l, {
    in: !!e.show,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: D,
    onExit: O,
    onExiting: j,
    onExited: N,
    onEnter: P,
    onEntering: E,
    onEntered: C
  }), v ? /* @__PURE__ */ In.createPortal(D, v) : null;
});
On.displayName = "Overlay";
const bs = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", ys = typeof document < "u", xs = ys || bs ? Sn : Y, Nn = /* @__PURE__ */ ue.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, a) => (t = Oe(t, "popover-header"), /* @__PURE__ */ s.jsx(n, {
  ref: a,
  className: be(e, t),
  ...r
})));
Nn.displayName = "PopoverHeader";
const jt = /* @__PURE__ */ ue.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, a) => (t = Oe(t, "popover-body"), /* @__PURE__ */ s.jsx(n, {
  ref: a,
  className: be(e, t),
  ...r
})));
jt.displayName = "PopoverBody";
function Pn(e, t) {
  let n = e;
  return e === "left" ? n = t ? "end" : "start" : e === "right" && (n = t ? "start" : "end"), n;
}
function Mn(e = "absolute") {
  return {
    position: e,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}
const Dn = /* @__PURE__ */ ue.forwardRef(({
  bsPrefix: e,
  placement: t = "right",
  className: n,
  style: r,
  children: a,
  body: i,
  arrowProps: o,
  hasDoneInitialMeasure: c,
  popper: l,
  show: f,
  ...d
}, m) => {
  const h = Oe(e, "popover"), u = sn(), [v] = t?.split("-") || [], b = Pn(v, u);
  let p = r;
  return f && !c && (p = {
    ...r,
    ...Mn(l?.strategy)
  }), /* @__PURE__ */ s.jsxs("div", {
    ref: m,
    role: "tooltip",
    style: p,
    "x-placement": v,
    className: be(n, h, v && `bs-popover-${b}`),
    ...d,
    children: [/* @__PURE__ */ s.jsx("div", {
      className: "popover-arrow",
      ...o
    }), i ? /* @__PURE__ */ s.jsx(jt, {
      children: a
    }) : a]
  });
});
Dn.displayName = "Popover";
const ws = Object.assign(Dn, {
  Header: Nn,
  Body: jt,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
}), _n = /* @__PURE__ */ ue.forwardRef(({
  bsPrefix: e,
  placement: t = "right",
  className: n,
  style: r,
  children: a,
  arrowProps: i,
  hasDoneInitialMeasure: o,
  popper: c,
  show: l,
  ...f
}, d) => {
  e = Oe(e, "tooltip");
  const m = sn(), [h] = t?.split("-") || [], u = Pn(h, m);
  let v = r;
  return l && !o && (v = {
    ...r,
    ...Mn(c?.strategy)
  }), /* @__PURE__ */ s.jsxs("div", {
    ref: d,
    style: v,
    role: "tooltip",
    "x-placement": h,
    className: be(n, e, `bs-tooltip-${u}`),
    ...f,
    children: [/* @__PURE__ */ s.jsx("div", {
      className: "tooltip-arrow",
      ...i
    }), /* @__PURE__ */ s.jsx("div", {
      className: `${e}-inner`,
      children: a
    })]
  });
});
_n.displayName = "Tooltip";
const J = Object.assign(_n, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});
function js(e) {
  const t = z(null), n = Oe(void 0, "popover"), r = Oe(void 0, "tooltip"), a = $e(() => ({
    name: "offset",
    options: {
      offset: () => {
        if (e)
          return e;
        if (t.current) {
          if (Ct(t.current, n))
            return ws.POPPER_OFFSET;
          if (Ct(t.current, r))
            return J.TOOLTIP_OFFSET;
        }
        return [0, 0];
      }
    }
  }), [e, n, r]);
  return [t, [a]];
}
function Os(e, t) {
  const {
    ref: n
  } = e, {
    ref: r
  } = t;
  e.ref = n.__wrapped || (n.__wrapped = (a) => n(dt(a))), t.ref = r.__wrapped || (r.__wrapped = (a) => r(dt(a)));
}
const kn = /* @__PURE__ */ ue.forwardRef(({
  children: e,
  transition: t = Tt,
  popperConfig: n = {},
  rootClose: r = !1,
  placement: a = "top",
  show: i = !1,
  ...o
}, c) => {
  const l = z({}), [f, d] = S(null), [m, h] = js(o.offset), u = on(c, m), v = t === !0 ? Tt : t || void 0, b = $n((p) => {
    d(p), n == null || n.onFirstUpdate == null || n.onFirstUpdate(p);
  });
  return xs(() => {
    f && o.target && (l.current.scheduleUpdate == null || l.current.scheduleUpdate());
  }, [f, o.target]), Y(() => {
    i || d(null);
  }, [i]), /* @__PURE__ */ s.jsx(On, {
    ...o,
    ref: u,
    popperConfig: {
      ...n,
      modifiers: h.concat(n.modifiers || []),
      onFirstUpdate: b
    },
    transition: v,
    rootClose: r,
    placement: a,
    show: i,
    children: (p, {
      arrowProps: w,
      popper: g,
      show: N
    }) => {
      var y;
      Os(p, w);
      const O = g?.placement, j = Object.assign(l.current, {
        state: g?.state,
        scheduleUpdate: g?.update,
        placement: O,
        outOfBoundaries: (g == null || (y = g.state) == null || (y = y.modifiersData.hide) == null ? void 0 : y.isReferenceHidden) || !1,
        strategy: n.strategy
      }), P = !!f;
      return typeof e == "function" ? e({
        ...p,
        placement: O,
        show: N,
        ...!t && N && {
          className: "show"
        },
        popper: j,
        arrowProps: w,
        hasDoneInitialMeasure: P
      }) : /* @__PURE__ */ ue.cloneElement(e, {
        ...p,
        placement: O,
        arrowProps: w,
        popper: j,
        hasDoneInitialMeasure: P,
        className: be(e.props.className, !t && N && "show"),
        style: {
          ...e.props.style,
          ...p.style
        }
      });
    }
  });
});
kn.displayName = "Overlay";
function Ns(e) {
  return e && typeof e == "object" ? e : {
    show: e,
    hide: e
  };
}
function tn(e, t, n) {
  const [r] = t, a = r.currentTarget, i = r.relatedTarget || r.nativeEvent[n];
  (!i || i !== a) && !ct(a, i) && e(...t);
}
Ln.oneOf(["click", "hover", "focus"]);
const se = ({
  trigger: e = ["hover", "focus"],
  overlay: t,
  children: n,
  popperConfig: r = {},
  show: a,
  defaultShow: i = !1,
  onToggle: o,
  delay: c,
  placement: l,
  flip: f = l && l.indexOf("auto") !== -1,
  ...d
}) => {
  const m = z(null), h = on(m, Fn(n)), u = Jr(), v = z(""), [b, p] = ea(a, i, o), w = Ns(c), {
    onFocus: g,
    onBlur: N,
    onClick: y
  } = typeof n != "function" ? ue.Children.only(n).props : {}, O = (T) => {
    h(dt(T));
  }, j = X(() => {
    if (u.clear(), v.current = "show", !w.show) {
      p(!0);
      return;
    }
    u.set(() => {
      v.current === "show" && p(!0);
    }, w.show);
  }, [w.show, p, u]), P = X(() => {
    if (u.clear(), v.current = "hide", !w.hide) {
      p(!1);
      return;
    }
    u.set(() => {
      v.current === "hide" && p(!1);
    }, w.hide);
  }, [w.hide, p, u]), E = X((...T) => {
    j(), g?.(...T);
  }, [j, g]), C = X((...T) => {
    P(), N?.(...T);
  }, [P, N]), D = X((...T) => {
    p(!b), y?.(...T);
  }, [y, p, b]), k = X((...T) => {
    tn(j, T, "fromElement");
  }, [j]), W = X((...T) => {
    tn(P, T, "toElement");
  }, [P]), _ = e == null ? [] : [].concat(e), A = {
    ref: O
  };
  return _.indexOf("click") !== -1 && (A.onClick = D), _.indexOf("focus") !== -1 && (A.onFocus = E, A.onBlur = C), _.indexOf("hover") !== -1 && (process.env.NODE_ENV !== "production" && mn(_.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.'), A.onMouseOver = k, A.onMouseOut = W), /* @__PURE__ */ s.jsxs(s.Fragment, {
    children: [typeof n == "function" ? n(A) : /* @__PURE__ */ En(n, A), /* @__PURE__ */ s.jsx(kn, {
      ...d,
      show: b,
      onHide: P,
      flip: f,
      placement: l,
      popperConfig: r,
      target: m.current,
      children: t
    })]
  });
};
function Ps(e) {
  const { profile_photo: t, width: n, alt: r, hideDefault: a, activityStatus: i, user_id: o } = e;
  return t?.key ? /* @__PURE__ */ s.jsxs(
    "div",
    {
      "data-using-react-profile-photo": "true",
      className: `profile-photo-wrap ${n ? "" : "w-100 h-100"}`,
      style: {
        ...n && {
          width: n,
          height: n
        }
      },
      children: [
        /* @__PURE__ */ s.jsx(
          nn,
          {
            activityStatus: i,
            user_id: o
          }
        ),
        /* @__PURE__ */ s.jsx(
          "img",
          {
            className: "w-100 h-100",
            src: `${process.env.NEXT_PUBLIC_CDN}${t.key}`,
            style: { objectFit: "contain" },
            alt: r || "Profile photo of a user"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ s.jsxs(
    "div",
    {
      "data-using-react-profile-photo": "true",
      className: be(
        "profile-photo-wrap",
        {
          "w-100 h-100": !n,
          "d-none": a
        }
      ),
      style: {
        ...n && {
          width: n,
          height: n
        }
      },
      children: [
        /* @__PURE__ */ s.jsx(
          nn,
          {
            activityStatus: i,
            user_id: o
          }
        ),
        /* @__PURE__ */ s.jsx(
          "img",
          {
            className: "w-100 h-100",
            src: `${process.env.NEXT_PUBLIC_CDN}profile_photos/starter/articles.jpg`,
            style: { objectFit: "contain" },
            alt: r || "Profile photo of a user"
          }
        )
      ]
    }
  );
}
function nn({
  activityStatus: e,
  user_id: t
}) {
  if (!(!e || !t))
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        "data-user_id": t,
        className: be(
          "online-status",
          {
            "status-online": e?.status == "Online" || t == "630f0b337c52851e754b03f7",
            "status-offline": e?.status == "Offline",
            "status-away": e?.status == "Away",
            // Maybe one day show that friends are in a game or on a page if they want to share, we already collect this data anyway!
            "activity-active": !1
          }
        )
      }
    );
}
const Ms = (e) => (t, n, r) => (r.revalidateOnFocus = !1, r.revalidateIfStale = !1, r.revalidateOnReconnect = !1, e(t, n, r)), Ds = Yn(pt, Ms), _s = (e) => Ge.get(e.url, {
  params: {
    user_id: e.user_id
  }
}).then((t) => t.data), ks = {
  dedupingInterval: 1e3 * 60 * 1,
  focusThrottleInterval: 1e3 * 60 * 1
  // fallbackData: []
}, rn = (e) => {
  const { data: t, error: n, isLoading: r, isValidating: a, mutate: i } = Ds(
    e?.user_id ? {
      url: process.env.NODE_ENV === "development" ? "http://localhost:3000/api/user-public/getUserDetails" : "https://articles.media/api/user-public/getUserDetails",
      // "/api/user-public/getUserDetails",
      user_id: e.user_id
    } : null,
    _s,
    ks
  );
  return {
    data: t,
    error: n,
    isLoading: r,
    isValidating: a,
    mutate: i
  };
};
function ot({ className: e, noOutline: t, children: n, inline: r }) {
  const [i, o] = S();
  if (Y(() => {
    o(!0);
  }, []), n && (!1)?.roles?.isDev && i)
    return /* @__PURE__ */ s.jsx("div", { className: `is-dev-content ${t && "no-outline"} ${e} ${r && "d-inline-block"}`, children: n });
}
function Ss({
  activeLayoutProposalSentiments: e
}) {
  return /* @__PURE__ */ s.jsx("div", { children: e.user_sentiments?.map((t) => /* @__PURE__ */ s.jsxs("div", { className: "card card-articles card-sm border mb-2", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "card-header small", children: [
      "Gave their sentiment on ",
      /* @__PURE__ */ s.jsx("b", { children: t.populated_proposal.title })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "card-body small p-2", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "d-flex align-items-center border-bottom pb-1", children: [
        t.sentiment_status == "Agree" && /* @__PURE__ */ s.jsx("div", { className: "badge shadow-articles bg-success", children: "Agree" }),
        t.sentiment_status == "Needs Work" && /* @__PURE__ */ s.jsx("div", { className: "badge shadow-articles bg-warning text-dark", children: "Needs Work" }),
        t.sentiment_status == "Disagree" && /* @__PURE__ */ s.jsx("div", { className: "badge shadow-articles bg-danger", children: "Disagree" }),
        /* @__PURE__ */ s.jsx("span", { className: "small ms-2", children: zr(new Date(t.date), "M/dd/yy") })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "mt-1", children: t.comment })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "card-footer", children: /* @__PURE__ */ s.jsx(
      Xe,
      {
        prefetch: !1,
        href: `https://articles.media/politics/proposals/${t.populated_proposal.url}?interaction_id=${t._id}`,
        children: /* @__PURE__ */ s.jsx(
          R,
          {
            small: !0,
            children: "View"
          }
        )
      }
    ) })
  ] }, t._id)) });
}
function Es(e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Cs = (e) => Ge.get(e).then((t) => t.data), Ts = (e) => {
  const { data: t, error: n, isLoading: r, mutate: a } = pt(
    process.env.NODE_ENV === "development" ? "http://localhost:3000/api/news/resources/political-parties" : "https://articles.media/api/news/resources/political-parties",
    Cs,
    {
      dedupingInterval: 6e5
      // fallbackData: []
    }
  );
  return {
    data: t,
    error: n,
    isLoading: r,
    mutate: a
  };
};
function Ws(e) {
  const {
    populated_user: t,
    hidePhoto: n,
    visibleItems: r,
    size: a,
    className: i,
    dangerousPopulate: o,
    user_id: c,
    buttonType: l,
    children: f,
    fakeMembership: d
    // name
  } = e, [m, h] = S(!1), [u, v] = S({}), [b, p] = S([]), [w, g] = S([]), [N, y] = S(null), [O, j] = S([]), [P, E] = S([]), [C, D] = S(!1), k = !1, { data: W } = Ts(), [_, A] = S("Proposals Stance"), T = () => {
    h(!1);
  };
  Y(() => {
    t && v({
      ...t
    });
  }, []);
  const [L, V] = S(!1), [ye, ne] = S([]), [ce, _e] = S([]), { data: $, mutate: xe } = rn(
    (c || t?._id) && (m || o) ? {
      user_id: c || t?._id
    } : null
  ), { data: q, mutate: Z } = rn(
    k?._id && (m || o) ? {
      user_id: k?._id
    } : null
  );
  Y(() => {
    $ && (console.log("publicUserData", $), v($), p($?.populated_public_layouts), g($?.populated_public_donations), y($?.populated_public_donations.total), E($?.populated_public_proposals), ne($?.populated_public_proposals_stance), j($?.populated_public_news_submissions || []));
  }, [$]), Y(() => {
    q && (console.log("personalUserData", q), _e(q?.populated_public_proposals_stance));
  }, [q]);
  let re = (t || u)?.articles_membership?.plan.replace(" ", "-").toLowerCase(), we = d?.replace(" ", "-").toLowerCase();
  const ae = () => {
    let x = (t || u)?.articles_membership?.status == "Active";
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        style: { position: "relative" } && (a == "lg" ? { fontSize: "1.5rem" } : {}),
        className: `view-user-modal-badge-wrap ${a == "lg" && "large"} ${i && i}`,
        children: [
          /* @__PURE__ */ s.jsxs(
            "span",
            {
              onClick: () => {
                h(!0);
              },
              className: "position-relative view-user-modal-badge d-flex justify-content-between align-items-center badge bg-articles-secondary shadow-articles badge-hover ",
              children: [
                (x || d) && /* @__PURE__ */ s.jsx(
                  "i",
                  {
                    className: `fad membership-badge ${we || re} fa-badge-check`,
                    style: {
                      position: "absolute",
                      // top: '50%',
                      top: "-2px",
                      left: "-2px",
                      // transform: 'translateY(-50%)',
                      fontSize: "0.9rem",
                      zIndex: 1
                      // marginRight: '-0.5rem'
                      // color: `${obj.badge_color}!important`
                    }
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: `d-flex align-items-center ${x && ""}`, children: [
                  !n && /* @__PURE__ */ s.jsx("div", { className: a == "lg" ? "me-0" : "me-1" }),
                  u.display_name || t?.display_name
                ] }),
                /* @__PURE__ */ s.jsx("i", { className: "fad fa-plus-square me-0 ms-2" })
              ]
            }
          ),
          r?.includes("Not Verified") && t?.verified?.status !== "Verified" && /* @__PURE__ */ s.jsx(
            se,
            {
              placement: "bottom",
              overlay: /* @__PURE__ */ s.jsx(J, { style: { pointerEvents: "none" }, id: "button-tooltip", children: /* @__PURE__ */ s.jsx("div", { className: "", children: "User is not verified" }) }),
              children: /* @__PURE__ */ s.jsxs(
                "span",
                {
                  className: "verification-user-badge badge bg-danger d-flex align-items-center",
                  children: [
                    /* @__PURE__ */ s.jsx("i", { style: { paddingBottom: "2px" }, className: "fas fa-robot me-1" }),
                    /* @__PURE__ */ s.jsx("span", { className: "", children: "Unverified" })
                  ]
                }
              )
            }
          ),
          // true
          // ||
          // visibleItems?.includes("Membership")
          !1,
          r?.includes("Verification Status") && /* @__PURE__ */ s.jsx(
            se,
            {
              placement: "bottom",
              overlay: /* @__PURE__ */ s.jsx(
                J,
                {
                  id: "button-tooltip",
                  style: { pointerEvents: "none", transformX: "-20px" },
                  children: t?.verified?.status == "Verified" ? "Verified" : " Not Verified"
                }
              ),
              children: t?.verified?.status == "Verified" ? /* @__PURE__ */ s.jsx("span", { className: "verification-user-badge badge bg-success cursor-pointer", children: /* @__PURE__ */ s.jsx("i", { className: "fas fa-check me-0" }) }) : /* @__PURE__ */ s.jsxs("span", { className: "verification-user-badge badge bg-danger cursor-pointer", children: [
                /* @__PURE__ */ s.jsx("i", { className: "fas fa-robot me-1" }),
                /* @__PURE__ */ s.jsx("span", { children: "?" })
              ] })
            }
          ),
          r?.includes("Political Party") && /* @__PURE__ */ s.jsx("div", { className: "d-flex", children: (t || u)?.political?.party_id && /* @__PURE__ */ s.jsx(
            se,
            {
              placement: "bottom",
              overlay: /* @__PURE__ */ s.jsxs(
                J,
                {
                  id: "tooltip-bottom",
                  style: { position: "fixed" },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "img",
                      {
                        width: "40px",
                        height: "40px",
                        style: {
                          objectFit: "contain",
                          padding: "0px",
                          zIndex: "10",
                          position: "relative"
                        },
                        loading: "lazy",
                        src: `${process.env.NEXT_PUBLIC_CDN}` + W?.find((F) => F._id == (t || u)?.political?.party_id)?.logo,
                        alt: ""
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "span",
                      {
                        className: "ms-2",
                        children: W?.find((F) => F._id == (t || u)?.political?.party_id)?.name
                      }
                    )
                  ]
                }
              ),
              children: /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "badge bg-light text-capitalize ms-0 shadow-articles h-100 d-flex justify-content-center align-items-center",
                  style: {
                    padding: "0 0.15rem",
                    cursor: "pointer"
                  },
                  children: (t || u)?.political?.party_id && ((t || u)?.political?.party_id == "62a830440593acbd4061c48c" ? /* @__PURE__ */ s.jsx("i", { className: "fad fa-unlink unaffiliated-icon fa-lg me-0" }) : /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      width: "15px",
                      height: "15px",
                      style: {
                        objectFit: "contain",
                        padding: "0px"
                      },
                      loading: "lazy",
                      src: `${process.env.NEXT_PUBLIC_CDN}` + W?.find((F) => F._id == (t || u)?.political?.party_id)?.logo,
                      alt: ""
                    }
                  ))
                }
              )
            }
          ) })
        ]
      }
    );
  };
  function ke(x) {
    return x === "Link" ? /* @__PURE__ */ s.jsx(
      "span",
      {
        type: "button",
        onClick: () => {
          h(!0);
        },
        children: f
      }
    ) : /* @__PURE__ */ s.jsx(ae, {});
  }
  const [B, le] = S(!1), [Ie, tt] = S({}), [Ot, Nt] = S({});
  Y(() => {
    B && Object.keys(Ie).length == 0 && console.log("adminUserData", q);
  }, [B]);
  const [nt, He] = S(null);
  function rt() {
    alert("TODO");
  }
  const Ve = $e(() => b?.filter((x) => x.user_layout)?.[0]?.url, [b]);
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    ke(l),
    /* @__PURE__ */ s.jsxs(
      ie,
      {
        show: m,
        size: "lg",
        id: "view-users-modal",
        className: "view-users-modal articles-modal",
        scrollable: !0,
        onHide: T,
        children: [
          /* @__PURE__ */ s.jsx(ie.Header, { closeButton: !0, children: /* @__PURE__ */ s.jsx("div", { className: "w-100 d-flex justify-content-between align-items-center", children: /* @__PURE__ */ s.jsx("h3", { className: "mb-0", children: "User Info" }) }) }),
          /* @__PURE__ */ s.jsx(ie.Body, { children: /* @__PURE__ */ s.jsxs("div", { className: "main-panel", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "d-flex flex-column align-items-center",
                  style: {
                    width: "100px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        type: "button",
                        onClick: () => {
                          He(`${process.env.NEXT_PUBLIC_CDN}${u?.profile_photo?.key}`);
                        },
                        children: /* @__PURE__ */ s.jsx(
                          Ps,
                          {
                            width: "100px",
                            profile_photo: u?.profile_photo
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      se,
                      {
                        placement: "bottom",
                        overlay: /* @__PURE__ */ s.jsx(
                          J,
                          {
                            id: "tooltip-bottom",
                            children: "Joined Articles Media"
                          }
                        ),
                        children: /* @__PURE__ */ s.jsxs("div", { className: "badge bg-black border border-white shadow-sm rounded-0", children: [
                          "Joined ",
                          u?.sign_up_date && format(new Date(u?.sign_up_date), "M/dd/yy")
                        ] })
                      }
                    ),
                    Ve && /* @__PURE__ */ s.jsx(
                      Xe,
                      {
                        href: (
                          // `${ROUTES.LAYOUTS}/${userLayoutLink}`
                          `https://articles.media/layouts/${Ve}`
                        ),
                        className: "mt-2 w-100",
                        children: /* @__PURE__ */ s.jsxs(
                          R,
                          {
                            className: "w-100",
                            style: {
                              // fontSize: '0.75rem'
                            },
                            children: [
                              /* @__PURE__ */ s.jsx("i", { className: "fad fa-home" }),
                              /* @__PURE__ */ s.jsx("span", { children: "Layout" })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ s.jsx(ot, { className: "w-100", children: /* @__PURE__ */ s.jsx(
                      Xe,
                      {
                        href: {
                          // pathname: ROUTES.MESSAGES,
                          pathname: "https://articles.media/messages",
                          query: {
                            startMsg: u?._id
                          }
                        },
                        className: "mt-2 w-100",
                        children: /* @__PURE__ */ s.jsxs(
                          R,
                          {
                            className: "w-100",
                            style: {
                              fontSize: "0.88rem"
                            },
                            children: [
                              /* @__PURE__ */ s.jsx("i", { className: "fad fa-envelope" }),
                              /* @__PURE__ */ s.jsx("span", { children: "Message" })
                            ]
                          }
                        )
                      }
                    ) }),
                    B && /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: "d-flex flex-column w-100 mt-2",
                        style: {
                          maxWidth: "100px"
                        },
                        children: [
                          /* @__PURE__ */ s.jsx(R, { variant: "warning", small: !0, className: "", children: /* @__PURE__ */ s.jsx(Textfit, { max: 14, mode: "single", children: "Remove Photo" }) }),
                          Ie?.user?.profile_photo?.banned_uploads ? /* @__PURE__ */ s.jsx(
                            R,
                            {
                              variant: "warning",
                              small: !0,
                              className: "",
                              onClick: () => {
                                toggleBanCustomPhotoUpload();
                              },
                              children: /* @__PURE__ */ s.jsx(Textfit, { max: 14, mode: "single", children: "Unban Uploads" })
                            }
                          ) : /* @__PURE__ */ s.jsx(
                            R,
                            {
                              variant: "danger",
                              small: !0,
                              className: "",
                              onClick: () => {
                                toggleBanCustomPhotoUpload();
                              },
                              children: /* @__PURE__ */ s.jsx(Textfit, { max: 14, mode: "single", children: "Ban Uploads" })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "mx-2", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "d-flex  align-items-center mb-1", children: [
                  /* @__PURE__ */ s.jsx("h5", { className: "mb-0", children: t?.display_name || u.display_name }),
                  /* @__PURE__ */ s.jsxs("span", { className: "ms-2", children: [
                    " @",
                    u?.username
                  ] })
                ] }),
                u?.articles_membership?.status == "Active" && /* @__PURE__ */ s.jsx(
                  se,
                  {
                    placement: "bottom",
                    overlay: /* @__PURE__ */ s.jsx(
                      J,
                      {
                        id: "tooltip-bottom",
                        children: /* @__PURE__ */ s.jsxs("div", { className: "d-flex flex-column py-1", children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "position-relative", children: [
                            u?.articles_membership?.plan == "Supporter" && /* @__PURE__ */ s.jsx(Image, { src: "/images/store/memberships/supporter.jpg", width: 50, height: 50, alt: "Membership plan level" }),
                            u?.articles_membership?.plan == "Premium Supporter" && /* @__PURE__ */ s.jsx(Image, { src: "/images/store/memberships/premiumSupporter.jpg", width: 50, height: 50, alt: "Membership plan level" }),
                            u?.articles_membership?.plan == "Advocate" && /* @__PURE__ */ s.jsx(Image, { src: "/images/store/memberships/advocate.jpg", width: 50, height: 50, alt: "Membership plan level" }),
                            /* @__PURE__ */ s.jsx(
                              "i",
                              {
                                className: `fad membership-badge ${re} fa-badge-check me-1`,
                                style: {
                                  position: "absolute",
                                  top: "50%",
                                  // top: '-2px',
                                  left: "50%",
                                  transform: "translateX(-50%) translateY(-50%)",
                                  fontSize: "1.5rem"
                                  // marginRight: '-0.5rem'
                                  // color: `${obj.badge_color}!important`
                                }
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s.jsxs("span", { className: "lh-sm", children: [
                            /* @__PURE__ */ s.jsx("div", { children: u?.articles_membership?.plan }),
                            /* @__PURE__ */ s.jsxs("div", { className: "small", children: [
                              "Since ",
                              /* @__PURE__ */ s.jsx(ArticlesDate, { format: "MM/dd/yy", date: u?.articles_membership?.membership_started })
                            ] })
                          ] })
                        ] })
                      }
                    ),
                    children: /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: "badge bg-articles border text-dark me-1 mb-1",
                        style: {
                          // padding: '0 0.25rem',
                          cursor: "pointer"
                        },
                        children: [
                          /* @__PURE__ */ s.jsx(
                            "i",
                            {
                              className: `fad membership-badge ${re} fa-badge-check me-1`,
                              style: {
                                // position: 'absolute',
                                // top: '50%',
                                // top: '-2px',
                                // left: '-2px',
                                // transform: 'translateY(-50%)',
                                // fontSize: '0.9rem'
                                // marginRight: '-0.5rem'
                                // color: `${obj.badge_color}!important`
                              }
                            }
                          ),
                          /* @__PURE__ */ s.jsx("span", { children: u?.articles_membership?.plan }),
                          /* @__PURE__ */ s.jsx("span", { className: "px-1", children: "|" }),
                          /* @__PURE__ */ s.jsx("span", { className: "months fw-bold", children: differenceInMonths(
                            /* @__PURE__ */ new Date(),
                            new Date(u?.articles_membership?.membership_started)
                          ) || 0 })
                        ]
                      }
                    )
                  }
                ),
                u?.address?.state && /* @__PURE__ */ s.jsx(
                  se,
                  {
                    placement: "bottom",
                    overlay: u.address?.state?.length == 2 ? /* @__PURE__ */ s.jsxs(J, { id: "tooltip-bottom", children: [
                      "From the state of ",
                      convertRegion(u.address?.state, "name") ? convertRegion(u.address?.state, "name")[0] : ""
                    ] }) : /* @__PURE__ */ s.jsxs(J, { id: "tooltip-bottom", children: [
                      "From the state of ",
                      u.address?.state
                    ] }),
                    children: /* @__PURE__ */ s.jsxs("div", { className: "badge bg-articles-secondary border text-dark me-1 mb-1", children: [
                      /* @__PURE__ */ s.jsx("i", { className: "fad fa-map-pin me-1" }),
                      u.address?.state
                    ] })
                  }
                ),
                u.verified?.status !== "Verified" && /* @__PURE__ */ s.jsx(
                  se,
                  {
                    placement: "bottom",
                    overlay: /* @__PURE__ */ s.jsx(J, { id: "tooltip-bottom", children: "User is not verified" }),
                    children: /* @__PURE__ */ s.jsxs("div", { className: "badge bg-danger shadow-articles me-1 mb-1", children: [
                      /* @__PURE__ */ s.jsx("i", { className: "fad fa-robot me-1" }),
                      "Unverified"
                    ] })
                  }
                ),
                u.verified?.status == "Verified" && /* @__PURE__ */ s.jsx(
                  se,
                  {
                    placement: "bottom",
                    overlay: /* @__PURE__ */ s.jsxs(
                      J,
                      {
                        id: "tooltip-bottom",
                        className: "",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { children: [
                            "Verified by ",
                            u.verified?.verified_methods?.length,
                            " method",
                            u.verified?.verified_methods?.length > 1 && "s"
                          ] }),
                          /* @__PURE__ */ s.jsx("hr", {}),
                          /* @__PURE__ */ s.jsx("div", { className: "pb-2", children: u.verified?.verified_methods?.map((x, F) => Object.keys(x)?.length > 0 ? /* @__PURE__ */ s.jsx(
                            "div",
                            {
                              className: "object",
                              children: x?.method_name
                            },
                            F
                          ) : /* @__PURE__ */ s.jsx(
                            "div",
                            {
                              className: "single",
                              children: x
                            },
                            F
                          )) })
                        ]
                      }
                    ),
                    children: /* @__PURE__ */ s.jsxs("div", { className: "badge bg-articles-secondary border text-dark me-1 mb-1", children: [
                      /* @__PURE__ */ s.jsx("i", { className: "fad fa-star me-1" }),
                      u.verified?.status
                    ] })
                  }
                ),
                u.political?.party_id && /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx(
                  se,
                  {
                    placement: "bottom",
                    overlay: /* @__PURE__ */ s.jsx(J, { id: "tooltip-bottom", children: /* @__PURE__ */ s.jsx("div", { children: "Users political party" }) }),
                    children: /* @__PURE__ */ s.jsx(
                      Xe,
                      {
                        href: (
                          // `${ROUTES.RESOURCES_POLITICAL_PARTIES}/${(populated_user || userData)?.political?.party_id}`
                          `https://articles.media/politics/parties/${(t || u)?.political?.party_id}`
                        ),
                        children: /* @__PURE__ */ s.jsx("div", { className: "badge bg-articles-secondary border shadow-articles text-dark text-capitalize me-1", children: /* @__PURE__ */ s.jsxs("div", { className: "", children: [
                          (t || u)?.political?.party_id == "62a830440593acbd4061c48c" ? /* @__PURE__ */ s.jsx("i", { className: "fad fa-unlink unaffiliated-icon fa-lg me-0" }) : /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              width: "14px",
                              height: "14px",
                              style: {
                                objectFit: "contain",
                                padding: "0px"
                              },
                              loading: "lazy",
                              src: `${process.env.NEXT_PUBLIC_CDN}` + W?.find((x) => x._id == u?.political?.party_id)?.logo,
                              alt: ""
                            }
                          ),
                          /* @__PURE__ */ s.jsx("span", { className: "ms-1", children: W?.find((x) => x._id == u.political?.party_id)?.name })
                        ] }) })
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ s.jsx("hr", {}),
                /* @__PURE__ */ s.jsx("div", { className: "small", children: u?._id == "5e90cc96579a17440c5d7d52" && /* @__PURE__ */ s.jsx("span", { children: "Founder of Articles Media, thank you for using the site, feel free to message me with any questions, concerns or anything else." }) })
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("hr", {}),
            B && /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("div", { className: "d-flex align-items-center justify-content-between", children: /* @__PURE__ */ s.jsx("div", { className: "small", children: "Admin Mode Toolbar" }) }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsxs("div", { className: "d-flex mb-2", children: [
                  /* @__PURE__ */ s.jsx(
                    R,
                    {
                      small: !0,
                      variant: "warning",
                      className: "",
                      onClick: () => {
                        loadAdminUserData();
                      },
                      children: /* @__PURE__ */ s.jsx("i", { className: "fad fa-redo me-0" })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    R,
                    {
                      active: B?.edit,
                      small: !0,
                      className: "",
                      onClick: () => {
                        le({
                          ...B,
                          edit: !B?.edit
                        });
                      },
                      children: "Edit Mode"
                    }
                  ),
                  B?.edit && /* @__PURE__ */ s.jsx(
                    R,
                    {
                      small: !0,
                      variant: "success",
                      className: "me-0",
                      onClick: () => {
                        rt();
                      },
                      children: /* @__PURE__ */ s.jsx("i", { className: "fad fa-save me-0" })
                    }
                  )
                ] }),
                [
                  "User Details",
                  "Verification",
                  "Moderation",
                  "Bans",
                  "Stripe",
                  "Layouts",
                  "Reset Password",
                  "Sessions"
                ].map(
                  (x) => /* @__PURE__ */ s.jsx(
                    R,
                    {
                      active: x == B?.tab,
                      small: !0,
                      onClick: () => {
                        le({
                          ...B,
                          tab: x
                        });
                      },
                      children: x
                    },
                    x
                  )
                )
              ] }),
              /* @__PURE__ */ s.jsx("hr", {})
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "pe-3 pb-3", children: [
              /* @__PURE__ */ s.jsx("div", { className: "mb-2 me-2", children: [
                {
                  name: "Proposals Stance",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: /* @__PURE__ */ s.jsxs("div", { className: "small", children: [
                    /* @__PURE__ */ s.jsx("span", { children: ce?.fundamental?.filter((x) => ce?.user_sentiments?.find((F) => F.proposal_id == x._id) ? x : null).length }),
                    /* @__PURE__ */ s.jsx("span", { className: "px-1", children: "/" }),
                    /* @__PURE__ */ s.jsx("span", { children: ce?.fundamental?.length })
                  ] }) })
                },
                {
                  name: "Proposal Sentiments",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: u?.populated_public_proposals_stance?.user_sentiments_count || 0 })
                },
                {
                  name: "Proposal Comments",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: u?.populated_public_proposals_stance?.user_comments_count || 0 })
                },
                {
                  name: "Proposal Submissions",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: P?.length || 0 })
                  // TODO - Make conditional
                },
                {
                  name: "News Comments",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: u?.populated_news_comments_count || 0 })
                },
                {
                  name: "News Submissions",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: O?.length || 0 })
                  // TODO - Make conditional
                },
                {
                  name: "Verifications",
                  // dev: true,
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: u.verified?.verified_methods?.length || 0 })
                  // TODO - Make conditional
                },
                {
                  name: "Layouts",
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: b?.length || 0 })
                },
                {
                  name: "Donations",
                  badge: /* @__PURE__ */ s.jsxs("span", { children: [
                    /* @__PURE__ */ s.jsx("span", { className: "badge bg-primary ms-1", children: $?.populated_public_donations?.count || 0 }),
                    /* @__PURE__ */ s.jsxs("span", { className: "badge bg-black", children: [
                      "$",
                      Es(($?.populated_public_donations.total / 100).toFixed(2))
                    ] })
                  ] })
                },
                {
                  name: "Orders",
                  badge: /* @__PURE__ */ s.jsxs("span", { children: [
                    /* @__PURE__ */ s.jsx("span", { className: "badge bg-primary ms-1", children: "0" }),
                    /* @__PURE__ */ s.jsx("span", { className: "badge bg-black", children: "0" })
                  ] })
                },
                {
                  name: "Achievements",
                  dev: !0,
                  badge: /* @__PURE__ */ s.jsx("span", { className: "badge bg-black ms-1", children: "0" })
                  // TODO - Make conditional
                }
              ].map((x) => (R, x.name == _, x.name, x.badge, x.name, x.dev ? /* @__PURE__ */ s.jsx(
                ot,
                {
                  inline: !0,
                  children: /* @__PURE__ */ s.jsxs(
                    R,
                    {
                      onClick: () => A(x.name),
                      active: x.name == _,
                      small: !0,
                      children: [
                        x.name,
                        x.badge
                      ]
                    },
                    x.name
                  )
                },
                x.name
              ) : /* @__PURE__ */ s.jsxs(
                R,
                {
                  onClick: () => A(x.name),
                  active: x.name == _,
                  small: !0,
                  children: [
                    x.name,
                    x.badge
                  ]
                },
                x.name
              ))) }),
              _ == "Proposal Sentiments" && /* @__PURE__ */ s.jsx(
                Ss,
                {
                  activeLayoutProposalSentiments: ye
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ s.jsxs(ie.Footer, { className: "justify-content-between", children: [
            k?._id == "5e90cc96579a17440c5d7d52" ? /* @__PURE__ */ s.jsxs("span", { children: [
              /* @__PURE__ */ s.jsxs(
                ot,
                {
                  inline: !0,
                  className: "me-2",
                  children: [
                    /* @__PURE__ */ s.jsxs(
                      R,
                      {
                        onClick: () => {
                          le(B ? !1 : {
                            tab: ""
                          });
                        },
                        small: !0,
                        active: B,
                        variant: "",
                        className: "me-1",
                        children: [
                          /* @__PURE__ */ s.jsx("i", { className: "fad fa-pen" }),
                          /* @__PURE__ */ s.jsx("span", { children: "Admin Mode" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      R,
                      {
                        onClick: () => {
                          xe(), Z();
                        },
                        small: !0,
                        variant: "warning",
                        className: "",
                        children: /* @__PURE__ */ s.jsx("i", { className: "fad fa-redo me-0" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx("span", { style: { fontSize: "0.8rem" }, children: u?._id })
            ] }) : /* @__PURE__ */ s.jsx("span", {}),
            /* @__PURE__ */ s.jsx("div", { className: "justify-content-", children: /* @__PURE__ */ s.jsx(R, { variant: "articles", onClick: T, children: "Close" }) })
          ] })
        ]
      }
    )
  ] });
}
function As({
  setChecked: e,
  checked: t,
  readOnly: n
}) {
  return /* @__PURE__ */ s.jsxs("label", { className: `articles-switch mb-0 ${t && "checked"}`, children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "checkbox",
        readOnly: !!n,
        checked: t,
        onChange: () => {
        }
      }
    ),
    /* @__PURE__ */ s.jsx(
      "span",
      {
        onClick: (r) => {
          if (e) {
            e(!t);
            return;
          } else {
            r.preventDefault();
            return;
          }
        },
        className: "slider"
      }
    )
  ] });
}
const Rs = async (e) => {
  if (process.env.NODE_ENV === "development")
    try {
      return (await Ge.get("http://localhost:3001/api/community/games/scoreboard", {
        params: {
          game: e.game
        }
      })).data;
    } catch {
    }
  return Ge.get(e.url, {
    params: {
      game: e.game
    }
  }).then((t) => t.data);
}, $s = {
  dedupingInterval: 1e3 * 60 * 30,
  refreshInterval: 0,
  revalidateOnFocus: !1,
  revalidateIfStale: !1,
  shouldRetryOnError: !1
  // fallbackData: []
}, Fs = (e) => {
  const { data: t, error: n, isLoading: r, isValidating: a, mutate: i } = pt(
    e?.game ? {
      // url: "/api/community/games/scoreboard",
      url: "https://articles.media/api/community/games/scoreboard",
      game: e.game
    } : null,
    Rs,
    $s
  );
  return {
    data: t,
    error: n,
    isLoading: r,
    isValidating: a,
    mutate: i
  };
};
function Vs({ game: e, reloadScoreboard: t, setReloadScoreboard: n }) {
  const [r, a] = S(!1), [i, o] = S(!1), {
    data: c,
    mutate: l
  } = Fs({
    game: e
  });
  return Y(() => {
  }, []), Y(() => {
    t && (n(!1), l());
  }, [t]), /* @__PURE__ */ s.jsxs("div", { className: "scoreboard", children: [
    /* @__PURE__ */ s.jsxs(ie, { show: r, size: "md", className: "articles-modal", centered: !0, onHide: () => a(!1), children: [
      /* @__PURE__ */ s.jsx(ie.Header, { children: /* @__PURE__ */ s.jsx(ie.Title, { children: "Scoreboard Settings" }) }),
      /* @__PURE__ */ s.jsx(ie.Body, { children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "d-flex justify-content-between align-items-center",
          onClick: () => o(!i),
          children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("i", { className: "fas fa-trophy-alt" }),
              /* @__PURE__ */ s.jsx("span", { children: "Join Scoreboard?" })
            ] }),
            /* @__PURE__ */ s.jsx(
              As,
              {
                checked: i
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ s.jsx(ie.Footer, { className: "justify-content-between", children: /* @__PURE__ */ s.jsx(
        R,
        {
          variant: "articles",
          onClick: () => {
            a(!1);
          },
          children: "Close"
        }
      ) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "card card-articles card-sm mb-3 mb-lg-0", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "card-header d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ s.jsxs("span", { children: [
          e,
          " Scoreboard"
        ] }),
        /* @__PURE__ */ s.jsx(
          R,
          {
            onClick: () => {
              l();
            },
            small: !0,
            children: /* @__PURE__ */ s.jsx("i", { className: "fad fa-redo me-0" })
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "card-body p-0", children: [
        (c?.length || 0) == 0 && /* @__PURE__ */ s.jsx("div", { className: "small p-2", children: "No scores yet" }),
        c?.map(
          (f, d) => /* @__PURE__ */ s.jsxs("div", { className: "result d-flex flex-column justify-content-between border-bottom p-2", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "d-flex justify-content-between lh-sm", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "d-flex", children: [
                /* @__PURE__ */ s.jsx("h5", { className: "mb-0 me-3", children: d + 1 }),
                /* @__PURE__ */ s.jsx("div", { className: "lh-sm", children: /* @__PURE__ */ s.jsx(
                  Ws,
                  {
                    populated_user: f.populated_user,
                    user_id: f.user_id
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx("h5", { className: "mb-0", children: f.score || f.total }) })
            ] }),
            f.last_play && f.public_last_play && /* @__PURE__ */ s.jsxs("small", { className: "mt-1", style: { fontSize: "0.75rem" }, children: [
              "Played: ",
              format(new Date(f.last_play), "MM/d/yy hh:mmaa")
            ] })
          ] }, f._id)
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "card-footer d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ s.jsx("div", { className: "small", children: "Play to get on the board!" }),
        /* @__PURE__ */ s.jsx(
          R,
          {
            small: !0,
            onClick: () => {
              a(!0);
            },
            children: /* @__PURE__ */ s.jsx("i", { className: "fad fa-cog me-0" })
          }
        )
      ] })
    ] })
  ] });
}
export {
  Vs as default
};
