import{j as i}from"./jsx-runtime-CLpGMVip.js";import{m as o,d as t}from"./styled-components.browser.esm-DDmRYb9g.js";const n=o`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,s=t.div`
  display: inline-block;
  border: 4px solid ${({theme:r})=>{var e;return(e=r==null?void 0:r.colors)==null?void 0:e.text}};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${n} 1.5s linear infinite;
  height: ${({size:r})=>`${r}rem`};
  width: ${({size:r})=>`${r}rem`};
  position: relative;
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
`,a=({size:r=2,className:e})=>i.jsx(s,{size:r,className:e,role:"status",children:"Loading..."});a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{a as S};
