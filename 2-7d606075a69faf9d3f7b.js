(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(A,e,a){"use strict";var t=a(206),s=a(0),d=a.n(s),i=a(1),n=a.n(i),c=a(216),E=a.n(c),o=a(6);function r(A){var e=A.description,a=A.lang,s=A.meta,i=A.keywords,n=A.title;return d.a.createElement(o.StaticQuery,{query:m,render:function(A){var t=e||A.site.siteMetadata.description;return d.a.createElement(E.a,{htmlAttributes:{lang:a},title:n,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:n},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:t}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(s)})},data:t})}r.defaultProps={lang:"en",meta:[],keywords:[]},r.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.array,keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},e.a=r;var m="1025518380"},205:function(A,e,a){"use strict";a(102),a(67),a(240);var t=a(267),s=a(0),d=a.n(s),i=a(6),n=a(61),c=a.n(n),E=(a(69),a(268)),o=a.n(E),r=a(40),m=a.n(r),g=(a(18),a(373)),j=a.n(g),B=function(A,e){var a=A.map(function(A){return A.node.product}),t={};return a.map(function(a,s){var d,i;t[a]||(t[a]=((i={})[e]=[],i));t[a]=((d={})[e]=(t[a][e]||[]).concat(A[s]),d)}),t},Q=function(A){var e=A.filter,a=A.data,t=(m()(A,["filter","data"]),Object.assign({value:"men",key:"page"},e)),s=function(A,e){var a=B(A,"images"),t=B(e,"labels"),s={};return Object.keys(a).map(function(A){s[A]=Object.assign({},a[A],t[A])}),s}(a.imgs.edges,a.jsons.edges),d=function(A,e,a){var t=j()(A,e)[e],s=Object.keys(A).map(function(A,e){return{value:t[e],key:A}}).filter(function(A){return A.value===a}),d={};return s.map(function(e){return d[e.key]=A[e.key]}),d},i=d(s,t.key,t.value);return e.subFilter&&e.subFilter.value?d(i,t.subFilter.key,t.subFilter.value):i},p=a(375),b=a.n(p);var Y=function(A){var e=A.price,a=A.left;return d.a.createElement("div",{className:a?b.a.priceLeft:b.a.priceRight},d.a.createElement("small",null,e.slice(0,2)),e.slice(2))},f=function(A){var e=A.img;return d.a.createElement("div",{className:b.a.img},d.a.createElement(c.a,{fluid:e.node.url.fluid}))},l=function(A){var e=A.desc,a=A.left;return d.a.createElement("div",{className:a?b.a.descriptionsLeft:b.a.descriptionsRight},e)},w=function(A){var e,t,s=A.txt,i=A.author,n=a(376).data;if(!s&&!i){var c=parseInt(Math.random()*n.length);e=n[c].text,t=n[c].author}return d.a.createElement("div",null,d.a.createElement("blockquote",null,d.a.createElement("p",null,"“",e,"”")),d.a.createElement("p",null,t))},u=0,x=0,h=0,D=function(A){var e=A.txt;return 0===A.index&&(u=0,x=0,h=0),e.descriptions&&0===x?(x++,e.descriptions):e.sizes.description&&0===h?(h++,e.sizes.description):e.sizes.bust&&0===u?(u++,d.a.createElement("span",null,"bust: ",e.sizes.bust,d.a.createElement("br",null),"waist: ",e.sizes.waist,d.a.createElement("br",null),"hip: ",e.sizes.hip)):d.a.createElement(w,null)},R=function(A){var e=A.img,a=A.txt,t=A.index;return 0===t?0:0,d.a.createElement("div",{className:b.a.left},d.a.createElement(f,{img:e}),d.a.createElement(Y,{price:a.price,left:!0}),d.a.createElement(l,{left:!0,desc:d.a.createElement(D,{txt:a,index:t})}))},_=function(A){var e=A.img,a=A.txt,t=A.index;return 0===t?0:0,d.a.createElement("div",{className:b.a.right},d.a.createElement(l,{desc:d.a.createElement(D,{txt:a,index:t})}),d.a.createElement(Y,{price:a.price}),d.a.createElement(f,{img:e}))},N=function(A){var e=A.images,a=A.labels,t=A.randomFlip,i=Object(s.useState)(""),n=i[0],c=i[1],E=Object(s.useState)(!1),o=E[0],r=E[1],m=[15,30,80];Object(s.useEffect)(function(){c(m[parseInt(Math.random()*m.length)]),t&&r(parseInt(Math.random()+.2))},[]);var g=e.map(function(A,e){var t=!!(e%2||0===e);return d.a.createElement("div",{key:e,style:{display:"flex",alignItems:"center",margin:o&&!t?"-"+n/2+"px auto 0":n+"px auto 0"}},t?d.a.createElement(_,{img:A,txt:a,index:e}):d.a.createElement(R,{img:A,txt:a,index:e}))}),j=a.brand;return d.a.createElement("div",null,d.a.createElement("h3",{className:b.a.brandTitle},j||"no-brand"),d.a.createElement("hr",null),g)},v={scheme:"google",author:"seth wright (http://sethawright.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#CC342B",base09:"#F96A38",base0A:"#FBA922",base0B:"#198844",base0C:"#3971ED",base0D:"#3971ED",base0E:"#A36AC7",base0F:"#3971ED"},C=(e.a=function(A){var e=A.filter;return d.a.createElement(i.StaticQuery,{query:C,render:function(A){if(e){var a=Q({filter:e,data:A});return Object.keys(a).map(function(A,e){var t=a[A].images,s=a[A].labels[0].node.jsonData.data;if(s.length>1)throw"there is more than one json file for the product. this is not allowed.";return d.a.createElement(N,{key:e,images:t,labels:s,randomFlip:!0})})}return d.a.createElement("ul",null,Object.keys(A).map(function(e,a){var t=A[e].edges;return[d.a.createElement("li",{key:e},d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:30}},d.a.createElement("h2",null,e))),d.a.createElement("ol",{key:e+a},t.map(function(A,e){var a,t=A.node;return a=t.img?d.a.createElement("img",{width:125,src:t.img.src}):(t.product,d.a.createElement(o.a,{data:t,theme:v})),d.a.createElement("li",{key:e},d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:30}},a))}))]}))},data:t})},"727283579")},206:function(A){A.exports={data:{site:{siteMetadata:{title:"Monami 18",description:"fashion website for those who want to look good without putting a hole in their wallet.",author:"@panzerstadt"}}}}},267:function(A){A.exports={data:{jsons:{edges:[{node:{product:"dress_2",jsonData:{data:{page:"women",brand:"Target",type:"dress",price:"rm35",descriptions:"",tags:["monami18","dress","target"],sizes:{bust:"80cm",waist:"92cm",hip:"110cm",description:"slim fit for the waist"}}},name:"dress_2",extension:"json",relativePath:"dress_2/dress_2.json",changeTime:"2018-12-25T12:31:40.374Z"}},{node:{product:"dress_1",jsonData:{data:{page:"women",brand:"Minkpink",type:"dress",price:"rm28",descriptions:"",tags:["monami18","dress","minkpink"],sizes:{bust:"84cm",waist:"76cm",hip:"112cm",description:null}}},name:"dress_1",extension:"json",relativePath:"dress_1/dress_1.json",changeTime:"2018-12-25T07:50:04.754Z"}},{node:{product:"dress_4",jsonData:{data:{page:"women",brand:"Pull & Bear",type:"dress",price:"rm35",descriptions:"",tags:["monami18","dress","pull&bear"],sizes:{bust:null,waist:null,hip:null,description:"EUR size s"}}},name:"dress_4",extension:"json",relativePath:"dress_4/dress_4.json",changeTime:"2018-12-25T08:48:19.177Z"}},{node:{product:"dress_3",jsonData:{data:{page:"women",brand:"CottonOn",type:"dress",price:"rm35",descriptions:"",tags:["monami18","dress","cottonon"],sizes:{bust:"72cm",waist:"68cm",hip:"88cm",description:null}}},name:"dress_3",extension:"json",relativePath:"dress_3/dress_3.json",changeTime:"2018-12-25T08:45:28.292Z"}},{node:{product:"jumpsuit_1",jsonData:{data:{page:"women",brand:"",type:"jumpsuit",price:"rm40",descriptions:"",tags:["monami18","jumpsuit"],sizes:{bust:"29cm",waist:"stretchable",hip:"67cm",description:null}}},name:"jumpsuit_1",extension:"json",relativePath:"jumpsuit_1/jumpsuit_1.json",changeTime:"2018-12-25T08:46:51.585Z"}},{node:{product:"top_1",jsonData:{data:{page:"women",brand:"",type:"top",price:"rm35",descriptions:"a wonderful and unique top. The floral petals are loosely tied to the top to give a 3D feel",tags:["monami18","top","floral petal"],sizes:{bust:null,waist:null,hip:null,description:"XL(as stated on the shirt, but will suit an M-L size)"}}},name:"top_1",extension:"json",relativePath:"top_1/top_1.json",changeTime:"2018-12-25T08:47:59.537Z"}},{node:{product:"manjumpsuit_2",jsonData:{data:{page:"men",brand:"Minkpink",type:"jumpsuit",price:"rm28",descriptions:"it's a jumpsuit, need I say more?",tags:["monami18","dress","minkpink"],sizes:{bust:"84cm",waist:"76cm",hip:"112cm",description:null}}},name:"dress_1",extension:"json",relativePath:"manjumpsuit_2/dress_1.json",changeTime:"2018-12-25T10:33:49.383Z"}},{node:{product:"mandress_1",jsonData:{data:{page:"men",brand:"Target",type:"man-dress",price:"rm35",descriptions:"a dress for the man",tags:["monami18","dress","target"],sizes:{bust:"80cm",waist:"92cm",hip:"110cm",description:null}}},name:"dress_2",extension:"json",relativePath:"mandress_1/dress_2.json",changeTime:"2018-12-25T12:11:38.632Z"}},{node:{product:"mandress_2",jsonData:{data:{page:"men",brand:"Primark",type:"dress",price:"rm35",descriptions:"sharp evening dress for the millenial youngster on the go",tags:["monami18","dress","target"],sizes:{bust:"80cm",waist:"92cm",hip:"110cm",description:null}}},name:"dress_5",extension:"json",relativePath:"mandress_2/dress_5.json",changeTime:"2018-12-25T10:33:35.393Z"}}]},imgs:{edges:[{node:{product:"dress_2",name:"dress_2_4",extension:"jpg",relativePath:"dress_2/dress_2_4.jpg",changeTime:"2018-12-15T14:04:38.643Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABjumriBuHSyUB/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAEEiAi/9oACAEBAAEFAgLbYjVRg8tK/Na6f//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAIDAQEAAAAAAAAAAAAAAAERABAxAmH/2gAIAQEABj8CAnJAVNQBe1tbP//EABwQAAICAgMAAAAAAAAAAAAAAAABESExkRBRYf/aAAgBAQABPyH2xiCbYogdqug2EcbjLZcZZfbZ/9oADAMBAAIAAwAAABCE577/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFB/9oACAEDAQE/EMK//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFRcUGR/9oACAEBAAE/EMzwR8iY1uzxzX7PMLllsZucey+yX6Yi3E0FXH29Ysr/2Q==",aspectRatio:1,src:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/3e5d5/dress_2_4.jpg",srcSet:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/8bbd3/dress_2_4.jpg 150w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/03d0a/dress_2_4.jpg 300w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/3e5d5/dress_2_4.jpg 600w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/fd991/dress_2_4.jpg 640w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"dress_1",name:"dress_1",extension:"jpg",relativePath:"dress_1/dress_1.jpg",changeTime:"2018-12-15T14:04:38.668Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAYq5qZ2RsXPUzGAf/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECAxIREzH/2gAIAQEAAQUCn20tRPUdHA8EMeGDqg//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQMBAT8BET//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQIBAT8BNT//xAAaEAACAgMAAAAAAAAAAAAAAAAAMRAhARFB/9oACAEBAAY/Ar4LWYsUIQj/xAAeEAACAgEFAQAAAAAAAAAAAAABEQAhQRAxUWGR0f/aAAgBAQABPyEBYGMOeouAFDHyKDKjEHVnh6A1l7GBbbmdz2f/2gAMAwEAAgADAAAAEKzA/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQMBAT8QEd//xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQIBAT8QUN//xAAgEAEAAQMEAwEAAAAAAAAAAAABABEhMUFRgZEQocHw/9oACAEBAAE/ENxidzTkx4IVgaGeivHgubpUS6P5lNjFuYS1fcLNIl6Di1bAMoUvpn//2Q==",aspectRatio:1,src:"/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/3e5d5/dress_1.jpg",srcSet:"/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/8bbd3/dress_1.jpg 150w,\n/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/03d0a/dress_1.jpg 300w,\n/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/3e5d5/dress_1.jpg 600w,\n/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/fd991/dress_1.jpg 640w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"dress_3",name:"dress_3",extension:"jpg",relativePath:"dress_3/dress_3.jpg",changeTime:"2018-12-15T14:04:38.657Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB8+2akZWpK9BOCv/EABsQAAICAwEAAAAAAAAAAAAAAAACAREDEBIh/9oACAEBAAEFAjKqwhQ7dLR4TWv/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAACAgEFAAAAAAAAAAAAAAAAAQIQMRESITKR/9oACAEBAAY/AiO1aXH2uqFwsGEf/8QAHBAAAgICAwAAAAAAAAAAAAAAAAEhQRBhEdHh/9oACAEBAAE/ITWqOBhyLVYZdImiSiPM/9oADAMBAAIAAwAAABDwD0H/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxBPGXP/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxBrSp//xAAfEAACAgEEAwAAAAAAAAAAAAABEQAhcRCBkaGxweH/2gAIAQEAAT8QIFMVGSoLEvbRVE5W7Jr1MOoAIvgwQhSAGNBPyY/mz//Z",aspectRatio:1,src:"/dev-monami/static/000954670bd4a43f673cbf6435a44695/3e5d5/dress_3.jpg",srcSet:"/dev-monami/static/000954670bd4a43f673cbf6435a44695/8bbd3/dress_3.jpg 150w,\n/dev-monami/static/000954670bd4a43f673cbf6435a44695/03d0a/dress_3.jpg 300w,\n/dev-monami/static/000954670bd4a43f673cbf6435a44695/3e5d5/dress_3.jpg 600w,\n/dev-monami/static/000954670bd4a43f673cbf6435a44695/fd991/dress_3.jpg 640w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"manjumpsuit_2",name:"dress_1",extension:"jpg",relativePath:"manjumpsuit_2/dress_1.jpg",changeTime:"2018-12-25T10:31:26.117Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAYq5qZ2RsXPUzGAf/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECAxIREzH/2gAIAQEAAQUCn20tRPUdHA8EMeGDqg//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQMBAT8BET//xAAWEQADAAAAAAAAAAAAAAAAAAABIDH/2gAIAQIBAT8BNT//xAAaEAACAgMAAAAAAAAAAAAAAAAAMRAhARFB/9oACAEBAAY/Ar4LWYsUIQj/xAAeEAACAgEFAQAAAAAAAAAAAAABEQAhQRAxUWGR0f/aAAgBAQABPyEBYGMOeouAFDHyKDKjEHVnh6A1l7GBbbmdz2f/2gAMAwEAAgADAAAAEKzA/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQMBAT8QEd//xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQIBAT8QUN//xAAgEAEAAQMEAwEAAAAAAAAAAAABABEhMUFRgZEQocHw/9oACAEBAAE/ENxidzTkx4IVgaGeivHgubpUS6P5lNjFuYS1fcLNIl6Di1bAMoUvpn//2Q==",aspectRatio:1,src:"/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/3e5d5/dress_1.jpg",srcSet:"/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/8bbd3/dress_1.jpg 150w,\n/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/03d0a/dress_1.jpg 300w,\n/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/3e5d5/dress_1.jpg 600w,\n/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/fd991/dress_1.jpg 640w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"mandress_1",name:"dress_2_4",extension:"jpg",relativePath:"mandress_1/dress_2_4.jpg",changeTime:"2018-12-22T07:49:28.402Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABjumriBuHSyUB/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAEEiAi/9oACAEBAAEFAgLbYjVRg8tK/Na6f//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAIDAQEAAAAAAAAAAAAAAAERABAxAmH/2gAIAQEABj8CAnJAVNQBe1tbP//EABwQAAICAgMAAAAAAAAAAAAAAAABESExkRBRYf/aAAgBAQABPyH2xiCbYogdqug2EcbjLZcZZfbZ/9oADAMBAAIAAwAAABCE577/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFB/9oACAEDAQE/EMK//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFRcUGR/9oACAEBAAE/EMzwR8iY1uzxzX7PMLllsZucey+yX6Yi3E0FXH29Ysr/2Q==",aspectRatio:1,src:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/3e5d5/dress_2_4.jpg",srcSet:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/8bbd3/dress_2_4.jpg 150w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/03d0a/dress_2_4.jpg 300w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/3e5d5/dress_2_4.jpg 600w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/fd991/dress_2_4.jpg 640w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"mandress_2",name:"dress_2_2",extension:"jpg",relativePath:"mandress_2/dress_2_2.jpg",changeTime:"2018-12-25T10:29:39.243Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAYrPG6OaoHS1KyD/xAAcEAACAgIDAAAAAAAAAAAAAAABAgARAxASEyH/2gAIAQEAAQUCmRR1VAhvL6nAxVs1r//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAICAwEAAAAAAAAAAAAAAAABAhARITFB/9oACAEBAAY/AiLxiuMUYp6OHt//xAAfEAACAQMFAQAAAAAAAAAAAAAAARExgZEQIUFRYXH/2gAIAQEAAT8hEklZvjQyigsR3EYoejAmBvI+nXsu8n//2gAMAwEAAgADAAAAEKwgvv/EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/EGP/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQIBAT8QI3//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUHRUcH/2gAIAQEAAT8QCYLZWXK4XvplvkUBFC15MWF4VlEKf3eQ/QBeOA04VtrlJ6p//9k=",aspectRatio:1,src:"/dev-monami/static/1449524a7ad88fc2457562b2031794e8/3e5d5/dress_2_2.jpg",srcSet:"/dev-monami/static/1449524a7ad88fc2457562b2031794e8/8bbd3/dress_2_2.jpg 150w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/03d0a/dress_2_2.jpg 300w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/3e5d5/dress_2_2.jpg 600w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/614ba/dress_2_2.jpg 900w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/c5661/dress_2_2.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"dress_2",name:"dress_2_2",extension:"jpg",relativePath:"dress_2/dress_2_2.jpg",changeTime:"2018-12-15T14:04:38.592Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgUD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAYrPG6OaoHS1KyD/xAAcEAACAgIDAAAAAAAAAAAAAAABAgARAxASEyH/2gAIAQEAAQUCmRR1VAhvL6nAxVs1r//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAICAwEAAAAAAAAAAAAAAAABAhARITFB/9oACAEBAAY/AiLxiuMUYp6OHt//xAAfEAACAQMFAQAAAAAAAAAAAAAAARExgZEQIUFRYXH/2gAIAQEAAT8hEklZvjQyigsR3EYoejAmBvI+nXsu8n//2gAMAwEAAgADAAAAEKwgvv/EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/EGP/xAAWEQEBAQAAAAAAAAAAAAAAAAARABD/2gAIAQIBAT8QI3//xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUHRUcH/2gAIAQEAAT8QCYLZWXK4XvplvkUBFC15MWF4VlEKf3eQ/QBeOA04VtrlJ6p//9k=",aspectRatio:1,src:"/dev-monami/static/1449524a7ad88fc2457562b2031794e8/3e5d5/dress_2_2.jpg",srcSet:"/dev-monami/static/1449524a7ad88fc2457562b2031794e8/8bbd3/dress_2_2.jpg 150w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/03d0a/dress_2_2.jpg 300w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/3e5d5/dress_2_2.jpg 600w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/614ba/dress_2_2.jpg 900w,\n/dev-monami/static/1449524a7ad88fc2457562b2031794e8/c5661/dress_2_2.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"dress_4",name:"dress_4",extension:"jpg",relativePath:"dress_4/dress_4.jpg",changeTime:"2018-12-15T14:04:38.652Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHt0c8WPVtFQRBbB//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwARBBMU/9oACAEBAAEFAidLPkdrZWukjUyorB1aS0zxyxEWY//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAICAQUBAAAAAAAAAAAAAAABAhExECEiUWGR/9oACAEBAAY/Amylt5pOuhSqxSjhnIw/pUVSP//EAB0QAAICAQUAAAAAAAAAAAAAAAERADEhEEFRYXH/2gAIAQEAAT8h6IDi3Y+oKzcKUiBAPmYiFEQ8DogYgDm0Voi84c//2gAMAwEAAgADAAAAEKzHgP/EABYRAAMAAAAAAAAAAAAAAAAAAAEgIf/aAAgBAwEBPxARP//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxBKY//EAB0QAQEAAwACAwAAAAAAAAAAAAERACExQVFhcYH/2gAIAQEAAT8QCDbxZYXHKierUm9ezKjTTeczdWXQfvTzIJCMG49nzhMTVGT4o8gnHA02/vI38AVr73n/2Q==",aspectRatio:1,src:"/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/3e5d5/dress_4.jpg",srcSet:"/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/8bbd3/dress_4.jpg 150w,\n/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/03d0a/dress_4.jpg 300w,\n/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/3e5d5/dress_4.jpg 600w,\n/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/614ba/dress_4.jpg 900w,\n/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/7138d/dress_4.jpg 1200w,\n/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/76362/dress_4.jpg 1536w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"jumpsuit_1",name:"jumpsuit_1",extension:"jpg",relativePath:"jumpsuit_1/jumpsuit_1.jpg",changeTime:"2018-12-15T14:04:38.550Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGrNa1K0Kif/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAMBAhETITP/2gAIAQEAAQUCZ51VK2EtyXtzfB//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAQUAAAAAAAAAAAAAAAAAAXECAxAxYf/aAAgBAQAGPwJlutRhLpDNH//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExYf/aAAgBAQABPyG4pa1DnBLIKmTVQ17wZ6D/2gAMAwEAAgADAAAAEO8P/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPxAZF//EABcRAAMBAAAAAAAAAAAAAAAAAAABIRH/2gAIAQIBAT8QdpqP/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAQTFx8f/aAAgBAQABPxBiyUT2TGLQK9E85F3bjWQZaoASl7vrm//Z",aspectRatio:1.3333333333333333,src:"/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/3e5d5/jumpsuit_1.jpg",srcSet:"/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/8bbd3/jumpsuit_1.jpg 150w,\n/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/03d0a/jumpsuit_1.jpg 300w,\n/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/3e5d5/jumpsuit_1.jpg 600w,\n/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/614ba/jumpsuit_1.jpg 900w,\n/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/7138d/jumpsuit_1.jpg 1200w,\n/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/70313/jumpsuit_1.jpg 1800w,\n/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/ab307/jumpsuit_1.jpg 2048w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"mandress_1",name:"dress_2_3",extension:"jpg",relativePath:"mandress_1/dress_2_3.jpg",changeTime:"2018-12-22T07:49:28.398Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABjOzUVzW1SzhVoR//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADEBExMv/aAAgBAQABBQIVFmpRoaIilZvF3gdn/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBAhD/2gAIAQMBAT8BsmInP//EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAgEBPwERP//EABoQAAICAwAAAAAAAAAAAAAAAAEQIYEAAhL/2gAIAQEABj8CjYRh6ooku3//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhQTFh/9oACAEBAAE/IcGGnEVzcUcMNOiZjcLlHr08l8F6redY2f/aAAwDAQACAAMAAAAQU+f9/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/EAIMH//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8Qt0UWf//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVFhgf/aAAgBAQABPxAQgF1efvYyoKkhO2aXDHWPkMkWpT4vYlU7zYlFKwnQCDTUQCd7DFGf/9k=",aspectRatio:1,src:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/3e5d5/dress_2_3.jpg",srcSet:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/8bbd3/dress_2_3.jpg 150w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/03d0a/dress_2_3.jpg 300w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/3e5d5/dress_2_3.jpg 600w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/614ba/dress_2_3.jpg 900w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/c5661/dress_2_3.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"dress_2",name:"dress_2_1",extension:"jpg",relativePath:"dress_2/dress_2_1.jpg",changeTime:"2018-12-15T14:04:38.599Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAfXLsBUS0QsYQXqiz//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMSERP/2gAIAQEAAQUCt4WFTCxqes6DXpowxzi0T//EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BZl//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEj/8QAGxAAAQUBAQAAAAAAAAAAAAAAAQAQERIxIUH/2gAIAQEABj8CrkICeBrerMeQ3//EABsQAAIDAQEBAAAAAAAAAAAAAAERACFBMWEQ/9oACAEBAAE/IXHgrZYL0xwTHCmh4gCuxI388FQnB2WE/9oADAMBAAIAAwAAABCU0Dz/xAAWEQEBAQAAAAAAAAAAAAAAAAABERD/2gAIAQMBAT8QiEMOf//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAECAQE/EOnSiz//xAAcEAEBAQEAAwEBAAAAAAAAAAABESEAMVFhQZH/2gAIAQEAAT8QB8pQjajeUYKhCq8v2ZzbTAxngnB5VDWZ45fCxf4s6fL14ovZzNadn5V3ki2X13//2Q==",aspectRatio:1,src:"/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/3e5d5/dress_2_1.jpg",srcSet:"/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/8bbd3/dress_2_1.jpg 150w,\n/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/03d0a/dress_2_1.jpg 300w,\n/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/3e5d5/dress_2_1.jpg 600w,\n/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/614ba/dress_2_1.jpg 900w,\n/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/c5661/dress_2_1.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"dress_2",name:"dress_2_3",extension:"jpg",relativePath:"dress_2/dress_2_3.jpg",changeTime:"2018-12-15T14:04:38.596Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABjOzUVzW1SzhVoR//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADEBExMv/aAAgBAQABBQIVFmpRoaIilZvF3gdn/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBAhD/2gAIAQMBAT8BsmInP//EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAgEBPwERP//EABoQAAICAwAAAAAAAAAAAAAAAAEQIYEAAhL/2gAIAQEABj8CjYRh6ooku3//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhQTFh/9oACAEBAAE/IcGGnEVzcUcMNOiZjcLlHr08l8F6redY2f/aAAwDAQACAAMAAAAQU+f9/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/EAIMH//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8Qt0UWf//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVFhgf/aAAgBAQABPxAQgF1efvYyoKkhO2aXDHWPkMkWpT4vYlU7zYlFKwnQCDTUQCd7DFGf/9k=",aspectRatio:1,src:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/3e5d5/dress_2_3.jpg",srcSet:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/8bbd3/dress_2_3.jpg 150w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/03d0a/dress_2_3.jpg 300w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/3e5d5/dress_2_3.jpg 600w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/614ba/dress_2_3.jpg 900w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/c5661/dress_2_3.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"manjumpsuit_2",name:"top_1",extension:"jpg",relativePath:"manjumpsuit_2/top_1.jpg",changeTime:"2018-12-25T10:31:31.067Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB5trZZdDRP//EABkQAAIDAQAAAAAAAAAAAAAAAAECABESA//aAAgBAQABBQIGM1FnJOROd6n/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAwEBPwGUv//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwGtP//EABoQAAICAwAAAAAAAAAAAAAAAAAQAhEhMUH/2gAIAQEABj8CMLRK+L//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhYTFR/9oACAEBAAE/IWMtinRrZfl5hCvxnIkTsWRD5P/aAAwDAQACAAMAAAAQPD//xAAXEQEAAwAAAAAAAAAAAAAAAAABECFR/9oACAEDAQE/EKCbH//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQIBAT8QFm4n/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFRQZGx/9oACAEBAAE/EDQWhhfyWgkWW/FQnrChgHUq6OmY4mPgAnay7o9T/9k=",aspectRatio:1.3333333333333333,src:"/dev-monami/static/89f070ebc85b5128002755a2453783d7/3e5d5/top_1.jpg",srcSet:"/dev-monami/static/89f070ebc85b5128002755a2453783d7/8bbd3/top_1.jpg 150w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/03d0a/top_1.jpg 300w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/3e5d5/top_1.jpg 600w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/614ba/top_1.jpg 900w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/7138d/top_1.jpg 1200w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/70313/top_1.jpg 1800w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/ab307/top_1.jpg 2048w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"top_1",name:"top_1",extension:"jpg",relativePath:"top_1/top_1.jpg",changeTime:"2018-12-15T14:04:38.662Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB5trZZdDRP//EABkQAAIDAQAAAAAAAAAAAAAAAAECABESA//aAAgBAQABBQIGM1FnJOROd6n/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAwEBPwGUv//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwGtP//EABoQAAICAwAAAAAAAAAAAAAAAAAQAhEhMUH/2gAIAQEABj8CMLRK+L//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhYTFR/9oACAEBAAE/IWMtinRrZfl5hCvxnIkTsWRD5P/aAAwDAQACAAMAAAAQPD//xAAXEQEAAwAAAAAAAAAAAAAAAAABECFR/9oACAEDAQE/EKCbH//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQIBAT8QFm4n/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFRQZGx/9oACAEBAAE/EDQWhhfyWgkWW/FQnrChgHUq6OmY4mPgAnay7o9T/9k=",aspectRatio:1.3333333333333333,src:"/dev-monami/static/89f070ebc85b5128002755a2453783d7/3e5d5/top_1.jpg",srcSet:"/dev-monami/static/89f070ebc85b5128002755a2453783d7/8bbd3/top_1.jpg 150w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/03d0a/top_1.jpg 300w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/3e5d5/top_1.jpg 600w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/614ba/top_1.jpg 900w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/7138d/top_1.jpg 1200w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/70313/top_1.jpg 1800w,\n/dev-monami/static/89f070ebc85b5128002755a2453783d7/ab307/top_1.jpg 2048w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"mandress_2",name:"dress_2_4",extension:"jpg",relativePath:"mandress_2/dress_2_4.jpg",changeTime:"2018-12-25T10:29:39.240Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABjumriBuHSyUB/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAEEiAi/9oACAEBAAEFAgLbYjVRg8tK/Na6f//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAIDAQEAAAAAAAAAAAAAAAERABAxAmH/2gAIAQEABj8CAnJAVNQBe1tbP//EABwQAAICAgMAAAAAAAAAAAAAAAABESExkRBRYf/aAAgBAQABPyH2xiCbYogdqug2EcbjLZcZZfbZ/9oADAMBAAIAAwAAABCE577/xAAXEQADAQAAAAAAAAAAAAAAAAAAEBFB/9oACAEDAQE/EMK//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFRcUGR/9oACAEBAAE/EMzwR8iY1uzxzX7PMLllsZucey+yX6Yi3E0FXH29Ysr/2Q==",aspectRatio:1,src:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/3e5d5/dress_2_4.jpg",srcSet:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/8bbd3/dress_2_4.jpg 150w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/03d0a/dress_2_4.jpg 300w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/3e5d5/dress_2_4.jpg 600w,\n/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/fd991/dress_2_4.jpg 640w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{product:"mandress_2",name:"dress_2_3",extension:"jpg",relativePath:"mandress_2/dress_2_3.jpg",changeTime:"2018-12-25T10:29:39.241Z",url:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABjOzUVzW1SzhVoR//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADEBExMv/aAAgBAQABBQIVFmpRoaIilZvF3gdn/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBAhD/2gAIAQMBAT8BsmInP//EABYRAAMAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAgEBPwERP//EABoQAAICAwAAAAAAAAAAAAAAAAEQIYEAAhL/2gAIAQEABj8CjYRh6ooku3//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhQTFh/9oACAEBAAE/IcGGnEVzcUcMNOiZjcLlHr08l8F6redY2f/aAAwDAQACAAMAAAAQU+f9/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/EAIMH//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8Qt0UWf//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVFhgf/aAAgBAQABPxAQgF1efvYyoKkhO2aXDHWPkMkWpT4vYlU7zYlFKwnQCDTUQCd7DFGf/9k=",aspectRatio:1,src:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/3e5d5/dress_2_3.jpg",srcSet:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/8bbd3/dress_2_3.jpg 150w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/03d0a/dress_2_3.jpg 300w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/3e5d5/dress_2_3.jpg 600w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/614ba/dress_2_3.jpg 900w,\n/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/c5661/dress_2_3.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}}]},imgs_gallery:{edges:[{node:{img:{src:"/dev-monami/static/4a9773549091c227cd2eb82ccd9c5e3a/79327/gatsby-icon.png"}}},{node:{img:{src:"/dev-monami/static/a21548add7eb49b60a0020be11e556e3/79327/pablo-downloading.png"}}},{node:{img:{src:"/dev-monami/static/ef9fea10086deaab8257d6a623ee774c/79327/pablo-no-connection.png"}}},{node:{img:{src:"/dev-monami/static/51caf6473947195bd5bb39d15adf5174/79327/pablo-list-is-empty.png"}}},{node:{img:{src:"/dev-monami/static/d8340ddd44c1686d760a8c7b3c373dc3/79327/pablo-message-sent.png"}}},{node:{img:{src:"/dev-monami/static/d824529cf7ee903d3515615e7d18787c/79327/pablo-order-completed.png"}}},{node:{img:{src:"/dev-monami/static/a40b282e19ed23c64fbb5eb0b5b653b5/79327/pablo-success.png"}}},{node:{img:{src:"/dev-monami/static/dbff4070572ada15b8c6ab9b315a4e8e/79327/pablo-page-not-found.png"}}},{node:{img:{src:"/dev-monami/static/590a90bfeec279c29e2b440d6c50b064/79327/pablo-upgrade.png"}}},{node:{img:{src:"/dev-monami/static/dafdc9885a671f17988eec9ae3201c79/79327/pablo-no-messages.png"}}},{node:{img:{src:"/dev-monami/static/fa42c34a5697482482a20fb962a0f6ea/79327/pablo-waiting.png"}}},{node:{img:{src:"/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/79327/gatsby-astronaut.png"}}},{node:{img:{src:"/dev-monami/static/d0c9afaa8fa0178c8a3bdd167aa4df6b/79327/pablo-logged-out.png"}}},{node:{img:{src:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/13442/dress_2_4.jpg"}}},{node:{img:{src:"/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/13442/dress_1.jpg"}}},{node:{img:{src:"/dev-monami/static/000954670bd4a43f673cbf6435a44695/13442/dress_3.jpg"}}},{node:{img:{src:"/dev-monami/static/4a5fc11dc295c13989377c41cd5eb098/13442/dress_1.jpg"}}},{node:{img:{src:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/13442/dress_2_4.jpg"}}},{node:{img:{src:"/dev-monami/static/1449524a7ad88fc2457562b2031794e8/13442/dress_2_2.jpg"}}},{node:{img:{src:"/dev-monami/static/1449524a7ad88fc2457562b2031794e8/13442/dress_2_2.jpg"}}},{node:{img:{src:"/dev-monami/static/c920831f0b2ff51e78f8efb43430271d/13442/dress_4.jpg"}}},{node:{img:{src:"/dev-monami/static/fc0d767c3eb4f4c03987a321e1a48ab9/13442/jumpsuit_1.jpg"}}},{node:{img:{src:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/13442/dress_2_3.jpg"}}},{node:{img:{src:"/dev-monami/static/e20728f4be39f4827e3c49a4396e87c5/13442/dress_2_1.jpg"}}},{node:{img:{src:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/13442/dress_2_3.jpg"}}},{node:{img:{src:"/dev-monami/static/89f070ebc85b5128002755a2453783d7/13442/top_1.jpg"}}},{node:{img:{src:"/dev-monami/static/89f070ebc85b5128002755a2453783d7/13442/top_1.jpg"}}},{node:{img:{src:"/dev-monami/static/20216d4437d3e1a3c45e28b3600c950e/13442/dress_2_4.jpg"}}},{node:{img:{src:"/dev-monami/static/11d200c9d6efcd6a94f4d7152d2d9ba4/13442/dress_2_3.jpg"}}}]}}}},375:function(A,e,a){A.exports={brandTitle:"index-module--brandTitle--3fenE",price:"index-module--price--35kg7",priceLeft:"index-module--priceLeft--19eRo index-module--price--35kg7",priceRight:"index-module--priceRight--2inT0 index-module--price--35kg7",descriptions:"index-module--descriptions--5Ao-y",descriptionsLeft:"index-module--descriptionsLeft--1N3nC index-module--descriptions--5Ao-y",descriptionsRight:"index-module--descriptionsRight--2-iZp index-module--descriptions--5Ao-y",imgBlock:"index-module--imgBlock--iJ_hR",left:"index-module--left--sLMvz index-module--imgBlock--iJ_hR",right:"index-module--right--3CVZ6 index-module--imgBlock--iJ_hR",img:"index-module--img--3mlzE"}},376:function(A){A.exports={data:[{author:"Diana Vreeland",text:"Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes."},{author:"Gianni Versace",text:"Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live."},{author:"Karl Lagerfield",text:"One is never over-dressed or under-dressed with a Little Black Dress."}]}}}]);
//# sourceMappingURL=2-7d606075a69faf9d3f7b.js.map