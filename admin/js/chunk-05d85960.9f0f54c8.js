(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05d85960"],{"20f6":function(t,e,i){},"24b2":function(t,e,i){"use strict";i("a9e3");var s=i("80d2"),r=i("2b0e");e["a"]=r["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["f"])(this.height),i=Object(s["f"])(this.minHeight),r=Object(s["f"])(this.minWidth),n=Object(s["f"])(this.maxHeight),a=Object(s["f"])(this.maxWidth),o=Object(s["f"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),n&&(t.maxHeight=n),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},"36a7":function(t,e,i){},"4b85":function(t,e,i){},"58df":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("2b0e");function r(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return s["a"].extend({mixins:e})}},6544:function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"===typeof t.exports&&(i.components=t.exports.options.components),i.components=i.components||{},e)i.components[s]=i.components[s]||e[s]}},"8efc":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85");var s=i("e8f2"),r=i("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,s=e.props,n=e.data,a=e.children,o=n.attrs;return o&&(n.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(i||[])}),a)}})},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc"),i("7db0");var s=i("bf2d");function r(t,e){var i=e.modifiers||{},r=e.value,a="object"===Object(s["a"])(r),o=a?r.handler:r,c=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var r=Boolean(e.find((function(t){return t.isIntersecting})));o(e,s,r)}t._observe.init&&i.once?n(t):t._observe.init=!0}}),r.options||{});t._observe={init:!1,observer:c},c.observe(t)}function n(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var a={inserted:r,unbind:n},o=a,c=(i("36a7"),i("24b2")),l=i("58df"),h=Object(l["a"])(c["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),u=h,d=i("d9bd");e["a"]=u.extend({name:"v-img",directives:{intersect:o},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect:function(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!this.hasIntersect||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(d["b"])("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var r=t.naturalHeight,n=t.naturalWidth;r||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/r):null!=i&&setTimeout(s,i)};s()},genContent:function(){var t=u.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=u.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{"text-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),s("v-flex",{attrs:{"mb-4":""}},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),s("br"),t._v("please join our online "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),s("v-flex",{attrs:{"mb-5":"",xs12:""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},a=[],o={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},c=o,l=i("2877"),h=i("6544"),u=i.n(h),d=i("a523"),f=(i("20f6"),i("e8f2")),m=Object(f["a"])("flex"),p=i("adda"),g=Object(f["a"])("layout"),v=Object(l["a"])(c,n,a,!1,null,null,null),b=v.exports;u()(v,{VContainer:d["a"],VFlex:m,VImg:p["a"],VLayout:g});var y={name:"home",components:{HelloWorld:b}},S=y,_=Object(l["a"])(S,s,r,!1,null,null,null);e["default"]=_.exports},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d9f7:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("a4d3"),i("99af"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("498a"),i("159b");var s=i("2fa7");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */function a(){var t,e,i={},s=arguments.length;while(s--)for(var r=0,a=Object.keys(arguments[s]);r<a.length;r++)switch(t=a[r],t){case"class":case"style":case"directives":Array.isArray(i[t])||(i[t]=[]),i[t]=i[t].concat(arguments[s][t]);break;case"staticClass":if(!arguments[s][t])break;void 0===i[t]&&(i[t]=""),i[t]&&(i[t]+=" "),i[t]+=arguments[s][t].trim();break;case"on":case"nativeOn":i[t]||(i[t]={});for(var o=i[t],c=0,l=Object.keys(arguments[s][t]||{});c<l.length;c++)e=l[c],o[e]?o[e]=Array().concat(o[e],arguments[s][t][e]):o[e]=arguments[s][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":i[t]||(i[t]={}),i[t]=n({},arguments[s][t],{},i[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:i[t]||(i[t]=arguments[s][t])}return i}},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("99af"),i("4de4"),i("a15b"),i("b64b"),i("2ca0"),i("498a");var s=i("2b0e");function r(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var s=i.props,r=i.data,n=i.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var a=r.attrs;if(a){r.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,n)}})}}}]);
//# sourceMappingURL=chunk-05d85960.9f0f54c8.js.map