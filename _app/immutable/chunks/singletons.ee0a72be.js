import{y as p,s as I,U as x,F as U,E as O}from"./scheduler.0c75ed24.js";const f=[];function j(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let s;const r=new Set;function o(n){if(I(e,n)&&(e=n,s)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function u(n){o(n(e))}function a(n,i=p){const l=[n,i];return r.add(l),r.size===1&&(s=t(o,u)||p),n(e),()=>{r.delete(l),r.size===0&&s&&(s(),s=null)}}return{set:o,update:u,subscribe:a}}function K(e,t,s){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=t.length<2;return j(s,(a,n)=>{let i=!1;const l=[];let _=0,h=p;const v=()=>{if(_)return;h();const c=t(r?l[0]:l,a,n);u?a(c):h=O(c)?c:p},S=o.map((c,g)=>x(c,T=>{l[g]=T,_&=~(1<<g),i&&v()},()=>{_|=1<<g}));return i=!0,v(),function(){U(S),h(),i=!1}})}var E;const L=((E=globalThis.__sveltekit_1uf3jh9)==null?void 0:E.base)??"/svelte-3d-urdf";var m;const N=((m=globalThis.__sveltekit_1uf3jh9)==null?void 0:m.assets)??L,P="1701208927768",$="sveltekit:snapshot",z="sveltekit:scroll",B="sveltekit:index",y={tap:1,hover:2,viewport:3,eager:4,off:-1},A=location.origin;function C(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const k={...y,"":y.hover};function R(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=R(e)}}function X(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!s||!!r||Y(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),u=(s==null?void 0:s.origin)===A&&e.hasAttribute("download");return{url:s,external:o,target:r,download:u}}function F(e){let t=null,s=null,r=null,o=null,u=null,a=null,n=e;for(;n&&n!==document.documentElement;)r===null&&(r=d(n,"preload-code")),o===null&&(o=d(n,"preload-data")),t===null&&(t=d(n,"keepfocus")),s===null&&(s=d(n,"noscroll")),u===null&&(u=d(n,"reload")),a===null&&(a=d(n,"replacestate")),n=R(n);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:k[r??"off"],preload_data:k[o??"off"],keep_focus:i(t),noscroll:i(s),reload:i(u),replace_state:i(a)}}function w(e){const t=b(e);let s=!0;function r(){s=!0,t.update(a=>a)}function o(a){s=!1,t.set(a)}function u(a){let n;return t.subscribe(i=>{(n===void 0||s&&i!==n)&&a(n=i)})}return{notify:r,set:o,subscribe:u}}function V(){const{set:e,subscribe:t}=b(!1);let s;async function r(){clearTimeout(s);try{const o=await fetch(`${N}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==P;return a&&(e(!0),clearTimeout(s)),a}catch{return!1}}return{subscribe:t,check:r}}function Y(e,t){return e.origin!==A||!e.pathname.startsWith(t)}function H(e){e.client}const W={url:w({}),page:w({}),navigating:b(null),updated:V()};export{B as I,y as P,z as S,$ as a,X as b,F as c,W as d,L as e,G as f,C as g,H as h,Y as i,K as j,A as o,j as r,D as s,b as w};