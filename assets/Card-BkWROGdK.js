import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as x}from"./index-CZMpeKRu.js";import{l as t,d as i}from"./styled-components.browser.esm-BT5p091k.js";import"./light-DNsJRV0f.js";import{L as g}from"./LoadingOverlay-D3iA43K6.js";import{b as C}from"./Typography-CKtTZVRN.js";const s={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},d={xs:(...e)=>t`
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
  `},$=i.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;

  padding: 0.75rem;
  overflow: hidden;

  display: flex;
  gap: 1rem;

  border-radius: ${({theme:e})=>e.sizes.borderRadius};

  ${d.md`
      padding: 1rem;
  `}
`,y=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,h=i.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${d.md`
      max-height: none;
  `}
`,w=i(C)`
  margin-top: 0;
  font-size: ${({theme:e})=>e.sizes.fonts.md};

  ${d.md`
      font-size: ${({theme:e})=>e.sizes.fonts.lg};
  `};
`,v=i.div``,b=i.div``,r=Object.assign({},{Title:w,Content:h,LeftColumn:v,RightColumn:b}),T=({children:e,loading:o,...u})=>{let l,m,p,f;const c=x.Children.toArray(e).filter(n=>typeof n=="string"?!0:x.isValidElement(n)?n.type===r.Title?(l=n,!1):n.type===r.Content?(m=n,!1):n.type===r.LeftColumn?(p=n,!1):n.type===r.RightColumn?(f=n,!1):!0:!1);return a.jsxs($,{...u,children:[o&&a.jsx(g,{children:typeof o=="string"?o:void 0}),p,a.jsxs(y,{children:[l,m,c]}),f]})};T.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""}},composes:["PropsWithChildren"]};export{T as C,r as a,$ as b};
