import{j as l}from"./jsx-runtime-CLpGMVip.js";import{l as o,d as s}from"./styled-components.browser.esm-BT5p091k.js";const n={default:o`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.primary};
    color: ${({theme:r})=>r.colors.primaryForeground};
    &:hover {
      background-color: ${({theme:r})=>r.colors.primaryHover};
    }
  `,outline:o`
    border: 1px solid ${({theme:r})=>r.colors.primary};
    color: ${({theme:r})=>r.colors.primary};
  `,error:o`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.error};
    color: #fff;
    &:hover {
      background-color: ${({theme:r})=>r.colors.errorHover};
    }
  `,success:o`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.success};
    color: #fff;
    &:hover {
      background-color: ${({theme:r})=>r.colors.successHover};
    }
  `,warning:o`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.warning};
    color: #fff;
    &:hover {
      background-color: ${({theme:r})=>r.colors.warningHover};
    }
  `},t=s.div`
  display: inline-flex;
  align-items: center;
  padding: 0.3125rem 0.725rem;
  border-radius: ${({theme:r})=>r.sizes.borderRadius};
  font-size: ${({theme:r})=>r.sizes.fonts.xs};
  font-weight: 600;
  transition: all 0.2s;
  outline: none;

  ${({variant:r})=>n[r]}
`,c=({className:r,variant:e="default",...a})=>l.jsx(t,{className:r,variant:e,...a});c.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof badgeStyles",elements:[{name:"literal",value:"default"},{name:"literal",value:"outline"},{name:"literal",value:"error"},{name:"literal",value:"success"},{name:"literal",value:"warning"}]},description:"",defaultValue:{value:"'default'",computed:!1}}},composes:["HTMLAttributes"]};export{c as B};
