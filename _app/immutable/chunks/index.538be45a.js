var E=Object.defineProperty;var b=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(b(t,typeof e!="symbol"?e+"":e,n),n);import{F as $,y as c,Z as x,h as C,d as I,_ as O,E as v,$ as j,Y as p,a0 as B,a1 as F,a2 as w,a3 as L,a4 as M,a5 as N,a6 as P,a7 as R}from"./scheduler.66ada27a.js";const o=new Set;let d;function G(){d={r:0,c:[],p:d}}function H(){d.r||$(d.c),d=d.p}function U(t,e){t&&t.i&&(o.delete(t),t.i(e))}function J(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function K(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function Q(t){t&&t.c()}function T(t,e){t&&t.l(e)}function V(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),p(()=>{const f=t.$$.on_mount.map(L).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(p)}function Y(t,e){const n=t.$$;n.fragment!==null&&(B(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,s,i,f,h=null,S=[-1]){const u=F;w(t);const a=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};h&&h(a.root);let l=!1;if(a.ctx=n?n(t,e.props||{},(r,g,...y)=>{const m=y.length?y[0]:g;return a.ctx&&i(a.ctx[r],a.ctx[r]=m)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](m),l&&Z(t,r)),g}):[],a.update(),l=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){P();const r=C(e.target);a.fragment&&a.fragment.l(r),r.forEach(I)}else a.fragment&&a.fragment.c();e.intro&&U(t.$$.fragment),V(t,e.target,e.anchor),R(),O()}w(u)}class X{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){Y(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!j(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(z);export{X as S,U as a,Q as b,H as c,T as d,Y as e,K as f,G as g,W as i,V as m,J as t};
