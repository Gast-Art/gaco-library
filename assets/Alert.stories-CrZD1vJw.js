import{j as o}from"./jsx-runtime-CLpGMVip.js";import{d as E}from"./styled-components.browser.esm-BfDsmhIA.js";import{r as a}from"./index-B-SYruCi.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=(...e)=>e.filter((r,s,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=a.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:m="",children:t,iconNode:B,...H},W)=>a.createElement("svg",{ref:W,...D,width:r,height:r,stroke:e,strokeWidth:n?Number(s)*24/Number(r):s,className:S("lucide",m),...H},[...B.map(([L,R])=>a.createElement(L,R)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,r)=>{const s=a.forwardRef(({className:n,...m},t)=>a.createElement(J,{ref:t,iconNode:r,className:S(`lucide-${q(e)}`,n),...m}));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],O=p("Ban",M);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],K=p("CircleAlert",z);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Z=p("CircleCheck",P);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],g=p("Info",F),G=E.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  margin: 0.5rem 0;
  color: white;
  background-color: ${({type:e,theme:r})=>{switch(e){case"error":return r.colors.error;case"warning":return r.colors.warning;case"success":return r.colors.success;case"info":return r.colors.info;default:return r.colors.info}}};
  border-bottom: 4px solid
    ${({type:e,theme:r})=>{switch(e){case"error":return r.colors.errorHover;case"warning":return r.colors.warningHover;case"success":return r.colors.successHover;case"info":return r.colors.infoHover;default:return r.colors.infoHover}}};
`,Q=E.span`
  margin-right: 1rem;
`,N=({type:e,children:r})=>{const s=()=>{switch(e){case"error":return o.jsx(O,{});case"warning":return o.jsx(K,{});case"success":return o.jsx(Z,{});case"info":return o.jsx(g,{});default:return o.jsx(g,{})}};return o.jsxs(G,{type:e,children:[o.jsx(Q,{children:s()}),r]})};N.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!0,tsType:{name:"union",raw:"'error' | 'warning' | 'success' | 'info'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:""}},composes:["PropsWithChildren"]};const Y={title:"Atoms/Alert",component:N,decorators:[e=>o.jsx("div",{style:{width:"320px"},children:o.jsx(e,{})})]},c={args:{children:'This is a default alert. It defaults to "info"'}},i={args:{children:"This is an error alert. Something went wrong!",type:"error"}},l={args:{children:"This is a success alert. Everything went right!",type:"success"}},u={args:{children:"This is a warning alert. Be careful!",type:"warning"}},d={args:{children:"This is an info alert. Just so you know.",type:"info"}};var f,h,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a default alert. It defaults to "info"'
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var w,x,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'This is an error alert. Something went wrong!',
    type: 'error'
  }
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var v,j,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'This is a success alert. Everything went right!',
    type: 'success'
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var _,$,b;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'This is a warning alert. Be careful!',
    type: 'warning'
  }
}`,...(b=($=u.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var A,I,T;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'This is an info alert. Just so you know.',
    type: 'info'
  }
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const rr=["Default","Error","Success","Warning","Info"];export{c as Default,i as Error,d as Info,l as Success,u as Warning,rr as __namedExportsOrder,Y as default};
