(self.webpackChunktydining_com=self.webpackChunktydining_com||[]).push([[351],{8707:function(t,e,n){"use strict";n.d(e,{ZP:function(){return k}});var r=n(8777),o=n(6666),i=n(1461),a=n(7896),c=n(2784),u=n(715),s=n(6378),f=n(6110),l=n(1780),p=n(7810),d=n(4883),h=n(4377);var m=c.createContext(),v=n(253);function y(t){return(0,v.Z)("MuiGrid",t)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],g=(0,n(7053).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),(0,r.Z)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),(0,r.Z)(b.map((function(t){return"grid-xs-".concat(t)}))),(0,r.Z)(b.map((function(t){return"grid-sm-".concat(t)}))),(0,r.Z)(b.map((function(t){return"grid-md-".concat(t)}))),(0,r.Z)(b.map((function(t){return"grid-lg-".concat(t)}))),(0,r.Z)(b.map((function(t){return"grid-xl-".concat(t)}))))),w=n(2322),T=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(t){var e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}function O(t){var e=t.breakpoints,n=t.values,r="";Object.keys(n).forEach((function(t){""===r&&0!==n[t]&&(r=t)}));var o=Object.keys(e).sort((function(t,n){return e[t]-e[n]}));return o.slice(0,o.indexOf(r))}var x=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState,o=n.container,i=n.direction,a=n.item,c=n.spacing,u=n.wrap,s=n.zeroMinWidth,f=n.breakpoints,l=[];o&&(l=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[n["spacing-xs-".concat(String(t))]];var r=[];return e.forEach((function(e){var o=t[e];Number(o)>0&&r.push(n["spacing-".concat(e,"-").concat(String(o))])})),r}(c,f,e));var p=[];return f.forEach((function(t){var r=n[t];r&&p.push(e["grid-".concat(t,"-").concat(String(r))])})),[e.root,o&&e.container,a&&e.item,s&&e.zeroMinWidth].concat((0,r.Z)(l),["row"!==i&&e["direction-xs-".concat(String(i))],"wrap"!==u&&e["wrap-xs-".concat(String(u))]],p)}})((function(t){var e=t.ownerState;return(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(t){var e=t.theme,n=t.ownerState,r=(0,s.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(function(t){var e={flexDirection:t};return 0===t.indexOf("column")&&(e["& > .".concat(g.item)]={maxWidth:"none"}),e}))}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,i=n.rowSpacing,a={};if(r&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof u&&(c=O({breakpoints:e.breakpoints.values,values:u})),a=(0,s.k9)({theme:e},u,(function(t,n){var r,i=e.spacing(t);return"0px"!==i?(0,o.Z)({marginTop:"-".concat(S(i))},"& > .".concat(g.item),{paddingTop:S(i)}):null!=(r=c)&&r.includes(n)?{}:(0,o.Z)({marginTop:0},"& > .".concat(g.item),{paddingTop:0})}))}return a}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,i=n.columnSpacing,a={};if(r&&0!==i){var c,u=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof u&&(c=O({breakpoints:e.breakpoints.values,values:u})),a=(0,s.k9)({theme:e},u,(function(t,n){var r,i=e.spacing(t);return"0px"!==i?(0,o.Z)({width:"calc(100% + ".concat(S(i),")"),marginLeft:"-".concat(S(i))},"& > .".concat(g.item),{paddingLeft:S(i)}):null!=(r=c)&&r.includes(n)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(g.item),{paddingLeft:0})}))}return a}),(function(t){var e,n=t.theme,r=t.ownerState;return n.breakpoints.keys.reduce((function(t,o){var i={};if(r[o]&&(e=r[o]),!e)return t;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,s.P$)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"==typeof c?c[o]:c;if(null==u)return t;var f="".concat(Math.round(e/u*1e8)/1e6,"%"),l={};if(r.container&&r.item&&0!==r.columnSpacing){var p=n.spacing(r.columnSpacing);if("0px"!==p){var d="calc(".concat(f," + ").concat(S(p),")");l={flexBasis:d,maxWidth:d}}}i=(0,a.Z)({flexBasis:f,flexGrow:0,maxWidth:f},l)}return 0===n.breakpoints.values[o]?Object.assign(t,i):t[n.breakpoints.up(o)]=i,t}),{})}));var A=function(t){var e=t.classes,n=t.container,o=t.direction,i=t.item,a=t.spacing,c=t.wrap,u=t.zeroMinWidth,s=t.breakpoints,f=[];n&&(f=function(t,e){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return["spacing-xs-".concat(String(t))];var n=[];return e.forEach((function(e){var r=t[e];if(Number(r)>0){var o="spacing-".concat(e,"-").concat(String(r));n.push(o)}})),n}(a,s));var p=[];s.forEach((function(e){var n=t[e];n&&p.push("grid-".concat(e,"-").concat(String(n)))}));var d={root:["root",n&&"container",i&&"item",u&&"zeroMinWidth"].concat((0,r.Z)(f),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],p)};return(0,l.Z)(d,y,e)},C=c.forwardRef((function(t,e){var n=(0,d.Z)({props:t,name:"MuiGrid"}),r=(0,h.Z)().breakpoints,o=(0,f.Z)(n),s=o.className,l=o.columns,p=o.columnSpacing,v=o.component,y=void 0===v?"div":v,b=o.container,g=void 0!==b&&b,S=o.direction,O=void 0===S?"row":S,C=o.item,k=void 0!==C&&C,E=o.rowSpacing,j=o.spacing,P=void 0===j?0:j,M=o.wrap,L=void 0===M?"wrap":M,Z=o.zeroMinWidth,N=void 0!==Z&&Z,I=(0,i.Z)(o,T),R=E||P,W=p||P,_=c.useContext(m),B=g?l||12:_,z={},D=(0,a.Z)({},I);r.keys.forEach((function(t){null!=I[t]&&(z[t]=I[t],delete D[t])}));var q=(0,a.Z)({},o,{columns:B,container:g,direction:O,item:k,rowSpacing:R,columnSpacing:W,wrap:L,zeroMinWidth:N,spacing:P},z,{breakpoints:r.keys}),H=A(q);return(0,w.jsx)(m.Provider,{value:B,children:(0,w.jsx)(x,(0,a.Z)({ownerState:q,className:(0,u.Z)(H.root,s),as:y,ref:e},D))})})),k=C},308:function(t){"use strict";t.exports=Object.assign},2161:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(f=t.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=t.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(f=t.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!i(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4834:function(t,e,n){"use strict";n.d(e,{q:function(){return mt}});var r,o,i,a,c=n(3980),u=n.n(c),s=n(2773),f=n.n(s),l=n(2161),p=n.n(l),d=n(2784),h=n(308),m=n.n(h),v="bodyAttributes",y="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(t){return g[t]})),"charset"),T="cssText",S="href",O="http-equiv",x="innerHTML",A="itemprop",C="name",k="property",E="rel",j="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",Z="defer",N="encodeSpecialCharacters",I="onChangeClientState",R="titleTemplate",W=Object.keys(M).reduce((function(t,e){return t[M[e]]=e,t}),{}),_=[g.NOSCRIPT,g.SCRIPT,g.STYLE],B="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},q=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},U=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(t){var e=Q(t,g.TITLE),n=Q(t,R);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Q(t,L);return e||r||void 0},K=function(t){return Q(t,I)||function(){}},$=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return H({},t,e)}),{})},V=function(t,e){return e.filter((function(t){return void 0!==t[g.BASE]})).map((function(t){return t[g.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},J=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===E&&"canonical"===t[n].toLowerCase()||u===E&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==x&&c!==T&&c!==A||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},Q=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,p=t.titleAttributes;ut(g.BODY,r),ut(g.HTML,o),ct(l,p);var d={baseTag:st(g.BASE,n),linkTags:st(g.LINK,i),metaTags:st(g.META,a),noscriptTags:st(g.NOSCRIPT,c),scriptTags:st(g.SCRIPT,s),styleTags:st(g.STYLE,f)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),u(t,h,m)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(g.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===x)n.innerHTML=e.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ft=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[M[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case g.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[B]=!0,o=lt(n,r),[d.createElement(g.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ft(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+U(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+U(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case v:case y:return{toComponent:function(){return lt(e)},toString:function(){return ft(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(e).forEach((function(t){var n=M[t]||t;if(n===x||n===T){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),d.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===x||t===T)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+U(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,p=t.titleAttributes;return{base:pt(g.BASE,e,r),bodyAttributes:pt(v,n,r),htmlAttributes:pt(y,o,r),link:pt(g.LINK,i,r),meta:pt(g.META,a,r),noscript:pt(g.NOSCRIPT,c,r),script:pt(g.SCRIPT,u,r),style:pt(g.STYLE,s,r),title:pt(g.TITLE,{title:l,titleAttributes:p},r)}},ht=f()((function(t){return{baseTag:V([S,P],t),bodyAttributes:$(v,t),defer:Q(t,Z),encode:Q(t,N),htmlAttributes:$(y,t),linkTags:J(g.LINK,[E,S],t),metaTags:J(g.META,[C,w,O,k,A],t),noscriptTags:J(g.NOSCRIPT,[x],t),onChangeClientState:K(t),scriptTags:J(g.SCRIPT,[j,x],t),styleTags:J(g.STYLE,[T],t),title:G(t),titleAttributes:$(b,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),mt=(o=ht,a=i=function(t){function e(){return D(this,e),Y(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return H({},r,((e={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case g.TITLE:return H({},o,((e={})[r.type]=a,e.titleAttributes=H({},i),e));case g.BODY:return H({},o,{bodyAttributes:H({},i)});case g.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=H({},e);return Object.keys(t).forEach((function(e){var r;n=H({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[W[n]||n]=t[n],e}),e)}(F(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=F(t,["children"]),r=H({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.createElement(o,r)},q(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);mt.renderStatic=mt.rewind},2773:function(t,e,n){"use strict";var r,o=n(2784),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=t(s.map((function(t){return t.props}))),l.canUseDOM?e(u):n&&(u=n(u))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},1710:function(t,e,n){"use strict";n(2784);var r=n(5454),o=n(1488),i=n(8778);e.Z=function(t){var e=t.children,n=t.align,a=void 0===n?"center":n,c=t.theme,u="light"===(void 0===c?"light":c);return(0,i.tZ)(r.Z,{variant:"h4",align:a,sx:{mb:4,color:u?o._4:o.R2}},e)}},2459:function(t,e,n){"use strict";n(2784);var r=n(2127),o=n(1488),i=n(8778);e.Z=function(t){var e=t.children,n=t.id,a=t.maxWidth,c=void 0===a?"lg":a,u=t.theme,s="light"===(void 0===u?"light":u);return(0,i.tZ)(r.Z,{id:n,maxWidth:!1,sx:{py:9,backgroundColor:s?o.R2:o._4,color:s?o._4:o.R2}},(0,i.tZ)(r.Z,{maxWidth:c},e))}}}]);
//# sourceMappingURL=commons-9ccc8555fe9d9926bfe0.js.map