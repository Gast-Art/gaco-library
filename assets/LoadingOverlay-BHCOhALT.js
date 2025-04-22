import{j as r}from"./jsx-runtime-CLpGMVip.js";import{d as i}from"./styled-components.browser.esm-DnH8uv-2.js";import{S as n}from"./Spinner-xLrCEoRn.js";import{B as s,I as a}from"./info-BBH6Osln.js";const d=i.div`
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

  svg {
    margin-bottom: 1rem;
  }
`,m=i(n)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`,p=({children:e,info:o,error:t})=>r.jsxs(d,{children:[!t&&!o&&r.jsx(m,{}),t&&r.jsxs(r.Fragment,{children:[r.jsx(s,{})," ",t]}),o&&r.jsxs(r.Fragment,{children:[r.jsx(a,{})," ",o]}),e]});p.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay",props:{info:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};export{p as L};
