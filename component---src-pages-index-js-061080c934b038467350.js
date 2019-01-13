(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(143),i=a(179),l=a.n(i),c=a(135),s=a.n(c),u=a(142);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react","robins","coding","girls"]}),o.a.createElement("div",{className:s.a.section1,id:"section1"},o.a.createElement("img",{className:s.a.logo,src:l.a,alt:"Logo"}),o.a.createElement("h1",{className:s.a.title},"ReactRobins"),o.a.createElement("p",{className:s.a.subtitle,style:{fontSize:"1em"}},"React Robins aims to create a diverse and inclusive environment for gender minorities in tech to learn React.js."),o.a.createElement("a",{href:"http://google.com",className:s.a.tutorialLink},"Tutorial")),o.a.createElement("div",{className:s.a.upcoming},o.a.createElement("h1",{className:s.a.header,style:{fontSize:"4em"}},"Upcoming Events"),o.a.createElement("div",{className:s.a.upcomingEvents},"No upcoming events just yet!"," ",o.a.createElement("span",{role:"img","aria-label":"sunflower"},"🌻"))))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(133),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(136),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(28);a.d(t,"parsePath",function(){return m.a});var d=o.a.createContext({}),p=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},135:function(e,t,a){e.exports={title:"layout-module--title--2pFnw",header:"layout-module--header--7X126",page:"layout-module--page--3OkPY",content:"layout-module--content--2CPz1",frontContent:"layout-module--frontContent--2ONHr",scroll:"layout-module--scroll--1EuX7",bounce:"layout-module--bounce--11N2H",logo:"layout-module--logo--79z0h",bmItem:"layout-module--bm-item--2fXzA",tutorialLink:"layout-module--tutorialLink--xhxCS",scrollButton:"layout-module--scrollButton--258p2",navbarLinks:"layout-module--navbarLinks--1b0cS",navContainer:"layout-module--navContainer--SEML-",subtitle:"layout-module--subtitle--1LuZm",section1:"layout-module--section1--2abkc",section2:"layout-module--section2--1rkLk",inners:"layout-module--inners--3ukaB",inner:"layout-module--inner--yolte",upcoming:"layout-module--upcoming--hzCtR",footer:"layout-module--footer--Qriki",contactUs:"layout-module--contactUs--2gLmu",contact:"layout-module--contact--3aKGb",contactLinks:"layout-module--contactLinks--3Av7i",pageLinks:"layout-module--pageLinks--2ZQE4",list:"layout-module--list--1yLp4",icontext:"layout-module--icontext--2kWy0",listBackground:"layout-module--listBackground--jlnUp",bmOverlay:"layout-module--bm-overlay--2njBs",conductContainer:"layout-module--conductContainer--1ZjWn"}},136:function(e,t,a){var n;e.exports=(n=a(140))&&n.default||n},139:function(e){e.exports={data:{site:{siteMetadata:{title:"React Robins",menuLinks:[{name:"About",link:"/about"},{name:"FAQ",link:"/faq"},{name:"Resources",link:"/resources"},{name:"Code of Conduct",link:"/code"}]}}}}},140:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(46),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},141:function(e,t,a){},142:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(150),c=a.n(l),s=a(134);function u(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,i=e.title;return o.a.createElement(s.StaticQuery,{query:m,render:function(e){var l=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var m="1025518380"},143:function(e,t,a){"use strict";var n=a(139),o=a(0),r=a.n(o),i=a(4),l=a.n(i),c=a(134),s=(a(137),a(138),a(135)),u=a.n(s),m=a(146),d={bmBurgerButton:{position:"fixed",width:"36px",height:"30px",left:"36px",top:"36px",color:"black"},bmBurgerBars:{background:"#373a47"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:{background:"#795c5f",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em",display:"flex","flex-direction":"column"},bmItem:{display:"inline-block",color:"white","text-decoration":"none",padding:"10px"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},p=function(e){e.siteTitle;var t=e.menuLinks;return r.a.createElement("div",null,r.a.createElement("div",{className:u.a.navContainer},r.a.createElement("div",{className:u.a.navbarLinks},t.map(function(e){return r.a.createElement("li",{className:u.a.list,key:e.name},r.a.createElement(c.Link,{to:e.link},e.name))}))),r.a.createElement(m.slide,{styles:d},r.a.createElement(c.Link,{to:"/"},r.a.createElement("h2",{className:u.a.logo},"< ReactRobins \\>")),t.map(function(e){return r.a.createElement(c.Link,{to:e.link,key:e.name},e.name)})))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var y=p,g=a(147),f=a(145),b=a(148),k=a(149);f.b.add(k.a,b.a,b.b);var v=function(e){e.siteTitle;var t=e.menuLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.footer},r.a.createElement("div",{className:u.a.pageLinks},t.map(function(e){return r.a.createElement("div",{className:u.a.listBackground},r.a.createElement("p",{key:e.name},r.a.createElement(c.Link,{style:{textDecoration:"none",color:"#684756"},to:e.link},e.name)))})),r.a.createElement("div",{className:u.a.contactUs},r.a.createElement("div",{className:u.a.contact},"Contact Us:"),r.a.createElement("div",{className:u.a.contactLinks},r.a.createElement("div",null,r.a.createElement(g.a,{icon:["fab","twitter"]}),r.a.createElement("span",{className:u.a.icontext},"@ReactRobins")),r.a.createElement("div",null,r.a.createElement(g.a,{icon:["fab","medium"]}),r.a.createElement("span",{className:u.a.icontext},"/ReactRobins")),r.a.createElement("div",null,r.a.createElement(g.a,{icon:"envelope"}),r.a.createElement("span",{className:u.a.icontext},"reactrobins@gmail.com"))))),r.a.createElement("div",{style:{textAlign:"center",height:"30px",paddingTop:"10px",fontSize:"15px",backgroundColor:"#efa973"}},"Made with ",r.a.createElement(g.a,{style:{color:"red"},icon:"heart"})," by ReactRobins"))};v.propTypes={siteTitle:l.a.string,menuLinks:l.a.array},v.defaultProps={siteTitle:""};var E=v,h=(a(141),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"3436215879",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{color:"white"}},t),r.a.createElement(E,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}))},data:n})});h.propTypes={children:l.a.node.isRequired};t.a=h},179:function(e,t,a){e.exports=a.p+"static/robin-e4455e4b8ed4e892f49b65b488f660f3.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-061080c934b038467350.js.map