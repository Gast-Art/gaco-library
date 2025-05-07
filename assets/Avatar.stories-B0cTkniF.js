import{j as o}from"./jsx-runtime-CLpGMVip.js";import{r as d}from"./index-CR__hKHy.js";import{c as C,P as m,u as k,a as S}from"./index-C4TypmrF.js";import{d as p}from"./styled-components.browser.esm-DnH8uv-2.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";var f="Avatar",[E,O]=C(f),[R,w]=E(f),L=d.forwardRef((a,t)=>{const{__scopeAvatar:i,...e}=a,[s,r]=d.useState("idle");return o.jsx(R,{scope:i,imageLoadingStatus:s,onImageLoadingStatusChange:r,children:o.jsx(m.span,{...e,ref:t})})});L.displayName=f;var j="AvatarImage",_=d.forwardRef((a,t)=>{const{__scopeAvatar:i,src:e,onLoadingStatusChange:s=()=>{},...r}=a,c=w(j,i),n=F(e,r.referrerPolicy),l=k(g=>{s(g),c.onImageLoadingStatusChange(g)});return S(()=>{n!=="idle"&&l(n)},[n,l]),n==="loaded"?o.jsx(m.img,{...r,ref:t,src:e}):null});_.displayName=j;var y="AvatarFallback",I=d.forwardRef((a,t)=>{const{__scopeAvatar:i,delayMs:e,...s}=a,r=w(y,i),[c,n]=d.useState(e===void 0);return d.useEffect(()=>{if(e!==void 0){const l=window.setTimeout(()=>n(!0),e);return()=>window.clearTimeout(l)}},[e]),c&&r.imageLoadingStatus!=="loaded"?o.jsx(m.span,{...s,ref:t}):null});I.displayName=y;function F(a,t){const[i,e]=d.useState("idle");return S(()=>{if(!a){e("error");return}let s=!0;const r=new window.Image,c=n=>()=>{s&&e(n)};return e("loading"),r.onload=c("loaded"),r.onerror=c("error"),r.src=a,t&&(r.referrerPolicy=t),()=>{s=!1}},[a,t]),i}var M=L,N=_,P=I;const v=p(M)`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
`,$=p(N)`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
`,T=p(P)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({theme:a})=>a.colors.mutedBg};
`,b=({delayMs:a=1e3,...t})=>o.jsx(T,{...t,delayMs:a,children:t.children});b.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback",props:{delayMs:{defaultValue:{value:"1000",computed:!1},required:!1}}};const z={title:"Atoms/Avatar",component:v,render:a=>o.jsxs(v,{children:[o.jsx($,{src:"https://i.pravatar.cc/40"}),o.jsx(b,{children:"LC"})]}),decorators:[a=>o.jsx("div",{style:{width:"320px"},children:o.jsx(a,{})})]},u={};var A,x,h;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(h=(x=u.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const H=["Default"];export{u as Default,H as __namedExportsOrder,z as default};
