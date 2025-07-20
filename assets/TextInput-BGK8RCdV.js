import{j as t}from"./jsx-runtime-DPtPVAOg.js";import{d as s}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as u}from"./circle-alert-C-cAHhHG.js";const x=s.div`
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
`,g=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,c=s(u)`
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
    transition: color 0.2s ease;
    color: ${({theme:e})=>e.colors.textInputBorder};
  }

  ${c} {
    color: ${({theme:e})=>e.colors.error};
  }
`,h=s.input`
  height: ${({theme:e})=>e.sizes.formControl};
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.textInputBorder};
  background-color: transparent;
  padding: 0.25rem 0;
  width: 100%;
  font-size: ${({theme:e})=>e.sizes.fonts.md};
  transition: border-color 0.2s ease;

  ${({$hasIcon:e,$error:o})=>(e||o)&&"padding-right: 2rem;"}
  ${({$error:e,theme:o})=>e&&`border-bottom-color: ${o.colors.error};`}

  &:focus {
    ${({theme:e,$error:o})=>!o&&`border-bottom-color: ${e.colors.textInputBorderFocus};`}
    outline: none;
    & ~ ${a} svg {
      color: ${({theme:e})=>e.colors.textInputBorderFocus};
    }
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
`,$=({className:e,id:o,label:n,type:d="text",error:r,disabled:p,icon:i,...m})=>t.jsxs(x,{className:e,children:[t.jsxs(g,{children:[t.jsx(h,{id:o,type:d,disabled:p,"aria-invalid":!!r,placeholder:" ","aria-describedby":r?`${o}-error`:void 0,$error:!!r,$hasIcon:!!i||!!r,...r?{"aria-errormessage":`${o}-error`}:{},...n?{"aria-label":n}:{},...m}),n&&t.jsx(l,{htmlFor:o,children:n}),i&&t.jsx(a,{children:i}),r&&t.jsx(a,{children:t.jsx(c,{})})]}),r&&t.jsx(f,{id:`${o}-error`,children:r})]});$.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["InputHTMLAttributes"]};export{$ as T};
