import{j as e}from"./jsx-runtime-DPtPVAOg.js";import{d as s}from"./styled-components.browser.esm-DnH8uv-2.js";import{S as a}from"./Spinner-BGsYflau.js";import{B as m,I as l}from"./info-BBH6Osln.js";import{c}from"./createLucideIcon-BOMFEwrg.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],p=c("Check",d),g=s.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({theme:n})=>n.zIndices.LoadingOverlay};

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
`,b=s(a)`
  margin-bottom: 1rem;

  border-color: white;
  border-right-color: transparent;
`,f=({children:n,info:r,error:o,success:t,className:i})=>e.jsxs(g,{className:i,children:[!o&&!r&&!t&&e.jsx(b,{}),o&&e.jsxs(e.Fragment,{children:[e.jsx(m,{})," ",o]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(l,{})," ",r]}),t&&e.jsxs(e.Fragment,{children:[e.jsx(p,{})," ",t]}),n]});f.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay",props:{info:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},success:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};export{f as L};
