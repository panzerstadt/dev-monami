(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(145),o=a(149),s=a(156),l=a(152);t.default=function(){return r.a.createElement(o.a,{current:"Women"},r.a.createElement(l.a,{title:"Women",keywords:["fashion","summer","winter","autumn","spring","trendy"]}),r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:600}},r.a.createElement("h1",null,"womens"),r.a.createElement("div",null,r.a.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",r.a.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),r.a.createElement("blockquote",null,r.a.createElement("p",null,"There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck."," ",r.a.createElement("em",null,"The particular thing you do is luck, but that you do something is not.")))),r.a.createElement("p",null,"Posted April 09, 2011")),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(s.a,null)),r.a.createElement(i.Link,{to:"/404"},"see error page"))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(146),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(148),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(154),r=a.n(n),i=a(155),o=a.n(i),s=new r.a(o.a),l=(s.rhythm,s.scale)},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(145),c=(a(32),a(147)),d={fontWeight:100,margin:0,fontFamily:"serif",color:"#877A5F",textDecoration:"none"},u={width:"100%",padding:"5px 0 5px 0",backgroundColor:"#F0F0F0",display:"flex",justifyContent:"space-evenly",alignContent:"center"},f=function(e){var t=e.selected,a=[{url:"/women",label:"Women"},{url:"/men",label:"Men"},{url:"/accessories",label:"Accessories"},{url:"/occasions",label:"Occasions"},{url:"/about",label:"About Us"},{url:"/contact",label:"Contact"}];return a=a.map(function(e,a){return function(e,t,a,n){return i.a.createElement(l.Link,{key:e,to:t,style:{textDecoration:"none"}},i.a.createElement("p",{style:Object.assign({},d,{color:n?"#F0B67F":"#877A5F"})},a))}(a,e.url,e.label,e.label===t)}),i.a.createElement("div",{style:u},a)},p={textAlign:"center",width:"100%",paddingBottom:15},h=Object.assign({},Object(c.a)(1.5),{color:"#BDA989",textDecoration:"none",margin:0}),m=function(){return i.a.createElement("div",{style:p},i.a.createElement(l.Link,{to:"/",style:{textDecoration:"none"}},i.a.createElement("h1",{style:h},"Monami 18")))},g={height:"100%",backgroundColor:"#021B2D",color:"#1E2D24",display:"flex",flexDirection:"column",justifyContent:"flex-end"},y=function(e){var t=e.selected;return i.a.createElement("div",{style:{height:170}},i.a.createElement("div",{style:g},i.a.createElement(m,null),i.a.createElement(f,{selected:t})))},b={height:"100%",backgroundColor:"#021B2D",color:"#F0F0F0",display:"flex"},v={width:"60%",display:"flex",infoBox:{padding:20}},E={fontWeight:100,fontFamily:"serif",color:"#C1C1C1",textDecoration:"none",lineHeight:.5,margin:0},w=function(e,t,a){return void 0===a&&(a="#C1C1C1"),i.a.createElement(l.Link,{to:e,style:{textDecoration:"none"}},i.a.createElement("p",{style:Object.assign({},E,{color:a})},t))},S=function(e){var t=e.height;return i.a.createElement("div",{style:{height:t||170,width:"100%"}},i.a.createElement("div",{style:b},i.a.createElement("div",{style:v},i.a.createElement("div",{style:v.infoBox},i.a.createElement("h4",{style:{color:"#eeeeee"}},"Help"),w("#","Purchase"),i.a.createElement("br",null),w("#","Delivery"),i.a.createElement("br",null),w("#","FAQs")),i.a.createElement("div",null),i.a.createElement("div",{style:v.infoBox},i.a.createElement("h4",{style:{color:"#eeeeee"}},"About Us"),w("#","The Company"),i.a.createElement("br",null),w("#","What We Love")))))},x=function(e){var t=e.children,a=e.current;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{siteTitle:e.site.siteMetadata.title,selected:a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(S,{height:170}))},data:n})};x.propTypes={children:s.a.node.isRequired};t.a=x},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Monami 18"}}}}},151:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(161),c=a.n(l),d=a(145);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Monami 18",description:"fashion website for those who want to look good without putting a hole in their wallet.",author:"@panzerstadt"}}}}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(145),s=a(158),l=a.n(s);t.a=function(){return i.a.createElement(o.StaticQuery,{query:"2011440971",render:function(e){return i.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:n})}},157:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png",srcSet:"/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/0552a/gatsby-astronaut.png 75w,\n/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/fc3be/gatsby-astronaut.png 150w,\n/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png 300w,\n/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/24f49/gatsby-astronaut.png 450w,\n/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/5497d/gatsby-astronaut.png 600w,\n/dev-monami/static/6d91c86c0fde632ba4cd01062fd9ccfa/483e1/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},158:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(51)),s=n(a(159)),l=n(a(160)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,E="boolean"==typeof b?"lightgray":b,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var R=h;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&c.default.createElement(y,(0,l.default)({src:R.base64},x)),R.tracedSVG&&c.default.createElement(y,(0,l.default)({src:R.tracedSVG},x)),E&&c.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(m){var A=m,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},i);return"inherit"===i.display&&delete L.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},A.base64&&c.default.createElement(y,(0,l.default)({src:A.base64},x)),A.tracedSVG&&c.default.createElement(y,(0,l.default)({src:A.tracedSVG},x)),E&&c.default.createElement(v,{title:t,style:{backgroundColor:E,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),c.default.createElement(y,{alt:a,title:t,width:A.width,height:A.height,src:A.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-women-js-0cc950acf0468643c70d.js.map