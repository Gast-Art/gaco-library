import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as n}from"./index-CZMpeKRu.js";import{l as e,d as i}from"./styled-components.browser.esm-BT5p091k.js";import{S as d}from"./Spinner-CTzpbX4O.js";const c={default:e`
    background-color: ${({theme:o})=>o.colors.primary};
    color: ${({theme:o})=>o.colors.primaryForeground};
    &:hover {
      background-color: ${({theme:o})=>o.colors.primaryHover};
    }
  `,outline:e`
    border: 1px solid ${({theme:o})=>o.colors.primary};
    color: ${({theme:o})=>o.colors.primary};
    &:hover {
      border-color: ${({theme:o})=>o.colors.primaryHover};
      color: ${({theme:o})=>o.colors.primaryHover};
    }
  `,ghost:e`
    background-color: 'transparent';
    color: ${({theme:o})=>o.colors.primary};
    box-shadow: none;
    &:hover {
      color: ${({theme:o})=>o.colors.primaryHover};
    }
  `,destructive:e`
    background-color: ${({theme:o})=>o.colors.error};
    color: ${({theme:o})=>o.colors.errorForeground};
    &:hover {
      background-color: ${({theme:o})=>o.colors.errorHover};
    }
  `},u={default:e`
    height: ${({theme:o})=>o.sizes.formControl};
    padding: 0 1rem;
  `,lg:e`
    height: 2.5rem;
    padding: 0 2rem;
  `,icon:e`
    height: 2.25rem;
    width: 2.25rem;
  `},m=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  border-radius: ${({theme:o})=>o.sizes.borderRadius};
  box-shadow: ${({theme:o})=>o.shadows.default};
  font-size: ${({theme:o})=>o.sizes.fonts.sm};
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({variant:o="default"})=>c[o]}
  ${({size:o="default"})=>u[o]}
`,a=n.forwardRef(({loading:o=!1,disabled:l,...r},s)=>t.jsxs(m,{ref:s,disabled:o||l,...r,children:[o&&t.jsx(d,{size:1,className:"mr-2"})," ",r.children]}));a.displayName="Button";a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonVariants",elements:[{name:"literal",value:"default"},{name:"literal",value:"outline"},{name:"literal",value:"ghost"},{name:"literal",value:"destructive"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonSizes",elements:[{name:"literal",value:"default"},{name:"literal",value:"lg"},{name:"literal",value:"icon"}]},description:""}},composes:["ButtonHTMLAttributes"]};export{a as B};
