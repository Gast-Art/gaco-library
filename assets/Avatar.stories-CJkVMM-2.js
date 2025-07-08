import{j as o}from"./jsx-runtime-CLpGMVip.js";import{r as d}from"./index-CXuOLBzL.js";import{c as b,P as m,u as y,a as S}from"./index-isTM0hVz.js";import{d as g}from"./styled-components.browser.esm-C1W4bV5D.js";import"./index-D6pnrm5x.js";import"./index-9CAilbNR.js";var p="Avatar",[E,V]=b(p),[R,w]=E(p),L=d.forwardRef((a,r)=>{const{__scopeAvatar:i,...e}=a,[s,t]=d.useState("idle");return o.jsx(R,{scope:i,imageLoadingStatus:s,onImageLoadingStatusChange:t,children:o.jsx(m.span,{...e,ref:r})})});L.displayName=p;var j="AvatarImage",C=d.forwardRef((a,r)=>{const{__scopeAvatar:i,src:e,onLoadingStatusChange:s=()=>{},...t}=a,c=w(j,i),n=k(e,t.referrerPolicy),l=y(f=>{s(f),c.onImageLoadingStatusChange(f)});return S(()=>{n!=="idle"&&l(n)},[n,l]),n==="loaded"?o.jsx(m.img,{...t,ref:r,src:e}):null});C.displayName=j;var I="AvatarFallback",_=d.forwardRef((a,r)=>{const{__scopeAvatar:i,delayMs:e,...s}=a,t=w(I,i),[c,n]=d.useState(e===void 0);return d.useEffect(()=>{if(e!==void 0){const l=window.setTimeout(()=>n(!0),e);return()=>window.clearTimeout(l)}},[e]),c&&t.imageLoadingStatus!=="loaded"?o.jsx(m.span,{...s,ref:r}):null});_.displayName=I;function k(a,r){const[i,e]=d.useState("idle");return S(()=>{if(!a){e("error");return}let s=!0;const t=new window.Image,c=n=>()=>{s&&e(n)};return e("loading"),t.onload=c("loaded"),t.onerror=c("error"),t.src=a,r&&(t.referrerPolicy=r),()=>{s=!1}},[a,r]),i}var M=L,N=C,P=_;const v=g(M)`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
`,F=g(N)`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
`,$=g(P)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({theme:a})=>a.colors.mutedBg};
`,q={title:"Atoms/Avatar",component:v,render:a=>o.jsxs(v,{children:[o.jsx(F,{src:"https://i.pravatar.cc/40"}),o.jsx($,{children:"LC"})]}),decorators:[a=>o.jsx("div",{style:{width:"320px"},children:o.jsx(a,{})})]},u={};var A,x,h;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(h=(x=u.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const z=["Default"];export{u as Default,z as __namedExportsOrder,q as default};
