(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(143),i=a(142),l=a(135),c=a.n(l);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Code of Conduct",keywords:["gatsby","application","react","code","conduct"]}),r.a.createElement("div",{className:c.a.page},r.a.createElement("h1",{className:c.a.header},"Code of Conduct")))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(133),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(136),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},135:function(e,t,a){e.exports={title:"layout-module--title--2pFnw",header:"layout-module--header--7X126",page:"layout-module--page--3OkPY",content:"layout-module--content--2CPz1",scroll:"layout-module--scroll--1EuX7",bounce:"layout-module--bounce--11N2H",logo:"layout-module--logo--79z0h",tutorialLink:"layout-module--tutorialLink--xhxCS",scrollButton:"layout-module--scrollButton--258p2",navbarLinks:"layout-module--navbarLinks--1b0cS",navContainer:"layout-module--navContainer--SEML-",subtitle:"layout-module--subtitle--1LuZm",section1:"layout-module--section1--2abkc",section2:"layout-module--section2--1rkLk",inner:"layout-module--inner--yolte",upcoming:"layout-module--upcoming--hzCtR",footer:"layout-module--footer--Qriki",list:"layout-module--list--1yLp4",icontext:"layout-module--icontext--2kWy0",listBackground:"layout-module--listBackground--jlnUp",conductContainer:"layout-module--conductContainer--1ZjWn"}},136:function(e,t,a){var n;e.exports=(n=a(140))&&n.default||n},139:function(e){e.exports={data:{site:{siteMetadata:{title:"React Robins",menuLinks:[{name:"About",link:"/about"},{name:"FAQ",link:"/faq"},{name:"Resources",link:"/resources"},{name:"Code of Conduct",link:"/code"}]}}}}},140:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(46),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},141:function(e,t,a){},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(148),c=a.n(l),u=a(134);function s(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,i=e.title;return r.a.createElement(u.StaticQuery,{query:d,render:function(e){var l=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=s;var d="1025518380"},143:function(e,t,a){"use strict";var n=a(139),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(134),u=(a(137),a(138),a(135)),s=a.n(u),d=function(e){e.siteTitle;var t=e.menuLinks;return o.a.createElement("nav",{className:s.a.navContainer},o.a.createElement(c.Link,{to:"/"},o.a.createElement("h2",{className:s.a.logo},"< ReactRobins \\>")),o.a.createElement("div",{className:s.a.navbarLinks},t.map(function(e){return o.a.createElement("li",{className:s.a.list,key:e.name},o.a.createElement(c.Link,{to:e.link},e.name))})))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,p=a(145),y=a(144),f=a(146),g=a(147);y.b.add(g.a,f.a,f.b);var k=function(e){e.siteTitle;var t=e.menuLinks;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:s.a.footer},o.a.createElement("ul",{style:{listStyleType:"none"}},t.map(function(e){return o.a.createElement("div",{className:s.a.listBackground},o.a.createElement("li",{key:e.name},o.a.createElement(c.Link,{style:{textDecoration:"none",color:"#684756"},to:e.link},e.name)))})),o.a.createElement("div",null,o.a.createElement("ul",{style:{listStyleType:"none",color:"#684756",fontSize:"18px",float:"right",marginRight:"20px"}},o.a.createElement("li",null,o.a.createElement(p.a,{icon:["fab","twitter"]}),o.a.createElement("span",{className:s.a.icontext},"@ReactRobins")),o.a.createElement("li",null,o.a.createElement(p.a,{icon:["fab","medium"]}),o.a.createElement("span",{className:s.a.icontext},"/ReactRobins")),o.a.createElement("li",null,o.a.createElement(p.a,{icon:"envelope"}),o.a.createElement("span",{className:s.a.icontext},"reactrobins@gmail.com"))))),o.a.createElement("div",{style:{textAlign:"center",height:"30px",paddingTop:"10px",fontSize:"15px",backgroundColor:"#efa973"}},"Made with ",o.a.createElement(p.a,{style:{color:"red"},icon:"heart"})," by ReactRobins"))};k.propTypes={siteTitle:l.a.string,menuLinks:l.a.array},k.defaultProps={siteTitle:""};var E=k,h=(a(141),function(e){var t=e.children;return o.a.createElement(c.StaticQuery,{query:"3436215879",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",marginTop:"55px",color:"white"}},t),o.a.createElement(E,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}))},data:n})});h.propTypes={children:l.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-code-js-e600dac2ae0c549effb7.js.map