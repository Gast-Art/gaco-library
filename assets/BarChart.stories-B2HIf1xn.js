import{j as e}from"./jsx-runtime-CLpGMVip.js";import{n as g}from"./styled-components.browser.esm-DnH8uv-2.js";import{C as y,b as C,a as m}from"./Card-CA-c-Wry.js";import{g as f,B as c,X as u,Y as x,f as j,R as v,C as T,T as A,L as B}from"./generateCategoricalChart-BfGTlrHe.js";import"./index-CR__hKHy.js";import"./light-DNsJRV0f.js";import"./LoadingOverlay-C_HCXSLF.js";import"./Spinner-xLrCEoRn.js";import"./Typography-CjiBmtaC.js";import"./tiny-invariant-CopsF_GD.js";var $=f({chartName:"BarChart",GraphicalChild:c,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:u},{axisType:"yAxis",AxisComp:x}],formatAxisMap:j});const b=({active:a,payload:s,label:i,tooltipValueFormatter:o=t=>t.toString()})=>a&&s&&s.length?e.jsxs(y,{size:C.sm,children:[e.jsx(m.Title,{children:i}),e.jsx(m.Content,{children:s.map((t,r)=>e.jsx("div",{children:`${t.name}: ${o(t.value)}`},`item-${r}`))})]}):null,h=({data:a,showLegend:s,tooltipValueFormatter:i})=>{const o=g(),t=Object.keys(a[0]).filter(r=>r!=="name");return e.jsx(v,{width:"100%",height:"100%",children:e.jsxs($,{data:a,width:500,height:300,children:[e.jsx(T,{strokeDasharray:"3 3"}),e.jsx(u,{dataKey:"name"}),e.jsx(x,{}),e.jsx(A,{content:r=>e.jsx(b,{...r,tooltipValueFormatter:i})}),s&&e.jsx(B,{}),t.map(r=>e.jsx(c,{dataKey:r,fill:o.colors.primary},r))]})})};h.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"{ [key: string]: any }[]"},description:""},tooltipValueFormatter:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => string",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"string"}}},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""}}};const L={title:"Atoms/BarChart",component:h,decorators:[a=>e.jsx("div",{style:{padding:"2rem",backgroundColor:"#fff",height:"480px",width:"480px"},children:e.jsx(a,{})})]},n={args:{tooltipValueFormatter:a=>`$${a}`,data:[{name:"Jan",sales:4e3},{name:"Feb",sales:3e3},{name:"Mar",sales:2e3}]}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tooltipValueFormatter: (value: any) => \`$\${value}\`,
    data: [{
      name: 'Jan',
      sales: 4000
    }, {
      name: 'Feb',
      sales: 3000
    }, {
      name: 'Mar',
      sales: 2000
    }]
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,L as default};
