(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},106:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},107:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(100),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(22).a,theme:s};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=m({},a,{backgroundColor:null}),r};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=m({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?m({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=m({},h(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?m({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),i(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,m=t[o],g=a[o][l];if("string"==typeof g?(m=o>0?m:["plain"],i=g):(m=d(m,g.type),g.alias&&(m=d(m,g.alias)),i=g.content),"string"==typeof i){var h=i.split(u),y=h.length;s.push({types:m,content:h[0]});for(var v=1;v<y;v++)p(s),c.push(s=[]),s.push({types:m,content:h[v]})}else o++,t.push(m),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return p(s),c}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=a(105),f=a.n(v),b=a(106),k=a.n(b),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=a(110),j=a(101),O=function(){var e=Object(j.useThemeConfig)().prism,t=Object(N.a)().isDarkTheme,a=e.theme||E,n=e.darkTheme||a;return t?n:a},_=a(55),x=a.n(_),T=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},P=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,s=e.metastring,i=Object(j.useThemeConfig)().prism,m=Object(r.useState)(!1),u=m[0],p=m[1],d=Object(r.useState)(!1),g=d[0],h=d[1];Object(r.useEffect)((function(){h(!0)}),[]);var v=Object(r.useRef)(null),b=[],E="",N=O(),_=Array.isArray(t)?t.join(""):t;if(s&&T.test(s)){var C=s.match(T)[1];b=k()(C).filter((function(e){return e>0}))}s&&P.test(s)&&(E=s.match(P)[1]);var L=a&&a.replace(/language-/,"");!L&&i.defaultLanguage&&(L=i.defaultLanguage);var B=_.replace(/\n$/,"");if(0===b.length&&void 0!==L){for(var D,I="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(L),A=_.replace(/\n$/,"").split("\n"),R=0;R<A.length;){var F=R+1,z=A[R].match(S);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=F+",";break;case"highlight-start":D=F;break;case"highlight-end":I+=D+"-"+(F-1)+","}A.splice(R,1)}else R+=1}b=k()(I),B=A.join("\n")}var M=function(){f()(B),p(!0),setTimeout((function(){return p(!1)}),2e3)};return l.a.createElement(y,Object(n.a)({},c,{key:String(g),theme:N,code:B,language:L}),(function(e){var t,a=e.className,r=e.style,s=e.tokens,c=e.getLineProps,i=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,E&&l.a.createElement("div",{style:r,className:x.a.codeBlockTitle},E),l.a.createElement("div",{className:x.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(a,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=E,t))},l.a.createElement("div",{className:x.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return b.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},i({token:e,key:t})))})))})))),l.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(x.a.copyButton),onClick:M},u?"Copied":"Copy")))}))}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(100),o=a(102),s=a(56),c=a.n(s);function i(e){var t=e.sidebar;return 0===t.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:c.a.sidebarItemList},t.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},112:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(102),s=a(107),c=a(7),i=a(100),m=a(101),u=(a(57),a(58)),p=a.n(u),d=function(e){return function(t){var a,n=t.id,r=Object(c.a)(t,["id"]),o=Object(m.useThemeConfig)().navbar.hideOnScroll;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.a)("anchor",(a={},a[p.a.enhancedAnchor]=!o,a)),id:n}),r.children,l.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,r)}},g=a(59),h=a.n(g),y={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?l.a.createElement(s.a,e):l.a.createElement("code",e):t},a:function(e){return l.a.createElement(o.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:h.a.mdxCodeBlock},e))},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=y},115:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(100),o=a(103),s=a(24),c=a(102),i=a(112),m=a(104),u=a(60),p=a.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,u,g,h=e.children,y=e.frontMatter,v=e.metadata,f=e.truncated,b=e.isBlogPostPage,k=void 0!==b&&b,E=v.date,N=v.permalink,j=v.tags,O=v.readingTime,_=y.author,x=y.title,T=y.image,w=y.keywords,P=y.author_url||y.authorURL,C=y.author_title||y.authorTitle,L=y.author_image_url||y.authorImageURL,B=Object(m.a)(T,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,w&&w.length&&r.a.createElement("meta",{name:"keywords",content:w.join(",")}),T&&r.a.createElement("meta",{property:"og:image",content:B}),T&&r.a.createElement("meta",{name:"twitter:image",content:B}),T&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x})),r.a.createElement("article",{className:k?void 0:"margin-bottom--xl"},(t=k?"h1":"h2",a=E.substring(0,10).split("-"),n=a[0],u=d[parseInt(a[1],10)-1],g=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},k?x:r.a.createElement(c.a,{to:N},x)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:p.a.blogPostDate},u," ",g,", ",n," ",O&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(O)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},L&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:L,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},C)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},h)),(j.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),j.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:v.permalink,"aria-label":"Read more about "+x},r.a.createElement("strong",null,"Read More"))))))}},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a(109),s=a(115),c=a(102);var i=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(c.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},m=a(111);t.default=function(e){var t=e.metadata,a=e.items,n=e.sidebar,c=Object(l.default)().siteConfig.title,u=t.blogDescription,p=t.blogTitle,d="/"===t.permalink?c:p;return r.a.createElement(o.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},a.map((function(e){var t=e.content;return r.a.createElement(s.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.a.createElement(t,null))})),r.a.createElement(i,{metadata:t})))))}}}]);