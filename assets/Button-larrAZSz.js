import{j as l}from"./jsx-runtime-CLpGMVip.js";import{r as p}from"./index-CR__hKHy.js";import{d as s,l as r}from"./styled-components.browser.esm-DnH8uv-2.js";import{S as $}from"./Spinner-xLrCEoRn.js";const t=s($)`
  margin-right: 0.5rem;
`,w={default:r`
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
    background-color: transparent;
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
    background-color: transparent;
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
  `},k={sm:r`
    height: 1.5rem;
    padding: 0 0.75rem;
    svg {
      height: 0.75rem;
      width: 0.75rem;
    }
  `,default:r`
    height: ${({theme:e})=>e.sizes.formControl};
    padding: 0 1rem;
    svg {
      height: 1rem;
      width: 1rem;
    }
  `,lg:r`
    height: 2.5rem;
    padding: 0 2rem;
    svg {
      height: 1.25rem;
      width: 1.25rem;
    }
  `,icon:r`
    height: 2.25rem;
    width: 2.25rem;
  `},x=s.button`
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
  ${({$variant:e="default"})=>w[e]}
  ${({$size:e="default"})=>k[e]}

  ${({$icon:e})=>e&&r`
      padding: 0 0.5rem;
    `}
`,z=s.input`
  display: none;
`,f=p.forwardRef(({loading:e=!1,disabled:d,onFileChange:c,icon:u,type:n,variant:g,size:h,...o},b)=>{const a=p.useRef(null),v=i=>{c&&c(i.target.files)},y=i=>{var m;n==="file"&&a.current&&a.current.click(),(m=o.onClick)==null||m.call(o,i)};return l.jsxs(x,{ref:b,disabled:e||d,onClick:y,$icon:!!u,$variant:g,$size:h,...o,type:n,children:[u,n==="file"&&l.jsx(z,{ref:a,type:"file",onChange:v,disabled:e||d}),e&&l.jsx(t,{size:1})," ",o.children]})});f.displayName="Button";f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonVariants",elements:[{name:"literal",value:"default"},{name:"literal",value:"outline"},{name:"literal",value:"ghost"},{name:"literal",value:"destructive"}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof buttonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"default"},{name:"literal",value:"lg"},{name:"literal",value:"icon"}]},description:""},onFileChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset' | 'file'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'file'"}]},description:""}},composes:["Omit"]};export{f as B};
