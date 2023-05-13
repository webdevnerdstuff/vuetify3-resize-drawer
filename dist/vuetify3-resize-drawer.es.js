import { reactive as bt, computed as p, watchEffect as et, toRefs as St, watch as ne, onScopeDispose as kt, effectScope as $t, ref as K, unref as P, provide as Ve, inject as de, shallowRef as F, defineComponent as tt, getCurrentInstance as Ct, onDeactivated as xt, onActivated as Wt, onBeforeUnmount as We, toRaw as Et, isRef as pe, onMounted as be, readonly as zt, createVNode as z, mergeProps as Te, toRef as _e, Text as _t, nextTick as Bt, onBeforeMount as Nt, Fragment as nt, Transition as Vt, useSlots as Tt, openBlock as G, createBlock as Le, withCtx as He, createElementBlock as oe, normalizeClass as re, normalizeStyle as Mt, renderSlot as ve, toDisplayString as qt, createCommentVNode as le, createTextVNode as At } from "vue";
/**
 * @name vuetify3-resize-drawer
 * @version 1.0.3
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @repository https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @license MIT License
 */
function Ue(e, n, t) {
  (function(o, a) {
    if (a.has(o))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  })(e, n), n.set(e, t);
}
function Pt(e, n, t) {
  return function(o, a, c) {
    if (a.set)
      a.set.call(o, c);
    else {
      if (!a.writable)
        throw new TypeError("attempted to set read only private field");
      a.value = c;
    }
  }(e, at(e, n, "set"), t), t;
}
function te(e, n) {
  return function(t, o) {
    return o.get ? o.get.call(t) : o.value;
  }(e, at(e, n, "get"));
}
function at(e, n, t) {
  if (!n.has(e))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return n.get(e);
}
function ue(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Ye(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ke() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const o = {};
  for (const a in e)
    o[a] = e[a];
  for (const a in n) {
    const c = e[a], u = n[a];
    Ye(c) && Ye(u) ? o[a] = ke(c, u, t) : Array.isArray(c) && Array.isArray(u) && t ? o[a] = t(c, u) : o[a] = u;
  }
  return o;
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Q.cache.has(e))
    return Q.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Q.cache.set(e, n), n;
}
Q.cache = /* @__PURE__ */ new Map();
var we = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap();
class Ot {
  constructor(n) {
    Ue(this, we, { writable: !0, value: [] }), Ue(this, ie, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    te(this, we)[te(this, ie)] = n, Pt(this, ie, (te(this, ie) + 1) % this.size);
  }
  values() {
    return te(this, we).slice(te(this, ie)).concat(te(this, we).slice(0, te(this, ie)));
  }
}
function ot(e) {
  const n = bt({}), t = p(e);
  return et(() => {
    for (const o in t.value)
      n[o] = t.value[o];
  }, { flush: "sync" }), St(n);
}
function jt(e, n, t) {
  if (t && (n = { __isVue: !0, $parent: t, $options: n }), n) {
    if (n.$_alreadyWarned = n.$_alreadyWarned || [], n.$_alreadyWarned.includes(e))
      return;
    n.$_alreadyWarned.push(e);
  }
  return `[Vuetify] ${e}` + (n ? function(o) {
    if (o.__isVue && o.$parent) {
      const a = [];
      let c = 0;
      for (; o; ) {
        if (a.length > 0) {
          const u = a[a.length - 1];
          if (u.constructor === o.constructor) {
            c++, o = o.$parent;
            continue;
          }
          c > 0 && (a[a.length - 1] = [u, c], c = 0);
        }
        a.push(o), o = o.$parent;
      }
      return `

found in

` + a.map((u, l) => `${l === 0 ? "---> " : " ".repeat(5 + 2 * l)}${Array.isArray(u) ? `${Ee(u[0])}... (${u[1]} recursive calls)` : Ee(u)}`).join(`
`);
    }
    return `

(found in ${Ee(o)})`;
  }(n) : "");
}
const Dt = /(?:^|[-_])(\w)/g, Rt = (e) => e.replace(Dt, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Ee(e, n) {
  if (e.$root === e)
    return "<Root>";
  const t = typeof e == "function" && e.cid != null ? e.options : e.__isVue ? e.$options || e.constructor.options : e || {};
  let o = t.name || t._componentTag;
  const a = t.__file;
  if (!o && a) {
    const c = a.match(/([^/\\]+)\.vue$/);
    o = c == null ? void 0 : c[1];
  }
  return (o ? `<${Rt(o)}>` : "<Anonymous>") + (a && n !== !1 ? ` at ${a}` : "");
}
function Fe(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function O(e, n) {
  return (t) => Object.keys(e).reduce((o, a) => {
    const c = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return o[a] = t && a in t ? { ...c, default: t[a] } : c, n && !o[a].source && (o[a].source = n), o;
  }, {});
}
const rt = O({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function lt(e, n) {
  let t;
  function o() {
    t = $t(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), o();
    }) : n());
  }
  ne(e, (a) => {
    a && !t ? o() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), kt(() => {
    t == null || t.stop();
  });
}
const Me = Symbol.for("vuetify:defaults");
function qe() {
  const e = de(Me);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function it(e, n) {
  const t = qe(), o = K(e), a = p(() => {
    if (P(n == null ? void 0 : n.disabled))
      return t.value;
    const c = P(n == null ? void 0 : n.scoped), u = P(n == null ? void 0 : n.reset), l = P(n == null ? void 0 : n.root);
    let s = ke(o.value, { prev: t.value });
    if (c)
      return s;
    if (u || l) {
      const h = Number(u || 1 / 0);
      for (let f = 0; f <= h && s && "prev" in s; f++)
        s = s.prev;
      return s;
    }
    return s.prev ? ke(s.prev, s) : s;
  });
  return Ve(Me, a), a;
}
function It() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qe();
  const o = X("useDefaults");
  if (n = n ?? o.type.name ?? o.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = p(() => {
    var l;
    return (l = t.value) == null ? void 0 : l[e._as ?? n];
  }), c = new Proxy(e, { get(l, s) {
    var f, x, _, m;
    const h = Reflect.get(l, s);
    return s === "class" || s === "style" ? [(f = a.value) == null ? void 0 : f[s], h].filter((S) => S != null) : typeof s != "string" || function(S, j) {
      var D, M;
      return ((D = S.props) == null ? void 0 : D[j]) !== void 0 || ((M = S.props) == null ? void 0 : M[Q(j)]) !== void 0;
    }(o.vnode, s) ? h : ((x = a.value) == null ? void 0 : x[s]) ?? ((m = (_ = t.value) == null ? void 0 : _.global) == null ? void 0 : m[s]) ?? h;
  } }), u = F();
  return et(() => {
    if (a.value) {
      const l = Object.entries(a.value).filter((s) => {
        let [h] = s;
        return h.startsWith(h[0].toUpperCase());
      });
      l.length && (u.value = Object.fromEntries(l));
    }
  }), { props: c, provideSubDefaults: function() {
    lt(u, () => {
      var l;
      it(ke(((l = function(s) {
        const { provides: h } = X("injectSelf");
        if (h && s in h)
          return h[s];
      }(Me)) == null ? void 0 : l.value) ?? {}, u.value));
    });
  } };
}
function $e(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return function(n, t, o) {
      const a = jt(n, t, o);
      a != null && console.warn(a);
    }("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = O(e.props ?? {}, Q(e.name))();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return function(o, a, c) {
        const u = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
        for (const s in o)
          a.some((h) => h instanceof RegExp ? h.test(s) : h === s) && !(c != null && c.some((h) => h === s)) ? u[s] = o[s] : l[s] = o[s];
        return [u, l];
      }(t, n, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, o) {
      const a = qe();
      if (!a.value)
        return e._setup(t, o);
      const { props: c, provideSubDefaults: u } = It(t, t._as ?? e.name, a), l = e._setup(c, o);
      return u(), l;
    };
  }
  return e;
}
function Ae() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? $e : tt)(n);
}
function X(e, n) {
  const t = Ct();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Be() {
  const e = X(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Q((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let st = 0, Se = /* @__PURE__ */ new WeakMap();
function ut() {
  const e = X("getUid");
  if (Se.has(e))
    return Se.get(e);
  {
    const n = st++;
    return Se.set(e, n), n;
  }
}
function dt(e) {
  X("useRender").render = e;
}
ut.reset = () => {
  st = 0, Se = /* @__PURE__ */ new WeakMap();
};
const Lt = Symbol.for("vuetify:layout"), Ht = Symbol.for("vuetify:layout-item"), Ut = O({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item"), Xe = Symbol.for("vuetify:theme"), ct = O({ theme: String }, "theme");
function vt(e) {
  X("provideTheme");
  const n = de(Xe, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = p(() => e.theme ?? (n == null ? void 0 : n.name.value)), o = p(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, themeClasses: o };
  return Ve(Xe, a), a;
}
const Yt = Symbol.for("vuetify:locale"), pt = O({ tag: { type: String, default: "div" } }, "tag"), Ft = O({ border: [Boolean, Number, String] }, "border"), Xt = O({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), Zt = O({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function mt(e) {
  return ot(() => {
    const n = [], t = {};
    return e.value.background && (Fe(e.value.background) ? t.backgroundColor = e.value.background : n.push(`bg-${e.value.background}`)), e.value.text && (Fe(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function Ze(e, n) {
  const t = p(() => ({ background: pe(e) ? e.value : n ? e[n] : null })), { colorClasses: o, colorStyles: a } = mt(t);
  return { backgroundColorClasses: o, backgroundColorStyles: a };
}
const gt = [String, Function, Object, Array], Gt = Symbol.for("vuetify:icons"), Ce = O({ icon: { type: gt }, tag: { type: String, required: !0 } }, "icon"), Ge = Ae()({ name: "VComponentIcon", props: Ce(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const o = e.icon;
    return z(e.tag, null, { default: () => {
      var a;
      return [e.icon ? z(o, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), Jt = $e({ name: "VSvgIcon", inheritAttrs: !1, props: Ce(), setup(e, n) {
  let { attrs: t } = n;
  return () => z(e.tag, Te(t, { style: null }), { default: () => [z("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((o) => Array.isArray(o) ? z("path", { d: o[0], "fill-opacity": o[1] }, null) : z("path", { d: o }, null)) : z("path", { d: e.icon }, null)])] });
} });
$e({ name: "VLigatureIcon", props: Ce(), setup: (e) => () => z(e.tag, null, { default: () => [e.icon] }) }), $e({ name: "VClassIcon", props: Ce(), setup: (e) => () => z(e.tag, { class: e.icon }, null) });
const Kt = ["x-small", "small", "default", "large", "x-large"], Qt = O({ size: { type: [String, Number], default: "default" } }, "size"), en = O({ color: String, start: Boolean, end: Boolean, icon: gt, ...rt(), ...Qt(), ...pt({ tag: "i" }), ...ct() }, "v-icon"), tn = Ae()({ name: "VIcon", props: en(), setup(e, n) {
  let { attrs: t, slots: o } = n;
  const a = K(), { themeClasses: c } = vt(e), { iconData: u } = ((f) => {
    const x = de(Gt);
    if (!x)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: p(() => {
      var D;
      const _ = P(f);
      if (!_)
        return { component: Ge };
      let m = _;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (D = x.aliases) == null ? void 0 : D[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${_}"`);
      if (Array.isArray(m))
        return { component: Jt, icon: m };
      if (typeof m != "string")
        return { component: Ge, icon: m };
      const S = Object.keys(x.sets).find((M) => typeof m == "string" && m.startsWith(`${M}:`)), j = S ? m.slice(S.length + 1) : m;
      return { component: x.sets[S ?? x.defaultSet].component, icon: j };
    }) };
  })(p(() => a.value || e.icon)), { sizeClasses: l } = function(f) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
    return ot(() => {
      let _, m;
      var S, j;
      return S = Kt, j = f.size, S.includes(j) ? _ = `${x}--size-${f.size}` : f.size && (m = { width: ue(f.size), height: ue(f.size) }), { sizeClasses: _, sizeStyles: m };
    });
  }(e), { textColorClasses: s, textColorStyles: h } = function(f, x) {
    const _ = p(() => ({ text: pe(f) ? f.value : x ? f[x] : null })), { colorClasses: m, colorStyles: S } = mt(_);
    return { textColorClasses: m, textColorStyles: S };
  }(_e(e, "color"));
  return dt(() => {
    var x, _;
    const f = (x = o.default) == null ? void 0 : x.call(o);
    return f && (a.value = (_ = f.filter((m) => m.type === _t && m.children && typeof m.children == "string")[0]) == null ? void 0 : _.children), z(u.value.component, { tag: e.tag, icon: u.value.icon, class: ["v-icon", "notranslate", c.value, l.value, s.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [l.value ? void 0 : { fontSize: ue(e.size), height: ue(e.size), width: ue(e.size) }, h.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [f] });
  }), {};
} }), nn = Symbol.for("vuetify:display"), an = 100, on = 20;
function Je(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Ke(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const o = Je(n), a = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (a - o) * Math.abs(a), t === e.length - 1 && (n *= 0.5);
  }
  return 1e3 * Je(n);
}
function rn() {
  const e = {};
  return { addMovement: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      (e[t.identifier] ?? (e[t.identifier] = new Ot(on))).push([n.timeStamp, t]);
    });
  }, endTouch: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      delete e[t.identifier];
    });
  }, getVelocity: function(n) {
    var u;
    const t = (u = e[n]) == null ? void 0 : u.values().reverse();
    if (!t)
      throw new Error(`No samples for touch id ${n}`);
    const o = t[0], a = [], c = [];
    for (const l of t) {
      if (o[0] - l[0] > an)
        break;
      a.push({ t: l[0], d: l[1].clientX }), c.push({ t: l[0], d: l[1].clientY });
    }
    return { x: Ke(a), y: Ke(c), get direction() {
      const { x: l, y: s } = this, [h, f] = [Math.abs(l), Math.abs(s)];
      return h > f && l >= 0 ? "right" : h > f && l <= 0 ? "left" : f > h && s >= 0 ? "down" : f > h && s <= 0 ? "up" : function() {
        throw new Error();
      }();
    } };
  } };
}
function se() {
  throw new Error();
}
const ln = ["start", "end", "left", "right", "top", "bottom"], sn = O({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [String, Boolean], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => ln.includes(e) }, sticky: Boolean, ...Ft(), ...rt(), ...Xt(), ...Ut(), ...Zt(), ...pt({ tag: "nav" }), ...ct() }, "v-navigation-drawer"), un = Ae()({ name: "VNavigationDrawer", props: sn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var Pe, Oe;
  let { attrs: t, emit: o, slots: a } = n;
  const { isRtl: c } = function() {
    const r = de(Yt);
    if (!r)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: r.isRtl, rtlClasses: r.rtlClasses };
  }(), { themeClasses: u } = vt(e), { borderClasses: l } = function(r) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
    return { borderClasses: p(() => {
      const y = pe(r) ? r.value : r.border, g = [];
      if (y === !0 || y === "")
        g.push(`${v}--border`);
      else if (typeof y == "string" || y === 0)
        for (const b of String(y).split(" "))
          g.push(`border-${b}`);
      return g;
    }) };
  }(e), { backgroundColorClasses: s, backgroundColorStyles: h } = Ze(_e(e, "color")), { elevationClasses: f } = function(r) {
    return { elevationClasses: p(() => {
      const v = pe(r) ? r.value : r.elevation, y = [];
      return v == null || y.push(`elevation-${v}`), y;
    }) };
  }(e), { mobile: x } = function() {
    const r = de(nn);
    if (!r)
      throw new Error("Could not find Vuetify display injection");
    return r;
  }(), { roundedClasses: _ } = function(r) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
    return { roundedClasses: p(() => {
      const y = pe(r) ? r.value : r.rounded, g = [];
      if (y === !0 || y === "")
        g.push(`${v}--rounded`);
      else if (typeof y == "string" || y === 0)
        for (const b of String(y).split(" "))
          g.push(`rounded-${b}`);
      return g;
    }) };
  }(e), m = (Oe = (Pe = X("useRouter")) == null ? void 0 : Pe.proxy) == null ? void 0 : Oe.$router, S = function(r, v, y) {
    let g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (w) => w, b = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (w) => w;
    const d = X("useProxiedModel"), B = K(r[v] !== void 0 ? r[v] : y), L = Q(v), H = p(L !== v ? () => {
      var w, C, N, A;
      return r[v], !(!((w = d.vnode.props) != null && w.hasOwnProperty(v)) && !((C = d.vnode.props) != null && C.hasOwnProperty(L)) || !((N = d.vnode.props) != null && N.hasOwnProperty(`onUpdate:${v}`)) && !((A = d.vnode.props) != null && A.hasOwnProperty(`onUpdate:${L}`)));
    } : () => {
      var w, C;
      return r[v], !(!((w = d.vnode.props) != null && w.hasOwnProperty(v)) || !((C = d.vnode.props) != null && C.hasOwnProperty(`onUpdate:${v}`)));
    });
    lt(() => !H.value, () => {
      ne(() => r[v], (w) => {
        B.value = w;
      });
    });
    const T = p({ get() {
      const w = r[v];
      return g(H.value ? w : B.value);
    }, set(w) {
      const C = b(w), N = Et(H.value ? r[v] : B.value);
      N !== C && g(N) !== w && (B.value = C, d == null || d.emit(`update:${v}`, C));
    } });
    return Object.defineProperty(T, "externalValue", { get: () => H.value ? r[v] : B.value }), T;
  }(e, "modelValue", null, (r) => !!r), { ssrBootStyles: j } = function() {
    const r = F(!1);
    return be(() => {
      window.requestAnimationFrame(() => {
        r.value = !0;
      });
    }), { ssrBootStyles: p(() => r.value ? void 0 : { transition: "none !important" }), isBooted: zt(r) };
  }(), D = K(), M = F(!1), ce = p(() => e.rail && e.expandOnHover && M.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), ae = p(() => function(r, v) {
    return r === "start" ? v ? "right" : "left" : r === "end" ? v ? "left" : "right" : r;
  }(e.location, c.value)), q = p(() => !e.permanent && (x.value || e.temporary)), U = p(() => e.sticky && !q.value && ae.value !== "bottom");
  e.expandOnHover && e.rail != null && ne(M, (r) => o("update:rail", !r)), e.disableResizeWatcher || ne(q, (r) => !e.permanent && Bt(() => S.value = !r)), !e.disableRouteWatcher && m && ne(m.currentRoute, () => q.value && (S.value = !1)), ne(() => e.permanent, (r) => {
    r && (S.value = !0);
  }), Nt(() => {
    e.modelValue != null || q.value || (S.value = e.permanent || !x.value);
  });
  const { isDragging: R, dragProgress: i, dragStyles: k } = function(r) {
    let { isActive: v, isTemporary: y, width: g, touchless: b, position: d } = r;
    be(() => {
      window.addEventListener("touchstart", De, { passive: !0 }), window.addEventListener("touchmove", Re, { passive: !1 }), window.addEventListener("touchend", Ie, { passive: !0 });
    }), We(() => {
      window.removeEventListener("touchstart", De), window.removeEventListener("touchmove", Re), window.removeEventListener("touchend", Ie);
    });
    const B = p(() => ["left", "right"].includes(d.value)), { addMovement: L, endTouch: H, getVelocity: T } = rn();
    let w = !1;
    const C = F(!1), N = F(0), A = F(0);
    let ee;
    function xe($, W) {
      return (d.value === "left" ? $ : d.value === "right" ? document.documentElement.clientWidth - $ : d.value === "top" ? $ : d.value === "bottom" ? document.documentElement.clientHeight - $ : se()) - (W ? g.value : 0);
    }
    function je($) {
      let W = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const E = d.value === "left" ? ($ - A.value) / g.value : d.value === "right" ? (document.documentElement.clientWidth - $ - A.value) / g.value : d.value === "top" ? ($ - A.value) / g.value : d.value === "bottom" ? (document.documentElement.clientHeight - $ - A.value) / g.value : se();
      return W ? Math.max(0, Math.min(1, E)) : E;
    }
    function De($) {
      if (b.value)
        return;
      const W = $.changedTouches[0].clientX, E = $.changedTouches[0].clientY, Y = d.value === "left" ? W < 25 : d.value === "right" ? W > document.documentElement.clientWidth - 25 : d.value === "top" ? E < 25 : d.value === "bottom" ? E > document.documentElement.clientHeight - 25 : se(), Z = v.value && (d.value === "left" ? W < g.value : d.value === "right" ? W > document.documentElement.clientWidth - g.value : d.value === "top" ? E < g.value : d.value === "bottom" ? E > document.documentElement.clientHeight - g.value : se());
      (Y || Z || v.value && y.value) && (w = !0, ee = [W, E], A.value = xe(B.value ? W : E, v.value), N.value = je(B.value ? W : E), H($), L($));
    }
    function Re($) {
      const W = $.changedTouches[0].clientX, E = $.changedTouches[0].clientY;
      if (w) {
        if (!$.cancelable)
          return void (w = !1);
        const Z = Math.abs(W - ee[0]), ye = Math.abs(E - ee[1]);
        (B.value ? Z > ye && Z > 3 : ye > Z && ye > 3) ? (C.value = !0, w = !1) : (B.value ? ye : Z) > 3 && (w = !1);
      }
      if (!C.value)
        return;
      $.preventDefault(), L($);
      const Y = je(B.value ? W : E, !1);
      N.value = Math.max(0, Math.min(1, Y)), Y > 1 ? A.value = xe(B.value ? W : E, !0) : Y < 0 && (A.value = xe(B.value ? W : E, !1));
    }
    function Ie($) {
      if (w = !1, !C.value)
        return;
      L($), C.value = !1;
      const W = T($.changedTouches[0].identifier), E = Math.abs(W.x), Y = Math.abs(W.y), Z = B.value ? E > Y && E > 400 : Y > E && Y > 3;
      v.value = Z ? W.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[d.value] || se()) : N.value > 0.5;
    }
    const wt = p(() => C.value ? { transform: d.value === "left" ? `translateX(calc(-100% + ${N.value * g.value}px))` : d.value === "right" ? `translateX(calc(100% - ${N.value * g.value}px))` : d.value === "top" ? `translateY(calc(-100% + ${N.value * g.value}px))` : d.value === "bottom" ? `translateY(calc(100% - ${N.value * g.value}px))` : se(), transition: "none" } : void 0);
    return { isDragging: C, dragProgress: N, dragStyles: wt };
  }({ isActive: S, isTemporary: q, width: ce, touchless: _e(e, "touchless"), position: ae }), I = p(() => {
    const r = q.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : ce.value;
    return R.value ? r * i.value : r;
  }), { layoutItemStyles: V, layoutItemScrimStyles: me } = function(r) {
    const v = de(Lt);
    if (!v)
      throw new Error("[Vuetify] Could not find injected layout");
    const y = r.id ?? `layout-item-${ut()}`, g = X("useLayoutItem");
    Ve(Ht, { id: y });
    const b = F(!1);
    xt(() => b.value = !0), Wt(() => b.value = !1);
    const { layoutItemStyles: d, layoutItemScrimStyles: B } = v.register(g, { ...r, active: p(() => !b.value && r.active.value), id: y });
    return We(() => v.unregister(y)), { layoutItemStyles: d, layoutRect: v.layoutRect, layoutItemScrimStyles: B };
  }({ id: e.name, order: p(() => parseInt(e.order, 10)), position: ae, layoutSize: I, elementSize: ce, active: p(() => S.value || R.value), disableTransitions: p(() => R.value), absolute: p(() => e.absolute || U.value && typeof ge.value != "string") }), { isStuck: ge, stickyStyles: fe } = function(r) {
    let { rootEl: v, isSticky: y, layoutItemStyles: g } = r;
    const b = F(!1), d = F(0), B = p(() => {
      const T = typeof b.value == "boolean" ? "top" : b.value;
      return [y.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, b.value ? { [T]: ue(d.value) } : { top: g.value.top }];
    });
    be(() => {
      ne(y, (T) => {
        T ? window.addEventListener("scroll", H, { passive: !0 }) : window.removeEventListener("scroll", H);
      }, { immediate: !0 });
    }), We(() => {
      document.removeEventListener("scroll", H);
    });
    let L = 0;
    function H() {
      const T = L > window.scrollY ? "up" : "down", w = v.value.getBoundingClientRect(), C = parseFloat(g.value.top ?? 0), N = window.scrollY - Math.max(0, d.value - C), A = w.height + Math.max(d.value, C) - window.scrollY - window.innerHeight, ee = parseFloat(getComputedStyle(v.value).getPropertyValue("--v-body-scroll-y")) || 0;
      w.height < window.innerHeight - C ? (b.value = "top", d.value = C) : T === "up" && b.value === "bottom" || T === "down" && b.value === "top" ? (d.value = window.scrollY + w.top - ee, b.value = !0) : T === "down" && A <= 0 ? (d.value = 0, b.value = "bottom") : T === "up" && N <= 0 && (ee ? b.value !== "top" && (d.value = -N + ee + C, b.value = "top") : (d.value = w.top + N, b.value = "top")), L = window.scrollY;
    }
    return { isStuck: b, stickyStyles: B };
  }({ rootEl: D, isSticky: U, layoutItemStyles: V }), he = Ze(p(() => typeof e.scrim == "string" ? e.scrim : null)), ft = p(() => ({ ...R.value ? { opacity: 0.2 * i.value, transition: "none" } : void 0, ...me.value }));
  function ht() {
    M.value = !0;
  }
  function yt() {
    M.value = !1;
  }
  return it({ VList: { bgColor: "transparent" } }), dt(() => {
    const r = a.image || e.image;
    return z(nt, null, [z(e.tag, Te({ ref: D, onMouseenter: ht, onMouseleave: yt, class: ["v-navigation-drawer", `v-navigation-drawer--${ae.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": M.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": q.value, "v-navigation-drawer--active": S.value, "v-navigation-drawer--sticky": U.value }, u.value, s.value, l.value, f.value, _.value, e.class], style: [h.value, V.value, k.value, j.value, fe.value, e.style] }, t), { default: () => {
      var v, y, g, b;
      return [r && z("div", { key: "image", class: "v-navigation-drawer__img" }, [a.image ? (v = a.image) == null ? void 0 : v.call(a, { image: e.image }) : z("img", { src: e.image, alt: "" }, null)]), a.prepend && z("div", { class: "v-navigation-drawer__prepend" }, [(y = a.prepend) == null ? void 0 : y.call(a)]), z("div", { class: "v-navigation-drawer__content" }, [(g = a.default) == null ? void 0 : g.call(a)]), a.append && z("div", { class: "v-navigation-drawer__append" }, [(b = a.append) == null ? void 0 : b.call(a)])];
    } }), z(Vt, { name: "fade-transition" }, { default: () => [q.value && (R.value || S.value) && !!e.scrim && z("div", { class: ["v-navigation-drawer__scrim", he.backgroundColorClasses.value], style: [ft.value, he.backgroundColorStyles.value], onClick: () => S.value = !1 }, null)] })]);
  }), { isStuck: ge };
} }), J = "v-resize-drawer", dn = { absolute: { default: !1, required: !1, type: Boolean }, color: { default: "", required: !1, type: String }, dark: { default: !1, required: !1, type: Boolean }, elevation: { default: 16, required: !1, type: [Number, String] }, expandOnHover: { default: !1, required: !1, type: Boolean }, floating: { default: !1, required: !1, type: Boolean }, handleBorderWidth: { default: 8, required: !1, type: [Number, String] }, handleColor: { default: () => ({ dark: "default", light: "default" }), required: !1, type: Object }, handlePosition: { default: "center", required: !1, type: String }, height: { default: void 0, required: !1, type: [Number, String] }, image: { default: "", required: !1, type: String }, location: { default: "left", required: !1, type: String }, modelValue: { default: !0, required: !1, type: Boolean }, name: { default: J, required: !1, type: String }, rail: { default: !1, required: !1, type: Boolean }, railWidth: { default: 56, required: !1, type: [Number, String] }, resizable: { default: !0, required: !1, type: Boolean }, saveWidth: { default: !0, required: !1, type: Boolean }, sticky: { default: !1, required: !1, type: Boolean }, storageName: { default: `${J}-width`, required: !1, type: String }, storageType: { default: "local", required: !1, type: String }, tag: { default: "div", required: !1, type: String }, temporary: { default: !1, required: !1, type: Boolean }, theme: { default: "light", required: !1, type: String }, width: { default: 256, required: !1, type: [String, Number] } };
function Ne(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
function ze({ action: e = "update", resizedWidth: n, storageType: t, storageName: o, saveWidth: a, rail: c }) {
  if (!a || c)
    return;
  let u = n;
  u = u ?? void 0, e === "set" && (u = Ne(t, o) ?? "", u = u || n), t === "local" && localStorage.setItem(o, String(u)), t === "session" && sessionStorage.setItem(o, String(u));
}
const cn = { key: 0, class: "v-resize-drawer--handle-slot" }, Qe = tt({ __name: "VResizeDrawer", props: { ...dn }, emits: ["handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup"], setup(e, { emit: n }) {
  const t = e, o = K(256), a = { mouseDown: !1, mouseUp: !0 }, c = K(!1), u = K(), l = K(256), s = Tt();
  be(() => {
    (function() {
      if (t.rail)
        return l.value = t.railWidth || void 0, !1;
      const i = Ne(t.storageType, t.storageName), k = U(t.width);
      l.value = k, o.value = l.value, t.saveWidth && i && !t.rail && (l.value = Ne(t.storageType, t.storageName)), function() {
        const I = u.value;
        if (I) {
          const V = I.$el;
          V.addEventListener("mouseenter", S, !1), V.addEventListener("mouseleave", j, !1);
        }
      }(), ze({ action: "update", rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType });
    })();
  });
  const h = p(() => ({ [`${J}`]: !0, "v-navigation-drawer--absolute": t.absolute, "v-navigation-drawer--custom-rail": Number(t.railWidth) !== 56, "v-navigation-drawer--fixed": !t.absolute, "v-navigation-drawer--floating": t.floating, "v-navigation-drawer--is-mouseover": c.value, "v-navigation-drawer--open-on-hover": t.expandOnHover, "v-navigation-drawer--rail": t.rail ?? !1, "v-navigation-drawer--right": t.location === "right", "v-navigation-drawer--temporary": t.temporary })), f = p(() => t.rail ? {} : { width: U(t.rail ? t.railWidth : l.value) }), x = p(() => t.rail ? "" : U(l.value)), _ = p(() => {
    const i = t.handlePosition, k = t.location === "right" ? "right" : "left", I = t.handleColor, V = I.dark, me = I.light, ge = i === "border";
    let fe = `${J}--handle-${i}`;
    const he = t.dark ? V : me;
    return s.handle && i === "top-icon" && (fe += "-slot"), { "align-center justify-center": i === "border" || i === "center", "d-flex": !0, [`text-${he}`]: !0, [`${fe}`]: !0, [`${J}--handle`]: !0, [`${J}--handle-parent-${i}`]: !0, [`${J}--handle-parent-${i}-${k}`]: !0, [`${J}--handle-parent-border-${t.dark ? V : me}`]: ge };
  }), m = p(() => {
    const i = t.handlePosition, k = t.handleColor, I = t.dark ? k.dark : k.light, V = { backgroundColor: "", width: "" };
    return i === "border" && (V.width = U(t.handleBorderWidth)), i === "border" && (V.backgroundColor = I), i === "center" && (V.backgroundColor = "transparent"), V;
  });
  function S() {
    c.value = !0;
  }
  function j() {
    c.value = !1;
  }
  function D(i) {
    let k = i.clientX;
    t.location === "right" && (k = document.body.scrollWidth - k), l.value = U(k), document.body.style.cursor = "grabbing", R("handle:drag", i);
  }
  function M(i) {
    R("handle:click", i);
  }
  function ce(i) {
    l.value = o.value, ze({ rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), R("handle:dblclick", i);
  }
  function ae(i) {
    i.preventDefault(), i.stopPropagation();
    let k = 25;
    t.handlePosition === "border" && (k = t.handleBorderWidth), a.mouseUp = !1, i.offsetX < k && document.addEventListener("mousemove", D, !1), a.mouseDown || (a.mouseDown = !0, document.addEventListener("mouseup", q, !1), R("handle:mousedown", i));
  }
  function q(i) {
    i.preventDefault(), i.stopPropagation();
    const k = u.value;
    a.mouseDown = !1, l.value = (k == null ? void 0 : k.width) ?? o.value, document.body.style.cursor = "", ze({ rail: t.rail, resizedWidth: l.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), a.mouseUp || (a.mouseUp = !0, document.removeEventListener("mouseup", q, !1), document.removeEventListener("mousemove", D, !1), R("handle:mouseup", i));
  }
  function U(i, k = "px") {
    if (i != null && i !== "")
      return +i ? `${Number(i)}${k}` : String(i);
  }
  function R(i, k) {
    const I = { e: k, eventName: i, offsetWidth: l.value, resizedWidth: l.value, width: l.value };
    n(i, I);
  }
  return (i, k) => (G(), Le(P(un), Te(i.$attrs, { ref_key: "resizeDrawer", ref: u, absolute: t.absolute, class: h.value, color: t.color, elevation: t.elevation, "expand-on-hover": t.expandOnHover, floating: t.floating, image: t.image, location: t.location, "model-value": i.modelValue, name: t.name, rail: t.rail, "rail-width": t.railWidth, sticky: t.sticky, style: f.value, tag: t.tag, temporary: t.temporary, theme: t.theme, width: x.value }), { default: He(() => [t.resizable && !t.rail ? (G(), oe("div", { key: 0, class: re(_.value), style: Mt(m.value), onClick: M, onDblclick: ce, onMousedown: ae, onMouseup: q }, [t.handlePosition === "center" ? (G(), oe("div", { key: 0, class: re(["v-resize-drawer--handle-icon d-flex align-items-center justify-content-center", { [`v-resize-drawer--handle-${t.handlePosition}-icon`]: t.handlePosition }]) }, [P(s).handle ? (G(), oe("div", cn, [ve(i.$slots, "handle")])) : (G(), oe("div", { key: 1, class: re({ "v-resize-drawer--handle-handle-flip": t.location === "right" }) }, " » " + qt(P(s).handle), 3))], 2)) : le("", !0), P(s).handle && t.handlePosition === "top-icon" ? (G(), oe(nt, { key: 1 }, [P(s).handle ? ve(i.$slots, "handle", { key: 0, class: re({ "theme--dark": t.dark, "theme--light": !t.dark, "float-end": !1, "float-start": t.location !== "right" }) }) : le("", !0)], 64)) : t.handlePosition === "top-icon" ? (G(), Le(tn, { key: 2, class: re({ "theme--dark": t.dark, "theme--light": !t.dark, "float-end": t.location === "right", "float-start": t.location !== "right" }) }, { default: He(() => [At(" mdi-resize-bottom-right ")]), _: 1 }, 8, ["class"])) : t.handlePosition === "top" ? (G(), oe("div", { key: 3, class: re(["v-resize-drawer--handle-lines", [`v-resize-drawer--handle-parent-${t.handlePosition}-${t.location}-lines`]]) }, null, 2)) : le("", !0)], 38)) : le("", !0), P(s).prepend ? ve(i.$slots, "prepend", { key: 1 }) : le("", !0), ve(i.$slots, "default"), P(s).append ? ve(i.$slots, "append", { key: 2 }) : le("", !0)]), _: 3 }, 16, ["absolute", "class", "color", "elevation", "expand-on-hover", "floating", "image", "location", "model-value", "name", "rail", "rail-width", "sticky", "style", "tag", "temporary", "theme", "width"]));
} });
Qe.install = (e) => {
  e.component("VResizeDrawer", Qe);
};
export {
  Qe as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;height:100%;max-width:100%;pointer-events:auto;transition-duration:.2s;transition-property:box-shadow,transform,visibility,width,height,left,right,top,bottom;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;position:absolute;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-navigation-drawer--border{border-width:thin;box-shadow:none}.v-navigation-drawer--rounded{border-radius:4px}.v-navigation-drawer--top{top:0;border-bottom-width:thin}.v-navigation-drawer--bottom{left:0;border-top-width:thin}.v-navigation-drawer--left{top:0;left:0;right:auto;border-right-width:thin}.v-navigation-drawer--right{top:0;left:auto;right:0;border-left-width:thin}.v-navigation-drawer--floating{border:none}.v-navigation-drawer--temporary{box-shadow:0 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-navigation-drawer--sticky{height:auto;transition:box-shadow,transform,visibility,width,height,left,right}.v-navigation-drawer .v-list{overflow:hidden}.v-navigation-drawer__content{flex:0 1 auto;height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.v-navigation-drawer__img{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-navigation-drawer__img img{height:inherit;object-fit:cover;width:inherit}.v-navigation-drawer__scrim{position:absolute;width:100%;height:100%;background:black;opacity:.2;transition:opacity .2s cubic-bezier(.4,0,.2,1);z-index:1}.v-resize-drawer--handle{cursor:grab;position:absolute;width:24px;z-index:1}.v-resize-drawer--handle:active{cursor:grabbing}.v-resize-drawer--handle-lines{align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center;left:-5px;position:absolute;width:24px}.v-resize-drawer--handle-lines:before,.v-resize-drawer--handle-lines:after{border-radius:4px;border-top:2px inset #ccc;content:"";display:block;height:1px}.v-resize-drawer--handle-lines:before{margin-bottom:3px;width:30%}.v-resize-drawer--handle-lines:after{width:60%}.v-resize-drawer--handle-parent-top{border-right:24px solid transparent;border-top-style:solid;border-top-width:24px;height:24px;left:0;top:0;width:24px}.v-resize-drawer--handle-parent-top-left{border-left:24px solid transparent;border-right:transparent;left:initial;right:0}.v-resize-drawer--handle-parent-top-left-lines{left:initial;right:-5px;top:-19px;transform:rotate(45deg)!important}.v-resize-drawer--handle-parent-top-right-lines{top:-19px;transform:rotate(-45deg)}.v-resize-drawer--handle-parent-top-icon{height:24px;left:initial;opacity:.5;right:0;top:0;transform:rotate(-90deg);transition:opacity .3s ease;width:24px}.v-resize-drawer--handle-parent-top-icon:hover{opacity:1}.v-resize-drawer--handle-parent-top-icon-right{left:0;right:initial;transform:rotate(-180deg)}.v-resize-drawer--handle-parent-top-icon-slot{align-items:center;height:24px;opacity:.5;padding:2px;right:0;top:0;transition:opacity .3s ease;width:auto}.v-resize-drawer--handle-parent-top-icon-slot:hover{opacity:1}.v-resize-drawer--handle-parent-top-icon-slot-right{left:0}.v-resize-drawer--handle-parent-center{height:24px;top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-parent-center-left{left:initial;right:0}.v-resize-drawer--handle-parent-border{background-color:transparent!important;cursor:col-resize;height:100%;top:0;width:8px}.v-resize-drawer--handle-parent-border-left{left:initial;right:0}.v-resize-drawer--handle-parent-border-primary{background-color:rgb(var(--v-theme-primary))!important}.v-resize-drawer--handle-parent-border-secondary{background-color:rgb(var(--v-theme-secondary))!important}.v-resize-drawer--handle-parent-border-success{background-color:rgb(var(--v-theme-success))!important}.v-resize-drawer--handle-parent-border-info{background-color:rgb(var(--v-theme-info))!important}.v-resize-drawer--handle-parent-border-warning{background-color:rgb(var(--v-theme-warning))!important}.v-resize-drawer--handle-parent-border-error{background-color:rgb(var(--v-theme-error))!important}.v-resize-drawer--handle-parent-left{left:initial;right:0}.v-resize-drawer--handle-left,.v-resize-drawer--handle-right{height:100%;top:0;width:12px}.v-resize-drawer--handle-handle-flip{transform:scaleX(-1)}.v-resize-drawer--handle-slot .v-icon{font-size:.5rem}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
