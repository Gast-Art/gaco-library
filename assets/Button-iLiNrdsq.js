import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as c}from"./index-CR__hKHy.js";import{d as l,l as o}from"./styled-components.browser.esm-BuGJ70dT.js";import{S as d}from"./Spinner-ClvM1fzh.js";const e=l(d)`
  margin-right: 0.5rem;
`,u={default:o`
    background-color: ${({theme:r})=>r.colors.primary};
    color: ${({theme:r})=>r.colors.primaryForeground};
    &:hover {
      background-color: ${({theme:r})=>r.colors.primaryHover};
    }
    ${e} {
      border-color: ${({theme:r})=>r.colors.primaryForeground};
      border-right-color: transparent;
    }
  `,outline:o`
    border: 1px solid ${({theme:r})=>r.colors.primary};
    color: ${({theme:r})=>r.colors.primary};
    &:hover {
      background-color: ${({theme:r})=>r.colors.primary}10;
      border-color: ${({theme:r})=>r.colors.primaryHover};
      color: ${({theme:r})=>r.colors.primaryHover};
    }
    ${e} {
      border-color: ${({theme:r})=>r.colors.primary};
      border-right-color: transparent;
    }
  `,ghost:o`
    background-color: 'transparent';
    color: ${({theme:r})=>r.colors.primary};
    box-shadow: none;
    &:hover {
      color: ${({theme:r})=>r.colors.primaryHover};
    }
    ${e} {
      border-color: ${({theme:r})=>r.colors.primary};
      border-right-color: transparent;
    }
  `,destructive:o`
    background-color: ${({theme:r})=>r.colors.error};
    color: ${({theme:r})=>r.colors.errorForeground};
    &:hover {
      background-color: ${({theme:r})=>r.colors.errorHover};
    }
    ${e} {
      border-color: ${({theme:r})=>r.colors.errorForeground};
      border-right-color: transparent;
    }
  `},m={sm:o`
    height: 1.5rem;
    padding: 0 0.75rem;
  `,default:o`
    height: ${({theme:r})=>r.sizes.formControl};
    padding: 0 1rem;
  `,lg:o`
    height: 2.5rem;
    padding: 0 2rem;
  `,icon:o`
    height: 2.25rem;
    width: 2.25rem;
  `},p=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  border-radius: ${({theme:r})=>r.sizes.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.default};
  font-size: ${({theme:r})=>r.sizes.fonts.sm};
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({variant:r="default"})=>u[r]}
  ${({size:r="default"})=>m[r]}
`,n=c.forwardRef(({loading:r=!1,disabled:s,...t},i)=>a.jsxs(p,{ref:i,disabled:r||s,...t,children:[r&&a.jsx(e,{size:1,className:"mr-2"})," ",t.children]}));n.displayName="Button";n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonVariants",elements:[{name:"literal",value:"default"},{name:"literal",value:"outline"},{name:"literal",value:"ghost"},{name:"literal",value:"destructive"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"default"},{name:"literal",value:"lg"},{name:"literal",value:"icon"}]},description:""}},composes:["ButtonHTMLAttributes"]};export{n as B};
