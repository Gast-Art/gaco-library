import{j as s}from"./jsx-runtime-CLpGMVip.js";import{d as I}from"./styled-components.browser.esm-BuGJ70dT.js";import{c as i}from"./createLucideIcon-BOMFEwrg.js";import"./index-CR__hKHy.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],b=i("Ban",$);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],N=i("CircleAlert",E);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B=i("CircleCheck",H);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],l=i("Info",W),q=I.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  margin: 0.5rem 0;
  color: white;
  background-color: ${({type:e,theme:r})=>{switch(e){case"error":return r.colors.error;case"warning":return r.colors.warning;case"success":return r.colors.success;case"info":return r.colors.info;default:return r.colors.info}}};
  border-bottom: 4px solid
    ${({type:e,theme:r})=>{switch(e){case"error":return r.colors.errorHover;case"warning":return r.colors.warningHover;case"success":return r.colors.successHover;case"info":return r.colors.infoHover;default:return r.colors.infoHover}}};

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      color: white;
    }
  }
`,z=I.span`
  margin-right: 1rem;
`,S=({type:e,className:r,children:A})=>{const C=()=>{switch(e){case"error":return s.jsx(b,{});case"warning":return s.jsx(N,{});case"success":return s.jsx(B,{});case"info":return s.jsx(l,{});default:return s.jsx(l,{})}};return s.jsxs(q,{type:e,className:r,children:[s.jsx(z,{children:C()}),A]})};S.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!0,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'info'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const L={title:"Atoms/Alert",component:S,decorators:[e=>s.jsx("div",{style:{width:"320px"},children:s.jsx(e,{})})]},o={args:{children:'This is a default alert. It defaults to "info"'}},n={args:{children:"This is an error alert. Something went wrong!",type:"error"}},a={args:{children:"This is a success alert. Everything went right!",type:"success"}},c={args:{children:"This is a warning alert. Be careful!",type:"warning"}},t={args:{children:"This is an info alert. Just so you know.",type:"info"}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This is a default alert. It defaults to "info"'
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is an error alert. Something went wrong!',
    type: 'error'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a success alert. Everything went right!',
    type: 'success'
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,k,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is a warning alert. Be careful!',
    type: 'warning'
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,_,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'This is an info alert. Just so you know.',
    type: 'info'
  }
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const O=["Default","Error","Success","Warning","Info"];export{o as Default,n as Error,t as Info,a as Success,c as Warning,O as __namedExportsOrder,L as default};
