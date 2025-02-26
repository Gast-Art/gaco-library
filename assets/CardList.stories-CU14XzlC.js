import{j as r}from"./jsx-runtime-CLpGMVip.js";import{B as m}from"./Badge-DqqKHfyU.js";import{B as u}from"./Button-CLcXjLYD.js";import{d as c}from"./styled-components.browser.esm-BT5p091k.js";import{b as p,C as f,a as s}from"./Card-BfPxtOZN.js";import"./index-CZMpeKRu.js";import"./Spinner-CTzpbX4O.js";import"./light-62K-jGsB.js";import"./Typography-wHrdrdFw.js";const C=e=>r.jsxs(f,{onClick:e.onClick,className:e.className,children:[e.title&&r.jsx(s.Title,{children:e.title}),e.content&&r.jsx(s.Content,{children:e.content}),e.rightColumn&&r.jsx(s.RightColumn,{children:e.rightColumn}),e.leftColumn&&r.jsx(s.LeftColumn,{children:e.leftColumn})]}),x=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  > ${p} {
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
`,l=({cards:e,columns:i=1})=>r.jsx(x,{children:e==null?void 0:e.map(t=>r.jsx(C,{...t},t.id))});l.__docgenInfo={description:"",methods:[],displayName:"CardList",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"CardProps"}],raw:"CardProps[]"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const h=e=>{const i=[];for(let t=0;t<e;t++)i.push({id:t,title:`Card ${t}`,content:`This is card ${t}'s content. Lorum fucking ipsum. Dolores sit amet.`,rightColumn:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[r.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[r.jsx("p",{style:{fontSize:10},children:"Data 1/1/25"}),r.jsx(m,{variant:"success",children:"Success"})]}),r.jsx(u,{variant:"outline",children:"Action"})]})});return i},D={title:"Molecules/CardList",component:l,decorators:[e=>r.jsx("div",{style:{width:"480px"},children:r.jsx(e,{})})]},o={args:{cards:h(5)}};var n,a,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    cards: generateCards(5)
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const B=["Default"];export{o as Default,B as __namedExportsOrder,D as default};
