import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as c}from"./Button-DPUe0Ftz.js";import{C as d,a as t,b as k}from"./Card-C0E2Xl5y.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-DnH8uv-2.js";import"./Spinner-xLrCEoRn.js";import"./light-SvT5IF7k.js";import"./ButtonGroup-Bo3_J-q_.js";import"./LoadingOverlay-rSPh688n.js";import"./info-BBH6Osln.js";import"./createLucideIcon-BOMFEwrg.js";import"./Typography-CsgGy_ye.js";const q={title:"Molecules/Card",render:({children:r,...b})=>e.jsxs(d,{...b,children:[e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r]}),decorators:[r=>e.jsx("div",{style:{width:"480px"},children:e.jsx(r,{})})]},i={args:{children:"This is the children of the card"}},s={args:{size:k.sm}},n={render:({children:r})=>e.jsxs(d,{children:[e.jsx(t.LeftColumn,{children:e.jsx("img",{src:"https://picsum.photos/72",alt:"placeholder"})}),e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r]}),args:{children:"This is the children of the card"}},o={render:({children:r})=>e.jsxs(d,{children:[e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e.jsx(t.RightColumn,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(c,{variant:"default",children:"Button 1"}),e.jsx(c,{variant:"outline",children:"Button 2"})]})}),r]})},a={render:({children:r})=>e.jsxs(d,{children:[e.jsx(t.Title,{children:"This is a title"}),e.jsx(t.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e.jsxs(t.Actions,{children:[e.jsx(c,{children:"Save"}),e.jsx(c,{variant:"outline",children:"Cancel"})]}),r]})};var l,h,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,p,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: CardSize.sm
  }
}`,...(C=(p=s.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var f,x,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,g,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var B,v,L;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    children
  }) => <Card>
      <CardSections.Title>This is a title</CardSections.Title>
      <CardSections.Content>This is content for a card. Lorum fucking ipsum bitches.</CardSections.Content>
      <CardSections.Actions>
        <Button>Save</Button>
        <Button variant="outline">Cancel</Button>
      </CardSections.Actions>
      {children}
    </Card>
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const F=["Default","Small","AvatarInLeftColumn","ButtonsInRightColumn","WithActions"];export{n as AvatarInLeftColumn,o as ButtonsInRightColumn,i as Default,s as Small,a as WithActions,F as __namedExportsOrder,q as default};
