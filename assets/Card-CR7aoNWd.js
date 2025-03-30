import{j as d}from"./jsx-runtime-CLpGMVip.js";import{r as c}from"./index-CR__hKHy.js";import{l as s,d as i}from"./styled-components.browser.esm-BuGJ70dT.js";import"./light-Bu9FOo5e.js";import{L as y}from"./LoadingOverlay-By8rFo9W.js";import{b as z}from"./Typography-CBbdXGUB.js";import{B as C}from"./ButtonGroup-Cs_83fjQ.js";const r={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},a={xs:(...e)=>s`
    @media (min-width: ${r.xs}) {
      ${s(...e)};
    }
  `,sm:(...e)=>s`
    @media (min-width: ${r.sm}) {
      ${s(...e)};
    }
  `,md:(...e)=>s`
    @media (min-width: ${r.md}) {
      ${s(...e)};
    }
  `,lg:(...e)=>s`
    @media (min-width: ${r.lg}) {
      ${s(...e)};
    }
  `,xl:(...e)=>s`
    @media (min-width: ${r.xl}) {
      ${s(...e)};
    }
  `,xxl:(...e)=>s`
    @media (min-width: ${r.xxl}) {
      ${s(...e)};
    }
  `};var w=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(w||{});const v=i.div`
  position: relative;
  background-color: ${({theme:e})=>e.colors.contentBg};
  box-shadow: ${({theme:e})=>e.shadows.card};
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  border-radius: ${({theme:e})=>e.sizes.borderRadius};

  ${({$size:e,theme:t})=>{switch(e){case"sm":return s`
          font-size: ${t.sizes.fonts.sm};
          padding: 0.5rem;
          h3 {
            font-size: ${t.sizes.fonts.sm};
          }
          ${a.md`
            padding: 0.75rem;
            h3 {
              font-size: ${t.sizes.fonts.md};
            }
          `}
        `;case"md":default:return s`
          padding: 0.75rem;
          font-size: ${t.sizes.fonts.md};
          h3 {
            font-size: ${t.sizes.fonts.md};
          }
          ${a.md`
            padding: 1rem;
            h3 {
              font-size: ${t.sizes.fonts.lg};
            }
          `}
        `;case"lg":return s`
          padding: 1.5rem;
          font-size: ${t.sizes.fonts.md};
          h3 {
            font-size: ${t.sizes.fonts.xl};
          }
          ${a.md`
            padding: 2rem;
            h3 {
             font-size: ${t.sizes.fonts.xxl};
            }
          `}
        `}}}
`,h=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,b=i.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${a.md`
    max-height: none;
`}
`,T=i(z)`
  margin-top: 0;
`,j=i.div``,q=i.div``,L=i(C)`
  justify-content: space-between;
  margin-top: 1rem;
`,o=Object.assign({},{Title:T,Content:b,LeftColumn:j,RightColumn:q,Actions:L}),R=({children:e,loading:t,size:x="md",...g})=>{let m,l,f,p,u;const $=c.Children.toArray(e).filter(n=>typeof n=="string"?!0:c.isValidElement(n)?n.type===o.Title?(m=n,!1):n.type===o.Content?(l=n,!1):n.type===o.LeftColumn?(p=n,!1):n.type===o.RightColumn?(u=n,!1):n.type===o.Actions?(f=n,!1):!0:!1);return d.jsxs(v,{$size:x,...g,children:[t&&d.jsx(y,{children:typeof t=="string"?t:void 0}),p,d.jsxs(h,{children:[m,l,f,$]}),u]})};R.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},size:{required:!1,tsType:{name:"CardSize"},description:"",defaultValue:{value:"CardSize.md",computed:!0}}},composes:["PropsWithChildren"]};export{R as C,o as a,w as b,v as c};
