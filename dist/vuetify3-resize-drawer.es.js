import { Fragment as Bt, reactive as Gt, computed as y, watchEffect as Et, toRefs as jt, warn as _t, ref as _, unref as A, provide as Me, inject as J, shallowRef as j, defineComponent as kt, getCurrentInstance as Ht, onDeactivated as Yt, onActivated as Ut, onBeforeUnmount as Oe, watch as U, onScopeDispose as qt, effectScope as Xt, toRaw as Kt, isRef as he, onMounted as Ae, readonly as Zt, createVNode as M, mergeProps as Ie, toRef as _e, Text as Jt, nextTick as Qt, onBeforeMount as en, Transition as tn, mergeDefaults as nn, useSlots as on, onUnmounted as an, openBlock as Se, createBlock as Qe, withCtx as rn, createElementBlock as et, normalizeClass as tt, normalizeStyle as nt, renderSlot as Ce, createCommentVNode as De } from "vue";
import { useTheme as ln, useDisplay as sn } from "vuetify";
/**
 * @name vuetify3-resize-drawer
 * @version 2.1.0
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @repository https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @license MIT License
 */
function N(e, n) {
  return (t) => Object.keys(e).reduce((o, a) => {
    const v = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return o[a] = t && a in t ? { ...v, default: t[a] } : v, n && !o[a].source && (o[a].source = n), o;
  }, {});
}
const Wt = N({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function ot(e, n, t) {
  (function(o, a) {
    if (a.has(o))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  })(e, n), n.set(e, t);
}
function un(e, n, t) {
  return function(o, a, v) {
    if (a.set)
      a.set.call(o, v);
    else {
      if (!a.writable)
        throw new TypeError("attempted to set read only private field");
      a.value = v;
    }
  }(e, At(e, n, "set"), t), t;
}
function Z(e, n) {
  return function(t, o) {
    return o.get ? o.get.call(t) : o.value;
  }(e, At(e, n, "get"));
}
function At(e, n, t) {
  if (!n.has(e))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return n.get(e);
}
function le(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function at(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Re(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function rt(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function se() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const o = {};
  for (const a in e)
    o[a] = e[a];
  for (const a in n) {
    const v = e[a], m = n[a];
    at(v) && at(m) ? o[a] = se(v, m, t) : Array.isArray(v) && Array.isArray(m) && t ? o[a] = t(v, m) : o[a] = m;
  }
  return o;
}
function $t(e) {
  return e.map((n) => n.type === Bt ? $t(n.children) : n).flat();
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Q.cache.has(e))
    return Q.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Q.cache.set(e, n), n;
}
Q.cache = /* @__PURE__ */ new Map();
var Be = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap();
class cn {
  constructor(n) {
    ot(this, Be, { writable: !0, value: [] }), ot(this, oe, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    Z(this, Be)[Z(this, oe)] = n, un(this, oe, (Z(this, oe) + 1) % this.size);
  }
  values() {
    return Z(this, Be).slice(Z(this, oe)).concat(Z(this, Be).slice(0, Z(this, oe)));
  }
}
function xt(e) {
  const n = Gt({}), t = y(e);
  return Et(() => {
    for (const o in t.value)
      n[o] = t.value[o];
  }, { flush: "sync" }), jt(n);
}
const ae = 2.4, it = 0.2126729, lt = 0.7151522, st = 0.072175, dn = 0.55, vn = 0.58, hn = 0.57, mn = 0.62, Ee = 0.03, ut = 1.45, pn = 5e-4, gn = 1.25, fn = 1.25, ct = 0.078, dt = 12.82051282051282, ke = 0.06, vt = 1e-3;
function ht(e, n) {
  const t = (e.r / 255) ** ae, o = (e.g / 255) ** ae, a = (e.b / 255) ** ae, v = (n.r / 255) ** ae, m = (n.g / 255) ** ae, u = (n.b / 255) ** ae;
  let s, g = t * it + o * lt + a * st, l = v * it + m * lt + u * st;
  if (g <= Ee && (g += (Ee - g) ** ut), l <= Ee && (l += (Ee - l) ** ut), Math.abs(l - g) < pn)
    return 0;
  if (l > g) {
    const f = (l ** dn - g ** vn) * gn;
    s = f < vt ? 0 : f < ct ? f - f * dt * ke : f - ke;
  } else {
    const f = (l ** mn - g ** hn) * fn;
    s = f > -vt ? 0 : f > -ct ? f - f * dt * ke : f + ke;
  }
  return 100 * s;
}
function $e(e) {
  _t(`Vuetify: ${e}`);
}
function mt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const pt = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, yn = { rgb: (e, n, t, o) => ({ r: e, g: n, b: t, a: o }), rgba: (e, n, t, o) => ({ r: e, g: n, b: t, a: o }), hsl: (e, n, t, o) => gt({ h: e, s: n, l: t, a: o }), hsla: (e, n, t, o) => gt({ h: e, s: n, l: t, a: o }), hsv: (e, n, t, o) => me({ h: e, s: n, v: t, a: o }), hsva: (e, n, t, o) => me({ h: e, s: n, v: t, a: o }) };
function We(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && $e(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && pt.test(e)) {
    const { groups: n } = e.match(pt), { fn: t, values: o } = n, a = o.split(/,\s*/).map((v) => v.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(v) / 100 : parseFloat(v));
    return yn[t](...a);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((o) => o + o).join("") : [6, 8].includes(n.length) || $e(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && $e(`'${e}' is not a valid hex(a) color`), function(o) {
      o = function(s) {
        return s.startsWith("#") && (s = s.slice(1)), s = s.replace(/([^0-9a-f])/gi, "F"), (s.length === 3 || s.length === 4) && (s = s.split("").map((g) => g + g).join("")), s.length !== 6 && (s = rt(rt(s, 6), 8, "F")), s;
      }(o);
      let [a, v, m, u] = function(s) {
        let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const l = [];
        let f = 0;
        for (; f < s.length; )
          l.push(s.substr(f, g)), f += g;
        return l;
      }(o, 2).map((s) => parseInt(s, 16));
      return u = u === void 0 ? u : u / 255, { r: a, g: v, b: m, a: u };
    }(n);
  }
  if (typeof e == "object") {
    if (Re(e, ["r", "g", "b"]))
      return e;
    if (Re(e, ["h", "s", "l"]))
      return me(Mt(e));
    if (Re(e, ["h", "s", "v"]))
      return me(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function me(e) {
  const { h: n, s: t, v: o, a } = e, v = (u) => {
    const s = (u + n / 60) % 6;
    return o - o * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, m = [v(5), v(3), v(1)].map((u) => Math.round(255 * u));
  return { r: m[0], g: m[1], b: m[2], a };
}
function gt(e) {
  return me(Mt(e));
}
function Mt(e) {
  const { h: n, s: t, l: o, a } = e, v = o + t * Math.min(o, 1 - o);
  return { h: n, s: v === 0 ? 0 : 2 - 2 * o / v, v, a };
}
const ze = Symbol.for("vuetify:defaults");
function Ue() {
  const e = J(ze);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function wn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ue();
  const o = O("useDefaults");
  if (n = n ?? o.type.name ?? o.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = y(() => {
    var u;
    return (u = t.value) == null ? void 0 : u[e._as ?? n];
  }), v = new Proxy(e, { get(u, s) {
    var l, f, k, S;
    const g = Reflect.get(u, s);
    return s === "class" || s === "style" ? [(l = a.value) == null ? void 0 : l[s], g].filter((B) => B != null) : typeof s != "string" || function(B, z) {
      var V, R;
      return ((V = B.props) == null ? void 0 : V[z]) !== void 0 || ((R = B.props) == null ? void 0 : R[Q(z)]) !== void 0;
    }(o.vnode, s) ? g : ((f = a.value) == null ? void 0 : f[s]) ?? ((S = (k = t.value) == null ? void 0 : k.global) == null ? void 0 : S[s]) ?? g;
  } }), m = j();
  return Et(() => {
    if (a.value) {
      const u = Object.entries(a.value).filter((s) => {
        let [g] = s;
        return g.startsWith(g[0].toUpperCase());
      });
      m.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      m.value = void 0;
  }), { props: v, provideSubDefaults: function() {
    const u = function(s) {
      let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O("injectSelf");
      const { provides: l } = g;
      if (l && s in l)
        return l[s];
    }(ze, o);
    Me(ze, y(() => m.value ? se((u == null ? void 0 : u.value) ?? {}, m.value) : u == null ? void 0 : u.value));
  } };
}
function Le(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return $e("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return function(o, a, v) {
        const m = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
        for (const s in o)
          a.some((g) => g instanceof RegExp ? g.test(s) : g === s) && !(v != null && v.some((g) => g === s)) ? m[s] = o[s] : u[s] = o[s];
        return [m, u];
      }(t, n, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, o) {
      const a = Ue();
      if (!a.value)
        return e._setup(t, o);
      const { props: v, provideSubDefaults: m } = wn(t, t._as ?? e.name, a), u = e._setup(v, o);
      return m(), u;
    };
  }
  return e;
}
function qe() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Le : kt)(n);
}
function O(e, n) {
  const t = Ht();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function He() {
  const e = O(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Q((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let It = 0, xe = /* @__PURE__ */ new WeakMap();
function zt() {
  const e = O("getUid");
  if (xe.has(e))
    return xe.get(e);
  {
    const n = It++;
    return xe.set(e, n), n;
  }
}
function Lt(e) {
  O("useRender").render = e;
}
zt.reset = () => {
  It = 0, xe = /* @__PURE__ */ new WeakMap();
};
const Fn = Symbol.for("vuetify:layout"), bn = Symbol.for("vuetify:layout-item"), Sn = N({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Cn(e, n) {
  let t;
  function o() {
    t = Xt(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), o();
    }) : n());
  }
  U(e, (a) => {
    a && !t ? o() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), qt(() => {
    t == null || t.stop();
  });
}
const Dn = Symbol.for("vuetify:locale"), ft = Symbol.for("vuetify:theme"), Nt = N({ theme: String }, "theme");
function Pt(e) {
  O("provideTheme");
  const n = J(ft, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? (n == null ? void 0 : n.name.value)), o = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, themeClasses: o };
  return Me(ft, a), a;
}
const Vt = N({ tag: { type: String, default: "div" } }, "tag"), Bn = N({ border: [Boolean, Number, String] }, "border");
function Tt(e) {
  return xt(() => {
    const n = [], t = {};
    if (e.value.background)
      if (mt(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text) {
          const o = function(a) {
            const v = Math.abs(ht(We(0), We(a)));
            return Math.abs(ht(We(16777215), We(a))) > Math.min(v, 50) ? "#fff" : "#000";
          }(t.backgroundColor);
          t.color = o, t.caretColor = o;
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (mt(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function yt(e, n) {
  const t = y(() => ({ background: he(e) ? e.value : n ? e[n] : null })), { colorClasses: o, colorStyles: a } = Tt(t);
  return { backgroundColorClasses: o, backgroundColorStyles: a };
}
const En = N({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), kn = N({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded"), Ot = [String, Function, Object, Array], Wn = Symbol.for("vuetify:icons"), Ne = N({ icon: { type: Ot }, tag: { type: String, required: !0 } }, "icon"), wt = qe()({ name: "VComponentIcon", props: Ne(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const o = e.icon;
    return M(e.tag, null, { default: () => {
      var a;
      return [e.icon ? M(o, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), An = Le({ name: "VSvgIcon", inheritAttrs: !1, props: Ne(), setup(e, n) {
  let { attrs: t } = n;
  return () => M(e.tag, Ie(t, { style: null }), { default: () => [M("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((o) => Array.isArray(o) ? M("path", { d: o[0], "fill-opacity": o[1] }, null) : M("path", { d: o }, null)) : M("path", { d: e.icon }, null)])] });
} });
Le({ name: "VLigatureIcon", props: Ne(), setup: (e) => () => M(e.tag, null, { default: () => [e.icon] }) }), Le({ name: "VClassIcon", props: Ne(), setup: (e) => () => M(e.tag, { class: e.icon }, null) });
const $n = ["x-small", "small", "default", "large", "x-large"], xn = N({ size: { type: [String, Number], default: "default" } }, "size"), Mn = N({ color: String, start: Boolean, end: Boolean, icon: Ot, ...Wt(), ...xn(), ...Vt({ tag: "i" }), ...Nt() }, "VIcon"), In = qe()({ name: "VIcon", props: Mn(), setup(e, n) {
  let { attrs: t, slots: o } = n;
  const a = _(), { themeClasses: v } = Pt(e), { iconData: m } = ((l) => {
    const f = J(Wn);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var V;
      const k = A(l);
      if (!k)
        return { component: wt };
      let S = k;
      if (typeof S == "string" && (S = S.trim(), S.startsWith("$") && (S = (V = f.aliases) == null ? void 0 : V[S.slice(1)])), !S)
        throw new Error(`Could not find aliased icon "${k}"`);
      if (Array.isArray(S))
        return { component: An, icon: S };
      if (typeof S != "string")
        return { component: wt, icon: S };
      const B = Object.keys(f.sets).find((R) => typeof S == "string" && S.startsWith(`${R}:`)), z = B ? S.slice(B.length + 1) : S;
      return { component: f.sets[B ?? f.defaultSet].component, icon: z };
    }) };
  })(y(() => a.value || e.icon)), { sizeClasses: u } = function(l) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
    return xt(() => {
      let k, S;
      var B, z;
      return B = $n, z = l.size, B.includes(z) ? k = `${f}--size-${l.size}` : l.size && (S = { width: le(l.size), height: le(l.size) }), { sizeClasses: k, sizeStyles: S };
    });
  }(e), { textColorClasses: s, textColorStyles: g } = function(l, f) {
    const k = y(() => ({ text: he(l) ? l.value : f ? l[f] : null })), { colorClasses: S, colorStyles: B } = Tt(k);
    return { textColorClasses: S, textColorStyles: B };
  }(_e(e, "color"));
  return Lt(() => {
    var f, k;
    const l = (f = o.default) == null ? void 0 : f.call(o);
    return l && (a.value = (k = $t(l).filter((S) => S.type === Jt && S.children && typeof S.children == "string")[0]) == null ? void 0 : k.children), M(m.value.component, { tag: e.tag, icon: m.value.icon, class: ["v-icon", "notranslate", v.value, u.value, s.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [u.value ? void 0 : { fontSize: le(e.size), height: le(e.size), width: le(e.size) }, g.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [l] });
  }), {};
} }), zn = Symbol.for("vuetify:display"), Ln = 100, Nn = 20;
function Ft(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function bt(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const o = Ft(n), a = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (a - o) * Math.abs(a), t === e.length - 1 && (n *= 0.5);
  }
  return 1e3 * Ft(n);
}
function Pn() {
  const e = {};
  return { addMovement: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      (e[t.identifier] ?? (e[t.identifier] = new cn(Nn))).push([n.timeStamp, t]);
    });
  }, endTouch: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      delete e[t.identifier];
    });
  }, getVelocity: function(n) {
    var m;
    const t = (m = e[n]) == null ? void 0 : m.values().reverse();
    if (!t)
      throw new Error(`No samples for touch id ${n}`);
    const o = t[0], a = [], v = [];
    for (const u of t) {
      if (o[0] - u[0] > Ln)
        break;
      a.push({ t: u[0], d: u[1].clientX }), v.push({ t: u[0], d: u[1].clientY });
    }
    return { x: bt(a), y: bt(v), get direction() {
      const { x: u, y: s } = this, [g, l] = [Math.abs(u), Math.abs(s)];
      return g > l && u >= 0 ? "right" : g > l && u <= 0 ? "left" : l > g && s >= 0 ? "down" : l > g && s <= 0 ? "up" : function() {
        throw new Error();
      }();
    } };
  } };
}
function re() {
  throw new Error();
}
const Vn = ["start", "end", "left", "right", "top", "bottom"], Tn = N({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => Vn.includes(e) }, sticky: Boolean, ...Bn(), ...Wt(), ...En(), ...Sn(), ...kn(), ...Vt({ tag: "nav" }), ...Nt() }, "VNavigationDrawer"), On = qe()({ name: "VNavigationDrawer", props: Tn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var de, ve;
  let { attrs: t, emit: o, slots: a } = n;
  const { isRtl: v } = function() {
    const d = J(Dn);
    if (!d)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: d.isRtl, rtlClasses: d.rtlClasses };
  }(), { themeClasses: m } = Pt(e), { borderClasses: u } = function(d) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
    return { borderClasses: y(() => {
      const w = he(d) ? d.value : d.border, r = [];
      if (w === !0 || w === "")
        r.push(`${h}--border`);
      else if (typeof w == "string" || w === 0)
        for (const c of String(w).split(" "))
          r.push(`border-${c}`);
      return r;
    }) };
  }(e), { backgroundColorClasses: s, backgroundColorStyles: g } = yt(_e(e, "color")), { elevationClasses: l } = function(d) {
    return { elevationClasses: y(() => {
      const h = he(d) ? d.value : d.elevation, w = [];
      return h == null || w.push(`elevation-${h}`), w;
    }) };
  }(e), { mobile: f } = function() {
    const d = J(zn);
    if (!d)
      throw new Error("Could not find Vuetify display injection");
    return d;
  }(), { roundedClasses: k } = function(d) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : He();
    return { roundedClasses: y(() => {
      const w = he(d) ? d.value : d.rounded, r = [];
      if (w === !0 || w === "")
        r.push(`${h}--rounded`);
      else if (typeof w == "string" || w === 0)
        for (const c of String(w).split(" "))
          r.push(`rounded-${c}`);
      return r;
    }) };
  }(e), S = (ve = (de = O("useRouter")) == null ? void 0 : de.proxy) == null ? void 0 : ve.$router, B = function(d, h, w) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (b) => b, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (b) => b;
    const i = O("useProxiedModel"), p = _(d[h] !== void 0 ? d[h] : w), D = Q(h), F = y(D !== h ? () => {
      var b, C, I, L;
      return d[h], !(!((b = i.vnode.props) != null && b.hasOwnProperty(h)) && !((C = i.vnode.props) != null && C.hasOwnProperty(D)) || !((I = i.vnode.props) != null && I.hasOwnProperty(`onUpdate:${h}`)) && !((L = i.vnode.props) != null && L.hasOwnProperty(`onUpdate:${D}`)));
    } : () => {
      var b, C;
      return d[h], !(!((b = i.vnode.props) != null && b.hasOwnProperty(h)) || !((C = i.vnode.props) != null && C.hasOwnProperty(`onUpdate:${h}`)));
    });
    Cn(() => !F.value, () => {
      U(() => d[h], (b) => {
        p.value = b;
      });
    });
    const E = y({ get() {
      const b = d[h];
      return r(F.value ? b : p.value);
    }, set(b) {
      const C = c(b), I = Kt(F.value ? d[h] : p.value);
      I !== C && r(I) !== b && (p.value = C, i == null || i.emit(`update:${h}`, C));
    } });
    return Object.defineProperty(E, "externalValue", { get: () => F.value ? d[h] : p.value }), E;
  }(e, "modelValue", null, (d) => !!d), { ssrBootStyles: z } = function() {
    const d = j(!1);
    return Ae(() => {
      window.requestAnimationFrame(() => {
        d.value = !0;
      });
    }), { ssrBootStyles: y(() => d.value ? void 0 : { transition: "none !important" }), isBooted: Zt(d) };
  }(), { scopeId: V } = function() {
    const d = O("useScopeId").vnode.scopeId;
    return { scopeId: d ? { [d]: "" } : void 0 };
  }(), R = _(), q = j(!1), ue = y(() => e.rail && e.expandOnHover && q.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), ee = y(() => function(d, h) {
    return d === "start" ? h ? "right" : "left" : d === "end" ? h ? "left" : "right" : d;
  }(e.location, v.value)), T = y(() => !e.permanent && (f.value || e.temporary)), ce = y(() => e.sticky && !T.value && ee.value !== "bottom");
  e.expandOnHover && e.rail != null && U(q, (d) => o("update:rail", !d)), e.disableResizeWatcher || U(T, (d) => !e.permanent && Qt(() => B.value = !d)), !e.disableRouteWatcher && S && U(S.currentRoute, () => T.value && (B.value = !1)), U(() => e.permanent, (d) => {
    d && (B.value = !0);
  }), en(() => {
    e.modelValue != null || T.value || (B.value = e.permanent || !f.value);
  });
  const { isDragging: X, dragProgress: pe, dragStyles: ge } = function(d) {
    let { isActive: h, isTemporary: w, width: r, touchless: c, position: i } = d;
    Ae(() => {
      window.addEventListener("touchstart", Ke, { passive: !0 }), window.addEventListener("touchmove", Ze, { passive: !1 }), window.addEventListener("touchend", Je, { passive: !0 });
    }), Oe(() => {
      window.removeEventListener("touchstart", Ke), window.removeEventListener("touchmove", Ze), window.removeEventListener("touchend", Je);
    });
    const p = y(() => ["left", "right"].includes(i.value)), { addMovement: D, endTouch: F, getVelocity: E } = Pn();
    let b = !1;
    const C = j(!1), I = j(0), L = j(0);
    let K;
    function Te(W, $) {
      return (i.value === "left" ? W : i.value === "right" ? document.documentElement.clientWidth - W : i.value === "top" ? W : i.value === "bottom" ? document.documentElement.clientHeight - W : re()) - ($ ? r.value : 0);
    }
    function Xe(W) {
      let $ = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const x = i.value === "left" ? (W - L.value) / r.value : i.value === "right" ? (document.documentElement.clientWidth - W - L.value) / r.value : i.value === "top" ? (W - L.value) / r.value : i.value === "bottom" ? (document.documentElement.clientHeight - W - L.value) / r.value : re();
      return $ ? Math.max(0, Math.min(1, x)) : x;
    }
    function Ke(W) {
      if (c.value)
        return;
      const $ = W.changedTouches[0].clientX, x = W.changedTouches[0].clientY, G = i.value === "left" ? $ < 25 : i.value === "right" ? $ > document.documentElement.clientWidth - 25 : i.value === "top" ? x < 25 : i.value === "bottom" ? x > document.documentElement.clientHeight - 25 : re(), Y = h.value && (i.value === "left" ? $ < r.value : i.value === "right" ? $ > document.documentElement.clientWidth - r.value : i.value === "top" ? x < r.value : i.value === "bottom" ? x > document.documentElement.clientHeight - r.value : re());
      (G || Y || h.value && w.value) && (b = !0, K = [$, x], L.value = Te(p.value ? $ : x, h.value), I.value = Xe(p.value ? $ : x), F(W), D(W));
    }
    function Ze(W) {
      const $ = W.changedTouches[0].clientX, x = W.changedTouches[0].clientY;
      if (b) {
        if (!W.cancelable)
          return void (b = !1);
        const Y = Math.abs($ - K[0]), be = Math.abs(x - K[1]);
        (p.value ? Y > be && Y > 3 : be > Y && be > 3) ? (C.value = !0, b = !1) : (p.value ? be : Y) > 3 && (b = !1);
      }
      if (!C.value)
        return;
      W.preventDefault(), D(W);
      const G = Xe(p.value ? $ : x, !1);
      I.value = Math.max(0, Math.min(1, G)), G > 1 ? L.value = Te(p.value ? $ : x, !0) : G < 0 && (L.value = Te(p.value ? $ : x, !1));
    }
    function Je(W) {
      if (b = !1, !C.value)
        return;
      D(W), C.value = !1;
      const $ = E(W.changedTouches[0].identifier), x = Math.abs($.x), G = Math.abs($.y), Y = p.value ? x > G && x > 400 : G > x && G > 3;
      h.value = Y ? $.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || re()) : I.value > 0.5;
    }
    const Rt = y(() => C.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${I.value * r.value}px))` : i.value === "right" ? `translateX(calc(100% - ${I.value * r.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${I.value * r.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${I.value * r.value}px))` : re(), transition: "none" } : void 0);
    return { isDragging: C, dragProgress: I, dragStyles: Rt };
  }({ isActive: B, isTemporary: T, width: ue, touchless: _e(e, "touchless"), position: ee }), fe = y(() => {
    const d = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : ue.value;
    return X.value ? d * pe.value : d;
  }), { layoutItemStyles: te, layoutItemScrimStyles: ne } = function(d) {
    const h = J(Fn);
    if (!h)
      throw new Error("[Vuetify] Could not find injected layout");
    const w = d.id ?? `layout-item-${zt()}`, r = O("useLayoutItem");
    Me(bn, { id: w });
    const c = j(!1);
    Yt(() => c.value = !0), Ut(() => c.value = !1);
    const { layoutItemStyles: i, layoutItemScrimStyles: p } = h.register(r, { ...d, active: y(() => !c.value && d.active.value), id: w });
    return Oe(() => h.unregister(w)), { layoutItemStyles: i, layoutRect: h.layoutRect, layoutItemScrimStyles: p };
  }({ id: e.name, order: y(() => parseInt(e.order, 10)), position: ee, layoutSize: fe, elementSize: ue, active: y(() => B.value || X.value), disableTransitions: y(() => X.value), absolute: y(() => e.absolute || ce.value && typeof H.value != "string") }), { isStuck: H, stickyStyles: ye } = function(d) {
    let { rootEl: h, isSticky: w, layoutItemStyles: r } = d;
    const c = j(!1), i = j(0), p = y(() => {
      const E = typeof c.value == "boolean" ? "top" : c.value;
      return [w.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, c.value ? { [E]: le(i.value) } : { top: r.value.top }];
    });
    Ae(() => {
      U(w, (E) => {
        E ? window.addEventListener("scroll", F, { passive: !0 }) : window.removeEventListener("scroll", F);
      }, { immediate: !0 });
    }), Oe(() => {
      window.removeEventListener("scroll", F);
    });
    let D = 0;
    function F() {
      const E = D > window.scrollY ? "up" : "down", b = h.value.getBoundingClientRect(), C = parseFloat(r.value.top ?? 0), I = window.scrollY - Math.max(0, i.value - C), L = b.height + Math.max(i.value, C) - window.scrollY - window.innerHeight, K = parseFloat(getComputedStyle(h.value).getPropertyValue("--v-body-scroll-y")) || 0;
      b.height < window.innerHeight - C ? (c.value = "top", i.value = C) : E === "up" && c.value === "bottom" || E === "down" && c.value === "top" ? (i.value = window.scrollY + b.top - K, c.value = !0) : E === "down" && L <= 0 ? (i.value = 0, c.value = "bottom") : E === "up" && I <= 0 && (K ? c.value !== "top" && (i.value = -I + K + C, c.value = "top") : (i.value = b.top + I, c.value = "top")), D = window.scrollY;
    }
    return { isStuck: c, stickyStyles: p };
  }({ rootEl: R, isSticky: ce, layoutItemStyles: te }), we = yt(y(() => typeof e.scrim == "string" ? e.scrim : null)), Pe = y(() => ({ ...X.value ? { opacity: 0.2 * pe.value, transition: "none" } : void 0, ...ne.value }));
  function Fe() {
    q.value = !0;
  }
  function Ve() {
    q.value = !1;
  }
  return function(d, h) {
    const w = Ue(), r = _(d), c = y(() => {
      if (A(h == null ? void 0 : h.disabled))
        return w.value;
      const i = A(h == null ? void 0 : h.scoped), p = A(h == null ? void 0 : h.reset), D = A(h == null ? void 0 : h.root);
      if (r.value == null && !(i || p || D))
        return w.value;
      let F = se(r.value, { prev: w.value });
      if (i)
        return F;
      if (p || D) {
        const E = Number(p || 1 / 0);
        for (let b = 0; b <= E && F && "prev" in F; b++)
          F = F.prev;
        return F && typeof D == "string" && D in F && (F = se(se(F, { prev: F }), F[D])), F;
      }
      return F.prev ? se(F.prev, F) : F;
    });
    Me(ze, c);
  }({ VList: { bgColor: "transparent" } }), Lt(() => {
    const d = a.image || e.image;
    return M(Bt, null, [M(e.tag, Ie({ ref: R, onMouseenter: Fe, onMouseleave: Ve, class: ["v-navigation-drawer", `v-navigation-drawer--${ee.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": q.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--active": B.value, "v-navigation-drawer--sticky": ce.value }, m.value, s.value, u.value, l.value, k.value, e.class], style: [g.value, te.value, ge.value, z.value, ye.value, e.style] }, V, t), { default: () => {
      var h, w, r, c;
      return [d && M("div", { key: "image", class: "v-navigation-drawer__img" }, [a.image ? (h = a.image) == null ? void 0 : h.call(a, { image: e.image }) : M("img", { src: e.image, alt: "" }, null)]), a.prepend && M("div", { class: "v-navigation-drawer__prepend" }, [(w = a.prepend) == null ? void 0 : w.call(a)]), M("div", { class: "v-navigation-drawer__content" }, [(r = a.default) == null ? void 0 : r.call(a)]), a.append && M("div", { class: "v-navigation-drawer__append" }, [(c = a.append) == null ? void 0 : c.call(a)])];
    } }), M(tn, { name: "fade-transition" }, { default: () => [T.value && (X.value || B.value) && !!e.scrim && M("div", Ie({ class: ["v-navigation-drawer__scrim", we.backgroundColorClasses.value], style: [Pe.value, we.backgroundColorStyles.value], onClick: () => B.value = !1 }, V), null)] })]);
  }), { isStuck: H };
} }), P = "v-resize-drawer", Rn = { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: void 0, location: "start", maxWidth: window.innerWidth, minWidth: 56, modelValue: !0, name: P, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, storageName: `${P}-width`, storageType: "local", tag: "nav", theme: "light", touchless: !1, width: 256, widthSnapBack: !0 };
function Ye(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
const Ge = (e) => {
  const { action: n = "update", resizedWidth: t, storageType: o, storageName: a, saveWidth: v, rail: m } = e;
  if (!v || m)
    return;
  let u = t;
  u = u ?? void 0, n === "set" && (u = Ye(o, a) ?? "", u = u || t), o === "local" && localStorage.setItem(a, String(u)), o === "session" && sessionStorage.setItem(a, String(u));
}, ie = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, je = (e) => {
  const n = window.innerWidth, t = function(o) {
    if (typeof o == "string") {
      const a = /(\d+(\.\d+)?)(\s*([a-zA-Z]+))?/, v = o.match(a);
      if (!v)
        return o;
      const m = parseFloat(v[1]), u = v[4];
      if (!isNaN(m)) {
        const s = Math.round(m);
        return u ? `${s} ${u}` : `${s}`;
      }
      return o;
    }
    return typeof o == "number" ? Math.round(o) : o;
  }(e);
  return typeof e == "string" && e.includes("%") ? Number(e.replace("%", "")) / 100 * n : typeof t == "string" ? Number(t.replace(/\D/g, "")) : t;
};
function St(e) {
  let n = function(l) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let k = l;
    return Object.entries(f).forEach(([S, B]) => {
      l.toLowerCase() != S.toLowerCase() || (k = B);
    }), k;
  }(e), t = 0, o = 0, a = 0, v = 0, m = 0, u = 0;
  if (n.substring(0, 1) === "#")
    n = function(l) {
      let f = l.replace("#", "");
      f.length === 3 && (f = f.split("").map((z) => z + z).join(""));
      const k = parseInt(f.substring(0, 2), 16), S = parseInt(f.substring(2, 4), 16), B = parseInt(f.substring(4, 6), 16);
      return [k, S, B];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), t = n[0], o = n[1], a = n[2], `${t} ${o}% ${a}%`;
  [v, m, u] = n, v /= 255, m /= 255, u /= 255;
  const s = Math.max(v, m, u), g = Math.min(v, m, u);
  if (s === null || !g === null || isNaN(s) || isNaN(g)) {
    const l = "0 0% 100% / 12%";
    return console.warn(`[VResizeDrawer]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${l})" in it's place.`), l;
  }
  if (t = (s + g) / 2, o = (s + g) / 2, a = (s + g) / 2, s == g)
    t = o = 0;
  else {
    const l = s - g;
    switch (o = a > 0.5 ? l / (2 - s - g) : l / (s + g), s) {
      case v:
        t = (m - u) / l + (m < u ? 6 : 0);
        break;
      case m:
        t = (u - v) / l + 2;
        break;
      case u:
        t = (v - m) / l + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), o = Math.round(100 * o), a = Math.round(100 * a), `${t} ${o}% ${a}%`;
}
const Ct = (e, n) => {
  if (function(o) {
    return o === "transparent" || o === "none" || o === "inherit" || o === "currentColor" || o === "initial" || o === "unset";
  }(e))
    return e;
  if (function(o) {
    return o.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const t = function(o, a) {
    const v = a.global.current.value.colors;
    return Object.entries(v).find(([m]) => m === o);
  }(e, n);
  return t ? `hsl(${St(t[1])})` : `hsl(${St(e)})`;
}, Gn = { default: "1.5em", large: "1.75em", small: "1.25em", "x-large": "2em", "x-small": "1em" }, jn = { fa: { bottom: "fas fa-grip", center: "fas fa-angles-right", top: "fas fa-grip" }, mdi: { bottom: "mdi:mdi-dots-grid", center: "mdi:mdi-chevron-double-right", top: "mdi:mdi-dots-grid" } }, _n = { key: 0, class: "v-resize-drawer--handle-slot" }, Dt = kt({ __name: "VResizeDrawer", props: nn({ absolute: {}, expandOnHover: {}, floating: {}, handleBorderWidth: {}, handleColor: {}, handleIcon: {}, handleIconSize: {}, handlePosition: {}, height: {}, location: {}, maxWidth: {}, minWidth: {}, modelValue: {}, name: {}, rail: {}, railWidth: {}, resizable: { type: Boolean }, saveWidth: { type: Boolean }, storageName: {}, storageType: {}, tag: {}, temporary: {}, touchless: { type: Boolean }, theme: {}, width: {}, widthSnapBack: { type: Boolean } }, { ...Rn }), emits: ["close", "drawer:mouseenter", "drawer:mouseleave", "handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup", "handle:touchend", "handle:touchmove", "handle:touchstart", "update:modelValue"], setup(e, { emit: n }) {
  const t = e, o = y(() => t), a = J(Symbol.for("vuetify:icons")), v = _(256), m = { mouseDown: !1, mouseUp: !0 }, u = _(!1), s = _(!1), g = _(), l = _(256), f = on(), k = ln(), S = sn();
  Ae(() => {
    if (t.location !== "start" && t.location !== "end" && t.location !== "left" && t.location !== "right")
      throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");
    (function() {
      if (t.rail)
        return l.value = t.railWidth || void 0, !1;
      const r = Ye(t.storageType, t.storageName), c = ie({ str: t.width });
      l.value = c, v.value = l.value, t.saveWidth && r && !t.rail && (l.value = Ye(t.storageType, t.storageName)), Ge({ action: "update", rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType });
    })();
  }), an(() => {
    document.removeEventListener("mouseup", d, !1), document.removeEventListener("mousemove", te, !1), document.removeEventListener("touchend", h, !1), document.removeEventListener("touchstart", de, !1);
  }), U(() => t.modelValue, (r) => {
    n("update:modelValue", r), r || n("close");
  });
  const B = y(() => ((r) => {
    const { absolute: c = !1, expandOnHover: i, floating: p, isMouseover: D, location: F, rail: E, railWidth: b, temporary: C } = r;
    return { [`${P}`]: !0, "v-navigation-drawer--absolute": c ?? !1, "v-navigation-drawer--custom-rail": Number(b) !== 56, "v-navigation-drawer--fixed": !c, "v-navigation-drawer--floating": p, "v-navigation-drawer--is-mouseover": A(D), "v-navigation-drawer--left": F === "left" || F === "start" || F === void 0, "v-navigation-drawer--open-on-hover": i, "v-navigation-drawer--rail": E ?? !1, "v-navigation-drawer--right": F === "right" || F === "end", "v-navigation-drawer--temporary": C };
  })({ absolute: t.absolute, expandOnHover: t.expandOnHover, floating: t.floating, isMouseover: u, location: t.location, rail: t.rail, railWidth: t.railWidth, temporary: t.temporary })), z = y(() => ((r) => {
    const { isMouseDown: c, maxWidth: i, minWidth: p, rail: D, railWidth: F, resizedWidth: E, widthSnapBack: b } = r;
    if (D)
      return {};
    let C = D ? F : A(E);
    return b || (parseInt(C) >= parseInt(i) && (C = parseInt(i)), parseInt(C) <= parseInt(p) && (C = parseInt(p))), { transitionDuration: A(c) ? "0s" : ".2s", width: ie({ str: C }) };
  })({ isMouseDown: s, maxWidth: ne.value, minWidth: H.value, rail: t.rail, railWidth: t.railWidth, resizedWidth: l, widthSnapBack: t.widthSnapBack })), V = y(() => {
    if (!t.rail)
      return ie({ str: l.value });
  }), R = y(() => ((r) => {
    const { drawerLocation: c, handlePosition: i } = r;
    return { [`${P}--handle-container`]: !0, [`${P}--handle-container-position-${i}`]: !0, [`${P}--handle-container-parent-${c}`]: !0 };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition })), q = y(() => ((r) => {
    const { borderWidth: c, handleColor: i, iconSize: p, position: D, theme: F } = r;
    if (D === "border")
      return { backgroundColor: Ct(i, F), height: "100%", width: ie({ str: c }) };
    const E = Gn[p];
    return { backgroundColor: "transparent", height: E, width: E };
  })({ borderWidth: t.handleBorderWidth, handleColor: t.handleColor, iconSize: t.handleIconSize, position: t.handlePosition, theme: k })), ue = y(() => (!t.touchless || !S.mobile.value) && !(!t.resizable || t.rail)), ee = y(() => ((r) => {
    const { color: c, theme: i } = r;
    return { color: Ct(c, i) };
  })({ color: t.handleColor, theme: k })), T = y(() => ((r) => {
    const { drawerLocation: c, handlePosition: i, iconOptions: p, isUserIcon: D } = r;
    return { [`${P}--handle-container-icon`]: !0, [`${P}--handle-container-icon-${i}-${c}`]: !0, [`${P}--handle-container-icon-user-icon`]: D, [`${P}--handle-container-icon-fa`]: (p == null ? void 0 : p.defaultSet) === "fa", [`${P}--handle-container-icon-fa-${i}`]: (p == null ? void 0 : p.defaultSet) === "fa" };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition, iconOptions: a, isUserIcon: t.handleIcon !== void 0 && t.handleIcon !== null })), ce = y(() => ((c) => {
    const { icon: i, iconOptions: p, position: D } = c;
    if (i)
      return i;
    let E = (p == null ? void 0 : p.defaultSet).toLowerCase();
    E = E === "fa" || E === "fasvg" ? "fa" : E;
    const b = jn[E];
    if (!b)
      throw new Error(`VResizeDrawer: No default ${p == null ? void 0 : p.defaultSet} icon set found. Please set the icon prop.`);
    const C = b[D];
    if (!C)
      throw new Error(`VResizeDrawer: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
    return C;
  })({ icon: t.handleIcon, iconOptions: a, position: t.handlePosition }));
  function X() {
    u.value = !0, n("drawer:mouseenter", u.value);
  }
  function pe() {
    u.value = !1, n("drawer:mouseleave", u.value);
  }
  function ge(r, c) {
    let i = c;
    t.location !== "right" && t.location !== "end" || (i = document.body.scrollWidth - i), l.value = ie({ str: i }) || void 0, document.body.style.cursor = "grabbing", w("handle:touchmove", r), w("handle:drag", r);
  }
  function fe(r) {
    var c;
    ge(r, ((c = r.touches[0]) == null ? void 0 : c.clientX) ?? 0);
  }
  function te(r) {
    ge(r, r.clientX);
  }
  const ne = y(() => {
    if (t.maxWidth === "100%")
      return window.innerWidth;
    if (String(t.maxWidth).includes("%")) {
      const r = parseInt(String(t.maxWidth).replace("%", ""));
      return window.innerWidth * r / 100;
    }
    return t.maxWidth;
  }), H = y(() => {
    if (t.minWidth === "100%")
      return window.innerWidth;
    if (String(t.minWidth).includes("%")) {
      const r = parseInt(String(t.minWidth).replace("%", ""));
      return window.innerWidth * r / 100;
    }
    return t.minWidth;
  });
  function ye(r) {
    let c = r;
    parseInt(c) >= parseInt(ne.value) && (c = parseInt(ne.value)), parseInt(c) <= parseInt(H.value) && (c = parseInt(H.value)), typeof c == "number" && (c = Math.round(c));
    let i = je(c);
    const p = je(ne.value), D = je(H.value);
    return i >= p && (i = p), D >= i && (i = D), i;
  }
  function we(r) {
    w("handle:click", r);
  }
  function Pe(r) {
    l.value = v.value, Ge({ rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), w("handle:dblclick", r);
  }
  function Fe(r, c) {
    r.preventDefault(), r.stopPropagation();
    const i = r.type;
    let p = 25;
    s.value = !0, t.handlePosition === "border" && (p = t.handleBorderWidth), m.mouseUp = !1, c < p && (i === "touchstart" ? document.addEventListener("touchmove", fe, !1) : document.addEventListener("mousemove", te, !1)), m.mouseDown || (m.mouseDown = !0, i === "touchstart" ? (document.addEventListener("touchend", h, !1), w("handle:touchstart", r)) : (document.addEventListener("mouseup", d, !1), w("handle:mousedown", r)));
  }
  function Ve(r) {
    Fe(r, r.offsetX);
  }
  function de(r) {
    var c;
    Fe(r, ((c = r.touches[0]) == null ? void 0 : c.radiusX) ?? 0);
  }
  function ve(r) {
    r.preventDefault(), r.stopPropagation();
    const c = r.type, i = g.value;
    s.value = !1, m.mouseDown = !1, l.value = (i == null ? void 0 : i.width) ?? v.value, document.body.style.cursor = "", l.value.includes("-") && (l.value = H.value), l.value = ye(l.value), l.value = ie({ str: l.value }) || void 0, Ge({ rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), m.mouseUp || (m.mouseUp = !0, c === "touchend" ? (document.removeEventListener("touchend", h, !1), document.removeEventListener("touchmove", fe, !1), w("handle:touchend", r)) : (document.removeEventListener("mouseup", d, !1), document.removeEventListener("mousemove", te, !1), w("handle:mouseup", r)));
  }
  function d(r) {
    ve(r);
  }
  function h(r) {
    ve(r);
  }
  function w(r, c) {
    const i = parseInt(ye(l.value)) ?? 0, p = { e: c, eventName: r, offsetWidth: window.innerWidth - i + "px", resizedWidth: `${i}px`, width: `${i}px` };
    n(r, p);
  }
  return (r, c) => (Se(), Qe(A(On), Ie(A(o), { ref_key: "resizeDrawer", ref: g, class: A(B), location: t.location, "model-value": r.modelValue, name: t.name, style: A(z), tag: t.tag, theme: t.theme, width: A(V), onMouseenter: X, onMouseleave: pe }), { default: rn(() => [A(ue) ? (Se(), et("div", { key: 0, class: tt(A(R)), style: nt(A(q)), onClick: we, onDblclick: Pe, onMousedown: Ve, onMouseup: d, onTouchend: h, onTouchstart: de }, [A(f).handle ? (Se(), et("div", _n, [Ce(r.$slots, "handle")])) : r.handlePosition !== "border" ? (Se(), Qe(In, { key: 1, class: tt(["v-resize-drawer--handle-icon", A(T)]), icon: A(ce), size: r.handleIconSize, style: nt(A(ee)) }, null, 8, ["class", "icon", "size", "style"])) : De("", !0)], 38)) : De("", !0), A(f).prepend ? Ce(r.$slots, "prepend", { key: 1 }) : De("", !0), Ce(r.$slots, "default"), A(f).append ? Ce(r.$slots, "append", { key: 2 }) : De("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} });
Dt.install = (e) => {
  e.component("VResizeDrawer", Dt);
};
export {
  Dt as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;height:100%;max-width:100%;pointer-events:auto;transition-duration:.2s;transition-property:box-shadow,transform,visibility,width,height,left,right,top,bottom;transition-timing-function:cubic-bezier(.4,0,.2,1);position:absolute;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-navigation-drawer--border{border-width:thin;box-shadow:none}.v-navigation-drawer--rounded{border-radius:4px}.v-navigation-drawer--top{top:0;border-bottom-width:thin}.v-navigation-drawer--bottom{left:0;border-top-width:thin}.v-navigation-drawer--left{top:0;left:0;right:auto;border-right-width:thin}.v-navigation-drawer--right{top:0;left:auto;right:0;border-left-width:thin}.v-navigation-drawer--floating{border:none}.v-navigation-drawer--temporary{box-shadow:0 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-navigation-drawer--sticky{height:auto;transition:box-shadow,transform,visibility,width,height,left,right}.v-navigation-drawer .v-list{overflow:hidden}.v-navigation-drawer__content{flex:0 1 auto;height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.v-navigation-drawer__img{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-navigation-drawer__img img{height:inherit;object-fit:cover;width:inherit}.v-navigation-drawer__scrim{position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.2;transition:opacity .2s cubic-bezier(.4,0,.2,1);z-index:1}.v-resize-drawer{container-type:inline-size;container-name:v-resize-drawer}.v-resize-drawer--handle-container{cursor:grab;align-items:center;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}@container v-resize-drawer (width > 0) and (max-width: 599.98px){.v-col-xs-12{flex:0 0 100%!important;max-width:100%!important;flex-basis:0;flex-grow:1;max-width:100%}}@container v-resize-drawer (min-width: 600px){.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 960px){.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1280px){.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1920px){.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 2560px){.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer only print{.hidden-print-only{display:none!important}}@container v-resize-drawer only print{.d-print-only-none{display:none!important}.d-print-only-inline{display:inline!important}.d-print-only-inline-block{display:inline-block!important}.d-print-only-block{display:block!important}.d-print-only-table{display:table!important}.d-print-only-table-row{display:table-row!important}.d-print-only-table-cell{display:table-cell!important}.d-print-only-flex{display:flex!important}.d-print-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer only screen{.hidden-screen-only{display:none!important}}@container v-resize-drawer only screen{.d-screen-only-none{display:none!important}.d-screen-only-inline{display:inline!important}.d-screen-only-inline-block{display:inline-block!important}.d-screen-only-block{display:block!important}.d-screen-only-table{display:table!important}.d-screen-only-table-row{display:table-row!important}.d-screen-only-table-cell{display:table-cell!important}.d-screen-only-flex{display:flex!important}.d-screen-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 599.98px){.hidden-xs{display:none!important}}@container v-resize-drawer (max-width: 599.98px){.d-xs-none{display:none!important}.d-xs-inline{display:inline!important}.d-xs-inline-block{display:inline-block!important}.d-xs-block{display:block!important}.d-xs-table{display:table!important}.d-xs-table-row{display:table-row!important}.d-xs-table-cell{display:table-cell!important}.d-xs-flex{display:flex!important}.d-xs-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.hidden-sm{display:none!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.hidden-md{display:none!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.hidden-lg{display:none!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.hidden-xl{display:none!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 2560px){.hidden-xxl{display:none!important}}@container v-resize-drawer (min-width: 2560px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px){.hidden-sm-and-up{display:none!important}}@container v-resize-drawer (min-width: 600px){.d-sm-and-up-none{display:none!important}.d-sm-and-up-inline{display:inline!important}.d-sm-and-up-inline-block{display:inline-block!important}.d-sm-and-up-block{display:block!important}.d-sm-and-up-table{display:table!important}.d-sm-and-up-table-row{display:table-row!important}.d-sm-and-up-table-cell{display:table-cell!important}.d-sm-and-up-flex{display:flex!important}.d-sm-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px){.hidden-md-and-up{display:none!important}}@container v-resize-drawer (min-width: 960px){.d-md-and-up-none{display:none!important}.d-md-and-up-inline{display:inline!important}.d-md-and-up-inline-block{display:inline-block!important}.d-md-and-up-block{display:block!important}.d-md-and-up-table{display:table!important}.d-md-and-up-table-row{display:table-row!important}.d-md-and-up-table-cell{display:table-cell!important}.d-md-and-up-flex{display:flex!important}.d-md-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px){.hidden-lg-and-up{display:none!important}}@container v-resize-drawer (min-width: 1280px){.d-lg-and-up-none{display:none!important}.d-lg-and-up-inline{display:inline!important}.d-lg-and-up-inline-block{display:inline-block!important}.d-lg-and-up-block{display:block!important}.d-lg-and-up-table{display:table!important}.d-lg-and-up-table-row{display:table-row!important}.d-lg-and-up-table-cell{display:table-cell!important}.d-lg-and-up-flex{display:flex!important}.d-lg-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px){.hidden-xl-and-up{display:none!important}}@container v-resize-drawer (min-width: 1920px){.d-xl-and-up-none{display:none!important}.d-xl-and-up-inline{display:inline!important}.d-xl-and-up-inline-block{display:inline-block!important}.d-xl-and-up-block{display:block!important}.d-xl-and-up-table{display:table!important}.d-xl-and-up-table-row{display:table-row!important}.d-xl-and-up-table-cell{display:table-cell!important}.d-xl-and-up-flex{display:flex!important}.d-xl-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 959.98px){.hidden-sm-and-down{display:none!important}}@container v-resize-drawer (max-width: 959.98px){.d-sm-and-down-none{display:none!important}.d-sm-and-down-inline{display:inline!important}.d-sm-and-down-inline-block{display:inline-block!important}.d-sm-and-down-block{display:block!important}.d-sm-and-down-table{display:table!important}.d-sm-and-down-table-row{display:table-row!important}.d-sm-and-down-table-cell{display:table-cell!important}.d-sm-and-down-flex{display:flex!important}.d-sm-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1279.98px){.hidden-md-and-down{display:none!important}}@container v-resize-drawer (max-width: 1279.98px){.d-md-and-down-none{display:none!important}.d-md-and-down-inline{display:inline!important}.d-md-and-down-inline-block{display:inline-block!important}.d-md-and-down-block{display:block!important}.d-md-and-down-table{display:table!important}.d-md-and-down-table-row{display:table-row!important}.d-md-and-down-table-cell{display:table-cell!important}.d-md-and-down-flex{display:flex!important}.d-md-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1919.98px){.hidden-lg-and-down{display:none!important}}@container v-resize-drawer (max-width: 1919.98px){.d-lg-and-down-none{display:none!important}.d-lg-and-down-inline{display:inline!important}.d-lg-and-down-inline-block{display:inline-block!important}.d-lg-and-down-block{display:block!important}.d-lg-and-down-table{display:table!important}.d-lg-and-down-table-row{display:table-row!important}.d-lg-and-down-table-cell{display:table-cell!important}.d-lg-and-down-flex{display:flex!important}.d-lg-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 2559.98px){.hidden-xl-and-down{display:none!important}}@container v-resize-drawer (max-width: 2559.98px){.d-xl-and-down-none{display:none!important}.d-xl-and-down-inline{display:inline!important}.d-xl-and-down-inline-block{display:inline-block!important}.d-xl-and-down-block{display:block!important}.d-xl-and-down-table{display:table!important}.d-xl-and-down-table-row{display:table-row!important}.d-xl-and-down-table-cell{display:table-cell!important}.d-xl-and-down-flex{display:flex!important}.d-xl-and-down-inline-flex{display:inline-flex!important}}')),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
