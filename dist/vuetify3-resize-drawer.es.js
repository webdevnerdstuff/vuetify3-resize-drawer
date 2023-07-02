import { Fragment as lt, reactive as Dt, computed as g, watchEffect as st, toRefs as Et, warn as kt, watch as se, onScopeDispose as At, effectScope as Wt, ref as ee, unref as $, provide as Ve, inject as ue, shallowRef as Z, defineComponent as ut, getCurrentInstance as $t, onDeactivated as xt, onActivated as zt, onBeforeUnmount as ze, toRaw as Mt, isRef as fe, onMounted as Be, readonly as Lt, createVNode as z, mergeProps as Ee, toRef as Ie, Text as It, nextTick as Nt, onBeforeMount as Pt, Transition as Vt, mergeDefaults as Ot, useSlots as Rt, onUnmounted as Tt, openBlock as Fe, createBlock as Ye, withCtx as Gt, createElementBlock as Ue, normalizeClass as qe, normalizeStyle as Xe, renderSlot as be, createCommentVNode as Se } from "vue";
import { useTheme as _t } from "vuetify";
/**
 * @name vuetify3-resize-drawer
 * @version 2.0.1
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @repository https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @license MIT License
 */
function R(e, n) {
  return (t) => Object.keys(e).reduce((a, o) => {
    const v = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return a[o] = t && o in t ? { ...v, default: t[o] } : v, n && !a[o].source && (a[o].source = n), a;
  }, {});
}
const ct = R({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function Ke(e, n, t) {
  (function(a, o) {
    if (o.has(a))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  })(e, n), n.set(e, t);
}
function jt(e, n, t) {
  return function(a, o, v) {
    if (o.set)
      o.set.call(a, v);
    else {
      if (!o.writable)
        throw new TypeError("attempted to set read only private field");
      o.value = v;
    }
  }(e, dt(e, n, "set"), t), t;
}
function le(e, n) {
  return function(t, a) {
    return a.get ? a.get.call(t) : a.value;
  }(e, dt(e, n, "get"));
}
function dt(e, n, t) {
  if (!n.has(e))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return n.get(e);
}
function he(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Ze(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function pe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const o in e)
    a[o] = e[o];
  for (const o in n) {
    const v = e[o], d = n[o];
    Ze(v) && Ze(d) ? a[o] = pe(v, d, t) : Array.isArray(v) && Array.isArray(d) && t ? a[o] = t(v, d) : a[o] = d;
  }
  return a;
}
function vt(e) {
  return e.map((n) => n.type === lt ? vt(n.children) : n).flat();
}
function ce() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ce.cache.has(e))
    return ce.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ce.cache.set(e, n), n;
}
ce.cache = /* @__PURE__ */ new Map();
var Ce = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap();
class Ht {
  constructor(n) {
    Ke(this, Ce, { writable: !0, value: [] }), Ke(this, de, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    le(this, Ce)[le(this, de)] = n, jt(this, de, (le(this, de) + 1) % this.size);
  }
  values() {
    return le(this, Ce).slice(le(this, de)).concat(le(this, Ce).slice(0, le(this, de)));
  }
}
function mt(e) {
  const n = Dt({}), t = g(e);
  return st(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, { flush: "sync" }), Et(n);
}
function Qe(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ht(e, n) {
  let t;
  function a() {
    t = Wt(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  se(e, (o) => {
    o && !t ? a() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), At(() => {
    t == null || t.stop();
  });
}
const Oe = Symbol.for("vuetify:defaults");
function Re() {
  const e = ue(Oe);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pt(e, n) {
  const t = Re(), a = ee(e), o = g(() => {
    if ($(n == null ? void 0 : n.disabled))
      return t.value;
    const v = $(n == null ? void 0 : n.scoped), d = $(n == null ? void 0 : n.reset), s = $(n == null ? void 0 : n.root);
    let r = pe(a.value, { prev: t.value });
    if (v)
      return r;
    if (d || s) {
      const l = Number(d || 1 / 0);
      for (let c = 0; c <= l && r && "prev" in r; c++)
        r = r.prev;
      return r && typeof s == "string" && s in r && (r = pe(pe(r, { prev: r }), r[s])), r;
    }
    return r.prev ? pe(r.prev, r) : r;
  });
  return Ve(Oe, o), o;
}
function Yt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Re();
  const a = q("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), v = new Proxy(e, { get(s, r) {
    var c, w, E, f;
    const l = Reflect.get(s, r);
    return r === "class" || r === "style" ? [(c = o.value) == null ? void 0 : c[r], l].filter((F) => F != null) : typeof r != "string" || function(F, I) {
      var j, X;
      return ((j = F.props) == null ? void 0 : j[I]) !== void 0 || ((X = F.props) == null ? void 0 : X[ce(I)]) !== void 0;
    }(a.vnode, r) ? l : ((w = o.value) == null ? void 0 : w[r]) ?? ((f = (E = t.value) == null ? void 0 : E.global) == null ? void 0 : f[r]) ?? l;
  } }), d = Z();
  return st(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((r) => {
        let [l] = r;
        return l.startsWith(l[0].toUpperCase());
      });
      s.length && (d.value = Object.fromEntries(s));
    }
  }), { props: v, provideSubDefaults: function() {
    ht(d, () => {
      var s;
      pt(pe(((s = function(r) {
        const { provides: l } = q("injectSelf");
        if (l && r in l)
          return l[r];
      }(Oe)) == null ? void 0 : s.value) ?? {}, d.value));
    });
  } };
}
function ke(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return kt("Vuetify: The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return function(a, o, v) {
        const d = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
        for (const r in a)
          o.some((l) => l instanceof RegExp ? l.test(r) : l === r) && !(v != null && v.some((l) => l === r)) ? d[r] = a[r] : s[r] = a[r];
        return [d, s];
      }(t, n, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, a) {
      const o = Re();
      if (!o.value)
        return e._setup(t, a);
      const { props: v, provideSubDefaults: d } = Yt(t, t._as ?? e.name, o), s = e._setup(v, a);
      return d(), s;
    };
  }
  return e;
}
function Te() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? ke : ut)(n);
}
function q(e, n) {
  const t = $t();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Ne() {
  const e = q(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return ce((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let gt = 0, De = /* @__PURE__ */ new WeakMap();
function ft() {
  const e = q("getUid");
  if (De.has(e))
    return De.get(e);
  {
    const n = gt++;
    return De.set(e, n), n;
  }
}
function yt(e) {
  q("useRender").render = e;
}
ft.reset = () => {
  gt = 0, De = /* @__PURE__ */ new WeakMap();
};
const Ut = Symbol.for("vuetify:layout"), qt = Symbol.for("vuetify:layout-item"), Xt = R({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item"), Kt = Symbol.for("vuetify:locale"), Je = Symbol.for("vuetify:theme"), wt = R({ theme: String }, "theme");
function Ft(e) {
  q("provideTheme");
  const n = ue(Je, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? (n == null ? void 0 : n.name.value)), a = g(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...n, name: t, themeClasses: a };
  return Ve(Je, o), o;
}
const bt = R({ tag: { type: String, default: "div" } }, "tag"), Zt = R({ border: [Boolean, Number, String] }, "border");
function St(e) {
  return mt(() => {
    const n = [], t = {};
    return e.value.background && (Qe(e.value.background) ? t.backgroundColor = e.value.background : n.push(`bg-${e.value.background}`)), e.value.text && (Qe(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function et(e, n) {
  const t = g(() => ({ background: fe(e) ? e.value : n ? e[n] : null })), { colorClasses: a, colorStyles: o } = St(t);
  return { backgroundColorClasses: a, backgroundColorStyles: o };
}
const Qt = R({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), Jt = R({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded"), Ct = [String, Function, Object, Array], en = Symbol.for("vuetify:icons"), Ae = R({ icon: { type: Ct }, tag: { type: String, required: !0 } }, "icon"), tt = Te()({ name: "VComponentIcon", props: Ae(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const a = e.icon;
    return z(e.tag, null, { default: () => {
      var o;
      return [e.icon ? z(a, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), tn = ke({ name: "VSvgIcon", inheritAttrs: !1, props: Ae(), setup(e, n) {
  let { attrs: t } = n;
  return () => z(e.tag, Ee(t, { style: null }), { default: () => [z("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? z("path", { d: a[0], "fill-opacity": a[1] }, null) : z("path", { d: a }, null)) : z("path", { d: e.icon }, null)])] });
} });
ke({ name: "VLigatureIcon", props: Ae(), setup: (e) => () => z(e.tag, null, { default: () => [e.icon] }) }), ke({ name: "VClassIcon", props: Ae(), setup: (e) => () => z(e.tag, { class: e.icon }, null) });
const nn = ["x-small", "small", "default", "large", "x-large"], on = R({ size: { type: [String, Number], default: "default" } }, "size"), an = R({ color: String, start: Boolean, end: Boolean, icon: Ct, ...ct(), ...on(), ...bt({ tag: "i" }), ...wt() }, "VIcon"), rn = Te()({ name: "VIcon", props: an(), setup(e, n) {
  let { attrs: t, slots: a } = n;
  const o = ee(), { themeClasses: v } = Ft(e), { iconData: d } = ((c) => {
    const w = ue(en);
    if (!w)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var j;
      const E = $(c);
      if (!E)
        return { component: tt };
      let f = E;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (j = w.aliases) == null ? void 0 : j[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${E}"`);
      if (Array.isArray(f))
        return { component: tn, icon: f };
      if (typeof f != "string")
        return { component: tt, icon: f };
      const F = Object.keys(w.sets).find((X) => typeof f == "string" && f.startsWith(`${X}:`)), I = F ? f.slice(F.length + 1) : f;
      return { component: w.sets[F ?? w.defaultSet].component, icon: I };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = function(c) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return mt(() => {
      let E, f;
      var F, I;
      return F = nn, I = c.size, F.includes(I) ? E = `${w}--size-${c.size}` : c.size && (f = { width: he(c.size), height: he(c.size) }), { sizeClasses: E, sizeStyles: f };
    });
  }(e), { textColorClasses: r, textColorStyles: l } = function(c, w) {
    const E = g(() => ({ text: fe(c) ? c.value : w ? c[w] : null })), { colorClasses: f, colorStyles: F } = St(E);
    return { textColorClasses: f, textColorStyles: F };
  }(Ie(e, "color"));
  return yt(() => {
    var w, E;
    const c = (w = a.default) == null ? void 0 : w.call(a);
    return c && (o.value = (E = vt(c).filter((f) => f.type === It && f.children && typeof f.children == "string")[0]) == null ? void 0 : E.children), z(d.value.component, { tag: e.tag, icon: d.value.icon, class: ["v-icon", "notranslate", v.value, s.value, r.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: he(e.size), height: he(e.size), width: he(e.size) }, l.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [c] });
  }), {};
} }), ln = Symbol.for("vuetify:display"), sn = 100, un = 20;
function nt(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function ot(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = nt(n), o = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (o - a) * Math.abs(o), t === e.length - 1 && (n *= 0.5);
  }
  return 1e3 * nt(n);
}
function cn() {
  const e = {};
  return { addMovement: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      (e[t.identifier] ?? (e[t.identifier] = new Ht(un))).push([n.timeStamp, t]);
    });
  }, endTouch: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      delete e[t.identifier];
    });
  }, getVelocity: function(n) {
    var d;
    const t = (d = e[n]) == null ? void 0 : d.values().reverse();
    if (!t)
      throw new Error(`No samples for touch id ${n}`);
    const a = t[0], o = [], v = [];
    for (const s of t) {
      if (a[0] - s[0] > sn)
        break;
      o.push({ t: s[0], d: s[1].clientX }), v.push({ t: s[0], d: s[1].clientY });
    }
    return { x: ot(o), y: ot(v), get direction() {
      const { x: s, y: r } = this, [l, c] = [Math.abs(s), Math.abs(r)];
      return l > c && s >= 0 ? "right" : l > c && s <= 0 ? "left" : c > l && r >= 0 ? "down" : c > l && r <= 0 ? "up" : function() {
        throw new Error();
      }();
    } };
  } };
}
function ve() {
  throw new Error();
}
const dn = ["start", "end", "left", "right", "top", "bottom"], vn = R({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => dn.includes(e) }, sticky: Boolean, ...Zt(), ...ct(), ...Qt(), ...Xt(), ...Jt(), ...bt({ tag: "nav" }), ...wt() }, "VNavigationDrawer"), mn = Te()({ name: "VNavigationDrawer", props: vn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var V, H;
  let { attrs: t, emit: a, slots: o } = n;
  const { isRtl: v } = function() {
    const i = ue(Kt);
    if (!i)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: i.isRtl, rtlClasses: i.rtlClasses };
  }(), { themeClasses: d } = Ft(e), { borderClasses: s } = function(i) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return { borderClasses: g(() => {
      const S = fe(i) ? i.value : i.border, y = [];
      if (S === !0 || S === "")
        y.push(`${p}--border`);
      else if (typeof S == "string" || S === 0)
        for (const D of String(S).split(" "))
          y.push(`border-${D}`);
      return y;
    }) };
  }(e), { backgroundColorClasses: r, backgroundColorStyles: l } = et(Ie(e, "color")), { elevationClasses: c } = function(i) {
    return { elevationClasses: g(() => {
      const p = fe(i) ? i.value : i.elevation, S = [];
      return p == null || S.push(`elevation-${p}`), S;
    }) };
  }(e), { mobile: w } = function() {
    const i = ue(ln);
    if (!i)
      throw new Error("Could not find Vuetify display injection");
    return i;
  }(), { roundedClasses: E } = function(i) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return { roundedClasses: g(() => {
      const S = fe(i) ? i.value : i.rounded, y = [];
      if (S === !0 || S === "")
        y.push(`${p}--rounded`);
      else if (typeof S == "string" || S === 0)
        for (const D of String(S).split(" "))
          y.push(`rounded-${D}`);
      return y;
    }) };
  }(e), f = (H = (V = q("useRouter")) == null ? void 0 : V.proxy) == null ? void 0 : H.$router, F = function(i, p, S) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (C) => C, D = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (C) => C;
    const m = q("useProxiedModel"), M = ee(i[p] !== void 0 ? i[p] : S), Y = ce(p), U = g(Y !== p ? () => {
      var C, A, L, O;
      return i[p], !(!((C = m.vnode.props) != null && C.hasOwnProperty(p)) && !((A = m.vnode.props) != null && A.hasOwnProperty(Y)) || !((L = m.vnode.props) != null && L.hasOwnProperty(`onUpdate:${p}`)) && !((O = m.vnode.props) != null && O.hasOwnProperty(`onUpdate:${Y}`)));
    } : () => {
      var C, A;
      return i[p], !(!((C = m.vnode.props) != null && C.hasOwnProperty(p)) || !((A = m.vnode.props) != null && A.hasOwnProperty(`onUpdate:${p}`)));
    });
    ht(() => !U.value, () => {
      se(() => i[p], (C) => {
        M.value = C;
      });
    });
    const P = g({ get() {
      const C = i[p];
      return y(U.value ? C : M.value);
    }, set(C) {
      const A = D(C), L = Mt(U.value ? i[p] : M.value);
      L !== A && y(L) !== C && (M.value = A, m == null || m.emit(`update:${p}`, A));
    } });
    return Object.defineProperty(P, "externalValue", { get: () => U.value ? i[p] : M.value }), P;
  }(e, "modelValue", null, (i) => !!i), { ssrBootStyles: I } = function() {
    const i = Z(!1);
    return Be(() => {
      window.requestAnimationFrame(() => {
        i.value = !0;
      });
    }), { ssrBootStyles: g(() => i.value ? void 0 : { transition: "none !important" }), isBooted: Lt(i) };
  }(), { scopeId: j } = function() {
    const i = q("useScopeId").vnode.scopeId;
    return { scopeId: i ? { [i]: "" } : void 0 };
  }(), X = ee(), te = Z(!1), ge = g(() => e.rail && e.expandOnHover && te.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), ne = g(() => function(i, p) {
    return i === "start" ? p ? "right" : "left" : i === "end" ? p ? "left" : "right" : i;
  }(e.location, v.value)), T = g(() => !e.permanent && (w.value || e.temporary)), oe = g(() => e.sticky && !T.value && ne.value !== "bottom");
  e.expandOnHover && e.rail != null && se(te, (i) => a("update:rail", !i)), e.disableResizeWatcher || se(T, (i) => !e.permanent && Nt(() => F.value = !i)), !e.disableRouteWatcher && f && se(f.currentRoute, () => T.value && (F.value = !1)), se(() => e.permanent, (i) => {
    i && (F.value = !0);
  }), Pt(() => {
    e.modelValue != null || T.value || (F.value = e.permanent || !w.value);
  });
  const { isDragging: Q, dragProgress: ye, dragStyles: We } = function(i) {
    let { isActive: p, isTemporary: S, width: y, touchless: D, position: m } = i;
    Be(() => {
      window.addEventListener("touchstart", _e, { passive: !0 }), window.addEventListener("touchmove", je, { passive: !1 }), window.addEventListener("touchend", He, { passive: !0 });
    }), ze(() => {
      window.removeEventListener("touchstart", _e), window.removeEventListener("touchmove", je), window.removeEventListener("touchend", He);
    });
    const M = g(() => ["left", "right"].includes(m.value)), { addMovement: Y, endTouch: U, getVelocity: P } = cn();
    let C = !1;
    const A = Z(!1), L = Z(0), O = Z(0);
    let ie;
    function xe(k, W) {
      return (m.value === "left" ? k : m.value === "right" ? document.documentElement.clientWidth - k : m.value === "top" ? k : m.value === "bottom" ? document.documentElement.clientHeight - k : ve()) - (W ? y.value : 0);
    }
    function Ge(k) {
      let W = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const x = m.value === "left" ? (k - O.value) / y.value : m.value === "right" ? (document.documentElement.clientWidth - k - O.value) / y.value : m.value === "top" ? (k - O.value) / y.value : m.value === "bottom" ? (document.documentElement.clientHeight - k - O.value) / y.value : ve();
      return W ? Math.max(0, Math.min(1, x)) : x;
    }
    function _e(k) {
      if (D.value)
        return;
      const W = k.changedTouches[0].clientX, x = k.changedTouches[0].clientY, K = m.value === "left" ? W < 25 : m.value === "right" ? W > document.documentElement.clientWidth - 25 : m.value === "top" ? x < 25 : m.value === "bottom" ? x > document.documentElement.clientHeight - 25 : ve(), J = p.value && (m.value === "left" ? W < y.value : m.value === "right" ? W > document.documentElement.clientWidth - y.value : m.value === "top" ? x < y.value : m.value === "bottom" ? x > document.documentElement.clientHeight - y.value : ve());
      (K || J || p.value && S.value) && (C = !0, ie = [W, x], O.value = xe(M.value ? W : x, p.value), L.value = Ge(M.value ? W : x), U(k), Y(k));
    }
    function je(k) {
      const W = k.changedTouches[0].clientX, x = k.changedTouches[0].clientY;
      if (C) {
        if (!k.cancelable)
          return void (C = !1);
        const J = Math.abs(W - ie[0]), we = Math.abs(x - ie[1]);
        (M.value ? J > we && J > 3 : we > J && we > 3) ? (A.value = !0, C = !1) : (M.value ? we : J) > 3 && (C = !1);
      }
      if (!A.value)
        return;
      k.preventDefault(), Y(k);
      const K = Ge(M.value ? W : x, !1);
      L.value = Math.max(0, Math.min(1, K)), K > 1 ? O.value = xe(M.value ? W : x, !0) : K < 0 && (O.value = xe(M.value ? W : x, !1));
    }
    function He(k) {
      if (C = !1, !A.value)
        return;
      Y(k), A.value = !1;
      const W = P(k.changedTouches[0].identifier), x = Math.abs(W.x), K = Math.abs(W.y), J = M.value ? x > K && x > 400 : K > x && K > 3;
      p.value = J ? W.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[m.value] || ve()) : L.value > 0.5;
    }
    const Bt = g(() => A.value ? { transform: m.value === "left" ? `translateX(calc(-100% + ${L.value * y.value}px))` : m.value === "right" ? `translateX(calc(100% - ${L.value * y.value}px))` : m.value === "top" ? `translateY(calc(-100% + ${L.value * y.value}px))` : m.value === "bottom" ? `translateY(calc(100% - ${L.value * y.value}px))` : ve(), transition: "none" } : void 0);
    return { isDragging: A, dragProgress: L, dragStyles: Bt };
  }({ isActive: F, isTemporary: T, width: ge, touchless: Ie(e, "touchless"), position: ne }), $e = g(() => {
    const i = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : ge.value;
    return Q.value ? i * ye.value : i;
  }), { layoutItemStyles: ae, layoutItemScrimStyles: re } = function(i) {
    const p = ue(Ut);
    if (!p)
      throw new Error("[Vuetify] Could not find injected layout");
    const S = i.id ?? `layout-item-${ft()}`, y = q("useLayoutItem");
    Ve(qt, { id: S });
    const D = Z(!1);
    xt(() => D.value = !0), zt(() => D.value = !1);
    const { layoutItemStyles: m, layoutItemScrimStyles: M } = p.register(y, { ...i, active: g(() => !D.value && i.active.value), id: S });
    return ze(() => p.unregister(S)), { layoutItemStyles: m, layoutRect: p.layoutRect, layoutItemScrimStyles: M };
  }({ id: e.name, order: g(() => parseInt(e.order, 10)), position: ne, layoutSize: $e, elementSize: ge, active: g(() => F.value || Q.value), disableTransitions: g(() => Q.value), absolute: g(() => e.absolute || oe.value && typeof u.value != "string") }), { isStuck: u, stickyStyles: h } = function(i) {
    let { rootEl: p, isSticky: S, layoutItemStyles: y } = i;
    const D = Z(!1), m = Z(0), M = g(() => {
      const P = typeof D.value == "boolean" ? "top" : D.value;
      return [S.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, D.value ? { [P]: he(m.value) } : { top: y.value.top }];
    });
    Be(() => {
      se(S, (P) => {
        P ? window.addEventListener("scroll", U, { passive: !0 }) : window.removeEventListener("scroll", U);
      }, { immediate: !0 });
    }), ze(() => {
      document.removeEventListener("scroll", U);
    });
    let Y = 0;
    function U() {
      const P = Y > window.scrollY ? "up" : "down", C = p.value.getBoundingClientRect(), A = parseFloat(y.value.top ?? 0), L = window.scrollY - Math.max(0, m.value - A), O = C.height + Math.max(m.value, A) - window.scrollY - window.innerHeight, ie = parseFloat(getComputedStyle(p.value).getPropertyValue("--v-body-scroll-y")) || 0;
      C.height < window.innerHeight - A ? (D.value = "top", m.value = A) : P === "up" && D.value === "bottom" || P === "down" && D.value === "top" ? (m.value = window.scrollY + C.top - ie, D.value = !0) : P === "down" && O <= 0 ? (m.value = 0, D.value = "bottom") : P === "up" && L <= 0 && (ie ? D.value !== "top" && (m.value = -L + ie + A, D.value = "top") : (m.value = C.top + L, D.value = "top")), Y = window.scrollY;
    }
    return { isStuck: D, stickyStyles: M };
  }({ rootEl: X, isSticky: oe, layoutItemStyles: ae }), B = et(g(() => typeof e.scrim == "string" ? e.scrim : null)), b = g(() => ({ ...Q.value ? { opacity: 0.2 * ye.value, transition: "none" } : void 0, ...re.value }));
  function G() {
    te.value = !0;
  }
  function N() {
    te.value = !1;
  }
  return pt({ VList: { bgColor: "transparent" } }), yt(() => {
    const i = o.image || e.image;
    return z(lt, null, [z(e.tag, Ee({ ref: X, onMouseenter: G, onMouseleave: N, class: ["v-navigation-drawer", `v-navigation-drawer--${ne.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": te.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--active": F.value, "v-navigation-drawer--sticky": oe.value }, d.value, r.value, s.value, c.value, E.value, e.class], style: [l.value, ae.value, We.value, I.value, h.value, e.style] }, j, t), { default: () => {
      var p, S, y, D;
      return [i && z("div", { key: "image", class: "v-navigation-drawer__img" }, [o.image ? (p = o.image) == null ? void 0 : p.call(o, { image: e.image }) : z("img", { src: e.image, alt: "" }, null)]), o.prepend && z("div", { class: "v-navigation-drawer__prepend" }, [(S = o.prepend) == null ? void 0 : S.call(o)]), z("div", { class: "v-navigation-drawer__content" }, [(y = o.default) == null ? void 0 : y.call(o)]), o.append && z("div", { class: "v-navigation-drawer__append" }, [(D = o.append) == null ? void 0 : D.call(o)])];
    } }), z(Vt, { name: "fade-transition" }, { default: () => [T.value && (Q.value || F.value) && !!e.scrim && z("div", Ee({ class: ["v-navigation-drawer__scrim", B.backgroundColorClasses.value], style: [b.value, B.backgroundColorStyles.value], onClick: () => F.value = !1 }, j), null)] })]);
  }), { isStuck: u };
} }), _ = "v-resize-drawer";
function Pe(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
const Me = (e) => {
  const { action: n = "update", resizedWidth: t, storageType: a, storageName: o, saveWidth: v, rail: d } = e;
  if (!v || d)
    return;
  let s = t;
  s = s ?? void 0, n === "set" && (s = Pe(a, o) ?? "", s = s || t), a === "local" && localStorage.setItem(o, String(s)), a === "session" && sessionStorage.setItem(o, String(s));
}, me = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, Le = (e) => {
  const n = window.innerWidth;
  return typeof e == "string" && e.includes("%") ? Number(e.replace("%", "")) / 100 * n : typeof e == "string" ? Number(e.replace(/\D/g, "")) : e;
};
function at(e) {
  let n = function(c) {
    const w = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let E = c;
    return Object.entries(w).forEach(([f, F]) => {
      c.toLowerCase() != f.toLowerCase() || (E = F);
    }), E;
  }(e), t = 0, a = 0, o = 0, v = 0, d = 0, s = 0;
  if (n.substring(0, 1) === "#")
    n = function(c) {
      let w = c.replace("#", "");
      w.length === 3 && (w = w.split("").map((I) => I + I).join(""));
      const E = parseInt(w.substring(0, 2), 16), f = parseInt(w.substring(2, 4), 16), F = parseInt(w.substring(4, 6), 16);
      return [E, f, F];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), t = n[0], a = n[1], o = n[2], `${t} ${a}% ${o}%`;
  [v, d, s] = n, v /= 255, d /= 255, s /= 255;
  const r = Math.max(v, d, s), l = Math.min(v, d, s);
  if (r === null || !l === null || isNaN(r) || isNaN(l)) {
    const c = "0 0% 100% / 12%";
    return console.warn(`[VResizeDrawer]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${c})" in it's place.`), c;
  }
  if (t = (r + l) / 2, a = (r + l) / 2, o = (r + l) / 2, r == l)
    t = a = 0;
  else {
    const c = r - l;
    switch (a = o > 0.5 ? c / (2 - r - l) : c / (r + l), r) {
      case v:
        t = (d - s) / c + (d < s ? 6 : 0);
        break;
      case d:
        t = (s - v) / c + 2;
        break;
      case s:
        t = (v - d) / c + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), a = Math.round(100 * a), o = Math.round(100 * o), `${t} ${a}% ${o}%`;
}
const rt = (e, n) => {
  if (function(a) {
    return a === "transparent" || a === "none" || a === "inherit" || a === "currentColor" || a === "initial" || a === "unset";
  }(e))
    return e;
  if (function(a) {
    return a.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const t = function(a, o) {
    const v = o.global.current.value.colors;
    return Object.entries(v).find(([d]) => d === a);
  }(e, n);
  return t ? `hsl(${at(t[1])})` : `hsl(${at(e)})`;
}, hn = { default: "1.5em", large: "1.75em", small: "1.25em", "x-large": "2em", "x-small": "1em" }, pn = { fa: { bottom: "fas fa-grip", center: "fas fa-angles-right", top: "fas fa-grip" }, mdi: { bottom: "mdi:mdi-dots-grid", center: "mdi:mdi-chevron-double-right", top: "mdi:mdi-dots-grid" } }, gn = { key: 0, class: "v-resize-drawer--handle-slot" }, it = ut({ __name: "VResizeDrawer", props: Ot({ absolute: {}, expandOnHover: {}, floating: {}, handleBorderWidth: {}, handleColor: {}, handleIcon: {}, handleIconSize: {}, handlePosition: {}, height: {}, location: {}, maxWidth: {}, minWidth: {}, modelValue: {}, name: {}, rail: {}, railWidth: {}, resizable: { type: Boolean }, saveWidth: { type: Boolean }, storageName: {}, storageType: {}, tag: {}, temporary: {}, theme: {}, width: {}, widthSnapBack: { type: Boolean } }, { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: void 0, location: "start", maxWidth: "100%", minWidth: 56, modelValue: !0, name: _, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, storageName: `${_}-width`, storageType: "local", tag: "nav", theme: "light", width: 256, widthSnapBack: !0 }), emits: ["handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup"], setup(e, { emit: n }) {
  const t = e, a = g(() => t), o = ue(Symbol.for("vuetify:icons")), v = ee(256), d = { mouseDown: !1, mouseUp: !0 }, s = ee(!1), r = ee(), l = ee(256), c = Rt(), w = _t();
  Be(() => {
    if (t.location !== "start" && t.location !== "end" && t.location !== "left" && t.location !== "right")
      throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");
    (function() {
      if (t.rail)
        return l.value = t.railWidth || void 0, !1;
      const u = Pe(t.storageType, t.storageName), h = me({ str: t.width });
      l.value = h, v.value = l.value, t.saveWidth && u && !t.rail && (l.value = Pe(t.storageType, t.storageName)), function() {
        const B = r.value;
        if (B) {
          const b = B.$el;
          b.addEventListener("mouseenter", ne, !1), b.addEventListener("mouseleave", T, !1);
        }
      }(), Me({ action: "update", rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType });
    })();
  }), Tt(() => {
    (function() {
      const u = r.value;
      if (u) {
        const h = u.$el;
        h.addEventListener("mouseenter", ne, !1), h.addEventListener("mouseleave", T, !1);
      }
      document.removeEventListener("mouseup", ae, !1), document.removeEventListener("mousemove", oe, !1);
    })();
  });
  const E = g(() => ((u) => {
    const { absolute: h = !1, expandOnHover: B, floating: b, isMouseover: G, location: N, rail: V, railWidth: H, temporary: i } = u;
    return { [`${_}`]: !0, "v-navigation-drawer--absolute": h ?? !1, "v-navigation-drawer--custom-rail": Number(H) !== 56, "v-navigation-drawer--fixed": !h, "v-navigation-drawer--floating": b, "v-navigation-drawer--is-mouseover": $(G), "v-navigation-drawer--left": N === "left" || N === "start" || N === void 0, "v-navigation-drawer--open-on-hover": B, "v-navigation-drawer--rail": V ?? !1, "v-navigation-drawer--right": N === "right" || N === "end", "v-navigation-drawer--temporary": i };
  })({ absolute: t.absolute, expandOnHover: t.expandOnHover, floating: t.floating, isMouseover: s, location: t.location, rail: t.rail, railWidth: t.railWidth, temporary: t.temporary })), f = g(() => ((u) => {
    const { maxWidth: h, minWidth: B, rail: b, railWidth: G, resizedWidth: N, widthSnapBack: V } = u;
    if (b)
      return {};
    let H = b ? G : $(N);
    return V || (parseInt(H) >= parseInt(h) && (H = h), parseInt(H) <= parseInt(B) && (H = B)), { width: me({ str: H }) };
  })({ maxWidth: t.maxWidth, minWidth: t.minWidth, rail: t.rail, railWidth: t.railWidth, resizedWidth: l, widthSnapBack: t.widthSnapBack })), F = g(() => {
    if (!t.rail)
      return me({ str: l.value });
  }), I = g(() => ((u) => {
    const { drawerLocation: h, handlePosition: B } = u;
    return { [`${_}--handle-container`]: !0, [`${_}--handle-container-position-${B}`]: !0, [`${_}--handle-container-parent-${h}`]: !0 };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition })), j = g(() => ((u) => {
    const { borderWidth: h, handleColor: B, iconSize: b, position: G, theme: N } = u;
    if (G === "border")
      return { backgroundColor: rt(B, N), height: "100%", width: me({ str: h }) };
    const V = hn[b];
    return { backgroundColor: "transparent", height: V, width: V };
  })({ borderWidth: t.handleBorderWidth, handleColor: t.handleColor, iconSize: t.handleIconSize, position: t.handlePosition, theme: w })), X = g(() => ((u) => {
    const { color: h, theme: B } = u;
    return { color: rt(h, B) };
  })({ color: t.handleColor, theme: w })), te = g(() => ((u) => {
    const { drawerLocation: h, handlePosition: B, iconOptions: b, isUserIcon: G } = u;
    return { [`${_}--handle-container-icon`]: !0, [`${_}--handle-container-icon-${B}-${h}`]: !0, [`${_}--handle-container-icon-user-icon`]: G, [`${_}--handle-container-icon-fa`]: (b == null ? void 0 : b.defaultSet) === "fa", [`${_}--handle-container-icon-fa-${B}`]: (b == null ? void 0 : b.defaultSet) === "fa" };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition, iconOptions: o, isUserIcon: t.handleIcon !== void 0 && t.handleIcon !== null })), ge = g(() => ((h) => {
    const { icon: B, iconOptions: b, position: G } = h;
    if (B)
      return B;
    const N = pn[b == null ? void 0 : b.defaultSet];
    if (!N)
      throw new Error(`VResizeDrawer: No default ${b == null ? void 0 : b.defaultSet} icon set found. Please set the icon prop.`);
    const V = N[G];
    if (!V)
      throw new Error(`VResizeDrawer: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
    return V;
  })({ icon: t.handleIcon, iconOptions: o, position: t.handlePosition }));
  function ne() {
    s.value = !0;
  }
  function T() {
    s.value = !1;
  }
  function oe(u) {
    let h = u.clientX;
    t.location !== "right" && t.location !== "end" || (h = document.body.scrollWidth - h), l.value = me({ str: h }) || void 0, t.widthSnapBack || (l.value = Q(l.value)), document.body.style.cursor = "grabbing", re("handle:drag", u);
  }
  function Q(u) {
    let h = Le(u);
    const B = Le(t.maxWidth), b = Le(t.minWidth);
    return h >= B && (h = B), b >= h && (h = b), h;
  }
  function ye(u) {
    re("handle:click", u);
  }
  function We(u) {
    l.value = v.value, Me({ rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), re("handle:dblclick", u);
  }
  function $e(u) {
    u.preventDefault(), u.stopPropagation();
    let h = 25;
    t.handlePosition === "border" && (h = t.handleBorderWidth), d.mouseUp = !1, u.offsetX < h && document.addEventListener("mousemove", oe, !1), d.mouseDown || (d.mouseDown = !0, document.addEventListener("mouseup", ae, !1), re("handle:mousedown", u));
  }
  function ae(u) {
    u.preventDefault(), u.stopPropagation();
    const h = r.value;
    d.mouseDown = !1, l.value = (h == null ? void 0 : h.width) ?? v.value, document.body.style.cursor = "", l.value = Q(l.value), l.value = me({ str: l.value }) || void 0, Me({ rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), d.mouseUp || (d.mouseUp = !0, document.removeEventListener("mouseup", ae, !1), document.removeEventListener("mousemove", oe, !1), re("handle:mouseup", u));
  }
  function re(u, h) {
    const B = { e: h, eventName: u, offsetWidth: l.value, resizedWidth: l.value, width: l.value };
    n(u, B);
  }
  return (u, h) => (Fe(), Ye($(mn), Ee($(a), { ref_key: "resizeDrawer", ref: r, class: $(E), location: t.location, "model-value": u.modelValue, name: t.name, style: $(f), tag: t.tag, theme: t.theme, width: $(F) }), { default: Gt(() => [t.resizable && !t.rail ? (Fe(), Ue("div", { key: 0, class: qe($(I)), style: Xe($(j)), onClick: ye, onDblclick: We, onMousedown: $e, onMouseup: ae }, [$(c).handle ? (Fe(), Ue("div", gn, [be(u.$slots, "handle")])) : u.handlePosition !== "border" ? (Fe(), Ye(rn, { key: 1, class: qe(["v-resize-drawer--handle-icon", $(te)]), icon: $(ge), size: u.handleIconSize, style: Xe($(X)) }, null, 8, ["class", "icon", "size", "style"])) : Se("", !0)], 38)) : Se("", !0), $(c).prepend ? be(u.$slots, "prepend", { key: 1 }) : Se("", !0), be(u.$slots, "default"), $(c).append ? be(u.$slots, "append", { key: 2 }) : Se("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} });
it.install = (e) => {
  e.component("VResizeDrawer", it);
};
export {
  it as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;height:100%;max-width:100%;pointer-events:auto;transition-duration:.2s;transition-property:box-shadow,transform,visibility,width,height,left,right,top,bottom;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;position:absolute;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-navigation-drawer--border{border-width:thin;box-shadow:none}.v-navigation-drawer--rounded{border-radius:4px}.v-navigation-drawer--top{top:0;border-bottom-width:thin}.v-navigation-drawer--bottom{left:0;border-top-width:thin}.v-navigation-drawer--left{top:0;left:0;right:auto;border-right-width:thin}.v-navigation-drawer--right{top:0;left:auto;right:0;border-left-width:thin}.v-navigation-drawer--floating{border:none}.v-navigation-drawer--temporary{box-shadow:0 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-navigation-drawer--sticky{height:auto;transition:box-shadow,transform,visibility,width,height,left,right}.v-navigation-drawer .v-list{overflow:hidden}.v-navigation-drawer__content{flex:0 1 auto;height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.v-navigation-drawer__img{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-navigation-drawer__img img{height:inherit;object-fit:cover;width:inherit}.v-navigation-drawer__scrim{position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.2;transition:opacity .2s cubic-bezier(.4,0,.2,1);z-index:1}.v-resize-drawer--handle-container{cursor:grab;align-items:center;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
