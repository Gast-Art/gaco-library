import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as f}from"./index-CZMpeKRu.js";import{l as t,d as s}from"./styled-components.browser.esm-BT5p091k.js";import"./light-DNsJRV0f.js";import{L as c}from"./LoadingOverlay-D3iA43K6.js";import{b as g}from"./Typography-CKtTZVRN.js";const r={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},C={xs:(...e)=>t`
    @media (min-width: ${r.xs}) {
      ${t(...e)};
    }
  `,sm:(...e)=>t`
    @media (min-width: ${r.sm}) {
      ${t(...e)};
    }
  `,md:(...e)=>t`
    @media (min-width: ${r.md}) {
      ${t(...e)};
    }
  `,lg:(...e)=>t`
    @media (min-width: ${r.lg}) {
      ${t(...e)};
    }
  `,xl:(...e)=>t`
    @media (min-width: ${r.xl}) {
      ${t(...e)};
    }
  `,xxl:(...e)=>t`
    @media (min-width: ${r.xxl}) {
      ${t(...e)};
    }
  `},y=s.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;

  padding: 1rem 1.5rem;
  overflow: hidden;

  display: flex;
  gap: 1rem;

  border-radius: ${({theme:e})=>e.sizes.borderRadius};
`,h=s.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,$=s.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${C.md`
      max-height: none;
  `}
`,w=s(g)`
  margin-top: 0;
`,v=s.div``,b=s.div``,i=Object.assign({},{Title:w,Content:$,LeftColumn:v,RightColumn:b}),T=({children:e,loading:o,...x})=>{let l,d,m,p;const u=f.Children.toArray(e).filter(n=>typeof n=="string"?!0:f.isValidElement(n)?n.type===i.Title?(l=n,!1):n.type===i.Content?(d=n,!1):n.type===i.LeftColumn?(m=n,!1):n.type===i.RightColumn?(p=n,!1):!0:!1);return a.jsxs(y,{...x,children:[o&&a.jsx(c,{children:typeof o=="string"?o:void 0}),m,a.jsxs(h,{children:[l,d,u]}),p]})};T.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""}},composes:["PropsWithChildren"]};export{T as C,i as a,y as b};
