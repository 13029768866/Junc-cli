import{g as he,o as we,w as j,r as m,u as g,i as ge,a as X,h as te,b as ye,c as _e,d as de,e as T,f as V,j as Se,t as ne,k as y,l as q,m as ve,n as $e,v as Ee,p as H,q as z,s as D,T as ze,x as U,y as C,z as _,F as Ce,A as le,B as Oe,C as Te,D as Pe,E as ke,G as Fe,H as He,I as Re,_ as G}from"./index.253b6df6.js";function Ne(e){for(var t=-1,n=e==null?0:e.length,l={};++t<n;){var s=e[t];l[s[0]]=s[1]}return l}function J(e){return he()?(we(e),!0):!1}const P=typeof window!="undefined",E=e=>typeof e=="number",Le=e=>typeof e=="string",W=()=>{};function Q(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const me=P?window:void 0,Be=P?window.document:void 0;P&&window.navigator;P&&window.location;function M(...e){let t,n,l,s;if(Le(e[0])?([n,l,s]=e,t=me):[t,n,l,s]=e,!t)return W;let r=W;const o=j(()=>Q(t),v=>{r(),v&&(v.addEventListener(n,l,s),r=()=>{v.removeEventListener(n,l,s),r=W})},{immediate:!0,flush:"post"}),f=()=>{o(),r()};return J(f),f}const Y=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x="__vueuse_ssr_handlers__";Y[x]=Y[x]||{};Y[x];var oe=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Ae=(e,t)=>{var n={};for(var l in e)je.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&oe)for(var l of oe(e))t.indexOf(l)<0&&Me.call(e,l)&&(n[l]=e[l]);return n};function Ie(e,t,n={}){const l=n,{window:s=me}=l,r=Ae(l,["window"]);let o;const f=s&&"ResizeObserver"in s,v=()=>{o&&(o.disconnect(),o=void 0)},p=j(()=>Q(e),i=>{v(),f&&s&&i&&(o=new ResizeObserver(t),o.observe(i,r))},{immediate:!0,flush:"post"}),a=()=>{v(),p()};return J(a),{isSupported:f,stop:a}}const se=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function We(e,t={}){const{document:n=Be,autoExit:l=!1}=t,s=e||(n==null?void 0:n.querySelector("html")),r=m(!1);let o=!1,f=se[0];if(!n)o=!1;else for(const w of se)if(w[1]in n){f=w,o=!0;break}const[v,p,a,,i]=f;async function u(){!o||(n!=null&&n[a]&&await n[p](),r.value=!1)}async function h(){if(!o)return;await u();const w=Q(s);w&&(await w[v](),r.value=!0)}async function O(){r.value?await u():await h()}return n&&M(n,i,()=>{r.value=!!(n!=null&&n[a])},!1),l&&J(u),{isSupported:o,isFullscreen:r,enter:h,exit:u,toggle:O}}var re,ae;P&&(window==null?void 0:window.navigator)&&((re=window==null?void 0:window.navigator)==null?void 0:re.platform)&&/iP(ad|hone|od)/.test((ae=window==null?void 0:window.navigator)==null?void 0:ae.platform);class Xe extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function qe(e,t){throw new Xe(`[${e}] ${t}`)}function ie(e,t="px"){if(!e)return"";if(ge(e))return e;if(E(e))return`${e}${t}`}const K=Symbol(),ce="__elPropsReservedKey";function De(e,t){if(!X(e)||!!e[ce])return e;const{values:n,required:l,default:s,type:r,validator:o}=e,f=n||o?p=>{let a=!1,i=[];if(n&&(i=Array.from(n),te(e,"default")&&i.push(s),a||(a=i.includes(p))),o&&(a||(a=o(p))),!a&&i.length>0){const u=[...new Set(i)].map(h=>JSON.stringify(h)).join(", ");ye(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${u}], got value ${JSON.stringify(p)}.`)}return a}:void 0,v={type:X(r)&&Object.getOwnPropertySymbols(r).includes(K)?r[K]:r,required:!!l,validator:f,[ce]:!0};return te(e,"default")&&(v.default=s),v}const Z=e=>Ne(Object.entries(e).map(([t,n])=>[t,De(n,t)])),Ye=e=>({[K]:e}),xe=(e,t)=>{if(e.install=n=>{for(const l of[e,...Object.values(t!=null?t:{})])n.component(l.name,l)},t)for(const[n,l]of Object.entries(t))e[n]=l;return e},Ke=Symbol(),pe=Symbol("scrollbarContextKey"),ue=m();function Ve(e,t=void 0){const n=_e()?de(Ke,ue):ue;return e?T(()=>{var l,s;return(s=(l=n.value)==null?void 0:l[e])!=null?s:t}):n}const Ue="el",Ge="is-",$=(e,t,n,l,s)=>{let r=`${e}-${t}`;return n&&(r+=`-${n}`),l&&(r+=`__${l}`),s&&(r+=`--${s}`),r},be=e=>{const t=Ve("namespace"),n=T(()=>t.value||Ue);return{namespace:n,b:(i="")=>$(g(n),e,i,"",""),e:i=>i?$(g(n),e,"",i,""):"",m:i=>i?$(g(n),e,"","",i):"",be:(i,u)=>i&&u?$(g(n),e,i,u,""):"",em:(i,u)=>i&&u?$(g(n),e,"",i,u):"",bm:(i,u)=>i&&u?$(g(n),e,i,"",u):"",bem:(i,u,h)=>i&&u&&h?$(g(n),e,i,u,h):"",is:(i,...u)=>{const h=u.length>=1?u[0]:!0;return i&&h?`${Ge}${i}`:""}}};var ee=(e,t)=>{const n=e.__vccOpts||e;for(const[l,s]of t)n[l]=s;return n};const Je={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Qe=({move:e,size:t,bar:n})=>({[n.size]:t,transform:`translate${n.axis}(${e}%)`}),Ze=Z({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),fe="Thumb",et=V({name:fe,props:Ze,setup(e){const t=de(pe),n=be("scrollbar");t||qe(fe,"can not inject scrollbar context");const l=m(),s=m(),r=m({}),o=m(!1);let f=!1,v=!1,p=P?document.onselectstart:null;const a=T(()=>Je[e.vertical?"vertical":"horizontal"]),i=T(()=>Qe({size:e.size,move:e.move,bar:a.value})),u=T(()=>l.value[a.value.offset]**2/t.wrapElement[a.value.scrollSize]/e.ratio/s.value[a.value.offset]),h=d=>{var c;if(d.stopPropagation(),d.ctrlKey||[1,2].includes(d.button))return;(c=window.getSelection())==null||c.removeAllRanges(),w(d);const b=d.currentTarget;!b||(r.value[a.value.axis]=b[a.value.offset]-(d[a.value.client]-b.getBoundingClientRect()[a.value.direction]))},O=d=>{if(!s.value||!l.value||!t.wrapElement)return;const c=Math.abs(d.target.getBoundingClientRect()[a.value.direction]-d[a.value.client]),b=s.value[a.value.offset]/2,S=(c-b)*100*u.value/l.value[a.value.offset];t.wrapElement[a.value.scroll]=S*t.wrapElement[a.value.scrollSize]/100},w=d=>{d.stopImmediatePropagation(),f=!0,document.addEventListener("mousemove",R),document.addEventListener("mouseup",k),p=document.onselectstart,document.onselectstart=()=>!1},R=d=>{if(!l.value||!s.value||f===!1)return;const c=r.value[a.value.axis];if(!c)return;const b=(l.value.getBoundingClientRect()[a.value.direction]-d[a.value.client])*-1,S=s.value[a.value.offset]-c,F=(b-S)*100*u.value/l.value[a.value.offset];t.wrapElement[a.value.scroll]=F*t.wrapElement[a.value.scrollSize]/100},k=()=>{f=!1,r.value[a.value.axis]=0,document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",k),N(),v&&(o.value=!1)},A=()=>{v=!1,o.value=!!e.size},I=()=>{v=!0,o.value=f};Se(()=>{N(),document.removeEventListener("mouseup",k)});const N=()=>{document.onselectstart!==p&&(document.onselectstart=p)};return M(ne(t,"scrollbarElement"),"mousemove",A),M(ne(t,"scrollbarElement"),"mouseleave",I),{ns:n,instance:l,thumb:s,bar:a,thumbStyle:i,visible:o,clickTrackHandler:O,clickThumbHandler:h}}});function tt(e,t,n,l,s,r){return y(),q(ze,{name:e.ns.b("fade")},{default:ve(()=>[$e(H("div",{ref:"instance",class:z([e.ns.e("bar"),e.ns.is(e.bar.key)]),onMousedown:t[1]||(t[1]=(...o)=>e.clickTrackHandler&&e.clickTrackHandler(...o))},[H("div",{ref:"thumb",class:z(e.ns.e("thumb")),style:D(e.thumbStyle),onMousedown:t[0]||(t[0]=(...o)=>e.clickThumbHandler&&e.clickThumbHandler(...o))},null,38)],34),[[Ee,e.always||e.visible]])]),_:1},8,["name"])}var nt=ee(et,[["render",tt],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const lt=Z({always:{type:Boolean,default:!0},width:{type:String,default:""},height:{type:String,default:""},ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),ot=V({components:{Thumb:nt},props:lt,setup(e){const t=m(0),n=m(0),l=4;return{handleScroll:r=>{if(r){const o=r.offsetHeight-l,f=r.offsetWidth-l;n.value=r.scrollTop*100/o*e.ratioY,t.value=r.scrollLeft*100/f*e.ratioX}},moveX:t,moveY:n}}});function st(e,t,n,l,s,r){const o=U("thumb");return y(),C(Ce,null,[_(o,{move:e.moveX,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),_(o,{move:e.moveY,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64)}var rt=ee(ot,[["render",st],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const at=Z({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:Ye([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:{type:Boolean,default:!1},minSize:{type:Number,default:20}}),it={scroll:({scrollTop:e,scrollLeft:t})=>E(e)&&E(t)},ct=V({name:"ElScrollbar",components:{Bar:rt},props:at,emits:it,setup(e,{emit:t}){const n=be("scrollbar");let l,s;const r=m(),o=m(),f=m(),v=m("0"),p=m("0"),a=m(),i=m(0),u=m(0),h=m(1),O=m(1),w=4,R=T(()=>{const c={};return e.height&&(c.height=ie(e.height)),e.maxHeight&&(c.maxHeight=ie(e.maxHeight)),[e.wrapStyle,c]}),k=()=>{var c;o.value&&((c=a.value)==null||c.handleScroll(o.value),t("scroll",{scrollTop:o.value.scrollTop,scrollLeft:o.value.scrollLeft}))};function A(c,b){X(c)?o.value.scrollTo(c):E(c)&&E(b)&&o.value.scrollTo(c,b)}const I=c=>{!E(c)||(o.value.scrollTop=c)},N=c=>{!E(c)||(o.value.scrollLeft=c)},d=()=>{if(!o.value)return;const c=o.value.offsetHeight-w,b=o.value.offsetWidth-w,S=c**2/o.value.scrollHeight,F=b**2/o.value.scrollWidth,L=Math.max(S,e.minSize),B=Math.max(F,e.minSize);h.value=S/(c-S)/(L/(c-L)),O.value=F/(b-F)/(B/(b-B)),p.value=L+w<c?`${L}px`:"",v.value=B+w<b?`${B}px`:""};return j(()=>e.noresize,c=>{c?(l==null||l(),s==null||s()):({stop:l}=Ie(f,d),s=M("resize",d))},{immediate:!0}),j(()=>[e.maxHeight,e.height],()=>{e.native||le(()=>{var c;d(),o.value&&((c=a.value)==null||c.handleScroll(o.value))})}),Oe(pe,Te({scrollbarElement:r,wrapElement:o})),Pe(()=>{e.native||le(()=>d())}),ke(()=>d()),{ns:n,scrollbar$:r,wrap$:o,resize$:f,barRef:a,moveX:i,moveY:u,ratioX:O,ratioY:h,sizeWidth:v,sizeHeight:p,style:R,update:d,handleScroll:k,scrollTo:A,setScrollTop:I,setScrollLeft:N}}});function ut(e,t,n,l,s,r){const o=U("bar");return y(),C("div",{ref:"scrollbar$",class:z(e.ns.b())},[H("div",{ref:"wrap$",class:z([e.wrapClass,e.ns.e("wrap"),{[e.ns.em("wrap","hidden-default")]:!e.native}]),style:D(e.style),onScroll:t[0]||(t[0]=(...f)=>e.handleScroll&&e.handleScroll(...f))},[(y(),q(He(e.tag),{ref:"resize$",class:z([e.ns.e("view"),e.viewClass]),style:D(e.viewStyle)},{default:ve(()=>[Fe(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?Re("v-if",!0):(y(),q(o,{key:0,ref:"barRef",height:e.sizeHeight,width:e.sizeWidth,always:e.always,"ratio-x":e.ratioX,"ratio-y":e.ratioY},null,8,["height","width","always","ratio-x","ratio-y"]))],2)}var ft=ee(ct,[["render",ut],["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const dt=xe(ft);const vt={class:z(["sidebar-container"])},mt={setup(e){return window.document.body.setAttribute("layout","vertical"),(t,n)=>{const l=dt;return y(),C("div",vt,[_(l,{"wrap-class":"scrollbar-wrapper"})])}}};const pt={setup(e){const{isFullscreen:t,toggle:n}=We();return(l,s)=>{const r=U("FontIcon");return y(),C("div",{class:"screen-full",onClick:s[0]||(s[0]=(...o)=>g(n)&&g(n)(...o))},[_(r,{title:g(t)?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",icon:g(t)?"team-iconexit-fullscreen":"team-iconfullscreen"},null,8,["title","icon"])])}}};var bt=G(pt,[["__scopeId","data-v-587e2b56"]]);const ht={class:"navbar"},wt={class:"vertical-header-right"},gt={setup(e){return(t,n)=>(y(),C("div",ht,[H("div",wt,[_(bt)])]))}};var yt=G(gt,[["__scopeId","data-v-01fe9010"]]);const _t={setup(e){return(t,n)=>(y(),C("div",null,[_(yt)]))}};const St={class:"app-wrapper"},$t={class:z(["main-container"])},Et={setup(e){return(t,n)=>(y(),C("div",St,[_(mt),H("div",$t,[_(_t)])]))}};var Ct=G(Et,[["__scopeId","data-v-0bc48815"]]);export{Ct as default};