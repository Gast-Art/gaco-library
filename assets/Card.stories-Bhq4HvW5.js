import{j as s}from"./jsx-runtime-CLpGMVip.js";import{r as m}from"./index-CZMpeKRu.js";import{l as t,d}from"./styled-components.browser.esm-BT5p091k.js";import"./light-DKji_che.js";import{a as g}from"./PageTitle-DkNJ-TT7.js";const i={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},$={xs:(...e)=>t`
    @media (min-width: ${i.xs}) {
      ${t(...e)};
    }
  `,sm:(...e)=>t`
    @media (min-width: ${i.sm}) {
      ${t(...e)};
    }
  `,md:(...e)=>t`
    @media (min-width: ${i.md}) {
      ${t(...e)};
    }
  `,lg:(...e)=>t`
    @media (min-width: ${i.lg}) {
      ${t(...e)};
    }
  `,xl:(...e)=>t`
    @media (min-width: ${i.xl}) {
      ${t(...e)};
    }
  `,xxl:(...e)=>t`
    @media (min-width: ${i.xxl}) {
      ${t(...e)};
    }
  `},w=d.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;
  height: 100%;

  flex: 1;
  padding: 1rem 1.5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  border-radius: ${({theme:e})=>e.sizes.borderRadius};
`,C=d.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${$.md`
      max-height: none;
  `}
`,j=d(g)`
  margin-top: 0;
`,n=Object.assign({},{Title:j,Content:C}),p=({children:e,...f})=>{let a,l;const u=m.Children.toArray(e).filter(r=>typeof r=="string"?!0:m.isValidElement(r)?r.type===n.Title?(a=r,!1):r.type===n.Content?(l=r,!1):!0:!1);return s.jsxs(w,{...f,children:[a,u,l]})};p.__docgenInfo={description:"",methods:[],displayName:"Card"};const _={title:"Molecules/Card",render:({children:e})=>s.jsxs(p,{children:[s.jsx(n.Title,{children:"This is a title"}),s.jsx(n.Content,{children:"This is content for a card. Lorum fucking ipsum bitches."}),e]}),decorators:[e=>s.jsx("div",{style:{width:"320px"},children:s.jsx(e,{})})]},o={args:{children:"This is the children of the card"}};var c,x,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is the children of the card'
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,_ as default};
