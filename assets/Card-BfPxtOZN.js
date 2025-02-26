import{j as m}from"./jsx-runtime-CLpGMVip.js";import{r as p}from"./index-CZMpeKRu.js";import{l as t,d as n}from"./styled-components.browser.esm-BT5p091k.js";import"./light-62K-jGsB.js";import{b as u}from"./Typography-wHrdrdFw.js";const i={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},c={xs:(...e)=>t`
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
  `},g=n.div`
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
`,C=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,h=n.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${c.md`
      max-height: none;
  `}
`,$=n(u)`
  margin-top: 0;
`,y=n.div``,w=n.div``,s=Object.assign({},{Title:$,Content:h,LeftColumn:y,RightColumn:w}),v=({children:e,...x})=>{let o,a,l,d;const f=p.Children.toArray(e).filter(r=>typeof r=="string"?!0:p.isValidElement(r)?r.type===s.Title?(o=r,!1):r.type===s.Content?(a=r,!1):r.type===s.LeftColumn?(l=r,!1):r.type===s.RightColumn?(d=r,!1):!0:!1);return m.jsxs(g,{...x,children:[l,m.jsxs(C,{children:[o,a,f]}),d]})};v.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren"]};export{v as C,s as a,g as b};
