/*! For license information please see 5772.6883220b.js.LICENSE.txt */
"use strict";(self.webpackChunkookini=self.webpackChunkookini||[]).push([[5772],{35772:(e,t,r)=>{var n;r.d(t,{AW:()=>M,DY:()=>x,F0:()=>H,FR:()=>u,HJ:()=>O,SN:()=>F,TH:()=>v,Us:()=>s,WU:()=>y,bS:()=>f,i7:()=>T,j3:()=>L,oQ:()=>h,s0:()=>C,us:()=>w,w3:()=>i});var a=r(72791),o=r(58278);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}const i=a.createContext(null);const u=a.createContext(null);const s=a.createContext(null);const c=a.createContext(null);const p=a.createContext({outlet:null,matches:[],isDataRoute:!1});const d=a.createContext(null);function h(e,t){let{relative:r}=void 0===t?{}:t;m()||(0,o.J0)(!1);let{basename:n,navigator:l}=a.useContext(s),{hash:i,pathname:u,search:c}=y(e,{relative:r}),p=u;return"/"!==n&&(p="/"===u?n:(0,o.RQ)([n,u])),l.createHref({pathname:p,search:c,hash:i})}function m(){return null!=a.useContext(c)}function v(){return m()||(0,o.J0)(!1),a.useContext(c).location}function f(e){m()||(0,o.J0)(!1);let{pathname:t}=v();return a.useMemo((()=>(0,o.LX)(e,t)),[t,e])}function E(e){a.useContext(s).static||a.useLayoutEffect(e)}function C(){let{isDataRoute:e}=a.useContext(p);return e?function(){let{router:e}=P(J.UseNavigateStable),t=N(S.UseNavigateStable),r=a.useRef(!1);return E((()=>{r.current=!0})),a.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"===typeof n?e.navigate(n):e.navigate(n,l({fromRouteId:t},a)))}),[e,t])}():function(){m()||(0,o.J0)(!1);let e=a.useContext(i),{basename:t,future:r,navigator:n}=a.useContext(s),{matches:l}=a.useContext(p),{pathname:u}=v(),c=JSON.stringify((0,o.cm)(l,r.v7_relativeSplatPath)),d=a.useRef(!1);return E((()=>{d.current=!0})),a.useCallback((function(r,a){if(void 0===a&&(a={}),!d.current)return;if("number"===typeof r)return void n.go(r);let l=(0,o.pC)(r,JSON.parse(c),u,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,o.RQ)([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}),[t,n,c,u,e])}()}const g=a.createContext(null);function y(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=a.useContext(s),{matches:l}=a.useContext(p),{pathname:i}=v(),u=JSON.stringify((0,o.cm)(l,n.v7_relativeSplatPath));return a.useMemo((()=>(0,o.pC)(e,JSON.parse(u),i,"path"===r)),[e,u,i,r])}function x(e,t,r,n){m()||(0,o.J0)(!1);let{navigator:i}=a.useContext(s),{matches:u}=a.useContext(p),d=u[u.length-1],h=d?d.params:{},f=(d&&d.pathname,d?d.pathnameBase:"/");d&&d.route;let E,C=v();if(t){var g;let e="string"===typeof t?(0,o.cP)(t):t;"/"===f||(null==(g=e.pathname)?void 0:g.startsWith(f))||(0,o.J0)(!1),E=e}else E=C;let y=E.pathname||"/",x=y;if("/"!==f){let e=f.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=(0,o.fp)(e,{pathname:x});let R=B(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,o.RQ)([f,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:(0,o.RQ)([f,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,n);return t&&R?a.createElement(c.Provider,{value:{location:l({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:o.aU.Pop}},R):R}function b(){let e=function(){var e;let t=a.useContext(d),r=D(S.UseRouteError),n=N(S.UseRouteError);if(void 0!==t)return t;return null==(e=r.errors)?void 0:e[n]}(),t=(0,o.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:n};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:l},r):null,null)}const R=a.createElement(b,null);class k extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?a.createElement(p.Provider,{value:this.props.routeContext},a.createElement(d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(p.Provider,{value:t},n)}function B(e,t,r,n){var l;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){var i;if(null==(i=r)||!i.errors)return null;e=r.matches}let u=e,s=null==(l=r)?void 0:l.errors;if(null!=s){let e=u.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||(0,o.J0)(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let a=0;a<u.length;a++){let e=u[a];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(p=a),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,u=p>=0?u.slice(0,p+1):[u[0]];break}}}return u.reduceRight(((e,n,o)=>{let l,i=!1,d=null,h=null;var m;r&&(l=s&&n.route.id?s[n.route.id]:void 0,d=n.route.errorElement||R,c&&(p<0&&0===o?(m="route-fallback",!1||j[m]||(j[m]=!0),i=!0,h=null):p===o&&(i=!0,h=n.route.hydrateFallbackElement||null)));let v=t.concat(u.slice(0,o+1)),f=()=>{let t;return t=l?d:i?h:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(U,{match:n,routeContext:{outlet:e,matches:v,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?a.createElement(k,{location:r.location,revalidation:r.revalidation,component:d,error:l,children:f(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):f()}),null)}var J=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J||{}),S=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S||{});function P(e){let t=a.useContext(i);return t||(0,o.J0)(!1),t}function D(e){let t=a.useContext(u);return t||(0,o.J0)(!1),t}function N(e){let t=function(e){let t=a.useContext(p);return t||(0,o.J0)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.J0)(!1),r.route.id}function O(){return D(S.UseNavigation).navigation}function F(){let{matches:e,loaderData:t}=D(S.UseMatches);return a.useMemo((()=>e.map((e=>(0,o.WS)(e,t)))),[e,t])}const j={};(n||(n=r.t(a,2))).startTransition;function L(e){return function(e){let t=a.useContext(p).outlet;return t?a.createElement(g.Provider,{value:e},t):t}(e.context)}function M(e){(0,o.J0)(!1)}function H(e){let{basename:t="/",children:r=null,location:n,navigationType:i=o.aU.Pop,navigator:u,static:p=!1,future:d}=e;m()&&(0,o.J0)(!1);let h=t.replace(/^\/*/,"/"),v=a.useMemo((()=>({basename:h,navigator:u,static:p,future:l({v7_relativeSplatPath:!1},d)})),[h,d,u,p]);"string"===typeof n&&(n=(0,o.cP)(n));let{pathname:f="/",search:E="",hash:C="",state:g=null,key:y="default"}=n,x=a.useMemo((()=>{let e=(0,o.Zn)(f,h);return null==e?null:{location:{pathname:e,search:E,hash:C,state:g,key:y},navigationType:i}}),[h,f,E,C,g,y,i]);return null==x?null:a.createElement(s.Provider,{value:v},a.createElement(c.Provider,{children:r,value:x}))}new Promise((()=>{}));a.Component;function T(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;let l=[...t,n];if(e.type===a.Fragment)return void r.push.apply(r,T(e.props.children,l));e.type!==M&&(0,o.J0)(!1),e.props.index&&e.props.children&&(0,o.J0)(!1);let i={id:e.props.id||l.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=T(e.props.children,l)),r.push(i)})),r}function w(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:a.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:a.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:a.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}}}]);
//# sourceMappingURL=5772.6883220b.js.map