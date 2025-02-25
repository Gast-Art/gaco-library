import{j as o}from"./jsx-runtime-CLpGMVip.js";import{d as i}from"./styled-components.browser.esm-BT5p091k.js";import{S as c}from"./Spinner-CTzpbX4O.js";import"./index-CZMpeKRu.js";const d=i.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({theme:e})=>e.zIndicies.LoadingOverlay};

  color: white;
  background-color: black;
  opacity: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,l=i(c)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`,s=({children:e})=>o.jsxs(d,{children:[o.jsx(l,{}),e]});s.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay"};const x={title:"Molecules/LoadingOverlay",component:s,decorators:[e=>o.jsx("div",{style:{width:"640px",height:"640px"},children:o.jsx(e,{})})]},r={args:{children:"Loading..."}};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Loading...'
  }
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const h=["Default"];export{r as Default,h as __namedExportsOrder,x as default};
