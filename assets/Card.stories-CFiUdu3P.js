import{j as t}from"./jsx-runtime-CLpGMVip.js";import{B as f}from"./Button-Bv04RrkI.js";import{r as x}from"./index-CZMpeKRu.js";import{l as r,d as o}from"./styled-components.browser.esm-BT5p091k.js";import"./light-DKji_che.js";import{a as b}from"./PageTitle-DkNJ-TT7.js";import"./Spinner-CTzpbX4O.js";const n={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},R={xs:(...e)=>r`
    @media (min-width: ${n.xs}) {
      ${r(...e)};
    }
  `,sm:(...e)=>r`
    @media (min-width: ${n.sm}) {
      ${r(...e)};
    }
  `,md:(...e)=>r`
    @media (min-width: ${n.md}) {
      ${r(...e)};
    }
  `,lg:(...e)=>r`
    @media (min-width: ${n.lg}) {
      ${r(...e)};
    }
  `,xl:(...e)=>r`
    @media (min-width: ${n.xl}) {
      ${r(...e)};
    }
  `,xxl:(...e)=>r`
    @media (min-width: ${n.xxl}) {
      ${r(...e)};
    }
  `},k=o.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;
  height: 100%;

  flex: 1;
  padding: 1rem 1.5rem;
  overflow: hidden;

  display: flex;
  gap: 1rem;

  border-radius: ${({theme:e})=>e.sizes.borderRadius};
`,I=o.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,D=o.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${R.md`
      max-height: none;
  `}
`,E=o(b)`
  margin-top: 0;
`,_=o.div``,A=o.div``,i=Object.assign({},{Title:E,Content:D,LeftColumn:_,RightColumn:A}),c=({children:e,...L})=>{let m,h,u,p;const w=x.Children.toArray(e).filter(s=>typeof s=="string"?!0:x.isValidElement(s)?s.type===i.Title?(m=s,!1):s.type===i.Content?(h=s,!1):s.type===i.LeftColumn?(u=s,!1):s.type===i.RightColumn?(p=s,!1):!0:!1);return t.jsxs(k,{...L,children:[u,t.jsxs(I,{children:[m,h,w]}),p]})};c.__docgenInfo={description:"",methods:[],displayName:"Card"};const F={title:"Molecules/Card",render:({children:e})=>t.jsxs(c,{children:[t.jsx(i.Title,{children:"This is a title"}),t.jsx(i.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e]}),decorators:[e=>t.jsx("div",{style:{width:"480px"},children:t.jsx(e,{})})]},a={args:{children:"This is the children of the card"}},l={render:({children:e})=>t.jsxs(c,{children:[t.jsx(i.LeftColumn,{children:t.jsx("img",{src:"https://picsum.photos/72",alt:"placeholder"})}),t.jsx(i.Title,{children:"This is a title"}),t.jsx(i.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e]}),args:{children:"This is the children of the card"}},d={render:({children:e})=>t.jsxs(c,{children:[t.jsx(i.Title,{children:"This is a title"}),t.jsx(i.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),t.jsx(i.RightColumn,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[t.jsx(f,{variant:"default",children:"Button 1"}),t.jsx(f,{variant:"outline",children:"Button 2"})]})}),e]})};var C,g,T;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var j,v,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var $,y,B;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const G=["Default","AvatarInLeftColumn","ButtonsInRightColumn"];export{l as AvatarInLeftColumn,d as ButtonsInRightColumn,a as Default,G as __namedExportsOrder,F as default};
