import{j as s}from"./jsx-runtime-CLpGMVip.js";import{b as u,d as j,l as C}from"./light-DBn3_0ZE.js";const b=({color:e,name:t})=>s.jsxs("div",{style:{padding:"10px",margin:"10px",textAlign:"center"},children:[s.jsxs("div",{style:{marginBottom:"5px",color:"#000"},children:[t,": ",e]}),s.jsx("div",{style:{backgroundColor:e,padding:"20px",color:"#fff"}})]}),f=({theme:e,themeName:t})=>s.jsxs("div",{children:[s.jsxs("h2",{children:[t," Theme"]}),Object.keys(e.colors).map(m=>s.jsx(b,{color:e.colors[m],name:m},m))]}),v={title:"Theme Colors"},c=e=>s.jsx(f,{...e}),r=c.bind({});r.args={theme:u,themeName:"Base"};const a=c.bind({});a.args={theme:j,themeName:"Dark"};const o=c.bind({});o.args={theme:C,themeName:"Light"};var i,d,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <ThemeColors {...args} />",...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var n,l,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <ThemeColors {...args} />",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,x,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"args => <ThemeColors {...args} />",...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const D=["BaseTheme","DarkTheme","LightTheme"];export{r as BaseTheme,a as DarkTheme,o as LightTheme,D as __namedExportsOrder,v as default};
