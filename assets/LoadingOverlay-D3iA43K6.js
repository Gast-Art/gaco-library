import{j as r}from"./jsx-runtime-CLpGMVip.js";import{d as t}from"./styled-components.browser.esm-BT5p091k.js";import{S as e}from"./Spinner-CTzpbX4O.js";const i=t.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({theme:o})=>o.zIndicies.LoadingOverlay};

  color: white;
  background-color: black;
  opacity: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,n=t(e)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`,a=({children:o})=>r.jsxs(i,{children:[r.jsx(n,{}),o]});a.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay"};export{a as L};
