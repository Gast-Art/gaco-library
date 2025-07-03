import{j as d}from"./jsx-runtime-CLpGMVip.js";import{d as a}from"./styled-components.browser.esm-DnH8uv-2.js";import"./index-CR__hKHy.js";const i=a.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-row-gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;

  dt,
  dd {
    margin: 0;
    padding: 0 0 0.125rem;
    border-bottom: 1px ${({theme:e})=>e.colors.mutedBg} solid;
  }

  dd {
    font-weight: 500;
    padding-left: 0.5rem;
  }

  dt {
    padding: 0;
  }

  dt:last-of-type,
  dd:last-of-type {
    border-bottom: none;
  }
`,c={title:"Atoms/DetailsList",component:i,decorators:[e=>d.jsx("div",{style:{width:"320px",padding:"2rem",backgroundColor:"#fff"},children:d.jsx(e,{})})]},t={args:{children:d.jsxs(d.Fragment,{children:[d.jsx("dd",{children:"Item 1"}),d.jsx("dt",{children:"Detail 1"}),d.jsx("dd",{children:"Item 2"}),d.jsx("dt",{children:"Detail 2"}),d.jsx("dd",{children:"Item 3"}),d.jsx("dt",{children:"Detail 3"})]})}};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,c as default};
