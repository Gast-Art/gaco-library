import{j as o}from"./jsx-runtime-CLpGMVip.js";import{r as f}from"./index-CZMpeKRu.js";import{l as t,d as i}from"./styled-components.browser.esm-BT5p091k.js";import"./light-4jK9e_LT.js";import{L as c}from"./LoadingOverlay-D3iA43K6.js";import{b as g}from"./Typography-ThQ2eIx8.js";const s={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},C={xs:(...e)=>t`
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
  `},y=i.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;

  padding: 1rem 1.5rem;
  overflow: hidden;

  display: flex;
  gap: 1rem;

  border-radius: ${({theme:e})=>e.sizes.borderRadius};
`,h=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,$=i.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${C.md`
      max-height: none;
  `}
`,v=i(g)`
  margin-top: 0;
`,w=i.div``,b=i.div``,n=Object.assign({},{Title:v,Content:$,LeftColumn:w,RightColumn:b}),T=({children:e,loading:a,...x})=>{let l,d,m,p;const u=f.Children.toArray(e).filter(r=>typeof r=="string"?!0:f.isValidElement(r)?r.type===n.Title?(l=r,!1):r.type===n.Content?(d=r,!1):r.type===n.LeftColumn?(m=r,!1):r.type===n.RightColumn?(p=r,!1):!0:!1);return o.jsxs(y,{...x,children:[a&&o.jsx(c,{children:a}),m,o.jsxs(h,{children:[l,d,u]}),p]})};T.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};export{T as C,n as a,y as b};
