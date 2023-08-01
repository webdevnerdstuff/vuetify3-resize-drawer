import { Fragment as lt, reactive as Dt, computed as g, watchEffect as st, toRefs as Et, warn as kt, watch as ae, onScopeDispose as At, effectScope as Wt, ref as Q, unref as W, provide as Ve, inject as re, shallowRef as Z, defineComponent as ut, getCurrentInstance as $t, onDeactivated as xt, onActivated as Mt, onBeforeUnmount as Me, toRaw as zt, isRef as fe, onMounted as Be, readonly as Lt, createVNode as M, mergeProps as Ee, toRef as Ie, Text as It, nextTick as Nt, onBeforeMount as Pt, Transition as Vt, mergeDefaults as Ot, useSlots as Rt, onUnmounted as Tt, openBlock as Fe, createBlock as Ye, withCtx as Gt, createElementBlock as Ue, normalizeClass as qe, normalizeStyle as Xe, renderSlot as be, createCommentVNode as Se } from "vue";
import { useTheme as _t } from "vuetify";
/**
 * @name vuetify3-resize-drawer
 * @version 2.0.3
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @repository https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @license MIT License
 */
function T(e, n) {
  return (t) => Object.keys(e).reduce((a, o) => {
    const v = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return a[o] = t && o in t ? { ...v, default: t[o] } : v, n && !a[o].source && (a[o].source = n), a;
  }, {});
}
const ct = T({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
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
function oe(e, n) {
  return function(t, a) {
    return a.get ? a.get.call(t) : a.value;
  }(e, dt(e, n, "get"));
}
function dt(e, n, t) {
  if (!n.has(e))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return n.get(e);
}
function me(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Ze(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function he() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const o in e)
    a[o] = e[o];
  for (const o in n) {
    const v = e[o], d = n[o];
    Ze(v) && Ze(d) ? a[o] = he(v, d, t) : Array.isArray(v) && Array.isArray(d) && t ? a[o] = t(v, d) : a[o] = d;
  }
  return a;
}
function vt(e) {
  return e.map((n) => n.type === lt ? vt(n.children) : n).flat();
}
function ie() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ie.cache.has(e))
    return ie.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ie.cache.set(e, n), n;
}
ie.cache = /* @__PURE__ */ new Map();
var Ce = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap();
class Ht {
  constructor(n) {
    Ke(this, Ce, { writable: !0, value: [] }), Ke(this, ce, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    oe(this, Ce)[oe(this, ce)] = n, jt(this, ce, (oe(this, ce) + 1) % this.size);
  }
  values() {
    return oe(this, Ce).slice(oe(this, ce)).concat(oe(this, Ce).slice(0, oe(this, ce)));
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
  ae(e, (o) => {
    o && !t ? a() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), At(() => {
    t == null || t.stop();
  });
}
const Oe = Symbol.for("vuetify:defaults");
function Re() {
  const e = re(Oe);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pt(e, n) {
  const t = Re(), a = Q(e), o = g(() => {
    if (W(n == null ? void 0 : n.disabled))
      return t.value;
    const v = W(n == null ? void 0 : n.scoped), d = W(n == null ? void 0 : n.reset), s = W(n == null ? void 0 : n.root);
    let l = he(a.value, { prev: t.value });
    if (v)
      return l;
    if (d || s) {
      const h = Number(d || 1 / 0);
      for (let i = 0; i <= h && l && "prev" in l; i++)
        l = l.prev;
      return l && typeof s == "string" && s in l && (l = he(he(l, { prev: l }), l[s])), l;
    }
    return l.prev ? he(l.prev, l) : l;
  });
  return Ve(Oe, o), o;
}
function Yt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Re();
  const a = U("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = g(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), v = new Proxy(e, { get(s, l) {
    var i, y, E, f;
    const h = Reflect.get(s, l);
    return l === "class" || l === "style" ? [(i = o.value) == null ? void 0 : i[l], h].filter((F) => F != null) : typeof l != "string" || function(F, N) {
      var j, q;
      return ((j = F.props) == null ? void 0 : j[N]) !== void 0 || ((q = F.props) == null ? void 0 : q[ie(N)]) !== void 0;
    }(a.vnode, l) ? h : ((y = o.value) == null ? void 0 : y[l]) ?? ((f = (E = t.value) == null ? void 0 : E.global) == null ? void 0 : f[l]) ?? h;
  } }), d = Z();
  return st(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((l) => {
        let [h] = l;
        return h.startsWith(h[0].toUpperCase());
      });
      s.length && (d.value = Object.fromEntries(s));
    }
  }), { props: v, provideSubDefaults: function() {
    ht(d, () => {
      var s;
      pt(he(((s = function(l) {
        const { provides: h } = U("injectSelf");
        if (h && l in h)
          return h[l];
      }(Oe)) == null ? void 0 : s.value) ?? {}, d.value));
    });
  } };
}
function ke(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return kt("Vuetify: The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = T(e.props ?? {}, e.name)();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return function(a, o, v) {
        const d = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
        for (const l in a)
          o.some((h) => h instanceof RegExp ? h.test(l) : h === l) && !(v != null && v.some((h) => h === l)) ? d[l] = a[l] : s[l] = a[l];
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
function U(e, n) {
  const t = $t();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Ne() {
  const e = U(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return ie((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let gt = 0, De = /* @__PURE__ */ new WeakMap();
function ft() {
  const e = U("getUid");
  if (De.has(e))
    return De.get(e);
  {
    const n = gt++;
    return De.set(e, n), n;
  }
}
function yt(e) {
  U("useRender").render = e;
}
ft.reset = () => {
  gt = 0, De = /* @__PURE__ */ new WeakMap();
};
const Ut = Symbol.for("vuetify:layout"), qt = Symbol.for("vuetify:layout-item"), Xt = T({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item"), Kt = Symbol.for("vuetify:locale"), Je = Symbol.for("vuetify:theme"), wt = T({ theme: String }, "theme");
function Ft(e) {
  U("provideTheme");
  const n = re(Je, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = g(() => e.theme ?? (n == null ? void 0 : n.name.value)), a = g(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...n, name: t, themeClasses: a };
  return Ve(Je, o), o;
}
const bt = T({ tag: { type: String, default: "div" } }, "tag"), Zt = T({ border: [Boolean, Number, String] }, "border");
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
const Qt = T({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), Jt = T({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded"), Ct = [String, Function, Object, Array], en = Symbol.for("vuetify:icons"), Ae = T({ icon: { type: Ct }, tag: { type: String, required: !0 } }, "icon"), tt = Te()({ name: "VComponentIcon", props: Ae(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const a = e.icon;
    return M(e.tag, null, { default: () => {
      var o;
      return [e.icon ? M(a, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), tn = ke({ name: "VSvgIcon", inheritAttrs: !1, props: Ae(), setup(e, n) {
  let { attrs: t } = n;
  return () => M(e.tag, Ee(t, { style: null }), { default: () => [M("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? M("path", { d: a[0], "fill-opacity": a[1] }, null) : M("path", { d: a }, null)) : M("path", { d: e.icon }, null)])] });
} });
ke({ name: "VLigatureIcon", props: Ae(), setup: (e) => () => M(e.tag, null, { default: () => [e.icon] }) }), ke({ name: "VClassIcon", props: Ae(), setup: (e) => () => M(e.tag, { class: e.icon }, null) });
const nn = ["x-small", "small", "default", "large", "x-large"], on = T({ size: { type: [String, Number], default: "default" } }, "size"), an = T({ color: String, start: Boolean, end: Boolean, icon: Ct, ...ct(), ...on(), ...bt({ tag: "i" }), ...wt() }, "VIcon"), rn = Te()({ name: "VIcon", props: an(), setup(e, n) {
  let { attrs: t, slots: a } = n;
  const o = Q(), { themeClasses: v } = Ft(e), { iconData: d } = ((i) => {
    const y = re(en);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: g(() => {
      var j;
      const E = W(i);
      if (!E)
        return { component: tt };
      let f = E;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (j = y.aliases) == null ? void 0 : j[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${E}"`);
      if (Array.isArray(f))
        return { component: tn, icon: f };
      if (typeof f != "string")
        return { component: tt, icon: f };
      const F = Object.keys(y.sets).find((q) => typeof f == "string" && f.startsWith(`${q}:`)), N = F ? f.slice(F.length + 1) : f;
      return { component: y.sets[F ?? y.defaultSet].component, icon: N };
    }) };
  })(g(() => o.value || e.icon)), { sizeClasses: s } = function(i) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return mt(() => {
      let E, f;
      var F, N;
      return F = nn, N = i.size, F.includes(N) ? E = `${y}--size-${i.size}` : i.size && (f = { width: me(i.size), height: me(i.size) }), { sizeClasses: E, sizeStyles: f };
    });
  }(e), { textColorClasses: l, textColorStyles: h } = function(i, y) {
    const E = g(() => ({ text: fe(i) ? i.value : y ? i[y] : null })), { colorClasses: f, colorStyles: F } = St(E);
    return { textColorClasses: f, textColorStyles: F };
  }(Ie(e, "color"));
  return yt(() => {
    var y, E;
    const i = (y = a.default) == null ? void 0 : y.call(a);
    return i && (o.value = (E = vt(i).filter((f) => f.type === It && f.children && typeof f.children == "string")[0]) == null ? void 0 : E.children), M(d.value.component, { tag: e.tag, icon: d.value.icon, class: ["v-icon", "notranslate", v.value, s.value, l.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: me(e.size), height: me(e.size), width: me(e.size) }, h.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [i] });
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
      const { x: s, y: l } = this, [h, i] = [Math.abs(s), Math.abs(l)];
      return h > i && s >= 0 ? "right" : h > i && s <= 0 ? "left" : i > h && l >= 0 ? "down" : i > h && l <= 0 ? "up" : function() {
        throw new Error();
      }();
    } };
  } };
}
function de() {
  throw new Error();
}
const dn = ["start", "end", "left", "right", "top", "bottom"], vn = T({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => dn.includes(e) }, sticky: Boolean, ...Zt(), ...ct(), ...Qt(), ...Xt(), ...Jt(), ...bt({ tag: "nav" }), ...wt() }, "VNavigationDrawer"), mn = Te()({ name: "VNavigationDrawer", props: vn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var P, I;
  let { attrs: t, emit: a, slots: o } = n;
  const { isRtl: v } = function() {
    const r = re(Kt);
    if (!r)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: r.isRtl, rtlClasses: r.rtlClasses };
  }(), { themeClasses: d } = Ft(e), { borderClasses: s } = function(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return { borderClasses: g(() => {
      const S = fe(r) ? r.value : r.border, w = [];
      if (S === !0 || S === "")
        w.push(`${u}--border`);
      else if (typeof S == "string" || S === 0)
        for (const B of String(S).split(" "))
          w.push(`border-${B}`);
      return w;
    }) };
  }(e), { backgroundColorClasses: l, backgroundColorStyles: h } = et(Ie(e, "color")), { elevationClasses: i } = function(r) {
    return { elevationClasses: g(() => {
      const u = fe(r) ? r.value : r.elevation, S = [];
      return u == null || S.push(`elevation-${u}`), S;
    }) };
  }(e), { mobile: y } = function() {
    const r = re(ln);
    if (!r)
      throw new Error("Could not find Vuetify display injection");
    return r;
  }(), { roundedClasses: E } = function(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne();
    return { roundedClasses: g(() => {
      const S = fe(r) ? r.value : r.rounded, w = [];
      if (S === !0 || S === "")
        w.push(`${u}--rounded`);
      else if (typeof S == "string" || S === 0)
        for (const B of String(S).split(" "))
          w.push(`rounded-${B}`);
      return w;
    }) };
  }(e), f = (I = (P = U("useRouter")) == null ? void 0 : P.proxy) == null ? void 0 : I.$router, F = function(r, u, S) {
    let w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (C) => C, B = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (C) => C;
    const m = U("useProxiedModel"), z = Q(r[u] !== void 0 ? r[u] : S), H = ie(u), Y = g(H !== u ? () => {
      var C, A, L, R;
      return r[u], !(!((C = m.vnode.props) != null && C.hasOwnProperty(u)) && !((A = m.vnode.props) != null && A.hasOwnProperty(H)) || !((L = m.vnode.props) != null && L.hasOwnProperty(`onUpdate:${u}`)) && !((R = m.vnode.props) != null && R.hasOwnProperty(`onUpdate:${H}`)));
    } : () => {
      var C, A;
      return r[u], !(!((C = m.vnode.props) != null && C.hasOwnProperty(u)) || !((A = m.vnode.props) != null && A.hasOwnProperty(`onUpdate:${u}`)));
    });
    ht(() => !Y.value, () => {
      ae(() => r[u], (C) => {
        z.value = C;
      });
    });
    const V = g({ get() {
      const C = r[u];
      return w(Y.value ? C : z.value);
    }, set(C) {
      const A = B(C), L = zt(Y.value ? r[u] : z.value);
      L !== A && w(L) !== C && (z.value = A, m == null || m.emit(`update:${u}`, A));
    } });
    return Object.defineProperty(V, "externalValue", { get: () => Y.value ? r[u] : z.value }), V;
  }(e, "modelValue", null, (r) => !!r), { ssrBootStyles: N } = function() {
    const r = Z(!1);
    return Be(() => {
      window.requestAnimationFrame(() => {
        r.value = !0;
      });
    }), { ssrBootStyles: g(() => r.value ? void 0 : { transition: "none !important" }), isBooted: Lt(r) };
  }(), { scopeId: j } = function() {
    const r = U("useScopeId").vnode.scopeId;
    return { scopeId: r ? { [r]: "" } : void 0 };
  }(), q = Q(), te = Z(!1), pe = g(() => e.rail && e.expandOnHover && te.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), le = g(() => function(r, u) {
    return r === "start" ? u ? "right" : "left" : r === "end" ? u ? "left" : "right" : r;
  }(e.location, v.value)), G = g(() => !e.permanent && (y.value || e.temporary)), se = g(() => e.sticky && !G.value && le.value !== "bottom");
  e.expandOnHover && e.rail != null && ae(te, (r) => a("update:rail", !r)), e.disableResizeWatcher || ae(G, (r) => !e.permanent && Nt(() => F.value = !r)), !e.disableRouteWatcher && f && ae(f.currentRoute, () => G.value && (F.value = !1)), ae(() => e.permanent, (r) => {
    r && (F.value = !0);
  }), Pt(() => {
    e.modelValue != null || G.value || (F.value = e.permanent || !y.value);
  });
  const { isDragging: X, dragProgress: ge, dragStyles: We } = function(r) {
    let { isActive: u, isTemporary: S, width: w, touchless: B, position: m } = r;
    Be(() => {
      window.addEventListener("touchstart", _e, { passive: !0 }), window.addEventListener("touchmove", je, { passive: !1 }), window.addEventListener("touchend", He, { passive: !0 });
    }), Me(() => {
      window.removeEventListener("touchstart", _e), window.removeEventListener("touchmove", je), window.removeEventListener("touchend", He);
    });
    const z = g(() => ["left", "right"].includes(m.value)), { addMovement: H, endTouch: Y, getVelocity: V } = cn();
    let C = !1;
    const A = Z(!1), L = Z(0), R = Z(0);
    let ne;
    function xe(k, $) {
      return (m.value === "left" ? k : m.value === "right" ? document.documentElement.clientWidth - k : m.value === "top" ? k : m.value === "bottom" ? document.documentElement.clientHeight - k : de()) - ($ ? w.value : 0);
    }
    function Ge(k) {
      let $ = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const x = m.value === "left" ? (k - R.value) / w.value : m.value === "right" ? (document.documentElement.clientWidth - k - R.value) / w.value : m.value === "top" ? (k - R.value) / w.value : m.value === "bottom" ? (document.documentElement.clientHeight - k - R.value) / w.value : de();
      return $ ? Math.max(0, Math.min(1, x)) : x;
    }
    function _e(k) {
      if (B.value)
        return;
      const $ = k.changedTouches[0].clientX, x = k.changedTouches[0].clientY, K = m.value === "left" ? $ < 25 : m.value === "right" ? $ > document.documentElement.clientWidth - 25 : m.value === "top" ? x < 25 : m.value === "bottom" ? x > document.documentElement.clientHeight - 25 : de(), ee = u.value && (m.value === "left" ? $ < w.value : m.value === "right" ? $ > document.documentElement.clientWidth - w.value : m.value === "top" ? x < w.value : m.value === "bottom" ? x > document.documentElement.clientHeight - w.value : de());
      (K || ee || u.value && S.value) && (C = !0, ne = [$, x], R.value = xe(z.value ? $ : x, u.value), L.value = Ge(z.value ? $ : x), Y(k), H(k));
    }
    function je(k) {
      const $ = k.changedTouches[0].clientX, x = k.changedTouches[0].clientY;
      if (C) {
        if (!k.cancelable)
          return void (C = !1);
        const ee = Math.abs($ - ne[0]), we = Math.abs(x - ne[1]);
        (z.value ? ee > we && ee > 3 : we > ee && we > 3) ? (A.value = !0, C = !1) : (z.value ? we : ee) > 3 && (C = !1);
      }
      if (!A.value)
        return;
      k.preventDefault(), H(k);
      const K = Ge(z.value ? $ : x, !1);
      L.value = Math.max(0, Math.min(1, K)), K > 1 ? R.value = xe(z.value ? $ : x, !0) : K < 0 && (R.value = xe(z.value ? $ : x, !1));
    }
    function He(k) {
      if (C = !1, !A.value)
        return;
      H(k), A.value = !1;
      const $ = V(k.changedTouches[0].identifier), x = Math.abs($.x), K = Math.abs($.y), ee = z.value ? x > K && x > 400 : K > x && K > 3;
      u.value = ee ? $.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[m.value] || de()) : L.value > 0.5;
    }
    const Bt = g(() => A.value ? { transform: m.value === "left" ? `translateX(calc(-100% + ${L.value * w.value}px))` : m.value === "right" ? `translateX(calc(100% - ${L.value * w.value}px))` : m.value === "top" ? `translateY(calc(-100% + ${L.value * w.value}px))` : m.value === "bottom" ? `translateY(calc(100% - ${L.value * w.value}px))` : de(), transition: "none" } : void 0);
    return { isDragging: A, dragProgress: L, dragStyles: Bt };
  }({ isActive: F, isTemporary: G, width: pe, touchless: Ie(e, "touchless"), position: le }), $e = g(() => {
    const r = G.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : pe.value;
    return X.value ? r * ge.value : r;
  }), { layoutItemStyles: ye, layoutItemScrimStyles: ue } = function(r) {
    const u = re(Ut);
    if (!u)
      throw new Error("[Vuetify] Could not find injected layout");
    const S = r.id ?? `layout-item-${ft()}`, w = U("useLayoutItem");
    Ve(qt, { id: S });
    const B = Z(!1);
    xt(() => B.value = !0), Mt(() => B.value = !1);
    const { layoutItemStyles: m, layoutItemScrimStyles: z } = u.register(w, { ...r, active: g(() => !B.value && r.active.value), id: S });
    return Me(() => u.unregister(S)), { layoutItemStyles: m, layoutRect: u.layoutRect, layoutItemScrimStyles: z };
  }({ id: e.name, order: g(() => parseInt(e.order, 10)), position: le, layoutSize: $e, elementSize: pe, active: g(() => F.value || X.value), disableTransitions: g(() => X.value), absolute: g(() => e.absolute || se.value && typeof J.value != "string") }), { isStuck: J, stickyStyles: c } = function(r) {
    let { rootEl: u, isSticky: S, layoutItemStyles: w } = r;
    const B = Z(!1), m = Z(0), z = g(() => {
      const V = typeof B.value == "boolean" ? "top" : B.value;
      return [S.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, B.value ? { [V]: me(m.value) } : { top: w.value.top }];
    });
    Be(() => {
      ae(S, (V) => {
        V ? window.addEventListener("scroll", Y, { passive: !0 }) : window.removeEventListener("scroll", Y);
      }, { immediate: !0 });
    }), Me(() => {
      document.removeEventListener("scroll", Y);
    });
    let H = 0;
    function Y() {
      const V = H > window.scrollY ? "up" : "down", C = u.value.getBoundingClientRect(), A = parseFloat(w.value.top ?? 0), L = window.scrollY - Math.max(0, m.value - A), R = C.height + Math.max(m.value, A) - window.scrollY - window.innerHeight, ne = parseFloat(getComputedStyle(u.value).getPropertyValue("--v-body-scroll-y")) || 0;
      C.height < window.innerHeight - A ? (B.value = "top", m.value = A) : V === "up" && B.value === "bottom" || V === "down" && B.value === "top" ? (m.value = window.scrollY + C.top - ne, B.value = !0) : V === "down" && R <= 0 ? (m.value = 0, B.value = "bottom") : V === "up" && L <= 0 && (ne ? B.value !== "top" && (m.value = -L + ne + A, B.value = "top") : (m.value = C.top + L, B.value = "top")), H = window.scrollY;
    }
    return { isStuck: B, stickyStyles: z };
  }({ rootEl: q, isSticky: se, layoutItemStyles: ye }), p = et(g(() => typeof e.scrim == "string" ? e.scrim : null)), D = g(() => ({ ...X.value ? { opacity: 0.2 * ge.value, transition: "none" } : void 0, ...ue.value }));
  function b() {
    te.value = !0;
  }
  function O() {
    te.value = !1;
  }
  return pt({ VList: { bgColor: "transparent" } }), yt(() => {
    const r = o.image || e.image;
    return M(lt, null, [M(e.tag, Ee({ ref: q, onMouseenter: b, onMouseleave: O, class: ["v-navigation-drawer", `v-navigation-drawer--${le.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": te.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": G.value, "v-navigation-drawer--active": F.value, "v-navigation-drawer--sticky": se.value }, d.value, l.value, s.value, i.value, E.value, e.class], style: [h.value, ye.value, We.value, N.value, c.value, e.style] }, j, t), { default: () => {
      var u, S, w, B;
      return [r && M("div", { key: "image", class: "v-navigation-drawer__img" }, [o.image ? (u = o.image) == null ? void 0 : u.call(o, { image: e.image }) : M("img", { src: e.image, alt: "" }, null)]), o.prepend && M("div", { class: "v-navigation-drawer__prepend" }, [(S = o.prepend) == null ? void 0 : S.call(o)]), M("div", { class: "v-navigation-drawer__content" }, [(w = o.default) == null ? void 0 : w.call(o)]), o.append && M("div", { class: "v-navigation-drawer__append" }, [(B = o.append) == null ? void 0 : B.call(o)])];
    } }), M(Vt, { name: "fade-transition" }, { default: () => [G.value && (X.value || F.value) && !!e.scrim && M("div", Ee({ class: ["v-navigation-drawer__scrim", p.backgroundColorClasses.value], style: [D.value, p.backgroundColorStyles.value], onClick: () => F.value = !1 }, j), null)] })]);
  }), { isStuck: J };
} }), _ = "v-resize-drawer";
function Pe(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
const ze = (e) => {
  const { action: n = "update", resizedWidth: t, storageType: a, storageName: o, saveWidth: v, rail: d } = e;
  if (!v || d)
    return;
  let s = t;
  s = s ?? void 0, n === "set" && (s = Pe(a, o) ?? "", s = s || t), a === "local" && localStorage.setItem(o, String(s)), a === "session" && sessionStorage.setItem(o, String(s));
}, ve = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, Le = (e) => {
  const n = window.innerWidth;
  return typeof e == "string" && e.includes("%") ? Number(e.replace("%", "")) / 100 * n : typeof e == "string" ? Number(e.replace(/\D/g, "")) : e;
};
function at(e) {
  let n = function(i) {
    const y = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let E = i;
    return Object.entries(y).forEach(([f, F]) => {
      i.toLowerCase() != f.toLowerCase() || (E = F);
    }), E;
  }(e), t = 0, a = 0, o = 0, v = 0, d = 0, s = 0;
  if (n.substring(0, 1) === "#")
    n = function(i) {
      let y = i.replace("#", "");
      y.length === 3 && (y = y.split("").map((N) => N + N).join(""));
      const E = parseInt(y.substring(0, 2), 16), f = parseInt(y.substring(2, 4), 16), F = parseInt(y.substring(4, 6), 16);
      return [E, f, F];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), t = n[0], a = n[1], o = n[2], `${t} ${a}% ${o}%`;
  [v, d, s] = n, v /= 255, d /= 255, s /= 255;
  const l = Math.max(v, d, s), h = Math.min(v, d, s);
  if (l === null || !h === null || isNaN(l) || isNaN(h)) {
    const i = "0 0% 100% / 12%";
    return console.warn(`[VResizeDrawer]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${i})" in it's place.`), i;
  }
  if (t = (l + h) / 2, a = (l + h) / 2, o = (l + h) / 2, l == h)
    t = a = 0;
  else {
    const i = l - h;
    switch (a = o > 0.5 ? i / (2 - l - h) : i / (l + h), l) {
      case v:
        t = (d - s) / i + (d < s ? 6 : 0);
        break;
      case d:
        t = (s - v) / i + 2;
        break;
      case s:
        t = (v - d) / i + 4;
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
  const t = e, a = g(() => t), o = re(Symbol.for("vuetify:icons")), v = Q(256), d = { mouseDown: !1, mouseUp: !0 }, s = Q(!1), l = Q(!1), h = Q(), i = Q(256), y = Rt(), E = _t();
  Be(() => {
    if (t.location !== "start" && t.location !== "end" && t.location !== "left" && t.location !== "right")
      throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");
    (function() {
      if (t.rail)
        return i.value = t.railWidth || void 0, !1;
      const c = Pe(t.storageType, t.storageName), p = ve({ str: t.width });
      i.value = p, v.value = i.value, t.saveWidth && c && !t.rail && (i.value = Pe(t.storageType, t.storageName)), function() {
        const D = h.value;
        if (D) {
          const b = D.$el;
          b.addEventListener("mouseenter", G, !1), b.addEventListener("mouseleave", se, !1);
        }
      }(), ze({ action: "update", rail: t.rail, resizedWidth: i.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType });
    })();
  }), Tt(() => {
    (function() {
      const c = h.value;
      if (c) {
        const p = c.$el;
        p.addEventListener("mouseenter", G, !1), p.addEventListener("mouseleave", se, !1);
      }
      document.removeEventListener("mouseup", ue, !1), document.removeEventListener("mousemove", X, !1);
    })();
  });
  const f = g(() => ((c) => {
    const { absolute: p = !1, expandOnHover: D, floating: b, isMouseover: O, location: P, rail: I, railWidth: r, temporary: u } = c;
    return { [`${_}`]: !0, "v-navigation-drawer--absolute": p ?? !1, "v-navigation-drawer--custom-rail": Number(r) !== 56, "v-navigation-drawer--fixed": !p, "v-navigation-drawer--floating": b, "v-navigation-drawer--is-mouseover": W(O), "v-navigation-drawer--left": P === "left" || P === "start" || P === void 0, "v-navigation-drawer--open-on-hover": D, "v-navigation-drawer--rail": I ?? !1, "v-navigation-drawer--right": P === "right" || P === "end", "v-navigation-drawer--temporary": u };
  })({ absolute: t.absolute, expandOnHover: t.expandOnHover, floating: t.floating, isMouseover: s, location: t.location, rail: t.rail, railWidth: t.railWidth, temporary: t.temporary })), F = g(() => ((c) => {
    const { isMouseDown: p, maxWidth: D, minWidth: b, rail: O, railWidth: P, resizedWidth: I, widthSnapBack: r } = c;
    if (O)
      return {};
    let u = O ? P : W(I);
    return r || (parseInt(u) >= parseInt(D) && (u = D), parseInt(u) <= parseInt(b) && (u = b)), { transitionDuration: W(p) ? "0s" : ".2s", width: ve({ str: u }) };
  })({ isMouseDown: l, maxWidth: t.maxWidth, minWidth: t.minWidth, rail: t.rail, railWidth: t.railWidth, resizedWidth: i, widthSnapBack: t.widthSnapBack })), N = g(() => {
    if (!t.rail)
      return ve({ str: i.value });
  }), j = g(() => ((c) => {
    const { drawerLocation: p, handlePosition: D } = c;
    return { [`${_}--handle-container`]: !0, [`${_}--handle-container-position-${D}`]: !0, [`${_}--handle-container-parent-${p}`]: !0 };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition })), q = g(() => ((c) => {
    const { borderWidth: p, handleColor: D, iconSize: b, position: O, theme: P } = c;
    if (O === "border")
      return { backgroundColor: rt(D, P), height: "100%", width: ve({ str: p }) };
    const I = hn[b];
    return { backgroundColor: "transparent", height: I, width: I };
  })({ borderWidth: t.handleBorderWidth, handleColor: t.handleColor, iconSize: t.handleIconSize, position: t.handlePosition, theme: E })), te = g(() => ((c) => {
    const { color: p, theme: D } = c;
    return { color: rt(p, D) };
  })({ color: t.handleColor, theme: E })), pe = g(() => ((c) => {
    const { drawerLocation: p, handlePosition: D, iconOptions: b, isUserIcon: O } = c;
    return { [`${_}--handle-container-icon`]: !0, [`${_}--handle-container-icon-${D}-${p}`]: !0, [`${_}--handle-container-icon-user-icon`]: O, [`${_}--handle-container-icon-fa`]: (b == null ? void 0 : b.defaultSet) === "fa", [`${_}--handle-container-icon-fa-${D}`]: (b == null ? void 0 : b.defaultSet) === "fa" };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition, iconOptions: o, isUserIcon: t.handleIcon !== void 0 && t.handleIcon !== null })), le = g(() => ((p) => {
    const { icon: D, iconOptions: b, position: O } = p;
    if (D)
      return D;
    let I = (b == null ? void 0 : b.defaultSet).toLowerCase();
    I = I === "fa" || I === "fasvg" ? "fa" : I;
    const r = pn[I];
    if (!r)
      throw new Error(`VResizeDrawer: No default ${b == null ? void 0 : b.defaultSet} icon set found. Please set the icon prop.`);
    const u = r[O];
    if (!u)
      throw new Error(`VResizeDrawer: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
    return u;
  })({ icon: t.handleIcon, iconOptions: o, position: t.handlePosition }));
  function G() {
    s.value = !0;
  }
  function se() {
    s.value = !1;
  }
  function X(c) {
    let p = c.clientX;
    t.location !== "right" && t.location !== "end" || (p = document.body.scrollWidth - p), i.value = ve({ str: p }) || void 0, t.widthSnapBack || (i.value = ge(i.value)), document.body.style.cursor = "grabbing", J("handle:drag", c);
  }
  function ge(c) {
    let p = Le(c);
    const D = Le(t.maxWidth), b = Le(t.minWidth);
    return p >= D && (p = D), b >= p && (p = b), p;
  }
  function We(c) {
    J("handle:click", c);
  }
  function $e(c) {
    i.value = v.value, ze({ rail: t.rail, resizedWidth: i.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), J("handle:dblclick", c);
  }
  function ye(c) {
    c.preventDefault(), c.stopPropagation();
    let p = 25;
    l.value = !0, t.handlePosition === "border" && (p = t.handleBorderWidth), d.mouseUp = !1, c.offsetX < p && document.addEventListener("mousemove", X, !1), d.mouseDown || (d.mouseDown = !0, document.addEventListener("mouseup", ue, !1), J("handle:mousedown", c));
  }
  function ue(c) {
    c.preventDefault(), c.stopPropagation();
    const p = h.value;
    l.value = !1, d.mouseDown = !1, i.value = (p == null ? void 0 : p.width) ?? v.value, document.body.style.cursor = "", i.value = ge(i.value), i.value = ve({ str: i.value }) || void 0, ze({ rail: t.rail, resizedWidth: i.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), d.mouseUp || (d.mouseUp = !0, document.removeEventListener("mouseup", ue, !1), document.removeEventListener("mousemove", X, !1), J("handle:mouseup", c));
  }
  function J(c, p) {
    const D = { e: p, eventName: c, offsetWidth: i.value, resizedWidth: i.value, width: i.value };
    n(c, D);
  }
  return (c, p) => (Fe(), Ye(W(mn), Ee(W(a), { ref_key: "resizeDrawer", ref: h, class: W(f), location: t.location, "model-value": c.modelValue, name: t.name, style: W(F), tag: t.tag, theme: t.theme, width: W(N) }), { default: Gt(() => [t.resizable && !t.rail ? (Fe(), Ue("div", { key: 0, class: qe(W(j)), style: Xe(W(q)), onClick: We, onDblclick: $e, onMousedown: ye, onMouseup: ue }, [W(y).handle ? (Fe(), Ue("div", gn, [be(c.$slots, "handle")])) : c.handlePosition !== "border" ? (Fe(), Ye(rn, { key: 1, class: qe(["v-resize-drawer--handle-icon", W(pe)]), icon: W(le), size: c.handleIconSize, style: Xe(W(te)) }, null, 8, ["class", "icon", "size", "style"])) : Se("", !0)], 38)) : Se("", !0), W(y).prepend ? be(c.$slots, "prepend", { key: 1 }) : Se("", !0), be(c.$slots, "default"), W(y).append ? be(c.$slots, "append", { key: 2 }) : Se("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} });
it.install = (e) => {
  e.component("VResizeDrawer", it);
};
export {
  it as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;height:100%;max-width:100%;pointer-events:auto;transition-duration:.2s;transition-property:box-shadow,transform,visibility,width,height,left,right,top,bottom;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;position:absolute;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-navigation-drawer--border{border-width:thin;box-shadow:none}.v-navigation-drawer--rounded{border-radius:4px}.v-navigation-drawer--top{top:0;border-bottom-width:thin}.v-navigation-drawer--bottom{left:0;border-top-width:thin}.v-navigation-drawer--left{top:0;left:0;right:auto;border-right-width:thin}.v-navigation-drawer--right{top:0;left:auto;right:0;border-left-width:thin}.v-navigation-drawer--floating{border:none}.v-navigation-drawer--temporary{box-shadow:0 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-navigation-drawer--sticky{height:auto;transition:box-shadow,transform,visibility,width,height,left,right}.v-navigation-drawer .v-list{overflow:hidden}.v-navigation-drawer__content{flex:0 1 auto;height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.v-navigation-drawer__img{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-navigation-drawer__img img{height:inherit;object-fit:cover;width:inherit}.v-navigation-drawer__scrim{position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.2;transition:opacity .2s cubic-bezier(.4,0,.2,1);z-index:1}.v-resize-drawer--handle-container{cursor:grab;align-items:center;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
