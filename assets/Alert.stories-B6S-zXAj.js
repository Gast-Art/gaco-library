import{j as s}from"./jsx-runtime-CLpGMVip.js";import{d as I}from"./styled-components.browser.esm-DnH8uv-2.js";import{c as i}from"./createLucideIcon-BOMFEwrg.js";import"./index-CR__hKHy.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],$=i("Ban",C);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],E=i("CircleAlert",b);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],N=i("CircleCheck",H);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],l=i("Info",B),W=I.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  margin: 0.5rem 0;
  color: white;
  background-color: ${({type:e,theme:r})=>{switch(e){case"error":return r.colors.error;case"warning":return r.colors.warning;case"success":return r.colors.success;case"info":return r.colors.info;default:return r.colors.info}}};
  border-bottom: 4px solid
    ${({type:e,theme:r})=>{switch(e){case"error":return r.colors.errorHover;case"warning":return r.colors.warningHover;case"success":return r.colors.successHover;case"info":return r.colors.infoHover;default:return r.colors.infoHover}}};
`,q=I.span`
  margin-right: 1rem;
`,S=({type:e,children:r})=>{const A=()=>{switch(e){case"error":return s.jsx($,{});case"warning":return s.jsx(E,{});case"success":return s.jsx(N,{});case"info":return s.jsx(l,{});default:return s.jsx(l,{})}};return s.jsxs(W,{type:e,children:[s.jsx(q,{children:A()}),r]})};S.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!0,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'info'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:""}},composes:["PropsWithChildren"]};const R={title:"Atoms/Alert",component:S,decorators:[e=>s.jsx("div",{style:{width:"320px"},children:s.jsx(e,{})})]},o={args:{children:'This is a default alert. It defaults to "info"'}},n={args:{children:"This is an error alert. Something went wrong!",type:"error"}},c={args:{children:"This is a success alert. Everything went right!",type:"success"}},a={args:{children:"This is a warning alert. Be careful!",type:"warning"}},t={args:{children:"This is an info alert. Just so you know.",type:"info"}};var u,d,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'This is a default alert. It defaults to "info"'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is an error alert. Something went wrong!',
    type: 'error'
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'This is a success alert. Everything went right!',
    type: 'success'
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,k,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is a warning alert. Be careful!',
    type: 'warning'
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var _,j,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'This is an info alert. Just so you know.',
    type: 'info'
  }
}`,...(T=(j=t.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const L=["Default","Error","Success","Warning","Info"];export{o as Default,n as Error,t as Info,c as Success,a as Warning,L as __namedExportsOrder,R as default};
