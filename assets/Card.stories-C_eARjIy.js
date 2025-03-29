import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as c}from"./Button-iLiNrdsq.js";import{C as a,a as t,b as B}from"./Card-DBY7oVjy.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-BuGJ70dT.js";import"./Spinner-ClvM1fzh.js";import"./light-Bu9FOo5e.js";import"./LoadingOverlay-By8rFo9W.js";import"./Typography-CBbdXGUB.js";const A={title:"Molecules/Card",render:({children:r,...j})=>e.jsxs(a,{...j,children:[e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r]}),decorators:[r=>e.jsx("div",{style:{width:"480px"},children:e.jsx(r,{})})]},s={args:{children:"This is the children of the card"}},i={args:{size:B.sm}},n={render:({children:r})=>e.jsxs(a,{children:[e.jsx(t.LeftColumn,{children:e.jsx("img",{src:"https://picsum.photos/72",alt:"placeholder"})}),e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r]}),args:{children:"This is the children of the card"}},o={render:({children:r})=>e.jsxs(a,{children:[e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e.jsx(t.RightColumn,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(c,{variant:"default",children:"Button 1"}),e.jsx(c,{variant:"outline",children:"Button 2"})]})}),r]})};var d,l,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: CardSize.sm
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,f,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    children
  }) => <Card>
      <CardSections.LeftColumn>
        <img src="https://picsum.photos/72" alt="placeholder" />
      </CardSections.LeftColumn>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      {children}
    </Card>,
  args: {
    children: 'This is the children of the card'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,S,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    children
  }) => <Card>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      <CardSections.RightColumn>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <Button variant="default">Button 1</Button>
          <Button variant="outline">Button 2</Button>
        </div>
      </CardSections.RightColumn>
      {children}
    </Card>
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const E=["Default","Small","AvatarInLeftColumn","ButtonsInRightColumn"];export{n as AvatarInLeftColumn,o as ButtonsInRightColumn,s as Default,i as Small,E as __namedExportsOrder,A as default};
