!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([,function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e,n){var o=n(8),r=n(12);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o=n(7);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(1),r=n(7),i=n(13),c=n(14);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return c(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},u(e)}t.exports=u},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},,,,function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var o=n(7);function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(e,n,c){return r()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},,function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(3),c=n.n(i),u=n(4),a=n.n(u),l=n(1),s=n.n(l),f=n(5),p=n.n(f),d=n(6),h=n.n(d),m=function(t){function e(){var t;r()(this,e);var n=(t=a()(this,s()(e).call(this))).attachShadow({mode:"open"}),o=document.createElement("style");o.innerHTML="\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t";var i=document.createElement("div");return i.innerHTML="\n\t\t\t<h2>This is static element inside shadow DOM.</h2>\n\t\t",n.appendChild(o),n.appendChild(i),t}return p()(e,t),c()(e,[{key:"connectedCallback",value:function(){console.log(this)}}]),e}(h()(HTMLElement)),y=document.createElement("template");y.innerHTML='\n\t<style>\n\t\t:host {\n\t\t\tbackground-color: #f8f61c;\n\t\t\tdisplay: block;\n\t\t\tpadding: 1rem;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t::slotted(p) {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t.svg-component {\n\t\t\tleft: -16px;\n\t\t\tposition: absolute;\n\t\t\ttop: -12px;\n\t\t}\n\t</style>\n\t<slot name="title"></slot>\n\t<slot name="text"></slot>\n\t<svg class="svg-component" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="32" height="23"><path d="M15.713 6.511c-2.41 0-4.376 2.057-4.376 4.591 0 2.527 1.96 4.591 4.376 4.591 2.41 0 4.375-2.057 4.375-4.591 0-2.527-1.966-4.591-4.375-4.591z"/><path d="M15.713 18.358c-3.88 0-7.04-3.253-7.04-7.256s3.16-7.255 7.04-7.255c3.879 0 7.04 3.252 7.04 7.255s-3.161 7.256-7.04 7.256zm16.085-7.961C27.63 3.709 22.015.027 16 .027 9.985.026 4.369 3.708.202 10.396c-.267.43-.267.98 0 1.41C4.37 18.495 9.985 22.178 16 22.178c6.015 0 11.624-3.683 15.798-10.37.267-.432.267-.98 0-1.411z"/></svg>\n';var b=function(t){function e(){var t;return r()(this,e),(t=a()(this,s()(e).call(this))).attachShadow({mode:"open"}),t.shadowRoot.appendChild(y.content.cloneNode(!0)),t}return p()(e,t),c()(e,[{key:"connectedCallback",value:function(){console.log(this)}}]),e}(h()(HTMLElement)),v=function(t){function e(){var t;return r()(this,e),(t=a()(this,s()(e).call(this))).render=function(){if(!document.getElementById("foxland-cover-base")){var e=document.createElement("style");e.id="foxland-cover-base",e.innerHTML="\n\t\t\tfoxland-cover {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.foxland-cover-bg,\n\t\t\t.editor-styles-wrapper .foxland-cover-bg {\n\t\t\t\tbottom: 0;\n\t\t\t\tobject-fit: cover;\n\t\t\t\tposition: absolute;\n\t\t\t\theight: 100%;\n\t\t\t\tleft: 0;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\tz-index: 0;\n\t\t\t}\n\n\t\t\t.centered,\n\t\t\t.editor-styles-wrapper .centered {\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.5);\n\t\t\t\tmargin: auto;\n\t\t\t\tmax-width: 30rem;\n\t\t\t\tpadding: 1.5rem;\n\t\t\t\tposition: relative;\n\t\t\t\ttext-align: center;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t".replace(/\s\s+/g," ").trim(),document.head.appendChild(e)}if(t.i="Cover-".concat([t.centered,t.minheight].join("")),t.dataset.i=t.i,!document.getElementById(t.i)){var n=document.createElement("style");n.id=t.i,n.innerHTML='\n\t\t\t\t[data-i="'.concat(t.i,'"] {\n\t\t\t\t\tmin-height: ').concat(t.minheight,";\n\t\t\t\t}\n\t\t\t").replace(/\s\s+/g," ").trim(),document.head.appendChild(n)}},t}return p()(e,t),c()(e,[{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){console.log("We have ".concat(t," changed to ").concat(n,", old value was ").concat(e)),this.render()}},{key:"centered",get:function(){return this.getAttribute("centered")||"h2"},set:function(t){return this.setAttribute("centered",t)}},{key:"minheight",get:function(){return this.getAttribute("minheight")||"40rem"},set:function(t){return this.setAttribute("minheight",t)}}],[{key:"observedAttributes",get:function(){return["centered","minheight"]}}]),e}(h()(HTMLElement));customElements.define("foxland-static",m),customElements.define("foxland-dynamic",b),customElements.define("foxland-cover",v)}]);