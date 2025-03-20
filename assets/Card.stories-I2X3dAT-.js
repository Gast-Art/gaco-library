import{j as t}from"./jsx-runtime-CLpGMVip.js";import{B as a}from"./Button-b5uYjFCN.js";import{C as o,a as e}from"./Card-B71Zqe09.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-BuGJ70dT.js";import"./Spinner-ClvM1fzh.js";import"./light-DNsJRV0f.js";import"./LoadingOverlay-By8rFo9W.js";import"./Typography-BRpeQ2wu.js";const b={title:"Molecules/Card",render:({children:r})=>t.jsxs(o,{children:[t.jsx(e.Title,{children:"This is a title"}),t.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r]}),decorators:[r=>t.jsx("div",{style:{width:"480px"},children:t.jsx(r,{})})]},i={args:{children:"This is the children of the card"}},s={render:({children:r})=>t.jsxs(o,{children:[t.jsx(e.LeftColumn,{children:t.jsx("img",{src:"https://picsum.photos/72",alt:"placeholder"})}),t.jsx(e.Title,{children:"This is a title"}),t.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r]}),args:{children:"This is the children of the card"}},n={render:({children:r})=>t.jsxs(o,{children:[t.jsx(e.Title,{children:"This is a title"}),t.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),t.jsx(e.RightColumn,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[t.jsx(a,{variant:"default",children:"Button 1"}),t.jsx(a,{variant:"outline",children:"Button 2"})]})}),r]})};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,u,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,C,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const k=["Default","AvatarInLeftColumn","ButtonsInRightColumn"];export{s as AvatarInLeftColumn,n as ButtonsInRightColumn,i as Default,k as __namedExportsOrder,b as default};
