import{j as t}from"./jsx-runtime-CLpGMVip.js";import{d as o}from"./styled-components.browser.esm-DnH8uv-2.js";import"./index-CR__hKHy.js";const a=o.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
  width: max-content;

  dt,
  dd {
    margin: 0;
    padding: 0 0.5rem 0.125rem;
    border-bottom: 1px ${({theme:e})=>e.colors.mutedBg} solid;
  }

  dd {
    font-weight: 500;
  }

  dt:last-of-type,
  dd:last-of-type {
    border-bottom: none;
  }
`,c={title:"Atoms/DetailsList",component:a,decorators:[e=>t.jsx("div",{style:{width:"320px",padding:"2rem",backgroundColor:"#fff"},children:t.jsx(e,{})})]},d={args:{children:t.jsxs(t.Fragment,{children:[t.jsx("dd",{children:"Item 1"}),t.jsx("dt",{children:"Detail 1"}),t.jsx("dd",{children:"Item 2"}),t.jsx("dt",{children:"Detail 2"}),t.jsx("dd",{children:"Item 3"}),t.jsx("dt",{children:"Detail 3"})]})}};var r,s,n;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: <>
        <dd>Item 1</dd>
        <dt>Detail 1</dt>
        <dd>Item 2</dd>
        <dt>Detail 2</dt>
        <dd>Item 3</dd>
        <dt>Detail 3</dt>
      </>
  }
}`,...(n=(s=d.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const p=["Default"];export{d as Default,p as __namedExportsOrder,c as default};
