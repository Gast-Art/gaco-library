import{j as r}from"./jsx-runtime-CLpGMVip.js";import{B as m}from"./Badge-B1wlehD1.js";import{B as c}from"./Button-CLcXjLYD.js";import{d as p}from"./styled-components.browser.esm-BT5p091k.js";import{b as u,C,a as o}from"./Card-rIllF3fq.js";import"./index-CZMpeKRu.js";import"./Spinner-CTzpbX4O.js";import"./light-DNsJRV0f.js";import"./LoadingOverlay-D3iA43K6.js";import"./Typography-CKtTZVRN.js";const f=e=>r.jsxs(C,{onClick:e.onClick,className:e.className,children:[e.title&&r.jsx(o.Title,{children:e.title}),e.content&&r.jsx(o.Content,{children:e.content}),e.rightColumn&&r.jsx(o.RightColumn,{children:e.rightColumn}),e.leftColumn&&r.jsx(o.LeftColumn,{children:e.leftColumn})]}),h=p.div`
  > ${u} {
    border-radius: 0;
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayLighter};

    &:first-of-type {
      border-top-left-radius: ${({theme:e})=>e.sizes.borderRadius};
      border-top-right-radius: ${({theme:e})=>e.sizes.borderRadius};
    }

    &:last-of-type {
      border-bottom-left-radius: ${({theme:e})=>e.sizes.borderRadius};
      border-bottom-right-radius: ${({theme:e})=>e.sizes.borderRadius};
      border: 0;
    }
  }
`,l=({children:e,cards:t})=>r.jsxs(h,{children:[t==null?void 0:t.map(s=>r.jsx(f,{...s},s.id)),e]});l.__docgenInfo={description:"",methods:[],displayName:"CardList",props:{cards:{required:!1,tsType:{name:"Array",elements:[{name:"CardProps"}],raw:"CardProps[]"},description:""},columns:{required:!1,tsType:{name:"number"},description:""}},composes:["PropsWithChildren"]};const x=e=>{const t=[];for(let s=0;s<e;s++)t.push({id:s,title:`Card ${s}`,content:`This is card ${s}'s content. Lorum fucking ipsum. Dolores sit amet.`,rightColumn:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[r.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[r.jsx("p",{style:{fontSize:10},children:"Data 1/1/25"}),r.jsx(m,{variant:"success",children:"Success"})]}),r.jsx(c,{variant:"outline",children:"Action"})]})});return t},B={title:"Molecules/CardList",component:l,decorators:[e=>r.jsx("div",{style:{width:"480px"},children:r.jsx(e,{})})]},i={args:{cards:x(5)}};var n,a,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    cards: generateCards(5)
  }
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,B as default};
