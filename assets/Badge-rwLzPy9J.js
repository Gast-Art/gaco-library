import{j as n}from"./jsx-runtime-CLpGMVip.js";import{d as s,l as e}from"./styled-components.browser.esm-BuGJ70dT.js";const a=o=>({default:e`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.bg};
    color: ${({theme:r})=>r.colors.text};
    ${({theme:r})=>{if(o)return`
          cursor: pointer;
          &:hover {
            background-color: ${r.colors.grayLighter};
          }`}}
  `,primary:e`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.primary};
    color: ${({theme:r})=>r.colors.primaryForeground};
    ${({theme:r})=>{if(o)return`
          cursor: pointer;
          &:hover {
            background-color: ${r.colors.primaryHover};
          }`}}
  `,outline:e`
    border: 1px solid ${({theme:r})=>r.colors.primary};
    color: ${({theme:r})=>r.colors.primary};
  `,error:e`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.error};
    color: #fff;
    ${({theme:r})=>{if(o)return`
          cursor: pointer;
          &:hover {
            background-color: ${r.colors.errorHover};
          }`}}
  `,success:e`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.success};
    color: #fff;
    ${({theme:r})=>{if(o)return`
          cursor: pointer;
          &:hover {
            background-color: ${r.colors.errorHover};
          }`}}
  `,warning:e`
    border: transparent;
    background-color: ${({theme:r})=>r.colors.warning};
    color: #fff;
      ${({theme:r})=>{if(o)return`
          cursor: pointer;
          &:hover {
            background-color: ${r.colors.warningHover};
          }`}}}
  `}),c=s.div`
  display: inline-flex;
  align-items: center;
  padding: 0.3125rem 0.725rem;
  border-radius: ${({theme:o})=>o.sizes.borderRadius};
  font-size: ${({theme:o})=>o.sizes.fonts.xs};
  font-weight: 600;
  transition: all 0.2s;
  outline: none;

  ${({$variant:o,onClick:r})=>a(!!r)[o]}
`,i=({className:o,variant:r="default",...t})=>n.jsx(c,{className:o,$variant:r,...t});i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"ReturnType",elements:[{name:"badgeStyles"}],raw:"ReturnType<typeof badgeStyles>"},description:"",defaultValue:{value:"'default'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};export{i as B};
