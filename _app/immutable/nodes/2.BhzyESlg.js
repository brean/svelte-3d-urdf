import{s as G,c as U,U as y,e as j,d as R,f as S,i as b,$ as B,k as I,Z as p,u as F,g as H,a as z,F as N,C as L,Q as D,R as Q,V as X,z as Z,b as w,j as $,v as Y,l as te,S as ae,y as ee,w as ue,n as oe,a0 as be,t as ne,h as se}from"../chunks/scheduler.CriFGAoC.js";import{S as W,i as q,t as C,a as O,c as k,b as P,m as V,d as T}from"../chunks/index.D7HwFdPe.js";import{c as A,u as J,g as M,f as K,b as le,a as ve,A as Ee,e as ye}from"../chunks/Subtitle.CyXf_pn9.js";import{R as Ce,I as Oe}from"../chunks/IconButton.DSWxywjM.js";import{g as Ie}from"../chunks/entry.DmhzghHB.js";function ie(s,e){let t=Object.getOwnPropertyNames(s);const n={};for(let l=0;l<t.length;l++){const u=t[l],c=u.indexOf("$");c!==-1&&e.indexOf(u.substring(0,c+1))!==-1||e.indexOf(u)===-1&&(n[u]=s[u])}return n}function re(s,e){let t=Object.getOwnPropertyNames(s);const n={};for(let l=0;l<t.length;l++){const u=t[l];u.substring(0,e.length)===e&&(n[u.substring(e.length)]=s[u])}return n}function pe(s){let e,t,n,l,u,c;const d=s[9].default,i=U(d,s,s[8],null);let f=[{class:t=A({[s[1]]:!0,"mdc-card":!0,"mdc-card--outlined":s[2]==="outlined","smui-card--padded":s[3]})},s[6]],m={};for(let a=0;a<f.length;a+=1)m=y(m,f[a]);return{c(){e=j("div"),i&&i.c(),this.h()},l(a){e=R(a,"DIV",{class:!0});var r=S(e);i&&i.l(r),r.forEach(b),this.h()},h(){B(e,m)},m(a,r){I(a,e,r),i&&i.m(e,null),s[10](e),l=!0,u||(c=[p(n=J.call(null,e,s[0])),p(s[5].call(null,e))],u=!0)},p(a,[r]){i&&i.p&&(!l||r&256)&&F(i,d,a,a[8],l?z(d,a[8],r,null):H(a[8]),null),B(e,m=M(f,[(!l||r&14&&t!==(t=A({[a[1]]:!0,"mdc-card":!0,"mdc-card--outlined":a[2]==="outlined","smui-card--padded":a[3]})))&&{class:t},r&64&&a[6]])),n&&N(n.update)&&r&1&&n.update.call(null,a[0])},i(a){l||(C(i,a),l=!0)},o(a){O(i,a),l=!1},d(a){a&&b(e),i&&i.d(a),s[10](null),u=!1,L(c)}}}function Ae(s,e,t){const n=["use","class","variant","padded","getElement"];let l=D(e,n),{$$slots:u={},$$scope:c}=e;const d=K(Q());let{use:i=[]}=e,{class:f=""}=e,{variant:m="raised"}=e,{padded:a=!1}=e,r;function h(){return r}function _(o){Z[o?"unshift":"push"](()=>{r=o,t(4,r)})}return s.$$set=o=>{e=y(y({},e),X(o)),t(6,l=D(e,n)),"use"in o&&t(0,i=o.use),"class"in o&&t(1,f=o.class),"variant"in o&&t(2,m=o.variant),"padded"in o&&t(3,a=o.padded),"$$scope"in o&&t(8,c=o.$$scope)},[i,f,m,a,r,d,l,h,c,u,_]}class Be extends W{constructor(e){super(),q(this,e,Ae,pe,G,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const De=le({class:"smui-card__content",tag:"div"});function je(s){let e,t,n,l,u,c,d,i,f,m;const a=s[17].default,r=U(a,s,s[16],null);let h=[{class:l=A({[s[1]]:!0,"mdc-card__primary-action":!0,"smui-card__primary-action--padded":s[5],...s[8]})},{style:u=Object.entries(s[9]).map(ce).concat([s[2]]).join(" ")},{tabindex:s[6]},{role:"button"},s[14]],_={};for(let o=0;o<h.length;o+=1)_=y(_,h[o]);return{c(){e=j("div"),t=j("div"),n=w(),r&&r.c(),this.h()},l(o){e=R(o,"DIV",{class:!0,style:!0,tabindex:!0,role:!0});var v=S(e);t=R(v,"DIV",{class:!0}),S(t).forEach(b),n=$(v),r&&r.l(v),v.forEach(b),this.h()},h(){Y(t,"class","mdc-card__ripple"),B(e,_)},m(o,v){I(o,e,v),te(e,t),te(e,n),r&&r.m(e,null),s[18](e),i=!0,f||(m=[p(c=J.call(null,e,s[0])),p(s[10].call(null,e)),p(d=Ce.call(null,e,{ripple:s[3],unbounded:!1,color:s[4],addClass:s[11],removeClass:s[12],addStyle:s[13]}))],f=!0)},p(o,[v]){r&&r.p&&(!i||v&65536)&&F(r,a,o,o[16],i?z(a,o[16],v,null):H(o[16]),null),B(e,_=M(h,[(!i||v&290&&l!==(l=A({[o[1]]:!0,"mdc-card__primary-action":!0,"smui-card__primary-action--padded":o[5],...o[8]})))&&{class:l},(!i||v&516&&u!==(u=Object.entries(o[9]).map(ce).concat([o[2]]).join(" ")))&&{style:u},(!i||v&64)&&{tabindex:o[6]},{role:"button"},v&16384&&o[14]])),c&&N(c.update)&&v&1&&c.update.call(null,o[0]),d&&N(d.update)&&v&24&&d.update.call(null,{ripple:o[3],unbounded:!1,color:o[4],addClass:o[11],removeClass:o[12],addStyle:o[13]})},i(o){i||(C(r,o),i=!0)},o(o){O(r,o),i=!1},d(o){o&&b(e),r&&r.d(o),s[18](null),f=!1,L(m)}}}const ce=([s,e])=>`${s}: ${e};`;function Re(s,e,t){const n=["use","class","style","ripple","color","padded","tabindex","getElement"];let l=D(e,n),{$$slots:u={},$$scope:c}=e;const d=K(Q());let{use:i=[]}=e,{class:f=""}=e,{style:m=""}=e,{ripple:a=!0}=e,{color:r=void 0}=e,{padded:h=!1}=e,{tabindex:_=0}=e,o,v={},E={};function de(g){v[g]||t(8,v[g]=!0,v)}function me(g){(!(g in v)||v[g])&&t(8,v[g]=!1,v)}function _e(g,x){E[g]!=x&&(x===""||x==null?(delete E[g],t(9,E)):t(9,E[g]=x,E))}function ge(){return o}function he(g){Z[g?"unshift":"push"](()=>{o=g,t(7,o)})}return s.$$set=g=>{e=y(y({},e),X(g)),t(14,l=D(e,n)),"use"in g&&t(0,i=g.use),"class"in g&&t(1,f=g.class),"style"in g&&t(2,m=g.style),"ripple"in g&&t(3,a=g.ripple),"color"in g&&t(4,r=g.color),"padded"in g&&t(5,h=g.padded),"tabindex"in g&&t(6,_=g.tabindex),"$$scope"in g&&t(16,c=g.$$scope)},[i,f,m,a,r,h,_,o,v,E,d,de,me,_e,l,ge,c,u,he]}class Se extends W{constructor(e){super(),q(this,e,Re,je,G,{use:0,class:1,style:2,ripple:3,color:4,padded:5,tabindex:6,getElement:15})}get getElement(){return this.$$.ctx[15]}}function ke(s){let e,t,n,l,u,c;const d=s[8].default,i=U(d,s,s[7],null);let f=[{class:t=A({[s[1]]:!0,"mdc-card__media":!0,"mdc-card__media--square":s[2]==="square","mdc-card__media--16-9":s[2]==="16x9"})},s[5]],m={};for(let a=0;a<f.length;a+=1)m=y(m,f[a]);return{c(){e=j("div"),i&&i.c(),this.h()},l(a){e=R(a,"DIV",{class:!0});var r=S(e);i&&i.l(r),r.forEach(b),this.h()},h(){B(e,m)},m(a,r){I(a,e,r),i&&i.m(e,null),s[9](e),l=!0,u||(c=[p(n=J.call(null,e,s[0])),p(s[4].call(null,e))],u=!0)},p(a,[r]){i&&i.p&&(!l||r&128)&&F(i,d,a,a[7],l?z(d,a[7],r,null):H(a[7]),null),B(e,m=M(f,[(!l||r&6&&t!==(t=A({[a[1]]:!0,"mdc-card__media":!0,"mdc-card__media--square":a[2]==="square","mdc-card__media--16-9":a[2]==="16x9"})))&&{class:t},r&32&&a[5]])),n&&N(n.update)&&r&1&&n.update.call(null,a[0])},i(a){l||(C(i,a),l=!0)},o(a){O(i,a),l=!1},d(a){a&&b(e),i&&i.d(a),s[9](null),u=!1,L(c)}}}function Pe(s,e,t){const n=["use","class","aspectRatio","getElement"];let l=D(e,n),{$$slots:u={},$$scope:c}=e;const d=K(Q());let{use:i=[]}=e,{class:f=""}=e,{aspectRatio:m=void 0}=e,a;function r(){return a}function h(_){Z[_?"unshift":"push"](()=>{a=_,t(3,a)})}return s.$$set=_=>{e=y(y({},e),X(_)),t(5,l=D(e,n)),"use"in _&&t(0,i=_.use),"class"in _&&t(1,f=_.class),"aspectRatio"in _&&t(2,m=_.aspectRatio),"$$scope"in _&&t(7,c=_.$$scope)},[i,f,m,a,d,l,r,c,u,h]}class Ve extends W{constructor(e){super(),q(this,e,Pe,ke,G,{use:0,class:1,aspectRatio:2,getElement:6})}get getElement(){return this.$$.ctx[6]}}le({class:"mdc-card__media-content",tag:"div"});function Te(s){let e,t,n,l,u,c;const d=s[8].default,i=U(d,s,s[7],null);let f=[{class:t=A({[s[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":s[2]})},s[5]],m={};for(let a=0;a<f.length;a+=1)m=y(m,f[a]);return{c(){e=j("div"),i&&i.c(),this.h()},l(a){e=R(a,"DIV",{class:!0});var r=S(e);i&&i.l(r),r.forEach(b),this.h()},h(){B(e,m)},m(a,r){I(a,e,r),i&&i.m(e,null),s[9](e),l=!0,u||(c=[p(n=J.call(null,e,s[0])),p(s[4].call(null,e))],u=!0)},p(a,[r]){i&&i.p&&(!l||r&128)&&F(i,d,a,a[7],l?z(d,a[7],r,null):H(a[7]),null),B(e,m=M(f,[(!l||r&6&&t!==(t=A({[a[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":a[2]})))&&{class:t},r&32&&a[5]])),n&&N(n.update)&&r&1&&n.update.call(null,a[0])},i(a){l||(C(i,a),l=!0)},o(a){O(i,a),l=!1},d(a){a&&b(e),i&&i.d(a),s[9](null),u=!1,L(c)}}}function Ne(s,e,t){const n=["use","class","fullBleed","getElement"];let l=D(e,n),{$$slots:u={},$$scope:c}=e;const d=K(Q());let{use:i=[]}=e,{class:f=""}=e,{fullBleed:m=!1}=e,a;ae("SMUI:button:context","card:action"),ae("SMUI:icon-button:context","card:action");function r(){return a}function h(_){Z[_?"unshift":"push"](()=>{a=_,t(3,a)})}return s.$$set=_=>{e=y(y({},e),X(_)),t(5,l=D(e,n)),"use"in _&&t(0,i=_.use),"class"in _&&t(1,f=_.class),"fullBleed"in _&&t(2,m=_.fullBleed),"$$scope"in _&&t(7,c=_.$$scope)},[i,f,m,a,d,l,r,c,u,h]}class Ge extends W{constructor(e){super(),q(this,e,Ne,Te,G,{use:0,class:1,fullBleed:2,getElement:6})}get getElement(){return this.$$.ctx[6]}}le({class:"mdc-card__action-buttons",tag:"div"});const We=le({class:"mdc-card__action-icons",tag:"div"});function qe(s){let e,t,n,l,u,c;const d=s[6].default,i=U(d,s,s[5],null);return{c(){e=j("div"),i&&i.c(),this.h()},l(f){e=R(f,"DIV",{class:!0});var m=S(e);i&&i.l(m),m.forEach(b),this.h()},h(){Y(e,"class",t=A({[s[1]]:!0,"mdc-layout-grid__inner":!0}))},m(f,m){I(f,e,m),i&&i.m(e,null),s[7](e),l=!0,u||(c=[p(n=J.call(null,e,s[0])),p(s[3].call(null,e))],u=!0)},p(f,[m]){i&&i.p&&(!l||m&32)&&F(i,d,f,f[5],l?z(d,f[5],m,null):H(f[5]),null),(!l||m&2&&t!==(t=A({[f[1]]:!0,"mdc-layout-grid__inner":!0})))&&Y(e,"class",t),n&&N(n.update)&&m&1&&n.update.call(null,f[0])},i(f){l||(C(i,f),l=!0)},o(f){O(i,f),l=!1},d(f){f&&b(e),i&&i.d(f),s[7](null),u=!1,L(c)}}}function Me(s,e,t){let{$$slots:n={},$$scope:l}=e;const u=K(Q());let{use:c=[]}=e,{class:d=""}=e,i;function f(){return i}function m(a){Z[a?"unshift":"push"](()=>{i=a,t(2,i)})}return s.$$set=a=>{"use"in a&&t(0,c=a.use),"class"in a&&t(1,d=a.class),"$$scope"in a&&t(5,l=a.$$scope)},[c,d,i,u,f,l,n,m]}class Ue extends W{constructor(e){super(),q(this,e,Me,qe,G,{use:0,class:1,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Fe(s){let e;const t=s[8].default,n=U(t,s,s[10],null);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,u){n&&n.m(l,u),e=!0},p(l,u){n&&n.p&&(!e||u&1024)&&F(n,t,l,l[10],e?z(t,l[10],u,null):H(l[10]),null)},i(l){e||(C(n,l),e=!0)},o(l){O(n,l),e=!1},d(l){n&&n.d(l)}}}function He(s){let e,t,n,l,u,c,d;const i=[re(s[6],"innerGrid$")];let f={$$slots:{default:[Fe]},$$scope:{ctx:s}};for(let r=0;r<i.length;r+=1)f=y(f,i[r]);t=new Ue({props:f});let m=[{class:n=A({[s[1]]:!0,"mdc-layout-grid":!0,"mdc-layout-grid--fixed-column-width":s[2],["mdc-layout-grid--align-"+s[3]]:s[3]!=null})},ie(s[6],["innerGrid$"])],a={};for(let r=0;r<m.length;r+=1)a=y(a,m[r]);return{c(){e=j("div"),k(t.$$.fragment),this.h()},l(r){e=R(r,"DIV",{class:!0});var h=S(e);P(t.$$.fragment,h),h.forEach(b),this.h()},h(){B(e,a)},m(r,h){I(r,e,h),V(t,e,null),s[9](e),u=!0,c||(d=[p(l=J.call(null,e,s[0])),p(s[5].call(null,e))],c=!0)},p(r,[h]){const _=h&64?M(i,[ve(re(r[6],"innerGrid$"))]):{};h&1024&&(_.$$scope={dirty:h,ctx:r}),t.$set(_),B(e,a=M(m,[(!u||h&14&&n!==(n=A({[r[1]]:!0,"mdc-layout-grid":!0,"mdc-layout-grid--fixed-column-width":r[2],["mdc-layout-grid--align-"+r[3]]:r[3]!=null})))&&{class:n},h&64&&ie(r[6],["innerGrid$"])])),l&&N(l.update)&&h&1&&l.update.call(null,r[0])},i(r){u||(C(t.$$.fragment,r),u=!0)},o(r){O(t.$$.fragment,r),u=!1},d(r){r&&b(e),T(t),s[9](null),c=!1,L(d)}}}function ze(s,e,t){const n=["use","class","fixedColumnWidth","align","getElement"];let l=D(e,n),{$$slots:u={},$$scope:c}=e;const d=K(Q());let{use:i=[]}=e,{class:f=""}=e,{fixedColumnWidth:m=!1}=e,{align:a=void 0}=e,r;function h(){return r}function _(o){Z[o?"unshift":"push"](()=>{r=o,t(4,r)})}return s.$$set=o=>{e=y(y({},e),X(o)),t(6,l=D(e,n)),"use"in o&&t(0,i=o.use),"class"in o&&t(1,f=o.class),"fixedColumnWidth"in o&&t(2,m=o.fixedColumnWidth),"align"in o&&t(3,a=o.align),"$$scope"in o&&t(10,c=o.$$scope)},[i,f,m,a,r,d,l,h,u,_,c]}class Le extends W{constructor(e){super(),q(this,e,ze,He,G,{use:0,class:1,fixedColumnWidth:2,align:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}function Qe(s){let e,t,n,l,u,c;const d=s[11].default,i=U(d,s,s[10],null);let f=[{class:t=A({[s[1]]:!0,"mdc-layout-grid__cell":!0,["mdc-layout-grid__cell--align-"+s[2]]:s[2]!=null,["mdc-layout-grid__cell--order-"+s[3]]:s[3]!=null,["mdc-layout-grid__cell--span-"+s[4]]:s[4]!=null,...Object.fromEntries(Object.entries(s[5]).map(fe))})},s[8]],m={};for(let a=0;a<f.length;a+=1)m=y(m,f[a]);return{c(){e=j("div"),i&&i.c(),this.h()},l(a){e=R(a,"DIV",{class:!0});var r=S(e);i&&i.l(r),r.forEach(b),this.h()},h(){B(e,m)},m(a,r){I(a,e,r),i&&i.m(e,null),s[12](e),l=!0,u||(c=[p(n=J.call(null,e,s[0])),p(s[7].call(null,e))],u=!0)},p(a,[r]){i&&i.p&&(!l||r&1024)&&F(i,d,a,a[10],l?z(d,a[10],r,null):H(a[10]),null),B(e,m=M(f,[(!l||r&62&&t!==(t=A({[a[1]]:!0,"mdc-layout-grid__cell":!0,["mdc-layout-grid__cell--align-"+a[2]]:a[2]!=null,["mdc-layout-grid__cell--order-"+a[3]]:a[3]!=null,["mdc-layout-grid__cell--span-"+a[4]]:a[4]!=null,...Object.fromEntries(Object.entries(a[5]).map(fe))})))&&{class:t},r&256&&a[8]])),n&&N(n.update)&&r&1&&n.update.call(null,a[0])},i(a){l||(C(i,a),l=!0)},o(a){O(i,a),l=!1},d(a){a&&b(e),i&&i.d(a),s[12](null),u=!1,L(c)}}}const fe=([s,e])=>[`mdc-layout-grid__cell--span-${e}-${s}`,!0];function Ze(s,e,t){const n=["use","class","align","order","span","spanDevices","getElement"];let l=D(e,n),{$$slots:u={},$$scope:c}=e;const d=K(Q());let{use:i=[]}=e,{class:f=""}=e,{align:m=void 0}=e,{order:a=void 0}=e,{span:r=void 0}=e,{spanDevices:h={}}=e,_;function o(){return _}function v(E){Z[E?"unshift":"push"](()=>{_=E,t(6,_)})}return s.$$set=E=>{e=y(y({},e),X(E)),t(8,l=D(e,n)),"use"in E&&t(0,i=E.use),"class"in E&&t(1,f=E.class),"align"in E&&t(2,m=E.align),"order"in E&&t(3,a=E.order),"span"in E&&t(4,r=E.span),"spanDevices"in E&&t(5,h=E.spanDevices),"$$scope"in E&&t(10,c=E.$$scope)},[i,f,m,a,r,h,_,d,l,o,c,u,v]}class Je extends W{constructor(e){super(),q(this,e,Ze,Qe,G,{use:0,class:1,align:2,order:3,span:4,spanDevices:5,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Ke=[{name:"turtlebot3_burger",package:"turtlebot3_description",desc:"The TurtleBot 3 burger robot basic burger configuration by ROBOTIS",title:"Turtlebot 3 Burger"},{name:"turtlebot3_waffle",package:"turtlebot3_description",desc:"The TurtleBot 3 burger robot with camera in the waffle configuration by ROBOTIS",title:"Turtlebot 3 Waffle"}];function Xe(s,e,t){const n=s.slice();return n[1]=e[t],n}function Ye(s){let e,t=s[1].title+"",n,l,u,c=s[1].desc+"",d;return{c(){e=j("h2"),n=ne(t),l=w(),u=j("h3"),d=ne(c),this.h()},l(i){e=R(i,"H2",{class:!0,style:!0});var f=S(e);n=se(f,t),f.forEach(b),l=$(i),u=R(i,"H3",{class:!0,style:!0});var m=S(u);d=se(m,c),m.forEach(b),this.h()},h(){Y(e,"class","mdc-typography--headline6"),ee(e,"margin","0"),Y(u,"class","mdc-typography--subtitle2"),ee(u,"margin","0 0 10px"),ee(u,"color","#888")},m(i,f){I(i,e,f),te(e,n),I(i,l,f),I(i,u,f),te(u,d)},p:oe,d(i){i&&(b(e),b(l),b(u))}}}function we(s){let e,t,n,l;return e=new Ve({props:{class:"card-media-16x9",aspectRatio:"16x9"}}),n=new De({props:{class:"mdc-typography--body2",$$slots:{default:[Ye]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=w(),k(n.$$.fragment)},l(u){P(e.$$.fragment,u),t=$(u),P(n.$$.fragment,u)},m(u,c){V(e,u,c),I(u,t,c),V(n,u,c),l=!0},p(u,c){const d={};c&16&&(d.$$scope={dirty:c,ctx:u}),n.$set(d)},i(u){l||(C(e.$$.fragment,u),C(n.$$.fragment,u),l=!0)},o(u){O(e.$$.fragment,u),O(n.$$.fragment,u),l=!1},d(u){u&&b(t),T(e,u),T(n,u)}}}function $e(s){let e;return{c(){e=ne("delete")},l(t){e=se(t,"delete")},m(t,n){I(t,e,n)},d(t){t&&b(e)}}}function xe(s){let e,t;return e=new Oe({props:{class:"material-icons",title:"Share",$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,l){V(e,n,l),t=!0},p(n,l){const u={};l&16&&(u.$$scope={dirty:l,ctx:n}),e.$set(u)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function et(s){let e,t;return e=new We({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,l){V(e,n,l),t=!0},p(n,l){const u={};l&16&&(u.$$scope={dirty:l,ctx:n}),e.$set(u)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function tt(s){let e,t,n,l;function u(){return s[0](s[1])}return e=new Se({props:{$$slots:{default:[we]},$$scope:{ctx:s}}}),e.$on("click",u),n=new Ge({props:{$$slots:{default:[et]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=w(),k(n.$$.fragment)},l(c){P(e.$$.fragment,c),t=$(c),P(n.$$.fragment,c)},m(c,d){V(e,c,d),I(c,t,d),V(n,c,d),l=!0},p(c,d){s=c;const i={};d&16&&(i.$$scope={dirty:d,ctx:s}),e.$set(i);const f={};d&16&&(f.$$scope={dirty:d,ctx:s}),n.$set(f)},i(c){l||(C(e.$$.fragment,c),C(n.$$.fragment,c),l=!0)},o(c){O(e.$$.fragment,c),O(n.$$.fragment,c),l=!1},d(c){c&&b(t),T(e,c),T(n,c)}}}function lt(s){let e,t,n;return e=new Be({props:{$$slots:{default:[tt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=w()},l(l){P(e.$$.fragment,l),t=$(l)},m(l,u){V(e,l,u),I(l,t,u),n=!0},p(l,u){const c={};u&16&&(c.$$scope={dirty:u,ctx:l}),e.$set(c)},i(l){n||(C(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){l&&b(t),T(e,l)}}}function nt(s){let e,t;return e=new Je({props:{$$slots:{default:[lt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,l){V(e,n,l),t=!0},p(n,l){const u={};l&16&&(u.$$scope={dirty:l,ctx:n}),e.$set(u)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function st(s){let e,t,n=ye(Ke),l=[];for(let u=0;u<n.length;u+=1)l[u]=nt(Xe(s,n,u));return{c(){for(let u=0;u<l.length;u+=1)l[u].c();e=ue()},l(u){for(let c=0;c<l.length;c+=1)l[c].l(u);e=ue()},m(u,c){for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(u,c);I(u,e,c),t=!0},p:oe,i(u){if(!t){for(let c=0;c<n.length;c+=1)C(l[c]);t=!0}},o(u){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)O(l[c]);t=!1},d(u){u&&b(e),be(l,u)}}}function at(s){let e,t,n;return t=new Le({props:{$$slots:{default:[st]},$$scope:{ctx:s}}}),{c(){e=j("main"),k(t.$$.fragment),this.h()},l(l){e=R(l,"MAIN",{style:!0});var u=S(e);P(t.$$.fragment,u),u.forEach(b),this.h()},h(){ee(e,"width","80%")},m(l,u){I(l,e,u),V(t,e,null),n=!0},p(l,u){const c={};u&16&&(c.$$scope={dirty:u,ctx:l}),t.$set(c)},i(l){n||(C(t.$$.fragment,l),n=!0)},o(l){O(t.$$.fragment,l),n=!1},d(l){l&&b(e),T(t)}}}function ut(s){let e,t;return e=new Ee({props:{$$slots:{default:[at]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,l){V(e,n,l),t=!0},p(n,[l]){const u={};l&16&&(u.$$scope={dirty:l,ctx:n}),e.$set(u)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function it(s){return[t=>{Ie(t.name+"/edit")}]}class mt extends W{constructor(e){super(),q(this,e,it,ut,G,{})}}export{mt as component};
