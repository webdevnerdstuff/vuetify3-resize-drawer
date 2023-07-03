"use strict";/**
 * @name vuetify3-resize-drawer
 * @version 2.0.2
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @repository https://github.com/webdevnerdstuff/vuetify3-resize-drawer
 * @license MIT License
 */const t=require("vue"),ot=require("vuetify");function I(e,o){return n=>Object.keys(e).reduce((r,a)=>{const h=typeof e[a]=="object"&&e[a]!=null&&!Array.isArray(e[a])?e[a]:{type:e[a]};return r[a]=n&&a in n?{...h,default:n[a]}:h,o&&!r[a].source&&(r[a].source=o),r},{})}const Ge=I({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Ve(e,o,n){(function(r,a){if(a.has(r))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,o),o.set(e,n)}function at(e,o,n){return function(r,a,h){if(a.set)a.set.call(r,h);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=h}}(e,je(e,o,"set"),n),n}function Q(e,o){return function(n,r){return r.get?r.get.call(n):r.value}(e,je(e,o,"get"))}function je(e,o,n){if(!o.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return o.get(e)}function le(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";return e==null||e===""?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${o}`:void 0}function xe(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const a in e)r[a]=e[a];for(const a in o){const h=e[a],v=o[a];xe(h)&&xe(v)?r[a]=ue(h,v,n):Array.isArray(h)&&Array.isArray(v)&&n?r[a]=n(h,v):r[a]=v}return r}function _e(e){return e.map(o=>o.type===t.Fragment?_e(o.children):o).flat()}function ee(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ee.cache.has(e))return ee.cache.get(e);const o=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ee.cache.set(e,o),o}ee.cache=new Map;var me=new WeakMap,ae=new WeakMap;class rt{constructor(o){Ve(this,me,{writable:!0,value:[]}),Ve(this,ae,{writable:!0,value:0}),this.size=o}push(o){Q(this,me)[Q(this,ae)]=o,at(this,ae,(Q(this,ae)+1)%this.size)}values(){return Q(this,me).slice(Q(this,ae)).concat(Q(this,me).slice(0,Q(this,ae)))}}function He(e){const o=t.reactive({}),n=t.computed(e);return t.watchEffect(()=>{for(const r in n.value)o[r]=n.value[r]},{flush:"sync"}),t.toRefs(o)}function Me(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Ue(e,o){let n;function r(){n=t.effectScope(),n.run(()=>o.length?o(()=>{n==null||n.stop(),r()}):o())}t.watch(e,a=>{a&&!n?r():a||(n==null||n.stop(),n=void 0)},{immediate:!0}),t.onScopeDispose(()=>{n==null||n.stop()})}const De=Symbol.for("vuetify:defaults");function Ee(){const e=t.inject(De);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Ye(e,o){const n=Ee(),r=t.ref(e),a=t.computed(()=>{if(t.unref(o==null?void 0:o.disabled))return n.value;const h=t.unref(o==null?void 0:o.scoped),v=t.unref(o==null?void 0:o.reset),s=t.unref(o==null?void 0:o.root);let u=ue(r.value,{prev:n.value});if(h)return u;if(v||s){const m=Number(v||1/0);for(let i=0;i<=m&&u&&"prev"in u;i++)u=u.prev;return u&&typeof s=="string"&&s in u&&(u=ue(ue(u,{prev:u}),u[s])),u}return u.prev?ue(u.prev,u):u});return t.provide(De,a),a}function it(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ee();const r=H("useDefaults");if(o=o??r.type.name??r.type.__name,!o)throw new Error("[Vuetify] Could not determine component name");const a=t.computed(()=>{var s;return(s=n.value)==null?void 0:s[e._as??o]}),h=new Proxy(e,{get(s,u){var i,y,E,g;const m=Reflect.get(s,u);return u==="class"||u==="style"?[(i=a.value)==null?void 0:i[u],m].filter(F=>F!=null):typeof u!="string"||function(F,M){var G,U;return((G=F.props)==null?void 0:G[M])!==void 0||((U=F.props)==null?void 0:U[ee(M)])!==void 0}(r.vnode,u)?m:((y=a.value)==null?void 0:y[u])??((g=(E=n.value)==null?void 0:E.global)==null?void 0:g[u])??m}}),v=t.shallowRef();return t.watchEffect(()=>{if(a.value){const s=Object.entries(a.value).filter(u=>{let[m]=u;return m.startsWith(m[0].toUpperCase())});s.length&&(v.value=Object.fromEntries(s))}}),{props:h,provideSubDefaults:function(){Ue(v,()=>{var s;Ye(ue(((s=function(u){const{provides:m}=H("injectSelf");if(m&&u in m)return m[u]}(De))==null?void 0:s.value)??{},v.value))})}}}function he(e){if(e._setup=e._setup??e.setup,!e.name)return o="The component is missing an explicit name, unable to generate default prop value",t.warn(`Vuetify: ${o}`),e;var o;if(e._setup){e.props=I(e.props??{},e.name)();const n=Object.keys(e.props);e.filterProps=function(r){return function(a,h,v){const s=Object.create(null),u=Object.create(null);for(const m in a)h.some(i=>i instanceof RegExp?i.test(m):i===m)&&!(v!=null&&v.some(i=>i===m))?s[m]=a[m]:u[m]=a[m];return[s,u]}(r,n,["class","style"])},e.props._as=String,e.setup=function(r,a){const h=Ee();if(!h.value)return e._setup(r,a);const{props:v,provideSubDefaults:s}=it(r,r._as??e.name,h),u=e._setup(v,a);return s(),u}}return e}function ke(){let e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return o=>(e?he:t.defineComponent)(o)}function H(e,o){const n=t.getCurrentInstance();if(!n)throw new Error(`[Vuetify] ${e} ${o||"must be called from inside a setup function"}`);return n}function Ce(){const e=H(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables").type;return ee((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let qe=0,pe=new WeakMap;function Xe(){const e=H("getUid");if(pe.has(e))return pe.get(e);{const o=qe++;return pe.set(e,o),o}}function Ke(e){H("useRender").render=e}Xe.reset=()=>{qe=0,pe=new WeakMap};const lt=Symbol.for("vuetify:layout"),ut=Symbol.for("vuetify:layout-item"),st=I({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item"),ct=Symbol.for("vuetify:locale"),ze=Symbol.for("vuetify:theme"),Ze=I({theme:String},"theme");function Je(e){H("provideTheme");const o=t.inject(ze,null);if(!o)throw new Error("Could not find Vuetify theme injection");const n=t.computed(()=>e.theme??(o==null?void 0:o.name.value)),r=t.computed(()=>o.isDisabled?void 0:`v-theme--${n.value}`),a={...o,name:n,themeClasses:r};return t.provide(ze,a),a}const Qe=I({tag:{type:String,default:"div"}},"tag"),dt=I({border:[Boolean,Number,String]},"border");function et(e){return He(()=>{const o=[],n={};return e.value.background&&(Me(e.value.background)?n.backgroundColor=e.value.background:o.push(`bg-${e.value.background}`)),e.value.text&&(Me(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):o.push(`text-${e.value.text}`)),{colorClasses:o,colorStyles:n}})}function Re(e,o){const n=t.computed(()=>({background:t.isRef(e)?e.value:o?e[o]:null})),{colorClasses:r,colorStyles:a}=et(n);return{backgroundColorClasses:r,backgroundColorStyles:a}}const vt=I({elevation:{type:[Number,String],validator(e){const o=parseInt(e);return!isNaN(o)&&o>=0&&o<=24}}},"elevation"),mt=I({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded"),tt=[String,Function,Object,Array],pt=Symbol.for("vuetify:icons"),fe=I({icon:{type:tt},tag:{type:String,required:!0}},"icon"),Le=ke()({name:"VComponentIcon",props:fe(),setup(e,o){let{slots:n}=o;return()=>{const r=e.icon;return t.createVNode(e.tag,null,{default:()=>{var a;return[e.icon?t.createVNode(r,null,null):(a=n.default)==null?void 0:a.call(n)]}})}}}),ht=he({name:"VSvgIcon",inheritAttrs:!1,props:fe(),setup(e,o){let{attrs:n}=o;return()=>t.createVNode(e.tag,t.mergeProps(n,{style:null}),{default:()=>[t.createVNode("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(r=>Array.isArray(r)?t.createVNode("path",{d:r[0],"fill-opacity":r[1]},null):t.createVNode("path",{d:r},null)):t.createVNode("path",{d:e.icon},null)])]})}});he({name:"VLigatureIcon",props:fe(),setup:e=>()=>t.createVNode(e.tag,null,{default:()=>[e.icon]})}),he({name:"VClassIcon",props:fe(),setup:e=>()=>t.createVNode(e.tag,{class:e.icon},null)});const ft=["x-small","small","default","large","x-large"],gt=I({size:{type:[String,Number],default:"default"}},"size"),yt=I({color:String,start:Boolean,end:Boolean,icon:tt,...Ge(),...gt(),...Qe({tag:"i"}),...Ze()},"VIcon"),wt=ke()({name:"VIcon",props:yt(),setup(e,o){let{attrs:n,slots:r}=o;const a=t.ref(),{themeClasses:h}=Je(e),{iconData:v}=(i=>{const y=t.inject(pt);if(!y)throw new Error("Missing Vuetify Icons provide!");return{iconData:t.computed(()=>{var G;const E=t.unref(i);if(!E)return{component:Le};let g=E;if(typeof g=="string"&&(g=g.trim(),g.startsWith("$")&&(g=(G=y.aliases)==null?void 0:G[g.slice(1)])),!g)throw new Error(`Could not find aliased icon "${E}"`);if(Array.isArray(g))return{component:ht,icon:g};if(typeof g!="string")return{component:Le,icon:g};const F=Object.keys(y.sets).find(U=>typeof g=="string"&&g.startsWith(`${U}:`)),M=F?g.slice(F.length+1):g;return{component:y.sets[F??y.defaultSet].component,icon:M}})}})(t.computed(()=>a.value||e.icon)),{sizeClasses:s}=function(i){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ce();return He(()=>{let E,g;var F,M;return F=ft,M=i.size,F.includes(M)?E=`${y}--size-${i.size}`:i.size&&(g={width:le(i.size),height:le(i.size)}),{sizeClasses:E,sizeStyles:g}})}(e),{textColorClasses:u,textColorStyles:m}=function(i,y){const E=t.computed(()=>({text:t.isRef(i)?i.value:y?i[y]:null})),{colorClasses:g,colorStyles:F}=et(E);return{textColorClasses:g,textColorStyles:F}}(t.toRef(e,"color"));return Ke(()=>{var y,E;const i=(y=r.default)==null?void 0:y.call(r);return i&&(a.value=(E=_e(i).filter(g=>g.type===t.Text&&g.children&&typeof g.children=="string")[0])==null?void 0:E.children),t.createVNode(v.value.component,{tag:e.tag,icon:v.value.icon,class:["v-icon","notranslate",h.value,s.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:le(e.size),height:le(e.size),width:le(e.size)},m.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[i]})}),{}}}),Ft=Symbol.for("vuetify:display"),bt=100,St=20;function Pe(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ie(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const r=Pe(o),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);o+=(a-r)*Math.abs(a),n===e.length-1&&(o*=.5)}return 1e3*Pe(o)}function Ct(){const e={};return{addMovement:function(o){Array.from(o.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new rt(St))).push([o.timeStamp,n])})},endTouch:function(o){Array.from(o.changedTouches).forEach(n=>{delete e[n.identifier]})},getVelocity:function(o){var v;const n=(v=e[o])==null?void 0:v.values().reverse();if(!n)throw new Error(`No samples for touch id ${o}`);const r=n[0],a=[],h=[];for(const s of n){if(r[0]-s[0]>bt)break;a.push({t:s[0],d:s[1].clientX}),h.push({t:s[0],d:s[1].clientY})}return{x:Ie(a),y:Ie(h),get direction(){const{x:s,y:u}=this,[m,i]=[Math.abs(s),Math.abs(u)];return m>i&&s>=0?"right":m>i&&s<=0?"left":i>m&&u>=0?"down":i>m&&u<=0?"up":function(){throw new Error}()}}}}}function re(){throw new Error}const Bt=["start","end","left","right","top","bottom"],Dt=I({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Bt.includes(e)},sticky:Boolean,...dt(),...Ge(),...vt(),...st(),...mt(),...Qe({tag:"nav"}),...Ze()},"VNavigationDrawer"),Et=ke()({name:"VNavigationDrawer",props:Dt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){var x,L;let{attrs:n,emit:r,slots:a}=o;const{isRtl:h}=function(){const l=t.inject(ct);if(!l)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:l.isRtl,rtlClasses:l.rtlClasses}}(),{themeClasses:v}=Je(e),{borderClasses:s}=function(l){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ce();return{borderClasses:t.computed(()=>{const S=t.isRef(l)?l.value:l.border,w=[];if(S===!0||S==="")w.push(`${c}--border`);else if(typeof S=="string"||S===0)for(const B of String(S).split(" "))w.push(`border-${B}`);return w})}}(e),{backgroundColorClasses:u,backgroundColorStyles:m}=Re(t.toRef(e,"color")),{elevationClasses:i}=function(l){return{elevationClasses:t.computed(()=>{const c=t.isRef(l)?l.value:l.elevation,S=[];return c==null||S.push(`elevation-${c}`),S})}}(e),{mobile:y}=function(){const l=t.inject(Ft);if(!l)throw new Error("Could not find Vuetify display injection");return l}(),{roundedClasses:E}=function(l){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ce();return{roundedClasses:t.computed(()=>{const S=t.isRef(l)?l.value:l.rounded,w=[];if(S===!0||S==="")w.push(`${c}--rounded`);else if(typeof S=="string"||S===0)for(const B of String(S).split(" "))w.push(`rounded-${B}`);return w})}}(e),g=(L=(x=H("useRouter"))==null?void 0:x.proxy)==null?void 0:L.$router,F=function(l,c,S){let w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C=>C,B=arguments.length>4&&arguments[4]!==void 0?arguments[4]:C=>C;const p=H("useProxiedModel"),$=t.ref(l[c]!==void 0?l[c]:S),j=ee(c),_=j!==c?t.computed(()=>{var C,A,V,P;return l[c],!(!((C=p.vnode.props)!=null&&C.hasOwnProperty(c))&&!((A=p.vnode.props)!=null&&A.hasOwnProperty(j))||!((V=p.vnode.props)!=null&&V.hasOwnProperty(`onUpdate:${c}`))&&!((P=p.vnode.props)!=null&&P.hasOwnProperty(`onUpdate:${j}`)))}):t.computed(()=>{var C,A;return l[c],!(!((C=p.vnode.props)!=null&&C.hasOwnProperty(c))||!((A=p.vnode.props)!=null&&A.hasOwnProperty(`onUpdate:${c}`)))});Ue(()=>!_.value,()=>{t.watch(()=>l[c],C=>{$.value=C})});const z=t.computed({get(){const C=l[c];return w(_.value?C:$.value)},set(C){const A=B(C),V=t.toRaw(_.value?l[c]:$.value);V!==A&&w(V)!==C&&($.value=A,p==null||p.emit(`update:${c}`,A))}});return Object.defineProperty(z,"externalValue",{get:()=>_.value?l[c]:$.value}),z}(e,"modelValue",null,l=>!!l),{ssrBootStyles:M}=function(){const l=t.shallowRef(!1);return t.onMounted(()=>{window.requestAnimationFrame(()=>{l.value=!0})}),{ssrBootStyles:t.computed(()=>l.value?void 0:{transition:"none !important"}),isBooted:t.readonly(l)}}(),{scopeId:G}=function(){const l=H("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}(),U=t.ref(),Z=t.shallowRef(!1),se=t.computed(()=>e.rail&&e.expandOnHover&&Z.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),te=t.computed(()=>function(l,c){return l==="start"?c?"right":"left":l==="end"?c?"left":"right":l}(e.location,h.value)),O=t.computed(()=>!e.permanent&&(y.value||e.temporary)),ne=t.computed(()=>e.sticky&&!O.value&&te.value!=="bottom");e.expandOnHover&&e.rail!=null&&t.watch(Z,l=>r("update:rail",!l)),e.disableResizeWatcher||t.watch(O,l=>!e.permanent&&t.nextTick(()=>F.value=!l)),!e.disableRouteWatcher&&g&&t.watch(g.currentRoute,()=>O.value&&(F.value=!1)),t.watch(()=>e.permanent,l=>{l&&(F.value=!0)}),t.onBeforeMount(()=>{e.modelValue!=null||O.value||(F.value=e.permanent||!y.value)});const{isDragging:Y,dragProgress:ce,dragStyles:ge}=function(l){let{isActive:c,isTemporary:S,width:w,touchless:B,position:p}=l;t.onMounted(()=>{window.addEventListener("touchstart",We,{passive:!0}),window.addEventListener("touchmove",Ne,{passive:!1}),window.addEventListener("touchend",$e,{passive:!0})}),t.onBeforeUnmount(()=>{window.removeEventListener("touchstart",We),window.removeEventListener("touchmove",Ne),window.removeEventListener("touchend",$e)});const $=t.computed(()=>["left","right"].includes(p.value)),{addMovement:j,endTouch:_,getVelocity:z}=Ct();let C=!1;const A=t.shallowRef(!1),V=t.shallowRef(0),P=t.shallowRef(0);let J;function we(k,W){return(p.value==="left"?k:p.value==="right"?document.documentElement.clientWidth-k:p.value==="top"?k:p.value==="bottom"?document.documentElement.clientHeight-k:re())-(W?w.value:0)}function Ae(k){let W=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const N=p.value==="left"?(k-P.value)/w.value:p.value==="right"?(document.documentElement.clientWidth-k-P.value)/w.value:p.value==="top"?(k-P.value)/w.value:p.value==="bottom"?(document.documentElement.clientHeight-k-P.value)/w.value:re();return W?Math.max(0,Math.min(1,N)):N}function We(k){if(B.value)return;const W=k.changedTouches[0].clientX,N=k.changedTouches[0].clientY,q=p.value==="left"?W<25:p.value==="right"?W>document.documentElement.clientWidth-25:p.value==="top"?N<25:p.value==="bottom"?N>document.documentElement.clientHeight-25:re(),K=c.value&&(p.value==="left"?W<w.value:p.value==="right"?W>document.documentElement.clientWidth-w.value:p.value==="top"?N<w.value:p.value==="bottom"?N>document.documentElement.clientHeight-w.value:re());(q||K||c.value&&S.value)&&(C=!0,J=[W,N],P.value=we($.value?W:N,c.value),V.value=Ae($.value?W:N),_(k),j(k))}function Ne(k){const W=k.changedTouches[0].clientX,N=k.changedTouches[0].clientY;if(C){if(!k.cancelable)return void(C=!1);const K=Math.abs(W-J[0]),ve=Math.abs(N-J[1]);($.value?K>ve&&K>3:ve>K&&ve>3)?(A.value=!0,C=!1):($.value?ve:K)>3&&(C=!1)}if(!A.value)return;k.preventDefault(),j(k);const q=Ae($.value?W:N,!1);V.value=Math.max(0,Math.min(1,q)),q>1?P.value=we($.value?W:N,!0):q<0&&(P.value=we($.value?W:N,!1))}function $e(k){if(C=!1,!A.value)return;j(k),A.value=!1;const W=z(k.changedTouches[0].identifier),N=Math.abs(W.x),q=Math.abs(W.y),K=$.value?N>q&&N>400:q>N&&q>3;c.value=K?W.direction===({left:"right",right:"left",top:"down",bottom:"up"}[p.value]||re()):V.value>.5}const nt=t.computed(()=>A.value?{transform:p.value==="left"?`translateX(calc(-100% + ${V.value*w.value}px))`:p.value==="right"?`translateX(calc(100% - ${V.value*w.value}px))`:p.value==="top"?`translateY(calc(-100% + ${V.value*w.value}px))`:p.value==="bottom"?`translateY(calc(100% - ${V.value*w.value}px))`:re(),transition:"none"}:void 0);return{isDragging:A,dragProgress:V,dragStyles:nt}}({isActive:F,isTemporary:O,width:se,touchless:t.toRef(e,"touchless"),position:te}),ye=t.computed(()=>{const l=O.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):se.value;return Y.value?l*ce.value:l}),{layoutItemStyles:de,layoutItemScrimStyles:oe}=function(l){const c=t.inject(lt);if(!c)throw new Error("[Vuetify] Could not find injected layout");const S=l.id??`layout-item-${Xe()}`,w=H("useLayoutItem");t.provide(ut,{id:S});const B=t.shallowRef(!1);t.onDeactivated(()=>B.value=!0),t.onActivated(()=>B.value=!1);const{layoutItemStyles:p,layoutItemScrimStyles:$}=c.register(w,{...l,active:t.computed(()=>!B.value&&l.active.value),id:S});return t.onBeforeUnmount(()=>c.unregister(S)),{layoutItemStyles:p,layoutRect:c.layoutRect,layoutItemScrimStyles:$}}({id:e.name,order:t.computed(()=>parseInt(e.order,10)),position:te,layoutSize:ye,elementSize:se,active:t.computed(()=>F.value||Y.value),disableTransitions:t.computed(()=>Y.value),absolute:t.computed(()=>e.absolute||ne.value&&typeof X.value!="string")}),{isStuck:X,stickyStyles:d}=function(l){let{rootEl:c,isSticky:S,layoutItemStyles:w}=l;const B=t.shallowRef(!1),p=t.shallowRef(0),$=t.computed(()=>{const z=typeof B.value=="boolean"?"top":B.value;return[S.value?{top:"auto",bottom:"auto",height:void 0}:void 0,B.value?{[z]:le(p.value)}:{top:w.value.top}]});t.onMounted(()=>{t.watch(S,z=>{z?window.addEventListener("scroll",_,{passive:!0}):window.removeEventListener("scroll",_)},{immediate:!0})}),t.onBeforeUnmount(()=>{document.removeEventListener("scroll",_)});let j=0;function _(){const z=j>window.scrollY?"up":"down",C=c.value.getBoundingClientRect(),A=parseFloat(w.value.top??0),V=window.scrollY-Math.max(0,p.value-A),P=C.height+Math.max(p.value,A)-window.scrollY-window.innerHeight,J=parseFloat(getComputedStyle(c.value).getPropertyValue("--v-body-scroll-y"))||0;C.height<window.innerHeight-A?(B.value="top",p.value=A):z==="up"&&B.value==="bottom"||z==="down"&&B.value==="top"?(p.value=window.scrollY+C.top-J,B.value=!0):z==="down"&&P<=0?(p.value=0,B.value="bottom"):z==="up"&&V<=0&&(J?B.value!=="top"&&(p.value=-V+J+A,B.value="top"):(p.value=C.top+V,B.value="top")),j=window.scrollY}return{isStuck:B,stickyStyles:$}}({rootEl:U,isSticky:ne,layoutItemStyles:de}),f=Re(t.computed(()=>typeof e.scrim=="string"?e.scrim:null)),D=t.computed(()=>({...Y.value?{opacity:.2*ce.value,transition:"none"}:void 0,...oe.value}));function b(){Z.value=!0}function R(){Z.value=!1}return Ye({VList:{bgColor:"transparent"}}),Ke(()=>{const l=a.image||e.image;return t.createVNode(t.Fragment,null,[t.createVNode(e.tag,t.mergeProps({ref:U,onMouseenter:b,onMouseleave:R,class:["v-navigation-drawer",`v-navigation-drawer--${te.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":Z.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":O.value,"v-navigation-drawer--active":F.value,"v-navigation-drawer--sticky":ne.value},v.value,u.value,s.value,i.value,E.value,e.class],style:[m.value,de.value,ge.value,M.value,d.value,e.style]},G,n),{default:()=>{var c,S,w,B;return[l&&t.createVNode("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(c=a.image)==null?void 0:c.call(a,{image:e.image}):t.createVNode("img",{src:e.image,alt:""},null)]),a.prepend&&t.createVNode("div",{class:"v-navigation-drawer__prepend"},[(S=a.prepend)==null?void 0:S.call(a)]),t.createVNode("div",{class:"v-navigation-drawer__content"},[(w=a.default)==null?void 0:w.call(a)]),a.append&&t.createVNode("div",{class:"v-navigation-drawer__append"},[(B=a.append)==null?void 0:B.call(a)])]}}),t.createVNode(t.Transition,{name:"fade-transition"},{default:()=>[O.value&&(Y.value||F.value)&&!!e.scrim&&t.createVNode("div",t.mergeProps({class:["v-navigation-drawer__scrim",f.backgroundColorClasses.value],style:[D.value,f.backgroundColorStyles.value],onClick:()=>F.value=!1},G),null)]})])}),{isStuck:X}}}),T="v-resize-drawer",kt={handleBorderWidth:8,handleColor:"primary",handleIcon:void 0,handleIconSize:"x-small",handlePosition:"center",height:void 0,location:"start",maxWidth:"100%",minWidth:56,modelValue:!0,name:T,rail:!1,railWidth:8,resizable:!0,saveWidth:!0,storageName:`${T}-width`,storageType:"local",tag:"nav",theme:"light",width:256,widthSnapBack:!0};function Be(e,o){return e==="local"?localStorage.getItem(o):e==="session"?sessionStorage.getItem(o):""}const Fe=e=>{const{action:o="update",resizedWidth:n,storageType:r,storageName:a,saveWidth:h,rail:v}=e;if(!h||v)return;let s=n;s=s??void 0,o==="set"&&(s=Be(r,a)??"",s=s||n),r==="local"&&localStorage.setItem(a,String(s)),r==="session"&&sessionStorage.setItem(a,String(s))},ie=e=>{const{str:o,unit:n="px"}=e;if(o!=null&&o!=="")return+o?`${Number(o)}${n}`:String(o)},be=e=>{const o=window.innerWidth;return typeof e=="string"&&e.includes("%")?Number(e.replace("%",""))/100*o:typeof e=="string"?Number(e.replace(/\D/g,"")):e};function Oe(e){let o=function(i){const y={AliceBlue:"#F0F8FF",AntiqueWhite:"#FAEBD7",Aqua:"#00FFFF",Aquamarine:"#7FFFD4",Azure:"#F0FFFF",Beige:"#F5F5DC",Bisque:"#FFE4C4",Black:"#000000",BlanchedAlmond:"#FFEBCD",Blue:"#0000FF",BlueViolet:"#8A2BE2",Brown:"#A52A2A",BurlyWood:"#DEB887",CadetBlue:"#5F9EA0",Chartreuse:"#7FFF00",Chocolate:"#D2691E",Coral:"#FF7F50",CornflowerBlue:"#6495ED",Cornsilk:"#FFF8DC",Crimson:"#DC143C",Cyan:"#00FFFF",DarkBlue:"#00008B",DarkCyan:"#008B8B",DarkGoldenRod:"#B8860B",DarkGray:"#A9A9A9",DarkGreen:"#006400",DarkGrey:"#A9A9A9",DarkKhaki:"#BDB76B",DarkMagenta:"#8B008B",DarkOliveGreen:"#556B2F",DarkOrange:"#FF8C00",DarkOrchid:"#9932CC",DarkRed:"#8B0000",DarkSalmon:"#E9967A",DarkSeaGreen:"#8FBC8F",DarkSlateBlue:"#483D8B",DarkSlateGray:"#2F4F4F",DarkSlateGrey:"#2F4F4F",DarkTurquoise:"#00CED1",DarkViolet:"#9400D3",DeepPink:"#FF1493",DeepSkyBlue:"#00BFFF",DimGray:"#696969",DimGrey:"#696969",DodgerBlue:"#1E90FF",FireBrick:"#B22222",FloralWhite:"#FFFAF0",ForestGreen:"#228B22",Fuchsia:"#FF00FF",Gainsboro:"#DCDCDC",GhostWhite:"#F8F8FF",Gold:"#FFD700",GoldenRod:"#DAA520",Gray:"#808080",Green:"#008000",GreenYellow:"#ADFF2F",Grey:"#808080",HoneyDew:"#F0FFF0",HotPink:"#FF69B4",IndianRed:"#CD5C5C",Indigo:"#4B0082",Ivory:"#FFFFF0",Khaki:"#F0E68C",Lavender:"#E6E6FA",LavenderBlush:"#FFF0F5",LawnGreen:"#7CFC00",LemonChiffon:"#FFFACD",LightBlue:"#ADD8E6",LightCoral:"#F08080",LightCyan:"#E0FFFF",LightGoldenRodYellow:"#FAFAD2",LightGray:"#D3D3D3",LightGreen:"#90EE90",LightGrey:"#D3D3D3",LightPink:"#FFB6C1",LightSalmon:"#FFA07A",LightSeaGreen:"#20B2AA",LightSkyBlue:"#87CEFA",LightSlateGray:"#778899",LightSlateGrey:"#778899",LightSteelBlue:"#B0C4DE",LightYellow:"#FFFFE0",Lime:"#00FF00",LimeGreen:"#32CD32",Linen:"#FAF0E6",Magenta:"#FF00FF",Maroon:"#800000",MediumAquaMarine:"#66CDAA",MediumBlue:"#0000CD",MediumOrchid:"#BA55D3",MediumPurple:"#9370DB",MediumSeaGreen:"#3CB371",MediumSlateBlue:"#7B68EE",MediumSpringGreen:"#00FA9A",MediumTurquoise:"#48D1CC",MediumVioletRed:"#C71585",MidnightBlue:"#191970",MintCream:"#F5FFFA",MistyRose:"#FFE4E1",Moccasin:"#FFE4B5",NavajoWhite:"#FFDEAD",Navy:"#000080",OldLace:"#FDF5E6",Olive:"#808000",OliveDrab:"#6B8E23",Orange:"#FFA500",OrangeRed:"#FF4500",Orchid:"#DA70D6",PaleGoldenRod:"#EEE8AA",PaleGreen:"#98FB98",PaleTurquoise:"#AFEEEE",PaleVioletRed:"#DB7093",PapayaWhip:"#FFEFD5",PeachPuff:"#FFDAB9",Peru:"#CD853F",Pink:"#FFC0CB",Plum:"#DDA0DD",PowderBlue:"#B0E0E6",Purple:"#800080",RebeccaPurple:"#663399",Red:"#FF0000",RosyBrown:"#BC8F8F",RoyalBlue:"#4169E1",SaddleBrown:"#8B4513",Salmon:"#FA8072",SandyBrown:"#F4A460",SeaGreen:"#2E8B57",SeaShell:"#FFF5EE",Sienna:"#A0522D",Silver:"#C0C0C0",SkyBlue:"#87CEEB",SlateBlue:"#6A5ACD",SlateGray:"#708090",SlateGrey:"#708090",Snow:"#FFFAFA",SpringGreen:"#00FF7F",SteelBlue:"#4682B4",Tan:"#D2B48C",Teal:"#008080",Thistle:"#D8BFD8",Tomato:"#FF6347",Turquoise:"#40E0D0",Violet:"#EE82EE",Wheat:"#F5DEB3",White:"#FFFFFF",WhiteSmoke:"#F5F5F5",Yellow:"#FFFF00",YellowGreen:"#9ACD32"};let E=i;return Object.entries(y).forEach(([g,F])=>{i.toLowerCase()!=g.toLowerCase()||(E=F)}),E}(e),n=0,r=0,a=0,h=0,v=0,s=0;if(o.substring(0,1)==="#")o=function(i){let y=i.replace("#","");y.length===3&&(y=y.split("").map(M=>M+M).join(""));const E=parseInt(y.substring(0,2),16),g=parseInt(y.substring(2,4),16),F=parseInt(y.substring(4,6),16);return[E,g,F]}(o);else if(o.includes("rgb"))o=[...o.matchAll(/\d+/g)].map(Number);else if(o.includes("hsl"))return o=[...o.matchAll(/\d+/g)].map(Number),n=o[0],r=o[1],a=o[2],`${n} ${r}% ${a}%`;[h,v,s]=o,h/=255,v/=255,s/=255;const u=Math.max(h,v,s),m=Math.min(h,v,s);if(u===null||!m===null||isNaN(u)||isNaN(m)){const i="0 0% 100% / 12%";return console.warn(`[VResizeDrawer]: The "color" prop value using "${o}" doesn't exist. Using the value "hsl(${i})" in it's place.`),i}if(n=(u+m)/2,r=(u+m)/2,a=(u+m)/2,u==m)n=r=0;else{const i=u-m;switch(r=a>.5?i/(2-u-m):i/(u+m),u){case h:n=(v-s)/i+(v<s?6:0);break;case v:n=(s-h)/i+2;break;case s:n=(h-v)/i+4}n/=6}return n=Math.round(360*n),r=Math.round(100*r),a=Math.round(100*a),`${n} ${r}% ${a}%`}const Te=(e,o)=>{if(function(r){return r==="transparent"||r==="none"||r==="inherit"||r==="currentColor"||r==="initial"||r==="unset"}(e))return e;if(function(r){return r.includes("--v-theme")}(e))return`rgb(var(${e}))`;const n=function(r,a){const h=a.global.current.value.colors;return Object.entries(h).find(([v])=>v===r)}(e,o);return n?`hsl(${Oe(n[1])})`:`hsl(${Oe(e)})`},At={default:"1.5em",large:"1.75em",small:"1.25em","x-large":"2em","x-small":"1em"},Wt={fa:{bottom:"fas fa-grip",center:"fas fa-angles-right",top:"fas fa-grip"},mdi:{bottom:"mdi:mdi-dots-grid",center:"mdi:mdi-chevron-double-right",top:"mdi:mdi-dots-grid"}},Nt={key:0,class:"v-resize-drawer--handle-slot"},Se=t.defineComponent({__name:"VResizeDrawer",props:t.mergeDefaults({absolute:{},expandOnHover:{},floating:{},handleBorderWidth:{},handleColor:{},handleIcon:{},handleIconSize:{},handlePosition:{},height:{},location:{},maxWidth:{},minWidth:{},modelValue:{},name:{},rail:{},railWidth:{},resizable:{type:Boolean},saveWidth:{type:Boolean},storageName:{},storageType:{},tag:{},temporary:{},theme:{},width:{},widthSnapBack:{type:Boolean}},{...kt}),emits:["handle:click","handle:dblclick","handle:drag","handle:mousedown","handle:mouseup"],setup(e,{emit:o}){const n=e,r=t.computed(()=>n),a=t.inject(Symbol.for("vuetify:icons")),h=t.ref(256),v={mouseDown:!1,mouseUp:!0},s=t.ref(!1),u=t.ref(!1),m=t.ref(),i=t.ref(256),y=t.useSlots(),E=ot.useTheme();t.onMounted(()=>{if(n.location!=="start"&&n.location!=="end"&&n.location!=="left"&&n.location!=="right")throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");(function(){if(n.rail)return i.value=n.railWidth||void 0,!1;const d=Be(n.storageType,n.storageName),f=ie({str:n.width});i.value=f,h.value=i.value,n.saveWidth&&d&&!n.rail&&(i.value=Be(n.storageType,n.storageName)),function(){const D=m.value;if(D){const b=D.$el;b.addEventListener("mouseenter",O,!1),b.addEventListener("mouseleave",ne,!1)}}(),Fe({action:"update",rail:n.rail,resizedWidth:i.value,saveWidth:n.saveWidth,storageName:n.storageName,storageType:n.storageType})})()}),t.onUnmounted(()=>{(function(){const d=m.value;if(d){const f=d.$el;f.addEventListener("mouseenter",O,!1),f.addEventListener("mouseleave",ne,!1)}document.removeEventListener("mouseup",oe,!1),document.removeEventListener("mousemove",Y,!1)})()});const g=t.computed(()=>(d=>{const{absolute:f=!1,expandOnHover:D,floating:b,isMouseover:R,location:x,rail:L,railWidth:l,temporary:c}=d;return{[`${T}`]:!0,"v-navigation-drawer--absolute":f??!1,"v-navigation-drawer--custom-rail":Number(l)!==56,"v-navigation-drawer--fixed":!f,"v-navigation-drawer--floating":b,"v-navigation-drawer--is-mouseover":t.unref(R),"v-navigation-drawer--left":x==="left"||x==="start"||x===void 0,"v-navigation-drawer--open-on-hover":D,"v-navigation-drawer--rail":L??!1,"v-navigation-drawer--right":x==="right"||x==="end","v-navigation-drawer--temporary":c}})({absolute:n.absolute,expandOnHover:n.expandOnHover,floating:n.floating,isMouseover:s,location:n.location,rail:n.rail,railWidth:n.railWidth,temporary:n.temporary})),F=t.computed(()=>(d=>{const{isMouseDown:f,maxWidth:D,minWidth:b,rail:R,railWidth:x,resizedWidth:L,widthSnapBack:l}=d;if(R)return{};let c=R?x:t.unref(L);return l||(parseInt(c)>=parseInt(D)&&(c=D),parseInt(c)<=parseInt(b)&&(c=b)),{transitionDuration:t.unref(f)?"0s":".2s",width:ie({str:c})}})({isMouseDown:u,maxWidth:n.maxWidth,minWidth:n.minWidth,rail:n.rail,railWidth:n.railWidth,resizedWidth:i,widthSnapBack:n.widthSnapBack})),M=t.computed(()=>{if(!n.rail)return ie({str:i.value})}),G=t.computed(()=>(d=>{const{drawerLocation:f,handlePosition:D}=d;return{[`${T}--handle-container`]:!0,[`${T}--handle-container-position-${D}`]:!0,[`${T}--handle-container-parent-${f}`]:!0}})({drawerLocation:n.location,handlePosition:n.handlePosition})),U=t.computed(()=>(d=>{const{borderWidth:f,handleColor:D,iconSize:b,position:R,theme:x}=d;if(R==="border")return{backgroundColor:Te(D,x),height:"100%",width:ie({str:f})};const L=At[b];return{backgroundColor:"transparent",height:L,width:L}})({borderWidth:n.handleBorderWidth,handleColor:n.handleColor,iconSize:n.handleIconSize,position:n.handlePosition,theme:E})),Z=t.computed(()=>(d=>{const{color:f,theme:D}=d;return{color:Te(f,D)}})({color:n.handleColor,theme:E})),se=t.computed(()=>(d=>{const{drawerLocation:f,handlePosition:D,iconOptions:b,isUserIcon:R}=d;return{[`${T}--handle-container-icon`]:!0,[`${T}--handle-container-icon-${D}-${f}`]:!0,[`${T}--handle-container-icon-user-icon`]:R,[`${T}--handle-container-icon-fa`]:(b==null?void 0:b.defaultSet)==="fa",[`${T}--handle-container-icon-fa-${D}`]:(b==null?void 0:b.defaultSet)==="fa"}})({drawerLocation:n.location,handlePosition:n.handlePosition,iconOptions:a,isUserIcon:n.handleIcon!==void 0&&n.handleIcon!==null})),te=t.computed(()=>(f=>{const{icon:D,iconOptions:b,position:R}=f;if(D)return D;const x=Wt[b==null?void 0:b.defaultSet];if(!x)throw new Error(`VResizeDrawer: No default ${b==null?void 0:b.defaultSet} icon set found. Please set the icon prop.`);const L=x[R];if(!L)throw new Error(`VResizeDrawer: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);return L})({icon:n.handleIcon,iconOptions:a,position:n.handlePosition}));function O(){s.value=!0}function ne(){s.value=!1}function Y(d){let f=d.clientX;n.location!=="right"&&n.location!=="end"||(f=document.body.scrollWidth-f),i.value=ie({str:f})||void 0,n.widthSnapBack||(i.value=ce(i.value)),document.body.style.cursor="grabbing",X("handle:drag",d)}function ce(d){let f=be(d);const D=be(n.maxWidth),b=be(n.minWidth);return f>=D&&(f=D),b>=f&&(f=b),f}function ge(d){X("handle:click",d)}function ye(d){i.value=h.value,Fe({rail:n.rail,resizedWidth:i.value,saveWidth:n.saveWidth,storageName:n.storageName,storageType:n.storageType}),X("handle:dblclick",d)}function de(d){d.preventDefault(),d.stopPropagation();let f=25;u.value=!0,n.handlePosition==="border"&&(f=n.handleBorderWidth),v.mouseUp=!1,d.offsetX<f&&document.addEventListener("mousemove",Y,!1),v.mouseDown||(v.mouseDown=!0,document.addEventListener("mouseup",oe,!1),X("handle:mousedown",d))}function oe(d){d.preventDefault(),d.stopPropagation();const f=m.value;u.value=!1,v.mouseDown=!1,i.value=(f==null?void 0:f.width)??h.value,document.body.style.cursor="",i.value=ce(i.value),i.value=ie({str:i.value})||void 0,Fe({rail:n.rail,resizedWidth:i.value,saveWidth:n.saveWidth,storageName:n.storageName,storageType:n.storageType}),v.mouseUp||(v.mouseUp=!0,document.removeEventListener("mouseup",oe,!1),document.removeEventListener("mousemove",Y,!1),X("handle:mouseup",d))}function X(d,f){const D={e:f,eventName:d,offsetWidth:i.value,resizedWidth:i.value,width:i.value};o(d,D)}return(d,f)=>(t.openBlock(),t.createBlock(t.unref(Et),t.mergeProps(t.unref(r),{ref_key:"resizeDrawer",ref:m,class:t.unref(g),location:n.location,"model-value":d.modelValue,name:n.name,style:t.unref(F),tag:n.tag,theme:n.theme,width:t.unref(M)}),{default:t.withCtx(()=>[n.resizable&&!n.rail?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(t.unref(G)),style:t.normalizeStyle(t.unref(U)),onClick:ge,onDblclick:ye,onMousedown:de,onMouseup:oe},[t.unref(y).handle?(t.openBlock(),t.createElementBlock("div",Nt,[t.renderSlot(d.$slots,"handle")])):d.handlePosition!=="border"?(t.openBlock(),t.createBlock(wt,{key:1,class:t.normalizeClass(["v-resize-drawer--handle-icon",t.unref(se)]),icon:t.unref(te),size:d.handleIconSize,style:t.normalizeStyle(t.unref(Z))},null,8,["class","icon","size","style"])):t.createCommentVNode("",!0)],38)):t.createCommentVNode("",!0),t.unref(y).prepend?t.renderSlot(d.$slots,"prepend",{key:1}):t.createCommentVNode("",!0),t.renderSlot(d.$slots,"default"),t.unref(y).append?t.renderSlot(d.$slots,"append",{key:2}):t.createCommentVNode("",!0)]),_:3},16,["class","location","model-value","name","style","tag","theme","width"]))}});Se.install=e=>{e.component("VResizeDrawer",Se)},module.exports=Se;
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;height:100%;max-width:100%;pointer-events:auto;transition-duration:.2s;transition-property:box-shadow,transform,visibility,width,height,left,right,top,bottom;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;position:absolute;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-navigation-drawer--border{border-width:thin;box-shadow:none}.v-navigation-drawer--rounded{border-radius:4px}.v-navigation-drawer--top{top:0;border-bottom-width:thin}.v-navigation-drawer--bottom{left:0;border-top-width:thin}.v-navigation-drawer--left{top:0;left:0;right:auto;border-right-width:thin}.v-navigation-drawer--right{top:0;left:auto;right:0;border-left-width:thin}.v-navigation-drawer--floating{border:none}.v-navigation-drawer--temporary{box-shadow:0 8px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 16px 24px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 6px 30px 5px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-navigation-drawer--sticky{height:auto;transition:box-shadow,transform,visibility,width,height,left,right}.v-navigation-drawer .v-list{overflow:hidden}.v-navigation-drawer__content{flex:0 1 auto;height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.v-navigation-drawer__img{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-navigation-drawer__img img{height:inherit;object-fit:cover;width:inherit}.v-navigation-drawer__scrim{position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:.2;transition:opacity .2s cubic-bezier(.4,0,.2,1);z-index:1}.v-resize-drawer--handle-container{cursor:grab;align-items:center;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
