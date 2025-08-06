import{j as l}from"./jsx-runtime-DPtPVAOg.js";import{r as x}from"./index-CR__hKHy.js";import{S as O}from"./Select-CGXq-EO-.js";import"./react-select.esm-CFY3iZcI.js";import"./styles-D9iy3Ker.js";import"./createLucideIcon-BOMFEwrg.js";import"./index-D2e_E8nu.js";import"./index-CtmzRm2p.js";import"./DropdownMenu-7ceIgupj.js";import"./index-Ccna2XRG.js";import"./index-D1GhS0qO.js";import"./styled-components.browser.esm-DnH8uv-2.js";import"./circle-alert-C-cAHhHG.js";const C={title:"Atoms/Select",component:O,decorators:[a=>l.jsx("div",{style:{width:"320px"},children:l.jsx(a,{})})]},r=a=>{const[v,S]=x.useState();return l.jsx(O,{...a,value:v,onChange:g=>S(g)})},e={render:r,args:{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],label:"Select an option"}},n={render:r,args:{options:[{label:"Group 1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},{label:"Group 2",options:[{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}]}],label:"Select an option"}},o={render:r,args:{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],label:"Select an option",error:"This field is required"}};var t,p,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var s,u,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: [{
      label: 'Group 1',
      options: [{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }]
    }, {
      label: 'Group 2',
      options: [{
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }]
    }],
    label: 'Select an option'
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,b,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    label: 'Select an option',
    error: 'This field is required'
  }
}`,...(d=(b=o.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const R=["Default","GroupedOptions","WithError"];export{e as Default,n as GroupedOptions,o as WithError,R as __namedExportsOrder,C as default};
