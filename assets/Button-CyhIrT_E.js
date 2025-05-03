import{j as i}from"./jsx-runtime-CLpGMVip.js";import{r as m}from"./index-CR__hKHy.js";import{d as s,l as r}from"./styled-components.browser.esm-DnH8uv-2.js";import{S as b}from"./Spinner-xLrCEoRn.js";const t=s(b)`
  margin-right: 0.5rem;
`,y={default:r`
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.primaryForeground};
    &:hover {
      background-color: ${({theme:e})=>e.colors.primaryHover};
    }
    ${t} {
      border-color: ${({theme:e})=>e.colors.primaryForeground};
      border-right-color: transparent;
    }
  `,outline:r`
    border: 1px solid ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.primary};
    &:hover {
      background-color: ${({theme:e})=>e.colors.primary}10;
      border-color: ${({theme:e})=>e.colors.primaryHover};
      color: ${({theme:e})=>e.colors.primaryHover};
    }
    ${t} {
      border-color: ${({theme:e})=>e.colors.primary};
      border-right-color: transparent;
    }
  `,ghost:r`
    background-color: 'transparent';
    color: ${({theme:e})=>e.colors.primary};
    box-shadow: none;
    &:hover {
      color: ${({theme:e})=>e.colors.primaryHover};
    }
    ${t} {
      border-color: ${({theme:e})=>e.colors.primary};
      border-right-color: transparent;
    }
  `,destructive:r`
    background-color: ${({theme:e})=>e.colors.error};
    color: ${({theme:e})=>e.colors.errorForeground};
    &:hover {
      background-color: ${({theme:e})=>e.colors.errorHover};
    }
    ${t} {
      border-color: ${({theme:e})=>e.colors.errorForeground};
      border-right-color: transparent;
    }
  `},v={sm:r`
    height: 1.5rem;
    padding: 0 0.75rem;
  `,default:r`
    height: ${({theme:e})=>e.sizes.formControl};
    padding: 0 1rem;
  `,lg:r`
    height: 2.5rem;
    padding: 0 2rem;
  `,icon:r`
    height: 2.25rem;
    width: 2.25rem;
  `},$=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 0.5rem;
  border: none;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.default};
  font-size: ${({theme:e})=>e.sizes.fonts.sm};
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({variant:e="default"})=>y[e]}
  ${({size:e="default"})=>v[e]}

  svg {
    height: 1rem;
    width: 1rem;
  }
`,w=s.input`
  display: none;
`,p=m.forwardRef(({loading:e=!1,disabled:c,onFileChange:d,type:n,...o},f)=>{const l=m.useRef(null),g=a=>{d&&d(a.target.files)},h=a=>{var u;n==="file"&&l.current&&l.current.click(),(u=o.onClick)==null||u.call(o,a)};return i.jsxs($,{ref:f,disabled:e||c,onClick:h,...o,type:n,children:[n==="file"&&i.jsx(w,{ref:l,type:"file",onChange:g,disabled:e||c}),e&&i.jsx(t,{size:1,className:"mr-2"})," ",o.children]})});p.displayName="Button";p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonVariants",elements:[{name:"literal",value:"default"},{name:"literal",value:"outline"},{name:"literal",value:"ghost"},{name:"literal",value:"destructive"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"default"},{name:"literal",value:"lg"},{name:"literal",value:"icon"}]},description:""},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset' | 'file'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'file'"}]},description:""}},composes:["Omit"]};export{p as B};
