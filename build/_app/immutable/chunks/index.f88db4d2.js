var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>(Y(t,typeof e!="symbol"?e+"":e,n),n);import{n as x,r as v,h as j,e as A,i as M,j as q,k as Z,l as tt,m as et,p as nt,q as z,v as it,w as rt,x as st}from"./scheduler.9aef0e56.js";const T=typeof window<"u";let H=T?()=>window.performance.now():()=>Date.now(),D=T?t=>requestAnimationFrame(t):x;const g=new Set;function F(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&D(F)}function L(t){let e;return g.size===0&&D(F),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let k=!1;function at(){k=!0}function lt(){k=!1}function ot(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,u=(i>0&&e[n[i]].claim_order<=l?i+1:ot(1,i,_=>e[n[_]].claim_order,l))-1;r[a]=n[u]+1;const f=u+1;n[f]=a,i=Math.max(f,i)}const o=[],s=[];let c=e.length-1;for(let a=n[i]+1;a!=0;a=r[a-1]){for(o.push(e[a-1]);c>=a;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<s.length;a++){for(;l<o.length&&s[a].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;t.insertBefore(s[a],u)}}function ft(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=W("style");return e.textContent="/* empty */",_t(U(t),e),e.sheet}function _t(t,e){return ft(t.head||t,e),e.sheet}function dt(t,e){if(k){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){k&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function W(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function kt(){return I(" ")}function Pt(){return I("")}function Rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bt(t){return t.dataset.svelteH}function mt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,r,i=!1){ht(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const a=n(c);return a===void 0?t.splice(s,1):t[s]=a,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const a=n(c);return a===void 0?t.splice(s,1):t[s]=a,i?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function pt(t,e,n,r){return G(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Dt(t,e,n){return pt(t,e,n,W)}function $t(t,e){return G(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>I(e),!0)}function It(t){return $t(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function yt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function zt(t,e){return new t(e)}const E=new Map;let S=0;function gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function xt(t,e){const n={stylesheet:ut(e),rules:{}};return E.set(t,n),n}function J(t,e,n,r,i,o,s,c=0){const a=16.666/r;let l=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*o($);l+=$*100+`%{${s(p,1-p)}}
`}const u=l+`100% {${s(n,1-n)}}
}`,f=`__svelte_${gt(u)}_${c}`,_=U(t),{stylesheet:d,rules:m}=E.get(_)||xt(_,t);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${i}ms 1 both`,S+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),S-=i,S||wt())}function wt(){D(()=>{S||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),E.clear())})}let w;function K(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function C(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const b=new Set;let y;function Mt(){y={r:0,c:[],p:y}}function Tt(){y.r||v(y.c),y=y.p}function vt(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Ht(t,e,n,r){if(t&&t.o){if(b.has(t))return;b.add(t),y.c.push(()=>{b.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Q={duration:0};function Ft(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,c,a=0;function l(){s&&B(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=M,tick:h=x,css:$}=i||Q;$&&(s=J(t,0,1,d,_,m,$,a++)),h(0,1);const p=H()+_,N=p+d;c&&c.abort(),o=!0,A(()=>C(t,!0,"start")),c=L(P=>{if(o){if(P>=N)return h(1,0),C(t,!0,"end"),l(),o=!1;if(P>=p){const O=m((P-p)/d);h(O,1-O)}}return o})}let f=!1;return{start(){f||(f=!0,B(t),j(i)?(i=i(r),K().then(u)):u())},invalidate(){f=!1},end(){o&&(l(),o=!1)}}}function Lt(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const c=y;c.r+=1;let a;function l(){const{delay:u=0,duration:f=300,easing:_=M,tick:d=x,css:m}=i||Q;m&&(s=J(t,1,0,f,u,_,m));const h=H()+u,$=h+f;A(()=>C(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),L(p=>{if(o){if(p>=$)return d(0,1),C(t,!1,"end"),--c.r||v(c.c),!1;if(p>=h){const N=_((p-h)/f);d(1-N,N)}}return o})}return j(i)?K().then(()=>{i=i(r),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=a),u&&i.tick&&i.tick(1,0),o&&(s&&B(t,s),o=!1)}}}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function Nt(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),A(()=>{const o=t.$$.on_mount.map(it).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),i.forEach(A)}function bt(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(rt.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,r,i,o,s=null,c=[-1]){const a=nt;z(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:q(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&i(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&At(t,f)),_}):[],l.update(),u=!0,v(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){at();const f=mt(e.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&vt(t.$$.fragment),Nt(t,e.target,e.anchor),lt(),Z()}z(a)}class Gt{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){bt(this,1),this.$destroy=x}$on(e,n){if(!j(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Et="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Et);export{dt as A,Gt as S,jt as a,Tt as b,It as c,vt as d,Pt as e,V as f,W as g,Dt as h,Wt as i,mt as j,Rt as k,qt as l,I as m,$t as n,Ot as o,Mt as p,zt as q,Ut as r,kt as s,Ht as t,Vt as u,Nt as v,bt as w,Bt as x,Ft as y,Lt as z};
