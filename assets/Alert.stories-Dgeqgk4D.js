import{j as s}from"./jsx-runtime-DPtPVAOg.js";import{d as S}from"./styled-components.browser.esm-DnH8uv-2.js";import{I as i,B as E}from"./info-BBH6Osln.js";import{c as _}from"./createLucideIcon-BOMFEwrg.js";import{C as b}from"./circle-alert-C-cAHhHG.js";import"./index-CR__hKHy.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B=_("CircleCheck",H),W=S.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
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
`,$=S.span`
  margin-right: 1rem;
`,k=({type:e,className:r,children:C})=>{const A=()=>{switch(e){case"error":return s.jsx(E,{});case"warning":return s.jsx(b,{});case"success":return s.jsx(B,{});case"info":return s.jsx(i,{});default:return s.jsx(i,{})}};return s.jsxs(W,{type:e,className:r,children:[s.jsx($,{children:A()}),C]})};k.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!0,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'info'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const L={title:"Atoms/Alert",component:k,decorators:[e=>s.jsx("div",{style:{width:"320px"},children:s.jsx(e,{})})]},o={args:{children:'This is a default alert. It defaults to "info"'}},n={args:{children:"This is an error alert. Something went wrong!",type:"error"}},a={args:{children:"This is a success alert. Everything went right!",type:"success"}},c={args:{children:"This is a warning alert. Be careful!",type:"warning"}},t={args:{children:"This is an info alert. Just so you know.",type:"info"}};var l,u,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'This is a default alert. It defaults to "info"'
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is an error alert. Something went wrong!',
    type: 'error'
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a success alert. Everything went right!',
    type: 'success'
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,x,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'This is a warning alert. Be careful!',
    type: 'warning'
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var T,j,I;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'This is an info alert. Just so you know.',
    type: 'info'
  }
}`,...(I=(j=t.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const O=["Default","Error","Success","Warning","Info"];export{o as Default,n as Error,t as Info,a as Success,c as Warning,O as __namedExportsOrder,L as default};
