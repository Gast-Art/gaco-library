import{j as r}from"./jsx-runtime-CLpGMVip.js";import{B as u}from"./Button-ns02yJlA.js";import{C as m,a as e,b as O}from"./Card-mVQPaIIX.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-DnH8uv-2.js";import"./Spinner-xLrCEoRn.js";import"./light-C_YelSUh.js";import"./media-BIK856jo.js";import"./ButtonGroup-Bo3_J-q_.js";import"./LoadingOverlay-D1q4hoGD.js";import"./info-BBH6Osln.js";import"./createLucideIcon-BOMFEwrg.js";import"./Typography-BnbRQYey.js";const Z={title:"Molecules/Card",render:({children:s,...M})=>r.jsxs(m,{...M,children:[r.jsx(e.Title,{children:"This is a title"}),r.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),s]}),decorators:[s=>r.jsx("div",{style:{width:"480px"},children:r.jsx(s,{})})]},n={args:{children:"This is the children of the card"}},o={args:{size:O.sm}},i={render:({children:s})=>r.jsxs(m,{children:[r.jsx(e.LeftColumn,{children:r.jsx("img",{src:"https://picsum.photos/72",alt:"placeholder"})}),r.jsx(e.Title,{children:"This is a title"}),r.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),s]}),args:{children:"This is the children of the card"}},t={render:({children:s})=>r.jsxs(m,{children:[r.jsx(e.Title,{children:"This is a title"}),r.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r.jsx(e.RightColumn,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[r.jsx(u,{variant:"default",children:"Button 1"}),r.jsx(u,{variant:"outline",children:"Button 2"})]})}),s]})},a={render:({children:s})=>r.jsxs(m,{children:[r.jsx(e.Title,{children:"This is a title"}),r.jsx(e.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r.jsxs(e.Actions,{children:[r.jsx(u,{children:"Save"}),r.jsx(u,{variant:"outline",children:"Cancel"})]}),s]})},c={args:{...t.args,loading:"Loading some stuff..."}},d={args:{...t.args,error:"Error loading some stuff..."}},l={args:{...t.args,info:"Info about some stuff..."}};var h,p,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(C=(p=n.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var f,g,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: CardSize.sm
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,T,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var B,I,L;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var v,b,R;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var k,A,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    loading: 'Loading some stuff...'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var y,z,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    error: 'Error loading some stuff...'
  }
}`,...(D=(z=d.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,_,w;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    info: 'Info about some stuff...'
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const $=["Default","Small","AvatarInLeftColumn","ButtonsInRightColumn","WithActions","IsLoading","IsError","IsInfo"];export{i as AvatarInLeftColumn,t as ButtonsInRightColumn,n as Default,d as IsError,l as IsInfo,c as IsLoading,o as Small,a as WithActions,$ as __namedExportsOrder,Z as default};
