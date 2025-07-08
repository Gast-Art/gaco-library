import{j as e}from"./jsx-runtime-CLpGMVip.js";import{d as t}from"./styled-components.browser.esm-DnH8uv-2.js";import{S as i}from"./Spinner-xLrCEoRn.js";import{B as s,I as a}from"./info-BBH6Osln.js";const m=t.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({theme:r})=>r.zIndices.LoadingOverlay};

  color: white;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 1rem;
  }
`,l=t(i)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`,d=({children:r,info:o,error:n})=>e.jsxs(m,{children:[!n&&!o&&e.jsx(l,{}),n&&e.jsxs(e.Fragment,{children:[e.jsx(s,{})," ",n]}),o&&e.jsxs(e.Fragment,{children:[e.jsx(a,{})," ",o]}),r]});d.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay",props:{info:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""}},composes:["PropsWithChildren"]};export{d as L};
