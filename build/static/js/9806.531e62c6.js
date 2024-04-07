"use strict";(self.webpackChunkookini=self.webpackChunkookini||[]).push([[9806],{41783:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(98368),r=n(72791),s=n(72749),c=n(25428);function i(t){return!(!t||!t.then)}const a=t=>{const{type:e,children:n,prefixCls:a,buttonProps:l,close:u,autoFocus:f,emitEvent:d,isSilent:p,quitOnNullishReturnValue:m,actionFn:v}=t,h=r.useRef(!1),b=r.useRef(null),[g,w]=(0,o.Z)(!1),y=function(){null===u||void 0===u||u.apply(void 0,arguments)};r.useEffect((()=>{let t=null;return f&&(t=setTimeout((()=>{var t;null===(t=b.current)||void 0===t||t.focus()}))),()=>{t&&clearTimeout(t)}}),[]);return r.createElement(s.ZP,Object.assign({},(0,c.nx)(e),{onClick:t=>{if(h.current)return;if(h.current=!0,!v)return void y();let e;if(d){if(e=v(t),m&&!i(e))return h.current=!1,void y(t)}else if(v.length)e=v(u),h.current=!1;else if(e=v(),!e)return void y();(t=>{i(t)&&(w(!0),t.then((function(){w(!1,!0),y.apply(void 0,arguments),h.current=!1}),(t=>{if(w(!1,!0),h.current=!1,!(null===p||void 0===p?void 0:p()))return Promise.reject(t)})))})(e)},loading:g,prefixCls:a},l,{ref:b}),n)}},77268:(t,e,n)=>{n.d(e,{Z:()=>a,i:()=>i});var o=n(75179),r=n(72791),s=n(90139),c=n(71929);function i(t){return function(e){return r.createElement(s.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},r.createElement(t,Object.assign({},e)))}}function a(t,e,n,s){return i((function(i){const{prefixCls:a,style:l}=i,u=r.useRef(null),[f,d]=r.useState(0),[p,m]=r.useState(0),[v,h]=(0,o.Z)(!1,{value:i.open}),{getPrefixCls:b}=r.useContext(c.E_),g=b(e||"select",a);r.useEffect((()=>{if(h(!0),"undefined"!==typeof ResizeObserver){const t=new ResizeObserver((t=>{const e=t[0].target;d(e.offsetHeight+8),m(e.offsetWidth)})),e=setInterval((()=>{var o;const r=n?".".concat(n(g)):".".concat(g,"-dropdown"),s=null===(o=u.current)||void 0===o?void 0:o.querySelector(r);s&&(clearInterval(e),t.observe(s))}),10);return()=>{clearInterval(e),t.disconnect()}}}),[]);let w=Object.assign(Object.assign({},i),{style:Object.assign(Object.assign({},l),{margin:0}),open:v,visible:v,getPopupContainer:()=>u.current});return s&&(w=s(w)),r.createElement("div",{ref:u,style:{paddingBottom:f,position:"relative",minWidth:p}},r.createElement(t,Object.assign({},w)))}))}},54466:(t,e,n)=>{n.d(e,{o2:()=>i,yT:()=>a});var o=n(93433),r=n(8876);const s=r.i.map((t=>"".concat(t,"-inverse"))),c=["success","processing","error","default","warning"];function i(t){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?[].concat((0,o.Z)(s),(0,o.Z)(r.i)).includes(t):r.i.includes(t)}function a(t){return c.includes(t)}},69585:(t,e,n)=>{n.d(e,{Z:()=>o});const o=function(){const t=Object.assign({},arguments.length<=0?void 0:arguments[0]);for(let e=1;e<arguments.length;e++){const n=e<0||arguments.length<=e?void 0:arguments[e];n&&Object.keys(n).forEach((e=>{const o=n[e];void 0!==o&&(t[e]=o)}))}return t}},16384:(t,e,n)=>{function o(t){return["small","middle","large"].includes(t)}function r(t){return!!t&&("number"===typeof t&&!Number.isNaN(t))}n.d(e,{T:()=>r,n:()=>o})},2657:(t,e,n)=>{function o(t){return null!==t&&void 0!==t&&t===t.window}function r(t,e){var n,r;if("undefined"===typeof window)return 0;const s=e?"scrollTop":"scrollLeft";let c=0;return o(t)?c=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?c=t.documentElement[s]:(t instanceof HTMLElement||t)&&(c=t[s]),t&&!o(t)&&"number"!==typeof c&&(c=null===(r=(null!==(n=t.ownerDocument)&&void 0!==n?n:t).documentElement)||void 0===r?void 0:r[s]),c}n.d(e,{F:()=>o,Z:()=>r})},60922:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(60732),r=n(72791);function s(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.createElement(o.Z,null);const c=function(t,e,n){return"boolean"===typeof t?t:void 0===e?!!n:!1!==e&&null!==e}(t,e,arguments.length>4&&void 0!==arguments[4]&&arguments[4]);if(!c)return[!1,null];const i="boolean"===typeof e||void 0===e||null===e?s:e;return[!0,n?n(i):i]}},19581:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(72791);function r(){const[,t]=o.useReducer((t=>t+1),0);return t}},86197:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(93433),r=n(72791);function s(){const[t,e]=r.useState([]);return[t,r.useCallback((t=>(e((e=>[].concat((0,o.Z)(e),[t]))),()=>{e((e=>e.filter((e=>e!==t))))})),[])]}},67138:(t,e,n)=>{n.d(e,{Z:()=>o});const o=t=>!isNaN(parseFloat(t))&&isFinite(t)},29464:(t,e,n)=>{n.d(e,{Z:()=>a,m:()=>i});const o=()=>({height:0,opacity:0}),r=t=>{const{scrollHeight:e}=t;return{height:e,opacity:1}},s=t=>({height:t?t.offsetHeight:0}),c=(t,e)=>!0===(null===e||void 0===e?void 0:e.deadline)||"height"===e.propertyName,i=(t,e,n)=>void 0!==n?n:"".concat(t,"-").concat(e),a=function(){return{motionName:"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ant","-motion-collapse"),onAppearStart:o,onEnterStart:o,onAppearActive:r,onEnterActive:r,onLeaveStart:s,onLeaveActive:o,onAppearEnd:c,onEnterEnd:c,onLeaveEnd:c,motionDeadline:500}}},89631:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(58686);const r={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},s={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},c=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function i(t){const{arrowWidth:e,autoAdjustOverflow:n,arrowPointAtCenter:i,offset:a,borderRadius:l,visibleFirst:u}=t,f=e/2,d={};return Object.keys(r).forEach((t=>{const p=i&&s[t]||r[t],m=Object.assign(Object.assign({},p),{offset:[0,0],dynamicInset:!0});switch(d[t]=m,c.has(t)&&(m.autoArrow=!1),t){case"top":case"topLeft":case"topRight":m.offset[1]=-f-a;break;case"bottom":case"bottomLeft":case"bottomRight":m.offset[1]=f+a;break;case"left":case"leftTop":case"leftBottom":m.offset[0]=-f-a;break;case"right":case"rightTop":case"rightBottom":m.offset[0]=f+a}const v=(0,o.fS)({contentRadius:l,limitVerticalRadius:!0});if(i)switch(t){case"topLeft":case"bottomLeft":m.offset[0]=-v.dropdownArrowOffset-f;break;case"topRight":case"bottomRight":m.offset[0]=v.dropdownArrowOffset+f;break;case"leftTop":case"rightTop":m.offset[1]=-v.dropdownArrowOffset-f;break;case"leftBottom":case"rightBottom":m.offset[1]=v.dropdownArrowOffset+f}m.overflow=function(t,e,n,o){if(!1===o)return{adjustX:!1,adjustY:!1};const r=o&&"object"===typeof o?o:{},s={};switch(t){case"top":case"bottom":s.shiftX=2*e.dropdownArrowOffset+n,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=2*e.dropdownArrowOffsetVertical+n,s.shiftX=!0,s.adjustX=!0}const c=Object.assign(Object.assign({},s),r);return c.shiftX||(c.adjustX=!0),c.shiftY||(c.adjustY=!0),c}(t,v,e,n),u&&(m.htmlRegion="visibleFirst")})),d}},61113:(t,e,n)=>{var o;n.d(e,{M2:()=>c,Tm:()=>i,l$:()=>s});var r=n(72791);const{isValidElement:s}=o||(o=n.t(r,2));function c(t){return t&&s(t)&&t.type===r.Fragment}function i(t,e){return function(t,e,n){return s(t)?r.cloneElement(t,"function"===typeof n?n(t.props||{}):n):e}(t,t,e)}},70635:(t,e,n)=>{n.d(e,{ZP:()=>a,c4:()=>s,m9:()=>l});var o=n(72791),r=n(8018);const s=["xxl","xl","lg","md","sm","xs"],c=t=>({xs:"(max-width: ".concat(t.screenXSMax,"px)"),sm:"(min-width: ".concat(t.screenSM,"px)"),md:"(min-width: ".concat(t.screenMD,"px)"),lg:"(min-width: ".concat(t.screenLG,"px)"),xl:"(min-width: ".concat(t.screenXL,"px)"),xxl:"(min-width: ".concat(t.screenXXL,"px)")}),i=t=>{const e=t,n=[].concat(s).reverse();return n.forEach(((t,o)=>{const r=t.toUpperCase(),s="screen".concat(r,"Min"),c="screen".concat(r);if(!(e[s]<=e[c]))throw new Error("".concat(s,"<=").concat(c," fails : !(").concat(e[s],"<=").concat(e[c],")"));if(o<n.length-1){const t="screen".concat(r,"Max");if(!(e[c]<=e[t]))throw new Error("".concat(c,"<=").concat(t," fails : !(").concat(e[c],"<=").concat(e[t],")"));const s=n[o+1].toUpperCase(),i="screen".concat(s,"Min");if(!(e[t]<=e[i]))throw new Error("".concat(t,"<=").concat(i," fails : !(").concat(e[t],"<=").concat(e[i],")"))}})),t};function a(){const[,t]=(0,r.Z)(),e=c(i(t));return o.useMemo((()=>{const t=new Map;let n=-1,o={};return{matchHandlers:{},dispatch:e=>(o=e,t.forEach((t=>t(o))),t.size>=1),subscribe(e){return t.size||this.register(),n+=1,t.set(n,e),e(o),n},unsubscribe(e){t.delete(e),t.size||this.unregister()},unregister(){Object.keys(e).forEach((t=>{const n=e[t],o=this.matchHandlers[n];null===o||void 0===o||o.mql.removeListener(null===o||void 0===o?void 0:o.listener)})),t.clear()},register(){Object.keys(e).forEach((t=>{const n=e[t],r=e=>{let{matches:n}=e;this.dispatch(Object.assign(Object.assign({},o),{[t]:n}))},s=window.matchMedia(n);s.addListener(r),this.matchHandlers[n]={mql:s,listener:r},r(s)}))},responsiveMap:e}}),[t])}const l=(t,e)=>{if(e&&"object"===typeof e)for(let n=0;n<s.length;n++){const o=s[n];if(t[o]&&void 0!==e[o])return e[o]}}},53285:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(75314);var r=n(2657);function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{getContainer:n=(()=>window),callback:s,duration:c=450}=e,i=n(),a=(0,r.Z)(i,!0),l=Date.now(),u=()=>{const e=Date.now()-l,n=function(t,e,n,o){const r=n-e;return(t/=o/2)<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e}(e>c?c:e,a,t,c);(0,r.F)(i)?i.scrollTo(window.pageXOffset,n):i instanceof Document||"HTMLDocument"===i.constructor.name?i.documentElement.scrollTop=n:i.scrollTop=n,e<c?(0,o.Z)(u):"function"===typeof s&&s()};(0,o.Z)(u)}},72866:(t,e,n)=>{n.d(e,{F:()=>c,Z:()=>s});var o=n(81694),r=n.n(o);function s(t,e,n){return r()({["".concat(t,"-status-success")]:"success"===e,["".concat(t,"-status-warning")]:"warning"===e,["".concat(t,"-status-error")]:"error"===e,["".concat(t,"-status-validating")]:"validating"===e,["".concat(t,"-has-feedback")]:n})}const c=(t,e)=>e||t},96096:(t,e,n)=>{n.d(e,{j:()=>r});var o=n(14937);const r=()=>(0,o.Z)()&&window.document.documentElement},38135:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(93433),r=n(75314);const s=function(t){let e;const n=function(){if(null==e){for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];e=(0,r.Z)((n=>()=>{e=null,t.apply(void 0,(0,o.Z)(n))})(s))}};return n.cancel=()=>{r.Z.cancel(e),e=null},n}},95354:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(11354),r=n(72791),s=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};const c={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},i=r.forwardRef(((t,e)=>{const{style:n,noStyle:i,disabled:a}=t,l=s(t,["style","noStyle","disabled"]);let u={};return i||(u=Object.assign({},c)),a&&(u.pointerEvents="none"),u=Object.assign(Object.assign({},u),n),r.createElement("div",Object.assign({role:"button",tabIndex:0,ref:e},l,{onKeyDown:t=>{const{keyCode:e}=t;e===o.Z.ENTER&&t.preventDefault()},onKeyUp:e=>{const{keyCode:n}=e,{onClick:r}=t;n===o.Z.ENTER&&r&&r()},style:u}))}))},28782:(t,e,n)=>{n.d(e,{G8:()=>s,ln:()=>c});var o=n(72791);n(60632);function r(){}const s=o.createContext({}),c=()=>{const t=()=>{};return t.deprecated=r,t}},36822:(t,e,n)=>{n.d(e,{Z:()=>O});var o=n(81694),r=n.n(o),s=n(88834),c=n(92386),i=n(72791),a=n(71929),l=n(61113),u=n(55564);const f=t=>{const{componentCls:e,colorPrimary:n}=t;return{[e]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:"var(--wave-color, ".concat(n,")"),boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:["box-shadow 0.4s ".concat(t.motionEaseOutCirc),"opacity 2s ".concat(t.motionEaseOutCirc)].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:["box-shadow 0.3s ".concat(t.motionEaseInOut),"opacity 0.35s ".concat(t.motionEaseInOut)].join(",")}}}}},d=(0,u.Z)("Wave",(t=>[f(t)]));var p=n(17750),m=n(75314),v=n(98568),h=n(14699);function b(t){return t&&"#fff"!==t&&"#ffffff"!==t&&"rgb(255, 255, 255)"!==t&&"rgba(255, 255, 255, 1)"!==t&&function(t){const e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}(t)&&!/rgba\((?:\d*, ){3}0\)/.test(t)&&"transparent"!==t}const g="ant-wave-target";function w(t){return Number.isNaN(t)?0:t}const y=t=>{const{className:e,target:n,component:o}=t,s=i.useRef(null),[c,a]=i.useState(null),[l,u]=i.useState([]),[f,d]=i.useState(0),[p,y]=i.useState(0),[E,x]=i.useState(0),[O,C]=i.useState(0),[j,N]=i.useState(!1),Z={left:f,top:p,width:E,height:O,borderRadius:l.map((t=>"".concat(t,"px"))).join(" ")};function R(){const t=getComputedStyle(n);a(function(t){const{borderTopColor:e,borderColor:n,backgroundColor:o}=getComputedStyle(t);return b(e)?e:b(n)?n:b(o)?o:null}(n));const e="static"===t.position,{borderLeftWidth:o,borderTopWidth:r}=t;d(e?n.offsetLeft:w(-parseFloat(o))),y(e?n.offsetTop:w(-parseFloat(r))),x(n.offsetWidth),C(n.offsetHeight);const{borderTopLeftRadius:s,borderTopRightRadius:c,borderBottomLeftRadius:i,borderBottomRightRadius:l}=t;u([s,c,l,i].map((t=>w(parseFloat(t)))))}if(c&&(Z["--wave-color"]=c),i.useEffect((()=>{if(n){const t=(0,m.Z)((()=>{R(),N(!0)}));let e;return"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(R),e.observe(n)),()=>{m.Z.cancel(t),null===e||void 0===e||e.disconnect()}}}),[]),!j)return null;const S=("Checkbox"===o||"Radio"===o)&&(null===n||void 0===n?void 0:n.classList.contains(g));return i.createElement(v.ZP,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(t,e)=>{var n;if(e.deadline||"opacity"===e.propertyName){const t=null===(n=s.current)||void 0===n?void 0:n.parentElement;(0,h.v)(t).then((()=>{null===t||void 0===t||t.remove()}))}return!1}},(t=>{let{className:n}=t;return i.createElement("div",{ref:s,className:r()(e,{"wave-quick":S},n),style:Z})}))},E=(t,e)=>{var n;const{component:o}=e;if("Checkbox"===o&&!(null===(n=t.querySelector("input"))||void 0===n?void 0:n.checked))return;const r=document.createElement("div");r.style.position="absolute",r.style.left="0px",r.style.top="0px",null===t||void 0===t||t.insertBefore(r,null===t||void 0===t?void 0:t.firstChild),(0,h.s)(i.createElement(y,Object.assign({},e,{target:t})),r)};var x=n(8018);const O=t=>{const{children:e,disabled:n,component:o}=t,{getPrefixCls:u}=(0,i.useContext)(a.E_),f=(0,i.useRef)(null),v=u("wave"),[,h]=d(v),b=function(t,e,n){const{wave:o}=i.useContext(a.E_),[,r,s]=(0,x.Z)(),c=(0,p.zX)((c=>{const i=t.current;if((null===o||void 0===o?void 0:o.disabled)||!i)return;const a=i.querySelector(".".concat(g))||i,{showEffect:l}=o||{};(l||E)(a,{className:e,token:r,component:n,event:c,hashId:s})})),l=i.useRef();return t=>{m.Z.cancel(l.current),l.current=(0,m.Z)((()=>{c(t)}))}}(f,r()(v,h),o);if(i.useEffect((()=>{const t=f.current;if(!t||1!==t.nodeType||n)return;const e=e=>{!(0,c.Z)(e.target)||!t.getAttribute||t.getAttribute("disabled")||t.disabled||t.className.includes("disabled")||t.className.includes("-leave")||b(e)};return t.addEventListener("click",e,!0),()=>{t.removeEventListener("click",e,!0)}}),[n]),!i.isValidElement(e))return null!==e&&void 0!==e?e:null;const w=(0,s.Yr)(e)?(0,s.sQ)(e.ref,f):f;return(0,l.Tm)(e,{ref:w})}},37305:(t,e,n)=>{n.d(e,{Z:()=>E});var o=n(72791),r=n(81694),s=n.n(r),c=n(88829),i=n(41818),a=n(38135),l=n(71929),u=n(55564),f=n(89922);const d=t=>{const{componentCls:e}=t;return{[e]:{position:"fixed",zIndex:t.zIndexPopup}}},p=(0,u.Z)("Affix",(t=>{const e=(0,f.TS)(t,{zIndexPopup:t.zIndexBase+10});return[d(e)]}));function m(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function v(t,e,n){if(void 0!==n&&e.top>t.top-n)return n+e.top}function h(t,e,n){if(void 0!==n&&e.bottom<t.bottom+n){return n+(window.innerHeight-e.bottom)}}const b=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function g(){return"undefined"!==typeof window?window:null}var w;!function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"}(w||(w={}));const y=o.forwardRef(((t,e)=>{var n;const{style:r,offsetTop:u,offsetBottom:f,affixPrefixCls:d,rootClassName:p,children:y,target:E,onChange:x}=t,[O,C]=o.useState(!1),[j,N]=o.useState(),[Z,R]=o.useState(),S=o.useRef(w.None),k=o.useRef(null),T=o.useRef(),L=o.useRef(null),P=o.useRef(null),A=o.useRef(null),{getTargetContainer:B}=o.useContext(l.E_),z=null!==(n=null!==E&&void 0!==E?E:B)&&void 0!==n?n:g,I=void 0===f&&void 0===u?0:u,M=()=>{S.current=w.Prepare,(()=>{if(S.current!==w.Prepare||!P.current||!L.current||!z)return;const t=z();if(t){const e={status:w.None},n=m(L.current);if(0===n.top&&0===n.left&&0===n.width&&0===n.height)return;const o=m(t),r=v(n,o,I),s=h(n,o,f);void 0!==r?(e.affixStyle={position:"fixed",top:r,width:n.width,height:n.height},e.placeholderStyle={width:n.width,height:n.height}):void 0!==s&&(e.affixStyle={position:"fixed",bottom:s,width:n.width,height:n.height},e.placeholderStyle={width:n.width,height:n.height}),e.lastAffix=!!e.affixStyle,O!==e.lastAffix&&(null===x||void 0===x||x(e.lastAffix)),S.current=e.status,N(e.affixStyle),R(e.placeholderStyle),C(e.lastAffix)}})()},F=(0,a.Z)((()=>{M()})),H=(0,a.Z)((()=>{if(z&&j){const t=z();if(t&&L.current){const e=m(t),n=m(L.current),o=v(n,e,I),r=h(n,e,f);if(void 0!==o&&j.top===o||void 0!==r&&j.bottom===r)return}}M()})),X=()=>{const t=null===z||void 0===z?void 0:z();b.forEach((e=>{var n;T.current&&(null===(n=k.current)||void 0===n||n.removeEventListener(e,T.current)),null===t||void 0===t||t.addEventListener(e,H)})),k.current=t,T.current=H};o.useImperativeHandle(e,(()=>({updatePosition:F}))),o.useEffect((()=>(A.current=setTimeout(X),()=>(()=>{A.current&&(clearTimeout(A.current),A.current=null);const t=null===z||void 0===z?void 0:z();b.forEach((e=>{var n;null===t||void 0===t||t.removeEventListener(e,H),T.current&&(null===(n=k.current)||void 0===n||n.removeEventListener(e,T.current))})),F.cancel(),H.cancel()})())),[]),o.useEffect((()=>{X()}),[E,j]),o.useEffect((()=>{F()}),[E,u,f]);const D=s()({[d]:j,[p]:j&&p});let Y=(0,i.Z)(t,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return o.createElement(c.Z,{onResize:F},o.createElement("div",Object.assign({style:r,ref:L},Y),j&&o.createElement("div",{style:Z,"aria-hidden":"true"}),o.createElement("div",{className:D,ref:P,style:j},o.createElement(c.Z,{onResize:F},y))))}));const E=o.forwardRef(((t,e)=>{const{prefixCls:n,rootClassName:r}=t,{getPrefixCls:c}=o.useContext(l.E_),i=c("affix",n),[a,u]=p(i),f=Object.assign(Object.assign({},t),{affixPrefixCls:i,rootClassName:s()(r,u)});return a(o.createElement(y,Object.assign({},f,{ref:e})))}))},89791:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(72791),r=n(81694),s=n.n(r),c=n(54466),i=n(71929),a=n(73314);const l=t=>{const{className:e,prefixCls:n,style:r,color:l,children:u,text:f,placement:d="end",rootClassName:p}=t,{getPrefixCls:m,direction:v}=o.useContext(i.E_),h=m("ribbon",n),b=(0,c.o2)(l,!1),g=s()(h,"".concat(h,"-placement-").concat(d),{["".concat(h,"-rtl")]:"rtl"===v,["".concat(h,"-color-").concat(l)]:b},e),[w,y]=(0,a.Z)(h),E={},x={};return l&&!b&&(E.background=l,x.color=l),w(o.createElement("div",{className:s()("".concat(h,"-wrapper"),p,y)},u,o.createElement("div",{className:s()(g,y),style:Object.assign(Object.assign({},E),r)},o.createElement("span",{className:"".concat(h,"-text")},f),o.createElement("div",{className:"".concat(h,"-corner"),style:x}))))}},47554:(t,e,n)=>{n.d(e,{Z:()=>d});var o=n(81694),r=n.n(o),s=n(72791),c=n(61113),i=n(71929);function a(t){let e,{prefixCls:n,value:o,current:c,offset:i=0}=t;return i&&(e={position:"absolute",top:"".concat(i,"00%"),left:0}),s.createElement("span",{style:e,className:r()("".concat(n,"-only-unit"),{current:c})},o)}function l(t,e,n){let o=t,r=0;for(;(o+10)%10!==e;)o+=n,r+=n;return r}function u(t){const{prefixCls:e,count:n,value:o}=t,r=Number(o),c=Math.abs(n),[i,u]=s.useState(r),[f,d]=s.useState(c),p=()=>{u(r),d(c)};let m,v;if(s.useEffect((()=>{const t=setTimeout((()=>{p()}),1e3);return()=>{clearTimeout(t)}}),[r]),i===r||Number.isNaN(r)||Number.isNaN(i))m=[s.createElement(a,Object.assign({},t,{key:r,current:!0}))],v={transition:"none"};else{m=[];const e=r+10,n=[];for(let t=r;t<=e;t+=1)n.push(t);const o=n.findIndex((t=>t%10===i));m=n.map(((e,n)=>{const r=e%10;return s.createElement(a,Object.assign({},t,{key:e,value:r,offset:n-o,current:n===o}))}));v={transform:"translateY(".concat(-l(i,r,f<c?1:-1),"00%)")}}return s.createElement("span",{className:"".concat(e,"-only"),style:v,onTransitionEnd:p},m)}var f=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};const d=s.forwardRef(((t,e)=>{const{prefixCls:n,count:o,className:a,motionClassName:l,style:d,title:p,show:m,component:v="sup",children:h}=t,b=f(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:g}=s.useContext(i.E_),w=g("scroll-number",n),y=Object.assign(Object.assign({},b),{"data-show":m,style:d,className:r()(w,a,l),title:p});let E=o;if(o&&Number(o)%1===0){const t=String(o).split("");E=s.createElement("bdi",null,t.map(((e,n)=>s.createElement(u,{prefixCls:w,count:Number(o),value:e,key:t.length-n}))))}return d&&d.borderColor&&(y.style=Object.assign(Object.assign({},d),{boxShadow:"0 0 0 1px ".concat(d.borderColor," inset")})),h?(0,c.Tm)(h,(t=>({className:r()("".concat(w,"-custom-component"),null===t||void 0===t?void 0:t.className,l)}))):s.createElement(v,Object.assign({},y,{ref:e}),E)}))}}]);
//# sourceMappingURL=9806.531e62c6.js.map