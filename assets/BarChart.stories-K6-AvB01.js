import{j as e}from"./jsx-runtime-CLpGMVip.js";import{C as T}from"./Card-7Cj9cTki.js";import{T as i}from"./TooltipChart-DbuUj72j.js";import{g as h,B as p,X as m,Y as d,f as b,R as f,C as v,T as j,L as A}from"./generateCategoricalChart-BfGTlrHe.js";import"./index-CR__hKHy.js";import"./styled-components.browser.esm-DnH8uv-2.js";import"./light-SvT5IF7k.js";import"./LoadingOverlay-C_HCXSLF.js";import"./Spinner-xLrCEoRn.js";import"./Typography-CsgGy_ye.js";import"./ButtonGroup-Bo3_J-q_.js";import"./tiny-invariant-CopsF_GD.js";var S=h({chartName:"BarChart",GraphicalChild:p,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:m},{axisType:"yAxis",AxisComp:d}],formatAxisMap:b});const u=({data:a,labels:r,height:c=400,showLegend:y,tooltipContent:C=i})=>e.jsx(f,{width:"100%",height:c,children:e.jsxs(S,{data:a,children:[e.jsx(v,{strokeDasharray:"3 3"}),e.jsx(m,{dataKey:"name"}),e.jsx(d,{}),e.jsx(j,{content:C}),y&&e.jsx(A,{}),r.map(({dataKey:n,label:x,color:g})=>e.jsx(p,{dataKey:n,name:x,fill:g},n))]})});u.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}],raw:"{ [key: string]: any }[]"},description:""},labels:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ dataKey: string; label: string; color: string }",signature:{properties:[{key:"dataKey",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]}}],raw:"{ dataKey: string; label: string; color: string }[]"},description:""},tooltipContent:{required:!1,tsType:{name:"ContentType",elements:[{name:"ValueType"},{name:"NameType"}],raw:"ContentType<ValueType, NameType>"},description:"",defaultValue:{value:`({ active, payload, label, tooltipValueFormatter = (label) => label.toString(), children }: TooltipChartProps) => {
  if (active) {
    return (
      <Card size={CardSize.sm}>
        <CardSections.Title>{label}</CardSections.Title>
        <CardSections.Content>
          {payload?.map((entry: any, index: number) => (
            <div key={\`item-\${index}\`}>{\`\${entry.name}: \${tooltipValueFormatter(entry.value)}\`}</div>
          ))}

          {children}
        </CardSections.Content>
      </Card>
    );
  }

  return null;
}`,computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:""},height:{defaultValue:{value:"400",computed:!1},required:!1}},composes:["Omit"]};const D={title:"Atoms/BarChart",component:u,decorators:[a=>e.jsx(T,{children:e.jsx(a,{})})]},t={args:{tooltipContent:a=>e.jsx(i,{...a,tooltipValueFormatter:r=>`€${r}`}),labels:[{dataKey:"sales",label:"Sales",color:"red"},{dataKey:"sales2",label:"Sales 2",color:"blue"}],data:[{name:"Jan",sales:4e3,sales2:2400},{name:"Feb",sales:3e3},{name:"Mar",sales:2e3}]}};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    tooltipContent: props => <TooltipChart {...props} tooltipValueFormatter={val => \`€\${val}\`} />,
    labels: [{
      dataKey: 'sales',
      label: 'Sales',
      color: 'red'
    }, {
      dataKey: 'sales2',
      label: 'Sales 2',
      color: 'blue'
    }],
    data: [{
      name: 'Jan',
      sales: 4000,
      sales2: 2400
    }, {
      name: 'Feb',
      sales: 3000
    }, {
      name: 'Mar',
      sales: 2000
    }]
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,D as default};
