_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"default",(function(){return S}));var s=n("q1tI"),l=n.n(s);n("6Fm8");function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=n("aFzQ");function h(t){localStorage.setItem("inBag",JSON.stringify(t))}var v=new function t(){var e=this;o(this,t),y(this,"items",[]),y(this,"addItem",(function(t){var n=e.items.find((function(e){return e.name===t.name}));n?n.quantity++:(t.quantity=1,e.items=[].concat(m(e.items),[t])),h(e.items)})),y(this,"removeItem",(function(t){e.items=e.items.filter((function(e){return e.name!==t})),h(e.items)})),y(this,"changeQuantity",(function(t,n){e.items.find((function(e){return e.name===t})).quantity=n,h(e.items)})),y(this,"pullItems",(function(t){e.items=t})),this.items=[],Object(d.e)(this,{items:d.f,addItem:d.b,removeItem:d.b,changeQuantity:d.b,pullItems:d.b})},b=n("YFqc"),g=n.n(b),w=l.a.createElement;function O(){return w(l.a.Fragment,null,w(g.a,{href:"/"},w("a",null,"Home")),w(g.a,{href:"/drinks"},w("a",null,"Drinks")),w(g.a,{href:"/food"},w("a",null,"Food")),w("div",{className:"right-menu"},w(g.a,{href:"/stores"},w("a",null,"Find a store")),w(g.a,{href:"/bag"},w("a",null,"Bag"))))}var _=l.a.createElement;function E(){var t=Object(s.useState)(!1);t[0],t[1];return _("nav",null,_("div",{className:"mobile"},_("div",{className:"container"},_("div",{className:"menu-bars"},_("div",{className:"top bar"}),_("div",{className:"middle bar"}),_("div",{className:"bottom bar"})))),_("div",{className:"desktop"},_("div",{className:"container"},_(O,null))))}var j=l.a.createElement;function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var S=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(f,t);var e,n,u,c=N(f);function f(){return o(this,f),c.apply(this,arguments)}return e=f,(n=[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("inBag"));v.pullItems(t)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return j(l.a.Fragment,null,j(E,null),j(e,r({},n,{bag:v})))}}])&&a(e.prototype,n),u&&a(e,u),f}(l.a.Component)},"6Fm8":function(t,e,n){},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("zoAU"),o=n("7KCV");e.__esModule=!0,e.default=void 0;var a,i=o(n("q1tI")),u=n("elyg"),c=n("nOHt"),f=new Map,s=window.IntersectionObserver,l={};var p=function(t,e){var n=a||(s?a=new s((function(t){t.forEach((function(t){if(f.has(t.target)){var e=f.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(t.target),f.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),f.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}f.delete(t)}):function(){}};function m(t,e,n,r){(0,u.isLocalURL)(e)&&(t.prefetch(e,n,r).catch((function(t){0})),l[e+"%"+n]=!0)}var y=function(t){var e=!1!==t.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],f=o[1],y=(0,c.useRouter)(),d=y&&y.pathname||"/",h=i.default.useMemo((function(){var e=(0,u.resolveHref)(d,t.href,!0),n=r(e,2),o=n[0],a=n[1];return{href:o,as:t.as?(0,u.resolveHref)(d,t.as):a||o}}),[d,t.href,t.as]),v=h.href,b=h.as;i.default.useEffect((function(){if(e&&s&&a&&a.tagName&&(0,u.isLocalURL)(v)&&!l[v+"%"+b])return p(a,(function(){m(y,v,b)}))}),[e,a,v,b,y]);var g=t.children,w=t.replace,O=t.shallow,_=t.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var E=i.Children.only(g),j={ref:function(t){t&&f(t),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(t):"object"===typeof E.ref&&(E.ref.current=t))},onClick:function(t){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,a,i){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,u.isLocalURL)(n))&&(t.preventDefault(),null==i&&(i=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:a}).then((function(t){t&&i&&(window.scrollTo(0,0),document.body.focus())})))}(t,y,v,b,w,O,_)}};return e&&(j.onMouseEnter=function(t){(0,u.isLocalURL)(v)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(t),m(y,v,b,{priority:!0}))}),(t.passHref||"a"===E.type&&!("href"in E.props))&&(j.href=(0,u.addBasePath)((0,u.addLocale)(b,y&&y.locale,y&&y.defaultLocale))),i.default.cloneElement(E,j)};e.default=y},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[[0,0,1,2,4]]]);