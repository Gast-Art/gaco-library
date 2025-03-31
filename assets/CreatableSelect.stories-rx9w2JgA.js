import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r}from"./index-CR__hKHy.js";import{C as m}from"./CreatableSelect-BgPUkHKs.js";import"./styled-components.browser.esm-DnH8uv-2.js";import"./styles-RwF-f0z0.js";import"./createLucideIcon-BOMFEwrg.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";import"./DropdownMenu-dSMxwB9U.js";import"./index-bxkApRut.js";import"./circle-alert-C-cAHhHG.js";const y={title:"Atoms/CreatableSelect",component:m,decorators:[o=>a.jsx("div",{style:{width:"320px"},children:a.jsx(o,{})})]},v=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],x=o=>{const[c,n]=r.useState(),[u,O]=r.useState(v),b=e=>{const l={value:e,label:e};O(d=>[...d,l]),n(l)};return a.jsx(m,{...o,value:c,defaultInputValue:"test",onChange:e=>n(e),onCreateOption:b,options:u})},t={render:x,args:{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],label:"Select an option"}};var s,p,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }],
    label: 'Select an option'
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,y as default};
