import{y as b,s as I,Q as x,U,N}from"./scheduler.045c186c.js";const f=[];function O(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=b){let s;const r=new Set;function o(n){if(I(e,n)&&(e=n,s)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(n){o(n(e))}function a(n,i=b){const l=[n,i];return r.add(l),r.size===1&&(s=t(o,c)||b),n(e),()=>{r.delete(l),r.size===0&&s&&(s(),s=null)}}return{set:o,update:c,subscribe:a}}function K(e,t,s){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return O(s,(a,n)=>{let i=!1;const l=[];let _=0,g=b;const v=()=>{if(_)return;g();const u=t(r?l[0]:l,a,n);c?a(u):g=N(u)?u:b},S=o.map((u,h)=>x(u,T=>{l[h]=T,_&=~(1<<h),i&&v()},()=>{_|=1<<h}));return i=!0,v(),function(){U(S),g(),i=!1}})}var m;const L=((m=globalThis.__sveltekit_rb9k1r)==null?void 0:m.base)??"/svelte-3d-urdf";var A;const P=((A=globalThis.__sveltekit_rb9k1r)==null?void 0:A.assets)??L,V="1701040735899",$="sveltekit:snapshot",z="sveltekit:scroll",B="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1},E=location.origin;function C(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function R(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=R(e)}}function X(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!s||!!r||j(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(s==null?void 0:s.origin)===E&&e.hasAttribute("download");return{url:s,external:o,target:r,download:c}}function H(e){let t=null,s=null,r=null,o=null,c=null,a=null,n=e;for(;n&&n!==document.documentElement;)r===null&&(r=d(n,"preload-code")),o===null&&(o=d(n,"preload-data")),t===null&&(t=d(n,"keepfocus")),s===null&&(s=d(n,"noscroll")),c===null&&(c=d(n,"reload")),a===null&&(a=d(n,"replacestate")),n=R(n);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[o??"off"],keep_focus:i(t),noscroll:i(s),reload:i(c),replace_state:i(a)}}function w(e){const t=p(e);let s=!0;function r(){s=!0,t.update(a=>a)}function o(a){s=!1,t.set(a)}function c(a){let n;return t.subscribe(i=>{(n===void 0||s&&i!==n)&&a(n=i)})}return{notify:r,set:o,subscribe:c}}function Y(){const{set:e,subscribe:t}=p(!1);let s;async function r(){clearTimeout(s);try{const o=await fetch(`${P}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==V;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:r}}function j(e,t){return e.origin!==E||!e.pathname.startsWith(t)}function Q(e){e.client}const W={url:w({}),page:w({}),navigating:p(null),updated:Y()};export{B as I,k as P,z as S,$ as a,X as b,H as c,W as d,L as e,G as f,C as g,Q as h,j as i,K as j,E as o,O as r,D as s,p as w};
