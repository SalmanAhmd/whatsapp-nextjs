(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},1817:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(5893),i=n(3946),o=n(3321),a=n(9661),l=n(3918),u=n(7976),c=n(7078),s=n(2761),d=n(3999),f=n(4656),p=n(974),h=n(8059),g=n(1163),m=n(3410);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(){var e=v(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 15px;\n  word-break: break-word;\n  :hover {\n    background-color: #e9e9eb;\n  }\n"]);return w=function(){return e},e}function j(){var e=v(["\n  cursor: pointer;\n  margin: 5px;\n  margin-right: 15px;\n"]);return j=function(){return e},e}var x=function(e){var t,n,i=e.id,o=e.users,a=b((0,p.F_)(f.I),1)[0],l=(0,g.useRouter)(),u=(0,m.Z)(o,a),c=b((0,h.Kx)(f.db.collection("users").where("email","==",u)),1)[0],s=null===c||void 0===c||null===(t=c.docs)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.data();return(0,r.jsxs)(S,{onClick:function(){l.push("/chat/".concat(i))},children:[s?(0,r.jsx)(A,{src:null===s||void 0===s?void 0:s.photoURL}):(0,r.jsx)(A,{children:u[0]}),(0,r.jsx)("p",{children:u})]})},S=l.ZP.div(w()),A=(0,l.ZP)(a.Z)(j());function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function I(){var e=k(["\n  flex: 0.45;\n  border-right: 1px solid whitesmoke;\n  height: 100vh;\n  min-width: 280px;\n  max-width: 350px;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n"]);return I=function(){return e},e}function E(){var e=k(["\n  width: 100%;\n  color: black;\n  &&& {\n    border-top: 1px solid whitesmoke;\n    border-bottom: 1px solid whitesmoke;\n    \n  }\n"]);return E=function(){return e},e}function P(){var e=k(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  border-radius: 2px;\n"]);return P=function(){return e},e}function R(){var e=k(["\n  outline-width: 0;\n  border: none;\n  flex: 1;\n"]);return R=function(){return e},e}function _(){var e=k(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  z-index: 1;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  height: 80px;\n  border-bottom: 1px solid whitesmoke;\n"]);return _=function(){return e},e}function C(){var e=k(["\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return C=function(){return e},e}function L(){var e=k([""]);return L=function(){return e},e}var Z=function(){var e=z((0,p.F_)(f.I),1)[0],t=f.db.collection("chats").where("users","array-contains",e.email),n=z((0,h.Kx)(t),1)[0],o=function(e){return!!(null===n||void 0===n?void 0:n.docs.find((function(t){var n;return(null===(n=t.data().users.find((function(t){return t===e})))||void 0===n?void 0:n.length)>0})))};return(0,r.jsxs)(M,{children:[(0,r.jsxs)(W,{children:[(0,r.jsx)(D,{src:e.photoURL,onClick:function(){return f.I.signOut()}}),(0,r.jsxs)(T,{children:[(0,r.jsx)(i.Z,{children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(u.Z,{})})]})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(U,{placeholder:"Search in chats"})]}),(0,r.jsx)(N,{onClick:function(){var t=prompt("Please enter an email address for the user ypu wish to chat with"),n=o(t);if(t&&d.G(t)&&!n){if(t===e.email)return void alert("Its your email");f.db.collection("chats").add({users:[e.email,t]})}else n?alert("already in use"):alert("wrong email ")},children:"start a new chat"}),null===n||void 0===n?void 0:n.docs.map((function(e){return(0,r.jsx)(x,{id:e.id,users:e.data().users},e.id)}))]})},M=l.ZP.div(I()),N=(0,l.ZP)(o.Z)(E()),q=l.ZP.div(P()),U=l.ZP.input(R()),W=l.ZP.div(_()),D=(0,l.ZP)(a.Z)(C()),T=l.ZP.div(L())},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,u=e.priority,c=void 0!==u&&u,g=e.loading,m=e.lazyRoot,x=void 0===m?null:m,k=e.lazyBoundary,E=void 0===k?"200px":k,P=e.className,R=e.quality,_=e.width,C=e.height,L=e.style,Z=e.objectFit,M=e.objectPosition,N=e.onLoadingComplete,q=(e.onError,e.placeholder),U=void 0===q?"empty":q,W=e.blurDataURL,D=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),T=s.useContext(h.ImageConfigContext),B=s.useMemo((function(){var e=v||T||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[T]),F=D,H=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(H=F.layout),delete F.layout);var V=z;if("loader"in F){if(F.loader){var G=F.loader;V=function(e){e.config;var t=b(e,["config"]);return G(t)}}delete F.loader}var $="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,$=J.src,(!H||"fill"!==H)&&(C=C||J.height,_=_||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:$;var K=O(_),X=O(C),Q=O(R),Y=!c&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);w.has(t)&&(Y=!1);var ee,te=o(s.useState(!1),2),ne=te[0],re=te[1],ie=o(p.useIntersection({rootRef:x,rootMargin:E,disabled:!Y}),3),oe=ie[0],ae=ie[1],le=ie[2],ue=!Y||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:Z,objectPosition:M};0;0;var pe=Object.assign({},L,"raw"===H?{aspectRatio:"".concat(K," / ").concat(X)}:fe),he="blur"!==U||ne?{}:{filter:"blur(20px)",backgroundSize:Z||"cover",backgroundImage:'url("'.concat(W,'")'),backgroundPosition:M||"0% 0%"};if("fill"===H)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var ge=X/K,me=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===H?(ce.display="block",ce.position="relative",de=!0,se.paddingTop=me):"intrinsic"===H?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===H&&(ce.display="inline-block",ce.position="relative",ce.width=K,ce.height=X)}else 0;var ye={src:j,srcSet:void 0,sizes:void 0};ue&&(ye=A({config:B,src:t,unoptimized:l,layout:H,width:K,quality:Q,sizes:n,loader:V}));var be=t;0;var ve,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var xe=(i(ve={},we,ye.srcSet),i(ve,je,ye.sizes),ve),Se=s.default.useLayoutEffect,Ae=s.useRef(N),Oe=s.useRef(t);s.useEffect((function(){Ae.current=N}),[N]),Se((function(){Oe.current!==t&&(le(),Oe.current=t)}),[le,t]);var ze=y({isLazy:Y,imgAttributes:ye,heightInt:X,widthInt:K,qualityInt:Q,layout:H,className:P,imgStyle:pe,blurStyle:he,loading:g,config:B,unoptimized:l,placeholder:U,loader:V,srcString:be,onLoadingCompleteRef:Ae,setBlurComplete:re,setIntersection:oe,isVisible:ue},F);return s.default.createElement(s.default.Fragment,null,"raw"===H?s.default.createElement(I,Object.assign({},ze)):s.default.createElement("span",{style:ce},de?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(I,Object.assign({},ze))),c?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},xe))):null)};var u,c,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(u=n(3121))&&u.__esModule?u:{default:u},f=n(139),p=n(9246),h=n(8730),g=(n(670),n(2700));function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){m(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(E(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,l=e.quality,u=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(r);l)c.push(parseInt(l[2]));if(c.length){var s,d=.01*(s=Math).min.apply(s,a(c));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,u),d=s.widths,f=s.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,i,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,u=e.blurStyle,c=e.isLazy,d=e.placeholder,f=e.loading,p=e.srcString,h=e.config,g=e.unoptimized,m=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,x=e.onError,S=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,style:y({},l,u),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&k(e,p,0,d,v,w)}),[j,p,o,d,v,w]),onLoad:function(e){k(e.currentTarget,p,0,d,v,w)},onError:function(e){"blur"===d&&w(!0),x&&x(e)}})),(c||"blur"===d)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,A({config:h,src:p,unoptimized:g,layout:o,width:r,quality:i,sizes:t.sizes,loader:m}),"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=o.useRef(),d=i(o.useState(!1),2),f=d[0],p=d[1],h=i(o.useState(t?t.current:null),2),g=h[0],m=h[1],y=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=u.get(r):(t=u.get(n),c.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:n}))}),[r,g,n,f]),b=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!l&&!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&m(t.current)}),[t]),[y,f,b]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),i=n(9008),o=(n(5675),n(1817));function a(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Whatsapp 2.0"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(o.Z,{})]})}},3410:function(e,t){"use strict";t.Z=function(e,t){return null===e||void 0===e?void 0:e.filter((function(e){return e!==(null===t||void 0===t?void 0:t.email)}))[0]}},5675:function(e,t,n){n(9749)}},function(e){e.O(0,[992,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);