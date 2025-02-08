import{j as t}from"./jsx-runtime-CLpGMVip.js";import{m as i,d as o}from"./styled-components.browser.esm-DDmRYb9g.js";const n=i`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,s=o.div`
  display: inline-block;
  border: 4px solid ${({theme:e})=>e.colors.text};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${n} 1.5s linear infinite;
  height: ${({size:e})=>`${e}rem`};
  width: ${({size:e})=>`${e}rem`};
  position: relative;
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
`,a=({size:e=2,className:r})=>t.jsx(s,{size:e,className:r,role:"status",children:"Loading..."});a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{a as S};
