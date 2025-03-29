import{R as C,r as a}from"./index-CR__hKHy.js";import{c as G,e as h,S as O,u as $,f as J,P as j,b as T,a as Q}from"./index-r34T6LtO.js";import{j as m}from"./jsx-runtime-CLpGMVip.js";function W(e){const o=e+"CollectionProvider",[u,r]=G(o),[w,I]=u(o,{collectionRef:{current:null},itemMap:new Map}),b=f=>{const{scope:t,children:c}=f,d=C.useRef(null),n=C.useRef(new Map).current;return m.jsx(w,{scope:t,itemMap:n,collectionRef:d,children:c})};b.displayName=o;const g=e+"CollectionSlot",p=C.forwardRef((f,t)=>{const{scope:c,children:d}=f,n=I(g,c),s=h(t,n.collectionRef);return m.jsx(O,{ref:s,children:d})});p.displayName=g;const i=e+"CollectionItemSlot",E="data-radix-collection-item",F=C.forwardRef((f,t)=>{const{scope:c,children:d,...n}=f,s=C.useRef(null),S=h(t,s),x=I(i,c);return C.useEffect(()=>(x.itemMap.set(s,{ref:s,...n}),()=>void x.itemMap.delete(s))),m.jsx(O,{[E]:"",ref:S,children:d})});F.displayName=i;function v(f){const t=I(e+"CollectionConsumer",f);return C.useCallback(()=>{const d=t.collectionRef.current;if(!d)return[];const n=Array.from(d.querySelectorAll(`[${E}]`));return Array.from(t.itemMap.values()).sort((x,A)=>n.indexOf(x.ref.current)-n.indexOf(A.ref.current))},[t.collectionRef,t.itemMap])}return[{Provider:b,Slot:p,ItemSlot:F},v,r]}var X=a.createContext(void 0);function Z(e){const o=a.useContext(X);return e||o||"ltr"}var M="rovingFocusGroup.onEntryFocus",ee={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[N,L,te]=W(_),[oe,pe]=G(_,[te]),[ne,re]=oe(_),K=a.forwardRef((e,o)=>m.jsx(N.Provider,{scope:e.__scopeRovingFocusGroup,children:m.jsx(N.Slot,{scope:e.__scopeRovingFocusGroup,children:m.jsx(se,{...e,ref:o})})}));K.displayName=_;var se=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:u,orientation:r,loop:w=!1,dir:I,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:p,onEntryFocus:i,preventScrollOnEntryFocus:E=!1,...F}=e,v=a.useRef(null),f=h(o,v),t=Z(I),[c=null,d]=$({prop:b,defaultProp:g,onChange:p}),[n,s]=a.useState(!1),S=J(i),x=L(u),A=a.useRef(!1),[V,P]=a.useState(0);return a.useEffect(()=>{const l=v.current;if(l)return l.addEventListener(M,S),()=>l.removeEventListener(M,S)},[S]),m.jsx(ne,{scope:u,orientation:r,dir:t,loop:w,currentTabStopId:c,onItemFocus:a.useCallback(l=>d(l),[d]),onItemShiftTab:a.useCallback(()=>s(!0),[]),onFocusableItemAdd:a.useCallback(()=>P(l=>l+1),[]),onFocusableItemRemove:a.useCallback(()=>P(l=>l-1),[]),children:m.jsx(j.div,{tabIndex:n||V===0?-1:0,"data-orientation":r,...F,ref:f,style:{outline:"none",...e.style},onMouseDown:T(e.onMouseDown,()=>{A.current=!0}),onFocus:T(e.onFocus,l=>{const Y=!A.current;if(l.target===l.currentTarget&&Y&&!n){const D=new CustomEvent(M,ee);if(l.currentTarget.dispatchEvent(D),!D.defaultPrevented){const y=x().filter(R=>R.focusable),H=y.find(R=>R.active),q=y.find(R=>R.id===c),z=[H,q,...y].filter(Boolean).map(R=>R.ref.current);B(z,E)}}A.current=!1}),onBlur:T(e.onBlur,()=>s(!1))})})}),k="RovingFocusGroupItem",U=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:u,focusable:r=!0,active:w=!1,tabStopId:I,...b}=e,g=Q(),p=I||g,i=re(k,u),E=i.currentTabStopId===p,F=L(u),{onFocusableItemAdd:v,onFocusableItemRemove:f}=i;return a.useEffect(()=>{if(r)return v(),()=>f()},[r,v,f]),m.jsx(N.ItemSlot,{scope:u,id:p,focusable:r,active:w,children:m.jsx(j.span,{tabIndex:E?0:-1,"data-orientation":i.orientation,...b,ref:o,onMouseDown:T(e.onMouseDown,t=>{r?i.onItemFocus(p):t.preventDefault()}),onFocus:T(e.onFocus,()=>i.onItemFocus(p)),onKeyDown:T(e.onKeyDown,t=>{if(t.key==="Tab"&&t.shiftKey){i.onItemShiftTab();return}if(t.target!==t.currentTarget)return;const c=ue(t,i.orientation,i.dir);if(c!==void 0){if(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)return;t.preventDefault();let n=F().filter(s=>s.focusable).map(s=>s.ref.current);if(c==="last")n.reverse();else if(c==="prev"||c==="next"){c==="prev"&&n.reverse();const s=n.indexOf(t.currentTarget);n=i.loop?ie(n,s+1):n.slice(s+1)}setTimeout(()=>B(n))}})})})});U.displayName=k;var ce={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ae(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ue(e,o,u){const r=ae(e.key,u);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ce[r]}function B(e,o=!1){const u=document.activeElement;for(const r of e)if(r===u||(r.focus({preventScroll:o}),document.activeElement!==u))return}function ie(e,o){return e.map((u,r)=>e[(o+r)%e.length])}var Ie=K,ve=U;export{ve as I,Ie as R,W as a,pe as c,Z as u};
