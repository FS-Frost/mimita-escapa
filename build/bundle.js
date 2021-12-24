var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function g(t){$=t}function b(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const y=[],v=[],x=[],k=[],_=Promise.resolve();let w=!1;function N(t){x.push(t)}let M=!1;const C=new Set;function T(){if(!M){M=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];g(e),E(e.$$)}for(g(null),y.length=0;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(y.length);for(;k.length;)k.pop()();w=!1,M=!1,C.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const q=new Set;function B(t,e){t&&t.i&&(q.delete(t),t.i(e))}function j(t,n,i,s){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,i),s||N((()=>{const n=l.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(N)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,_.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,r,i,s,c,l,u,d=[-1]){const f=$;g(e);const m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};u&&u(m.root);let h=!1;if(m.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),h&&A(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&B(e.$$.fragment),j(e,r.target,r.anchor,r.customElement),T()}g(f)}class O{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var P;!function(t){t.Normal="?",t.Clicked="Ñee ñee 👻",t.Blocked="X",t.Found="Nouuuuu 😣"}(P||(P={}));class S{constructor(t,e){this.blockTimer=null,this.x=t,this.y=e,this.state=P.Normal}print(){return`${this.x}x${this.y}`}hasSamePosition(t,e){return this.x==t&&this.y==e}}function H(t,e,n){const o=t.slice();return o[25]=e[n],o}function z(t){let e,n,r,i,$,g,b,y=t[25].state+"";function v(){return t[15](t[25])}function x(){return t[16](t[25])}function k(){return t[17](t[25])}function _(){return t[18](t[25])}function w(){return t[19](t[25])}return{c(){e=u("button"),n=d(y),r=f(),h(e,"class",i=s(t[8](t[25],t[0],t[1]))+" svelte-mansdr"),e.disabled=$=t[6]||t[25].state!=P.Normal},m(t,o){var i;l(t,e,o),c(e,n),c(e,r),g||(b=[m(e,"click",(i=v,function(t){return t.preventDefault(),i.call(this,t)})),m(e,"mousedown",x),m(e,"mouseup",k),m(e,"touchstart",_,{passive:!0}),m(e,"touchend",w,{passive:!0})],g=!0)},p(o,r){t=o,4&r&&y!==(y=t[25].state+"")&&p(n,y),7&r&&i!==(i=s(t[8](t[25],t[0],t[1]))+" svelte-mansdr")&&h(e,"class",i),68&r&&$!==($=t[6]||t[25].state!=P.Normal)&&(e.disabled=$)},d(t){t&&a(e),g=!1,o(b)}}}function D(e){let n,o,r,i,s,$,g,b,y,v,x,k,_,w,N,M,C,T,E,q,B,j,L,A,F=e[2],O=[];for(let t=0;t<F.length;t+=1)O[t]=z(H(e,F,t));return{c(){n=u("div"),o=u("div"),r=u("button"),r.textContent="Reiniciar",i=f(),s=u("div"),$=u("p"),$.innerHTML="<b>Presionar el espacio [?] donde crees que está la Mimita</b>",g=f(),b=u("p"),b.innerHTML="<b>Mantener presionado para bloquear espacio (evita que la Mimita lo ocupe)</b>",y=f(),v=u("p"),x=d("Bloqueos disponibles: "),k=d(e[3]),_=f(),w=u("p"),N=d("Intentos disponibles: "),M=d(e[5]),C=f(),T=u("div"),E=d(e[4]),B=f(),j=u("div");for(let t=0;t<O.length;t+=1)O[t].c();h(r,"class","btn btn-primary"),h(o,"class","row mb-3"),h($,"class","svelte-mansdr"),h(b,"class","svelte-mansdr"),h(v,"class","svelte-mansdr"),h(w,"class","svelte-mansdr"),h(s,"class","row info svelte-mansdr"),h(T,"class","row alert alert-primary"),h(T,"role","alert"),T.hidden=q=""==e[4],h(j,"class","row grid mb-3 svelte-mansdr"),h(n,"class","game svelte-mansdr")},m(t,a){l(t,n,a),c(n,o),c(o,r),c(n,i),c(n,s),c(s,$),c(s,g),c(s,b),c(s,y),c(s,v),c(v,x),c(v,k),c(s,_),c(s,w),c(w,N),c(w,M),c(n,C),c(n,T),c(T,E),c(n,B),c(n,j);for(let t=0;t<O.length;t+=1)O[t].m(j,null);L||(A=m(r,"click",e[14]),L=!0)},p(t,[e]){if(8&e&&p(k,t[3]),32&e&&p(M,t[5]),16&e&&p(E,t[4]),16&e&&q!==(q=""==t[4])&&(T.hidden=q),1863&e){let n;for(F=t[2],n=0;n<F.length;n+=1){const o=H(t,F,n);O[n]?O[n].p(o,e):(O[n]=z(o),O[n].c(),O[n].m(j,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=F.length}},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(O,t),L=!1,A()}}}function I(t,e,n,o){return n==t&&o==e}function R(t){t.blockTimer&&clearTimeout(t.blockTimer)}function X(t,e,n){let o,r,i,s,c,l,a,u=0,d=0,f=[],m="";function h(){n(2,f=[...f])}function p(){n(4,m=""),n(2,f=[]);for(let t=0;t<3;t++)for(let e=0;e<3;e++){const o=new S(t,e);n(2,f=[...f,o])}$()}function $(){const t=f.filter((t=>t.state==P.Normal&&(u!=t.x||d!=t.y)));var e;const o=t[(e=t.length,Math.floor(Math.random()*e))];n(0,u=o.x),n(1,d=o.y)}function g(t){t.state=P.Found,h(),n(4,m="¡Mimita encontrada! 😛")}function y(t){if(I(t.x,t.y,u,d))return void g(t);t.state=P.Clicked,h();f.filter((t=>t.state==P.Clicked)).length>=3||0==s.length?n(4,m="¡La Mimita ganó! 🤗"):$()}function v(t){t.blockTimer=setTimeout((()=>{!function(t){I(t.x,t.y,u,d)?g(t):t.state===P.Normal&&(l?(t.state=P.Blocked,h()):alert("¡No quedan bloqueos!"))}(t)}),300)}b((()=>p()));return t.$$.update=()=>{4&t.$$.dirty&&n(13,r=f.some((t=>t.state==P.Found))),7&t.$$.dirty&&n(11,s=f.filter((t=>t.state==P.Normal&&(u!=t.x||d!=t.y)))),2052&t.$$.dirty&&n(12,i=f.filter((t=>t.state==P.Clicked)).length>=3||0==s.length),12288&t.$$.dirty&&n(6,o=r||i),4&t.$$.dirty&&n(3,c=2-f.filter((t=>t.state==P.Blocked)).length),8&t.$$.dirty&&(l=c>0),4&t.$$.dirty&&n(5,a=3-f.filter((t=>t.state==P.Clicked)).length)},[u,d,f,c,m,a,o,p,function(t,e,n){const{x:o,y:r}=t;return`btn grid-item text-center align-text-middle ${I(o,r,e,n)?"with-target":"without-target"} ${t.state==P.Clicked?"clicked":""} ${t.state==P.Blocked?"blocked":""}`},y,v,s,i,r,()=>p(),t=>y(t),t=>v(t),t=>R(t),t=>v(t),t=>R(t)]}class G extends O{constructor(t){super(),F(this,t,X,D,i,{})}}function J(e){let n,o,r,i,s;return i=new G({}),{c(){var t;n=u("main"),o=u("h1"),o.textContent="Mimita escapa escapa",r=f(),(t=i.$$.fragment)&&t.c(),h(o,"class","title svelte-e35j13"),h(n,"class","svelte-e35j13")},m(t,e){l(t,n,e),c(n,o),c(n,r),j(i,n,null),s=!0},p:t,i(t){s||(B(i.$$.fragment,t),s=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(i.$$.fragment,t),s=!1},d(t){t&&a(n),L(i)}}}return new class extends O{constructor(t){super(),F(this,t,null,J,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
