(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{105:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(s){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},106:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},107:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),l=n(100),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(22).a,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=u({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),c(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,s=[],i=[s];l>-1;){for(;(o=a[l]++)<r[l];){var c=void 0,u=t[l],y=n[l][o];if("string"==typeof y?(u=l>0?u:["plain"],c=y):(u=m(u,y.type),y.alias&&(u=m(u,y.alias)),c=y.content),"string"==typeof c){var g=c.split(p),h=g.length;s.push({types:u,content:g[0]});for(var f=1;f<h;f++)d(s),i.push(s=[]),s.push({types:u,content:g[f]})}else l++,t.push(u),n.push(c),a.push(0),r.push(c.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return d(s),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=n(105),v=n.n(f),b=n(106),k=n.n(b),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(110),N=n(101),w=function(){var e=Object(N.useThemeConfig)().prism,t=Object(E.a)().isDarkTheme,n=e.theme||j,a=e.darkTheme||n;return t?a:n},O=n(55),x=n.n(O),T=/{([\d,-]+)}/,A=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},C=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,s=e.metastring,c=Object(N.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],d=u[1],m=Object(r.useState)(!1),y=m[0],g=m[1];Object(r.useEffect)((function(){g(!0)}),[]);var f=Object(r.useRef)(null),b=[],j="",E=w(),O=Array.isArray(t)?t.join(""):t;if(s&&T.test(s)){var S=s.match(T)[1];b=k()(S).filter((function(e){return e>0}))}s&&C.test(s)&&(j=s.match(C)[1]);var I=n&&n.replace(/language-/,"");!I&&c.defaultLanguage&&(I=c.defaultLanguage);var P=O.replace(/\n$/,"");if(0===b.length&&void 0!==I){for(var L,B="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(I),R=O.replace(/\n$/,"").split("\n"),z=0;z<R.length;){var _=z+1,W=R[z].match(D);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=_+",";break;case"highlight-start":L=_;break;case"highlight-end":B+=L+"-"+(_-1)+","}R.splice(z,1)}else z+=1}b=k()(B),P=R.join("\n")}var F=function(){v()(P),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(h,Object(a.a)({},i,{key:String(y),theme:E,code:P,language:I}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,i=e.getLineProps,c=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,j&&o.a.createElement("div",{style:r,className:x.a.codeBlockTitle},j),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=j,t))},o.a.createElement("div",{className:x.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))})))})))),o.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(x.a.copyButton),onClick:F},p?"Copied":"Copy")))}))}},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(102),l=n(23),s=n(104),i=n(109),c=(n(107),n(100)),u=n(91),p=n.n(u),d=[{title:"Discriminative Models",content:"Class of AI models used for classification and regression which work to distinguish decision boundaries through observed data. A discriminative model learns conditional probability distribution to predict output from a given input."},{title:"Generative Models",content:"Class of AI models used for generating new data from observed data. Given observable variables and a target variable, generative models learn the joint probability distribution between observable and target variables."},{title:"Reinforcement Learning",content:"Class of AI models concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward."}];t.default=function(){var e=Object(l.default)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(i.a,{permalink:"/",description:"Set up a modern web app by running one command."},r.a.createElement("div",{className:Object(c.a)("hero hero--dark",p.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:Object(c.a)(p.a.heroBannerLogo,"margin-vert--md"),alt:"Create React App logo",src:Object(s.a)("img/logo-dark.svg")}),r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:"subtitle"},"ReproduceAI is an open community for AI engineers around the globe who aim to democratize and cool down AI hypes.",r.a.createElement("br",null),"We focus to help more AI engineers and scientists to understand and reproduce the state of the art AI achievements, and cut down their efforts from months to minutes."),r.a.createElement("br",null),r.a.createElement("div",{className:p.a.getStarted},r.a.createElement(o.a,{className:"button button--outline button--primary button--lg",to:"https://forms.gle/FubPLyT6EUqpV7KcA"},"Get Started")))),r.a.createElement("div",{className:p.a.gettingStartedSection},r.a.createElement("div",{className:"container padding-vert--xl text--left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--4 col--offset-1"},r.a.createElement("h2",null,"Custom Training Services"),r.a.createElement("p",null,"We can provide custom training to learn specific AI models.",r.a.createElement("br",null),"We will find the right experts who can deliver requested training based on our standards.")),r.a.createElement("div",{className:"col col--4 col--offset-1"},r.a.createElement("h2",null,"Reproduce AI Papers"),r.a.createElement("p",null,"Put your request here to reproduce specific AI papers or models.",r.a.createElement("br",null),"We will let you know if the requests are included in our roadmap, if not, we can discuss commercial engagement with ReproduceAI directly"))))),d&&d.length&&r.a.createElement("div",{className:p.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"What we can do?"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},d.map((function(e,t){var n=e.title,a=e.content;return r.a.createElement("div",{key:t,className:Object(c.a)("col col--4",p.a.feature)},r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}))))))}}}]);