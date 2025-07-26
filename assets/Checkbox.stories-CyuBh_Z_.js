import{j as D}from"./jsx-runtime-DPtPVAOg.js";import{r as S}from"./index-CR__hKHy.js";import{C as u}from"./Checkbox-CVbBfk_f.js";import"./styled-components.browser.esm-DnH8uv-2.js";const A={title:"Atoms/Checkbox",component:u,args:{label:"Default Checkbox",checked:!1,disabled:!1}},e={},r={args:{checked:!0,label:"Checked Checkbox"}},a={args:{disabled:!0,label:"Disabled Checkbox"}},s={render:i=>{const[x,g]=S.useState(!1);return D.jsx(u,{...i,checked:x,onChange:f=>g(f.target.checked),label:"Controlled Checkbox"})}};var o,c,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(c=e.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var d,n,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Checked Checkbox'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var h,m,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Checkbox'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var k,C,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Checkbox>) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} label="Controlled Checkbox" />;
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const O=["Default","Checked","Disabled","Controlled"];export{r as Checked,s as Controlled,e as Default,a as Disabled,O as __namedExportsOrder,A as default};
