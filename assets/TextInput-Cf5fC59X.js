import{j as r}from"./jsx-runtime-CLpGMVip.js";import{d as s}from"./styled-components.browser.esm-C1W4bV5D.js";import{C as m}from"./circle-alert-i5ESE61K.js";const u=s.div`
  position: relative;
  padding-top: 0.75rem;
`,f=s.span`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.sizes.fonts.xxs};
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`,l=s.label`
  position: absolute;
  top: 0.5rem;
  left: 0;
  right: 0.25rem;
  color: ${({theme:e})=>e.colors.textInputLabel};
  pointer-events: none;
  transition: all 0.2s ease;

  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,x=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,h=s.input`
  height: ${({theme:e})=>e.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem 0;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};

  ${({$hasIcon:e,$error:o})=>(e||o)&&"padding-right: 2rem;"}
  ${({$error:e,theme:o})=>e&&`border-bottom-color: ${o.colors.error};`}

  &:focus {
    ${({theme:e,$error:o})=>!o&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
    outline: none;
  }

  &:focus + ${l}, &:not(:placeholder-shown) + ${l} {
    top: -0.75rem;
    left: 0;
    font-size: ${({theme:e})=>e.sizes.fonts.xs};
    color: ${({theme:e})=>e.colors.textInputLabel};
  }

  &:disabled {
    background-color: transparent;
    border-bottom-color: ${({theme:e})=>e.colors.textInputDisabledBackground};
    cursor: not-allowed;
  }
`,g=s(m)`
  position: absolute;
  right: 0.5rem;
  color: ${({theme:e})=>e.colors.error};
  width: 1rem;
  pointer-events: none;
`,a=s.div`
  position: absolute;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  pointer-events: none;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${({theme:e})=>e.colors.textInputIcon};
  }
`,$=({className:e,id:o,label:n,type:p="text",error:t,disabled:d,icon:i,...c})=>r.jsxs(u,{className:e,children:[r.jsxs(x,{children:[r.jsx(h,{id:o,type:p,disabled:d,"aria-invalid":!!t,placeholder:" ","aria-describedby":t?`${o}-error`:void 0,$error:!!t,$hasIcon:!!i||!!t,...t?{"aria-errormessage":`${o}-error`}:{},...n?{"aria-label":n}:{},...c}),n&&r.jsx(l,{htmlFor:o,children:n}),i&&r.jsx(a,{children:i}),t&&r.jsx(a,{children:r.jsx(g,{})})]}),t&&r.jsx(f,{id:`${o}-error`,children:t})]});$.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["InputHTMLAttributes"]};export{$ as T};
