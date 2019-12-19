(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e8b682e","chunk-4673695f"],{"20f6":function(t,e,i){},3219:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{counter:20,rules:t.rules.name,label:"名称",required:""},model:{value:t.apiData.name,callback:function(e){t.$set(t.apiData,"name",e)},expression:"apiData.name"}}),i("v-text-field",{attrs:{counter:20,rules:t.rules.title,label:"标题",required:""},model:{value:t.apiData.title,callback:function(e){t.$set(t.apiData,"title",e)},expression:"apiData.title"}}),i("v-text-field",{attrs:{counter:20,rules:t.rules.uri,label:"URI",required:""},model:{value:t.apiData.uri,callback:function(e){t.$set(t.apiData,"uri",e)},expression:"apiData.uri"}}),i("v-select",{attrs:{items:t.methods,rules:t.rules.method,label:"Method",required:""},model:{value:t.apiData.method,callback:function(e){t.$set(t.apiData,"method",e)},expression:"apiData.method"}}),i("v-select",{attrs:{items:t.categories,"item-text":"title","item-value":"_id",loading:t.categoryLoading,label:"分组",required:""},model:{value:t.apiData.category_id,callback:function(e){t.$set(t.apiData,"category_id",e)},expression:"apiData.category_id"}}),i("v-checkbox",{attrs:{label:"Authentication 认证"},model:{value:t.apiData.authentication,callback:function(e){t.$set(t.apiData,"authentication",e)},expression:"apiData.authentication"}}),i("v-checkbox",{attrs:{label:"Authorization 授权"},model:{value:t.apiData.authorization,callback:function(e){t.$set(t.apiData,"authorization",e)},expression:"apiData.authorization"}}),i("v-btn",{staticClass:"mr-5"},[t._v("取消并返回")]),i("v-btn",{attrs:{color:"primary"},on:{click:t.validate}},[t._v(" 提交 ")])],1)],1)},n=[],r=(i("99af"),i("1a72")),o={data:function(){return{apiData:{name:"",title:"",method:"get",authentication:!0,authorization:!0,category_id:null},rules:{name:[function(t){return!!t||"必须填写名称"},function(t){return t&&t.length<=20||"不得大于20个字符"}],title:[function(t){return!!t||"必须填写标题"},function(t){return t&&t.length<=20||"不得大于20个字符"}],uri:[function(t){return!!t||"必须填写URI"},function(t){return t&&t.length<=20||"不得大于20个字符"}],method:[function(t){return!!t||"必须选择"}]},valid:!0,methods:["get","post","put","delete","patch"],categories:[{_id:null,title:"不分组"}],categoryLoading:!1}},mounted:function(){var t=this;this.categoryLoading=!0,Object(r["e"])().then((function(e){t.categoryLoading=!1,t.categories=t.categories.concat(e.data.categories)}))},methods:{validate:function(){this.$refs.form.validate()&&(console.log(this.apiData),Object(r["a"])(this.apiData).then((function(t){console.log(t.data)})))}}},s=o,c=i("2877"),u=i("6544"),l=i.n(u),d=i("8336"),h=i("ac7c"),p=i("a523"),f=i("4bd4"),v=i("b974"),b=i("8654"),m=Object(c["a"])(s,a,n,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:d["a"],VCheckbox:h["a"],VContainer:p["a"],VForm:f["a"],VSelect:v["a"],VTextField:b["a"]})},"4b85":function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("7db0"),i("4160"),i("caad"),i("e439"),i("dbb4"),i("b64b"),i("07ac"),i("2532"),i("159b");var a=i("2fa7"),n=i("58df"),r=i("7e2b"),o=i("3206");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=Object(n["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"6ca7":function(t,e,i){},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85"),i("a15b"),i("498a");var a=i("2b0e");function n(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,n=i.data,r=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(n.staticClass+=" ".concat(s.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,r)}})}var r=i("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,n=e.data,o=e.children,s=n.attrs;return s&&(n.attrs={},i=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),o)}})},ac7c:function(t,e,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("0d03"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("25f0"),i("159b");var a=i("2fa7"),n=(i("6ca7"),i("ec29"),i("9d26")),r=i("c37a"),o=i("fe09");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return c({},r["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",c({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},d9f7:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("a4d3"),i("99af"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("498a"),i("159b");var a=i("2fa7");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */function o(){var t,e,i={},a=arguments.length;while(a--)for(var n=0,o=Object.keys(arguments[a]);n<o.length;n++)switch(t=o[n],t){case"class":case"style":case"directives":Array.isArray(i[t])||(i[t]=[]),i[t]=i[t].concat(arguments[a][t]);break;case"staticClass":if(!arguments[a][t])break;void 0===i[t]&&(i[t]=""),i[t]&&(i[t]+=" "),i[t]+=arguments[a][t].trim();break;case"on":case"nativeOn":i[t]||(i[t]={});for(var s=i[t],c=0,u=Object.keys(arguments[a][t]||{});c<u.length;c++)e=u[c],s[e]?s[e]=Array().concat(s[e],arguments[a][t][e]):s[e]=arguments[a][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":i[t]||(i[t]={}),i[t]=r({},arguments[a][t],{},i[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:i[t]||(i[t]=arguments[a][t])}return i}},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("4de4"),i("45fc"),i("0d03"),i("d3b7"),i("25f0");var a=i("c37a"),n=i("5607"),r=i("2b0e"),o=r["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),s=i("8547"),c=i("58df");e["a"]=Object(c["a"])(a["a"],o,s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-7e8b682e.41685cf9.js.map