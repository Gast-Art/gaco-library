import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as u}from"./index-CR__hKHy.js";import{l as s,d as r}from"./styled-components.browser.esm-BuGJ70dT.js";import"./light-Bu9FOo5e.js";import{L as $}from"./LoadingOverlay-By8rFo9W.js";import{b as z}from"./Typography-CBbdXGUB.js";const i={xs:"400px",sm:"600px",md:"900px",lg:"1280px",xl:"1440px",xxl:"1920px"},d={xs:(...e)=>s`
    @media (min-width: ${i.xs}) {
      ${s(...e)};
    }
  `,sm:(...e)=>s`
    @media (min-width: ${i.sm}) {
      ${s(...e)};
    }
  `,md:(...e)=>s`
    @media (min-width: ${i.md}) {
      ${s(...e)};
    }
  `,lg:(...e)=>s`
    @media (min-width: ${i.lg}) {
      ${s(...e)};
    }
  `,xl:(...e)=>s`
    @media (min-width: ${i.xl}) {
      ${s(...e)};
    }
  `,xxl:(...e)=>s`
    @media (min-width: ${i.xxl}) {
      ${s(...e)};
    }
  `};var C=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(C||{});const y=r.div`
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
          ${d.md`
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
          ${d.md`
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
          ${d.md`
            padding: 2rem;
            h3 {
             font-size: ${t.sizes.fonts.xxl};
            }
          `}
        `}}}
`,h=r.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,v=r.div`
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ${d.md`
    max-height: none;
`}
`,w=r(z)`
  margin-top: 0;
`,b=r.div``,T=r.div``,o=Object.assign({},{Title:w,Content:v,LeftColumn:b,RightColumn:T}),j=({children:e,loading:t,size:x="md",...c})=>{let m,l,f,p;const g=u.Children.toArray(e).filter(n=>typeof n=="string"?!0:u.isValidElement(n)?n.type===o.Title?(m=n,!1):n.type===o.Content?(l=n,!1):n.type===o.LeftColumn?(f=n,!1):n.type===o.RightColumn?(p=n,!1):!0:!1);return a.jsxs(y,{$size:x,...c,children:[t&&a.jsx($,{children:typeof t=="string"?t:void 0}),f,a.jsxs(h,{children:[m,l,g]}),p]})};j.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},size:{required:!1,tsType:{name:"CardSize"},description:"",defaultValue:{value:"CardSize.md",computed:!0}}},composes:["PropsWithChildren"]};export{j as C,o as a,C as b,y as c};
