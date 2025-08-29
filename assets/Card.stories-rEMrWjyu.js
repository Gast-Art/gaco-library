import{j as r}from"./jsx-runtime-DPtPVAOg.js";import{B as m}from"./Button-D-arCGtF.js";import{C as h,a as s,b as H}from"./Card-BnGRrTyE.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-DnH8uv-2.js";import"./Spinner-BGsYflau.js";import"./light-DG7axscF.js";import"./media-BIK856jo.js";import"./ButtonGroup-Bo3_J-q_.js";import"./LoadingOverlay-BbpqPbfZ.js";import"./info-BBH6Osln.js";import"./createLucideIcon-BOMFEwrg.js";import"./Typography-CraxGhaZ.js";const er={title:"Molecules/Card",render:({children:e,...G})=>r.jsxs(h,{...G,children:[r.jsx(s.Title,{children:"This is a title"}),r.jsx(s.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e]}),decorators:[e=>r.jsx("div",{style:{width:"480px"},children:r.jsx(e,{})})]},n={args:{children:"This is the children of the card"}},o={args:{size:H.sm}},i={render:({children:e})=>r.jsxs(h,{children:[r.jsx(s.LeftColumn,{children:r.jsx("img",{src:"https://picsum.photos/72",alt:"placeholder"})}),r.jsx(s.Title,{children:"This is a title"}),r.jsx(s.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e]}),args:{children:"This is the children of the card"}},t={render:({children:e})=>r.jsxs(h,{children:[r.jsx(s.Title,{children:"This is a title"}),r.jsx(s.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r.jsx(s.RightColumn,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[r.jsx(m,{variant:"default",children:"Button 1"}),r.jsx(m,{variant:"outline",children:"Button 2"})]})}),e]})},a={render:({children:e})=>r.jsxs(h,{children:[r.jsx(s.Title,{children:"This is a title"}),r.jsx(s.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),r.jsxs(s.Actions,{children:[r.jsx(m,{children:"Save"}),r.jsx(m,{variant:"outline",children:"Cancel"})]}),e]})},c={args:{...t.args,loading:"Loading some stuff..."}},d={args:{...t.args,error:"Error loading some stuff..."}},l={args:{...t.args,success:"Successfully loaded some stuff..."}},u={args:{...t.args,info:"Info about some stuff..."}};var p,f,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,S,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: CardSize.sm
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var T,j,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var I,L,v;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var b,R,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(R=a.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var y,A,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    loading: 'Loading some stuff...'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var z,D,W;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    error: 'Error loading some stuff...'
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,w,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    success: 'Successfully loaded some stuff...'
  }
}`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var O,q,F;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...ButtonsInRightColumn.args,
    info: 'Info about some stuff...'
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const tr=["Default","Small","AvatarInLeftColumn","ButtonsInRightColumn","WithActions","IsLoading","IsError","IsSuccess","IsInfo"];export{i as AvatarInLeftColumn,t as ButtonsInRightColumn,n as Default,d as IsError,u as IsInfo,c as IsLoading,l as IsSuccess,o as Small,a as WithActions,tr as __namedExportsOrder,er as default};
