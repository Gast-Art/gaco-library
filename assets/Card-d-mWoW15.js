import{j as m}from"./jsx-runtime-CLpGMVip.js";import{r as p}from"./index-CZMpeKRu.js";import{l as t,d as i}from"./styled-components.browser.esm-BT5p091k.js";import"./light-62K-jGsB.js";import{b as u}from"./Typography-wHrdrdFw.js";const s={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},c={xs:(...e)=>t`
    @media (min-width: ${s.xs}) {
      ${t(...e)};
    }
  `,sm:(...e)=>t`
    @media (min-width: ${s.sm}) {
      ${t(...e)};
    }
  `,md:(...e)=>t`
    @media (min-width: ${s.md}) {
      ${t(...e)};
    }
  `,lg:(...e)=>t`
    @media (min-width: ${s.lg}) {
      ${t(...e)};
    }
  `,xl:(...e)=>t`
    @media (min-width: ${s.xl}) {
      ${t(...e)};
    }
  `,xxl:(...e)=>t`
    @media (min-width: ${s.xxl}) {
      ${t(...e)};
    }
  `},g=i.div`
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
`,C=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,h=i.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${c.md`
      max-height: none;
  `}
`,$=i(u)`
  margin-top: 0;
`,y=i.div``,w=i.div``,n=Object.assign({},{Title:$,Content:h,LeftColumn:y,RightColumn:w}),v=({children:e,...x})=>{let o,a,l,d;const f=p.Children.toArray(e).filter(r=>typeof r=="string"?!0:p.isValidElement(r)?r.type===n.Title?(o=r,!1):r.type===n.Content?(a=r,!1):r.type===n.LeftColumn?(l=r,!1):r.type===n.RightColumn?(d=r,!1):!0:!1);return m.jsxs(g,{...x,children:[l,m.jsxs(C,{children:[o,a,f]}),d]})};v.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["PropsWithChildren"]};export{v as C,n as a,g as b};
