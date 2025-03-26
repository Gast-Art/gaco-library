import{j as r}from"./jsx-runtime-CLpGMVip.js";import{d as t}from"./styled-components.browser.esm-BuGJ70dT.js";import{c as i}from"./createLucideIcon-BOMFEwrg.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],a=i("Calendar",c),p=t.div`
  position: relative;
  padding-top: 0.75rem;
`,d=t.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,l=t.label`
  position: absolute;
  left: 0.25rem;
  top: -0.75rem;
  color: ${({theme:e})=>e.colors.textInputLabel};
  font-size: ${({theme:e})=>e.sizes.fonts.xs};
  pointer-events: none;
`,m=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,f=t.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({theme:e,$error:o})=>o?e.colors.error:e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem;
  font-size: ${({theme:e})=>e.sizes.fonts.md};
  font-family: ${({theme:e})=>e.fonts.body};

  &:focus {
    border-bottom-color: ${({theme:e,$error:o})=>o?e.colors.error:e.colors.textInputBorderFocus};
    outline: none;
  }

  appearance: none; /* Remove browser default icon */
  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
`,u=t.div`
  position: absolute;
  right: 0.5rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({$error:e,theme:o})=>e&&`color: ${o.colors.error};`}
`,x=({id:e,label:o,error:n,...s})=>r.jsxs(p,{children:[r.jsxs(m,{children:[r.jsx(f,{id:e,type:"date",$error:!!n,...s}),r.jsx(u,{$error:!!n,children:r.jsx(a,{size:16})}),o&&r.jsx(l,{htmlFor:e,children:o})]}),n&&r.jsx(d,{children:n})]});x.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}},composes:["InputHTMLAttributes"]};export{x as D};
