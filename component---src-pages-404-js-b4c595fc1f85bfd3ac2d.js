(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149),o=n(152),l=n(162);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement(l.a,null))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(146),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(148),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(154),r=n.n(a),i=n(155),o=n.n(i),l=new r.a(o.a),c=(l.rhythm,l.scale)},148:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},149:function(e,t,n){"use strict";var a=n(150),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(145),s=(n(32),n(147)),u={fontWeight:100,margin:0,fontFamily:"serif",color:"#877A5F",textDecoration:"none"},d={width:"100%",padding:"5px 0 5px 0",backgroundColor:"#F0F0F0",display:"flex",justifyContent:"space-evenly",alignContent:"center"},m=function(e){var t=e.selected,n=[{url:"/women",label:"Women"},{url:"/men",label:"Men"},{url:"/accessories",label:"Accessories"},{url:"/occasions",label:"Occasions"},{url:"/about",label:"About Us"},{url:"/contact",label:"Contact"}];return n=n.map(function(e,n){return function(e,t,n,a){return i.a.createElement(c.Link,{key:e,to:t,style:{textDecoration:"none"}},i.a.createElement("p",{style:Object.assign({},u,{color:a?"#F0B67F":"#877A5F"})},n))}(n,e.url,e.label,e.label===t)}),i.a.createElement("div",{style:d},n)},p={textAlign:"center",width:"100%",paddingBottom:15},f=Object.assign({},Object(s.a)(1.5),{color:"#BDA989",textDecoration:"none",margin:0}),g=function(){return i.a.createElement("div",{style:p},i.a.createElement(c.Link,{to:"/",style:{textDecoration:"none"}},i.a.createElement("h1",{style:f},"Monami 18")))},y={height:"100%",backgroundColor:"#021B2D",color:"#1E2D24",display:"flex",flexDirection:"column",justifyContent:"flex-end"},h=function(e){var t=e.selected;return i.a.createElement("div",{style:{height:170}},i.a.createElement("div",{style:y},i.a.createElement(g,null),i.a.createElement(m,{selected:t})))},E={height:"100%",backgroundColor:"#021B2D",color:"#F0F0F0",display:"flex"},b={width:"60%",display:"flex",infoBox:{padding:20}},v={fontWeight:100,fontFamily:"serif",color:"#C1C1C1",textDecoration:"none",lineHeight:.5,margin:0},x=function(e,t,n){return void 0===n&&(n="#C1C1C1"),i.a.createElement(c.Link,{to:e,style:{textDecoration:"none"}},i.a.createElement("p",{style:Object.assign({},v,{color:n})},t))},w=function(e){var t=e.height;return i.a.createElement("div",{style:{height:t||170,width:"100%"}},i.a.createElement("div",{style:E},i.a.createElement("div",{style:b},i.a.createElement("div",{style:b.infoBox},i.a.createElement("h4",{style:{color:"#eeeeee"}},"Help"),x("#","Purchase"),i.a.createElement("br",null),x("#","Delivery"),i.a.createElement("br",null),x("#","FAQs")),i.a.createElement("div",null),i.a.createElement("div",{style:b.infoBox},i.a.createElement("h4",{style:{color:"#eeeeee"}},"About Us"),x("#","The Company"),i.a.createElement("br",null),x("#","What We Love")))))},k=function(e){var t=e.children,n=e.current;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title,selected:n}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(w,{height:170}))},data:a})};k.propTypes={children:l.a.node.isRequired};t.a=k},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Monami 18"}}}}},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(161),s=n.n(c),u=n(145);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Monami 18",description:"fashion website for those who want to look good without putting a hole in their wallet.",author:"@panzerstadt"}}}}},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n={page:{zIndex:-1,height:"80vh",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:20,padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},dummyContent:{fontSize:12,display:"inline-block",textAlign:"left",lineHeight:2,height:49,verticalAlign:"middle",marginTop:-30}};return r.a.createElement("div",{style:n.page},r.a.createElement("div",{style:{height:150}},r.a.createElement("h1",{style:n.text},"project goals"),r.a.createElement("p",{style:n.dummyContent},"website: ",r.a.createElement("strong",null,'"gib me data i gib you finished webpage"'),r.a.createElement("br",null),'you: "ok. ╮(. ❛ ᴗ ❛.) ╭"',r.a.createElement("br",null),"website: . . .. ...ᕕ( ᐛ )ᕗ",r.a.createElement("br",null),"you: ",r.a.createElement("span",{style:{fontSize:"2em"}},"[")," ʕ •ᴥ•ʔ"," ",r.a.createElement("span",{style:{fontSize:"2em"}},"]"),"╯ʳᵃʷʳʳʳ__ _へ__(‾◡◝ )>")),r.a.createElement("div",null,t))}}}]);
//# sourceMappingURL=component---src-pages-404-js-b4c595fc1f85bfd3ac2d.js.map